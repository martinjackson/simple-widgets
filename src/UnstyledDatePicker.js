import React from 'react';
import autoBind from 'react-autobind';

import dateFns from 'date-fns';
import dateFnsFormat from 'date-fns/format';

// https://react-day-picker.js.org/
// http://react-day-picker.js.org/examples/basic

import { DateUtils } from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput'

const FORMAT = 'M/D/YYYY';

function parseDate(str, format, locale) {
  const parsed = dateFns.parse(str, format, { locale });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
}

function formatDate(date, format, locale) {
  return dateFnsFormat(date, format, { locale });
}

export default class UnstyledDatePicker extends React.Component {

  constructor(props) {
    super(props);

    autoBind(this);
  }

  handleDayChange(selectedDay, modifiers, dayPickerInput) {
    const value = dateFns.format(selectedDay, this.props.format)
    // console.log('name:', this.props.name, 'day:', value);
    
    let e = {}
    e.target = {}
    e.target.name = this.props.name
    e.target.value = value
    this.props.onChange(e)

    /*
    value = dayPickerInput.getInput();
    this.setState({
      selectedDay,
      isEmpty: !input.value.trim(),
      isValidDay: typeof selectedDay !== 'undefined',
      isDisabled: modifiers.disabled === true,
    });
    */
  }
  
  render() {
      let {format, ...props} =this.props
      if (!format) 
         format = 'M/D/YYYY'

      props.format = format

      return <DayPickerInput
                  {...props}
                  formatDate={formatDate}                  
                  parseDate={parseDate}
                  onDayChange={this.handleDayChange}
                  placeholder={`${dateFns.format(new Date(), format)}`}
              />
  }

}

