import React, { Fragment } from 'react';

import { hasOwnProperty } from './index.js';

// --------------------------------------------------------------------------------------------------------------------------------------------------
const isValueInOpt = (opt, value) => {
  const matches = opt.filter(element => element == value)
  return (matches.length > 0)
}

// --------------------------------------------------------------------------------------------------------------------------------------------------
export function Choice(props) {

    // console.log('>>> Choice(', props, ')')

    const siz = (hasOwnProperty(props, 'size') === true) ? parseInt(props.size) : 10;
    const opt = (hasOwnProperty(props, 'list') === true) ? props.list :
                (hasOwnProperty(props, 'choices') === true) ? props.choices : [];

    const isKeyed = ( !Array.isArray(opt) )
    const keys = (isKeyed) ? Object.keys(opt) : opt

    const genOption = (el, k) => {
      return (isKeyed) ? <option key={k} value={el}>{opt[el]}</option> : <option key={k} value={el}>{el}</option>
    }


    if ( !isKeyed && Array.isArray(opt) && !isValueInOpt(opt, props.value) && !props.placeholder )
       {
         if (opt.length > 0) {
           console.log(`Adding missing default value: '${props.value}' to ${opt}`);
         }
         opt.unshift(props.value)
       }

    // eslint-disable-next-line no-unused-vars
    let {size, list, choices, value, placeholder, ...options} = props          // don't use var value from here, that is less descriptive -- this is a subtraction

    if (placeholder) {
      placeholder = props.placeholder.trim()
      if (placeholder.length === 0)
         placeholder = null
    }

    const placeholderJSX = (placeholder) ? <option value="" disabled>{placeholder}</option> : null

    if (props.multiple) {
      return <Fragment>
                <select multiple size={siz} {...options} value={(props.value === null) ? "" : props.value}>
                  {placeholderJSX}
                  {keys.map( (el,k) => genOption(el,k) )}
                </select>
            </Fragment>;
    }
    else {
      return <Fragment>
                <select {...options} value={(props.value === null) ? "" : props.value}>
                  {placeholderJSX}
                  {keys.map( (el,k) => genOption(el,k) )}
                </select>
            </Fragment>;
    }
}
