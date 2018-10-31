
import React from 'react'
import PropTypes from 'prop-types'


const divStyle = {
  backgroundColor: null,
};

const selectPanelStyle = {
  margin: '60px 6px',
  backgroundColor: null, // Common.getButtonBGColor(),
  color: null,           // Common.getButtonFGColor(),
  font: null,            // Common.getButtonFont(),
};

const selectPanelStyle21 = {
  margin: '65px 6px',
  backgroundColor: null, // Common.getButtonBGColor(),
  color: null,           // Common.getButtonFGColor(),
  font: null,            // Common.getButtonFont(),
};

const selectPanelStyle22 = {
  margin: '6px',
  backgroundColor: null, // Common.getButtonBGColor(),
  color: null,           // Common.getButtonFGColor(),
  font: null,            // Common.getButtonFont(),
};

const selectPanelStyle23 = {
  margin: '55px 6px',
  backgroundColor: null, // Common.getButtonBGColor(),
  color: null,           // Common.getButtonFGColor(),
  font: null,            // Common.getButtonFont(),
};

export const SelectionPanel = ({ moveRight, moveLeft, allSelect, options }) => (
  <div className="ms-selectionpanel" style={divStyle}>
    <button type="button" onClick={moveRight} style={selectPanelStyle}>
      <i className="icon ion-arrow-right-a"></i>
    </button>
    <button type="button" onClick={moveLeft} style={selectPanelStyle}><i className="icon ion-arrow-left-a"></i></button>
    <button type="button" onClick={allSelect} style={selectPanelStyle}>All</button>
  </div>
)

SelectionPanel.propTypes = {
  moveRight: PropTypes.func,
  moveLeft: PropTypes.func
}

export const SelectionPanel2 = ({ moveTop, moveUp, moveDown, moveBottom }) => (
  <div className="ms-selectionpanel2" style={divStyle}>
    <button type="button" onClick={moveTop} style={selectPanelStyle21}><i className="icon ion-ios-skipbackward rotate-90"></i></button>
    <span style={{ marginLeft: '6px' }}>Up</span>
    <button type="button" style={selectPanelStyle22} onClick={moveUp}><i className="icon ion-arrow-up-b"></i></button>
    <button type="button" style={selectPanelStyle22} onClick={moveDown}><i className="icon ion-arrow-down-b"></i></button>
    <span style={{ marginLeft: '6px' }}>Down</span>
    <button type="button" onClick={moveBottom} style={selectPanelStyle23}><i className="icon ion-ios-skipforward rotate-90"></i></button>
  </div>
)

SelectionPanel2.propTypes = {
  moveTop: PropTypes.func,
  moveDown: PropTypes.func,
  moveBottom: PropTypes.func,
  moveUp: PropTypes.func
}
