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
/******/ 	var __webpack_modules__ = ({

/***/ "./src/AlertModal.js":
/*!***************************!*\
  !*** ./src/AlertModal.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.js */ "./src/Modal.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _excluded = ["selectedValue", "text", "children", "className"];

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
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded);

  var isChecked = props.value === selectedValue;
  var symbol = isChecked ? checked : unchecked;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", _extends({
    type: "button",
    onClick: handle,
    className: "sw-checkbox_defaultStyle " + className
  }, rest), symbol, text, children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckBox);

/***/ }),

/***/ "./src/ChoiceText.js":
/*!***************************!*\
  !*** ./src/ChoiceText.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatMoney": () => (/* binding */ formatMoney),
/* harmony export */   "sanitize": () => (/* binding */ sanitize)
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.js */ "./src/Modal.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addDigit": () => (/* binding */ addDigit),
/* harmony export */   "convertDate": () => (/* binding */ convertDate),
/* harmony export */   "currentDBDate": () => (/* binding */ currentDBDate),
/* harmony export */   "currentDBDateTime": () => (/* binding */ currentDBDateTime),
/* harmony export */   "currentDate": () => (/* binding */ currentDate),
/* harmony export */   "currentDateTime": () => (/* binding */ currentDateTime),
/* harmony export */   "dateTime": () => (/* binding */ dateTime),
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
  if (dateAndTime === null) return null;
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _date2str__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date2str */ "./src/date2str.js");
/* harmony import */ var _localStrToDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStrToDate */ "./src/localStrToDate.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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
  /*
  import {isSafari, isIE} from './browserDetect'
  
      const handleCalendarChange = (value) => {
        const e = {}
        e.target = {}
        e.target.name = f.name;
        e.target.value = date2str(value, f.format)
        f.onChange(e);
      }
  
      const triangle = (showCalender) ? <>&#9650;</> : <>&#9660;</>     // 9650   BLACK UP-POINTING TRIANGLE     9660   BLACK DOWN-POINTING TRIANGLE
  
      //  pattern="(?:19|20)\[0-9\]{2}-(?:(?:0\[1-9\]|1\[0-2\])-(?:0\[1-9\]|1\[0-9\]|2\[0-9\])|(?:(?!02)(?:0\[1-9\]|1\[0-2\])-(?:30))|(?:(?:0\[13578\]|1\[02\])-31))"
      // title="Enter a date in this format YYYY-MM-DD"
  
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _List_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.js */ "./src/List.js");
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

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return reset(props);
  }, [props.choices]);

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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.js */ "./src/Modal.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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

/***/ "./src/FlatMenu.js":
/*!*************************!*\
  !*** ./src/FlatMenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlatMenu": () => (/* binding */ FlatMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _generalStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generalStore */ "./src/generalStore.js");
/* harmony import */ var _MenuUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuUtils */ "./src/MenuUtils.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var FlatMenu = function FlatMenu(props) {
  var gs = (0,_generalStore__WEBPACK_IMPORTED_MODULE_1__.openGeneralStore)();

  var _gs$useMenuState = gs.useMenuState(),
      _gs$useMenuState2 = _slicedToArray(_gs$useMenuState, 2),
      curMenuPath = _gs$useMenuState2[0],
      setCurMenuPath = _gs$useMenuState2[1];

  var items = props.menuItems; // default to first if no path has been selected (first time in)

  var active = items.find(function (item) {
    return item.path === curMenuPath;
  }) || items[0];
  var named = items.filter(function (item) {
    return item.title;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, named.map(function (n, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MenuUtils__WEBPACK_IMPORTED_MODULE_2__.Link, {
      to: n.path
    }, n.title));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null), active.component());
};

/***/ }),

/***/ "./src/Header.js":
/*!***********************!*\
  !*** ./src/Header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AlertModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlertModal */ "./src/AlertModal.js");
/* harmony import */ var _encrypt_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./encrypt.js */ "./src/encrypt.js");
/* harmony import */ var _HeaderModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderModal */ "./src/HeaderModal.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Header = function Header(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showModal = _useState2[0],
      setShowModal = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      showAlert = _useState4[0],
      setShowAlert = _useState4[1];

  if (!props) {
    console.log('<Header> w/o props');
    return null;
  }

  var envTitle = window.env.title ? window.env.title : "";
  var envDBType = window.env.DB_TYPE ? window.env.DB_TYPE : "";
  var title = props.title ? props.title : envTitle;
  var dbType = props.dbType ? props.dbType : envDBType;
  var username = props.username ? props.username : window.env.username;
  var titleLogo = props.titleLogo ? props.titleLogo : window.env.titleLogo;
  var alertLogo = props.alertLogo ? props.alertLogo : window.env.alertLogo;
  var logoutURL = props.logoutURL ? props.logoutURL : window.env.logoutURL;
  var loginURL = props.loginURL ? props.loginURL : window.env.loginURL;
  var setUsername = props.setUsername ? props.setUsername : function () {
    console.log('no setUsername fn() passed to Header.');
  };
  var userMsg = username === null ? "User not Logged in" : 'Welcome: ' + username;
  var logout = username === null || logoutURL === null ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: logoutURL,
    className: "sw-header_link"
  }, "Logout");
  var login = username !== null || loginURL === null ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: loginURL,
    className: "sw-header_link"
  }, "Login");
  var modalButton = null;

  if ((0,_encrypt_js__WEBPACK_IMPORTED_MODULE_2__.getList)().find(function (p) {
    return p === username;
  })) {
    modalButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      id: "sw-modalButton",
      onClick: function onClick() {
        return setShowModal(true);
      }
    }, ".");
  }

  var alert = null;

  if (!username) {
    var img = alertLogo ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: alertLogo
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null)) : null;
    var msg = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, img, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "You are an unauthorized user or your login time has expired"));
    alert = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AlertModal__WEBPACK_IMPORTED_MODULE_1__["default"], {
      show: showAlert,
      closeFunct: setShowAlert,
      message: msg
    });
  }

  var titleImg = titleLogo ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: titleLogo,
    alt: "Logo",
    className: "sw-header_logo"
  }) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "sw-header_div"
  }, titleImg, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "sw-header_title"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "sw-header_link"
  }, userMsg, modalButton), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, dbType), logout, login, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HeaderModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    show: showModal,
    username: username,
    setUser: setUsername,
    closeFunct: setShowModal
  })), alert);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/HeaderModal.js":
/*!****************************!*\
  !*** ./src/HeaderModal.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal */ "./src/Modal.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var HeaderModal = function HeaderModal(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.username),
      _useState2 = _slicedToArray(_useState, 2),
      user = _useState2[0],
      setUser = _useState2[1];

  var closeButton = function closeButton() {
    props.setUser(user);
    props.closeFunct(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, props.show === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Modal__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "user",
    value: user,
    onChange: function onChange(event) {
      return setUser(event.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    name: "close",
    onClick: closeButton
  }, "Close"))) : null);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderModal);

/***/ }),

/***/ "./src/InputFile.js":
/*!**************************!*\
  !*** ./src/InputFile.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkValidityScreen": () => (/* binding */ checkValidityScreen),
/* harmony export */   "checkValidityTable": () => (/* binding */ checkValidityTable),
/* harmony export */   "clearInvalidDual": () => (/* binding */ clearInvalidDual),
/* harmony export */   "clearInvalidScreen": () => (/* binding */ clearInvalidScreen),
/* harmony export */   "clearInvalidScreenOnly": () => (/* binding */ clearInvalidScreenOnly),
/* harmony export */   "clearInvalidTable": () => (/* binding */ clearInvalidTable),
/* harmony export */   "generateInvalid": () => (/* binding */ generateInvalid),
/* harmony export */   "getInvalidMessage": () => (/* binding */ getInvalidMessage),
/* harmony export */   "isConstant": () => (/* binding */ isConstant),
/* harmony export */   "isInvalid": () => (/* binding */ isInvalid),
/* harmony export */   "processInvalidStyleScreen": () => (/* binding */ processInvalidStyleScreen),
/* harmony export */   "processInvalidStyleTable": () => (/* binding */ processInvalidStyleTable),
/* harmony export */   "processStyleScreen": () => (/* binding */ processStyleScreen),
/* harmony export */   "processStyleTable": () => (/* binding */ processStyleTable),
/* harmony export */   "resetDisplayScreen": () => (/* binding */ resetDisplayScreen),
/* harmony export */   "resetDisplayTable": () => (/* binding */ resetDisplayTable),
/* harmony export */   "setInvalidDual": () => (/* binding */ setInvalidDual),
/* harmony export */   "setInvalidScreen": () => (/* binding */ setInvalidScreen),
/* harmony export */   "setInvalidTable": () => (/* binding */ setInvalidTable),
/* harmony export */   "validCheckDual": () => (/* binding */ validCheckDual),
/* harmony export */   "validCheckScreen": () => (/* binding */ validCheckScreen),
/* harmony export */   "validCheckTable": () => (/* binding */ validCheckTable),
/* harmony export */   "wasClickedScreen": () => (/* binding */ wasClickedScreen),
/* harmony export */   "wasClickedTable": () => (/* binding */ wasClickedTable)
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
    className: "sw-invalid_errMessage"
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
    className: "sw-invalid_errMessage"
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
  var backCSSName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  // Set the background color based on whether the value is invalid or not
  if (cssClassName === null) {
    return invalidValues[constant].validity === true ? "sw-theme_errorBackground" : backCSSName === null ? "sw-theme_normalBackground" : backCSSName;
  } else {
    return invalidValues[constant].validity === true ? "".concat(cssClassName, " sw-theme_errorBackground") : backCSSName === null ? "".concat(cssClassName, " sw-theme_normalBackground") : "".concat(cssClassName, " ").concat(backCSSName);
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
  var backCSSName = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

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
          if (backCSSName === null) {
            return "sw-theme_normalBackground";
          } else {
            return backCSSName;
          }
        } else {
          if (backCSSName === null) {
            return "".concat(cssClassName, " sw-theme_normalBackground");
          } else {
            return "".concat(cssClassName, " ").concat(backCSSName);
          }
        }
      }
    }
  }

  if (cssClassName === null) {
    return "sw-theme_normalBackground";
  } else {
    if (backCSSName === null) {
      return "".concat(cssClassName, " sw-theme_normalBackground");
    } else {
      return "".concat(cssClassName, " ").concat(backCSSName);
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Choice": () => (/* binding */ Choice),
/* harmony export */   "List": () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _excluded = ["list", "choices", "size", "value", "onChange"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var hasProperty = function hasProperty(obj, propName) {
  return !!Object.getOwnPropertyDescriptor(obj, propName);
}; // const min = (arr) => arr.reduce((acc))


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
    if (opt.length > 0) {
      console.log("Adding missing default value: '".concat(value, "' to ").concat(JSON.stringify(opt)));
    }

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
    e2.target.value = props.multiple ? arr : e.target.value; // console.log(`listHandleChange calling onChange(e2) ${e2.target.name} ${JSON.stringify(e2.target.value)} `);

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

/***/ "./src/MenuBar.js":
/*!************************!*\
  !*** ./src/MenuBar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuBar": () => (/* binding */ MenuBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _generalStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generalStore */ "./src/generalStore.js");
/* harmony import */ var _NavigateBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavigateBar */ "./src/NavigateBar.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var MenuBar = function MenuBar(props) {
  var gs = (0,_generalStore__WEBPACK_IMPORTED_MODULE_1__.openGeneralStore)();

  var _gs$useMenuState = gs.useMenuState(),
      _gs$useMenuState2 = _slicedToArray(_gs$useMenuState, 2),
      curMenuPath = _gs$useMenuState2[0],
      setCurMenuPath = _gs$useMenuState2[1];

  var getPaths = function getPaths(row) {
    if (row.hasOwnProperty('submenu')) {
      return row.submenu.map(getPaths).flat();
    } else {
      return {
        path: row.path,
        component: row.component
      };
    }
  };

  var subSymbol = 'none';

  if (props.hasOwnProperty('subsymbol')) {
    subSymbol = props.subsymbol;
  }

  var symbol = 'none';

  if (props.hasOwnProperty('symbol')) {
    symbol = props.symbol;
  }

  var type = 'horizontal';

  if (props.hasOwnProperty('type')) {
    type = props.type;

    if (type !== 'horizontal' && type !== 'vertical') {
      type = 'horizontal';
    }
  }

  var openType = 'none';

  if (props.hasOwnProperty('openType')) {
    openType = props.openType;

    if (openType !== 'none' && openType !== 'horizontal' && openType !== 'vertical' && openType !== 'both') {
      openType = 'none';
    }
  }

  var items = props.menuTree.map(function (mi) {
    return getPaths(mi);
  }).flat();
  var active = items.find(function (item) {
    return item.path === curMenuPath;
  }) || items[0];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NavigateBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    menuTree: props.menuTree,
    symbol: symbol,
    subsymbol: subSymbol,
    type: type,
    openType: openType
  }), active.component());
};

/***/ }),

/***/ "./src/MenuUtils.js":
/*!**************************!*\
  !*** ./src/MenuUtils.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Link": () => (/* binding */ Link),
/* harmony export */   "Redirect": () => (/* binding */ Redirect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _generalStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generalStore */ "./src/generalStore.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Redirect = function Redirect(props) {
  var gs = (0,_generalStore__WEBPACK_IMPORTED_MODULE_1__.openGeneralStore)();

  var _gs$useMenuState = gs.useMenuState(),
      _gs$useMenuState2 = _slicedToArray(_gs$useMenuState, 2),
      curMenuPath = _gs$useMenuState2[0],
      setCurMenuPath = _gs$useMenuState2[1];

  var _gs$useMenuParms = gs.useMenuParms(),
      _gs$useMenuParms2 = _slicedToArray(_gs$useMenuParms, 2),
      curMenuParms = _gs$useMenuParms2[0],
      setCurMenuParms = _gs$useMenuParms2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setCurMenuPath(props.to);
    setCurMenuParms(props.parms);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
};
var Link = function Link(props) {
  var gs = (0,_generalStore__WEBPACK_IMPORTED_MODULE_1__.openGeneralStore)();

  var _gs$useMenuState3 = gs.useMenuState(),
      _gs$useMenuState4 = _slicedToArray(_gs$useMenuState3, 2),
      curMenuPath = _gs$useMenuState4[0],
      setCurMenuPath = _gs$useMenuState4[1];

  var _gs$useMenuParms3 = gs.useMenuParms(),
      _gs$useMenuParms4 = _slicedToArray(_gs$useMenuParms3, 2),
      curMenuParms = _gs$useMenuParms4[0],
      setCurMenuParms = _gs$useMenuParms4[1];

  if (!props.to || props.to.length < 1) // same as || props.to === "")
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "nav-links"
    }, props.children);

  var click = function click(e) {
    e.preventDefault();
    console.log("You clicked ".concat(props.to));
    setCurMenuPath(props.to);
    setCurMenuParms(props.parms);
  };

  var cname = props.className || "";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'nav-links ' + cname,
    href: props.to,
    onClick: click
  }, props.children);
};

/***/ }),

/***/ "./src/Modal.js":
/*!**********************!*\
  !*** ./src/Modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/NavigateBar.js":
/*!****************************!*\
  !*** ./src/NavigateBar.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MenuUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuUtils */ "./src/MenuUtils.js");
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




var NavigateBar = function NavigateBar(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      dropDown = _useState2[0],
      setDropDown = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      click = _useState4[0],
      setClick = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      menuTree = _useState6[0],
      setMenuTree = _useState6[1];

  var count = 0;
  var addition1 = '';
  var addition2 = '';

  var buildTree = function buildTree(menuTree) {
    for (var i = 0; i < menuTree.length; i++) {
      if (menuTree[i].hasOwnProperty('submenu')) {
        menuTree[i]['index'] = count;
        count++;
        buildTree(menuTree[i].submenu);
      }
    }

    return menuTree;
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var menu = props.menuTree;
    count = menu.length;
    setMenuTree(buildTree(menu));
    var drop = [];

    for (var i = 0; i < count; i++) {
      drop.push(false);
    }

    setDropDown(drop);
  }, [props.menuTree]);

  var handleClick = function handleClick() {
    var value = true;

    if (click === true) {
      value = false;
    }

    setClick(value);
  };

  var handleClickDD = function handleClickDD(index) {
    var value = true;

    if (click === true) {
      value = false;
    }

    var localDD = _toConsumableArray(dropDown);

    for (var i = 0; i < localDD.length; i++) {
      localDD[i] = false;
    }

    setDropDown(localDD);
    setClick(value); //        let localDD = [...dropDown];
    //        localDD[index] = false;
    //        setDropDown(localDD);
  };

  var _onMouseEnter = function onMouseEnter(event, index) {
    var localDD = _toConsumableArray(dropDown);

    localDD[index] = true;
    setDropDown(localDD);
  };

  var _onMouseLeave = function onMouseLeave(index) {
    var localDD = _toConsumableArray(dropDown);

    for (var i = index; i < localDD.length; i++) {
      localDD[i] = false;
    }

    setDropDown(localDD);
    setClick(false);
  };

  var buildDropDowns = function buildDropDowns(row, index) {
    var name = null;

    if (row.hasOwnProperty('title')) {
      name = row.title.replace(' ', '_') + index;
    }

    var navItem = 'nav-item';

    if (props.type === 'vertical') {
      navItem = 'nav-item-vertical';
    }

    if (row.hasOwnProperty('submenu')) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        key: name,
        className: navItem,
        onMouseEnter: function onMouseEnter(event) {
          return _onMouseEnter(event, row.index);
        },
        onMouseLeave: function onMouseLeave() {
          return _onMouseLeave(row.index);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MenuUtils__WEBPACK_IMPORTED_MODULE_1__.Link, {
        className: "nav-links"
      }, row.title + addition1), dropDown[row.index] === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
        onClick: function onClick() {
          return handleClickDD(row.index);
        },
        className: click ? 'dropdown-menu2 clicked' : 'dropdown-menu2'
      }, row.submenu.map(buildDropDowns)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null));
    } else if (row.hasOwnProperty('title')) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        key: name
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MenuUtils__WEBPACK_IMPORTED_MODULE_1__.Link, {
        className: "dropdown-link",
        to: row.path
      }, row.title));
    }
  };

  var buildMainMenu = function buildMainMenu(menuTree) {
    return menuTree.map(function (row, index) {
      var name = '';

      if (row.hasOwnProperty('title')) {
        name = row.title.replace(' ', '_') + index;
      }

      var navItem = 'nav-item';

      if (props.type === 'vertical') {
        navItem = 'nav-item-vertical';
      }

      var dropDownType = '';

      if (props.type === 'horizontal') {
        dropDownType = ' dropdown-menu-horizontal';
      } else if (props.type === 'vertical') {
        dropDownType = ' dropdown-menu-vertical';
      }

      if (row.hasOwnProperty('submenu')) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
          key: name,
          className: navItem,
          onMouseEnter: function onMouseEnter(event) {
            return _onMouseEnter(event, index);
          },
          onMouseLeave: function onMouseLeave() {
            return _onMouseLeave(index);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MenuUtils__WEBPACK_IMPORTED_MODULE_1__.Link, {
          className: "nav-links"
        }, row.title + addition2), dropDown[index] === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
          onClick: function onClick() {
            return handleClick();
          },
          className: click ? 'dropdown-menu clicked' + dropDownType : 'dropdown-menu' + dropDownType
        }, row.submenu.map(buildDropDowns)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null));
      } else if (row.hasOwnProperty('title')) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
          key: name,
          className: navItem
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MenuUtils__WEBPACK_IMPORTED_MODULE_1__.Link, {
          to: row.path,
          className: "nav-links"
        }, row.title));
      }
    });
  };

  if (props.symbol === 'arrow') {
    addition1 = " \u2BC8";
  } else if (props.symbol === 'dots') {
    addition1 = " \u2026";
  } else if (props.symbol !== 'none') {
    addition1 = ' ' + props.symbol;
  }

  if (props.subsymbol === 'arrow') {
    addition2 = " \u25BC";
  } else if (props.subsymbol !== 'none') {
    addition2 = ' ' + props.subsymbol;
  }

  var navType = '';
  var openType = '';
  var menuIcon = null;

  if (props.type === 'horizontal') {
    navType = ' nav-menu-horizontal';
    openType = 'navbar';
  } else if (props.type === 'vertical') {
    navType = ' nav-menu-vertical';

    if (props.openType === 'both') {
      openType = "navbar_vertical nav-open-both nav-vertical";
    } else if (props.openType === 'horizontal') {
      openType = "navbar_vertical nav-open-horizontal nav-vertical";
    } else if (props.openType === 'vertical') {
      openType = "navbar_vertical nav-vertical nav-open-vertical";
    } else if (props.openType === 'none') {
      openType = "navbar_vertical nav-vertical";
    }

    if (props.openType !== 'none') {
      menuIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "nav-center"
      }, "\u2630");
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: openType
  }, menuIcon, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: click ? 'nav-menu active' + navType : 'nav-menu' + navType
  }, buildMainMenu(menuTree)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavigateBar);

/***/ }),

/***/ "./src/Radio.js":
/*!**********************!*\
  !*** ./src/Radio.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _excluded = ["selectedValue", "text", "children", "className"];

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
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded);

  var isChecked = props.value === selectedValue;
  var symbol = isChecked ? checked : unchecked;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Frag, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", _extends({
    type: "button",
    onClick: handle,
    className: "sw-radio_defaultStyle " + className
  }, rest), symbol, text, children));
}; // 2018-10-10 {text} {children} moved to inside button clickable area


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Radio);

/***/ }),

/***/ "./src/SearchFunct.js":
/*!****************************!*\
  !*** ./src/SearchFunct.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "binSearch": () => (/* binding */ binSearch),
/* harmony export */   "search": () => (/* binding */ search)
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

"use strict";
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

  if (!(props !== null && props !== void 0 && props.data)) {
    console.log('SearchSortTable: props.data is missing/null');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null));
  }

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
  var numCols = ((_props$data$ = props.data[0]) === null || _props$data$ === void 0 ? void 0 : _props$data$.length) || 10;
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

"use strict";
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

/***/ "./src/StatusBox.js":
/*!**************************!*\
  !*** ./src/StatusBox.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusBox": () => (/* binding */ StatusBox)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var StatusBox = function StatusBox(_ref) {
  var status = _ref.status;
  if (!status) return null;
  var errSection = null;

  if (status.err) {
    var errMsg = JSON.stringify(status.err, null, 2);
    console.log('status.err:', status.err);
    errSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), errMsg);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, status.msg, errSection);
};

/***/ }),

/***/ "./src/Theme.js":
/*!**********************!*\
  !*** ./src/Theme.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateButton": () => (/* binding */ generateButton),
/* harmony export */   "generateCSSButton": () => (/* binding */ generateCSSButton),
/* harmony export */   "generateCSSDefaultButton": () => (/* binding */ generateCSSDefaultButton),
/* harmony export */   "generateDefaultButton": () => (/* binding */ generateDefaultButton)
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isBlink": () => (/* binding */ isBlink),
/* harmony export */   "isChrome": () => (/* binding */ isChrome),
/* harmony export */   "isEdge": () => (/* binding */ isEdge),
/* harmony export */   "isEdgeChromium": () => (/* binding */ isEdgeChromium),
/* harmony export */   "isFirefox": () => (/* binding */ isFirefox),
/* harmony export */   "isIE": () => (/* binding */ isIE),
/* harmony export */   "isOpera": () => (/* binding */ isOpera),
/* harmony export */   "isSafari": () => (/* binding */ isSafari)
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

/***/ "./src/camel.js":
/*!**********************!*\
  !*** ./src/camel.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toCamelCase": () => (/* binding */ toCamelCase)
/* harmony export */ });
var toCamelCase = function toCamelCase(str) {
  return str.toLowerCase().replace(/_/g, ' ').replace(/(?:^\w|[A-Z]|\b\w)/g, function (ltr, idx) {
    return idx === 0 ? ltr.toLowerCase() : ltr.toUpperCase();
  }).replace(/\s+/g, '').replace('#', '');
};

/***/ }),

/***/ "./src/date2str.js":
/*!*************************!*\
  !*** ./src/date2str.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/dateUtils.js":
/*!**************************!*\
  !*** ./src/dateUtils.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lastOfMonth": () => (/* binding */ lastOfMonth),
/* harmony export */   "todayString": () => (/* binding */ todayString)
/* harmony export */ });
// TODO: this is the last day oif the previous month !== to this months last day
var lastOfMonth = function lastOfMonth() {
  var today = new Date(); // first day of next month

  var first = new Date(today.getFullYear(), today.getMonth() + 1, 1); // fixed ??? TODO: Test this

  var last = new Date(first - 1); // last day of previous month

  var mm = last.getMonth() + 1; // ????

  var month = ('' + mm).padStart(2, '0');
  return [last.getFullYear(), month, last.getDate()];
};
var todayString = function todayString() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0".concat(dd);
  }

  if (mm < 10) {
    mm = "0".concat(mm);
  }

  return "".concat(mm, "/").concat(dd, "/").concat(yyyy);
};

/***/ }),

/***/ "./src/encrypt.js":
/*!************************!*\
  !*** ./src/encrypt.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decrypt": () => (/* binding */ decrypt),
/* harmony export */   "encrypt": () => (/* binding */ encrypt),
/* harmony export */   "getList": () => (/* binding */ getList)
/* harmony export */ });
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);

var getList = function getList() {
  return decrypt(window.env.list).split(',');
};
var decrypt = function decrypt(msg) {
  return crypto_js__WEBPACK_IMPORTED_MODULE_0___default().AES.decrypt(msg, window.env.ekey).toString((crypto_js__WEBPACK_IMPORTED_MODULE_0___default().enc.Utf8));
};
var encrypt = function encrypt(msg) {
  return crypto_js__WEBPACK_IMPORTED_MODULE_0___default().AES.encrypt(msg, window.env.ekey).toString();
};

/***/ }),

/***/ "./src/forms/CheckBoxGroup.js":
/*!************************************!*\
  !*** ./src/forms/CheckBoxGroup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CheckBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CheckBox */ "./src/CheckBox.js");
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




var CheckBoxGroup = function CheckBoxGroup(_ref) {
  var choices = _ref.choices,
      name = _ref.name,
      values = _ref.values,
      onChange = _ref.onChange,
      className = _ref.className;
  if (!choices) choices = [];
  var n = choices.length;
  if (!values) values = Array(n).fill("");

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(values),
      _useState2 = _slicedToArray(_useState, 2),
      items = _useState2[0],
      setItems = _useState2[1]; // assumed values is an array


  var setOneItem = function setOneItem(e) {
    var arr = _toConsumableArray(items);

    arr[e.target.name] = e.target.value;
    setItems(arr);
    e.target.name = name; // synthesize entire group change on any change

    e.target.value = arr;
    onChange(e);
  };

  if (choices.length === 0) // need a non empty div for layout
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: className
    }, "\xA0 \xA0 \xA0 \xA0");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className
  }, choices.map(function (word, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CheckBox__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: idx,
      id: name + '-' + idx,
      selectedValue: word,
      text: word,
      name: idx,
      value: items[idx],
      onChange: setOneItem
    });
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckBoxGroup);

/***/ }),

/***/ "./src/forms/DefaultFormElements.js":
/*!******************************************!*\
  !*** ./src/forms/DefaultFormElements.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyOptions": () => (/* binding */ applyOptions),
