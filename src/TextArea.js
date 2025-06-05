import React from 'react';

import './sw-textarea.css';

import { wasClickedScreen, processInvalidStyleScreen, checkValidityScreen
} from './Invalid';
import { hasOwnProperty } from './hasOwnProperty';

const trimString = (str, maxLength) => {
    if (str.length > maxLength){
        return str.slice(0, maxLength);
    } else{
        return str;
    }
}

export const characterCounter = (text) => {
    //added this line for case creating new document
    text = text ? text : '';
    if ( text !== 'undefined' ) {     // if (text !== null &&  is alway true
        let len = text.length;
        return len;
    }
    else {
        return 0;
    }
}

const validate = (props, which) => {
    let error = false;
    const errorTable = [
        { type: 'B', prop: 'maxChars' },
        { type: 'B', prop: 'name' },
        { type: 'B', prop: 'nameVar' },
        { type: 'B', prop: 'setFunct' },
        { type: 'E', prop: 'invalid' },
        { type: 'E', prop: 'setInvalid' },
        { type: 'E', prop: 'errorID' },
    ]

    for (let i = 0; i < errorTable.length; i++) {
        if (errorTable[i].type === 'B' || errorTable[i].type === which) {
            if (hasOwnProperty(props, errorTable[i].prop) === false) {
                console.log (`TextArea or TextAreaError is missing the ${errorTable[i].prop} prop`);
                error = true;
            }
        }
    }

    return (error === true) ? false : true;
}

export const TextArea = (props) => {
    const {maxChars, name, nameVar, setFunct, ...rest} = props;

    if (validate(props, 'T') === false) {
        return (<span></span>);
    } else {
        return (
            <div>
                <textarea
                    name={name}
                    value={characterCounter(nameVar) >= maxChars ? trimString(nameVar, maxChars) : nameVar}
                    onChange={(event) => setFunct(event.target.value)}
                    onKeyUp={() => characterCounter(nameVar)}
                    {...rest}
                />
                <p className={(characterCounter(nameVar) >= maxChars) ? "sw-textarea_word_count_red" : className="sw-textarea_word_count"}>{`${characterCounter(nameVar)} of  ${maxChars}`}</p>
            </div>
        )
    }
}

export const TextAreaError = (props) => {
    const {maxChars, invalid, setInvalid, errorID, name, nameVar, setFunct, cssClass, ...rest} = props;

    if (validate(props, 'E') === false) {
        return (<span></span>);
    } else {
        return (
            <div className="sw-invalid_checkForError">
                <textarea
                    name={name}
                    value={characterCounter(nameVar) >= maxChars ? trimString(nameVar, maxChars) : nameVar}
                    onChange={(event) => setFunct(event.target.value)}
                    onKeyUp={() => characterCounter(nameVar)}
                    onClick={() => wasClickedScreen(invalid, errorID, setInvalid)}
                    className={cssClass + ' ' + processInvalidStyleScreen(invalid, errorID) }
                    {...rest}
                />
                {checkValidityScreen(invalid, errorID)}
                <p className={(characterCounter(nameVar) >= maxChars) ? "sw-textarea_word_count_red" : className="sw-textarea_word_count"}>{`${characterCounter(nameVar)} of  ${maxChars}`}</p>
            </div>
        )
    }
}
