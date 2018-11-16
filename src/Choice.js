
import React from 'react';

// currently only accepts property choices as ['one','two']

class Choice extends React.Component {

  render() {
    var props = {...this.props};
    const choices = props.choices;
    delete props.choices;
    return <span>
               <select {...props} >
                 {choices.map( el => <option key={el} value={el}>{el}</option>)}
               </select>
          </span>;
  }

}

export default Choice;
