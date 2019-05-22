import React from 'react';
import autoBind from 'react-autobind';
import { List } from './List';

export default class DoubleListBox extends React.Component {
    constructor(props) {
        super(props);
        autoBind(this);

        this.state = {
            leftValues: this.props.leftList || this.props.choices,
            rightValues: this.props.rightList || this.props.value,
            leftSelections: [],
            rightSelections: [],
        }
    }

    static getDerivedStateFromProps(props, state) {
        const choices = props.leftList || props.choices;
        for (let i = 0; i < choices.length; i++) {
            if (choices[i] !== state.leftValues[i]) {
                return { leftValues: choices }
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
                    <List list={this.state.leftValues} id="leftBox" onChange={this.leftHandleChange} style={listSt} />
                    <div style={colSt}>
                        <button name="moveRightSelect"   style={buttonSt} onClick={this.moveRightSelectButton}>&gt;</button><br />
                        <button name="moveRightAll"      style={buttonSt} onClick={this.moveRightAllButton}>&gt;&gt;</button><br />
                        <button name="moveLeftSelect"    style={buttonSt} onClick={this.moveLeftSelectButton}>&lt;</button><br />
                        <button name="moveLeftAll"       style={buttonSt} onClick={this.moveLeftAllButton}>&lt;&lt;</button><br />
                    </div>
                    <List list={this.state.rightValues} id="rightBox" onChange={this.rightHandleChange} style={listSt} />
                </div>
            </div>
        )
    }

    reportChange(e, value) {
        // dont modify 'e', a Synthetic Event
        this.props.onChange({target: {name: this.props.name, value: value}});
    }

    moveRightSelectButton(e) {
        console.log ('moveRightSelectButton');

        let selectedValues = this.state.leftSelections;
        let left = this.state.leftValues;
        let right = this.state.rightValues;

        console.log ('selectedValues', selectedValues);

        for (let i = 0; i < selectedValues.length; i++) {
            right.push (selectedValues[i]);
            for (let j = 0; j < left.length; j++) {
                if (selectedValues[i] === left[j]) {
                    left.splice (j, 1);
                }
            }
        }

        this.setState ({
            leftValues: left,
            rightValues: right,
            leftSelections: []
        });

        this.reportChange(e,right)

    }

    moveRightAllButton(e) {
        console.log ('moveRightAllButton');
        let left = this.state.leftValues;
        let right = this.state.rightValues;

        for (let i = 0; i < left.length; i++) {
            right.push (left[i]);
        }

        this.setState ({
            leftValues: [],
            rightValues: right,
            leftSelections: [],
        }, () => {this.reportChange(e,right)});
    }

    moveLeftSelectButton(e) {
        console.log ('moveLeftSelectButton');
        let selectedValues = this.state.rightSelections;
        let left = this.state.leftValues;
        let right = this.state.rightValues;

        for (let i = 0; i < selectedValues.length; i++) {
            left.push (selectedValues[i]);
            for (let j = 0; j < right.length; j++) {
                if (selectedValues[i] === right[j]) {
                    right.splice (j, 1);
                }
            }
        }

        this.setState ({
            leftValues: left,
            rightValues: right,
            rightSelections: []
        }, () => {this.reportChange(e,right)});
    }

    moveLeftAllButton(e) {
        console.log ('moveLeftSelectButton')
        let left = this.state.leftValues;
        let right = this.state.rightValues;

        for (let i = 0; i < right.length; i++) {
            left.push (right[i]);
        }

        this.setState ({
            leftValues: left,
            rightValues: [],
            rightSelections: [],
        });

        this.reportChange(e,right)
    }

    leftHandleChange(e) {
        if (typeof e === 'string')
          return;   // Passed in by Radio, can be ignored, next event has target.name

        if (typeof e.preventDefault === 'function') {
          e.preventDefault();
        }

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

        let values = [];
        for (let i = 0; i < rightBox.length; i++) {
            if (rightBox[i].selected === true) {
                values.push (rightBox[i].value);
            }
        }

        this.setState ({ rightSelections: values });
    }
}
