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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _date2str__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date2str */ "./src/date2str.js");
/* harmony import */ var _localStrToDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStrToDate */ "./src/localStrToDate.js");
/* harmony import */ var _browserDetect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./browserDetect */ "./src/browserDetect.js");
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
/* harmony export */   "menuState": () => (/* binding */ menuState),
/* harmony export */   "useMenuParms": () => (/* binding */ useMenuParms),
/* harmony export */   "Redirect": () => (/* binding */ Redirect),
/* harmony export */   "Link": () => (/* binding */ Link),
/* harmony export */   "FlatMenu": () => (/* binding */ FlatMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var menuState = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.atom)({
  key: 'menuState',
  // unique ID (with respect to other atoms/selectors)
  "default": '' // default value (aka initial value)

});
var menuParms = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.atom)({
  key: 'menuParms',
  // unique ID (with respect to other atoms/selectors)
  "default": {} // default value (aka initial value)

});
var useMenuParms = function useMenuParms() {
  return (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilValue)(menuParms);
};
var Redirect = function Redirect(props) {
  var _useRecoilState = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(menuState),
      _useRecoilState2 = _slicedToArray(_useRecoilState, 2),
      curMenuPath = _useRecoilState2[0],
      setCurMenuPath = _useRecoilState2[1];

  var _useRecoilState3 = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(menuParms),
      _useRecoilState4 = _slicedToArray(_useRecoilState3, 2),
      curMenuParms = _useRecoilState4[0],
      setCurMenuParms = _useRecoilState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setCurMenuPath(props.to);
    setCurMenuParms(props.parms);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
};
var Link = function Link(props) {
  var _useRecoilState5 = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(menuState),
      _useRecoilState6 = _slicedToArray(_useRecoilState5, 2),
      curMenuPath = _useRecoilState6[0],
      setCurMenuPath = _useRecoilState6[1];

  var _useRecoilState7 = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(menuParms),
      _useRecoilState8 = _slicedToArray(_useRecoilState7, 2),
      curMenuParms = _useRecoilState8[0],
      setCurMenuParms = _useRecoilState8[1];

  if (!props.to || props.to === "") return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
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
var FlatMenu = function FlatMenu(props) {
  var _useRecoilState9 = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(menuState),
      _useRecoilState10 = _slicedToArray(_useRecoilState9, 2),
      curMenuPath = _useRecoilState10[0],
      setCurMenuPath = _useRecoilState10[1];

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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Link, {
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
    var img = img ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
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
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, userMsg, modalButton), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, dbType), logout, login, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HeaderModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    show: showModal,
    username: username,
    setUser: props.setUsername,
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
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _FlatMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FlatMenu */ "./src/FlatMenu.js");
/* harmony import */ var _NavigateBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavigateBar */ "./src/NavigateBar.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




 // import './NavBar.css';
// import './DropDown.css'

var MenuBar = function MenuBar(props) {
  var _useRecoilState = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(_FlatMenu__WEBPACK_IMPORTED_MODULE_2__.menuState),
      _useRecoilState2 = _slicedToArray(_useRecoilState, 2),
      curMenuPath = _useRecoilState2[0],
      setCurMenuPath = _useRecoilState2[1];

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

  var items = props.menuTree.map(function (mi) {
    return getPaths(mi);
  }).flat();
  var active = items.find(function (item) {
    return item.path === curMenuPath;
  }) || items[0];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NavigateBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    menuTree: props.menuTree,
    symbol: symbol,
    subsymbol: subSymbol
  }), active.component());
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
/* harmony import */ var _FlatMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlatMenu */ "./src/FlatMenu.js");
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

    if (row.hasOwnProperty('submenu')) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        key: name,
        className: "nav-item",
        onMouseEnter: function onMouseEnter(event) {
          return _onMouseEnter(event, row.index);
        },
        onMouseLeave: function onMouseLeave() {
          return _onMouseLeave(row.index);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FlatMenu__WEBPACK_IMPORTED_MODULE_1__.Link, {
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FlatMenu__WEBPACK_IMPORTED_MODULE_1__.Link, {
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

      if (row.hasOwnProperty('submenu')) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
          key: name,
          className: "nav-item",
          onMouseEnter: function onMouseEnter(event) {
            return _onMouseEnter(event, index);
          },
          onMouseLeave: function onMouseLeave() {
            return _onMouseLeave(index);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FlatMenu__WEBPACK_IMPORTED_MODULE_1__.Link, {
          className: "nav-links"
        }, row.title + addition2), dropDown[index] === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
          onClick: function onClick() {
            return handleClick();
          },
          className: click ? 'dropdown-menu clicked' : 'dropdown-menu'
        }, row.submenu.map(buildDropDowns)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null));
      } else if (row.hasOwnProperty('title')) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
          key: name,
          className: "nav-item"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FlatMenu__WEBPACK_IMPORTED_MODULE_1__.Link, {
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "navbar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: click ? 'nav-menu active' : 'nav-menu'
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

"use strict";
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
/* harmony export */   "getList": () => (/* binding */ getList),
/* harmony export */   "decrypt": () => (/* binding */ decrypt),
/* harmony export */   "encrypt": () => (/* binding */ encrypt)
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

/***/ "./node_modules/recoil/es/recoil.js":
/*!******************************************!*\
  !*** ./node_modules/recoil/es/recoil.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "DefaultValue": () => (/* binding */ Recoil_index_1),
/* harmony export */   "RecoilLoadable": () => (/* binding */ Recoil_index_3),
/* harmony export */   "RecoilRoot": () => (/* binding */ Recoil_index_4),
/* harmony export */   "atom": () => (/* binding */ Recoil_index_6),
/* harmony export */   "atomFamily": () => (/* binding */ Recoil_index_8),
/* harmony export */   "constSelector": () => (/* binding */ Recoil_index_10),
/* harmony export */   "errorSelector": () => (/* binding */ Recoil_index_11),
/* harmony export */   "isRecoilValue": () => (/* binding */ Recoil_index_2),
/* harmony export */   "noWait": () => (/* binding */ Recoil_index_13),
/* harmony export */   "readOnlySelector": () => (/* binding */ Recoil_index_12),
/* harmony export */   "retentionZone": () => (/* binding */ Recoil_index_35),
/* harmony export */   "selector": () => (/* binding */ Recoil_index_7),
/* harmony export */   "selectorFamily": () => (/* binding */ Recoil_index_9),
/* harmony export */   "snapshot_UNSTABLE": () => (/* binding */ Recoil_index_33),
/* harmony export */   "useGetRecoilValueInfo_UNSTABLE": () => (/* binding */ Recoil_index_24),
/* harmony export */   "useGotoRecoilSnapshot": () => (/* binding */ Recoil_index_28),
/* harmony export */   "useRecoilBridgeAcrossReactRoots_UNSTABLE": () => (/* binding */ Recoil_index_5),
/* harmony export */   "useRecoilCallback": () => (/* binding */ Recoil_index_26),
/* harmony export */   "useRecoilRefresher_UNSTABLE": () => (/* binding */ Recoil_index_25),
/* harmony export */   "useRecoilSnapshot": () => (/* binding */ Recoil_index_29),
/* harmony export */   "useRecoilState": () => (/* binding */ Recoil_index_20),
/* harmony export */   "useRecoilStateLoadable": () => (/* binding */ Recoil_index_21),
/* harmony export */   "useRecoilTransactionObserver_UNSTABLE": () => (/* binding */ Recoil_index_30),
/* harmony export */   "useRecoilTransaction_UNSTABLE": () => (/* binding */ Recoil_index_27),
/* harmony export */   "useRecoilValue": () => (/* binding */ Recoil_index_18),
/* harmony export */   "useRecoilValueLoadable": () => (/* binding */ Recoil_index_19),
/* harmony export */   "useResetRecoilState": () => (/* binding */ Recoil_index_23),
/* harmony export */   "useRetain": () => (/* binding */ Recoil_index_34),
/* harmony export */   "useSetRecoilState": () => (/* binding */ Recoil_index_22),
/* harmony export */   "useSetUnvalidatedAtomValues_UNSTABLE": () => (/* binding */ Recoil_index_32),
/* harmony export */   "useTransactionObservation_UNSTABLE": () => (/* binding */ Recoil_index_31),
/* harmony export */   "waitForAll": () => (/* binding */ Recoil_index_16),
/* harmony export */   "waitForAllSettled": () => (/* binding */ Recoil_index_17),
/* harmony export */   "waitForAny": () => (/* binding */ Recoil_index_15),
/* harmony export */   "waitForNone": () => (/* binding */ Recoil_index_14)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function err(message) {
  const error = new Error(message); // In V8, Error objects keep the closure scope chain alive until the
  // err.stack property is accessed.

  if (error.stack === undefined) {
    // IE sets the stack only if error is thrown
    try {
      throw error;
    } catch (_) {} // eslint-disable-line fb-www/no-unused-catch-bindings, no-empty

  }

  return error;
}

var err_1 = err;

// @oss-only


var Recoil_err = err_1;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

// Split declaration and implementation to allow this function to pretend to
// check for actual instance of Promise instead of something with a `then`
// method.
// eslint-disable-next-line no-redeclare
function isPromise(p) {
  return !!p && typeof p.then === 'function';
}

var Recoil_isPromise = isPromise;

function nullthrows(x, message) {
  if (x != null) {
    return x;
  }

  throw Recoil_err(message !== null && message !== void 0 ? message : 'Got unexpected null or undefined');
}

var Recoil_nullthrows = nullthrows;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class BaseLoadable {
  getValue() {
    throw Recoil_err('BaseLoadable');
  }

  toPromise() {
    throw Recoil_err('BaseLoadable');
  }

  valueMaybe() {
    throw Recoil_err('BaseLoadable');
  }

  valueOrThrow() {
    // $FlowFixMe[prop-missing]
    throw Recoil_err(`Loadable expected value, but in "${this.state}" state`);
  }

  promiseMaybe() {
    throw Recoil_err('BaseLoadable');
  }

  promiseOrThrow() {
    // $FlowFixMe[prop-missing]
    throw Recoil_err(`Loadable expected promise, but in "${this.state}" state`);
  }

  errorMaybe() {
    throw Recoil_err('BaseLoadable');
  }

  errorOrThrow() {
    // $FlowFixMe[prop-missing]
    throw Recoil_err(`Loadable expected error, but in "${this.state}" state`);
  }

  is(other) {
    // $FlowFixMe[prop-missing]
    return other.state === this.state && other.contents === this.contents;
  }

  map(_map) {
    throw Recoil_err('BaseLoadable');
  }

}

class ValueLoadable extends BaseLoadable {
  constructor(value) {
    super();

    _defineProperty(this, "state", 'hasValue');

    _defineProperty(this, "contents", void 0);

    this.contents = value;
  }

  getValue() {
    return this.contents;
  }

  toPromise() {
    return Promise.resolve(this.contents);
  }

  valueMaybe() {
    return this.contents;
  }

  valueOrThrow() {
    return this.contents;
  }

  promiseMaybe() {
    return undefined;
  }

  errorMaybe() {
    return undefined;
  }

  map(map) {
    try {
      const next = map(this.contents);
      return Recoil_isPromise(next) ? loadableWithPromise(next) : isLoadable(next) ? next : loadableWithValue(next);
    } catch (e) {
      return Recoil_isPromise(e) ? // If we "suspended", then try again.
      // errors and subsequent retries will be handled in 'loading' case
      loadableWithPromise(e.next(() => this.map(map))) : loadableWithError(e);
    }
  }

}

class ErrorLoadable extends BaseLoadable {
  constructor(error) {
    super();

    _defineProperty(this, "state", 'hasError');

    _defineProperty(this, "contents", void 0);

    this.contents = error;
  }

  getValue() {
    throw this.contents;
  }

  toPromise() {
    return Promise.reject(this.contents);
  }

  valueMaybe() {
    return undefined;
  }

  promiseMaybe() {
    return undefined;
  }

  errorMaybe() {
    return this.contents;
  }

  errorOrThrow() {
    return this.contents;
  }

  map(_map) {
    // $FlowIssue[incompatible-return]
    return this;
  }

}

class LoadingLoadable extends BaseLoadable {
  constructor(promise) {
    super();

    _defineProperty(this, "state", 'loading');

    _defineProperty(this, "contents", void 0);

    this.contents = promise;
  }

  getValue() {
    throw this.contents;
  }

  toPromise() {
    return this.contents;
  }

  valueMaybe() {
    return undefined;
  }

  promiseMaybe() {
    return this.contents;
  }

  promiseOrThrow() {
    return this.contents;
  }

  errorMaybe() {
    return undefined;
  }

  map(map) {
    return loadableWithPromise(this.contents.then(value => {
      const next = map(value);

      if (isLoadable(next)) {
        const nextLoadable = next;

        switch (nextLoadable.state) {
          case 'hasValue':
            return nextLoadable.contents;

          case 'hasError':
            throw nextLoadable.contents;

          case 'loading':
            return nextLoadable.contents;
        }
      } // $FlowIssue[incompatible-return]


      return next;
    }).catch(e => {
      if (Recoil_isPromise(e)) {
        // we were "suspended," try again
        return e.then(() => this.map(map).contents);
      }

      throw e;
    }));
  }

}

function loadableWithValue(value) {
  return Object.freeze(new ValueLoadable(value));
}

function loadableWithError(error) {
  return Object.freeze(new ErrorLoadable(error));
}

function loadableWithPromise(promise) {
  return Object.freeze(new LoadingLoadable(promise));
}

function loadableLoading() {
  return Object.freeze(new LoadingLoadable(new Promise(() => {})));
}

function loadableAllArray(inputs) {
  return inputs.every(i => i.state === 'hasValue') ? loadableWithValue(inputs.map(i => i.contents)) : inputs.some(i => i.state === 'hasError') ? loadableWithError(Recoil_nullthrows(inputs.find(i => i.state === 'hasError'), 'Invalid loadable passed to loadableAll').contents) : loadableWithPromise(Promise.all(inputs.map(i => i.contents)));
}

function loadableAll(inputs) {
  const unwrapedInputs = Array.isArray(inputs) ? inputs : Object.getOwnPropertyNames(inputs).map(key => inputs[key]);
  const output = loadableAllArray(unwrapedInputs);
  return Array.isArray(inputs) ? // $FlowIssue[incompatible-return]
  output : // Object.getOwnPropertyNames() has consistent key ordering with ES6
  // $FlowIssue[incompatible-call]
  output.map(outputs => Object.getOwnPropertyNames(inputs).reduce((out, key, idx) => ({ ...out,
    [key]: outputs[idx]
  }), {}));
}

function isLoadable(x) {
  return x instanceof BaseLoadable;
}

const LoadableStaticInterface = {
  of: value => Recoil_isPromise(value) ? loadableWithPromise(value) : loadableWithValue(value),
  error: error => loadableWithError(error),
  // $FlowIssue[unclear-type]
  all: loadableAll,
  isLoadable
};
var Recoil_Loadable = {
  loadableWithValue,
  loadableWithError,
  loadableWithPromise,
  loadableLoading,
  loadableAll,
  isLoadable,
  RecoilLoadable: LoadableStaticInterface
};

var Recoil_Loadable_1 = Recoil_Loadable.loadableWithValue;
var Recoil_Loadable_2 = Recoil_Loadable.loadableWithError;
var Recoil_Loadable_3 = Recoil_Loadable.loadableWithPromise;
var Recoil_Loadable_4 = Recoil_Loadable.loadableLoading;
var Recoil_Loadable_5 = Recoil_Loadable.loadableAll;
var Recoil_Loadable_6 = Recoil_Loadable.isLoadable;
var Recoil_Loadable_7 = Recoil_Loadable.RecoilLoadable;

var Recoil_Loadable$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  loadableWithValue: Recoil_Loadable_1,
  loadableWithError: Recoil_Loadable_2,
  loadableWithPromise: Recoil_Loadable_3,
  loadableLoading: Recoil_Loadable_4,
  loadableAll: Recoil_Loadable_5,
  isLoadable: Recoil_Loadable_6,
  RecoilLoadable: Recoil_Loadable_7
});

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function sprintf(format, ...args) {
  let index = 0;
  return format.replace(/%s/g, () => String(args[index++]));
}

var sprintf_1 = sprintf;

function expectationViolation(format, ...args) {
  if (true) {
    const message = sprintf_1.call(null, format, ...args);
    const error = new Error(message);
    error.name = 'Expectation Violation';
    console.error(error);
  }
}

var expectationViolation_1 = expectationViolation;

// @oss-only


var Recoil_expectationViolation = expectationViolation_1;

var _useMutableSource;

 // FIXME T2710559282599660


const useMutableSource = // flowlint-line unclear-type:off
(_useMutableSource = (react__WEBPACK_IMPORTED_MODULE_0___default().useMutableSource)) !== null && _useMutableSource !== void 0 ? _useMutableSource : (react__WEBPACK_IMPORTED_MODULE_0___default().unstable_useMutableSource); // flowlint-line unclear-type:off

function mutableSourceExists() {
  return useMutableSource && !(typeof window !== 'undefined' && window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE);
}

var Recoil_mutableSource = {
  mutableSourceExists,
  useMutableSource
};

const {
  mutableSourceExists: mutableSourceExists$1
} = Recoil_mutableSource;

const gks = new Map().set('recoil_hamt_2020', true).set('recoil_memory_managament_2020', true).set('recoil_suppress_rerender_in_callback', true);

function Recoil_gkx(gk) {
  var _gks$get;

  if (gk === 'recoil_early_rendering_2021' && !mutableSourceExists$1()) {
    return false;
  }

  return (_gks$get = gks.get(gk)) !== null && _gks$get !== void 0 ? _gks$get : false;
}

Recoil_gkx.setPass = gk => {
  gks.set(gk, true);
};

Recoil_gkx.setFail = gk => {
  gks.set(gk, false);
};

var Recoil_gkx_1 = Recoil_gkx; // @oss-only

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */
/**
 * Creates a new iterable whose output is generated by passing the input
 * iterable's values through the mapper function.
 */

function mapIterable(iterable, callback) {
  // Use generator to create iterable/iterator
  return function* () {
    let index = 0;

    for (const value of iterable) {
      yield callback(value, index++);
    }
  }();
}

var Recoil_mapIterable = mapIterable;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function recoverableViolation(message, projectName, {
  error
} = {}) {
  if (true) {
    console.error(message, error);
  }

  return null;
}

var recoverableViolation_1 = recoverableViolation;

// @oss-only


var Recoil_recoverableViolation = recoverableViolation_1;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

// eslint-disable-next-line no-unused-vars
class AbstractRecoilValue {
  constructor(newKey) {
    _defineProperty(this, "key", void 0);

    this.key = newKey;
  }

}

class RecoilState extends AbstractRecoilValue {}

class RecoilValueReadOnly extends AbstractRecoilValue {}

function isRecoilValue(x) {
  return x instanceof RecoilState || x instanceof RecoilValueReadOnly;
}

var Recoil_RecoilValue = {
  AbstractRecoilValue,
  RecoilState,
  RecoilValueReadOnly,
  isRecoilValue
};

var Recoil_RecoilValue_1 = Recoil_RecoilValue.AbstractRecoilValue;
var Recoil_RecoilValue_2 = Recoil_RecoilValue.RecoilState;
var Recoil_RecoilValue_3 = Recoil_RecoilValue.RecoilValueReadOnly;
var Recoil_RecoilValue_4 = Recoil_RecoilValue.isRecoilValue;

var Recoil_RecoilValue$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  AbstractRecoilValue: Recoil_RecoilValue_1,
  RecoilState: Recoil_RecoilValue_2,
  RecoilValueReadOnly: Recoil_RecoilValue_3,
  isRecoilValue: Recoil_RecoilValue_4
});

class DefaultValue {}

const DEFAULT_VALUE = new DefaultValue();

class RecoilValueNotReady extends Error {
  constructor(key) {
    super(`Tried to set the value of Recoil selector ${key} using an updater function, but it is an async selector in a pending or error state; this is not supported.`);
  }

}

// flowlint-next-line unclear-type:off
const nodes = new Map(); // flowlint-next-line unclear-type:off

const recoilValues = new Map();
/* eslint-disable no-redeclare */

function recoilValuesForKeys(keys) {
  return Recoil_mapIterable(keys, key => Recoil_nullthrows(recoilValues.get(key)));
}

function registerNode(node) {
  if (nodes.has(node.key)) {
    const message = `Duplicate atom key "${node.key}". This is a FATAL ERROR in
      production. But it is safe to ignore this warning if it occurred because of
      hot module replacement.`; // TODO Need to figure out if there is a standard/open-source equivalent to see if hot module replacement is happening:
    // prettier-ignore
    // @fb-only: if (__DEV__) {
    // @fb-only: const isAcceptingUpdate = require('__debug').isAcceptingUpdate;
    // prettier-ignore
    // @fb-only: if (typeof isAcceptingUpdate !== 'function' || !isAcceptingUpdate()) {
    // @fb-only: expectationViolation(message, 'recoil');
    // @fb-only: }
    // prettier-ignore
    // @fb-only: } else {
    // @fb-only: recoverableViolation(message, 'recoil');
    // @fb-only: }

    console.warn(message); // @oss-only
  }

  nodes.set(node.key, node);
  const recoilValue = node.set == null ? new Recoil_RecoilValue$1.RecoilValueReadOnly(node.key) : new Recoil_RecoilValue$1.RecoilState(node.key);
  recoilValues.set(node.key, recoilValue);
  return recoilValue;
}
/* eslint-enable no-redeclare */


class NodeMissingError extends Error {} // flowlint-next-line unclear-type:off


function getNode(key) {
  const node = nodes.get(key);

  if (node == null) {
    throw new NodeMissingError(`Missing definition for RecoilValue: "${key}""`);
  }

  return node;
} // flowlint-next-line unclear-type:off


function getNodeMaybe(key) {
  return nodes.get(key);
}

const configDeletionHandlers = new Map();

function deleteNodeConfigIfPossible(key) {
  var _node$shouldDeleteCon;

  if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
    return;
  }

  const node = nodes.get(key);

  if (node === null || node === void 0 ? void 0 : (_node$shouldDeleteCon = node.shouldDeleteConfigOnRelease) === null || _node$shouldDeleteCon === void 0 ? void 0 : _node$shouldDeleteCon.call(node)) {
    var _getConfigDeletionHan;

    nodes.delete(key);
    (_getConfigDeletionHan = getConfigDeletionHandler(key)) === null || _getConfigDeletionHan === void 0 ? void 0 : _getConfigDeletionHan();
    configDeletionHandlers.delete(key);
  }
}

function setConfigDeletionHandler(key, fn) {
  if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
    return;
  }

  if (fn === undefined) {
    configDeletionHandlers.delete(key);
  } else {
    configDeletionHandlers.set(key, fn);
  }
}

function getConfigDeletionHandler(key) {
  return configDeletionHandlers.get(key);
}

var Recoil_Node = {
  nodes,
  recoilValues,
  registerNode,
  getNode,
  getNodeMaybe,
  deleteNodeConfigIfPossible,
  setConfigDeletionHandler,
  getConfigDeletionHandler,
  recoilValuesForKeys,
  NodeMissingError,
  DefaultValue,
  DEFAULT_VALUE,
  RecoilValueNotReady
};

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function enqueueExecution(s, f) {
  f();
}

