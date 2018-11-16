
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import autoBind from 'react-autobind';

const R = require('ramda')

import { SelectionPanel, SelectionPanel2 } from './SelectionPanels'
import { SelectableListItem, SelectedListItem } from './ListItems'
import {
  updateValueInCollection,
  removeValueInCollection,
  moveLeftToRight,
  moveRightToLeft,
  moveVertically
} from './utils'


class DoubleListBox extends Component {

  constructor(props) {
      super(props);
      autoBind(this);

      const answer = this.breakdownProps(props) 

      this.state = {...answer}
      this.state.leftSearchTerm=''
      this.state.rightSearchTerm=''

      console.log('Initial state:', this.state);
      
  }

  breakdownProps(props) {
    const options = [];
    props.choices.map(s => options.push({value: s, label: s}))
    const selected = props.value

    const leftOptions = options.map( (option) => {
          if (R.contains(option.value, selected)) {
            return R.set(R.lensProp('hidden'), true, option)
          }
          return option
        }
      );

      const rightOptions = options.filter( option => R.contains(option.value, selected) );

      return {leftOptions, rightOptions, options}
  }

  componentWillReceiveProps(nextProps) {
    const {leftOptions, rightOptions, options} = this.breakdownProps(nextProps)
    const selected = nextProps.value

    if (R.isEmpty(this.state.leftOptions) && R.isEmpty(this.state.rightOptions)) {

      this.setState({leftOptions, rightOptions, options})
    }
    else {
      this.setState({options})
    }
  }


  allSelect() {
    let leftOptions = this.state.leftOptions;
    for (let i = 0; i < leftOptions.length; i++) {
      leftOptions[i].isSelected = true;
    }

    this.setState ((prevState) => ({leftOptions: leftOptions}));

    this.moveRight();
  }

  onLeftSelect(obj) {
    this.handleSelectedItem(obj, 'leftOptions')
  }

  onRightSelect(obj) {
    this.handleSelectedItem(obj, 'rightOptions')
  }

  handleChange()  {
    if (this.props.onChange) {
      console.log('handleChange:', this.state);
      
      let selectedValues = R.map(R.prop('value'), this.state.rightOptions)
      let options = this.state.options
      const answer = [];

      console.log('handleChange:', selectedValues, );
      
      for (let i = 0; i < selectedValues.length; i++) {
        for (let j = 0; j < options.length; j++) {
          if (selectedValues[i] === options[j].value) {
            answer.push (options[j].label);
          }
        }
      }

      const e = {}
      e.target = {}
      e.target.name = this.props.name
      e.target.value = answer
      this.props.onChange(e);         
    }
  }


  handleSelectedItem(obj, stateLabel) {
    const newState = {};
    const value = R.keys(obj)[0];
    if (obj[value]) {
      newState[stateLabel] = removeValueInCollection(+value, this.state[stateLabel])
    } else {
      newState[stateLabel] = updateValueInCollection(+value, this.state[stateLabel])
    }
    this.setState(newState)
  }

  moveRight() {
    const newState = moveLeftToRight(this.state)
    console.log('moveRight:', newState);
    
    this.setState(newState, () => {this.handleChange()})  
  }

  moveLeft() {
    const newState = moveRightToLeft(this.state)
    this.setState(newState, () => {this.handleChange()})
  }

  moveVertically(isDirectionUpward) {
    const newRightOptions = moveVertically(isDirectionUpward, this.state)
    this.setState({ rightOptions: newRightOptions }, this.handleChange)
  }

  moveUp() {
    this.moveVertically(true)
  }

  moveDown() {
    this.moveVertically(false)
  }

  moveTop() {
    this.setState({ rightOptions: R.concat(
        R.filter(R.propEq('isSelected', true), this.state.rightOptions),
        R.filter(R.propEq('isSelected', undefined), this.state.rightOptions)
      )
    })
  }

  moveBottom() {
    this.setState({ rightOptions: R.concat(
        R.filter(R.propEq('isSelected', undefined), this.state.rightOptions),
        R.filter(R.propEq('isSelected', true), this.state.rightOptions)
      )
    })
  }

  leftChange(event) {
    this.setState({ leftSearchTerm: event.target.value })
  }

  rightChange(event) {
    this.setState({ rightSearchTerm: event.target.value })
  }

  onKeyDown() {

  }


  render() {
    const bgStyle = {
      backgroundColor: null   // Common.getColumnSelectColor(),
    }

    const { leftOptions, rightOptions, leftSearchTerm, rightSearchTerm } = this.state;

    return (
      <div className="ms-container" id="ms-pre-selected-options" style={bgStyle}>
        <div className="ms-selectable" style={bgStyle}>
          <input type="text" className="search-input" onChange={this.leftChange} autoComplete="off" placeholder="Search" style={bgStyle} />
          <ul className="ms-list" tabIndex="-1" onKeyDown={this.onKeyDown} >
            {leftOptions
              .filter(lo => !lo.hidden === true)
              .filter(lo => lo.label.toLowerCase().indexOf(leftSearchTerm.toLowerCase()) !== -1)
              .map(
                o => <SelectableListItem
                  key={o.value}
                  value={o.value}
                  label={o.label}
                  onSelect={this.onLeftSelect}
                  isSelected={o.isSelected}
                />
              )}
          </ul>
        </div>
        <SelectionPanel moveRight={this.moveRight} moveLeft={this.moveLeft} allSelect={this.allSelect} options={this.state.options} />
        <SelectionPanel2
          moveTop={this.moveTop} moveBottom={this.moveBottom}
          moveUp={this.moveUp} moveDown={this.moveDown}
        />
        <div className="ms-selection" style={bgStyle}>
          <input type="text" className="search-input" onChange={this.rightChange} autoComplete="off" placeholder="Search" style={bgStyle}/>
          <ul className="ms-list" tabIndex="-1">
            {rightOptions
              .filter(ro => ro.label.toLowerCase().indexOf(rightSearchTerm.toLowerCase()) !== -1)
              .map(
                o => <SelectedListItem
                  key={o.value}
                  value={o.value}
                  label={o.label}
                  onSelect={this.onRightSelect}
                  isSelected={o.isSelected}
                />
            )}
          </ul>
        </div>
      </div>
    )
  }
}


DoubleListBox.defaultProps = {
    choices: [],
    value: []
  }

DoubleListBox.propTypes = {
    choices: PropTypes.array,
    value: PropTypes.array,
    onChange: PropTypes.func
  }

export default DoubleListBox
