import React from 'react';
// import ReactDOM from 'react-dom';
import Enzyme, { mount, shallow, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import DatePicker from '../src/DatePicker';
import makeChangeHandler from '../src/makeChangeHandler'

class DPTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {doi: props.value};
    this.handleChange = makeChangeHandler(this);   
  }

  render() {
    return <DatePicker name="doi" value={this.state.doi} onChange={this.handleChange} format='YYYY-MM-DD'/>
  }
}

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
    const wrapper = shallow(<DPTest />)
});

it('doesnt crash on partial input', () => {
  const wrapper = mount(<DPTest />)
  wrapper.find('input').simulate('change', {
    target: { value: '2015-05' }
  })
})

it('doesnt crash on full input', () => {
  const wrapper = mount(<DPTest />)
  wrapper.find('input').simulate('change', {
    target: { value: '2015-05-17' }
  })
})

it('render date input correctly with null value', () => {  
  const props = {
          value: null
      },
      comp = mount(<DPTest {...props} />);
  expect((comp).prop('value')).toEqual(null);
});

it('default value', () => {  
  const props = {
          value: '2015-05-17'
      },
      comp = mount(<DPTest {...props} />);
  expect((comp).prop('value')).toEqual('2015-05-17');
});