var Recoil_Queue = {
  enqueueExecution
};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var hamt_1 = createCommonjsModule(function (module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
/**
    @fileOverview Hash Array Mapped Trie.

    Code based on: https://github.com/exclipy/pdata
*/


var hamt = {}; // export

/* Configuration
 ******************************************************************************/

var SIZE = 5;
var BUCKET_SIZE = Math.pow(2, SIZE);
var MASK = BUCKET_SIZE - 1;
var MAX_INDEX_NODE = BUCKET_SIZE / 2;
var MIN_ARRAY_NODE = BUCKET_SIZE / 4;
/*
 ******************************************************************************/

var nothing = {};

var constant = function constant(x) {
  return function () {
    return x;
  };
};
/**
    Get 32 bit hash of string.

    Based on:
    http://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery
*/


var hash = hamt.hash = function (str) {
  var type = typeof str === 'undefined' ? 'undefined' : _typeof(str);
  if (type === 'number') return str;
  if (type !== 'string') str += '';
  var hash = 0;

  for (var i = 0, len = str.length; i < len; ++i) {
    var c = str.charCodeAt(i);
    hash = (hash << 5) - hash + c | 0;
  }

  return hash;
};
/* Bit Ops
 ******************************************************************************/

/**
    Hamming weight.

    Taken from: http://jsperf.com/hamming-weight
*/


var popcount = function popcount(x) {
  x -= x >> 1 & 0x55555555;
  x = (x & 0x33333333) + (x >> 2 & 0x33333333);
  x = x + (x >> 4) & 0x0f0f0f0f;
  x += x >> 8;
  x += x >> 16;
  return x & 0x7f;
};

var hashFragment = function hashFragment(shift, h) {
  return h >>> shift & MASK;
};

var toBitmap = function toBitmap(x) {
  return 1 << x;
};

var fromBitmap = function fromBitmap(bitmap, bit) {
  return popcount(bitmap & bit - 1);
};
/* Array Ops
 ******************************************************************************/

/**
    Set a value in an array.

    @param mutate Should the input array be mutated?
    @param at Index to change.
    @param v New value
    @param arr Array.
*/


var arrayUpdate = function arrayUpdate(mutate, at, v, arr) {
  var out = arr;

  if (!mutate) {
    var len = arr.length;
    out = new Array(len);

    for (var i = 0; i < len; ++i) {
      out[i] = arr[i];
    }
  }

  out[at] = v;
  return out;
};
/**
    Remove a value from an array.

    @param mutate Should the input array be mutated?
    @param at Index to remove.
    @param arr Array.
*/


var arraySpliceOut = function arraySpliceOut(mutate, at, arr) {
  var newLen = arr.length - 1;
  var i = 0;
  var g = 0;
  var out = arr;

  if (mutate) {
    i = g = at;
  } else {
    out = new Array(newLen);

    while (i < at) {
      out[g++] = arr[i++];
    }
  }

  ++i;

  while (i <= newLen) {
    out[g++] = arr[i++];
  }

  if (mutate) {
    out.length = newLen;
  }

  return out;
};
/**
    Insert a value into an array.

    @param mutate Should the input array be mutated?
    @param at Index to insert at.
    @param v Value to insert,
    @param arr Array.
*/


var arraySpliceIn = function arraySpliceIn(mutate, at, v, arr) {
  var len = arr.length;

  if (mutate) {
    var _i = len;

    while (_i >= at) {
      arr[_i--] = arr[_i];
    }

    arr[at] = v;
    return arr;
  }

  var i = 0,
      g = 0;
  var out = new Array(len + 1);

  while (i < at) {
    out[g++] = arr[i++];
  }

  out[at] = v;

  while (i < len) {
    out[++g] = arr[i++];
  }

  return out;
};
/* Node Structures
 ******************************************************************************/


var LEAF = 1;
var COLLISION = 2;
var INDEX = 3;
var ARRAY = 4;
/**
    Empty node.
*/

var empty = {
  __hamt_isEmpty: true
};

var isEmptyNode = function isEmptyNode(x) {
  return x === empty || x && x.__hamt_isEmpty;
};
/**
    Leaf holding a value.

    @member edit Edit of the node.
    @member hash Hash of key.
    @member key Key.
    @member value Value stored.
*/


var Leaf = function Leaf(edit, hash, key, value) {
  return {
    type: LEAF,
    edit: edit,
    hash: hash,
    key: key,
    value: value,
    _modify: Leaf__modify
  };
};
/**
    Leaf holding multiple values with the same hash but different keys.

    @member edit Edit of the node.
    @member hash Hash of key.
    @member children Array of collision children node.
*/


var Collision = function Collision(edit, hash, children) {
  return {
    type: COLLISION,
    edit: edit,
    hash: hash,
    children: children,
    _modify: Collision__modify
  };
};
/**
    Internal node with a sparse set of children.

    Uses a bitmap and array to pack children.

  @member edit Edit of the node.
    @member mask Bitmap that encode the positions of children in the array.
    @member children Array of child nodes.
*/


var IndexedNode = function IndexedNode(edit, mask, children) {
  return {
    type: INDEX,
    edit: edit,
    mask: mask,
    children: children,
    _modify: IndexedNode__modify
  };
};
/**
    Internal node with many children.

    @member edit Edit of the node.
    @member size Number of children.
    @member children Array of child nodes.
*/


var ArrayNode = function ArrayNode(edit, size, children) {
  return {
    type: ARRAY,
    edit: edit,
    size: size,
    children: children,
    _modify: ArrayNode__modify
  };
};
/**
    Is `node` a leaf node?
*/


var isLeaf = function isLeaf(node) {
  return node === empty || node.type === LEAF || node.type === COLLISION;
};
/* Internal node operations.
 ******************************************************************************/

/**
    Expand an indexed node into an array node.

  @param edit Current edit.
    @param frag Index of added child.
    @param child Added child.
    @param mask Index node mask before child added.
    @param subNodes Index node children before child added.
*/


var expand = function expand(edit, frag, child, bitmap, subNodes) {
  var arr = [];
  var bit = bitmap;
  var count = 0;

  for (var i = 0; bit; ++i) {
    if (bit & 1) arr[i] = subNodes[count++];
    bit >>>= 1;
  }

  arr[frag] = child;
  return ArrayNode(edit, count + 1, arr);
};
/**
    Collapse an array node into a indexed node.

  @param edit Current edit.
    @param count Number of elements in new array.
    @param removed Index of removed element.
    @param elements Array node children before remove.
*/


var pack = function pack(edit, count, removed, elements) {
  var children = new Array(count - 1);
  var g = 0;
  var bitmap = 0;

  for (var i = 0, len = elements.length; i < len; ++i) {
    if (i !== removed) {
      var elem = elements[i];

      if (elem && !isEmptyNode(elem)) {
        children[g++] = elem;
        bitmap |= 1 << i;
      }
    }
  }

  return IndexedNode(edit, bitmap, children);
};
/**
    Merge two leaf nodes.

    @param shift Current shift.
    @param h1 Node 1 hash.
    @param n1 Node 1.
    @param h2 Node 2 hash.
    @param n2 Node 2.
*/


var mergeLeaves = function mergeLeaves(edit, shift, h1, n1, h2, n2) {
  if (h1 === h2) return Collision(edit, h1, [n2, n1]);
  var subH1 = hashFragment(shift, h1);
  var subH2 = hashFragment(shift, h2);
  return IndexedNode(edit, toBitmap(subH1) | toBitmap(subH2), subH1 === subH2 ? [mergeLeaves(edit, shift + SIZE, h1, n1, h2, n2)] : subH1 < subH2 ? [n1, n2] : [n2, n1]);
};
/**
    Update an entry in a collision list.

    @param mutate Should mutation be used?
    @param edit Current edit.
    @param keyEq Key compare function.
    @param hash Hash of collision.
    @param list Collision list.
    @param f Update function.
    @param k Key to update.
    @param size Size ref.
*/


var updateCollisionList = function updateCollisionList(mutate, edit, keyEq, h, list, f, k, size) {
  var len = list.length;

  for (var i = 0; i < len; ++i) {
    var child = list[i];

    if (keyEq(k, child.key)) {
      var value = child.value;

      var _newValue = f(value);

      if (_newValue === value) return list;

      if (_newValue === nothing) {
        --size.value;
        return arraySpliceOut(mutate, i, list);
      }

      return arrayUpdate(mutate, i, Leaf(edit, h, k, _newValue), list);
    }
  }

  var newValue = f();
  if (newValue === nothing) return list;
  ++size.value;
  return arrayUpdate(mutate, len, Leaf(edit, h, k, newValue), list);
};

var canEditNode = function canEditNode(edit, node) {
  return edit === node.edit;
};
/* Editing
 ******************************************************************************/


var Leaf__modify = function Leaf__modify(edit, keyEq, shift, f, h, k, size) {
  if (keyEq(k, this.key)) {
    var _v = f(this.value);

    if (_v === this.value) return this;else if (_v === nothing) {
      --size.value;
      return empty;
    }

    if (canEditNode(edit, this)) {
      this.value = _v;
      return this;
    }

    return Leaf(edit, h, k, _v);
  }

  var v = f();
  if (v === nothing) return this;
  ++size.value;
  return mergeLeaves(edit, shift, this.hash, this, h, Leaf(edit, h, k, v));
};

var Collision__modify = function Collision__modify(edit, keyEq, shift, f, h, k, size) {
  if (h === this.hash) {
    var canEdit = canEditNode(edit, this);
    var list = updateCollisionList(canEdit, edit, keyEq, this.hash, this.children, f, k, size);
    if (list === this.children) return this;
    return list.length > 1 ? Collision(edit, this.hash, list) : list[0]; // collapse single element collision list
  }

  var v = f();
  if (v === nothing) return this;
  ++size.value;
  return mergeLeaves(edit, shift, this.hash, this, h, Leaf(edit, h, k, v));
};

var IndexedNode__modify = function IndexedNode__modify(edit, keyEq, shift, f, h, k, size) {
  var mask = this.mask;
  var children = this.children;
  var frag = hashFragment(shift, h);
  var bit = toBitmap(frag);
  var indx = fromBitmap(mask, bit);
  var exists = mask & bit;
  var current = exists ? children[indx] : empty;

  var child = current._modify(edit, keyEq, shift + SIZE, f, h, k, size);

  if (current === child) return this;
  var canEdit = canEditNode(edit, this);
  var bitmap = mask;
  var newChildren = void 0;

  if (exists && isEmptyNode(child)) {
    // remove
    bitmap &= ~bit;
    if (!bitmap) return empty;
    if (children.length <= 2 && isLeaf(children[indx ^ 1])) return children[indx ^ 1]; // collapse

    newChildren = arraySpliceOut(canEdit, indx, children);
  } else if (!exists && !isEmptyNode(child)) {
    // add
    if (children.length >= MAX_INDEX_NODE) return expand(edit, frag, child, mask, children);
    bitmap |= bit;
    newChildren = arraySpliceIn(canEdit, indx, child, children);
  } else {
    // modify
    newChildren = arrayUpdate(canEdit, indx, child, children);
  }

  if (canEdit) {
    this.mask = bitmap;
    this.children = newChildren;
    return this;
  }

  return IndexedNode(edit, bitmap, newChildren);
};

var ArrayNode__modify = function ArrayNode__modify(edit, keyEq, shift, f, h, k, size) {
  var count = this.size;
  var children = this.children;
  var frag = hashFragment(shift, h);
  var child = children[frag];

  var newChild = (child || empty)._modify(edit, keyEq, shift + SIZE, f, h, k, size);

  if (child === newChild) return this;
  var canEdit = canEditNode(edit, this);
  var newChildren = void 0;

  if (isEmptyNode(child) && !isEmptyNode(newChild)) {
    // add
    ++count;
    newChildren = arrayUpdate(canEdit, frag, newChild, children);
  } else if (!isEmptyNode(child) && isEmptyNode(newChild)) {
    // remove
    --count;
    if (count <= MIN_ARRAY_NODE) return pack(edit, count, frag, children);
    newChildren = arrayUpdate(canEdit, frag, empty, children);
  } else {
    // modify
    newChildren = arrayUpdate(canEdit, frag, newChild, children);
  }

  if (canEdit) {
    this.size = count;
    this.children = newChildren;
    return this;
  }

  return ArrayNode(edit, count, newChildren);
};

empty._modify = function (edit, keyEq, shift, f, h, k, size) {
  var v = f();
  if (v === nothing) return empty;
  ++size.value;
  return Leaf(edit, h, k, v);
};
/*
 ******************************************************************************/


function Map(editable, edit, config, root, size) {
  this._editable = editable;
  this._edit = edit;
  this._config = config;
  this._root = root;
  this._size = size;
}

Map.prototype.setTree = function (newRoot, newSize) {
  if (this._editable) {
    this._root = newRoot;
    this._size = newSize;
    return this;
  }

  return newRoot === this._root ? this : new Map(this._editable, this._edit, this._config, newRoot, newSize);
};
/* Queries
 ******************************************************************************/

/**
    Lookup the value for `key` in `map` using a custom `hash`.

    Returns the value or `alt` if none.
*/


var tryGetHash = hamt.tryGetHash = function (alt, hash, key, map) {
  var node = map._root;
  var shift = 0;
  var keyEq = map._config.keyEq;

  while (true) {
    switch (node.type) {
      case LEAF:
        {
          return keyEq(key, node.key) ? node.value : alt;
        }

      case COLLISION:
        {
          if (hash === node.hash) {
            var children = node.children;

            for (var i = 0, len = children.length; i < len; ++i) {
              var child = children[i];
              if (keyEq(key, child.key)) return child.value;
            }
          }

          return alt;
        }

      case INDEX:
        {
          var frag = hashFragment(shift, hash);
          var bit = toBitmap(frag);

          if (node.mask & bit) {
            node = node.children[fromBitmap(node.mask, bit)];
            shift += SIZE;
            break;
          }

          return alt;
        }

      case ARRAY:
        {
          node = node.children[hashFragment(shift, hash)];

          if (node) {
            shift += SIZE;
            break;
          }

          return alt;
        }

      default:
        return alt;
    }
  }
};

Map.prototype.tryGetHash = function (alt, hash, key) {
  return tryGetHash(alt, hash, key, this);
};
/**
    Lookup the value for `key` in `map` using internal hash function.

    @see `tryGetHash`
*/


var tryGet = hamt.tryGet = function (alt, key, map) {
  return tryGetHash(alt, map._config.hash(key), key, map);
};

Map.prototype.tryGet = function (alt, key) {
  return tryGet(alt, key, this);
};
/**
    Lookup the value for `key` in `map` using a custom `hash`.

    Returns the value or `undefined` if none.
*/


var getHash = hamt.getHash = function (hash, key, map) {
  return tryGetHash(undefined, hash, key, map);
};

Map.prototype.getHash = function (hash, key) {
  return getHash(hash, key, this);
};
/**
    Lookup the value for `key` in `map` using internal hash function.

    @see `get`
*/


var get = hamt.get = function (key, map) {
  return tryGetHash(undefined, map._config.hash(key), key, map);
};

Map.prototype.get = function (key, alt) {
  return tryGet(alt, key, this);
};
/**
    Does an entry exist for `key` in `map`? Uses custom `hash`.
*/


var hasHash = hamt.has = function (hash, key, map) {
  return tryGetHash(nothing, hash, key, map) !== nothing;
};

Map.prototype.hasHash = function (hash, key) {
  return hasHash(hash, key, this);
};
/**
    Does an entry exist for `key` in `map`? Uses internal hash function.
*/


var has = hamt.has = function (key, map) {
  return hasHash(map._config.hash(key), key, map);
};

Map.prototype.has = function (key) {
  return has(key, this);
};

var defKeyCompare = function defKeyCompare(x, y) {
  return x === y;
};
/**
    Create an empty map.

    @param config Configuration.
*/


hamt.make = function (config) {
  return new Map(0, 0, {
    keyEq: config && config.keyEq || defKeyCompare,
    hash: config && config.hash || hash
  }, empty, 0);
};
/**
    Empty map.
*/


hamt.empty = hamt.make();
/**
    Does `map` contain any elements?
*/

var isEmpty = hamt.isEmpty = function (map) {
  return map && !!isEmptyNode(map._root);
};

Map.prototype.isEmpty = function () {
  return isEmpty(this);
};
/* Updates
 ******************************************************************************/

/**
    Alter the value stored for `key` in `map` using function `f` using
    custom hash.

    `f` is invoked with the current value for `k` if it exists,
    or no arguments if no such value exists. `modify` will always either
    update or insert a value into the map.

    Returns a map with the modified value. Does not alter `map`.
*/


var modifyHash = hamt.modifyHash = function (f, hash, key, map) {
  var size = {
    value: map._size
  };

  var newRoot = map._root._modify(map._editable ? map._edit : NaN, map._config.keyEq, 0, f, hash, key, size);

  return map.setTree(newRoot, size.value);
};

Map.prototype.modifyHash = function (hash, key, f) {
  return modifyHash(f, hash, key, this);
};
/**
    Alter the value stored for `key` in `map` using function `f` using
    internal hash function.

    @see `modifyHash`
*/


var modify = hamt.modify = function (f, key, map) {
  return modifyHash(f, map._config.hash(key), key, map);
};

Map.prototype.modify = function (key, f) {
  return modify(f, key, this);
};
/**
    Store `value` for `key` in `map` using custom `hash`.

    Returns a map with the modified value. Does not alter `map`.
*/


var setHash = hamt.setHash = function (hash, key, value, map) {
  return modifyHash(constant(value), hash, key, map);
};

Map.prototype.setHash = function (hash, key, value) {
  return setHash(hash, key, value, this);
};
/**
    Store `value` for `key` in `map` using internal hash function.

    @see `setHash`
*/


var set = hamt.set = function (key, value, map) {
  return setHash(map._config.hash(key), key, value, map);
};

Map.prototype.set = function (key, value) {
  return set(key, value, this);
};
/**
    Remove the entry for `key` in `map`.

    Returns a map with the value removed. Does not alter `map`.
*/


var del = constant(nothing);

var removeHash = hamt.removeHash = function (hash, key, map) {
  return modifyHash(del, hash, key, map);
};

Map.prototype.removeHash = Map.prototype.deleteHash = function (hash, key) {
  return removeHash(hash, key, this);
};
/**
    Remove the entry for `key` in `map` using internal hash function.

    @see `removeHash`
*/


var remove = hamt.remove = function (key, map) {
  return removeHash(map._config.hash(key), key, map);
};

Map.prototype.remove = Map.prototype.delete = function (key) {
  return remove(key, this);
};
/* Mutation
 ******************************************************************************/

/**
    Mark `map` as mutable.
 */


var beginMutation = hamt.beginMutation = function (map) {
  return new Map(map._editable + 1, map._edit + 1, map._config, map._root, map._size);
};

Map.prototype.beginMutation = function () {
  return beginMutation(this);
};
/**
    Mark `map` as immutable.
 */


var endMutation = hamt.endMutation = function (map) {
  map._editable = map._editable && map._editable - 1;
  return map;
};

Map.prototype.endMutation = function () {
  return endMutation(this);
};
/**
    Mutate `map` within the context of `f`.
    @param f
    @param map HAMT
*/


var mutate = hamt.mutate = function (f, map) {
  var transient = beginMutation(map);
  f(transient);
  return endMutation(transient);
};

Map.prototype.mutate = function (f) {
  return mutate(f, this);
};
/* Traversal
 ******************************************************************************/

/**
    Apply a continuation.
*/


var appk = function appk(k) {
  return k && lazyVisitChildren(k[0], k[1], k[2], k[3], k[4]);
};
/**
    Recursively visit all values stored in an array of nodes lazily.
*/


var lazyVisitChildren = function lazyVisitChildren(len, children, i, f, k) {
  while (i < len) {
    var child = children[i++];
    if (child && !isEmptyNode(child)) return lazyVisit(child, f, [len, children, i, f, k]);
  }

  return appk(k);
};
/**
    Recursively visit all values stored in `node` lazily.
*/


var lazyVisit = function lazyVisit(node, f, k) {
  switch (node.type) {
    case LEAF:
      return {
        value: f(node),
        rest: k
      };

    case COLLISION:
    case ARRAY:
    case INDEX:
      var children = node.children;
      return lazyVisitChildren(children.length, children, 0, f, k);

    default:
      return appk(k);
  }
};

var DONE = {
  done: true
};
/**
    Javascript iterator over a map.
*/

function MapIterator(v) {
  this.v = v;
}

MapIterator.prototype.next = function () {
  if (!this.v) return DONE;
  var v0 = this.v;
  this.v = appk(v0.rest);
  return v0;
};

MapIterator.prototype[Symbol.iterator] = function () {
  return this;
};
/**
    Lazily visit each value in map with function `f`.
*/


var visit = function visit(map, f) {
  return new MapIterator(lazyVisit(map._root, f));
};
/**
    Get a Javascsript iterator of `map`.

    Iterates over `[key, value]` arrays.
*/


var buildPairs = function buildPairs(x) {
  return [x.key, x.value];
};

var entries = hamt.entries = function (map) {
  return visit(map, buildPairs);
};

Map.prototype.entries = Map.prototype[Symbol.iterator] = function () {
  return entries(this);
};
/**
    Get array of all keys in `map`.

    Order is not guaranteed.
*/


var buildKeys = function buildKeys(x) {
  return x.key;
};

var keys = hamt.keys = function (map) {
  return visit(map, buildKeys);
};

Map.prototype.keys = function () {
  return keys(this);
};
/**
    Get array of all values in `map`.

    Order is not guaranteed, duplicates are preserved.
*/


var buildValues = function buildValues(x) {
  return x.value;
};

var values = hamt.values = Map.prototype.values = function (map) {
  return visit(map, buildValues);
};

Map.prototype.values = function () {
  return values(this);
};
/* Fold
 ******************************************************************************/

/**
    Visit every entry in the map, aggregating data.

    Order of nodes is not guaranteed.

    @param f Function mapping accumulated value, value, and key to new value.
    @param z Starting value.
    @param m HAMT
*/


var fold = hamt.fold = function (f, z, m) {
  var root = m._root;
  if (root.type === LEAF) return f(z, root.value, root.key);
  var toVisit = [root.children];
  var children = void 0;

  while (children = toVisit.pop()) {
    for (var i = 0, len = children.length; i < len;) {
      var child = children[i++];

      if (child && child.type) {
        if (child.type === LEAF) z = f(z, child.value, child.key);else toVisit.push(child.children);
      }
    }
  }

  return z;
};

Map.prototype.fold = function (f, z) {
  return fold(f, z, this);
};
/**
    Visit every entry in the map, aggregating data.

    Order of nodes is not guaranteed.

    @param f Function invoked with value and key
    @param map HAMT
*/


var forEach = hamt.forEach = function (f, map) {
  return fold(function (_, value, key) {
    return f(value, key, map);
  }, null, map);
};

Map.prototype.forEach = function (f) {
  return forEach(f, this);
};
/* Aggregate
 ******************************************************************************/

/**
    Get the number of entries in `map`.
*/


var count = hamt.count = function (map) {
  return map._size;
};

Map.prototype.count = function () {
  return count(this);
};

Object.defineProperty(Map.prototype, 'size', {
  get: Map.prototype.count
});
/* Export
 ******************************************************************************/

if ( module.exports) {
  module.exports = hamt;
} else {
  undefined.hamt = hamt;
}
});

class BuiltInMap {
  constructor(existing) {
    _defineProperty(this, "_map", void 0);

    this._map = new Map(existing === null || existing === void 0 ? void 0 : existing.entries());
  }

  keys() {
    return this._map.keys();
  }

  entries() {
    return this._map.entries();
  }

  get(k) {
    return this._map.get(k);
  }

  has(k) {
    return this._map.has(k);
  }

  set(k, v) {
    this._map.set(k, v);

    return this;
  }

  delete(k) {
    this._map.delete(k);

    return this;
  }

  clone() {
    return persistentMap(this);
  }

  toMap() {
    return new Map(this._map);
  }

}

class HashArrayMappedTrieMap {
  // Because hamt.empty is not a function there is no way to introduce type
  // parameters on it, so empty is typed as HAMTPlusMap<string, mixed>.
  // $FlowIssue
  constructor(existing) {
    _defineProperty(this, "_hamt", hamt_1.empty.beginMutation());

    if (existing instanceof HashArrayMappedTrieMap) {
      const h = existing._hamt.endMutation();

      existing._hamt = h.beginMutation();
      this._hamt = h.beginMutation();
    } else if (existing) {
      for (const [k, v] of existing.entries()) {
        this._hamt.set(k, v);
      }
    }
  }

  keys() {
    return this._hamt.keys();
  }

  entries() {
    return this._hamt.entries();
  }

  get(k) {
    return this._hamt.get(k);
  }

  has(k) {
    return this._hamt.has(k);
  }

  set(k, v) {
    this._hamt.set(k, v);

    return this;
  }

  delete(k) {
    this._hamt.delete(k);

    return this;
  }

  clone() {
    return persistentMap(this);
  }

  toMap() {
    return new Map(this._hamt);
  }

}

function persistentMap(existing) {
  if (Recoil_gkx_1('recoil_hamt_2020')) {
    return new HashArrayMappedTrieMap(existing);
  } else {
    return new BuiltInMap(existing);
  }
}

var Recoil_PersistentMap = {
  persistentMap
};

var Recoil_PersistentMap_1 = Recoil_PersistentMap.persistentMap;

var Recoil_PersistentMap$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  persistentMap: Recoil_PersistentMap_1
});

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */
/**
 * Returns a set containing all of the values from the first set that are not
 * present in any of the subsequent sets.
 *
 * Note: this is written procedurally (i.e., without filterSet) for performant
 * use in tight loops.
 */

function differenceSets(set, ...setsWithValuesToRemove) {
  const ret = new Set();

  FIRST: for (const value of set) {
    for (const otherSet of setsWithValuesToRemove) {
      if (otherSet.has(value)) {
        continue FIRST;
      }
    }

    ret.add(value);
  }

  return ret;
}

var Recoil_differenceSets = differenceSets;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */
/**
 * Returns a new Map object with the same keys as the original, but with the
 * values replaced with the output of the given callback function.
 */

function mapMap(map, callback) {
  const result = new Map();
  map.forEach((value, key) => {
    result.set(key, callback(value, key));
  });
  return result;
}

var Recoil_mapMap = mapMap;

function graph() {
  return {
    nodeDeps: new Map(),
    nodeToNodeSubscriptions: new Map()
  };
}

function cloneGraph(graph) {
  return {
    nodeDeps: Recoil_mapMap(graph.nodeDeps, s => new Set(s)),
    nodeToNodeSubscriptions: Recoil_mapMap(graph.nodeToNodeSubscriptions, s => new Set(s))
  };
} // Note that this overwrites the deps of existing nodes, rather than unioning
// the new deps with the old deps.


function mergeDependencyMapIntoGraph(deps, graph, // If olderGraph is given then we will not overwrite changes made to the given
// graph compared with olderGraph:
olderGraph) {
  const {
    nodeDeps,
    nodeToNodeSubscriptions
  } = graph;
  deps.forEach((upstreams, downstream) => {
    const existingUpstreams = nodeDeps.get(downstream);

    if (existingUpstreams && olderGraph && existingUpstreams !== olderGraph.nodeDeps.get(downstream)) {
      return;
    } // Update nodeDeps:


    nodeDeps.set(downstream, new Set(upstreams)); // Add new deps to nodeToNodeSubscriptions:

    const addedUpstreams = existingUpstreams == null ? upstreams : Recoil_differenceSets(upstreams, existingUpstreams);
    addedUpstreams.forEach(upstream => {
      if (!nodeToNodeSubscriptions.has(upstream)) {
        nodeToNodeSubscriptions.set(upstream, new Set());
      }

      const existing = Recoil_nullthrows(nodeToNodeSubscriptions.get(upstream));
      existing.add(downstream);
    }); // Remove removed deps from nodeToNodeSubscriptions:

    if (existingUpstreams) {
      const removedUpstreams = Recoil_differenceSets(existingUpstreams, upstreams);
      removedUpstreams.forEach(upstream => {
        if (!nodeToNodeSubscriptions.has(upstream)) {
          return;
        }

        const existing = Recoil_nullthrows(nodeToNodeSubscriptions.get(upstream));
        existing.delete(downstream);

        if (existing.size === 0) {
          nodeToNodeSubscriptions.delete(upstream);
        }
      });
    }
  });
}

function saveDependencyMapToStore(dependencyMap, store, version) {
  var _storeState$nextTree, _storeState$previousT, _storeState$previousT2, _storeState$previousT3;

  const storeState = store.getState();

  if (!(version === storeState.currentTree.version || version === ((_storeState$nextTree = storeState.nextTree) === null || _storeState$nextTree === void 0 ? void 0 : _storeState$nextTree.version) || version === ((_storeState$previousT = storeState.previousTree) === null || _storeState$previousT === void 0 ? void 0 : _storeState$previousT.version))) {
    Recoil_recoverableViolation('Tried to save dependencies to a discarded tree');
  } // Merge the dependencies discovered into the store's dependency map
  // for the version that was read:


  const graph = store.getGraph(version);
  mergeDependencyMapIntoGraph(dependencyMap, graph); // If this version is not the latest version, also write these dependencies
  // into later versions if they don't already have their own:

  if (version === ((_storeState$previousT2 = storeState.previousTree) === null || _storeState$previousT2 === void 0 ? void 0 : _storeState$previousT2.version)) {
    const currentGraph = store.getGraph(storeState.currentTree.version);
    mergeDependencyMapIntoGraph(dependencyMap, currentGraph, graph);
  }

  if (version === ((_storeState$previousT3 = storeState.previousTree) === null || _storeState$previousT3 === void 0 ? void 0 : _storeState$previousT3.version) || version === storeState.currentTree.version) {
    var _storeState$nextTree2;

    const nextVersion = (_storeState$nextTree2 = storeState.nextTree) === null || _storeState$nextTree2 === void 0 ? void 0 : _storeState$nextTree2.version;

    if (nextVersion !== undefined) {
      const nextGraph = store.getGraph(nextVersion);
      mergeDependencyMapIntoGraph(dependencyMap, nextGraph, graph);
    }
  }
}

function mergeDepsIntoDependencyMap(from, into) {
  from.forEach((upstreamDeps, downstreamNode) => {
    if (!into.has(downstreamNode)) {
      into.set(downstreamNode, new Set());
    }

    const deps = Recoil_nullthrows(into.get(downstreamNode));
    upstreamDeps.forEach(dep => deps.add(dep));
  });
}

function addToDependencyMap(downstream, upstream, dependencyMap) {
  if (!dependencyMap.has(downstream)) {
    dependencyMap.set(downstream, new Set());
  }

  Recoil_nullthrows(dependencyMap.get(downstream)).add(upstream);
}

var Recoil_Graph = {
  addToDependencyMap,
  cloneGraph,
  graph,
  mergeDepsIntoDependencyMap,
  saveDependencyMapToStore
};

const {
  persistentMap: persistentMap$1
} = Recoil_PersistentMap$1;

const {
  graph: graph$1
} = Recoil_Graph;

let nextTreeStateVersion = 0;

const getNextTreeStateVersion = () => nextTreeStateVersion++;

function makeEmptyTreeState() {
  const version = getNextTreeStateVersion();
  return {
    version,
    stateID: version,
    transactionMetadata: {},
    dirtyAtoms: new Set(),
    atomValues: persistentMap$1(),
    nonvalidatedAtoms: persistentMap$1()
  };
}

function makeEmptyStoreState() {
  const currentTree = makeEmptyTreeState();
  return {
    currentTree,
    nextTree: null,
    previousTree: null,
    commitDepth: 0,
    knownAtoms: new Set(),
    knownSelectors: new Set(),
    transactionSubscriptions: new Map(),
    nodeTransactionSubscriptions: new Map(),
    nodeToComponentSubscriptions: new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: new Set(),
    graphsByVersion: new Map().set(currentTree.version, graph$1()),
    versionsUsedByComponent: new Map(),
    retention: {
      referenceCounts: new Map(),
      nodesRetainedByZone: new Map(),
      retainablesToCheckForRelease: new Set()
    },
    nodeCleanupFunctions: new Map()
  };
}

var Recoil_State = {
  makeEmptyTreeState,
  makeEmptyStoreState,
  getNextTreeStateVersion
};

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function unionSets(...sets) {
  const result = new Set();

  for (const set of sets) {
    for (const value of set) {
      result.add(value);
    }
  }

  return result;
}

var Recoil_unionSets = unionSets;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Utilities for working with built-in Maps and Sets without mutating them.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function setByAddingToSet(set, v) {
  const next = new Set(set);
  next.add(v);
  return next;
}

function setByDeletingFromSet(set, v) {
  const next = new Set(set);
  next.delete(v);
  return next;
}

function mapBySettingInMap(map, k, v) {
  const next = new Map(map);
  next.set(k, v);
  return next;
}

function mapByUpdatingInMap(map, k, updater) {
  const next = new Map(map);
  next.set(k, updater(next.get(k)));
  return next;
}

function mapByDeletingFromMap(map, k) {
  const next = new Map(map);
  next.delete(k);
  return next;
}

function mapByDeletingMultipleFromMap(map, ks) {
  const next = new Map(map);
  ks.forEach(k => next.delete(k));
  return next;
}

var Recoil_CopyOnWrite = {
  setByAddingToSet,
  setByDeletingFromSet,
  mapBySettingInMap,
  mapByUpdatingInMap,
  mapByDeletingFromMap,
  mapByDeletingMultipleFromMap
};

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */
/**
 * Creates a new iterable whose output is generated by passing the input
 * iterable's values through the filter function.
 */

function* filterIterable(iterable, predicate) {
  // Use generator to create iterable/iterator
  let index = 0;

  for (const value of iterable) {
    if (predicate(value, index++)) {
      yield value;
    }
  }
}

var Recoil_filterIterable = filterIterable;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

class RetentionZone {}

function retentionZone() {
  return new RetentionZone();
}

var Recoil_RetentionZone = {
  RetentionZone,
  retentionZone
};

const {
  setByAddingToSet: setByAddingToSet$1
} = Recoil_CopyOnWrite;







const {
  getNode: getNode$1,
  getNodeMaybe: getNodeMaybe$1,
  recoilValuesForKeys: recoilValuesForKeys$1
} = Recoil_Node;

const {
  RetentionZone: RetentionZone$1
} = Recoil_RetentionZone; // flowlint-next-line unclear-type:off


const emptySet = Object.freeze(new Set());

class ReadOnlyRecoilValueError extends Error {}

function initializeRetentionForNode(store, nodeKey, retainedBy) {
  if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
    return () => undefined;
  }

  const {
    nodesRetainedByZone
  } = store.getState().retention;

  function addToZone(zone) {
    let set = nodesRetainedByZone.get(zone);

    if (!set) {
      nodesRetainedByZone.set(zone, set = new Set());
    }

    set.add(nodeKey);
  }

  if (retainedBy instanceof RetentionZone$1) {
    addToZone(retainedBy);
  } else if (Array.isArray(retainedBy)) {
    for (const zone of retainedBy) {
      addToZone(zone);
    }
  }

  return () => {
    if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
      return;
    }

    const nodesRetainedByZone = store.getState().retention.nodesRetainedByZone;

    function deleteFromZone(zone) {
      const set = nodesRetainedByZone.get(zone);

      if (set) {
        set.delete(nodeKey);
      }

      if (set && set.size === 0) {
        nodesRetainedByZone.delete(zone);
      }
    }

    if (retainedBy instanceof RetentionZone$1) {
      deleteFromZone(retainedBy);
    } else if (Array.isArray(retainedBy)) {
      for (const zone of retainedBy) {
        deleteFromZone(zone);
      }
    }
  };
}

function initializeNodeIfNewToStore(store, treeState, key, trigger) {
  const storeState = store.getState();

  if (storeState.nodeCleanupFunctions.has(key)) {
    return;
  }

  const config = getNode$1(key);
  const retentionCleanup = initializeRetentionForNode(store, key, config.retainedBy);
  const nodeCleanup = config.init(store, treeState, trigger);
  storeState.nodeCleanupFunctions.set(key, () => {
    nodeCleanup();
    retentionCleanup();
  });
}

function cleanUpNode(store, key) {
  var _state$nodeCleanupFun;

  const state = store.getState();
  (_state$nodeCleanupFun = state.nodeCleanupFunctions.get(key)) === null || _state$nodeCleanupFun === void 0 ? void 0 : _state$nodeCleanupFun();
  state.nodeCleanupFunctions.delete(key);
} // Get the current value loadable of a node and update the state.
// Update dependencies and subscriptions for selectors.
// Update saved value validation for atoms.


function getNodeLoadable(store, state, key) {
  initializeNodeIfNewToStore(store, state, key, 'get');
  return getNode$1(key).get(store, state);
} // Peek at the current value loadable for a node without any evaluation or state change


function peekNodeLoadable(store, state, key) {
  return getNode$1(key).peek(store, state);
} // Write value directly to state bypassing the Node interface as the node
// definitions may not have been loaded yet when processing the initial snapshot.


function setUnvalidatedAtomValue_DEPRECATED(state, key, newValue) {
  var _node$invalidate;

  const node = getNodeMaybe$1(key);
  node === null || node === void 0 ? void 0 : (_node$invalidate = node.invalidate) === null || _node$invalidate === void 0 ? void 0 : _node$invalidate.call(node, state);
  return { ...state,
    atomValues: state.atomValues.clone().delete(key),
    nonvalidatedAtoms: state.nonvalidatedAtoms.clone().set(key, newValue),
    dirtyAtoms: setByAddingToSet$1(state.dirtyAtoms, key)
  };
} // Return the discovered dependencies and values to be written by setting
// a node value. (Multiple values may be written due to selectors getting to
// set upstreams; deps may be discovered because of reads in updater functions.)


function setNodeValue(store, state, key, newValue) {
  const node = getNode$1(key);

  if (node.set == null) {
    throw new ReadOnlyRecoilValueError(`Attempt to set read-only RecoilValue: ${key}`);
  }

  const set = node.set; // so flow doesn't lose the above refinement.

  initializeNodeIfNewToStore(store, state, key, 'set');
  return set(store, state, newValue);
}

function peekNodeInfo(store, state, key) {
  var _graph$nodeDeps$get, _storeState$nodeToCom, _storeState$nodeToCom2;

  const storeState = store.getState();
  const graph = store.getGraph(state.version);
  const type = storeState.knownAtoms.has(key) ? 'atom' : storeState.knownSelectors.has(key) ? 'selector' : undefined;
  const downstreamNodes = Recoil_filterIterable(getDownstreamNodes(store, state, new Set([key])), nodeKey => nodeKey !== key);
  return {
    loadable: peekNodeLoadable(store, state, key),
    isActive: storeState.knownAtoms.has(key) || storeState.knownSelectors.has(key),
    isSet: type === 'selector' ? false : state.atomValues.has(key),
    isModified: state.dirtyAtoms.has(key),
    type,
    // Report current dependencies.  If the node hasn't been evaluated, then
    // dependencies may be missing based on the current state.
    deps: recoilValuesForKeys$1((_graph$nodeDeps$get = graph.nodeDeps.get(key)) !== null && _graph$nodeDeps$get !== void 0 ? _graph$nodeDeps$get : []),
    // Reportsall "current" subscribers.  Evaluating other nodes or
    // previous in-progress async evaluations may introduce new subscribers.
    subscribers: {
      nodes: recoilValuesForKeys$1(downstreamNodes),
      components: Recoil_mapIterable((_storeState$nodeToCom = (_storeState$nodeToCom2 = storeState.nodeToComponentSubscriptions.get(key)) === null || _storeState$nodeToCom2 === void 0 ? void 0 : _storeState$nodeToCom2.values()) !== null && _storeState$nodeToCom !== void 0 ? _storeState$nodeToCom : [], ([name]) => ({
        name
      }))
    }
  };
} // Find all of the recursively dependent nodes


