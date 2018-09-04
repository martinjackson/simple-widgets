import React from 'react';
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
  e.target.value = (this.props.match === this.props.value) ? '' : this.props.value;
  this.props.onChange(e);
}

render(){


  /*
    ☐  U+2610 &#9744;  Ballot Box
    ☑  U+2611 &#9745;  Ballot Box with Check
    ☒  U+2612 &#9746;  Ballot Box with X
  */

  const transparent = {
      backgroundColor: 'Transparent',
      backgroundRepeat:'no-repeat',
      border: 'none',
      cursor:'pointer',
      overflow: 'hidden',
      outline:'none',
      color: 'inherit'            // dont default to color: buttontext, wont match the current theme
  }

  if (this.props.color) {
     transparent.color = this.props.color;
   }

  const checked = this.props.match === this.props.value;
  const symbol = (checked) ? String.fromCharCode(9745) : String.fromCharCode(9744);
  return <button type="button" onClick={this.handle} style={transparent}>{symbol}{this.props.text}</button>;
  }
}

export default CheckBox
