import React from 'react';
import autoBind from 'react-autobind';

import UnstyledDatePicker from './UnstyledDatePicker.js'

export default class DatePicker extends React.Component {

  constructor(props) {
    super(props);

    autoBind(this);
  }

  render() {
      return <UnstyledDatePicker {...this.props} defaultStyles />
  }
}