function getDownstreamNodes(store, state, keys) {
  const visitedNodes = new Set();
  const visitingNodes = Array.from(keys);
  const graph = store.getGraph(state.version);

  for (let key = visitingNodes.pop(); key; key = visitingNodes.pop()) {
    var _graph$nodeToNodeSubs;

    visitedNodes.add(key);
    const subscribedNodes = (_graph$nodeToNodeSubs = graph.nodeToNodeSubscriptions.get(key)) !== null && _graph$nodeToNodeSubs !== void 0 ? _graph$nodeToNodeSubs : emptySet;

    for (const downstreamNode of subscribedNodes) {
      if (!visitedNodes.has(downstreamNode)) {
        visitingNodes.push(downstreamNode);
      }
    }
  }

  return visitedNodes;
}

var Recoil_FunctionalCore = {
  getNodeLoadable,
  peekNodeLoadable,
  setNodeValue,
  cleanUpNode,
  setUnvalidatedAtomValue_DEPRECATED,
  peekNodeInfo,
  getDownstreamNodes,
  initializeNodeIfNewToStore
};

const {
  getDownstreamNodes: getDownstreamNodes$1,
  getNodeLoadable: getNodeLoadable$1,
  setNodeValue: setNodeValue$1
} = Recoil_FunctionalCore;

const {
  getNodeMaybe: getNodeMaybe$2
} = Recoil_Node;

const {
  DefaultValue: DefaultValue$1,
  RecoilValueNotReady: RecoilValueNotReady$1
} = Recoil_Node;

const {
  AbstractRecoilValue: AbstractRecoilValue$1,
  RecoilState: RecoilState$1,
  RecoilValueReadOnly: RecoilValueReadOnly$1,
  isRecoilValue: isRecoilValue$1
} = Recoil_RecoilValue$1;

function getRecoilValueAsLoadable(store, {
  key
}, treeState = store.getState().currentTree) {
  var _storeState$nextTree, _storeState$previousT;

  // Reading from an older tree can cause bugs because the dependencies that we
  // discover during the read are lost.
  const storeState = store.getState();

  if (!(treeState.version === storeState.currentTree.version || treeState.version === ((_storeState$nextTree = storeState.nextTree) === null || _storeState$nextTree === void 0 ? void 0 : _storeState$nextTree.version) || treeState.version === ((_storeState$previousT = storeState.previousTree) === null || _storeState$previousT === void 0 ? void 0 : _storeState$previousT.version))) {
    Recoil_recoverableViolation('Tried to read from a discarded tree');
  }

  const loadable = getNodeLoadable$1(store, treeState, key);

  if (loadable.state === 'loading') {
    loadable.contents.catch(() => {
      /**
       * HACK: intercept thrown error here to prevent an uncaught promise exception. Ideally this would happen closer to selector
       * execution (perhaps introducing a new ERROR class to be resolved by async selectors that are in an error state)
       */
      return;
    });
  }

  return loadable;
}

function applyAtomValueWrites(atomValues, writes) {
  const result = atomValues.clone();
  writes.forEach((v, k) => {
    if (v.state === 'hasValue' && v.contents instanceof DefaultValue$1) {
      result.delete(k);
    } else {
      result.set(k, v);
    }
  });
  return result;
}

function valueFromValueOrUpdater(store, state, {
  key
}, valueOrUpdater) {
  if (typeof valueOrUpdater === 'function') {
    // Updater form: pass in the current value. Throw if the current value
    // is unavailable (namely when updating an async selector that's
    // pending or errored):
    const current = getNodeLoadable$1(store, state, key);

    if (current.state === 'loading') {
      throw new RecoilValueNotReady$1(key);
    } else if (current.state === 'hasError') {
      throw current.contents;
    } // T itself may be a function, so our refinement is not sufficient:


    return valueOrUpdater(current.contents); // flowlint-line unclear-type:off
  } else {
    return valueOrUpdater;
  }
}

function applyAction(store, state, action) {
  if (action.type === 'set') {
    const {
      recoilValue,
      valueOrUpdater
    } = action;
    const newValue = valueFromValueOrUpdater(store, state, recoilValue, valueOrUpdater);
    const writes = setNodeValue$1(store, state, recoilValue.key, newValue);

    for (const [key, loadable] of writes.entries()) {
      writeLoadableToTreeState(state, key, loadable);
    }
  } else if (action.type === 'setLoadable') {
    const {
      recoilValue: {
        key
      },
      loadable
    } = action;
    writeLoadableToTreeState(state, key, loadable);
  } else if (action.type === 'markModified') {
    const {
      recoilValue: {
        key
      }
    } = action;
    state.dirtyAtoms.add(key);
  } else if (action.type === 'setUnvalidated') {
    var _node$invalidate;

    // Write value directly to state bypassing the Node interface as the node
    // definitions may not have been loaded yet when processing the initial snapshot.
    const {
      recoilValue: {
        key
      },
      unvalidatedValue
    } = action;
    const node = getNodeMaybe$2(key);
    node === null || node === void 0 ? void 0 : (_node$invalidate = node.invalidate) === null || _node$invalidate === void 0 ? void 0 : _node$invalidate.call(node, state);
    state.atomValues.delete(key);
    state.nonvalidatedAtoms.set(key, unvalidatedValue);
    state.dirtyAtoms.add(key);
  } else {
    Recoil_recoverableViolation(`Unknown action ${action.type}`);
  }
}

function writeLoadableToTreeState(state, key, loadable) {
  if (loadable.state === 'hasValue' && loadable.contents instanceof DefaultValue$1) {
    state.atomValues.delete(key);
  } else {
    state.atomValues.set(key, loadable);
  }

  state.dirtyAtoms.add(key);
  state.nonvalidatedAtoms.delete(key);
}

function applyActionsToStore(store, actions) {
  store.replaceState(state => {
    const newState = copyTreeState(state);

    for (const action of actions) {
      applyAction(store, newState, action);
    }

    invalidateDownstreams(store, newState);
    return newState;
  });
}

function queueOrPerformStateUpdate(store, action) {
  if (batchStack.length) {
    const actionsByStore = batchStack[batchStack.length - 1];
    let actions = actionsByStore.get(store);

    if (!actions) {
      actionsByStore.set(store, actions = []);
    }

    actions.push(action);
  } else {
    applyActionsToStore(store, [action]);
  }
}

const batchStack = [];

function batchStart() {
  const actionsByStore = new Map();
  batchStack.push(actionsByStore);
  return () => {
    for (const [store, actions] of actionsByStore) {
      applyActionsToStore(store, actions);
    }

    const popped = batchStack.pop();

    if (popped !== actionsByStore) {
      Recoil_recoverableViolation('Incorrect order of batch popping');
    }
  };
}

function copyTreeState(state) {
  return { ...state,
    atomValues: state.atomValues.clone(),
    nonvalidatedAtoms: state.nonvalidatedAtoms.clone(),
    dirtyAtoms: new Set(state.dirtyAtoms)
  };
}

function invalidateDownstreams(store, state) {
  // Inform any nodes that were changed or downstream of changes so that they
  // can clear out any caches as needed due to the update:
  const downstreams = getDownstreamNodes$1(store, state, state.dirtyAtoms);

  for (const key of downstreams) {
    var _getNodeMaybe, _getNodeMaybe$invalid;

    (_getNodeMaybe = getNodeMaybe$2(key)) === null || _getNodeMaybe === void 0 ? void 0 : (_getNodeMaybe$invalid = _getNodeMaybe.invalidate) === null || _getNodeMaybe$invalid === void 0 ? void 0 : _getNodeMaybe$invalid.call(_getNodeMaybe, state);
  }
}

function setRecoilValue(store, recoilValue, valueOrUpdater) {
  queueOrPerformStateUpdate(store, {
    type: 'set',
    recoilValue,
    valueOrUpdater
  });
}

function setRecoilValueLoadable(store, recoilValue, loadable) {
  if (loadable instanceof DefaultValue$1) {
    return setRecoilValue(store, recoilValue, loadable);
  }

  queueOrPerformStateUpdate(store, {
    type: 'setLoadable',
    recoilValue,
    loadable: loadable
  });
}

function markRecoilValueModified(store, recoilValue) {
  queueOrPerformStateUpdate(store, {
    type: 'markModified',
    recoilValue
  });
}

function setUnvalidatedRecoilValue(store, recoilValue, unvalidatedValue) {
  queueOrPerformStateUpdate(store, {
    type: 'setUnvalidated',
    recoilValue,
    unvalidatedValue
  });
}

let subscriptionID = 0;

function subscribeToRecoilValue(store, {
  key
}, callback, componentDebugName = null) {
  const subID = subscriptionID++;
  const storeState = store.getState();

  if (!storeState.nodeToComponentSubscriptions.has(key)) {
    storeState.nodeToComponentSubscriptions.set(key, new Map());
  }

  Recoil_nullthrows(storeState.nodeToComponentSubscriptions.get(key)).set(subID, [componentDebugName !== null && componentDebugName !== void 0 ? componentDebugName : '<not captured>', callback]); // Handle the case that, during the same tick that we are subscribing, an atom
  // has been updated by some effect handler. Otherwise we will miss the update.

  if (Recoil_gkx_1('recoil_early_rendering_2021')) {
    const nextTree = store.getState().nextTree;

    if (nextTree && nextTree.dirtyAtoms.has(key)) {
      callback(nextTree);
    }
  }

  return {
    release: () => {
      const storeState = store.getState();
      const subs = storeState.nodeToComponentSubscriptions.get(key);

      if (subs === undefined || !subs.has(subID)) {
        Recoil_recoverableViolation(`Subscription missing at release time for atom ${key}. This is a bug in Recoil.`);
        return;
      }

      subs.delete(subID);

      if (subs.size === 0) {
        storeState.nodeToComponentSubscriptions.delete(key);
      }
    }
  };
}

var Recoil_RecoilValueInterface = {
  RecoilValueReadOnly: RecoilValueReadOnly$1,
  AbstractRecoilValue: AbstractRecoilValue$1,
  RecoilState: RecoilState$1,
  getRecoilValueAsLoadable,
  setRecoilValue,
  setRecoilValueLoadable,
  markRecoilValueModified,
  setUnvalidatedRecoilValue,
  subscribeToRecoilValue,
  isRecoilValue: isRecoilValue$1,
  applyAtomValueWrites,
  // TODO Remove export when deprecating initialStoreState_DEPRECATED in RecoilRoot
  batchStart,
  writeLoadableToTreeState,
  invalidateDownstreams,
  copyTreeState,
  invalidateDownstreams_FOR_TESTING: invalidateDownstreams
};

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */
/**
 * The someSet() method tests whether some elements in the given Set pass the
 * test implemented by the provided function.
 */

function someSet(set, callback, context) {
  const iterator = set.entries();
  let current = iterator.next();

  while (!current.done) {
    const entry = current.value;

    if (callback.call(context, entry[1], entry[0], set)) {
      return true;
    }

    current = iterator.next();
  }

  return false;
}

var Recoil_someSet = someSet;

const {
  cleanUpNode: cleanUpNode$1
} = Recoil_FunctionalCore;

const {
  deleteNodeConfigIfPossible: deleteNodeConfigIfPossible$1,
  getNode: getNode$2
} = Recoil_Node;

const {
  RetentionZone: RetentionZone$2
} = Recoil_RetentionZone; // Components that aren't mounted after suspending for this long will be assumed
// to be discarded and their resources released.


const SUSPENSE_TIMEOUT_MS = 120000;
const emptySet$1 = new Set();

function releaseRetainablesNowOnCurrentTree(store, retainables) {
  const storeState = store.getState();
  const treeState = storeState.currentTree;

  if (storeState.nextTree) {
    Recoil_recoverableViolation('releaseNodesNowOnCurrentTree should only be called at the end of a batch');
    return; // leak memory rather than erase something that's about to be used.
  }

  const nodes = new Set();

  for (const r of retainables) {
    if (r instanceof RetentionZone$2) {
      for (const n of nodesRetainedByZone(storeState, r)) {
        nodes.add(n);
      }
    } else {
      nodes.add(r);
    }
  }

  const releasableNodes = findReleasableNodes(store, nodes);

  for (const node of releasableNodes) {
    releaseNode(store, treeState, node);
  }
}

function findReleasableNodes(store, searchFromNodes) {
  const storeState = store.getState();
  const treeState = storeState.currentTree;
  const graph = store.getGraph(treeState.version);
  const releasableNodes = new Set(); // mutated to collect answer

  const nonReleasableNodes = new Set();
  findReleasableNodesInner(searchFromNodes);
  return releasableNodes;

  function findReleasableNodesInner(searchFromNodes) {
    const releasableNodesFoundThisIteration = new Set();
    const downstreams = getDownstreamNodesInTopologicalOrder(store, treeState, searchFromNodes, releasableNodes, // don't descend into these
    nonReleasableNodes // don't descend into these
    ); // Find which of the downstream nodes are releasable and which are not:

    for (const node of downstreams) {
      var _storeState$retention;

      // Not releasable if configured to be retained forever:
      if (getNode$2(node).retainedBy === 'recoilRoot') {
        nonReleasableNodes.add(node);
        continue;
      } // Not releasable if retained directly by a component:


      if (((_storeState$retention = storeState.retention.referenceCounts.get(node)) !== null && _storeState$retention !== void 0 ? _storeState$retention : 0) > 0) {
        nonReleasableNodes.add(node);
        continue;
      } // Not releasable if retained by a zone:


      if (zonesThatCouldRetainNode(node).some(z => storeState.retention.referenceCounts.get(z))) {
        nonReleasableNodes.add(node);
        continue;
      } // Not releasable if it has a non-releasable child (which will already be in
      // nonReleasableNodes because we are going in topological order):


      const nodeChildren = graph.nodeToNodeSubscriptions.get(node);

      if (nodeChildren && Recoil_someSet(nodeChildren, child => nonReleasableNodes.has(child))) {
        nonReleasableNodes.add(node);
        continue;
      }

      releasableNodes.add(node);
      releasableNodesFoundThisIteration.add(node);
    } // If we found any releasable nodes, we need to walk UP from those nodes to
    // find whether their parents can now be released as well:


    const parents = new Set();

    for (const node of releasableNodesFoundThisIteration) {
      for (const parent of (_graph$nodeDeps$get = graph.nodeDeps.get(node)) !== null && _graph$nodeDeps$get !== void 0 ? _graph$nodeDeps$get : emptySet$1) {
        var _graph$nodeDeps$get;

        if (!releasableNodes.has(parent)) {
          parents.add(parent);
        }
      }
    }

    if (parents.size) {
      findReleasableNodesInner(parents);
    }
  }
} // Children before parents


function getDownstreamNodesInTopologicalOrder(store, treeState, nodes, // Mutable set is destroyed in place
doNotDescendInto1, doNotDescendInto2) {
  const graph = store.getGraph(treeState.version);
  const answer = [];
  const visited = new Set();

  while (nodes.size > 0) {
    visit(Recoil_nullthrows(nodes.values().next().value));
  }

  return answer;

  function visit(node) {
    if (doNotDescendInto1.has(node) || doNotDescendInto2.has(node)) {
      nodes.delete(node);
      return;
    }

    if (visited.has(node)) {
      return;
    }

    const children = graph.nodeToNodeSubscriptions.get(node);

    if (children) {
      for (const child of children) {
        visit(child);
      }
    }

    visited.add(node);
    nodes.delete(node);
    answer.push(node);
  }
}

function releaseNode(store, treeState, node) {
  if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
    return;
  } // Atom effects, in-closure caches, etc.:


  cleanUpNode$1(store, node); // Delete from store state:

  const storeState = store.getState();
  storeState.knownAtoms.delete(node);
  storeState.knownSelectors.delete(node);
  storeState.nodeTransactionSubscriptions.delete(node);
  storeState.retention.referenceCounts.delete(node);
  const zones = zonesThatCouldRetainNode(node);

  for (const zone of zones) {
    var _storeState$retention2;

    (_storeState$retention2 = storeState.retention.nodesRetainedByZone.get(zone)) === null || _storeState$retention2 === void 0 ? void 0 : _storeState$retention2.delete(node);
  } // Note that we DO NOT delete from nodeToComponentSubscriptions because this
  // already happens when the last component that was retaining the node unmounts,
  // and this could happen either before or after that.
  // Delete from TreeState and dep graph:


  treeState.atomValues.delete(node);
  treeState.dirtyAtoms.delete(node);
  treeState.nonvalidatedAtoms.delete(node);
  const graph = storeState.graphsByVersion.get(treeState.version);

  if (graph) {
    const deps = graph.nodeDeps.get(node);

    if (deps !== undefined) {
      graph.nodeDeps.delete(node);

      for (const dep of deps) {
        var _graph$nodeToNodeSubs;

        (_graph$nodeToNodeSubs = graph.nodeToNodeSubscriptions.get(dep)) === null || _graph$nodeToNodeSubs === void 0 ? void 0 : _graph$nodeToNodeSubs.delete(node);
      }
    } // No need to delete sub's deps as there should be no subs at this point.
    // But an invariant would require deleting nodes in topological order.


    graph.nodeToNodeSubscriptions.delete(node);
  } // Node config (for family members only as their configs can be recreated, and
  // only if they are not retained within any other Stores):


  deleteNodeConfigIfPossible$1(node);
}

function nodesRetainedByZone(storeState, zone) {
  var _storeState$retention3;

  return (_storeState$retention3 = storeState.retention.nodesRetainedByZone.get(zone)) !== null && _storeState$retention3 !== void 0 ? _storeState$retention3 : emptySet$1;
}

function zonesThatCouldRetainNode(node) {
  const retainedBy = getNode$2(node).retainedBy;

  if (retainedBy === undefined || retainedBy === 'components' || retainedBy === 'recoilRoot') {
    return [];
  } else if (retainedBy instanceof RetentionZone$2) {
    return [retainedBy];
  } else {
    return retainedBy; // it's an array of zones
  }
}

function scheduleOrPerformPossibleReleaseOfRetainable(store, retainable) {
  const state = store.getState();

  if (state.nextTree) {
    state.retention.retainablesToCheckForRelease.add(retainable);
  } else {
    releaseRetainablesNowOnCurrentTree(store, new Set([retainable]));
  }
}

function updateRetainCount(store, retainable, delta) {
  var _map$get;

  if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
    return;
  }

  const map = store.getState().retention.referenceCounts;
  const newCount = ((_map$get = map.get(retainable)) !== null && _map$get !== void 0 ? _map$get : 0) + delta;

  if (newCount === 0) {
    updateRetainCountToZero(store, retainable);
  } else {
    map.set(retainable, newCount);
  }
}

function updateRetainCountToZero(store, retainable) {
  if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
    return;
  }

  const map = store.getState().retention.referenceCounts;
  map.delete(retainable);
  scheduleOrPerformPossibleReleaseOfRetainable(store, retainable);
}

function releaseScheduledRetainablesNow(store) {
  if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
    return;
  }

  const state = store.getState();
  releaseRetainablesNowOnCurrentTree(store, state.retention.retainablesToCheckForRelease);
  state.retention.retainablesToCheckForRelease.clear();
}

function retainedByOptionWithDefault(r) {
  // The default will change from 'recoilRoot' to 'components' in the future.
  return r === undefined ? 'recoilRoot' : r;
}

var Recoil_Retention = {
  SUSPENSE_TIMEOUT_MS,
  updateRetainCount,
  updateRetainCountToZero,
  releaseScheduledRetainablesNow,
  retainedByOptionWithDefault
};

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */
/**
 * Combines multiple Iterables into a single Iterable.
 * Traverses the input Iterables in the order provided and maintains the order
 * of their elements.
 *
 * Example:
 * ```
 * const r = Array.from(concatIterables(['a', 'b'], ['c'], ['d', 'e', 'f']));
 * r == ['a', 'b', 'c', 'd', 'e', 'f'];
 * ```
 */

function* concatIterables(iters) {
  for (const iter of iters) {
    for (const val of iter) {
      yield val;
    }
  }
}

var Recoil_concatIterables = concatIterables;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

const isSSR = typeof window === 'undefined';
const isReactNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative'; // eslint-disable-line fb-www/typeof-undefined

var Recoil_Environment = {
  isSSR,
  isReactNative
};

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 *
 * This is to export esstiential functions from react-dom
 * for our web build
 */
const {
  unstable_batchedUpdates
} = (react_dom__WEBPACK_IMPORTED_MODULE_1___default());

var ReactBatchedUpdates = {
  unstable_batchedUpdates
};

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 *
 * This is to export esstiential functions from react-dom
 * for our web build
 */
// @fb-only: const {unstable_batchedUpdates} = require('ReactDOMComet');
// prettier-ignore
const {
  unstable_batchedUpdates: unstable_batchedUpdates$1
} = ReactBatchedUpdates; // @oss-only


var Recoil_ReactBatchedUpdates = {
  unstable_batchedUpdates: unstable_batchedUpdates$1
};

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */
const {
  batchStart: batchStart$1
} = Recoil_RecoilValueInterface;

const {
  unstable_batchedUpdates: unstable_batchedUpdates$2
} = Recoil_ReactBatchedUpdates;

let batcher = unstable_batchedUpdates$2; // flowlint-next-line unclear-type:off

/**
 * Sets the provided batcher function as the batcher function used by Recoil.
 *
 * Set the batcher to a custom batcher for your renderer,
 * if you use a renderer other than React DOM or React Native.
 */
const setBatcher = newBatcher => {
  batcher = newBatcher;
};
/**
 * Returns the current batcher function.
 */


const getBatcher = () => batcher;
/**
 * Calls the current batcher function and passes the
 * provided callback function.
 */


const batchUpdates = callback => {
  batcher(() => {
    let batchEnd = () => undefined;

    try {
      batchEnd = batchStart$1();
      callback();
    } finally {
      batchEnd();
    }
  });
};

var Recoil_Batching = {
  getBatcher,
  setBatcher,
  batchUpdates
};

const {
  isSSR: isSSR$1
} = Recoil_Environment;











const {
  batchUpdates: batchUpdates$1
} = Recoil_Batching;

const {
  initializeNodeIfNewToStore: initializeNodeIfNewToStore$1,
  peekNodeInfo: peekNodeInfo$1
} = Recoil_FunctionalCore;

const {
  graph: graph$2
} = Recoil_Graph;

const {
  DEFAULT_VALUE: DEFAULT_VALUE$1,
  recoilValues: recoilValues$1,
  recoilValuesForKeys: recoilValuesForKeys$2
} = Recoil_Node;

const {
  AbstractRecoilValue: AbstractRecoilValue$2,
  getRecoilValueAsLoadable: getRecoilValueAsLoadable$1,
  setRecoilValue: setRecoilValue$1,
  setUnvalidatedRecoilValue: setUnvalidatedRecoilValue$1
} = Recoil_RecoilValueInterface;

const {
  updateRetainCount: updateRetainCount$1
} = Recoil_Retention;

const {
  getNextTreeStateVersion: getNextTreeStateVersion$1,
  makeEmptyStoreState: makeEmptyStoreState$1
} = Recoil_State; // Opaque at this surface because it's part of the public API from here.


const retainWarning = `
Recoil Snapshots only last for the duration of the callback they are provided to. To keep a Snapshot longer, do this:

  const release = snapshot.retain();
  try {
    await useTheSnapshotAsynchronously(snapshot);
  } finally {
    release();
  }

This is currently a DEV-only warning but will become a thrown exception in the next release of Recoil.
`; // A "Snapshot" is "read-only" and captures a specific set of values of atoms.
// However, the data-flow-graph and selector values may evolve as selector
// evaluation functions are executed and async selectors resolve.

class Snapshot {
  constructor(storeState) {
    _defineProperty(this, "_store", void 0);

    _defineProperty(this, "_refCount", 0);

    _defineProperty(this, "getLoadable", recoilValue => {
      this.checkRefCount_INTERNAL();
      return getRecoilValueAsLoadable$1(this._store, recoilValue);
    });

    _defineProperty(this, "getPromise", recoilValue => {
      this.checkRefCount_INTERNAL();
      return this.getLoadable(recoilValue).toPromise();
    });

    _defineProperty(this, "getNodes_UNSTABLE", opt => {
      this.checkRefCount_INTERNAL(); // TODO Deal with modified selectors

      if ((opt === null || opt === void 0 ? void 0 : opt.isModified) === true) {
        if ((opt === null || opt === void 0 ? void 0 : opt.isInitialized) === false) {
          return [];
        }

        const state = this._store.getState().currentTree;

        return recoilValuesForKeys$2(state.dirtyAtoms);
      }

      const knownAtoms = this._store.getState().knownAtoms;

      const knownSelectors = this._store.getState().knownSelectors;

      return (opt === null || opt === void 0 ? void 0 : opt.isInitialized) == null ? recoilValues$1.values() : opt.isInitialized === true ? recoilValuesForKeys$2(Recoil_concatIterables([this._store.getState().knownAtoms, this._store.getState().knownSelectors])) : Recoil_filterIterable(recoilValues$1.values(), ({
        key
      }) => !knownAtoms.has(key) && !knownSelectors.has(key));
    });

    _defineProperty(this, "getInfo_UNSTABLE", ({
      key
    }) => {
      this.checkRefCount_INTERNAL();
      return peekNodeInfo$1(this._store, this._store.getState().currentTree, key);
    });

    _defineProperty(this, "map", mapper => {
      this.checkRefCount_INTERNAL();
      const mutableSnapshot = new MutableSnapshot(this, batchUpdates$1);
      mapper(mutableSnapshot); // if removing batchUpdates from `set` add it here

      return cloneSnapshot(mutableSnapshot.getStore_INTERNAL());
    });

    _defineProperty(this, "asyncMap", async mapper => {
      this.checkRefCount_INTERNAL();
      const mutableSnapshot = new MutableSnapshot(this, batchUpdates$1);
      await mapper(mutableSnapshot);
      return cloneSnapshot(mutableSnapshot.getStore_INTERNAL());
    });

    this._store = {
      getState: () => storeState,
      replaceState: replacer => {
        storeState.currentTree = replacer(storeState.currentTree); // no batching so nextTree is never active
      },
      getGraph: version => {
        const graphs = storeState.graphsByVersion;

        if (graphs.has(version)) {
          return Recoil_nullthrows(graphs.get(version));
        }

        const newGraph = graph$2();
        graphs.set(version, newGraph);
        return newGraph;
      },
      subscribeToTransactions: () => ({
        release: () => {}
      }),
      addTransactionMetadata: () => {
        throw Recoil_err('Cannot subscribe to Snapshots');
      }
    }; // Initialize any nodes that are live in the parent store (primarily so that this
    // snapshot gets counted towards the node's live stores count).

    for (const nodeKey of this._store.getState().nodeCleanupFunctions.keys()) {
      initializeNodeIfNewToStore$1(this._store, storeState.currentTree, nodeKey, 'get');
      updateRetainCount$1(this._store, nodeKey, 1);
    }

    this.retain();
    this.autorelease_INTERNAL();
  }

  retain() {
    if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
      return () => undefined;
    }

    this._refCount++;
    let released = false;
    return () => {
      if (!released) {
        released = true;
        this.release_INTERNAL();
      }
    };
  }

  autorelease_INTERNAL() {
    if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
      return;
    }

    if (!isSSR$1) {
      window.setTimeout(() => this.release_INTERNAL(), 0);
    }
  }

  release_INTERNAL() {
    if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
      return;
    }

    this._refCount--;

    if (this._refCount === 0) ;
  }

  checkRefCount_INTERNAL() {
    if (Recoil_gkx_1('recoil_memory_managament_2020') && this._refCount <= 0) {
      if (true) {
        Recoil_recoverableViolation(retainWarning);
      } // What we will ship later:
      // throw err(retainWarning);

    }
  }

  getStore_INTERNAL() {
    this.checkRefCount_INTERNAL();
    return this._store;
  }

  getID() {
    this.checkRefCount_INTERNAL();
    return this.getID_INTERNAL();
  }

  getID_INTERNAL() {
    this.checkRefCount_INTERNAL();
    return this._store.getState().currentTree.stateID;
  } // We want to allow the methods to be destructured and used as accessors
  // eslint-disable-next-line fb-www/extra-arrow-initializer


}

function cloneStoreState(store, treeState, bumpVersion = false) {
  const storeState = store.getState();
  const version = bumpVersion ? getNextTreeStateVersion$1() : treeState.version;
  return {
    currentTree: bumpVersion ? {
      // TODO snapshots shouldn't really have versions because a new version number
      // is always assigned when the snapshot is gone to.
      version,
      stateID: version,
      transactionMetadata: { ...treeState.transactionMetadata
      },
      dirtyAtoms: new Set(treeState.dirtyAtoms),
      atomValues: treeState.atomValues.clone(),
      nonvalidatedAtoms: treeState.nonvalidatedAtoms.clone()
    } : treeState,
    commitDepth: 0,
    nextTree: null,
    previousTree: null,
    knownAtoms: new Set(storeState.knownAtoms),
    // FIXME here's a copy
    knownSelectors: new Set(storeState.knownSelectors),
    // FIXME here's a copy
    transactionSubscriptions: new Map(),
    nodeTransactionSubscriptions: new Map(),
    nodeToComponentSubscriptions: new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: new Set(),
    graphsByVersion: new Map().set(version, store.getGraph(treeState.version)),
    versionsUsedByComponent: new Map(),
    retention: {
      referenceCounts: new Map(),
      nodesRetainedByZone: new Map(),
      retainablesToCheckForRelease: new Set()
    },
    nodeCleanupFunctions: new Map()
  };
} // Factory to build a fresh snapshot


function freshSnapshot(initializeState) {
  const snapshot = new Snapshot(makeEmptyStoreState$1());
  return initializeState != null ? snapshot.map(initializeState) : snapshot;
} // Factory to clone a snapahot state


function cloneSnapshot(store, version = 'current') {
  const storeState = store.getState();
  const treeState = version === 'current' ? storeState.currentTree : Recoil_nullthrows(storeState.previousTree);
  return new Snapshot(cloneStoreState(store, treeState));
}

class MutableSnapshot extends Snapshot {
  constructor(snapshot, batch) {
    super(cloneStoreState(snapshot.getStore_INTERNAL(), snapshot.getStore_INTERNAL().getState().currentTree, true));

    _defineProperty(this, "_batch", void 0);

    _defineProperty(this, "set", (recoilState, newValueOrUpdater) => {
      this.checkRefCount_INTERNAL();
      const store = this.getStore_INTERNAL(); // This batchUpdates ensures this `set` is applied immediately and you can
      // read the written value after calling `set`. I would like to remove this
      // behavior and only batch in `Snapshot.map`, but this would be a breaking
      // change potentially.

      this._batch(() => {
        updateRetainCount$1(store, recoilState.key, 1);
        setRecoilValue$1(this.getStore_INTERNAL(), recoilState, newValueOrUpdater);
      });
    });

    _defineProperty(this, "reset", recoilState => {
      this.checkRefCount_INTERNAL();
      const store = this.getStore_INTERNAL(); // See note at `set` about batched updates.

      this._batch(() => {
        updateRetainCount$1(store, recoilState.key, 1);
        setRecoilValue$1(this.getStore_INTERNAL(), recoilState, DEFAULT_VALUE$1);
      });
    });

    _defineProperty(this, "setUnvalidatedAtomValues_DEPRECATED", values => {
      this.checkRefCount_INTERNAL();
      const store = this.getStore_INTERNAL(); // See note at `set` about batched updates.

      batchUpdates$1(() => {
        for (const [k, v] of values.entries()) {
          updateRetainCount$1(store, k, 1);
          setUnvalidatedRecoilValue$1(store, new AbstractRecoilValue$2(k), v);
        }
      });
    });

    this._batch = batch;
  } // We want to allow the methods to be destructured and used as accessors
  // eslint-disable-next-line fb-www/extra-arrow-initializer


}

var Recoil_Snapshot = {
  Snapshot,
  MutableSnapshot,
  freshSnapshot,
  cloneSnapshot
};

