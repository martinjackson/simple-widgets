import React, { useState } from 'react';

import './sw-accordion.css';

export const AccordionSingle = props => {
    const [hide, setHide] = useState(true);

    const buttonClick = () => {
        setHide((hide === true) ? false : true);
    }

    let displayPart = null;
    if (props.type === 'html') {
        displayPart = props.text;
    } else {
        displayPart = <p>{props.text}</p>;
    }

    let keyButton = `acc_${props.number}_${props.index}_button`;
    let keyText = `acc_${props.number}_${props.index}_text`;
    let mainKey = keyButton + '_' + keyText;

    return (
        <div>
            <div key={mainKey}>
                <button key={keyButton} name={`button + ${props.number}`} onClick={() => buttonClick()} className="sw-accordion_button">
                    {props.button}
                </button>
                <div key={keyText} hidden={hide} className="sw-accordion_margin">
                    {displayPart}
                </div>
            </div>
        </div>
    );
}