/* harmony export */   "fields": () => (/* binding */ fields)
/* harmony export */ });
// TODO remove the 2 from    text: "Start Date2"
// import {pretty} from "./Show";
var dowList = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
var MIStyle = {
  width: '2em',
  paddingRight: '0',
  paddingLeft: '0',
  textAlign: 'center'
};
var fields = {
  firstName: {
    type: "text",
    name: "firstName",
    text: "First Name",
    placeholder: 'Jack',
    required: true
  },
  lastName: {
    type: "text",
    name: "lastName",
    text: "Last Name",
    placeholder: 'Doe',
    required: true
  },
  midItial: {
    type: "text",
    name: "midItial",
    text: "M.I.",
    placeholder: 'E',
    required: false,
    size: 1,
    maxLength: 1,
    style: MIStyle
  },
  email: {
    type: "email",
    name: "email",
    text: "Email",
    placeholder: 'jack@mail.com',
    required: true
  },
  addressLine: {
    type: "text",
    name: "addressLine",
    text: "Address Line",
    placeholder: 'Awesome str 9',
    required: true
  },
  postalCode: {
    type: "text",
    name: "postalCode",
    text: "Postal Code",
    placeholder: '12345',
    required: true
  },
  city: {
    type: "text",
    name: "city",
    text: "City",
    placeholder: 'Gotham',
    required: true
  },
  state: {
    type: "text",
    name: "state",
    text: "State",
    placeholder: 'Missouri',
    required: true
  },
  dob: {
    type: "date",
    name: "dob",
    text: "Date of Birth",
    format: 'yyyy-mm-dd',
    required: true
  },
  startDate: {
    type: "date",
    name: "startDate",
    text: "Start Date",
    format: 'yyyy-mm-dd',
    required: true
  },
  endDate: {
    type: "date",
    name: "endDate",
    text: "End Date",
    format: 'yyyy-mm-dd',
    required: true
  },
  password: {
    type: "password",
    name: "password",
    text: "Password",
    required: true
  },
  pwConfirm: {
    type: "password",
    name: "pwConfirm",
    text: "Password Confirmation",
    required: true
  },
  admin: {
    type: "chkBox",
    name: "admin",
    text: "Admin",
    selectedValue: "Y"
  },
  event: {
    type: "choice",
    name: "eventCode",
    text: "Event"
  },
  slideID: {
    type: "choice",
    name: "slideID",
    text: "Slide ID"
  },
  dow: {
    type: "chkBoxes",
    name: "dow",
    text: "Days Of Week",
    options: dowList
  },
  times: {
    type: "chkBoxes",
    name: "times",
    text: "Meeting Times"
  },
  slideObs: {
    type: "chkBoxes",
    name: "slideObs",
    text: "Observations"
  },
  comments: {
    type: "textArea",
    name: "comments",
    text: "Comments",
    placeholder: 'place your comments here...',
    required: false
  }
};
var applyOptions = function applyOptions(formFieldList, missing) {
  formFieldList.map(function (f) {
    if ((f.type == 'choice' || f.type == 'chkBoxes') && missing[f.name]) {
      // console.log(`assigning ${pretty(missing[f.name])} options to ${f.name}`);
      if (f.options != missing[f.name]) {// trigger a redraw because the options just changed
      }

      f.options = missing[f.name];
    }
  });
  return formFieldList; // TODO: Need return a Deep Copy ?
};

/***/ }),

/***/ "./src/forms/FieldGenerator.js":
/*!*************************************!*\
  !*** ./src/forms/FieldGenerator.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fieldGeneratorLookup": () => (/* binding */ fieldGeneratorLookup),
/* harmony export */   "setFieldGenerator": () => (/* binding */ setFieldGenerator)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List */ "./src/forms/List.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input */ "./src/forms/Input.js");
/* harmony import */ var _CheckBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CheckBox */ "./src/CheckBox.js");
/* harmony import */ var _CheckBoxGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CheckBoxGroup */ "./src/forms/CheckBoxGroup.js");
/* harmony import */ var _DateInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../DateInput */ "./src/DateInput.js");
var _excluded = ["className", "name", "rows", "cols"],
    _excluded2 = ["className"],
    _excluded3 = ["className", "name"],
    _excluded4 = ["className", "name"],
    _excluded5 = ["className", "name"],
    _excluded6 = ["className", "name", "format"],
    _excluded7 = ["className"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








function isFunction(functionToCheck) {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

var createFieldTextArea = function createFieldTextArea(f, handleChange) {
  var className = f.className,
      name = f.name,
      _f$rows = f.rows,
      rows = _f$rows === void 0 ? 1 : _f$rows,
      _f$cols = f.cols,
      cols = _f$cols === void 0 ? 30 : _f$cols,
      whatsleft = _objectWithoutProperties(f, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", _extends({}, whatsleft, {
    className: "input-field form-control ".concat(className || ""),
    name: name,
    key: name,
    rows: rows,
    cols: cols,
    onChange: handleChange
  }));
};

var createFieldText = function createFieldText(f, handleChange) {
  // type, name, id, text, value, placeholder, required
  var className = f.className,
      whatsleft = _objectWithoutProperties(f, _excluded2);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, whatsleft, {
    className: "input-field form-control ".concat(className || ""),
    handleChange: handleChange
  }));
};

var createFieldChoice = function createFieldChoice(f, handleChange) {
  //    name, value
  var className = f.className,
      name = f.name,
      whatsleft = _objectWithoutProperties(f, _excluded3);

  var options = isFunction(f.options) ? f.options() : f.options;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_List__WEBPACK_IMPORTED_MODULE_1__.Choice, _extends({}, whatsleft, {
    className: "select-field form-control ".concat(className || ""),
    name: name,
    key: name,
    id: name,
    choices: options,
    onChange: handleChange
  }));
};

var createFieldChkBox = function createFieldChkBox(f, handleChange) {
  //    name, value, selectedValue
  var className = f.className,
      name = f.name,
      whatsleft = _objectWithoutProperties(f, _excluded4);

  var options = isFunction(f.options) ? f.options() : f.options;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CheckBox__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, whatsleft, {
    className: "checkbox-field form-control ".concat(className || ""),
    name: name,
    key: name,
    choices: options,
    onChange: handleChange
  }));
};

var createFieldChkBoxes = function createFieldChkBoxes(f, handleChange) {
  var className = f.className,
      name = f.name,
      whatsleft = _objectWithoutProperties(f, _excluded5);

  var options = isFunction(f.options) ? f.options() : f.options;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CheckBoxGroup__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, whatsleft, {
    className: "checkbox-group-field form-control ".concat(className || ""),
    name: name,
    key: name,
    choices: options,
    onChange: handleChange
  }));
};

var createFieldDate = function createFieldDate(f, handleChange) {
  var className = f.className,
      name = f.name,
      format = f.format,
      whatsleft = _objectWithoutProperties(f, _excluded6);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DateInput__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, whatsleft, {
    className: "date-field form-control ".concat(className || ""),
    name: name,
    format: format,
    key: name,
    placeholder: format,
    onChange: handleChange
  }));
};

var createFieldNumber = function createFieldNumber(f, handleChange) {
  // type, name, id, text, value, placeholder, required
  var className = f.className,
      whatsleft = _objectWithoutProperties(f, _excluded7);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, whatsleft, {
    type: "number",
    className: "input-field form-control ".concat(className || ""),
    handleChange: handleChange
  }));
};

var fieldGenerators = {
  'text': createFieldText,
  'textArea': createFieldTextArea,
  'password': createFieldText,
  'email': createFieldText,
  'choice': createFieldChoice,
  'chkBox': createFieldChkBox,
  'chkBoxes': createFieldChkBoxes,
  'date': createFieldDate,
  'number': createFieldNumber // TODO: Radio buttons, DoubleListBox, List, File, (incomplete list)

}; //  add ability to add new Form field types

var setFieldGenerator = function setFieldGenerator(fieldType, func) {
  fieldGenerators[fieldType] = func;
};
var fieldGeneratorLookup = function fieldGeneratorLookup(fieldType) {
  return fieldGenerators[fieldType];
};

/***/ }),

/***/ "./src/forms/Form.js":
/*!***************************!*\
  !*** ./src/forms/Form.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/forms/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // import ReactJson from 'react-json-view'



var Form = function Form(props) {
  if (props.debug) {
    console.log("------- Form:"); // , props);
  }

  var heading = props.heading ? props.heading : "";
  var debug = props.debug || props.show;
  var doneBtnLabel = props.doneBtnLabel ? props.doneBtnLabel : null;
  var businessLogic = props.businessLogic ? props.businessLogic : function (old, changed) {
    return changed;
  };

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      formData = _useState2[0],
      setFormDataInternal = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.form),
      _useState4 = _slicedToArray(_useState3, 2),
      formList = _useState4[0],
      setFormList = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (debug) {
      console.log('InitialData setup');
    }

    setFormData(props.data); // initialData
  }, []); // only once

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (debug) {
      console.log("   Form: props.form changed");
    }

    setFormData(props.data); // any time the props.data or props.form changes
  }, [props.form]); // formData and formList are recalculated

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (debug) {
      console.log("   Form: props.data changed");
    }

    setFormData(props.data); // any time the props.data or props.form changes
  }, [props.data]); // formData and formList are recalculated

  var setFormData = function setFormData(newData) {
    // console.log('setFormData(newData) given: ', newData);
    var _businessLogic = businessLogic(formData, newData),
        _businessLogic2 = _slicedToArray(_businessLogic, 2),
        modState = _businessLogic2[0],
        formOpts = _businessLogic2[1];

    setFormList((0,___WEBPACK_IMPORTED_MODULE_1__.applyOptions)(props.form, formOpts)); // TODO: unneeded re-render if

    setFormDataInternal(modState);
  }; // TODO: need to check which fields are required and disable submit button (if it is here)
  //       <form onSubmit={props.onSubmit}>


  var flexParent = {
    display: 'flex',
    flexDirection: 'row'
  };
  var flexChild = props.show ? {
    flex: "50%"
  } : {};

  var rightChild = _objectSpread(_objectSpread({}, flexChild), {}, {
    borderLeft: 'solid gray',
    borderWidth: 'thin'
  });

  var onSubmit = function onSubmit(e) {
    e.preventDefault();
    props.onSubmit(formData);
  };

  var doneButton = doneBtnLabel ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "button",
    onClick: onSubmit,
    value: doneBtnLabel
  }) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: flexParent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: flexChild
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: props.className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "heading"
  }, heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_1__.FormFields, {
    formStructure: formList,
    formData: formData,
    setFormData: setFormData,
    showDebug: debug
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer"
  }, doneButton))), props.show && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: rightChild
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ReactJson, {
    name: "data",
    src: formData
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ReactJson, {
    name: "formList",
    src: formList
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ }),

/***/ "./src/forms/FormFields.js":
/*!*********************************!*\
  !*** ./src/forms/FormFields.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FieldGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FieldGenerator */ "./src/forms/FieldGenerator.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var createFields = function createFields(formStructure, formData, handleChange) {
  return formStructure.map(function (f, idx) {
    return createField(f, idx, formData[f.name], handleChange);
  });
};

var createField = function createField(fieldStructure, idx, value, handleChange) {
  var f = _objectSpread(_objectSpread({}, fieldStructure), {}, {
    value: value
  }); // fieldStructure is a type, create an instance w/ field data


  var gen = (0,_FieldGenerator__WEBPACK_IMPORTED_MODULE_1__.fieldGeneratorLookup)(f.type);
  var field = "unkknown field type: ".concat(f.type);
  var ifRequired = f.required ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "required"
  }, "*") : null;

  if (gen) {
    try {
      field = gen(f, handleChange);
    } catch (e) {
      var msg = "Error Creating Field type: ".concat(f.type, " [").concat(idx, "]");
      console.log(msg);
      console.log(JSON.stringify(fieldStructure, null, 2));
      console.log(e);
      console.log(e.stack());
      field = msg;
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: f.name,
    key: idx,
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, f.label, ifRequired), field);
};

var FormFields = function FormFields(_ref) {
  var formStructure = _ref.formStructure,
      formData = _ref.formData,
      setFormData = _ref.setFormData,
      showDebug = _ref.showDebug;

  if (!formStructure) {
    console.log('missing formStructure');
    formStructure = [];
  } // The following does not change, yet gets redefined every time, sigh... wastefull
  // do not use useCallback


  var handleChange = function handleChange(e) {
    if (showDebug) {
      console.log("FormFields.handleChange [".concat(e.target.name, "] = ").concat(e.target.value, ";"));
    }

    setFormData(_objectSpread(_objectSpread({}, formData), {}, _defineProperty({}, e.target.name, e.target.value)));
  };

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(createFields(formStructure, formData, handleChange)),
      _useState2 = _slicedToArray(_useState, 2),
      fields = _useState2[0],
      setFields = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // console.log('   FormField useEffect formStructure:', formStructure.length);
    setFields(createFields(formStructure, formData, handleChange));
  }, [formData]); // TODO:   research why this must be formData and not formStructure
  // only @ creation and when the data changes becuase the structure might change,
  // selection of one field might change the choices on another field.

  if (!fields) {
    return "<FormFields />   Somthing horrible: createFields() returned null";
  }

  var badEntry = fields.findIndex(function (element) {
    return element === null;
  });

  if (badEntry !== -1) {
    console.log({
      formStructure: formStructure
    });
    return "<FormFields />   Somthing horrible: createFields() returned [".concat(badEntry, "] as null");
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, fields);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormFields);

/***/ }),

/***/ "./src/forms/Input.js":
/*!****************************!*\
  !*** ./src/forms/Input.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _excluded = ["className", "type", "name", "text", "handleChange", "id", "value", "placeholder", "required"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // import classes from "./Input.module.css";
//         className={classes.input}

var Input = function Input(props) {
  // optional:     maxLength, size,
  //         maxLength={maxLength}
  //          size={size}
  var className = props.className,
      type = props.type,
      name = props.name,
      text = props.text,
      handleChange = props.handleChange,
      _props$id = props.id,
      id = _props$id === void 0 ? name : _props$id,
      _props$value = props.value,
      value = _props$value === void 0 ? "" : _props$value,
      _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? text : _props$placeholder,
      _props$required = props.required,
      required = _props$required === void 0 ? false : _props$required,
      whatsleft = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    className: className,
    key: id,
    type: type,
    name: name,
    value: value,
    id: id,
    placeholder: placeholder,
    required: required,
    onChange: handleChange
  }, whatsleft));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);

/***/ }),

/***/ "./src/forms/List.js":
/*!***************************!*\
  !*** ./src/forms/List.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Choice": () => (/* binding */ Choice),
/* harmony export */   "List": () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _excluded = ["list", "choices", "size"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


/*

  TODO:  Handle values other than Strings or something that converts to strings

  currently supports:

  const userList = {0: 'Vacancy, null', 2: 'Hernandez, April', 128: 'Lemon, Brian', 901: 'NCTR, Demo', 1500: 'Rice, Antonie', 1501: 'Woody, Jameca' …}

     <Choice name="NCTR_ID" choices={userList} value=2/>

  OR:

  const userList = ['Vacancy, null','Hernandez, April','Lemon, Brian','NCTR, Demo','Rice, Antonie','Woody, Jameca','Smith, Sherry','Brooks, Roben','Monk, Mary', ... ]

     <Choice name="NCTR_ID" choices={userList} value="Hernandez, April"/>
*/
// --------------------------------------------------------------------------------------------------------------------------------------------------

var compareString = function compareString(a, b) {
  a = a.toUpperCase();
  b = b.toUpperCase();
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}; // --------------------------------------------------------------------------------------------------------------------------------------------------


var sortKeysByValue = function sortKeysByValue(obj) {
  var keys = Object.keys(obj);
  var list = keys.map(function (k) {
    return {
      id: k,
      value: obj[k]
    };
  }).sort(function (a, b) {
    return compareString(a.value, b.value);
  });
  return list.map(function (item) {
    return item.id;
  });
}; // --------------------------------------------------------------------------------------------------------------------------------------------------


var Choice = function Choice(propsIn) {
  var list = propsIn.list,
      choices = propsIn.choices,
      size = propsIn.size,
      props = _objectWithoutProperties(propsIn, _excluded);

  var siz = size || 10;
  var opt = list || choices || [];
  var isKeyed = !Array.isArray(opt);
  var keys = isKeyed ? sortKeysByValue(opt) : opt; // origianlly       const keys = (isKeyed) ? Object.keys(opt) : opt

  var genOption = function genOption(el, k) {
    if (isKeyed) {
      return opt[el] == props.value ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        key: k,
        value: el,
        selected: true
      }, opt[el]) :
      /*#__PURE__*/
      // <option key="1" value="2" selected={true}>'Hernandez, April'</option>
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        key: k,
        value: el
      }, opt[el]);
    } else {
      return el == props.value ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        key: k,
        value: el,
        selected: true
      }, el) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        key: k,
        value: el
      }, el);
    }
  };

  if (!isKeyed && typeof props.value == 'string' && Array.isArray(opt) && !opt.includes(props.value)) {
    console.log("Adding missing default value: '".concat(props.value, "' to ").concat(opt));
    opt.unshift(props.value);
  }

  if (props.multiple) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", _extends({
      multiple: true,
      size: siz
    }, props), keys.map(function (el, k) {
      return genOption(el, k);
    })));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", props, keys.map(function (el, k) {
      return genOption(el, k);
    })));
  }
};
var List = function List(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Choice, _extends({
    multiple: true
  }, props));
};

/***/ }),

/***/ "./src/forms/Show.js":
/*!***************************!*\
  !*** ./src/forms/Show.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Show": () => (/* binding */ Show),
/* harmony export */   "pretty": () => (/* binding */ pretty)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var pretty = function pretty(obj) {
  return JSON.stringify(obj, null, 2);
};
var Show = function Show(_ref) {
  var data = _ref.data,
      hide = _ref.hide;

  var _data = _objectSpread({}, data); // dont show the form structure or  any other field listed as hidden


  if (hide) hide.map(function (f) {
    delete _data[f];
  });
  return /*#__PURE__*/React.createElement("pre", null, pretty(_data));
};

/***/ }),

/***/ "./src/forms/index.js":
/*!****************************!*\
  !*** ./src/forms/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Form": () => (/* reexport safe */ _Form__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "FormFields": () => (/* reexport safe */ _FormFields__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "Input": () => (/* reexport safe */ _Input__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "Show": () => (/* reexport safe */ _Show__WEBPACK_IMPORTED_MODULE_2__.Show),
/* harmony export */   "applyOptions": () => (/* reexport safe */ _DefaultFormElements__WEBPACK_IMPORTED_MODULE_0__.applyOptions),
/* harmony export */   "fieldGeneratorLookup": () => (/* reexport safe */ _FieldGenerator__WEBPACK_IMPORTED_MODULE_6__.fieldGeneratorLookup),
/* harmony export */   "pretty": () => (/* reexport safe */ _Show__WEBPACK_IMPORTED_MODULE_2__.pretty),
/* harmony export */   "setFieldGenerator": () => (/* reexport safe */ _FieldGenerator__WEBPACK_IMPORTED_MODULE_6__.setFieldGenerator),
/* harmony export */   "useFetch": () => (/* reexport safe */ _useFetch__WEBPACK_IMPORTED_MODULE_5__["default"])
/* harmony export */ });
/* harmony import */ var _DefaultFormElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultFormElements */ "./src/forms/DefaultFormElements.js");
/* harmony import */ var _FormFields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormFields */ "./src/forms/FormFields.js");
/* harmony import */ var _Show__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Show */ "./src/forms/Show.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Input */ "./src/forms/Input.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Form */ "./src/forms/Form.js");
/* harmony import */ var _useFetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useFetch */ "./src/forms/useFetch.js");
/* harmony import */ var _FieldGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FieldGenerator */ "./src/forms/FieldGenerator.js");
// The goal of this file is to limit the external information needed to use this entire module
// many components were previously used individually, now moving to only what is needed to be
// known externally.  Hiding more of the implementations.









/***/ }),

/***/ "./src/forms/useFetch.js":
/*!*******************************!*\
  !*** ./src/forms/useFetch.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// possibly replace the use of this source file with
//    https://use-http.com/#/?id=examples-videos
//                 useFetch
// 🐶 React hook for making isomorphic http requests
// taken from: https://medium.com/@cwlsn/how-to-fetch-data-with-react-hooks-in-a-minute-e0f9a15a44d6
// Author: Connor Wilson
//  Tech Lead at @JoinLeague, Instructor Ops Lead at @itsbridgeschool. Building things and teaching folks in Toronto.
// How to Use:
//    const [data, loading] = useFetch(pastDataURL);


function useFetch(url) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  function fetchUrl(_x) {
    return _fetchUrl.apply(this, arguments);
  }

  function _fetchUrl() {
    _fetchUrl = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
      var response, json;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch(url);

            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();

            case 6:
              json = _context.sent;
              setData(json);
              _context.next = 14;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              console.log('Unable to load err:', _context.t0);
              console.log('Unable to load url:', url);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));
    return _fetchUrl.apply(this, arguments);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchUrl(url);
  }, [url]);
  return [data];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFetch);

/***/ }),

/***/ "./src/generalStore.js":
/*!*****************************!*\
  !*** ./src/generalStore.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "genStoreItem": () => (/* binding */ genStoreItem),
/* harmony export */   "openGeneralStore": () => (/* binding */ openGeneralStore)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zustand */ "./node_modules/zustand/esm/index.js");
/* harmony import */ var _camel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camel */ "./src/camel.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // zustand 1.73k  vs Recoil 1740k (1.74M)


var genStoreItem = function genStoreItem(name, initialValue) {
  var setFn = (0,_camel__WEBPACK_IMPORTED_MODULE_0__.toCamelCase)('set ' + name);
  var useStore = (0,zustand__WEBPACK_IMPORTED_MODULE_1__["default"])(function (set) {
    var _ref2;

    return _ref2 = {}, _defineProperty(_ref2, name, initialValue), _defineProperty(_ref2, setFn, function (newValue) {
      return set(function (state) {
        return _defineProperty({}, name, newValue);
      });
    }), _ref2;
  });
  return function () {
    return useStore(function (state) {
      return [state[name], state[setFn]];
    });
  };
};
var storeInventory = {};
var openGeneralStore = function openGeneralStore() {
  // must be called from inside a react component, usually App() or getUserInfo()
  if (!storeInventory["useMenuParms"]) storeInventory.useMenuParms = genStoreItem('menuParms', {});
  if (!storeInventory["useMenuState"]) storeInventory.useMenuState = genStoreItem('menuState', '');
  if (!storeInventory["useUsername"]) storeInventory.useUsername = genStoreItem('username', null);
  return storeInventory;
}; // taken from https://github.com/pmndrs/zustand
// const bears = useStore(state => state.bears)
// const [nuts, honey] = useStore(state => [state.nuts, state.honey], shallow)
// const [name, setFn] = useStore(state => [state[name], state[setFn]])

/*
const useStore = create(set => ({
  bears: 0,
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 })
}))
*/

/***/ }),

/***/ "./src/localStrToDate.js":
/*!*******************************!*\
  !*** ./src/localStrToDate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "register": () => (/* binding */ register),
/* harmony export */   "unregister": () => (/* binding */ unregister)
/* harmony export */ });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  })["catch"](function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  })["catch"](function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    })["catch"](function (error) {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ "./node_modules/crypto-js/aes.js":
/*!***************************************!*\
  !*** ./node_modules/crypto-js/aes.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./enc-base64 */ "./node_modules/crypto-js/enc-base64.js"), __webpack_require__(/*! ./md5 */ "./node_modules/crypto-js/md5.js"), __webpack_require__(/*! ./evpkdf */ "./node_modules/crypto-js/evpkdf.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var BlockCipher = C_lib.BlockCipher;
	    var C_algo = C.algo;

	    // Lookup tables
	    var SBOX = [];
	    var INV_SBOX = [];
	    var SUB_MIX_0 = [];
	    var SUB_MIX_1 = [];
	    var SUB_MIX_2 = [];
	    var SUB_MIX_3 = [];
	    var INV_SUB_MIX_0 = [];
	    var INV_SUB_MIX_1 = [];
	    var INV_SUB_MIX_2 = [];
	    var INV_SUB_MIX_3 = [];

	    // Compute lookup tables
	    (function () {
	        // Compute double table
	        var d = [];
	        for (var i = 0; i < 256; i++) {
	            if (i < 128) {
	                d[i] = i << 1;
	            } else {
	                d[i] = (i << 1) ^ 0x11b;
	            }
	        }

	        // Walk GF(2^8)
	        var x = 0;
	        var xi = 0;
	        for (var i = 0; i < 256; i++) {
	            // Compute sbox
	            var sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
	            sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
	            SBOX[x] = sx;
	            INV_SBOX[sx] = x;

	            // Compute multiplication
	            var x2 = d[x];
	            var x4 = d[x2];
	            var x8 = d[x4];

	            // Compute sub bytes, mix columns tables
	            var t = (d[sx] * 0x101) ^ (sx * 0x1010100);
	            SUB_MIX_0[x] = (t << 24) | (t >>> 8);
	            SUB_MIX_1[x] = (t << 16) | (t >>> 16);
	            SUB_MIX_2[x] = (t << 8)  | (t >>> 24);
	            SUB_MIX_3[x] = t;

	            // Compute inv sub bytes, inv mix columns tables
	            var t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
	            INV_SUB_MIX_0[sx] = (t << 24) | (t >>> 8);
	            INV_SUB_MIX_1[sx] = (t << 16) | (t >>> 16);
	            INV_SUB_MIX_2[sx] = (t << 8)  | (t >>> 24);
	            INV_SUB_MIX_3[sx] = t;

	            // Compute next counter
	            if (!x) {
	                x = xi = 1;
	            } else {
	                x = x2 ^ d[d[d[x8 ^ x2]]];
	                xi ^= d[d[xi]];
	            }
	        }
	    }());

	    // Precomputed Rcon lookup
	    var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];

	    /**
	     * AES block cipher algorithm.
	     */
	    var AES = C_algo.AES = BlockCipher.extend({
	        _doReset: function () {
	            var t;

	            // Skip reset of nRounds has been set before and key did not change
	            if (this._nRounds && this._keyPriorReset === this._key) {
	                return;
	            }

	            // Shortcuts
	            var key = this._keyPriorReset = this._key;
	            var keyWords = key.words;
	            var keySize = key.sigBytes / 4;

	            // Compute number of rounds
	            var nRounds = this._nRounds = keySize + 6;

	            // Compute number of key schedule rows
	            var ksRows = (nRounds + 1) * 4;

	            // Compute key schedule
	            var keySchedule = this._keySchedule = [];
	            for (var ksRow = 0; ksRow < ksRows; ksRow++) {
	                if (ksRow < keySize) {
	                    keySchedule[ksRow] = keyWords[ksRow];
	                } else {
	                    t = keySchedule[ksRow - 1];

	                    if (!(ksRow % keySize)) {
	                        // Rot word
	                        t = (t << 8) | (t >>> 24);

	                        // Sub word
	                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];

	                        // Mix Rcon
	                        t ^= RCON[(ksRow / keySize) | 0] << 24;
	                    } else if (keySize > 6 && ksRow % keySize == 4) {
	                        // Sub word
	                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];
	                    }

	                    keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
	                }
	            }

	            // Compute inv key schedule
	            var invKeySchedule = this._invKeySchedule = [];
	            for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
	                var ksRow = ksRows - invKsRow;

	                if (invKsRow % 4) {
	                    var t = keySchedule[ksRow];
	                } else {
	                    var t = keySchedule[ksRow - 4];
	                }

	                if (invKsRow < 4 || ksRow <= 4) {
	                    invKeySchedule[invKsRow] = t;
	                } else {
	                    invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[(t >>> 16) & 0xff]] ^
	                                               INV_SUB_MIX_2[SBOX[(t >>> 8) & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
	                }
	            }
	        },

	        encryptBlock: function (M, offset) {
	            this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
	        },

	        decryptBlock: function (M, offset) {
	            // Swap 2nd and 4th rows
	            var t = M[offset + 1];
	            M[offset + 1] = M[offset + 3];
	            M[offset + 3] = t;

	            this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);

	            // Inv swap 2nd and 4th rows
	            var t = M[offset + 1];
	            M[offset + 1] = M[offset + 3];
	            M[offset + 3] = t;
	        },

	        _doCryptBlock: function (M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
	            // Shortcut
	            var nRounds = this._nRounds;

	            // Get input, add round key
	            var s0 = M[offset]     ^ keySchedule[0];
	            var s1 = M[offset + 1] ^ keySchedule[1];
	            var s2 = M[offset + 2] ^ keySchedule[2];
	            var s3 = M[offset + 3] ^ keySchedule[3];

	            // Key schedule row counter
	            var ksRow = 4;

	            // Rounds
	            for (var round = 1; round < nRounds; round++) {
	                // Shift rows, sub bytes, mix columns, add round key
	                var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[(s1 >>> 16) & 0xff] ^ SUB_MIX_2[(s2 >>> 8) & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];
	                var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[(s2 >>> 16) & 0xff] ^ SUB_MIX_2[(s3 >>> 8) & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];
	                var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[(s3 >>> 16) & 0xff] ^ SUB_MIX_2[(s0 >>> 8) & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];
	                var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[(s0 >>> 16) & 0xff] ^ SUB_MIX_2[(s1 >>> 8) & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++];

	                // Update state
	                s0 = t0;
	                s1 = t1;
	                s2 = t2;
	                s3 = t3;
	            }

	            // Shift rows, sub bytes, add round key
	            var t0 = ((SBOX[s0 >>> 24] << 24) | (SBOX[(s1 >>> 16) & 0xff] << 16) | (SBOX[(s2 >>> 8) & 0xff] << 8) | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
	            var t1 = ((SBOX[s1 >>> 24] << 24) | (SBOX[(s2 >>> 16) & 0xff] << 16) | (SBOX[(s3 >>> 8) & 0xff] << 8) | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
	            var t2 = ((SBOX[s2 >>> 24] << 24) | (SBOX[(s3 >>> 16) & 0xff] << 16) | (SBOX[(s0 >>> 8) & 0xff] << 8) | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
	            var t3 = ((SBOX[s3 >>> 24] << 24) | (SBOX[(s0 >>> 16) & 0xff] << 16) | (SBOX[(s1 >>> 8) & 0xff] << 8) | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];

	            // Set output
	            M[offset]     = t0;
	            M[offset + 1] = t1;
	            M[offset + 2] = t2;
	            M[offset + 3] = t3;
	        },

	        keySize: 256/32
	    });

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
	     */
	    C.AES = BlockCipher._createHelper(AES);
	}());


	return CryptoJS.AES;

}));

