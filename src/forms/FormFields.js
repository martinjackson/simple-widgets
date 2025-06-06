
// cSpell:ignore ints

import React, {useState, useEffect} from 'react'

import { applyOptions, fieldGeneratorLookup, getAppSpecificInfo, dataLog } from '../index.js'

// -------------------------------------------------------------------------------------------------------------------------
const labelWrap = (f, idx, children) => {

    const ifRequired = (f.required) ? <span className="required">*</span> : null

    // fType is no longer passed as 4th argument (f, idx, children, fType)
    // don't <label for="form name" Chrome complains there is no field with that name
    // const name = (fType === 'form' || f.type === 'formTable') ? null : f.name

    // return <label htmlFor={name} key={idx} className="form-group"><span>{f.label}{ifRequired}</span>{children}</label>
    // try without <label for

  return <label key={idx} className="form-group"><span>{f.label}{ifRequired}</span>{children}</label>
}

// -------------------------------------------------------------------------------------------------------------------------
const createField = (fieldStructure, idx, value, onChange, withLabels=true, formInfo=null) => {

      if (value === null) {
        // console.log(`createField () [${idx}]  type:${fieldStructure.type}  name:${fieldStructure.name} value=null`)  // , fieldStructure, value, withLabels, formInfo)
        // console.trace()
      }

      // fieldStructure is a type, create an instance w/ field data
      let f = {...fieldStructure, value}

      const gen = fieldGeneratorLookup(f.type)
      let field = `unknown field type: ${f.type}`

      // TODO: where should ifRequired go?
      // const ifRequired = (f.required) ? <span className="required">*</span> : null
      if (gen) {
          try {
              // TODO: right now only 'form' and 'formTable' knows how to handle an array of data, other types need code

              if ( formInfo && (f.type === 'form' || f.type === 'formTable')) {
                f = {...formInfo, ...f}
              }
              field = gen(f, onChange)
          } catch (e) {
              const msg = `Error Creating Field type: ${f.type} [${idx}]`
              console.log(msg);
              console.log(JSON.stringify(fieldStructure, null, 2));
              console.log(e);
              console.log(e.stack());
              field = msg
          }
      }

  // return (withLabels) ? labelWrap(fieldStructure, idx, field, f.type) : field           f.type no longer needed as 4th argument

  return (withLabels) ? labelWrap(fieldStructure, idx, field) : field
}

// -------------------------------------------------------------------------------------------------------------------------
export const getFieldRecName = (fieldName, fieldType) => {

  // on simple fields, assume the field name is also the data element name
  let dataName = fieldName

  // multiple named forms can tie back to one gqlName
  if (fieldType == 'form' || fieldType == 'formTable') {
    dataName = getGqlNameFromForm(fieldName)
  }

 return dataName
}

// -------------------------------------------------------------------------------------------------------------------------
export const getGqlNameFromForm = (formName) => {

    const {formDictionary} = getAppSpecificInfo()
    const gqlName = formDictionary(formName)?.gqlName

 return gqlName
}

// -------------------------------------------------------------------------------------------------------------------------
const nonHiddenFields = (fieldList) => {
  return fieldList.filter( f => !('hidden' in f))
}

// -------------------------------------------------------------------------------------------------------------------------
const createFields = (formName, formData, onChange, withLabels=true, formInfo) => {

    // console.log('   creating fields for', formName, formInfo.parentRecName, formData);

    if (onChange === null) {
      throw `  createFields () onChange is null parentRecName: ${formInfo.parentRecName}, formName: ${formName}  `
    }
    const {formDictionary} = getAppSpecificInfo()

    const formStructure = formDictionary(formName)
    if (!formStructure) {
      console.log(`  createFields (${formName}) unknown.`);
      return []
    }

  return nonHiddenFields(formStructure.fieldList).map((f,idx) => {

    // if is field is a Form, formName is not the gqlName
    let dataName = getFieldRecName(f.name, f.type)
    const data = (formData != null && formData[dataName] != undefined) ? formData[dataName] : null
    if (data === null) {
      dataLog(`Form '${formName}' 's formData['${dataName}'] is null. formData:`+JSON.stringify(formData, null, 2))
    }
    if (formData && formData[dataName] === undefined) {
      dataLog(`Form '${formName}' 's formData['${dataName}'] is missing. formData:`+JSON.stringify(formData, null, 2))
    }

    // formInfo only needed for 'form', 'formTable'
    return  createField(f, idx, data, onChange, withLabels, formInfo)
  })

}

