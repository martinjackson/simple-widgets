(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define("simple-widgets", ["React", "ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["simple-widgets"] = factory(require("react"), require("react-dom"));
	else
		root["simple-widgets"] = factory(root["React"], root["ReactDOM"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/AlertModal.js":
/*!***************************!*\
  !*** ./src/AlertModal.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.js */ "./src/Modal.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var defProps = {
  show: true,
  closeFunct: function closeFunct() {},
  message: 'No Alert message given'
};

var AlertModal = function AlertModal(inProps) {
  var props = _objectSpread(_objectSpread({}, defProps), inProps);

  if ('show' in inProps === false) {
    console.error('AlertModal: The show property is not present');
  }

  if ('closeFunct' in inProps === false) {
    console.error('AlertModal: The closeFunct property is not present');
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, props.show === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Modal_js__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, props.message === '' ? defProps.message : props.message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    name: "ok",
    onClick: function onClick() {
      return props.closeFunct(false);
    },
    className: "sw-modal_abuttonStyle"
  }, "OK"))) : null);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertModal);

/***/ }),

/***/ "./src/CheckBox.js":
/*!*************************!*\
  !*** ./src/CheckBox.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _excluded = ["selectedValue", "text", "children"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


/*
  ☐  U+2610 &#9744;  Ballot Box
  ☑  U+2611 &#9745;  Ballot Box with Check
  ☒  U+2612 &#9746;  Ballot Box with X
*/

var checked = String.fromCharCode(9745);
var unchecked = String.fromCharCode(9744);

var CheckBox = function CheckBox(props) {
  var handle = function handle(e) {
    if (typeof e.preventDefault === 'function') e.preventDefault();
    e.target.name = props.name;
    e.target.value = props.value === props.selectedValue ? '' : props.selectedValue;
    props.onChange(e);
  };

  var selectedValue = props.selectedValue,
      text = props.text,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded);

  var isChecked = props.value === selectedValue;
  var symbol = isChecked ? checked : unchecked;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", _extends({
    type: "button",
    onClick: handle,
    className: "sw-checkbox_defaultStyle"
  }, rest), symbol, text, children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckBox);

/***/ }),

/***/ "./src/ChoiceText.js":
/*!***************************!*\
  !*** ./src/ChoiceText.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // currently only accepts property choices as ['one','two']

var ChoiceText = function ChoiceText(inProps) {
  var props = _objectSpread({}, inProps);

  var pref = props.hasOwnProperty('name') ? props.name + '_' : '';
  var choices = props.choices;
  delete props.choices;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    type: "text"
  }, props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("datalist", {
    id: props.list
  }, choices.map(function (el, k) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      key: pref + k,
      value: el
    }, el);
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChoiceText);

/***/ }),

/***/ "./src/Common.js":
/*!***********************!*\
  !*** ./src/Common.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sanitize": () => (/* binding */ sanitize),
/* harmony export */   "formatMoney": () => (/* binding */ formatMoney)
/* harmony export */ });
/*****************************************************************************
 *
 *  This method will sanitize any free format entry by making sure the text
 *  does not start with a colon (:).
 *
 *  @param text the text that is to be checked for any problems
 *  @param item Used to identify the item being sanitized
 *
 *  @return returns an object that contains a valid field and a message
 *          field.  The valid field is a boolean value that returns true if 
 *          the text is sanitized and false if it does not.  The message field
 *          will be blank if the valid field is true.  The message field will
 *          contain a message of why the field in not valid if the valid field
 *          is false.
 *
 ****************************************************************************/
var sanitize = function sanitize(text, item) {
  var table = ['SELECT', 'DELETE', 'INSERT', 'UPDATE', 'ALTER'];
  var message = null;

  if (text === null || text === '') {
    return {
      valid: true,
      message: ''
    };
  }

  if (text.startsWith(':')) {
    // Check to see if the text starts with a colon (:)
    message = item + ' can not start with a colon (:)';
    return {
      valid: false,
      message: message
    };
  }

  for (var i = 0; i < table.length; i++) {
    if (text.toUpperCase().startsWith(table[i])) {
      message = item + ' can not start with the word ' + table[i];
      return {
        valid: false,
        message: message
      };
    }
  }

  return {
    valid: true,
    message: ''
  }; // No problems encountered
};
/********************************************************************************************
 * 
 * This function will take a floating point value and format it as a dollar amount.  It will
 * contain a $ at the front of the number, commas in the appropriate places (every three 
 * decimal places from right to left), a decimal point, and two digits right of the decimal.
 * For example: 12345.6789, will transformed to $12,345.68.
 * 
 * @param {*} amount        the floating point number to be translated in the money format
 * @param {*} decimalCount  number of places right of the decimal point (default is 2 if not 
 *                          present)
 * @param {*} decimal       symbol for the decimal point (default is a period (.), if not 
 *                          present)
 * @param {*} thousands     the seperator of every three digits from right to left (default 
 *                          is a comma (,), if not present)
 * @param {*} dollarSign    the value at the beginning of the number (default is a dollar 
 *                          sign ($), if not present)
 * 
 **********************************************************************************************/

var formatMoney = function formatMoney(amount) {
  var decimalCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var decimal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ".";
  var thousands = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ",";
  var dollarSign = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '$';

  try {
    // Truncate to the apprpriate number of decimals after the decimal point
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount; // Determine if the number is negative or positive

    var negativeSign = amount < 0 ? "-" : ""; // Determine where the thousands seperators belong in the number

    var i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    var j = i.length > 3 ? i.length % 3 : 0; // Return the money formatted number

    return dollarSign + negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
  } catch (e) {
    console.log(e);
  }
};

/***/ }),

/***/ "./src/ConfirmModal.js":
/*!*****************************!*\
  !*** ./src/ConfirmModal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.js */ "./src/Modal.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var defProps = {
  show: true,
  yesFunct: function yesFunct() {},
  noFunct: function noFunct() {},
  closeFunct: function closeFunct() {},
  message: 'No Confirm message given'
};

var ConfirmModal = function ConfirmModal(inProps) {
  var props = _objectSpread(_objectSpread({}, defProps), inProps);

  if ('show' in inProps === false) {
    console.error('ConfirmModal: The show property is not present');
  }

  if ('yesFunct' in inProps === false) {
    console.error('ConfirmModal: The yesFunct property is not present');
  }

  if ('noFunct' in inProps === false && 'closeFunct' in inProps === false) {
    console.error('ConfirmModal: The closeFunct property is not present');
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, props.show === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Modal_js__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, props.message === '' ? defProps.message : props.message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    name: "yes",
    onClick: function onClick(async) {
      return processYesFunct();
    },
    className: "sw-modal_cbuttonStyle"
  }, "Yes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    name: "no",
    onClick: function onClick(async) {
      return processNoFunct();
    },
    className: "sw-modal_cbuttonStyle"
  }, "No"))) : null);

  function processYesFunct() {
    if ('noFunct' in inProps === true && 'closeFunct' in inProps === false) {
      props.noFunct(false);
    } else {
      props.closeFunct(false);
    }

    if (props.yesFunct !== null) {
      props.yesFunct();
    }
  }

  function processNoFunct() {
    if ('noFunct' in inProps === true && 'closeFunct' in inProps === false) {
      props.noFunct(false);
    } else {
      props.closeFunct(false);
    }

    if (props.noFunct !== null) {
      props.noFunct();
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfirmModal);

/***/ }),

/***/ "./src/ContextMenu.js":
/*!****************************!*\
  !*** ./src/ContextMenu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _excluded = ["positionX", "positionY", "noLeave", "noCancel", "menu"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var ContextMenu = function ContextMenu(propsIn) {
  console.log('props', propsIn);

  var positionX = propsIn.positionX,
      positionY = propsIn.positionY,
      noLeave = propsIn.noLeave,
      noCancel = propsIn.noCancel,
      menu = propsIn.menu,
      props = _objectWithoutProperties(propsIn, _excluded);

  var propsPositionX = positionX || 10;
  var propsPositionY = positionY || 10;
  var propsNoLeave = noLeave || false;
  var propsNoCancel = noCancel || false;
  var propsMenu = menu || [];
  var menuPositionStyle = {
    left: propsPositionX,
    right: propsPositionY
  };

  function cancelButton() {
    props.closeFunct(false);
  }

  function execute(funct) {
    funct();
    props.closeFunct(false);
  }

  function mouseLeave() {
    console.log('mouseLeave');

    if (propsNoLeave === false) {
      props.closeFunct(false);
    }
  }

  function buildMenuItem(row, i) {
    var key = 'row_' + props.name + i;
    var dkey = 'div_' + key;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: dkey
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "sw-cm_contextMenuHov",
      key: key,
      onClick: function onClick() {
        return execute(row.funct);
      }
    }, row.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null));
  }

  if (props.show === true) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "sw-cm_contextMenuHov sw-cm_menuStyle",
      onMouseLeave: mouseLeave,
      style: menuPositionStyle
    }, propsMenu.map(buildMenuItem), propsNoCancel ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "sw-cm_contextMenuHov",
      key: "cancelKey",
      onClick: cancelButton
    }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null)));
  } else {
    return null;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContextMenu);

/***/ }),

/***/ "./src/DateFunct.js":
/*!**************************!*\
  !*** ./src/DateFunct.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertDate": () => (/* binding */ convertDate),
/* harmony export */   "dateTime": () => (/* binding */ dateTime),
/* harmony export */   "addDigit": () => (/* binding */ addDigit),
/* harmony export */   "currentDateTime": () => (/* binding */ currentDateTime),
/* harmony export */   "currentDate": () => (/* binding */ currentDate),
/* harmony export */   "currentDBDateTime": () => (/* binding */ currentDBDateTime),
/* harmony export */   "currentDBDate": () => (/* binding */ currentDBDate),
/* harmony export */   "dbDate": () => (/* binding */ dbDate),
/* harmony export */   "monthName": () => (/* binding */ monthName)
/* harmony export */ });
/***************************************************************************
 * 
 * This will convert a date from the YYYY-MM-DD format to the MM/DD/YYYY 
 * format.
 * 
 * @param {*} convDate the date in the YYYY-MM-DD format
 * 
 ***************************************************************************/
var convertDate = function convertDate(convDate) {
  if (convDate === null) return null;
  if (convDate.indexOf('-') === -1) return convDate;
  var date = convDate.split('-');
  return date[1] + '/' + date[2] + '/' + date[0];
};
/****************************************************************************
 * 
 * This will convert a date and time in the YYYY-MM-DDTHH:MM:SS.sss format
 * to the MM/DD/YYYY HH:MM:SS format.
 * 
 * @param {*} dateAndTime the date in the YYYY-MM-DDTHH:MM:SS.sss format
 * 
 ****************************************************************************/

var dateTime = function dateTime(dateAndTime) {
  if (dateTime === null) return null;
  var splitDT = dateAndTime.split('T'); // Split the date and time

  var date = splitDT[0].split('-'); // Split the date

  var partTime = splitDT[1].split('.'); // Remove the microseconds

  var time = partTime[0].split(':'); // Split the time

  return date[1] + '/' + date[2] + '/' + date[0] + ' ' + time[0] + ':' + time[1] + ':' + time[2];
};
/***************************************************************************
 * 
 * If value contains a single digit, it will place a 0 in front of the
 * single digit.
 * 
 * @param {*} value the value to determine whether a 0 should be placed
 *                  in front of the single digit
 * 
 ****************************************************************************/

var addDigit = function addDigit(value) {
  var newValue = null; // Value to be returned

  if (value.length === 1) {
    // Value is a single digit
    newValue = '0' + value;
    return newValue;
  }

  return value;
};
/*****************************************************************************
 * 
 * This will return the current date and time in the MM/DD/YYYY HH:MM:SS 
 * format.
 * 
 *****************************************************************************/

var currentDateTime = function currentDateTime() {
  var today = new Date(); // Current date and time

  return addDigit((today.getMonth() + 1).toString()) + '/' + addDigit(today.getDate().toString()) + '/' + today.getFullYear().toString() + ' ' + addDigit(today.getHours().toString()) + ':' + addDigit(today.getMinutes().toString()) + ':' + addDigit(today.getSeconds().toString());
};
/*****************************************************************************
 * 
 * This will return the current date in the MM/DD/YYYY format.
 * 
 *****************************************************************************/

var currentDate = function currentDate() {
  var today = new Date();
  return addDigit((today.getMonth() + 1).toString()) + '/' + addDigit(today.getDate().toString()) + '/' + today.getFullYear().toString();
};
/*****************************************************************************
 * 
 * This will return the date that Oracle expects to receive as a string.  The
 * format will be YY-MON-DD HH:MM:SS.sss.
 * 
 ******************************************************************************/

var currentDBDateTime = function currentDBDateTime() {
  var today = new Date();
  return today.getFullYear().toString().substr(2, 2) + '-' + // Two digit year
  monthName(today.getMonth()) + '-' + // Month as a three letter abbreviation
  addDigit(today.getDate().toString()) + ' ' + addDigit(today.getHours().toString()) + ':' + addDigit(today.getMinutes().toString()) + ':' + addDigit(today.getSeconds().toString()) + '.' + today.getMilliseconds().toString();
};
/*********************************************************************************
 * 
 * This will place the current date in the YYYY-MM-DD format.
 * 
 *********************************************************************************/

var currentDBDate = function currentDBDate() {
  var today = new Date(); // Get the current date

  return today.getFullYear().toString() + '-' + // Format the date in the YYYY-MM-DD format
  addDigit((today.getMonth() + 1).toString()) + '-' + addDigit(today.getDate().toString());
};
/**********************************************************************************
 * 
 * The will take a date in the MM/DD/YYYY format and convert it to the YYYY-MM-DD 
 * format.
 * 
 * @param {*} date  the date in the MM/DD/YYYY format
 * 
 **********************************************************************************/

var dbDate = function dbDate(date) {
  var split = date.split('/'); // Divide the MM/DD/YYYY into individual components

  return split[2] + '-' + // Convert to the YYYY-MM-DD format
  split[0] + '-' + split[1];
};
/*****************************************************************************
 *
 *  This will convert month as a number into a three letter month name.
 *
 *  @param month the month as a number between 0 and 11
 *
 *  @return returns the three letter month abbreviation
 *
 ****************************************************************************/

var monthName = function monthName(month) {
  switch (month) {
    case 0:
      return 'JAN';

    case 1:
      return 'FEB';

    case 2:
      return 'MAR';

    case 3:
      return 'APR';

    case 4:
      return 'MAY';

    case 5:
      return 'JUN';

    case 6:
      return 'JUL';

    case 7:
      return 'AUG';

    case 8:
      return 'SEP';

    case 9:
      return 'OCT';

    case 10:
      return 'NOV';

    case 11:
      return 'DEC';
  }
};

/***/ }),

/***/ "./src/DateInput.js":
/*!**************************!*\
  !*** ./src/DateInput.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _date2str__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date2str */ "./src/date2str.js");
/* harmony import */ var _localStrToDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStrToDate */ "./src/localStrToDate.js");
/* harmony import */ var _browserDetect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./browserDetect */ "./src/browserDetect.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // import Calendar from 'react-calendar';    now only needed for IE
// import 'react-calendar/dist/Calendar.css';
// import formatDateToStr from 'dateformat';





var DateInput = function DateInput(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showCalender = _useState2[0],
      setShowCalender = _useState2[1];

  var f = _objectSpread({}, props);

  if (!f.value) // undefined causes React to think
    f.value = ""; // A component is changing an uncontrolled input to be controlled.

  if (f.value instanceof Date) {
    f.dateValue = f.value;
    f.value = (0,_date2str__WEBPACK_IMPORTED_MODULE_1__.date2str)(f.value, f.format);
  } else {
    f.dateValue = (0,_localStrToDate__WEBPACK_IMPORTED_MODULE_2__.localStrToDate)(f.value);
  }

  var handleCalendarChange = function handleCalendarChange(value) {
    var e = {};
    e.target = {};
    e.target.name = f.name;
    e.target.value = (0,_date2str__WEBPACK_IMPORTED_MODULE_1__.date2str)(value, f.format);
    f.onChange(e);
  };

  var triangle = showCalender ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, "\u25B2") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, "\u25BC"); // 9650   BLACK UP-POINTING TRIANGLE     9660   BLACK DOWN-POINTING TRIANGLE
  //  pattern="(?:19|20)\[0-9\]{2}-(?:(?:0\[1-9\]|1\[0-2\])-(?:0\[1-9\]|1\[0-9\]|2\[0-9\])|(?:(?!02)(?:0\[1-9\]|1\[0-2\])-(?:30))|(?:(?:0\[13578\]|1\[02\])-31))"
  // title="Enter a date in this format YYYY-MM-DD"

  /*
      if (isIE) {                  // isSafari  prior to April 2021
         return  <>
                <input type="text"
                      size={10}
                      data-date-format={f.format}
                      {...f}
                      />
                 <button onClick={() => setShowCalender(!showCalender)}>{triangle}</button>
  
                 {showCalender &&
                  <>
                      <br></br>
                      <div style={{zIndex: 10, position: 'absolute'}}>
                      <Calendar
                            autoFocus
                            name={f.name}
                            value={f.dateValue}
                            onChange={handleCalendarChange} />
                      </div>
                  </>}
  
              </>
      } else {
  */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "date",
    className: "date-field",
    placeholder: f.format,
    "data-date-format": f.format,
    key: f.name,
    name: f.name,
    value: f.value,
    onChange: f.onChange
  });
  /*
      }
  */
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DateInput);