/***/ }),

/***/ "./node_modules/crypto-js/cipher-core.js":
/*!***********************************************!*\
  !*** ./node_modules/crypto-js/cipher-core.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./evpkdf */ "./node_modules/crypto-js/evpkdf.js"));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * Cipher core components.
	 */
	CryptoJS.lib.Cipher || (function (undefined) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var WordArray = C_lib.WordArray;
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
	    var C_enc = C.enc;
	    var Utf8 = C_enc.Utf8;
	    var Base64 = C_enc.Base64;
	    var C_algo = C.algo;
	    var EvpKDF = C_algo.EvpKDF;

	    /**
	     * Abstract base cipher template.
	     *
	     * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
	     * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
	     * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
	     * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
	     */
	    var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {WordArray} iv The IV to use for this operation.
	         */
	        cfg: Base.extend(),

	        /**
	         * Creates this cipher in encryption mode.
	         *
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {Cipher} A cipher instance.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
	         */
	        createEncryptor: function (key, cfg) {
	            return this.create(this._ENC_XFORM_MODE, key, cfg);
	        },

	        /**
	         * Creates this cipher in decryption mode.
	         *
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {Cipher} A cipher instance.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
	         */
	        createDecryptor: function (key, cfg) {
	            return this.create(this._DEC_XFORM_MODE, key, cfg);
	        },

	        /**
	         * Initializes a newly created cipher.
	         *
	         * @param {number} xformMode Either the encryption or decryption transormation mode constant.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
	         */
	        init: function (xformMode, key, cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Store transform mode and key
	            this._xformMode = xformMode;
	            this._key = key;

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this cipher to its initial state.
	         *
	         * @example
	         *
	         *     cipher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-cipher logic
	            this._doReset();
	        },

	        /**
	         * Adds data to be encrypted or decrypted.
	         *
	         * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
	         *
	         * @return {WordArray} The data after processing.
	         *
	         * @example
	         *
	         *     var encrypted = cipher.process('data');
	         *     var encrypted = cipher.process(wordArray);
	         */
	        process: function (dataUpdate) {
	            // Append
	            this._append(dataUpdate);

	            // Process available blocks
	            return this._process();
	        },

	        /**
	         * Finalizes the encryption or decryption process.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
	         *
	         * @return {WordArray} The data after final processing.
	         *
	         * @example
	         *
	         *     var encrypted = cipher.finalize();
	         *     var encrypted = cipher.finalize('data');
	         *     var encrypted = cipher.finalize(wordArray);
	         */
	        finalize: function (dataUpdate) {
	            // Final data update
	            if (dataUpdate) {
	                this._append(dataUpdate);
	            }

	            // Perform concrete-cipher logic
	            var finalProcessedData = this._doFinalize();

	            return finalProcessedData;
	        },

	        keySize: 128/32,

	        ivSize: 128/32,

	        _ENC_XFORM_MODE: 1,

	        _DEC_XFORM_MODE: 2,

	        /**
	         * Creates shortcut functions to a cipher's object interface.
	         *
	         * @param {Cipher} cipher The cipher to create a helper for.
	         *
	         * @return {Object} An object with encrypt and decrypt shortcut functions.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
	         */
	        _createHelper: (function () {
	            function selectCipherStrategy(key) {
	                if (typeof key == 'string') {
	                    return PasswordBasedCipher;
	                } else {
	                    return SerializableCipher;
	                }
	            }

	            return function (cipher) {
	                return {
	                    encrypt: function (message, key, cfg) {
	                        return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
	                    },

	                    decrypt: function (ciphertext, key, cfg) {
	                        return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
	                    }
	                };
	            };
	        }())
	    });

	    /**
	     * Abstract base stream cipher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
	     */
	    var StreamCipher = C_lib.StreamCipher = Cipher.extend({
	        _doFinalize: function () {
	            // Process partial blocks
	            var finalProcessedBlocks = this._process(!!'flush');

	            return finalProcessedBlocks;
	        },

	        blockSize: 1
	    });

	    /**
	     * Mode namespace.
	     */
	    var C_mode = C.mode = {};

	    /**
	     * Abstract base block cipher mode template.
	     */
	    var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
	        /**
	         * Creates this mode for encryption.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
	         */
	        createEncryptor: function (cipher, iv) {
	            return this.Encryptor.create(cipher, iv);
	        },

	        /**
	         * Creates this mode for decryption.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
	         */
	        createDecryptor: function (cipher, iv) {
	            return this.Decryptor.create(cipher, iv);
	        },

	        /**
	         * Initializes a newly created mode.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
	         */
	        init: function (cipher, iv) {
	            this._cipher = cipher;
	            this._iv = iv;
	        }
	    });

	    /**
	     * Cipher Block Chaining mode.
	     */
	    var CBC = C_mode.CBC = (function () {
	        /**
	         * Abstract base CBC mode.
	         */
	        var CBC = BlockCipherMode.extend();

	        /**
	         * CBC encryptor.
	         */
	        CBC.Encryptor = CBC.extend({
	            /**
	             * Processes the data block at offset.
	             *
	             * @param {Array} words The data words to operate on.
	             * @param {number} offset The offset where the block starts.
	             *
	             * @example
	             *
	             *     mode.processBlock(data.words, offset);
	             */
	            processBlock: function (words, offset) {
	                // Shortcuts
	                var cipher = this._cipher;
	                var blockSize = cipher.blockSize;

	                // XOR and encrypt
	                xorBlock.call(this, words, offset, blockSize);
	                cipher.encryptBlock(words, offset);

	                // Remember this block to use with next block
	                this._prevBlock = words.slice(offset, offset + blockSize);
	            }
	        });

	        /**
	         * CBC decryptor.
	         */
	        CBC.Decryptor = CBC.extend({
	            /**
	             * Processes the data block at offset.
	             *
	             * @param {Array} words The data words to operate on.
	             * @param {number} offset The offset where the block starts.
	             *
	             * @example
	             *
	             *     mode.processBlock(data.words, offset);
	             */
	            processBlock: function (words, offset) {
	                // Shortcuts
	                var cipher = this._cipher;
	                var blockSize = cipher.blockSize;

	                // Remember this block to use with next block
	                var thisBlock = words.slice(offset, offset + blockSize);

	                // Decrypt and XOR
	                cipher.decryptBlock(words, offset);
	                xorBlock.call(this, words, offset, blockSize);

	                // This block becomes the previous block
	                this._prevBlock = thisBlock;
	            }
	        });

	        function xorBlock(words, offset, blockSize) {
	            var block;

	            // Shortcut
	            var iv = this._iv;

	            // Choose mixing block
	            if (iv) {
	                block = iv;

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            } else {
	                block = this._prevBlock;
	            }

	            // XOR blocks
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= block[i];
	            }
	        }

	        return CBC;
	    }());

	    /**
	     * Padding namespace.
	     */
	    var C_pad = C.pad = {};

	    /**
	     * PKCS #5/7 padding strategy.
	     */
	    var Pkcs7 = C_pad.Pkcs7 = {
	        /**
	         * Pads data using the algorithm defined in PKCS #5/7.
	         *
	         * @param {WordArray} data The data to pad.
	         * @param {number} blockSize The multiple that the data should be padded to.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
	         */
	        pad: function (data, blockSize) {
	            // Shortcut
	            var blockSizeBytes = blockSize * 4;

	            // Count padding bytes
	            var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

	            // Create padding word
	            var paddingWord = (nPaddingBytes << 24) | (nPaddingBytes << 16) | (nPaddingBytes << 8) | nPaddingBytes;

	            // Create padding
	            var paddingWords = [];
	            for (var i = 0; i < nPaddingBytes; i += 4) {
	                paddingWords.push(paddingWord);
	            }
	            var padding = WordArray.create(paddingWords, nPaddingBytes);

	            // Add padding
	            data.concat(padding);
	        },

	        /**
	         * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
	         *
	         * @param {WordArray} data The data to unpad.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     CryptoJS.pad.Pkcs7.unpad(wordArray);
	         */
	        unpad: function (data) {
	            // Get number of padding bytes from last byte
	            var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

	            // Remove padding
	            data.sigBytes -= nPaddingBytes;
	        }
	    };

	    /**
	     * Abstract base block cipher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
	     */
	    var BlockCipher = C_lib.BlockCipher = Cipher.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {Mode} mode The block mode to use. Default: CBC
	         * @property {Padding} padding The padding strategy to use. Default: Pkcs7
	         */
	        cfg: Cipher.cfg.extend({
	            mode: CBC,
	            padding: Pkcs7
	        }),

	        reset: function () {
	            var modeCreator;

	            // Reset cipher
	            Cipher.reset.call(this);

	            // Shortcuts
	            var cfg = this.cfg;
	            var iv = cfg.iv;
	            var mode = cfg.mode;

	            // Reset block mode
	            if (this._xformMode == this._ENC_XFORM_MODE) {
	                modeCreator = mode.createEncryptor;
	            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
	                modeCreator = mode.createDecryptor;
	                // Keep at least one block in the buffer for unpadding
	                this._minBufferSize = 1;
	            }

	            if (this._mode && this._mode.__creator == modeCreator) {
	                this._mode.init(this, iv && iv.words);
	            } else {
	                this._mode = modeCreator.call(mode, this, iv && iv.words);
	                this._mode.__creator = modeCreator;
	            }
	        },

	        _doProcessBlock: function (words, offset) {
	            this._mode.processBlock(words, offset);
	        },

	        _doFinalize: function () {
	            var finalProcessedBlocks;

	            // Shortcut
	            var padding = this.cfg.padding;

	            // Finalize
	            if (this._xformMode == this._ENC_XFORM_MODE) {
	                // Pad data
	                padding.pad(this._data, this.blockSize);

	                // Process final blocks
	                finalProcessedBlocks = this._process(!!'flush');
	            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
	                // Process final blocks
	                finalProcessedBlocks = this._process(!!'flush');

	                // Unpad data
	                padding.unpad(finalProcessedBlocks);
	            }

	            return finalProcessedBlocks;
	        },

	        blockSize: 128/32
	    });

	    /**
	     * A collection of cipher parameters.
	     *
	     * @property {WordArray} ciphertext The raw ciphertext.
	     * @property {WordArray} key The key to this ciphertext.
	     * @property {WordArray} iv The IV used in the ciphering operation.
	     * @property {WordArray} salt The salt used with a key derivation function.
	     * @property {Cipher} algorithm The cipher algorithm.
	     * @property {Mode} mode The block mode used in the ciphering operation.
	     * @property {Padding} padding The padding scheme used in the ciphering operation.
	     * @property {number} blockSize The block size of the cipher.
	     * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.
	     */
	    var CipherParams = C_lib.CipherParams = Base.extend({
	        /**
	         * Initializes a newly created cipher params object.
	         *
	         * @param {Object} cipherParams An object with any of the possible cipher parameters.
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.lib.CipherParams.create({
	         *         ciphertext: ciphertextWordArray,
	         *         key: keyWordArray,
	         *         iv: ivWordArray,
	         *         salt: saltWordArray,
	         *         algorithm: CryptoJS.algo.AES,
	         *         mode: CryptoJS.mode.CBC,
	         *         padding: CryptoJS.pad.PKCS7,
	         *         blockSize: 4,
	         *         formatter: CryptoJS.format.OpenSSL
	         *     });
	         */
	        init: function (cipherParams) {
	            this.mixIn(cipherParams);
	        },

	        /**
	         * Converts this cipher params object to a string.
	         *
	         * @param {Format} formatter (Optional) The formatting strategy to use.
	         *
	         * @return {string} The stringified cipher params.
	         *
	         * @throws Error If neither the formatter nor the default formatter is set.
	         *
	         * @example
	         *
	         *     var string = cipherParams + '';
	         *     var string = cipherParams.toString();
	         *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
	         */
	        toString: function (formatter) {
	            return (formatter || this.formatter).stringify(this);
	        }
	    });

	    /**
	     * Format namespace.
	     */
	    var C_format = C.format = {};

	    /**
	     * OpenSSL formatting strategy.
	     */
	    var OpenSSLFormatter = C_format.OpenSSL = {
	        /**
	         * Converts a cipher params object to an OpenSSL-compatible string.
	         *
	         * @param {CipherParams} cipherParams The cipher params object.
	         *
	         * @return {string} The OpenSSL-compatible string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
	         */
	        stringify: function (cipherParams) {
	            var wordArray;

	            // Shortcuts
	            var ciphertext = cipherParams.ciphertext;
	            var salt = cipherParams.salt;

	            // Format
	            if (salt) {
	                wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
	            } else {
	                wordArray = ciphertext;
	            }

	            return wordArray.toString(Base64);
	        },

	        /**
	         * Converts an OpenSSL-compatible string to a cipher params object.
	         *
	         * @param {string} openSSLStr The OpenSSL-compatible string.
	         *
	         * @return {CipherParams} The cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
	         */
	        parse: function (openSSLStr) {
	            var salt;

	            // Parse base64
	            var ciphertext = Base64.parse(openSSLStr);

	            // Shortcut
	            var ciphertextWords = ciphertext.words;

	            // Test for salt
	            if (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {
	                // Extract salt
	                salt = WordArray.create(ciphertextWords.slice(2, 4));

	                // Remove salt from ciphertext
	                ciphertextWords.splice(0, 4);
	                ciphertext.sigBytes -= 16;
	            }

	            return CipherParams.create({ ciphertext: ciphertext, salt: salt });
	        }
	    };

	    /**
	     * A cipher wrapper that returns ciphertext as a serializable cipher params object.
	     */
	    var SerializableCipher = C_lib.SerializableCipher = Base.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
	         */
	        cfg: Base.extend({
	            format: OpenSSLFormatter
	        }),

	        /**
	         * Encrypts a message.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {WordArray|string} message The message to encrypt.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {CipherParams} A cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         */
	        encrypt: function (cipher, message, key, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Encrypt
	            var encryptor = cipher.createEncryptor(key, cfg);
	            var ciphertext = encryptor.finalize(message);

	            // Shortcut
	            var cipherCfg = encryptor.cfg;

	            // Create and return serializable cipher params
	            return CipherParams.create({
	                ciphertext: ciphertext,
	                key: key,
	                iv: cipherCfg.iv,
	                algorithm: cipher,
	                mode: cipherCfg.mode,
	                padding: cipherCfg.padding,
	                blockSize: cipher.blockSize,
	                formatter: cfg.format
	            });
	        },

	        /**
	         * Decrypts serialized ciphertext.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {WordArray} The plaintext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         */
	        decrypt: function (cipher, ciphertext, key, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Convert string to CipherParams
	            ciphertext = this._parse(ciphertext, cfg.format);

	            // Decrypt
	            var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);

	            return plaintext;
	        },

	        /**
	         * Converts serialized ciphertext to CipherParams,
	         * else assumed CipherParams already and returns ciphertext unchanged.
	         *
	         * @param {CipherParams|string} ciphertext The ciphertext.
	         * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
	         *
	         * @return {CipherParams} The unserialized ciphertext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
	         */
	        _parse: function (ciphertext, format) {
	            if (typeof ciphertext == 'string') {
	                return format.parse(ciphertext, this);
	            } else {
	                return ciphertext;
	            }
	        }
	    });

	    /**
	     * Key derivation function namespace.
	     */
	    var C_kdf = C.kdf = {};

	    /**
	     * OpenSSL key derivation function.
	     */
	    var OpenSSLKdf = C_kdf.OpenSSL = {
	        /**
	         * Derives a key and IV from a password.
	         *
	         * @param {string} password The password to derive from.
	         * @param {number} keySize The size in words of the key to generate.
	         * @param {number} ivSize The size in words of the IV to generate.
	         * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
	         *
	         * @return {CipherParams} A cipher params object with the key, IV, and salt.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
	         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
	         */
	        execute: function (password, keySize, ivSize, salt) {
	            // Generate random salt
	            if (!salt) {
	                salt = WordArray.random(64/8);
	            }

	            // Derive key and IV
	            var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);

	            // Separate key and IV
	            var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
	            key.sigBytes = keySize * 4;

	            // Return params
	            return CipherParams.create({ key: key, iv: iv, salt: salt });
	        }
	    };

	    /**
	     * A serializable cipher wrapper that derives the key from a password,
	     * and returns ciphertext as a serializable cipher params object.
	     */
	    var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
	         */
	        cfg: SerializableCipher.cfg.extend({
	            kdf: OpenSSLKdf
	        }),

	        /**
	         * Encrypts a message using a password.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {WordArray|string} message The message to encrypt.
	         * @param {string} password The password.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {CipherParams} A cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
	         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
	         */
	        encrypt: function (cipher, message, password, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Derive key and other params
	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);

	            // Add IV to config
	            cfg.iv = derivedParams.iv;

	            // Encrypt
	            var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);

	            // Mix in derived params
	            ciphertext.mixIn(derivedParams);

	            return ciphertext;
	        },

	        /**
	         * Decrypts serialized ciphertext using a password.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
	         * @param {string} password The password.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {WordArray} The plaintext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
	         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
	         */
	        decrypt: function (cipher, ciphertext, password, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Convert string to CipherParams
	            ciphertext = this._parse(ciphertext, cfg.format);

	            // Derive key and other params
	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt);

	            // Add IV to config
	            cfg.iv = derivedParams.iv;

	            // Decrypt
	            var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);

	            return plaintext;
	        }
	    });
	}());


}));

/***/ }),

/***/ "./node_modules/crypto-js/core.js":
/*!****************************************!*\
  !*** ./node_modules/crypto-js/core.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory();
	}
	else {}
}(this, function () {

	/*globals window, global, require*/

	/**
	 * CryptoJS core components.
	 */
	var CryptoJS = CryptoJS || (function (Math, undefined) {

	    var crypto;

	    // Native crypto from window (Browser)
	    if (typeof window !== 'undefined' && window.crypto) {
	        crypto = window.crypto;
	    }

	    // Native crypto in web worker (Browser)
	    if (typeof self !== 'undefined' && self.crypto) {
	        crypto = self.crypto;
	    }

	    // Native crypto from worker
	    if (typeof globalThis !== 'undefined' && globalThis.crypto) {
	        crypto = globalThis.crypto;
	    }

	    // Native (experimental IE 11) crypto from window (Browser)
	    if (!crypto && typeof window !== 'undefined' && window.msCrypto) {
	        crypto = window.msCrypto;
	    }

	    // Native crypto from global (NodeJS)
	    if (!crypto && typeof __webpack_require__.g !== 'undefined' && __webpack_require__.g.crypto) {
	        crypto = __webpack_require__.g.crypto;
	    }

	    // Native crypto import via require (NodeJS)
	    if (!crypto && "function" === 'function') {
	        try {
	            crypto = __webpack_require__(/*! crypto */ "?9157");
	        } catch (err) {}
	    }

	    /*
	     * Cryptographically secure pseudorandom number generator
	     *
	     * As Math.random() is cryptographically not safe to use
	     */
	    var cryptoSecureRandomInt = function () {
	        if (crypto) {
	            // Use getRandomValues method (Browser)
	            if (typeof crypto.getRandomValues === 'function') {
	                try {
	                    return crypto.getRandomValues(new Uint32Array(1))[0];
	                } catch (err) {}
	            }

	            // Use randomBytes method (NodeJS)
	            if (typeof crypto.randomBytes === 'function') {
	                try {
	                    return crypto.randomBytes(4).readInt32LE();
	                } catch (err) {}
	            }
	        }

	        throw new Error('Native crypto module could not be used to get secure random number.');
	    };

	    /*
	     * Local polyfill of Object.create

	     */
	    var create = Object.create || (function () {
	        function F() {}

	        return function (obj) {
	            var subtype;

	            F.prototype = obj;

	            subtype = new F();

	            F.prototype = null;

	            return subtype;
	        };
	    }());

	    /**
	     * CryptoJS namespace.
	     */
	    var C = {};

	    /**
	     * Library namespace.
	     */
	    var C_lib = C.lib = {};

	    /**
	     * Base object for prototypal inheritance.
	     */
	    var Base = C_lib.Base = (function () {


	        return {
	            /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */
	            extend: function (overrides) {
	                // Spawn
	                var subtype = create(this);

	                // Augment
	                if (overrides) {
	                    subtype.mixIn(overrides);
	                }

	                // Create default initializer
	                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
	                    subtype.init = function () {
	                        subtype.$super.init.apply(this, arguments);
	                    };
	                }

	                // Initializer's prototype is the subtype object
	                subtype.init.prototype = subtype;

	                // Reference supertype
	                subtype.$super = this;

	                return subtype;
	            },

	            /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */
	            create: function () {
	                var instance = this.extend();
	                instance.init.apply(instance, arguments);

	                return instance;
	            },

	            /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */
	            init: function () {
	            },

	            /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */
	            mixIn: function (properties) {
	                for (var propertyName in properties) {
	                    if (properties.hasOwnProperty(propertyName)) {
	                        this[propertyName] = properties[propertyName];
	                    }
	                }

	                // IE won't copy toString using the loop above
	                if (properties.hasOwnProperty('toString')) {
	                    this.toString = properties.toString;
	                }
	            },

	            /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */
	            clone: function () {
	                return this.init.prototype.extend(this);
	            }
	        };
	    }());

	    /**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var WordArray = C_lib.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 4;
	            }
	        },

	        /**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */
	        toString: function (encoder) {
	            return (encoder || Hex).stringify(this);
	        },

	        /**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */
	        concat: function (wordArray) {
	            // Shortcuts
	            var thisWords = this.words;
	            var thatWords = wordArray.words;
	            var thisSigBytes = this.sigBytes;
	            var thatSigBytes = wordArray.sigBytes;

	            // Clamp excess bits
	            this.clamp();

	            // Concat
	            if (thisSigBytes % 4) {
	                // Copy one byte at a time
	                for (var i = 0; i < thatSigBytes; i++) {
	                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
	                }
	            } else {
	                // Copy one word at a time
	                for (var j = 0; j < thatSigBytes; j += 4) {
	                    thisWords[(thisSigBytes + j) >>> 2] = thatWords[j >>> 2];
	                }
	            }
	            this.sigBytes += thatSigBytes;

	            // Chainable
	            return this;
	        },

	        /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */
	        clamp: function () {
	            // Shortcuts
	            var words = this.words;
	            var sigBytes = this.sigBytes;

	            // Clamp
	            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
	            words.length = Math.ceil(sigBytes / 4);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone.words = this.words.slice(0);

	            return clone;
	        },

	        /**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */
	        random: function (nBytes) {
	            var words = [];

	            for (var i = 0; i < nBytes; i += 4) {
	                words.push(cryptoSecureRandomInt());
	            }

	            return new WordArray.init(words, nBytes);
	        }
	    });

	    /**
	     * Encoder namespace.
	     */
	    var C_enc = C.enc = {};

	    /**
	     * Hex encoding strategy.
	     */
	    var Hex = C_enc.Hex = {
	        /**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var hexChars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                hexChars.push((bite >>> 4).toString(16));
	                hexChars.push((bite & 0x0f).toString(16));
	            }

	            return hexChars.join('');
	        },

	        /**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */
	        parse: function (hexStr) {
	            // Shortcut
	            var hexStrLength = hexStr.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < hexStrLength; i += 2) {
	                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
	            }

	            return new WordArray.init(words, hexStrLength / 2);
	        }
	    };

	    /**
	     * Latin1 encoding strategy.
	     */
	    var Latin1 = C_enc.Latin1 = {
	        /**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var latin1Chars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                latin1Chars.push(String.fromCharCode(bite));
	            }

	            return latin1Chars.join('');
	        },

	        /**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */
	        parse: function (latin1Str) {
	            // Shortcut
	            var latin1StrLength = latin1Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < latin1StrLength; i++) {
	                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
	            }

	            return new WordArray.init(words, latin1StrLength);
	        }
	    };

	    /**
	     * UTF-8 encoding strategy.
	     */
	    var Utf8 = C_enc.Utf8 = {
	        /**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            try {
	                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
	            } catch (e) {
	                throw new Error('Malformed UTF-8 data');
	            }
	        },

	        /**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */
	        parse: function (utf8Str) {
	            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
	        }
	    };

	    /**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
	        /**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */
	        reset: function () {
	            // Initial values
	            this._data = new WordArray.init();
	            this._nDataBytes = 0;
	        },

	        /**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */
	        _append: function (data) {
	            // Convert string to WordArray, else assume WordArray already
	            if (typeof data == 'string') {
	                data = Utf8.parse(data);
	            }

	            // Append
	            this._data.concat(data);
	            this._nDataBytes += data.sigBytes;
	        },

	        /**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */
	        _process: function (doFlush) {
	            var processedWords;

	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var dataSigBytes = data.sigBytes;
	            var blockSize = this.blockSize;
	            var blockSizeBytes = blockSize * 4;

	            // Count blocks ready
	            var nBlocksReady = dataSigBytes / blockSizeBytes;
	            if (doFlush) {
	                // Round up to include partial blocks
	                nBlocksReady = Math.ceil(nBlocksReady);
	            } else {
	                // Round down to include only full blocks,
	                // less the number of blocks that must remain in the buffer
	                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
	            }

	            // Count words ready
	            var nWordsReady = nBlocksReady * blockSize;

	            // Count bytes ready
	            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

	            // Process blocks
	            if (nWordsReady) {
	                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
	                    // Perform concrete-algorithm logic
	                    this._doProcessBlock(dataWords, offset);
	                }

	                // Remove processed words
	                processedWords = dataWords.splice(0, nWordsReady);
	                data.sigBytes -= nBytesReady;
	            }

	            // Return processed words
	            return new WordArray.init(processedWords, nBytesReady);
	        },

	        /**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone._data = this._data.clone();

	            return clone;
	        },

	        _minBufferSize: 0
	    });

	    /**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */
	    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         */
	        cfg: Base.extend(),

	        /**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */
	        init: function (cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-hasher logic
	            this._doReset();
	        },

	        /**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            // Append
	            this._append(messageUpdate);

	            // Update the hash
	            this._process();

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Final message update
	            if (messageUpdate) {
	                this._append(messageUpdate);
	            }

	            // Perform concrete-hasher logic
	            var hash = this._doFinalize();

	            return hash;
	        },

	        blockSize: 512/32,

	        /**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */
	        _createHelper: function (hasher) {
	            return function (message, cfg) {
	                return new hasher.init(cfg).finalize(message);
	            };
	        },

	        /**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */
	        _createHmacHelper: function (hasher) {
	            return function (message, key) {
	                return new C_algo.HMAC.init(hasher, key).finalize(message);
	            };
	        }
	    });

	    /**
	     * Algorithm namespace.
	     */
	    var C_algo = C.algo = {};

	    return C;
	}(Math));


	return CryptoJS;

}));

