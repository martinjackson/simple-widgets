import React from 'react';
import autoBind from 'react-autobind';

const defaultStyle = {
  backgroundColor: 'Transparent',
  backgroundRepeat:'no-repeat',
  border: 'none',
  cursor:'pointer',
  overflow: 'hidden',
  outline:'none',
  color: 'inherit'            // dont default to color: buttontext, wont match the current theme
}

  /*
    ☐  U+2610 &#9744;  Ballot Box
    ☑  U+2611 &#9745;  Ballot Box with Check
    ☒  U+2612 &#9746;  Ballot Box with X
  */

 const checked = String.fromCharCode(9745) 
 const unchecked = String.fromCharCode(9744) 

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
  const {selectedValue, text, color, style, ...rest} = this.props

  const isChecked = this.props.value === selectedValue
  const symbol = (isChecked) ? checked : unchecked

  let st = {...defaultStyle, ...style, color}
  return <button type="button" onClick={this.handle} style={st} {...rest}>{symbol}{text}</button>
  }
}

export default CheckBox
