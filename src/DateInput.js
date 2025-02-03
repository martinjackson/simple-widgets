import React from 'react';

import { date2str } from './index.js'
import {Input}      from './forms/index.js'

//--------------------------------------------------------------------------------
export const DateInput = (props) => {

    let { name, value, format, onChange, ...whatsLeft  } = props

    if (!value)          // undefined causes React to think
      value = ""        // A component is changing an uncontrolled input to be controlled.

    if (value instanceof Date) {
      value = date2str(value, format)
    }
    return  <Input type="date"
              {...whatsLeft}
              key={name}
              name={name}
              value={value}
              onChange={onChange}

              placeholder={format}
              data-date-format={format}
              />
}

/*
 see https://stackoverflow.com/questions/7372038/is-there-any-way-to-change-input-type-date-format
for using data-date-format with CSS and JS to format the date the way

The rest is a bit of CSS and JS: http://jsfiddle.net/g7mvaosL/

$("input").on("change", function() {
    this.setAttribute(
        "data-date",
        moment(this.value, "YYYY-MM-DD")
        .format( this.getAttribute("data-date-format") )
    )
}).trigger("change")


input {
    position: relative;
    width: 150px; height: 20px;
    color: white;
}

input:before {
    position: absolute;
    top: 3px; left: 3px;
    content: attr(data-date);
    display: inline-block;
    color: black;
}

input::-webkit-datetime-edit, input::-webkit-inner-spin-button, input::-webkit-clear-button {
    display: none;
}

input::-webkit-calendar-picker-indicator {
    position: absolute;
    top: 3px;
    right: 0;
    color: black;
    opacity: 1;
}
*/