var Recoil_Snapshot_1 = Recoil_Snapshot.Snapshot;
var Recoil_Snapshot_2 = Recoil_Snapshot.MutableSnapshot;
var Recoil_Snapshot_3 = Recoil_Snapshot.freshSnapshot;
var Recoil_Snapshot_4 = Recoil_Snapshot.cloneSnapshot;

var Recoil_Snapshot$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Snapshot: Recoil_Snapshot_1,
  MutableSnapshot: Recoil_Snapshot_2,
  freshSnapshot: Recoil_Snapshot_3,
  cloneSnapshot: Recoil_Snapshot_4
});

// @fb-only: const RecoilusagelogEvent = require('RecoilusagelogEvent');
// @fb-only: const RecoilUsageLogFalcoEvent = require('RecoilUsageLogFalcoEvent');
// @fb-only: const URI = require('URI');


const {
  getNextTreeStateVersion: getNextTreeStateVersion$2,
  makeEmptyStoreState: makeEmptyStoreState$2
} = Recoil_State;













const {
  cleanUpNode: cleanUpNode$2,
  getDownstreamNodes: getDownstreamNodes$2,
  setNodeValue: setNodeValue$2,
  setUnvalidatedAtomValue_DEPRECATED: setUnvalidatedAtomValue_DEPRECATED$1
} = Recoil_FunctionalCore;

const {
  graph: graph$3
} = Recoil_Graph;

const {
  cloneGraph: cloneGraph$1
} = Recoil_Graph;

const {
  applyAtomValueWrites: applyAtomValueWrites$1
} = Recoil_RecoilValueInterface;

const {
  releaseScheduledRetainablesNow: releaseScheduledRetainablesNow$1
} = Recoil_Retention;

const {
  freshSnapshot: freshSnapshot$1
} = Recoil_Snapshot$1;



const {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} = (react__WEBPACK_IMPORTED_MODULE_0___default());

function notInAContext() {
  throw Recoil_err('This component must be used inside a <RecoilRoot> component.');
}

const defaultStore = Object.freeze({
  getState: notInAContext,
  replaceState: notInAContext,
  getGraph: notInAContext,
  subscribeToTransactions: notInAContext,
  addTransactionMetadata: notInAContext
});
let stateReplacerIsBeingExecuted = false;

function startNextTreeIfNeeded(store) {
  if (stateReplacerIsBeingExecuted) {
    throw Recoil_err('An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions.');
  }

  const storeState = store.getState();

  if (storeState.nextTree === null) {
    if (Recoil_gkx_1('recoil_memory_managament_2020') && Recoil_gkx_1('recoil_release_on_cascading_update_killswitch_2021')) {
      // If this is a cascading update (that is, rendering due to one state change
      // invokes a second state change), we won't have cleaned up retainables yet
      // because this normally happens after notifying components. Do it before
      // proceeding with the cascading update so that it remains predictable:
      if (storeState.commitDepth > 0) {
        releaseScheduledRetainablesNow$1(store);
      }
    }

    const version = storeState.currentTree.version;
    const nextVersion = getNextTreeStateVersion$2();
    storeState.nextTree = { ...storeState.currentTree,
      version: nextVersion,
      stateID: nextVersion,
      dirtyAtoms: new Set(),
      transactionMetadata: {}
    };
    storeState.graphsByVersion.set(nextVersion, cloneGraph$1(Recoil_nullthrows(storeState.graphsByVersion.get(version))));
  }
}

const AppContext = react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  current: defaultStore
});

const useStoreRef = () => useContext(AppContext);

const MutableSourceContext = react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null); // TODO T2710559282599660

function useRecoilMutableSource() {
  const mutableSource = useContext(MutableSourceContext);

  if (mutableSource == null) {
    Recoil_expectationViolation('Attempted to use a Recoil hook outside of a <RecoilRoot>. ' + '<RecoilRoot> must be an ancestor of any component that uses ' + 'Recoil hooks.');
  }

  return mutableSource;
}

function notifyComponents(store, storeState, treeState) {
  const dependentNodes = getDownstreamNodes$2(store, treeState, treeState.dirtyAtoms);

  for (const key of dependentNodes) {
    const comps = storeState.nodeToComponentSubscriptions.get(key);

    if (comps) {
      for (const [_subID, [_debugName, callback]] of comps) {
        callback(treeState);
      }
    }
  }
}

function sendEndOfBatchNotifications(store) {
  const storeState = store.getState();
  const treeState = storeState.currentTree; // Inform transaction subscribers of the transaction:

  const dirtyAtoms = treeState.dirtyAtoms;

  if (dirtyAtoms.size) {
    // Execute Node-specific subscribers before global subscribers
    for (const [key, subscriptions] of storeState.nodeTransactionSubscriptions) {
      if (dirtyAtoms.has(key)) {
        for (const [_, subscription] of subscriptions) {
          subscription(store);
        }
      }
    }

    for (const [_, subscription] of storeState.transactionSubscriptions) {
      subscription(store);
    }

    if (!Recoil_gkx_1('recoil_early_rendering_2021') || storeState.suspendedComponentResolvers.size) {
      // Notifying components is needed to wake from suspense, even when using
      // early rendering.
      notifyComponents(store, storeState, treeState); // Wake all suspended components so the right one(s) can try to re-render.
      // We need to wake up components not just when some asynchronous selector
      // resolved, but also when changing synchronous values because this may cause
      // a selector to change from asynchronous to synchronous, in which case there
      // would be no follow-up asynchronous resolution to wake us up.
      // TODO OPTIMIZATION Only wake up related downstream components

      storeState.suspendedComponentResolvers.forEach(cb => cb());
      storeState.suspendedComponentResolvers.clear();
    }
  } // Special behavior ONLY invoked by useInterface.
  // FIXME delete queuedComponentCallbacks_DEPRECATED when deleting useInterface.


  storeState.queuedComponentCallbacks_DEPRECATED.forEach(cb => cb(treeState));
  storeState.queuedComponentCallbacks_DEPRECATED.splice(0, storeState.queuedComponentCallbacks_DEPRECATED.length);
}

function endBatch(storeRef) {
  const storeState = storeRef.current.getState();
  storeState.commitDepth++;

  try {
    const {
      nextTree
    } = storeState; // Ignore commits that are not because of Recoil transactions -- namely,
    // because something above RecoilRoot re-rendered:

    if (nextTree === null) {
      return;
    } // nextTree is now committed -- note that copying and reset occurs when
    // a transaction begins, in startNextTreeIfNeeded:


    storeState.previousTree = storeState.currentTree;
    storeState.currentTree = nextTree;
    storeState.nextTree = null;
    sendEndOfBatchNotifications(storeRef.current);

    if (storeState.previousTree != null) {
      storeState.graphsByVersion.delete(storeState.previousTree.version);
    } else {
      Recoil_recoverableViolation('Ended batch with no previous state, which is unexpected', 'recoil');
    }

    storeState.previousTree = null;

    if (Recoil_gkx_1('recoil_memory_managament_2020')) {
      releaseScheduledRetainablesNow$1(storeRef.current);
    }
  } finally {
    storeState.commitDepth--;
  }
}
/*
 * The purpose of the Batcher is to observe when React batches end so that
 * Recoil state changes can be batched. Whenever Recoil state changes, we call
 * setState on the batcher. Then we wait for that change to be committed, which
 * signifies the end of the batch. That's when we respond to the Recoil change.
 */


function Batcher({
  setNotifyBatcherOfChange
}) {
  const storeRef = useStoreRef();
  const [_, setState] = useState([]);
  setNotifyBatcherOfChange(() => setState({}));
  useEffect(() => {
    // enqueueExecution runs this function immediately; it is only used to
    // manipulate the order of useEffects during tests, since React seems to
    // call useEffect in an unpredictable order sometimes.
    Recoil_Queue.enqueueExecution('Batcher', () => {
      endBatch(storeRef);
    });
  }); // If an asynchronous selector resolves after the Batcher is unmounted,
  // notifyBatcherOfChange will still be called. An error gets thrown whenever
  // setState is called after a component is already unmounted, so this sets
  // notifyBatcherOfChange to be a no-op.

  useEffect(() => {
    return () => {
      setNotifyBatcherOfChange(() => {});
    };
  }, [setNotifyBatcherOfChange]);
  return null;
}

if (true) {
  if (typeof window !== 'undefined' && !window.$recoilDebugStates) {
    window.$recoilDebugStates = [];
  }
} // When removing this deprecated function, remove stateBySettingRecoilValue
// which will no longer be needed.


function initialStoreState_DEPRECATED(store, initializeState) {
  const initial = makeEmptyStoreState$2();
  initializeState({
    // $FlowFixMe[escaped-generic]
    set: (atom, value) => {
      const state = initial.currentTree;
      const writes = setNodeValue$2(store, state, atom.key, value);
      const writtenNodes = new Set(writes.keys());
      const nonvalidatedAtoms = state.nonvalidatedAtoms.clone();

      for (const n of writtenNodes) {
        nonvalidatedAtoms.delete(n);
      }

      initial.currentTree = { ...state,
        dirtyAtoms: Recoil_unionSets(state.dirtyAtoms, writtenNodes),
        atomValues: applyAtomValueWrites$1(state.atomValues, writes),
        // NB: PLEASE un-export applyAtomValueWrites when deleting this code
        nonvalidatedAtoms
      };
    },
    setUnvalidatedAtomValues: atomValues => {
      // FIXME replace this with a mutative loop
      atomValues.forEach((v, k) => {
        initial.currentTree = setUnvalidatedAtomValue_DEPRECATED$1(initial.currentTree, k, v);
      });
    }
  });
  return initial;
}

function initialStoreState(initializeState) {
  const snapshot = freshSnapshot$1().map(initializeState);
  return snapshot.getStore_INTERNAL().getState();
}

let nextID = 0;

function RecoilRoot_INTERNAL({
  initializeState_DEPRECATED,
  initializeState,
  store_INTERNAL: storeProp,
  // For use with React "context bridging"
  children
}) {
  var _createMutableSource;

  // prettier-ignore
  // @fb-only: useEffect(() => {
  // @fb-only: if (gkx('recoil_usage_logging')) {
  // @fb-only: try {
  // @fb-only: RecoilUsageLogFalcoEvent.log(() => ({
  // @fb-only: type: RecoilusagelogEvent.RECOIL_ROOT_MOUNTED,
  // @fb-only: path: URI.getRequestURI().getPath(),
  // @fb-only: }));
  // @fb-only: } catch {
  // @fb-only: recoverableViolation(
  // @fb-only: 'Error when logging Recoil Usage event',
  // @fb-only: 'recoil',
  // @fb-only: );
  // @fb-only: }
  // @fb-only: }
  // @fb-only: }, []);
  let storeState; // eslint-disable-line prefer-const

  const getGraph = version => {
    const graphs = storeState.current.graphsByVersion;

    if (graphs.has(version)) {
      return Recoil_nullthrows(graphs.get(version));
    }

    const newGraph = graph$3();
    graphs.set(version, newGraph);
    return newGraph;
  };

  const subscribeToTransactions = (callback, key) => {
    if (key == null) {
      // Global transaction subscriptions
      const {
        transactionSubscriptions
      } = storeRef.current.getState();
      const id = nextID++;
      transactionSubscriptions.set(id, callback);
      return {
        release: () => {
          transactionSubscriptions.delete(id);
        }
      };
    } else {
      // Node-specific transaction subscriptions:
      const {
        nodeTransactionSubscriptions
      } = storeRef.current.getState();

      if (!nodeTransactionSubscriptions.has(key)) {
        nodeTransactionSubscriptions.set(key, new Map());
      }

      const id = nextID++;
      Recoil_nullthrows(nodeTransactionSubscriptions.get(key)).set(id, callback);
      return {
        release: () => {
          const subs = nodeTransactionSubscriptions.get(key);

          if (subs) {
            subs.delete(id);

            if (subs.size === 0) {
              nodeTransactionSubscriptions.delete(key);
            }
          }
        }
      };
    }
  };

  const addTransactionMetadata = metadata => {
    startNextTreeIfNeeded(storeRef.current);

    for (const k of Object.keys(metadata)) {
      Recoil_nullthrows(storeRef.current.getState().nextTree).transactionMetadata[k] = metadata[k];
    }
  };

  const replaceState = replacer => {
    const storeState = storeRef.current.getState();
    startNextTreeIfNeeded(storeRef.current); // Use replacer to get the next state:

    const nextTree = Recoil_nullthrows(storeState.nextTree);
    let replaced;

    try {
      stateReplacerIsBeingExecuted = true;
      replaced = replacer(nextTree);
    } finally {
      stateReplacerIsBeingExecuted = false;
    }

    if (replaced === nextTree) {
      return;
    }

    if (true) {
      if (typeof window !== 'undefined') {
        window.$recoilDebugStates.push(replaced); // TODO this shouldn't happen here because it's not batched
      }
    } // Save changes to nextTree and schedule a React update:


    storeState.nextTree = replaced;

    if (Recoil_gkx_1('recoil_early_rendering_2021')) {
      notifyComponents(store, storeState, replaced);
    }

    Recoil_nullthrows(notifyBatcherOfChange.current)();
  };

  const notifyBatcherOfChange = useRef(null);
  const setNotifyBatcherOfChange = useCallback(x => {
    notifyBatcherOfChange.current = x;
  }, [notifyBatcherOfChange]); // FIXME T2710559282599660

  const createMutableSource = (_createMutableSource = (react__WEBPACK_IMPORTED_MODULE_0___default().createMutableSource)) !== null && _createMutableSource !== void 0 ? _createMutableSource : // flowlint-line unclear-type:off
  (react__WEBPACK_IMPORTED_MODULE_0___default().unstable_createMutableSource); // flowlint-line unclear-type:off

  const store = storeProp !== null && storeProp !== void 0 ? storeProp : {
    getState: () => storeState.current,
    replaceState,
    getGraph,
    subscribeToTransactions,
    addTransactionMetadata
  };
  const storeRef = useRef(store);
  storeState = useRef(initializeState_DEPRECATED != null ? initialStoreState_DEPRECATED(store, initializeState_DEPRECATED) : initializeState != null ? initialStoreState(initializeState) : makeEmptyStoreState$2());
  const mutableSource = useMemo(() => createMutableSource ? createMutableSource(storeState, () => storeState.current.currentTree.version) : null, [createMutableSource, storeState]); // Cleanup when the <RecoilRoot> is unmounted

  useEffect(() => () => {
    for (const atomKey of storeRef.current.getState().knownAtoms) {
      cleanUpNode$2(storeRef.current, atomKey);
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppContext.Provider, {
    value: storeRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MutableSourceContext.Provider, {
    value: mutableSource
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Batcher, {
    setNotifyBatcherOfChange: setNotifyBatcherOfChange
  }), children));
}

function RecoilRoot(props) {
  const {
    override,
    ...propsExceptOverride
  } = props;
  const ancestorStoreRef = useStoreRef();

  if (override === false && ancestorStoreRef.current !== defaultStore) {
    // If ancestorStoreRef.current !== defaultStore, it means that this
    // RecoilRoot is not nested within another.
    return props.children;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RecoilRoot_INTERNAL, propsExceptOverride);
}

var Recoil_RecoilRoot_react = {
  useStoreRef,
  useRecoilMutableSource,
  RecoilRoot,
  notifyComponents_FOR_TESTING: notifyComponents,
  sendEndOfBatchNotifications_FOR_TESTING: sendEndOfBatchNotifications
};

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * MIT License
 *
 * Copyright (c) 2014-2019 Georg Tavonius
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

const UNKNOWN_FUNCTION = '<unknown>';
/**
 * This parses the different stack traces and puts them into one format
 * This borrows heavily from TraceKit (https://github.com/csnover/TraceKit)
 */

function stackTraceParser(stackString) {
  const lines = stackString.split('\n');
  return lines.reduce((stack, line) => {
    const parseResult = parseChrome(line) || parseWinjs(line) || parseGecko(line) || parseNode(line) || parseJSC(line);

    if (parseResult) {
      stack.push(parseResult);
    }

    return stack;
  }, []);
}

const chromeRe = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
const chromeEvalRe = /\((\S*)(?::(\d+))(?::(\d+))\)/;

function parseChrome(line) {
  const parts = chromeRe.exec(line);

  if (!parts) {
    return null;
  }

  const isNative = parts[2] && parts[2].indexOf('native') === 0; // start of line

  const isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line

  const submatch = chromeEvalRe.exec(parts[2]);

  if (isEval && submatch != null) {
    // throw out eval line/column and use top-most line/column number
    parts[2] = submatch[1]; // url

    parts[3] = submatch[2]; // line

    parts[4] = submatch[3]; // column
  }

  return {
    file: !isNative ? parts[2] : null,
    methodName: parts[1] || UNKNOWN_FUNCTION,
    arguments: isNative ? [parts[2]] : [],
    lineNumber: parts[3] ? +parts[3] : null,
    column: parts[4] ? +parts[4] : null
  };
}

const winjsRe = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;

function parseWinjs(line) {
  const parts = winjsRe.exec(line);

  if (!parts) {
    return null;
  }

  return {
    file: parts[2],
    methodName: parts[1] || UNKNOWN_FUNCTION,
    arguments: [],
    lineNumber: +parts[3],
    column: parts[4] ? +parts[4] : null
  };
}

const geckoRe = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
const geckoEvalRe = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;

function parseGecko(line) {
  const parts = geckoRe.exec(line);

  if (!parts) {
    return null;
  }

  const isEval = parts[3] && parts[3].indexOf(' > eval') > -1;
  const submatch = geckoEvalRe.exec(parts[3]);

  if (isEval && submatch != null) {
    // throw out eval line/column and use top-most line number
    parts[3] = submatch[1];
    parts[4] = submatch[2];
    parts[5] = null; // no column when eval
  }

  return {
    file: parts[3],
    methodName: parts[1] || UNKNOWN_FUNCTION,
    arguments: parts[2] ? parts[2].split(',') : [],
    lineNumber: parts[4] ? +parts[4] : null,
    column: parts[5] ? +parts[5] : null
  };
}

const javaScriptCoreRe = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;

function parseJSC(line) {
  const parts = javaScriptCoreRe.exec(line);

  if (!parts) {
    return null;
  }

  return {
    file: parts[3],
    methodName: parts[1] || UNKNOWN_FUNCTION,
    arguments: [],
    lineNumber: +parts[4],
    column: parts[5] ? +parts[5] : null
  };
}

const nodeRe = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;

function parseNode(line) {
  const parts = nodeRe.exec(line);

  if (!parts) {
    return null;
  }

  return {
    file: parts[2],
    methodName: parts[1] || UNKNOWN_FUNCTION,
    arguments: [],
    lineNumber: +parts[3],
    column: parts[4] ? +parts[4] : null
  };
}

var Recoil_stackTraceParser = stackTraceParser;

const {
  useRef: useRef$1
} = (react__WEBPACK_IMPORTED_MODULE_0___default());

function useComponentName() {
  const nameRef = useRef$1();

  if (true) {
    if (Recoil_gkx_1('recoil_infer_component_names')) {
      var _nameRef$current;

      if (nameRef.current === undefined) {
        // There is no blessed way to determine the calling React component from
        // within a hook. This hack uses the fact that hooks must start with 'use'
        // and that hooks are either called by React Components or other hooks. It
        // follows therefore, that to find the calling component, you simply need
        // to look down the stack and find the first function which doesn't start
        // with 'use'. We are only enabling this in dev for now, since once the
        // codebase is minified, the naming assumptions no longer hold true.
        // eslint-disable-next-line fb-www/no-new-error
        const frames = Recoil_stackTraceParser(new Error().stack);

        for (const {
          methodName
        } of frames) {
          // I observed cases where the frame was of the form 'Object.useXXX'
          // hence why I'm searching for hooks following a word boundary
          if (!methodName.match(/\buse[^\b]+$/)) {
            return nameRef.current = methodName;
          }
        }

        nameRef.current = null;
      }

      return (_nameRef$current = nameRef.current) !== null && _nameRef$current !== void 0 ? _nameRef$current : '<unable to determine component name>';
    }
  } // @fb-only: return "<component name only available when both in dev mode and when passing GK 'recoil_infer_component_names'>";


  return '<component name not available>'; // @oss-only
}

var Recoil_useComponentName = useComponentName;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function shallowArrayEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0, l = a.length; i < l; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

var Recoil_shallowArrayEqual = shallowArrayEqual;

const {
  useEffect: useEffect$1,
  useRef: useRef$2
} = (react__WEBPACK_IMPORTED_MODULE_0___default());

function usePrevious(value) {
  const ref = useRef$2();
  useEffect$1(() => {
    ref.current = value;
  });
  return ref.current;
}

var Recoil_usePrevious = usePrevious;

const {
  useStoreRef: useStoreRef$1
} = Recoil_RecoilRoot_react;

const {
  SUSPENSE_TIMEOUT_MS: SUSPENSE_TIMEOUT_MS$1
} = Recoil_Retention;

const {
  updateRetainCount: updateRetainCount$2
} = Recoil_Retention;

const {
  RetentionZone: RetentionZone$3
} = Recoil_RetentionZone;

const {
  isSSR: isSSR$2
} = Recoil_Environment;







const {
  useEffect: useEffect$2,
  useRef: useRef$3
} = (react__WEBPACK_IMPORTED_MODULE_0___default()); // I don't see a way to avoid the any type here because we want to accept readable
// and writable values with any type parameter, but normally with writable ones
// RecoilState<SomeT> is not a subtype of RecoilState<mixed>.


// flowlint-line unclear-type:off
function useRetain(toRetain) {
  if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
    return;
  } // eslint-disable-next-line fb-www/react-hooks


  return useRetain_ACTUAL(toRetain);
}

function useRetain_ACTUAL(toRetain) {
  const array = Array.isArray(toRetain) ? toRetain : [toRetain];
  const retainables = array.map(a => a instanceof RetentionZone$3 ? a : a.key);
  const storeRef = useStoreRef$1();
  useEffect$2(() => {
    if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
      return;
    }

    const store = storeRef.current;

    if (timeoutID.current && !isSSR$2) {
      // Already performed a temporary retain on render, simply cancel the release
      // of that temporary retain.
      window.clearTimeout(timeoutID.current);
      timeoutID.current = null;
    } else {
      for (const r of retainables) {
        updateRetainCount$2(store, r, 1);
      }
    }

    return () => {
      for (const r of retainables) {
        updateRetainCount$2(store, r, -1);
      }
    }; // eslint-disable-next-line fb-www/react-hooks-deps
  }, [storeRef, ...retainables]); // We want to retain if the component suspends. This is terrible but the Suspense
  // API affords us no better option. If we suspend and never commit after some
  // seconds, then release. The 'actual' retain/release in the effect above
  // cancels this.

  const timeoutID = useRef$3();
  const previousRetainables = Recoil_usePrevious(retainables);

  if (!isSSR$2 && (previousRetainables === undefined || !Recoil_shallowArrayEqual(previousRetainables, retainables))) {
    const store = storeRef.current;

    for (const r of retainables) {
      updateRetainCount$2(store, r, 1);
    }

    if (previousRetainables) {
      for (const r of previousRetainables) {
        updateRetainCount$2(store, r, -1);
      }
    }

    if (timeoutID.current) {
      window.clearTimeout(timeoutID.current);
    }

    timeoutID.current = window.setTimeout(() => {
      timeoutID.current = null;

      for (const r of retainables) {
        updateRetainCount$2(store, r, -1);
      }
    }, SUSPENSE_TIMEOUT_MS$1);
  }
}

var Recoil_useRetain = useRetain;

const {
  batchUpdates: batchUpdates$2
} = Recoil_Batching;

const {
  DEFAULT_VALUE: DEFAULT_VALUE$2
} = Recoil_Node;

const {
  useRecoilMutableSource: useRecoilMutableSource$1,
  useStoreRef: useStoreRef$2
} = Recoil_RecoilRoot_react;

const {
  isRecoilValue: isRecoilValue$2
} = Recoil_RecoilValue$1;

const {
  AbstractRecoilValue: AbstractRecoilValue$3,
  getRecoilValueAsLoadable: getRecoilValueAsLoadable$2,
  setRecoilValue: setRecoilValue$2,
  setUnvalidatedRecoilValue: setUnvalidatedRecoilValue$2,
  subscribeToRecoilValue: subscribeToRecoilValue$1
} = Recoil_RecoilValueInterface;

const {
  setByAddingToSet: setByAddingToSet$2
} = Recoil_CopyOnWrite;









const {
  mutableSourceExists: mutableSourceExists$2,
  useMutableSource: useMutableSource$1
} = Recoil_mutableSource;





const {
  useCallback: useCallback$1,
  useEffect: useEffect$3,
  useMemo: useMemo$1,
  useRef: useRef$4,
  useState: useState$1
} = (react__WEBPACK_IMPORTED_MODULE_0___default());

function handleLoadable(loadable, recoilValue, storeRef) {
  // We can't just throw the promise we are waiting on to Suspense.  If the
  // upstream dependencies change it may produce a state in which the component
  // can render, but it would still be suspended on a Promise that may never resolve.
  if (loadable.state === 'hasValue') {
    return loadable.contents;
  } else if (loadable.state === 'loading') {
    const promise = new Promise(resolve => {
      storeRef.current.getState().suspendedComponentResolvers.add(resolve);
    }); // $FlowFixMe Flow(prop-missing) for integrating with tools that inspect thrown promises @fb-only
    // @fb-only: promise.displayName = `Recoil State: ${recoilValue.key}`;

    throw promise;
  } else if (loadable.state === 'hasError') {
    throw loadable.contents;
  } else {
    throw Recoil_err(`Invalid value of loadable atom "${recoilValue.key}"`);
  }
}

function validateRecoilValue(recoilValue, hookName) {
  if (!isRecoilValue$2(recoilValue)) {
    throw Recoil_err(`Invalid argument to ${hookName}: expected an atom or selector but got ${String(recoilValue)}`);
  }
}

/**
 * Various things are broken with useRecoilInterface, particularly concurrent mode
 * and memory management. They will not be fixed.
 * */
function useRecoilInterface_DEPRECATED() {
  const storeRef = useStoreRef$2();
  const [, forceUpdate] = useState$1([]);
  const recoilValuesUsed = useRef$4(new Set());
  recoilValuesUsed.current = new Set(); // Track the RecoilValues used just during this render

  const previousSubscriptions = useRef$4(new Set());
  const subscriptions = useRef$4(new Map());
  const unsubscribeFrom = useCallback$1(key => {
    const sub = subscriptions.current.get(key);

    if (sub) {
      sub.release();
      subscriptions.current.delete(key);
    }
  }, [subscriptions]);
  const componentName = Recoil_useComponentName();
  useEffect$3(() => {
    const store = storeRef.current;

    function updateState(_state, key) {
      if (!subscriptions.current.has(key)) {
        return;
      }

      forceUpdate([]);
    }

    Recoil_differenceSets(recoilValuesUsed.current, previousSubscriptions.current).forEach(key => {
      if (subscriptions.current.has(key)) {
        Recoil_expectationViolation(`Double subscription to RecoilValue "${key}"`);
        return;
      }

      const sub = subscribeToRecoilValue$1(store, new AbstractRecoilValue$3(key), state => {
        updateState(state, key);
      }, componentName);
      subscriptions.current.set(key, sub);
      /**
       * Since we're subscribing in an effect we need to update to the latest
       * value of the atom since it may have changed since we rendered. We can
       * go ahead and do that now, unless we're in the middle of a batch --
       * in which case we should do it at the end of the batch, due to the
       * following edge case: Suppose an atom is updated in another useEffect
       * of this same component. Then the following sequence of events occur:
       * 1. Atom is updated and subs fired (but we may not be subscribed
       *    yet depending on order of effects, so we miss this) Updated value
       *    is now in nextTree, but not currentTree.
       * 2. This effect happens. We subscribe and update.
       * 3. From the update we re-render and read currentTree, with old value.
       * 4. Batcher's effect sets currentTree to nextTree.
       * In this sequence we miss the update. To avoid that, add the update
       * to queuedComponentCallback if a batch is in progress.
       */
      // FIXME delete queuedComponentCallbacks_DEPRECATED when deleting useInterface.

      const state = store.getState();

      if (state.nextTree) {
        store.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
          updateState(store.getState(), key);
        });
      } else {
        updateState(store.getState(), key);
      }
    });
    Recoil_differenceSets(previousSubscriptions.current, recoilValuesUsed.current).forEach(key => {
      unsubscribeFrom(key);
    });
    previousSubscriptions.current = recoilValuesUsed.current;
  });
  useEffect$3(() => {
    const subs = subscriptions.current;
    return () => subs.forEach((_, key) => unsubscribeFrom(key));
  }, [unsubscribeFrom]);
  return useMemo$1(() => {
    // eslint-disable-next-line no-shadow
    function useSetRecoilState(recoilState) {
      if (true) {
        // $FlowFixMe[escaped-generic]
        validateRecoilValue(recoilState, 'useSetRecoilState');
      }

      return newValueOrUpdater => {
        setRecoilValue$2(storeRef.current, recoilState, newValueOrUpdater);
      };
    } // eslint-disable-next-line no-shadow


    function useResetRecoilState(recoilState) {
      if (true) {
        // $FlowFixMe[escaped-generic]
        validateRecoilValue(recoilState, 'useResetRecoilState');
      }

      return () => setRecoilValue$2(storeRef.current, recoilState, DEFAULT_VALUE$2);
    } // eslint-disable-next-line no-shadow


    function useRecoilValueLoadable(recoilValue) {
      var _storeState$nextTree;

      if (true) {
        // $FlowFixMe[escaped-generic]
        validateRecoilValue(recoilValue, 'useRecoilValueLoadable');
      }

      if (!recoilValuesUsed.current.has(recoilValue.key)) {
        recoilValuesUsed.current = setByAddingToSet$2(recoilValuesUsed.current, recoilValue.key);
      } // TODO Restore optimization to memoize lookup


      const storeState = storeRef.current.getState();
      return getRecoilValueAsLoadable$2(storeRef.current, recoilValue, Recoil_gkx_1('recoil_early_rendering_2021') ? (_storeState$nextTree = storeState.nextTree) !== null && _storeState$nextTree !== void 0 ? _storeState$nextTree : storeState.currentTree : storeState.currentTree);
    } // eslint-disable-next-line no-shadow


    function useRecoilValue(recoilValue) {
      if (true) {
        // $FlowFixMe[escaped-generic]
        validateRecoilValue(recoilValue, 'useRecoilValue');
      }

      const loadable = useRecoilValueLoadable(recoilValue);
      return handleLoadable(loadable, recoilValue, storeRef);
    } // eslint-disable-next-line no-shadow


    function useRecoilState(recoilState) {
      if (true) {
        // $FlowFixMe[escaped-generic]
        validateRecoilValue(recoilState, 'useRecoilState');
      }

      return [useRecoilValue(recoilState), useSetRecoilState(recoilState)];
    } // eslint-disable-next-line no-shadow


    function useRecoilStateLoadable(recoilState) {
      if (true) {
        // $FlowFixMe[escaped-generic]
        validateRecoilValue(recoilState, 'useRecoilStateLoadable');
      }

      return [useRecoilValueLoadable(recoilState), useSetRecoilState(recoilState)];
    }

    return {
      getRecoilValue: useRecoilValue,
      getRecoilValueLoadable: useRecoilValueLoadable,
      getRecoilState: useRecoilState,
      getRecoilStateLoadable: useRecoilStateLoadable,
      getSetRecoilState: useSetRecoilState,
      getResetRecoilState: useResetRecoilState
    };
  }, [recoilValuesUsed, storeRef]);
}

const recoilComponentGetRecoilValueCount_FOR_TESTING = {
  current: 0
};

