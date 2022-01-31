import React, { Fragment } from 'react';

const hasProperty = (obj, propName) => { return !!Object.getOwnPropertyDescriptor(obj, propName);}
// const min = (arr) => arr.reduce((acc))

const _Choice = (propsIn, ref) => {

    const {list, choices, size, value, onChange, ...props} = propsIn
    const opt = list || choices || []
    const keyPart = (hasProperty(props,'keyName')) ? props.keyName + '_' : ''
    const pref = (hasProperty(props,'name')) ? props.name + '_' + keyPart : ''

    if ( typeof(value) == 'string' && !opt.includes(value) )
    {
        console.log(`Adding missing default value: '${value}' to ${JSON.stringify(opt)}`);
        opt.unshift(value)
    }


    const listHandleChange = (e) => {

      if (typeof e.preventDefault === "function") {
        e.preventDefault();
      }

      // if multiple is true the returning value should be an array of selected values,
      //     not just the value on the last clicked/unclicked element
      // if multiple is false, e.target.value will be a string of the choice selected
      // See React SyntheticEvent   https://reactjs.org/docs/events.html

      const e2 = {
        preventDefault: e.preventDefault,
        target: { ...e.target}
      }

      const arr = Array.from(e.target.selectedOptions, option => option.value)
      e2.target.name = e.target.name
      e2.target.value = (props.multiple) ? arr : e.target.value

      // console.log(`listHandleChange calling onChange(e2) ${e2.target.name} ${JSON.stringify(e2.target.value)} `);

      onChange(e2)
    }

    return <Fragment>
              <select ref={ref} multiple={props.multiple} size={size} value={value} onChange={listHandleChange} {...props} >
                  {opt.map( (el,key) => <option key={pref + key} value={el}>{el}</option>)}
              </select>
           </Fragment>;

}

const _List = (props, ref) => (
  <Choice className="ChoiceClass" ref={ref} multiple={true} {...props} />
  )

export const Choice = React.forwardRef(_Choice);
export const List = React.forwardRef(_List);
