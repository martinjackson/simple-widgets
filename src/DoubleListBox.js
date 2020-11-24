
import React from 'react';
import autoBind from 'react-autobind';

import { List } from './List.js';

const reset = (props,state) => {

    if (props.values) {
        console.log("DoubleListBox props 'values' not used, please use 'value'.");
    }

    if (!props.value) {
        console.log("DoubleListBox props 'value' field is missing.");
        props.value = []
    }

    if (!props.choices) {
        console.log("DoubleListBox props 'choices' field is missing.");
        props.choices = []
    }

    return {
        choices: [...props.choices],
        leftValues: [...props.choices],
        rightValues: [...props.value],
        leftSelections: [],
        rightSelections: [],
    }

}

export default class DoubleListBox extends React.Component {
    constructor(props) {
        super(props);
        autoBind(this);

        this.leftRef = React.createRef();
        this.rightRef = React.createRef();

        this.state = reset(this.props, this.state)
    }


    static getDerivedStateFromProps(props, state) {
        for (let i = 0; i < props.choices.length; i++) {
            if (props.choices[i] !== state.choices[i]) {
                return reset(props, state)
            }
        }

        return null;
    }

    render() {

        const topSt = { display: 'flex' }
        const colSt = { flexDirection: 'column' }
        const listSt = { width: 300 }
        const buttonSt = {
            width: 50,
            margin: 10,
            backgroundColor: this.props.buttonBackgroundColor || 'blue',
            color: this.props.buttonColor || 'white',
        }

        return (
            <div>
                <div style={topSt}>
                    <label>{this.props.title}</label>
                </div>
                <div style={topSt}>
                    <label>{this.props.leftTitle}</label>
                    <label style={listSt}>{this.props.rightTitle}</label>
                </div>
                <div style={topSt}>
                    <List list={this.state.leftValues} ref={this.leftRef} onChange={this.leftHandleChange} keyname="left" style={listSt} />
                    <div style={colSt}>
                        <button name="moveRightSelect"   style={buttonSt} onClick={this.moveRightSelectButton}>&gt;</button><br />
                        <button name="moveRightAll"      style={buttonSt} onClick={this.moveRightAllButton}>&gt;&gt;</button><br />
                        <button name="moveLeftSelect"    style={buttonSt} onClick={this.moveLeftSelectButton}>&lt;</button><br />
                        <button name="moveLeftAll"       style={buttonSt} onClick={this.moveLeftAllButton}>&lt;&lt;</button><br />
                    </div>
                    <List list={this.state.rightValues} ref={this.rightRef}  onChange={this.rightHandleChange} keyname="right" style={listSt} />
                </div>
            </div>
        )
    }

    reportChange(right) {
        // dont modify 'e', a Synthetic Event
        this.props.onChange({target: {name: this.props.name, value: right}});
    }

    add(a,b) {
        let ans = [...a];
        for (let i = 0; i < b.length; i++) {
            ans.push (b[i]);
        }
        return ans
    }

    sub(a,b) {
        let ans = [];
        for (let i = 0; i < a.length; i++) {
            if ( !b.includes(a[i]) )
               ans.push (a[i]);
        }
        return ans
    }

    moveRightSelectButton(e) {
        let right = this.add(this.state.rightValues, this.state.leftSelections)
        let left =  this.sub(this.state.leftValues, right)

        this.setState ({
            leftValues: left,
            rightValues: right,
            leftSelections: []
        }, () => {this.reportChange(right)});

        this.clearSelections();
    }

    clearSelections() {
        const leftBox = this.leftRef.current;
        const rightBox = this.rightRef.current;

        for (let i = 0; i < leftBox.length; i++) {
            leftBox[i].selected = false;
        }

        for (let i = 0; i < rightBox.length; i++) {
            rightBox[i].selected = false;
        }
    }

    moveLeftSelectButton(e) {
        let left = this.add(this.state.leftValues, this.state.rightSelections)
        let right =  this.sub(this.state.rightValues, left)

        this.setState ({
            leftValues: left,
            rightValues: right,
            rightSelections: []
        }, () => {this.reportChange(right)});

        this.clearSelections();
    }

    moveRightAllButton(e) {
        let left = this.state.leftValues;
        let right = [...this.state.rightValues];

        for (let i = 0; i < left.length; i++) {
            right.push (left[i]);
        }

        this.setState ({
            leftValues: [],
            rightValues: right,
            leftSelections: [],
        }, () => {this.reportChange(right)});
    }

    moveLeftAllButton(e) {
        let left = [...this.state.leftValues];
        let right = this.state.rightValues;

        for (let i = 0; i < right.length; i++) {
            left.push (right[i]);
        }

        this.setState ({
            leftValues: left,
            rightValues: [],
            rightSelections: [],
        }, () => {this.reportChange([])});
    }

    leftHandleChange(e) {
        if (typeof e === 'string')
          return;   // Passed in by Radio, can be ignored, next event has target.name

        if (typeof e.preventDefault === 'function') {
          e.preventDefault();
        }

        const leftBox = this.leftRef.current;

        let values = [];
        for (let i = 0; i < leftBox.length; i++) {
            if (leftBox[i].selected === true) {
                values.push (leftBox[i].value);
            }
        }

        this.setState ({ leftSelections: values });
    }

    rightHandleChange(e) {
        if (typeof e === 'string')
          return;   // Passed in by Radio, can be ignored, next event has target.name

        if (typeof e.preventDefault === 'function') {
          e.preventDefault();
        }

        const rightBox = this.rightRef.current;

        let values = [];
        for (let i = 0; i < rightBox.length; i++) {
            if (rightBox[i].selected === true) {
                values.push (rightBox[i].value);
            }
        }

        this.setState ({ rightSelections: values });
    }
}