/***/ }),

/***/ "./src/DoubleListBox.js":
/*!******************************!*\
  !*** ./src/DoubleListBox.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _List_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.js */ "./src/List.js");
/* harmony import */ var _lib_theme_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/theme.css */ "./lib/theme.css");
/* harmony import */ var _lib_doubleListBox_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/doubleListBox.css */ "./lib/doubleListBox.css");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var hasProperty = function hasProperty(obj, propName) {
  return !!Object.getOwnPropertyDescriptor(obj, propName);
};

var DoubleListBox = function DoubleListBox(props) {
  var leftRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var rightRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_toConsumableArray(props.choices || [])),
      _useState2 = _slicedToArray(_useState, 2),
      choices = _useState2[0],
      setChoices = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(choices.filter(function (item) {
    return !_toConsumableArray(props.value || []).find(function (r) {
      return r === item;
    });
  })),
      _useState4 = _slicedToArray(_useState3, 2),
      leftValues = _useState4[0],
      setLeftValues = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_toConsumableArray(props.value || [])),
      _useState6 = _slicedToArray(_useState5, 2),
      rightValues = _useState6[0],
      setRightValues = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      leftSelections = _useState8[0],
      setLeftSelections = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      rightSelections = _useState10[0],
      setRightSelections = _useState10[1];

  var reset = function reset(props) {
    if (!props.value) {
      console.log("DoubleListBox props 'value' field is missing.");
    }

    if (!props.choices) {
      console.log("DoubleListBox props 'choices' field is missing.");
    }

    var choices = _toConsumableArray(props.choices || []);

    var right = _toConsumableArray(props.value || []);

    var left = choices.filter(function (item) {
      return !right.find(function (r) {
        return r === item;
      });
    }); // not in the right

    setChoices(choices);
    setLeftValues(left);
    setRightValues(right);
    setLeftSelections([]);
    setRightSelections([]);
  };

  var reportChange = function reportChange(right) {
    var compName = 'DoubleListBox';

    if (hasProperty(props, 'name') === true) {
      compName = props.name;
    } // dont modify 'e', a Synthetic Event


    props.onChange({
      target: {
        name: compName,
        value: right
      }
    });
  };

  var add = function add(a, b) {
    var ans = _toConsumableArray(a);

    for (var i = 0; i < b.length; i++) {
      ans.push(b[i]);
    }

    return ans;
  };

  var sub = function sub(a, b) {
    var ans = [];

    for (var i = 0; i < a.length; i++) {
      if (!b.includes(a[i])) ans.push(a[i]);
    }

    return ans;
  };

  var moveRightSelectButton = function moveRightSelectButton(e) {
    var right = add(rightValues, leftSelections);
    var left = sub(leftValues, right);
    setLeftValues(left);
    setRightValues(right), setLeftSelections([]);
    reportChange(right);
    clearSelections();
  };

  var clearSelections = function clearSelections() {
    var leftBox = leftRef.current;
    var rightBox = rightRef.current;

    for (var i = 0; i < leftBox.length; i++) {
      leftBox[i].selected = false;
    }

    for (var _i2 = 0; _i2 < rightBox.length; _i2++) {
      rightBox[_i2].selected = false;
    }
  };

  var moveLeftSelectButton = function moveLeftSelectButton(e) {
    var left = add(leftValues, rightSelections);
    var right = sub(rightValues, left);
    setLeftValues(left);
    setRightValues(right);
    setRightSelections([]);
    reportChange(right);
    clearSelections();
  };

  var moveRightAllButton = function moveRightAllButton(e) {
    var left = leftValues;

    var right = _toConsumableArray(rightValues);

    for (var i = 0; i < left.length; i++) {
      right.push(left[i]);
    }

    setLeftValues([]);
    setRightValues(right);
    setLeftSelections([]);
    reportChange(right);
  };

  var moveLeftAllButton = function moveLeftAllButton(e) {
    var left = _toConsumableArray(leftValues);

    var right = rightValues;

    for (var i = 0; i < right.length; i++) {
      left.push(right[i]);
    }

    setLeftValues(left);
    setRightValues([]);
    setRightSelections([]);
    reportChange([]);
  };

  var leftHandleChange = function leftHandleChange(e) {
    if (typeof e === 'string') return; // Passed in by Radio, can be ignored, next event has target.name

    if (typeof e.preventDefault === 'function') {
      e.preventDefault();
    }

    var leftBox = leftRef.current;
    var values = [];

    for (var i = 0; i < leftBox.length; i++) {
      if (leftBox[i].selected === true) {
        values.push(leftBox[i].value);
      }
    }

    setLeftSelections(values);
  };

  var rightHandleChange = function rightHandleChange(e) {
    if (typeof e === 'string') return; // Passed in by Radio, can be ignored, next event has target.name

    if (typeof e.preventDefault === 'function') {
      e.preventDefault();
    }

    var rightBox = rightRef.current;
    var values = [];

    for (var i = 0; i < rightBox.length; i++) {
      if (rightBox[i].selected === true) {
        values.push(rightBox[i].value);
      }
    }

    setRightSelections(values);
  };

  var isPosInt = function isPosInt(num) {
    return /^\d*$/.test(num);
  };

  if (props.choices.length === 0) {
    reset(props);
  }

  for (var i = 0; i < props.choices.length; i++) {
    if (props.choices[i] !== choices[i]) {
      reset(props);
    }
  }

  var defaultSize = 7;

  if (props.leftTitle && !props.rightTitle || !props.leftTitle && props.rightTitle) {
    console.log('There must both be a right title and a left title');
  } else if (props.leftTitle && props.rightTitle) {
    defaultSize = 10;
  } else if (!props.leftTitle && !props.rightTitle) {
    defaultSize = 7;
  }

  var size = 0;

  if (hasProperty(props, 'size') === true) {
    if (props.size === 'all') {
      size = Math.max(defaultSize, props.choices.length);
    } else if (isPosInt(props.size)) {
      size = Math.max(defaultSize, parseInt(props.size)); // arrow buttons need 7 or 10 lines
    } else {
      size = defaultSize;
    }
  } else {
    size = defaultSize; // arrow buttons need 7 or 10 lines
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "sw-dlb_overallStyle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "sw-dlb_titleClass"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, props.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "sw-dlb_topSt"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "sw-dlb_display"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "sw-dlb_leftClass"
  }, props.leftTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_List_js__WEBPACK_IMPORTED_MODULE_1__.List, {
    list: leftValues,
    ref: leftRef,
    size: size,
    onChange: leftHandleChange,
    keyname: "left",
    className: "sw-dlb_listSt"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "sw-dlb_colSt"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    name: "moveRightSelect",
    className: "sw-dlb_buttonSt",
    onClick: moveRightSelectButton
  }, ">"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    name: "moveRightAll",
    className: "sw-dlb_buttonSt",
    onClick: moveRightAllButton
  }, ">>"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    name: "moveLeftSelect",
    className: "sw-dlb_buttonSt",
    onClick: moveLeftSelectButton
  }, "<"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    name: "moveLeftAll",
    className: "sw-dlb_buttonSt",
    onClick: moveLeftAllButton
  }, "<<")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "sw-dlb_display"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "sw-dlb_rightClass"
  }, " ", props.rightTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_List_js__WEBPACK_IMPORTED_MODULE_1__.List, {
    list: rightValues,
    ref: rightRef,
    size: size,
    onChange: rightHandleChange,
    keyname: "right",
    className: "sw-dlb_listSt"
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DoubleListBox);

/***/ }),

/***/ "./src/ErrorModal.js":
/*!***************************!*\
  !*** ./src/ErrorModal.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.js */ "./src/Modal.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var defProps = {
  show: true,
  closeFunct: function closeFunct() {},
  message: 'No Error message given'
};

var ErrorModal = function ErrorModal(inProps) {
  var props = _objectSpread(_objectSpread({}, defProps), inProps);

  if ('show' in inProps === false) {
    console.error('ErrorModal: The show property is not present');
  }

  if ('closeFunct' in inProps === false) {
    console.error('ErrorModal: The closeFunct property is not present');
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, props.show === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Modal_js__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "modal_marginStyle"
  }, "Error"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, props.message === '' ? defProps.message : props.message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    name: "ok",
    onClick: function onClick() {
      return props.closeFunct(false);
    },
    className: "sw-modal_ebuttonStyle"
  }, "OK"))) : null);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorModal);

/***/ }),

/***/ "./src/InputFile.js":
/*!**************************!*\
  !*** ./src/InputFile.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var hasProperty = function hasProperty(obj, propName) {
  return !!Object.getOwnPropertyDescriptor(obj, propName);
};

var InputFile = function InputFile(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      inputFile = _useState2[0],
      setInputFile = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      displayFile = _useState4[0],
      setDisplayFile = _useState4[1];

  var buttonName = 'Browse';

  if (hasProperty(props, 'buttonname')) {
    buttonName = props.buttonname;
  }

  var processFile = function processFile(value) {
    setInputFile(value);
    var index = value.lastIndexOf('\\');
    var file = value.substring(index + 1);
    setDisplayFile(file);

    if (hasProperty(props, 'getFileName')) {
      props.getFileName(file);
    }

    if (hasProperty(props, 'additionalProcessing')) {
      props.additionalProcessing();
    }
  };

  var processDisplayDefault = function processDisplayDefault(value) {
    console.log('file', value);
  };

  var processDisplay = processDisplayDefault;

  if (hasProperty(props, 'processDisplay')) {
    processDisplay = props.processDisplay;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "InputFileClass"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: props.id,
    className: "sw-infile_marginStyle"
  }, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    file: "text",
    id: "pfile",
    name: "displayFile",
    value: displayFile,
    className: "sw-infile_textStyle",
    onChange: function onChange(event) {
      return processDisplay(event.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: props.id,
    className: "sw-infile_buttonStyle  sw-theme_normalButtonBackground"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "file",
    name: props.name,
    value: inputFile,
    id: props.id,
    accept: props.hasOwnProperty('accept') ? props.accept : '',
    className: "sw-infile_fileStyle",
    onChange: function onChange(event) {
      return processFile(event.target.value);
    }
  }), buttonName));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputFile);

/***/ }),

/***/ "./src/Invalid.js":
/*!************************!*\
  !*** ./src/Invalid.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateInvalid": () => (/* binding */ generateInvalid),
/* harmony export */   "setInvalidScreen": () => (/* binding */ setInvalidScreen),
/* harmony export */   "setInvalidTable": () => (/* binding */ setInvalidTable),
/* harmony export */   "setInvalidDual": () => (/* binding */ setInvalidDual),
/* harmony export */   "checkValidityScreen": () => (/* binding */ checkValidityScreen),
/* harmony export */   "checkValidityTable": () => (/* binding */ checkValidityTable),
/* harmony export */   "resetDisplayScreen": () => (/* binding */ resetDisplayScreen),
/* harmony export */   "resetDisplayTable": () => (/* binding */ resetDisplayTable),
/* harmony export */   "wasClickedScreen": () => (/* binding */ wasClickedScreen),
/* harmony export */   "wasClickedTable": () => (/* binding */ wasClickedTable),
/* harmony export */   "isConstant": () => (/* binding */ isConstant),
/* harmony export */   "validCheckDual": () => (/* binding */ validCheckDual),
/* harmony export */   "validCheckScreen": () => (/* binding */ validCheckScreen),
/* harmony export */   "validCheckTable": () => (/* binding */ validCheckTable),
/* harmony export */   "clearInvalidDual": () => (/* binding */ clearInvalidDual),
/* harmony export */   "clearInvalidScreen": () => (/* binding */ clearInvalidScreen),
/* harmony export */   "clearInvalidTable": () => (/* binding */ clearInvalidTable),
/* harmony export */   "processInvalidStyleScreen": () => (/* binding */ processInvalidStyleScreen),
/* harmony export */   "processStyleScreen": () => (/* binding */ processStyleScreen),
/* harmony export */   "clearInvalidScreenOnly": () => (/* binding */ clearInvalidScreenOnly),
/* harmony export */   "processInvalidStyleTable": () => (/* binding */ processInvalidStyleTable),
/* harmony export */   "processStyleTable": () => (/* binding */ processStyleTable),
/* harmony export */   "isInvalid": () => (/* binding */ isInvalid),
/* harmony export */   "getInvalidMessage": () => (/* binding */ getInvalidMessage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/***************************************************************************************
 *
 * Invalid Values format for the screen:
 *
 * invalidValues = [
 *  { validity: true or false,  This indicates whether the input item contains an
 *                              invalid item (true) or not (false).  The initial value
 *                              will be false, until an invalid item is found for this
 *                              input item.
 *    display: true or false,   This indicates whether the message should be displayed
 *                              or not.  Initially this value will be false, when an
 *                              invalid value for this input item is found, it will
 *                              be set to true.  When the mouse is clicked for this
 *                              input item, the value will be set back to false.
 *    message: string           The message that will be displayed whenever the mouse
 *                              is hovered over the input item and display is true.
 *  }, ...
 * ]
 *
 *
 * Input Values format for the table:
 *
 * invalidValues = [
 *  { validity: [],             Each array position will indicate whether that input item on
 *                              a row in the table is invalid (true).  Only those items that
 *                              have invalid values are placed in the array.  Initially the
 *                              array will be empty.
 *    display: [],              Each array position will indicate whether the message should
 *                              be displayed for that item (true) or not (false) for that row
 *                              in the table.  The value will be true when initally inserted
 *                              with the validity value.  When the user click on the mouse on
 *                              the input item, the value will be changed to false.
 *    index: [],                Each array position will contain the row number (starting at 0)
 *                              in the table for the input item that constains the invalid
 *                              value.  Initially the array will be empty.
 *    message: [],              Each array positon will contain the message that will be displayed
 *                              whenever the mouse is hovered over the input item and the display
 *                              is true.  Initially the array will be empty.
 *  }
 * ]
 *
 *
 * Input Values format for both screen and table (dual):
 *
 *  The invalid values array will contain the format for the screen (see above) and the format
 *  for the table (see above).  The screen format should be first followed by the table.
 *
 *
 * Contants
 *  The constants indicate the array position for each input item.  The are generally given a
 *  name followed by the index value.  The name is given in the code.
 *
 *
 * Screen Example:
 *
 *  invalidValues = [
 *      { validity: false, display: false, message: 'The name must be given a value' },
 *      { validity: true, display: true, message: 'The SSN must be given a value' },
 *      { validity: true, display: false, message: 'The address must be given a value' }
 *  ]
 *
 *  const NAME = 0;
 *  const SSN = 1;
 *  const ADDR = 2;
 *
 *  invalidValues[NAME] contains a valid name, since validity is false.
 *  invalidValues[SSN] contains an invalid SSN (validity is true) and the message will be
 *      displayed when the mouse is hovered over it, since display is true.  If the user,
 *      clicks on the input item, display will be set to false and the message will not be
 *      displayed.
 *  invalidValues[ADDR] contains an invalid addresss (validity is true), but the message will
 *      not be displayed, since display is false.
 *
 *
 * Table Example:
 *
 *  invalidValues = [
 *      { validity: [true, true], display: [true, false], index: [3, 4], message: ['The name is a duplicate, 'Invalid Name']},
 *      { validity: [true, true], display: [true, false], index: [8, 14], message: ['The SSN is a duplicate, 'Invalid SSN']},
 *  ]
 *
 *  const NAME = 0;
 *  const SSN = 1;
 *
 *  invalidValues[NAME] contains two invalid names (validity is true) in the table at rows 3 and 4
 *      (actual 4 and 5).  The message 'The name is a duplicate' is being displayed, since display is true
 *      for that input item on row 3 of the table.   The message 'Invalid name' will not be displayed,
 *      since display is false for that input item on row 4 of the table.
 *
 *  ivalidValues[SSN] contains two invalid SSNs (validity is true) in the table at rows 8 and 14
 *  (actual 9 and 15).  The message 'The SSN is a duplicate' is being displayed, since display is true
 *      for that input item on row 8 of the table.   The message 'Invalid SSN' will not be displayed,
 *      since display is false for that input item on row 14 of the table.
 *
 * Dual Example (screen and table):
 *
 *  invalidValues = [
 *      { validity: false, display: false, message: 'The name must be given a value' },
 *      { validity: true, display: true, message: 'The SSN must be given a value' },
 *      { validity: true, display: false, message: 'The address must be given a value' }
 *      { validity: [true, true], display: [true, false], index: [3, 4], message: ['The name is a duplicate, 'Invalid Name']},
 *      { validity: [true, true], display: [true, false], index: [8, 14], message: ['The SSN is a duplicate, 'Invalid SSN']},
 *  ]
 *
 *  const NAME = 0;
 *  const SSN = 1;
 *  const ADDR = 2;
 *  const NAMET = 3;
 *  const SSNT = 4;
 *
 *  invalidValues[NAME] see invalidValues[NAME] in the Screen Example.
 *  invalidValues[SSN] see invalidValues[SSN] in the Screen Example.
 *  invalidValues[ADDR] see invalidValues[ADDR] in the Screen Example.
 *  invalidValues[NAMET] see invalidValues[NAME] in the Table Example.
 *  invalidValues[SSNT] see invalidValues[SSN] in the Table Example.
 *
 ************************************************************************************************/

/*****************************************************************************************
 *
 * This will generate the invalid array for both screen and table.  It will then return
 * the invalid array.
 *
 * @param {*} numScreenConstants    the number of entries for the screen.  If there are no
 *                                  screen entries then the value should be zero.
 * @param {*} numTableConstants     the number of entries for the table.  If there are no
 *                                  table entries then the value should be zero.
 *
 *****************************************************************************************/

var generateInvalid = function generateInvalid(numScreenConstants, numTableConstants) {
  var invalidArray = []; // The invalid array to be built
  // Build the screen entries

  for (var i = 0; i < numScreenConstants; i++) {
    invalidArray.push({
      validity: false,
      display: false,
      message: ''
    });
  } // Build the table entries


  for (var _i = 0; _i < numTableConstants; _i++) {
    invalidArray.push({
      validity: [],
      display: [],
      index: [],
      message: []
    });
  }

  return invalidArray;
};
/***************************************************************************************
 *
 * This indicates that one of the input items on the screen contains an invalid value.
 *
 * @param {*} invalidValues     list of valid and invalid inputs for the screen
 * @param {*} constant          indicates which of the input items that is in invalid
 *                              (the index into the array)
 * @param {*} message           message for the invalid value
 *
 ****************************************************************************************/

var setInvalidScreen = function setInvalidScreen(invalidValues, constant, message) {
  invalidValues[constant].validity = true; // Indicates the value is invalid

  invalidValues[constant].display = true; // Indicates the message should be displayed

  if (message !== null) {
    // There is a message
    invalidValues[constant].message = message;
  }

  return invalidValues;
};
/*******************************************************************************************
 *
 * This indicates that one of the input items in a table contains an invalid value.
 *
 * @param {*} invalidValues     list of invalid inputs for the table
 * @param {*} constant          indicates which of the input items is invalid (the index
 *                              into the array)
 * @param {*} index             row number (from zero) in the table that contains the
 *                              invalid item
 * @param {*} message           message for the invalid value
 *
 ********************************************************************************************/

var setInvalidTable = function setInvalidTable(invalidValues, constant, index, message) {
  var found = false; // Indicates whether the invalid item already exists in the invalid values array

  var pos = 0; // Position where the item was found in the index array
  // Spin through the array to find whether the item already exists in the
  // index array for that input item

  for (var i = 0; i < invalidValues[constant].index.length; i++) {
    if (invalidValues[constant].index[i] === index) {
      found = true;
      pos = i;
    }
  }

  if (found) {
    // Item already exists
    invalidValues[constant].validity[pos] = true;
    invalidValues[constant].display[pos] = true;

    if (message !== null) {
      // There is a message
      invalidValues[constant].message[pos] = message;
    }
  } else {
    // Item does not exist, so place in in the appropriate arrays for that input item in the table
    invalidValues[constant].validity.push(true);
    invalidValues[constant].display.push(true);
    invalidValues[constant].index.push(index);

    if (message !== null) {
      // There is a message
      invalidValues[constant].message.push(message);
    } else {
      invalidValues[constant].message.push('');
    }
  }

  return invalidValues;
};
/***********************************************************************************************
 *
 * This indicates that one of the input items is either on the screen or in a table and
 * contains an invalid value.
 *
 * @param {*} invalidValues list of invalid inputs for the screen or table
 * @param {*} constant1     index into the screen input items
 * @param {*} constant2     index into the table screen items
 * @param {*} index         row number in the table from zero
 * @param {*} type          indicates whether it is a screen entry (I) or table entry
 * @param {*} message       message for the invalid value
 *
 ***********************************************************************************************/

var setInvalidDual = function setInvalidDual(invalidValues, constant1, constant2, index, type, message) {
  if (type === 'S') {
    // Screen entry
    invalidValues = setInvalidScreen(invalidValues, constant1, message);
  } else if (type === 'T') {
    // Table entry
    invalidValues = setInvalidTable(invalidValues, constant2, index, message);
  }

  return invalidValues;
};
/******************************************************************************************
 *
 * This will check to see if there is an invalid screen entry, and if there is, it will
 * display an invalid message.
 *
 * @param {*} invalidValues the invalid array that contains what entries are invalid
 * @param {*} constant      the screen constant that represents the array index to check in
 *                          the invalid array.
 *
 ******************************************************************************************/

var checkValidityScreen = function checkValidityScreen(invalidValues, constant) {
  return isInvalid(invalidValues[constant], -1) === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "errMessage"
  }, invalidValues[constant].message) : null;
};
/******************************************************************************************
 *
 * This will check to see if there is an invalid table entry, and if there is, it will
 * display an invalid message.
 *
 * @param {*} invalidValues the invalid array that contains what entries are invalid
 * @param {*} constant      the table constant that represents the array index to check in
 *                          the invalid array.
 *
 ******************************************************************************************/

