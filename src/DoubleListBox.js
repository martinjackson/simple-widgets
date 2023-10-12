
import React, { useState, useEffect } from 'react';

import { hasOwnProperty } from './hasOwnProperty.js';
import { List } from './List.js';


export const DoubleListBox = props => {
    const [choices, setChoices] = useState((props.choices === null || props.choices.length === 0) ? [] : [...props.choices]);
    const [leftValues, setLeftValues] = useState(choices.filter( item => (props.value === null || props.value.length === 0) ? [] : [...props.value].find(r => r === item)));
    const [rightValues, setRightValues] = useState((props.value === null || props.value.length === 0) ? [] : [...props.value]);
    const [leftSelections, setLeftSelections] = useState([]);
    const [rightSelections, setRightSelections] = useState([]);
    const [leftEvent, setLeftEvent] = useState([]);
    const [rightEvent, setRightEvent] = useState([]);

    const reset = (props) => {
        if (!props.value) {
            console.log("DoubleListBox props 'value' field is missing.");
        }

        if (!props.choices) {
            console.log("DoubleListBox props 'choices' field is missing.");
        }

        const choices = (props.choices === null) ? [] : [...props.choices];
        const right = (props.value === null) ? [] : [...props.value];
        const left = choices.filter( item => !right.find(r => r === item))  // not in the right

        setChoices(choices);
        setLeftValues(left);
        setRightValues(right);
        setLeftSelections([]);
        setRightSelections([]);
    }

    useEffect (() => reset(props), [props])    // props.choices

    useEffect (() => {
        if (props.leftChange === true) {
            setLeftValues(props.choices);
            setChoices(props.choices);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.choices])

    useEffect (() => {
        if (props.rightChange) {
            setRightValues(props.value)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.value]);

    const reportChange = (right) => {
        let compName = 'DoubleListBox';
        if (hasOwnProperty(props, 'name') === true) {
            compName = props.name;
        }

        // dont modify 'e', a Synthetic Event
        props.onChange({target: {name: compName, value: right}});
    }

    const add = (a, b) => {
        let ans = [...a];
        for (let i = 0; i < b.length; i++) {
            ans.push (b[i]);
        }
        return ans
    }

    const sub = (a, b) => {
        let ans = [];
        for (let i = 0; i < a.length; i++) {
            if ( !b.includes(a[i]) )
               ans.push (a[i]);
        }
        return ans
    }

    const moveRightSelectButton = () => {
        let right = add(rightValues, leftSelections);
        let left =  sub(leftValues, right);

        if (props.sortLeft === true) {
            setLeftValues(left.sort());
        } else {
            setLeftValues(left);
        }

        if (props.sortRight === true) {
            setRightValues(right.sort());
        } else {
            setRightValues(right);
        }
        setLeftSelections([]);
        reportChange(right);

        clearSelections();
    }

    const clearSelections = () => {
        for (let i = 0; i < leftEvent.length; i++) {
            leftEvent[i].selected = false;
        }

        for (let i = 0; i < rightEvent.length; i++) {
            rightEvent[i].selected = false;
        }
    }

    const moveLeftSelectButton = () => {
        let left = add(leftValues, rightSelections)
        let right =  sub(rightValues, left)

        if (props.sortLeft === true) {
            setLeftValues(left.sort());
        } else {
            setLeftValues(left);
        }
        if (props.sortRight === true) {
            setRightValues(right.sort());
        } else {
            setRightValues(right);
        }
        setRightSelections([]);
        reportChange(right);

        clearSelections();
    }

    const moveRightAllButton = () => {
        let left = leftValues;
        let right = [...rightValues];

        for (let i = 0; i < left.length; i++) {
            right.push (left[i]);
        }

        setLeftValues([]);
        if (props.sortRight === true) {
            setRightValues(right.sort());
        } else {
            setRightValues(right);
        }
        setLeftSelections([]);
        reportChange(right);
    }

    const moveLeftAllButton = () => {
        let left = [...leftValues];
        let right = rightValues;

        for (let i = 0; i < right.length; i++) {
            left.push (right[i]);
        }

        if (props.sortLeft === true) {
            setLeftValues(left.sort());
        } else {
            setLeftValues(left);
        }
        setRightValues([]);
        setRightSelections([]);
        reportChange([]);
    }

    const leftHandleChange = (e) => {
        if (typeof e === 'string')
          return;   // Passed in by Radio, can be ignored, next event has target.name

        if (typeof e.preventDefault === 'function') {
            e.preventDefault();
        }

        let values = [];
        for (let i = 0; i < e.target.length; i++) {
            if (e.target[i].selected === true) {
                values.push (e.target[i].value);
            }
        }

        setLeftSelections(values);
        setLeftEvent(e.target);
    }

    const rightHandleChange = (event) => {
        if (typeof event === 'string')
          return;   // Passed in by Radio, can be ignored, next event has target.name

        if (typeof event.preventDefault === 'function') {
          event.preventDefault();
        }

        let values = [];
        for (let i = 0; i < event.target.length; i++) {
            if (event.target[i].selected === true) {
                values.push (event.target[i].value);
            }
        }

        setRightSelections(values);
        setRightEvent(event.target);
    }

    const isPosInt = (num) => {
        return /^\d*$/.test(num);
    }

/*
    if (props.choices.length === 0) {
        reset(props)
    }

    for (let i = 0; i < props.choices.length; i++) {
        if (props.choices[i] !== choices[i]) {
            reset(props)
        }
    }
*/

    let defaultSize = 7;

    if ((props.leftTitle && !props.rightTitle) || !props.leftTitle && props.rightTitle) {
        console.log ('There must both be a right title and a left title');
    } else if (props.leftTitle && props.rightTitle) {
        defaultSize = 10;
    } else if (!props.leftTitle && !props.rightTitle) {
        defaultSize = 7;
    }

    let size = 0;
    if (hasOwnProperty(props, 'size') === true) {
        if (props.size === 'all') {
            size = Math.max(defaultSize, props.choices.length);
        } else if (isPosInt(props.size)) {
            size = Math.max(defaultSize, parseInt(props.size));  // arrow buttons need 7 or 10 lines
        } else {
            size = defaultSize;
        }
    }
    else {
        size = defaultSize;  // arrow buttons need 7 or 10 lines
    }


    return (
        <div className="sw-dlb_overallStyle">
            <div  className="sw-dlb_titleClass">
                <label>{props.title}</label>
            </div>
            <div className="sw-dlb_topSt">
                <div className="sw-dlb_display">
                    <p className="sw-dlb_leftClass">{props.leftTitle}</p>
                    <List list={leftValues} size={size} onChange={leftHandleChange} keyname="left" className="sw-dlb_listSt" />
                </div>
                <div className="sw-dlb_colSt">
                    <button name="moveRightSelect"   className="sw-dlb_buttonSt" onClick={moveRightSelectButton}>&gt;</button>
                    <button name="moveRightAll"      className="sw-dlb_buttonSt" onClick={moveRightAllButton}>&gt;&gt;</button>
                    <button name="moveLeftSelect"    className="sw-dlb_buttonSt" onClick={moveLeftSelectButton}>&lt;</button>
                    <button name="moveLeftAll"       className="sw-dlb_buttonSt" onClick={moveLeftAllButton}>&lt;&lt;</button>
                </div>
                <div className="sw-dlb_display">
                    <p className="sw-dlb_rightClass"> {props.rightTitle}</p>
                    <List list={rightValues} size={size} onChange={rightHandleChange} keyname="right" className="sw-dlb_listSt" />
                </div>
            </div>
        </div>
    )
}