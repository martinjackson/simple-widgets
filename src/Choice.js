import React, { Fragment } from 'react';

// --------------------------------------------------------------------------------------------------------------------------------------------------
export const Choice = (propsIn) => {

    // console.log('>>> Choice(', propsIn, ')')

    const {list, choices, size, ...props} = propsIn
    const siz = size || 10;
    const opt = list || choices || []

    const isKeyed = ( !Array.isArray(opt) )
    const keys = (isKeyed) ? Object.keys(opt) : opt

    const genOption = (el, k) => {
      return (isKeyed) ? <option key={k} value={el}>{opt[el]}</option> : <option key={k} value={el}>{el}</option>
    }


    if ( !isKeyed && typeof(props.value) == 'string' &&  Array.isArray(opt) && !opt.includes(props.value) )
       {
         if (opt.length > 0) {
           console.log(`Adding missing default value: '${props.value}' to ${opt}`);
         }
         opt.unshift(props.value)
       }

    const {value, placeholder, ...options} = props          // dont use var value from here, that is less descriptive -- this is a substraction
    const placeholderJSX = (placeholder) ? <option value="" disabled>{placeholder}</option> : null

    if (props.multiple) {
      return <Fragment>
                <select multiple size={siz} {...options} value={props.value || ""}>
                  {placeholderJSX}
                  {keys.map( (el,k) => genOption(el,k) )}
                </select>
            </Fragment>;
    }
    else {
      return <Fragment>
                <select {...options} value={props.value || ""}>
                  {placeholderJSX}
                  {keys.map( (el,k) => genOption(el,k) )}
                </select>
            </Fragment>;
    }
}
