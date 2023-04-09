import React from 'react';

  /*
    ☐  U+2610 &#9744;  Ballot Box
    ☑  U+2611 &#9745;  Ballot Box with Check
    ☒  U+2612 &#9746;  Ballot Box with X
  */

 const checked = String.fromCharCode(9745) 
 const unchecked = String.fromCharCode(9744) 

export const CheckBox = props => {
  const handle = (e) => {
    if (typeof e.preventDefault === 'function')
        e.preventDefault();
    e.target.name = props.name;
    e.target.value = (props.value === props.selectedValue) ? '' : props.selectedValue;
    props.onChange(e);
  }

  const {selectedValue, text, children, className, ...rest} = props

  const isChecked = props.value === selectedValue
  const symbol = (isChecked) ? checked : unchecked

  return <button type="button" onClick={handle} className={"sw-checkbox_defaultStyle " + className} {...rest}>
         {symbol}
         {text}
         {children}
         </button>
}