var checkValidityTable = function checkValidityTable(invalidValues, constant, index) {
  return isInvalid(invalidValues[constant], index) === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "errMessage"
  }, getInvalidMessage(invalidValues[constant], index)) : null;
};
/***********************************************************************************************
 *
 * This will set the display value to false for an invalid input item.
 *
 * @param {*} invalidValues list of invalid inputs for the screen
 * @param {*} constant      indicates which of the input items is invalid (the index
 *                          into the array)
 *
 ***********************************************************************************************/

var resetDisplayScreen = function resetDisplayScreen(invalidValues, constant) {
  invalidValues[constant].display = false;
  return invalidValues;
};
/***********************************************************************************************
 *
 * This will set the display value to false for an invalid input item.
 *
 * @param {*} invalidValues list of invalid inputs for the screen
 * @param {*} constant      indicates which of the input items is invalid (the index
 *                          into the array)
 * @param {*} index         row number in the table from zero
 *
 ***********************************************************************************************/

var resetDisplayTable = function resetDisplayTable(invalidValues, constant, index) {
  var found = false; // Indicates whether the invalid item already exists in the invalid values array

  var pos = 0; // Position where the item was found in the index array
  // Spin through the array to find whether the item already exists in the
  // index array for that input item

  for (var i = 0; i < invalidValues[constant].index.length; i++) {
    if (invalidValues[constant].index[i] === index) {
      found = true;
      pos = i;
    }
  }

  if (found) {
    // Item was found, so set the display to false
    invalidValues[constant].display[pos] = false;
  }

  return invalidValues;
};
/*******************************************************************************************
 *
 * Indicates that the mouse was clicked on a input, Choice, ChoiceText, Radio, or textarea
 * HTML tag on the regular screen.  If the field was invalid and clicked on, it will remove
 * the error message from being displayed when the mouse is hovered over the HTML item.
 *
 * @param {*} constant  indicates which item the mouse was clicked on.  Set the contants
 *                      after the invalid array.
 *
 ******************************************************************************************/

var wasClickedScreen = function wasClickedScreen(invalidValues, constant, setInvalid) {
  var localInvalid = _toConsumableArray(invalidValues);

  localInvalid = resetDisplayScreen(localInvalid, constant);
  setInvalid(localInvalid);
};
/*******************************************************************************************
 *
 * Indicates that the mouse was clicked on a input, Choice, ChoiceText, Radio, or textarea
 * HTML tag on a table.  If the field was invalid and clicked on, it will remove
 * the error message from being displayed when the mouse is hovered over the HTML item.
 *
 * @param {*} constant  indicates which item the mouse was clicked on.  Set the contants
 *                      after the invalid array.
 *
 ******************************************************************************************/

var wasClickedTable = function wasClickedTable(invalidValues, constant, pos, setInvalid) {
  var localInvalid = _toConsumableArray(invalidValues);

  localInvalid = resetDisplayTable(localInvalid, constant, pos);
  setInvalid(localInvalid);
};
/*********************************************************************************************
 *
 * Indicates whether the index matches one of the screen constants (constant indexes into the
 * invalidValues array) (true) or not (false).
 *
 * @param {*} index     an index into the invalidArray to see if it matches one of the
 *                      screen constants or not
 * @param {*} constants the array of screen contants to see if there is a match
 *
 *********************************************************************************************/

var isConstant = function isConstant(index, constants) {
  // Spin through the array of contants to see if the index matches one of them
  for (var i = 0; i < constants.length; i++) {
    if (constants[i] === index) {
      return true;
    }
  }

  return false;
};
/***********************************************************************************************
 *
 * This will check to see if any of the validity values is true in the invalid values array.
 * If one of the values is true, this function returns false.  If all the values are false, it
 * returns true to indicate that there are not invalid values.  This is genearally called at
 * the end of the validation function.
 *
 * @param {*} invalidValues list of invalid inputs for the screen or table
 * @param {*} constants     list of screen constants
 *
 ***********************************************************************************************/

var validCheckDual = function validCheckDual(invalidValues, constants) {
  // Determine if any of the validation checks were invalid
  for (var i = 0; i < invalidValues.length; i++) {
    if (isConstant(i, constants) === true) {
      // Checking screen edits
      if (invalidValues[i].validity === true) {
        return false;
      }
    } else {
      // Checking table edits
      for (var j = 0; j < invalidValues[i].validity.length; j++) {
        if (invalidValues[i].validity[j] === true) {
          return false;
        }
      }
    }
  }

  return true;
};
/**********************************************************************************************
 *
 * This will check to see if any of the screen validity values is true in the invalid values
 * array.  If one of the values is true, this function returns false.  If all the values are
 * false, it returns true to indicate that there are not invalid values.  This is genearally
 * called at the end of the validation function.
 *
 * @param {*} invalidValues list of invalid inputs for the screen
 *
 **********************************************************************************************/

var validCheckScreen = function validCheckScreen(invalidValues) {
  for (var i = 0; i < invalidValues.length; i++) {
    if (invalidValues[i].validity === true) {
      // Checking screen edits
      return false;
    }
  }

  return true;
};
/**********************************************************************************************
 *
 * This will check to see if any of the table validity values is true in the invalid values
 * array.  If one of the values is true, this function returns false.  If all the values are
 * false, it returns true to indicate that there are not invalid values.  This is genearally
 * called at the end of the validation function.
 *
 * @param {*} invalidValues list of invalid inputs for the table
 *
 **********************************************************************************************/

var validCheckTable = function validCheckTable(invalidValues) {
  // Determine if any of the validation checks were invalid
  for (var i = 0; i < invalidValues.length; i++) {
    for (var j = 0; j < invalidValues[i].validity.length; j++) {
      if (invalidValues[i].validity[j] === true) {
        return false;
      }
    }
  }

  return true;
};
/***********************************************************************************************
 *
 * This will clear the invalid values array, and reset the array to its original settings.  It
 * will do this for the screen and table parts.
 *
 * @param {*} invalidValues list of invalid inputs for the screen and table
 * @param {*} screen        array holding the starting and ending indexes (contants) for the
 *                          screen part of the array
 * @param {*} table         array holding the starting and ending indexes (contants) for the
 *                          screen part of the array
 *
 ***********************************************************************************************/

var clearInvalidDual = function clearInvalidDual(invalidValues, screen, table) {
  // Clear the screen part of the array
  for (var i = screen[0]; i <= screen[1]; i++) {
    invalidValues[i].validity = false; // Set the validity and display parts back to false

    invalidValues[i].display = false;
  } // Cler the table part of the array, by setting them to empty arrays


  for (var _i2 = table[0]; _i2 <= table[1]; _i2++) {
    invalidValues[_i2].validity = [];
    invalidValues[_i2].display = [];
    invalidValues[_i2].index = [];
    invalidValues[_i2].message = [];
  }

  return invalidValues;
};
/***********************************************************************************************
 *
 * This will clear the invalid values array, and reset the array to its original settings.  It
 * will do this for the screen.
 *
 * @param {*} invalidValues list of invalid inputs for the screen
 *
 ***********************************************************************************************/

var clearInvalidScreen = function clearInvalidScreen(invalidValues) {
  // Clear the screen values
  for (var i = 0; i < invalidValues.length; i++) {
    invalidValues[i].validity = false;
    invalidValues[i].display = false;
  }

  return invalidValues;
};
/***********************************************************************************************
 *
 * This will clear the invalid values array, and reset the array to its original settings.  It
 * will do this for the table.
 *
 * @param {*} invalidValues list of invalid inputs for the table
 *
 ***********************************************************************************************/

var clearInvalidTable = function clearInvalidTable(invalidValues) {
  // Clear the table entries, by setting to empty arrays
  for (var i = 0; i < invalidValues.length; i++) {
    invalidValues[i].validity = [];
    invalidValues[i].display = [];
    invalidValues[i].index = [];
    invalidValues[i].message = [];
  }

  return invalidValues;
};
/***********************************************************************************************
 *
 * This will determine if the style should change to the background color to the invalid color
 * because the input table item has an invalid value.  This will return the style for the
 * component.
 *
 * @param {*} invalidValues list of invalid inputs
 * @param {*} constant      indicates which of the input items is invalid (the index
 *                          into the array)
 * @param {*} cssClassName  the name of a cssClassName that will be concatenated with either
 *                          sw-theme_normalBackground or sw-theme_errorBackground.
 *
 ***********************************************************************************************/

var processInvalidStyleScreen = function processInvalidStyleScreen(invalidValues, constant) {
  var cssClassName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  // Set the background color based on whether the value is invalid or not
  if (cssClassName === null) {
    return invalidValues[constant].validity === true ? "sw-theme_errorBackground" : "sw-theme_normalBackground";
  } else {
    return invalidValues[constant].validity === true ? "".concat(cssClassName, " sw-theme_errorBackground") : "".concat(cssClassName, " sw-theme_normalBackground");
  }
};
/***********************************************************************************************
 *
 * This will determine if the style should change to the background color to the invalid color
 * because the input table item has an invalid value.
 *
 * @param {*} invalidValues list of invalid inputs
 * @param {*} constant      indicates which of the input items is invalid (the index
 *                          into the array)
 * @param {*} cssClassName  the name of a cssClassName that will be concatenated with either
 *                          sw-theme_normalBackground or sw-theme_errorBackground.
 *
 ***********************************************************************************************/

var processStyleScreen = function processStyleScreen(invalidValues, constant, cssClassName) {
  return invalidValues[constant].validity === true ? "".concat(cssClassName, " sw-theme_errorBackground") : "".concat(cssClassName, " sw-theme_normalBackground");
};
/***********************************************************************************************
 *
 * This function is used when there are both screen and table invalid entries.  This will clear
 * the invalid screen entries only.  It will not clear the table entries.
 *
 * @param {*} invalidValues list of invalid inputs for the screen
 * @param {*} constant      the constant for the last screen entry
 *
 ***********************************************************************************************/

var clearInvalidScreenOnly = function clearInvalidScreenOnly(invalidValues, constant) {
  // Clear the screen values
  for (var i = 0; i <= constant; i++) {
    invalidValues[i].validity = false;
    invalidValues[i].display = false;
  }

  return invalidValues;
};
/***********************************************************************************************
 *
 * This will determine if the style should change to the background color to the invalid color
 * because the input table item has an invalid value.  This will return the style for the
 * component.
 *
 * @param {*} invalidValues list of invalid inputs for the table
 * @param {*} constant      indicates which of the input items is invalid (the index
 *                          into the array)
 * @param {*} pos           row number in the table
 * @param {*} cssClassName  the name of a cssClassName that will be concatenated with either
 *                          sw-theme_normalBackground or sw-theme_errorBackground.
 *
 ***********************************************************************************************/

var processInvalidStyleTable = function processInvalidStyleTable(invalidValues, constant, pos) {
  var cssClassName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  // Spin through the validity array for that item in the invalid values array
  for (var j = 0; j < invalidValues[constant].validity.length; j++) {
    if (pos === invalidValues[constant].index[j]) {
      // Check to see if it is the correct index
      if (invalidValues[constant].validity[j] === true) {
        // and the entry is invalid
        if (cssClassName === null) {
          return "sw-theme_errorBackground";
        } else {
          return "".concat(cssClassName, " sw-theme_errorBackground");
        }
      } else {
        // Entry is valid
        if (cssClassName === null) {
          return "sw-theme_normalBackground";
        } else {
          return "".concat(cssClassName, " sw-theme_normalBackground");
        }
      }
    }
  }
};
/***********************************************************************************************
 *
 * This will determine if the style should change to the background color to the invalid color
 * because the input table item has an invalid value.
 *
 * @param {*} invalidValues list of invalid inputs for the table
 * @param {*} constant      indicates which of the input items is invalid (the index
 *                          into the array)
 * @param {*} pos           row number in the table
 * @param {*} cssClassName  the name of a cssClassName that will be concatenated with either
 *                          sw-theme_normalBackground or sw-theme_errorBackground.
 *
 ***********************************************************************************************/