/***/ }),

/***/ "./node_modules/crypto-js/enc-base64.js":
/*!**********************************************!*\
  !*** ./node_modules/crypto-js/enc-base64.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_enc = C.enc;

	    /**
	     * Base64 encoding strategy.
	     */
	    var Base64 = C_enc.Base64 = {
	        /**
	         * Converts a word array to a Base64 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Base64 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;
	            var map = this._map;

	            // Clamp excess bits
	            wordArray.clamp();

	            // Convert
	            var base64Chars = [];
	            for (var i = 0; i < sigBytes; i += 3) {
	                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
	                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
	                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

	                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

	                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
	                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
	                }
	            }

	            // Add padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                while (base64Chars.length % 4) {
	                    base64Chars.push(paddingChar);
	                }
	            }

	            return base64Chars.join('');
	        },

	        /**
	         * Converts a Base64 string to a word array.
	         *
	         * @param {string} base64Str The Base64 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
	         */
	        parse: function (base64Str) {
	            // Shortcuts
	            var base64StrLength = base64Str.length;
	            var map = this._map;
	            var reverseMap = this._reverseMap;

	            if (!reverseMap) {
	                    reverseMap = this._reverseMap = [];
	                    for (var j = 0; j < map.length; j++) {
	                        reverseMap[map.charCodeAt(j)] = j;
	                    }
	            }

	            // Ignore padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                var paddingIndex = base64Str.indexOf(paddingChar);
	                if (paddingIndex !== -1) {
	                    base64StrLength = paddingIndex;
	                }
	            }

	            // Convert
	            return parseLoop(base64Str, base64StrLength, reverseMap);

	        },

	        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
	    };

	    function parseLoop(base64Str, base64StrLength, reverseMap) {
	      var words = [];
	      var nBytes = 0;
	      for (var i = 0; i < base64StrLength; i++) {
	          if (i % 4) {
	              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
	              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
	              var bitsCombined = bits1 | bits2;
	              words[nBytes >>> 2] |= bitsCombined << (24 - (nBytes % 4) * 8);
	              nBytes++;
	          }
	      }
	      return WordArray.create(words, nBytes);
	    }
	}());


	return CryptoJS.enc.Base64;

}));

/***/ }),

/***/ "./node_modules/crypto-js/enc-base64url.js":
/*!*************************************************!*\
  !*** ./node_modules/crypto-js/enc-base64url.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_enc = C.enc;

	    /**
	     * Base64url encoding strategy.
	     */
	    var Base64url = C_enc.Base64url = {
	        /**
	         * Converts a word array to a Base64url string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @param {boolean} urlSafe Whether to use url safe
	         *
	         * @return {string} The Base64url string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var base64String = CryptoJS.enc.Base64url.stringify(wordArray);
	         */
	        stringify: function (wordArray, urlSafe=true) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;
	            var map = urlSafe ? this._safe_map : this._map;

	            // Clamp excess bits
	            wordArray.clamp();

	            // Convert
	            var base64Chars = [];
	            for (var i = 0; i < sigBytes; i += 3) {
	                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
	                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
	                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

	                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

	                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
	                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
	                }
	            }

	            // Add padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                while (base64Chars.length % 4) {
	                    base64Chars.push(paddingChar);
	                }
	            }

	            return base64Chars.join('');
	        },

	        /**
	         * Converts a Base64url string to a word array.
	         *
	         * @param {string} base64Str The Base64url string.
	         *
	         * @param {boolean} urlSafe Whether to use url safe
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Base64url.parse(base64String);
	         */
	        parse: function (base64Str, urlSafe=true) {
	            // Shortcuts
	            var base64StrLength = base64Str.length;
	            var map = urlSafe ? this._safe_map : this._map;
	            var reverseMap = this._reverseMap;

	            if (!reverseMap) {
	                reverseMap = this._reverseMap = [];
	                for (var j = 0; j < map.length; j++) {
	                    reverseMap[map.charCodeAt(j)] = j;
	                }
	            }

	            // Ignore padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                var paddingIndex = base64Str.indexOf(paddingChar);
	                if (paddingIndex !== -1) {
	                    base64StrLength = paddingIndex;
	                }
	            }

	            // Convert
	            return parseLoop(base64Str, base64StrLength, reverseMap);

	        },

	        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
	        _safe_map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
	    };

	    function parseLoop(base64Str, base64StrLength, reverseMap) {
	        var words = [];
	        var nBytes = 0;
	        for (var i = 0; i < base64StrLength; i++) {
	            if (i % 4) {
	                var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
	                var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
	                var bitsCombined = bits1 | bits2;
	                words[nBytes >>> 2] |= bitsCombined << (24 - (nBytes % 4) * 8);
	                nBytes++;
	            }
	        }
	        return WordArray.create(words, nBytes);
	    }
	}());

	return CryptoJS.enc.Base64url;

}));

/***/ }),

/***/ "./node_modules/crypto-js/enc-utf16.js":
/*!*********************************************!*\
  !*** ./node_modules/crypto-js/enc-utf16.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_enc = C.enc;

	    /**
	     * UTF-16 BE encoding strategy.
	     */
	    var Utf16BE = C_enc.Utf16 = C_enc.Utf16BE = {
	        /**
	         * Converts a word array to a UTF-16 BE string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-16 BE string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var utf16Chars = [];
	            for (var i = 0; i < sigBytes; i += 2) {
	                var codePoint = (words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff;
	                utf16Chars.push(String.fromCharCode(codePoint));
	            }

	            return utf16Chars.join('');
	        },

	        /**
	         * Converts a UTF-16 BE string to a word array.
	         *
	         * @param {string} utf16Str The UTF-16 BE string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
	         */
	        parse: function (utf16Str) {
	            // Shortcut
	            var utf16StrLength = utf16Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < utf16StrLength; i++) {
	                words[i >>> 1] |= utf16Str.charCodeAt(i) << (16 - (i % 2) * 16);
	            }

	            return WordArray.create(words, utf16StrLength * 2);
	        }
	    };

	    /**
	     * UTF-16 LE encoding strategy.
	     */
	    C_enc.Utf16LE = {
	        /**
	         * Converts a word array to a UTF-16 LE string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-16 LE string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var utf16Chars = [];
	            for (var i = 0; i < sigBytes; i += 2) {
	                var codePoint = swapEndian((words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff);
	                utf16Chars.push(String.fromCharCode(codePoint));
	            }

	            return utf16Chars.join('');
	        },

	        /**
	         * Converts a UTF-16 LE string to a word array.
	         *
	         * @param {string} utf16Str The UTF-16 LE string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
	         */
	        parse: function (utf16Str) {
	            // Shortcut
	            var utf16StrLength = utf16Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < utf16StrLength; i++) {
	                words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << (16 - (i % 2) * 16));
	            }

	            return WordArray.create(words, utf16StrLength * 2);
	        }
	    };

	    function swapEndian(word) {
	        return ((word << 8) & 0xff00ff00) | ((word >>> 8) & 0x00ff00ff);
	    }
	}());


	return CryptoJS.enc.Utf16;

}));

/***/ }),

/***/ "./node_modules/crypto-js/evpkdf.js":
/*!******************************************!*\
  !*** ./node_modules/crypto-js/evpkdf.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./sha1 */ "./node_modules/crypto-js/sha1.js"), __webpack_require__(/*! ./hmac */ "./node_modules/crypto-js/hmac.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var WordArray = C_lib.WordArray;
	    var C_algo = C.algo;
	    var MD5 = C_algo.MD5;

	    /**
	     * This key derivation function is meant to conform with EVP_BytesToKey.
	     * www.openssl.org/docs/crypto/EVP_BytesToKey.html
	     */
	    var EvpKDF = C_algo.EvpKDF = Base.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
	         * @property {Hasher} hasher The hash algorithm to use. Default: MD5
	         * @property {number} iterations The number of iterations to perform. Default: 1
	         */
	        cfg: Base.extend({
	            keySize: 128/32,
	            hasher: MD5,
	            iterations: 1
	        }),

	        /**
	         * Initializes a newly created key derivation function.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
	         *
	         * @example
	         *
	         *     var kdf = CryptoJS.algo.EvpKDF.create();
	         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
	         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
	         */
	        init: function (cfg) {
	            this.cfg = this.cfg.extend(cfg);
	        },

	        /**
	         * Derives a key from a password.
	         *
	         * @param {WordArray|string} password The password.
	         * @param {WordArray|string} salt A salt.
	         *
	         * @return {WordArray} The derived key.
	         *
	         * @example
	         *
	         *     var key = kdf.compute(password, salt);
	         */
	        compute: function (password, salt) {
	            var block;

	            // Shortcut
	            var cfg = this.cfg;

	            // Init hasher
	            var hasher = cfg.hasher.create();

	            // Initial values
	            var derivedKey = WordArray.create();

	            // Shortcuts
	            var derivedKeyWords = derivedKey.words;
	            var keySize = cfg.keySize;
	            var iterations = cfg.iterations;

	            // Generate key
	            while (derivedKeyWords.length < keySize) {
	                if (block) {
	                    hasher.update(block);
	                }
	                block = hasher.update(password).finalize(salt);
	                hasher.reset();

	                // Iterations
	                for (var i = 1; i < iterations; i++) {
	                    block = hasher.finalize(block);
	                    hasher.reset();
	                }

	                derivedKey.concat(block);
	            }
	            derivedKey.sigBytes = keySize * 4;

	            return derivedKey;
	        }
	    });

	    /**
	     * Derives a key from a password.
	     *
	     * @param {WordArray|string} password The password.
	     * @param {WordArray|string} salt A salt.
	     * @param {Object} cfg (Optional) The configuration options to use for this computation.
	     *
	     * @return {WordArray} The derived key.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var key = CryptoJS.EvpKDF(password, salt);
	     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
	     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
	     */
	    C.EvpKDF = function (password, salt, cfg) {
	        return EvpKDF.create(cfg).compute(password, salt);
	    };
	}());


	return CryptoJS.EvpKDF;

}));

/***/ }),

/***/ "./node_modules/crypto-js/format-hex.js":
/*!**********************************************!*\
  !*** ./node_modules/crypto-js/format-hex.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function (undefined) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var CipherParams = C_lib.CipherParams;
	    var C_enc = C.enc;
	    var Hex = C_enc.Hex;
	    var C_format = C.format;

	    var HexFormatter = C_format.Hex = {
	        /**
	         * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
	         *
	         * @param {CipherParams} cipherParams The cipher params object.
	         *
	         * @return {string} The hexadecimally encoded string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
	         */
	        stringify: function (cipherParams) {
	            return cipherParams.ciphertext.toString(Hex);
	        },

	        /**
	         * Converts a hexadecimally encoded ciphertext string to a cipher params object.
	         *
	         * @param {string} input The hexadecimally encoded string.
	         *
	         * @return {CipherParams} The cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
	         */
	        parse: function (input) {
	            var ciphertext = Hex.parse(input);
	            return CipherParams.create({ ciphertext: ciphertext });
	        }
	    };
	}());


	return CryptoJS.format.Hex;

}));

/***/ }),

/***/ "./node_modules/crypto-js/hmac.js":
/*!****************************************!*\
  !*** ./node_modules/crypto-js/hmac.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var C_enc = C.enc;
	    var Utf8 = C_enc.Utf8;
	    var C_algo = C.algo;

	    /**
	     * HMAC algorithm.
	     */
	    var HMAC = C_algo.HMAC = Base.extend({
	        /**
	         * Initializes a newly created HMAC.
	         *
	         * @param {Hasher} hasher The hash algorithm to use.
	         * @param {WordArray|string} key The secret key.
	         *
	         * @example
	         *
	         *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
	         */
	        init: function (hasher, key) {
	            // Init hasher
	            hasher = this._hasher = new hasher.init();

	            // Convert string to WordArray, else assume WordArray already
	            if (typeof key == 'string') {
	                key = Utf8.parse(key);
	            }

	            // Shortcuts
	            var hasherBlockSize = hasher.blockSize;
	            var hasherBlockSizeBytes = hasherBlockSize * 4;

	            // Allow arbitrary length keys
	            if (key.sigBytes > hasherBlockSizeBytes) {
	                key = hasher.finalize(key);
	            }

	            // Clamp excess bits
	            key.clamp();

	            // Clone key for inner and outer pads
	            var oKey = this._oKey = key.clone();
	            var iKey = this._iKey = key.clone();

	            // Shortcuts
	            var oKeyWords = oKey.words;
	            var iKeyWords = iKey.words;

	            // XOR keys with pad constants
	            for (var i = 0; i < hasherBlockSize; i++) {
	                oKeyWords[i] ^= 0x5c5c5c5c;
	                iKeyWords[i] ^= 0x36363636;
	            }
	            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this HMAC to its initial state.
	         *
	         * @example
	         *
	         *     hmacHasher.reset();
	         */
	        reset: function () {
	            // Shortcut
	            var hasher = this._hasher;

	            // Reset
	            hasher.reset();
	            hasher.update(this._iKey);
	        },

	        /**
	         * Updates this HMAC with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {HMAC} This HMAC instance.
	         *
	         * @example
	         *
	         *     hmacHasher.update('message');
	         *     hmacHasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            this._hasher.update(messageUpdate);

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the HMAC computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The HMAC.
	         *
	         * @example
	         *
	         *     var hmac = hmacHasher.finalize();
	         *     var hmac = hmacHasher.finalize('message');
	         *     var hmac = hmacHasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Shortcut
	            var hasher = this._hasher;

	            // Compute HMAC
	            var innerHash = hasher.finalize(messageUpdate);
	            hasher.reset();
	            var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));

	            return hmac;
	        }
	    });
	}());


}));

/***/ }),

/***/ "./node_modules/crypto-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/crypto-js/index.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./x64-core */ "./node_modules/crypto-js/x64-core.js"), __webpack_require__(/*! ./lib-typedarrays */ "./node_modules/crypto-js/lib-typedarrays.js"), __webpack_require__(/*! ./enc-utf16 */ "./node_modules/crypto-js/enc-utf16.js"), __webpack_require__(/*! ./enc-base64 */ "./node_modules/crypto-js/enc-base64.js"), __webpack_require__(/*! ./enc-base64url */ "./node_modules/crypto-js/enc-base64url.js"), __webpack_require__(/*! ./md5 */ "./node_modules/crypto-js/md5.js"), __webpack_require__(/*! ./sha1 */ "./node_modules/crypto-js/sha1.js"), __webpack_require__(/*! ./sha256 */ "./node_modules/crypto-js/sha256.js"), __webpack_require__(/*! ./sha224 */ "./node_modules/crypto-js/sha224.js"), __webpack_require__(/*! ./sha512 */ "./node_modules/crypto-js/sha512.js"), __webpack_require__(/*! ./sha384 */ "./node_modules/crypto-js/sha384.js"), __webpack_require__(/*! ./sha3 */ "./node_modules/crypto-js/sha3.js"), __webpack_require__(/*! ./ripemd160 */ "./node_modules/crypto-js/ripemd160.js"), __webpack_require__(/*! ./hmac */ "./node_modules/crypto-js/hmac.js"), __webpack_require__(/*! ./pbkdf2 */ "./node_modules/crypto-js/pbkdf2.js"), __webpack_require__(/*! ./evpkdf */ "./node_modules/crypto-js/evpkdf.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"), __webpack_require__(/*! ./mode-cfb */ "./node_modules/crypto-js/mode-cfb.js"), __webpack_require__(/*! ./mode-ctr */ "./node_modules/crypto-js/mode-ctr.js"), __webpack_require__(/*! ./mode-ctr-gladman */ "./node_modules/crypto-js/mode-ctr-gladman.js"), __webpack_require__(/*! ./mode-ofb */ "./node_modules/crypto-js/mode-ofb.js"), __webpack_require__(/*! ./mode-ecb */ "./node_modules/crypto-js/mode-ecb.js"), __webpack_require__(/*! ./pad-ansix923 */ "./node_modules/crypto-js/pad-ansix923.js"), __webpack_require__(/*! ./pad-iso10126 */ "./node_modules/crypto-js/pad-iso10126.js"), __webpack_require__(/*! ./pad-iso97971 */ "./node_modules/crypto-js/pad-iso97971.js"), __webpack_require__(/*! ./pad-zeropadding */ "./node_modules/crypto-js/pad-zeropadding.js"), __webpack_require__(/*! ./pad-nopadding */ "./node_modules/crypto-js/pad-nopadding.js"), __webpack_require__(/*! ./format-hex */ "./node_modules/crypto-js/format-hex.js"), __webpack_require__(/*! ./aes */ "./node_modules/crypto-js/aes.js"), __webpack_require__(/*! ./tripledes */ "./node_modules/crypto-js/tripledes.js"), __webpack_require__(/*! ./rc4 */ "./node_modules/crypto-js/rc4.js"), __webpack_require__(/*! ./rabbit */ "./node_modules/crypto-js/rabbit.js"), __webpack_require__(/*! ./rabbit-legacy */ "./node_modules/crypto-js/rabbit-legacy.js"));
	}
	else {}
}(this, function (CryptoJS) {

	return CryptoJS;

}));

/***/ }),

/***/ "./node_modules/crypto-js/lib-typedarrays.js":
/*!***************************************************!*\
  !*** ./node_modules/crypto-js/lib-typedarrays.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Check if typed arrays are supported
	    if (typeof ArrayBuffer != 'function') {
	        return;
	    }

	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;

	    // Reference original init
	    var superInit = WordArray.init;

	    // Augment WordArray.init to handle typed arrays
	    var subInit = WordArray.init = function (typedArray) {
	        // Convert buffers to uint8
	        if (typedArray instanceof ArrayBuffer) {
	            typedArray = new Uint8Array(typedArray);
	        }

	        // Convert other array views to uint8
	        if (
	            typedArray instanceof Int8Array ||
	            (typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray) ||
	            typedArray instanceof Int16Array ||
	            typedArray instanceof Uint16Array ||
	            typedArray instanceof Int32Array ||
	            typedArray instanceof Uint32Array ||
	            typedArray instanceof Float32Array ||
	            typedArray instanceof Float64Array
	        ) {
	            typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
	        }

	        // Handle Uint8Array
	        if (typedArray instanceof Uint8Array) {
	            // Shortcut
	            var typedArrayByteLength = typedArray.byteLength;

	            // Extract bytes
	            var words = [];
	            for (var i = 0; i < typedArrayByteLength; i++) {
	                words[i >>> 2] |= typedArray[i] << (24 - (i % 4) * 8);
	            }

	            // Initialize this word array
	            superInit.call(this, words, typedArrayByteLength);
	        } else {
	            // Else call normal init
	            superInit.apply(this, arguments);
	        }
	    };

	    subInit.prototype = WordArray;
	}());


	return CryptoJS.lib.WordArray;

}));

/***/ }),

/***/ "./node_modules/crypto-js/md5.js":
/*!***************************************!*\
  !*** ./node_modules/crypto-js/md5.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Constants table
	    var T = [];

	    // Compute constants
	    (function () {
	        for (var i = 0; i < 64; i++) {
	            T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
	        }
	    }());

	    /**
	     * MD5 hash algorithm.
	     */
	    var MD5 = C_algo.MD5 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0x67452301, 0xefcdab89,
	                0x98badcfe, 0x10325476
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Swap endian
	            for (var i = 0; i < 16; i++) {
	                // Shortcuts
	                var offset_i = offset + i;
	                var M_offset_i = M[offset_i];

	                M[offset_i] = (
	                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	                );
	            }

	            // Shortcuts
	            var H = this._hash.words;

	            var M_offset_0  = M[offset + 0];
	            var M_offset_1  = M[offset + 1];
	            var M_offset_2  = M[offset + 2];
	            var M_offset_3  = M[offset + 3];
	            var M_offset_4  = M[offset + 4];
	            var M_offset_5  = M[offset + 5];
	            var M_offset_6  = M[offset + 6];
	            var M_offset_7  = M[offset + 7];
	            var M_offset_8  = M[offset + 8];
	            var M_offset_9  = M[offset + 9];
	            var M_offset_10 = M[offset + 10];
	            var M_offset_11 = M[offset + 11];
	            var M_offset_12 = M[offset + 12];
	            var M_offset_13 = M[offset + 13];
	            var M_offset_14 = M[offset + 14];
	            var M_offset_15 = M[offset + 15];

	            // Working varialbes
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];

	            // Computation
	            a = FF(a, b, c, d, M_offset_0,  7,  T[0]);
	            d = FF(d, a, b, c, M_offset_1,  12, T[1]);
	            c = FF(c, d, a, b, M_offset_2,  17, T[2]);
	            b = FF(b, c, d, a, M_offset_3,  22, T[3]);
	            a = FF(a, b, c, d, M_offset_4,  7,  T[4]);
	            d = FF(d, a, b, c, M_offset_5,  12, T[5]);
	            c = FF(c, d, a, b, M_offset_6,  17, T[6]);
	            b = FF(b, c, d, a, M_offset_7,  22, T[7]);
	            a = FF(a, b, c, d, M_offset_8,  7,  T[8]);
	            d = FF(d, a, b, c, M_offset_9,  12, T[9]);
	            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
	            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
	            a = FF(a, b, c, d, M_offset_12, 7,  T[12]);
	            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
	            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
	            b = FF(b, c, d, a, M_offset_15, 22, T[15]);

	            a = GG(a, b, c, d, M_offset_1,  5,  T[16]);
	            d = GG(d, a, b, c, M_offset_6,  9,  T[17]);
	            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
	            b = GG(b, c, d, a, M_offset_0,  20, T[19]);
	            a = GG(a, b, c, d, M_offset_5,  5,  T[20]);
	            d = GG(d, a, b, c, M_offset_10, 9,  T[21]);
	            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
	            b = GG(b, c, d, a, M_offset_4,  20, T[23]);
	            a = GG(a, b, c, d, M_offset_9,  5,  T[24]);
	            d = GG(d, a, b, c, M_offset_14, 9,  T[25]);
	            c = GG(c, d, a, b, M_offset_3,  14, T[26]);
	            b = GG(b, c, d, a, M_offset_8,  20, T[27]);
	            a = GG(a, b, c, d, M_offset_13, 5,  T[28]);
	            d = GG(d, a, b, c, M_offset_2,  9,  T[29]);
	            c = GG(c, d, a, b, M_offset_7,  14, T[30]);
	            b = GG(b, c, d, a, M_offset_12, 20, T[31]);

	            a = HH(a, b, c, d, M_offset_5,  4,  T[32]);
	            d = HH(d, a, b, c, M_offset_8,  11, T[33]);
	            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
	            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
	            a = HH(a, b, c, d, M_offset_1,  4,  T[36]);
	            d = HH(d, a, b, c, M_offset_4,  11, T[37]);
	            c = HH(c, d, a, b, M_offset_7,  16, T[38]);
	            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
	            a = HH(a, b, c, d, M_offset_13, 4,  T[40]);
	            d = HH(d, a, b, c, M_offset_0,  11, T[41]);
	            c = HH(c, d, a, b, M_offset_3,  16, T[42]);
	            b = HH(b, c, d, a, M_offset_6,  23, T[43]);
	            a = HH(a, b, c, d, M_offset_9,  4,  T[44]);
	            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
	            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
	            b = HH(b, c, d, a, M_offset_2,  23, T[47]);

	            a = II(a, b, c, d, M_offset_0,  6,  T[48]);
	            d = II(d, a, b, c, M_offset_7,  10, T[49]);
	            c = II(c, d, a, b, M_offset_14, 15, T[50]);
	            b = II(b, c, d, a, M_offset_5,  21, T[51]);
	            a = II(a, b, c, d, M_offset_12, 6,  T[52]);
	            d = II(d, a, b, c, M_offset_3,  10, T[53]);
	            c = II(c, d, a, b, M_offset_10, 15, T[54]);
	            b = II(b, c, d, a, M_offset_1,  21, T[55]);
	            a = II(a, b, c, d, M_offset_8,  6,  T[56]);
	            d = II(d, a, b, c, M_offset_15, 10, T[57]);
	            c = II(c, d, a, b, M_offset_6,  15, T[58]);
	            b = II(b, c, d, a, M_offset_13, 21, T[59]);
	            a = II(a, b, c, d, M_offset_4,  6,  T[60]);
	            d = II(d, a, b, c, M_offset_11, 10, T[61]);
	            c = II(c, d, a, b, M_offset_2,  15, T[62]);
	            b = II(b, c, d, a, M_offset_9,  21, T[63]);

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);

	            var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
	            var nBitsTotalL = nBitsTotal;
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = (
	                (((nBitsTotalH << 8)  | (nBitsTotalH >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalH << 24) | (nBitsTotalH >>> 8))  & 0xff00ff00)
	            );
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	                (((nBitsTotalL << 8)  | (nBitsTotalL >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalL << 24) | (nBitsTotalL >>> 8))  & 0xff00ff00)
	            );

	            data.sigBytes = (dataWords.length + 1) * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var hash = this._hash;
	            var H = hash.words;

	            // Swap endian
	            for (var i = 0; i < 4; i++) {
	                // Shortcut
	                var H_i = H[i];

	                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	            }

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    function FF(a, b, c, d, x, s, t) {
	        var n = a + ((b & c) | (~b & d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function GG(a, b, c, d, x, s, t) {
	        var n = a + ((b & d) | (c & ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function HH(a, b, c, d, x, s, t) {
	        var n = a + (b ^ c ^ d) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function II(a, b, c, d, x, s, t) {
	        var n = a + (c ^ (b | ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.MD5('message');
	     *     var hash = CryptoJS.MD5(wordArray);
	     */
	    C.MD5 = Hasher._createHelper(MD5);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacMD5(message, key);
	     */
	    C.HmacMD5 = Hasher._createHmacHelper(MD5);
	}(Math));


	return CryptoJS.MD5;

}));

/***/ }),

/***/ "./node_modules/crypto-js/mode-cfb.js":
/*!********************************************!*\
  !*** ./node_modules/crypto-js/mode-cfb.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * Cipher Feedback block mode.
	 */
	CryptoJS.mode.CFB = (function () {
	    var CFB = CryptoJS.lib.BlockCipherMode.extend();

	    CFB.Encryptor = CFB.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher;
	            var blockSize = cipher.blockSize;

	            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

	            // Remember this block to use with next block
	            this._prevBlock = words.slice(offset, offset + blockSize);
	        }
	    });

	    CFB.Decryptor = CFB.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher;
	            var blockSize = cipher.blockSize;

	            // Remember this block to use with next block
	            var thisBlock = words.slice(offset, offset + blockSize);

	            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

	            // This block becomes the previous block
	            this._prevBlock = thisBlock;
	        }
	    });

	    function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
	        var keystream;

	        // Shortcut
	        var iv = this._iv;

	        // Generate keystream
	        if (iv) {
	            keystream = iv.slice(0);

	            // Remove IV for subsequent blocks
	            this._iv = undefined;
	        } else {
	            keystream = this._prevBlock;
	        }
	        cipher.encryptBlock(keystream, 0);

	        // Encrypt
	        for (var i = 0; i < blockSize; i++) {
	            words[offset + i] ^= keystream[i];
	        }
	    }

	    return CFB;
	}());


	return CryptoJS.mode.CFB;

}));

