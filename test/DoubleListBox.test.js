
// example debugging Jest test within VSCode
// https://medium.com/@mattmazzola/how-to-debug-jest-tests-with-vscode-48f003c7cb41

import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { DragDropContext } from 'react-beautiful-dnd';

import DoubleListBox from '../src/DoubleListBox/DoubleListBox';
import makeChangeHandler from '../src/makeChangeHandler'
import eventStub from './eventStub'

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
    return <DoubleListBox id="DoubleListBox" choices={fullList} name="fruitChoice" value={this.state.fruitChoice} onChange={this.handleChange} />
  }

}


it('shallow render without crashing', () => {
    const wrapper = shallow(<DLBTest />)
});

it('mounted without crashing', () => {
  const wrapper = mount(<DLBTest />)
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
  const comp = wrapper.find(DoubleListBox).instance()  
  comp.allSelect();
  const ans = wrapper.state('fruitChoice')
  
  expect(ans).toEqual(fullList)
});

// https://github.com/airbnb/enzyme/issues/441
//  for mount, the simulate method is a thin wrapper around ReactTestUtils.Simulate -- aweary commented on Sep 6, 2016
// https://reactjs.org/docs/events.html#keyboard-events
// onKeyDown onKeyPress onKeyUp
// https://github.com/airbnb/enzyme/blob/master/packages/enzyme-adapter-utils/src/Utils.js
//     keydown: 'keyDown',
//     keyup: 'keyUp',
//    keypress: 'keyPress',
// https://keycode.info/
// Examples
// wrapper.find('input').simulate('keydown', {keyCode: 13});  
// wrapper.find('input').simulate('keypress', {key: 'Enter'})
// component.find('button#my-button-two').simulate('click');

it('simulate keyboard driven drag-n-drop', () => {      
  const wrapper = mount(<DLBTest preselected={preSelected} />)  
  const wrap = wrapper.find(DragDropContext) // DoubleListBox)

  // console.log(wrap.debug());
  
  // down   {key: 'ArrowDown', code: 'ArrowDown', which: 40}

  // wrap.simulate('mouseEnter', eventStub());
  // expect(wrap.props().id).toEqual(document.activeElement.id)
  // console.log(document.activeElement);
  

  wrap.simulate('keypress', {key: 'Tab'})         // Tab    {key: 'Tab',       code: 'Tab',       which: 9}
  wrap.simulate('keypress', {key: ' '})           // space  {key: ' ',         code: 'Space',     which: 32}
  wrap.simulate('keypress', {key: 'ArrowiRight'}) // ArrowRight  {key: 'ArrowRight', code: 'ArrowRight', which: 39}
  wrap.simulate('keypress', {key: ' '})           // space
  
  /*
  wrap.simulate('keydown', {keyCode: 9})   // Tab        
  wrap.simulate('keydown', {keyCode: 32})  // space      
  wrap.simulate('keydown', {keyCode: 39})  // ArrowRight 
  wrap.simulate('keydown', {keyCode: 32})  // space
  */

  const ans = wrapper.state('fruitChoice')
  console.log('ans:', ans);
  
  expect(ans).toContain(fullList[0])
});