// -------------------------------------------------------------------------------------------------------------------------
const genFields = (fieldList, formData, onChange) => {

    const defaultOnChange = (change) => {
      formData[change.target.name] = change.target.value
    }

    const change = (onChange != null) ? onChange : defaultOnChange

    const fields = nonHiddenFields(fieldList).map((f,idx) => {
      let field
      if (f.type != 'form' && f.type != 'formTable') {
          const data = (formData && formData[f.name]) ? formData[f.name] : null
          // console.log(`createField [${idx}] type:`, f.type, ' name:', f.name, ' value:', data);
          field = createField(f, idx, data, change)
      } else {
          field = <span>createFieldsFromList does not support {f.type}</span>
      }

    return field
    })

    return fields
}

// --------------------------------------------------------------------------
export function onChangeMaker(setDataFn) {

  // support variables for FormFields
  const onChange = (change) => {
    const newRec = {[change.target.name]: change.target.value}
    setDataFn((prev) => ({...prev, ...newRec}) )
}

return onChange
}


/*
   Uses
      props.fieldList, props.formData and props.onChange
     -- OR --
      props.fieldList, props.formData and props.setFormData

   to create a list of <input> elements.
*/
// -------------------------------------------------------------------------------------------------------------------------
export const FieldsFromList = (props) => {

  const onChange = (props.setFormData && !props.onChange) ? onChangeMaker(props.setFormData) : props.onChange

  // console.log('FieldsFromList render');

  return genFields(props.fieldList, props.formData, onChange)
}

// -------------------------------------------------------------------------------------------------------------------------
export const FieldsFromListWorks = (props) => {

  const [fields, setFields] = useState(genFields(props.fieldList, props.formData, props.onChange));

  useEffect(() => {

    console.log('FieldsFromList useEffect changes detected with props.fieldList, props.formData, props.onChange');

    const fields = genFields(props.fieldList, props.formData, props.onChange)

    setFields(fields)
  }, [props.fieldList, props.formData, props.onChange]);              // because changing props wont re-render children

  console.log('FieldsFromList render');

  return fields

}

// -------------------------------------------------------------------------------------------------------------------------
export const ifDefined = (variable) => {
  if (typeof variable === 'undefined' || variable === null) {
     return false
  }

  return true
}

// -------------------------------------------------------------------------------------------------------------------------
const typeSafeAssignment = (targetName, prevVal, newVal) => {

  const originalType = typeof prevVal
  const incomingType = typeof newVal
  let val = newVal

  if (originalType.localeCompare(incomingType) != 0) {           // string, number, bigint, boolean, undefined, symbol, null

    if (originalType === 'boolean' && incomingType === 'string') {
      val = (newVal == 'true')
    } else if (originalType === 'number' && incomingType === 'string') {
      val = (+newVal)    // MDN says works for floats and ints, better than parseInt and parseFloat ??
    } else if (prevVal != null) {
      console.log(`change in field '${targetName}' has the wrong incoming type: ${incomingType} was ${originalType} (no code to handle combo)`)
      console.log(`change in field '${targetName}'     ===> new value: '${newVal}'   prev value: '${prevVal}'   `)
    }

  }

  return val
}

