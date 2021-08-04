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
/* harmony import */ var _Theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Theme.js */ "./src/Theme.js");
/* harmony import */ var _modal_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.css */ "./src/modal.css");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var defProps = {
  show: true,
  closeFunct: function closeFunct() {},
  message: 'No Alert message given',
  buttonStyle: _objectSpread({}, _Theme_js__WEBPACK_IMPORTED_MODULE_2__.buttonStyle)
};

var AlertModal = function AlertModal(inProps) {
  var props = _objectSpread(_objectSpread({}, defProps), inProps);

  if ('show' in inProps === false) {
    console.error('AlertModal: The show property is not present');
  }

  if ('closeFunct' in inProps === false) {
    console.error('AlertModal: The closeFunct property is not present');
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, props.show === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Modal_js__WEBPACK_IMPORTED_MODULE_1__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, props.message === '' ? defProps.message : props.message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    name: "ok",
    onClick: function onClick() {
      return props.closeFunct(false);
    },
    style: props.buttonStyle
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
/* harmony import */ var react_autobind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-autobind */ "./node_modules/react-autobind/index.js");
/* harmony import */ var react_autobind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_autobind__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _excluded = ["selectedValue", "text", "color", "style", "children"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var defaultStyle = {
  backgroundColor: 'Transparent',
  backgroundRepeat: 'no-repeat',
  border: 'none',
  cursor: 'pointer',
  overflow: 'hidden',
  outline: 'none',
  color: 'inherit' // dont default to color: buttontext, wont match the current theme

};
/*
  ☐  U+2610 &#9744;  Ballot Box
  ☑  U+2611 &#9745;  Ballot Box with Check
  ☒  U+2612 &#9746;  Ballot Box with X
*/

var checked = String.fromCharCode(9745);
var unchecked = String.fromCharCode(9744);

var CheckBox = /*#__PURE__*/function (_React$Component) {
  _inherits(CheckBox, _React$Component);

  var _super = _createSuper(CheckBox);

  function CheckBox(props) {
    var _this;

    _classCallCheck(this, CheckBox);

    _this = _super.call(this, props);
    react_autobind__WEBPACK_IMPORTED_MODULE_1___default()(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CheckBox, [{
    key: "handle",
    value: function handle(e) {
      if (typeof e.preventDefault === 'function') e.preventDefault();
      e.target.name = this.props.name;
      e.target.value = this.props.value === this.props.selectedValue ? '' : this.props.selectedValue;
      this.props.onChange(e);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          selectedValue = _this$props.selectedValue,
          text = _this$props.text,
          color = _this$props.color,
          style = _this$props.style,
          children = _this$props.children,
          rest = _objectWithoutProperties(_this$props, _excluded);

      var isChecked = this.props.value === selectedValue;
      var symbol = isChecked ? checked : unchecked;

      var st = _objectSpread(_objectSpread(_objectSpread({}, defaultStyle), style), {}, {
        color: color
      });

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", _extends({
        type: "button",
        onClick: this.handle,
        style: st
      }, rest), symbol, text, children);
    }
  }]);

  return CheckBox;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

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
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

 // currently only accepts property choices as ['one','two']

var ChoiceText = /*#__PURE__*/function (_React$Component) {
  _inherits(ChoiceText, _React$Component);

  var _super = _createSuper(ChoiceText);

  function ChoiceText() {
    _classCallCheck(this, ChoiceText);

    return _super.apply(this, arguments);
  }

  _createClass(ChoiceText, [{
    key: "render",
    value: function render() {
      var props = _objectSpread({}, this.props);

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
    }
  }]);

  return ChoiceText;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

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
/* harmony import */ var _Theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Theme.js */ "./src/Theme.js");
/* harmony import */ var _modal_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.css */ "./src/modal.css");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var defProps = {
  show: true,
  yesFunct: function yesFunct() {},
  noFunct: function noFunct() {},
  closeFunct: function closeFunct() {},
  message: 'No Confirm message given',
  buttonStyle: _objectSpread({}, _Theme_js__WEBPACK_IMPORTED_MODULE_2__.buttonStyle)
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, props.show === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Modal_js__WEBPACK_IMPORTED_MODULE_1__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, props.message === '' ? defProps.message : props.message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    name: "yes",
    onClick: function onClick(async) {
      return processYesFunct();
    },
    style: props.buttonStyle
  }, "Yes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    name: "no",
    onClick: function onClick(async) {
      return processNoFunct();
    },
    style: props.buttonStyle
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
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Theme */ "./src/Theme.js");
/* harmony import */ var _contextMenuHover_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contextMenuHover.css */ "./src/contextMenuHover.css");
var _excluded = ["positionX", "positionY", "noLeave", "noCancel", "menu", "backColor", "border", "radius"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var ContextMenu = function ContextMenu(propsIn) {
  console.log('props', propsIn);

  var positionX = propsIn.positionX,
      positionY = propsIn.positionY,
      noLeave = propsIn.noLeave,
      noCancel = propsIn.noCancel,
      menu = propsIn.menu,
      backColor = propsIn.backColor,
      border = propsIn.border,
      radius = propsIn.radius,
      props = _objectWithoutProperties(propsIn, _excluded);

  var propsPositionX = positionX || 10;
  var propsPositionY = positionY || 10;
  var propsNoLeave = noLeave || false;
  var propsNoCancel = noCancel || false;
  var propsMenu = menu || [];
  var backgroundColor = backColor || _Theme__WEBPACK_IMPORTED_MODULE_1__.defaultThemeSettings.backgroundColor;
  var propsBorder = border || "2px solid black";
  var propsRadius = radius || "10px";

  function cancelButton() {
    props.closeFunct(false);
  }

  var menuStyle = {
    left: propsPositionX,
    top: propsPositionY,
    border: propsBorder,
    borderRadius: propsRadius,
    backgroundColor: backgroundColor // "#CCCC66",

  };

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
    var key = 'row_' + i;
    console.log('row', row);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      key: key,
      onClick: function onClick() {
        return execute(row.funct);
      }
    }, row.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null));
  }

  if (props.show === true) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "contextMenuHov",
      style: menuStyle,
      onMouseLeave: mouseLeave
    }, propsMenu.map(buildMenuItem), propsNoCancel ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
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

/***/ "./src/DatePicker.js":
/*!***************************!*\
  !*** ./src/DatePicker.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DatePicker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_autobind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-autobind */ "./node_modules/react-autobind/index.js");
/* harmony import */ var react_autobind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_autobind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UnstyledDatePicker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UnstyledDatePicker.js */ "./src/UnstyledDatePicker.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var DatePicker = /*#__PURE__*/function (_React$Component) {
  _inherits(DatePicker, _React$Component);

  var _super = _createSuper(DatePicker);

  function DatePicker(props) {
    var _this;

    _classCallCheck(this, DatePicker);

    _this = _super.call(this, props);
    react_autobind__WEBPACK_IMPORTED_MODULE_1___default()(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DatePicker, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UnstyledDatePicker_js__WEBPACK_IMPORTED_MODULE_2__.default, _extends({}, this.props, {
        defaultStyles: true
      }));
    }
  }]);

  return DatePicker;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));



/***/ }),

/***/ "./src/DatePickerStyle.js":
/*!********************************!*\
  !*** ./src/DatePickerStyle.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatePickerStyle": () => (/* binding */ DatePickerStyle)
/* harmony export */ });
function DatePickerStyle() {
  if (window.document) {
    var alreadyDefined = window.document.querySelector('.DayPicker');

    if (alreadyDefined == null) {
      if (!isTestingWithJest()) console.log('defining CSS .DayPicker rules');
      addClassRules(rulesForDayPicker);
    }
  }
}

function isTestingWithJest() {
  return process.env.JEST_WORKER_ID !== undefined;
}

function addClassRules(content) {
  if (window.document) {
    var style = window.document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = content;
    window.document.getElementsByTagName('head')[0].appendChild(style);
  }
} // taken from: react-day-picker to avoid 
//     import 'react-day-picker/lib/style.css';


var rulesForDayPicker = "\n/* DayPicker styles */\n\n.DayPicker {\n  display: inline-block;\n  font-size: 1rem;\n}\n\n.DayPicker-wrapper {\n  position: relative;\n\n  flex-direction: row;\n  padding-bottom: 1em;\n\n  -webkit-user-select: none;\n\n     -moz-user-select: none;\n\n      -ms-user-select: none;\n\n          user-select: none;\n}\n\n.DayPicker-Months {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.DayPicker-Month {\n  display: table;\n  margin: 0 1em;\n  margin-top: 1em;\n  border-spacing: 0;\n  border-collapse: collapse;\n\n  -webkit-user-select: none;\n\n     -moz-user-select: none;\n\n      -ms-user-select: none;\n\n          user-select: none;\n}\n\n.DayPicker-NavBar {\n}\n\n.DayPicker-NavButton {\n  position: absolute;\n  top: 1em;\n  right: 1.5em;\n  left: auto;\n\n  display: inline-block;\n  margin-top: 2px;\n  width: 1.25em;\n  height: 1.25em;\n  background-position: center;\n  background-size: 50%;\n  background-repeat: no-repeat;\n  color: #8B9898;\n  cursor: pointer;\n}\n\n.DayPicker-NavButton:hover {\n  opacity: 0.8;\n}\n\n.DayPicker-NavButton--prev {\n  margin-right: 1.5em;\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAVVJREFUWAnN2G0KgjAYwPHpGfRkaZeqvgQaK+hY3SUHrk1YzNLay/OiEFp92I+/Mp2F2Mh2lLISWnflFjzH263RQjzMZ19wgs73ez0o1WmtW+dgA01VxrE3p6l2GLsnBy1VYQOtVSEH/atCCgqpQgKKqYIOiq2CBkqtggLKqQIKgqgCBjpJ2Y5CdJ+zrT9A7HHSTA1dxUdHgzCqJIEwq0SDsKsEg6iqBIEoq/wEcVRZBXFV+QJxV5mBtlDFB5VjYTaGZ2sf4R9PM7U9ZU+lLuaetPP/5Die3ToO1+u+MKtHs06qODB2zBnI/jBd4MPQm1VkY79Tb18gB+C62FdBFsZR6yeIo1YQiLJWMIiqVjQIu1YSCLNWFgijVjYIuhYYCKoWKAiiFgoopxYaKLUWOii2FgkophYp6F3r42W5A9s9OcgNvva8xQaysKXlFytoqdYmQH6tF3toSUo0INq9AAAAAElFTkSuQmCC');\n}\n\n.DayPicker-NavButton--next {\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAXRJREFUWAnN119ugjAcwPHWzJ1gnmxzB/BBE0n24m4xfNkTaOL7wOtsl3AXMMb+Vjaa1BG00N8fSEibPpAP3xAKKs2yjzTPH9RAjhEo9WzPr/Vm8zgE0+gXATAxxuxtqeJ9t5tIwv5AtQAApsfT6TPdbp+kUBcgVwvO51KqVhMkXKsVJFXrOkigVhCIs1Y4iKlWZxB1rX4gwlpRIIpa8SDkWmggrFq4IIRaJKCYWnSgnrXIQV1r8YD+1Vrn+bReagysIFfLABRt31v8oBu1xEBttfRbltmfjgEcWh9snUS2kNdBK6WN1vrOWxObWsz+fjxevsxmB1GQDfINWiev83nhaoiB/CoOU438oPrhXS0WpQ9xc1ZQWxWHqUYe0I0qrKCQKjygDlXIQV2r0IF6ViEBxVTBBSFUQQNhVYkHIVeJAtkNsbQ7c1LtzP6FsObhb2rCKv7NBIGoq4SDmKoEgTirXAcJVGkFSVVpgoSrXICGUMUH/QBZNSUy5XWUhwAAAABJRU5ErkJggg==');\n}\n\n.DayPicker-NavButton--interactionDisabled {\n  display: none;\n}\n\n.DayPicker-Caption {\n  display: table-caption;\n  margin-bottom: 0.5em;\n  padding: 0 0.5em;\n  text-align: left;\n}\n\n.DayPicker-Caption > div {\n  font-weight: 500;\n  font-size: 1.15em;\n}\n\n.DayPicker-Weekdays {\n  display: table-header-group;\n  margin-top: 1em;\n}\n\n.DayPicker-WeekdaysRow {\n  display: table-row;\n}\n\n.DayPicker-Weekday {\n  display: table-cell;\n  padding: 0.5em;\n  color: #8B9898;\n  text-align: center;\n  font-size: 0.875em;\n}\n\n.DayPicker-Weekday abbr[title] {\n  border-bottom: none;\n  text-decoration: none;\n}\n\n.DayPicker-Body {\n  display: table-row-group;\n}\n\n.DayPicker-Week {\n  display: table-row;\n}\n\n.DayPicker-Day {\n  display: table-cell;\n  padding: 0.5em;\n  border-radius: 50%;\n  vertical-align: middle;\n  text-align: center;\n  cursor: pointer;\n}\n\n.DayPicker-WeekNumber {\n  display: table-cell;\n  padding: 0.5em;\n  min-width: 1em;\n  border-right: 1px solid #EAECEC;\n  color: #8B9898;\n  vertical-align: middle;\n  text-align: right;\n  font-size: 0.75em;\n  cursor: pointer;\n}\n\n.DayPicker--interactionDisabled .DayPicker-Day {\n  cursor: default;\n}\n\n.DayPicker-Footer {\n  padding-top: 0.5em;\n}\n\n.DayPicker-TodayButton {\n  border: none;\n  background-color: transparent;\n  background-image: none;\n  box-shadow: none;\n  color: #4A90E2;\n  font-size: 0.875em;\n  cursor: pointer;\n}\n\n/* Default modifiers */\n\n.DayPicker-Day--today {\n  color: #D0021B;\n  font-weight: 700;\n}\n\n.DayPicker-Day--outside {\n  color: #8B9898;\n  cursor: default;\n}\n\n.DayPicker-Day--disabled {\n  color: #DCE0E0;\n  cursor: default;\n  /* background-color: #eff1f1; */\n}\n\n/* Example modifiers */\n\n.DayPicker-Day--sunday {\n  background-color: #F7F8F8;\n}\n\n.DayPicker-Day--sunday:not(.DayPicker-Day--today) {\n  color: #DCE0E0;\n}\n\n.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {\n  position: relative;\n\n  background-color: #4A90E2;\n  color: #F0F8FF;\n}\n\n.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover {\n  background-color: #51A0FA;\n}\n\n.DayPicker:not(.DayPicker--interactionDisabled)\n  .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {\n  background-color: #F0F8FF;\n}\n\n/* DayPickerInput */\n\n.DayPickerInput {\n  display: inline-block;\n}\n\n.DayPickerInput-OverlayWrapper {\n  position: relative;\n}\n\n.DayPickerInput-Overlay {\n  position: absolute;\n  left: 0;\n  z-index: 1;\n\n  background: white;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);\n}\n";
/*

[Ref](https://stackoverflow.com/questions/4847313/dynamically-add-css-to-page-via-javascript)

if you want to add css text

```
var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = 'content';
docment.getElementsByTagName('head')[0].appendChild(style);
```

if you want to add css file

```
var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('type', 'text/css');

link.setAttribute('href', 'css/my.css');
document.getElementsByTagName('head')[0].appendChild(link);
```

*/

/***/ }),

/***/ "./src/DoubleListBox.js":
/*!******************************!*\
  !*** ./src/DoubleListBox.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DoubleListBox)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_autobind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-autobind */ "./node_modules/react-autobind/index.js");
/* harmony import */ var react_autobind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_autobind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _List_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./List.js */ "./src/List.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var reset = function reset(props, state) {
  if (!props.value) {
    console.log("DoubleListBox props 'value' field is missing.");
  }

  if (!props.choices) {
    console.log("DoubleListBox props 'choices' field is missing.");
  }

  return {
    choices: _toConsumableArray(props.choices || []),
    leftValues: _toConsumableArray(props.choices || []),
    rightValues: _toConsumableArray(props.value || []),
    leftSelections: [],
    rightSelections: []
  };
};

var DoubleListBox = /*#__PURE__*/function (_React$Component) {
  _inherits(DoubleListBox, _React$Component);

  var _super = _createSuper(DoubleListBox);

  function DoubleListBox(props) {
    var _this;

    _classCallCheck(this, DoubleListBox);

    _this = _super.call(this, props);
    react_autobind__WEBPACK_IMPORTED_MODULE_1___default()(_assertThisInitialized(_this));
    _this.leftRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
    _this.rightRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
    _this.state = reset(_this.props, _this.state);
    return _this;
  }

  _createClass(DoubleListBox, [{
    key: "render",
    value: function render() {
      var topSt = {
        display: 'flex'
      };
      var colSt = {
        flexDirection: 'column'
      };
      var listSt = {
        width: 300
      };
      var buttonSt = {
        width: 50,
        margin: 10,
        backgroundColor: this.props.buttonBackgroundColor || 'blue',
        color: this.props.buttonColor || 'white'
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "titleClass",
        style: this.props.titleStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, this.props.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: topSt
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "leftClass",
        style: this.props.leftStyle
      }, this.props.leftTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_List_js__WEBPACK_IMPORTED_MODULE_2__.List, {
        list: this.state.leftValues,
        ref: this.leftRef,
        onChange: this.leftHandleChange,
        keyname: "left",
        style: listSt
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: colSt
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        name: "moveRightSelect",
        style: buttonSt,
        onClick: this.moveRightSelectButton
      }, ">"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        name: "moveRightAll",
        style: buttonSt,
        onClick: this.moveRightAllButton
      }, ">>"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        name: "moveLeftSelect",
        style: buttonSt,
        onClick: this.moveLeftSelectButton
      }, "<"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        name: "moveLeftAll",
        style: buttonSt,
        onClick: this.moveLeftAllButton
      }, "<<"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "rightClass",
        style: this.props.rightStyle
      }, this.props.rightTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_List_js__WEBPACK_IMPORTED_MODULE_2__.List, {
        list: this.state.rightValues,
        ref: this.rightRef,
        onChange: this.rightHandleChange,
        keyname: "right",
        style: listSt
      }))));
    }
  }, {
    key: "reportChange",
    value: function reportChange(right) {
      // dont modify 'e', a Synthetic Event
      this.props.onChange({
        target: {
          name: this.props.name,
          value: right
        }
      });
    }
  }, {
    key: "add",
    value: function add(a, b) {
      var ans = _toConsumableArray(a);

      for (var i = 0; i < b.length; i++) {
        ans.push(b[i]);
      }

      return ans;
    }
  }, {
    key: "sub",
    value: function sub(a, b) {
      var ans = [];

      for (var i = 0; i < a.length; i++) {
        if (!b.includes(a[i])) ans.push(a[i]);
      }

      return ans;
    }
  }, {
    key: "moveRightSelectButton",
    value: function moveRightSelectButton(e) {
      var _this2 = this;

      var right = this.add(this.state.rightValues, this.state.leftSelections);
      var left = this.sub(this.state.leftValues, right);
      this.setState({
        leftValues: left,
        rightValues: right,
        leftSelections: []
      }, function () {
        _this2.reportChange(right);
      });
      this.clearSelections();
    }
  }, {
    key: "clearSelections",
    value: function clearSelections() {
      var leftBox = this.leftRef.current;
      var rightBox = this.rightRef.current;

      for (var i = 0; i < leftBox.length; i++) {
        leftBox[i].selected = false;
      }

      for (var _i = 0; _i < rightBox.length; _i++) {
        rightBox[_i].selected = false;
      }
    }
  }, {
    key: "moveLeftSelectButton",
    value: function moveLeftSelectButton(e) {
      var _this3 = this;

      var left = this.add(this.state.leftValues, this.state.rightSelections);
      var right = this.sub(this.state.rightValues, left);
      this.setState({
        leftValues: left,
        rightValues: right,
        rightSelections: []
      }, function () {
        _this3.reportChange(right);
      });
      this.clearSelections();
    }
  }, {
    key: "moveRightAllButton",
    value: function moveRightAllButton(e) {
      var _this4 = this;

      var left = this.state.leftValues;

      var right = _toConsumableArray(this.state.rightValues);

      for (var i = 0; i < left.length; i++) {
        right.push(left[i]);
      }

      this.setState({
        leftValues: [],
        rightValues: right,
        leftSelections: []
      }, function () {
        _this4.reportChange(right);
      });
    }
  }, {
    key: "moveLeftAllButton",
    value: function moveLeftAllButton(e) {
      var _this5 = this;

      var left = _toConsumableArray(this.state.leftValues);

      var right = this.state.rightValues;

      for (var i = 0; i < right.length; i++) {
        left.push(right[i]);
      }

      this.setState({
        leftValues: left,
        rightValues: [],
        rightSelections: []
      }, function () {
        _this5.reportChange([]);
      });
    }
  }, {
    key: "leftHandleChange",
    value: function leftHandleChange(e) {
      if (typeof e === 'string') return; // Passed in by Radio, can be ignored, next event has target.name

      if (typeof e.preventDefault === 'function') {
        e.preventDefault();
      }

      var leftBox = this.leftRef.current;
      var values = [];

      for (var i = 0; i < leftBox.length; i++) {
        if (leftBox[i].selected === true) {
          values.push(leftBox[i].value);
        }
      }

      this.setState({
        leftSelections: values
      });
    }
  }, {
    key: "rightHandleChange",
    value: function rightHandleChange(e) {
      if (typeof e === 'string') return; // Passed in by Radio, can be ignored, next event has target.name

      if (typeof e.preventDefault === 'function') {
        e.preventDefault();
      }

      var rightBox = this.rightRef.current;
      var values = [];

      for (var i = 0; i < rightBox.length; i++) {
        if (rightBox[i].selected === true) {
          values.push(rightBox[i].value);
        }
      }

      this.setState({
        rightSelections: values
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.choices.length === 0) {
        return reset(props, state);
      }

      for (var i = 0; i < props.choices.length; i++) {
        if (props.choices[i] !== state.choices[i]) {
          return reset(props, state);
        }
      }

      return null;
    }
  }]);

  return DoubleListBox;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));



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
/* harmony import */ var _Theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Theme.js */ "./src/Theme.js");
/* harmony import */ var _modal_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.css */ "./src/modal.css");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var defProps = {
  show: true,
  closeFunct: function closeFunct() {},
  message: 'No Error message given',
  buttonStyle: _objectSpread({}, _Theme_js__WEBPACK_IMPORTED_MODULE_2__.buttonStyle)
};

var ErrorModal = function ErrorModal(inProps) {
  var props = _objectSpread(_objectSpread({}, defProps), inProps);

  if ('show' in inProps === false) {
    console.error('ErrorModal: The show property is not present');
  }

  if ('closeFunct' in inProps === false) {
    console.error('ErrorModal: The closeFunct property is not present');
  }

  var marginStyle = {
    marginBottom: "10px"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, props.show === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Modal_js__WEBPACK_IMPORTED_MODULE_1__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    style: marginStyle
  }, "Error"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, props.message === '' ? defProps.message : props.message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    name: "ok",
    onClick: function onClick() {
      return props.closeFunct(false);
    },
    style: props.buttonStyle
  }, "OK"))) : null);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorModal);

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
/* harmony export */   "copyStyle": () => (/* binding */ copyStyle),
/* harmony export */   "processInvalidStyleScreen": () => (/* binding */ processInvalidStyleScreen),
/* harmony export */   "processStyleScreen": () => (/* binding */ processStyleScreen),
/* harmony export */   "clearInvalidScreenOnly": () => (/* binding */ clearInvalidScreenOnly),
/* harmony export */   "processInvalidStyleTable": () => (/* binding */ processInvalidStyleTable),
/* harmony export */   "processStyleTable": () => (/* binding */ processStyleTable),
/* harmony export */   "validStyling": () => (/* binding */ validStyling),
/* harmony export */   "invalidStyling": () => (/* binding */ invalidStyling),
/* harmony export */   "isInvalid": () => (/* binding */ isInvalid),
/* harmony export */   "getInvalidMessage": () => (/* binding */ getInvalidMessage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Theme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Theme.js */ "./src/Theme.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
 * This will copy another style of the form:
 *
 *  const someStyle = {
 *    cssname: cssvalue;
 *  };
 *
 * @param {*} copyStyle the style to copy
 *
 ***********************************************************************************************/

var copyStyle = function copyStyle(_copyStyle) {
  var style = _objectSpread({}, _copyStyle); // Copy the style and set the background color to normal


  style.backgroundColor = _Theme_js__WEBPACK_IMPORTED_MODULE_1__.defaultThemeSettings.normalColor;
  return style;
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
 * @param {*} style         the style that is to be copied.  This parameter is optional and
 *                          is only there if the style is to be copied and used.
 *
 ***********************************************************************************************/

var processInvalidStyleScreen = function processInvalidStyleScreen(invalidValues, constant) {
  var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var newStyle = null; // The copied style that a background will be added

  var backColor = _Theme_js__WEBPACK_IMPORTED_MODULE_1__.defaultThemeSettings.normalColor; // The background color of the component

  if (style === null) {
    // No style given, so use the valid styling
    newStyle = validStyling();
  } else {
    // A style is present
    if (style.hasOwnProperty('backgroundColor')) {
      // Check to see if there already is a background color
      backColor = style.backgroundColor;
    } else {
      // No background color exists for the component
      backColor = _Theme_js__WEBPACK_IMPORTED_MODULE_1__.defaultThemeSettings.normalColor;
    }

    newStyle = copyStyle(style);
    newStyle.backgroundColor = backColor;
  } // Set the background color based on whether the value is invalid or not


  newStyle.backgroundColor = invalidValues[constant].validity === true ? _Theme_js__WEBPACK_IMPORTED_MODULE_1__.defaultThemeSettings.errorColor : backColor;
  return newStyle;
};
/***********************************************************************************************
 *
 * This will determine if the style should change to the background color to the invalid color
 * because the input table item has an invalid value.
 *
 * @param {*} invalidValues list of invalid inputs
 * @param {*} constant      indicates which of the input items is invalid (the index
 *                          into the array)
 * @param {*} style         the style to change the backgound
 *
 ***********************************************************************************************/

var processStyleScreen = function processStyleScreen(invalidValues, constant, style) {
  style.backgroundColor = invalidValues[constant].validity === true ? _Theme_js__WEBPACK_IMPORTED_MODULE_1__.defaultThemeSettings.errorColor : _Theme_js__WEBPACK_IMPORTED_MODULE_1__.defaultThemeSettings.normalColor;
  return style;
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
 * @param {*} style         the style that is to be copied.  This parameter is optional and
 *                          is only there if the style is to be copied and used.
 *
 ***********************************************************************************************/

var processInvalidStyleTable = function processInvalidStyleTable(invalidValues, constant, pos) {
  var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var newStyle = null; // The copied style that a background will be added

  var backColor = _Theme_js__WEBPACK_IMPORTED_MODULE_1__.defaultThemeSettings.normalColor; // The background color of the component

  if (style === null) {
    // No style given, so use the valid styling
    newStyle = validStyling();
  } else {
    // A style is present
    if (style.hasOwnProperty('backgroundColor')) {
      // Check to see if there already is a background color
      backColor = style.backgroundColor;
    } else {
      // No background color exists for the component
      backColor = _Theme_js__WEBPACK_IMPORTED_MODULE_1__.defaultThemeSettings.normalColor;
    }

    newStyle = copyStyle(style);
    newStyle.backgroundColor = backColor;
  } // Spin through the validity array for that item in the invalid values array


  for (var j = 0; j < invalidValues[constant].validity.length; j++) {
    if (pos === invalidValues[constant].index[j]) {
      // Check to see if it is the correct index
      if (invalidValues[constant].validity[j] === true) {
        // and the entry is invalid
        newStyle.backgroundColor = _Theme_js__WEBPACK_IMPORTED_MODULE_1__.defaultThemeSettings.errorColor;
      } else {
        // Entry is valid
        newStyle.backgroundColor = backColor;
      }
    }
  }

  return newStyle;
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
 * @param {*} style         the style to change the backgound
 *
 ***********************************************************************************************/

var processStyleTable = function processStyleTable(invalidValues, constant, pos, style) {
  // Spin through the validity array for that item in the invalid values array
  for (var j = 0; j < invalidValues[constant].validity.length; j++) {
    if (pos === invalidValues[constant].index[j]) {
      // Check to see if it is the correct index
      if (invalidValues[constant].validity[j] === true) {
        // and the entry is invalid
        style.backgroundColor = _Theme_js__WEBPACK_IMPORTED_MODULE_1__.defaultThemeSettings.errorColor;
      }
    }
  }

  return style;
};
/**********************************************************************************************
 *
 * This will create a style with a normal background color, this a valid style.
 *
 **********************************************************************************************/

var validStyling = function validStyling() {
  return {
    backgroundColor: _Theme_js__WEBPACK_IMPORTED_MODULE_1__.defaultThemeSettings.normalColor
  };
};
/**********************************************************************************************
 *
 * This will create a style with a invalid background color, this a invalid style.
 *
 **********************************************************************************************/

var invalidStyling = function invalidStyling() {
  return {
    backgroundColor: _Theme_js__WEBPACK_IMPORTED_MODULE_1__.defaultThemeSettings.errorColor
  };
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
var _excluded = ["list", "choices", "size", "value"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var hasProperty = function hasProperty(obj, propName) {
  return !!Object.getOwnPropertyDescriptor(obj, propName);
};

var _Choice = function _Choice(propsIn, ref) {
  var list = propsIn.list,
      choices = propsIn.choices,
      size = propsIn.size,
      value = propsIn.value,
      props = _objectWithoutProperties(propsIn, _excluded); // Value should not be a prop, take it out and ignore it.


  var siz = size || 10;
  var opt = list || choices || [];
  var keyPart = hasProperty(props, 'keyName') ? props.keyName + '_' : '';
  var pref = hasProperty(props, 'name') ? props.name + '_' + keyPart : '';

  if (typeof props.value == 'string' && !opt.includes(props.value)) {
    console.log("Adding missing default value: '".concat(props.value, "' to ").concat(opt));
    opt.unshift(props.value);
  }

  var genOptionJSX = function genOptionJSX(value, pref, el, key) {
    if (el === value || Array.isArray(value) && value.includes(el)) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        key: pref + key,
        value: el,
        selected: true
      }, el);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      key: pref + key,
      value: el
    }, el);
  };

  if (props.multiple) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", _extends({
      ref: ref,
      multiple: true,
      size: siz
    }, props), opt.map(function (el, k) {
      return genOptionJSX(value, pref, el, k);
    })));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", _extends({
      ref: ref
    }, props), opt.map(function (el, k) {
      return genOptionJSX(value, pref, el, k);
    })));
  }
};

var _List = function _List(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Choice, _extends({
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
    var modalRoot = document.getElementById('modal');
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_autobind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-autobind */ "./node_modules/react-autobind/index.js");
/* harmony import */ var react_autobind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_autobind__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _excluded = ["selectedValue", "text", "style", "children"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



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

var Radio = /*#__PURE__*/function (_React$Component) {
  _inherits(Radio, _React$Component);

  var _super = _createSuper(Radio);

  function Radio(props) {
    var _this;

    _classCallCheck(this, Radio);

    _this = _super.call(this, props);
    react_autobind__WEBPACK_IMPORTED_MODULE_1___default()(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Radio, [{
    key: "handle",
    value: function handle(e) {
      if (typeof e.preventDefault === 'function') e.preventDefault();
      e.target.name = this.props.name;
      e.target.value = this.props.selectedValue;
      this.props.onChange(e);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          selectedValue = _this$props.selectedValue,
          text = _this$props.text,
          style = _this$props.style,
          children = _this$props.children,
          rest = _objectWithoutProperties(_this$props, _excluded);

      var isChecked = this.props.value === selectedValue;
      var symbol = isChecked ? checked : unchecked;
      var defaultStyle = {
        border: 'none',
        backgroundColor: 'white',
        borderRadius: '25px'
      };

      var st = _objectSpread(_objectSpread({}, defaultStyle), style);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Frag, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", _extends({
        type: "button",
        onClick: this.handle,
        style: st
      }, rest), symbol, text, children));
    }
  }]);

  return Radio;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component)); // 2018-10-10 {text} {children} moved to inside button clickable area


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
/* harmony import */ var _table_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table.css */ "./src/table.css");
/* harmony import */ var _mousehover_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mousehover.css */ "./src/mousehover.css");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint react/prop-types: 0 */









