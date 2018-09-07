import React from 'react';
import autoBind from 'react-autobind';

const defaultTransparent = {
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
  e.target.value = (this.props.match === this.props.value) ? '' : this.props.value;
  this.props.onChange(e);
}

render() {

  let transparent = {...defaultTransparent};
  if (this.props.color) {
     transparent.color = this.props.color;
   }

  const isChecked = this.props.match === this.props.value;
  const symbol = (isChecked) ? checked : unchecked;
  return <button id={this.props.id} type="button" onClick={this.handle} style={transparent}>{symbol}{this.props.text}</button>;
  }
}

export default CheckBox
