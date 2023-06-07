import React from 'react';

import { hasOwnProperty } from './hasOwnProperty.js'

  /*
    ☐  U+2610 &#9744;  Ballot Box
    ☑  U+2611 &#9745;  Ballot Box with Check
    ☒  U+2612 &#9746;  Ballot Box with X
  */

const checked = String.fromCharCode(9745) 
const addOn = String.fromCharCode(65039) 
const green = String.fromCharCode(9989) 
const cross = String.fromCharCode(9746) 
const greenx = String.fromCharCode(10062) 
const redx = String.fromCharCode(10060)
const unchecked = String.fromCharCode(9744) 

export const CheckBox = props => {
if (hasOwnProperty(props, 'backcolor') === true) console.log('props :', props);
  const handle = (e) => {
    if (typeof e.preventDefault === 'function')
        e.preventDefault();
    e.target.name = props.name;
    e.target.value = (props.value === props.selectedValue) ? '' : props.selectedValue;
    props.onChange(e);
  }

  const {selectedValue, text, children, className, ...rest} = props

  let uniChar = null;
  if (hasOwnProperty(props, 'unichar') === true) {
    uniChar = props.unichar;
  } else {
    uniChar = checked;
  }

  let checkedSymbol = checked;
  if (hasOwnProperty(props, 'checkedsymbol') === true) {
      if (props.checkedsymbol === 'normal') checkedSymbol =  checked;
      if (props.checkedsymbol === 'blue') checkedSymbol = checked + addOn ;
      if (props.checkedsymbol === 'green') checkedSymbol = green;
      if (props.checkedsymbol === 'cross') checkedSymbol = cross;
      if (props.checkedsymbol === 'greenx') checkedSymbol = greenx;
      if (props.checkedsymbol === 'redx') checkedSymbol = redx;
  }

  if (uniChar !== checked) {
      checkedSymbol = String.fromCharCode(uniChar);
  }

  const isChecked = props.value === selectedValue
  const symbol = (isChecked) ? checkedSymbol : unchecked

  return <button type="button" onClick={handle} className={"sw-checkbox_defaultStyle " + className} {...rest}>
            {symbol}
            {text}
            {children}
         </button>
}