var processStyleTable = function processStyleTable(invalidValues, constant, pos, cssClassName) {
  // Spin through the validity array for that item in the invalid values array
  for (var j = 0; j < invalidValues[constant].validity.length; j++) {
    if (pos === invalidValues[constant].index[j]) {
      // Check to see if it is the correct index
      if (invalidValues[constant].validity[j] === true) {
        // and the entry is invalid
        return "".concat(cssClassName, " sw-theme_errorBackground");
      }
    }
  }

  return "".concat(cssClassName, " sw-theme_normalBackground");
};
/*********************************************************************************************
 *
 * This will determine if the input item contains an invalid value and the message should be
 * displayed or not based on the validity and display values for that item in the invalid
 * value array.  This will work for screen or table entry.  If a screen entry, pos should
 * be -1.
 *
 * @param {*} invalid   a specific input item in the invalid value array (specific index)
 * @param {*} pos       row number in the table if looking up a table entry or -1 for a
 *                      screen entry
 *
 ***********************************************************************************************/

var isInvalid = function isInvalid(invalid, pos) {
  if (pos === -1) {
    // Screen entry
    return invalid.validity && invalid.display;
  } else {
    // Table entry
    for (var i = 0; i < invalid.validity.length; i++) {
      if (invalid.index[i] === pos) {
        // Find the entry for that row in the table
        return invalid.validity[i] && invalid.display[i];
      }
    }
  }

  return false;
};
/**********************************************************************************************
 *
 * This will retrieve the message from the entry invalid value array for a table entry.
 *
 * @param {*} invalid   a specific input item in the invalid value array (specific index)
 * @param {*} pos       row number in the table if looking up a table entry or -1 for a
 *                      screen entry
 *
 **********************************************************************************************/

var getInvalidMessage = function getInvalidMessage(invalid, pos) {
  for (var i = 0; i < invalid.index.length; i++) {
    if (invalid.index[i] === pos) {
      // Find the entry for that row in the table
      return invalid.message[i]; // Return the message
    }
  }

  return '';
};

/***/ }),

/***/ "./src/List.js":
/*!*********************!*\
  !*** ./src/List.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Choice": () => (/* binding */ Choice),
/* harmony export */   "List": () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _excluded = ["list", "choices", "size", "value", "onChange"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var hasProperty = function hasProperty(obj, propName) {
  return !!Object.getOwnPropertyDescriptor(obj, propName);
};

var min = function min(arr) {
  return arr.reduce(acc);
};

var _Choice = function _Choice(propsIn, ref) {
  var list = propsIn.list,
      choices = propsIn.choices,
      size = propsIn.size,
      value = propsIn.value,
      onChange = propsIn.onChange,
      props = _objectWithoutProperties(propsIn, _excluded);

  var opt = list || choices || [];
  var keyPart = hasProperty(props, 'keyName') ? props.keyName + '_' : '';
  var pref = hasProperty(props, 'name') ? props.name + '_' + keyPart : '';

  if (typeof value == 'string' && !opt.includes(value)) {
    console.log("Adding missing default value: '".concat(value, "' to ").concat(JSON.stringify(opt)));
    opt.unshift(value);
  }

  var listHandleChange = function listHandleChange(e) {
    if (typeof e.preventDefault === "function") {
      e.preventDefault();
    } // if multiple is true the returning value should be an array of selected values,
    //     not just the value on the last clicked/unclicked element
    // if multiple is false, e.target.value will be a string of the choice selected
    // See React SyntheticEvent   https://reactjs.org/docs/events.html


    var e2 = {
      preventDefault: e.preventDefault,
      target: _objectSpread({}, e.target)
    };
    var arr = Array.from(e.target.selectedOptions, function (option) {
      return option.value;
    });
    e2.target.name = e.target.name;
    e2.target.value = props !== null && props !== void 0 && props.multiple ? arr : e.target.value; // console.log(`listHandleChange calling onChange(e2) ${e2.target.name} ${JSON.stringify(e2.target.value)} `);

    onChange(e2);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", _extends({
    ref: ref,
    multiple: props.multiple,
    size: size,
    value: value,
    onChange: listHandleChange
  }, props), opt.map(function (el, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      key: pref + key,
      value: el
    }, el);
  })));
};

var _List = function _List(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Choice, _extends({
    className: "ChoiceClass",
    ref: ref,
    multiple: true
  }, props));
};

var Choice = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(_Choice);
var List = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(_List);

/***/ }),

/***/ "./src/Modal.js":
/*!**********************!*\
  !*** ./src/Modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);



var Modal = function Modal(_ref) {
  var children = _ref.children;
  var elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  if (!elRef.current) {
    var div = document.createElement('div');
    elRef.current = div;
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var modalRoot = document.getElementById('sw-modal');
    modalRoot.appendChild(elRef.current);
    return function () {
      return modalRoot.removeChild(elRef.current);
    };
  }, []);
  return /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, children), elRef.current);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ }),

/***/ "./src/Radio.js":
/*!**********************!*\
  !*** ./src/Radio.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _excluded = ["selectedValue", "text", "children"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


/*
  9737   Sun
  183     &middot;
  ⚪	9898	26AA	 	MEDIUM WHITE CIRCLE
  ⚫	9899	26AB	 	MEDIUM BLACK CIRCLE
   U+26AA	⚪	e2 9a aa	MEDIUM WHITE CIRCLE
  U+26AB	⚫	e2 9a ab	MEDIUM BLACK CIRCLE
  U+1F534	🔴	f0 9f 94 b4	LARGE RED CIRCLE
  U+1F535	🔵	f0 9f 94 b5	LARGE BLUE CIRCLE
*/

var checked = String.fromCharCode(9899);
var unchecked = String.fromCharCode(9898);
var Frag = (react__WEBPACK_IMPORTED_MODULE_0___default().Fragment);

var Radio = function Radio(props) {
  var handle = function handle(e) {
    if (typeof e.preventDefault === 'function') e.preventDefault();
    e.target.name = props.name;
    e.target.value = props.selectedValue;
    props.onChange(e);
  };

  var selectedValue = props.selectedValue,
      text = props.text,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded);

  var isChecked = props.value === selectedValue;
  var symbol = isChecked ? checked : unchecked;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Frag, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", _extends({
    type: "button",
    onClick: handle,
    className: "sw-radio_defaultStyle"
  }, rest), symbol, text, children));
}; // 2018-10-10 {text} {children} moved to inside button clickable area


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Radio);

/***/ }),

/***/ "./src/SearchFunct.js":
/*!****************************!*\
  !*** ./src/SearchFunct.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "search": () => (/* binding */ search),
/* harmony export */   "binSearch": () => (/* binding */ binSearch)
/* harmony export */ });
/*****************************************************************************
 *
 *  This will sequential search a table until the key is found and return 
 *  the number the table entry associated with this key.
 *
 *  @param table  the table or array to be searched
 *  @param key    the key to search for in the table
 *  @param field  the field in the table to search
 *
 *  @return returns the entry in the table associated with the key.  If the
 *          key is not found null is returned.
 *
 ****************************************************************************/
var search = function search(table, key, field) {
  // Spin through the table until the key is found
  for (var i = 0; i < table.length; i++) {
    if (table[i][field] === key) {
      // Key is found in the table
      return table[i];
    }
  }

  return null; // Key was not found
};
/*****************************************************************************
 *
 *  This will binary search a table until the key is found and returns the 
 *  table entry associated with this key.
 *
 *  @param table  the table or array to be searched
 *  @param key    the key to search for in the table
 *  @param field  the field in the table to search
 *
 *  @return returns the entry in the table associated with the key or null if
 *          the key is not found.
 *
 ****************************************************************************/

var binSearch = function binSearch(table, key, field) {
  var top = 0; // Index to the top of the table

  var bottom = table.length; // Index to the bottom of the table

  var middle = 0; // Index to the calculated middle of the table

  var found = false; // Indicates the key was found

  var neverFound = false; // Indicates the key will never be found
  // Loop until the key is found or it never can be found

  while (found === false && neverFound === false) {
    middle = parseInt((top + bottom) / 2);

    if (top >= bottom) {
      neverFound = true;
    } else if (table[middle][field] === key) {
      found = true;
    } else if (table[middle][field] > key) {
      bottom = middle - 1;
    } else if (table[middle][field] < key) {
      top = middle + 1;
    }
  }

  if (found) {
    // Key was found
    return table[middle];
  } else {
    // Key was not found
    return null;
  }
};

/***/ }),

/***/ "./src/SearchSortTable.js":
/*!********************************!*\
  !*** ./src/SearchSortTable.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CheckBox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckBox.js */ "./src/CheckBox.js");
/* harmony import */ var _List_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./List.js */ "./src/List.js");
/* harmony import */ var _Invalid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Invalid.js */ "./src/Invalid.js");
/* harmony import */ var _AlertModal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AlertModal.js */ "./src/AlertModal.js");
/* harmony import */ var _Theme_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Theme.js */ "./src/Theme.js");
/* harmony import */ var _funnel_filter_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./funnel-filter-svgrepo-com.svg */ "./src/funnel-filter-svgrepo-com.svg");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint react/prop-types: 0 */

/*
import {CheckBox, Choice, isInvalid, setInvalidScreen, copyStyle,
    validStyling, processInvalidStyleScreen, wasClickedScreen,
    AlertModal,
    defaultThemeSettings, generateButton
} from 'simple-widgets'
*/