function useRecoilValueLoadable_MUTABLESOURCE(recoilValue) {
  if (true) {
    // $FlowFixMe[escaped-generic]
    validateRecoilValue(recoilValue, 'useRecoilValueLoadable');
  }

  const storeRef = useStoreRef$2();
  const getLoadable = useCallback$1(() => {
    var _storeState$nextTree2;

    const store = storeRef.current;
    const storeState = store.getState();
    const treeState = Recoil_gkx_1('recoil_early_rendering_2021') ? (_storeState$nextTree2 = storeState.nextTree) !== null && _storeState$nextTree2 !== void 0 ? _storeState$nextTree2 : storeState.currentTree : storeState.currentTree;
    return getRecoilValueAsLoadable$2(store, recoilValue, treeState);
  }, [storeRef, recoilValue]);
  const getLoadableWithTesting = useCallback$1(() => {
    if (true) {
      recoilComponentGetRecoilValueCount_FOR_TESTING.current++;
    }

    return getLoadable();
  }, [getLoadable]);
  const componentName = Recoil_useComponentName();
  const subscribe = useCallback$1((_storeState, callback) => {
    const store = storeRef.current;
    const subscription = subscribeToRecoilValue$1(store, recoilValue, () => {
      if (!Recoil_gkx_1('recoil_suppress_rerender_in_callback')) {
        return callback();
      } // Only re-render if the value has changed.
      // This will evaluate the atom/selector now as well as when the
      // component renders, but that may help with prefetching.


      const newLoadable = getLoadable();

      if (!prevLoadableRef.current.is(newLoadable)) {
        callback();
      } // If the component is suspended then the effect setting prevLoadableRef
      // will not run.  So, set the previous value here when its subscription
      // is fired to wake it up.  We can't just rely on this, though, because
      // this only executes when an atom/selector is dirty and the atom/selector
      // passed to the hook can dynamically change.


      prevLoadableRef.current = newLoadable;
    }, componentName);
    return subscription.release;
  }, [storeRef, recoilValue, componentName, getLoadable]);
  const source = useRecoilMutableSource$1();
  const loadable = useMutableSource$1(source, getLoadableWithTesting, subscribe);
  const prevLoadableRef = useRef$4(loadable);
  useEffect$3(() => {
    prevLoadableRef.current = loadable;
  });
  return loadable;
}

function useRecoilValueLoadable_LEGACY(recoilValue) {
  if (true) {
    // $FlowFixMe[escaped-generic]
    validateRecoilValue(recoilValue, 'useRecoilValueLoadable');
  }

  const storeRef = useStoreRef$2();
  const [_, forceUpdate] = useState$1([]);
  const componentName = Recoil_useComponentName();
  useEffect$3(() => {
    const store = storeRef.current;
    const storeState = store.getState();
    const subscription = subscribeToRecoilValue$1(store, recoilValue, _state => {
      var _prevLoadableRef$curr;

      if (!Recoil_gkx_1('recoil_suppress_rerender_in_callback')) {
        return forceUpdate([]);
      }

      const newLoadable = getRecoilValueAsLoadable$2(store, recoilValue, store.getState().currentTree);

      if (!((_prevLoadableRef$curr = prevLoadableRef.current) === null || _prevLoadableRef$curr === void 0 ? void 0 : _prevLoadableRef$curr.is(newLoadable))) {
        forceUpdate(newLoadable);
      }

      prevLoadableRef.current = newLoadable;
    }, componentName);
    /**
     * Since we're subscribing in an effect we need to update to the latest
     * value of the atom since it may have changed since we rendered. We can
     * go ahead and do that now, unless we're in the middle of a batch --
     * in which case we should do it at the end of the batch, due to the
     * following edge case: Suppose an atom is updated in another useEffect
     * of this same component. Then the following sequence of events occur:
     * 1. Atom is updated and subs fired (but we may not be subscribed
     *    yet depending on order of effects, so we miss this) Updated value
     *    is now in nextTree, but not currentTree.
     * 2. This effect happens. We subscribe and update.
     * 3. From the update we re-render and read currentTree, with old value.
     * 4. Batcher's effect sets currentTree to nextTree.
     * In this sequence we miss the update. To avoid that, add the update
     * to queuedComponentCallback if a batch is in progress.
     */

    if (storeState.nextTree) {
      store.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
        prevLoadableRef.current = null;
        forceUpdate([]);
      });
    } else {
      var _prevLoadableRef$curr2;

      if (!Recoil_gkx_1('recoil_suppress_rerender_in_callback')) {
        return forceUpdate([]);
      }

      const newLoadable = getRecoilValueAsLoadable$2(store, recoilValue, store.getState().currentTree);

      if (!((_prevLoadableRef$curr2 = prevLoadableRef.current) === null || _prevLoadableRef$curr2 === void 0 ? void 0 : _prevLoadableRef$curr2.is(newLoadable))) {
        forceUpdate(newLoadable);
      }

      prevLoadableRef.current = newLoadable;
    }

    return subscription.release;
  }, [componentName, recoilValue, storeRef]);
  const loadable = getRecoilValueAsLoadable$2(storeRef.current, recoilValue);
  const prevLoadableRef = useRef$4(loadable);
  useEffect$3(() => {
    prevLoadableRef.current = loadable;
  });
  return loadable;
}
/**
  Like useRecoilValue(), but either returns the value if available or
  just undefined if not available for any reason, such as pending or error.
*/


function useRecoilValueLoadable(recoilValue) {
  if (Recoil_gkx_1('recoil_memory_managament_2020')) {
    // eslint-disable-next-line fb-www/react-hooks
    Recoil_useRetain(recoilValue);
  }

  if (mutableSourceExists$2()) {
    // eslint-disable-next-line fb-www/react-hooks
    return useRecoilValueLoadable_MUTABLESOURCE(recoilValue);
  } else {
    // eslint-disable-next-line fb-www/react-hooks
    return useRecoilValueLoadable_LEGACY(recoilValue);
  }
}
/**
  Returns the value represented by the RecoilValue.
  If the value is pending, it will throw a Promise to suspend the component,
  if the value is an error it will throw it for the nearest React error boundary.
  This will also subscribe the component for any updates in the value.
  */


function useRecoilValue(recoilValue) {
  if (true) {
    // $FlowFixMe[escaped-generic]
    validateRecoilValue(recoilValue, 'useRecoilValue');
  }

  const storeRef = useStoreRef$2();
  const loadable = useRecoilValueLoadable(recoilValue);
  return handleLoadable(loadable, recoilValue, storeRef);
}
/**
  Returns a function that allows the value of a RecoilState to be updated, but does
  not subscribe the component to changes to that RecoilState.
*/


function useSetRecoilState(recoilState) {
  if (true) {
    // $FlowFixMe[escaped-generic]
    validateRecoilValue(recoilState, 'useSetRecoilState');
  }

  const storeRef = useStoreRef$2();
  return useCallback$1(newValueOrUpdater => {
    setRecoilValue$2(storeRef.current, recoilState, newValueOrUpdater);
  }, [storeRef, recoilState]);
}
/**
  Returns a function that will reset the value of a RecoilState to its default
*/


function useResetRecoilState(recoilState) {
  if (true) {
    // $FlowFixMe[escaped-generic]
    validateRecoilValue(recoilState, 'useResetRecoilState');
  }

  const storeRef = useStoreRef$2();
  return useCallback$1(() => {
    setRecoilValue$2(storeRef.current, recoilState, DEFAULT_VALUE$2);
  }, [storeRef, recoilState]);
}
/**
  Equivalent to useState(). Allows the value of the RecoilState to be read and written.
  Subsequent updates to the RecoilState will cause the component to re-render. If the
  RecoilState is pending, this will suspend the component and initiate the
  retrieval of the value. If evaluating the RecoilState resulted in an error, this will
  throw the error so that the nearest React error boundary can catch it.
*/


function useRecoilState(recoilState) {
  if (true) {
    // $FlowFixMe[escaped-generic]
    validateRecoilValue(recoilState, 'useRecoilState');
  }

  return [useRecoilValue(recoilState), useSetRecoilState(recoilState)];
}
/**
  Like useRecoilState(), but does not cause Suspense or React error handling. Returns
  an object that indicates whether the RecoilState is available, pending, or
  unavailable due to an error.
*/


function useRecoilStateLoadable(recoilState) {
  if (true) {
    // $FlowFixMe[escaped-generic]
    validateRecoilValue(recoilState, 'useRecoilStateLoadable');
  }

  return [useRecoilValueLoadable(recoilState), useSetRecoilState(recoilState)];
}

function useSetUnvalidatedAtomValues() {
  const storeRef = useStoreRef$2();
  return (values, transactionMetadata = {}) => {
    batchUpdates$2(() => {
      storeRef.current.addTransactionMetadata(transactionMetadata);
      values.forEach((value, key) => setUnvalidatedRecoilValue$2(storeRef.current, new AbstractRecoilValue$3(key), value));
    });
  };
}

var Recoil_Hooks = {
  recoilComponentGetRecoilValueCount_FOR_TESTING,
  useRecoilInterface: useRecoilInterface_DEPRECATED,
  useRecoilState,
  useRecoilStateLoadable,
  useRecoilValue,
  useRecoilValueLoadable,
  useResetRecoilState,
  useSetRecoilState,
  useSetUnvalidatedAtomValues
};

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */
/**
 * Returns a map containing all of the keys + values from the original map where
 * the given callback returned true.
 */

function filterMap(map, callback) {
  const result = new Map();

  for (const [key, value] of map) {
    if (callback(value, key)) {
      result.set(key, value);
    }
  }

  return result;
}

var Recoil_filterMap = filterMap;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */
/**
 * Returns a set containing all of the values from the original set where
 * the given callback returned true.
 */

function filterSet(set, callback) {
  const result = new Set();

  for (const value of set) {
    if (callback(value)) {
      result.add(value);
    }
  }

  return result;
}

var Recoil_filterSet = filterSet;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function mergeMaps(...maps) {
  const result = new Map();

  for (let i = 0; i < maps.length; i++) {
    const iterator = maps[i].keys();
    let nextKey;

    while (!(nextKey = iterator.next()).done) {
      // $FlowFixMe[incompatible-call] - map/iterator knows nothing about flow types
      result.set(nextKey.value, maps[i].get(nextKey.value));
    }
  }
  /* $FlowFixMe[incompatible-return] (>=0.66.0 site=www,mobile) This comment
   * suppresses an error found when Flow v0.66 was deployed. To see the error
   * delete this comment and run Flow. */


  return result;
}

var Recoil_mergeMaps = mergeMaps;

const {
  batchUpdates: batchUpdates$3
} = Recoil_Batching;

const {
  DEFAULT_VALUE: DEFAULT_VALUE$3,
  getNode: getNode$3,
  nodes: nodes$1
} = Recoil_Node;

const {
  useStoreRef: useStoreRef$3
} = Recoil_RecoilRoot_react;

const {
  AbstractRecoilValue: AbstractRecoilValue$4,
  setRecoilValueLoadable: setRecoilValueLoadable$1
} = Recoil_RecoilValueInterface;

const {
  SUSPENSE_TIMEOUT_MS: SUSPENSE_TIMEOUT_MS$2
} = Recoil_Retention;

const {
  Snapshot: Snapshot$1,
  cloneSnapshot: cloneSnapshot$1
} = Recoil_Snapshot$1;

const {
  isSSR: isSSR$3
} = Recoil_Environment;















const {
  useCallback: useCallback$2,
  useEffect: useEffect$4,
  useRef: useRef$5,
  useState: useState$2
} = (react__WEBPACK_IMPORTED_MODULE_0___default());

function useTransactionSubscription(callback) {
  const storeRef = useStoreRef$3();
  useEffect$4(() => {
    const sub = storeRef.current.subscribeToTransactions(callback);
    return sub.release;
  }, [callback, storeRef]);
}

function externallyVisibleAtomValuesInState(state) {
  const atomValues = state.atomValues.toMap();
  const persistedAtomContentsValues = Recoil_mapMap(Recoil_filterMap(atomValues, (v, k) => {
    const node = getNode$3(k);
    const persistence = node.persistence_UNSTABLE;
    return persistence != null && persistence.type !== 'none' && v.state === 'hasValue';
  }), v => v.contents); // Merge in nonvalidated atoms; we may not have defs for them but they will
  // all have persistence on or they wouldn't be there in the first place.

  return Recoil_mergeMaps(state.nonvalidatedAtoms.toMap(), persistedAtomContentsValues);
}

/**
  Calls the given callback after any atoms have been modified and the consequent
  component re-renders have been committed. This is intended for persisting
  the values of the atoms to storage. The stored values can then be restored
  using the useSetUnvalidatedAtomValues hook.

  The callback receives the following info:

  atomValues: The current value of every atom that is both persistable (persistence
              type not set to 'none') and whose value is available (not in an
              error or loading state).

  previousAtomValues: The value of every persistable and available atom before
               the transaction began.

  atomInfo: A map containing the persistence settings for each atom. Every key
            that exists in atomValues will also exist in atomInfo.

  modifiedAtoms: The set of atoms that were written to during the transaction.

  transactionMetadata: Arbitrary information that was added via the
          useSetUnvalidatedAtomValues hook. Useful for ignoring the useSetUnvalidatedAtomValues
          transaction, to avoid loops.
*/
function useTransactionObservation_DEPRECATED(callback) {
  useTransactionSubscription(useCallback$2(store => {
    let previousTree = store.getState().previousTree;
    const currentTree = store.getState().currentTree;

    if (!previousTree) {
      Recoil_recoverableViolation('Transaction subscribers notified without a previous tree being present -- this is a bug in Recoil');
      previousTree = store.getState().currentTree; // attempt to trundle on
    }

    const atomValues = externallyVisibleAtomValuesInState(currentTree);
    const previousAtomValues = externallyVisibleAtomValuesInState(previousTree);
    const atomInfo = Recoil_mapMap(nodes$1, node => {
      var _node$persistence_UNS, _node$persistence_UNS2, _node$persistence_UNS3, _node$persistence_UNS4;

      return {
        persistence_UNSTABLE: {
          type: (_node$persistence_UNS = (_node$persistence_UNS2 = node.persistence_UNSTABLE) === null || _node$persistence_UNS2 === void 0 ? void 0 : _node$persistence_UNS2.type) !== null && _node$persistence_UNS !== void 0 ? _node$persistence_UNS : 'none',
          backButton: (_node$persistence_UNS3 = (_node$persistence_UNS4 = node.persistence_UNSTABLE) === null || _node$persistence_UNS4 === void 0 ? void 0 : _node$persistence_UNS4.backButton) !== null && _node$persistence_UNS3 !== void 0 ? _node$persistence_UNS3 : false
        }
      };
    }); // Filter on existance in atomValues so that externally-visible rules
    // are also applied to modified atoms (specifically exclude selectors):

    const modifiedAtoms = Recoil_filterSet(currentTree.dirtyAtoms, k => atomValues.has(k) || previousAtomValues.has(k));
    callback({
      atomValues,
      previousAtomValues,
      atomInfo,
      modifiedAtoms,
      transactionMetadata: { ...currentTree.transactionMetadata
      }
    });
  }, [callback]));
}

function useRecoilTransactionObserver(callback) {
  useTransactionSubscription(useCallback$2(store => {
    const snapshot = cloneSnapshot$1(store, 'current');
    const previousSnapshot = cloneSnapshot$1(store, 'previous');
    callback({
      snapshot,
      previousSnapshot
    });
  }, [callback]));
} // Return a snapshot of the current state and subscribe to all state changes


function useRecoilSnapshot() {
  const storeRef = useStoreRef$3();
  const [snapshot, setSnapshot] = useState$2(() => cloneSnapshot$1(storeRef.current));
  const previousSnapshot = Recoil_usePrevious(snapshot);
  const timeoutID = useRef$5();
  useEffect$4(() => {
    if (timeoutID.current && !isSSR$3) {
      window.clearTimeout(timeoutID.current);
    }

    return snapshot.retain();
  }, [snapshot]);
  useTransactionSubscription(useCallback$2(store => setSnapshot(cloneSnapshot$1(store)), []));

  if (previousSnapshot !== snapshot && !isSSR$3) {
    if (timeoutID.current) {
      previousSnapshot === null || previousSnapshot === void 0 ? void 0 : previousSnapshot.release_INTERNAL();
      window.clearTimeout(timeoutID.current);
    }

    snapshot.retain();
    timeoutID.current = window.setTimeout(() => {
      snapshot.release_INTERNAL();
      timeoutID.current = null;
    }, SUSPENSE_TIMEOUT_MS$2);
  }

  return snapshot;
}

function useGotoRecoilSnapshot() {
  const storeRef = useStoreRef$3();
  return useCallback$2(snapshot => {
    var _storeState$nextTree;

    const storeState = storeRef.current.getState();
    const prev = (_storeState$nextTree = storeState.nextTree) !== null && _storeState$nextTree !== void 0 ? _storeState$nextTree : storeState.currentTree;
    const next = snapshot.getStore_INTERNAL().getState().currentTree;
    batchUpdates$3(() => {
      const keysToUpdate = new Set();

      for (const keys of [prev.atomValues.keys(), next.atomValues.keys()]) {
        for (const key of keys) {
          var _prev$atomValues$get, _next$atomValues$get;

          if (((_prev$atomValues$get = prev.atomValues.get(key)) === null || _prev$atomValues$get === void 0 ? void 0 : _prev$atomValues$get.contents) !== ((_next$atomValues$get = next.atomValues.get(key)) === null || _next$atomValues$get === void 0 ? void 0 : _next$atomValues$get.contents) && getNode$3(key).shouldRestoreFromSnapshots) {
            keysToUpdate.add(key);
          }
        }
      }

      keysToUpdate.forEach(key => {
        setRecoilValueLoadable$1(storeRef.current, new AbstractRecoilValue$4(key), next.atomValues.has(key) ? Recoil_nullthrows(next.atomValues.get(key)) : DEFAULT_VALUE$3);
      });
      storeRef.current.replaceState(state => {
        return { ...state,
          stateID: snapshot.getID_INTERNAL()
        };
      });
    });
  }, [storeRef]);
}

var Recoil_SnapshotHooks = {
  useRecoilSnapshot,
  useGotoRecoilSnapshot,
  useRecoilTransactionObserver,
  useTransactionObservation_DEPRECATED,
  useTransactionSubscription_DEPRECATED: useTransactionSubscription
};

const {
  peekNodeInfo: peekNodeInfo$2
} = Recoil_FunctionalCore;

const {
  useStoreRef: useStoreRef$4
} = Recoil_RecoilRoot_react;

function useGetRecoilValueInfo() {
  const storeRef = useStoreRef$4();
  return ({
    key
  }) => peekNodeInfo$2(storeRef.current, storeRef.current.getState().currentTree, key);
}

var Recoil_useGetRecoilValueInfo = useGetRecoilValueInfo;

const {
  RecoilRoot: RecoilRoot$1,
  useStoreRef: useStoreRef$5
} = Recoil_RecoilRoot_react;



const {
  useMemo: useMemo$2
} = (react__WEBPACK_IMPORTED_MODULE_0___default());

function useRecoilBridgeAcrossReactRoots() {
  const store = useStoreRef$5().current;
  return useMemo$2(() => {
    // eslint-disable-next-line no-shadow
    function RecoilBridge({
      children
    }) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RecoilRoot$1, {
        store_INTERNAL: store
      }, children);
    }

    return RecoilBridge;
  }, [store]);
}

var Recoil_useRecoilBridgeAcrossReactRoots = useRecoilBridgeAcrossReactRoots;

const {
  loadableWithValue: loadableWithValue$1
} = Recoil_Loadable$1;

const {
  DEFAULT_VALUE: DEFAULT_VALUE$4,
  getNode: getNode$4
} = Recoil_Node;

const {
  copyTreeState: copyTreeState$1,
  getRecoilValueAsLoadable: getRecoilValueAsLoadable$3,
  invalidateDownstreams: invalidateDownstreams$1,
  writeLoadableToTreeState: writeLoadableToTreeState$1
} = Recoil_RecoilValueInterface;



function isAtom(recoilValue) {
  return getNode$4(recoilValue.key).nodeType === 'atom';
}

class TransactionInterfaceImpl {
  constructor(store, treeState) {
    _defineProperty(this, "_store", void 0);

    _defineProperty(this, "_treeState", void 0);

    _defineProperty(this, "_changes", void 0);

    _defineProperty(this, "get", recoilValue => {
      if (this._changes.has(recoilValue.key)) {
        // $FlowFixMe[incompatible-return]
        return this._changes.get(recoilValue.key);
      }

      if (!isAtom(recoilValue)) {
        throw Recoil_err('Reading selectors within atomicUpdate is not supported');
      }

      const loadable = getRecoilValueAsLoadable$3(this._store, recoilValue, this._treeState);

      if (loadable.state === 'hasValue') {
        return loadable.contents;
      } else if (loadable.state === 'hasError') {
        throw loadable.contents;
      } else {
        throw Recoil_err(`Expected Recoil atom ${recoilValue.key} to have a value, but it is in a loading state.`);
      }
    });

    _defineProperty(this, "set", (recoilState, valueOrUpdater) => {
      if (!isAtom(recoilState)) {
        throw Recoil_err('Setting selectors within atomicUpdate is not supported');
      }

      if (typeof valueOrUpdater === 'function') {
        const current = this.get(recoilState);

        this._changes.set(recoilState.key, valueOrUpdater(current)); // flowlint-line unclear-type:off

      } else {
        this._changes.set(recoilState.key, valueOrUpdater);
      }
    });

    _defineProperty(this, "reset", recoilState => {
      this.set(recoilState, DEFAULT_VALUE$4);
    });

    this._store = store;
    this._treeState = treeState;
    this._changes = new Map();
  } // Allow destructing
  // eslint-disable-next-line fb-www/extra-arrow-initializer


  newTreeState_INTERNAL() {
    if (this._changes.size === 0) {
      return this._treeState;
    }

    const newState = copyTreeState$1(this._treeState);

    for (const [k, v] of this._changes) {
      writeLoadableToTreeState$1(newState, k, loadableWithValue$1(v));
    }

    invalidateDownstreams$1(this._store, newState);
    return newState;
  }

}

function atomicUpdater(store) {
  return fn => {
    store.replaceState(treeState => {
      const changeset = new TransactionInterfaceImpl(store, treeState);
      fn(changeset);
      return changeset.newTreeState_INTERNAL();
    });
  };
}

var Recoil_AtomicUpdates = {
  atomicUpdater
};

var Recoil_AtomicUpdates_1 = Recoil_AtomicUpdates.atomicUpdater;

var Recoil_AtomicUpdates$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  atomicUpdater: Recoil_AtomicUpdates_1
});

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function invariant(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

var invariant_1 = invariant;

// @oss-only


var Recoil_invariant = invariant_1;

const {
  atomicUpdater: atomicUpdater$1
} = Recoil_AtomicUpdates$1;

const {
  batchUpdates: batchUpdates$4
} = Recoil_Batching;

const {
  DEFAULT_VALUE: DEFAULT_VALUE$5
} = Recoil_Node;

const {
  useStoreRef: useStoreRef$6
} = Recoil_RecoilRoot_react;

const {
  setRecoilValue: setRecoilValue$3
} = Recoil_RecoilValueInterface;

const {
  Snapshot: Snapshot$2,
  cloneSnapshot: cloneSnapshot$2
} = Recoil_Snapshot$1;





const {
  useGotoRecoilSnapshot: useGotoRecoilSnapshot$1
} = Recoil_SnapshotHooks;

const {
  useCallback: useCallback$3
} = (react__WEBPACK_IMPORTED_MODULE_0___default());

class Sentinel {}

const SENTINEL = new Sentinel();

function useRecoilCallback(fn, deps) {
  const storeRef = useStoreRef$6();
  const gotoSnapshot = useGotoRecoilSnapshot$1();
  return useCallback$3((...args) => {
    function set(recoilState, newValueOrUpdater) {
      setRecoilValue$3(storeRef.current, recoilState, newValueOrUpdater);
    }

    function reset(recoilState) {
      setRecoilValue$3(storeRef.current, recoilState, DEFAULT_VALUE$5);
    } // Use currentTree for the snapshot to show the currently committed state


    const snapshot = cloneSnapshot$2(storeRef.current); // FIXME massive gains from doing this lazily

    const atomicUpdate = atomicUpdater$1(storeRef.current);
    let ret = SENTINEL;
    batchUpdates$4(() => {
      const errMsg = 'useRecoilCallback expects a function that returns a function: ' + 'it accepts a function of the type (RecoilInterface) => T = R ' + 'and returns a callback function T => R, where RecoilInterface is an ' + 'object {snapshot, set, ...} and T and R are the argument and return ' + 'types of the callback you want to create.  Please see the docs ' + 'at recoiljs.org for details.';

      if (typeof fn !== 'function') {
        throw Recoil_err(errMsg);
      } // flowlint-next-line unclear-type:off


      const cb = fn({
        set,
        reset,
        snapshot,
        gotoSnapshot,
        transact_UNSTABLE: atomicUpdate
      });

      if (typeof cb !== 'function') {
        throw Recoil_err(errMsg);
      }

      ret = cb(...args);
    });
    !!(ret instanceof Sentinel) ?  true ? Recoil_invariant(false, 'batchUpdates should return immediately') : 0 : void 0;
    return ret;
  }, deps != null ? [...deps, storeRef] : undefined // eslint-disable-line fb-www/react-hooks-deps
  );
}

var Recoil_useRecoilCallback = useRecoilCallback;

const {
  getNode: getNode$5
} = Recoil_Node;

const {
  useStoreRef: useStoreRef$7
} = Recoil_RecoilRoot_react;

const {
  useCallback: useCallback$4
} = (react__WEBPACK_IMPORTED_MODULE_0___default());

function useRecoilRefresher(recoilValue) {
  const storeRef = useStoreRef$7();
  return useCallback$4(() => {
    var _node$clearCache;

    const store = storeRef.current;
    const {
      currentTree
    } = store.getState();
    const node = getNode$5(recoilValue.key);
    (_node$clearCache = node.clearCache) === null || _node$clearCache === void 0 ? void 0 : _node$clearCache.call(node, store, currentTree);
  }, [recoilValue, storeRef]);
}

var Recoil_useRecoilRefresher = useRecoilRefresher;

const {
  atomicUpdater: atomicUpdater$2
} = Recoil_AtomicUpdates$1;

const {
  useStoreRef: useStoreRef$8
} = Recoil_RecoilRoot_react;

const {
  useMemo: useMemo$3
} = (react__WEBPACK_IMPORTED_MODULE_0___default());

function useRecoilTransaction(fn, deps) {
  const storeRef = useStoreRef$8();
  return useMemo$3(() => (...args) => {
    const atomicUpdate = atomicUpdater$2(storeRef.current);
    atomicUpdate(transactionInterface => {
      fn(transactionInterface)(...args);
    });
  }, deps != null ? [...deps, storeRef] : undefined // eslint-disable-line fb-www/react-hooks-deps
  );
}

var Recoil_useRecoilTransaction = useRecoilTransaction;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function isNode(object) {
  var _ownerDocument, _doc$defaultView;

  if (typeof window === 'undefined') {
    return false;
  }

  const doc = object != null ? (_ownerDocument = object.ownerDocument) !== null && _ownerDocument !== void 0 ? _ownerDocument : object : document;
  const defaultView = (_doc$defaultView = doc.defaultView) !== null && _doc$defaultView !== void 0 ? _doc$defaultView : window;
  return !!(object != null && (typeof defaultView.Node === 'function' ? object instanceof defaultView.Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
}

var Recoil_isNode = isNode;

const {
  isReactNative: isReactNative$1,
  isSSR: isSSR$4
} = Recoil_Environment;





function shouldNotBeFrozen(value) {
  // Primitives and functions:
  if (value === null || typeof value !== 'object') {
    return true;
  } // React elements:


  switch (typeof value.$$typeof) {
    case 'symbol':
      return true;

    case 'number':
      return true;
  } // Immutable structures:


  if (value['@@__IMMUTABLE_ITERABLE__@@'] != null || value['@@__IMMUTABLE_KEYED__@@'] != null || value['@@__IMMUTABLE_INDEXED__@@'] != null || value['@@__IMMUTABLE_ORDERED__@@'] != null || value['@@__IMMUTABLE_RECORD__@@'] != null) {
    return true;
  } // DOM nodes:


  if (Recoil_isNode(value)) {
    return true;
  }

  if (Recoil_isPromise(value)) {
    return true;
  }

  if (value instanceof Error) {
    return true;
  }

  if (ArrayBuffer.isView(value)) {
    return true;
  } // Some environments, just as Jest, don't work with the instanceof check


  if (!isSSR$4 && !isReactNative$1 && ( // $FlowFixMe(site=recoil) Window does not have a FlowType definition https://github.com/facebook/flow/issues/6709
  value === window || value instanceof Window)) {
    return true;
  }

  return false;
} // Recursively freeze a value to enforce it is read-only.
// This may also have minimal performance improvements for enumerating
// objects (based on browser implementations, of course)


function deepFreezeValue(value) {
  if (typeof value !== 'object' || shouldNotBeFrozen(value)) {
    return;
  }

  Object.freeze(value); // Make all properties read-only

  for (const key in value) {
    // $FlowFixMe[method-unbinding] added when improving typing for this parameters
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      const prop = value[key]; // Prevent infinite recurssion for circular references.

      if (typeof prop === 'object' && prop != null && !Object.isFrozen(prop)) {
        deepFreezeValue(prop);
      }
    }
  }

  Object.seal(value); // This also makes existing properties non-configurable.
}

var Recoil_deepFreezeValue = deepFreezeValue;

const TIME_WARNING_THRESHOLD_MS = 15;

function stringify(x, opt, key) {
  // A optimization to avoid the more expensive JSON.stringify() for simple strings
  // This may lose protection for u2028 and u2029, though.
  if (typeof x === 'string' && !x.includes('"') && !x.includes('\\')) {
    return `"${x}"`;
  } // Handle primitive types


  switch (typeof x) {
    case 'undefined':
      return '';
    // JSON.stringify(undefined) returns undefined, but we always want to return a string

    case 'boolean':
      return x ? 'true' : 'false';

    case 'number':
    case 'symbol':
      // case 'bigint': // BigInt is not supported in www
      return String(x);

    case 'string':
      // Add surrounding quotes and escape internal quotes
      return JSON.stringify(x);

    case 'function':
      if ((opt === null || opt === void 0 ? void 0 : opt.allowFunctions) !== true) {
        throw Recoil_err('Attempt to serialize function in a Recoil cache key');
      }

      return `__FUNCTION(${x.name})__`;
  }

  if (x === null) {
    return 'null';
  } // Fallback case for unknown types


  if (typeof x !== 'object') {
    var _JSON$stringify;

    return (_JSON$stringify = JSON.stringify(x)) !== null && _JSON$stringify !== void 0 ? _JSON$stringify : '';
  } // Deal with all promises as equivalent for now.


  if (Recoil_isPromise(x)) {
    return '__PROMISE__';
  } // Arrays handle recursive stringification


  if (Array.isArray(x)) {
    return `[${x.map((v, i) => stringify(v, opt, i.toString()))}]`;
  } // If an object defines a toJSON() method, then use that to override the
  // serialization.  This matches the behavior of JSON.stringify().
  // Pass the key for compatibility.
  // Immutable.js collections define this method to allow us to serialize them.


  if (typeof x.toJSON === 'function') {
    // flowlint-next-line unclear-type: off
    return stringify(x.toJSON(key), opt, key);
  } // For built-in Maps, sort the keys in a stable order instead of the
  // default insertion order.  Support non-string keys.


  if (x instanceof Map) {
    const obj = {};

    for (const [k, v] of x) {
      // Stringify will escape any nested quotes
      obj[typeof k === 'string' ? k : stringify(k, opt)] = v;
    }

    return stringify(obj, opt, key);
  } // For built-in Sets, sort the keys in a stable order instead of the
  // default insertion order.


  if (x instanceof Set) {
    return stringify(Array.from(x).sort((a, b) => stringify(a, opt).localeCompare(stringify(b, opt))), opt, key);
  } // Anything else that is iterable serialize as an Array.


  if (Symbol !== undefined && x[Symbol.iterator] != null && typeof x[Symbol.iterator] === 'function') {
    // flowlint-next-line unclear-type: off
    return stringify(Array.from(x), opt, key);
  } // For all other Objects, sort the keys in a stable order.


  return `{${Object.keys(x).filter(k => x[k] !== undefined).sort() // stringify the key to add quotes and escape any nested slashes or quotes.
  .map(k => `${stringify(k, opt)}:${stringify(x[k], opt, k)}`).join(',')}}`;
} // Utility similar to JSON.stringify() except:
// * Serialize built-in Sets as an Array
// * Serialize built-in Maps as an Object.  Supports non-string keys.
// * Serialize other iterables as arrays
// * Sort the keys of Objects and Maps to have a stable order based on string conversion.
//    This overrides their default insertion order.
// * Still uses toJSON() of any object to override serialization
// * Support Symbols (though don't guarantee uniqueness)
// * We could support BigInt, but Flow doesn't seem to like it.
// See Recoil_stableStringify-test.js for examples


function stableStringify(x, opt = {
  allowFunctions: false
}) {
  if (true) {
    if (typeof window !== 'undefined') {
      const startTime = window.performance ? window.performance.now() : 0;
      const str = stringify(x, opt);
      const endTime = window.performance ? window.performance.now() : 0;

      if (endTime - startTime > TIME_WARNING_THRESHOLD_MS) {
        /* eslint-disable fb-www/no-console */
        console.groupCollapsed(`Recoil: Spent ${endTime - startTime}ms computing a cache key`);
        console.warn(x, str);
        console.groupEnd();
        /* eslint-enable fb-www/no-console */
      }

      return str;
    }
  }

  return stringify(x, opt);
}

var Recoil_stableStringify = stableStringify;

class TreeCache {
  constructor(options) {
    var _options$onHit, _options$onSet, _options$mapNodeValue;

    _defineProperty(this, "_numLeafs", void 0);

    _defineProperty(this, "_root", void 0);

    _defineProperty(this, "_onHit", void 0);

    _defineProperty(this, "_onSet", void 0);

    _defineProperty(this, "_mapNodeValue", void 0);

    this._numLeafs = 0;
    this._root = null;
    this._onHit = (_options$onHit = options === null || options === void 0 ? void 0 : options.onHit) !== null && _options$onHit !== void 0 ? _options$onHit : () => {};
    this._onSet = (_options$onSet = options === null || options === void 0 ? void 0 : options.onSet) !== null && _options$onSet !== void 0 ? _options$onSet : () => {};
    this._mapNodeValue = (_options$mapNodeValue = options === null || options === void 0 ? void 0 : options.mapNodeValue) !== null && _options$mapNodeValue !== void 0 ? _options$mapNodeValue : val => val;
  }

  size() {
    return this._numLeafs;
  } // TODO: nodeCount(): number


  root() {
    return this._root;
  }

  get(getNodeValue, handlers) {
    var _this$getLeafNode;

    return (_this$getLeafNode = this.getLeafNode(getNodeValue, handlers)) === null || _this$getLeafNode === void 0 ? void 0 : _this$getLeafNode.value;
  }

  getLeafNode(getNodeValue, handlers) {
    return findLeaf(this.root(), nodeKey => this._mapNodeValue(getNodeValue(nodeKey)), {
      onNodeVisit: node => {
        handlers === null || handlers === void 0 ? void 0 : handlers.onNodeVisit(node);

        if (node.type === 'leaf') {
          this._onHit(node);
        }
      }
    });
  }

  set(route, value, handlers) {
    let leafNode;
    let newRoot = null;

    const setRetryablePart = () => {
      newRoot = addLeaf(this.root(), route.map(([nodeKey, nodeValue]) => [nodeKey, this._mapNodeValue(nodeValue)]), null, value, null, {
        onNodeVisit: node => {
          handlers === null || handlers === void 0 ? void 0 : handlers.onNodeVisit(node);

          if (node.type === 'leaf') {
            leafNode = node;
          }
        }
      }, () => {
        this.clear();
        setRetryablePart();
      });
    };

    setRetryablePart();

    if (!this.root()) {
      this._root = newRoot;
    }

    this._numLeafs++;

    this._onSet(Recoil_nullthrows(leafNode));
  }

  delete(node) {
    if (!this.root()) {
      return false;
    }

    const root = Recoil_nullthrows(this.root());
    const existsInTree = pruneNodeFromTree(root, node, node.parent);

    if (!existsInTree) {
      return false;
    }

    if (node === root || root.type === 'branch' && !root.branches.size) {
      this._root = null;
      this._numLeafs = 0;
      return true;
    }

    this._numLeafs -= countDownstreamLeaves(node);
    return true;
  }

  clear() {
    this._numLeafs = 0;
    this._root = null;
  }

}

const findLeaf = (root, getNodeValue, handlers) => {
  var _handlers$onNodeVisit;

  if (root == null) {
    return undefined;
  }

  handlers === null || handlers === void 0 ? void 0 : (_handlers$onNodeVisit = handlers.onNodeVisit) === null || _handlers$onNodeVisit === void 0 ? void 0 : _handlers$onNodeVisit.call(handlers, root);

  if (root.type === 'leaf') {
    return root;
  }

  const nodeValue = getNodeValue(root.nodeKey);
  return findLeaf(root.branches.get(nodeValue), getNodeValue, handlers);
};

const addLeaf = (root, route, parent, value, branchKey, handlers, onAbort) => {
  var _handlers$onNodeVisit2;

  let node;

  if (root == null) {
    if (route.length === 0) {
      node = {
        type: 'leaf',
        value,
        parent,
        branchKey
      };
    } else {
      const [path, ...rest] = route;
      const [nodeKey, nodeValue] = path;
      node = {
        type: 'branch',
        nodeKey,
        parent,
        branches: new Map(),
        branchKey
      };
      node.branches.set(nodeValue, addLeaf(null, rest, node, value, nodeValue, handlers, onAbort));
    }
  } else {
    node = root;

    if (route.length) {
      const [path, ...rest] = route;
      const [nodeKey, nodeValue] = path;

      if (root.type !== 'branch' || root.nodeKey !== nodeKey) {
        Recoil_recoverableViolation('Existing cache must have a branch midway through the ' + 'route with matching node key. Resetting cache.');
        onAbort();
        return node; // ignored
      }

      root.branches.set(nodeValue, addLeaf(root.branches.get(nodeValue), rest, root, value, nodeValue, handlers, onAbort));
    }
  }

  handlers === null || handlers === void 0 ? void 0 : (_handlers$onNodeVisit2 = handlers.onNodeVisit) === null || _handlers$onNodeVisit2 === void 0 ? void 0 : _handlers$onNodeVisit2.call(handlers, node);
  return node;
};

const pruneNodeFromTree = (root, node, parent) => {
  if (!parent) {
    return root === node;
  }

  parent.branches.delete(node.branchKey);
  return pruneUpstreamBranches(root, parent, parent.parent);
};

const pruneUpstreamBranches = (root, branchNode, parent) => {
  if (!parent) {
    return root === branchNode;
  }

  if (branchNode.branches.size === 0) {
    parent.branches.delete(branchNode.branchKey);
  }

  return pruneUpstreamBranches(root, parent, parent.parent);
};

const countDownstreamLeaves = node => node.type === 'leaf' ? 1 : Array.from(node.branches.values()).reduce((sum, currNode) => sum + countDownstreamLeaves(currNode), 0);

var Recoil_TreeCache = {
  TreeCache
};

var Recoil_TreeCache_1 = Recoil_TreeCache.TreeCache;

var Recoil_TreeCache$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  TreeCache: Recoil_TreeCache_1
});

