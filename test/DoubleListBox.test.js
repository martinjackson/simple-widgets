import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import DoubleListBox from '../src/DoubleListBox/DoubleListBox';
import makeChangeHandler from '../src/makeChangeHandler'

Enzyme.configure({ adapter: new Adapter() })

const fullList = ['apple', 'bannana', 'blackberry', 'blueberry', 'peach', 'strawberry', ]
const preSelected = fullList.filter( item => item.startsWith('b') )

class DLBTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruitChoice: this.props.preselected
    };
    this.handleChange = makeChangeHandler(this);   
  }

  render() {
    return <DoubleListBox choices={fullList} name="fruitChoice" value={this.state.fruitChoice} onChange={this.handleChange} />
  }

}


it('renders without crashing', () => {
    const wrapper = shallow(<DLBTest />)
});

it('renders with preselection', () => {    
    console.log(preSelected);
    
    const wrapper = mount(<DLBTest preselected={preSelected} />)
});

it('gets selected values', () => {      
  const wrapper = mount(<DLBTest preselected={preSelected} />)
  const comp = wrapper.instance()
  expect(wrapper.state('fruitChoice')).toEqual(preSelected)
});

it('select all', () => {      
  const wrapper = mount(<DLBTest preselected={preSelected} />)
  
  const innerWrapper = wrapper.find(DoubleListBox)
  const comp = innerWrapper.instance()
  
  comp.allSelect();
  const ans = wrapper.state('fruitChoice')
  console.log('ans:', ans);
  
  expect(ans).toEqual(fullList)
});
    
