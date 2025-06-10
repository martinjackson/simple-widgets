import React from 'react';
import { hasOwnProperty } from './hasOwnProperty';

// maj 2025-06-02 changes <p> to <div>

export function XButton(props) {
    return (
        <div className="sw-modal_divButton">
            <button name="close" onClick={() => props.closeFunct(false)}
                className="sw-modal_xbuttonStyle">X</button>
            {(hasOwnProperty(props, 'nounder') === true) ? <span></span> : <hr />}
        </div>
    );
}
