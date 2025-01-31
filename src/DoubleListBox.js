
import React, { useState, useEffect } from 'react';

import { hasOwnProperty } from './hasOwnProperty.js';
import { List } from './List.js';

/******************************************************************************************
 *
 * Double List Box
 *
 * The Double List Box has two list boxes that move items between the lists.  There is a
 * left list and a right list, with a set of buttons in the middle.  These buttons allow the
 * user to move the items between the boxes.  There is also a set of buttons to the right of
 * the right list.  This allows items in the right list box to be moved up and down.
 *
 *******************************************************************************************/


export const DoubleListBox = props => {
    const propValues      = (props.value === null   || props.value.length === 0)   ? [] : [...props.value]
    const propRightValues = (props.value === null   || props.value.length === 0)   ? [] : [...props.value]
    const propChoices     = (props.choices === null || props.choices.length === 0) ? [] : [...props.choices]

    const propLeftValues = propChoices.filter(item => propValues.find(r => r === item))
    const [_choices, setChoices] = useState(propChoices);   // Items for the left list box via the props
    const [leftValues, setLeftValues] = useState(propLeftValues);    // Items for the left list box
    const [rightValues, setRightValues] = useState(propRightValues); // Items for the right list box
    const [leftSelections, setLeftSelections] = useState([]);       // Items selected by the user in the left list
    const [rightSelections, setRightSelections] = useState([]);     // Items selected by the user in the right list
    const [leftEvent, setLeftEvent] = useState([]);                 // The event that caused items to be moved from the right list to the left list
    const [rightEvent, setRightEvent] = useState([]);               // The event that caused items to be moved from the left list to the right list

    /*************************************************************************************
     *
     * This will make sure that the choices and values props are set.  It will also
     * restore the Double List Box to values in the props.
     *
     *************************************************************************************/
    const reset = (props) => {
        if (hasOwnProperty(props, 'value') === false) {
            console.log("DoubleListBox props 'value' field is missing.");
        }

        if (hasOwnProperty(props, 'choices') === false) {
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

    // Called when left list changes
    useEffect (() => {
        if (props.leftChange === true) {
            setLeftValues(props.choices);
            setChoices(props.choices);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.choices])

    // Called when the right list changes
    useEffect (() => {
        if (props.rightChange) {
            setRightValues(props.value)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.value]);

    /***************************************************************************************
     *
     * This is called whenever there is a change to the right list and the value of the
     * right list is returned to the parent.
     *
     ***************************************************************************************/
    const reportChange = (right) => {
        let compName = 'DoubleListBox';
        if (hasOwnProperty(props, 'name') === true) {
            compName = props.name;
        }

        // don't modify 'e', a Synthetic Event
        props.onChange({target: {name: compName, value: right}});
    }

    /*************************************************************************************
     *
     * This will add a value to the a list.
     *
     *************************************************************************************/
    const add = (a, b) => {
        let ans = [...a];
        for (let i = 0; i < b.length; i++) {
            ans.push (b[i]);
        }
        return ans
    }

    /************************************************************************************
     *
     * This will remove items in the a list that are in the b list.
     *
     ************************************************************************************/
    const sub = (a, b) => {
        let ans = [];
        for (let i = 0; i < a.length; i++) {
            if ( !b.includes(a[i]) )
               ans.push (a[i]);
        }
        return ans
    }

    /***************************************************************************************
     *
     * This will move values from the left list to the right list and sort the list if the
     * props are set.
     *
     ***************************************************************************************/
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

    /**************************************************************************************
     *
     * This will remove any selections made by the user.  This is generally called after a
     * move has been made (when one of the buttons has been pressed).
     *
     **************************************************************************************/
    const clearSelections = () => {
        for (let i = 0; i < leftEvent.length; i++) {
            leftEvent[i].selected = false;
        }

        for (let i = 0; i < rightEvent.length; i++) {
            rightEvent[i].selected = false;
        }
    }

    /***************************************************************************************
     *
     * This will move values from the right list to the left list and sort the list if the
     * props are set.
     *
     ***************************************************************************************/
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

    /************************************************************************************
     *
     * This will move all the items in the left list to the right list and sort them if
     * necessary.
     *
     ************************************************************************************/
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

    /************************************************************************************
     *
     * This will move all the items in the right list to the left list and sort them if
     * necessary.
     *
     ************************************************************************************/
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

    /****************************************************************************************
     *
     * This determines which values in the left list have been selected.
     *
     ****************************************************************************************/
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

    /****************************************************************************************
     *
     * This determines which values in the right list have been selected.
     *
     ****************************************************************************************/
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

    /***************************************************************************************
     *
     * This will find the item in the list that should be moved up or down in the right
     * list.
     *
     * @param {*} right             the right list
     * @param {*} rightSelections   the items to move up or down in the list
     * @returns the index of where the values are in the list to be moved up or down
     *
     ***************************************************************************************/
    const findStartIndex = (right, rightSelections) => {
        for (let i = 0; i < right.length; i++) {
            if (rightSelections[0] === right[i]) {
                return i;
            }
        }

        return -1;
    }

    /****************************************************************************************
     *
     * This will move the selected items up one in the array
     *
     ****************************************************************************************/
    const moveItemsUp = (arr, startIndex, count) => {
        if (startIndex < 1 || startIndex + count > arr.length) {
          return arr; // Invalid input, return original array
        }

        for (let i = startIndex; i < startIndex + count; i++) {
          const temp = arr[i];
          arr[i] = arr[i - 1];
          arr[i - 1] = temp;
        }

        return arr;
    }

    /****************************************************************************************
     *
     * This will move the selected items down one in the array
     *
     ****************************************************************************************/
    const moveItemsDown = (arr, startIndex, count) => {
        if (startIndex < 0 || startIndex + count > arr.length) {
          return arr; // Invalid input, return original array
        }

        for (let i = startIndex + count - 1; i >= startIndex; i--) {
          if (i + 1 < arr.length) {
            const temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
          }
        }

        return arr;
    }

    /****************************************************************************************
     *
     * This moves the selected items to the top of the right list
     *
     ****************************************************************************************/
    const moveItemsToTop = (array, itemsToMove) => {
        // Create a new array to store the reordered elements
        const newArray = [];

        // Add the items to move to the new array
        for (const item of itemsToMove) {
          if (array.includes(item)) {
            newArray.push(item);
          }
        }

        // Add the remaining items from the original array
        for (const item of array) {
          if (!itemsToMove.includes(item)) {
            newArray.push(item);
          }
        }

        return newArray;
    }

    /****************************************************************************************
     *
     * This moves the selected items to the bottom of the right list
     *
     ****************************************************************************************/
    const moveItemsToBottom = (arr, itemsToMove) => {
        const result = [];
        const itemsToMoveSet = new Set(itemsToMove);

        // Iterate through the array and add elements to the result array
        for (const item of arr) {
          if (!itemsToMoveSet.has(item)) {
            result.push(item);
          }
        }

        // Add the items to move to the end of the result array
        for (const item of arr) {
          if (itemsToMoveSet.has(item)) {
            result.push(item);
          }
        }

        return result;
    }

    /****************************************************************************************
     *
     * This indicates that the Up button was pushed, which moves the items selected in the
     * right list to be moved up one row.
     *
     ****************************************************************************************/
    const moveUpSelectButton = () => {
        let right = [...rightValues];
        let start = findStartIndex(right, rightSelections);
        let newRight = moveItemsUp(right, start, rightSelections.length);

        setRightValues(newRight);
        setRightSelections([]);
        clearSelections();
        reportChange(newRight);
    }

    /****************************************************************************************
     *
     * This indicates that the Down button was pushed, which moves the items selected in the
     * right list to be moved down one row.
     *
     ****************************************************************************************/
    const moveDownSelectButton = () => {
        let right = [...rightValues];
        let start = findStartIndex(right, rightSelections);
        let newRight = moveItemsDown(right, start, rightSelections.length);

        setRightValues(newRight);
        setRightSelections([]);
        clearSelections();
        reportChange(newRight);
    }

    /****************************************************************************************
     *
     * This indicates that the Top button (up arrow with a line over it) was pushed, which
     * moves the items selected in the right list to be moved the top.
     *
     ****************************************************************************************/
    const moveTopSelectButton = () => {
        let right = [...rightValues];
        let newRight = moveItemsToTop(right, rightSelections);

        setRightValues(newRight);
        setRightSelections([]);
        clearSelections();
        reportChange(newRight);
    }

    /****************************************************************************************
     *
     * This indicates that the Bottom button (down arrow with a line under it) was pushed,
     * which moves the items selected in the right list to be moved the bottom.
     *
     ****************************************************************************************/
    const moveBottomSelectButton = () => {
        let right = [...rightValues];
        let newRight = moveItemsToBottom(right, rightSelections);

        setRightValues(newRight);
        setRightSelections([]);
        clearSelections();
        reportChange(newRight);
    }


    // Returns true if the num is a positive integer
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

    // Determine the size of both lists to orient the buttons
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

    // The SVG for the up arrow with a line on top of it
    let topButton = <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none">
                            <path stroke="black" strokeWidth="3" d="M25 10 L25 45" />
                            <path stroke="black" strokeWidth="3" d="M25 10 L15 25" />
                            <path stroke="black" strokeWidth="3" d="M25 10 L35 25" />
                            <path stroke="black" strokeWidth="3" d="M10  5 L40 5" />
                        </g>
                    </svg>;

    // The SVG for the up arrow
    let upButton =  <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none">
                            <path stroke="black" strokeWidth="3" d="M25 5 L25 45" />
                            <path stroke="black" strokeWidth="3" d="M25 5 L15 25" />
                            <path stroke="black" strokeWidth="3" d="M25 5 L35 25" />
                        </g>
                    </svg>;

    // The SVG for the down arrow
    let downButton =    <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none">
                                <path stroke="black" strokeWidth="3" d="M25  5 L25 40" />
                                <path stroke="black" strokeWidth="3" d="M25 45 L15 25" />
                                <path stroke="black" strokeWidth="3" d="M25 45 L35 25" />
                            </g>
                        </svg>;


    // The SVG for the down arrow with a line on under it
    let bottomButton =  <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none">
                                <path stroke="black" strokeWidth="3" d="M25  5 L25 40" />
                                <path stroke="black" strokeWidth="3" d="M25 40 L15 25" />
                                <path stroke="black" strokeWidth="3" d="M25 40 L35 25" />
                                <path stroke="black" strokeWidth="3" d="M10 45 L40 45" />
                            </g>
                        </svg>;



    return (    // Render the screen
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
                {(props.updownbuttons === true) ?
                    <div className="sw-dlb_colSt">
                        <button name="moveUpSelect"     className="sw-dlb_buttonSt" onClick={moveTopSelectButton}>{topButton}</button>
                        <button name="moveTop"          className="sw-dlb_buttonSt" onClick={moveUpSelectButton}>{upButton}</button>
                        <button name="moveDownSelect"   className="sw-dlb_buttonSt" onClick={moveDownSelectButton}>{downButton}</button>
                        <button name="moveBottom"       className="sw-dlb_buttonSt" onClick={moveBottomSelectButton}>{bottomButton}</button>
                    </div> :
                    <span></span>
                }
            </div>
        </div>
    )
}