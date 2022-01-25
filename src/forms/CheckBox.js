import React from 'react';

  /*
    ☐  U+2610 &#9744;  Ballot Box
    ☑  U+2611 &#9745;  Ballot Box with Check
    ☒  U+2612 &#9746;  Ballot Box with X
  */

 const checked = String.fromCharCode(9745)
 const unchecked = String.fromCharCode(9744)

export const CheckBox = (props) => {

      const handle = (e) => {
          if (typeof e.preventDefault === 'function')
              e.preventDefault();
          e.target.name = props.name;
          e.target.value = (props.value === props.selectedValue) ? '' : props.selectedValue;
          props.onChange(e);
      }

      const {selectedValue, text, children, className, ...rest} = props

      const symbol = (props.value === selectedValue) ? checked : unchecked

  return <button type="button" onClick={handle} className={className} {...rest}>
         {symbol}
         {text}
         {children}
         </button>

}

/*
import autoBind from 'react-autobind';

class CheckBox extends React.Component {

  constructor(props) {
    super(props);

    autoBind(this);
  }

handle(e) {
  if (typeof e.preventDefault === 'function')
      e.preventDefault();
  e.target.name = this.props.name;
  e.target.value = (this.props.value === this.props.selectedValue) ? '' : this.props.selectedValue;
  this.props.onChange(e);
}

render() {
  const {selectedValue, text, children, className, ...rest} = this.props

  const isChecked = this.props.value === selectedValue
  const symbol = (isChecked) ? checked : unchecked

  return <button type="button" onClick={this.handle} className={className} {...rest}>
         {symbol}
         {text}
         {children}
         </button>
  }
}

export default CheckBox
*/