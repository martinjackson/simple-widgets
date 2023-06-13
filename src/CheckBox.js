import React from 'react';

import { hasOwnProperty } from './hasOwnProperty.js'

  /*
    ☐  U+2610 &#9744;  Ballot Box
    ☑  U+2611 &#9745;  Ballot Box with Check
    ☒  U+2612 &#9746;  Ballot Box with X
  */

const checked   = String.fromCharCode(9745)
const addOn     = String.fromCharCode(65039)
const green     = String.fromCharCode(9989)
const cross     = String.fromCharCode(9746)
const greenx    = String.fromCharCode(10062)
const redx      = String.fromCharCode(10060)
const unchecked = String.fromCharCode(9744)

// --------------------------------------------------------------------------------------------------------------------
const deriveChoices = props => {

  const CheckBoxWarning = 'CheckBox selectedValue or options[] not defined'

  let selectedVal = CheckBoxWarning
  let notSelected = ''

  if (hasOwnProperty(props, 'selectedValue')) {
    selectedVal = props.selectedValue
  }

  if (hasOwnProperty(props, 'options')) {
    if (!hasOwnProperty(props, 'selectedValue')) {
      selectedVal = props.options[0]   // assume selected is first choice
    }

  notSelected = props.options[1]
  }

  return [selectedVal, notSelected]
}


// --------------------------------------------------------------------------------------------------------------------
export const CheckBox = props => {

  if (hasOwnProperty(props, 'backcolor') === true)
     console.log('props :', props);

  // console.log(`  <CheckBox>   ${props.name}: ${props.value} (${typeof props.value})`);


  const [selectedVal, notSelected] = deriveChoices(props)

  const handle = (e) => {
    if (typeof e.preventDefault === 'function')
        e.preventDefault();


    // toggle value do to click action
    const newValue = (props.value === selectedVal) ? notSelected : selectedVal;
    // console.log(`  <CheckBox>   newValue: ${newValue} (${typeof newValue})`);

    e.target.name = props.name
    e.target.value = newValue
    props.onChange(e);
  }

  const {selectedValue, text, children, className, ...rest} = props     // at this point selectedValue variable is not used, option override by options. just dont pass to html

  let uniChar = null;
  if (hasOwnProperty(props, 'unichar') === true) {
    uniChar = props.unichar;
  } else {
    uniChar = checked;
  }

  let checkedSymbol = checked;
  if (hasOwnProperty(props, 'checkedsymbol') === true) {
      // if (props.checkedsymbol === 'normal') checkedSymbol =  checked;     value already assigned
      if (props.checkedsymbol === 'blue') checkedSymbol = checked + addOn ;
      if (props.checkedsymbol === 'green') checkedSymbol = green;
      if (props.checkedsymbol === 'cross') checkedSymbol = cross;
      if (props.checkedsymbol === 'greenx') checkedSymbol = greenx;
      if (props.checkedsymbol === 'redx') checkedSymbol = redx;
  }

  if (uniChar !== checked) {
      checkedSymbol = String.fromCharCode(uniChar);
  }



  const isChecked = props.value === selectedVal
  const symbol = (isChecked) ? checkedSymbol : unchecked

  // console.log('CheckBox isChecked:',isChecked, props.value, selectedVal, symbol);

  return <button type="button" onClick={handle} className={"sw-checkbox_defaultStyle " + className} {...rest}>
            {symbol}
            {text}
            {children}
         </button>
}