var upper = _toConsumableArray('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

var lower = _toConsumableArray('abcdefghijklmnopqrstuvwxyz');

var digit = _toConsumableArray('0123456789');

var hasProperty = function hasProperty(obj, propName) {
  return !!Object.getOwnPropertyDescriptor(obj, propName);
};

function range(start, end) {
  return Array(end - start + 1).fill().map(function (_, idx) {
    return start + idx;
  });
}
/****************************************************************************
 *
 * This will allow the user to add a filter / search bar to a table in case
 * not all the data is displayed at once.  It will also allow a column to be
 * sorted by clicking on it.
 *
 ****************************************************************************/


var SearchSortTable = function SearchSortTable(propsPassed) {
  var _props$data$;

  // let iter = Object.keys(row)       // also works when row === ["hello", "there"]
  var defaultEachRowInTable = function defaultEachRowInTable(row, i) {
    var cols = !row ? null : Object.keys(row).map(function (idx, j) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        key: i + '_' + j
      }, row[idx]);
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: i
    }, cols);
  };

  var defaultProps = {
    error: false,
    // Indicates that an error has occrred
    MAX_ITEMS: 10,
    eachRowInTable: defaultEachRowInTable
  };
  var props = Object.assign(defaultProps, propsPassed);
  var invalidArray = [// Used to tell whether the user entered and invalid value or not
  {
    validity: false,
    display: false,
    message: ''
  }, {
    validity: false,
    display: false,
    message: ''
  }, {
    validity: false,
    display: false,
    message: ''
  }];
  var FILTER = 0;
  var SRCHITEM = 1;
  var SRCHHDR = 2;
  var numCols = (props === null || props === void 0 ? void 0 : (_props$data$ = props.data[0]) === null || _props$data$ === void 0 ? void 0 : _props$data$.length) || 10;
  var initialFilters = Array(numCols).fill(''); // React doesn't like <input value={null}

  var initialBackground = Array(63).fill({
    backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--sw-theme_backgroundColor')
  });
  var startIndexes = range(0, props.data.length - 1); // Set the state variables

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      start = _useState2[0],
      setStart = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(hasProperty(props, 'showAll') === true ? props.data.length : parseInt(props.MAX_ITEMS)),
      _useState4 = _slicedToArray(_useState3, 2),
      end = _useState4[0],
      setEnd = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      searchItem = _useState6[0],
      setSearchItem = _useState6[1]; // The item to search for


  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
      searchHeader = _useState8[0],
      setSearchHeader = _useState8[1]; // The column to search


  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([searchHeader]),
      _useState10 = _slicedToArray(_useState9, 2),
      searchHeaderValues = _useState10[0],
      setSearchHeaderValues = _useState10[1]; // The value of each header in the table -- intialize array to include default value


  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState12 = _slicedToArray(_useState11, 2),
      sortOrder = _useState12[0],
      setSortOrder = _useState12[1]; // Indicates whether the sort is ascending (A) or descending (D) (starts of a ascending and then alternates)


  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState14 = _slicedToArray(_useState13, 2),
      topDisabled = _useState14[0],
      setTopDisabled = _useState14[1]; // Indicates whether the top button is disabled or not


  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState16 = _slicedToArray(_useState15, 2),
      previousDisabled = _useState16[0],
      setPreviousDisabled = _useState16[1]; // Indicates whether the previous button is disabled or not


  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState18 = _slicedToArray(_useState17, 2),
      nextDisabled = _useState18[0],
      setNextDisabled = _useState18[1]; // Indicates whether the next button is disabled or not


  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState20 = _slicedToArray(_useState19, 2),
      bottomDisabled = _useState20[0],
      setBottomDisabled = _useState20[1]; // Indicates whether the bottom button is disabled or not


  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState22 = _slicedToArray(_useState21, 2),
      rowValues = _useState22[0],
      setRowValues = _useState22[1]; // Indicates how many rows in the table should be displayed


  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(hasProperty(props, 'showAll') === true ? props.data.length : parseInt(props.MAX_ITEMS)),
      _useState24 = _slicedToArray(_useState23, 2),
      maxItems = _useState24[0],
      setMaxItems = _useState24[1]; // Maximum number of rows to display in the table


  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(hasProperty(props, 'showAll') === true ? props.data.length : parseInt(props.MAX_ITEMS)),
      _useState26 = _slicedToArray(_useState25, 2),
      maximum = _useState26[0],
      setMaximum = _useState26[1]; // Maximum number of rows selected by the user to display in the table


  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialFilters),
      _useState28 = _slicedToArray(_useState27, 2),
      filter = _useState28[0],
      setFilter = _useState28[1]; // The values for each column to be filtered


  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState30 = _slicedToArray(_useState29, 2),
      filterOn = _useState30[0],
      setFilterOn = _useState30[1]; // Indicates whether the user has checked the Filter On check box or not


  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState32 = _slicedToArray(_useState31, 2),
      filterPressed = _useState32[0],
      setFilterPressed = _useState32[1]; // Indicates whether the filtering is enabled or disabled (Filter button)


  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(invalidArray),
      _useState34 = _slicedToArray(_useState33, 2),
      invalid = _useState34[0],
      setInvalid = _useState34[1];

  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState36 = _slicedToArray(_useState35, 2),
      alertMessage = _useState36[0],
      setAlertMessage = _useState36[1];

  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState38 = _slicedToArray(_useState37, 2),
      showAlert = _useState38[0],
      setShowAlert = _useState38[1];

  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_toConsumableArray(startIndexes)),
      _useState40 = _slicedToArray(_useState39, 2),
      indexes = _useState40[0],
      setIndexes = _useState40[1];

  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_toConsumableArray(startIndexes)),
      _useState42 = _slicedToArray(_useState41, 2),
      copyIndex = _useState42[0],
      setCopyIndex = _useState42[1];

  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.data.length),
      _useState44 = _slicedToArray(_useState43, 2),
      length = _useState44[0],
      setLength = _useState44[1]; // The length of the data


  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialBackground),
      _useState46 = _slicedToArray(_useState45, 2),
      background = _useState46[0],
      setBackground = _useState46[1]; // const [indexSet, setIndexSet] = useState([[...startIndexes]]);
  // const [origIndexes, setOrigIndexes] = useState([...startIndexes]);


  var origIndexes = _toConsumableArray(startIndexes);
  /******************************************************************************
   *
   * Called to populate the header drop down
   *
   ******************************************************************************/


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(populateSearch, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (indexes.length === 0) {
      sendIndexes(0, origIndexes.length, origIndexes.length, origIndexes);
      setFilterOn(false);
      setStartEnd(0, origIndexes.length, origIndexes);
      setIndexes(origIndexes);
      setCopyIndex(origIndexes);
      setLength(origIndexes.length);
      setDisable(0, origIndexes.length);
    } else {
      setDisable(start, length);
      sendIndexes(start, end, length, indexes);
    }
  }, [props.data]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setFilterOn(false);
    setStartEnd(0, origIndexes.length, origIndexes);
    setIndexes(origIndexes);
    setCopyIndex(origIndexes);
    setLength(origIndexes.length);
    sendIndexes(0, origIndexes.length, origIndexes.length, origIndexes);
    setDisable(0, origIndexes.length);
  }, [props.data.length]);
  /*
      console.log('props.data.length :', props.data.length);
      console.log ('start', start);
      console.log ('end', end);
      console.log ('length', length);
      console.log ('indexes', indexes);
      console.log ('maxItems', maxItems);
      console.log ('maximum', maximum);
      console.log ('origIndexes', origIndexes);
      console.log ('startIndexes :', startIndexes);
  */

  if (hasProperty(props, 'data') === false) {
    console.error('Search Sort Table component: A data prop must be passed');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null);
  }

  if (hasProperty(props, 'table') === false) {
    console.error('Search Sort Table component: A table object prop must be passed');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null);
  }

  if (hasProperty(props, 'letters') === true) {
    if (hasProperty(props, 'noupper') === true && hasProperty(props, 'nolower') === true && hasProperty(props, 'nodigit') === true) {
      console.error('Search Sort Table component: If using letters prop, can not have all three: noupper, nolower, and nodigit');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null);
    }
  } else {
    if (hasProperty(props, 'noupper') === true || hasProperty(props, 'nolower') === true || hasProperty(props, 'nodigit') === true) {
      console.error('Search Sort Table component: Can not have noupper, nolower, or nodigit props without the letters prop');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null);
    }
  }
  /****************************************************************************
   *
   * This will populate the header drop down and place a blank at the
   * beginning.
   *
   ****************************************************************************/


  function populateSearch() {
    var order = []; // The next sort order

    var localFilter = _toConsumableArray(filter); // The values in the filter input boxes


    var search = ['']; // The values for the drop down
    // Build the items for the drop down, the sort order, and the filter

    for (var i = 0; i < props.table.length; i++) {
      if (props.table[i].search === true) {
        search.push(props.table[i].header);
      }

      order.push('N');

      if (hasProperty(props, 'nofilter') === false) {
        localFilter[i] = '';
      }
    }

    setSearchHeaderValues(search);
    setSortOrder(order);
    setFilter(localFilter); // Build the values for the row drop down on the bottom right of the screen.

    var values = [];

    for (var count = props.MAX_ITEMS; count <= 100; count += 5) {
      values.push(count);
    }

    values.push('All');
    setRowValues(values);
  }
  /**************************************************************************************************
   *
   * Render the screen.
   *
   **************************************************************************************************/


  var tableDivStyle = '';

  if (hasProperty(props, 'scroll') === true) {
    tableDivStyle = 'sw-sst_scrollStyle';
  }

  var heightStyle = {};

  if (hasProperty(props, 'height') === true) {
    heightStyle = {
      height: props.height
    };
  }

  var filterBackground = null;

  if (filterOn !== 'Y') {
    filterBackground = 'sw-sst_imageStyleDisable';
  } else if (filterPressed === true) {
    filterBackground = 'sw-sst_imageStyleFilter';
  } else {
    filterBackground = 'sw-sst_imageStyleNormal';
  }

  var genButtonStyle = (0,_Theme_js__WEBPACK_IMPORTED_MODULE_5__.generateCSSButton)('sw-sst_buttonStyle', props.error, false, false, 'sw-sst_normalButtonBackground', 'sw-sst_grayButtonBackground');
  var genTopButtonStyle = (0,_Theme_js__WEBPACK_IMPORTED_MODULE_5__.generateCSSButton)('sw-sst_noButtonStyle', props.error, topDisabled, true, 'sw-sst_normalButtonBackground', 'sw-sst_grayButtonBackground');
  var genPreviousButtonStyle = (0,_Theme_js__WEBPACK_IMPORTED_MODULE_5__.generateCSSButton)('sw-sst_noButtonStyle', props.error, previousDisabled, true, 'sw-sst_normalButtonBackground', 'sw-sst_grayButtonBackground');
  var genNextButtonStyle = (0,_Theme_js__WEBPACK_IMPORTED_MODULE_5__.generateCSSButton)('sw-sst_noButtonStyle', props.error, nextDisabled, true, 'sw-sst_normalButtonBackground', 'sw-sst_grayButtonBackground');
  var genBottomButtonStyle = (0,_Theme_js__WEBPACK_IMPORTED_MODULE_5__.generateCSSButton)('sw-sst_noButtonStyle', props.error, bottomDisabled, true, 'sw-sst_normalButtonBackground', 'sw-sst_grayButtonBackground');
  var genFilterStyle = (0,_Theme_js__WEBPACK_IMPORTED_MODULE_5__.generateCSSButton)(filterBackground, props.error, filterOn !== 'Y', true, 'sw-sst_normalButtonBackground', 'sw-sst_grayButtonBackground');
  var topSymbol = "|\u2BC7"; // Bar and left triangle

  var previousSymbol = "\u2BC7"; // Left triangle

  var nextSymbol = "\u2BC8"; // Right triangle

  var bottomSymbol = "\u2BC8|"; // Right triangle and bar
  // Populate the table with the next set of data to populate

  var showData = [];

  if (props.data !== undefined && props.data !== null && indexes.length !== 0) {
    for (var i = start; i < end && i < props.data.length; i++) {
      showData.push(props.data[indexes[i]]);
    }
  } //    console.log('showData :', showData);


  var letterDigit = [];
  var letters = null;

  if (hasProperty(props, 'letters') === true) {
    if (hasProperty(props, 'noupper') === true) {
      if (hasProperty(props, 'nolower') === true) {
        letterDigit = _toConsumableArray(digit);
      } else {
        // Lower
        if (hasProperty(props, 'nodigit') === true) {
          letterDigit = _toConsumableArray(lower);
        } else {
          // Digit
          letterDigit = [].concat(_toConsumableArray(lower), _toConsumableArray(digit));
        }
      }
    } else {
      // Upper
      if (hasProperty(props, 'nolower') === true) {
        if (hasProperty(props, 'nodigit') === true) {
          letterDigit = _toConsumableArray(upper);
        } else {
          // Digit
          letterDigit = [].concat(_toConsumableArray(upper), _toConsumableArray(digit));
        }
      } else {
        // Lower
        if (hasProperty(props, 'nodigit') === true) {
          letterDigit = [].concat(_toConsumableArray(upper), _toConsumableArray(lower));
        } else {
          // Digit
          letterDigit = [].concat(_toConsumableArray(upper), _toConsumableArray(lower), _toConsumableArray(digit));
        }
      }
    }

    letterDigit.push('^');
    letters = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      key: "letters"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), letterDigit.map(alphabet), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null));
  }

  var topButtonHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null);

  if (hasProperty(props, 'notop') === false && hasProperty(props, 'showAll') === false) {
    topButtonHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      name: "top",
      className: genTopButtonStyle,
      onClick: function onClick() {
        return topButton();
      },
      disabled: props.error || topDisabled
    }, topSymbol);
  }

  var previousButtonHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null);

  if (hasProperty(props, 'noprevious') === false && hasProperty(props, 'showAll') === false) {
    previousButtonHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      name: "previous",
      className: genPreviousButtonStyle,
      onClick: function onClick() {
        return previousButton();
      },
      disabled: props.error || previousDisabled
    }, previousSymbol);
  }

  var nextButtonHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null);

  if (hasProperty(props, 'nonext') === false && hasProperty(props, 'showAll') === false) {
    nextButtonHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      name: "next",
      className: genNextButtonStyle,
      onClick: function onClick() {
        return nextButton();
      },
      disabled: props.error || nextDisabled
    }, nextSymbol);
  }

  var bottomButtonHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null);

  if (hasProperty(props, 'nobottom') === false && hasProperty(props, 'showAll') === false) {
    bottomButtonHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      name: "bottom",
      className: genBottomButtonStyle,
      onClick: function onClick() {
        return bottomButton();
      },
      disabled: props.error || bottomDisabled
    }, bottomSymbol);
  }

  var allButtonHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null);

  if (hasProperty(props, 'showAll') === true) {
    allButtonHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      name: "all",
      className: genBottomButtonStyle,
      onClick: function onClick() {
        return allButton();
      },
      disabled: props.error
    }, "All");
  }

  var title = null;

  if (hasProperty(props, 'title') === true) {
    if (hasProperty(props, 'titleSize') === true) {
      if (props.titleSize === '1') {
        title = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
          className: "sw-sst_titleStyle"
        }, props.title);
      } else if (props.titleSize === '2') {
        title = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
          className: "sw-sst_titleStyle"
        }, props.title);
      } else {
        title = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
          className: "sw-sst_titleStyle"
        }, props.title);
      }
    } else {
      title = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
        className: "sw-sst_titleStyle"
      }, props.title);
    }
  }

  var buttonStyle2 = {
    border: "none",
    backgroundColor: "none"
  };
  var filterSection = hasProperty(props, 'nofilter') === true ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CheckBox_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedValue: "Y",
    name: "filterOn",
    text: "\xA0\xA0\xA0Filter On",
    value: filterOn,
    onChange: function onChange(event) {
      return processFilterOn(event.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: filterButton,
    className: "sw-sst_buttonStyle2",
    disabled: props.error || filterOn !== 'Y'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _funnel_filter_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_6__,
    width: "30px",
    height: "30px",
    className: genFilterStyle
  })));
  var searchStyle = (0,_Invalid_js__WEBPACK_IMPORTED_MODULE_3__.processInvalidStyleScreen)(invalid, SRCHHDR, 'sw-sst_searchStyle');
  var itemStyle = (0,_Invalid_js__WEBPACK_IMPORTED_MODULE_3__.processInvalidStyleScreen)(invalid, SRCHITEM);
  var searchSection = hasProperty(props, 'nosearch') === true ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "sw-invalid_checkForError"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_List_js__WEBPACK_IMPORTED_MODULE_2__.Choice, {
    choices: searchHeaderValues,
    name: "searchHeader",
    value: searchHeader,
    onChange: function onChange(event) {
      return setSearchHeader(event.target.value);
    },
    onClick: function onClick() {
      return (0,_Invalid_js__WEBPACK_IMPORTED_MODULE_3__.wasClickedScreen)(invalid, SRCHHDR, setInvalid);
    },
    className: searchStyle,
    disabled: props.error
  }), (0,_Invalid_js__WEBPACK_IMPORTED_MODULE_3__.isInvalid)(invalid[SRCHHDR], -1) === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "sw-invalid_errMessage"
  }, invalid[SRCHHDR].message) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "sw-invalid_checkForError"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "searchItem",
    value: searchItem,
    onChange: function onChange(event) {
      return setupSearch(event.target.value);
    },
    onClick: function onClick() {
      return (0,_Invalid_js__WEBPACK_IMPORTED_MODULE_3__.wasClickedScreen)(invalid, SRCHITEM, setInvalid);
    },
    className: itemStyle,
    disabled: props.error
  }), (0,_Invalid_js__WEBPACK_IMPORTED_MODULE_3__.isInvalid)(invalid[SRCHITEM], -1) === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "sw-invalid_errMessage"
  }, invalid[SRCHITEM].message) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    name: "searchButtonName",
    className: genButtonStyle,
    onClick: function onClick() {
      return searchItemButton();
    },
    disabled: props.error
  }, "Search"));
  var footer = hasProperty(props, 'nofooter') === true ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "sw-sst_footStyle"
  }, hasProperty(props, 'norows') === true ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "sw-sst_marginStyle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_List_js__WEBPACK_IMPORTED_MODULE_2__.Choice, {
    choices: rowValues,
    name: "rows",
    value: maximum,
    onChange: function onChange(event) {
      return processMaxItems(event.target.value);
    },
    className: "sw-sst_noBorderStyle",
    disabled: props.error
  }), "rows"), topButtonHTML, previousButtonHTML, hasProperty(props, 'nodisplay') === true ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, start + ' - ' + end + ' of ' + length), nextButtonHTML, bottomButtonHTML);
  var hoverClassName = "sw-sst_tableStyle ";

  if (hasProperty(props, 'hover') === true) {
    var root = document.documentElement;
    var hoverBackColor = 'cyan';
    var found = false;

    if (hasProperty(props, 'hoverColor') === true) {
      hoverBackColor = props.hoverColor;
    }

    for (var _i2 = 1; _i2 <= 10 && found === false; _i2++) {
      var colorValue = getComputedStyle(root).getPropertyValue("--sw-sst_hover_back_color".concat(_i2));

      if (colorValue === ' none') {
        root.style.setProperty("--sw-sst_hover_back_color".concat(_i2), hoverBackColor);
        hoverClassName += "sw-sst_search_sort_table".concat(_i2);
        found = true;
      } else if (colorValue === hoverBackColor) {
        hoverClassName += "sw-sst_search_sort_table".concat(_i2);
        found = true;
      }
    }

    if (found === false) {
      console.error('You can have at most 10 different hover colors for tables.');
    }
  }

  return (
    /*#__PURE__*/
    // Render the screen
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "sw-sst_divStyle"
    }, title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, hasProperty(props, 'sfbottom') === false ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, filterSection, searchSection, allButtonHTML, letters) : null), props.data.length === 0 && hasProperty(props, 'showtable') === false ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "No Data to Display") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: tableDivStyle,
      style: heightStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
      className: hoverClassName
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: "header",
      className: "sw-sst_centerBoldStyle"
    }, props.table.map(buildHeaders)), showData.map(props.eachRowInTable), hasProperty(props, 'footer') === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      className: "footerStyle"
    }, props.footer.map(buildFooter)) : null))), footer, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, hasProperty(props, 'sfbottom') === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, filterSection, searchSection, allButtonHTML, letters) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AlertModal_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      show: showAlert,
      closeFunct: setShowAlert,
      message: alertMessage
    }))
  );
  /*************************************************************************************
   *
   * This will set the number of data items that are to be displayed on the screen.
   *
   * @param {*} value the value selected from the drop down
   *
   **************************************************************************************/

  function processMaxItems(value) {
    if (value === 'All') {
      // All data should be shown
      setMaxItems(props.data.length);
    } else {
      setMaxItems(parseInt(value));
    }

    setMaximum(value); // Used so the value will show on the drop down
  }
  /*********************************************************************************
   *
   * This is called whenever the user changes the search item.  It will take the
   * user to the beginning of the data and set the value typed.
   *
   * @param {*} value value to set the search item to
   *
   **********************************************************************************/


  function setupSearch(value) {
    setStartEnd(0, length, indexes);
    setSearchItem(value);
  }
  /********************************************************************************
   *
   * The is will place the headers in the table object into the table.
   *
   * @param {*} row   the name of the header
   * @param {*} i     the index of the column in the table
   *
   *********************************************************************************/


  function buildHeaders(row, i) {
    var key = 'cell_' + i;
    var btnImg = "\u2BC8"; // let filterKey = 'filter_' + i;

    var filterName = row.header + '_filter'; // console.log(`buildHeaders() filter[${filter.length}]:`, JSON.stringify(filter));

    if (props.table[i].sort === true && sortOrder[i] !== 'N') {
      // After the sort was done, it flips the sort order; therefore, if it is
      // now a D, that means it was sorted in ascending order previously.  If
      // it is now an A, that means it was sorted in descending order previously.
      if (sortOrder[i] === 'A') {
        btnImg = "\u2BC5"; // Up arrow
      } else if (sortOrder[i] === 'D') {
        btnImg = "\u2BC6"; // Down arrow
      } else if (sortOrder[i] === 'N') {
        btnImg = "\u2BC8"; // Right arrow
      }
    } // Filter is turned on


    if (filterOn === 'Y' && hasProperty(props, 'nofilter') === false) {
      var filterStyle = (0,_Invalid_js__WEBPACK_IMPORTED_MODULE_3__.processInvalidStyleScreen)(invalid, FILTER, 'sw-sst_widthStyle');

      if (row.sort === false || hasProperty(props, 'nosort') === true) {
        // No sorting, so no onClick handler
        if (row.search === false) {
          // No searching on this field, so no filtering on it also
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
            key: key,
            className: "sw-sst_headerStyle"
          }, row.header); // Display the header only
        } else {
          // Can filter; therefore, display the input field
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
            key: key,
            className: "sw-sst_headerStyle"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, row.header), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
            className: "sw-invalid_checkForError"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
            type: "text",
            name: filterName,
            className: filterStyle,
            value: filter[i],
            onChange: function onChange(event) {
              return processFilter(event.target.value, i);
            },
            disabled: props.error
          })));
        }
      } else {
        // Sorting on the column is allowed
        if (row.search === false) {
          // No searching or filtering on the column, so display header only
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
            key: key,
            className: "sw-sst_headerStyle"
          }, row.header, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
            name: "sort",
            onClick: function onClick() {
              return sortClicked(row.name, 'X', indexes);
            },
            className: "sw-sst_buttonStyle2"
          }, btnImg));
        } else {
          // Searching and filtering is allowed
          return (
            /*#__PURE__*/
            // Display header and input field for filtering
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
              key: key,
              className: "sw-sst_headerStyle"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, row.header, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
              name: "sort",
              onClick: function onClick() {
                return sortClicked(row.name, 'X', indexes);
              },
              className: "sw-sst_buttonStyle2"
            }, btnImg)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
              className: "sw-invalid_checkForError"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
              type: "text",
              name: filterName,
              className: filterStyle,
              value: filter[i],
              onChange: function onChange(event) {
                return processFilter(event.target.value, i);
              },
              disabled: props.error
            })))
          );
        }
      } // Filtering is off or not allowed

    } else if (row.sort === false || hasProperty(props, 'nosort') === true) {
      // No sorting, so no onClick handler
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
        key: key,
        className: "sw-sst_headerStyle"
      }, row.header); // Display the header only
    } else {
      // Soring on the column is allowed
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
        key: key,
        className: "sw-sst_headerStyle"
      }, row.header, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        name: "sort",
        onClick: function onClick() {
          return sortClicked(row.name, 'X', indexes);
        },
        className: "sw-sst_buttonStyle2"
      }, btnImg));
    }
  }
  /****************************************************************************************************
   *
   * This will place a line in the last row of the table, which can be used for totals of each column.
   *
   * @param {*} row   represnts the value to place in each column of the table
   * @param {*} i     index into the mapped array
   *
   *****************************************************************************************************/


  function buildFooter(row, i) {
    var key = 'footer_' + i;
    return (
      /*#__PURE__*/
      // Place a value in the column
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        key: key,
        className: "sw-sst_footerStyle"
      }, row)
    );
  }
  /***************************************************************************************
   *
   * This will turn filtering on or off.  If filtering is on, the following will occur:
   *  1.  It will display the filter input fields below each header (done in buildHeaders)
   *  2.  Place an index on the data under the filterIndex field.  Used to copy the data
   *      from the filtering data to the main data.
   *  3.  Store a copy of the main data.
   *  4.  Enable the Filter button
   *
   * If filtering is off, the following will occur:
   *  1.  Copy the filtered data back to the main data using the filter index.
   *  2.  Remove the filtered data
   *  3.  Copy the main data back
   *
   * @param {*} value inidicates whether filtering is on or off
   *
   *****************************************************************************************/


  function processFilterOn(value) {
    setFilterOn(value);

    if (value === 'Y') {
      // Filter is on
      clearSetBackground(0, false);
    } else {
      setFilterPressed(false); // Disable the filter button
    }

    setIndex(origIndexes, true);
    resetSortOrder();
  }
  /****************************************************************************************
   *
   * This will gather the data entered in the filter input boxes into an array.
   *
   * @param {*} value the value entered in a filter input box
   * @param {*} i     the index into the array to store the value in the array
   *
   *****************************************************************************************/


  function processFilter(value, i) {
    var local = _toConsumableArray(filter); // The filter array for the filter input boxes


    local[i] = value; // console.log(`processFilter() local[${local.length}]`, JSON.stringify(local));

    setFilter(local);
  }
  /******************************************************************************************
   *
   * This will make sure that the user entered at least one value in one of the filter
   * input boxes.  This is called when the user presses the Filter button.
   *
   ******************************************************************************************/


  function filterValidate() {
    var localInvalid = _toConsumableArray(invalid);

    localInvalid[FILTER].validity = false;
    localInvalid[FILTER].display = false; // Search though the filter array to find a value

    for (var _i3 = 0; _i3 < filter.length; _i3++) {
      if (filter[_i3] !== '') {
        // There is a value
        return true;
      }
    } // No values for filtering were entered


    localInvalid = (0,_Invalid_js__WEBPACK_IMPORTED_MODULE_3__.setInvalidScreen)(localInvalid, FILTER, '');
    localInvalid[FILTER].display = false;
    setInvalid(localInvalid);
    setAlertMessage('A filter value must be entered in at least one filter box');
    setShowAlert(true);
    return false;
  }
  /***************************************************************************************
   *
   * This will filter the data and display it on the screen.
   *
   ***************************************************************************************/


  function filterButton() {
    // Make sure filter values were entered
    if (filterValidate() === false) {
      return;
    }

    var data = props.data; // The data to filter

    var newData = []; // The filtered data

    var indexing = []; // List of indexes that indicate which filter input boxes have data

    var found = []; // Indicates whether that filter input box found data to filter

    var count = 0; // counts the number of filtered data

    var done = false; // Indicates that we are done filtering that data element
    // Build the indexes in which the user entered data in the filter input box

    for (var _i4 = 0; _i4 < props.table.length; _i4++) {
      if (filter[_i4] !== '') {
        indexing.push(_i4);
      }
    }

    var foundDate = false; // Spin through the data and see if it meets the filter criteria

    for (var _i5 = 0; _i5 < indexes.length; _i5++) {
      found = []; // Empty the found array for the next data element

      done = false; // Spin through the filter input boxes to see if the data element matches

      for (var j = 0; j < indexing.length && done === false; j++) {
        foundDate = false; // Find if the index is in the date table

        if (hasProperty(props.table[indexing[j]], 'dataDate') && hasProperty(props.table[indexing[j]], 'filterDate')) {
          foundDate = true;
        } // The data field is blank or has no value


        if (data[indexes[_i5]][props.table[indexing[j]].name] === null) {
          found.push(false);
          done = true;
        } else if (foundDate === true) {
          // The field contains a date
          var dataPart = null;
          var filterPart = null; // Convert the format for the data part

          if (props.table[indexing[j]].dataDate === 'MM/DD/YYYY') {
            dataPart = convertDate(data[indexes[_i5]][props.table[indexing[j]].name], '/', 1);
          } else if (props.table[indexing[j]].dataDate === 'MM-DD-YYYY') {
            dataPart = convertDate(data[indexes[_i5]][props.table[indexing[j]].name], '-', 1);
          } else if (props.table[indexing[j]].dataDate === 'MM/DD/YYYY HH:MM:SS') {
            dataPart = convertDateTime(data[indexes[_i5]][props.table[indexing[j]].name], '/', 1);
          } else if (props.table[indexing[j]].dataDate === 'MM-DD-YYYY HH:MM:SS') {
            dataPart = convertDateTime(data[indexes[_i5]][props.table[indexing[j]].name], '-', 1);
          } else if (props.table[indexing[j]].dataDate === 'YYYY-MM-DDTHH:MM:SS.SSS') {
            dataPart = convertDateTimeReg(data[indexes[_i5]][props.table[indexing[j]].name]);
          } else {
            dataPart = data[indexes[_i5]][props.table[indexing[j]].name];
          } // Convert the format for the filter part


          if (props.table[indexing[j]].filterDate === 'MM/DD/YYYY') {
            if (filter[indexing[j]].length === 'MM/DD/YYYY'.length) {
              filterPart = convertDate(filter[indexing[j]], '/', 1);
            } else if (filter[indexing[j]].length === 'MM/YYYY'.length && filter[indexing[j]].indexOf('/') !== -1) {
              filterPart = convertDate(filter[indexing[j]], '/', 2);
            } else {
              filterPart = filter[indexing[j]];
            }
          } else if (props.table[indexing[j]].filterDate === 'MM-DD-YYYY') {
            if (filter[indexing[j]].length === 'MM-DD-YYYY'.length) {
              filterPart = convertDate(filter[indexing[j]], '-', 1);
            } else if (filter[indexing[j]].length === 'MM-YYYY'.length && filter[indexing[j]].indexOf('-') !== -1) {
              filterPart = convertDate(filter[indexing[j]], '-', 2);
            } else {
              filterPart = filter[indexing[j]];
            }
          } else if (props.table[indexing[j]].filterDate === 'MM/DD/YYYY HH:MM:SS') {
            if (filter[indexing[j]].length === 'MM/DD/YYYY HH:MM:SS'.length) {
              filterPart = convertDateTime(filter[indexing[j]], '/', 1);
            } else if (filter[indexing[j]].length === 'MM/YYYY'.length && filter[indexing[j]].indexOf('/') !== -1) {
              filterPart = convertDate(filter[indexing[j]], '/', 2);
            } else {
              filterPart = filter[indexing[j]];
            }
          } else if (props.table[indexing[j]].filterDate === 'MM-DD-YYYY HH:MM:SS') {
            if (filter[indexing[j]].length === 'MM-DD-YYYY HH:MM:SS'.length) {
              filterPart = convertDateTime(filter[indexing[j]], '-', 1);
            } else if (filter[indexing[j]].length === 'MM/YYYY'.length && filter[indexing[j]].indexOf('-') !== -1) {
              filterPart = convertDate(filter[indexing[j]], '-', 2);
            } else {
              filterPart = filter[indexing[j]];
            }
          } else if (props.table[indexing].filterDate === 'YYYY-MM-DDTHH:MM:SS.SSS') {
            if (filter[indexing[j]].length === 'YYYY-MM-DDTHH:MM:SS.SSS'.length) {
              filterPart = convertDateTimeReg(filter[indexing[j]]);
            } else {
              filterPart = filter[indexing[j]];
            }
          } else {
            filterPart = filter[indexing[j]];
          }

          if (dataPart.toString().indexOf(filterPart.toString()) !== -1) {
            // Compare the dates
            found.push(true);
          } else {
            // Dates are not equal
            found.push(false);
            done = true;
          } // The data element matches one of the filter input boxes

        } else if (data[indexes[_i5]][props.table[indexing[j]].name].toString().indexOf(filter[indexing[j]].toString()) !== -1) {
          found.push(true); // Place a true in the found array indicating the filter input box matched
        } else {
          // The data element did not match the filter input box
          found.push(false);
          done = true; // Since a match was not found the data element will not meet the filter criteria
        }
      } // Check to see if the data element met all the filter criteria


      var move = true; // Spin through found array making sure all values are true.  If they are, the data element
      // matches the filter criteria

      for (var k = 0; k < found.length && move === true; k++) {
        if (found[k] === false) {
          // False was found, so the data element does not match filter criteria
          move = false;
        }
      } // Data element matches the filter criteria, so place the data in the filtered data area


      if (move === true) {
        newData.push(indexes[_i5]);
        count++;
      }
    }

    if (count > 0) {
      // There are filtered data elements
      setIndex(newData, true);
      setFilterPressed(true);
    }
  }

  function setIndex(indexing, doCopy) {
    setIndexes(indexing);

    if (doCopy === true) {
      setCopyIndex(indexing);
    }

    setLength(indexing.length);
    setStartEnd(0, indexing.length, indexing);
  }
  /**********************************************************************************************
   *
   * This will convert the date from the MM/DD/YYYY or MM-DD-YYYY format to the YYYY-MM-DD
   * format.
   *
   * @param {*} date the date to be converted to the YYYY-MM-DD format
   * @param {*} char the slash (/) or dash (-)
   *
   **********************************************************************************************/


  function convertDate(date, _char, type) {
    var split = date.split(_char);

    if (type === 1) {
      return "".concat(split[2], "-").concat(split[0], "-").concat(split[1]);
    } else {
      return "".concat(split[1], "-").concat(split[0]);
    }
  }
  /**********************************************************************************************
   *
   * This will convert the date and time from the MM/DD/YYYY HH:MM:SS or MM-DD-YYYY HH:MM:SS
   * format to the YYYY-MM-DD HH:MM:SS format.
   *
   * @param {*} date the date to be converted to the YYYY-MM-DD format
   * @param {*} char the slash (/) or dash (-)
   *
   **********************************************************************************************/


  function convertDateTime(date, _char2, type) {
    var dateTime = date.split(' ');
    var localDate = dateTime[0].split(_char2);

    if (type === 1) {
      return "".concat(localDate[2], "-").concat(localDate[0], "-").concat(localDate[1], "T").concat(dateTime[1]);
    } else {
      return "".concat(localDate[1], "-").concat(localDate[0]);
    }
  }
  /**********************************************************************************************
   *
   * This will strip of the milliseconds from the YYYY-MM-DDTHH:MM:SS.SSS format (strips the
   * .SSS).
   *
   * @param {*} date the date to strip the milliseconds from
   *
   ***********************************************************************************************/


  function convertDateTimeReg(date) {
    var split = date.split('.');

    if (split.length === 0) {
      return date;
    } else {
      return split[0];
    }
  }
  /******************************************************************************
   *
   * This will validate that data was entered in the header drop down and text
   * box for searching.  This is called when the Search button is pressed.
   *
   * @param {*} which indicates whether both (B) the search header and item
   *                  should be validated or only the header (H)
   *
   *******************************************************************************/


  function validate(which) {
    var localInvalid = _toConsumableArray(invalid);

    localInvalid[SRCHHDR].validity = false;
    localInvalid[SRCHHDR].display = false;
    localInvalid[SRCHITEM].validity = false;
    localInvalid[SRCHITEM].display = false;

    if (searchHeader === '') {
      localInvalid = (0,_Invalid_js__WEBPACK_IMPORTED_MODULE_3__.setInvalidScreen)(localInvalid, SRCHHDR, 'A column header to be searched must be selected');
    }

    if (which === 'B' && searchItem === '') {
      localInvalid = (0,_Invalid_js__WEBPACK_IMPORTED_MODULE_3__.setInvalidScreen)(localInvalid, SRCHITEM, 'An item to search must be entered');
    }

    setInvalid(localInvalid);
    return localInvalid[SRCHHDR].validity === false && localInvalid[SRCHITEM].validity === false; // No problems occurred
  }
  /********************************************************************************
   *
   * This will search a column in a table until it matches the starting characters
   * in the column with that which is in the text box.  In other words, if the
   * column contains SMITH and SM is entered in the text box, it will match.  It
   * will match until it finds the first occurrence.
   *
   **********************************************************************************/


  function searchItemButton() {
    if (validate('B') === true) {
      // Make sure a value has been selected in the drop down and text box
      var search = null;
      search = hasProperty(props, 'ignorecase') === true ? searchItem.toUpperCase() : // Convert to upper case to ignore case
      searchItem; // Find a match in the correct column of the data

      var tableIndex = props.table.map(function (e) {
        return e.header;
      }).indexOf(searchHeader); // Column match

      if (hasProperty(props, 'searchstart') === true) {
        searchStart(search, props.table[tableIndex].name);
      } else {
        searchAny(search, props.table[tableIndex].name);
      } //            let index = props.data.findIndex(val => val[props.table[tableIndex].name].toString().startsWith(search));   // Text match
      //            setStartEnd(index); // Set the start and end to show the found text

    }
  }
  /********************************************************************************************
   *
   * This will search through the data until it finds the item in the specified column that
   * starts with the search item.  This is only called if the props search start is set.
   *
   * @param {*} search    the item to search for
   * @param {*} name      the field name in the data to search for the search item
   *
   *********************************************************************************************/


  function searchStart(search, name) {
    var begin = hasProperty(props, 'nocontsearch') === true || start === 0 ? 0 : start + 1; // Where to start the search

    var found = false; // Indicates that the item was found

    for (var _i6 = begin; _i6 < length && found === false; _i6++) {
      if (props.data[indexes[_i6]][name].toString().startsWith(search)) {
        // Item was found
        found = true;
        setStartEnd(_i6, length, indexes); // Set the start and end positions of the data on the screen.
      }
    }
  }
  /********************************************************************************************
   *
   * This will search through the data until it finds the search item in the specified column
   * anywhere within the data item.
   *
   * @param {*} search    the item to search for
   * @param {*} name      the field name in the data to search for the search item
   *
   *********************************************************************************************/


  function searchAny(search, name) {
    var begin = hasProperty(props, 'nocontsearch') === true || start === 0 ? 0 : start + 1; // Where to start the search

    var found = false; // Indicates that the item was found

    for (var _i7 = begin; _i7 < props.data.length && found === false; _i7++) {
      var str = props.data[indexes[_i7]][name] ? props.data[indexes[_i7]][name].toString() : '';

      if (str.indexOf(search) !== -1) {
        // Item was found
        found = true;
        setStartEnd(_i7, length, indexes); // Set the start and end positions of the data on the screen.
      }
    }
  }
  /*************************************************************************************
   *
   * This function will sort a column header in the table (all the data is sorted by
   * the field that matches the column header) in either ascending (A) or descending (D)
   * order.
   *
   * @param {*} name the name of the column header to sort
   *
   *************************************************************************************/


  function sortClicked(name, orderType, indexes) {
    var index = props.table.map(function (e) {
      return e.name;
    }).indexOf(name); // Column match

    var order = _toConsumableArray(sortOrder);

    var ordering = 'A';

    if (orderType === 'A') {
      ordering = 'A';
    } else {
      if (order[index] === 'N') {
        // If sort is not specified (first time), change it to ascending
        ordering = 'A';
        order[index] = 'A';
      } else if (order[index] === 'A') {
        ordering = 'D';
        order[index] = 'D';
      } else if (order[index] === 'D') {
        ordering = 'N';
        order[index] = 'N';
      }

      setSortOrder(order);
    }

    if (ordering === 'N') {
      setIndex(copyIndex, false);
      return;
    }

    var dateFormat = null;

    if (hasProperty(props.table[index], 'sortDate')) {
      dateFormat = props.table[index].sortDate;
    }

    var sortAry = [];
    indexes.map(function (row) {
      if (dateFormat !== null) {
        if (dateFormat === 'MM/DD/YYYY') {
          sortAry.push({
            index: row,
            data: convertDate(props.data[row][name], '/', 1)
          });
        } else if (dateFormat === 'MM-DD-YYYY') {
          sortAry.push({
            index: row,
            data: convertDate(props.data[row][name], '-', 1)
          });
        } else if (dateFormat === 'MM/DD/YYYY HH:MM:SS') {
          sortAry.push({
            index: row,
            data: convertDateTime(props.data[row][name], '/', 1)
          });
        } else if (dateFormat === 'MM-DD-YYYY HH:MM:SS') {
          sortAry.push({
            index: row,
            data: convertDateTime(props.data[row][name], '-', 1)
          });
        } else if (dateFormat === 'YYYY-MM-DDTHH:MM:SS.SSS') {
          sortAry.push({
            index: row,
            data: convertDateTimeReg(data[row][name])
          });
        } else {
          sortAry.push({
            index: row,
            data: props.data[row][name]
          });
        }
      } else {
        sortAry.push({
          index: row,
          data: props.data[row][name]
        });
      }
    });
    sortAry.sort(function (item1, item2) {
      // Convert to upper case if ignoring case
      if (typeof item1.data === 'string' && hasProperty(props, 'ignorecase') === true) {
        // item1.data = (item1.data !== null) ? item1.data.toUpperCase() : null;
        item1.data = item1.data.toUpperCase();
        item2.data = item2.data !== null ? item2.data.toUpperCase() : null;
      } // Make the comparison


      if (item1.data < item2.data) {
        return ordering === 'A' ? -1 : 1;
      } else if (item1.data > item2.data) {
        return ordering === 'A' ? 1 : -1;
      } else {
        return 0; // Equal
      }
    });
    var newIndexes = [];
    sortAry.map(function (row) {
      return newIndexes.push(row.index);
    });
    setIndex(newIndexes, false);
    return newIndexes;
  }
  /***********************************************************************************
   *
   * This will place the letters and digits on the screen below the search bar.
   *
   * @param {*} row   the letter or digit to display
   * @param {*} i     the index into the letterDigit array
   *
   ***********************************************************************************/


  function alphabet(row, i) {
    var key = 'anchor_' + i;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      onClick: function onClick() {
        return letterLink("".concat(row), i);
      },
      className: background[i]
    }, row), "\xA0\xA0");
  }

  function resetSortOrder() {
    var order = new Array(props.table.length).fill('N');
    setSortOrder(order);
  }

  function clearSetBackground(index, set) {
    var backgrd = _toConsumableArray(background);

    for (var _i8 = 0; _i8 < backgrd.length; _i8++) {
      backgrd[_i8] = 'sw-sst_regBackground';
    }

    if (set === true) {
      backgrd[index] = 'sw-sst_letterBackground';
    }

    setBackground(backgrd);
  }
  /***********************************************************************************
   *
   * This will process the letter selected by the user.  It will first sort the
   * column header selected by the user in ascending order.  Next, it will find that
   * letter or digit in the data.  When found it will set the start at the beginning
   * of that letter.  Next it will continue searching until if finds the end of that
   * letter, which becomes the end of that letter.  It will note the start and end
   * positions of that letter and display the items that begin with that letter on the
   * screen.
   *
   * @param {*} letter the selected by the user
   *
   *************************************************************************************/


  function letterLink(letter, bIndex) {
    var indexing = _toConsumableArray(origIndexes);

    if (validate('H') === true) {
      // Validate that a search header was entered
      // Used to get the field name of the data item
      var index = props.table.map(function (e) {
        return e.header;
      }).indexOf(searchHeader); // Column match

      clearSetBackground(bIndex, true);
      resetSortOrder();
      setIndex(origIndexes, true);

      if (letter === '^') {
        //                setIndex(origIndexes, true);
        //                setDisableLetter(false);
        return;
      }

      var sortIndexes = sortClicked(props.table[index].name, 'A', indexing); // ascending order

      var newIndexes = []; // Find the beginning of the letter

      var begin = 0; // Where the beginning of the letter is

      var _found = false; // Indicates that the letter was found

      for (begin = 0; begin < sortIndexes.length; begin++) {
        // Letter or digit is found
        if (props.data[sortIndexes[begin]][props.table[index].name] !== null && props.data[sortIndexes[begin]][props.table[index].name].toString().startsWith(letter) === true) {
          _found = true;
          break;
        }
      } // Find the end of the letter


      var stop = 0; // Where the end of the letter is

      for (stop = begin; stop < sortIndexes.length; stop++) {
        // End of the letter or digit is found
        if (props.data[sortIndexes[stop]][props.table[index].name] !== null && props.data[sortIndexes[stop]][props.table[index].name].toString().startsWith(letter) === false) {
          break;
        }

        newIndexes.push(sortIndexes[stop]);
      }

      if (_found === true) {
        setIndex(newIndexes, true);
        setDisable(0, newIndexes.length);
        setFilterOn(false);
      } else {
        setAlertMessage('No ' + searchHeader + ' starts with a ' + letter);
        setShowAlert(true);
      }
    }
  }
  /**********************************************************************************
   *
   * The All button will display all the data and goes along with the showTable
   * props.  It will set the start at the beginning of the data and the end at the
   * end of the data.
   *
   **********************************************************************************/


  function allButton() {
    setStart(0);
    setEnd(length);
  }
  /*********************************************************************************
   *
   * This will determine if the top, previous, next, or bottom buttons are disabled
   * on the search bar.
   *
   * @param {*} index the current starting index in the data
   *
   *********************************************************************************/


  function setDisable(index, endLen) {
    if (index > 0) {
      // Index is past the start of the data, so enable top and previous
      setPreviousDisabled(false);
      setTopDisabled(false);
    } else {
      // Can not go any further up so disable top and previous
      // Index is before the start of the data, so disable top and previous
      setPreviousDisabled(true);
      setTopDisabled(true);
    } // Cannot go any further down so disable, next and bottom


    if (index + maxItems >= endLen) {
      setNextDisabled(true);
      setBottomDisabled(true);
    } else {
      // Not at the bottom so enable next and bottom
      setNextDisabled(false);
      setBottomDisabled(false);
    }
  }

  function sendIndexes(start, end, length, indexes) {
    var sentIndexes = [];

    for (var _i9 = start; _i9 < end && _i9 < length; _i9++) {
      sentIndexes.push(indexes[_i9]);
    }

    if (hasProperty(props, 'indexing')) {
      props.indexing(sentIndexes);
    }

    if (hasProperty(props, 'allIndexes') === true) {
      props.allIndexes(indexes);
    }
  }
  /***********************************************************************************
   *
   * This will determine where the current start and end are in the data so they
   * can be displayed in the table.
   *
   * @param {*} index the current starting position
   *
   ***********************************************************************************/


  function setStartEnd(index, dataLen, indexes) {
    if (index !== -1) {
      if (index + maxItems >= dataLen) {
        // End is past the data
        setStart(index);
        setEnd(dataLen);
        hasProperty(props, 'startEnd') === true ? props.startEnd(index, dataLen) : null;
        sendIndexes(index, dataLen, dataLen, indexes);
        setDisable(index, dataLen);
      } else {
        // End is not past the data
        setStart(index);
        setEnd(index + maxItems);
        setDisable(index, dataLen);
        hasProperty(props, 'startEnd') === true ? props.startEnd(index, index + maxItems) : null;
        sendIndexes(index, index + maxItems, dataLen, indexes);
      }
    }
  }
  /***********************************************************************************
   *
   * This is called when the top button is clicked.  It will set the start and end
   * places in the data, so that it can be determined what to show in the table.
   *
   ***********************************************************************************/


  function topButton() {
    if (maxItems < length) {
      // Not at the end of the data
      setStart(0);
      setEnd(maxItems);
      hasProperty(props, 'startEnd') === true ? props.startEnd(0, maxItems) : null;
      sendIndexes(0, maxItems, length, indexes);
    } else {
      // At the end of the data
      setStart(0);
      setEnd(length);
      hasProperty(props, 'startEnd') === true ? props.startEnd(0, length) : null;
      sendIndexes(0, length, length, indexes);
    }

    setDisable(0, length); // Determine which buttons to disable
  }
  /***********************************************************************************
   *
   * This is called when the previous button is clicked.  It will set the start and end
   * places in the data, so that it can be determined what to show in the table.
   *
   ***********************************************************************************/


  function previousButton() {
    var index = start - maxItems; // Go back the appropriate number of records in the data

    if (index <= 0) {
      // Past the beginning of the data
      setStart(0);
      setEnd(maxItems);
      hasProperty(props, 'startEnd') === true ? props.startEnd(0, maxItems) : null;
      sendIndexes(0, maxItems, length, indexes);
    } else {
      // Not past the beginning of the data
      setStart(index);
      setEnd(index + maxItems);
      hasProperty(props, 'startEnd') === true ? props.startEnd(index, index + maxItems) : null; // Add max items to get the new current end

      sendIndexes(index, index + maxItems, length, indexes);
    }

    setDisable(index, length); // Determine which buttons to disable
  }
  /***********************************************************************************
   *
   * This is called when the next button is clicked.  It will set the start and end
   * places in the data, so that it can be determined what to show in the table.
   *
   ***********************************************************************************/


  function nextButton() {
    var index = parseInt(end); // Set the start at the current end of data for the table

    var begin = 0; // Current beginning of the start of the data

    if (index < length) {
      // Not at the end of the data
      begin = index;
    } else {
      // At the end of the data, so place the beginning at the current start
      begin = start;
    }

    if (index + maxItems >= length) {
      // At the end of the data
      setStart(begin);
      setEnd(length);
      hasProperty(props, 'startEnd') === true ? props.startEnd(begin, length) : null;
      sendIndexes(begin, length, length, indexes);
    } else {
      // Not at the end of the data
      setStart(begin);
      setEnd(index + maxItems);
      hasProperty(props, 'startEnd') === true ? props.startEnd(begin, index + maxItems) : null; // Increment to the next max items

      sendIndexes(begin, index + maxItems, length, indexes);
    }

    setDisable(index, length); // Determine which buttons to disable
  }
  /***********************************************************************************
   *
   * This is called when the bottom button is clicked.  It will set the start and end
   * places in the data, so that it can be determined what to show in the table.
   *
   ***********************************************************************************/


  function bottomButton() {
    if (length - maxItems < 0) {
      // At the end of the data
      setStart(0);
      setEnd(length);
      hasProperty(props, 'startEnd') === true ? props.startEnd(0, length) : null;
      sendIndexes(0, length, length, indexes);
    } else {
      // Not at the end of the data
      setStart(length - maxItems);
      setEnd(length);
      hasProperty(props, 'startEnd') === true ? props.startEnd(length - maxItems, length) : null;
      sendIndexes(length - maxItems, length, length, indexes);
    }

    setDisable(length, length);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchSortTable);