/***/ }),

/***/ "./node_modules/crypto-js/mode-ctr-gladman.js":
/*!****************************************************!*\
  !*** ./node_modules/crypto-js/mode-ctr-gladman.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	/** @preserve
	 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
	 * derived from CryptoJS.mode.CTR
	 * Jan Hruby jhruby.web@gmail.com
	 */
	CryptoJS.mode.CTRGladman = (function () {
	    var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();

		function incWord(word)
		{
			if (((word >> 24) & 0xff) === 0xff) { //overflow
			var b1 = (word >> 16)&0xff;
			var b2 = (word >> 8)&0xff;
			var b3 = word & 0xff;

			if (b1 === 0xff) // overflow b1
			{
			b1 = 0;
			if (b2 === 0xff)
			{
				b2 = 0;
				if (b3 === 0xff)
				{
					b3 = 0;
				}
				else
				{
					++b3;
				}
			}
			else
			{
				++b2;
			}
			}
			else
			{
			++b1;
			}

			word = 0;
			word += (b1 << 16);
			word += (b2 << 8);
			word += b3;
			}
			else
			{
			word += (0x01 << 24);
			}
			return word;
		}

		function incCounter(counter)
		{
			if ((counter[0] = incWord(counter[0])) === 0)
			{
				// encr_data in fileenc.c from  Dr Brian Gladman's counts only with DWORD j < 8
				counter[1] = incWord(counter[1]);
			}
			return counter;
		}

	    var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher
	            var blockSize = cipher.blockSize;
	            var iv = this._iv;
	            var counter = this._counter;

	            // Generate keystream
	            if (iv) {
	                counter = this._counter = iv.slice(0);

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            }

				incCounter(counter);

				var keystream = counter.slice(0);
	            cipher.encryptBlock(keystream, 0);

	            // Encrypt
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= keystream[i];
	            }
	        }
	    });

	    CTRGladman.Decryptor = Encryptor;

	    return CTRGladman;
	}());




	return CryptoJS.mode.CTRGladman;

}));

/***/ }),

/***/ "./node_modules/crypto-js/mode-ctr.js":
/*!********************************************!*\
  !*** ./node_modules/crypto-js/mode-ctr.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * Counter block mode.
	 */
	CryptoJS.mode.CTR = (function () {
	    var CTR = CryptoJS.lib.BlockCipherMode.extend();

	    var Encryptor = CTR.Encryptor = CTR.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher
	            var blockSize = cipher.blockSize;
	            var iv = this._iv;
	            var counter = this._counter;

	            // Generate keystream
	            if (iv) {
	                counter = this._counter = iv.slice(0);

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            }
	            var keystream = counter.slice(0);
	            cipher.encryptBlock(keystream, 0);

	            // Increment counter
	            counter[blockSize - 1] = (counter[blockSize - 1] + 1) | 0

	            // Encrypt
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= keystream[i];
	            }
	        }
	    });

	    CTR.Decryptor = Encryptor;

	    return CTR;
	}());


	return CryptoJS.mode.CTR;

}));

/***/ }),

/***/ "./node_modules/crypto-js/mode-ecb.js":
/*!********************************************!*\
  !*** ./node_modules/crypto-js/mode-ecb.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * Electronic Codebook block mode.
	 */
	CryptoJS.mode.ECB = (function () {
	    var ECB = CryptoJS.lib.BlockCipherMode.extend();

	    ECB.Encryptor = ECB.extend({
	        processBlock: function (words, offset) {
	            this._cipher.encryptBlock(words, offset);
	        }
	    });

	    ECB.Decryptor = ECB.extend({
	        processBlock: function (words, offset) {
	            this._cipher.decryptBlock(words, offset);
	        }
	    });

	    return ECB;
	}());


	return CryptoJS.mode.ECB;

}));

/***/ }),

/***/ "./node_modules/crypto-js/mode-ofb.js":
/*!********************************************!*\
  !*** ./node_modules/crypto-js/mode-ofb.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * Output Feedback block mode.
	 */
	CryptoJS.mode.OFB = (function () {
	    var OFB = CryptoJS.lib.BlockCipherMode.extend();

	    var Encryptor = OFB.Encryptor = OFB.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher
	            var blockSize = cipher.blockSize;
	            var iv = this._iv;
	            var keystream = this._keystream;

	            // Generate keystream
	            if (iv) {
	                keystream = this._keystream = iv.slice(0);

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            }
	            cipher.encryptBlock(keystream, 0);

	            // Encrypt
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= keystream[i];
	            }
	        }
	    });

	    OFB.Decryptor = Encryptor;

	    return OFB;
	}());


	return CryptoJS.mode.OFB;

}));

/***/ }),

/***/ "./node_modules/crypto-js/pad-ansix923.js":
/*!************************************************!*\
  !*** ./node_modules/crypto-js/pad-ansix923.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * ANSI X.923 padding strategy.
	 */
	CryptoJS.pad.AnsiX923 = {
	    pad: function (data, blockSize) {
	        // Shortcuts
	        var dataSigBytes = data.sigBytes;
	        var blockSizeBytes = blockSize * 4;

	        // Count padding bytes
	        var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;

	        // Compute last byte position
	        var lastBytePos = dataSigBytes + nPaddingBytes - 1;

	        // Pad
	        data.clamp();
	        data.words[lastBytePos >>> 2] |= nPaddingBytes << (24 - (lastBytePos % 4) * 8);
	        data.sigBytes += nPaddingBytes;
	    },

	    unpad: function (data) {
	        // Get number of padding bytes from last byte
	        var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

	        // Remove padding
	        data.sigBytes -= nPaddingBytes;
	    }
	};


	return CryptoJS.pad.Ansix923;

}));

/***/ }),

/***/ "./node_modules/crypto-js/pad-iso10126.js":
/*!************************************************!*\
  !*** ./node_modules/crypto-js/pad-iso10126.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * ISO 10126 padding strategy.
	 */
	CryptoJS.pad.Iso10126 = {
	    pad: function (data, blockSize) {
	        // Shortcut
	        var blockSizeBytes = blockSize * 4;

	        // Count padding bytes
	        var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

	        // Pad
	        data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).
	             concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));
	    },

	    unpad: function (data) {
	        // Get number of padding bytes from last byte
	        var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

	        // Remove padding
	        data.sigBytes -= nPaddingBytes;
	    }
	};


	return CryptoJS.pad.Iso10126;

}));

/***/ }),

/***/ "./node_modules/crypto-js/pad-iso97971.js":
/*!************************************************!*\
  !*** ./node_modules/crypto-js/pad-iso97971.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * ISO/IEC 9797-1 Padding Method 2.
	 */
	CryptoJS.pad.Iso97971 = {
	    pad: function (data, blockSize) {
	        // Add 0x80 byte
	        data.concat(CryptoJS.lib.WordArray.create([0x80000000], 1));

	        // Zero pad the rest
	        CryptoJS.pad.ZeroPadding.pad(data, blockSize);
	    },

	    unpad: function (data) {
	        // Remove zero padding
	        CryptoJS.pad.ZeroPadding.unpad(data);

	        // Remove one more byte -- the 0x80 byte
	        data.sigBytes--;
	    }
	};


	return CryptoJS.pad.Iso97971;

}));

/***/ }),

/***/ "./node_modules/crypto-js/pad-nopadding.js":
/*!*************************************************!*\
  !*** ./node_modules/crypto-js/pad-nopadding.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * A noop padding strategy.
	 */
	CryptoJS.pad.NoPadding = {
	    pad: function () {
	    },

	    unpad: function () {
	    }
	};


	return CryptoJS.pad.NoPadding;

}));

/***/ }),

/***/ "./node_modules/crypto-js/pad-zeropadding.js":
/*!***************************************************!*\
  !*** ./node_modules/crypto-js/pad-zeropadding.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * Zero padding strategy.
	 */
	CryptoJS.pad.ZeroPadding = {
	    pad: function (data, blockSize) {
	        // Shortcut
	        var blockSizeBytes = blockSize * 4;

	        // Pad
	        data.clamp();
	        data.sigBytes += blockSizeBytes - ((data.sigBytes % blockSizeBytes) || blockSizeBytes);
	    },

	    unpad: function (data) {
	        // Shortcut
	        var dataWords = data.words;

	        // Unpad
	        var i = data.sigBytes - 1;
	        for (var i = data.sigBytes - 1; i >= 0; i--) {
	            if (((dataWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff)) {
	                data.sigBytes = i + 1;
	                break;
	            }
	        }
	    }
	};


	return CryptoJS.pad.ZeroPadding;

}));

/***/ }),

/***/ "./node_modules/crypto-js/pbkdf2.js":
/*!******************************************!*\
  !*** ./node_modules/crypto-js/pbkdf2.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./sha1 */ "./node_modules/crypto-js/sha1.js"), __webpack_require__(/*! ./hmac */ "./node_modules/crypto-js/hmac.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var WordArray = C_lib.WordArray;
	    var C_algo = C.algo;
	    var SHA1 = C_algo.SHA1;
	    var HMAC = C_algo.HMAC;

	    /**
	     * Password-Based Key Derivation Function 2 algorithm.
	     */
	    var PBKDF2 = C_algo.PBKDF2 = Base.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
	         * @property {Hasher} hasher The hasher to use. Default: SHA1
	         * @property {number} iterations The number of iterations to perform. Default: 1
	         */
	        cfg: Base.extend({
	            keySize: 128/32,
	            hasher: SHA1,
	            iterations: 1
	        }),

	        /**
	         * Initializes a newly created key derivation function.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
	         *
	         * @example
	         *
	         *     var kdf = CryptoJS.algo.PBKDF2.create();
	         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
	         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
	         */
	        init: function (cfg) {
	            this.cfg = this.cfg.extend(cfg);
	        },

	        /**
	         * Computes the Password-Based Key Derivation Function 2.
	         *
	         * @param {WordArray|string} password The password.
	         * @param {WordArray|string} salt A salt.
	         *
	         * @return {WordArray} The derived key.
	         *
	         * @example
	         *
	         *     var key = kdf.compute(password, salt);
	         */
	        compute: function (password, salt) {
	            // Shortcut
	            var cfg = this.cfg;

	            // Init HMAC
	            var hmac = HMAC.create(cfg.hasher, password);

	            // Initial values
	            var derivedKey = WordArray.create();
	            var blockIndex = WordArray.create([0x00000001]);

	            // Shortcuts
	            var derivedKeyWords = derivedKey.words;
	            var blockIndexWords = blockIndex.words;
	            var keySize = cfg.keySize;
	            var iterations = cfg.iterations;

	            // Generate key
	            while (derivedKeyWords.length < keySize) {
	                var block = hmac.update(salt).finalize(blockIndex);
	                hmac.reset();

	                // Shortcuts
	                var blockWords = block.words;
	                var blockWordsLength = blockWords.length;

	                // Iterations
	                var intermediate = block;
	                for (var i = 1; i < iterations; i++) {
	                    intermediate = hmac.finalize(intermediate);
	                    hmac.reset();

	                    // Shortcut
	                    var intermediateWords = intermediate.words;

	                    // XOR intermediate with block
	                    for (var j = 0; j < blockWordsLength; j++) {
	                        blockWords[j] ^= intermediateWords[j];
	                    }
	                }

	                derivedKey.concat(block);
	                blockIndexWords[0]++;
	            }
	            derivedKey.sigBytes = keySize * 4;

	            return derivedKey;
	        }
	    });

	    /**
	     * Computes the Password-Based Key Derivation Function 2.
	     *
	     * @param {WordArray|string} password The password.
	     * @param {WordArray|string} salt A salt.
	     * @param {Object} cfg (Optional) The configuration options to use for this computation.
	     *
	     * @return {WordArray} The derived key.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var key = CryptoJS.PBKDF2(password, salt);
	     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });
	     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });
	     */
	    C.PBKDF2 = function (password, salt, cfg) {
	        return PBKDF2.create(cfg).compute(password, salt);
	    };
	}());


	return CryptoJS.PBKDF2;

}));

/***/ }),

/***/ "./node_modules/crypto-js/rabbit-legacy.js":
/*!*************************************************!*\
  !*** ./node_modules/crypto-js/rabbit-legacy.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./enc-base64 */ "./node_modules/crypto-js/enc-base64.js"), __webpack_require__(/*! ./md5 */ "./node_modules/crypto-js/md5.js"), __webpack_require__(/*! ./evpkdf */ "./node_modules/crypto-js/evpkdf.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var StreamCipher = C_lib.StreamCipher;
	    var C_algo = C.algo;

	    // Reusable objects
	    var S  = [];
	    var C_ = [];
	    var G  = [];

	    /**
	     * Rabbit stream cipher algorithm.
	     *
	     * This is a legacy version that neglected to convert the key to little-endian.
	     * This error doesn't affect the cipher's security,
	     * but it does affect its compatibility with other implementations.
	     */
	    var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var K = this._key.words;
	            var iv = this.cfg.iv;

	            // Generate initial state values
	            var X = this._X = [
	                K[0], (K[3] << 16) | (K[2] >>> 16),
	                K[1], (K[0] << 16) | (K[3] >>> 16),
	                K[2], (K[1] << 16) | (K[0] >>> 16),
	                K[3], (K[2] << 16) | (K[1] >>> 16)
	            ];

	            // Generate initial counter values
	            var C = this._C = [
	                (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
	                (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
	                (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
	                (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
	            ];

	            // Carry bit
	            this._b = 0;

	            // Iterate the system four times
	            for (var i = 0; i < 4; i++) {
	                nextState.call(this);
	            }

	            // Modify the counters
	            for (var i = 0; i < 8; i++) {
	                C[i] ^= X[(i + 4) & 7];
	            }

	            // IV setup
	            if (iv) {
	                // Shortcuts
	                var IV = iv.words;
	                var IV_0 = IV[0];
	                var IV_1 = IV[1];

	                // Generate four subvectors
	                var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
	                var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
	                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
	                var i3 = (i2 << 16)  | (i0 & 0x0000ffff);

	                // Modify counter values
	                C[0] ^= i0;
	                C[1] ^= i1;
	                C[2] ^= i2;
	                C[3] ^= i3;
	                C[4] ^= i0;
	                C[5] ^= i1;
	                C[6] ^= i2;
	                C[7] ^= i3;

	                // Iterate the system four times
	                for (var i = 0; i < 4; i++) {
	                    nextState.call(this);
	                }
	            }
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var X = this._X;

	            // Iterate the system
	            nextState.call(this);

	            // Generate four keystream words
	            S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
	            S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
	            S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
	            S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

	            for (var i = 0; i < 4; i++) {
	                // Swap endian
	                S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
	                       (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);

	                // Encrypt
	                M[offset + i] ^= S[i];
	            }
	        },

	        blockSize: 128/32,

	        ivSize: 64/32
	    });

	    function nextState() {
	        // Shortcuts
	        var X = this._X;
	        var C = this._C;

	        // Save old counter values
	        for (var i = 0; i < 8; i++) {
	            C_[i] = C[i];
	        }

	        // Calculate new counter values
	        C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
	        C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
	        C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
	        C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
	        C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
	        C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
	        C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
	        C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
	        this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

	        // Calculate the g-values
	        for (var i = 0; i < 8; i++) {
	            var gx = X[i] + C[i];

	            // Construct high and low argument for squaring
	            var ga = gx & 0xffff;
	            var gb = gx >>> 16;

	            // Calculate high and low result of squaring
	            var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
	            var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

	            // High XOR low
	            G[i] = gh ^ gl;
	        }

	        // Calculate new state values
	        X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
	        X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
	        X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
	        X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
	        X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
	        X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
	        X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
	        X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.RabbitLegacy.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.RabbitLegacy.decrypt(ciphertext, key, cfg);
	     */
	    C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
	}());


	return CryptoJS.RabbitLegacy;

}));

/***/ }),

/***/ "./node_modules/crypto-js/rabbit.js":
/*!******************************************!*\
  !*** ./node_modules/crypto-js/rabbit.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./enc-base64 */ "./node_modules/crypto-js/enc-base64.js"), __webpack_require__(/*! ./md5 */ "./node_modules/crypto-js/md5.js"), __webpack_require__(/*! ./evpkdf */ "./node_modules/crypto-js/evpkdf.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var StreamCipher = C_lib.StreamCipher;
	    var C_algo = C.algo;

	    // Reusable objects
	    var S  = [];
	    var C_ = [];
	    var G  = [];

	    /**
	     * Rabbit stream cipher algorithm
	     */
	    var Rabbit = C_algo.Rabbit = StreamCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var K = this._key.words;
	            var iv = this.cfg.iv;

	            // Swap endian
	            for (var i = 0; i < 4; i++) {
	                K[i] = (((K[i] << 8)  | (K[i] >>> 24)) & 0x00ff00ff) |
	                       (((K[i] << 24) | (K[i] >>> 8))  & 0xff00ff00);
	            }

	            // Generate initial state values
	            var X = this._X = [
	                K[0], (K[3] << 16) | (K[2] >>> 16),
	                K[1], (K[0] << 16) | (K[3] >>> 16),
	                K[2], (K[1] << 16) | (K[0] >>> 16),
	                K[3], (K[2] << 16) | (K[1] >>> 16)
	            ];

	            // Generate initial counter values
	            var C = this._C = [
	                (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
	                (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
	                (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
	                (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
	            ];

	            // Carry bit
	            this._b = 0;

	            // Iterate the system four times
	            for (var i = 0; i < 4; i++) {
	                nextState.call(this);
	            }

	            // Modify the counters
	            for (var i = 0; i < 8; i++) {
	                C[i] ^= X[(i + 4) & 7];
	            }

	            // IV setup
	            if (iv) {
	                // Shortcuts
	                var IV = iv.words;
	                var IV_0 = IV[0];
	                var IV_1 = IV[1];

	                // Generate four subvectors
	                var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
	                var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
	                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
	                var i3 = (i2 << 16)  | (i0 & 0x0000ffff);

	                // Modify counter values
	                C[0] ^= i0;
	                C[1] ^= i1;
	                C[2] ^= i2;
	                C[3] ^= i3;
	                C[4] ^= i0;
	                C[5] ^= i1;
	                C[6] ^= i2;
	                C[7] ^= i3;

	                // Iterate the system four times
	                for (var i = 0; i < 4; i++) {
	                    nextState.call(this);
	                }
	            }
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var X = this._X;

	            // Iterate the system
	            nextState.call(this);

	            // Generate four keystream words
	            S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
	            S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
	            S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
	            S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

	            for (var i = 0; i < 4; i++) {
	                // Swap endian
	                S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
	                       (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);

	                // Encrypt
	                M[offset + i] ^= S[i];
	            }
	        },

	        blockSize: 128/32,

	        ivSize: 64/32
	    });

	    function nextState() {
	        // Shortcuts
	        var X = this._X;
	        var C = this._C;

	        // Save old counter values
	        for (var i = 0; i < 8; i++) {
	            C_[i] = C[i];
	        }

	        // Calculate new counter values
	        C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
	        C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
	        C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
	        C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
	        C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
	        C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
	        C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
	        C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
	        this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

	        // Calculate the g-values
	        for (var i = 0; i < 8; i++) {
	            var gx = X[i] + C[i];

	            // Construct high and low argument for squaring
	            var ga = gx & 0xffff;
	            var gb = gx >>> 16;

	            // Calculate high and low result of squaring
	            var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
	            var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

	            // High XOR low
	            G[i] = gh ^ gl;
	        }

	        // Calculate new state values
	        X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
	        X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
	        X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
	        X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
	        X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
	        X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
	        X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
	        X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
	     */
	    C.Rabbit = StreamCipher._createHelper(Rabbit);
	}());


	return CryptoJS.Rabbit;

}));

/***/ }),

/***/ "./node_modules/crypto-js/rc4.js":
/*!***************************************!*\
  !*** ./node_modules/crypto-js/rc4.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./enc-base64 */ "./node_modules/crypto-js/enc-base64.js"), __webpack_require__(/*! ./md5 */ "./node_modules/crypto-js/md5.js"), __webpack_require__(/*! ./evpkdf */ "./node_modules/crypto-js/evpkdf.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var StreamCipher = C_lib.StreamCipher;
	    var C_algo = C.algo;

	    /**
	     * RC4 stream cipher algorithm.
	     */
	    var RC4 = C_algo.RC4 = StreamCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var key = this._key;
	            var keyWords = key.words;
	            var keySigBytes = key.sigBytes;

	            // Init sbox
	            var S = this._S = [];
	            for (var i = 0; i < 256; i++) {
	                S[i] = i;
	            }

	            // Key setup
	            for (var i = 0, j = 0; i < 256; i++) {
	                var keyByteIndex = i % keySigBytes;
	                var keyByte = (keyWords[keyByteIndex >>> 2] >>> (24 - (keyByteIndex % 4) * 8)) & 0xff;

	                j = (j + S[i] + keyByte) % 256;

	                // Swap
	                var t = S[i];
	                S[i] = S[j];
	                S[j] = t;
	            }

	            // Counters
	            this._i = this._j = 0;
	        },

	        _doProcessBlock: function (M, offset) {
	            M[offset] ^= generateKeystreamWord.call(this);
	        },

	        keySize: 256/32,

	        ivSize: 0
	    });

	    function generateKeystreamWord() {
	        // Shortcuts
	        var S = this._S;
	        var i = this._i;
	        var j = this._j;

	        // Generate keystream word
	        var keystreamWord = 0;
	        for (var n = 0; n < 4; n++) {
	            i = (i + 1) % 256;
	            j = (j + S[i]) % 256;

	            // Swap
	            var t = S[i];
	            S[i] = S[j];
	            S[j] = t;

	            keystreamWord |= S[(S[i] + S[j]) % 256] << (24 - n * 8);
	        }

	        // Update counters
	        this._i = i;
	        this._j = j;

	        return keystreamWord;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
	     */
	    C.RC4 = StreamCipher._createHelper(RC4);

	    /**
	     * Modified RC4 stream cipher algorithm.
	     */
	    var RC4Drop = C_algo.RC4Drop = RC4.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} drop The number of keystream words to drop. Default 192
	         */
	        cfg: RC4.cfg.extend({
	            drop: 192
	        }),

	        _doReset: function () {
	            RC4._doReset.call(this);

	            // Drop
	            for (var i = this.cfg.drop; i > 0; i--) {
	                generateKeystreamWord.call(this);
	            }
	        }
	    });

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
	     */
	    C.RC4Drop = StreamCipher._createHelper(RC4Drop);
	}());


	return CryptoJS.RC4;

}));

/***/ }),

/***/ "./node_modules/crypto-js/ripemd160.js":
/*!*********************************************!*\
  !*** ./node_modules/crypto-js/ripemd160.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	/** @preserve
	(c) 2012 by Cédric Mesnil. All rights reserved.

	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Constants table
	    var _zl = WordArray.create([
	        0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15,
	        7,  4, 13,  1, 10,  6, 15,  3, 12,  0,  9,  5,  2, 14, 11,  8,
	        3, 10, 14,  4,  9, 15,  8,  1,  2,  7,  0,  6, 13, 11,  5, 12,
	        1,  9, 11, 10,  0,  8, 12,  4, 13,  3,  7, 15, 14,  5,  6,  2,
	        4,  0,  5,  9,  7, 12,  2, 10, 14,  1,  3,  8, 11,  6, 15, 13]);
	    var _zr = WordArray.create([
	        5, 14,  7,  0,  9,  2, 11,  4, 13,  6, 15,  8,  1, 10,  3, 12,
	        6, 11,  3,  7,  0, 13,  5, 10, 14, 15,  8, 12,  4,  9,  1,  2,
	        15,  5,  1,  3,  7, 14,  6,  9, 11,  8, 12,  2, 10,  0,  4, 13,
	        8,  6,  4,  1,  3, 11, 15,  0,  5, 12,  2, 13,  9,  7, 10, 14,
	        12, 15, 10,  4,  1,  5,  8,  7,  6,  2, 13, 14,  0,  3,  9, 11]);
	    var _sl = WordArray.create([
	         11, 14, 15, 12,  5,  8,  7,  9, 11, 13, 14, 15,  6,  7,  9,  8,
	        7, 6,   8, 13, 11,  9,  7, 15,  7, 12, 15,  9, 11,  7, 13, 12,
	        11, 13,  6,  7, 14,  9, 13, 15, 14,  8, 13,  6,  5, 12,  7,  5,
	          11, 12, 14, 15, 14, 15,  9,  8,  9, 14,  5,  6,  8,  6,  5, 12,
	        9, 15,  5, 11,  6,  8, 13, 12,  5, 12, 13, 14, 11,  8,  5,  6 ]);
	    var _sr = WordArray.create([
	        8,  9,  9, 11, 13, 15, 15,  5,  7,  7,  8, 11, 14, 14, 12,  6,
	        9, 13, 15,  7, 12,  8,  9, 11,  7,  7, 12,  7,  6, 15, 13, 11,
	        9,  7, 15, 11,  8,  6,  6, 14, 12, 13,  5, 14, 13, 13,  7,  5,
	        15,  5,  8, 11, 14, 14,  6, 14,  6,  9, 12,  9, 12,  5, 15,  8,
	        8,  5, 12,  9, 12,  5, 14,  6,  8, 13,  6,  5, 15, 13, 11, 11 ]);

	    var _hl =  WordArray.create([ 0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E]);
	    var _hr =  WordArray.create([ 0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000]);

	    /**
	     * RIPEMD160 hash algorithm.
	     */
	    var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
	        _doReset: function () {
	            this._hash  = WordArray.create([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]);
	        },

	        _doProcessBlock: function (M, offset) {

	            // Swap endian
	            for (var i = 0; i < 16; i++) {
	                // Shortcuts
	                var offset_i = offset + i;
	                var M_offset_i = M[offset_i];

	                // Swap
	                M[offset_i] = (
	                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	                );
	            }
	            // Shortcut
	            var H  = this._hash.words;
	            var hl = _hl.words;
	            var hr = _hr.words;
	            var zl = _zl.words;
	            var zr = _zr.words;
	            var sl = _sl.words;
	            var sr = _sr.words;

	            // Working variables
	            var al, bl, cl, dl, el;
	            var ar, br, cr, dr, er;

	            ar = al = H[0];
	            br = bl = H[1];
	            cr = cl = H[2];
	            dr = dl = H[3];
	            er = el = H[4];
	            // Computation
	            var t;
	            for (var i = 0; i < 80; i += 1) {
	                t = (al +  M[offset+zl[i]])|0;
	                if (i<16){
		            t +=  f1(bl,cl,dl) + hl[0];
	                } else if (i<32) {
		            t +=  f2(bl,cl,dl) + hl[1];
	                } else if (i<48) {
		            t +=  f3(bl,cl,dl) + hl[2];
	                } else if (i<64) {
		            t +=  f4(bl,cl,dl) + hl[3];
	                } else {// if (i<80) {
		            t +=  f5(bl,cl,dl) + hl[4];
	                }
	                t = t|0;
	                t =  rotl(t,sl[i]);
	                t = (t+el)|0;
	                al = el;
	                el = dl;
	                dl = rotl(cl, 10);
	                cl = bl;
	                bl = t;

	                t = (ar + M[offset+zr[i]])|0;
	                if (i<16){
		            t +=  f5(br,cr,dr) + hr[0];
	                } else if (i<32) {
		            t +=  f4(br,cr,dr) + hr[1];
	                } else if (i<48) {
		            t +=  f3(br,cr,dr) + hr[2];
	                } else if (i<64) {
		            t +=  f2(br,cr,dr) + hr[3];
	                } else {// if (i<80) {
		            t +=  f1(br,cr,dr) + hr[4];
	                }
	                t = t|0;
	                t =  rotl(t,sr[i]) ;
	                t = (t+er)|0;
	                ar = er;
	                er = dr;
	                dr = rotl(cr, 10);
	                cr = br;
	                br = t;
	            }
	            // Intermediate hash value
	            t    = (H[1] + cl + dr)|0;
	            H[1] = (H[2] + dl + er)|0;
	            H[2] = (H[3] + el + ar)|0;
	            H[3] = (H[4] + al + br)|0;
	            H[4] = (H[0] + bl + cr)|0;
	            H[0] =  t;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	                (((nBitsTotal << 8)  | (nBitsTotal >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotal << 24) | (nBitsTotal >>> 8))  & 0xff00ff00)
	            );
	            data.sigBytes = (dataWords.length + 1) * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var hash = this._hash;
	            var H = hash.words;

	            // Swap endian
	            for (var i = 0; i < 5; i++) {
	                // Shortcut
	                var H_i = H[i];

	                // Swap
	                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	            }

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });


	    function f1(x, y, z) {
	        return ((x) ^ (y) ^ (z));

	    }

	    function f2(x, y, z) {
	        return (((x)&(y)) | ((~x)&(z)));
	    }

	    function f3(x, y, z) {
	        return (((x) | (~(y))) ^ (z));
	    }

	    function f4(x, y, z) {
	        return (((x) & (z)) | ((y)&(~(z))));
	    }

	    function f5(x, y, z) {
	        return ((x) ^ ((y) |(~(z))));

	    }

	    function rotl(x,n) {
	        return (x<<n) | (x>>>(32-n));
	    }


	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.RIPEMD160('message');
	     *     var hash = CryptoJS.RIPEMD160(wordArray);
	     */
	    C.RIPEMD160 = Hasher._createHelper(RIPEMD160);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacRIPEMD160(message, key);
	     */
	    C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
	}(Math));


	return CryptoJS.RIPEMD160;

}));

