
import React from 'react';

// TODO currently only accepts property choices as ['one','two'], later accept [{label:'One', value:1},{label:'Two', value:2}, ]

class Choice extends React.Component {

/*
  constructor(props) {
    super(props);
  }
*/

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
