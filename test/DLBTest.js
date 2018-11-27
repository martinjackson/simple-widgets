import React from 'react'

import DoubleListBox from '../src/DoubleListBox/DoubleListBox';
import makeChangeHandler from '../src/makeChangeHandler'

export const fullList = ['apple', 'bannana', 'blackberry', 'blueberry', 'peach', 'strawberry', ]
export const preSelected = fullList.filter( item => item.startsWith('b') )

export default class DLBTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruitChoice: this.props.preselected
    };
    this.handleChange = makeChangeHandler(this);      
  }

  render() {
    return <React.Fragment>
              <DoubleListBox id="DoubleListBox" choices={fullList} name="fruitChoice" value={this.state.fruitChoice} onChange={this.handleChange} />
              <span data-testid="current-fruitChoice">{JSON.stringify(this.state.fruitChoice)}</span>
           </React.Fragment>
  }

}