/***/ }),

/***/ "./node_modules/crypto-js/sha1.js":
/*!****************************************!*\
  !*** ./node_modules/crypto-js/sha1.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-1 hash algorithm.
	     */
	    var SHA1 = C_algo.SHA1 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0x67452301, 0xefcdab89,
	                0x98badcfe, 0x10325476,
	                0xc3d2e1f0
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];

	            // Computation
	            for (var i = 0; i < 80; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
	                    W[i] = (n << 1) | (n >>> 31);
	                }

	                var t = ((a << 5) | (a >>> 27)) + e + W[i];
	                if (i < 20) {
	                    t += ((b & c) | (~b & d)) + 0x5a827999;
	                } else if (i < 40) {
	                    t += (b ^ c ^ d) + 0x6ed9eba1;
	                } else if (i < 60) {
	                    t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;
	                } else /* if (i < 80) */ {
	                    t += (b ^ c ^ d) - 0x359d3e2a;
	                }

	                e = d;
	                d = c;
	                c = (b << 30) | (b >>> 2);
	                b = a;
	                a = t;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA1('message');
	     *     var hash = CryptoJS.SHA1(wordArray);
	     */
	    C.SHA1 = Hasher._createHelper(SHA1);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA1(message, key);
	     */
	    C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
	}());


	return CryptoJS.SHA1;

}));

/***/ }),

/***/ "./node_modules/crypto-js/sha224.js":
/*!******************************************!*\
  !*** ./node_modules/crypto-js/sha224.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./sha256 */ "./node_modules/crypto-js/sha256.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_algo = C.algo;
	    var SHA256 = C_algo.SHA256;

	    /**
	     * SHA-224 hash algorithm.
	     */
	    var SHA224 = C_algo.SHA224 = SHA256.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939,
	                0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4
	            ]);
	        },

	        _doFinalize: function () {
	            var hash = SHA256._doFinalize.call(this);

	            hash.sigBytes -= 4;

	            return hash;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA224('message');
	     *     var hash = CryptoJS.SHA224(wordArray);
	     */
	    C.SHA224 = SHA256._createHelper(SHA224);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA224(message, key);
	     */
	    C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
	}());


	return CryptoJS.SHA224;

}));

/***/ }),

/***/ "./node_modules/crypto-js/sha256.js":
/*!******************************************!*\
  !*** ./node_modules/crypto-js/sha256.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Initialization and round constants tables
	    var H = [];
	    var K = [];

	    // Compute constants
	    (function () {
	        function isPrime(n) {
	            var sqrtN = Math.sqrt(n);
	            for (var factor = 2; factor <= sqrtN; factor++) {
	                if (!(n % factor)) {
	                    return false;
	                }
	            }

	            return true;
	        }

	        function getFractionalBits(n) {
	            return ((n - (n | 0)) * 0x100000000) | 0;
	        }

	        var n = 2;
	        var nPrime = 0;
	        while (nPrime < 64) {
	            if (isPrime(n)) {
	                if (nPrime < 8) {
	                    H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
	                }
	                K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));

	                nPrime++;
	            }

	            n++;
	        }
	    }());

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-256 hash algorithm.
	     */
	    var SHA256 = C_algo.SHA256 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init(H.slice(0));
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];
	            var f = H[5];
	            var g = H[6];
	            var h = H[7];

	            // Computation
	            for (var i = 0; i < 64; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var gamma0x = W[i - 15];
	                    var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^
	                                  ((gamma0x << 14) | (gamma0x >>> 18)) ^
	                                   (gamma0x >>> 3);

	                    var gamma1x = W[i - 2];
	                    var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^
	                                  ((gamma1x << 13) | (gamma1x >>> 19)) ^
	                                   (gamma1x >>> 10);

	                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
	                }

	                var ch  = (e & f) ^ (~e & g);
	                var maj = (a & b) ^ (a & c) ^ (b & c);

	                var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
	                var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));

	                var t1 = h + sigma1 + ch + K[i] + W[i];
	                var t2 = sigma0 + maj;

	                h = g;
	                g = f;
	                f = e;
	                e = (d + t1) | 0;
	                d = c;
	                c = b;
	                b = a;
	                a = (t1 + t2) | 0;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	            H[5] = (H[5] + f) | 0;
	            H[6] = (H[6] + g) | 0;
	            H[7] = (H[7] + h) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA256('message');
	     *     var hash = CryptoJS.SHA256(wordArray);
	     */
	    C.SHA256 = Hasher._createHelper(SHA256);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA256(message, key);
	     */
	    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
	}(Math));


	return CryptoJS.SHA256;

}));

/***/ }),

/***/ "./node_modules/crypto-js/sha3.js":
/*!****************************************!*\
  !*** ./node_modules/crypto-js/sha3.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./x64-core */ "./node_modules/crypto-js/x64-core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_x64 = C.x64;
	    var X64Word = C_x64.Word;
	    var C_algo = C.algo;

	    // Constants tables
	    var RHO_OFFSETS = [];
	    var PI_INDEXES  = [];
	    var ROUND_CONSTANTS = [];

	    // Compute Constants
	    (function () {
	        // Compute rho offset constants
	        var x = 1, y = 0;
	        for (var t = 0; t < 24; t++) {
	            RHO_OFFSETS[x + 5 * y] = ((t + 1) * (t + 2) / 2) % 64;

	            var newX = y % 5;
	            var newY = (2 * x + 3 * y) % 5;
	            x = newX;
	            y = newY;
	        }

	        // Compute pi index constants
	        for (var x = 0; x < 5; x++) {
	            for (var y = 0; y < 5; y++) {
	                PI_INDEXES[x + 5 * y] = y + ((2 * x + 3 * y) % 5) * 5;
	            }
	        }

	        // Compute round constants
	        var LFSR = 0x01;
	        for (var i = 0; i < 24; i++) {
	            var roundConstantMsw = 0;
	            var roundConstantLsw = 0;

	            for (var j = 0; j < 7; j++) {
	                if (LFSR & 0x01) {
	                    var bitPosition = (1 << j) - 1;
	                    if (bitPosition < 32) {
	                        roundConstantLsw ^= 1 << bitPosition;
	                    } else /* if (bitPosition >= 32) */ {
	                        roundConstantMsw ^= 1 << (bitPosition - 32);
	                    }
	                }

	                // Compute next LFSR
	                if (LFSR & 0x80) {
	                    // Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1
	                    LFSR = (LFSR << 1) ^ 0x71;
	                } else {
	                    LFSR <<= 1;
	                }
	            }

	            ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
	        }
	    }());

	    // Reusable objects for temporary values
	    var T = [];
	    (function () {
	        for (var i = 0; i < 25; i++) {
	            T[i] = X64Word.create();
	        }
	    }());

	    /**
	     * SHA-3 hash algorithm.
	     */
	    var SHA3 = C_algo.SHA3 = Hasher.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} outputLength
	         *   The desired number of bits in the output hash.
	         *   Only values permitted are: 224, 256, 384, 512.
	         *   Default: 512
	         */
	        cfg: Hasher.cfg.extend({
	            outputLength: 512
	        }),

	        _doReset: function () {
	            var state = this._state = []
	            for (var i = 0; i < 25; i++) {
	                state[i] = new X64Word.init();
	            }

	            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcuts
	            var state = this._state;
	            var nBlockSizeLanes = this.blockSize / 2;

	            // Absorb
	            for (var i = 0; i < nBlockSizeLanes; i++) {
	                // Shortcuts
	                var M2i  = M[offset + 2 * i];
	                var M2i1 = M[offset + 2 * i + 1];

	                // Swap endian
	                M2i = (
	                    (((M2i << 8)  | (M2i >>> 24)) & 0x00ff00ff) |
	                    (((M2i << 24) | (M2i >>> 8))  & 0xff00ff00)
	                );
	                M2i1 = (
	                    (((M2i1 << 8)  | (M2i1 >>> 24)) & 0x00ff00ff) |
	                    (((M2i1 << 24) | (M2i1 >>> 8))  & 0xff00ff00)
	                );

	                // Absorb message into state
	                var lane = state[i];
	                lane.high ^= M2i1;
	                lane.low  ^= M2i;
	            }

	            // Rounds
	            for (var round = 0; round < 24; round++) {
	                // Theta
	                for (var x = 0; x < 5; x++) {
	                    // Mix column lanes
	                    var tMsw = 0, tLsw = 0;
	                    for (var y = 0; y < 5; y++) {
	                        var lane = state[x + 5 * y];
	                        tMsw ^= lane.high;
	                        tLsw ^= lane.low;
	                    }

	                    // Temporary values
	                    var Tx = T[x];
	                    Tx.high = tMsw;
	                    Tx.low  = tLsw;
	                }
	                for (var x = 0; x < 5; x++) {
	                    // Shortcuts
	                    var Tx4 = T[(x + 4) % 5];
	                    var Tx1 = T[(x + 1) % 5];
	                    var Tx1Msw = Tx1.high;
	                    var Tx1Lsw = Tx1.low;

	                    // Mix surrounding columns
	                    var tMsw = Tx4.high ^ ((Tx1Msw << 1) | (Tx1Lsw >>> 31));
	                    var tLsw = Tx4.low  ^ ((Tx1Lsw << 1) | (Tx1Msw >>> 31));
	                    for (var y = 0; y < 5; y++) {
	                        var lane = state[x + 5 * y];
	                        lane.high ^= tMsw;
	                        lane.low  ^= tLsw;
	                    }
	                }

	                // Rho Pi
	                for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
	                    var tMsw;
	                    var tLsw;

	                    // Shortcuts
	                    var lane = state[laneIndex];
	                    var laneMsw = lane.high;
	                    var laneLsw = lane.low;
	                    var rhoOffset = RHO_OFFSETS[laneIndex];

	                    // Rotate lanes
	                    if (rhoOffset < 32) {
	                        tMsw = (laneMsw << rhoOffset) | (laneLsw >>> (32 - rhoOffset));
	                        tLsw = (laneLsw << rhoOffset) | (laneMsw >>> (32 - rhoOffset));
	                    } else /* if (rhoOffset >= 32) */ {
	                        tMsw = (laneLsw << (rhoOffset - 32)) | (laneMsw >>> (64 - rhoOffset));
	                        tLsw = (laneMsw << (rhoOffset - 32)) | (laneLsw >>> (64 - rhoOffset));
	                    }

	                    // Transpose lanes
	                    var TPiLane = T[PI_INDEXES[laneIndex]];
	                    TPiLane.high = tMsw;
	                    TPiLane.low  = tLsw;
	                }

	                // Rho pi at x = y = 0
	                var T0 = T[0];
	                var state0 = state[0];
	                T0.high = state0.high;
	                T0.low  = state0.low;

	                // Chi
	                for (var x = 0; x < 5; x++) {
	                    for (var y = 0; y < 5; y++) {
	                        // Shortcuts
	                        var laneIndex = x + 5 * y;
	                        var lane = state[laneIndex];
	                        var TLane = T[laneIndex];
	                        var Tx1Lane = T[((x + 1) % 5) + 5 * y];
	                        var Tx2Lane = T[((x + 2) % 5) + 5 * y];

	                        // Mix rows
	                        lane.high = TLane.high ^ (~Tx1Lane.high & Tx2Lane.high);
	                        lane.low  = TLane.low  ^ (~Tx1Lane.low  & Tx2Lane.low);
	                    }
	                }

	                // Iota
	                var lane = state[0];
	                var roundConstant = ROUND_CONSTANTS[round];
	                lane.high ^= roundConstant.high;
	                lane.low  ^= roundConstant.low;
	            }
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;
	            var blockSizeBits = this.blockSize * 32;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x1 << (24 - nBitsLeft % 32);
	            dataWords[((Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits) >>> 5) - 1] |= 0x80;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var state = this._state;
	            var outputLengthBytes = this.cfg.outputLength / 8;
	            var outputLengthLanes = outputLengthBytes / 8;

	            // Squeeze
	            var hashWords = [];
	            for (var i = 0; i < outputLengthLanes; i++) {
	                // Shortcuts
	                var lane = state[i];
	                var laneMsw = lane.high;
	                var laneLsw = lane.low;

	                // Swap endian
	                laneMsw = (
	                    (((laneMsw << 8)  | (laneMsw >>> 24)) & 0x00ff00ff) |
	                    (((laneMsw << 24) | (laneMsw >>> 8))  & 0xff00ff00)
	                );
	                laneLsw = (
	                    (((laneLsw << 8)  | (laneLsw >>> 24)) & 0x00ff00ff) |
	                    (((laneLsw << 24) | (laneLsw >>> 8))  & 0xff00ff00)
	                );

	                // Squeeze state to retrieve hash
	                hashWords.push(laneLsw);
	                hashWords.push(laneMsw);
	            }

	            // Return final computed hash
	            return new WordArray.init(hashWords, outputLengthBytes);
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);

	            var state = clone._state = this._state.slice(0);
	            for (var i = 0; i < 25; i++) {
	                state[i] = state[i].clone();
	            }

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA3('message');
	     *     var hash = CryptoJS.SHA3(wordArray);
	     */
	    C.SHA3 = Hasher._createHelper(SHA3);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA3(message, key);
	     */
	    C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
	}(Math));


	return CryptoJS.SHA3;

}));

/***/ }),

/***/ "./node_modules/crypto-js/sha384.js":
/*!******************************************!*\
  !*** ./node_modules/crypto-js/sha384.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./x64-core */ "./node_modules/crypto-js/x64-core.js"), __webpack_require__(/*! ./sha512 */ "./node_modules/crypto-js/sha512.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_x64 = C.x64;
	    var X64Word = C_x64.Word;
	    var X64WordArray = C_x64.WordArray;
	    var C_algo = C.algo;
	    var SHA512 = C_algo.SHA512;

	    /**
	     * SHA-384 hash algorithm.
	     */
	    var SHA384 = C_algo.SHA384 = SHA512.extend({
	        _doReset: function () {
	            this._hash = new X64WordArray.init([
	                new X64Word.init(0xcbbb9d5d, 0xc1059ed8), new X64Word.init(0x629a292a, 0x367cd507),
	                new X64Word.init(0x9159015a, 0x3070dd17), new X64Word.init(0x152fecd8, 0xf70e5939),
	                new X64Word.init(0x67332667, 0xffc00b31), new X64Word.init(0x8eb44a87, 0x68581511),
	                new X64Word.init(0xdb0c2e0d, 0x64f98fa7), new X64Word.init(0x47b5481d, 0xbefa4fa4)
	            ]);
	        },

	        _doFinalize: function () {
	            var hash = SHA512._doFinalize.call(this);

	            hash.sigBytes -= 16;

	            return hash;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA384('message');
	     *     var hash = CryptoJS.SHA384(wordArray);
	     */
	    C.SHA384 = SHA512._createHelper(SHA384);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA384(message, key);
	     */
	    C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
	}());


	return CryptoJS.SHA384;

}));

/***/ }),

/***/ "./node_modules/crypto-js/sha512.js":
/*!******************************************!*\
  !*** ./node_modules/crypto-js/sha512.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./x64-core */ "./node_modules/crypto-js/x64-core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Hasher = C_lib.Hasher;
	    var C_x64 = C.x64;
	    var X64Word = C_x64.Word;
	    var X64WordArray = C_x64.WordArray;
	    var C_algo = C.algo;

	    function X64Word_create() {
	        return X64Word.create.apply(X64Word, arguments);
	    }

	    // Constants
	    var K = [
	        X64Word_create(0x428a2f98, 0xd728ae22), X64Word_create(0x71374491, 0x23ef65cd),
	        X64Word_create(0xb5c0fbcf, 0xec4d3b2f), X64Word_create(0xe9b5dba5, 0x8189dbbc),
	        X64Word_create(0x3956c25b, 0xf348b538), X64Word_create(0x59f111f1, 0xb605d019),
	        X64Word_create(0x923f82a4, 0xaf194f9b), X64Word_create(0xab1c5ed5, 0xda6d8118),
	        X64Word_create(0xd807aa98, 0xa3030242), X64Word_create(0x12835b01, 0x45706fbe),
	        X64Word_create(0x243185be, 0x4ee4b28c), X64Word_create(0x550c7dc3, 0xd5ffb4e2),
	        X64Word_create(0x72be5d74, 0xf27b896f), X64Word_create(0x80deb1fe, 0x3b1696b1),
	        X64Word_create(0x9bdc06a7, 0x25c71235), X64Word_create(0xc19bf174, 0xcf692694),
	        X64Word_create(0xe49b69c1, 0x9ef14ad2), X64Word_create(0xefbe4786, 0x384f25e3),
	        X64Word_create(0x0fc19dc6, 0x8b8cd5b5), X64Word_create(0x240ca1cc, 0x77ac9c65),
	        X64Word_create(0x2de92c6f, 0x592b0275), X64Word_create(0x4a7484aa, 0x6ea6e483),
	        X64Word_create(0x5cb0a9dc, 0xbd41fbd4), X64Word_create(0x76f988da, 0x831153b5),
	        X64Word_create(0x983e5152, 0xee66dfab), X64Word_create(0xa831c66d, 0x2db43210),
	        X64Word_create(0xb00327c8, 0x98fb213f), X64Word_create(0xbf597fc7, 0xbeef0ee4),
	        X64Word_create(0xc6e00bf3, 0x3da88fc2), X64Word_create(0xd5a79147, 0x930aa725),
	        X64Word_create(0x06ca6351, 0xe003826f), X64Word_create(0x14292967, 0x0a0e6e70),
	        X64Word_create(0x27b70a85, 0x46d22ffc), X64Word_create(0x2e1b2138, 0x5c26c926),
	        X64Word_create(0x4d2c6dfc, 0x5ac42aed), X64Word_create(0x53380d13, 0x9d95b3df),
	        X64Word_create(0x650a7354, 0x8baf63de), X64Word_create(0x766a0abb, 0x3c77b2a8),
	        X64Word_create(0x81c2c92e, 0x47edaee6), X64Word_create(0x92722c85, 0x1482353b),
	        X64Word_create(0xa2bfe8a1, 0x4cf10364), X64Word_create(0xa81a664b, 0xbc423001),
	        X64Word_create(0xc24b8b70, 0xd0f89791), X64Word_create(0xc76c51a3, 0x0654be30),
	        X64Word_create(0xd192e819, 0xd6ef5218), X64Word_create(0xd6990624, 0x5565a910),
	        X64Word_create(0xf40e3585, 0x5771202a), X64Word_create(0x106aa070, 0x32bbd1b8),
	        X64Word_create(0x19a4c116, 0xb8d2d0c8), X64Word_create(0x1e376c08, 0x5141ab53),
	        X64Word_create(0x2748774c, 0xdf8eeb99), X64Word_create(0x34b0bcb5, 0xe19b48a8),
	        X64Word_create(0x391c0cb3, 0xc5c95a63), X64Word_create(0x4ed8aa4a, 0xe3418acb),
	        X64Word_create(0x5b9cca4f, 0x7763e373), X64Word_create(0x682e6ff3, 0xd6b2b8a3),
	        X64Word_create(0x748f82ee, 0x5defb2fc), X64Word_create(0x78a5636f, 0x43172f60),
	        X64Word_create(0x84c87814, 0xa1f0ab72), X64Word_create(0x8cc70208, 0x1a6439ec),
	        X64Word_create(0x90befffa, 0x23631e28), X64Word_create(0xa4506ceb, 0xde82bde9),
	        X64Word_create(0xbef9a3f7, 0xb2c67915), X64Word_create(0xc67178f2, 0xe372532b),
	        X64Word_create(0xca273ece, 0xea26619c), X64Word_create(0xd186b8c7, 0x21c0c207),
	        X64Word_create(0xeada7dd6, 0xcde0eb1e), X64Word_create(0xf57d4f7f, 0xee6ed178),
	        X64Word_create(0x06f067aa, 0x72176fba), X64Word_create(0x0a637dc5, 0xa2c898a6),
	        X64Word_create(0x113f9804, 0xbef90dae), X64Word_create(0x1b710b35, 0x131c471b),
	        X64Word_create(0x28db77f5, 0x23047d84), X64Word_create(0x32caab7b, 0x40c72493),
	        X64Word_create(0x3c9ebe0a, 0x15c9bebc), X64Word_create(0x431d67c4, 0x9c100d4c),
	        X64Word_create(0x4cc5d4be, 0xcb3e42b6), X64Word_create(0x597f299c, 0xfc657e2a),
	        X64Word_create(0x5fcb6fab, 0x3ad6faec), X64Word_create(0x6c44198c, 0x4a475817)
	    ];

	    // Reusable objects
	    var W = [];
	    (function () {
	        for (var i = 0; i < 80; i++) {
	            W[i] = X64Word_create();
	        }
	    }());

	    /**
	     * SHA-512 hash algorithm.
	     */
	    var SHA512 = C_algo.SHA512 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new X64WordArray.init([
	                new X64Word.init(0x6a09e667, 0xf3bcc908), new X64Word.init(0xbb67ae85, 0x84caa73b),
	                new X64Word.init(0x3c6ef372, 0xfe94f82b), new X64Word.init(0xa54ff53a, 0x5f1d36f1),
	                new X64Word.init(0x510e527f, 0xade682d1), new X64Word.init(0x9b05688c, 0x2b3e6c1f),
	                new X64Word.init(0x1f83d9ab, 0xfb41bd6b), new X64Word.init(0x5be0cd19, 0x137e2179)
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcuts
	            var H = this._hash.words;

	            var H0 = H[0];
	            var H1 = H[1];
	            var H2 = H[2];
	            var H3 = H[3];
	            var H4 = H[4];
	            var H5 = H[5];
	            var H6 = H[6];
	            var H7 = H[7];

	            var H0h = H0.high;
	            var H0l = H0.low;
	            var H1h = H1.high;
	            var H1l = H1.low;
	            var H2h = H2.high;
	            var H2l = H2.low;
	            var H3h = H3.high;
	            var H3l = H3.low;
	            var H4h = H4.high;
	            var H4l = H4.low;
	            var H5h = H5.high;
	            var H5l = H5.low;
	            var H6h = H6.high;
	            var H6l = H6.low;
	            var H7h = H7.high;
	            var H7l = H7.low;

	            // Working variables
	            var ah = H0h;
	            var al = H0l;
	            var bh = H1h;
	            var bl = H1l;
	            var ch = H2h;
	            var cl = H2l;
	            var dh = H3h;
	            var dl = H3l;
	            var eh = H4h;
	            var el = H4l;
	            var fh = H5h;
	            var fl = H5l;
	            var gh = H6h;
	            var gl = H6l;
	            var hh = H7h;
	            var hl = H7l;

	            // Rounds
	            for (var i = 0; i < 80; i++) {
	                var Wil;
	                var Wih;

	                // Shortcut
	                var Wi = W[i];

	                // Extend message
	                if (i < 16) {
	                    Wih = Wi.high = M[offset + i * 2]     | 0;
	                    Wil = Wi.low  = M[offset + i * 2 + 1] | 0;
	                } else {
	                    // Gamma0
	                    var gamma0x  = W[i - 15];
	                    var gamma0xh = gamma0x.high;
	                    var gamma0xl = gamma0x.low;
	                    var gamma0h  = ((gamma0xh >>> 1) | (gamma0xl << 31)) ^ ((gamma0xh >>> 8) | (gamma0xl << 24)) ^ (gamma0xh >>> 7);
	                    var gamma0l  = ((gamma0xl >>> 1) | (gamma0xh << 31)) ^ ((gamma0xl >>> 8) | (gamma0xh << 24)) ^ ((gamma0xl >>> 7) | (gamma0xh << 25));

	                    // Gamma1
	                    var gamma1x  = W[i - 2];
	                    var gamma1xh = gamma1x.high;
	                    var gamma1xl = gamma1x.low;
	                    var gamma1h  = ((gamma1xh >>> 19) | (gamma1xl << 13)) ^ ((gamma1xh << 3) | (gamma1xl >>> 29)) ^ (gamma1xh >>> 6);
	                    var gamma1l  = ((gamma1xl >>> 19) | (gamma1xh << 13)) ^ ((gamma1xl << 3) | (gamma1xh >>> 29)) ^ ((gamma1xl >>> 6) | (gamma1xh << 26));

	                    // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
	                    var Wi7  = W[i - 7];
	                    var Wi7h = Wi7.high;
	                    var Wi7l = Wi7.low;

	                    var Wi16  = W[i - 16];
	                    var Wi16h = Wi16.high;
	                    var Wi16l = Wi16.low;

	                    Wil = gamma0l + Wi7l;
	                    Wih = gamma0h + Wi7h + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0);
	                    Wil = Wil + gamma1l;
	                    Wih = Wih + gamma1h + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0);
	                    Wil = Wil + Wi16l;
	                    Wih = Wih + Wi16h + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0);

	                    Wi.high = Wih;
	                    Wi.low  = Wil;
	                }

	                var chh  = (eh & fh) ^ (~eh & gh);
	                var chl  = (el & fl) ^ (~el & gl);
	                var majh = (ah & bh) ^ (ah & ch) ^ (bh & ch);
	                var majl = (al & bl) ^ (al & cl) ^ (bl & cl);

	                var sigma0h = ((ah >>> 28) | (al << 4))  ^ ((ah << 30)  | (al >>> 2)) ^ ((ah << 25) | (al >>> 7));
	                var sigma0l = ((al >>> 28) | (ah << 4))  ^ ((al << 30)  | (ah >>> 2)) ^ ((al << 25) | (ah >>> 7));
	                var sigma1h = ((eh >>> 14) | (el << 18)) ^ ((eh >>> 18) | (el << 14)) ^ ((eh << 23) | (el >>> 9));
	                var sigma1l = ((el >>> 14) | (eh << 18)) ^ ((el >>> 18) | (eh << 14)) ^ ((el << 23) | (eh >>> 9));

	                // t1 = h + sigma1 + ch + K[i] + W[i]
	                var Ki  = K[i];
	                var Kih = Ki.high;
	                var Kil = Ki.low;

	                var t1l = hl + sigma1l;
	                var t1h = hh + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0);
	                var t1l = t1l + chl;
	                var t1h = t1h + chh + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0);
	                var t1l = t1l + Kil;
	                var t1h = t1h + Kih + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0);
	                var t1l = t1l + Wil;
	                var t1h = t1h + Wih + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0);

	                // t2 = sigma0 + maj
	                var t2l = sigma0l + majl;
	                var t2h = sigma0h + majh + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0);

	                // Update working variables
	                hh = gh;
	                hl = gl;
	                gh = fh;
	                gl = fl;
	                fh = eh;
	                fl = el;
	                el = (dl + t1l) | 0;
	                eh = (dh + t1h + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0;
	                dh = ch;
	                dl = cl;
	                ch = bh;
	                cl = bl;
	                bh = ah;
	                bl = al;
	                al = (t1l + t2l) | 0;
	                ah = (t1h + t2h + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0;
	            }

	            // Intermediate hash value
	            H0l = H0.low  = (H0l + al);
	            H0.high = (H0h + ah + ((H0l >>> 0) < (al >>> 0) ? 1 : 0));
	            H1l = H1.low  = (H1l + bl);
	            H1.high = (H1h + bh + ((H1l >>> 0) < (bl >>> 0) ? 1 : 0));
	            H2l = H2.low  = (H2l + cl);
	            H2.high = (H2h + ch + ((H2l >>> 0) < (cl >>> 0) ? 1 : 0));
	            H3l = H3.low  = (H3l + dl);
	            H3.high = (H3h + dh + ((H3l >>> 0) < (dl >>> 0) ? 1 : 0));
	            H4l = H4.low  = (H4l + el);
	            H4.high = (H4h + eh + ((H4l >>> 0) < (el >>> 0) ? 1 : 0));
	            H5l = H5.low  = (H5l + fl);
	            H5.high = (H5h + fh + ((H5l >>> 0) < (fl >>> 0) ? 1 : 0));
	            H6l = H6.low  = (H6l + gl);
	            H6.high = (H6h + gh + ((H6l >>> 0) < (gl >>> 0) ? 1 : 0));
	            H7l = H7.low  = (H7l + hl);
	            H7.high = (H7h + hh + ((H7l >>> 0) < (hl >>> 0) ? 1 : 0));
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 31] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Convert hash to 32-bit word array before returning
	            var hash = this._hash.toX32();

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        },

	        blockSize: 1024/32
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA512('message');
	     *     var hash = CryptoJS.SHA512(wordArray);
	     */
	    C.SHA512 = Hasher._createHelper(SHA512);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA512(message, key);
	     */
	    C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
	}());


	return CryptoJS.SHA512;

}));

