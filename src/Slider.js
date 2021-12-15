import React, { useState, useEffect } from 'react'

const Slider = (props) => {
    const min = (props.hasOwnProperty('start')) ? props.start : 0;
    const max = (props.hasOwnProperty('end')) ? props.end : 100;
    const startValue = (props.hasOwnProperty('startValue')) ? props.startValue : 0;
    const displayValue = (props.hasOwnProperty('noshow')) ? false : true;

    const [rangeValue, setRangeValue] = useState(startValue);

    return (
        <div className="slider_rangeslider">
            <input type="range" className="slider_range" name="slider" min={min} defaultValue={startValue} max={max} onChange={(event) => setRangeValue(event.target.value)} onMouseMove={(event) => setRangeValue(event.target.value)} />
            { (displayValue === true) ? 
                <span id="id_rangeValue" name="rangeValue" value={rangeValue} className="slider_rangeValue">
                    {rangeValue}
                </span> : null
            }
        </div>
    )
}

export default Slider;