/***/ }),

/***/ "./src/Slider.js":
/*!***********************!*\
  !*** ./src/Slider.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Slider = function Slider(props) {
  var min = props.hasOwnProperty('start') ? props.start : 0;
  var max = props.hasOwnProperty('end') ? props.end : 100;
  var startValue = props.hasOwnProperty('startValue') ? props.startValue : 0;
  var displayValue = props.hasOwnProperty('noshow') ? false : true;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(startValue),
      _useState2 = _slicedToArray(_useState, 2),
      rangeValue = _useState2[0],
      setRangeValue = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "sw-slider_rangeslider"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "range",
    className: "sw-slider_range",
    name: "slider",
    min: min,
    defaultValue: startValue,
    max: max,
    onChange: function onChange(event) {
      return setRangeValue(event.target.value);
    },
    onMouseMove: function onMouseMove(event) {
      return setRangeValue(event.target.value);
    }
  }), displayValue === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    id: "id_rangeValue",
    name: "rangeValue",
    value: rangeValue,
    className: "sw-slider_rangeValue"
  }, rangeValue) : null);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);

/***/ }),

/***/ "./src/Theme.js":
/*!**********************!*\
  !*** ./src/Theme.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateButton": () => (/* binding */ generateButton),
/* harmony export */   "generateDefaultButton": () => (/* binding */ generateDefaultButton),
/* harmony export */   "generateCSSButton": () => (/* binding */ generateCSSButton),
/* harmony export */   "generateCSSDefaultButton": () => (/* binding */ generateCSSDefaultButton)
/* harmony export */ });
var hasProperty = function hasProperty(obj, propName) {
  return !!Object.getOwnPropertyDescriptor(obj, propName);
};
/*********************************************************************
 *
 * 04-23-2020   Initial check-in.
 * 09-16-2020   Added the getNormalBackColor and getErrorColor
 *              functions.
 *
 *********************************************************************/

