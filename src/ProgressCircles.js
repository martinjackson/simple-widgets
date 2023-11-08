import React, { useState, useEffect } from 'react';
import { hasOwnProperty, generateCSSButton } from 'simple-widgets';

//import { hasOwnProperty } from './hasOwnProperty.js';
//import { generateCSSButton } from './Theme.js';

import blue from './blue-circle.svg';
import green from './green-check-circle.svg';
import gray from './gray-circle.svg';
import grayLine from './gray-line4.svg';

let progressParms = {};


const ProgressCircles = (props) => {
    const [position, setPosition] = useState(0);
    const [table, setTable] = useState([...props.table]);
    const [newProps, setNewProps] = useState(props);
    const [disablePrevious, setDisablePrevious] = useState(false);
    const [disableNext, setDisableNext] = useState(false);

    const validateTable = () => {
        for (let i = 0; i < props.table.length; i++) {
            if (props.table[i].status === 'current') {
                setPosition(i);
            }
        }
    }

    useEffect (() => {
        validateTable();
    }, [props.table]);

    useEffect (() => {
        validateTable();
    }, []);

    if (hasOwnProperty(props, 'table') === false) {
        console.log ('ProgressCircle: Missing the table prop');
        return (<span></span>);
    }

    const buildProgress = (row, i) => {
        if (row.status === 'none') {
            return (<div key={i} className="sw-circle_center">
                        <img src={gray} alt="Gray Circle" width="20px" height="20px" />
                    </div>)
        } else if (row.status === 'done') {
            return (<div key={i} className="sw-circle_center sw-circle_zindex">
                        <img src={green} alt="Green Circle" width="30px" height="30px" />
                    </div>)
        } else if (row.status === 'current') {
            if (hasOwnProperty(row, 'function') === true) {
                row.function();
            }
    
            return (<div key={i} className="sw-circle_center sw-circle_zindex">
                        <img src={blue} alt="Blue Circle" width="39px" height="39px" />
                    </div>)
        } else if (row.status === 'line') {
            return (<div key={i} className="sw-circle_center sw-circle_margin">
                        <img src={grayLine} alt="Gray Line" width="150%" height="39px" />
                    </div>)
        }
    }

    const buildLabels = (row, i) => {
        if (row.status === 'line') {
            return <div key={i} className="sw-circle_center">{row.label}</div>;
        } else {
            return <div key={i} className="sw-circle_center_width">{row.label}</div>;
        }
    }

    const previousButton = () => {
        let localTable = [...table];
        localTable[position].status = 'none';
        let done = false;
        for (let i = position; i >= 0 && done === false; i--) {
            if (i === 0) {
                setDisablePrevious(true);
            }

            if (localTable[i].status === 'done') {
                localTable[i].status = 'current';
                setPosition(i);
                done = true;
            }

            setTable(localTable);
            setDisableNext(false);

        }
    }

    const nextButton = () => {
        let localTable = [...table];

        setNewProps ((hasOwnProperty(localTable[position], 'setprops') === true) ? localTable[position].setprops() : props);
        console.log('newProps :', newProps);

        if (hasOwnProperty(localTable[position], 'validation') === true && localTable[position].validation() === false) {
            return;
        } else {
            localTable[position].status = 'done';
            let done = false;
            for (let i = position; i < localTable.length && done === false; i++) {
                if (i === localTable.length - 1) {
                    setDisableNext(true);
                }

                if (localTable[i].status === 'none') {
                    localTable[i].status = 'current';
                    setPosition(i);
                    done = true;
                }

                setTable(localTable);
                setDisablePrevious(false);
            }
        }
    }

    const genPreviousStyle = generateCSSButton ('sw-theme_buttonStyle', disablePrevious);
    const genNextStyle = generateCSSButton ('sw-theme_buttonStyle', disableNext);

    const previousName = (hasOwnProperty(props, 'previousbutton') === true) ? props.previousbutton : 'Previous';
    const nextName = (hasOwnProperty(props, 'nextbutton') === true) ? props.nextbutton : 'Next';

    let buttonGroup = null;
    if (hasOwnProperty(props, 'havebuttons') === true) {
        buttonGroup = 
            <div className={(hasOwnProperty(props, 'buttonright') === true) ? "sw-circle_right" : "sw-circle_left"}>
                {(hasOwnProperty(props, 'noprevious') === false) ?
                    <button name="previous" className={genPreviousStyle} disabled={disablePrevious}
                        onClick={previousButton}>{previousName}</button> :
                    null}
                <button name="next" className={genNextStyle} onClick={nextButton} disabled={disableNext}>
                    {nextName}
                </button>
            </div>
    }

//    console.log('newProps 2 :', newProps);

    return (
        <div>
            <div className="sw-circle_width">
                <div className="sw-circle_display">
                    {table.map((row, i) => buildProgress(row, i))}
                </div>
                <div className="sw-circle_display">
                    {table.map((row, i) => buildLabels(row, i))}
                </div>
            </div>
            {buttonGroup}
            {(hasOwnProperty(table[position], 'page') === true) ?
                table[position].page(newProps) : null}
        </div>
    )
}

export default ProgressCircles;

