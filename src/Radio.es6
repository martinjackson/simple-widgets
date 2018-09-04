import React from 'react';
import autoBind from 'react-autobind';

class Radio extends React.Component {

  constructor(props) {
    super(props);

    autoBind(this);
  }

handle(e) {
  if (typeof e.preventDefault === 'function')
      e.preventDefault();
  e.target.name = this.props.name;
  e.target.value = this.props.value;
  this.props.onChange(e);
}

render(){

  /*
     this didn't work -- inital state matched the visible, after click
     the selected radio button disapeared.
     const val = {
            checked: this.props.match === this.props.value,
            value: this.props.value
          };
     console.log('Radio rendered: ', this.props.name, val.value, val.checked);
  return <input type="radio" {...val} onChange={this.props.onChange} />;
  */

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

  const st = {border: 'none', backgroundColor: 'white', borderRadius: '25px'};
  const checked = this.props.match === this.props.value;
  const symbol = (checked) ? String.fromCharCode(9899) : String.fromCharCode(9898);
  return <button type="button" onClick={this.handle} style={st}>{symbol}</button>;
  }
}

export default Radio
