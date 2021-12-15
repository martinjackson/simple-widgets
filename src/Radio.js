import React from 'react';

  /*
    9737   Sun
    183     &middot;
    ⚪	9898	26AA	 	MEDIUM WHITE CIRCLE
    ⚫	9899	26AB	 	MEDIUM BLACK CIRCLE

    U+26AA	⚪	e2 9a aa	MEDIUM WHITE CIRCLE
    U+26AB	⚫	e2 9a ab	MEDIUM BLACK CIRCLE
    U+1F534	🔴	f0 9f 94 b4	LARGE RED CIRCLE
    U+1F535	🔵	f0 9f 94 b5	LARGE BLUE CIRCLE
  */
 
const checked = String.fromCharCode(9899) 
const unchecked = String.fromCharCode(9898) 

const Frag = React.Fragment

const Radio = props => {
  const handle = (e) => {
    if (typeof e.preventDefault === 'function')
        e.preventDefault();
    e.target.name = props.name;
    e.target.value = props.selectedValue;
    props.onChange(e);
  }
   
  const {selectedValue, text, children, ...rest} = props

  const isChecked = props.value === selectedValue;
  const symbol = (isChecked) ? checked : unchecked;

  return <Frag>
           <button type="button" onClick={handle} className="radio_defaultStyle" {...rest}>
             {symbol}
             {text}
             {children}
           </button>
         </Frag>;
}

// 2018-10-10 {text} {children} moved to inside button clickable area

export default Radio;