var upper = _toConsumableArray('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

var lower = _toConsumableArray('abcdefghijklmnopqrstuvwxyz');

var digit = _toConsumableArray('0123456789');

var hasProperty = function hasProperty(obj, propName) {
  return !!Object.getOwnPropertyDescriptor(obj, propName);
};
/****************************************************************************
 *
 * This will allow the user to add a filter / search bar to a table in case
 * not all the data is displayed at once.  It will also allow a column to be
 * sorted by clicking on it.
 *
 ****************************************************************************/


var SearchSortTable = function SearchSortTable(propsPassed) {
  var Theme = _objectSpread({}, _Theme_js__WEBPACK_IMPORTED_MODULE_5__.defaultThemeSettings); // let iter = Object.keys(row)       // also works when row === ["hello", "there"]


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
  var SRCHHDR = 2; // Set the state variables

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      start = _useState2[0],
      setStart = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(hasProperty(props, 'showAll') === true ? props.data.length : props.MAX_ITEMS),
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


  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(hasProperty(props, 'showAll') === true ? props.data.length : props.MAX_ITEMS),
      _useState24 = _slicedToArray(_useState23, 2),
      maxItems = _useState24[0],
      setMaxItems = _useState24[1]; // Maximum number of rows to display in the table


  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(hasProperty(props, 'showAll') === true ? props.data.length : props.MAX_ITEMS),
      _useState26 = _slicedToArray(_useState25, 2),
      maximum = _useState26[0],
      setMaximum = _useState26[1]; // Maximum number of rows selected by the user to display in the table


  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState28 = _slicedToArray(_useState27, 2),
      filter = _useState28[0],
      setFilter = _useState28[1]; // The values for each column to be filtered


  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState30 = _slicedToArray(_useState29, 2),
      filterOn = _useState30[0],
      setFilterOn = _useState30[1]; // Indicates whether the user has checked the Filter On check box or not


  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_toConsumableArray(props.data)),
      _useState32 = _slicedToArray(_useState31, 2),
      copyData = _useState32[0],
      setCopyData = _useState32[1]; // Copies the main data to another storage area


  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState34 = _slicedToArray(_useState33, 2),
      filterDisabled = _useState34[0],
      setFilterDisabled = _useState34[1]; // Indicates whether the filtering is enabled or disabled (Filter button)


  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(invalidArray),
      _useState36 = _slicedToArray(_useState35, 2),
      invalid = _useState36[0],
      setInvalid = _useState36[1];

  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState38 = _slicedToArray(_useState37, 2),
      alertMessage = _useState38[0],
      setAlertMessage = _useState38[1];

  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState40 = _slicedToArray(_useState39, 2),
      showAlert = _useState40[0],
      setShowAlert = _useState40[1]; // TODO: setLength is called but length is never used ???

  /* eslint-disable no-unused-vars */


  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState42 = _slicedToArray(_useState41, 2),
      length = _useState42[0],
      setLength = _useState42[1]; // The length of the data

  /* eslint-enable no-unused-vars */

  /******************************************************************************
   *
   * Called to populate the header drop down
   *
   ******************************************************************************/

  /*
     Style 1
  */
  // eslint-disable-next-line react-hooks/exhaustive-deps


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(populateSearch, []); // only do this when component mounts

  /*
     Style 2
  
      useEffect (() => {
        populateSearch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);    // only do this when component mounts
  */

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setCopyData(_toConsumableArray(props.data));
    setLength(props.data.length);
    setDisable(0);
  }, [props.data]);

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

    var localFilter = []; // The values in the filter input boxes

    var search = ['']; // The values for the drop down
    // Build the items for the drop down, the sort order, and the filter

    for (var i = 0; i < props.table.length; i++) {
      if (props.table[i].search === true) {
        search.push(props.table[i].header);
      }

      order.push('N');

      if (hasProperty(props, 'nofilter') === false) {
        localFilter.push('');
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
  // The style used to render the search bar and table


  var divStyle = {
    border: "2px solid black",
    borderRadius: "10px",
    textAlign: "center",
    margin: "5px",
    padding: "10px",
    backgroundColor: Theme.backgroundColor // "#CCCC66",

  };

  if (hasProperty(props, 'divStyle') === true) {
    divStyle = props.divStyle;
  }

  var buttonStyle = {
    margin: "10px",
    borderRadius: "10px",
    color: Theme.buttonTextColor,
    backgroundColor: Theme.buttonColor,
    width: "100px",
    height: "30px",
    font: Theme.buttonFont,
    fontWeight: "bold"
  };

  if (hasProperty(props, 'buttonStyle') === true) {
    buttonStyle = props.buttonStyle;
  }

  var noButtonStyle = {
    margin: "10px",
    padding: "0px",
    border: "none",
    background: "none",
    fontWeight: "bold",
    color: "black"
  };
  var marginStyle = {
    marginTop: "10px",
    marginBottom: "10px",
    marginLeft: "10px",
    marginRight: "30px"
  };
  var noBorderStyle = {
    margin: "10px",
    padding: "0px",
    border: "none",
    background: "none"
  };
  var tableStyle = {
    // The style for the table
    margin: "auto",
    border: "1px solid black",
    position: "relative"
  };

  if (hasProperty(props, 'tableStyle') === true) {
    tableStyle = props.tableStyle;
  }

  var centerBoldStyle = {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "20px"
  };

  if (hasProperty(props, 'headerTableStyle') === true) {
    centerBoldStyle = props.headerTableStyle;
  }

  var footerStyle = {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "20px",
    border: "1px solid black"
  };

  if (hasProperty(props, 'footerStyle') === true) {
    footerStyle = props.footerStyle;
  }

  var scrollStyle = {
    display: "block",
    overflow: "scroll",
    height: hasProperty(props, 'height') == true ? props.height : "auto",
    width: hasProperty(props, 'width') == true ? props.width : "auto",
    border: "1px solid black",
    marginLeft: "auto",
    marginRight: "auto"
  };
  var tableDivStyle = {};

  if (hasProperty(props, 'scroll') === true) {
    if (hasProperty(props, 'scrollStyle') === true) {
      tableDivStyle = props.scrollStyle;
    } else {
      tableDivStyle = scrollStyle;
    }
  }

  var searchStyle = {
    margin: "5px",
    backgroundColor: Theme.normalColor
  };
  var footStyle = {
    margin: "10px",
    textAlign: "right",
    //        position: "sticky",
    bottom: 0,
    zIndex: 2,
    backgroundColor: Theme.backgroundColor
  };

  if (hasProperty(props, 'footStyle') === true) {
    footStyle = props.footStyle;
  }

  var genButtonStyle = (0,_Theme_js__WEBPACK_IMPORTED_MODULE_5__.generateButton)(buttonStyle, props.error, false, 'gray');
  var genTopButtonStyle = (0,_Theme_js__WEBPACK_IMPORTED_MODULE_5__.generateButton)(noButtonStyle, props.error, topDisabled, 'gray');
  var genPreviousButtonStyle = (0,_Theme_js__WEBPACK_IMPORTED_MODULE_5__.generateButton)(noButtonStyle, props.error, previousDisabled, 'gray');
  var genNextButtonStyle = (0,_Theme_js__WEBPACK_IMPORTED_MODULE_5__.generateButton)(noButtonStyle, props.error, nextDisabled, 'gray');
  var genBottomButtonStyle = (0,_Theme_js__WEBPACK_IMPORTED_MODULE_5__.generateButton)(noButtonStyle, props.error, bottomDisabled, 'gray');
  var genFilterButtonStyle = (0,_Theme_js__WEBPACK_IMPORTED_MODULE_5__.generateButton)(buttonStyle, props.error, filterDisabled, 'gray');
  var topSymbol = "|\u2BC7"; // Bar and left triangle

  var previousSymbol = "\u2BC7"; // Left triangle

  var nextSymbol = "\u2BC8"; // Right triangle

  var bottomSymbol = "\u2BC8|"; // Right triangle and bar
  // Populate the table with the next set of data to populate

  var showData = [];

  if (props.data !== undefined && props.data !== null) {
    for (var i = start; i < end && i < props.data.length; i++) {
      showData.push(props.data[i]);
    }
  }

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

    letters = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      key: "letters"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), letterDigit.map(alphabet), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null));
  }

  var topButtonHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null);

  if (hasProperty(props, 'notop') === false && hasProperty(props, 'showAll') === false) {
    topButtonHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      name: "top",
      style: genTopButtonStyle,
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
      style: genPreviousButtonStyle,
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
      style: genNextButtonStyle,
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
      style: genBottomButtonStyle,
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
      style: genBottomButtonStyle,
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
          style: props.titleStyle
        }, props.title);
      } else if (props.titleSize === '2') {
        title = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
          style: props.titleStyle
        }, props.title);
      } else {
        title = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
          style: props.titleStyle
        }, props.title);
      }
    } else {
      title = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
        style: props.titleStyle
      }, props.title);
    }
  }

  var filterSection = hasProperty(props, 'nofilter') === true ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CheckBox_js__WEBPACK_IMPORTED_MODULE_1__.default, {
    selectedValue: "Y",
    name: "filterOn",
    text: "\xA0\xA0\xA0Filter On",
    value: filterOn,
    onChange: function onChange(event) {
      return processFilterOn(event.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    name: "filter",
    style: genFilterButtonStyle,
    onClick: function onClick() {
      return filterButton();
    },
    disabled: props.error || filterDisabled
  }, "Filter"));
  searchStyle = (0,_Invalid_js__WEBPACK_IMPORTED_MODULE_3__.processStyleScreen)(invalid, SRCHHDR, searchStyle);
  var itemStyle = (0,_Invalid_js__WEBPACK_IMPORTED_MODULE_3__.validStyling)();
  itemStyle = (0,_Invalid_js__WEBPACK_IMPORTED_MODULE_3__.processStyleScreen)(invalid, SRCHITEM, itemStyle);
  var searchSection = hasProperty(props, 'nosearch') === true ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "checkForError"
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
    style: searchStyle,
    disabled: props.error
  }), (0,_Invalid_js__WEBPACK_IMPORTED_MODULE_3__.isInvalid)(invalid[SRCHHDR], -1) === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "errMessage"
  }, invalid[SRCHHDR].message) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "checkForError"
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
    style: itemStyle,
    disabled: props.error
  }), (0,_Invalid_js__WEBPACK_IMPORTED_MODULE_3__.isInvalid)(invalid[SRCHITEM], -1) === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "errMessage"
  }, invalid[SRCHITEM].message) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    name: "searchButtonName",
    style: genButtonStyle,
    onClick: function onClick() {
      return searchItemButton();
    },
    disabled: props.error
  }, "Search"));
  var footer = hasProperty(props, 'nofooter') === true ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: footStyle
  }, hasProperty(props, 'norows') === true ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: marginStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_List_js__WEBPACK_IMPORTED_MODULE_2__.Choice, {
    choices: rowValues,
    name: "rows",
    value: maximum,
    onChange: function onChange(event) {
      return processMaxItems(event.target.value);
    },
    style: noBorderStyle,
    disabled: props.error
  }), "rows"), topButtonHTML, previousButtonHTML, hasProperty(props, 'nodisplay') === true ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, start + ' - ' + end + ' of ' + props.data.length), nextButtonHTML, bottomButtonHTML);
  var hoverClassName = null;

  if (hasProperty(props, 'hover') === true) {
    var root = document.documentElement;
    var hoverBackColor = 'cyan';
    var found = false;

    if (hasProperty(props, 'hoverColor') === true) {
      hoverBackColor = props.hoverColor;
    }

    for (var _i2 = 1; _i2 <= 10 && found === false; _i2++) {
      var colorValue = getComputedStyle(root).getPropertyValue("--hover_back_color".concat(_i2));

      if (colorValue === ' none') {
        root.style.setProperty("--hover_back_color".concat(_i2), hoverBackColor);
        hoverClassName = "search_sort_table".concat(_i2);
        found = true;
      } else if (colorValue === hoverBackColor) {
        hoverClassName = "search_sort_table".concat(_i2);
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
      style: divStyle
    }, title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, hasProperty(props, 'sfbottom') === false ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, filterSection, searchSection, allButtonHTML, letters) : null), props.data.length === 0 && hasProperty(props, 'showtable') === false ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "No Data to Display") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: tableDivStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
      style: tableStyle,
      className: hoverClassName
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: "header",
      style: centerBoldStyle
    }, props.table.map(buildHeaders)), showData.map(props.eachRowInTable), hasProperty(props, 'footer') === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      style: footerStyle
    }, props.footer.map(buildFooter)) : null))), footer, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, hasProperty(props, 'sfbottom') === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, filterSection, searchSection, allButtonHTML, letters) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AlertModal_js__WEBPACK_IMPORTED_MODULE_4__.default, {
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
    setStartEnd(0);
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
    var header = row.header; // let filterKey = 'filter_' + i;

    var filterName = row.header + '_filter';
    var headerStyle = {
      position: "sticky",
      flexDirection: "column",
      top: 0,
      zIndex: 2,
      border: "1px solid black",
      backgroundColor: Theme.backgroundColor
    };

    if (hasProperty(props, 'headerStyle') === true) {
      headerStyle = props.headerStyle;
    }

    var widthStyle = {
      marginBottom: "0px",
      paddingBottom: "0px",
      width: "99%",
      textAlign: "center"
    };

    if (props.table[i].sort === true && sortOrder[i] !== 'N') {
      // After the sort was done, it flips the sort order; therefore, if it is
      // now a D, that means it was sorted in ascending order previously.  If
      // it is now an A, that means it was sorted in descending order previously.
      if (sortOrder[i] === 'D') {
        header = row.header + " \u2BC5"; // Up arrow
      } else {
        header = row.header + " \u2BC6"; // Down arrow
      }
    } // Filter is turned on


    if (filterOn === 'Y' && hasProperty(props, 'nofilter') === false) {
      var filterStyle = (0,_Invalid_js__WEBPACK_IMPORTED_MODULE_3__.copyStyle)(widthStyle);
      filterStyle.backgroundColor = Theme.normalColor;
      filterStyle = (0,_Invalid_js__WEBPACK_IMPORTED_MODULE_3__.processStyleScreen)(invalid, FILTER, filterStyle);

      if (row.sort === false || hasProperty(props, 'nosort') === true) {
        // No sorting, so no onClick handler
        if (row.search === false) {
          // No searching on this field, so no filtering on it also
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
            key: key,
            style: headerStyle
          }, row.header); // Display the header only
        } else {
          // Can filter; therefore, display the input field
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
            key: key,
            style: headerStyle
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, row.header), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
            className: "checkForError"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
            type: "text",
            style: filterStyle,
            name: filterName,
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
            onClick: function onClick() {
              return sortClicked(row.name, 'X');
            },
            style: headerStyle
          }, header);
        } else {
          // Searching and filtering is allowed
          return (
            /*#__PURE__*/
            // Display header and input field for filtering
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
              key: key,
              onClick: function onClick() {
                return sortClicked(row.name, 'X');
              },
              style: headerStyle
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, header), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
              className: "checkForError"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
              type: "text",
              style: filterStyle,
              name: filterName,
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
        style: headerStyle
      }, row.header); // Display the header only
    } else {
      // Soring on the column is allowed
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
        key: key,
        onClick: function onClick() {
          return sortClicked(row.name, 'X');
        },
        style: headerStyle
      }, header);
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
        style: footerStyle
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
      var data = props.data; // Build the index to make it easier to copy the filtered data back

      for (var _i3 = 0; _i3 < props.data.length; _i3++) {
        data[_i3]['filterIndex'] = _i3;
      }

      setCopyData(_toConsumableArray(data)); // Store a copy of the main data

      setFilterDisabled(false); // Enable the filter button
    } else {
      var _data = props.data; // The filtered data

      var len = props.data.length; // Length of the filtered data

      var localCopyData = _toConsumableArray(copyData); // Copy of the main data
      // Copy the filtered data back to the main copied data using the filter index


      for (var _i4 = 0; _i4 < len; _i4++) {
        localCopyData[_data[_i4].filterIndex] = _data[_i4];
      }

      _data.splice(0, len); // Remove the filtered data
      // Replace the filtered data with the main data


      for (var _i5 = 0; _i5 < localCopyData.length; _i5++) {
        _data.push(localCopyData[_i5]);
      }

      setLength(props.data.length); // Used to re-render the screen

      setFilterDisabled(true); // Disable the filter button

      setStart(0);
      setEnd(hasProperty(props, 'showAll') === true || props.data.length < maxItems ? props.data.length : maxItems);
    }
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


    local[i] = value;
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

    for (var _i6 = 0; _i6 < filter.length; _i6++) {
      if (filter[_i6] !== '') {
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

    var indexes = []; // List of indexes that indicate which filter input boxes have data

    var found = []; // Indicates whether that filter input box found data to filter

    var count = 0; // counts the number of filtered data

    var done = false; // Indicates that we are done filtering that data element
    // Build the indexes in which the user entered data in the filter input box

    for (var _i7 = 0; _i7 < props.table.length; _i7++) {
      if (filter[_i7] !== '') {
        indexes.push(_i7);
      }
    } // Check for the dateTable in the props


    var areDates = false;

    if (props.hasOwnProperty('dateTable')) {
      areDates = true;
    }

    var foundDate = false;
    var dateIndex = -1; // Spin through the data and see if it meets the filter criteria

    for (var _i8 = 0; _i8 < data.length; _i8++) {
      found = []; // Empty the found array for the next data element

      done = false; // Spin through the filter input boxes to see if the data element matches

      for (var j = 0; j < indexes.length && done === false; j++) {
        if (areDates === true) {
          foundDate = false;
          dateIndex = -1; // Find if the index is in the date table

          for (var k = 0; k < props.dateTable.length; k++) {
            if (props.dateTable[k].index === indexes[j]) {
              foundDate = true;
              dateIndex = k;
            }
          }
        } // The data field is blank or has no value


        if (data[_i8][props.table[indexes[j]].name] === null) {
          found.push(false);
          done = true;
        } else if (foundDate === true) {
          // The field contains a date
          var dataPart = null;
          var filterPart = null; // Convert the format for the data part

          if (props.dateTable[dateIndex].data === 'MM/DD/YYYY') {
            dataPart = convertDate(data[_i8][props.table[indexes[j]].name], '/');
          } else if (props.dateTable[dateIndex].data === 'MM-DD-YYYY') {
            dataPart = convertDate(data[_i8][props.table[indexes[j]].name], '-');
          } else if (props.dateTable[dateIndex].data === 'MM/DD/YYYY HH:MM:SS') {
            dataPart = convertDateTime(data[_i8][props.table[indexes[j]].name], '/');
          } else if (props.dateTable[dateIndex].data === 'MM-DD-YYYY HH:MM:SS') {
            dataPart = convertDateTime(data[_i8][props.table[indexes[j]].name], '-');
          } else if (props.dateTable[dateIndex].data === 'YYYY-MM-DDTHH:MM:SS.SSS') {
            dataPart = convertDateTimeReg(data[_i8][props.table[indexes[j]].name]);
          } else {
            dataPart = data[_i8][props.table[indexes[j]].name];
          } // Convert the format for the filter part


          if (props.dateTable[dateIndex].filter === 'MM/DD/YYYY') {
            filterPart = convertDate(filter[indexes[j]], '/');
          } else if (props.dateTable[dateIndex].filter === 'MM-DD-YYYY') {
            filterPart = convertDate(filter[indexes[j]], '-');
          } else if (props.dateTable[dateIndex].filter === 'MM/DD/YYYY HH:MM:SS') {
            filterPart = convertDateTime(filter[indexes[j]], '/');
          } else if (props.dateTable[dateIndex].filter === 'MM-DD-YYYY HH:MM:SS') {
            filterPart = convertDateTime(filter[indexes[j]], '-');
          } else if (props.dateTable[dateIndex].filter === 'YYYY-MM-DDTHH:MM:SS.SSS') {
            filterPart = convertDateTimeReg(filter[indexes[j]]);
          } else {
            filterPart = filter[indexes[j]];
          }

          if (dataPart === filterPart) {
            // Compare the dates
            found.push(true);
          } else {
            // Dates are not equal
            found.push(false);
            done = true;
          } // The data element matches one of the filter input boxes

        } else if (data[_i8][props.table[indexes[j]].name].toString().indexOf(filter[indexes[j]].toString()) !== -1) {
          found.push(true); // Place a true in the found array indicating the filter input box matched
        } else {
          // The data element did not match the filter input box
          found.push(false);
          done = true; // Since a match was not found the data element will not meet the filter criteria
        }
      } // Check to see if the data element met all the filter criteria


      var move = true; // Spin through found array making sure all values are true.  If they are, the data element
      // matches the filter criteria

      for (var _k = 0; _k < found.length && move === true; _k++) {
        if (found[_k] === false) {
          // False was found, so the data element does not match filter criteria
          move = false;
        }
      } // Data element matches the filter criteria, so place the data in the filtered data area


      if (move === true) {
        newData.push(data[_i8]);
        count++;
      }
    }

    if (count > 0) {
      // There are filtered data elements
      var _length = props.data.length; // Copy the filtered data elements to the end of main data area

      for (var _i9 = 0; _i9 < newData.length; _i9++) {
        data.push(newData[_i9]);
      }

      data.splice(0, _length); // Remove the data at the beginning of the data area

      setLength(newData.length); // Used to re-render the screen

      setStartEnd(0); // Set the start and end values
    }
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


  function convertDate(date, _char) {
    var split = date.split(_char);
    return "".concat(split[2], "-").concat(split[0], "-").concat(split[1]);
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


  function convertDateTime(date, _char2) {
    var dateTime = date.split(' ');
    var localDate = dateTime[0].split(_char2);
    return "".concat(split[2], "-").concat(split[0], "-").concat(split[1], "T").concat(dateTime[1]);
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

    for (var _i10 = begin; _i10 < props.data.length && found === false; _i10++) {
      if (props.data[_i10][name].toString().startsWith(search)) {
        // Item was found
        found = true;
        setStartEnd(_i10); // Set the start and end positions of the data on the screen.
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

    for (var _i11 = begin; _i11 < props.data.length && found === false; _i11++) {
      if (props.data[_i11][name].toString().indexOf(search) !== -1) {
        // Item was found
        found = true;
        setStartEnd(_i11); // Set the start and end positions of the data on the screen.
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


  function sortClicked(name, orderType) {
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
      } else {
        ordering = order[index];
      }
    }

    props.data.sort(function (item1, item2) {
      // Convert to upper case if ignoring case
      if (typeof item1[name] === 'string' && hasProperty(props, 'ignorecase') === true) {
        item1[name] = item1[name] !== null ? item1[name].toUpperCase() : null;
        item2[name] = item2[name] !== null ? item2[name].toUpperCase() : null;
      } // Make the comparison


      if (item1[name] < item2[name]) {
        return ordering === 'A' ? -1 : 1;
      } else if (item1[name] > item2[name]) {
        return ordering === 'A' ? 1 : -1;
      } else {
        return 0; // Equal
      }
    });

    if (orderType !== 'A') {
      // Reverse the sort order
      if (order[index] === 'A') {
        order[index] = 'D';
      } else {
        order[index] = 'A';
      }
    }

    setSortOrder(order);
    setStartEnd(0);
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
        return letterLink("".concat(row));
      }
    }, row), "\xA0\xA0");
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


  function letterLink(letter) {
    if (validate('H') === true) {
      // Validate that a search header was entered
      // Used to get the field name of the data item
      var index = props.table.map(function (e) {
        return e.header;
      }).indexOf(searchHeader); // Column match

      sortClicked(props.table[index].name, 'A'); // ascending order
      // Find the beginning of the letter

      var begin = 0; // Where the beginning of the letter is

      var _found = false; // Indicates that the letter was found

      for (begin = 0; begin < props.data.length; begin++) {
        // Letter or digit is found
        if (props.data[begin][props.table[index].name] !== null && props.data[begin][props.table[index].name].toString().startsWith(letter) === true) {
          _found = true;
          break;
        }
      } // Find the end of the letter


      var stop = 0; // Where the end of the letter is

      for (stop = begin; stop < props.data.length; stop++) {
        // End of the letter or digit is found
        if (props.data[stop][props.table[index].name] !== null && props.data[stop][props.table[index].name].toString().startsWith(letter) === false) {
          break;
        }
      }

      if (_found === true) {
        setStart(begin);
        setEnd(stop);
        hasProperty(props, 'startEnd') === true ? props.startEnd(begin, stop) : null;
        setDisable(begin);
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
    setEnd(props.data.length);
  }
  /*********************************************************************************
   *
   * This will determine if the top, previous, next, or bottom buttons are disabled
   * on the search bar.
   *
   * @param {*} index the current starting index in the data
   *
   *********************************************************************************/


  function setDisable(index) {
    if (index > 0) {
      // Index is past the start of the data, so enable top and previous
      setPreviousDisabled(false);
      setTopDisabled(false);
    } else if (props.data.length - maxItems < 0) {
      // Can not go any further up so disable top and previous
      setPreviousDisabled(true);
      setTopDisabled(true);
    } else {
      // Index is before the start of the data, so disable top and previous
      setPreviousDisabled(true);
      setTopDisabled(true);
    } // Cannot go any further down so disable, next and bottom


    if (index + maxItems >= props.data.length) {
      setNextDisabled(true);
      setBottomDisabled(true);
    } else {
      // Not at the bottom so enable next and bottom
      setNextDisabled(false);
      setBottomDisabled(false);
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


  function setStartEnd(index) {
    if (index !== -1) {
      if (index + maxItems >= props.data.length) {
        // End is past the data
        setStart(index);
        setEnd(props.data.length);
        hasProperty(props, 'startEnd') === true ? props.startEnd(index, props.data.length) : null;
      } else {
        // End is not past the data
        setStart(index);
        setEnd(index + maxItems);
        hasProperty(props, 'startEnd') === true ? props.startEnd(index, index + maxItems) : null;
      }

      setDisable(index);
    }
  }
  /***********************************************************************************
   *
   * This is called when the top button is clicked.  It will set the start and end
   * places in the data, so that it can be determined what to show in the table.
   *
   ***********************************************************************************/


  function topButton() {
    if (maxItems < props.data.length) {
      // Not at the end of the data
      setStart(0);
      setEnd(maxItems);
      hasProperty(props, 'startEnd') === true ? props.startEnd(0, maxItems) : null;
    } else {
      // At the end of the data
      setStart(0);
      setEnd(props.data.length);
      hasProperty(props, 'startEnd') === true ? props.startEnd(0, props.data.length) : null;
    }

    setDisable(0); // Determine which buttons to disable
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
    } else {
      // Not past the beginning of the data
      setStart(index);
      setEnd(index + maxItems);
      hasProperty(props, 'startEnd') === true ? props.startEnd(index, index + maxItems) : null; // Add max items to get the new current end
    }

    setDisable(index); // Determine which buttons to disable
  }
  /***********************************************************************************
   *
   * This is called when the next button is clicked.  It will set the start and end
   * places in the data, so that it can be determined what to show in the table.
   *
   ***********************************************************************************/


  function nextButton() {
    var index = end; // Set the start at the current end of data for the table

    var begin = 0; // Current beginning of the start of the data

    if (index < props.data.length) {
      // Not at the end of the data
      begin = index;
    } else {
      // At the end of the data, so place the beginning at the current start
      begin = props.start;
    }

    if (index + maxItems >= props.data.length) {
      // At the end of the data
      setStart(begin);
      setEnd(props.data.length);
      hasProperty(props, 'startEnd') === true ? props.startEnd(begin, props.data.length) : null;
    } else {
      // Not at the end of the data
      setStart(begin);
      setEnd(index + maxItems);
      hasProperty(props, 'startEnd') === true ? props.startEnd(begin, index + maxItems) : null; // Increment to the next max items
    }

    setDisable(index); // Determine which buttons to disable
  }
  /***********************************************************************************
   *
   * This is called when the bottom button is clicked.  It will set the start and end
   * places in the data, so that it can be determined what to show in the table.
   *
   ***********************************************************************************/


  function bottomButton() {
    if (props.data.length - maxItems < 0) {
      // At the end of the data
      setStart(0);
      setEnd(props.data.length);
      hasProperty(props, 'startEnd') === true ? props.startEnd(0, props.data.length) : null;
    } else {
      // Not at the end of the data
      setStart(props.data.length - maxItems);
      setEnd(props.data.length);
      hasProperty(props, 'startEnd') === true ? props.startEnd(props.data.length - maxItems, props.data.length) : null;
    }

    setDisable(props.data.length);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchSortTable);

/***/ }),

/***/ "./src/Theme.js":
/*!**********************!*\
  !*** ./src/Theme.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonStyle": () => (/* binding */ buttonStyle),
/* harmony export */   "defaultThemeSettings": () => (/* binding */ defaultThemeSettings),
/* harmony export */   "generateButton": () => (/* binding */ generateButton),
/* harmony export */   "generateDefaultButton": () => (/* binding */ generateDefaultButton)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var hasProperty = function hasProperty(obj, propName) {
  return !!Object.getOwnPropertyDescriptor(obj, propName);
};
/***********************************************************************************
 *
 * The default theme settings.
 *
 ***********************************************************************************/


var defaultSettings = {
  backgroundColor: 'aliceblue',
  buttonColor: 'blue',
  buttonTextColor: 'white',
  buttonFont: 'Times New Roman',
  buttonFontWeight: 'bold',
  buttonFontSize: 12,
  disableButtonColor: 'gray',
  font: 'Times New Roman',
  fontWeight: 'plain',
  fontSize: 12,
  errorColor: 'pink',
  normalColor: 'white',
  textColor: 'black'
};
/***********************************************************************************
 *
 * The default button style.
 *
 ***********************************************************************************/

var buttonStyle = {
  margin: "10px",
  borderRadius: "10px",
  color: defaultSettings.buttonTextColor,
  backgroundColor: defaultSettings.buttonColor,
  width: "100px",
  height: "30px",
  font: defaultSettings.buttonFont,
  fontWeight: "bold"
};
/***********************************************************************************
 *
 * The default theme settings.
 *
 ***********************************************************************************/

var defaultThemeSettings = _objectSpread(_objectSpread({}, defaultSettings), {}, {
  buttonStyle: buttonStyle
});
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
  var genButtonStyle = Object.assign({}, style); // Copy the button style

  if (error === true || disabled === true) {
    // Change certain buttons to the disable color to reflect the buttons have been disabled due to an error
    genButtonStyle.backgroundColor = disableColor;
  } else {
    // Do not disable the button
    // Make sure the style has a background color, if not use the theme color
    genButtonStyle.backgroundColor = hasProperty(style, 'backgroundColor') === true ? style.backgroundColor : defaultThemeSettings.backgroundColor;
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
    genButtonStyle.backgroundColor = defaultThemeSettings.disableButtonColor;
  } else {
    // Do not disable the button
    // Make sure the style has a background color, if not use the theme color
    genButtonStyle.backgroundColor = defaultThemeSettings.backgroundColor;
  }

  return genButtonStyle; // Return the button
};

/***/ }),

/***/ "./src/UnstyledDatePicker.js":
/*!***********************************!*\
  !*** ./src/UnstyledDatePicker.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UnstyledDatePicker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_autobind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-autobind */ "./node_modules/react-autobind/index.js");
/* harmony import */ var react_autobind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_autobind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns_parse_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/parse/index.js */ "./node_modules/date-fns/parse/index.js");
/* harmony import */ var date_fns_parse_index_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(date_fns_parse_index_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var date_fns_format_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/format/index.js */ "./node_modules/date-fns/format/index.js");
/* harmony import */ var date_fns_format_index_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(date_fns_format_index_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-day-picker */ "./node_modules/react-day-picker/lib/react-day-picker.min.js");
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_day_picker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_day_picker_DayPickerInput_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-day-picker/DayPickerInput/index.js */ "./node_modules/react-day-picker/DayPickerInput/index.js");
/* harmony import */ var _DatePickerStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DatePickerStyle.js */ "./src/DatePickerStyle.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _excluded = ["format"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint react/prop-types: 0 */



 // https://react-day-picker.js.org/
