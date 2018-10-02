import React from 'react';
import autoBind from 'react-autobind';

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

class Radio extends React.Component {

  constructor(props) {
    super(props);

    autoBind(this);
  }

handle(e) {
    if (typeof e.preventDefault === 'function')
        e.preventDefault();
    e.target.name = this.props.name;
    e.target.value = this.props.selectedValue;
    this.props.onChange(e);
  }
   
render() {
  const {selectedValue, text, style, ...rest} = this.props

  const isChecked = this.props.value === selectedValue;
  const symbol = (isChecked) ? checked : unchecked;

  const defaultStyle = {border: 'none', backgroundColor: 'white', borderRadius: '25px'};
  const st = {...defaultStyle, ...style}
  return <Frag><button type="button" onClick={this.handle} style={st} {...rest}>{symbol}</button>{text}</Frag>;
  }
}

export default Radio
