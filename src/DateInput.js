import React, {useState, useEffect} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// import formatDateToStr from 'dateformat';
import {date2str} from "./date2str"
import {localStrToDate} from "./localStrToDate";
import {isSafari, isIE} from './browserDetect'

const DateInput = (props) => {

    const [showCalender, setShowCalender] = useState(false);

    const f = {...props}

    if (!f.value)          // undefined causes React to think
      f.value = ""        // A component is changing an uncontrolled input to be controlled.

    if (f.value instanceof Date) {
      f.dateValue = f.value
      f.value = date2str(f.value, f.format)
    } else {
      f.dateValue = localStrToDate(f.value)
    }

    const handleCalendarChange = (value) => {
      const e = {}
      e.target = {}
      e.target.name = f.name;
      e.target.value = date2str(value, f.format)
      f.onChange(e);
    }

    const triangle = (showCalender) ? <>&#9650;</> : <>&#9660;</>     // 9650   BLACK UP-POINTING TRIANGLE     9660   BLACK DOWN-POINTING TRIANGLE

    //  pattern="(?:19|20)\[0-9\]{2}-(?:(?:0\[1-9\]|1\[0-2\])-(?:0\[1-9\]|1\[0-9\]|2\[0-9\])|(?:(?!02)(?:0\[1-9\]|1\[0-2\])-(?:30))|(?:(?:0\[13578\]|1\[02\])-31))"
    // title="Enter a date in this format YYYY-MM-DD"

    if (isSafari || isIE) {
       return  <>
              <input type="text"
                    size={10}
                    data-date-format={f.format}
                    {...f}
                    />
               <button onClick={() => setShowCalender(!showCalender)}>{triangle}</button>

               {showCalender &&
                <>
                    <br></br>
                    <div style={{zIndex: 10, position: 'absolute'}}>
                    <Calendar
                          autoFocus
                          name={f.name}
                          value={f.dateValue}
                          onChange={handleCalendarChange} />
                    </div>
                </>}

            </>
    } else {
    return  <input type="date"
              className="date-field"
              placeholder={f.format}
              data-date-format={f.format}
              key={f.name}
              name={f.name}
              value={f.value}
              onChange={f.onChange} />
    }
}


export default DateInput;