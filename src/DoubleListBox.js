
import React, { useState, useRef, useEffect } from 'react';

import { List } from './List.js';

const hasProperty = (obj, propName) => { return !!Object.getOwnPropertyDescriptor(obj, propName);}

const DoubleListBox = props => {
    const leftRef = useRef();
    const rightRef = useRef();

    const [choices, setChoices] = useState([...props.choices || []]);
    const [leftValues, setLeftValues] = useState(choices.filter( item => ![...props.value || []].find(r => r === item)));
    const [rightValues, setRightValues] = useState([...props.value || []]);
    const [leftSelections, setLeftSelections] = useState([]);
    const [rightSelections, setRightSelections] = useState([]);

    const reset = (props) => {
        if (!props.value) {
            console.log("DoubleListBox props 'value' field is missing.");
        }
    
        if (!props.choices) {
            console.log("DoubleListBox props 'choices' field is missing.");
        }
    
        const choices = [...props.choices || []]
        const right = [...props.value || []]
        const left = choices.filter( item => !right.find(r => r === item))  // not in the right
        
        setChoices(choices);
        setLeftValues(left);
        setRightValues(right);
        setLeftSelections([]);
        setRightSelections([]);
    }

    useEffect (() => reset(props), [props.choices]);

    const reportChange = (right) => {
        let compName = 'DoubleListBox';
        if (hasProperty(props, 'name') === true) {
            compName = props.name;
        }
        
        // dont modify 'e', a Synthetic Event
        props.onChange({target: {name: compName, value: right}});
    }

    const add = (a,b) => {
        let ans = [...a];
        for (let i = 0; i < b.length; i++) {
            ans.push (b[i]);
        }
        return ans
    }

    const sub = (a,b) => {
        let ans = [];
        for (let i = 0; i < a.length; i++) {
            if ( !b.includes(a[i]) )
               ans.push (a[i]);
        }
        return ans
    }

    const moveRightSelectButton = (e) => {
        let right = add(rightValues, leftSelections)
        let left =  sub(leftValues, right)

        setLeftValues(left);
        setRightValues(right),
        setLeftSelections([]);
        reportChange(right);

        clearSelections();
    }

    const clearSelections = () => {
        const leftBox = leftRef.current;
        const rightBox = rightRef.current;

        for (let i = 0; i < leftBox.length; i++) {
            leftBox[i].selected = false;
        }

        for (let i = 0; i < rightBox.length; i++) {
            rightBox[i].selected = false;
        }
    }

    const moveLeftSelectButton = (e) => {
        let left = add(leftValues, rightSelections)
        let right =  sub(rightValues, left)

        setLeftValues(left);
        setRightValues(right);
        setRightSelections([]);
        reportChange(right);

        clearSelections();
    }

    const moveRightAllButton = (e) => {
        let left = leftValues;
        let right = [...rightValues];

        for (let i = 0; i < left.length; i++) {
            right.push (left[i]);
        }

        setLeftValues([]);
        setRightValues(right);
        setLeftSelections([]);
        reportChange(right);
    }

    const moveLeftAllButton = (e) => {
        let left = [...leftValues];
        let right = rightValues;

        for (let i = 0; i < right.length; i++) {
            left.push (right[i]);
        }

        setLeftValues(left);
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

        const leftBox = leftRef.current;

        let values = [];
        for (let i = 0; i < leftBox.length; i++) {
            if (leftBox[i].selected === true) {
                values.push (leftBox[i].value);
            }
        }

        setLeftSelections(values);
    }

    const rightHandleChange = (e) => {
        if (typeof e === 'string')
          return;   // Passed in by Radio, can be ignored, next event has target.name

        if (typeof e.preventDefault === 'function') {
          e.preventDefault();
        }

        const rightBox = rightRef.current;

        let values = [];
        for (let i = 0; i < rightBox.length; i++) {
            if (rightBox[i].selected === true) {
                values.push (rightBox[i].value);
            }
        }

        setRightSelections(values);
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
    if (hasProperty(props, 'size') === true) {
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
                    <List list={leftValues} ref={leftRef} size={size} onChange={leftHandleChange} keyname="left" className="sw-dlb_listSt" />
                </div>
                <div className="sw-dlb_colSt">
                    <button name="moveRightSelect"   className="sw-dlb_buttonSt" onClick={moveRightSelectButton}>&gt;</button>
                    <button name="moveRightAll"      className="sw-dlb_buttonSt" onClick={moveRightAllButton}>&gt;&gt;</button>
                    <button name="moveLeftSelect"    className="sw-dlb_buttonSt" onClick={moveLeftSelectButton}>&lt;</button>
                    <button name="moveLeftAll"       className="sw-dlb_buttonSt" onClick={moveLeftAllButton}>&lt;&lt;</button>
                </div>
                <div className="sw-dlb_display">
                    <p className="sw-dlb_rightClass"> {props.rightTitle}</p>
                    <List list={rightValues} ref={rightRef} size={size} onChange={rightHandleChange} keyname="right" className="sw-dlb_listSt" />
                </div>
            </div>
        </div>
    )
}

export default DoubleListBox;