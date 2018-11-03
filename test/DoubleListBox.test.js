import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import DoubleListBox from '../src/DoubleListBox';

Enzyme.configure({ adapter: new Adapter() })

const list = ['apple', 'bannana', 'blackberry', 'blueberry', 'peach', 'strawberry', ]
const preSelected = list.filter( item => item.startsWith('b') )

class DLBTest extends React.Component {
  constructor(props) {
    super(props);

    this.options = [];    // The entire list of fields (columns) that can be in the report
    this.selections = []; // The list of fields (columns) the user wants in the report

    // Build the options array for the left list box
    for (let i = 0; i < list.length; i++) {
       this.options.push ({label: list[i], value: i });
    }
    
  }

  render() {
    return <DoubleListBox className="ms-selection" options={this.options} isSelected="true" onChange={this.selection} />
  }

      /***************************************************************************
     *
     *  This will place the values in right list box in the selections array.
     *
     *  @param selectedValues the array of value fields in the options array of
     *                        the selected values.  For example, consider the
     *                        following options array:
     *                          label: John     value: 11
     *                          label: Pete     value: 22
     *                          label: Paul     value: 33
     *                          label: Luke     value: 44
     *                        Suppose the selected values array contains 22 and
     *                        33.  This indicates that Pete and Paul were
     *                        selected.
     *
     **************************************************************************/
    selection(selectedValues) {
        const answer = [];
   
        for (let i = 0; i < selectedValues.length; i++) {
          for (let j = 0; j < this.options.length; j++) {
            if (selectedValues[i] === this.options[j].value) {
              answer.push (this.options[j].label);
            }
          }

          this.selections = answer;
        }
      }
}


it('renders without crashing', () => {
    const wrapper = shallow(<DLBTest />)
});

it('renders with preselection', () => {    
    console.log(preSelected);
    
    const wrapper = mount(<DLBTest selected={preSelected} />)
});