/********************************************************************************
 *
 * This will generate a button and will determine if the button should be
 * disabled or not.
 *
 * @param {*} style         the style used for the button
 * @param {*} error         indicates whether an error occurred and if so, disable
 *                          the button
 * @param {*} disabled      indicates whether the button should be disabled or not
 * @param {*} disableColor  the color for the disabled button (default is gray)
 *
 *********************************************************************************/


var generateButton = function generateButton(style, error) {
  var disabled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var disableColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'gray';
  var genButtonStyle = {};

  if (style !== null) {
    genButtonStyle = Object.assign({}, style); // Copy the button style
  }

  if (error === true || disabled === true) {
    // Change certain buttons to the disable color to reflect the buttons have been disabled due to an error
    genButtonStyle.backgroundColor = disableColor;
  } else {
    // Do not disable the button
    // Make sure the style has a background color, if not use the theme color
    genButtonStyle.backgroundColor = style !== null && hasProperty(style, 'backgroundColor') === true ? style.backgroundColor : Style(document.documentElement).getPropertyValue('--sw-theme_buttonColor');
    ;
  }

  return genButtonStyle; // Return the button
};
/********************************************************************************
 *
 * This will generate a button and will determine if the button should be
 * disabled or not.
 *
 * @param {*} error         indicates whether an error occurred and if so, disable
 *                          the button
 * @param {*} disabled      indicates whether the button should be disabled or not
 *
 *********************************************************************************/

var generateDefaultButton = function generateDefaultButton(error) {
  var disabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var genButtonStyle = Object.assign({}, buttonStyle); // Copy the button style

  if (error === true || disabled === true) {
    // Change certain buttons to the disable color to reflect the buttons have been disabled due to an error
    genButtonStyle.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--sw-theme_disableButtonColor');
  } else {
    // Do not disable the button
    // Make sure the style has a background color, if not use the theme color
    genButtonStyle.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--sw-theme_buttonColor');
  }

  return genButtonStyle; // Return the button
};
var generateCSSButton = function generateCSSButton(cssClassName, error) {
  var disabled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var noBackground = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var cssNormalName = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'sw-theme_normalButtonBackground';
  var cssDisableName = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'sw-theme_grayButtonBackground';

  if (error === true || disabled === true) {
    return "".concat(cssClassName, " ").concat(cssDisableName);
  } else {
    if (noBackground === true) {
      return cssClassName;
    } else {
      return "".concat(cssClassName, " ").concat(cssNormalName);
    }
  }
};
var generateCSSDefaultButton = function generateCSSDefaultButton(error) {
  var disabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  generateCSSButton('sw-theme_buttonStyle', error, disabled);
};

/***/ }),

/***/ "./src/browserDetect.js":
/*!******************************!*\
  !*** ./src/browserDetect.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isOpera": () => (/* binding */ isOpera),
/* harmony export */   "isFirefox": () => (/* binding */ isFirefox),
/* harmony export */   "isSafari": () => (/* binding */ isSafari),
/* harmony export */   "isIE": () => (/* binding */ isIE),
/* harmony export */   "isEdge": () => (/* binding */ isEdge),
/* harmony export */   "isChrome": () => (/* binding */ isChrome),
/* harmony export */   "isEdgeChromium": () => (/* binding */ isEdgeChromium),
/* harmony export */   "isBlink": () => (/* binding */ isBlink)
/* harmony export */ });
// https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
// Googling for browser reliable detection often results in checking the User agent string. This method is not reliable,
// because it's trivial to spoof this value.
// I've written a method to detect browsers by duck-typing.
//
// Only use the browser detection method if it's truly necessary, such as showing browser-specific instructions to install an extension. Use feature detection when possible.
//
// Demo: https://jsfiddle.net/6spj1059/
var window = window ? window : {};
var navigator = navigator ? navigator : {
  userAgent: ""
};
var document = document ? document : {}; // Opera 8.0+

var isOpera = !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0; // Firefox 1.0+

var isFirefox = typeof InstallTrigger !== 'undefined'; // Safari 3.0+ "[object HTMLElementConstructor]"

