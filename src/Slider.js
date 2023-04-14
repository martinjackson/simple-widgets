import React, { useState } from 'react'

export const Slider = (props) => {
    const min = (props.hasOwnProperty('start')) ? props.start : 0;
    const max = (props.hasOwnProperty('end')) ? props.end : 100;
    const startValue = (props.hasOwnProperty('startValue')) ? props.startValue : 0;
    const displayValue = (props.hasOwnProperty('noshow')) ? false : true;
    const whichSlider = (props.hasOwnProperty('sliderClass')) ? props.sliderClass: 4

    const [rangeValue, setRangeValue] = useState(startValue);

    return (
        <div className={`sw-slider${whichSlider}_rangeslider`}>
            <input type="range" className={`sw-slider${whichSlider}_range`} name="slider" min={min} defaultValue={startValue} max={max} onChange={(event) => setRangeValue(event.target.value)} onMouseMove={(event) => setRangeValue(event.target.value)} />
            { (displayValue === true) ? 
                <span id="id_rangeValue" name="rangeValue" value={rangeValue} className={`sw-slider${whichSlider}_rangeValue`}>
                    {rangeValue}
                </span> : null
            }
        </div>
    )
}

