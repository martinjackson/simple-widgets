import React from 'react';

import { hasOwnProperty } from './hasOwnProperty.js';
import { AccordionSingle } from './AccordionSingle.js';

import './sw-accordion.css';

export const Accordion = props => {
    let type = 'text';
    if (hasOwnProperty(props, 'type') === true) {
        type = props.type;
    }

    let number = 0;
    if (hasOwnProperty(props, 'number') === true) {
        number = parseInt(props.number);
    }

    return (
        <div>
            { props.display.map((row,k) => {
                return (<AccordionSingle key={k}
                            number={number}
                            button={row.button}
                            text={row.text}
                            type={type} /> )})
            }
        </div>
    );
}

