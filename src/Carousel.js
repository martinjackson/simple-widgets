import React, { useState } from 'react';

import { hasOwnProperty } from './index.js';

import './sw-carousel.css';

export const Carousel = props => {
    let width = '100%';
    if (hasOwnProperty(props, 'width') === true) {
        width = props.width;
    }

    let height = '50%';
    if (hasOwnProperty(props, 'height') === true) {
        outerHeight = props.height;
    }

    let previous = 'Previous';
    if (hasOwnProperty(props, 'previous') === true) {
        previous = props.previous;
    }

    let next = 'Next';
    if (hasOwnProperty(props, 'next') === true) {
        next = props.next;
    }

    const [index, setIndex] = useState(0);

    const previousButton = () => {
        let localIndex = index;

        localIndex--;
        if (localIndex <= -1) {
            localIndex = props.display.length - 1;
        }

        setIndex(localIndex);
    }

    const nextButton = () => {
        let localIndex = index;

        localIndex++;
        if (localIndex >= props.display.length) {
            localIndex = 0;
        }

        setIndex(localIndex);
    }

    return (
        <div className="sw-carousel_div">
            <div>
                <img src={props.display[index].image}
                     alt={props.display[index].alt}
                     width={width} height={height} />
            </div>
            <div className="sw-carousel_flex">
                <button name="previous" onClick={previousButton} className="sw-carousel_button" >
                    {previous}
                </button>
                <button name="next" onClick={nextButton} className="sw-carousel_button" >
                    {next}
                </button>
            </div>
        </div>
    );
}