/***/ }),

/***/ "./node_modules/crypto-js/tripledes.js":
/*!*********************************************!*\
  !*** ./node_modules/crypto-js/tripledes.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./enc-base64 */ "./node_modules/crypto-js/enc-base64.js"), __webpack_require__(/*! ./md5 */ "./node_modules/crypto-js/md5.js"), __webpack_require__(/*! ./evpkdf */ "./node_modules/crypto-js/evpkdf.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var BlockCipher = C_lib.BlockCipher;
	    var C_algo = C.algo;

	    // Permuted Choice 1 constants
	    var PC1 = [
	        57, 49, 41, 33, 25, 17, 9,  1,
	        58, 50, 42, 34, 26, 18, 10, 2,
	        59, 51, 43, 35, 27, 19, 11, 3,
	        60, 52, 44, 36, 63, 55, 47, 39,
	        31, 23, 15, 7,  62, 54, 46, 38,
	        30, 22, 14, 6,  61, 53, 45, 37,
	        29, 21, 13, 5,  28, 20, 12, 4
	    ];

	    // Permuted Choice 2 constants
	    var PC2 = [
	        14, 17, 11, 24, 1,  5,
	        3,  28, 15, 6,  21, 10,
	        23, 19, 12, 4,  26, 8,
	        16, 7,  27, 20, 13, 2,
	        41, 52, 31, 37, 47, 55,
	        30, 40, 51, 45, 33, 48,
	        44, 49, 39, 56, 34, 53,
	        46, 42, 50, 36, 29, 32
	    ];

	    // Cumulative bit shift constants
	    var BIT_SHIFTS = [1,  2,  4,  6,  8,  10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];

	    // SBOXes and round permutation constants
	    var SBOX_P = [
	        {
	            0x0: 0x808200,
	            0x10000000: 0x8000,
	            0x20000000: 0x808002,
	            0x30000000: 0x2,
	            0x40000000: 0x200,
	            0x50000000: 0x808202,
	            0x60000000: 0x800202,
	            0x70000000: 0x800000,
	            0x80000000: 0x202,
	            0x90000000: 0x800200,
	            0xa0000000: 0x8200,
	            0xb0000000: 0x808000,
	            0xc0000000: 0x8002,
	            0xd0000000: 0x800002,
	            0xe0000000: 0x0,
	            0xf0000000: 0x8202,
	            0x8000000: 0x0,
	            0x18000000: 0x808202,
	            0x28000000: 0x8202,
	            0x38000000: 0x8000,
	            0x48000000: 0x808200,
	            0x58000000: 0x200,
	            0x68000000: 0x808002,
	            0x78000000: 0x2,
	            0x88000000: 0x800200,
	            0x98000000: 0x8200,
	            0xa8000000: 0x808000,
	            0xb8000000: 0x800202,
	            0xc8000000: 0x800002,
	            0xd8000000: 0x8002,
	            0xe8000000: 0x202,
	            0xf8000000: 0x800000,
	            0x1: 0x8000,
	            0x10000001: 0x2,
	            0x20000001: 0x808200,
	            0x30000001: 0x800000,
	            0x40000001: 0x808002,
	            0x50000001: 0x8200,
	            0x60000001: 0x200,
	            0x70000001: 0x800202,
	            0x80000001: 0x808202,
	            0x90000001: 0x808000,
	            0xa0000001: 0x800002,
	            0xb0000001: 0x8202,
	            0xc0000001: 0x202,
	            0xd0000001: 0x800200,
	            0xe0000001: 0x8002,
	            0xf0000001: 0x0,
	            0x8000001: 0x808202,
	            0x18000001: 0x808000,
	            0x28000001: 0x800000,
	            0x38000001: 0x200,
	            0x48000001: 0x8000,
	            0x58000001: 0x800002,
	            0x68000001: 0x2,
	            0x78000001: 0x8202,
	            0x88000001: 0x8002,
	            0x98000001: 0x800202,
	            0xa8000001: 0x202,
	            0xb8000001: 0x808200,
	            0xc8000001: 0x800200,
	            0xd8000001: 0x0,
	            0xe8000001: 0x8200,
	            0xf8000001: 0x808002
	        },
	        {
	            0x0: 0x40084010,
	            0x1000000: 0x4000,
	            0x2000000: 0x80000,
	            0x3000000: 0x40080010,
	            0x4000000: 0x40000010,
	            0x5000000: 0x40084000,
	            0x6000000: 0x40004000,
	            0x7000000: 0x10,
	            0x8000000: 0x84000,
	            0x9000000: 0x40004010,
	            0xa000000: 0x40000000,
	            0xb000000: 0x84010,
	            0xc000000: 0x80010,
	            0xd000000: 0x0,
	            0xe000000: 0x4010,
	            0xf000000: 0x40080000,
	            0x800000: 0x40004000,
	            0x1800000: 0x84010,
	            0x2800000: 0x10,
	            0x3800000: 0x40004010,
	            0x4800000: 0x40084010,
	            0x5800000: 0x40000000,
	            0x6800000: 0x80000,
	            0x7800000: 0x40080010,
	            0x8800000: 0x80010,
	            0x9800000: 0x0,
	            0xa800000: 0x4000,
	            0xb800000: 0x40080000,
	            0xc800000: 0x40000010,
	            0xd800000: 0x84000,
	            0xe800000: 0x40084000,
	            0xf800000: 0x4010,
	            0x10000000: 0x0,
	            0x11000000: 0x40080010,
	            0x12000000: 0x40004010,
	            0x13000000: 0x40084000,
	            0x14000000: 0x40080000,
	            0x15000000: 0x10,
	            0x16000000: 0x84010,
	            0x17000000: 0x4000,
	            0x18000000: 0x4010,
	            0x19000000: 0x80000,
	            0x1a000000: 0x80010,
	            0x1b000000: 0x40000010,
	            0x1c000000: 0x84000,
	            0x1d000000: 0x40004000,
	            0x1e000000: 0x40000000,
	            0x1f000000: 0x40084010,
	            0x10800000: 0x84010,
	            0x11800000: 0x80000,
	            0x12800000: 0x40080000,
	            0x13800000: 0x4000,
	            0x14800000: 0x40004000,
	            0x15800000: 0x40084010,
	            0x16800000: 0x10,
	            0x17800000: 0x40000000,
	            0x18800000: 0x40084000,
	            0x19800000: 0x40000010,
	            0x1a800000: 0x40004010,
	            0x1b800000: 0x80010,
	            0x1c800000: 0x0,
	            0x1d800000: 0x4010,
	            0x1e800000: 0x40080010,
	            0x1f800000: 0x84000
	        },
	        {
	            0x0: 0x104,
	            0x100000: 0x0,
	            0x200000: 0x4000100,
	            0x300000: 0x10104,
	            0x400000: 0x10004,
	            0x500000: 0x4000004,
	            0x600000: 0x4010104,
	            0x700000: 0x4010000,
	            0x800000: 0x4000000,
	            0x900000: 0x4010100,
	            0xa00000: 0x10100,
	            0xb00000: 0x4010004,
	            0xc00000: 0x4000104,
	            0xd00000: 0x10000,
	            0xe00000: 0x4,
	            0xf00000: 0x100,
	            0x80000: 0x4010100,
	            0x180000: 0x4010004,
	            0x280000: 0x0,
	            0x380000: 0x4000100,
	            0x480000: 0x4000004,
	            0x580000: 0x10000,
	            0x680000: 0x10004,
	            0x780000: 0x104,
	            0x880000: 0x4,
	            0x980000: 0x100,
	            0xa80000: 0x4010000,
	            0xb80000: 0x10104,
	            0xc80000: 0x10100,
	            0xd80000: 0x4000104,
	            0xe80000: 0x4010104,
	            0xf80000: 0x4000000,
	            0x1000000: 0x4010100,
	            0x1100000: 0x10004,
	            0x1200000: 0x10000,
	            0x1300000: 0x4000100,
	            0x1400000: 0x100,
	            0x1500000: 0x4010104,
	            0x1600000: 0x4000004,
	            0x1700000: 0x0,
	            0x1800000: 0x4000104,
	            0x1900000: 0x4000000,
	            0x1a00000: 0x4,
	            0x1b00000: 0x10100,
	            0x1c00000: 0x4010000,
	            0x1d00000: 0x104,
	            0x1e00000: 0x10104,
	            0x1f00000: 0x4010004,
	            0x1080000: 0x4000000,
	            0x1180000: 0x104,
	            0x1280000: 0x4010100,
	            0x1380000: 0x0,
	            0x1480000: 0x10004,
	            0x1580000: 0x4000100,
	            0x1680000: 0x100,
	            0x1780000: 0x4010004,
	            0x1880000: 0x10000,
	            0x1980000: 0x4010104,
	            0x1a80000: 0x10104,
	            0x1b80000: 0x4000004,
	            0x1c80000: 0x4000104,
	            0x1d80000: 0x4010000,
	            0x1e80000: 0x4,
	            0x1f80000: 0x10100
	        },
	        {
	            0x0: 0x80401000,
	            0x10000: 0x80001040,
	            0x20000: 0x401040,
	            0x30000: 0x80400000,
	            0x40000: 0x0,
	            0x50000: 0x401000,
	            0x60000: 0x80000040,
	            0x70000: 0x400040,
	            0x80000: 0x80000000,
	            0x90000: 0x400000,
	            0xa0000: 0x40,
	            0xb0000: 0x80001000,
	            0xc0000: 0x80400040,
	            0xd0000: 0x1040,
	            0xe0000: 0x1000,
	            0xf0000: 0x80401040,
	            0x8000: 0x80001040,
	            0x18000: 0x40,
	            0x28000: 0x80400040,
	            0x38000: 0x80001000,
	            0x48000: 0x401000,
	            0x58000: 0x80401040,
	            0x68000: 0x0,
	            0x78000: 0x80400000,
	            0x88000: 0x1000,
	            0x98000: 0x80401000,
	            0xa8000: 0x400000,
	            0xb8000: 0x1040,
	            0xc8000: 0x80000000,
	            0xd8000: 0x400040,
	            0xe8000: 0x401040,
	            0xf8000: 0x80000040,
	            0x100000: 0x400040,
	            0x110000: 0x401000,
	            0x120000: 0x80000040,
	            0x130000: 0x0,
	            0x140000: 0x1040,
	            0x150000: 0x80400040,
	            0x160000: 0x80401000,
	            0x170000: 0x80001040,
	            0x180000: 0x80401040,
	            0x190000: 0x80000000,
	            0x1a0000: 0x80400000,
	            0x1b0000: 0x401040,
	            0x1c0000: 0x80001000,
	            0x1d0000: 0x400000,
	            0x1e0000: 0x40,
	            0x1f0000: 0x1000,
	            0x108000: 0x80400000,
	            0x118000: 0x80401040,
	            0x128000: 0x0,
	            0x138000: 0x401000,
	            0x148000: 0x400040,
	            0x158000: 0x80000000,
	            0x168000: 0x80001040,
	            0x178000: 0x40,
	            0x188000: 0x80000040,
	            0x198000: 0x1000,
	            0x1a8000: 0x80001000,
	            0x1b8000: 0x80400040,
	            0x1c8000: 0x1040,
	            0x1d8000: 0x80401000,
	            0x1e8000: 0x400000,
	            0x1f8000: 0x401040
	        },
	        {
	            0x0: 0x80,
	            0x1000: 0x1040000,
	            0x2000: 0x40000,
	            0x3000: 0x20000000,
	            0x4000: 0x20040080,
	            0x5000: 0x1000080,
	            0x6000: 0x21000080,
	            0x7000: 0x40080,
	            0x8000: 0x1000000,
	            0x9000: 0x20040000,
	            0xa000: 0x20000080,
	            0xb000: 0x21040080,
	            0xc000: 0x21040000,
	            0xd000: 0x0,
	            0xe000: 0x1040080,
	            0xf000: 0x21000000,
	            0x800: 0x1040080,
	            0x1800: 0x21000080,
	            0x2800: 0x80,
	            0x3800: 0x1040000,
	            0x4800: 0x40000,
	            0x5800: 0x20040080,
	            0x6800: 0x21040000,
	            0x7800: 0x20000000,
	            0x8800: 0x20040000,
	            0x9800: 0x0,
	            0xa800: 0x21040080,
	            0xb800: 0x1000080,
	            0xc800: 0x20000080,
	            0xd800: 0x21000000,
	            0xe800: 0x1000000,
	            0xf800: 0x40080,
	            0x10000: 0x40000,
	            0x11000: 0x80,
	            0x12000: 0x20000000,
	            0x13000: 0x21000080,
	            0x14000: 0x1000080,
	            0x15000: 0x21040000,
	            0x16000: 0x20040080,
	            0x17000: 0x1000000,
	            0x18000: 0x21040080,
	            0x19000: 0x21000000,
	            0x1a000: 0x1040000,
	            0x1b000: 0x20040000,
	            0x1c000: 0x40080,
	            0x1d000: 0x20000080,
	            0x1e000: 0x0,
	            0x1f000: 0x1040080,
	            0x10800: 0x21000080,
	            0x11800: 0x1000000,
	            0x12800: 0x1040000,
	            0x13800: 0x20040080,
	            0x14800: 0x20000000,
	            0x15800: 0x1040080,
	            0x16800: 0x80,
	            0x17800: 0x21040000,
	            0x18800: 0x40080,
	            0x19800: 0x21040080,
	            0x1a800: 0x0,
	            0x1b800: 0x21000000,
	            0x1c800: 0x1000080,
	            0x1d800: 0x40000,
	            0x1e800: 0x20040000,
	            0x1f800: 0x20000080
	        },
	        {
	            0x0: 0x10000008,
	            0x100: 0x2000,
	            0x200: 0x10200000,
	            0x300: 0x10202008,
	            0x400: 0x10002000,
	            0x500: 0x200000,
	            0x600: 0x200008,
	            0x700: 0x10000000,
	            0x800: 0x0,
	            0x900: 0x10002008,
	            0xa00: 0x202000,
	            0xb00: 0x8,
	            0xc00: 0x10200008,
	            0xd00: 0x202008,
	            0xe00: 0x2008,
	            0xf00: 0x10202000,
	            0x80: 0x10200000,
	            0x180: 0x10202008,
	            0x280: 0x8,
	            0x380: 0x200000,
	            0x480: 0x202008,
	            0x580: 0x10000008,
	            0x680: 0x10002000,
	            0x780: 0x2008,
	            0x880: 0x200008,
	            0x980: 0x2000,
	            0xa80: 0x10002008,
	            0xb80: 0x10200008,
	            0xc80: 0x0,
	            0xd80: 0x10202000,
	            0xe80: 0x202000,
	            0xf80: 0x10000000,
	            0x1000: 0x10002000,
	            0x1100: 0x10200008,
	            0x1200: 0x10202008,
	            0x1300: 0x2008,
	            0x1400: 0x200000,
	            0x1500: 0x10000000,
	            0x1600: 0x10000008,
	            0x1700: 0x202000,
	            0x1800: 0x202008,
	            0x1900: 0x0,
	            0x1a00: 0x8,
	            0x1b00: 0x10200000,
	            0x1c00: 0x2000,
	            0x1d00: 0x10002008,
	            0x1e00: 0x10202000,
	            0x1f00: 0x200008,
	            0x1080: 0x8,
	            0x1180: 0x202000,
	            0x1280: 0x200000,
	            0x1380: 0x10000008,
	            0x1480: 0x10002000,
	            0x1580: 0x2008,
	            0x1680: 0x10202008,
	            0x1780: 0x10200000,
	            0x1880: 0x10202000,
	            0x1980: 0x10200008,
	            0x1a80: 0x2000,
	            0x1b80: 0x202008,
	            0x1c80: 0x200008,
	            0x1d80: 0x0,
	            0x1e80: 0x10000000,
	            0x1f80: 0x10002008
	        },
	        {
	            0x0: 0x100000,
	            0x10: 0x2000401,
	            0x20: 0x400,
	            0x30: 0x100401,
	            0x40: 0x2100401,
	            0x50: 0x0,
	            0x60: 0x1,
	            0x70: 0x2100001,
	            0x80: 0x2000400,
	            0x90: 0x100001,
	            0xa0: 0x2000001,
	            0xb0: 0x2100400,
	            0xc0: 0x2100000,
	            0xd0: 0x401,
	            0xe0: 0x100400,
	            0xf0: 0x2000000,
	            0x8: 0x2100001,
	            0x18: 0x0,
	            0x28: 0x2000401,
	            0x38: 0x2100400,
	            0x48: 0x100000,
	            0x58: 0x2000001,
	            0x68: 0x2000000,
	            0x78: 0x401,
	            0x88: 0x100401,
	            0x98: 0x2000400,
	            0xa8: 0x2100000,
	            0xb8: 0x100001,
	            0xc8: 0x400,
	            0xd8: 0x2100401,
	            0xe8: 0x1,
	            0xf8: 0x100400,
	            0x100: 0x2000000,
	            0x110: 0x100000,
	            0x120: 0x2000401,
	            0x130: 0x2100001,
	            0x140: 0x100001,
	            0x150: 0x2000400,
	            0x160: 0x2100400,
	            0x170: 0x100401,
	            0x180: 0x401,
	            0x190: 0x2100401,
	            0x1a0: 0x100400,
	            0x1b0: 0x1,
	            0x1c0: 0x0,
	            0x1d0: 0x2100000,
	            0x1e0: 0x2000001,
	            0x1f0: 0x400,
	            0x108: 0x100400,
	            0x118: 0x2000401,
	            0x128: 0x2100001,
	            0x138: 0x1,
	            0x148: 0x2000000,
	            0x158: 0x100000,
	            0x168: 0x401,
	            0x178: 0x2100400,
	            0x188: 0x2000001,
	            0x198: 0x2100000,
	            0x1a8: 0x0,
	            0x1b8: 0x2100401,
	            0x1c8: 0x100401,
	            0x1d8: 0x400,
	            0x1e8: 0x2000400,
	            0x1f8: 0x100001
	        },
	        {
	            0x0: 0x8000820,
	            0x1: 0x20000,
	            0x2: 0x8000000,
	            0x3: 0x20,
	            0x4: 0x20020,
	            0x5: 0x8020820,
	            0x6: 0x8020800,
	            0x7: 0x800,
	            0x8: 0x8020000,
	            0x9: 0x8000800,
	            0xa: 0x20800,
	            0xb: 0x8020020,
	            0xc: 0x820,
	            0xd: 0x0,
	            0xe: 0x8000020,
	            0xf: 0x20820,
	            0x80000000: 0x800,
	            0x80000001: 0x8020820,
	            0x80000002: 0x8000820,
	            0x80000003: 0x8000000,
	            0x80000004: 0x8020000,
	            0x80000005: 0x20800,
	            0x80000006: 0x20820,
	            0x80000007: 0x20,
	            0x80000008: 0x8000020,
	            0x80000009: 0x820,
	            0x8000000a: 0x20020,
	            0x8000000b: 0x8020800,
	            0x8000000c: 0x0,
	            0x8000000d: 0x8020020,
	            0x8000000e: 0x8000800,
	            0x8000000f: 0x20000,
	            0x10: 0x20820,
	            0x11: 0x8020800,
	            0x12: 0x20,
	            0x13: 0x800,
	            0x14: 0x8000800,
	            0x15: 0x8000020,
	            0x16: 0x8020020,
	            0x17: 0x20000,
	            0x18: 0x0,
	            0x19: 0x20020,
	            0x1a: 0x8020000,
	            0x1b: 0x8000820,
	            0x1c: 0x8020820,
	            0x1d: 0x20800,
	            0x1e: 0x820,
	            0x1f: 0x8000000,
	            0x80000010: 0x20000,
	            0x80000011: 0x800,
	            0x80000012: 0x8020020,
	            0x80000013: 0x20820,
	            0x80000014: 0x20,
	            0x80000015: 0x8020000,
	            0x80000016: 0x8000000,
	            0x80000017: 0x8000820,
	            0x80000018: 0x8020820,
	            0x80000019: 0x8000020,
	            0x8000001a: 0x8000800,
	            0x8000001b: 0x0,
	            0x8000001c: 0x20800,
	            0x8000001d: 0x820,
	            0x8000001e: 0x20020,
	            0x8000001f: 0x8020800
	        }
	    ];

	    // Masks that select the SBOX input
	    var SBOX_MASK = [
	        0xf8000001, 0x1f800000, 0x01f80000, 0x001f8000,
	        0x0001f800, 0x00001f80, 0x000001f8, 0x8000001f
	    ];

	    /**
	     * DES block cipher algorithm.
	     */
	    var DES = C_algo.DES = BlockCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var key = this._key;
	            var keyWords = key.words;

	            // Select 56 bits according to PC1
	            var keyBits = [];
	            for (var i = 0; i < 56; i++) {
	                var keyBitPos = PC1[i] - 1;
	                keyBits[i] = (keyWords[keyBitPos >>> 5] >>> (31 - keyBitPos % 32)) & 1;
	            }

	            // Assemble 16 subkeys
	            var subKeys = this._subKeys = [];
	            for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
	                // Create subkey
	                var subKey = subKeys[nSubKey] = [];

	                // Shortcut
	                var bitShift = BIT_SHIFTS[nSubKey];

	                // Select 48 bits according to PC2
	                for (var i = 0; i < 24; i++) {
	                    // Select from the left 28 key bits
	                    subKey[(i / 6) | 0] |= keyBits[((PC2[i] - 1) + bitShift) % 28] << (31 - i % 6);

	                    // Select from the right 28 key bits
	                    subKey[4 + ((i / 6) | 0)] |= keyBits[28 + (((PC2[i + 24] - 1) + bitShift) % 28)] << (31 - i % 6);
	                }

	                // Since each subkey is applied to an expanded 32-bit input,
	                // the subkey can be broken into 8 values scaled to 32-bits,
	                // which allows the key to be used without expansion
	                subKey[0] = (subKey[0] << 1) | (subKey[0] >>> 31);
	                for (var i = 1; i < 7; i++) {
	                    subKey[i] = subKey[i] >>> ((i - 1) * 4 + 3);
	                }
	                subKey[7] = (subKey[7] << 5) | (subKey[7] >>> 27);
	            }

	            // Compute inverse subkeys
	            var invSubKeys = this._invSubKeys = [];
	            for (var i = 0; i < 16; i++) {
	                invSubKeys[i] = subKeys[15 - i];
	            }
	        },

	        encryptBlock: function (M, offset) {
	            this._doCryptBlock(M, offset, this._subKeys);
	        },

	        decryptBlock: function (M, offset) {
	            this._doCryptBlock(M, offset, this._invSubKeys);
	        },

	        _doCryptBlock: function (M, offset, subKeys) {
	            // Get input
	            this._lBlock = M[offset];
	            this._rBlock = M[offset + 1];

	            // Initial permutation
	            exchangeLR.call(this, 4,  0x0f0f0f0f);
	            exchangeLR.call(this, 16, 0x0000ffff);
	            exchangeRL.call(this, 2,  0x33333333);
	            exchangeRL.call(this, 8,  0x00ff00ff);
	            exchangeLR.call(this, 1,  0x55555555);

	            // Rounds
	            for (var round = 0; round < 16; round++) {
	                // Shortcuts
	                var subKey = subKeys[round];
	                var lBlock = this._lBlock;
	                var rBlock = this._rBlock;

	                // Feistel function
	                var f = 0;
	                for (var i = 0; i < 8; i++) {
	                    f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
	                }
	                this._lBlock = rBlock;
	                this._rBlock = lBlock ^ f;
	            }

	            // Undo swap from last round
	            var t = this._lBlock;
	            this._lBlock = this._rBlock;
	            this._rBlock = t;

	            // Final permutation
	            exchangeLR.call(this, 1,  0x55555555);
	            exchangeRL.call(this, 8,  0x00ff00ff);
	            exchangeRL.call(this, 2,  0x33333333);
	            exchangeLR.call(this, 16, 0x0000ffff);
	            exchangeLR.call(this, 4,  0x0f0f0f0f);

	            // Set output
	            M[offset] = this._lBlock;
	            M[offset + 1] = this._rBlock;
	        },

	        keySize: 64/32,

	        ivSize: 64/32,

	        blockSize: 64/32
	    });

	    // Swap bits across the left and right words
	    function exchangeLR(offset, mask) {
	        var t = ((this._lBlock >>> offset) ^ this._rBlock) & mask;
	        this._rBlock ^= t;
	        this._lBlock ^= t << offset;
	    }

	    function exchangeRL(offset, mask) {
	        var t = ((this._rBlock >>> offset) ^ this._lBlock) & mask;
	        this._lBlock ^= t;
	        this._rBlock ^= t << offset;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);
	     */
	    C.DES = BlockCipher._createHelper(DES);

	    /**
	     * Triple-DES block cipher algorithm.
	     */
	    var TripleDES = C_algo.TripleDES = BlockCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var key = this._key;
	            var keyWords = key.words;
	            // Make sure the key length is valid (64, 128 or >= 192 bit)
	            if (keyWords.length !== 2 && keyWords.length !== 4 && keyWords.length < 6) {
	                throw new Error('Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.');
	            }

	            // Extend the key according to the keying options defined in 3DES standard
	            var key1 = keyWords.slice(0, 2);
	            var key2 = keyWords.length < 4 ? keyWords.slice(0, 2) : keyWords.slice(2, 4);
	            var key3 = keyWords.length < 6 ? keyWords.slice(0, 2) : keyWords.slice(4, 6);

	            // Create DES instances
	            this._des1 = DES.createEncryptor(WordArray.create(key1));
	            this._des2 = DES.createEncryptor(WordArray.create(key2));
	            this._des3 = DES.createEncryptor(WordArray.create(key3));
	        },

	        encryptBlock: function (M, offset) {
	            this._des1.encryptBlock(M, offset);
	            this._des2.decryptBlock(M, offset);
	            this._des3.encryptBlock(M, offset);
	        },

	        decryptBlock: function (M, offset) {
	            this._des3.decryptBlock(M, offset);
	            this._des2.encryptBlock(M, offset);
	            this._des1.decryptBlock(M, offset);
	        },

	        keySize: 192/32,

	        ivSize: 64/32,

	        blockSize: 64/32
	    });

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);
	     */
	    C.TripleDES = BlockCipher._createHelper(TripleDES);
	}());


	return CryptoJS.TripleDES;

}));