// -------------------------------------------------------------------------------------------------------------------------
export const FormFields = (props) => {

      const {name, parentRecName, dataIndex, withLabels=true} = props

      const gqlName = getGqlNameFromForm(name)
      const dataIdx = (ifDefined(dataIndex)) ? dataIndex : 0
      const dataName = gqlName + '['+dataIdx+']'
      const recFullName = (parentRecName) ? parentRecName+'.'+dataName : dataName

      // it's OK, not every form will go back to a database, could be a compound search form

      // console.log(' FormFields :', {gqlName, dataName, parentRecName, recFullName, formData:props.formData});

      let fieldCalcLogic = props.fieldCalcLogic
      if (fieldCalcLogic === undefined || fieldCalcLogic === null) {
         fieldCalcLogic = (old, changed) => [changed, {}]          //  fieldCalcLogic returns [modState, dynOptions];
      }

      // must have a minimum of the props in createField () when it is creating 'form', 'formTable'
      const formInfo = {

        parentRecName: recFullName,
        fieldCalcLogic,

        //   ...leftOver,
        pendingUpdatesFn: props.pendingUpdatesFn,
        addRecFn: props.addRecFn,
        cloneRecFn: props.cloneRecFn,
        noAdd: props.noAdd,
        noClone: props.noClone,
        setData: props.setData,    // ? maj       props.setData  or this local setData()
        debug: props.debug
    }

      const setFormData = (incomingChange_PropsData) => {
        if (data && !incomingChange_PropsData) {
          console.log('clear data for formFields ?? ', {dataName, data, incomingChange_PropsData});
          console.log(new Error().stack);
        }
        if (!data && !incomingChange_PropsData) {
           return
        }

        const [modState, formOpts] = fieldCalcLogic(data, incomingChange_PropsData)
        setFields( applyOptions(fields, formOpts) )

        setData(modState)
      }

      const onChangeFormFields = (e) => {
        if (!e.target) {                // coming from a sub-form, echo up to the top
          if (typeof e === 'string') {
            // console.log('>>> FormFields up message:',{e})   // expect e to be a string
            return props.onChange(e)
            } else {
              throw '>>> UNKNOWN TYPE: FormFields up message:'+e
            }
        }

        const prevVal = (data) ? data[e.target.name] : null
        // TODO: recFullName or e.target.name ??
        const val = typeSafeAssignment(e.target.name, prevVal, e.target.value)

        if (!e.target.name.includes('.')) {   // bubble all non-local values
          // console.log(TS(), `   ${recFullName} ${e.target.name} <= ${e.target.value};`);

          const tmp = {...data}
          tmp[e.target.name] = val
          setData(tmp)               // changes local to this sub-form, affects if the field can be modified
          }

        // Pass it up so the top parent can change the data
        // DO NOT REUSE e
        let e2 = {target: {
            name: dataName+'.'+e.target.name,  // fully qualified field path
            value: val
          }}

        // console.log(`   onChangeFormFields(${dataName}) target`, {name: e2.target.name, val: e2.target.value});
        props.onChange(e2)

      }

      // ------------------------------------
      const [data, setData] = useState( props.formData );     // This is the single source of truth for this form/sub-form, expect the  props.onChange () to notify the parent
      const [fields, setFields] = useState( null );

      useEffect(() => {

        if (props.debug > 2) {
          console.log('')
          console.log(`   FormFields useEffect [data, ${props.name}] has changed.`, {data, formInfo, props_name: props.name, debug: props.debug, withLabels});
        }

        const f = createFields(props.name, data, onChangeFormFields, withLabels, formInfo)
        setFields( f )
        if (!f) {
          console.log("<FormFields />   Something horrible: createFields () returned null");
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [data, props.name])
          // only @ creation and when the data changes because the structure might change,
          // selection of one field might change the choices on another field.

      useEffect(() => {

          if (fields && props.formData) {

            // if (props.debug) {
            //   console.log(`   FormFields useEffect [props.formData, ${props.name}, fields] changes:`,
            //       {props_formData : props.formData, props_name: props.name, fields, debug: props.debug, recFullName, data, dataName} )
            // }

            setFormData(props.formData)
          }

      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [props.formData, props.name, fields])


      if (!fields) {
          return null;     // not initialized yet
      }

      const badEntry = fields.findIndex( element => element === null)
      if (badEntry !== -1) {
          return `<FormFields />   Something horrible: createFields () returned [${badEntry}] as null`
      }

      const jsx = (props.wrapWith) ? fields.map((f,k) => props.wrapWith(k,f)) : fields   // support <td key={k}>{f}</td> or something else

      return (<>{jsx}</>)
}


