/*eslint no-unused-vars: ["warn", { "varsIgnorePattern": "^_" }]*/

import React, { useState } from "react"
import { Choice }                   from '../Choice.js'
import { ChoiceTextSearchable }     from '../ChoiceTextSearchable.js'

import { fetchLookupData }          from './lookupUtil.js'
import { isFunction }               from './isFunction.js'
import { label2value, value2label } from './label2value.js'
// import { isPromise } from './isPromise.js'

// ---------------------------------------------------------------------------------------------------------------------
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

// ---------------------------------------------------------------------------------------------------------------------
function isObject(objValue) {
  return objValue && typeof objValue === 'object' && objValue.constructor === Object;
}

// ---------------------------------------------------------------------------------------------------------------------
function lookupDisplayableValue(props, pairList) {
  let { name, value, transformFn } = props
  let dispVal = value
  let isSelectable = true

  if (pairList) {
    const idxSelected = pairList.findIndex((f) => f.value == value)
    if (idxSelected >= 0) {
      return [true, pairList[idxSelected]]    // setting a {value, label} pair  used by react-select
    } else {
      if (value && value != "") {
        isSelectable = false // not a value listed in the list of [{value, label},{value, label},...]
        console.log('   name:', name, 'value:', value, 'is not found in selection list:', pairList);
      }
    }
  }

  // if (isPromise(transformFn)) {   TODO someday, support functions that are promises

  if (transformFn) {
      dispVal = transformFn(name, value)     // setting a string
  } else {
      dispVal = value                        // no way to transform ID into a displable
  }

  if (!dispVal || (isObject(dispVal) && isEmpty(dispVal))) {
    dispVal = ''    // react does not like null values, or js empty objects
  }

  return [isSelectable, dispVal] // false if not a value listed in the choice options
}

// -----------------------------------------------------
const getChoices = (lookup, options, cb) => {
  let opt = []

  if (lookup) {

    opt = fetchLookupData(lookup, cb) //   set choices when lookup changes
    if (opt == null) {
      console.log(`   lookup: ${lookup} is null.`);
      opt = []
    } else {
      if (opt.length === 0) {
        console.log(`   lookup: ${lookup} is empty.`);
      }
    }

  } else {
    opt = isFunction(options) ? options() : options
  }

  if (Array.isArray(opt) && typeof opt[0] == "string") {
    opt = opt.map((s) => ({ value: s, label: s }))
  }

  return opt
}

// ---------------------------------------------------------------------------------------------------------------------
export function LocalChoice(props) {

      // the cb() is for when the lookup changes -- ALSO when a lookup alias definition changes
      const cb = () => {
          const opt = getChoices(props.lookup, props.options, cb)

          // console.log('   LocalChoice options changed --- name:', props.name, 'lookup:', props.lookup, 'opt:', opt)
          setChoicesLocal(opt)
      }

      const [choicesLocal, setChoicesLocal] = useState( getChoices(props.lookup, props.options, cb) )

      // eslint-disable-next-line no-unused-vars
      const { lookup, options, ...whatsLeft } = props
      // options: [ {value: label:}, {value: label:}, ]

      if (!whatsLeft.required) {
        whatsLeft.required = false // default if missing
      }

      if (!whatsLeft.placeholder) {
        whatsLeft.placeholder = " " // default if missing
      }

      if (!whatsLeft.value) {
        whatsLeft.value = "" // default if missing, react-choice does not like null
      }


      /*
      is this necesary ???

      useEffect(() => {
        const opt = getChoices(props.lookup, props.options, cb)
        // console.log('   LocalChoice useEffect[props.lookup, props.options] name:', props.name, 'opt:', opt);
        setChoicesLocal(opt)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [props.lookup, props.options])
      */

  // -----------------------------------------------------
  const onChange = (e) => {
    if (e.target) {
      const val = label2value(choicesLocal, e.target.value)
      if (val) {              // if not an exact match dont propigate
        e.target.value = val
        props.onChange(e)
      }
    }

  }

      // remove  form-control from className  React-Select already has a box
      let { className } = whatsLeft
      className = className.replace("form-control ", "")

      const propsPassed = {
        name: whatsLeft.name,
        value: whatsLeft.value,
        transformFn: whatsLeft.transformFn,
      }

      // console.log('  propsPassed:', propsPassed)
      const [selectable, displayableValue]  = lookupDisplayableValue(propsPassed, choicesLocal)

      // eslint-disable-next-line no-unused-vars
      const {transformFn, ...otherProps} = whatsLeft   // lower level components know not of transformFn()
      const opt = choicesLocal?.map((i) => i.label)

      // console.log(`LocalChoice name: ${whatsLeft.name} opt[${opt.length}] value: ${whatsLeft.value}`);

      if (!selectable) {
        console.log(`   ${props.name} not selectable, lookup ${props.lookup} does not contain  ${whatsLeft.value} => ${displayableValue}`);
        return <span>{displayableValue}</span>
      }

      if (!choicesLocal) {
        const msg = `${props.name} has null choices`
        console.log(`   <span>${msg}</span>`);
        return <span>{msg}</span>
      }

      if (choicesLocal.length == 0) {
        // const msg = `${props.name} has [] choices`
        //  console.log(`   ${msg}`);
        return <span></span>               // it is ok, sometime the lookup is an alias and empty list to disable this field
      }

      if (choicesLocal?.length < 50) {
        return (
          <Choice
            {...otherProps}
            className={className}
            value={value2label(choicesLocal, whatsLeft.value)}
            list={opt}
            onChange={onChange}
          />
        )

      } else {
        return (
          <ChoiceTextSearchable
            {...otherProps}
            className={className}
            value={value2label(choicesLocal, whatsLeft.value)}
            choices={opt}
            onChange={onChange}
          />
        )

      }
}


/*
import Select from "react-select"

// -----------------------------------------------------
  const onChangeLocal = (what, how) => {
    if (how.action === "select-option") {
      const e = { target: { name: how.name, value: what.value } } // not label
      console.log(
        `LocalChoice -> onChangeLocal()  ${what.value} -> [${how.name}]`
      )
      props.onChange(e) // change from react-select
    } else {
      console.log("missed   LocalChoice() -> onChange (", what, how, ")")
    }
  }

          <Select
            className={className}
            classNamePrefix="select"
            defaultValue={displayableValue}
            isDisabled={false}
            isLoading={false}
            isClearable={true}
            isRtl={false}
            isSearchable={true}
            name={whatsLeft.name}
            options={choicesLocal}
            onChange={onChangeLocal}
          />
*/