class LRUCache {
  constructor(options) {
    var _options$mapKey;

    _defineProperty(this, "_maxSize", void 0);

    _defineProperty(this, "_size", void 0);

    _defineProperty(this, "_head", void 0);

    _defineProperty(this, "_tail", void 0);

    _defineProperty(this, "_map", void 0);

    _defineProperty(this, "_keyMapper", void 0);

    this._maxSize = options.maxSize;
    this._size = 0;
    this._head = null;
    this._tail = null;
    this._map = new Map();
    this._keyMapper = (_options$mapKey = options.mapKey) !== null && _options$mapKey !== void 0 ? _options$mapKey : v => v;
  }

  head() {
    return this._head;
  }

  tail() {
    return this._tail;
  }

  size() {
    return this._size;
  }

  maxSize() {
    return this._maxSize;
  }

  has(key) {
    return this._map.has(this._keyMapper(key));
  }

  get(key) {
    const mappedKey = this._keyMapper(key);

    const node = this._map.get(mappedKey);

    if (!node) {
      return undefined;
    }

    this.set(key, node.value);
    return node.value;
  }

  set(key, val) {
    const mappedKey = this._keyMapper(key);

    const existingNode = this._map.get(mappedKey);

    if (existingNode) {
      this.delete(key);
    }

    const head = this.head();
    const node = {
      key,
      right: head,
      left: null,
      value: val
    };

    if (head) {
      head.left = node;
    } else {
      this._tail = node;
    }

    this._map.set(mappedKey, node);

    this._head = node;
    this._size++;

    this._maybeDeleteLRU();
  }

  _maybeDeleteLRU() {
    if (this.size() > this.maxSize()) {
      this.deleteLru();
    }
  }

  deleteLru() {
    const tail = this.tail();

    if (tail) {
      this.delete(tail.key);
    }
  }

  delete(key) {
    const mappedKey = this._keyMapper(key);

    if (!this._size || !this._map.has(mappedKey)) {
      return;
    }

    const node = Recoil_nullthrows(this._map.get(mappedKey));
    const right = node.right;
    const left = node.left;

    if (right) {
      right.left = node.left;
    }

    if (left) {
      left.right = node.right;
    }

    if (node === this.head()) {
      this._head = right;
    }

    if (node === this.tail()) {
      this._tail = left;
    }

    this._map.delete(mappedKey);

    this._size--;
  }

  clear() {
    this._size = 0;
    this._head = null;
    this._tail = null;
    this._map = new Map();
  }

}

var Recoil_LRUCache = {
  LRUCache
};

var Recoil_LRUCache_1 = Recoil_LRUCache.LRUCache;

var Recoil_LRUCache$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  LRUCache: Recoil_LRUCache_1
});

const {
  LRUCache: LRUCache$1
} = Recoil_LRUCache$1;

const {
  TreeCache: TreeCache$1
} = Recoil_TreeCache$1;

function treeCacheLRU(maxSize, mapNodeValue = v => v) {
  const lruCache = new LRUCache$1({
    maxSize
  });
  const cache = new TreeCache$1({
    mapNodeValue,
    onHit: node => {
      lruCache.set(node, true);
    },
    onSet: node => {
      const lruNode = lruCache.tail();
      lruCache.set(node, true);

      if (lruNode && cache.size() > maxSize) {
        cache.delete(lruNode.key);
      }
    }
  }); // $FlowFixMe[method-unbinding]

  return cache;
}

var Recoil_treeCacheLRU = treeCacheLRU;

const {
  TreeCache: TreeCache$2
} = Recoil_TreeCache$1;



const defaultPolicy = {
  equality: 'reference',
  eviction: 'keep-all',
  maxSize: Infinity
};

function treeCacheFromPolicy({
  equality = defaultPolicy.equality,
  eviction = defaultPolicy.eviction,
  maxSize = defaultPolicy.maxSize
} = defaultPolicy) {
  const valueMapper = getValueMapper(equality);
  const treeCache = getTreeCache(eviction, maxSize, valueMapper);
  return treeCache;
}

function getValueMapper(equality) {
  switch (equality) {
    case 'reference':
      return val => val;

    case 'value':
      return val => Recoil_stableStringify(val);
  }

  throw Recoil_err(`Unrecognized equality policy ${equality}`);
}

function getTreeCache(eviction, maxSize, mapNodeValue) {
  switch (eviction) {
    case 'keep-all':
      // $FlowFixMe[method-unbinding]
      return new TreeCache$2({
        mapNodeValue
      });

    case 'lru':
      return Recoil_treeCacheLRU(Recoil_nullthrows(maxSize), mapNodeValue);

    case 'most-recent':
      return Recoil_treeCacheLRU(1, mapNodeValue);
  }

  throw Recoil_err(`Unrecognized eviction policy ${eviction}`);
}

var Recoil_treeCacheFromPolicy = treeCacheFromPolicy;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 *
 * This is a stub for some integration into FB internal stuff
 */
function startPerfBlock(_id) {
  return () => null;
}

var Recoil_PerformanceTimings = {
  startPerfBlock
};

const {
  loadableWithError: loadableWithError$1,
  loadableWithPromise: loadableWithPromise$1,
  loadableWithValue: loadableWithValue$2
} = Recoil_Loadable$1;



const {
  getNodeLoadable: getNodeLoadable$2,
  peekNodeLoadable: peekNodeLoadable$1,
  setNodeValue: setNodeValue$3
} = Recoil_FunctionalCore;

const {
  saveDependencyMapToStore: saveDependencyMapToStore$1
} = Recoil_Graph;

const {
  DEFAULT_VALUE: DEFAULT_VALUE$6,
  RecoilValueNotReady: RecoilValueNotReady$2,
  getConfigDeletionHandler: getConfigDeletionHandler$1,
  getNode: getNode$6,
  registerNode: registerNode$1
} = Recoil_Node;

const {
  isRecoilValue: isRecoilValue$3
} = Recoil_RecoilValue$1;

const {
  AbstractRecoilValue: AbstractRecoilValue$5
} = Recoil_RecoilValue$1;

const {
  markRecoilValueModified: markRecoilValueModified$1,
  setRecoilValueLoadable: setRecoilValueLoadable$2
} = Recoil_RecoilValueInterface;

const {
  retainedByOptionWithDefault: retainedByOptionWithDefault$1
} = Recoil_Retention;

const {
  cloneSnapshot: cloneSnapshot$3
} = Recoil_Snapshot$1;













const {
  startPerfBlock: startPerfBlock$1
} = Recoil_PerformanceTimings;



class Canceled {}

const CANCELED = new Canceled();
/**
 * An ExecutionId is an arbitrary ID that lets us distinguish executions from
 * each other. This is necessary as we need a way of solving this problem:
 * "given 3 async executions, only update state for the 'latest' execution when
 * it finishes running regardless of when the other 2 finish". ExecutionIds
 * provide a convenient way of identifying executions so that we can track and
 * manage them over time.
 */

const dependencyStack = []; // for detecting circular dependencies.

const waitingStores = new Map();
/* eslint-disable no-redeclare */

const getNewExecutionId = (() => {
  let executionId = 0;
  return () => executionId++;
})();

function getInitialExecutionInfo() {
  return {
    depValuesDiscoveredSoFarDuringAsyncWork: null,
    latestLoadable: null,
    latestExecutionId: null,
    stateVersion: null
  };
}

function selector(options) {
  let recoilValue = null;
  const {
    key,
    get,
    cachePolicy_UNSTABLE: cachePolicy
  } = options;
  const set = options.set != null ? options.set : undefined; // flow

  if (true) {
    if (typeof key !== 'string') {
      throw Recoil_err('A key option with a unique string value must be provided when creating a selector.');
    }

    if (typeof get !== 'function') {
      throw Recoil_err('Selectors must specify a get callback option to get the selector value.');
    }
  } // This is every discovered dependency across executions


  const discoveredDependencyNodeKeys = new Set();
  const cache = Recoil_treeCacheFromPolicy(cachePolicy !== null && cachePolicy !== void 0 ? cachePolicy : {
    equality: 'reference',
    eviction: 'keep-all'
  });
  const retainedBy = retainedByOptionWithDefault$1(options.retainedBy_UNSTABLE);
  const executionInfoMap = new Map();
  let liveStoresCount = 0;

  function selectorIsLive() {
    return !Recoil_gkx_1('recoil_memory_managament_2020') || liveStoresCount > 0;
  }

  function getExecutionInfo(store) {
    if (!executionInfoMap.has(store)) {
      executionInfoMap.set(store, getInitialExecutionInfo());
    }

    return Recoil_nullthrows(executionInfoMap.get(store));
  }

  function selectorInit(store) {
    liveStoresCount++;
    store.getState().knownSelectors.add(key); // FIXME remove knownSelectors?

    return () => {
      liveStoresCount--;
      store.getState().knownSelectors.delete(key);
      executionInfoMap.delete(store);
    };
  }

  function selectorShouldDeleteConfigOnRelease() {
    return getConfigDeletionHandler$1(key) !== undefined && !selectorIsLive();
  }

  function notifyStoreWhenAsyncSettles(store, loadable, executionId) {
    if (loadable.state === 'loading') {
      let stores = waitingStores.get(executionId);

      if (stores == null) {
        waitingStores.set(executionId, stores = new Set());
      }

      stores.add(store);
    }
  }

  function notifyStoresOfSettledAsync(newLoadable, executionId) {
    const stores = waitingStores.get(executionId);

    if (stores !== undefined) {
      for (const store of stores) {
        setRecoilValueLoadable$2(store, new AbstractRecoilValue$5(key), newLoadable);
      }

      waitingStores.delete(executionId);
    }
  }

  function getCachedNodeLoadable(store, state, nodeKey) {
    const isKeyPointingToSelector = store.getState().knownSelectors.has(nodeKey);
    /**
     * It's important that we don't bypass calling getNodeLoadable for atoms
     * as getNodeLoadable has side effects in state
     */

    if (isKeyPointingToSelector && state.atomValues.has(nodeKey)) {
      return Recoil_nullthrows(state.atomValues.get(nodeKey));
    }

    const loadable = getNodeLoadable$2(store, state, nodeKey);

    if (loadable.state !== 'loading' && isKeyPointingToSelector) {
      state.atomValues.set(nodeKey, loadable);
    }

    return loadable;
  }
  /**
   * This function attaches a then() and a catch() to a promise that was
   * returned from a selector's get() (either explicitly or implicitly by
   * running a function that uses the "async" keyword). If a selector's get()
   * returns a promise, we have two possibilities:
   *
   * 1. The promise will resolve, in which case it will have completely finished
   *    executing without any remaining pending dependencies. No more retries
   *    are needed and we can proceed with updating the cache and notifying
   *    subscribers (if it is the latest execution, otherwise only the cache
   *    will be updated and subscriptions will not be fired). This is the case
   *    handled by the attached then() handler.
   *
   * 2. The promise will throw because it either has an error or it came across
   *    an async dependency that has not yet resolved, in which case we will
   *    call wrapDepdencyPromise(), whose responsibility is to handle dependency
   *    promises. This case is handled by the attached catch() handler.
   *
   * Both branches will eventually resolve to the final result of the selector
   * (or an error if a real error occurred).
   *
   * The execution will run to completion even if it is stale, and its value
   * will be cached. But stale executions will not update global state or update
   * executionInfo as that is the responsibility of the 'latest' execution.
   *
   * Note this function should not be passed a promise that was thrown--AKA a
   * dependency promise. Dependency promises should be passed to
   * wrapPendingDependencyPromise()).
   */


  function wrapPendingPromise(store, promise, state, depValues, executionId, loadingDepsState) {
    return promise.then(value => {
      if (!selectorIsLive()) {
        // The selector was released since the request began; ignore the response.
        clearExecutionInfo(store, executionId);
        throw CANCELED;
      }

      const loadable = loadableWithValue$2(value);
      maybeFreezeValue(value);
      setCache(state, depValuesToDepRoute(depValues), loadable);
      setDepsInStore(store, state, new Set(depValues.keys()), executionId);
      setLoadableInStoreToNotifyDeps(store, loadable, executionId);
      return value;
    }).catch(errorOrPromise => {
      if (!selectorIsLive()) {
        // The selector was released since the request began; ignore the response.
        clearExecutionInfo(store, executionId);
        throw CANCELED;
      }

      if (isLatestExecution(store, executionId)) {
        updateExecutionInfoDepValues(depValues, store, executionId);
      }

      if (Recoil_isPromise(errorOrPromise)) {
        return wrapPendingDependencyPromise(store, errorOrPromise, state, depValues, executionId, loadingDepsState);
      }

      const loadable = loadableWithError$1(errorOrPromise);
      maybeFreezeValue(errorOrPromise);
      setCache(state, depValuesToDepRoute(depValues), loadable);
      setDepsInStore(store, state, new Set(depValues.keys()), executionId);
      setLoadableInStoreToNotifyDeps(store, loadable, executionId);
      throw errorOrPromise;
    });
  }
  /**
   * This function attaches a then() and a catch() to a promise that was
   * thrown from a selector's get(). If a selector's get() throws a promise,
   * we have two possibilities:
   *
   * 1. The promise will resolve, meaning one of our selector's dependencies is
   *    now available and we should "retry" our get() by running it again. This
   *    is the case handled by the attached then() handler.
   *
   * 2. The promise will throw because something went wrong with the dependency
   *    promise (in other words a real error occurred). This case is handled by
   *    the attached catch() handler. If the dependency promise throws, it is
   *    _always_ a real error and not another dependency promise (any dependency
   *    promises would have been handled upstream).
   *
   * The then() branch will eventually resolve to the final result of the
   * selector (or an error if a real error occurs), and the catch() will always
   * resolve to an error because the dependency promise is a promise that was
   * wrapped upstream, meaning it will only resolve to its real value or to a
   * real error.
   *
   * The execution will run to completion even if it is stale, and its value
   * will be cached. But stale executions will not update global state or update
   * executionInfo as that is the responsibility of the 'latest' execution.
   *
   * Note this function should not be passed a promise that was returned from
   * get(). The intention is that this function is only passed promises that
   * were thrown due to a pending dependency. Promises returned by get() should
   * be passed to wrapPendingPromise() instead.
   */


  function wrapPendingDependencyPromise(store, promise, state, existingDeps, executionId, loadingDepsState) {
    return promise.then(resolvedDep => {
      if (!selectorIsLive()) {
        // The selector was released since the request began; ignore the response.
        clearExecutionInfo(store, executionId);
        throw CANCELED;
      } // Check if we are handling a pending Recoil dependency or if the user
      // threw their own Promise to "suspend" a selector evaluation.  We need
      // to check that the loadingDepPromise actually matches the promise that
      // we caught in case the selector happened to catch the promise we threw
      // for a pending Recoil dependency from `getRecoilValue()` and threw
      // their own promise instead.


      if (loadingDepsState.loadingDepKey != null && loadingDepsState.loadingDepPromise === promise) {
        /**
         * Note for async atoms, this means we are changing the atom's value
         * in the store for the given version. This should be alright because
         * the version of state is now stale and a new version will have
         * already been triggered by the atom being resolved (see this logic
         * in Recoil_atom.js)
         */
        state.atomValues.set(loadingDepsState.loadingDepKey, loadableWithValue$2(resolvedDep));
      } else {
        /**
         * If resolvedDepKey is not defined, the promise was a user-thrown
         * promise. User-thrown promises are an advanced feature and they
         * should be avoided in almost all cases. Using `loadable.map()` inside
         * of selectors for loading loadables and then throwing that mapped
         * loadable's promise is an example of a user-thrown promise.
         *
         * When we hit a user-thrown promise, we have to bail out of an optimization
         * where we bypass calculating selector cache keys for selectors that
         * have been previously seen for a given state (these selectors are saved in
         * state.atomValues) to avoid stale state as we have no way of knowing
         * what state changes happened (if any) in result to the promise resolving.
         *
         * Ideally we would only bail out selectors that are in the chain of
         * dependencies for this selector, but there's currently no way to get
         * a full list of a selector's downstream nodes because the state that
         * is executing may be a discarded tree (so store.getGraph(state.version)
         * will be empty), and the full dep tree may not be in the selector
         * caches in the case where the selector's cache was cleared. To solve
         * for this we would have to keep track  of all running selector
         * executions and their downstream deps. Because this only covers edge
         * cases, that complexity might not be justifyable.
         */
        store.getState().knownSelectors.forEach(nodeKey => {
          state.atomValues.delete(nodeKey);
        });
      }
      /**
       * Optimization: Now that the dependency has resolved, let's try hitting
       * the cache in case the dep resolved to a value we have previously seen.
       *
       * TODO:
       * Note this optimization is not perfect because it only prevents re-executions
       * _after_ the point where an async dependency is found. Any code leading
       * up to the async dependency may have run unnecessarily. The ideal case
       * would be to wait for the async dependency to resolve first, check the
       * cache, and prevent _any_ execution of the selector if the resulting
       * value of the dependency leads to a path that is found in the cache.
       * The ideal case is more difficult to implement as it would require that
       * we capture and wait for the the async dependency right after checking
       * the cache. The current approach takes advantage of the fact that running
       * the selector already has a code path that lets us exit early when
       * an async dep resolves.
       */


      const cachedLoadable = getValFromCacheAndUpdatedDownstreamDeps(store, state);

      if (cachedLoadable && cachedLoadable.state === 'hasValue') {
        setExecutionInfo(cachedLoadable, store);
        return cachedLoadable.contents;
      }
      /**
       * If this execution is stale, let's check to see if there is some in
       * progress execution with a matching state. If we find a match, then
       * we can take the value from that in-progress execution. Note this may
       * sound like an edge case, but may be very common in cases where a
       * loading dependency resolves from loading to having a value (thus
       * possibly triggering a re-render), and React re-renders before the
       * chained .then() functions run, thus starting a new execution as the
       * dep has changed value. Without this check we will run the selector
       * twice (once in the new execution and once again in this .then(), so
       * this check is necessary to keep unnecessary re-executions to a
       * minimum).
       *
       * Also note this code does not check across all executions that may be
       * running. It only optimizes for the _latest_ execution per store as
       * we currently do not maintain a list of all currently running executions.
       * This means in some cases we may run selectors more than strictly
       * necessary when there are multiple executions running for the same
       * selector. This may be a valid tradeoff as checking for dep changes
       * across all in-progress executions may take longer than just
       * re-running the selector. This will be app-dependent, and maybe in the
       * future we can make the behavior configurable. An ideal fix may be
       * to extend the tree cache to support caching loading states.
       */


      if (!isLatestExecution(store, executionId)) {
        var _executionInfo$latest;

        const executionInfo = getExecutionInfoOfInProgressExecution(state);

        if ((executionInfo === null || executionInfo === void 0 ? void 0 : (_executionInfo$latest = executionInfo.latestLoadable) === null || _executionInfo$latest === void 0 ? void 0 : _executionInfo$latest.state) === 'loading') {
          /**
           * Returning promise here without wrapping as the wrapper logic was
           * already done upstream when this promise was generated.
           */
          return executionInfo.latestLoadable.contents;
        }
      }

      const [loadable, depValues] = evaluateSelectorGetter(store, state, executionId);

      if (isLatestExecution(store, executionId)) {
        updateExecutionInfoDepValues(depValues, store, executionId);
      }

      if (loadable.state !== 'loading') {
        setCache(state, depValuesToDepRoute(depValues), loadable);
        setDepsInStore(store, state, new Set(depValues.keys()), executionId);
        setLoadableInStoreToNotifyDeps(store, loadable, executionId);
      }

      if (loadable.state === 'hasError') {
        throw loadable.contents;
      }
      /**
       * Returning any promises here without wrapping as the wrapepr logic was
       * already done when we called evaluateSelectorGetter() to get this
       * loadable
       */


      return loadable.contents;
    }).catch(error => {
      if (error instanceof Canceled) {
        Recoil_recoverableViolation('Selector was released while it had dependencies');
        throw CANCELED;
      }

      if (!selectorIsLive()) {
        // The selector was released since the request began; ignore the response.
        clearExecutionInfo(store, executionId);
        throw CANCELED;
      }

      const loadable = loadableWithError$1(error);
      maybeFreezeValue(error);
      setCache(state, depValuesToDepRoute(existingDeps), loadableWithError$1(error));
      setDepsInStore(store, state, new Set(existingDeps.keys()), executionId);
      setLoadableInStoreToNotifyDeps(store, loadable, executionId);
      throw error;
    });
  }

  function setLoadableInStoreToNotifyDeps(store, loadable, executionId) {
    if (isLatestExecution(store, executionId)) {
      setExecutionInfo(loadable, store);
      notifyStoresOfSettledAsync(loadable, executionId);
    }
  }

  function setDepsInStore(store, state, deps, executionId) {
    var _store$getState, _store$getState$curre, _store$getState2, _store$getState2$next;

    if (isLatestExecution(store, executionId) || state.version === ((_store$getState = store.getState()) === null || _store$getState === void 0 ? void 0 : (_store$getState$curre = _store$getState.currentTree) === null || _store$getState$curre === void 0 ? void 0 : _store$getState$curre.version) || state.version === ((_store$getState2 = store.getState()) === null || _store$getState2 === void 0 ? void 0 : (_store$getState2$next = _store$getState2.nextTree) === null || _store$getState2$next === void 0 ? void 0 : _store$getState2$next.version)) {
      var _store$getState$nextT, _store$getState3, _store$getState3$next;

      saveDependencyMapToStore$1(new Map([[key, deps]]), store, (_store$getState$nextT = (_store$getState3 = store.getState()) === null || _store$getState3 === void 0 ? void 0 : (_store$getState3$next = _store$getState3.nextTree) === null || _store$getState3$next === void 0 ? void 0 : _store$getState3$next.version) !== null && _store$getState$nextT !== void 0 ? _store$getState$nextT : store.getState().currentTree.version);
    }
  }

  function setNewDepInStore(store, state, deps, newDepKey, executionId) {
    deps.add(newDepKey);
    setDepsInStore(store, state, deps, executionId);
  }

  function evaluateSelectorGetter(store, state, executionId) {
    const endPerfBlock = startPerfBlock$1(key); // TODO T63965866: use execution ID here

    let result;
    let resultIsError = false;
    let loadable;
    const loadingDepsState = {
      loadingDepKey: null,
      loadingDepPromise: null
    };
    const depValues = new Map();
    /**
     * Starting a fresh set of deps that we'll be using to update state. We're
     * starting a new set versus adding it in existing state deps because
     * the version of state that we update deps for may be a more recent version
     * than the version the selector was called with. This is because the latest
     * execution will update the deps of the current/latest version of state (
     * this is safe to do because the fact that the selector is the latest
     * execution means the deps we discover below are our best guess at the
     * deps for the current/latest state in the store)
     */

    const deps = new Set();
    setDepsInStore(store, state, deps, executionId);

    function getRecoilValue(dep) {
      const {
        key: depKey
      } = dep;
      setNewDepInStore(store, state, deps, depKey, executionId);
      const depLoadable = getCachedNodeLoadable(store, state, depKey);
      depValues.set(depKey, depLoadable);

      switch (depLoadable.state) {
        case 'hasValue':
          return depLoadable.contents;

        case 'hasError':
          throw depLoadable.contents;

        case 'loading':
          loadingDepsState.loadingDepKey = depKey;
          loadingDepsState.loadingDepPromise = depLoadable.contents;
          throw depLoadable.contents;
      }

      throw Recoil_err('Invalid Loadable state');
    }

    let gateCallback = false;

    const getCallback = fn => {
      return (...args) => {
        if (!gateCallback) {
          throw Recoil_err('getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can obtain the current Recoil state without a subscription.');
        }

        const snapshot = cloneSnapshot$3(store);
        const cb = fn({
          snapshot
        });

        if (typeof cb !== 'function') {
          throw Recoil_err('getCallback() expects a function that returns a function.');
        }

        return cb(...args);
      };
    };

    try {
      result = get({
        get: getRecoilValue,
        getCallback
      });
      result = isRecoilValue$3(result) ? getRecoilValue(result) : result;
      gateCallback = true;

      if (Recoil_isPromise(result)) {
        result = wrapPendingPromise(store, result, state, depValues, executionId, loadingDepsState).finally(endPerfBlock);
      } else {
        endPerfBlock();
      }
    } catch (errorOrDepPromise) {
      result = errorOrDepPromise;

      if (Recoil_isPromise(result)) {
        result = wrapPendingDependencyPromise(store, result, state, depValues, executionId, loadingDepsState).finally(endPerfBlock);
      } else {
        resultIsError = true;
        endPerfBlock();
      }
    }

    if (resultIsError) {
      loadable = loadableWithError$1(result);
    } else if (Recoil_isPromise(result)) {
      loadable = loadableWithPromise$1(result);
    } else {
      loadable = loadableWithValue$2(result);
    }

    if (loadable.state !== 'loading') {
      maybeFreezeValue(loadable.contents);
    }

    return [loadable, depValues];
  }

  function getValFromCacheAndUpdatedDownstreamDeps(store, state) {
    const depsAfterCacheDone = new Set();
    const executionInfo = getExecutionInfo(store);
    let cachedVal;

    try {
      cachedVal = cache.get(nodeKey => {
        !(typeof nodeKey === 'string') ?  true ? Recoil_invariant(false, 'Cache nodeKey is type string') : 0 : void 0;
        const loadable = getCachedNodeLoadable(store, state, nodeKey);
        return loadable.contents;
      }, {
        onNodeVisit: node => {
          if (node.type === 'branch' && node.nodeKey !== key && typeof node.nodeKey === 'string') {
            depsAfterCacheDone.add(node.nodeKey);
            discoveredDependencyNodeKeys.add(node.nodeKey);
          }
        }
      });
    } catch (error) {
      throw Recoil_err(`Problem with cache lookup for selector "${key}": ${error.message}`);
    }
    /**
     * Ensure store contains correct dependencies if we hit the cache so that
     * the store deps and cache are in sync for a given state. This is important
     * because store deps are normally updated when new executions are created,
     * but cache hits don't trigger new executions but they still _may_ signifiy
     * a change in deps in the store if the store deps for this state are empty
     * or stale.
     */


    if (cachedVal) {
      setDepsInStore(store, state, depsAfterCacheDone, executionInfo.latestExecutionId);
    }

    return cachedVal;
  }
  /**
   * FIXME: dep keys should take into account the state of the loadable to
   * prevent the edge case where a loadable with an error and a loadable with
   * an error as a value are treated as the same thing incorrectly. For example
   * these two should be treated differently:
   *
   * selector({key: '', get: () => new Error('hi')});
   * selector({key: '', get () => {throw new Error('hi')}});
   *
   * With current implementation they are treated the same
   */


  function depValuesToDepRoute(depValues) {
    return Array.from(depValues.entries()).map(([depKey, valLoadable]) => [depKey, valLoadable.contents]);
  }

  function getValFromRunningNewExecutionAndUpdatedDeps(store, state) {
    const newExecutionId = getNewExecutionId();
    const [loadable, newDepValues] = evaluateSelectorGetter(store, state, newExecutionId);
    setExecutionInfo(loadable, store, newDepValues, newExecutionId, state);
    maybeSetCacheWithLoadable(state, depValuesToDepRoute(newDepValues), loadable);
    notifyStoreWhenAsyncSettles(store, loadable, newExecutionId);
    return loadable;
  }
  /**
   * Given a tree state, this function returns the "selector result", which is
   * defined as a size-2 tuple of [DependencyMap, Loadable<T>].
   *
   * The selector's get() function will only be re-evaluated if _both_ of the
   * following statements are true:
   *
   * 1. The current dep values from the given state produced a cache key that
   *    was not found in the cache.
   * 2. There is no currently running async execution OR there is an
   *    async execution that is running, but after comparing the dep values in
   *    the given state with the dep values that the execution has discovered so
   *    far we find that at least one dep value has changed, in which case we
   *    start a new execution (the previously running execution will continue to
   *    run to completion, but only the new execution will be deemed the
   *    'latest' execution, meaning it will be the only execution that will
   *    update global state when it is finished. Any non-latest executions will
   *    run to completion and update the selector cache but not global state).
   */


  function getSelectorValAndUpdatedDeps(store, state) {
    const cachedVal = getValFromCacheAndUpdatedDownstreamDeps(store, state);

    if (cachedVal != null) {
      setExecutionInfo(cachedVal, store);
      return cachedVal;
    }

    const inProgressExecutionInfo = getExecutionInfoOfInProgressExecution(state); // FIXME: this won't work with custom caching b/c it uses separate cache

    if (inProgressExecutionInfo) {
      const executionInfo = inProgressExecutionInfo;
      notifyStoreWhenAsyncSettles(store, Recoil_nullthrows(executionInfo.latestLoadable), Recoil_nullthrows(executionInfo.latestExecutionId)); // FIXME: check after the fact to see if we made the right choice by waiting

      return Recoil_nullthrows(executionInfo.latestLoadable);
    }

    return getValFromRunningNewExecutionAndUpdatedDeps(store, state);
  }
  /**
   * Searches execution info across all stores to see if there is an in-progress
   * execution whose dependency values match the values of the requesting store.
   */


  function getExecutionInfoOfInProgressExecution(state) {
    var _Array$from$find;

    const [, executionInfo] = (_Array$from$find = Array.from(executionInfoMap.entries()).find(([store, execInfo]) => {
      return execInfo.latestLoadable != null && execInfo.latestExecutionId != null && !haveAsyncDepsChanged(store, state);
    })) !== null && _Array$from$find !== void 0 ? _Array$from$find : [];
    return executionInfo;
  }

  const mapOfCheckedVersions = new Map();

  function haveAsyncDepsChanged(store, state) {
    var _executionInfo$depVal, _mapOfCheckedVersions;

    const executionInfo = getExecutionInfo(store);
    const oldDepValues = (_executionInfo$depVal = executionInfo.depValuesDiscoveredSoFarDuringAsyncWork) !== null && _executionInfo$depVal !== void 0 ? _executionInfo$depVal : new Map();
    const cachedDepValuesCheckedForThisVersion = Array(((_mapOfCheckedVersions = mapOfCheckedVersions.get(state.version)) !== null && _mapOfCheckedVersions !== void 0 ? _mapOfCheckedVersions : new Map()).entries());
    const isCachedVersionSame = mapOfCheckedVersions.has(state.version) && cachedDepValuesCheckedForThisVersion.length === oldDepValues.size && cachedDepValuesCheckedForThisVersion.every(([nodeKey, nodeVal]) => {
      return oldDepValues.get(nodeKey) === nodeVal;
    });

    if (oldDepValues == null || state.version === executionInfo.stateVersion || isCachedVersionSame) {
      return false;
    }

    mapOfCheckedVersions.set(state.version, new Map(oldDepValues));
    return Array.from(oldDepValues).some(([nodeKey, oldVal]) => {
      const loadable = getCachedNodeLoadable(store, state, nodeKey);
      return loadable.contents !== oldVal.contents;
    });
  }
  /**
   * This function will update the selector's execution info when the selector
   * has either finished running an execution or has started a new execution. If
   * the given loadable is in a 'loading' state, the intention is that a new
   * execution has started. Otherwise, the intention is that an execution has
   * just finished.
   */


  function setExecutionInfo(loadable, store, depValues, newExecutionId, state) {
    const executionInfo = getExecutionInfo(store);

    if (loadable.state === 'loading') {
      executionInfo.depValuesDiscoveredSoFarDuringAsyncWork = depValues;
      executionInfo.latestExecutionId = newExecutionId;
      executionInfo.latestLoadable = loadable;
      executionInfo.stateVersion = state === null || state === void 0 ? void 0 : state.version;
    } else {
      executionInfo.depValuesDiscoveredSoFarDuringAsyncWork = null;
      executionInfo.latestExecutionId = null;
      executionInfo.latestLoadable = null;
      executionInfo.stateVersion = null;
    }
  }
  /**
   * Conditionally updates the cache with a given loadable.
   *
   * We only cache loadables that are not loading because our cache keys are
   * based on dep values, which are in an unfinished state for loadables that
   * have a 'loading' state (new deps may be discovered while the selector
   * runs its async code). We never want to cache partial dependencies b/c it
   * could lead to errors, such as prematurely returning the result based on a
   * partial list of deps-- we need the full list of deps to ensure that we
   * are returning the correct result from cache.
   */


  function maybeSetCacheWithLoadable(state, depRoute, loadable) {
    if (loadable.state !== 'loading') {
      setCache(state, depRoute, loadable);
    }
  }

  function updateExecutionInfoDepValues(depValues, store, executionId) {
    const executionInfo = getExecutionInfo(store);

    if (isLatestExecution(store, executionId)) {
      executionInfo.depValuesDiscoveredSoFarDuringAsyncWork = depValues;
    }
  }

  function clearExecutionInfo(store, executionId) {
    if (isLatestExecution(store, executionId)) {
      executionInfoMap.delete(store);
    }
  }

  function isLatestExecution(store, executionId) {
    const executionInfo = getExecutionInfo(store);
    return executionId === executionInfo.latestExecutionId;
  }

  function maybeFreezeValue(val) {
    if (true) {
      if (Boolean(options.dangerouslyAllowMutability) === false) {
        Recoil_deepFreezeValue(val);
      }
    }
  }

  function setCache(state, cacheRoute, loadable) {
    state.atomValues.set(key, loadable);

    try {
      cache.set(cacheRoute, loadable);
    } catch (error) {
      throw Recoil_err(`Problem with setting cache for selector "${key}": ${error.message}`);
    }
  }

  function detectCircularDependencies(fn) {
    if (dependencyStack.includes(key)) {
      const message = `Recoil selector has circular dependencies: ${dependencyStack.slice(dependencyStack.indexOf(key)).join(' \u2192 ')}`;
      return loadableWithError$1(Recoil_err(message));
    }

    dependencyStack.push(key);

    try {
      return fn();
    } finally {
      dependencyStack.pop();
    }
  }

  function selectorPeek(store, state) {
    const cacheVal = cache.get(nodeKey => {
      !(typeof nodeKey === 'string') ?  true ? Recoil_invariant(false, 'Cache nodeKey is type string') : 0 : void 0;
      const peek = peekNodeLoadable$1(store, state, nodeKey);
      return peek === null || peek === void 0 ? void 0 : peek.contents;
    });
    return cacheVal;
  }

  function selectorGet(store, state) {
    return detectCircularDependencies(() => getSelectorValAndUpdatedDeps(store, state));
  }

  function invalidateSelector(state) {
    state.atomValues.delete(key);
  }

  function clearSelectorCache(store, treeState) {
    !(recoilValue != null) ?  true ? Recoil_invariant(false, 'Recoil Value can never be null') : 0 : void 0;

    for (const nodeKey of discoveredDependencyNodeKeys) {
      var _node$clearCache;

      const node = getNode$6(nodeKey);
      (_node$clearCache = node.clearCache) === null || _node$clearCache === void 0 ? void 0 : _node$clearCache.call(node, store, treeState);
    }

    invalidateSelector(treeState);
    cache.clear();
    markRecoilValueModified$1(store, recoilValue);
  }

  if (set != null) {
    /**
     * ES5 strict mode prohibits defining non-top-level function declarations,
     * so don't use function declaration syntax here
     */
    const selectorSet = (store, state, newValue) => {
      let syncSelectorSetFinished = false;
      const writes = new Map();

      function getRecoilValue({
        key: depKey
      }) {
        if (syncSelectorSetFinished) {
          throw Recoil_err('Recoil: Async selector sets are not currently supported.');
        }

        const loadable = getCachedNodeLoadable(store, state, depKey);

        if (loadable.state === 'hasValue') {
          return loadable.contents;
        } else if (loadable.state === 'loading') {
          throw new RecoilValueNotReady$2(depKey);
        } else {
          throw loadable.contents;
        }
      }

      function setRecoilState(recoilState, valueOrUpdater) {
        if (syncSelectorSetFinished) {
          throw Recoil_err('Recoil: Async selector sets are not currently supported.');
        }

        const setValue = typeof valueOrUpdater === 'function' ? // cast to any because we can't restrict type S from being a function itself without losing support for opaque types
        // flowlint-next-line unclear-type:off
        valueOrUpdater(getRecoilValue(recoilState)) : valueOrUpdater;
        const upstreamWrites = setNodeValue$3(store, state, recoilState.key, setValue);
        upstreamWrites.forEach((v, k) => writes.set(k, v));
      }

      function resetRecoilState(recoilState) {
        setRecoilState(recoilState, DEFAULT_VALUE$6);
      }

      const ret = set({
        set: setRecoilState,
        get: getRecoilValue,
        reset: resetRecoilState
      }, newValue); // set should be a void method, but if the user makes it `async`, then it
      // will return a Promise, which we don't currently support.

      if (ret !== undefined) {
        throw Recoil_isPromise(ret) ? Recoil_err('Recoil: Async selector sets are not currently supported.') : Recoil_err('Recoil: selector set should be a void function.');
      }

      syncSelectorSetFinished = true;
      return writes;
    };

    return recoilValue = registerNode$1({
      key,
      nodeType: 'selector',
      peek: selectorPeek,
      get: selectorGet,
      set: selectorSet,
      init: selectorInit,
      invalidate: invalidateSelector,
      clearCache: clearSelectorCache,
      shouldDeleteConfigOnRelease: selectorShouldDeleteConfigOnRelease,
      dangerouslyAllowMutability: options.dangerouslyAllowMutability,
      shouldRestoreFromSnapshots: false,
      retainedBy
    });
  } else {
    return recoilValue = registerNode$1({
      key,
      nodeType: 'selector',
      peek: selectorPeek,
      get: selectorGet,
      init: selectorInit,
      invalidate: invalidateSelector,
      clearCache: clearSelectorCache,
      shouldDeleteConfigOnRelease: selectorShouldDeleteConfigOnRelease,
      dangerouslyAllowMutability: options.dangerouslyAllowMutability,
      shouldRestoreFromSnapshots: false,
      retainedBy
    });
  }
}
/* eslint-enable no-redeclare */