// http://react-day-picker.js.org/examples/basic



 // const FORMAT = 'M/D/YYYY';

function parseDate(str, format, locale) {
  var parsed = date_fns_parse_index_js__WEBPACK_IMPORTED_MODULE_5___default()(str, format, {
    locale: locale
  });

  if (react_day_picker__WEBPACK_IMPORTED_MODULE_2__.DateUtils.isDate(parsed)) {
    return parsed;
  }

  return undefined;
}

function formatDate(date, format, locale) {
  return date_fns_format_index_js__WEBPACK_IMPORTED_MODULE_6___default()(date, format, {
    locale: locale
  });
}

var UnstyledDatePicker = /*#__PURE__*/function (_React$Component) {
  _inherits(UnstyledDatePicker, _React$Component);

  var _super = _createSuper(UnstyledDatePicker);

  function UnstyledDatePicker(props) {
    var _this;

    _classCallCheck(this, UnstyledDatePicker);

    _this = _super.call(this, props);
    react_autobind__WEBPACK_IMPORTED_MODULE_1___default()(_assertThisInitialized(_this)); // ComponentWillMount() {

    if (_this.props.defaultStyles) (0,_DatePickerStyle_js__WEBPACK_IMPORTED_MODULE_4__.DatePickerStyle)(); // }

    return _this;
  }

  _createClass(UnstyledDatePicker, [{
    key: "handleDayChange",
    value: function handleDayChange(selectedDay, modifiers, dayPickerInput) {
      /* eslint-disable */
      var unusedButInterfaceRequired = {
        modifiers: modifiers,
        dayPickerInput: dayPickerInput
      }; // eslint no-unused-vars

      /* eslint-enable */

      var value = date_fns_format_index_js__WEBPACK_IMPORTED_MODULE_6___default()(selectedDay, this.props.format); // console.log('name:', this.props.name, 'day:', value);

      var e = {};
      e.target = {};
      e.target.name = this.props.name;
      e.target.value = value;
      this.props.onChange(e);
      /*
      value = dayPickerInput.getInput();
      this.setState({
        selectedDay,
        isEmpty: !input.value.trim(),
        isValidDay: typeof selectedDay !== 'undefined',
        isDisabled: modifiers.disabled === true,
      });
      */
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          format = _this$props.format,
          props = _objectWithoutProperties(_this$props, _excluded);

      if (!format) format = 'M/D/YYYY';
      props.format = format;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_day_picker_DayPickerInput_index_js__WEBPACK_IMPORTED_MODULE_3__.default, _extends({}, props, {
        formatDate: formatDate,
        parseDate: parseDate,
        onDayChange: this.handleDayChange,
        placeholder: "".concat(date_fns_format_index_js__WEBPACK_IMPORTED_MODULE_6___default()(new Date(), format))
      }));
    }
  }]);

  return UnstyledDatePicker;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));



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
    } else {//  process.env.JEST_WORKER_ID !== undefined   then running under Jest
      // console.log('something unusual here, expecting e.target.name e.target.value e:', typeof e, e);       
    }
  };
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/contextMenuHover.css":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/contextMenuHover.css ***!
  \***************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".contextMenuHov {\n  position: absolute;\n  display: block;\n  padding: 10px;\n  z-index: 1;\n}\n\nspan:hover {\n  visibility: visible;\n  background-color: lightgray;\n}", "",{"version":3,"sources":["webpack://./src/contextMenuHover.css"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,cAAA;EACA,aAAA;EACA,UAAA;AACJ;;AAEA;EACI,mBAAA;EACA,2BAAA;AACJ","sourcesContent":[".contextMenuHov {\n    position: absolute;\n    display: block;\n    padding: 10px;\n    z-index: 1;\n}\n\nspan:hover {\n    visibility: visible;\n    background-color: lightgray;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/modal.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/modal.css ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#modal {\n  background-color: rgba(129, 127, 127, 0.5);\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 10;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#modal:empty {\n  display: none;\n}\n\n#modal > div {\n  background-color: white;\n  max-width: 500px;\n  padding: 15px;\n  border-radius: 5px;\n  text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/modal.css"],"names":[],"mappings":"AAAA;EACI,0CAAA;EACA,eAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,MAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AACJ;;AAEE;EACE,aAAA;AACJ;;AAEE;EACE,uBAAA;EACA,gBAAA;EACA,aAAA;EACA,kBAAA;EACA,kBAAA;AACJ","sourcesContent":["#modal {\n    background-color: rgba(129, 127, 127, 0.5);\n    position: fixed;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n    z-index: 10;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  \n  #modal:empty {\n    display: none;\n  }\n  \n  #modal > div {\n    background-color: white;\n    max-width: 500px;\n    padding: 15px;\n    border-radius: 5px;\n    text-align: center;\n  }\n  \n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/mousehover.css":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/mousehover.css ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".checkForError {\n  position: relative;\n  /*    display: inline-block; */\n}\n\n.errMessage {\n  visibility: hidden;\n  background-color: black;\n  color: #fff;\n  width: 350px;\n  text-align: center;\n  border-radius: 6px;\n  padding: 10px;\n  /* Position the tooltip */\n  position: absolute;\n  z-index: 1;\n}\n\n.checkForError:hover .errMessage {\n  visibility: visible;\n}", "",{"version":3,"sources":["webpack://./src/mousehover.css"],"names":[],"mappings":"AACA;EACI,kBAAA;EACJ,8BAAA;AAAA;;AAGC;EACG,kBAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;EACA,aAAA;EAEA,yBAAA;EACA,kBAAA;EACA,UAAA;AADJ;;AAKA;EACI,mBAAA;AAFJ","sourcesContent":["\r\n.checkForError {\r\n    position: relative;\r\n/*    display: inline-block; */\r\n  }\r\n  \r\n .errMessage {\r\n    visibility: hidden;\r\n    background-color: black;\r\n    color: #fff;\r\n    width: 350px; \r\n    text-align: center;\r\n    border-radius: 6px;\r\n    padding: 10px;\r\n  \r\n    /* Position the tooltip */\r\n    position: absolute; \r\n    z-index: 1; \r\n  }\r\n\r\n\r\n.checkForError:hover .errMessage {\r\n    visibility: visible;\r\n  }\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/table.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/table.css ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".tableLabel {\n  width: 300px;\n  margin: 5px;\n  text-align: left;\n  line-height: 20px;\n  display: table-cell;\n}\n\n.tableLabel2 {\n  width: 300px;\n  padding: 10px;\n  text-align: left;\n  line-height: 20px;\n  display: table-cell;\n}\n\n.tableLabel3 {\n  width: 290px;\n  margin: 5px;\n  text-align: left;\n  line-height: 20px;\n  display: table-cell;\n}\n\n.tableLabel4 {\n  width: 255px;\n  padding: 10px;\n  text-align: left;\n  line-height: 20px;\n  display: table-cell;\n}\n\n.tableLabel5 {\n  width: 195px;\n  margin: 5px;\n  text-align: left;\n  line-height: 20px;\n  display: table-cell;\n}\n\n.tableLabel6 {\n  width: 90px;\n  margin: 5px;\n  text-align: left;\n  line-height: 20px;\n  display: table-cell;\n}\n\n.tableLabel7 {\n  width: 50px;\n  margin: 5px;\n  text-align: left;\n  line-height: 20px;\n  display: table-cell;\n}\n\n.tableLabel8 {\n  width: 120px;\n  margin: 5px;\n  text-align: left;\n  line-height: 20px;\n  display: table-cell;\n}\n\n.table {\n  margin: 15px;\n  display: table;\n}\n\n.row {\n  display: table-row;\n}\n\n.specialrow {\n  display: table-row;\n  margin: 50px;\n}\n\n.cell {\n  display: table-cell;\n  margin-right: 5px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  width: 900px;\n  line-height: 20px;\n}\n\n.cell2 {\n  display: table-cell;\n  margin-right: 5px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  width: 500px;\n  line-height: 20px;\n}\n\n.cell3 {\n  display: table-cell;\n  margin-right: 5px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  width: 100px;\n  line-height: 20px;\n  text-align: right;\n}\n\n.cell4 {\n  display: table-cell;\n  margin-right: 50px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  width: 150px;\n  line-height: 20px;\n  text-align: right;\n}\n\n.cell5 {\n  display: table-cell;\n  margin-right: 50px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  width: 300px;\n  line-height: 20px;\n  text-align: left;\n}\n\n.cell6 {\n  display: table-cell;\n  margin-right: 5px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  width: 400px;\n  line-height: 20px;\n  text-align: \"left\";\n}\n\n.cell7 {\n  display: table-cell;\n  margin-right: 5px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  width: 700px;\n  line-height: 20px;\n}\n\n.choice-style {\n  display: table-cell;\n  width: 700px;\n  margin-right: 5px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  line-height: 20px;\n}\n\nth1, td1 {\n  border: 2px solid black;\n}\n\ntable1 {\n  border: 2px solid black;\n  margin: 20px;\n}\n\n.special_choice_style {\n  display: table-cell;\n  width: 400px;\n  margin-right: 5px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  line-height: 20px;\n}\n\n:root {\n  --hover_back_color1: none;\n  --hover_back_color2: none;\n  --hover_back_color3: none;\n  --hover_back_color4: none;\n  --hover_back_color5: none;\n  --hover_back_color6: none;\n  --hover_back_color7: none;\n  --hover_back_color8: none;\n  --hover_back_color9: none;\n  --hover_back_color10: none;\n}\n\ntable.search_sort_table1 tr:hover td {\n  background-color: var(--hover_back_color1);\n}\n\ntable.search_sort_table2 tr:hover td {\n  background-color: var(--hover_back_color2);\n}\n\ntable.search_sort_table3 tr:hover td {\n  background-color: var(--hover_back_color3);\n}\n\ntable.search_sort_table4 tr:hover td {\n  background-color: var(--hover_back_color4);\n}\n\ntable.search_sort_table5 tr:hover td {\n  background-color: var(--hover_back_color5);\n}\n\ntable.search_sort_table6 tr:hover td {\n  background-color: var(--hover_back_color6);\n}\n\ntable.search_sort_table7 tr:hover td {\n  background-color: var(--hover_back_color7);\n}\n\ntable.search_sort_table8 tr:hover td {\n  background-color: var(--hover_back_color8);\n}\n\ntable.search_sort_table9 tr:hover td {\n  background-color: var(--hover_back_color9);\n}\n\ntable.search_sort_table10 tr:hover td {\n  background-color: var(--hover_back_color10);\n}", "",{"version":3,"sources":["webpack://./src/table.css"],"names":[],"mappings":"AAAA;EACI,YAAA;EACA,WAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBAAA;AACJ;;AAEA;EACI,YAAA;EACA,aAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBAAA;AACJ;;AAEA;EACE,YAAA;EACA,WAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBAAA;AACF;;AAEA;EACE,YAAA;EACA,aAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBAAA;AACF;;AAEA;EACE,YAAA;EACA,WAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBAAA;AACF;;AAEA;EACE,WAAA;EACA,WAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBAAA;AACF;;AAEA;EACE,WAAA;EACA,WAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBAAA;AACF;;AAEA;EACE,YAAA;EACA,WAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBAAA;AACF;;AAIA;EACI,YAAA;EACA,cAAA;AADJ;;AAIA;EACI,kBAAA;AADJ;;AAIA;EACI,kBAAA;EACA,YAAA;AADJ;;AAIA;EACI,mBAAA;EACA,iBAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,iBAAA;AADJ;;AAIA;EACI,mBAAA;EACA,iBAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,iBAAA;AADJ;;AAIA;EACI,mBAAA;EACA,iBAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,iBAAA;EACA,iBAAA;AADJ;;AAIE;EACE,mBAAA;EACA,kBAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,iBAAA;EACA,iBAAA;AADJ;;AAIE;EACE,mBAAA;EACA,kBAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,iBAAA;EACA,gBAAA;AADJ;;AAIE;EACE,mBAAA;EACA,iBAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;AADJ;;AAIE;EACE,mBAAA;EACA,iBAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,iBAAA;AADJ;;AAOA;EACI,mBAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,kBAAA;EACA,iBAAA;AAJJ;;AAOA;EACI,uBAAA;AAJJ;;AAOA;EACI,uBAAA;EACA,YAAA;AAJJ;;AAOA;EACE,mBAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,kBAAA;EACA,iBAAA;AAJF;;AAOA;EACE,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,0BAAA;AAJF;;AAOA;EACE,0CAAA;AAJF;;AAOA;EACE,0CAAA;AAJF;;AAOA;EACE,0CAAA;AAJF;;AAOA;EACE,0CAAA;AAJF;;AAOA;EACE,0CAAA;AAJF;;AAOA;EACE,0CAAA;AAJF;;AAOA;EACE,0CAAA;AAJF;;AAOA;EACE,0CAAA;AAJF;;AAOA;EACE,0CAAA;AAJF;;AAOA;EACE,2CAAA;AAJF","sourcesContent":[".tableLabel {\r\n    width: 300px;\r\n    margin: 5px;\r\n    text-align: left;\r\n    line-height: 20px;\r\n    display: table-cell;\r\n  }\r\n\r\n.tableLabel2 {\r\n    width: 300px;\r\n    padding: 10px;\r\n    text-align: left;\r\n    line-height: 20px;\r\n    display: table-cell;\r\n}\r\n\r\n.tableLabel3 {\r\n  width: 290px;\r\n  margin: 5px;\r\n  text-align: left;\r\n  line-height: 20px;\r\n  display: table-cell;\r\n}\r\n\r\n.tableLabel4 {\r\n  width: 255px;\r\n  padding: 10px;\r\n  text-align: left;\r\n  line-height: 20px;\r\n  display: table-cell;\r\n}\r\n\r\n.tableLabel5 {\r\n  width: 195px;\r\n  margin: 5px;\r\n  text-align: left;\r\n  line-height: 20px;\r\n  display: table-cell;\r\n}\r\n\r\n.tableLabel6 {\r\n  width: 90px;\r\n  margin: 5px;\r\n  text-align: left;\r\n  line-height: 20px;\r\n  display: table-cell;\r\n}\r\n\r\n.tableLabel7 {\r\n  width: 50px;\r\n  margin: 5px;\r\n  text-align: left;\r\n  line-height: 20px;\r\n  display: table-cell;\r\n}\r\n\r\n.tableLabel8 {\r\n  width: 120px;\r\n  margin: 5px;\r\n  text-align: left;\r\n  line-height: 20px;\r\n  display: table-cell;\r\n}\r\n\r\n\r\n\r\n.table {\r\n    margin: 15px;\r\n    display: table;\r\n}\r\n\r\n.row {\r\n    display: table-row;\r\n}\r\n\r\n.specialrow {\r\n    display: table-row;\r\n    margin: 50px;\r\n}\r\n\r\n.cell {\r\n    display: table-cell;\r\n    margin-right: 5px;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n    width: 900px;\r\n    line-height: 20px;\r\n  }\r\n\r\n.cell2 {\r\n    display: table-cell;\r\n    margin-right: 5px;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n    width: 500px;\r\n    line-height: 20px;\r\n  }\r\n\r\n.cell3 {\r\n    display: table-cell;\r\n    margin-right: 5px;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n    width: 100px;\r\n    line-height: 20px;\r\n    text-align: right;\r\n  }\r\n\r\n  .cell4 {\r\n    display: table-cell;\r\n    margin-right: 50px;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n    width: 150px;\r\n    line-height: 20px;\r\n    text-align: right;\r\n  }\r\n\r\n  .cell5 {\r\n    display: table-cell;\r\n    margin-right: 50px;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n    width: 300px;\r\n    line-height: 20px;\r\n    text-align: left;\r\n  }\r\n\r\n  .cell6 {\r\n    display: table-cell;\r\n    margin-right: 5px;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n    width: 400px;\r\n    line-height: 20px;\r\n    text-align: \"left\";\r\n  }\r\n\r\n  .cell7 {\r\n    display: table-cell;\r\n    margin-right: 5px;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n    width: 700px;\r\n    line-height: 20px;\r\n  }\r\n\r\n\r\n\r\n\r\n.choice-style {\r\n    display: table-cell;\r\n    width: 700px;\r\n    margin-right: 5px;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n    line-height: 20px;\r\n  }\r\n\r\nth1, td1 {\r\n    border: 2px solid black;\r\n}\r\n\r\ntable1 {\r\n    border: 2px solid black;\r\n    margin: 20px;\r\n}\r\n\r\n.special_choice_style {\r\n  display: table-cell;\r\n  width: 400px;\r\n  margin-right: 5px;\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\r\n  line-height: 20px;\r\n}\r\n\r\n:root {\r\n  --hover_back_color1: none;\r\n  --hover_back_color2: none;\r\n  --hover_back_color3: none;\r\n  --hover_back_color4: none;\r\n  --hover_back_color5: none;\r\n  --hover_back_color6: none;\r\n  --hover_back_color7: none;\r\n  --hover_back_color8: none;\r\n  --hover_back_color9: none;\r\n  --hover_back_color10: none;\r\n}\r\n\r\ntable.search_sort_table1 tr:hover td {\r\n  background-color: var(--hover_back_color1);\r\n}\r\n\r\ntable.search_sort_table2 tr:hover td {\r\n  background-color: var(--hover_back_color2);\r\n}\r\n\r\ntable.search_sort_table3 tr:hover td {\r\n  background-color: var(--hover_back_color3);\r\n}\r\n\r\ntable.search_sort_table4 tr:hover td {\r\n  background-color: var(--hover_back_color4);\r\n}\r\n\r\ntable.search_sort_table5 tr:hover td {\r\n  background-color: var(--hover_back_color5);\r\n}\r\n\r\ntable.search_sort_table6 tr:hover td {\r\n  background-color: var(--hover_back_color6);\r\n}\r\n\r\ntable.search_sort_table7 tr:hover td {\r\n  background-color: var(--hover_back_color7);\r\n}\r\n\r\ntable.search_sort_table8 tr:hover td {\r\n  background-color: var(--hover_back_color8);\r\n}\r\n\r\ntable.search_sort_table9 tr:hover td {\r\n  background-color: var(--hover_back_color9);\r\n}\r\n\r\ntable.search_sort_table10 tr:hover td {\r\n  background-color: var(--hover_back_color10);\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/_lib/addLeadingZeros/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/_lib/addLeadingZeros/index.js ***!
  \*************************************************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = addLeadingZeros;

function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/_lib/assign/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/_lib/assign/index.js ***!
  \****************************************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = assign;

function assign(target, dirtyObject) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  dirtyObject = dirtyObject || {};

  for (var property in dirtyObject) {
    if (dirtyObject.hasOwnProperty(property)) {
      target[property] = dirtyObject[property];
    }
  }

  return target;
}

module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/_lib/format/formatters/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/formatters/index.js ***!
  \***************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _index = _interopRequireDefault(__webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/_lib/format/lightFormatters/index.js"));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/_lib/getUTCDayOfYear/index.js"));

var _index3 = _interopRequireDefault(__webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/_lib/getUTCISOWeek/index.js"));

var _index4 = _interopRequireDefault(__webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/_lib/getUTCISOWeekYear/index.js"));

var _index5 = _interopRequireDefault(__webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/_lib/getUTCWeek/index.js"));

var _index6 = _interopRequireDefault(__webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/_lib/getUTCWeekYear/index.js"));

var _index7 = _interopRequireDefault(__webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/_lib/addLeadingZeros/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
  /*
   * |     | Unit                           |     | Unit                           |
   * |-----|--------------------------------|-----|--------------------------------|
   * |  a  | AM, PM                         |  A* | Milliseconds in day            |
   * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
   * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
   * |  d  | Day of month                   |  D  | Day of year                    |
   * |  e  | Local day of week              |  E  | Day of week                    |
   * |  f  |                                |  F* | Day of week in month           |
   * |  g* | Modified Julian day            |  G  | Era                            |
   * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
   * |  i! | ISO day of week                |  I! | ISO week of year               |
   * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
   * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
   * |  l* | (deprecated)                   |  L  | Stand-alone month              |
   * |  m  | Minute                         |  M  | Month                          |
   * |  n  |                                |  N  |                                |
   * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
   * |  p! | Long localized time            |  P! | Long localized date            |
   * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
   * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
   * |  s  | Second                         |  S  | Fraction of second             |
   * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
   * |  u  | Extended year                  |  U* | Cyclic year                    |
   * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
   * |  w  | Local week of year             |  W* | Week of month                  |
   * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
   * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
   * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
   *
   * Letters marked by * are not implemented but reserved by Unicode standard.
   *
   * Letters marked by ! are non-standard, but implemented by date-fns:
   * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
   * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
   *   i.e. 7 for Sunday, 1 for Monday, etc.
   * - `I` is ISO week of year, as opposed to `w` which is local week of year.
   * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
   *   `R` is supposed to be used in conjunction with `I` and `i`
   *   for universal ISO week-numbering date, whereas
   *   `Y` is supposed to be used in conjunction with `w` and `e`
   *   for week-numbering date specific to the locale.
   * - `P` is long localized date format
   * - `p` is long localized time format
   */

};
var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _index.default.y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = (0, _index6.default)(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0, _index7.default)(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0, _index7.default)(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = (0, _index4.default)(date); // Padding

    return (0, _index7.default)(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return (0, _index7.default)(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0, _index7.default)(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0, _index7.default)(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _index.default.M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0, _index7.default)(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = (0, _index5.default)(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0, _index7.default)(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = (0, _index3.default)(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0, _index7.default)(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _index.default.d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = (0, _index2.default)(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0, _index7.default)(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0, _index7.default)(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0, _index7.default)(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0, _index7.default)(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _index.default.h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _index.default.H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0, _index7.default)(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0, _index7.default)(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _index.default.m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _index.default.s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return _index.default.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0, _index7.default)(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0, _index7.default)(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0, _index7.default)(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0, _index7.default)(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0, _index7.default)(Math.floor(absOffset / 60), 2);
  var minutes = (0, _index7.default)(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

var _default = formatters;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/_lib/format/lightFormatters/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/lightFormatters/index.js ***!
  \********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _index = _interopRequireDefault(__webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/_lib/addLeadingZeros/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */
var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0, _index.default)(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0, _index.default)(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return (0, _index.default)(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return (0, _index.default)(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return (0, _index.default)(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return (0, _index.default)(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return (0, _index.default)(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0, _index.default)(fractionalSeconds, token.length);
  }
};
var _default = formatters;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/_lib/format/longFormatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/longFormatters/index.js ***!
  \*******************************************************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/);
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
var _default = longFormatters;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*****************************************************************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = getTimezoneOffsetInMilliseconds;

/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/_lib/getUTCDayOfYear/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getUTCDayOfYear/index.js ***!
  \*************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = getUTCDayOfYear;

var _index = _interopRequireDefault(__webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/toDate/index.js"));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/_lib/requiredArgs/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  (0, _index2.default)(1, arguments);
  var date = (0, _index.default)(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/_lib/getUTCISOWeek/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/_lib/getUTCISOWeek/index.js ***!
  \***********************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = getUTCISOWeek;

var _index = _interopRequireDefault(__webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/toDate/index.js"));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/_lib/startOfUTCISOWeek/index.js"));

var _index3 = _interopRequireDefault(__webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/_lib/startOfUTCISOWeekYear/index.js"));

var _index4 = _interopRequireDefault(__webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/_lib/requiredArgs/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  (0, _index4.default)(1, arguments);
  var date = (0, _index.default)(dirtyDate);
  var diff = (0, _index2.default)(date).getTime() - (0, _index3.default)(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/_lib/getUTCISOWeekYear/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getUTCISOWeekYear/index.js ***!
  \***************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = getUTCISOWeekYear;

var _index = _interopRequireDefault(__webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/toDate/index.js"));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/_lib/startOfUTCISOWeek/index.js"));

var _index3 = _interopRequireDefault(__webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/_lib/requiredArgs/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCISOWeekYear(dirtyDate) {
  (0, _index3.default)(1, arguments);
  var date = (0, _index.default)(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0, _index2.default)(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0, _index2.default)(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/_lib/getUTCWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/getUTCWeek/index.js ***!
  \********************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = getUTCWeek;

var _index = _interopRequireDefault(__webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/toDate/index.js"));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/_lib/startOfUTCWeek/index.js"));

var _index3 = _interopRequireDefault(__webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/_lib/startOfUTCWeekYear/index.js"));

var _index4 = _interopRequireDefault(__webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/_lib/requiredArgs/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  (0, _index4.default)(1, arguments);
  var date = (0, _index.default)(dirtyDate);
  var diff = (0, _index2.default)(date, options).getTime() - (0, _index3.default)(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/_lib/getUTCWeekYear/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getUTCWeekYear/index.js ***!
  \************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = getUTCWeekYear;

var _index = _interopRequireDefault(__webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js"));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/toDate/index.js"));

var _index3 = _interopRequireDefault(__webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/_lib/startOfUTCWeek/index.js"));

var _index4 = _interopRequireDefault(__webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/_lib/requiredArgs/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCWeekYear(dirtyDate, dirtyOptions) {
  (0, _index4.default)(1, arguments);
  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0, _index.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0, _index.default)(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0, _index3.default)(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0, _index3.default)(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/_lib/protectedTokens/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/_lib/protectedTokens/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isProtectedDayOfYearToken = isProtectedDayOfYearToken;
exports.isProtectedWeekYearToken = isProtectedWeekYearToken;
exports.throwProtectedError = throwProtectedError;
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];

function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}

function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}

function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/_lib/requiredArgs/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/_lib/requiredArgs/index.js ***!
  \**********************************************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = requiredArgs;

function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/_lib/setUTCDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/setUTCDay/index.js ***!
  \*******************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = setUTCDay;

var _index = _interopRequireDefault(__webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js"));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/toDate/index.js"));

var _index3 = _interopRequireDefault(__webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/_lib/requiredArgs/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCDay(dirtyDate, dirtyDay, dirtyOptions) {
  (0, _index3.default)(2, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0, _index.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0, _index.default)(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0, _index2.default)(dirtyDate);
  var day = (0, _index.default)(dirtyDay);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/_lib/setUTCISODay/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/_lib/setUTCISODay/index.js ***!
  \**********************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = setUTCISODay;

var _index = _interopRequireDefault(__webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js"));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/toDate/index.js"));

var _index3 = _interopRequireDefault(__webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/_lib/requiredArgs/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCISODay(dirtyDate, dirtyDay) {
  (0, _index3.default)(2, arguments);
  var day = (0, _index.default)(dirtyDay);

  if (day % 7 === 0) {
    day = day - 7;
  }

  var weekStartsOn = 1;
  var date = (0, _index2.default)(dirtyDate);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/_lib/setUTCISOWeek/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/_lib/setUTCISOWeek/index.js ***!
  \***********************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = setUTCISOWeek;

var _index = _interopRequireDefault(__webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js"));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/toDate/index.js"));

var _index3 = _interopRequireDefault(__webpack_require__(/*! ../getUTCISOWeek/index.js */ "./node_modules/date-fns/_lib/getUTCISOWeek/index.js"));

var _index4 = _interopRequireDefault(__webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/_lib/requiredArgs/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
  (0, _index4.default)(2, arguments);
  var date = (0, _index2.default)(dirtyDate);
  var isoWeek = (0, _index.default)(dirtyISOWeek);
  var diff = (0, _index3.default)(date) - isoWeek;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/_lib/setUTCWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/setUTCWeek/index.js ***!
  \********************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = setUTCWeek;

var _index = _interopRequireDefault(__webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js"));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/toDate/index.js"));

var _index3 = _interopRequireDefault(__webpack_require__(/*! ../getUTCWeek/index.js */ "./node_modules/date-fns/_lib/getUTCWeek/index.js"));

var _index4 = _interopRequireDefault(__webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/_lib/requiredArgs/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCWeek(dirtyDate, dirtyWeek, options) {
  (0, _index4.default)(2, arguments);
  var date = (0, _index2.default)(dirtyDate);
  var week = (0, _index.default)(dirtyWeek);
  var diff = (0, _index3.default)(date, options) - week;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/_lib/startOfUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/_lib/startOfUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = startOfUTCISOWeek;

var _index = _interopRequireDefault(__webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/toDate/index.js"));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/_lib/requiredArgs/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCISOWeek(dirtyDate) {
  (0, _index2.default)(1, arguments);
  var weekStartsOn = 1;
  var date = (0, _index.default)(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/_lib/startOfUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/_lib/startOfUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = startOfUTCISOWeekYear;

var _index = _interopRequireDefault(__webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/_lib/getUTCISOWeekYear/index.js"));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/_lib/startOfUTCISOWeek/index.js"));

var _index3 = _interopRequireDefault(__webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/_lib/requiredArgs/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCISOWeekYear(dirtyDate) {
  (0, _index3.default)(1, arguments);
  var year = (0, _index.default)(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0, _index2.default)(fourthOfJanuary);
  return date;
}

module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/_lib/startOfUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/_lib/startOfUTCWeek/index.js ***!
  \************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = startOfUTCWeek;

var _index = _interopRequireDefault(__webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js"));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/toDate/index.js"));

var _index3 = _interopRequireDefault(__webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/_lib/requiredArgs/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCWeek(dirtyDate, dirtyOptions) {
  (0, _index3.default)(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0, _index.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0, _index.default)(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0, _index2.default)(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/_lib/startOfUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/_lib/startOfUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = startOfUTCWeekYear;

var _index = _interopRequireDefault(__webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js"));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/_lib/getUTCWeekYear/index.js"));

var _index3 = _interopRequireDefault(__webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/_lib/startOfUTCWeek/index.js"));

var _index4 = _interopRequireDefault(__webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/_lib/requiredArgs/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  (0, _index4.default)(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0, _index.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0, _index.default)(options.firstWeekContainsDate);
  var year = (0, _index2.default)(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0, _index3.default)(firstWeek, dirtyOptions);
  return date;
}

module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/_lib/toInteger/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/toInteger/index.js ***!
  \*******************************************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = toInteger;

function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/addMilliseconds/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/addMilliseconds/index.js ***!
  \********************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = addMilliseconds;

var _index = _interopRequireDefault(__webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js"));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js"));

var _index3 = _interopRequireDefault(__webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/_lib/requiredArgs/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds(dirtyDate, dirtyAmount) {
  (0, _index3.default)(2, arguments);
  var timestamp = (0, _index2.default)(dirtyDate).getTime();
  var amount = (0, _index.default)(dirtyAmount);
  return new Date(timestamp + amount);
}

module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/format/index.js":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/format/index.js ***!
  \***********************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = format;

var _index = _interopRequireDefault(__webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/isValid/index.js"));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/locale/en-US/index.js"));

var _index3 = _interopRequireDefault(__webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/subMilliseconds/index.js"));

var _index4 = _interopRequireDefault(__webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js"));

var _index5 = _interopRequireDefault(__webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/_lib/format/formatters/index.js"));

var _index6 = _interopRequireDefault(__webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/_lib/format/longFormatters/index.js"));

var _index7 = _interopRequireDefault(__webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js"));

var _index8 = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/_lib/protectedTokens/index.js");

var _index9 = _interopRequireDefault(__webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js"));

var _index10 = _interopRequireDefault(__webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/_lib/requiredArgs/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  (0, _index10.default)(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale = options.locale || _index2.default;
  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0, _index9.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0, _index9.default)(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0, _index9.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0, _index9.default)(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0, _index4.default)(dirtyDate);

  if (!(0, _index.default)(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0, _index7.default)(originalDate);
  var utcDate = (0, _index3.default)(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _index6.default[firstCharacter];
      return longFormatter(substring, locale.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _index5.default[firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && (0, _index8.isProtectedWeekYearToken)(substring)) {
        (0, _index8.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      if (!options.useAdditionalDayOfYearTokens && (0, _index8.isProtectedDayOfYearToken)(substring)) {
        (0, _index8.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/isValid/index.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/isValid/index.js ***!
  \************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = isValid;

var _index = _interopRequireDefault(__webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js"));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/_lib/requiredArgs/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * var result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */
function isValid(dirtyDate) {
  (0, _index2.default)(1, arguments);
  var date = (0, _index.default)(dirtyDate);
  return !isNaN(date);
}

module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildFormatLongFn/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildFormatLongFn/index.js ***!
  \**********************************************************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = buildFormatLongFn;

function buildFormatLongFn(args) {
  return function (dirtyOptions) {
    var options = dirtyOptions || {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildLocalizeFn/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildLocalizeFn/index.js ***!
  \********************************************************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = buildLocalizeFn;

function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index];
  };
}

module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchFn/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchFn/index.js ***!
  \*****************************************************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = buildMatchFn;

function buildMatchFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var value;

    if (Object.prototype.toString.call(parsePatterns) === '[object Array]') {
      value = findIndex(parsePatterns, function (pattern) {
        return pattern.test(matchedString);
      });
    } else {
      value = findKey(parsePatterns, function (pattern) {
        return pattern.test(matchedString);
      });
    }

    value = args.valueCallback ? args.valueCallback(value) : value;
    value = options.valueCallback ? options.valueCallback(value) : value;
    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
}

module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchPatternFn/index.js ***!
  \************************************************************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = buildMatchPatternFn;

function buildMatchPatternFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var matchResult = string.match(args.matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);

    if (!parseResult) {
      return null;
    }

    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatDistance/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatDistance/index.js ***!
  \*************************************************************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = formatDistance;
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

function formatDistance(token, count, options) {
  options = options || {};
  var result;

  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token];
  } else if (count === 1) {
    result = formatDistanceLocale[token].one;
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count);
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
}

module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatLong/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatLong/index.js ***!
  \*********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _index = _interopRequireDefault(__webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/locale/_lib/buildFormatLongFn/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0, _index.default)({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0, _index.default)({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0, _index.default)({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
var _default = formatLong;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatRelative/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatRelative/index.js ***!
  \*************************************************************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = formatRelative;
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
}

module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/localize/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/localize/index.js ***!
  \*******************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _index = _interopRequireDefault(__webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/locale/_lib/buildLocalizeFn/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'] // Note: in English, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.

};
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

function ordinalNumber(dirtyNumber, _dirtyOptions) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  //
  //   var options = dirtyOptions || {}
  //   var unit = String(options.unit)
  //
  // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
}

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0, _index.default)({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0, _index.default)({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return Number(quarter) - 1;
    }
  }),
  month: (0, _index.default)({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0, _index.default)({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0, _index.default)({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
var _default = localize;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/match/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/match/index.js ***!
  \****************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _index = _interopRequireDefault(__webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn/index.js"));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/locale/_lib/buildMatchFn/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0, _index.default)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0, _index2.default)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0, _index2.default)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0, _index2.default)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0, _index2.default)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0, _index2.default)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
var _default = match;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/index.js ***!
  \*****************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _index = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/locale/en-US/_lib/formatDistance/index.js"));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/locale/en-US/_lib/formatLong/index.js"));

var _index3 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/locale/en-US/_lib/formatRelative/index.js"));

var _index4 = _interopRequireDefault(__webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/locale/en-US/_lib/localize/index.js"));

var _index5 = _interopRequireDefault(__webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/locale/en-US/_lib/match/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _index.default,
  formatLong: _index2.default,
  formatRelative: _index3.default,
  localize: _index4.default,
  match: _index5.default,
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
var _default = locale;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/index.js ***!
  \***********************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _index = _interopRequireDefault(__webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/_lib/getUTCWeekYear/index.js"));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../../../_lib/setUTCDay/index.js */ "./node_modules/date-fns/_lib/setUTCDay/index.js"));

var _index3 = _interopRequireDefault(__webpack_require__(/*! ../../../_lib/setUTCISODay/index.js */ "./node_modules/date-fns/_lib/setUTCISODay/index.js"));

var _index4 = _interopRequireDefault(__webpack_require__(/*! ../../../_lib/setUTCISOWeek/index.js */ "./node_modules/date-fns/_lib/setUTCISOWeek/index.js"));

var _index5 = _interopRequireDefault(__webpack_require__(/*! ../../../_lib/setUTCWeek/index.js */ "./node_modules/date-fns/_lib/setUTCWeek/index.js"));

var _index6 = _interopRequireDefault(__webpack_require__(/*! ../../../_lib/startOfUTCISOWeek/index.js */ "./node_modules/date-fns/_lib/startOfUTCISOWeek/index.js"));

var _index7 = _interopRequireDefault(__webpack_require__(/*! ../../../_lib/startOfUTCWeek/index.js */ "./node_modules/date-fns/_lib/startOfUTCWeek/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var MILLISECONDS_IN_SECOND = 1000;
var numericPatterns = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/ // 0 to 9999, -0 to -9999

};
var timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};

function parseNumericPattern(pattern, string, valueCallback) {
  var matchResult = string.match(pattern);

  if (!matchResult) {
    return null;
  }

  var value = parseInt(matchResult[0], 10);
  return {
    value: valueCallback ? valueCallback(value) : value,
    rest: string.slice(matchResult[0].length)
  };
}

function parseTimezonePattern(pattern, string) {
  var matchResult = string.match(pattern);

  if (!matchResult) {
    return null;
  } // Input is 'Z'


  if (matchResult[0] === 'Z') {
    return {
      value: 0,
      rest: string.slice(1)
    };
  }

  var sign = matchResult[1] === '+' ? 1 : -1;
  var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
  return {
    value: sign * (hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * MILLISECONDS_IN_SECOND),
    rest: string.slice(matchResult[0].length)
  };
}

function parseAnyDigitsSigned(string, valueCallback) {
  return parseNumericPattern(numericPatterns.anyDigitsSigned, string, valueCallback);
}

function parseNDigits(n, string, valueCallback) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigit, string, valueCallback);

    case 2:
      return parseNumericPattern(numericPatterns.twoDigits, string, valueCallback);

    case 3:
      return parseNumericPattern(numericPatterns.threeDigits, string, valueCallback);

    case 4:
      return parseNumericPattern(numericPatterns.fourDigits, string, valueCallback);

    default:
      return parseNumericPattern(new RegExp('^\\d{1,' + n + '}'), string, valueCallback);
  }
}

function parseNDigitsSigned(n, string, valueCallback) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigitSigned, string, valueCallback);

    case 2:
      return parseNumericPattern(numericPatterns.twoDigitsSigned, string, valueCallback);

    case 3:
      return parseNumericPattern(numericPatterns.threeDigitsSigned, string, valueCallback);

    case 4:
      return parseNumericPattern(numericPatterns.fourDigitsSigned, string, valueCallback);

    default:
      return parseNumericPattern(new RegExp('^-?\\d{1,' + n + '}'), string, valueCallback);
  }
}

function dayPeriodEnumToHours(enumValue) {
  switch (enumValue) {
    case 'morning':
      return 4;

    case 'evening':
      return 17;

    case 'pm':
    case 'noon':
    case 'afternoon':
      return 12;

    case 'am':
    case 'midnight':
    case 'night':
    default:
      return 0;
  }
}

function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  var isCommonEra = currentYear > 0; // Absolute number of the current year:
  // 1 -> 1 AC
  // 0 -> 1 BC
  // -1 -> 2 BC

  var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
  var result;

  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    var rangeEnd = absCurrentYear + 50;
    var rangeEndCentury = Math.floor(rangeEnd / 100) * 100;
    var isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }

  return isCommonEra ? result : 1 - result;
}

var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // User for validation

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O* | Timezone (GMT)                 |
 * |  p  |                                |  P  |                                |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z* | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 */


var parsers = {
  // Era
  G: {
    priority: 140,
    parse: function (string, token, match, _options) {
      switch (token) {
        // AD, BC
        case 'G':
        case 'GG':
        case 'GGG':
          return match.era(string, {
            width: 'abbreviated'
          }) || match.era(string, {
            width: 'narrow'
          });
        // A, B

        case 'GGGGG':
          return match.era(string, {
            width: 'narrow'
          });
        // Anno Domini, Before Christ

        case 'GGGG':
        default:
          return match.era(string, {
            width: 'wide'
          }) || match.era(string, {
            width: 'abbreviated'
          }) || match.era(string, {
            width: 'narrow'
          });
      }
    },
    set: function (date, flags, value, _options) {
      flags.era = value;
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['R', 'u', 't', 'T']
  },
  // Year
  y: {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    priority: 130,
    parse: function (string, token, match, _options) {
      var valueCallback = function (year) {
        return {
          year: year,
          isTwoDigitYear: token === 'yy'
        };
      };

      switch (token) {
        case 'y':
          return parseNDigits(4, string, valueCallback);

        case 'yo':
          return match.ordinalNumber(string, {
            unit: 'year',
            valueCallback: valueCallback
          });

        default:
          return parseNDigits(token.length, string, valueCallback);
      }
    },
    validate: function (_date, value, _options) {
      return value.isTwoDigitYear || value.year > 0;
    },
    set: function (date, flags, value, _options) {
      var currentYear = date.getUTCFullYear();

      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      }

      var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'u', 'w', 'I', 'i', 'e', 'c', 't', 'T']
  },
  // Local week-numbering year
  Y: {
    priority: 130,
    parse: function (string, token, match, _options) {
      var valueCallback = function (year) {
        return {
          year: year,
          isTwoDigitYear: token === 'YY'
        };
      };

      switch (token) {
        case 'Y':
          return parseNDigits(4, string, valueCallback);

        case 'Yo':
          return match.ordinalNumber(string, {
            unit: 'year',
            valueCallback: valueCallback
          });

        default:
          return parseNDigits(token.length, string, valueCallback);
      }
    },
    validate: function (_date, value, _options) {
      return value.isTwoDigitYear || value.year > 0;
    },
    set: function (date, flags, value, options) {
      var currentYear = (0, _index.default)(date, options);

      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
        date.setUTCHours(0, 0, 0, 0);
        return (0, _index7.default)(date, options);
      }

      var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
      date.setUTCHours(0, 0, 0, 0);
      return (0, _index7.default)(date, options);
    },
    incompatibleTokens: ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']
  },
  // ISO week-numbering year
  R: {
    priority: 130,
    parse: function (string, token, _match, _options) {
      if (token === 'R') {
        return parseNDigitsSigned(4, string);
      }

      return parseNDigitsSigned(token.length, string);
    },
    set: function (_date, _flags, value, _options) {
      var firstWeekOfYear = new Date(0);
      firstWeekOfYear.setUTCFullYear(value, 0, 4);
      firstWeekOfYear.setUTCHours(0, 0, 0, 0);
      return (0, _index6.default)(firstWeekOfYear);
    },
    incompatibleTokens: ['G', 'y', 'Y', 'u', 'Q', 'q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']
  },
  // Extended year
  u: {
    priority: 130,
    parse: function (string, token, _match, _options) {
      if (token === 'u') {
        return parseNDigitsSigned(4, string);
      }

      return parseNDigitsSigned(token.length, string);
    },
    set: function (date, _flags, value, _options) {
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['G', 'y', 'Y', 'R', 'w', 'I', 'i', 'e', 'c', 't', 'T']
  },
  // Quarter
  Q: {
    priority: 120,
    parse: function (string, token, match, _options) {
      switch (token) {
        // 1, 2, 3, 4
        case 'Q':
        case 'QQ':
          // 01, 02, 03, 04
          return parseNDigits(token.length, string);
        // 1st, 2nd, 3rd, 4th

        case 'Qo':
          return match.ordinalNumber(string, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4

        case 'QQQ':
          return match.quarter(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)

        case 'QQQQQ':
          return match.quarter(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // 1st quarter, 2nd quarter, ...

        case 'QQQQ':
        default:
          return match.quarter(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.quarter(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 4;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Stand-alone quarter
  q: {
    priority: 120,
    parse: function (string, token, match, _options) {
      switch (token) {
        // 1, 2, 3, 4
        case 'q':
        case 'qq':
          // 01, 02, 03, 04
          return parseNDigits(token.length, string);
        // 1st, 2nd, 3rd, 4th

        case 'qo':
          return match.ordinalNumber(string, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4

        case 'qqq':
          return match.quarter(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)

        case 'qqqqq':
          return match.quarter(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // 1st quarter, 2nd quarter, ...

        case 'qqqq':
        default:
          return match.quarter(string, {
            width: 'wide',
            context: 'standalone'
          }) || match.quarter(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 4;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'Q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Month
  M: {
    priority: 110,
    parse: function (string, token, match, _options) {
      var valueCallback = function (value) {
        return value - 1;
      };

      switch (token) {
        // 1, 2, ..., 12
        case 'M':
          return parseNumericPattern(numericPatterns.month, string, valueCallback);
        // 01, 02, ..., 12

        case 'MM':
          return parseNDigits(2, string, valueCallback);
        // 1st, 2nd, ..., 12th

        case 'Mo':
          return match.ordinalNumber(string, {
            unit: 'month',
            valueCallback: valueCallback
          });
        // Jan, Feb, ..., Dec

        case 'MMM':
          return match.month(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.month(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // J, F, ..., D

        case 'MMMMM':
          return match.month(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // January, February, ..., December

        case 'MMMM':
        default:
          return match.month(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.month(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.month(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 11;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'L', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Stand-alone month
  L: {
    priority: 110,
    parse: function (string, token, match, _options) {
      var valueCallback = function (value) {
        return value - 1;
      };

      switch (token) {
        // 1, 2, ..., 12
        case 'L':
          return parseNumericPattern(numericPatterns.month, string, valueCallback);
        // 01, 02, ..., 12

        case 'LL':
          return parseNDigits(2, string, valueCallback);
        // 1st, 2nd, ..., 12th

        case 'Lo':
          return match.ordinalNumber(string, {
            unit: 'month',
            valueCallback: valueCallback
          });
        // Jan, Feb, ..., Dec

        case 'LLL':
          return match.month(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.month(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // J, F, ..., D

        case 'LLLLL':
          return match.month(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // January, February, ..., December

        case 'LLLL':
        default:
          return match.month(string, {
            width: 'wide',
            context: 'standalone'
          }) || match.month(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.month(string, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 11;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Local week of year
  w: {
    priority: 100,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'w':
          return parseNumericPattern(numericPatterns.week, string);

        case 'wo':
          return match.ordinalNumber(string, {
            unit: 'week'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 53;
    },
    set: function (date, _flags, value, options) {
      return (0, _index7.default)((0, _index5.default)(date, value, options), options);
    },
    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']
  },
  // ISO week of year
  I: {
    priority: 100,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'I':
          return parseNumericPattern(numericPatterns.week, string);

        case 'Io':
          return match.ordinalNumber(string, {
            unit: 'week'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 53;
    },
    set: function (date, _flags, value, options) {
      return (0, _index6.default)((0, _index4.default)(date, value, options), options);
    },
    incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']
  },
  // Day of the month
  d: {
    priority: 90,
    subPriority: 1,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'd':
          return parseNumericPattern(numericPatterns.date, string);

        case 'do':
          return match.ordinalNumber(string, {
            unit: 'date'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (date, value, _options) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex(year);
      var month = date.getUTCMonth();

      if (isLeapYear) {
        return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
      } else {
        return value >= 1 && value <= DAYS_IN_MONTH[month];
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCDate(value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Day of year
  D: {
    priority: 90,
    subPriority: 1,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'D':
        case 'DD':
          return parseNumericPattern(numericPatterns.dayOfYear, string);

        case 'Do':
          return match.ordinalNumber(string, {
            unit: 'date'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (date, value, _options) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex(year);

      if (isLeapYear) {
        return value >= 1 && value <= 366;
      } else {
        return value >= 1 && value <= 365;
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth(0, value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'L', 'w', 'I', 'd', 'E', 'i', 'e', 'c', 't', 'T']
  },
  // Day of week
  E: {
    priority: 90,
    parse: function (string, token, match, _options) {
      switch (token) {
        // Tue
        case 'E':
        case 'EE':
        case 'EEE':
          return match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // T

        case 'EEEEE':
          return match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu

        case 'EEEEEE':
          return match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tuesday

        case 'EEEE':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 6;
    },
    set: function (date, _flags, value, options) {
      date = (0, _index2.default)(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['D', 'i', 'e', 'c', 't', 'T']
  },
  // Local day of week
  e: {
    priority: 90,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };

      switch (token) {
        // 3
        case 'e':
        case 'ee':
          // 03
          return parseNDigits(token.length, string, valueCallback);
        // 3rd

        case 'eo':
          return match.ordinalNumber(string, {
            unit: 'day',
            valueCallback: valueCallback
          });
        // Tue

        case 'eee':
          return match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // T

        case 'eeeee':
          return match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu

        case 'eeeeee':
          return match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tuesday

        case 'eeee':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 6;
    },
    set: function (date, _flags, value, options) {
      date = (0, _index2.default)(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'c', 't', 'T']
  },
  // Stand-alone local day of week
  c: {
    priority: 90,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };

      switch (token) {
        // 3
        case 'c':
        case 'cc':
          // 03
          return parseNDigits(token.length, string, valueCallback);
        // 3rd

        case 'co':
          return match.ordinalNumber(string, {
            unit: 'day',
            valueCallback: valueCallback
          });
        // Tue

        case 'ccc':
          return match.day(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.day(string, {
            width: 'short',
            context: 'standalone'
          }) || match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // T

        case 'ccccc':
          return match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // Tu

        case 'cccccc':
          return match.day(string, {
            width: 'short',
            context: 'standalone'
          }) || match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // Tuesday

        case 'cccc':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'standalone'
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.day(string, {
            width: 'short',
            context: 'standalone'
          }) || match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 6;
    },
    set: function (date, _flags, value, options) {
      date = (0, _index2.default)(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'e', 't', 'T']
  },
  // ISO day of week
  i: {
    priority: 90,
    parse: function (string, token, match, _options) {
      var valueCallback = function (value) {
        if (value === 0) {
          return 7;
        }

        return value;
      };

      switch (token) {
        // 2
        case 'i':
        case 'ii':
          // 02
          return parseNDigits(token.length, string);
        // 2nd

        case 'io':
          return match.ordinalNumber(string, {
            unit: 'day'
          });
        // Tue

        case 'iii':
          return match.day(string, {
            width: 'abbreviated',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'short',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
        // T

        case 'iiiii':
          return match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
        // Tu

        case 'iiiiii':
          return match.day(string, {
            width: 'short',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
        // Tuesday

        case 'iiii':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'short',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 7;
    },
    set: function (date, _flags, value, options) {
      date = (0, _index3.default)(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'E', 'e', 'c', 't', 'T']
  },
  // AM or PM
  a: {
    priority: 80,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'a':
        case 'aa':
        case 'aaa':
          return match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'aaaaa':
          return match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'aaaa':
        default:
          return match.dayPeriod(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['b', 'B', 'H', 'K', 'k', 't', 'T']
  },
  // AM, PM, midnight
  b: {
    priority: 80,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'b':
        case 'bb':
        case 'bbb':
          return match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'bbbbb':
          return match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'bbbb':
        default:
          return match.dayPeriod(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'B', 'H', 'K', 'k', 't', 'T']
  },
  // in the morning, in the afternoon, in the evening, at night
  B: {
    priority: 80,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'B':
        case 'BB':
        case 'BBB':
          return match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'BBBBB':
          return match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'BBBB':
        default:
          return match.dayPeriod(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'b', 't', 'T']
  },
  // Hour [1-12]
  h: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'h':
          return parseNumericPattern(numericPatterns.hour12h, string);

        case 'ho':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 12;
    },
    set: function (date, _flags, value, _options) {
      var isPM = date.getUTCHours() >= 12;

      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else if (!isPM && value === 12) {
        date.setUTCHours(0, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }

      return date;
    },
    incompatibleTokens: ['H', 'K', 'k', 't', 'T']
  },
  // Hour [0-23]
  H: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'H':
          return parseNumericPattern(numericPatterns.hour23h, string);

        case 'Ho':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 23;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(value, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'b', 'h', 'K', 'k', 't', 'T']
  },
  // Hour [0-11]
  K: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'K':
          return parseNumericPattern(numericPatterns.hour11h, string);

        case 'Ko':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 11;
    },
    set: function (date, _flags, value, _options) {
      var isPM = date.getUTCHours() >= 12;

      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }

      return date;
    },
    incompatibleTokens: ['a', 'b', 'h', 'H', 'k', 't', 'T']
  },
  // Hour [1-24]
  k: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'k':
          return parseNumericPattern(numericPatterns.hour24h, string);

        case 'ko':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 24;
    },
    set: function (date, _flags, value, _options) {
      var hours = value <= 24 ? value % 24 : value;
      date.setUTCHours(hours, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'b', 'h', 'H', 'K', 't', 'T']
  },
  // Minute
  m: {
    priority: 60,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'm':
          return parseNumericPattern(numericPatterns.minute, string);

        case 'mo':
          return match.ordinalNumber(string, {
            unit: 'minute'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 59;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMinutes(value, 0, 0);
      return date;
    },
    incompatibleTokens: ['t', 'T']
  },
  // Second
  s: {
    priority: 50,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 's':
          return parseNumericPattern(numericPatterns.second, string);

        case 'so':
          return match.ordinalNumber(string, {
            unit: 'second'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 59;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCSeconds(value, 0);
      return date;
    },
    incompatibleTokens: ['t', 'T']
  },
  // Fraction of second
  S: {
    priority: 30,
    parse: function (string, token, _match, _options) {
      var valueCallback = function (value) {
        return Math.floor(value * Math.pow(10, -token.length + 3));
      };

      return parseNDigits(token.length, string, valueCallback);
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMilliseconds(value);
      return date;
    },
    incompatibleTokens: ['t', 'T']
  },
  // Timezone (ISO-8601. +00:00 is `'Z'`)
  X: {
    priority: 10,
    parse: function (string, token, _match, _options) {
      switch (token) {
        case 'X':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);

        case 'XX':
          return parseTimezonePattern(timezonePatterns.basic, string);

        case 'XXXX':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);

        case 'XXXXX':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);

        case 'XXX':
        default:
          return parseTimezonePattern(timezonePatterns.extended, string);
      }
    },
    set: function (date, flags, value, _options) {
      if (flags.timestampIsSet) {
        return date;
      }

      return new Date(date.getTime() - value);
    },
    incompatibleTokens: ['t', 'T', 'x']
  },
  // Timezone (ISO-8601)
  x: {
    priority: 10,
    parse: function (string, token, _match, _options) {
      switch (token) {
        case 'x':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);

        case 'xx':
          return parseTimezonePattern(timezonePatterns.basic, string);

        case 'xxxx':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);

        case 'xxxxx':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);

        case 'xxx':
        default:
          return parseTimezonePattern(timezonePatterns.extended, string);
      }
    },
    set: function (date, flags, value, _options) {
      if (flags.timestampIsSet) {
        return date;
      }

      return new Date(date.getTime() - value);
    },
    incompatibleTokens: ['t', 'T', 'X']
  },
  // Seconds timestamp
  t: {
    priority: 40,
    parse: function (string, _token, _match, _options) {
      return parseAnyDigitsSigned(string);
    },
    set: function (_date, _flags, value, _options) {
      return [new Date(value * 1000), {
        timestampIsSet: true
      }];
    },
    incompatibleTokens: '*'
  },
  // Milliseconds timestamp
  T: {
    priority: 20,
    parse: function (string, _token, _match, _options) {
      return parseAnyDigitsSigned(string);
    },
    set: function (_date, _flags, value, _options) {
      return [new Date(value), {
        timestampIsSet: true
      }];
    },
    incompatibleTokens: '*'
  }
};
var _default = parsers;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/parse/index.js":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/parse/index.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = parse;

var _index = _interopRequireDefault(__webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/locale/en-US/index.js"));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/subMilliseconds/index.js"));

var _index3 = _interopRequireDefault(__webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js"));

var _index4 = _interopRequireDefault(__webpack_require__(/*! ../_lib/assign/index.js */ "./node_modules/date-fns/_lib/assign/index.js"));

var _index5 = _interopRequireDefault(__webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/_lib/format/longFormatters/index.js"));

var _index6 = _interopRequireDefault(__webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js"));

var _index7 = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/_lib/protectedTokens/index.js");

var _index8 = _interopRequireDefault(__webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js"));

var _index9 = _interopRequireDefault(__webpack_require__(/*! ./_lib/parsers/index.js */ "./node_modules/date-fns/parse/_lib/parsers/index.js"));

var _index10 = _interopRequireDefault(__webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/_lib/requiredArgs/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TIMEZONE_UNIT_PRIORITY = 10; // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var notWhitespaceRegExp = /\S/;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name parse
 * @category Common Helpers
 * @summary Parse the date.
 *
 * @description
 * Return the date parsed from string using the given format string.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters in the format string wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the format string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 5 below the table).
 *
 * Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
 * and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
 *
 * ```javascript
 * parse('23 AM', 'HH a', new Date())
 * //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
 * ```
 *
 * See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
 *
 * Accepted format string patterns:
 * | Unit                            |Prior| Pattern | Result examples                   | Notes |
 * |---------------------------------|-----|---------|-----------------------------------|-------|
 * | Era                             | 140 | G..GGG  | AD, BC                            |       |
 * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 |     | GGGGG   | A, B                              |       |
 * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
 * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
 * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
 * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
 * |                                 |     | yyyyy   | ...                               | 2,4   |
 * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
 * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
 * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
 * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
 * |                                 |     | YYYYY   | ...                               | 2,4   |
 * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
 * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
 * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
 * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
 * |                                 |     | RRRRR   | ...                               | 2,4,5 |
 * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
 * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
 * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
 * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
 * |                                 |     | uuuuu   | ...                               | 2,4   |
 * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
 * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
 * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
 * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | qq      | 01, 02, 03, 04                    |       |
 * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
 * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
 * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | MM      | 01, 02, ..., 12                   |       |
 * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | MMMM    | January, February, ..., December  | 2     |
 * |                                 |     | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
 * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | LL      | 01, 02, ..., 12                   |       |
 * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | LLLL    | January, February, ..., December  | 2     |
 * |                                 |     | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
 * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
 * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
 * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
 * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
 * |                                 |     | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
 * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
 * |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
 * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 |     | DDDD    | ...                               | 2     |
 * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
 * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
 * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
 * |                                 |     | iii     | Mon, Tue, Wed, ..., Sun           | 5     |
 * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
 * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
 * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 5     |
 * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | ee      | 02, 03, ..., 01                   |       |
 * |                                 |     | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | cc      | 02, 03, ..., 01                   |       |
 * |                                 |     | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
 * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
 * |                                 |     | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 |     | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
 * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
 * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
 * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
 * |                                 |     | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
 * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
 * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | mm      | 00, 01, ..., 59                   |       |
 * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
 * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | ss      | 00, 01, ..., 59                   |       |
 * | Seconds timestamp               |  40 | t       | 512969520                         |       |
 * |                                 |     | tt      | ...                               | 2     |
 * | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
 * |                                 |     | SS      | 00, 01, ..., 99                   |       |
 * |                                 |     | SSS     | 000, 0001, ..., 999               |       |
 * |                                 |     | SSSS    | ...                               | 2     |
 * | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
 * |                                 |     | TT      | ...                               | 2     |
 * | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
 * |                                 |     | XX      | -0800, +0530, Z                   |       |
 * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
 * |                                 |     | xx      | -0800, +0530, +0000               |       |
 * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
 * |                                 |     | PP      | May 29, 1453                      |       |
 * |                                 |     | PPP     | May 29th, 1453                    |       |
 * |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
 * | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
 * |                                 |     | pp      | 12:00:00 AM                       |       |
 * | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
 * |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
 * |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
 * |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular.
 *    In `format` function, they will produce different result:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 *    `parse` will try to match both formatting and stand-alone units interchangably.
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table:
 *    - for numerical units (`yyyyyyyy`) `parse` will try to match a number
 *      as wide as the sequence
 *    - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
 *      These variations are marked with "2" in the last column of the table.
 *
 * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 4. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` will try to guess the century of two digit year by proximity with `referenceDate`:
 *
 *    `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`
 *
 *    `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`
 *
 *    while `uu` will just assign the year as is:
 *
 *    `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`
 *
 *    `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [setISOWeekYear]{@link https://date-fns.org/docs/setISOWeekYear}
 *    and [setWeekYear]{@link https://date-fns.org/docs/setWeekYear}).
 *
 * 5. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 7. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
 *    on the given locale.
 *
 *    using `en-US` locale: `P` => `MM/dd/yyyy`
 *    using `en-US` locale: `p` => `hh:mm a`
 *    using `pt-BR` locale: `P` => `dd/MM/yyyy`
 *    using `pt-BR` locale: `p` => `HH:mm`
 *
 * Values will be assigned to the date in the descending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
 * the values will be taken from 3rd argument `referenceDate` which works as a context of parsing.
 *
 * `referenceDate` must be passed for correct work of the function.
 * If you're not sure which `referenceDate` to supply, create a new instance of Date:
 * `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
 * In this case parsing will be done in the context of the current date.
 * If `referenceDate` is `Invalid Date` or a value not convertible to valid `Date`,
 * then `Invalid Date` will be returned.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `referenceDate` will be returned.
 *
 * If parsing failed, `Invalid Date` will be returned.
 * Invalid Date is a Date, whose time value is NaN.
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Old `parse` was renamed to `toDate`.
 *   Now `parse` is a new function which parses a string using a provided format.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward (toDate no longer accepts a string)
 *   toDate(1392098430000) // Unix to timestamp
 *   toDate(new Date(2014, 1, 11, 11, 30, 30)) // Cloning the date
 *   parse('2016-01-01', 'yyyy-MM-dd', new Date())
 *   ```
 *
 * @param {String} dateString - the string to parse
 * @param {String} formatString - the string of tokens
 * @param {Date|Number} referenceDate - defines values missing from the parsed dateString
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {Date} the parsed date
 * @throws {TypeError} 3 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} `options.locale` must contain `match` property
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Parse 11 February 2014 from middle-endian format:
 * var result = parse('02/11/2014', 'MM/dd/yyyy', new Date())
 * //=> Tue Feb 11 2014 00:00:00
 *
 * @example
 * // Parse 28th of February in Esperanto locale in the context of 2010 year:
 * import eo from 'date-fns/locale/eo'
 * var result = parse('28-a de februaro', "do 'de' MMMM", new Date(2010, 0, 1), {
 *   locale: eo
 * })
 * //=> Sun Feb 28 2010 00:00:00
 */

function parse(dirtyDateString, dirtyFormatString, dirtyReferenceDate, dirtyOptions) {
  (0, _index10.default)(3, arguments);
  var dateString = String(dirtyDateString);
  var formatString = String(dirtyFormatString);
  var options = dirtyOptions || {};
  var locale = options.locale || _index.default;

  if (!locale.match) {
    throw new RangeError('locale must contain match property');
  }

  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0, _index8.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0, _index8.default)(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0, _index8.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0, _index8.default)(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (formatString === '') {
    if (dateString === '') {
      return (0, _index3.default)(dirtyReferenceDate);
    } else {
      return new Date(NaN);
    }
  }

  var subFnOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale // If timezone isn't specified, it will be set to the system timezone

  };
  var setters = [{
    priority: TIMEZONE_UNIT_PRIORITY,
    subPriority: -1,
    set: dateToSystemTimezone,
    index: 0
  }];
  var i;
  var tokens = formatString.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _index5.default[firstCharacter];
      return longFormatter(substring, locale.formatLong, subFnOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp);
  var usedTokens = [];

  for (i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (!options.useAdditionalWeekYearTokens && (0, _index7.isProtectedWeekYearToken)(token)) {
      (0, _index7.throwProtectedError)(token, formatString, dirtyDateString);
    }

    if (!options.useAdditionalDayOfYearTokens && (0, _index7.isProtectedDayOfYearToken)(token)) {
      (0, _index7.throwProtectedError)(token, formatString, dirtyDateString);
    }

    var firstCharacter = token[0];
    var parser = _index9.default[firstCharacter];

    if (parser) {
      var incompatibleTokens = parser.incompatibleTokens;

      if (Array.isArray(incompatibleTokens)) {
        var incompatibleToken = void 0;

        for (var _i = 0; _i < usedTokens.length; _i++) {
          var usedToken = usedTokens[_i].token;

          if (incompatibleTokens.indexOf(usedToken) !== -1 || usedToken === firstCharacter) {
            incompatibleToken = usedTokens[_i];
            break;
          }
        }

        if (incompatibleToken) {
          throw new RangeError("The format string mustn't contain `".concat(incompatibleToken.fullToken, "` and `").concat(token, "` at the same time"));
        }
      } else if (parser.incompatibleTokens === '*' && usedTokens.length) {
        throw new RangeError("The format string mustn't contain `".concat(token, "` and any other token at the same time"));
      }

      usedTokens.push({
        token: firstCharacter,
        fullToken: token
      });
      var parseResult = parser.parse(dateString, token, locale.match, subFnOptions);

      if (!parseResult) {
        return new Date(NaN);
      }

      setters.push({
        priority: parser.priority,
        subPriority: parser.subPriority || 0,
        set: parser.set,
        validate: parser.validate,
        value: parseResult.value,
        index: setters.length
      });
      dateString = parseResult.rest;
    } else {
      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
      } // Replace two single quote characters with one single quote character


      if (token === "''") {
        token = "'";
      } else if (firstCharacter === "'") {
        token = cleanEscapedString(token);
      } // Cut token from string, or, if string doesn't match the token, return Invalid Date


      if (dateString.indexOf(token) === 0) {
        dateString = dateString.slice(token.length);
      } else {
        return new Date(NaN);
      }
    }
  } // Check if the remaining input contains something other than whitespace


  if (dateString.length > 0 && notWhitespaceRegExp.test(dateString)) {
    return new Date(NaN);
  }

  var uniquePrioritySetters = setters.map(function (setter) {
    return setter.priority;
  }).sort(function (a, b) {
    return b - a;
  }).filter(function (priority, index, array) {
    return array.indexOf(priority) === index;
  }).map(function (priority) {
    return setters.filter(function (setter) {
      return setter.priority === priority;
    }).sort(function (a, b) {
      return b.subPriority - a.subPriority;
    });
  }).map(function (setterArray) {
    return setterArray[0];
  });
  var date = (0, _index3.default)(dirtyReferenceDate);

  if (isNaN(date)) {
    return new Date(NaN);
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/37


  var utcDate = (0, _index2.default)(date, (0, _index6.default)(date));
  var flags = {};

  for (i = 0; i < uniquePrioritySetters.length; i++) {
    var setter = uniquePrioritySetters[i];

    if (setter.validate && !setter.validate(utcDate, setter.value, subFnOptions)) {
      return new Date(NaN);
    }

    var result = setter.set(utcDate, flags, setter.value, subFnOptions); // Result is tuple (date, flags)

    if (result[0]) {
      utcDate = result[0];
      (0, _index4.default)(flags, result[1]); // Result is date
    } else {
      utcDate = result;
    }
  }

  return utcDate;
}

function dateToSystemTimezone(date, flags) {
  if (flags.timestampIsSet) {
    return date;
  }

  var convertedDate = new Date(0);
  convertedDate.setFullYear(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  convertedDate.setHours(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
  return convertedDate;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/subMilliseconds/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/subMilliseconds/index.js ***!
  \********************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = subMilliseconds;

var _index = _interopRequireDefault(__webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js"));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/addMilliseconds/index.js"));

var _index3 = _interopRequireDefault(__webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/_lib/requiredArgs/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */
function subMilliseconds(dirtyDate, dirtyAmount) {
  (0, _index3.default)(2, arguments);
  var amount = (0, _index.default)(dirtyAmount);
  return (0, _index2.default)(dirtyDate, -amount);
}

module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/toDate/index.js":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/toDate/index.js ***!
  \***********************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = toDate;

var _index = _interopRequireDefault(__webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/_lib/requiredArgs/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0, _index.default)(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-autobind/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-autobind/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./lib/autoBind */ "./node_modules/react-autobind/lib/autoBind.js");


/***/ }),

/***/ "./node_modules/react-autobind/lib/autoBind.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-autobind/lib/autoBind.js ***!
  \*****************************************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = autoBind;
var wontBind = ['constructor', 'render', 'componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'shouldComponentUpdate', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount'];

var toBind = [];

function autoBind(context) {
  if (context === undefined) {
    console.error('Autobind error: No context provided.');
    return;
  }

  var objPrototype = Object.getPrototypeOf(context);

  if (arguments.length > 1) {
    // If a list of methods to bind is provided, use it.
    toBind = Array.prototype.slice.call(arguments, 1);
  } else {
    // If no list of methods to bind is provided, bind all available methods in class.
    toBind = Object.getOwnPropertyNames(objPrototype);
  }

  toBind.forEach(function (method) {
    var descriptor = Object.getOwnPropertyDescriptor(objPrototype, method);

    if (descriptor === undefined) {
      console.warn('Autobind: "' + method + '" method not found in class.');
      return;
    }

    // Return if it's special case function or if not a function at all
    if (wontBind.indexOf(method) !== -1 || typeof descriptor.value !== 'function') {
      return;
    }

    Object.defineProperty(objPrototype, method, boundMethod(objPrototype, method, descriptor));
  });
}

/**
* From autobind-decorator (https://github.com/andreypopp/autobind-decorator/tree/master)
* Return a descriptor removing the value and returning a getter
* The getter will return a .bind version of the function
* and memoize the result against a symbol on the instance
*/
function boundMethod(objPrototype, method, descriptor) {
  var fn = descriptor.value;

  return {
    configurable: true,
    get: function get() {
      if (this === objPrototype || this.hasOwnProperty(method)) {
        return fn;
      }

      var boundFn = fn.bind(this);
      Object.defineProperty(this, method, {
        value: boundFn,
        configurable: true,
        writable: true
      });
      return boundFn;
    }
  };
}
module.exports = exports['default'];


/***/ }),

/***/ "./node_modules/react-day-picker/DayPickerInput/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-day-picker/DayPickerInput/index.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ../build/DayPickerInput */ "./node_modules/react-day-picker/build/DayPickerInput.js");


/***/ }),

/***/ "./node_modules/react-day-picker/build/Caption.js":
/*!********************************************************!*\
  !*** ./node_modules/react-day-picker/build/Caption.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _LocaleUtils = __webpack_require__(/*! ./LocaleUtils */ "./node_modules/react-day-picker/build/LocaleUtils.js");

var _LocaleUtils2 = _interopRequireDefault(_LocaleUtils);

var _keys = __webpack_require__(/*! ./keys */ "./node_modules/react-day-picker/build/keys.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Caption = function (_Component) {
  _inherits(Caption, _Component);

  function Caption(props) {
    _classCallCheck(this, Caption);

    var _this = _possibleConstructorReturn(this, (Caption.__proto__ || Object.getPrototypeOf(Caption)).call(this, props));

    _this.handleKeyUp = _this.handleKeyUp.bind(_this);
    return _this;
  }

  _createClass(Caption, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.locale !== this.props.locale || nextProps.classNames !== this.props.classNames || nextProps.date.getMonth() !== this.props.date.getMonth() || nextProps.date.getFullYear() !== this.props.date.getFullYear();
    }
  }, {
    key: 'handleKeyUp',
    value: function handleKeyUp(e) {
      if (e.keyCode === _keys.ENTER) {
        this.props.onClick(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classNames = _props.classNames,
          date = _props.date,
          months = _props.months,
          locale = _props.locale,
          localeUtils = _props.localeUtils,
          onClick = _props.onClick;

      return _react2.default.createElement(
        'div',
        { className: classNames.caption, role: 'heading', 'aria-live': 'polite' },
        _react2.default.createElement(
          'div',
          { onClick: onClick, onKeyUp: this.handleKeyUp },
          months ? months[date.getMonth()] + ' ' + date.getFullYear() : localeUtils.formatMonthTitle(date, locale)
        )
      );
    }
  }]);

  return Caption;
}(_react.Component);

Caption.defaultProps = {
  localeUtils: _LocaleUtils2.default
};
exports.default = Caption;
//# sourceMappingURL=Caption.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/build/DateUtils.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-day-picker/build/DateUtils.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.clone = clone;
exports.isDate = isDate;
exports.addMonths = addMonths;
exports.isSameDay = isSameDay;
exports.isSameMonth = isSameMonth;
exports.isDayBefore = isDayBefore;
exports.isDayAfter = isDayAfter;
exports.isPastDay = isPastDay;
exports.isFutureDay = isFutureDay;
exports.isDayBetween = isDayBetween;
exports.addDayToRange = addDayToRange;
exports.isDayInRange = isDayInRange;
exports.getWeekNumber = getWeekNumber;
/**
 * Clone a date object.
 *
 * @export
 * @param  {Date} d The date to clone
 * @return {Date} The cloned date
 */
function clone(d) {
  return new Date(d.getTime());
}

/**
 * Return `true` if the passed value is a valid JavaScript Date object.
 *
 * @export
 * @param {any} value
 * @returns {Boolean}
 */
function isDate(value) {
  return value instanceof Date && !isNaN(value.valueOf());
}

/**
 * Return `d` as a new date with `n` months added.
 *
 * @export
 * @param {Date} d
 * @param {number} n
 */
function addMonths(d, n) {
  var newDate = clone(d);
  newDate.setMonth(d.getMonth() + n);
  return newDate;
}

/**
 * Return `true` if two dates are the same day, ignoring the time.
 *
 * @export
 * @param  {Date}  d1
 * @param  {Date}  d2
 * @return {Boolean}
 */
function isSameDay(d1, d2) {
  if (!d1 || !d2) {
    return false;
  }
  return d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear();
}

/**
 * Return `true` if two dates fall in the same month.
 *
 * @export
 * @param  {Date}  d1
 * @param  {Date}  d2
 * @return {Boolean}
 */
function isSameMonth(d1, d2) {
  if (!d1 || !d2) {
    return false;
  }
  return d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear();
}

/**
 * Returns `true` if the first day is before the second day.
 *
 * @export
 * @param {Date} d1
 * @param {Date} d2
 * @returns {Boolean}
 */
function isDayBefore(d1, d2) {
  var day1 = clone(d1).setHours(0, 0, 0, 0);
  var day2 = clone(d2).setHours(0, 0, 0, 0);
  return day1 < day2;
}

/**
 * Returns `true` if the first day is after the second day.
 *
 * @export
 * @param {Date} d1
 * @param {Date} d2
 * @returns {Boolean}
 */
function isDayAfter(d1, d2) {
  var day1 = clone(d1).setHours(0, 0, 0, 0);
  var day2 = clone(d2).setHours(0, 0, 0, 0);
  return day1 > day2;
}

/**
 * Return `true` if a day is in the past, e.g. yesterday or any day
 * before yesterday.
 *
 * @export
 * @param  {Date}  d
 * @return {Boolean}
 */
function isPastDay(d) {
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  return isDayBefore(d, today);
}

/**
 * Return `true` if a day is in the future, e.g. tomorrow or any day
 * after tomorrow.
 *
 * @export
 * @param  {Date}  d
 * @return {Boolean}
 */
function isFutureDay(d) {
  var tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  tomorrow.setHours(0, 0, 0, 0);
  return d >= tomorrow;
}

/**
 * Return `true` if day `d` is between days `d1` and `d2`,
 * without including them.
 *
 * @export
 * @param  {Date}  d
 * @param  {Date}  d1
 * @param  {Date}  d2
 * @return {Boolean}
 */
function isDayBetween(d, d1, d2) {
  var date = clone(d);
  date.setHours(0, 0, 0, 0);
  return isDayAfter(date, d1) && isDayBefore(date, d2) || isDayAfter(date, d2) && isDayBefore(date, d1);
}

/**
 * Add a day to a range and return a new range. A range is an object with
 * `from` and `to` days.
 *
 * @export
 * @param {Date} day
 * @param {Object} range
 * @return {Object} Returns a new range object
 */
function addDayToRange(day) {
  var range = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { from: null, to: null };
  var from = range.from,
      to = range.to;

  if (!from) {
    from = day;
  } else if (from && to && isSameDay(from, to) && isSameDay(day, from)) {
    from = null;
    to = null;
  } else if (to && isDayBefore(day, from)) {
    from = day;
  } else if (to && isSameDay(day, to)) {
    from = day;
    to = day;
  } else {
    to = day;
    if (isDayBefore(to, from)) {
      to = from;
      from = day;
    }
  }

  return { from: from, to: to };
}

/**
 * Return `true` if a day is included in a range of days.
 *
 * @export
 * @param  {Date}  day
 * @param  {Object}  range
 * @return {Boolean}
 */
function isDayInRange(day, range) {
  var from = range.from,
      to = range.to;

  return from && isSameDay(day, from) || to && isSameDay(day, to) || from && to && isDayBetween(day, from, to);
}

/**
 * Return the year's week number (as per ISO, i.e. with the week starting from monday)
 * for the given day.
 *
 * @export
 * @param {Date} day
 * @returns {Number}
 */
function getWeekNumber(day) {
  var date = clone(day);
  date.setHours(0, 0, 0);
  date.setDate(date.getDate() + 4 - (date.getDay() || 7));
  return Math.ceil(((date - new Date(date.getFullYear(), 0, 1)) / 8.64e7 + 1) / 7);
}

exports.default = {
  addDayToRange: addDayToRange,
  addMonths: addMonths,
  clone: clone,
  getWeekNumber: getWeekNumber,
  isDate: isDate,
  isDayAfter: isDayAfter,
  isDayBefore: isDayBefore,
  isDayBetween: isDayBetween,
  isDayInRange: isDayInRange,
  isFutureDay: isFutureDay,
  isPastDay: isPastDay,
  isSameDay: isSameDay,
  isSameMonth: isSameMonth
};
//# sourceMappingURL=DateUtils.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/build/Day.js":
/*!****************************************************!*\
  !*** ./node_modules/react-day-picker/build/Day.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _DateUtils = __webpack_require__(/*! ./DateUtils */ "./node_modules/react-day-picker/build/DateUtils.js");

var _Helpers = __webpack_require__(/*! ./Helpers */ "./node_modules/react-day-picker/build/Helpers.js");

var _classNames = __webpack_require__(/*! ./classNames */ "./node_modules/react-day-picker/build/classNames.js");

var _classNames2 = _interopRequireDefault(_classNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable jsx-a11y/no-static-element-interactions, react/forbid-prop-types */

function handleEvent(handler, day, modifiers) {
  if (!handler) {
    return undefined;
  }
  return function (e) {
    e.persist();
    handler(day, modifiers, e);
  };
}

var Day = function (_Component) {
  _inherits(Day, _Component);

  function Day() {
    _classCallCheck(this, Day);

    return _possibleConstructorReturn(this, (Day.__proto__ || Object.getPrototypeOf(Day)).apply(this, arguments));
  }

  _createClass(Day, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _this2 = this;

      var propNames = Object.keys(this.props);
      var nextPropNames = Object.keys(nextProps);
      if (propNames.length !== nextPropNames.length) {
        return true;
      }
      return propNames.some(function (name) {
        if (name === 'modifiers' || name === 'modifiersStyles' || name === 'classNames') {
          var prop = _this2.props[name];
          var nextProp = nextProps[name];
          var modifiers = Object.keys(prop);
          var nextModifiers = Object.keys(nextProp);
          if (modifiers.length !== nextModifiers.length) {
            return true;
          }
          return modifiers.some(function (mod) {
            return !(0, _Helpers.hasOwnProp)(nextProp, mod) || prop[mod] !== nextProp[mod];
          });
        }
        if (name === 'day') {
          return !(0, _DateUtils.isSameDay)(_this2.props[name], nextProps[name]);
        }
        return !(0, _Helpers.hasOwnProp)(nextProps, name) || _this2.props[name] !== nextProps[name];
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classNames = _props.classNames,
          modifiersStyles = _props.modifiersStyles,
          day = _props.day,
          tabIndex = _props.tabIndex,
          empty = _props.empty,
          modifiers = _props.modifiers,
          onMouseEnter = _props.onMouseEnter,
          onMouseLeave = _props.onMouseLeave,
          onMouseUp = _props.onMouseUp,
          onMouseDown = _props.onMouseDown,
          onClick = _props.onClick,
          onKeyDown = _props.onKeyDown,
          onTouchStart = _props.onTouchStart,
          onTouchEnd = _props.onTouchEnd,
          onFocus = _props.onFocus,
          ariaLabel = _props.ariaLabel,
          ariaDisabled = _props.ariaDisabled,
          ariaSelected = _props.ariaSelected,
          children = _props.children;


      var className = classNames.day;
      if (classNames !== _classNames2.default) {
        // When using CSS modules prefix the modifier as required by the BEM syntax
        className += ' ' + Object.keys(modifiers).join(' ');
      } else {
        className += Object.keys(modifiers).map(function (modifier) {
          return ' ' + className + '--' + modifier;
        }).join('');
      }

      var style = void 0;
      if (modifiersStyles) {
        Object.keys(modifiers).filter(function (modifier) {
          return !!modifiersStyles[modifier];
        }).forEach(function (modifier) {
          style = _extends({}, style, modifiersStyles[modifier]);
        });
      }

      if (empty) {
        return _react2.default.createElement('div', { 'aria-disabled': true, className: className, style: style });
      }
      return _react2.default.createElement(
        'div',
        {
          className: className,
          tabIndex: tabIndex,
          style: style,
          role: 'gridcell',
          'aria-label': ariaLabel,
          'aria-disabled': ariaDisabled,
          'aria-selected': ariaSelected,
          onClick: handleEvent(onClick, day, modifiers),
          onKeyDown: handleEvent(onKeyDown, day, modifiers),
          onMouseEnter: handleEvent(onMouseEnter, day, modifiers),
          onMouseLeave: handleEvent(onMouseLeave, day, modifiers),
          onMouseUp: handleEvent(onMouseUp, day, modifiers),
          onMouseDown: handleEvent(onMouseDown, day, modifiers),
          onTouchEnd: handleEvent(onTouchEnd, day, modifiers),
          onTouchStart: handleEvent(onTouchStart, day, modifiers),
          onFocus: handleEvent(onFocus, day, modifiers)
        },
        children
      );
    }
  }]);

  return Day;
}(_react.Component);

Day.defaultProps = {
  tabIndex: -1
};
Day.defaultProps = {
  modifiers: {},
  modifiersStyles: {},
  empty: false
};
exports.default = Day;
//# sourceMappingURL=Day.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/build/DayPicker.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-day-picker/build/DayPicker.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ModifiersUtils = exports.LocaleUtils = exports.DateUtils = exports.DayPicker = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _Caption = __webpack_require__(/*! ./Caption */ "./node_modules/react-day-picker/build/Caption.js");

var _Caption2 = _interopRequireDefault(_Caption);

var _Navbar = __webpack_require__(/*! ./Navbar */ "./node_modules/react-day-picker/build/Navbar.js");

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Month = __webpack_require__(/*! ./Month */ "./node_modules/react-day-picker/build/Month.js");

var _Month2 = _interopRequireDefault(_Month);

var _Weekday = __webpack_require__(/*! ./Weekday */ "./node_modules/react-day-picker/build/Weekday.js");

var _Weekday2 = _interopRequireDefault(_Weekday);

var _Helpers = __webpack_require__(/*! ./Helpers */ "./node_modules/react-day-picker/build/Helpers.js");

var Helpers = _interopRequireWildcard(_Helpers);

var _DateUtils = __webpack_require__(/*! ./DateUtils */ "./node_modules/react-day-picker/build/DateUtils.js");

var DateUtils = _interopRequireWildcard(_DateUtils);

var _LocaleUtils = __webpack_require__(/*! ./LocaleUtils */ "./node_modules/react-day-picker/build/LocaleUtils.js");

var LocaleUtils = _interopRequireWildcard(_LocaleUtils);

var _ModifiersUtils = __webpack_require__(/*! ./ModifiersUtils */ "./node_modules/react-day-picker/build/ModifiersUtils.js");

var ModifiersUtils = _interopRequireWildcard(_ModifiersUtils);

var _classNames = __webpack_require__(/*! ./classNames */ "./node_modules/react-day-picker/build/classNames.js");

var _classNames2 = _interopRequireDefault(_classNames);

var _keys = __webpack_require__(/*! ./keys */ "./node_modules/react-day-picker/build/keys.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DayPicker = exports.DayPicker = function (_Component) {
  _inherits(DayPicker, _Component);

  function DayPicker(props) {
    _classCallCheck(this, DayPicker);

    var _this = _possibleConstructorReturn(this, (DayPicker.__proto__ || Object.getPrototypeOf(DayPicker)).call(this, props));

    _this.dayPicker = null;

    _this.showNextMonth = function (callback) {
      if (!_this.allowNextMonth()) {
        return;
      }
      var deltaMonths = _this.props.pagedNavigation ? _this.props.numberOfMonths : 1;
      var nextMonth = DateUtils.addMonths(_this.state.currentMonth, deltaMonths);
      _this.showMonth(nextMonth, callback);
    };

    _this.showPreviousMonth = function (callback) {
      if (!_this.allowPreviousMonth()) {
        return;
      }
      var deltaMonths = _this.props.pagedNavigation ? _this.props.numberOfMonths : 1;
      var previousMonth = DateUtils.addMonths(_this.state.currentMonth, -deltaMonths);
      _this.showMonth(previousMonth, callback);
    };

    _this.handleKeyDown = function (e) {
      e.persist();

      switch (e.keyCode) {
        case _keys.LEFT:
          if (_this.props.dir === 'rtl') {
            _this.showNextMonth();
          } else {
            _this.showPreviousMonth();
          }
          Helpers.cancelEvent(e);
          break;
        case _keys.RIGHT:
          if (_this.props.dir === 'rtl') {
            _this.showPreviousMonth();
          } else {
            _this.showNextMonth();
          }
          Helpers.cancelEvent(e);
          break;
        case _keys.UP:
          _this.showPreviousYear();
          Helpers.cancelEvent(e);
          break;
        case _keys.DOWN:
          _this.showNextYear();
          Helpers.cancelEvent(e);
          break;
        default:
          break;
      }

      if (_this.props.onKeyDown) {
        _this.props.onKeyDown(e);
      }
    };

    _this.handleDayKeyDown = function (day, modifiers, e) {
      e.persist();

      switch (e.keyCode) {
        case _keys.LEFT:
          Helpers.cancelEvent(e);
          if (_this.props.dir === 'rtl') {
            _this.focusNextDay(e.target);
          } else {
            _this.focusPreviousDay(e.target);
          }
          break;
        case _keys.RIGHT:
          Helpers.cancelEvent(e);
          if (_this.props.dir === 'rtl') {
            _this.focusPreviousDay(e.target);
          } else {
            _this.focusNextDay(e.target);
          }
          break;
        case _keys.UP:
          Helpers.cancelEvent(e);
          _this.focusPreviousWeek(e.target);
          break;
        case _keys.DOWN:
          Helpers.cancelEvent(e);
          _this.focusNextWeek(e.target);
          break;
        case _keys.ENTER:
        case _keys.SPACE:
          Helpers.cancelEvent(e);
          if (_this.props.onDayClick) {
            _this.handleDayClick(day, modifiers, e);
          }
          break;
        default:
          break;
      }
      if (_this.props.onDayKeyDown) {
        _this.props.onDayKeyDown(day, modifiers, e);
      }
    };

    _this.handleDayClick = function (day, modifiers, e) {
      e.persist();

      if (modifiers[_this.props.classNames.outside] && _this.props.enableOutsideDaysClick) {
        _this.handleOutsideDayClick(day);
      }
      if (_this.props.onDayClick) {
        _this.props.onDayClick(day, modifiers, e);
      }
    };

    _this.handleTodayButtonClick = function (e) {
      var today = new Date();
      var month = new Date(today.getFullYear(), today.getMonth());
      _this.showMonth(month);
      e.target.blur();
      if (_this.props.onTodayButtonClick) {
        e.persist();
        _this.props.onTodayButtonClick(new Date(today.getFullYear(), today.getMonth(), today.getDate()), ModifiersUtils.getModifiersForDay(today, _this.props.modifiers), e);
      }
    };

    var currentMonth = _this.getCurrentMonthFromProps(props);
    _this.state = { currentMonth: currentMonth };
    return _this;
  }

  _createClass(DayPicker, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      // Changing the `month` props means changing the current displayed month
      if (prevProps.month !== this.props.month && !DateUtils.isSameMonth(prevProps.month, this.props.month)) {
        var currentMonth = this.getCurrentMonthFromProps(this.props);
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({ currentMonth: currentMonth });
      }
    }
  }, {
    key: 'getCurrentMonthFromProps',


    /**
     * Return the month to be shown in the calendar based on the component props.
     *
     * @param {Object} props
     * @returns Date
     * @memberof DayPicker
     * @private
     */
    value: function getCurrentMonthFromProps(props) {
      var initialMonth = Helpers.startOfMonth(props.month || props.initialMonth || new Date());
      var currentMonth = initialMonth;

      if (props.pagedNavigation && props.numberOfMonths > 1 && props.fromMonth) {
        var fromMonth = Helpers.startOfMonth(props.fromMonth);
        var diffInMonths = Helpers.getMonthsDiff(fromMonth, currentMonth);
        currentMonth = DateUtils.addMonths(fromMonth, Math.floor(diffInMonths / props.numberOfMonths) * props.numberOfMonths);
      } else if (props.toMonth && props.numberOfMonths > 1 && Helpers.getMonthsDiff(currentMonth, props.toMonth) <= 0) {
        currentMonth = DateUtils.addMonths(Helpers.startOfMonth(props.toMonth), 1 - this.props.numberOfMonths);
      }
      return currentMonth;
    }
  }, {
    key: 'getNextNavigableMonth',
    value: function getNextNavigableMonth() {
      return DateUtils.addMonths(this.state.currentMonth, this.props.numberOfMonths);
    }
  }, {
    key: 'getPreviousNavigableMonth',
    value: function getPreviousNavigableMonth() {
      return DateUtils.addMonths(this.state.currentMonth, -1);
    }
  }, {
    key: 'allowPreviousMonth',
    value: function allowPreviousMonth() {
      var previousMonth = DateUtils.addMonths(this.state.currentMonth, -1);
      return this.allowMonth(previousMonth);
    }
  }, {
    key: 'allowNextMonth',
    value: function allowNextMonth() {
      var nextMonth = DateUtils.addMonths(this.state.currentMonth, this.props.numberOfMonths);
      return this.allowMonth(nextMonth);
    }
  }, {
    key: 'allowMonth',
    value: function allowMonth(d) {
      var _props = this.props,
          fromMonth = _props.fromMonth,
          toMonth = _props.toMonth,
          canChangeMonth = _props.canChangeMonth;

      if (!canChangeMonth || fromMonth && Helpers.getMonthsDiff(fromMonth, d) < 0 || toMonth && Helpers.getMonthsDiff(toMonth, d) > 0) {
        return false;
      }
      return true;
    }
  }, {
    key: 'allowYearChange',
    value: function allowYearChange() {
      return this.props.canChangeMonth;
    }
  }, {
    key: 'showMonth',
    value: function showMonth(d, callback) {
      var _this2 = this;

      if (!this.allowMonth(d)) {
        return;
      }
      this.setState({ currentMonth: Helpers.startOfMonth(d) }, function () {
        if (callback) {
          callback();
        }
        if (_this2.props.onMonthChange) {
          _this2.props.onMonthChange(_this2.state.currentMonth);
        }
      });
    }
  }, {
    key: 'showNextYear',
    value: function showNextYear() {
      if (!this.allowYearChange()) {
        return;
      }
      var nextMonth = DateUtils.addMonths(this.state.currentMonth, 12);
      this.showMonth(nextMonth);
    }
  }, {
    key: 'showPreviousYear',
    value: function showPreviousYear() {
      if (!this.allowYearChange()) {
        return;
      }
      var nextMonth = DateUtils.addMonths(this.state.currentMonth, -12);
      this.showMonth(nextMonth);
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.wrapper.focus();
    }
  }, {
    key: 'focusFirstDayOfMonth',
    value: function focusFirstDayOfMonth() {
      Helpers.getDayNodes(this.dayPicker, this.props.classNames)[0].focus();
    }
  }, {
    key: 'focusLastDayOfMonth',
    value: function focusLastDayOfMonth() {
      var dayNodes = Helpers.getDayNodes(this.dayPicker, this.props.classNames);
      dayNodes[dayNodes.length - 1].focus();
    }
  }, {
    key: 'focusPreviousDay',
    value: function focusPreviousDay(dayNode) {
      var _this3 = this;

      var dayNodes = Helpers.getDayNodes(this.dayPicker, this.props.classNames);
      var dayNodeIndex = Helpers.nodeListToArray(dayNodes).indexOf(dayNode);
      if (dayNodeIndex === -1) return;
      if (dayNodeIndex === 0) {
        this.showPreviousMonth(function () {
          return _this3.focusLastDayOfMonth();
        });
      } else {
        dayNodes[dayNodeIndex - 1].focus();
      }
    }
  }, {
    key: 'focusNextDay',
    value: function focusNextDay(dayNode) {
      var _this4 = this;

      var dayNodes = Helpers.getDayNodes(this.dayPicker, this.props.classNames);
      var dayNodeIndex = Helpers.nodeListToArray(dayNodes).indexOf(dayNode);
      if (dayNodeIndex === -1) return;
      if (dayNodeIndex === dayNodes.length - 1) {
        this.showNextMonth(function () {
          return _this4.focusFirstDayOfMonth();
        });
      } else {
        dayNodes[dayNodeIndex + 1].focus();
      }
    }
  }, {
    key: 'focusNextWeek',
    value: function focusNextWeek(dayNode) {
      var _this5 = this;

      var dayNodes = Helpers.getDayNodes(this.dayPicker, this.props.classNames);
      var dayNodeIndex = Helpers.nodeListToArray(dayNodes).indexOf(dayNode);
      var isInLastWeekOfMonth = dayNodeIndex > dayNodes.length - 8;

      if (isInLastWeekOfMonth) {
        this.showNextMonth(function () {
          var daysAfterIndex = dayNodes.length - dayNodeIndex;
          var nextMonthDayNodeIndex = 7 - daysAfterIndex;
          Helpers.getDayNodes(_this5.dayPicker, _this5.props.classNames)[nextMonthDayNodeIndex].focus();
        });
      } else {
        dayNodes[dayNodeIndex + 7].focus();
      }
    }
  }, {
    key: 'focusPreviousWeek',
    value: function focusPreviousWeek(dayNode) {
      var _this6 = this;

      var dayNodes = Helpers.getDayNodes(this.dayPicker, this.props.classNames);
      var dayNodeIndex = Helpers.nodeListToArray(dayNodes).indexOf(dayNode);
      var isInFirstWeekOfMonth = dayNodeIndex <= 6;

      if (isInFirstWeekOfMonth) {
        this.showPreviousMonth(function () {
          var previousMonthDayNodes = Helpers.getDayNodes(_this6.dayPicker, _this6.props.classNames);
          var startOfLastWeekOfMonth = previousMonthDayNodes.length - 7;
          var previousMonthDayNodeIndex = startOfLastWeekOfMonth + dayNodeIndex;
          previousMonthDayNodes[previousMonthDayNodeIndex].focus();
        });
      } else {
        dayNodes[dayNodeIndex - 7].focus();
      }
    }

    // Event handlers

  }, {
    key: 'handleOutsideDayClick',
    value: function handleOutsideDayClick(day) {
      var currentMonth = this.state.currentMonth;
      var numberOfMonths = this.props.numberOfMonths;

      var diffInMonths = Helpers.getMonthsDiff(currentMonth, day);
      if (diffInMonths > 0 && diffInMonths >= numberOfMonths) {
        this.showNextMonth();
      } else if (diffInMonths < 0) {
        this.showPreviousMonth();
      }
    }
  }, {
    key: 'renderNavbar',
    value: function renderNavbar() {
      var _props2 = this.props,
          labels = _props2.labels,
          locale = _props2.locale,
          localeUtils = _props2.localeUtils,
          canChangeMonth = _props2.canChangeMonth,
          navbarElement = _props2.navbarElement,
          attributes = _objectWithoutProperties(_props2, ['labels', 'locale', 'localeUtils', 'canChangeMonth', 'navbarElement']);

      if (!canChangeMonth) return null;

      var props = {
        month: this.state.currentMonth,
        classNames: this.props.classNames,
        className: this.props.classNames.navBar,
        nextMonth: this.getNextNavigableMonth(),
        previousMonth: this.getPreviousNavigableMonth(),
        showPreviousButton: this.allowPreviousMonth(),
        showNextButton: this.allowNextMonth(),
        onNextClick: this.showNextMonth,
        onPreviousClick: this.showPreviousMonth,
        dir: attributes.dir,
        labels: labels,
        locale: locale,
        localeUtils: localeUtils
      };
      return _react2.default.isValidElement(navbarElement) ? _react2.default.cloneElement(navbarElement, props) : _react2.default.createElement(navbarElement, props);
    }
  }, {
    key: 'renderMonths',
    value: function renderMonths() {
      var months = [];
      var firstDayOfWeek = Helpers.getFirstDayOfWeekFromProps(this.props);
      for (var i = 0; i < this.props.numberOfMonths; i += 1) {
        var month = DateUtils.addMonths(this.state.currentMonth, i);
        months.push(_react2.default.createElement(_Month2.default, _extends({
          key: i
        }, this.props, {
          month: month,
          firstDayOfWeek: firstDayOfWeek,
          onDayKeyDown: this.handleDayKeyDown,
          onDayClick: this.handleDayClick
        })));
      }

      if (this.props.reverseMonths) {
        months.reverse();
      }
      return months;
    }
  }, {
    key: 'renderFooter',
    value: function renderFooter() {
      if (this.props.todayButton) {
        return _react2.default.createElement(
          'div',
          { className: this.props.classNames.footer },
          this.renderTodayButton()
        );
      }
      return null;
    }
  }, {
    key: 'renderTodayButton',
    value: function renderTodayButton() {
      return _react2.default.createElement(
        'button',
        {
          type: 'button',
          tabIndex: 0,
          className: this.props.classNames.todayButton,
          'aria-label': this.props.todayButton,
          onClick: this.handleTodayButtonClick
        },
        this.props.todayButton
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this7 = this;

      var className = this.props.classNames.container;

      if (!this.props.onDayClick) {
        className = className + ' ' + this.props.classNames.interactionDisabled;
      }
      if (this.props.className) {
        className = className + ' ' + this.props.className;
      }
      return _react2.default.createElement(
        'div',
        _extends({}, this.props.containerProps, {
          className: className,
          ref: function ref(el) {
            return _this7.dayPicker = el;
          },
          lang: this.props.locale
        }),
        _react2.default.createElement(
          'div',
          {
            className: this.props.classNames.wrapper,
            ref: function ref(el) {
              return _this7.wrapper = el;
            },
            tabIndex: this.props.canChangeMonth && typeof this.props.tabIndex !== 'undefined' ? this.props.tabIndex : -1,
            onKeyDown: this.handleKeyDown,
            onFocus: this.props.onFocus,
            onBlur: this.props.onBlur
          },
          this.renderNavbar(),
          _react2.default.createElement(
            'div',
            { className: this.props.classNames.months },
            this.renderMonths()
          ),
          this.renderFooter()
        )
      );
    }
  }]);

  return DayPicker;
}(_react.Component);

DayPicker.defaultProps = {
  classNames: _classNames2.default,
  tabIndex: 0,
  numberOfMonths: 1,
  labels: {
    previousMonth: 'Previous Month',
    nextMonth: 'Next Month'
  },
  locale: 'en',
  localeUtils: LocaleUtils,
  showOutsideDays: false,
  enableOutsideDaysClick: true,
  fixedWeeks: false,
  canChangeMonth: true,
  reverseMonths: false,
  pagedNavigation: false,
  showWeekNumbers: false,
  showWeekDays: true,
  renderDay: function renderDay(day) {
    return day.getDate();
  },
  renderWeek: function renderWeek(weekNumber) {
    return weekNumber;
  },
  weekdayElement: _react2.default.createElement(_Weekday2.default, null),
  navbarElement: _react2.default.createElement(_Navbar2.default, { classNames: _classNames2.default }),
  captionElement: _react2.default.createElement(_Caption2.default, { classNames: _classNames2.default })
};
DayPicker.VERSION = '7.4.10';


DayPicker.DateUtils = DateUtils;
DayPicker.LocaleUtils = LocaleUtils;
DayPicker.ModifiersUtils = ModifiersUtils;

exports.DateUtils = DateUtils;
exports.LocaleUtils = LocaleUtils;
exports.ModifiersUtils = ModifiersUtils;
exports.default = DayPicker;
//# sourceMappingURL=DayPicker.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/build/DayPickerInput.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-day-picker/build/DayPickerInput.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.HIDE_TIMEOUT = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.OverlayComponent = OverlayComponent;
exports.defaultFormat = defaultFormat;
exports.defaultParse = defaultParse;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _DayPicker = __webpack_require__(/*! ./DayPicker */ "./node_modules/react-day-picker/build/DayPicker.js");

var _DayPicker2 = _interopRequireDefault(_DayPicker);

var _DateUtils = __webpack_require__(/*! ./DateUtils */ "./node_modules/react-day-picker/build/DateUtils.js");

var _ModifiersUtils = __webpack_require__(/*! ./ModifiersUtils */ "./node_modules/react-day-picker/build/ModifiersUtils.js");

var _keys = __webpack_require__(/*! ./keys */ "./node_modules/react-day-picker/build/keys.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// When clicking on a day cell, overlay will be hidden after this timeout
var HIDE_TIMEOUT = exports.HIDE_TIMEOUT = 100;

/**
 * The default component used as Overlay.
 *
 * @param {Object} props
 */
function OverlayComponent(_ref) {
  var input = _ref.input,
      selectedDay = _ref.selectedDay,
      month = _ref.month,
      children = _ref.children,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ['input', 'selectedDay', 'month', 'children', 'classNames']);

  return _react2.default.createElement(
    'div',
    _extends({ className: classNames.overlayWrapper }, props),
    _react2.default.createElement(
      'div',
      { className: classNames.overlay },
      children
    )
  );
}

/**
 * The default function used to format a Date to String, passed to the `format`
 * prop.
 * @param {Date} d
 * @return {String}
 */
function defaultFormat(d) {
  if ((0, _DateUtils.isDate)(d)) {
    var year = d.getFullYear();
    var month = '' + (d.getMonth() + 1);
    var day = '' + d.getDate();
    return year + '-' + month + '-' + day;
  }
  return '';
}

/**
 * The default function used to parse a String as Date, passed to the `parse`
 * prop.
 * @param {String} str
 * @return {Date}
 */
function defaultParse(str) {
  if (typeof str !== 'string') {
    return undefined;
  }
  var split = str.split('-');
  if (split.length !== 3) {
    return undefined;
  }
  var year = parseInt(split[0], 10);
  var month = parseInt(split[1], 10) - 1;
  var day = parseInt(split[2], 10);
  if (isNaN(year) || String(year).length > 4 || isNaN(month) || isNaN(day) || day <= 0 || day > 31 || month < 0 || month >= 12) {
    return undefined;
  }

  return new Date(year, month, day, 12, 0, 0, 0); // always set noon to avoid time zone issues
}

var DayPickerInput = function (_React$Component) {
  _inherits(DayPickerInput, _React$Component);

  function DayPickerInput(props) {
    _classCallCheck(this, DayPickerInput);

    var _this = _possibleConstructorReturn(this, (DayPickerInput.__proto__ || Object.getPrototypeOf(DayPickerInput)).call(this, props));

    _this.input = null;
    _this.daypicker = null;
    _this.clickTimeout = null;
    _this.hideTimeout = null;
    _this.inputBlurTimeout = null;
    _this.inputFocusTimeout = null;


    _this.state = _this.getInitialStateFromProps(props);
    _this.state.showOverlay = props.showOverlay;

    _this.hideAfterDayClick = _this.hideAfterDayClick.bind(_this);
    _this.handleInputClick = _this.handleInputClick.bind(_this);
    _this.handleInputFocus = _this.handleInputFocus.bind(_this);
    _this.handleInputBlur = _this.handleInputBlur.bind(_this);
    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.handleInputKeyDown = _this.handleInputKeyDown.bind(_this);
    _this.handleInputKeyUp = _this.handleInputKeyUp.bind(_this);
    _this.handleDayClick = _this.handleDayClick.bind(_this);
    _this.handleMonthChange = _this.handleMonthChange.bind(_this);
    _this.handleOverlayFocus = _this.handleOverlayFocus.bind(_this);
    _this.handleOverlayBlur = _this.handleOverlayBlur.bind(_this);
    return _this;
  }

  _createClass(DayPickerInput, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var newState = {};

      // Current props
      var _props = this.props,
          value = _props.value,
          formatDate = _props.formatDate,
          format = _props.format,
          dayPickerProps = _props.dayPickerProps;

      // Update the input value if `value`, `dayPickerProps.locale` or `format`
      // props have changed

      if (value !== prevProps.value || dayPickerProps.locale !== prevProps.dayPickerProps.locale || format !== prevProps.format) {
        if ((0, _DateUtils.isDate)(value)) {
          newState.value = formatDate(value, format, dayPickerProps.locale);
        } else {
          newState.value = value;
        }
      }

      // Update the month if the months from props changed
      var prevMonth = prevProps.dayPickerProps.month;
      if (dayPickerProps.month && dayPickerProps.month !== prevMonth && !(0, _DateUtils.isSameMonth)(dayPickerProps.month, prevMonth)) {
        newState.month = dayPickerProps.month;
      }

      // Updated the selected days from props if they changed
      if (prevProps.dayPickerProps.selectedDays !== dayPickerProps.selectedDays) {
        newState.selectedDays = dayPickerProps.selectedDays;
      }

      if (Object.keys(newState).length > 0) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState(newState);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.clickTimeout);
      clearTimeout(this.hideTimeout);
      clearTimeout(this.inputFocusTimeout);
      clearTimeout(this.inputBlurTimeout);
      clearTimeout(this.overlayBlurTimeout);
    }
  }, {
    key: 'getInitialMonthFromProps',
    value: function getInitialMonthFromProps(props) {
      var dayPickerProps = props.dayPickerProps,
          format = props.format;

      var day = void 0;
      if (props.value) {
        if ((0, _DateUtils.isDate)(props.value)) {
          day = props.value;
        } else {
          day = props.parseDate(props.value, format, dayPickerProps.locale);
        }
      }
      return dayPickerProps.initialMonth || dayPickerProps.month || day || new Date();
    }
  }, {
    key: 'getInitialStateFromProps',
    value: function getInitialStateFromProps(props) {
      var dayPickerProps = props.dayPickerProps,
          formatDate = props.formatDate,
          format = props.format,
          typedValue = props.typedValue;
      var value = props.value;

      if (props.value && (0, _DateUtils.isDate)(props.value)) {
        value = formatDate(props.value, format, dayPickerProps.locale);
      }

      return {
        value: value,
        typedValue: typedValue,
        month: this.getInitialMonthFromProps(props),
        selectedDays: dayPickerProps.selectedDays
      };
    }
  }, {
    key: 'getInput',
    value: function getInput() {
      return this.input;
    }
  }, {
    key: 'getDayPicker',
    value: function getDayPicker() {
      return this.daypicker;
    }

    /**
     * Update the component's state and fire the `onDayChange` event passing the
     * day's modifiers to it.
     *
     * @param {Date} day - Will be used for changing the month
     * @param {String} value - Input field value
     * @private
     */

  }, {
    key: 'updateState',
    value: function updateState(day, value, callback) {
      var _this2 = this;

      var _props2 = this.props,
          dayPickerProps = _props2.dayPickerProps,
          onDayChange = _props2.onDayChange;

      this.setState({ month: day, value: value, typedValue: '' }, function () {
        if (callback) {
          callback();
        }
        if (!onDayChange) {
          return;
        }
        var modifiersObj = _extends({
          disabled: dayPickerProps.disabledDays,
          selected: dayPickerProps.selectedDays
        }, dayPickerProps.modifiers);
        var modifiers = (0, _ModifiersUtils.getModifiersForDay)(day, modifiersObj).reduce(function (obj, modifier) {
          return _extends({}, obj, _defineProperty({}, modifier, true));
        }, {});
        onDayChange(day, modifiers, _this2);
      });
    }

    /**
     * Show the Day Picker overlay.
     *
     * @memberof DayPickerInput
     */

  }, {
    key: 'showDayPicker',
    value: function showDayPicker() {
      var _this3 = this;

      var _props3 = this.props,
          parseDate = _props3.parseDate,
          format = _props3.format,
          dayPickerProps = _props3.dayPickerProps;
      var _state = this.state,
          value = _state.value,
          showOverlay = _state.showOverlay;

      if (showOverlay) {
        return;
      }
      // Reset the current displayed month when showing the overlay
      var month = value ? parseDate(value, format, dayPickerProps.locale) // Use the month in the input field
      : this.getInitialMonthFromProps(this.props); // Restore the month from the props
      this.setState(function (state) {
        return {
          showOverlay: true,
          month: month || state.month
        };
      }, function () {
        if (_this3.props.onDayPickerShow) _this3.props.onDayPickerShow();
      });
    }

    /**
     * Hide the Day Picker overlay
     *
     * @memberof DayPickerInput
     */

  }, {
    key: 'hideDayPicker',
    value: function hideDayPicker() {
      var _this4 = this;

      if (this.state.showOverlay === false) {
        return;
      }
      this.setState({ showOverlay: false }, function () {
        if (_this4.props.onDayPickerHide) _this4.props.onDayPickerHide();
      });
    }
  }, {
    key: 'hideAfterDayClick',
    value: function hideAfterDayClick() {
      var _this5 = this;

      if (!this.props.hideOnDayClick) {
        return;
      }
      this.hideTimeout = setTimeout(function () {
        _this5.overlayHasFocus = false;
        _this5.hideDayPicker();
      }, HIDE_TIMEOUT);
    }
  }, {
    key: 'handleInputClick',
    value: function handleInputClick(e) {
      this.showDayPicker();
      if (this.props.inputProps.onClick) {
        e.persist();
        this.props.inputProps.onClick(e);
      }
    }
  }, {
    key: 'handleInputFocus',
    value: function handleInputFocus(e) {
      var _this6 = this;

      this.showDayPicker();
      // Set `overlayHasFocus` after a timeout so the overlay can be hidden when
      // the input is blurred
      this.inputFocusTimeout = setTimeout(function () {
        _this6.overlayHasFocus = false;
      }, 2);
      if (this.props.inputProps.onFocus) {
        e.persist();
        this.props.inputProps.onFocus(e);
      }
    }

    // When the input is blurred, the overlay should disappear. However the input
    // is blurred also when the user interacts with the overlay (e.g. the overlay
    // get the focus by clicking it). In these cases, the overlay should not be
    // hidden. There are different approaches to avoid hiding the overlay when
    // this happens, but the only cross-browser hack we’ve found is to set all
    // these timeouts in code before changing `overlayHasFocus`.

  }, {
    key: 'handleInputBlur',
    value: function handleInputBlur(e) {
      var _this7 = this;

      this.inputBlurTimeout = setTimeout(function () {
        if (!_this7.overlayHasFocus) {
          _this7.hideDayPicker();
        }
      }, 1);
      if (this.props.inputProps.onBlur) {
        e.persist();
        this.props.inputProps.onBlur(e);
      }
    }
  }, {
    key: 'handleOverlayFocus',
    value: function handleOverlayFocus(e) {
      e.preventDefault();
      this.overlayHasFocus = true;
      if (!this.props.keepFocus || !this.input || typeof this.input.focus !== 'function') {
        return;
      }
      this.input.focus();
    }
  }, {
    key: 'handleOverlayBlur',
    value: function handleOverlayBlur() {
      var _this8 = this;

      // We need to set a timeout otherwise IE11 will hide the overlay when
      // focusing it
      this.overlayBlurTimeout = setTimeout(function () {
        _this8.overlayHasFocus = false;
      }, 3);
    }
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(e) {
      var _props4 = this.props,
          dayPickerProps = _props4.dayPickerProps,
          format = _props4.format,
          inputProps = _props4.inputProps,
          onDayChange = _props4.onDayChange,
          parseDate = _props4.parseDate;

      if (inputProps.onChange) {
        e.persist();
        inputProps.onChange(e);
      }
      var value = e.target.value;

      if (value.trim() === '') {
        this.setState({ value: value, typedValue: '' });
        if (onDayChange) onDayChange(undefined, {}, this);
        return;
      }
      var day = parseDate(value, format, dayPickerProps.locale);
      if (!day) {
        // Day is invalid: we save the value in the typedValue state
        this.setState({ value: value, typedValue: value });
        if (onDayChange) onDayChange(undefined, {}, this);
        return;
      }
      this.updateState(day, value);
    }
  }, {
    key: 'handleInputKeyDown',
    value: function handleInputKeyDown(e) {
      if (e.keyCode === _keys.TAB) {
        this.hideDayPicker();
      } else {
        this.showDayPicker();
      }
      if (this.props.inputProps.onKeyDown) {
        e.persist();
        this.props.inputProps.onKeyDown(e);
      }
    }
  }, {
    key: 'handleInputKeyUp',
    value: function handleInputKeyUp(e) {
      if (e.keyCode === _keys.ESC) {
        this.hideDayPicker();
      } else {
        this.showDayPicker();
      }
      if (this.props.inputProps.onKeyUp) {
        e.persist();
        this.props.inputProps.onKeyUp(e);
      }
    }
  }, {
    key: 'handleMonthChange',
    value: function handleMonthChange(month) {
      var _this9 = this;

      this.setState({ month: month }, function () {
        if (_this9.props.dayPickerProps && _this9.props.dayPickerProps.onMonthChange) {
          _this9.props.dayPickerProps.onMonthChange(month);
        }
      });
    }
  }, {
    key: 'handleDayClick',
    value: function handleDayClick(day, modifiers, e) {
      var _this10 = this;

      var _props5 = this.props,
          clickUnselectsDay = _props5.clickUnselectsDay,
          dayPickerProps = _props5.dayPickerProps,
          onDayChange = _props5.onDayChange,
          formatDate = _props5.formatDate,
          format = _props5.format;

      if (dayPickerProps.onDayClick) {
        dayPickerProps.onDayClick(day, modifiers, e);
      }

      // Do nothing if the day is disabled
      if (modifiers.disabled || dayPickerProps && dayPickerProps.classNames && modifiers[dayPickerProps.classNames.disabled]) {
        return;
      }

      // If the clicked day is already selected, remove the clicked day
      // from the selected days and empty the field value
      if (modifiers.selected && clickUnselectsDay) {
        var selectedDays = this.state.selectedDays;

        if (Array.isArray(selectedDays)) {
          selectedDays = selectedDays.slice(0);
          var selectedDayIdx = selectedDays.indexOf(day);
          selectedDays.splice(selectedDayIdx, 1);
        } else if (selectedDays) {
          selectedDays = null;
        }

        this.setState({ value: '', typedValue: '', selectedDays: selectedDays }, this.hideAfterDayClick);

        if (onDayChange) {
          onDayChange(undefined, modifiers, this);
        }
        return;
      }

      var value = formatDate(day, format, dayPickerProps.locale);
      this.setState({ value: value, typedValue: '', month: day }, function () {
        if (onDayChange) {
          onDayChange(day, modifiers, _this10);
        }
        _this10.hideAfterDayClick();
      });
    }
  }, {
    key: 'renderOverlay',
    value: function renderOverlay() {
      var _this11 = this;

      var _props6 = this.props,
          classNames = _props6.classNames,
          dayPickerProps = _props6.dayPickerProps,
          parseDate = _props6.parseDate,
          formatDate = _props6.formatDate,
          format = _props6.format;
      var _state2 = this.state,
          selectedDays = _state2.selectedDays,
          value = _state2.value;

      var selectedDay = void 0;
      if (!selectedDays && value) {
        var day = parseDate(value, format, dayPickerProps.locale);
        if (day) {
          selectedDay = day;
        }
      } else if (selectedDays) {
        selectedDay = selectedDays;
      }
      var onTodayButtonClick = void 0;
      if (dayPickerProps.todayButton) {
        // Set the current day when clicking the today button
        onTodayButtonClick = function onTodayButtonClick() {
          return _this11.updateState(new Date(), formatDate(new Date(), format, dayPickerProps.locale), _this11.hideAfterDayClick);
        };
      }
      var Overlay = this.props.overlayComponent;
      return _react2.default.createElement(
        Overlay,
        {
          classNames: classNames,
          month: this.state.month,
          selectedDay: selectedDay,
          input: this.input,
          tabIndex: 0 // tabIndex is necessary to catch focus/blur events on Safari
          , onFocus: this.handleOverlayFocus,
          onBlur: this.handleOverlayBlur
        },
        _react2.default.createElement(_DayPicker2.default, _extends({
          ref: function ref(el) {
            return _this11.daypicker = el;
          },
          onTodayButtonClick: onTodayButtonClick
        }, dayPickerProps, {
          month: this.state.month,
          selectedDays: selectedDay,
          onDayClick: this.handleDayClick,
          onMonthChange: this.handleMonthChange
        }))
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this12 = this;

      var Input = this.props.component;
      var inputProps = this.props.inputProps;

      return _react2.default.createElement(
        'div',
        { className: this.props.classNames.container, style: this.props.style },
        _react2.default.createElement(Input, _extends({
          ref: function ref(el) {
            return _this12.input = el;
          },
          placeholder: this.props.placeholder
        }, inputProps, {
          value: this.state.value || this.state.typedValue,
          onChange: this.handleInputChange,
          onFocus: this.handleInputFocus,
          onBlur: this.handleInputBlur,
          onKeyDown: this.handleInputKeyDown,
          onKeyUp: this.handleInputKeyUp,
          onClick: !inputProps.disabled ? this.handleInputClick : undefined
        })),
        this.state.showOverlay && this.renderOverlay()
      );
    }
  }]);

  return DayPickerInput;
}(_react2.default.Component);

DayPickerInput.defaultProps = {
  dayPickerProps: {},
  value: '',
  typedValue: '',
  placeholder: 'YYYY-M-D',
  format: 'L',
  formatDate: defaultFormat,
  parseDate: defaultParse,
  showOverlay: false,
  hideOnDayClick: true,
  clickUnselectsDay: false,
  keepFocus: true,
  component: 'input',
  inputProps: {},
  overlayComponent: OverlayComponent,
  classNames: {
    container: 'DayPickerInput',
    overlayWrapper: 'DayPickerInput-OverlayWrapper',
    overlay: 'DayPickerInput-Overlay'
  }
};
exports.default = DayPickerInput;
//# sourceMappingURL=DayPickerInput.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/build/Helpers.js":
/*!********************************************************!*\
  !*** ./node_modules/react-day-picker/build/Helpers.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.cancelEvent = cancelEvent;
exports.getFirstDayOfMonth = getFirstDayOfMonth;
exports.getDaysInMonth = getDaysInMonth;
exports.getModifiersFromProps = getModifiersFromProps;
exports.getFirstDayOfWeekFromProps = getFirstDayOfWeekFromProps;
exports.isRangeOfDates = isRangeOfDates;
exports.getMonthsDiff = getMonthsDiff;
exports.getWeekArray = getWeekArray;
exports.startOfMonth = startOfMonth;
exports.getDayNodes = getDayNodes;
exports.nodeListToArray = nodeListToArray;
exports.hasOwnProp = hasOwnProp;

var _DateUtils = __webpack_require__(/*! ./DateUtils */ "./node_modules/react-day-picker/build/DateUtils.js");

var _LocaleUtils = __webpack_require__(/*! ./LocaleUtils */ "./node_modules/react-day-picker/build/LocaleUtils.js");

var _classNames = __webpack_require__(/*! ./classNames */ "./node_modules/react-day-picker/build/classNames.js");

var _classNames2 = _interopRequireDefault(_classNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cancelEvent(e) {
  e.preventDefault();
  e.stopPropagation();
}

function getFirstDayOfMonth(d) {
  return new Date(d.getFullYear(), d.getMonth(), 1, 12);
}

function getDaysInMonth(d) {
  var resultDate = getFirstDayOfMonth(d);

  resultDate.setMonth(resultDate.getMonth() + 1);
  resultDate.setDate(resultDate.getDate() - 1);

  return resultDate.getDate();
}

function getModifiersFromProps(props) {
  var modifiers = _extends({}, props.modifiers);
  if (props.selectedDays) {
    modifiers[props.classNames.selected] = props.selectedDays;
  }
  if (props.disabledDays) {
    modifiers[props.classNames.disabled] = props.disabledDays;
  }
  return modifiers;
}

function getFirstDayOfWeekFromProps(props) {
  var firstDayOfWeek = props.firstDayOfWeek,
      _props$locale = props.locale,
      locale = _props$locale === undefined ? 'en' : _props$locale,
      _props$localeUtils = props.localeUtils,
      localeUtils = _props$localeUtils === undefined ? {} : _props$localeUtils;

  if (!isNaN(firstDayOfWeek)) {
    return firstDayOfWeek;
  }
  if (localeUtils.getFirstDayOfWeek) {
    return localeUtils.getFirstDayOfWeek(locale);
  }
  return 0;
}

function isRangeOfDates(value) {
  return !!(value && value.from && value.to);
}

function getMonthsDiff(d1, d2) {
  return d2.getMonth() - d1.getMonth() + 12 * (d2.getFullYear() - d1.getFullYear());
}

function getWeekArray(d) {
  var firstDayOfWeek = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _LocaleUtils.getFirstDayOfWeek)();
  var fixedWeeks = arguments[2];

  var daysInMonth = getDaysInMonth(d);
  var dayArray = [];

  var week = [];
  var weekArray = [];

  for (var i = 1; i <= daysInMonth; i += 1) {
    dayArray.push(new Date(d.getFullYear(), d.getMonth(), i, 12));
  }

  dayArray.forEach(function (day) {
    if (week.length > 0 && day.getDay() === firstDayOfWeek) {
      weekArray.push(week);
      week = [];
    }
    week.push(day);
    if (dayArray.indexOf(day) === dayArray.length - 1) {
      weekArray.push(week);
    }
  });

  // unshift days to start the first week
  var firstWeek = weekArray[0];
  for (var _i = 7 - firstWeek.length; _i > 0; _i -= 1) {
    var outsideDate = (0, _DateUtils.clone)(firstWeek[0]);
    outsideDate.setDate(firstWeek[0].getDate() - 1);
    firstWeek.unshift(outsideDate);
  }

  // push days until the end of the last week
  var lastWeek = weekArray[weekArray.length - 1];
  for (var _i2 = lastWeek.length; _i2 < 7; _i2 += 1) {
    var _outsideDate = (0, _DateUtils.clone)(lastWeek[lastWeek.length - 1]);
    _outsideDate.setDate(lastWeek[lastWeek.length - 1].getDate() + 1);
    lastWeek.push(_outsideDate);
  }

  // add extra weeks to reach 6 weeks
  if (fixedWeeks && weekArray.length < 6) {
    var lastExtraWeek = void 0;

    for (var _i3 = weekArray.length; _i3 < 6; _i3 += 1) {
      lastExtraWeek = weekArray[weekArray.length - 1];
      var lastDay = lastExtraWeek[lastExtraWeek.length - 1];
      var extraWeek = [];

      for (var j = 0; j < 7; j += 1) {
        var _outsideDate2 = (0, _DateUtils.clone)(lastDay);
        _outsideDate2.setDate(lastDay.getDate() + j + 1);
        extraWeek.push(_outsideDate2);
      }

      weekArray.push(extraWeek);
    }
  }

  return weekArray;
}

function startOfMonth(d) {
  var newDate = (0, _DateUtils.clone)(d);
  newDate.setDate(1);
  newDate.setHours(12, 0, 0, 0); // always set noon to avoid time zone issues
  return newDate;
}

function getDayNodes(node, classNames) {
  var outsideClassName = void 0;
  if (classNames === _classNames2.default) {
    // When using CSS modules prefix the modifier as required by the BEM syntax
    outsideClassName = classNames.day + '--' + classNames.outside;
  } else {
    outsideClassName = '' + classNames.outside;
  }
  var dayQuery = classNames.day.replace(/ /g, '.');
  var outsideDayQuery = outsideClassName.replace(/ /g, '.');
  var selector = '.' + dayQuery + ':not(.' + outsideDayQuery + ')';
  return node.querySelectorAll(selector);
}

function nodeListToArray(nodeList) {
  return Array.prototype.slice.call(nodeList, 0);
}

function hasOwnProp(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
//# sourceMappingURL=Helpers.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/build/LocaleUtils.js":
/*!************************************************************!*\
  !*** ./node_modules/react-day-picker/build/LocaleUtils.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.formatDay = formatDay;
exports.formatMonthTitle = formatMonthTitle;
exports.formatWeekdayShort = formatWeekdayShort;
exports.formatWeekdayLong = formatWeekdayLong;
exports.getFirstDayOfWeek = getFirstDayOfWeek;
exports.getMonths = getMonths;
var WEEKDAYS_LONG = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var WEEKDAYS_SHORT = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function formatDay(day) {
  return day.toDateString();
}

function formatMonthTitle(d) {
  return MONTHS[d.getMonth()] + ' ' + d.getFullYear();
}

function formatWeekdayShort(i) {
  return WEEKDAYS_SHORT[i];
}

function formatWeekdayLong(i) {
  return WEEKDAYS_LONG[i];
}

function getFirstDayOfWeek() {
  return 0;
}

function getMonths() {
  return MONTHS;
}

exports.default = {
  formatDay: formatDay,
  formatMonthTitle: formatMonthTitle,
  formatWeekdayShort: formatWeekdayShort,
  formatWeekdayLong: formatWeekdayLong,
  getFirstDayOfWeek: getFirstDayOfWeek,
  getMonths: getMonths
};
//# sourceMappingURL=LocaleUtils.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/build/ModifiersUtils.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-day-picker/build/ModifiersUtils.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.dayMatchesModifier = dayMatchesModifier;
exports.getModifiersForDay = getModifiersForDay;

var _DateUtils = __webpack_require__(/*! ./DateUtils */ "./node_modules/react-day-picker/build/DateUtils.js");

var _Helpers = __webpack_require__(/*! ./Helpers */ "./node_modules/react-day-picker/build/Helpers.js");

/**
 * Return `true` if a date matches the specified modifier.
 *
 * @export
 * @param {Date} day
 * @param {Any} modifier
 * @return {Boolean}
 */
function dayMatchesModifier(day, modifier) {
  if (!modifier) {
    return false;
  }
  var arr = Array.isArray(modifier) ? modifier : [modifier];
  return arr.some(function (mod) {
    if (!mod) {
      return false;
    }
    if (mod instanceof Date) {
      return (0, _DateUtils.isSameDay)(day, mod);
    }
    if ((0, _Helpers.isRangeOfDates)(mod)) {
      return (0, _DateUtils.isDayInRange)(day, mod);
    }
    if (mod.after && mod.before && (0, _DateUtils.isDayAfter)(mod.before, mod.after)) {
      return (0, _DateUtils.isDayAfter)(day, mod.after) && (0, _DateUtils.isDayBefore)(day, mod.before);
    }
    if (mod.after && mod.before && ((0, _DateUtils.isDayAfter)(mod.after, mod.before) || (0, _DateUtils.isSameDay)(mod.after, mod.before))) {
      return (0, _DateUtils.isDayAfter)(day, mod.after) || (0, _DateUtils.isDayBefore)(day, mod.before);
    }
    if (mod.after) {
      return (0, _DateUtils.isDayAfter)(day, mod.after);
    }
    if (mod.before) {
      return (0, _DateUtils.isDayBefore)(day, mod.before);
    }
    if (mod.daysOfWeek) {
      return mod.daysOfWeek.some(function (dayOfWeek) {
        return day.getDay() === dayOfWeek;
      });
    }
    if (typeof mod === 'function') {
      return mod(day);
    }
    return false;
  });
}

/**
 * Return the modifiers matching the given day for the given
 * object of modifiers.
 *
 * @export
 * @param {Date} day
 * @param {Object} [modifiersObj={}]
 * @return {Array}
 */
function getModifiersForDay(day) {
  var modifiersObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return Object.keys(modifiersObj).reduce(function (modifiers, modifierName) {
    var value = modifiersObj[modifierName];
    if (dayMatchesModifier(day, value)) {
      modifiers.push(modifierName);
    }
    return modifiers;
  }, []);
}

exports.default = { dayMatchesModifier: dayMatchesModifier, getModifiersForDay: getModifiersForDay };
//# sourceMappingURL=ModifiersUtils.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/build/Month.js":
/*!******************************************************!*\
  !*** ./node_modules/react-day-picker/build/Month.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _Weekdays = __webpack_require__(/*! ./Weekdays */ "./node_modules/react-day-picker/build/Weekdays.js");

var _Weekdays2 = _interopRequireDefault(_Weekdays);

var _Day = __webpack_require__(/*! ./Day */ "./node_modules/react-day-picker/build/Day.js");

var _Day2 = _interopRequireDefault(_Day);

var _keys = __webpack_require__(/*! ./keys */ "./node_modules/react-day-picker/build/keys.js");

var _ModifiersUtils = __webpack_require__(/*! ./ModifiersUtils */ "./node_modules/react-day-picker/build/ModifiersUtils.js");

var ModifiersUtils = _interopRequireWildcard(_ModifiersUtils);

var _Helpers = __webpack_require__(/*! ./Helpers */ "./node_modules/react-day-picker/build/Helpers.js");

var Helpers = _interopRequireWildcard(_Helpers);

var _DateUtils = __webpack_require__(/*! ./DateUtils */ "./node_modules/react-day-picker/build/DateUtils.js");

var DateUtils = _interopRequireWildcard(_DateUtils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Month = function (_Component) {
  _inherits(Month, _Component);

  function Month() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Month);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Month.__proto__ || Object.getPrototypeOf(Month)).call.apply(_ref, [this].concat(args))), _this), _this.renderDay = function (day) {
      var monthNumber = _this.props.month.getMonth();
      var propModifiers = Helpers.getModifiersFromProps(_this.props);
      var dayModifiers = ModifiersUtils.getModifiersForDay(day, propModifiers);
      if (DateUtils.isSameDay(day, new Date()) && !Object.prototype.hasOwnProperty.call(propModifiers, _this.props.classNames.today)) {
        dayModifiers.push(_this.props.classNames.today);
      }
      if (day.getMonth() !== monthNumber) {
        dayModifiers.push(_this.props.classNames.outside);
      }

      var isOutside = day.getMonth() !== monthNumber;
      var tabIndex = -1;
      // Focus on the first day of the month
      if (_this.props.onDayClick && !isOutside && day.getDate() === 1) {
        tabIndex = _this.props.tabIndex; // eslint-disable-line prefer-destructuring
      }
      var key = '' + day.getFullYear() + day.getMonth() + day.getDate();
      var modifiers = {};
      dayModifiers.forEach(function (modifier) {
        modifiers[modifier] = true;
      });

      return _react2.default.createElement(
        _Day2.default,
        {
          key: '' + (isOutside ? 'outside-' : '') + key,
          classNames: _this.props.classNames,
          day: day,
          modifiers: modifiers,
          modifiersStyles: _this.props.modifiersStyles,
          empty: isOutside && !_this.props.showOutsideDays && !_this.props.fixedWeeks,
          tabIndex: tabIndex,
          ariaLabel: _this.props.localeUtils.formatDay(day, _this.props.locale),
          ariaDisabled: isOutside || dayModifiers.indexOf(_this.props.classNames.disabled) > -1,
          ariaSelected: dayModifiers.indexOf(_this.props.classNames.selected) > -1,
          onClick: _this.props.onDayClick,
          onFocus: _this.props.onDayFocus,
          onKeyDown: _this.props.onDayKeyDown,
          onMouseEnter: _this.props.onDayMouseEnter,
          onMouseLeave: _this.props.onDayMouseLeave,
          onMouseDown: _this.props.onDayMouseDown,
          onMouseUp: _this.props.onDayMouseUp,
          onTouchEnd: _this.props.onDayTouchEnd,
          onTouchStart: _this.props.onDayTouchStart
        },
        _this.props.renderDay(day, modifiers)
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Month, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classNames = _props.classNames,
          month = _props.month,
          months = _props.months,
          fixedWeeks = _props.fixedWeeks,
          captionElement = _props.captionElement,
          weekdayElement = _props.weekdayElement,
          locale = _props.locale,
          localeUtils = _props.localeUtils,
          weekdaysLong = _props.weekdaysLong,
          weekdaysShort = _props.weekdaysShort,
          firstDayOfWeek = _props.firstDayOfWeek,
          onCaptionClick = _props.onCaptionClick,
          showWeekNumbers = _props.showWeekNumbers,
          showWeekDays = _props.showWeekDays,
          onWeekClick = _props.onWeekClick;


      var captionProps = {
        date: month,
        classNames: classNames,
        months: months,
        localeUtils: localeUtils,
        locale: locale,
        onClick: onCaptionClick ? function (e) {
          return onCaptionClick(month, e);
        } : undefined
      };
      var caption = _react2.default.isValidElement(captionElement) ? _react2.default.cloneElement(captionElement, captionProps) : _react2.default.createElement(captionElement, captionProps);

      var weeks = Helpers.getWeekArray(month, firstDayOfWeek, fixedWeeks);
      return _react2.default.createElement(
        'div',
        { className: classNames.month, role: 'grid' },
        caption,
        showWeekDays && _react2.default.createElement(_Weekdays2.default, {
          classNames: classNames,
          weekdaysShort: weekdaysShort,
          weekdaysLong: weekdaysLong,
          firstDayOfWeek: firstDayOfWeek,
          showWeekNumbers: showWeekNumbers,
          locale: locale,
          localeUtils: localeUtils,
          weekdayElement: weekdayElement
        }),
        _react2.default.createElement(
          'div',
          { className: classNames.body, role: 'rowgroup' },
          weeks.map(function (week) {
            var weekNumber = void 0;
            if (showWeekNumbers) {
              weekNumber = DateUtils.getWeekNumber(week[6]);
            }
            return _react2.default.createElement(
              'div',
              {
                key: week[0].getTime(),
                className: classNames.week,
                role: 'row'
              },
              showWeekNumbers && _react2.default.createElement(
                'div',
                {
                  className: classNames.weekNumber,
                  tabIndex: onWeekClick ? 0 : -1,
                  role: 'gridcell',
                  onClick: onWeekClick ? function (e) {
                    return onWeekClick(weekNumber, week, e);
                  } : undefined,
                  onKeyUp: onWeekClick ? function (e) {
                    return e.keyCode === _keys.ENTER && onWeekClick(weekNumber, week, e);
                  } : undefined
                },
                _this2.props.renderWeek(weekNumber, week, month)
              ),
              week.map(_this2.renderDay)
            );
          })
        )
      );
    }
  }]);

  return Month;
}(_react.Component);

exports.default = Month;
//# sourceMappingURL=Month.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/build/Navbar.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-day-picker/build/Navbar.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _classNames = __webpack_require__(/*! ./classNames */ "./node_modules/react-day-picker/build/classNames.js");

var _classNames2 = _interopRequireDefault(_classNames);

var _keys = __webpack_require__(/*! ./keys */ "./node_modules/react-day-picker/build/keys.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Navbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call.apply(_ref, [this].concat(args))), _this), _this.handleNextClick = function () {
      if (_this.props.onNextClick) {
        _this.props.onNextClick();
      }
    }, _this.handlePreviousClick = function () {
      if (_this.props.onPreviousClick) {
        _this.props.onPreviousClick();
      }
    }, _this.handleNextKeyDown = function (e) {
      if (e.keyCode !== _keys.ENTER && e.keyCode !== _keys.SPACE) {
        return;
      }
      e.preventDefault();
      _this.handleNextClick();
    }, _this.handlePreviousKeyDown = function (e) {
      if (e.keyCode !== _keys.ENTER && e.keyCode !== _keys.SPACE) {
        return;
      }
      e.preventDefault();
      _this.handlePreviousClick();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Navbar, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.labels !== this.props.labels || nextProps.dir !== this.props.dir || this.props.showPreviousButton !== nextProps.showPreviousButton || this.props.showNextButton !== nextProps.showNextButton;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classNames = _props.classNames,
          className = _props.className,
          showPreviousButton = _props.showPreviousButton,
          showNextButton = _props.showNextButton,
          labels = _props.labels,
          dir = _props.dir;


      var previousClickHandler = void 0;
      var nextClickHandler = void 0;
      var previousKeyDownHandler = void 0;
      var nextKeyDownHandler = void 0;
      var shouldShowPrevious = void 0;
      var shouldShowNext = void 0;

      if (dir === 'rtl') {
        previousClickHandler = this.handleNextClick;
        nextClickHandler = this.handlePreviousClick;
        previousKeyDownHandler = this.handleNextKeyDown;
        nextKeyDownHandler = this.handlePreviousKeyDown;
        shouldShowNext = showPreviousButton;
        shouldShowPrevious = showNextButton;
      } else {
        previousClickHandler = this.handlePreviousClick;
        nextClickHandler = this.handleNextClick;
        previousKeyDownHandler = this.handlePreviousKeyDown;
        nextKeyDownHandler = this.handleNextKeyDown;
        shouldShowNext = showNextButton;
        shouldShowPrevious = showPreviousButton;
      }

      var previousClassName = shouldShowPrevious ? classNames.navButtonPrev : classNames.navButtonPrev + ' ' + classNames.navButtonInteractionDisabled;

      var nextClassName = shouldShowNext ? classNames.navButtonNext : classNames.navButtonNext + ' ' + classNames.navButtonInteractionDisabled;

      var previousButton = _react2.default.createElement('span', {
        tabIndex: '0',
        role: 'button',
        'aria-label': labels.previousMonth,
        key: 'previous',
        className: previousClassName,
        onKeyDown: shouldShowPrevious ? previousKeyDownHandler : undefined,
        onClick: shouldShowPrevious ? previousClickHandler : undefined
      });

      var nextButton = _react2.default.createElement('span', {
        tabIndex: '0',
        role: 'button',
        'aria-label': labels.nextMonth,
        key: 'right',
        className: nextClassName,
        onKeyDown: shouldShowNext ? nextKeyDownHandler : undefined,
        onClick: shouldShowNext ? nextClickHandler : undefined
      });

      return _react2.default.createElement(
        'div',
        { className: className || classNames.navBar },
        dir === 'rtl' ? [nextButton, previousButton] : [previousButton, nextButton]
      );
    }
  }]);

  return Navbar;
}(_react.Component);

Navbar.defaultProps = {
  classNames: _classNames2.default,
  dir: 'ltr',
  labels: {
    previousMonth: 'Previous Month',
    nextMonth: 'Next Month'
  },
  showPreviousButton: true,
  showNextButton: true
};
exports.default = Navbar;
//# sourceMappingURL=Navbar.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/build/Weekday.js":
/*!********************************************************!*\
  !*** ./node_modules/react-day-picker/build/Weekday.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Weekday = function (_Component) {
  _inherits(Weekday, _Component);

  function Weekday() {
    _classCallCheck(this, Weekday);

    return _possibleConstructorReturn(this, (Weekday.__proto__ || Object.getPrototypeOf(Weekday)).apply(this, arguments));
  }

  _createClass(Weekday, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props !== nextProps;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          weekday = _props.weekday,
          className = _props.className,
          weekdaysLong = _props.weekdaysLong,
          weekdaysShort = _props.weekdaysShort,
          localeUtils = _props.localeUtils,
          locale = _props.locale;

      var title = void 0;
      if (weekdaysLong) {
        title = weekdaysLong[weekday];
      } else {
        title = localeUtils.formatWeekdayLong(weekday, locale);
      }
      var content = void 0;
      if (weekdaysShort) {
        content = weekdaysShort[weekday];
      } else {
        content = localeUtils.formatWeekdayShort(weekday, locale);
      }

      return _react2.default.createElement(
        'div',
        { className: className, role: 'columnheader' },
        _react2.default.createElement(
          'abbr',
          { title: title },
          content
        )
      );
    }
  }]);

  return Weekday;
}(_react.Component);

exports.default = Weekday;
//# sourceMappingURL=Weekday.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/build/Weekdays.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-day-picker/build/Weekdays.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Weekdays = function (_Component) {
  _inherits(Weekdays, _Component);

  function Weekdays() {
    _classCallCheck(this, Weekdays);

    return _possibleConstructorReturn(this, (Weekdays.__proto__ || Object.getPrototypeOf(Weekdays)).apply(this, arguments));
  }

  _createClass(Weekdays, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props !== nextProps;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classNames = _props.classNames,
          firstDayOfWeek = _props.firstDayOfWeek,
          showWeekNumbers = _props.showWeekNumbers,
          weekdaysLong = _props.weekdaysLong,
          weekdaysShort = _props.weekdaysShort,
          locale = _props.locale,
          localeUtils = _props.localeUtils,
          weekdayElement = _props.weekdayElement;

      var days = [];
      for (var i = 0; i < 7; i += 1) {
        var weekday = (i + firstDayOfWeek) % 7;
        var elementProps = {
          key: i,
          className: classNames.weekday,
          weekday: weekday,
          weekdaysLong: weekdaysLong,
          weekdaysShort: weekdaysShort,
          localeUtils: localeUtils,
          locale: locale
        };
        var element = _react2.default.isValidElement(weekdayElement) ? _react2.default.cloneElement(weekdayElement, elementProps) : _react2.default.createElement(weekdayElement, elementProps);
        days.push(element);
      }

      return _react2.default.createElement(
        'div',
        { className: classNames.weekdays, role: 'rowgroup' },
        _react2.default.createElement(
          'div',
          { className: classNames.weekdaysRow, role: 'row' },
          showWeekNumbers && _react2.default.createElement('div', { className: classNames.weekday }),
          days
        )
      );
    }
  }]);

  return Weekdays;
}(_react.Component);

exports.default = Weekdays;
//# sourceMappingURL=Weekdays.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/build/classNames.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-day-picker/build/classNames.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
// Proxy object to map classnames when css modules are not used

exports.default = {
  container: 'DayPicker',
  wrapper: 'DayPicker-wrapper',
  interactionDisabled: 'DayPicker--interactionDisabled',
  months: 'DayPicker-Months',
  month: 'DayPicker-Month',

  navBar: 'DayPicker-NavBar',
  navButtonPrev: 'DayPicker-NavButton DayPicker-NavButton--prev',
  navButtonNext: 'DayPicker-NavButton DayPicker-NavButton--next',
  navButtonInteractionDisabled: 'DayPicker-NavButton--interactionDisabled',

  caption: 'DayPicker-Caption',
  weekdays: 'DayPicker-Weekdays',
  weekdaysRow: 'DayPicker-WeekdaysRow',
  weekday: 'DayPicker-Weekday',
  body: 'DayPicker-Body',
  week: 'DayPicker-Week',
  weekNumber: 'DayPicker-WeekNumber',
  day: 'DayPicker-Day',
  footer: 'DayPicker-Footer',
  todayButton: 'DayPicker-TodayButton',

  // default modifiers
  today: 'today',
  selected: 'selected',
  disabled: 'disabled',
  outside: 'outside'
};
//# sourceMappingURL=classNames.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/build/keys.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-day-picker/build/keys.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var LEFT = exports.LEFT = 37;
var UP = exports.UP = 38;
var RIGHT = exports.RIGHT = 39;
var DOWN = exports.DOWN = 40;
var ENTER = exports.ENTER = 13;
var SPACE = exports.SPACE = 32;
var ESC = exports.ESC = 27;
var TAB = exports.TAB = 9;
//# sourceMappingURL=keys.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/lib/react-day-picker.min.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-day-picker/lib/react-day-picker.min.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! react */ "react")):0}("undefined"!=typeof self?self:this,function(e){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}([function(t,n){t.exports=e},function(e,t,n){"use strict";function o(e){return new Date(e.getTime())}function r(e){return e instanceof Date&&!isNaN(e.valueOf())}function a(e,t){var n=o(e);return n.setMonth(e.getMonth()+t),n}function s(e,t){return!(!e||!t)&&(e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear())}function i(e,t){return!(!e||!t)&&(e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear())}function u(e,t){return o(e).setHours(0,0,0,0)<o(t).setHours(0,0,0,0)}function l(e,t){return o(e).setHours(0,0,0,0)>o(t).setHours(0,0,0,0)}function c(e){var t=new Date;return t.setHours(0,0,0,0),u(e,t)}function p(e){var t=new Date((new Date).getTime()+864e5);return t.setHours(0,0,0,0),e>=t}function f(e,t,n){var r=o(e);return r.setHours(0,0,0,0),l(r,t)&&u(r,n)||l(r,n)&&u(r,t)}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{from:null,to:null},n=t.from,o=t.to;return n?n&&o&&s(n,o)&&s(e,n)?(n=null,o=null):o&&u(e,n)?n=e:o&&s(e,o)?(n=e,o=e):(o=e,u(o,n)&&(o=n,n=e)):n=e,{from:n,to:o}}function d(e,t){var n=t.from,o=t.to;return n&&s(e,n)||o&&s(e,o)||n&&o&&f(e,n,o)}function y(e){var t=o(e);return t.setHours(0,0,0),t.setDate(t.getDate()+4-(t.getDay()||7)),Math.ceil(((t-new Date(t.getFullYear(),0,1))/864e5+1)/7)}Object.defineProperty(t,"__esModule",{value:!0}),t.clone=o,t.isDate=r,t.addMonths=a,t.isSameDay=s,t.isSameMonth=i,t.isDayBefore=u,t.isDayAfter=l,t.isPastDay=c,t.isFutureDay=p,t.isDayBetween=f,t.addDayToRange=h,t.isDayInRange=d,t.getWeekNumber=y,t.default={addDayToRange:h,addMonths:a,clone:o,getWeekNumber:y,isDate:r,isDayAfter:l,isDayBefore:u,isDayBetween:f,isDayInRange:d,isFutureDay:p,isPastDay:c,isSameDay:s,isSameMonth:i}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.LEFT=37,t.UP=38,t.RIGHT=39,t.DOWN=40,t.ENTER=13,t.SPACE=32,t.ESC=27,t.TAB=9},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={container:"DayPicker",wrapper:"DayPicker-wrapper",interactionDisabled:"DayPicker--interactionDisabled",months:"DayPicker-Months",month:"DayPicker-Month",navBar:"DayPicker-NavBar",navButtonPrev:"DayPicker-NavButton DayPicker-NavButton--prev",navButtonNext:"DayPicker-NavButton DayPicker-NavButton--next",navButtonInteractionDisabled:"DayPicker-NavButton--interactionDisabled",caption:"DayPicker-Caption",weekdays:"DayPicker-Weekdays",weekdaysRow:"DayPicker-WeekdaysRow",weekday:"DayPicker-Weekday",body:"DayPicker-Body",week:"DayPicker-Week",weekNumber:"DayPicker-WeekNumber",day:"DayPicker-Day",footer:"DayPicker-Footer",todayButton:"DayPicker-TodayButton",today:"today",selected:"selected",disabled:"disabled",outside:"outside"}},function(e,t,n){"use strict";function o(e){e.preventDefault(),e.stopPropagation()}function r(e){return new Date(e.getFullYear(),e.getMonth(),1,12)}function a(e){var t=r(e);return t.setMonth(t.getMonth()+1),t.setDate(t.getDate()-1),t.getDate()}function s(e){var t=y({},e.modifiers);return e.selectedDays&&(t[e.classNames.selected]=e.selectedDays),e.disabledDays&&(t[e.classNames.disabled]=e.disabledDays),t}function i(e){var t=e.firstDayOfWeek,n=e.locale,o=void 0===n?"en":n,r=e.localeUtils,a=void 0===r?{}:r;return isNaN(t)?a.getFirstDayOfWeek?a.getFirstDayOfWeek(o):0:t}function u(e){return!!(e&&e.from&&e.to)}function l(e,t){return t.getMonth()-e.getMonth()+12*(t.getFullYear()-e.getFullYear())}function c(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,m.getFirstDayOfWeek)(),n=arguments[2],o=a(e),r=[],s=[],i=[],u=1;u<=o;u+=1)r.push(new Date(e.getFullYear(),e.getMonth(),u,12));r.forEach(function(e){s.length>0&&e.getDay()===t&&(i.push(s),s=[]),s.push(e),r.indexOf(e)===r.length-1&&i.push(s)});for(var l=i[0],c=7-l.length;c>0;c-=1){var p=(0,v.clone)(l[0]);p.setDate(l[0].getDate()-1),l.unshift(p)}for(var f=i[i.length-1],h=f.length;h<7;h+=1){var d=(0,v.clone)(f[f.length-1]);d.setDate(f[f.length-1].getDate()+1),f.push(d)}if(n&&i.length<6)for(var y=void 0,k=i.length;k<6;k+=1){y=i[i.length-1];for(var D=y[y.length-1],b=[],g=0;g<7;g+=1){var w=(0,v.clone)(D);w.setDate(D.getDate()+g+1),b.push(w)}i.push(b)}return i}function p(e){var t=(0,v.clone)(e);return t.setDate(1),t.setHours(12,0,0,0),t}function f(e,t){var n=void 0;n=t===D.default?t.day+"--"+t.outside:""+t.outside;var o=t.day.replace(/ /g,"."),r=n.replace(/ /g,"."),a="."+o+":not(."+r+")";return e.querySelectorAll(a)}function h(e){return Array.prototype.slice.call(e,0)}function d(e,t){return Object.prototype.hasOwnProperty.call(e,t)}Object.defineProperty(t,"__esModule",{value:!0});var y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};t.cancelEvent=o,t.getFirstDayOfMonth=r,t.getDaysInMonth=a,t.getModifiersFromProps=s,t.getFirstDayOfWeekFromProps=i,t.isRangeOfDates=u,t.getMonthsDiff=l,t.getWeekArray=c,t.startOfMonth=p,t.getDayNodes=f,t.nodeListToArray=h,t.hasOwnProp=d;var v=n(1),m=n(5),k=n(3),D=function(e){return e&&e.__esModule?e:{default:e}}(k)},function(e,t,n){"use strict";function o(e){return e.toDateString()}function r(e){return p[e.getMonth()]+" "+e.getFullYear()}function a(e){return c[e]}function s(e){return l[e]}function i(){return 0}function u(){return p}Object.defineProperty(t,"__esModule",{value:!0}),t.formatDay=o,t.formatMonthTitle=r,t.formatWeekdayShort=a,t.formatWeekdayLong=s,t.getFirstDayOfWeek=i,t.getMonths=u;var l=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],c=["Su","Mo","Tu","We","Th","Fr","Sa"],p=["January","February","March","April","May","June","July","August","September","October","November","December"];t.default={formatDay:o,formatMonthTitle:r,formatWeekdayShort:a,formatWeekdayLong:s,getFirstDayOfWeek:i,getMonths:u}},function(e,t,n){"use strict";function o(e,t){return!!t&&(Array.isArray(t)?t:[t]).some(function(t){return!!t&&(t instanceof Date?(0,a.isSameDay)(e,t):(0,s.isRangeOfDates)(t)?(0,a.isDayInRange)(e,t):t.after&&t.before&&(0,a.isDayAfter)(t.before,t.after)?(0,a.isDayAfter)(e,t.after)&&(0,a.isDayBefore)(e,t.before):t.after&&t.before&&((0,a.isDayAfter)(t.after,t.before)||(0,a.isSameDay)(t.after,t.before))?(0,a.isDayAfter)(e,t.after)||(0,a.isDayBefore)(e,t.before):t.after?(0,a.isDayAfter)(e,t.after):t.before?(0,a.isDayBefore)(e,t.before):t.daysOfWeek?t.daysOfWeek.some(function(t){return e.getDay()===t}):"function"==typeof t&&t(e))})}function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce(function(n,r){var a=t[r];return o(e,a)&&n.push(r),n},[])}Object.defineProperty(t,"__esModule",{value:!0}),t.dayMatchesModifier=o,t.getModifiersForDay=r;var a=n(1),s=n(4);t.default={dayMatchesModifier:o,getModifiersForDay:r}},function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.ModifiersUtils=t.LocaleUtils=t.DateUtils=t.DayPicker=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),p=n(0),f=r(p),h=n(9),d=r(h),y=n(10),v=r(y),m=n(11),k=r(m),D=n(14),b=r(D),g=n(4),w=o(g),M=n(1),P=o(M),O=n(5),N=o(O),C=n(6),E=o(C),_=n(3),j=r(_),x=n(2),T=t.DayPicker=function(e){function t(e){s(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.dayPicker=null,n.showNextMonth=function(e){if(n.allowNextMonth()){var t=n.props.pagedNavigation?n.props.numberOfMonths:1,o=P.addMonths(n.state.currentMonth,t);n.showMonth(o,e)}},n.showPreviousMonth=function(e){if(n.allowPreviousMonth()){var t=n.props.pagedNavigation?n.props.numberOfMonths:1,o=P.addMonths(n.state.currentMonth,-t);n.showMonth(o,e)}},n.handleKeyDown=function(e){switch(e.persist(),e.keyCode){case x.LEFT:"rtl"===n.props.dir?n.showNextMonth():n.showPreviousMonth(),w.cancelEvent(e);break;case x.RIGHT:"rtl"===n.props.dir?n.showPreviousMonth():n.showNextMonth(),w.cancelEvent(e);break;case x.UP:n.showPreviousYear(),w.cancelEvent(e);break;case x.DOWN:n.showNextYear(),w.cancelEvent(e)}n.props.onKeyDown&&n.props.onKeyDown(e)},n.handleDayKeyDown=function(e,t,o){switch(o.persist(),o.keyCode){case x.LEFT:w.cancelEvent(o),"rtl"===n.props.dir?n.focusNextDay(o.target):n.focusPreviousDay(o.target);break;case x.RIGHT:w.cancelEvent(o),"rtl"===n.props.dir?n.focusPreviousDay(o.target):n.focusNextDay(o.target);break;case x.UP:w.cancelEvent(o),n.focusPreviousWeek(o.target);break;case x.DOWN:w.cancelEvent(o),n.focusNextWeek(o.target);break;case x.ENTER:case x.SPACE:w.cancelEvent(o),n.props.onDayClick&&n.handleDayClick(e,t,o)}n.props.onDayKeyDown&&n.props.onDayKeyDown(e,t,o)},n.handleDayClick=function(e,t,o){o.persist(),t[n.props.classNames.outside]&&n.props.enableOutsideDaysClick&&n.handleOutsideDayClick(e),n.props.onDayClick&&n.props.onDayClick(e,t,o)},n.handleTodayButtonClick=function(e){var t=new Date,o=new Date(t.getFullYear(),t.getMonth());n.showMonth(o),e.target.blur(),n.props.onTodayButtonClick&&(e.persist(),n.props.onTodayButtonClick(new Date(t.getFullYear(),t.getMonth(),t.getDate()),E.getModifiersForDay(t,n.props.modifiers),e))};var o=n.getCurrentMonthFromProps(e);return n.state={currentMonth:o},n}return u(t,e),c(t,[{key:"componentDidUpdate",value:function(e){if(e.month!==this.props.month&&!P.isSameMonth(e.month,this.props.month)){var t=this.getCurrentMonthFromProps(this.props);this.setState({currentMonth:t})}}},{key:"getCurrentMonthFromProps",value:function(e){var t=w.startOfMonth(e.month||e.initialMonth||new Date),n=t;if(e.pagedNavigation&&e.numberOfMonths>1&&e.fromMonth){var o=w.startOfMonth(e.fromMonth),r=w.getMonthsDiff(o,n);n=P.addMonths(o,Math.floor(r/e.numberOfMonths)*e.numberOfMonths)}else e.toMonth&&e.numberOfMonths>1&&w.getMonthsDiff(n,e.toMonth)<=0&&(n=P.addMonths(w.startOfMonth(e.toMonth),1-this.props.numberOfMonths));return n}},{key:"getNextNavigableMonth",value:function(){return P.addMonths(this.state.currentMonth,this.props.numberOfMonths)}},{key:"getPreviousNavigableMonth",value:function(){return P.addMonths(this.state.currentMonth,-1)}},{key:"allowPreviousMonth",value:function(){var e=P.addMonths(this.state.currentMonth,-1);return this.allowMonth(e)}},{key:"allowNextMonth",value:function(){var e=P.addMonths(this.state.currentMonth,this.props.numberOfMonths);return this.allowMonth(e)}},{key:"allowMonth",value:function(e){var t=this.props,n=t.fromMonth,o=t.toMonth;return!(!t.canChangeMonth||n&&w.getMonthsDiff(n,e)<0||o&&w.getMonthsDiff(o,e)>0)}},{key:"allowYearChange",value:function(){return this.props.canChangeMonth}},{key:"showMonth",value:function(e,t){var n=this;this.allowMonth(e)&&this.setState({currentMonth:w.startOfMonth(e)},function(){t&&t(),n.props.onMonthChange&&n.props.onMonthChange(n.state.currentMonth)})}},{key:"showNextYear",value:function(){if(this.allowYearChange()){var e=P.addMonths(this.state.currentMonth,12);this.showMonth(e)}}},{key:"showPreviousYear",value:function(){if(this.allowYearChange()){var e=P.addMonths(this.state.currentMonth,-12);this.showMonth(e)}}},{key:"focus",value:function(){this.wrapper.focus()}},{key:"focusFirstDayOfMonth",value:function(){w.getDayNodes(this.dayPicker,this.props.classNames)[0].focus()}},{key:"focusLastDayOfMonth",value:function(){var e=w.getDayNodes(this.dayPicker,this.props.classNames);e[e.length-1].focus()}},{key:"focusPreviousDay",value:function(e){var t=this,n=w.getDayNodes(this.dayPicker,this.props.classNames),o=w.nodeListToArray(n).indexOf(e);-1!==o&&(0===o?this.showPreviousMonth(function(){return t.focusLastDayOfMonth()}):n[o-1].focus())}},{key:"focusNextDay",value:function(e){var t=this,n=w.getDayNodes(this.dayPicker,this.props.classNames),o=w.nodeListToArray(n).indexOf(e);-1!==o&&(o===n.length-1?this.showNextMonth(function(){return t.focusFirstDayOfMonth()}):n[o+1].focus())}},{key:"focusNextWeek",value:function(e){var t=this,n=w.getDayNodes(this.dayPicker,this.props.classNames),o=w.nodeListToArray(n).indexOf(e);o>n.length-8?this.showNextMonth(function(){var e=n.length-o,r=7-e;w.getDayNodes(t.dayPicker,t.props.classNames)[r].focus()}):n[o+7].focus()}},{key:"focusPreviousWeek",value:function(e){var t=this,n=w.getDayNodes(this.dayPicker,this.props.classNames),o=w.nodeListToArray(n).indexOf(e);o<=6?this.showPreviousMonth(function(){var e=w.getDayNodes(t.dayPicker,t.props.classNames);e[e.length-7+o].focus()}):n[o-7].focus()}},{key:"handleOutsideDayClick",value:function(e){var t=this.state.currentMonth,n=this.props.numberOfMonths,o=w.getMonthsDiff(t,e);o>0&&o>=n?this.showNextMonth():o<0&&this.showPreviousMonth()}},{key:"renderNavbar",value:function(){var e=this.props,t=e.labels,n=e.locale,o=e.localeUtils,r=e.canChangeMonth,s=e.navbarElement,i=a(e,["labels","locale","localeUtils","canChangeMonth","navbarElement"]);if(!r)return null;var u={month:this.state.currentMonth,classNames:this.props.classNames,className:this.props.classNames.navBar,nextMonth:this.getNextNavigableMonth(),previousMonth:this.getPreviousNavigableMonth(),showPreviousButton:this.allowPreviousMonth(),showNextButton:this.allowNextMonth(),onNextClick:this.showNextMonth,onPreviousClick:this.showPreviousMonth,dir:i.dir,labels:t,locale:n,localeUtils:o};return f.default.isValidElement(s)?f.default.cloneElement(s,u):f.default.createElement(s,u)}},{key:"renderMonths",value:function(){for(var e=[],t=w.getFirstDayOfWeekFromProps(this.props),n=0;n<this.props.numberOfMonths;n+=1){var o=P.addMonths(this.state.currentMonth,n);e.push(f.default.createElement(k.default,l({key:n},this.props,{month:o,firstDayOfWeek:t,onDayKeyDown:this.handleDayKeyDown,onDayClick:this.handleDayClick})))}return this.props.reverseMonths&&e.reverse(),e}},{key:"renderFooter",value:function(){return this.props.todayButton?f.default.createElement("div",{className:this.props.classNames.footer},this.renderTodayButton()):null}},{key:"renderTodayButton",value:function(){return f.default.createElement("button",{type:"button",tabIndex:0,className:this.props.classNames.todayButton,"aria-label":this.props.todayButton,onClick:this.handleTodayButtonClick},this.props.todayButton)}},{key:"render",value:function(){var e=this,t=this.props.classNames.container;return this.props.onDayClick||(t=t+" "+this.props.classNames.interactionDisabled),this.props.className&&(t=t+" "+this.props.className),f.default.createElement("div",l({},this.props.containerProps,{className:t,ref:function(t){return e.dayPicker=t},lang:this.props.locale}),f.default.createElement("div",{className:this.props.classNames.wrapper,ref:function(t){return e.wrapper=t},tabIndex:this.props.canChangeMonth&&void 0!==this.props.tabIndex?this.props.tabIndex:-1,onKeyDown:this.handleKeyDown,onFocus:this.props.onFocus,onBlur:this.props.onBlur},this.renderNavbar(),f.default.createElement("div",{className:this.props.classNames.months},this.renderMonths()),this.renderFooter()))}}]),t}(p.Component);T.defaultProps={classNames:j.default,tabIndex:0,numberOfMonths:1,labels:{previousMonth:"Previous Month",nextMonth:"Next Month"},locale:"en",localeUtils:N,showOutsideDays:!1,enableOutsideDaysClick:!0,fixedWeeks:!1,canChangeMonth:!0,reverseMonths:!1,pagedNavigation:!1,showWeekNumbers:!1,showWeekDays:!0,renderDay:function(e){return e.getDate()},renderWeek:function(e){return e},weekdayElement:f.default.createElement(b.default,null),navbarElement:f.default.createElement(v.default,{classNames:j.default}),captionElement:f.default.createElement(d.default,{classNames:j.default})},T.VERSION="7.4.10",T.DateUtils=P,T.LocaleUtils=N,T.ModifiersUtils=E,t.DateUtils=P,t.LocaleUtils=N,t.ModifiersUtils=E,t.default=T},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(7).default;o.Input=n(15).default,t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(0),l=o(u),c=n(5),p=o(c),f=n(2),h=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleKeyUp=n.handleKeyUp.bind(n),n}return s(t,e),i(t,[{key:"shouldComponentUpdate",value:function(e){return e.locale!==this.props.locale||e.classNames!==this.props.classNames||e.date.getMonth()!==this.props.date.getMonth()||e.date.getFullYear()!==this.props.date.getFullYear()}},{key:"handleKeyUp",value:function(e){e.keyCode===f.ENTER&&this.props.onClick(e)}},{key:"render",value:function(){var e=this.props,t=e.classNames,n=e.date,o=e.months,r=e.locale,a=e.localeUtils,s=e.onClick;return l.default.createElement("div",{className:t.caption,role:"heading","aria-live":"polite"},l.default.createElement("div",{onClick:s,onKeyUp:this.handleKeyUp},o?o[n.getMonth()]+" "+n.getFullYear():a.formatMonthTitle(n,r)))}}]),t}(u.Component);h.defaultProps={localeUtils:p.default},t.default=h},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(0),l=o(u),c=n(3),p=o(c),f=n(2),h=function(e){function t(){var e,n,o,s;r(this,t);for(var i=arguments.length,u=Array(i),l=0;l<i;l++)u[l]=arguments[l];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),o.handleNextClick=function(){o.props.onNextClick&&o.props.onNextClick()},o.handlePreviousClick=function(){o.props.onPreviousClick&&o.props.onPreviousClick()},o.handleNextKeyDown=function(e){e.keyCode!==f.ENTER&&e.keyCode!==f.SPACE||(e.preventDefault(),o.handleNextClick())},o.handlePreviousKeyDown=function(e){e.keyCode!==f.ENTER&&e.keyCode!==f.SPACE||(e.preventDefault(),o.handlePreviousClick())},s=n,a(o,s)}return s(t,e),i(t,[{key:"shouldComponentUpdate",value:function(e){return e.labels!==this.props.labels||e.dir!==this.props.dir||this.props.showPreviousButton!==e.showPreviousButton||this.props.showNextButton!==e.showNextButton}},{key:"render",value:function(){var e=this.props,t=e.classNames,n=e.className,o=e.showPreviousButton,r=e.showNextButton,a=e.labels,s=e.dir,i=void 0,u=void 0,c=void 0,p=void 0,f=void 0,h=void 0;"rtl"===s?(i=this.handleNextClick,u=this.handlePreviousClick,c=this.handleNextKeyDown,p=this.handlePreviousKeyDown,h=o,f=r):(i=this.handlePreviousClick,u=this.handleNextClick,c=this.handlePreviousKeyDown,p=this.handleNextKeyDown,h=r,f=o);var d=f?t.navButtonPrev:t.navButtonPrev+" "+t.navButtonInteractionDisabled,y=h?t.navButtonNext:t.navButtonNext+" "+t.navButtonInteractionDisabled,v=l.default.createElement("span",{tabIndex:"0",role:"button","aria-label":a.previousMonth,key:"previous",className:d,onKeyDown:f?c:void 0,onClick:f?i:void 0}),m=l.default.createElement("span",{tabIndex:"0",role:"button","aria-label":a.nextMonth,key:"right",className:y,onKeyDown:h?p:void 0,onClick:h?u:void 0});return l.default.createElement("div",{className:n||t.navBar},"rtl"===s?[m,v]:[v,m])}}]),t}(u.Component);h.defaultProps={classNames:p.default,dir:"ltr",labels:{previousMonth:"Previous Month",nextMonth:"Next Month"},showPreviousButton:!0,showNextButton:!0},t.default=h},function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(0),c=r(l),p=n(12),f=r(p),h=n(13),d=r(h),y=n(2),v=n(6),m=o(v),k=n(4),D=o(k),b=n(1),g=o(b),w=function(e){function t(){var e,n,o,r;a(this,t);for(var i=arguments.length,u=Array(i),l=0;l<i;l++)u[l]=arguments[l];return n=o=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),o.renderDay=function(e){var t=o.props.month.getMonth(),n=D.getModifiersFromProps(o.props),r=m.getModifiersForDay(e,n);g.isSameDay(e,new Date)&&!Object.prototype.hasOwnProperty.call(n,o.props.classNames.today)&&r.push(o.props.classNames.today),e.getMonth()!==t&&r.push(o.props.classNames.outside);var a=e.getMonth()!==t,s=-1;o.props.onDayClick&&!a&&1===e.getDate()&&(s=o.props.tabIndex);var i=""+e.getFullYear()+e.getMonth()+e.getDate(),u={};return r.forEach(function(e){u[e]=!0}),c.default.createElement(d.default,{key:(a?"outside-":"")+i,classNames:o.props.classNames,day:e,modifiers:u,modifiersStyles:o.props.modifiersStyles,empty:a&&!o.props.showOutsideDays&&!o.props.fixedWeeks,tabIndex:s,ariaLabel:o.props.localeUtils.formatDay(e,o.props.locale),ariaDisabled:a||r.indexOf(o.props.classNames.disabled)>-1,ariaSelected:r.indexOf(o.props.classNames.selected)>-1,onClick:o.props.onDayClick,onFocus:o.props.onDayFocus,onKeyDown:o.props.onDayKeyDown,onMouseEnter:o.props.onDayMouseEnter,onMouseLeave:o.props.onDayMouseLeave,onMouseDown:o.props.onDayMouseDown,onMouseUp:o.props.onDayMouseUp,onTouchEnd:o.props.onDayTouchEnd,onTouchStart:o.props.onDayTouchStart},o.props.renderDay(e,u))},r=n,s(o,r)}return i(t,e),u(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.classNames,o=t.month,r=t.months,a=t.fixedWeeks,s=t.captionElement,i=t.weekdayElement,u=t.locale,l=t.localeUtils,p=t.weekdaysLong,h=t.weekdaysShort,d=t.firstDayOfWeek,v=t.onCaptionClick,m=t.showWeekNumbers,k=t.showWeekDays,b=t.onWeekClick,w={date:o,classNames:n,months:r,localeUtils:l,locale:u,onClick:v?function(e){return v(o,e)}:void 0},M=c.default.isValidElement(s)?c.default.cloneElement(s,w):c.default.createElement(s,w),P=D.getWeekArray(o,d,a);return c.default.createElement("div",{className:n.month,role:"grid"},M,k&&c.default.createElement(f.default,{classNames:n,weekdaysShort:h,weekdaysLong:p,firstDayOfWeek:d,showWeekNumbers:m,locale:u,localeUtils:l,weekdayElement:i}),c.default.createElement("div",{className:n.body,role:"rowgroup"},P.map(function(t){var r=void 0;return m&&(r=g.getWeekNumber(t[6])),c.default.createElement("div",{key:t[0].getTime(),className:n.week,role:"row"},m&&c.default.createElement("div",{className:n.weekNumber,tabIndex:b?0:-1,role:"gridcell",onClick:b?function(e){return b(r,t,e)}:void 0,onKeyUp:b?function(e){return e.keyCode===y.ENTER&&b(r,t,e)}:void 0},e.props.renderWeek(r,t,o)),t.map(e.renderDay))})))}}]),t}(l.Component);t.default=w},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(i),l=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"shouldComponentUpdate",value:function(e){return this.props!==e}},{key:"render",value:function(){for(var e=this.props,t=e.classNames,n=e.firstDayOfWeek,o=e.showWeekNumbers,r=e.weekdaysLong,a=e.weekdaysShort,s=e.locale,i=e.localeUtils,l=e.weekdayElement,c=[],p=0;p<7;p+=1){var f=(p+n)%7,h={key:p,className:t.weekday,weekday:f,weekdaysLong:r,weekdaysShort:a,localeUtils:i,locale:s},d=u.default.isValidElement(l)?u.default.cloneElement(l,h):u.default.createElement(l,h);c.push(d)}return u.default.createElement("div",{className:t.weekdays,role:"rowgroup"},u.default.createElement("div",{className:t.weekdaysRow,role:"row"},o&&u.default.createElement("div",{className:t.weekday}),c))}}]),t}(i.Component);t.default=l},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t,n){if(e)return function(o){o.persist(),e(t,n,o)}}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(0),p=o(c),f=n(1),h=n(4),d=n(3),y=o(d),v=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),l(t,[{key:"shouldComponentUpdate",value:function(e){var t=this,n=Object.keys(this.props),o=Object.keys(e);return n.length!==o.length||n.some(function(n){if("modifiers"===n||"modifiersStyles"===n||"classNames"===n){var o=t.props[n],r=e[n],a=Object.keys(o),s=Object.keys(r);return a.length!==s.length||a.some(function(e){return!(0,h.hasOwnProp)(r,e)||o[e]!==r[e]})}return"day"===n?!(0,f.isSameDay)(t.props[n],e[n]):!(0,h.hasOwnProp)(e,n)||t.props[n]!==e[n]})}},{key:"render",value:function(){var e=this.props,t=e.classNames,n=e.modifiersStyles,o=e.day,r=e.tabIndex,a=e.empty,s=e.modifiers,l=e.onMouseEnter,c=e.onMouseLeave,f=e.onMouseUp,h=e.onMouseDown,d=e.onClick,v=e.onKeyDown,m=e.onTouchStart,k=e.onTouchEnd,D=e.onFocus,b=e.ariaLabel,g=e.ariaDisabled,w=e.ariaSelected,M=e.children,P=t.day;t!==y.default?P+=" "+Object.keys(s).join(" "):P+=Object.keys(s).map(function(e){return" "+P+"--"+e}).join("");var O=void 0;return n&&Object.keys(s).filter(function(e){return!!n[e]}).forEach(function(e){O=u({},O,n[e])}),a?p.default.createElement("div",{"aria-disabled":!0,className:P,style:O}):p.default.createElement("div",{className:P,tabIndex:r,style:O,role:"gridcell","aria-label":b,"aria-disabled":g,"aria-selected":w,onClick:i(d,o,s),onKeyDown:i(v,o,s),onMouseEnter:i(l,o,s),onMouseLeave:i(c,o,s),onMouseUp:i(f,o,s),onMouseDown:i(h,o,s),onTouchEnd:i(k,o,s),onTouchStart:i(m,o,s),onFocus:i(D,o,s)},M)}}]),t}(c.Component);v.defaultProps={tabIndex:-1},v.defaultProps={modifiers:{},modifiersStyles:{},empty:!1},t.default=v},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(i),l=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"shouldComponentUpdate",value:function(e){return this.props!==e}},{key:"render",value:function(){var e=this.props,t=e.weekday,n=e.className,o=e.weekdaysLong,r=e.weekdaysShort,a=e.localeUtils,s=e.locale,i=void 0;i=o?o[t]:a.formatWeekdayLong(t,s);var l=void 0;return l=r?r[t]:a.formatWeekdayShort(t,s),u.default.createElement("div",{className:n,role:"columnheader"},u.default.createElement("abbr",{title:i},l))}}]),t}(i.Component);t.default=l},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function l(e){var t=(e.input,e.selectedDay,e.month,e.children),n=e.classNames,o=u(e,["input","selectedDay","month","children","classNames"]);return y.default.createElement("div",h({className:n.overlayWrapper},o),y.default.createElement("div",{className:n.overlay},t))}function c(e){if((0,k.isDate)(e)){return e.getFullYear()+"-"+(""+(e.getMonth()+1))+"-"+(""+e.getDate())}return""}function p(e){if("string"==typeof e){var t=e.split("-");if(3===t.length){var n=parseInt(t[0],10),o=parseInt(t[1],10)-1,r=parseInt(t[2],10);if(!(isNaN(n)||String(n).length>4||isNaN(o)||isNaN(r)||r<=0||r>31||o<0||o>=12))return new Date(n,o,r,12,0,0,0)}}}Object.defineProperty(t,"__esModule",{value:!0}),t.HIDE_TIMEOUT=void 0;var f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};t.OverlayComponent=l,t.defaultFormat=c,t.defaultParse=p;var d=n(0),y=o(d),v=n(7),m=o(v),k=n(1),D=n(6),b=n(2),g=t.HIDE_TIMEOUT=100,w=function(e){function t(e){a(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.input=null,n.daypicker=null,n.clickTimeout=null,n.hideTimeout=null,n.inputBlurTimeout=null,n.inputFocusTimeout=null,n.state=n.getInitialStateFromProps(e),n.state.showOverlay=e.showOverlay,n.hideAfterDayClick=n.hideAfterDayClick.bind(n),n.handleInputClick=n.handleInputClick.bind(n),n.handleInputFocus=n.handleInputFocus.bind(n),n.handleInputBlur=n.handleInputBlur.bind(n),n.handleInputChange=n.handleInputChange.bind(n),n.handleInputKeyDown=n.handleInputKeyDown.bind(n),n.handleInputKeyUp=n.handleInputKeyUp.bind(n),n.handleDayClick=n.handleDayClick.bind(n),n.handleMonthChange=n.handleMonthChange.bind(n),n.handleOverlayFocus=n.handleOverlayFocus.bind(n),n.handleOverlayBlur=n.handleOverlayBlur.bind(n),n}return i(t,e),f(t,[{key:"componentDidUpdate",value:function(e){var t={},n=this.props,o=n.value,r=n.formatDate,a=n.format,s=n.dayPickerProps;o===e.value&&s.locale===e.dayPickerProps.locale&&a===e.format||((0,k.isDate)(o)?t.value=r(o,a,s.locale):t.value=o);var i=e.dayPickerProps.month;s.month&&s.month!==i&&!(0,k.isSameMonth)(s.month,i)&&(t.month=s.month),e.dayPickerProps.selectedDays!==s.selectedDays&&(t.selectedDays=s.selectedDays),Object.keys(t).length>0&&this.setState(t)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.clickTimeout),clearTimeout(this.hideTimeout),clearTimeout(this.inputFocusTimeout),clearTimeout(this.inputBlurTimeout),clearTimeout(this.overlayBlurTimeout)}},{key:"getInitialMonthFromProps",value:function(e){var t=e.dayPickerProps,n=e.format,o=void 0;return e.value&&(o=(0,k.isDate)(e.value)?e.value:e.parseDate(e.value,n,t.locale)),t.initialMonth||t.month||o||new Date}},{key:"getInitialStateFromProps",value:function(e){var t=e.dayPickerProps,n=e.formatDate,o=e.format,r=e.typedValue,a=e.value;return e.value&&(0,k.isDate)(e.value)&&(a=n(e.value,o,t.locale)),{value:a,typedValue:r,month:this.getInitialMonthFromProps(e),selectedDays:t.selectedDays}}},{key:"getInput",value:function(){return this.input}},{key:"getDayPicker",value:function(){return this.daypicker}},{key:"updateState",value:function(e,t,n){var o=this,a=this.props,s=a.dayPickerProps,i=a.onDayChange;this.setState({month:e,value:t,typedValue:""},function(){if(n&&n(),i){var t=h({disabled:s.disabledDays,selected:s.selectedDays},s.modifiers),a=(0,D.getModifiersForDay)(e,t).reduce(function(e,t){return h({},e,r({},t,!0))},{});i(e,a,o)}})}},{key:"showDayPicker",value:function(){var e=this,t=this.props,n=t.parseDate,o=t.format,r=t.dayPickerProps,a=this.state,s=a.value;if(!a.showOverlay){var i=s?n(s,o,r.locale):this.getInitialMonthFromProps(this.props);this.setState(function(e){return{showOverlay:!0,month:i||e.month}},function(){e.props.onDayPickerShow&&e.props.onDayPickerShow()})}}},{key:"hideDayPicker",value:function(){var e=this;!1!==this.state.showOverlay&&this.setState({showOverlay:!1},function(){e.props.onDayPickerHide&&e.props.onDayPickerHide()})}},{key:"hideAfterDayClick",value:function(){var e=this;this.props.hideOnDayClick&&(this.hideTimeout=setTimeout(function(){e.overlayHasFocus=!1,e.hideDayPicker()},g))}},{key:"handleInputClick",value:function(e){this.showDayPicker(),this.props.inputProps.onClick&&(e.persist(),this.props.inputProps.onClick(e))}},{key:"handleInputFocus",value:function(e){var t=this;this.showDayPicker(),this.inputFocusTimeout=setTimeout(function(){t.overlayHasFocus=!1},2),this.props.inputProps.onFocus&&(e.persist(),this.props.inputProps.onFocus(e))}},{key:"handleInputBlur",value:function(e){var t=this;this.inputBlurTimeout=setTimeout(function(){t.overlayHasFocus||t.hideDayPicker()},1),this.props.inputProps.onBlur&&(e.persist(),this.props.inputProps.onBlur(e))}},{key:"handleOverlayFocus",value:function(e){e.preventDefault(),this.overlayHasFocus=!0,this.props.keepFocus&&this.input&&"function"==typeof this.input.focus&&this.input.focus()}},{key:"handleOverlayBlur",value:function(){var e=this;this.overlayBlurTimeout=setTimeout(function(){e.overlayHasFocus=!1},3)}},{key:"handleInputChange",value:function(e){var t=this.props,n=t.dayPickerProps,o=t.format,r=t.inputProps,a=t.onDayChange,s=t.parseDate;r.onChange&&(e.persist(),r.onChange(e));var i=e.target.value;if(""===i.trim())return this.setState({value:i,typedValue:""}),void(a&&a(void 0,{},this));var u=s(i,o,n.locale);if(!u)return this.setState({value:i,typedValue:i}),void(a&&a(void 0,{},this));this.updateState(u,i)}},{key:"handleInputKeyDown",value:function(e){e.keyCode===b.TAB?this.hideDayPicker():this.showDayPicker(),this.props.inputProps.onKeyDown&&(e.persist(),this.props.inputProps.onKeyDown(e))}},{key:"handleInputKeyUp",value:function(e){e.keyCode===b.ESC?this.hideDayPicker():this.showDayPicker(),this.props.inputProps.onKeyUp&&(e.persist(),this.props.inputProps.onKeyUp(e))}},{key:"handleMonthChange",value:function(e){var t=this;this.setState({month:e},function(){t.props.dayPickerProps&&t.props.dayPickerProps.onMonthChange&&t.props.dayPickerProps.onMonthChange(e)})}},{key:"handleDayClick",value:function(e,t,n){var o=this,r=this.props,a=r.clickUnselectsDay,s=r.dayPickerProps,i=r.onDayChange,u=r.formatDate,l=r.format;if(s.onDayClick&&s.onDayClick(e,t,n),!(t.disabled||s&&s.classNames&&t[s.classNames.disabled])){if(t.selected&&a){var c=this.state.selectedDays;if(Array.isArray(c)){c=c.slice(0);var p=c.indexOf(e);c.splice(p,1)}else c&&(c=null);return this.setState({value:"",typedValue:"",selectedDays:c},this.hideAfterDayClick),void(i&&i(void 0,t,this))}var f=u(e,l,s.locale);this.setState({value:f,typedValue:"",month:e},function(){i&&i(e,t,o),o.hideAfterDayClick()})}}},{key:"renderOverlay",value:function(){var e=this,t=this.props,n=t.classNames,o=t.dayPickerProps,r=t.parseDate,a=t.formatDate,s=t.format,i=this.state,u=i.selectedDays,l=i.value,c=void 0;if(!u&&l){var p=r(l,s,o.locale);p&&(c=p)}else u&&(c=u);var f=void 0;o.todayButton&&(f=function(){return e.updateState(new Date,a(new Date,s,o.locale),e.hideAfterDayClick)});var d=this.props.overlayComponent;return y.default.createElement(d,{classNames:n,month:this.state.month,selectedDay:c,input:this.input,tabIndex:0,onFocus:this.handleOverlayFocus,onBlur:this.handleOverlayBlur},y.default.createElement(m.default,h({ref:function(t){return e.daypicker=t},onTodayButtonClick:f},o,{month:this.state.month,selectedDays:c,onDayClick:this.handleDayClick,onMonthChange:this.handleMonthChange})))}},{key:"render",value:function(){var e=this,t=this.props.component,n=this.props.inputProps;return y.default.createElement("div",{className:this.props.classNames.container,style:this.props.style},y.default.createElement(t,h({ref:function(t){return e.input=t},placeholder:this.props.placeholder},n,{value:this.state.value||this.state.typedValue,onChange:this.handleInputChange,onFocus:this.handleInputFocus,onBlur:this.handleInputBlur,onKeyDown:this.handleInputKeyDown,onKeyUp:this.handleInputKeyUp,onClick:n.disabled?void 0:this.handleInputClick})),this.state.showOverlay&&this.renderOverlay())}}]),t}(y.default.Component);w.defaultProps={dayPickerProps:{},value:"",typedValue:"",placeholder:"YYYY-M-D",format:"L",formatDate:c,parseDate:p,showOverlay:!1,hideOnDayClick:!0,clickUnselectsDay:!1,keepFocus:!0,component:"input",inputProps:{},overlayComponent:l,classNames:{container:"DayPickerInput",overlayWrapper:"DayPickerInput-OverlayWrapper",overlay:"DayPickerInput-Overlay"}},t.default=w}]).default});
//# sourceMappingURL=react-day-picker.min.js.map

/***/ }),

/***/ "./src/contextMenuHover.css":
/*!**********************************!*\
  !*** ./src/contextMenuHover.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contextMenuHover_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./contextMenuHover.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/contextMenuHover.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contextMenuHover_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contextMenuHover_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/modal.css":
/*!***********************!*\
  !*** ./src/modal.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/modal.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/mousehover.css":
/*!****************************!*\
  !*** ./src/mousehover.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_mousehover_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./mousehover.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/mousehover.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_mousehover_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_mousehover_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/table.css":
/*!***********************!*\
  !*** ./src/table.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_table_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./table.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/table.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_table_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_table_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

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
/******/ 			id: moduleId,
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
/* harmony export */   "AlertModal": () => (/* reexport safe */ _AlertModal_js__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "CheckBox": () => (/* reexport safe */ _CheckBox_js__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "ChoiceText": () => (/* reexport safe */ _ChoiceText_js__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "sanitize": () => (/* reexport safe */ _Common_js__WEBPACK_IMPORTED_MODULE_3__.sanitize),
/* harmony export */   "formatMoney": () => (/* reexport safe */ _Common_js__WEBPACK_IMPORTED_MODULE_3__.formatMoney),
/* harmony export */   "ConfirmModal": () => (/* reexport safe */ _ConfirmModal_js__WEBPACK_IMPORTED_MODULE_4__.default),
/* harmony export */   "ContextMenu": () => (/* reexport safe */ _ContextMenu_js__WEBPACK_IMPORTED_MODULE_5__.default),
/* harmony export */   "convertDate": () => (/* reexport safe */ _DateFunct_js__WEBPACK_IMPORTED_MODULE_6__.convertDate),
/* harmony export */   "dateTime": () => (/* reexport safe */ _DateFunct_js__WEBPACK_IMPORTED_MODULE_6__.dateTime),
/* harmony export */   "addDigit": () => (/* reexport safe */ _DateFunct_js__WEBPACK_IMPORTED_MODULE_6__.addDigit),
/* harmony export */   "currentDateTime": () => (/* reexport safe */ _DateFunct_js__WEBPACK_IMPORTED_MODULE_6__.currentDateTime),
/* harmony export */   "currentDate": () => (/* reexport safe */ _DateFunct_js__WEBPACK_IMPORTED_MODULE_6__.currentDate),
/* harmony export */   "currentDBDateTime": () => (/* reexport safe */ _DateFunct_js__WEBPACK_IMPORTED_MODULE_6__.currentDBDateTime),
/* harmony export */   "currentDBDate": () => (/* reexport safe */ _DateFunct_js__WEBPACK_IMPORTED_MODULE_6__.currentDBDate),
/* harmony export */   "dbDate": () => (/* reexport safe */ _DateFunct_js__WEBPACK_IMPORTED_MODULE_6__.dbDate),
/* harmony export */   "monthName": () => (/* reexport safe */ _DateFunct_js__WEBPACK_IMPORTED_MODULE_6__.monthName),
/* harmony export */   "DatePicker": () => (/* reexport safe */ _DatePicker_js__WEBPACK_IMPORTED_MODULE_7__.default),
/* harmony export */   "DatePickerStyle": () => (/* reexport safe */ _DatePickerStyle_js__WEBPACK_IMPORTED_MODULE_8__.DatePickerStyle),
/* harmony export */   "DoubleListBox": () => (/* reexport safe */ _DoubleListBox_js__WEBPACK_IMPORTED_MODULE_9__.default),
/* harmony export */   "ErrorModal": () => (/* reexport safe */ _ErrorModal_js__WEBPACK_IMPORTED_MODULE_10__.default),
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
/* harmony export */   "copyStyle": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_11__.copyStyle),
/* harmony export */   "processInvalidStyleScreen": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_11__.processInvalidStyleScreen),
/* harmony export */   "processStyleScreen": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_11__.processStyleScreen),
/* harmony export */   "clearInvalidScreenOnly": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_11__.clearInvalidScreenOnly),
/* harmony export */   "processInvalidStyleTable": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_11__.processInvalidStyleTable),
/* harmony export */   "processStyleTable": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_11__.processStyleTable),
/* harmony export */   "validStyling": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_11__.validStyling),
/* harmony export */   "invalidStyling": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_11__.invalidStyling),
/* harmony export */   "isInvalid": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_11__.isInvalid),
/* harmony export */   "getInvalidMessage": () => (/* reexport safe */ _Invalid_js__WEBPACK_IMPORTED_MODULE_11__.getInvalidMessage),
/* harmony export */   "Choice": () => (/* reexport safe */ _List_js__WEBPACK_IMPORTED_MODULE_12__.Choice),
/* harmony export */   "List": () => (/* reexport safe */ _List_js__WEBPACK_IMPORTED_MODULE_12__.List),
/* harmony export */   "Modal": () => (/* reexport safe */ _Modal_js__WEBPACK_IMPORTED_MODULE_13__.default),
/* harmony export */   "Radio": () => (/* reexport safe */ _Radio_js__WEBPACK_IMPORTED_MODULE_14__.default),
/* harmony export */   "search": () => (/* reexport safe */ _SearchFunct_js__WEBPACK_IMPORTED_MODULE_15__.search),
/* harmony export */   "binSearch": () => (/* reexport safe */ _SearchFunct_js__WEBPACK_IMPORTED_MODULE_15__.binSearch),
/* harmony export */   "SearchSortTable": () => (/* reexport safe */ _SearchSortTable_js__WEBPACK_IMPORTED_MODULE_16__.default),
/* harmony export */   "buttonStyle": () => (/* reexport safe */ _Theme_js__WEBPACK_IMPORTED_MODULE_17__.buttonStyle),
/* harmony export */   "defaultThemeSettings": () => (/* reexport safe */ _Theme_js__WEBPACK_IMPORTED_MODULE_17__.defaultThemeSettings),
/* harmony export */   "generateButton": () => (/* reexport safe */ _Theme_js__WEBPACK_IMPORTED_MODULE_17__.generateButton),
/* harmony export */   "generateDefaultButton": () => (/* reexport safe */ _Theme_js__WEBPACK_IMPORTED_MODULE_17__.generateDefaultButton),
/* harmony export */   "UnstyledDatePicker": () => (/* reexport safe */ _UnstyledDatePicker_js__WEBPACK_IMPORTED_MODULE_18__.default),
/* harmony export */   "makeChangeHandler": () => (/* reexport safe */ _makeChangeHandler_js__WEBPACK_IMPORTED_MODULE_19__.default)
/* harmony export */ });
/* harmony import */ var _AlertModal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlertModal.js */ "./src/AlertModal.js");
/* harmony import */ var _CheckBox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckBox.js */ "./src/CheckBox.js");
/* harmony import */ var _ChoiceText_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChoiceText.js */ "./src/ChoiceText.js");
/* harmony import */ var _Common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Common.js */ "./src/Common.js");
/* harmony import */ var _ConfirmModal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ConfirmModal.js */ "./src/ConfirmModal.js");
/* harmony import */ var _ContextMenu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ContextMenu.js */ "./src/ContextMenu.js");
/* harmony import */ var _DateFunct_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DateFunct.js */ "./src/DateFunct.js");
/* harmony import */ var _DatePicker_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DatePicker.js */ "./src/DatePicker.js");
/* harmony import */ var _DatePickerStyle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DatePickerStyle.js */ "./src/DatePickerStyle.js");
/* harmony import */ var _DoubleListBox_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DoubleListBox.js */ "./src/DoubleListBox.js");
/* harmony import */ var _ErrorModal_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ErrorModal.js */ "./src/ErrorModal.js");
/* harmony import */ var _Invalid_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Invalid.js */ "./src/Invalid.js");
/* harmony import */ var _List_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./List.js */ "./src/List.js");
/* harmony import */ var _Modal_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Modal.js */ "./src/Modal.js");
/* harmony import */ var _Radio_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Radio.js */ "./src/Radio.js");
/* harmony import */ var _SearchFunct_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SearchFunct.js */ "./src/SearchFunct.js");
/* harmony import */ var _SearchSortTable_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./SearchSortTable.js */ "./src/SearchSortTable.js");
/* harmony import */ var _Theme_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Theme.js */ "./src/Theme.js");
/* harmony import */ var _UnstyledDatePicker_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./UnstyledDatePicker.js */ "./src/UnstyledDatePicker.js");
/* harmony import */ var _makeChangeHandler_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./makeChangeHandler.js */ "./src/makeChangeHandler.js");





















})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map