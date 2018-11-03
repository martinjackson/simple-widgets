import React from 'react';
import Enzyme, { mount, shallow, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import makeChangeHandler from '../src/makeChangeHandler'

Enzyme.configure({ adapter: new Adapter() })

class DumbComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.handleChange = makeChangeHandler(this);   
    }
  
    render() {
      return <span>Dummy</span>
    }
}

it('handles onChange with event is string type', () => {
    const wrap = mount(<DumbComponent />)
    const comp = wrap.instance()
    
    comp.handleChange("dummy")
});

it('handles onChange with event has no target name', () => {
    const wrap = mount(<DumbComponent />)
    const comp = wrap.instance()
    
    comp.handleChange({})
});