var Recoil_selector = selector;

// @fb-only: const {scopedAtom} = require('Recoil_ScopedAtom');
const {
  loadableWithError: loadableWithError$2,
  loadableWithPromise: loadableWithPromise$2,
  loadableWithValue: loadableWithValue$3
} = Recoil_Loadable$1;

const {
  peekNodeInfo: peekNodeInfo$3
} = Recoil_FunctionalCore;

const {
  DEFAULT_VALUE: DEFAULT_VALUE$7,
  DefaultValue: DefaultValue$2,
  getConfigDeletionHandler: getConfigDeletionHandler$2,
  registerNode: registerNode$2,
  setConfigDeletionHandler: setConfigDeletionHandler$1
} = Recoil_Node;

const {
  isRecoilValue: isRecoilValue$4
} = Recoil_RecoilValue$1;

const {
  getRecoilValueAsLoadable: getRecoilValueAsLoadable$4,
  markRecoilValueModified: markRecoilValueModified$2,
  setRecoilValue: setRecoilValue$4,
  setRecoilValueLoadable: setRecoilValueLoadable$3
} = Recoil_RecoilValueInterface;

const {
  retainedByOptionWithDefault: retainedByOptionWithDefault$2
} = Recoil_Retention;















function baseAtom(options) {
  const {
    key,
    persistence_UNSTABLE: persistence
  } = options;
  const retainedBy = retainedByOptionWithDefault$2(options.retainedBy_UNSTABLE);
  let liveStoresCount = 0;
  let defaultLoadable = Recoil_isPromise(options.default) ? loadableWithPromise$2(options.default.then(value => {
    defaultLoadable = loadableWithValue$3(value);
    return value;
  }).catch(error => {
    defaultLoadable = loadableWithError$2(error);
    throw error;
  })) : loadableWithValue$3(options.default);
  maybeFreezeValueOrPromise(options.default);
  let cachedAnswerForUnvalidatedValue = undefined; // Cleanup handlers for this atom
  // Rely on stable reference equality of the store to use it as a key per <RecoilRoot>

  const cleanupEffectsByStore = new Map();

  function maybeFreezeValueOrPromise(valueOrPromise) {
    if (true) {
      if (options.dangerouslyAllowMutability !== true) {
        if (Recoil_isPromise(valueOrPromise)) {
          return valueOrPromise.then(value => {
            Recoil_deepFreezeValue(value);
            return value;
          });
        } else {
          Recoil_deepFreezeValue(valueOrPromise);
          return valueOrPromise;
        }
      }
    }

    return valueOrPromise;
  }

  function wrapPendingPromise(store, promise) {
    const wrappedPromise = promise.then(value => {
      var _store$getState$nextT, _state$atomValues$get;

      const state = (_store$getState$nextT = store.getState().nextTree) !== null && _store$getState$nextT !== void 0 ? _store$getState$nextT : store.getState().currentTree;

      if (((_state$atomValues$get = state.atomValues.get(key)) === null || _state$atomValues$get === void 0 ? void 0 : _state$atomValues$get.contents) === wrappedPromise) {
        setRecoilValue$4(store, node, value);
      }

      return value;
    }).catch(error => {
      var _store$getState$nextT2, _state$atomValues$get2;

      const state = (_store$getState$nextT2 = store.getState().nextTree) !== null && _store$getState$nextT2 !== void 0 ? _store$getState$nextT2 : store.getState().currentTree;

      if (((_state$atomValues$get2 = state.atomValues.get(key)) === null || _state$atomValues$get2 === void 0 ? void 0 : _state$atomValues$get2.contents) === wrappedPromise) {
        setRecoilValueLoadable$3(store, node, loadableWithError$2(error));
      }

      throw error;
    });
    return wrappedPromise;
  }

  function initAtom(store, initState, trigger) {
    liveStoresCount++;
    const alreadyKnown = store.getState().knownAtoms.has(key);
    store.getState().knownAtoms.add(key); // Setup async defaults to notify subscribers when they resolve

    if (defaultLoadable.state === 'loading') {
      const notifyDefaultSubscribers = () => {
        var _store$getState$nextT3;

        const state = (_store$getState$nextT3 = store.getState().nextTree) !== null && _store$getState$nextT3 !== void 0 ? _store$getState$nextT3 : store.getState().currentTree;

        if (!state.atomValues.has(key)) {
          markRecoilValueModified$2(store, node);
        }
      };

      defaultLoadable.contents.then(notifyDefaultSubscribers).catch(notifyDefaultSubscribers);
    } // Run Atom Effects
    // This state is scoped by Store, since this is in the initAtom() closure


    let initValue = DEFAULT_VALUE$7;
    let pendingSetSelf = null;

    if (options.effects_UNSTABLE != null && !alreadyKnown) {
      let duringInit = true;

      function getLoadable(recoilValue) {
        // Normally we can just get the current value of another atom.
        // But for our own value we need to check if there is a pending
        // initialized value or get the fallback default value.
        if (duringInit && recoilValue.key === key && !(initValue instanceof DefaultValue$2)) {
          // Cast T to S
          const retValue = initValue; // flowlint-line unclear-type:off

          return retValue instanceof DefaultValue$2 ? defaultLoadable : // flowlint-line unclear-type:off
          Recoil_isPromise(retValue) ? loadableWithPromise$2(retValue.then(v => v instanceof DefaultValue$2 ? // Cast T to S
          defaultLoadable.toPromise() // flowlint-line unclear-type:off
          : v)) : loadableWithValue$3(retValue);
        }

        return getRecoilValueAsLoadable$4(store, recoilValue);
      }

      function getPromise(recoilValue) {
        return getLoadable(recoilValue).toPromise();
      }

      function getInfo_UNSTABLE(recoilValue) {
        var _store$getState$nextT4;

        const info = peekNodeInfo$3(store, (_store$getState$nextT4 = store.getState().nextTree) !== null && _store$getState$nextT4 !== void 0 ? _store$getState$nextT4 : store.getState().currentTree, recoilValue.key);
        return duringInit && recoilValue.key === key && !(initValue instanceof DefaultValue$2) ? { ...info,
          isSet: true,
          loadable: getLoadable(recoilValue)
        } : info;
      }

      const setSelf = effect => valueOrUpdater => {
        if (duringInit) {
          const currentValue = initValue instanceof DefaultValue$2 || Recoil_isPromise(initValue) ? defaultLoadable.state === 'hasValue' ? defaultLoadable.contents : DEFAULT_VALUE$7 : initValue;
          initValue = typeof valueOrUpdater === 'function' ? // cast to any because we can't restrict T from being a function without losing support for opaque types
          valueOrUpdater(currentValue) // flowlint-line unclear-type:off
          : valueOrUpdater;

          if (Recoil_isPromise(initValue)) {
            initValue = initValue.then(value => {
              // Avoid calling onSet() when setSelf() initializes with a Promise
              pendingSetSelf = {
                effect,
                value
              };
              return value;
            });
          }
        } else {
          if (Recoil_isPromise(valueOrUpdater)) {
            throw Recoil_err('Setting atoms to async values is not implemented.');
          }

          if (typeof valueOrUpdater !== 'function') {
            pendingSetSelf = {
              effect,
              value: valueOrUpdater
            };
          }

          setRecoilValue$4(store, node, typeof valueOrUpdater === 'function' ? currentValue => {
            const newValue = // cast to any because we can't restrict T from being a function without losing support for opaque types
            valueOrUpdater(currentValue); // flowlint-line unclear-type:off

            pendingSetSelf = {
              effect,
              value: newValue
            };
            return newValue;
          } : valueOrUpdater);
        }
      };

      const resetSelf = effect => () => setSelf(effect)(DEFAULT_VALUE$7);

      const onSet = effect => handler => {
        store.subscribeToTransactions(currentStore => {
          var _currentTree$atomValu;

          // eslint-disable-next-line prefer-const
          let {
            currentTree,
            previousTree
          } = currentStore.getState();

          if (!previousTree) {
            Recoil_recoverableViolation('Transaction subscribers notified without a next tree being present -- this is a bug in Recoil');
            previousTree = currentTree; // attempt to trundle on
          }

          const newLoadable = (_currentTree$atomValu = currentTree.atomValues.get(key)) !== null && _currentTree$atomValu !== void 0 ? _currentTree$atomValu : defaultLoadable;

          if (newLoadable.state === 'hasValue') {
            var _previousTree$atomVal, _pendingSetSelf, _pendingSetSelf2, _pendingSetSelf3;

            const newValue = newLoadable.contents;
            const oldLoadable = (_previousTree$atomVal = previousTree.atomValues.get(key)) !== null && _previousTree$atomVal !== void 0 ? _previousTree$atomVal : defaultLoadable;
            const oldValue = oldLoadable.state === 'hasValue' ? oldLoadable.contents : DEFAULT_VALUE$7; // TODO This isn't actually valid, use as a placeholder for now.
            // Ignore atom value changes that were set via setSelf() in the same effect.
            // We will still properly call the handler if there was a subsequent
            // set from something other than an atom effect which was batched
            // with the `setSelf()` call.  However, we may incorrectly ignore
            // the handler if the subsequent batched call happens to set the
            // atom to the exact same value as the `setSelf()`.   But, in that
            // case, it was kind of a noop, so the semantics are debatable..

            if (((_pendingSetSelf = pendingSetSelf) === null || _pendingSetSelf === void 0 ? void 0 : _pendingSetSelf.effect) !== effect || ((_pendingSetSelf2 = pendingSetSelf) === null || _pendingSetSelf2 === void 0 ? void 0 : _pendingSetSelf2.value) !== newValue) {
              handler(newValue, oldValue, !currentTree.atomValues.has(key));
            } else if (((_pendingSetSelf3 = pendingSetSelf) === null || _pendingSetSelf3 === void 0 ? void 0 : _pendingSetSelf3.effect) === effect) {
              pendingSetSelf = null;
            }
          }
        }, key);
      };

      for (const effect of (_options$effects_UNST = options.effects_UNSTABLE) !== null && _options$effects_UNST !== void 0 ? _options$effects_UNST : []) {
        var _options$effects_UNST;

        const cleanup = effect({
          node,
          trigger,
          setSelf: setSelf(effect),
          resetSelf: resetSelf(effect),
          onSet: onSet(effect),
          getPromise,
          getLoadable,
          getInfo_UNSTABLE
        });

        if (cleanup != null) {
          var _cleanupEffectsByStor;

          cleanupEffectsByStore.set(store, [...((_cleanupEffectsByStor = cleanupEffectsByStore.get(store)) !== null && _cleanupEffectsByStor !== void 0 ? _cleanupEffectsByStor : []), cleanup]);
        }
      }

      duringInit = false;
    } // Mutate initial state in place since we know there are no other subscribers
    // since we are the ones initializing on first use.


    if (!(initValue instanceof DefaultValue$2)) {
      var _store$getState$nextT5;

      const frozenInitValue = maybeFreezeValueOrPromise(initValue);
      const initLoadable = Recoil_isPromise(frozenInitValue) ? loadableWithPromise$2(wrapPendingPromise(store, frozenInitValue)) : loadableWithValue$3(frozenInitValue);
      initState.atomValues.set(key, initLoadable); // If there is a pending transaction, then also mutate the next state tree.
      // This could happen if the atom was first initialized in an action that
      // also updated some other atom's state.

      (_store$getState$nextT5 = store.getState().nextTree) === null || _store$getState$nextT5 === void 0 ? void 0 : _store$getState$nextT5.atomValues.set(key, initLoadable);
    }

    return () => {
      var _cleanupEffectsByStor2;

      liveStoresCount--;
      (_cleanupEffectsByStor2 = cleanupEffectsByStore.get(store)) === null || _cleanupEffectsByStor2 === void 0 ? void 0 : _cleanupEffectsByStor2.forEach(cleanup => cleanup());
      cleanupEffectsByStore.delete(store);
      store.getState().knownAtoms.delete(key); // FIXME remove knownAtoms?
    };
  }

  function peekAtom(_store, state) {
    var _ref, _state$atomValues$get3;

    return (_ref = (_state$atomValues$get3 = state.atomValues.get(key)) !== null && _state$atomValues$get3 !== void 0 ? _state$atomValues$get3 : cachedAnswerForUnvalidatedValue) !== null && _ref !== void 0 ? _ref : defaultLoadable;
  }

  function getAtom(_store, state) {
    if (state.atomValues.has(key)) {
      // Atom value is stored in state:
      return Recoil_nullthrows(state.atomValues.get(key));
    } else if (state.nonvalidatedAtoms.has(key)) {
      // Atom value is stored but needs validation before use.
      // We might have already validated it and have a cached validated value:
      if (cachedAnswerForUnvalidatedValue != null) {
        return cachedAnswerForUnvalidatedValue;
      }

      if (persistence == null) {
        Recoil_expectationViolation(`Tried to restore a persisted value for atom ${key} but it has no persistence settings.`);
        return defaultLoadable;
      }

      const nonvalidatedValue = state.nonvalidatedAtoms.get(key);
      const validatorResult = persistence.validator(nonvalidatedValue, DEFAULT_VALUE$7);
      const validatedValueLoadable = validatorResult instanceof DefaultValue$2 ? defaultLoadable : loadableWithValue$3(validatorResult);
      cachedAnswerForUnvalidatedValue = validatedValueLoadable;
      return cachedAnswerForUnvalidatedValue;
    } else {
      return defaultLoadable;
    }
  }

  function invalidateAtom() {
    cachedAnswerForUnvalidatedValue = undefined;
  }

  function setAtom(_store, state, newValue) {
    // Bail out if we're being set to the existing value, or if we're being
    // reset but have no stored value (validated or unvalidated) to reset from:
    if (state.atomValues.has(key)) {
      const existing = Recoil_nullthrows(state.atomValues.get(key));

      if (existing.state === 'hasValue' && newValue === existing.contents) {
        return new Map();
      }
    } else if (!state.nonvalidatedAtoms.has(key) && newValue instanceof DefaultValue$2) {
      return new Map();
    }

    maybeFreezeValueOrPromise(newValue);
    cachedAnswerForUnvalidatedValue = undefined; // can be released now if it was previously in use

    return new Map().set(key, loadableWithValue$3(newValue));
  }

  function shouldDeleteConfigOnReleaseAtom() {
    return getConfigDeletionHandler$2(key) !== undefined && liveStoresCount <= 0;
  }

  const node = registerNode$2({
    key,
    nodeType: 'atom',
    peek: peekAtom,
    get: getAtom,
    set: setAtom,
    init: initAtom,
    invalidate: invalidateAtom,
    shouldDeleteConfigOnRelease: shouldDeleteConfigOnReleaseAtom,
    dangerouslyAllowMutability: options.dangerouslyAllowMutability,
    persistence_UNSTABLE: options.persistence_UNSTABLE ? {
      type: options.persistence_UNSTABLE.type,
      backButton: options.persistence_UNSTABLE.backButton
    } : undefined,
    shouldRestoreFromSnapshots: true,
    retainedBy
  });
  return node;
} // prettier-ignore


function atom(options) {
  if (true) {
    if (typeof options.key !== 'string') {
      throw Recoil_err('A key option with a unique string value must be provided when creating an atom.');
    }

    if (!('default' in options)) {
      throw Recoil_err('A default value must be specified when creating an atom.');
    }
  }

  const {
    default: optionsDefault,
    // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS,
    ...restOptions
  } = options;

  if (isRecoilValue$4(optionsDefault) // Continue to use atomWithFallback for promise defaults for scoped atoms
  // for now, since scoped atoms don't support async defaults
  // @fb-only: || (isPromise(optionsDefault) && scopeRules_APPEND_ONLY_READ_THE_DOCS)
  ) {
      return atomWithFallback({ ...restOptions,
        default: optionsDefault // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS,

      }); // @fb-only: } else if (scopeRules_APPEND_ONLY_READ_THE_DOCS && !isPromise(optionsDefault)) {
      // @fb-only: return scopedAtom<T>({
      // @fb-only: ...restOptions,
      // @fb-only: default: optionsDefault,
      // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS,
      // @fb-only: });
    } else {
    return baseAtom({ ...restOptions,
      default: optionsDefault
    });
  }
}

function atomWithFallback(options) {
  const base = atom({ ...options,
    default: DEFAULT_VALUE$7,
    persistence_UNSTABLE: options.persistence_UNSTABLE === undefined ? undefined : { ...options.persistence_UNSTABLE,
      validator: storedValue => storedValue instanceof DefaultValue$2 ? storedValue : Recoil_nullthrows(options.persistence_UNSTABLE).validator(storedValue, DEFAULT_VALUE$7)
    },
    // TODO Hack for now.
    // flowlint-next-line unclear-type: off
    effects_UNSTABLE: options.effects_UNSTABLE
  });
  const sel = Recoil_selector({
    key: `${options.key}__withFallback`,
    get: ({
      get
    }) => {
      const baseValue = get(base);
      return baseValue instanceof DefaultValue$2 ? options.default : baseValue;
    },
    set: ({
      set
    }, newValue) => set(base, newValue),
    dangerouslyAllowMutability: options.dangerouslyAllowMutability
  });
  setConfigDeletionHandler$1(sel.key, getConfigDeletionHandler$2(options.key));
  return sel;
}

var Recoil_atom = atom;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

class MapCache {
  constructor(options) {
    var _options$mapKey;

    _defineProperty(this, "_map", void 0);

    _defineProperty(this, "_keyMapper", void 0);

    this._map = new Map();
    this._keyMapper = (_options$mapKey = options === null || options === void 0 ? void 0 : options.mapKey) !== null && _options$mapKey !== void 0 ? _options$mapKey : v => v;
  }

  size() {
    return this._map.size;
  }

  has(key) {
    return this._map.has(this._keyMapper(key));
  }