var isSafari = /constructor/i.test(window.HTMLElement) || function (p) {
  return p.toString() === "[object SafariRemoteNotification]";
}(!window['safari'] || typeof safari !== 'undefined' && window['safari'].pushNotification); // Internet Explorer 6-11

var isIE =
/*@cc_on!@*/
 false || !!document.documentMode; // Edge 20+

var isEdge = !isIE && !!window.StyleMedia; // Chrome 1 - 79

var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime); // Edge (based on chromium) detection

var isEdgeChromium = isChrome && navigator.userAgent.indexOf("Edg") != -1; // Blink engine detection

var isBlink = (isChrome || isOpera) && !!window.CSS;

/***/ }),

/***/ "./src/date2str.js":
/*!*************************!*\
  !*** ./src/date2str.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "date2str": () => (/* binding */ date2str)
/* harmony export */ });
// taken from http://jsfiddle.net/wLWuS/11/
var date2str = function date2str(date, pattern) {
  var z = {
    y: date.getFullYear(),
    M: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    m: date.getMinutes(),
    s: date.getSeconds()
  };
  return pattern.replace(/(y+|M+|d+|h+|m+|s+)/g, function (v) {
    var len = v.length > 2 ? v.length : 2; // allows y-M-d to produce yy-MM-dd

    var s = '0' + z[v.slice(-1)];
    return s.slice(-len);
  });
};

/***/ }),

/***/ "./src/localStrToDate.js":
/*!*******************************!*\
  !*** ./src/localStrToDate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "localStrToDate": () => (/* binding */ localStrToDate)
/* harmony export */ });
var ltzCode = null;

var getLTZ = function getLTZ() {
  if (ltzCode == null) {
    var now = new Date() + "";
    var i = now.indexOf(" GMT");
    if (i > -1) ltzCode = now.substring(i, i + 10);
    console.log('ltzCode:', ltzCode);
  }

  return ltzCode;
};

var localStrToDate = function localStrToDate(target) {
  if (target == null) return null;
  var i = target.indexOf(" GMT");
  if (i == -1) // missing
    target += getLTZ();
  return new Date(target);
};

/***/ }),

/***/ "./src/makeChangeHandler.js":
/*!**********************************!*\
  !*** ./src/makeChangeHandler.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(yourComponent) {
  // console.log('changeHandler generated.');
  return function (e) {
    if (typeof e === 'string') return; // passed in by Radio, can be ignored, next event has target.name

    if (typeof e.preventDefault === 'function') e.preventDefault();

    if ('target' in e && 'name' in e.target && 'value' in e.target) {
      var stateChange = {};
      stateChange[e.target.name] = e.target.value; // console.log(typeof e, e.target, ':', e.target.value, '->', e.target.name);

      yourComponent.setState(stateChange);
    } else {// console.log('something unusual here, expecting e.target.name e.target.value e:', typeof e, e);
    }
  };
}

/***/ }),

/***/ "./src/funnel-filter-svgrepo-com.svg":
/*!*******************************************!*\
  !*** ./src/funnel-filter-svgrepo-com.svg ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMi4wMzkgNTEyLjAzOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjAzOSA1MTIuMDM5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTUxMi4wMTksODUuMzMzYzAtNTQuNDg4LTExMy4xMDQtODUuMzMzLTI1Ni04NS4zMzNzLTI1NiwzMC44NDUtMjU2LDg1LjMzM2MwLDEyLjg0Nyw2LjI5NCwyNC4zNzksMTcuNzc3LDM0LjUwMw0KCQkJbDE3NC4yMjMsMjI4LjY5N3YxNDIuMTMzYzAsMTcuNTgsMjAuMDcsMjcuNjE0LDM0LjEzMywxNy4wNjdsODUuMzMzLTY0YzUuMzcyLTQuMDI5LDguNTMzLTEwLjM1Miw4LjUzMy0xNy4wNjd2LTc4LjEzMw0KCQkJbDE3NC4yMjMtMjI4LjY5N0M1MDUuNzI2LDEwOS43MTIsNTEyLjAxOSw5OC4xODEsNTEyLjAxOSw4NS4zMzN6IE0yNTYuMDE5LDQyLjY2N2MxMTYuMzE0LDAsMjEzLjMzMywyNi40NTksMjEzLjMzMyw0Mi42NjcNCgkJCWMwLDAuMzYyLTAuMDY1LDAuNzMtMC4xNjEsMS4xMDJjLTEuNTMxLDAuNzM5LTMuMDQ4LDEuNjg3LTQuNTI4LDIuODcxYy0xMi41NjIsMTAuMDUzLTM3LjI4NCwxOS4wNDUtNjkuNzIzLDI1LjgyNg0KCQkJYy0zNi4xOTMsNy4xNzUtODIuNzcxLDEyLjQ3NS0xMzMuMjY3LDEyLjg0NmMtMC4xMDksMC4wMDEtMC4yMTgsMC4wMDItMC4zMjgsMC4wMDNjLTEuNzcxLDAuMDEyLTMuNTQ2LDAuMDE5LTUuMzI1LDAuMDE5DQoJCQljLTEuNzgsMC0zLjU1NS0wLjAwNy01LjMyNS0wLjAxOWMtMC4xMDktMC4wMDEtMC4yMTgtMC4wMDItMC4zMjgtMC4wMDNjLTUwLjQ5Ni0wLjM3MS05Ny4wNzQtNS42NzEtMTMzLjI2Ny0xMi44NDYNCgkJCWMtMzIuNDQtNi43ODEtNTcuMTYxLTE1Ljc3My02OS43MjMtMjUuODI2Yy0xLjQ4MS0xLjE4NS0yLjk5Ny0yLjEzMy00LjUyOC0yLjg3MWMtMC4wOTYtMC4zNzEtMC4xNjEtMC43NC0wLjE2MS0xLjEwMg0KCQkJQzQyLjY4Niw2OS4xMjUsMTM5LjcwNiw0Mi42NjcsMjU2LjAxOSw0Mi42Njd6IE0yNzcuMzUzLDQxNmwtNDIuNjY3LDMydi04NS4zMzNoNDIuNjY3VjQxNnogTTI4OC4xMTksMzIwaC02NC4yTDk4LjE3MiwxNTQuOTM1DQoJCQljNDEuODc2LDkuOTcxLDk0LjM4NSwxNS4zNjksMTUxLjk4NCwxNS43MTJjMS45NSwwLjAxMywzLjkwNCwwLjAyLDUuODYzLDAuMDJjMS45NTksMCwzLjkxMy0wLjAwNyw1Ljg2My0wLjAyDQoJCQljNTcuNTk5LTAuMzQzLDExMC4xMDktNS43NCwxNTEuOTg0LTE1LjcxMkwyODguMTE5LDMyMHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==";

/***/ }),

/***/ "./lib/doubleListBox.css":
/*!*******************************!*\
  !*** ./lib/doubleListBox.css ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "169349a9251138181871.css";

/***/ }),

/***/ "./lib/theme.css":
/*!***********************!*\
  !*** ./lib/theme.css ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d5a0d2056b967e7ad538.css";

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"React","root":"React"} ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!****************************************************************************************************!*\
  !*** external {"commonjs":"react-dom","commonjs2":"react-dom","amd":"ReactDOM","root":"ReactDOM"} ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/lib/";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertModal": () => (/* reexport safe */ _AlertModal_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "CheckBox": () => (/* reexport safe */ _CheckBox_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "ChoiceText": () => (/* reexport safe */ _ChoiceText_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "sanitize": () => (/* reexport safe */ _Common_js__WEBPACK_IMPORTED_MODULE_3__.sanitize),
/* harmony export */   "formatMoney": () => (/* reexport safe */ _Common_js__WEBPACK_IMPORTED_MODULE_3__.formatMoney),
/* harmony export */   "ConfirmModal": () => (/* reexport safe */ _ConfirmModal_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "ContextMenu": () => (/* reexport safe */ _ContextMenu_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "convertDate": () => (/* reexport safe */ _DateFunct_js__WEBPACK_IMPORTED_MODULE_6__.convertDate),
/* harmony export */   "dateTime": () => (/* reexport safe */ _DateFunct_js__WEBPACK_IMPORTED_MODULE_6__.dateTime),
/* harmony export */   "addDigit": () => (/* reexport safe */ _DateFunct_js__WEBPACK_IMPORTED_MODULE_6__.addDigit),
/* harmony export */   "currentDateTime": () => (/* reexport safe */ _DateFunct_js__WEBPACK_IMPORTED_MODULE_6__.currentDateTime),
/* harmony export */   "currentDate": () => (/* reexport safe */ _DateFunct_js__WEBPACK_IMPORTED_MODULE_6__.currentDate),
/* harmony export */   "currentDBDateTime": () => (/* reexport safe */ _DateFunct_js__WEBPACK_IMPORTED_MODULE_6__.currentDBDateTime),
/* harmony export */   "currentDBDate": () => (/* reexport safe */ _DateFunct_js__WEBPACK_IMPORTED_MODULE_6__.currentDBDate),
/* harmony export */   "dbDate": () => (/* reexport safe */ _DateFunct_js__WEBPACK_IMPORTED_MODULE_6__.dbDate),
/* harmony export */   "monthName": () => (/* reexport safe */ _DateFunct_js__WEBPACK_IMPORTED_MODULE_6__.monthName),
/* harmony export */   "DateInput": () => (/* reexport safe */ _DateInput_js__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "DoubleListBox": () => (/* reexport safe */ _DoubleListBox_js__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "ErrorModal": () => (/* reexport safe */ _ErrorModal_js__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "InputFile": () => (/* reexport safe */ _InputFile_js__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "generateInvalid": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_11__.generateInvalid),
/* harmony export */   "setInvalidScreen": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_11__.setInvalidScreen),
/* harmony export */   "setInvalidTable": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_11__.setInvalidTable),
/* harmony export */   "setInvalidDual": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_11__.setInvalidDual),
/* harmony export */   "checkValidityScreen": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_11__.checkValidityScreen),
/* harmony export */   "checkValidityTable": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_11__.checkValidityTable),
/* harmony export */   "resetDisplayScreen": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_11__.resetDisplayScreen),
/* harmony export */   "resetDisplayTable": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_11__.resetDisplayTable),
/* harmony export */   "wasClickedScreen": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_11__.wasClickedScreen),
/* harmony export */   "wasClickedTable": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_11__.wasClickedTable),
/* harmony export */   "isConstant": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_11__.isConstant),
/* harmony export */   "validCheckDual": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_11__.validCheckDual),
/* harmony export */   "validCheckScreen": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_11__.validCheckScreen),
/* harmony export */   "validCheckTable": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_11__.validCheckTable),
/* harmony export */   "clearInvalidDual": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_11__.clearInvalidDual),
/* harmony export */   "clearInvalidScreen": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_11__.clearInvalidScreen),
/* harmony export */   "clearInvalidTable": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_11__.clearInvalidTable),
/* harmony export */   "processInvalidStyleScreen": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_11__.processInvalidStyleScreen),
/* harmony export */   "processStyleScreen": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_11__.processStyleScreen),
/* harmony export */   "clearInvalidScreenOnly": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_11__.clearInvalidScreenOnly),
/* harmony export */   "processInvalidStyleTable": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_11__.processInvalidStyleTable),
/* harmony export */   "processStyleTable": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_11__.processStyleTable),
/* harmony export */   "isInvalid": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_11__.isInvalid),
/* harmony export */   "getInvalidMessage": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_11__.getInvalidMessage),
/* harmony export */   "Choice": () => (/* reexport safe */ _List_js__WEBPACK_IMPORTED_MODULE_12__.Choice),
/* harmony export */   "List": () => (/* reexport safe */ _List_js__WEBPACK_IMPORTED_MODULE_12__.List),
/* harmony export */   "Modal": () => (/* reexport safe */ _Modal_js__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   "Radio": () => (/* reexport safe */ _Radio_js__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   "search": () => (/* reexport safe */ _SearchFunct_js__WEBPACK_IMPORTED_MODULE_15__.search),
/* harmony export */   "binSearch": () => (/* reexport safe */ _SearchFunct_js__WEBPACK_IMPORTED_MODULE_15__.binSearch),
/* harmony export */   "SearchSortTable": () => (/* reexport safe */ _SearchSortTable_js__WEBPACK_IMPORTED_MODULE_16__["default"]),
/* harmony export */   "Slider": () => (/* reexport safe */ _Slider_js__WEBPACK_IMPORTED_MODULE_17__["default"]),
/* harmony export */   "generateButton": () => (/* reexport safe */ _Theme_js__WEBPACK_IMPORTED_MODULE_18__.generateButton),
/* harmony export */   "generateDefaultButton": () => (/* reexport safe */ _Theme_js__WEBPACK_IMPORTED_MODULE_18__.generateDefaultButton),
/* harmony export */   "generateCSSButton": () => (/* reexport safe */ _Theme_js__WEBPACK_IMPORTED_MODULE_18__.generateCSSButton),
/* harmony export */   "generateCSSDefaultButton": () => (/* reexport safe */ _Theme_js__WEBPACK_IMPORTED_MODULE_18__.generateCSSDefaultButton),
/* harmony export */   "isOpera": () => (/* reexport safe */ _browserDetect_js__WEBPACK_IMPORTED_MODULE_19__.isOpera),
/* harmony export */   "isFirefox": () => (/* reexport safe */ _browserDetect_js__WEBPACK_IMPORTED_MODULE_19__.isFirefox),
/* harmony export */   "isSafari": () => (/* reexport safe */ _browserDetect_js__WEBPACK_IMPORTED_MODULE_19__.isSafari),
/* harmony export */   "isIE": () => (/* reexport safe */ _browserDetect_js__WEBPACK_IMPORTED_MODULE_19__.isIE),
/* harmony export */   "isEdge": () => (/* reexport safe */ _browserDetect_js__WEBPACK_IMPORTED_MODULE_19__.isEdge),
/* harmony export */   "isChrome": () => (/* reexport safe */ _browserDetect_js__WEBPACK_IMPORTED_MODULE_19__.isChrome),
/* harmony export */   "isEdgeChromium": () => (/* reexport safe */ _browserDetect_js__WEBPACK_IMPORTED_MODULE_19__.isEdgeChromium),
/* harmony export */   "isBlink": () => (/* reexport safe */ _browserDetect_js__WEBPACK_IMPORTED_MODULE_19__.isBlink),
/* harmony export */   "date2str": () => (/* reexport safe */ _date2str_js__WEBPACK_IMPORTED_MODULE_20__.date2str),
/* harmony export */   "localStrToDate": () => (/* reexport safe */ _localStrToDate_js__WEBPACK_IMPORTED_MODULE_21__.localStrToDate),
/* harmony export */   "makeChangeHandler": () => (/* reexport safe */ _makeChangeHandler_js__WEBPACK_IMPORTED_MODULE_22__["default"])
/* harmony export */ });
/* harmony import */ var _AlertModal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlertModal.js */ "./src/AlertModal.js");
/* harmony import */ var _CheckBox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckBox.js */ "./src/CheckBox.js");
/* harmony import */ var _ChoiceText_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChoiceText.js */ "./src/ChoiceText.js");
/* harmony import */ var _Common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Common.js */ "./src/Common.js");
/* harmony import */ var _ConfirmModal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ConfirmModal.js */ "./src/ConfirmModal.js");
/* harmony import */ var _ContextMenu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ContextMenu.js */ "./src/ContextMenu.js");
/* harmony import */ var _DateFunct_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DateFunct.js */ "./src/DateFunct.js");
/* harmony import */ var _DateInput_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DateInput.js */ "./src/DateInput.js");
/* harmony import */ var _DoubleListBox_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DoubleListBox.js */ "./src/DoubleListBox.js");
/* harmony import */ var _ErrorModal_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ErrorModal.js */ "./src/ErrorModal.js");
/* harmony import */ var _InputFile_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./InputFile.js */ "./src/InputFile.js");
/* harmony import */ var _Invalid_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Invalid.js */ "./src/Invalid.js");
/* harmony import */ var _List_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./List.js */ "./src/List.js");
/* harmony import */ var _Modal_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Modal.js */ "./src/Modal.js");
/* harmony import */ var _Radio_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Radio.js */ "./src/Radio.js");
/* harmony import */ var _SearchFunct_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SearchFunct.js */ "./src/SearchFunct.js");
/* harmony import */ var _SearchSortTable_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./SearchSortTable.js */ "./src/SearchSortTable.js");
/* harmony import */ var _Slider_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Slider.js */ "./src/Slider.js");
/* harmony import */ var _Theme_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Theme.js */ "./src/Theme.js");
/* harmony import */ var _browserDetect_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./browserDetect.js */ "./src/browserDetect.js");
/* harmony import */ var _date2str_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./date2str.js */ "./src/date2str.js");
/* harmony import */ var _localStrToDate_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./localStrToDate.js */ "./src/localStrToDate.js");
/* harmony import */ var _makeChangeHandler_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./makeChangeHandler.js */ "./src/makeChangeHandler.js");
























})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map