/***/ }),

/***/ "./node_modules/crypto-js/x64-core.js":
/*!********************************************!*\
  !*** ./node_modules/crypto-js/x64-core.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function (undefined) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var X32WordArray = C_lib.WordArray;

	    /**
	     * x64 namespace.
	     */
	    var C_x64 = C.x64 = {};

	    /**
	     * A 64-bit word.
	     */
	    var X64Word = C_x64.Word = Base.extend({
	        /**
	         * Initializes a newly created 64-bit word.
	         *
	         * @param {number} high The high 32 bits.
	         * @param {number} low The low 32 bits.
	         *
	         * @example
	         *
	         *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
	         */
	        init: function (high, low) {
	            this.high = high;
	            this.low = low;
	        }

	        /**
	         * Bitwise NOTs this word.
	         *
	         * @return {X64Word} A new x64-Word object after negating.
	         *
	         * @example
	         *
	         *     var negated = x64Word.not();
	         */
	        // not: function () {
	            // var high = ~this.high;
	            // var low = ~this.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Bitwise ANDs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to AND with this word.
	         *
	         * @return {X64Word} A new x64-Word object after ANDing.
	         *
	         * @example
	         *
	         *     var anded = x64Word.and(anotherX64Word);
	         */
	        // and: function (word) {
	            // var high = this.high & word.high;
	            // var low = this.low & word.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Bitwise ORs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to OR with this word.
	         *
	         * @return {X64Word} A new x64-Word object after ORing.
	         *
	         * @example
	         *
	         *     var ored = x64Word.or(anotherX64Word);
	         */
	        // or: function (word) {
	            // var high = this.high | word.high;
	            // var low = this.low | word.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Bitwise XORs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to XOR with this word.
	         *
	         * @return {X64Word} A new x64-Word object after XORing.
	         *
	         * @example
	         *
	         *     var xored = x64Word.xor(anotherX64Word);
	         */
	        // xor: function (word) {
	            // var high = this.high ^ word.high;
	            // var low = this.low ^ word.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Shifts this word n bits to the left.
	         *
	         * @param {number} n The number of bits to shift.
	         *
	         * @return {X64Word} A new x64-Word object after shifting.
	         *
	         * @example
	         *
	         *     var shifted = x64Word.shiftL(25);
	         */
	        // shiftL: function (n) {
	            // if (n < 32) {
	                // var high = (this.high << n) | (this.low >>> (32 - n));
	                // var low = this.low << n;
	            // } else {
	                // var high = this.low << (n - 32);
	                // var low = 0;
	            // }

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Shifts this word n bits to the right.
	         *
	         * @param {number} n The number of bits to shift.
	         *
	         * @return {X64Word} A new x64-Word object after shifting.
	         *
	         * @example
	         *
	         *     var shifted = x64Word.shiftR(7);
	         */
	        // shiftR: function (n) {
	            // if (n < 32) {
	                // var low = (this.low >>> n) | (this.high << (32 - n));
	                // var high = this.high >>> n;
	            // } else {
	                // var low = this.high >>> (n - 32);
	                // var high = 0;
	            // }

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Rotates this word n bits to the left.
	         *
	         * @param {number} n The number of bits to rotate.
	         *
	         * @return {X64Word} A new x64-Word object after rotating.
	         *
	         * @example
	         *
	         *     var rotated = x64Word.rotL(25);
	         */
	        // rotL: function (n) {
	            // return this.shiftL(n).or(this.shiftR(64 - n));
	        // },

	        /**
	         * Rotates this word n bits to the right.
	         *
	         * @param {number} n The number of bits to rotate.
	         *
	         * @return {X64Word} A new x64-Word object after rotating.
	         *
	         * @example
	         *
	         *     var rotated = x64Word.rotR(7);
	         */
	        // rotR: function (n) {
	            // return this.shiftR(n).or(this.shiftL(64 - n));
	        // },

	        /**
	         * Adds this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to add with this word.
	         *
	         * @return {X64Word} A new x64-Word object after adding.
	         *
	         * @example
	         *
	         *     var added = x64Word.add(anotherX64Word);
	         */
	        // add: function (word) {
	            // var low = (this.low + word.low) | 0;
	            // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
	            // var high = (this.high + word.high + carry) | 0;

	            // return X64Word.create(high, low);
	        // }
	    });

	    /**
	     * An array of 64-bit words.
	     *
	     * @property {Array} words The array of CryptoJS.x64.Word objects.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var X64WordArray = C_x64.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create();
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create([
	         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
	         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
	         *     ]);
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create([
	         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
	         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
	         *     ], 10);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 8;
	            }
	        },

	        /**
	         * Converts this 64-bit word array to a 32-bit word array.
	         *
	         * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
	         *
	         * @example
	         *
	         *     var x32WordArray = x64WordArray.toX32();
	         */
	        toX32: function () {
	            // Shortcuts
	            var x64Words = this.words;
	            var x64WordsLength = x64Words.length;

	            // Convert
	            var x32Words = [];
	            for (var i = 0; i < x64WordsLength; i++) {
	                var x64Word = x64Words[i];
	                x32Words.push(x64Word.high);
	                x32Words.push(x64Word.low);
	            }

	            return X32WordArray.create(x32Words, this.sigBytes);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {X64WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = x64WordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);

	            // Clone "words" array
	            var words = clone.words = this.words.slice(0);

	            // Clone each X64Word object
	            var wordsLength = words.length;
	            for (var i = 0; i < wordsLength; i++) {
	                words[i] = words[i].clone();
	            }

	            return clone;
	        }
	    });
	}());


	return CryptoJS;

}));

/***/ }),

/***/ "./node_modules/zustand/esm/index.js":
/*!*******************************************!*\
  !*** ./node_modules/zustand/esm/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function createStore(createState) {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (nextState !== state) {
      const previousState = state;
      state = replace ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const subscribeWithSelector = (listener, selector = getState, equalityFn = Object.is) => {
    console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");
    let currentSlice = selector(state);
    function listenerToAdd() {
      const nextSlice = selector(state);
      if (!equalityFn(currentSlice, nextSlice)) {
        const previousSlice = currentSlice;
        listener(currentSlice = nextSlice, previousSlice);
      }
    }
    listeners.add(listenerToAdd);
    return () => listeners.delete(listenerToAdd);
  };
  const subscribe = (listener, selector, equalityFn) => {
    if (selector || equalityFn) {
      return subscribeWithSelector(listener, selector, equalityFn);
    }
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const destroy = () => listeners.clear();
  const api = { setState, getState, subscribe, destroy };
  state = createState(setState, getState, api);
  return api;
}

const isSSR = typeof window === "undefined" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
const useIsomorphicLayoutEffect = isSSR ? react__WEBPACK_IMPORTED_MODULE_0__.useEffect : react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;
function create(createState) {
  const api = typeof createState === "function" ? createStore(createState) : createState;
  const useStore = (selector = api.getState, equalityFn = Object.is) => {
    const [, forceUpdate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)((c) => c + 1, 0);
    const state = api.getState();
    const stateRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(state);
    const selectorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(selector);
    const equalityFnRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(equalityFn);
    const erroredRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    const currentSliceRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    if (currentSliceRef.current === void 0) {
      currentSliceRef.current = selector(state);
    }
    let newStateSlice;
    let hasNewStateSlice = false;
    if (stateRef.current !== state || selectorRef.current !== selector || equalityFnRef.current !== equalityFn || erroredRef.current) {
      newStateSlice = selector(state);
      hasNewStateSlice = !equalityFn(currentSliceRef.current, newStateSlice);
    }
    useIsomorphicLayoutEffect(() => {
      if (hasNewStateSlice) {
        currentSliceRef.current = newStateSlice;
      }
      stateRef.current = state;
      selectorRef.current = selector;
      equalityFnRef.current = equalityFn;
      erroredRef.current = false;
    });
    const stateBeforeSubscriptionRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(state);
    useIsomorphicLayoutEffect(() => {
      const listener = () => {
        try {
          const nextState = api.getState();
          const nextStateSlice = selectorRef.current(nextState);
          if (!equalityFnRef.current(currentSliceRef.current, nextStateSlice)) {
            stateRef.current = nextState;
            currentSliceRef.current = nextStateSlice;
            forceUpdate();
          }
        } catch (error) {
          erroredRef.current = true;
          forceUpdate();
        }
      };
      const unsubscribe = api.subscribe(listener);
      if (api.getState() !== stateBeforeSubscriptionRef.current) {
        listener();
      }
      return unsubscribe;
    }, []);
    const sliceToReturn = hasNewStateSlice ? newStateSlice : currentSliceRef.current;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue)(sliceToReturn);
    return sliceToReturn;
  };
  Object.assign(useStore, api);
  useStore[Symbol.iterator] = function() {
    console.warn("[useStore, api] = create() is deprecated and will be removed in v4");
    const items = [useStore, api];
    return {
      next() {
        const done = items.length <= 0;
        return { value: items.shift(), done };
      }
    };
  };
  return useStore;
}




/***/ }),

/***/ "./src/funnel-filter-svgrepo-com.svg":
/*!*******************************************!*\
  !*** ./src/funnel-filter-svgrepo-com.svg ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMi4wMzkgNTEyLjAzOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjAzOSA1MTIuMDM5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTUxMi4wMTksODUuMzMzYzAtNTQuNDg4LTExMy4xMDQtODUuMzMzLTI1Ni04NS4zMzNzLTI1NiwzMC44NDUtMjU2LDg1LjMzM2MwLDEyLjg0Nyw2LjI5NCwyNC4zNzksMTcuNzc3LDM0LjUwMw0KCQkJbDE3NC4yMjMsMjI4LjY5N3YxNDIuMTMzYzAsMTcuNTgsMjAuMDcsMjcuNjE0LDM0LjEzMywxNy4wNjdsODUuMzMzLTY0YzUuMzcyLTQuMDI5LDguNTMzLTEwLjM1Miw4LjUzMy0xNy4wNjd2LTc4LjEzMw0KCQkJbDE3NC4yMjMtMjI4LjY5N0M1MDUuNzI2LDEwOS43MTIsNTEyLjAxOSw5OC4xODEsNTEyLjAxOSw4NS4zMzN6IE0yNTYuMDE5LDQyLjY2N2MxMTYuMzE0LDAsMjEzLjMzMywyNi40NTksMjEzLjMzMyw0Mi42NjcNCgkJCWMwLDAuMzYyLTAuMDY1LDAuNzMtMC4xNjEsMS4xMDJjLTEuNTMxLDAuNzM5LTMuMDQ4LDEuNjg3LTQuNTI4LDIuODcxYy0xMi41NjIsMTAuMDUzLTM3LjI4NCwxOS4wNDUtNjkuNzIzLDI1LjgyNg0KCQkJYy0zNi4xOTMsNy4xNzUtODIuNzcxLDEyLjQ3NS0xMzMuMjY3LDEyLjg0NmMtMC4xMDksMC4wMDEtMC4yMTgsMC4wMDItMC4zMjgsMC4wMDNjLTEuNzcxLDAuMDEyLTMuNTQ2LDAuMDE5LTUuMzI1LDAuMDE5DQoJCQljLTEuNzgsMC0zLjU1NS0wLjAwNy01LjMyNS0wLjAxOWMtMC4xMDktMC4wMDEtMC4yMTgtMC4wMDItMC4zMjgtMC4wMDNjLTUwLjQ5Ni0wLjM3MS05Ny4wNzQtNS42NzEtMTMzLjI2Ny0xMi44NDYNCgkJCWMtMzIuNDQtNi43ODEtNTcuMTYxLTE1Ljc3My02OS43MjMtMjUuODI2Yy0xLjQ4MS0xLjE4NS0yLjk5Ny0yLjEzMy00LjUyOC0yLjg3MWMtMC4wOTYtMC4zNzEtMC4xNjEtMC43NC0wLjE2MS0xLjEwMg0KCQkJQzQyLjY4Niw2OS4xMjUsMTM5LjcwNiw0Mi42NjcsMjU2LjAxOSw0Mi42Njd6IE0yNzcuMzUzLDQxNmwtNDIuNjY3LDMydi04NS4zMzNoNDIuNjY3VjQxNnogTTI4OC4xMTksMzIwaC02NC4yTDk4LjE3MiwxNTQuOTM1DQoJCQljNDEuODc2LDkuOTcxLDk0LjM4NSwxNS4zNjksMTUxLjk4NCwxNS43MTJjMS45NSwwLjAxMywzLjkwNCwwLjAyLDUuODYzLDAuMDJjMS45NTksMCwzLjkxMy0wLjAwNyw1Ljg2My0wLjAyDQoJCQljNTcuNTk5LTAuMzQzLDExMC4xMDktNS43NCwxNTEuOTg0LTE1LjcxMkwyODguMTE5LDMyMHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==";

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"React","root":"React"} ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!****************************************************************************************************!*\
  !*** external {"commonjs":"react-dom","commonjs2":"react-dom","amd":"ReactDOM","root":"ReactDOM"} ***!
  \****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ }),

/***/ "?9157":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertModal": () => (/* reexport safe */ _AlertModal_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "CheckBox": () => (/* reexport safe */ _CheckBox_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "Choice": () => (/* reexport safe */ _List_js__WEBPACK_IMPORTED_MODULE_15__.Choice),
/* harmony export */   "ChoiceText": () => (/* reexport safe */ _ChoiceText_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "ConfirmModal": () => (/* reexport safe */ _ConfirmModal_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "ContextMenu": () => (/* reexport safe */ _ContextMenu_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "DateInput": () => (/* reexport safe */ _DateInput_js__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "DoubleListBox": () => (/* reexport safe */ _DoubleListBox_js__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "ErrorModal": () => (/* reexport safe */ _ErrorModal_js__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "FlatMenu": () => (/* reexport safe */ _FlatMenu_js__WEBPACK_IMPORTED_MODULE_10__.FlatMenu),
/* harmony export */   "Form": () => (/* reexport safe */ _forms_index_js__WEBPACK_IMPORTED_MODULE_35__.Form),
/* harmony export */   "FormFields": () => (/* reexport safe */ _forms_index_js__WEBPACK_IMPORTED_MODULE_35__.FormFields),
/* harmony export */   "Header": () => (/* reexport safe */ _Header_js__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   "HeaderModal": () => (/* reexport safe */ _HeaderModal_js__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   "Input": () => (/* reexport safe */ _forms_index_js__WEBPACK_IMPORTED_MODULE_35__.Input),
/* harmony export */   "InputFile": () => (/* reexport safe */ _InputFile_js__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   "Link": () => (/* reexport safe */ _MenuUtils_js__WEBPACK_IMPORTED_MODULE_17__.Link),
/* harmony export */   "List": () => (/* reexport safe */ _List_js__WEBPACK_IMPORTED_MODULE_15__.List),
/* harmony export */   "MenuBar": () => (/* reexport safe */ _MenuBar_js__WEBPACK_IMPORTED_MODULE_16__.MenuBar),
/* harmony export */   "Modal": () => (/* reexport safe */ _Modal_js__WEBPACK_IMPORTED_MODULE_18__["default"]),
/* harmony export */   "NavigateBar": () => (/* reexport safe */ _NavigateBar_js__WEBPACK_IMPORTED_MODULE_19__["default"]),
/* harmony export */   "Radio": () => (/* reexport safe */ _Radio_js__WEBPACK_IMPORTED_MODULE_20__["default"]),
/* harmony export */   "Redirect": () => (/* reexport safe */ _MenuUtils_js__WEBPACK_IMPORTED_MODULE_17__.Redirect),
/* harmony export */   "SearchSortTable": () => (/* reexport safe */ _SearchSortTable_js__WEBPACK_IMPORTED_MODULE_22__["default"]),
/* harmony export */   "Show": () => (/* reexport safe */ _forms_index_js__WEBPACK_IMPORTED_MODULE_35__.Show),
/* harmony export */   "Slider": () => (/* reexport safe */ _Slider_js__WEBPACK_IMPORTED_MODULE_23__["default"]),
/* harmony export */   "StatusBox": () => (/* reexport safe */ _StatusBox_js__WEBPACK_IMPORTED_MODULE_24__.StatusBox),
/* harmony export */   "addDigit": () => (/* reexport safe */ _DateFunct_js__WEBPACK_IMPORTED_MODULE_6__.addDigit),
/* harmony export */   "applyOptions": () => (/* reexport safe */ _forms_index_js__WEBPACK_IMPORTED_MODULE_35__.applyOptions),
/* harmony export */   "binSearch": () => (/* reexport safe */ _SearchFunct_js__WEBPACK_IMPORTED_MODULE_21__.binSearch),
/* harmony export */   "checkValidityScreen": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.checkValidityScreen),
/* harmony export */   "checkValidityTable": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.checkValidityTable),
/* harmony export */   "clearInvalidDual": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.clearInvalidDual),
/* harmony export */   "clearInvalidScreen": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.clearInvalidScreen),
/* harmony export */   "clearInvalidScreenOnly": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.clearInvalidScreenOnly),
/* harmony export */   "clearInvalidTable": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.clearInvalidTable),
/* harmony export */   "convertDate": () => (/* reexport safe */ _DateFunct_js__WEBPACK_IMPORTED_MODULE_6__.convertDate),
/* harmony export */   "currentDBDate": () => (/* reexport safe */ _DateFunct_js__WEBPACK_IMPORTED_MODULE_6__.currentDBDate),
/* harmony export */   "currentDBDateTime": () => (/* reexport safe */ _DateFunct_js__WEBPACK_IMPORTED_MODULE_6__.currentDBDateTime),
/* harmony export */   "currentDate": () => (/* reexport safe */ _DateFunct_js__WEBPACK_IMPORTED_MODULE_6__.currentDate),
/* harmony export */   "currentDateTime": () => (/* reexport safe */ _DateFunct_js__WEBPACK_IMPORTED_MODULE_6__.currentDateTime),
/* harmony export */   "date2str": () => (/* reexport safe */ _date2str_js__WEBPACK_IMPORTED_MODULE_28__.date2str),
/* harmony export */   "dateTime": () => (/* reexport safe */ _DateFunct_js__WEBPACK_IMPORTED_MODULE_6__.dateTime),
/* harmony export */   "dbDate": () => (/* reexport safe */ _DateFunct_js__WEBPACK_IMPORTED_MODULE_6__.dbDate),
/* harmony export */   "decrypt": () => (/* reexport safe */ _encrypt_js__WEBPACK_IMPORTED_MODULE_30__.decrypt),
/* harmony export */   "encrypt": () => (/* reexport safe */ _encrypt_js__WEBPACK_IMPORTED_MODULE_30__.encrypt),
/* harmony export */   "fieldGeneratorLookup": () => (/* reexport safe */ _forms_index_js__WEBPACK_IMPORTED_MODULE_35__.fieldGeneratorLookup),
/* harmony export */   "formatMoney": () => (/* reexport safe */ _Common_js__WEBPACK_IMPORTED_MODULE_3__.formatMoney),
/* harmony export */   "genStoreItem": () => (/* reexport safe */ _generalStore_js__WEBPACK_IMPORTED_MODULE_31__.genStoreItem),
/* harmony export */   "generateButton": () => (/* reexport safe */ _Theme_js__WEBPACK_IMPORTED_MODULE_25__.generateButton),
/* harmony export */   "generateCSSButton": () => (/* reexport safe */ _Theme_js__WEBPACK_IMPORTED_MODULE_25__.generateCSSButton),
/* harmony export */   "generateCSSDefaultButton": () => (/* reexport safe */ _Theme_js__WEBPACK_IMPORTED_MODULE_25__.generateCSSDefaultButton),
/* harmony export */   "generateDefaultButton": () => (/* reexport safe */ _Theme_js__WEBPACK_IMPORTED_MODULE_25__.generateDefaultButton),
/* harmony export */   "generateInvalid": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.generateInvalid),
/* harmony export */   "getInvalidMessage": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.getInvalidMessage),
/* harmony export */   "getList": () => (/* reexport safe */ _encrypt_js__WEBPACK_IMPORTED_MODULE_30__.getList),
/* harmony export */   "isBlink": () => (/* reexport safe */ _browserDetect_js__WEBPACK_IMPORTED_MODULE_26__.isBlink),
/* harmony export */   "isChrome": () => (/* reexport safe */ _browserDetect_js__WEBPACK_IMPORTED_MODULE_26__.isChrome),
/* harmony export */   "isConstant": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.isConstant),
/* harmony export */   "isEdge": () => (/* reexport safe */ _browserDetect_js__WEBPACK_IMPORTED_MODULE_26__.isEdge),
/* harmony export */   "isEdgeChromium": () => (/* reexport safe */ _browserDetect_js__WEBPACK_IMPORTED_MODULE_26__.isEdgeChromium),
/* harmony export */   "isFirefox": () => (/* reexport safe */ _browserDetect_js__WEBPACK_IMPORTED_MODULE_26__.isFirefox),
/* harmony export */   "isIE": () => (/* reexport safe */ _browserDetect_js__WEBPACK_IMPORTED_MODULE_26__.isIE),
/* harmony export */   "isInvalid": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.isInvalid),
/* harmony export */   "isOpera": () => (/* reexport safe */ _browserDetect_js__WEBPACK_IMPORTED_MODULE_26__.isOpera),
/* harmony export */   "isSafari": () => (/* reexport safe */ _browserDetect_js__WEBPACK_IMPORTED_MODULE_26__.isSafari),
/* harmony export */   "lastOfMonth": () => (/* reexport safe */ _dateUtils_js__WEBPACK_IMPORTED_MODULE_29__.lastOfMonth),
/* harmony export */   "localStrToDate": () => (/* reexport safe */ _localStrToDate_js__WEBPACK_IMPORTED_MODULE_32__.localStrToDate),
/* harmony export */   "makeChangeHandler": () => (/* reexport safe */ _makeChangeHandler_js__WEBPACK_IMPORTED_MODULE_33__["default"]),
/* harmony export */   "monthName": () => (/* reexport safe */ _DateFunct_js__WEBPACK_IMPORTED_MODULE_6__.monthName),
/* harmony export */   "openGeneralStore": () => (/* reexport safe */ _generalStore_js__WEBPACK_IMPORTED_MODULE_31__.openGeneralStore),
/* harmony export */   "pretty": () => (/* reexport safe */ _forms_index_js__WEBPACK_IMPORTED_MODULE_35__.pretty),
/* harmony export */   "processInvalidStyleScreen": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.processInvalidStyleScreen),
/* harmony export */   "processInvalidStyleTable": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.processInvalidStyleTable),
/* harmony export */   "processStyleScreen": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.processStyleScreen),
/* harmony export */   "processStyleTable": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.processStyleTable),
/* harmony export */   "register": () => (/* reexport safe */ _serviceWorker_js__WEBPACK_IMPORTED_MODULE_34__.register),
/* harmony export */   "resetDisplayScreen": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.resetDisplayScreen),
/* harmony export */   "resetDisplayTable": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.resetDisplayTable),
/* harmony export */   "sanitize": () => (/* reexport safe */ _Common_js__WEBPACK_IMPORTED_MODULE_3__.sanitize),
/* harmony export */   "search": () => (/* reexport safe */ _SearchFunct_js__WEBPACK_IMPORTED_MODULE_21__.search),
/* harmony export */   "setFieldGenerator": () => (/* reexport safe */ _forms_index_js__WEBPACK_IMPORTED_MODULE_35__.setFieldGenerator),
/* harmony export */   "setInvalidDual": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.setInvalidDual),
/* harmony export */   "setInvalidScreen": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.setInvalidScreen),
/* harmony export */   "setInvalidTable": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.setInvalidTable),
/* harmony export */   "toCamelCase": () => (/* reexport safe */ _camel_js__WEBPACK_IMPORTED_MODULE_27__.toCamelCase),
/* harmony export */   "todayString": () => (/* reexport safe */ _dateUtils_js__WEBPACK_IMPORTED_MODULE_29__.todayString),
/* harmony export */   "unregister": () => (/* reexport safe */ _serviceWorker_js__WEBPACK_IMPORTED_MODULE_34__.unregister),
/* harmony export */   "useFetch": () => (/* reexport safe */ _forms_index_js__WEBPACK_IMPORTED_MODULE_35__.useFetch),
/* harmony export */   "validCheckDual": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.validCheckDual),
/* harmony export */   "validCheckScreen": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.validCheckScreen),
/* harmony export */   "validCheckTable": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.validCheckTable),
/* harmony export */   "wasClickedScreen": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.wasClickedScreen),
/* harmony export */   "wasClickedTable": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.wasClickedTable)
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
/* harmony import */ var _FlatMenu_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FlatMenu.js */ "./src/FlatMenu.js");
/* harmony import */ var _Header_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Header.js */ "./src/Header.js");
/* harmony import */ var _HeaderModal_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./HeaderModal.js */ "./src/HeaderModal.js");
/* harmony import */ var _InputFile_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./InputFile.js */ "./src/InputFile.js");
/* harmony import */ var _Invalid_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Invalid.js */ "./src/Invalid.js");
/* harmony import */ var _List_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./List.js */ "./src/List.js");
/* harmony import */ var _MenuBar_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./MenuBar.js */ "./src/MenuBar.js");
/* harmony import */ var _MenuUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./MenuUtils.js */ "./src/MenuUtils.js");
/* harmony import */ var _Modal_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Modal.js */ "./src/Modal.js");
/* harmony import */ var _NavigateBar_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./NavigateBar.js */ "./src/NavigateBar.js");
/* harmony import */ var _Radio_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Radio.js */ "./src/Radio.js");
/* harmony import */ var _SearchFunct_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./SearchFunct.js */ "./src/SearchFunct.js");
/* harmony import */ var _SearchSortTable_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./SearchSortTable.js */ "./src/SearchSortTable.js");
/* harmony import */ var _Slider_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Slider.js */ "./src/Slider.js");
/* harmony import */ var _StatusBox_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./StatusBox.js */ "./src/StatusBox.js");
/* harmony import */ var _Theme_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Theme.js */ "./src/Theme.js");
/* harmony import */ var _browserDetect_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./browserDetect.js */ "./src/browserDetect.js");
/* harmony import */ var _camel_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./camel.js */ "./src/camel.js");
/* harmony import */ var _date2str_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./date2str.js */ "./src/date2str.js");
/* harmony import */ var _dateUtils_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./dateUtils.js */ "./src/dateUtils.js");
/* harmony import */ var _encrypt_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./encrypt.js */ "./src/encrypt.js");
/* harmony import */ var _generalStore_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./generalStore.js */ "./src/generalStore.js");
/* harmony import */ var _localStrToDate_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./localStrToDate.js */ "./src/localStrToDate.js");
/* harmony import */ var _makeChangeHandler_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./makeChangeHandler.js */ "./src/makeChangeHandler.js");
/* harmony import */ var _serviceWorker_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./serviceWorker.js */ "./src/serviceWorker.js");
/* harmony import */ var _forms_index_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./forms/index.js */ "./src/forms/index.js");





































})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map