  get(key) {
    return this._map.get(this._keyMapper(key));
  }

  set(key, val) {
    this._map.set(this._keyMapper(key), val);
  }

  delete(key) {
    this._map.delete(this._keyMapper(key));
  }

  clear() {
    this._map.clear();
  }

}

var Recoil_MapCache = {
  MapCache
};

var Recoil_MapCache_1 = Recoil_MapCache.MapCache;

var Recoil_MapCache$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  MapCache: Recoil_MapCache_1
});

const {
  LRUCache: LRUCache$2
} = Recoil_LRUCache$1;

const {
  MapCache: MapCache$1
} = Recoil_MapCache$1;

const defaultPolicy$1 = {
  equality: 'reference',
  eviction: 'none',
  maxSize: Infinity
};

function cacheFromPolicy({
  equality = defaultPolicy$1.equality,
  eviction = defaultPolicy$1.eviction,
  maxSize = defaultPolicy$1.maxSize
} = defaultPolicy$1) {
  const valueMapper = getValueMapper$1(equality);
  const cache = getCache(eviction, maxSize, valueMapper);
  return cache;
}

function getValueMapper$1(equality) {
  switch (equality) {
    case 'reference':
      return val => val;

    case 'value':
      return val => Recoil_stableStringify(val);
  }

  throw Recoil_err(`Unrecognized equality policy ${equality}`);
}

function getCache(eviction, maxSize, mapKey) {
  switch (eviction) {
    case 'keep-all':
      // $FlowFixMe[method-unbinding]
      return new MapCache$1({
        mapKey
      });

    case 'lru':
      // $FlowFixMe[method-unbinding]
      return new LRUCache$2({
        mapKey,
        maxSize: Recoil_nullthrows(maxSize)
      });

    case 'most-recent':
      // $FlowFixMe[method-unbinding]
      return new LRUCache$2({
        mapKey,
        maxSize: 1
      });
  }

  throw Recoil_err(`Unrecognized eviction policy ${eviction}`);
}

var Recoil_cacheFromPolicy = cacheFromPolicy;

const {
  setConfigDeletionHandler: setConfigDeletionHandler$2
} = Recoil_Node;





// Process scopeRules to handle any entries which are functions taking parameters
// prettier-ignore
// @fb-only: function mapScopeRules<P>(
// @fb-only: scopeRules?: ParameterizedScopeRules<P>,
// @fb-only: param: P,
// @fb-only: ): ScopeRules | void {
// @fb-only: return scopeRules?.map(rule =>
// @fb-only: Array.isArray(rule)
// @fb-only: ? rule.map(entry => (typeof entry === 'function' ? entry(param) : entry))
// @fb-only: : rule,
// @fb-only: );
// @fb-only: }

/*
A function which returns an atom based on the input parameter.

Each unique parameter returns a unique atom. E.g.,

  const f = atomFamily(...);
  f({a: 1}) => an atom
  f({a: 2}) => a different atom

This allows components to persist local, private state using atoms.  Each
instance of the component may have a different key, which it uses as the
parameter for a family of atoms; in this way, each component will have
its own atom not shared by other instances.  These state keys may be composed
into children's state keys as well.
*/
function atomFamily(options) {
  var _options$cachePolicyF, _options$cachePolicyF2;

  const atomCache = Recoil_cacheFromPolicy({
    equality: (_options$cachePolicyF = (_options$cachePolicyF2 = options.cachePolicyForParams_UNSTABLE) === null || _options$cachePolicyF2 === void 0 ? void 0 : _options$cachePolicyF2.equality) !== null && _options$cachePolicyF !== void 0 ? _options$cachePolicyF : 'value',
    eviction: 'keep-all'
  }); // Simple atomFamily implementation to cache individual atoms based
  // on the parameter value equality.

  return params => {
    var _stableStringify;

    const cachedAtom = atomCache.get(params);

    if (cachedAtom != null) {
      return cachedAtom;
    }

    const {
      cachePolicyForParams_UNSTABLE,
      ...atomOptions
    } = options;
    const newAtom = Recoil_atom({ ...atomOptions,
      key: `${options.key}__${(_stableStringify = Recoil_stableStringify(params)) !== null && _stableStringify !== void 0 ? _stableStringify : 'void'}`,
      default: typeof options.default === 'function' ? // The default was parameterized
      // Flow doesn't know that T isn't a function, so we need to case to any
      options.default(params) // flowlint-line unclear-type:off
      : // Default may be a static value, promise, or RecoilValue
      options.default,
      retainedBy_UNSTABLE: typeof options.retainedBy_UNSTABLE === 'function' ? options.retainedBy_UNSTABLE(params) : options.retainedBy_UNSTABLE,
      effects_UNSTABLE: typeof options.effects_UNSTABLE === 'function' ? options.effects_UNSTABLE(params) : options.effects_UNSTABLE // prettier-ignore
      // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS: mapScopeRules(
      // @fb-only: options.scopeRules_APPEND_ONLY_READ_THE_DOCS,
      // @fb-only: params,
      // @fb-only: ),

    });
    atomCache.set(params, newAtom);
    setConfigDeletionHandler$2(newAtom.key, () => {
      atomCache.delete(params);
    });
    return newAtom;
  };
}

var Recoil_atomFamily = atomFamily;

const {
  setConfigDeletionHandler: setConfigDeletionHandler$3
} = Recoil_Node;



 // Keep in mind the parameter needs to be serializable as a cahche key
// using Recoil_stableStringify


// Add a unique index to each selector in case the cache implementation allows
// duplicate keys based on equivalent stringified parameters
let nextIndex = 0;
/* eslint-disable no-redeclare */

// Return a function that returns members of a family of selectors of the same type
// E.g.,
//
// const s = selectorFamily(...);
// s({a: 1}) => a selector
// s({a: 2}) => a different selector
//
// By default, the selectors are distinguished by distinct values of the
// parameter based on value equality, not reference equality.  This allows using
// object literals or other equivalent objects at callsites to not create
// duplicate cache entries.  This behavior may be overridden with the
// cacheImplementationForParams option.
function selectorFamily(options) {
  var _options$cachePolicyF, _options$cachePolicyF2;

  const selectorCache = Recoil_cacheFromPolicy({
    equality: (_options$cachePolicyF = (_options$cachePolicyF2 = options.cachePolicyForParams_UNSTABLE) === null || _options$cachePolicyF2 === void 0 ? void 0 : _options$cachePolicyF2.equality) !== null && _options$cachePolicyF !== void 0 ? _options$cachePolicyF : 'value',
    eviction: 'keep-all'
  });
  return params => {
    var _stableStringify;

    const cachedSelector = selectorCache.get(params);

    if (cachedSelector != null) {
      return cachedSelector;
    }

    const myKey = `${options.key}__selectorFamily/${(_stableStringify = Recoil_stableStringify(params, {
      // It is possible to use functions in parameters if the user uses
      // a cache with reference equality thanks to the incrementing index.
      allowFunctions: true
    })) !== null && _stableStringify !== void 0 ? _stableStringify : 'void'}/${nextIndex++}`; // Append index in case values serialize to the same key string

    const myGet = callbacks => options.get(params)(callbacks);

    const myCachePolicy = options.cachePolicy_UNSTABLE;
    const retainedBy = typeof options.retainedBy_UNSTABLE === 'function' ? options.retainedBy_UNSTABLE(params) : options.retainedBy_UNSTABLE;
    let newSelector;

    if (options.set != null) {
      const set = options.set;

      const mySet = (callbacks, newValue) => set(params)(callbacks, newValue);

      newSelector = Recoil_selector({
        key: myKey,
        get: myGet,
        set: mySet,
        cachePolicy_UNSTABLE: myCachePolicy,
        dangerouslyAllowMutability: options.dangerouslyAllowMutability,
        retainedBy_UNSTABLE: retainedBy
      });
    } else {
      newSelector = Recoil_selector({
        key: myKey,
        get: myGet,
        cachePolicy_UNSTABLE: myCachePolicy,
        dangerouslyAllowMutability: options.dangerouslyAllowMutability,
        retainedBy_UNSTABLE: retainedBy
      });
    }

    selectorCache.set(params, newSelector);
    setConfigDeletionHandler$3(newSelector.key, () => {
      selectorCache.delete(params);
    });
    return newSelector;
  };
}
/* eslint-enable no-redeclare */


var Recoil_selectorFamily = selectorFamily;

// flowlint-next-line unclear-type:off


const constantSelector = Recoil_selectorFamily({
  key: '__constant',
  get: constant => () => constant,
  cachePolicyForParams_UNSTABLE: {
    equality: 'reference'
  }
}); // Function that returns a selector which always produces the
// same constant value.  It may be called multiple times with the
// same value, based on reference equality, and will provide the
// same selector.

function constSelector(constant) {
  return constantSelector(constant);
}

var Recoil_constSelector = constSelector;

// flowlint-next-line unclear-type:off


const throwingSelector = Recoil_selectorFamily({
  key: '__error',
  get: message => () => {
    throw Recoil_err(message);
  },
  // TODO Why?
  cachePolicyForParams_UNSTABLE: {
    equality: 'reference'
  }
}); // Function that returns a selector which always throws an error
// with the provided message.

function errorSelector(message) {
  return throwingSelector(message);
}

var Recoil_errorSelector = errorSelector;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Wraps another recoil value and prevents writing to it.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function readOnlySelector(atom) {
  // flowlint-next-line unclear-type: off
  return atom;
}

var Recoil_readOnlySelector = readOnlySelector;

const {
  loadableWithError: loadableWithError$3,
  loadableWithPromise: loadableWithPromise$3,
  loadableWithValue: loadableWithValue$4
} = Recoil_Loadable$1;



 /////////////////
//  TRUTH TABLE
/////////////////
// Dependencies        waitForNone         waitForAny        waitForAll       waitForAllSettled
//  [loading, loading]  [Promise, Promise]  Promise           Promise         Promise
//  [value, loading]    [value, Promise]    [value, Promise]  Promise         Promise
//  [value, value]      [value, value]      [value, value]    [value, value]  [value, value]
//
//  [error, loading]    [Error, Promise]    [Error, Promise]  Error           Promise
//  [error, error]      [Error, Error]      [Error, Error]    Error           [error, error]
//  [value, error]      [value, Error]      [value, Error]    Error           [value, error]
// Issue parallel requests for all dependencies and return the current
// status if they have results, have some error, or are still pending.


function concurrentRequests(getRecoilValue, deps) {
  const results = Array(deps.length).fill(undefined);
  const exceptions = Array(deps.length).fill(undefined);

  for (const [i, dep] of deps.entries()) {
    try {
      results[i] = getRecoilValue(dep);
    } catch (e) {
      // exceptions can either be Promises of pending results or real errors
      exceptions[i] = e;
    }
  }

  return [results, exceptions];
}

function isError(exp) {
  return exp != null && !Recoil_isPromise(exp);
}

function unwrapDependencies(dependencies) {
  return Array.isArray(dependencies) ? dependencies : Object.getOwnPropertyNames(dependencies).map(key => dependencies[key]);
}

function wrapResults(dependencies, results) {
  return Array.isArray(dependencies) ? results : // Object.getOwnPropertyNames() has consistent key ordering with ES6
  Object.getOwnPropertyNames(dependencies).reduce((out, key, idx) => ({ ...out,
    [key]: results[idx]
  }), {});
}

function wrapLoadables(dependencies, results, exceptions) {
  const output = exceptions.map((exception, idx) => exception == null ? loadableWithValue$4(results[idx]) : Recoil_isPromise(exception) ? loadableWithPromise$3(exception) : loadableWithError$3(exception));
  return wrapResults(dependencies, output);
}

function combineAsyncResultsWithSyncResults(syncResults, asyncResults) {
  return asyncResults.map((result, idx) =>
  /**
   * it's important we use === undefined as opposed to == null, because the
   * resolved value of the async promise could be `null`, in which case we
   * don't want to use syncResults[idx], which would be undefined. If async
   * promise resolves to `undefined`, that's ok because `syncResults[idx]`
   * will also be `undefined`. That's a little hacky, but it works.
   */
  result === undefined ? syncResults[idx] : result);
} // Selector that requests all dependencies in parallel and immediately returns
// current results without waiting.


const waitForNone = Recoil_selectorFamily({
  key: '__waitForNone',
  get: dependencies => ({
    get
  }) => {
    // Issue requests for all dependencies in parallel.
    const deps = unwrapDependencies(dependencies);
    const [results, exceptions] = concurrentRequests(get, deps); // Always return the current status of the results; never block.

    return wrapLoadables(dependencies, results, exceptions);
  },
  dangerouslyAllowMutability: true
}); // Selector that requests all dependencies in parallel and waits for at least
// one to be available before returning results.  It will only error if all
// dependencies have errors.

const waitForAny = Recoil_selectorFamily({
  key: '__waitForAny',
  get: dependencies => ({
    get
  }) => {
    // Issue requests for all dependencies in parallel.
    // Exceptions can either be Promises of pending results or real errors
    const deps = unwrapDependencies(dependencies);
    const [results, exceptions] = concurrentRequests(get, deps); // If any results are available, value or error, return the current status

    if (exceptions.some(exp => !Recoil_isPromise(exp))) {
      return wrapLoadables(dependencies, results, exceptions);
    } // Otherwise, return a promise that will resolve when the next result is
    // available, whichever one happens to be next.  But, if all pending
    // dependencies end up with errors, then reject the promise.


    return new Promise(resolve => {
      for (const [i, exp] of exceptions.entries()) {
        if (Recoil_isPromise(exp)) {
          exp.then(result => {
            results[i] = result;
            exceptions[i] = undefined;
            resolve(wrapLoadables(dependencies, results, exceptions));
          }).catch(error => {
            exceptions[i] = error;
            resolve(wrapLoadables(dependencies, results, exceptions));
          });
        }
      }
    });
  },
  dangerouslyAllowMutability: true
}); // Selector that requests all dependencies in parallel and waits for all to be
// available before returning a value.  It will error if any dependencies error.

const waitForAll = Recoil_selectorFamily({
  key: '__waitForAll',
  get: dependencies => ({
    get
  }) => {
    // Issue requests for all dependencies in parallel.
    // Exceptions can either be Promises of pending results or real errors
    const deps = unwrapDependencies(dependencies);
    const [results, exceptions] = concurrentRequests(get, deps); // If all results are available, return the results

    if (exceptions.every(exp => exp == null)) {
      return wrapResults(dependencies, results);
    } // If we have any errors, throw the first error


    const error = exceptions.find(isError);

    if (error != null) {
      throw error;
    } // Otherwise, return a promise that will resolve when all results are available


    return Promise.all(exceptions).then(exceptionResults => wrapResults(dependencies, combineAsyncResultsWithSyncResults(results, exceptionResults)));
  },
  dangerouslyAllowMutability: true
});
const waitForAllSettled = Recoil_selectorFamily({
  key: '__waitForAllSettled',
  get: dependencies => ({
    get
  }) => {
    // Issue requests for all dependencies in parallel.
    // Exceptions can either be Promises of pending results or real errors
    const deps = unwrapDependencies(dependencies);
    const [results, exceptions] = concurrentRequests(get, deps); // If all results are available, return the results

    if (exceptions.every(exp => !Recoil_isPromise(exp))) {
      return wrapLoadables(dependencies, results, exceptions);
    } // Wait for all results to settle


    return Promise.all(exceptions.map((exp, i) => Recoil_isPromise(exp) ? exp.then(result => {
      results[i] = result;
      exceptions[i] = undefined;
    }).catch(error => {
      results[i] = undefined;
      exceptions[i] = error;
    }) : null)) // Then wrap them as loadables
    .then(() => wrapLoadables(dependencies, results, exceptions));
  },
  dangerouslyAllowMutability: true
});
const noWait = Recoil_selectorFamily({
  key: '__noWait',
  get: dependency => ({
    get
  }) => {
    try {
      return loadableWithValue$4(get(dependency));
    } catch (exception) {
      return Recoil_isPromise(exception) ? loadableWithPromise$3(exception) : loadableWithError$3(exception);
    }
  },
  dangerouslyAllowMutability: true
});
var Recoil_WaitFor = {
  waitForNone,
  waitForAny,
  waitForAll,
  waitForAllSettled,
  noWait
};

const {
  RecoilLoadable
} = Recoil_Loadable$1;

const {
  DefaultValue: DefaultValue$3
} = Recoil_Node;

const {
  RecoilRoot: RecoilRoot$2
} = Recoil_RecoilRoot_react;

const {
  isRecoilValue: isRecoilValue$5
} = Recoil_RecoilValue$1;

const {
  retentionZone: retentionZone$1
} = Recoil_RetentionZone;

const {
  freshSnapshot: freshSnapshot$2
} = Recoil_Snapshot$1;

const {
  useRecoilState: useRecoilState$1,
  useRecoilStateLoadable: useRecoilStateLoadable$1,
  useRecoilValue: useRecoilValue$1,
  useRecoilValueLoadable: useRecoilValueLoadable$1,
  useResetRecoilState: useResetRecoilState$1,
  useSetRecoilState: useSetRecoilState$1,
  useSetUnvalidatedAtomValues: useSetUnvalidatedAtomValues$1
} = Recoil_Hooks;

const {
  useGotoRecoilSnapshot: useGotoRecoilSnapshot$2,
  useRecoilSnapshot: useRecoilSnapshot$1,
  useRecoilTransactionObserver: useRecoilTransactionObserver$1,
  useTransactionObservation_DEPRECATED: useTransactionObservation_DEPRECATED$1
} = Recoil_SnapshotHooks;



























const {
  noWait: noWait$1,
  waitForAll: waitForAll$1,
  waitForAllSettled: waitForAllSettled$1,
  waitForAny: waitForAny$1,
  waitForNone: waitForNone$1
} = Recoil_WaitFor;

var Recoil_index = {
  // Types
  DefaultValue: DefaultValue$3,
  isRecoilValue: isRecoilValue$5,
  RecoilLoadable,
  // Recoil Root
  RecoilRoot: RecoilRoot$2,
  useRecoilBridgeAcrossReactRoots_UNSTABLE: Recoil_useRecoilBridgeAcrossReactRoots,
  // Atoms/Selectors
  atom: Recoil_atom,
  selector: Recoil_selector,
  // Convenience Atoms/Selectors
  atomFamily: Recoil_atomFamily,
  selectorFamily: Recoil_selectorFamily,
  constSelector: Recoil_constSelector,
  errorSelector: Recoil_errorSelector,
  readOnlySelector: Recoil_readOnlySelector,
  // Concurrency Helpers for Atoms/Selectors
  noWait: noWait$1,
  waitForNone: waitForNone$1,
  waitForAny: waitForAny$1,
  waitForAll: waitForAll$1,
  waitForAllSettled: waitForAllSettled$1,
  // Hooks for Atoms/Selectors
  useRecoilValue: useRecoilValue$1,
  useRecoilValueLoadable: useRecoilValueLoadable$1,
  useRecoilState: useRecoilState$1,
  useRecoilStateLoadable: useRecoilStateLoadable$1,
  useSetRecoilState: useSetRecoilState$1,
  useResetRecoilState: useResetRecoilState$1,
  useGetRecoilValueInfo_UNSTABLE: Recoil_useGetRecoilValueInfo,
  useRecoilRefresher_UNSTABLE: Recoil_useRecoilRefresher,
  // Hooks for complex operations
  useRecoilCallback: Recoil_useRecoilCallback,
  useRecoilTransaction_UNSTABLE: Recoil_useRecoilTransaction,
  // Snapshots
  useGotoRecoilSnapshot: useGotoRecoilSnapshot$2,
  useRecoilSnapshot: useRecoilSnapshot$1,
  useRecoilTransactionObserver_UNSTABLE: useRecoilTransactionObserver$1,
  useTransactionObservation_UNSTABLE: useTransactionObservation_DEPRECATED$1,
  useSetUnvalidatedAtomValues_UNSTABLE: useSetUnvalidatedAtomValues$1,
  snapshot_UNSTABLE: freshSnapshot$2,
  // Memory Management
  useRetain: Recoil_useRetain,
  retentionZone: retentionZone$1
};
var Recoil_index_1 = Recoil_index.DefaultValue;
var Recoil_index_2 = Recoil_index.isRecoilValue;
var Recoil_index_3 = Recoil_index.RecoilLoadable;
var Recoil_index_4 = Recoil_index.RecoilRoot;
var Recoil_index_5 = Recoil_index.useRecoilBridgeAcrossReactRoots_UNSTABLE;
var Recoil_index_6 = Recoil_index.atom;
var Recoil_index_7 = Recoil_index.selector;
var Recoil_index_8 = Recoil_index.atomFamily;
var Recoil_index_9 = Recoil_index.selectorFamily;
var Recoil_index_10 = Recoil_index.constSelector;
var Recoil_index_11 = Recoil_index.errorSelector;
var Recoil_index_12 = Recoil_index.readOnlySelector;
var Recoil_index_13 = Recoil_index.noWait;
var Recoil_index_14 = Recoil_index.waitForNone;
var Recoil_index_15 = Recoil_index.waitForAny;
var Recoil_index_16 = Recoil_index.waitForAll;
var Recoil_index_17 = Recoil_index.waitForAllSettled;
var Recoil_index_18 = Recoil_index.useRecoilValue;
var Recoil_index_19 = Recoil_index.useRecoilValueLoadable;
var Recoil_index_20 = Recoil_index.useRecoilState;
var Recoil_index_21 = Recoil_index.useRecoilStateLoadable;
var Recoil_index_22 = Recoil_index.useSetRecoilState;
var Recoil_index_23 = Recoil_index.useResetRecoilState;
var Recoil_index_24 = Recoil_index.useGetRecoilValueInfo_UNSTABLE;
var Recoil_index_25 = Recoil_index.useRecoilRefresher_UNSTABLE;
var Recoil_index_26 = Recoil_index.useRecoilCallback;
var Recoil_index_27 = Recoil_index.useRecoilTransaction_UNSTABLE;
var Recoil_index_28 = Recoil_index.useGotoRecoilSnapshot;
var Recoil_index_29 = Recoil_index.useRecoilSnapshot;
var Recoil_index_30 = Recoil_index.useRecoilTransactionObserver_UNSTABLE;
var Recoil_index_31 = Recoil_index.useTransactionObservation_UNSTABLE;
var Recoil_index_32 = Recoil_index.useSetUnvalidatedAtomValues_UNSTABLE;
var Recoil_index_33 = Recoil_index.snapshot_UNSTABLE;
var Recoil_index_34 = Recoil_index.useRetain;
var Recoil_index_35 = Recoil_index.retentionZone;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Recoil_index);



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
/* harmony export */   "menuState": () => (/* reexport safe */ _FlatMenu_js__WEBPACK_IMPORTED_MODULE_10__.menuState),
/* harmony export */   "useMenuParms": () => (/* reexport safe */ _FlatMenu_js__WEBPACK_IMPORTED_MODULE_10__.useMenuParms),
/* harmony export */   "Redirect": () => (/* reexport safe */ _FlatMenu_js__WEBPACK_IMPORTED_MODULE_10__.Redirect),
/* harmony export */   "Link": () => (/* reexport safe */ _FlatMenu_js__WEBPACK_IMPORTED_MODULE_10__.Link),
/* harmony export */   "FlatMenu": () => (/* reexport safe */ _FlatMenu_js__WEBPACK_IMPORTED_MODULE_10__.FlatMenu),
/* harmony export */   "Header": () => (/* reexport safe */ _Header_js__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   "HeaderModal": () => (/* reexport safe */ _HeaderModal_js__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   "InputFile": () => (/* reexport safe */ _InputFile_js__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   "generateInvalid": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.generateInvalid),
/* harmony export */   "setInvalidScreen": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.setInvalidScreen),
/* harmony export */   "setInvalidTable": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.setInvalidTable),
/* harmony export */   "setInvalidDual": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.setInvalidDual),
/* harmony export */   "checkValidityScreen": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.checkValidityScreen),
/* harmony export */   "checkValidityTable": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.checkValidityTable),
/* harmony export */   "resetDisplayScreen": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.resetDisplayScreen),
/* harmony export */   "resetDisplayTable": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.resetDisplayTable),
/* harmony export */   "wasClickedScreen": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.wasClickedScreen),
/* harmony export */   "wasClickedTable": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.wasClickedTable),
/* harmony export */   "isConstant": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.isConstant),
/* harmony export */   "validCheckDual": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.validCheckDual),
/* harmony export */   "validCheckScreen": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.validCheckScreen),
/* harmony export */   "validCheckTable": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.validCheckTable),
/* harmony export */   "clearInvalidDual": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.clearInvalidDual),
/* harmony export */   "clearInvalidScreen": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.clearInvalidScreen),
/* harmony export */   "clearInvalidTable": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.clearInvalidTable),
/* harmony export */   "processInvalidStyleScreen": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.processInvalidStyleScreen),
/* harmony export */   "processStyleScreen": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.processStyleScreen),
/* harmony export */   "clearInvalidScreenOnly": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.clearInvalidScreenOnly),
/* harmony export */   "processInvalidStyleTable": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.processInvalidStyleTable),
/* harmony export */   "processStyleTable": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.processStyleTable),
/* harmony export */   "isInvalid": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.isInvalid),
/* harmony export */   "getInvalidMessage": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_14__.getInvalidMessage),
/* harmony export */   "Choice": () => (/* reexport safe */ _List_js__WEBPACK_IMPORTED_MODULE_15__.Choice),
/* harmony export */   "List": () => (/* reexport safe */ _List_js__WEBPACK_IMPORTED_MODULE_15__.List),
/* harmony export */   "MenuBar": () => (/* reexport safe */ _MenuBar_js__WEBPACK_IMPORTED_MODULE_16__.MenuBar),
/* harmony export */   "Modal": () => (/* reexport safe */ _Modal_js__WEBPACK_IMPORTED_MODULE_17__["default"]),
/* harmony export */   "NavigateBar": () => (/* reexport safe */ _NavigateBar_js__WEBPACK_IMPORTED_MODULE_18__["default"]),
/* harmony export */   "Radio": () => (/* reexport safe */ _Radio_js__WEBPACK_IMPORTED_MODULE_19__["default"]),
/* harmony export */   "search": () => (/* reexport safe */ _SearchFunct_js__WEBPACK_IMPORTED_MODULE_20__.search),
/* harmony export */   "binSearch": () => (/* reexport safe */ _SearchFunct_js__WEBPACK_IMPORTED_MODULE_20__.binSearch),
/* harmony export */   "SearchSortTable": () => (/* reexport safe */ _SearchSortTable_js__WEBPACK_IMPORTED_MODULE_21__["default"]),
/* harmony export */   "Slider": () => (/* reexport safe */ _Slider_js__WEBPACK_IMPORTED_MODULE_22__["default"]),
/* harmony export */   "StatusBox": () => (/* reexport safe */ _StatusBox_js__WEBPACK_IMPORTED_MODULE_23__.StatusBox),
/* harmony export */   "generateButton": () => (/* reexport safe */ _Theme_js__WEBPACK_IMPORTED_MODULE_24__.generateButton),
/* harmony export */   "generateDefaultButton": () => (/* reexport safe */ _Theme_js__WEBPACK_IMPORTED_MODULE_24__.generateDefaultButton),
/* harmony export */   "generateCSSButton": () => (/* reexport safe */ _Theme_js__WEBPACK_IMPORTED_MODULE_24__.generateCSSButton),
/* harmony export */   "generateCSSDefaultButton": () => (/* reexport safe */ _Theme_js__WEBPACK_IMPORTED_MODULE_24__.generateCSSDefaultButton),
/* harmony export */   "isOpera": () => (/* reexport safe */ _browserDetect_js__WEBPACK_IMPORTED_MODULE_25__.isOpera),
/* harmony export */   "isFirefox": () => (/* reexport safe */ _browserDetect_js__WEBPACK_IMPORTED_MODULE_25__.isFirefox),
/* harmony export */   "isSafari": () => (/* reexport safe */ _browserDetect_js__WEBPACK_IMPORTED_MODULE_25__.isSafari),
/* harmony export */   "isIE": () => (/* reexport safe */ _browserDetect_js__WEBPACK_IMPORTED_MODULE_25__.isIE),
/* harmony export */   "isEdge": () => (/* reexport safe */ _browserDetect_js__WEBPACK_IMPORTED_MODULE_25__.isEdge),
/* harmony export */   "isChrome": () => (/* reexport safe */ _browserDetect_js__WEBPACK_IMPORTED_MODULE_25__.isChrome),
/* harmony export */   "isEdgeChromium": () => (/* reexport safe */ _browserDetect_js__WEBPACK_IMPORTED_MODULE_25__.isEdgeChromium),
/* harmony export */   "isBlink": () => (/* reexport safe */ _browserDetect_js__WEBPACK_IMPORTED_MODULE_25__.isBlink),
/* harmony export */   "date2str": () => (/* reexport safe */ _date2str_js__WEBPACK_IMPORTED_MODULE_26__.date2str),
/* harmony export */   "lastOfMonth": () => (/* reexport safe */ _dateUtils_js__WEBPACK_IMPORTED_MODULE_27__.lastOfMonth),
/* harmony export */   "todayString": () => (/* reexport safe */ _dateUtils_js__WEBPACK_IMPORTED_MODULE_27__.todayString),
/* harmony export */   "getList": () => (/* reexport safe */ _encrypt_js__WEBPACK_IMPORTED_MODULE_28__.getList),
/* harmony export */   "decrypt": () => (/* reexport safe */ _encrypt_js__WEBPACK_IMPORTED_MODULE_28__.decrypt),
/* harmony export */   "encrypt": () => (/* reexport safe */ _encrypt_js__WEBPACK_IMPORTED_MODULE_28__.encrypt),
/* harmony export */   "localStrToDate": () => (/* reexport safe */ _localStrToDate_js__WEBPACK_IMPORTED_MODULE_29__.localStrToDate),
/* harmony export */   "makeChangeHandler": () => (/* reexport safe */ _makeChangeHandler_js__WEBPACK_IMPORTED_MODULE_30__["default"]),
/* harmony export */   "register": () => (/* reexport safe */ _serviceWorker_js__WEBPACK_IMPORTED_MODULE_31__.register),
/* harmony export */   "unregister": () => (/* reexport safe */ _serviceWorker_js__WEBPACK_IMPORTED_MODULE_31__.unregister)
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
/* harmony import */ var _Modal_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Modal.js */ "./src/Modal.js");
/* harmony import */ var _NavigateBar_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./NavigateBar.js */ "./src/NavigateBar.js");
/* harmony import */ var _Radio_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Radio.js */ "./src/Radio.js");
/* harmony import */ var _SearchFunct_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./SearchFunct.js */ "./src/SearchFunct.js");
/* harmony import */ var _SearchSortTable_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./SearchSortTable.js */ "./src/SearchSortTable.js");
/* harmony import */ var _Slider_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Slider.js */ "./src/Slider.js");
/* harmony import */ var _StatusBox_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./StatusBox.js */ "./src/StatusBox.js");
/* harmony import */ var _Theme_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Theme.js */ "./src/Theme.js");
/* harmony import */ var _browserDetect_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./browserDetect.js */ "./src/browserDetect.js");
/* harmony import */ var _date2str_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./date2str.js */ "./src/date2str.js");
/* harmony import */ var _dateUtils_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./dateUtils.js */ "./src/dateUtils.js");
/* harmony import */ var _encrypt_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./encrypt.js */ "./src/encrypt.js");
/* harmony import */ var _localStrToDate_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./localStrToDate.js */ "./src/localStrToDate.js");
/* harmony import */ var _makeChangeHandler_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./makeChangeHandler.js */ "./src/makeChangeHandler.js");
/* harmony import */ var _serviceWorker_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./serviceWorker.js */ "./src/serviceWorker.js");

































})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map