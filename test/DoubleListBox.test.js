
// example debugging Jest test within VSCode
// https://medium.com/@mattmazzola/how-to-debug-jest-tests-with-vscode-48f003c7cb41

import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';

import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import DoubleListBox from '../src/DoubleListBox';
import makeChangeHandler from '../src/makeChangeHandler'

Enzyme.configure({ adapter: new Adapter() })

const fullList = ['apple', 'bannana', 'blackberry', 'blueberry', 'peach', 'strawberry', ]
const preSelected = fullList.filter( item => item.startsWith('b') )
const notSelected = fullList.filter( item => !item.startsWith('b') )

class DLBTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruitChoice: [...this.props.preselected],
      notFruit: [...this.props.notselected]
    };
    this.handleChange = makeChangeHandler(this);
  }

  render() {
    this.testTarget = <DoubleListBox id="DoubleListBox" name="fruitChoice"
                choices={this.state.notFruit}
                value={this.state.fruitChoice}
                onChange={this.handleChange} />
    return this.testTarget
  }

}


it('shallow render without crashing', () => {
    const wrapper = shallow(<DLBTest />)
});

it('mounted without crashing', () => {
  const wrapper = mount(<DLBTest />)
});

it('renders with preselection', () => {
    const wrapper = mount(<DLBTest preselected={preSelected} notselected={notSelected} />)
});

it('gets selected values', () => {
  const wrapper = mount(<DLBTest preselected={preSelected} notselected={notSelected} />)
  const comp = wrapper.instance()
  const ans = wrapper.state('fruitChoice')
  expect(ans).toEqual(preSelected)
});

it('select all', () => {
  const wrapper = mount(<DLBTest preselected={preSelected} notselected={notSelected} />)
  const comp = wrapper.find(DoubleListBox).instance()
  comp.allSelect();
  const ans = wrapper.state('fruitChoice')
  expect(ans).toEqual(fullList)
});

it('unselect all', () => {
  const wrapper = mount(<DLBTest preselected={preSelected} notselected={notSelected} />)
  const comp = wrapper.find(DoubleListBox).instance()
  comp.unselect();        // same as unselectAll()
  comp.unselectAll();
  const ans = wrapper.state('fruitChoice')
  expect(ans).toEqual(preSelected)         // TODO: does not change those selected ???
});

it('toggle apple', () => {
  const wrapper = mount(<DLBTest preselected={preSelected} notselected={notSelected} />)
  const comp = wrapper.find(DoubleListBox).instance()
  comp.toggleSelection('task-0');    // apple
  const ans = wrapper.state('fruitChoice')
  expect(ans).toEqual(preSelected)
});

it('toggle blueberry', () => {
  const wrapper = mount(<DLBTest preselected={preSelected} notselected={notSelected} />)
  const comp = wrapper.find(DoubleListBox).instance()
  comp.toggleSelection('task-3');    // blueberry
  const ans = wrapper.state('fruitChoice')
  expect(ans).toEqual(preSelected)
});

it('toggle apple in group', () => {
  const wrapper = mount(<DLBTest preselected={preSelected} notselected={notSelected} />)
  const comp = wrapper.find(DoubleListBox).instance()
  comp.toggleSelectionInGroup('task-0');
  const ans = wrapper.state('fruitChoice')
  expect(ans).toEqual(preSelected)
});

it('multiSelectTo bananna', () => {
  const wrapper = mount(<DLBTest preselected={preSelected} notselected={notSelected} />)
  const comp = wrapper.find(DoubleListBox).instance()
  comp.toggleSelection('task-1');    // bananna
  comp.multiSelectTo('task-1');    // select one already selected
  const ans = wrapper.state('fruitChoice')
  expect(ans).toEqual(preSelected)
});


it('right click on 1st item in first column', () => {
  const wrapper = mount(<DLBTest preselected={preSelected} notselected={notSelected} />)
  const dlb = wrapper.find(DoubleListBox)
  const fcol = wrapper.find('#leftBox')
  fcol.simulate('change', {target: { value : 'apple'}});
  const ans = wrapper.state('fruitChoice')
  expect(ans).toEqual(preSelected)
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

/*
singleListContainer: [data-react-beautiful-dnd-droppable]
firstCard: [data-react-beautiful-dnd-drag-handle]:nth-child(1)
secondCard: [data-react-beautiful-dnd-drag-handle]:nth-child(2)
fourthCard: [data-react-beautiful-dnd-drag-handle]:nth-child(5)
*/


it('simulate keyboard driven drag-n-drop', () => {

  var tree = ReactTestUtils.renderIntoDocument(<DLBTest preselected={preSelected} />);
  var firstDiv = ReactTestUtils.scryRenderedDOMComponentsWithTag(tree,'div')[0];

  const node = firstDiv;

  expect(node).toBeTruthy();

  // ReactTestUtils.Simulate.keyDown(node, {key: "Enter", keyCode: 13, which: 13});
  ReactTestUtils.Simulate.keyDown(node, {key: 'Tab',        keyCode: 9});
  ReactTestUtils.Simulate.keyDown(node, {key: ' ',          keyCode: 32});
  ReactTestUtils.Simulate.keyDown(node, {key: 'ArrowRight', keyCode: 39});
  ReactTestUtils.Simulate.keyDown(node, {key: ' ',          keyCode: 32});

  const ans = tree.state.fruitChoice

  // should contain -- but components dont have dimensions, so drag-n-drop does not sim well
  expect(ans).not.toContain(fullList[0])
});

/*
  Enzyme Team __nolonger__ recommends simulate  Feb 2018

  wrap.simulate('keypress', {key: 'Tab'})         // Tab    {key: 'Tab',       code: 'Tab',       which: 9}
  wrap.simulate('keypress', {key: ' '})           // space  {key: ' ',         code: 'Space',     which: 32}
  wrap.simulate('keypress', {key: 'ArrowiRight'}) // ArrowRight  {key: 'ArrowRight', code: 'ArrowRight', which: 39}
  wrap.simulate('keypress', {key: ' '})           // space

  -- or --

  wrap.simulate('keydown', {keyCode: 9})   // Tab
  wrap.simulate('keydown', {keyCode: 32})  // space
  wrap.simulate('keydown', {keyCode: 39})  // ArrowRight
  wrap.simulate('keydown', {keyCode: 32})  // space
  */
