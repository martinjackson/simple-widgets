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

/***/ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@wojtekmaj/date-utils/dist/esm/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getYear": () => (/* binding */ getYear),
/* harmony export */   "getMonth": () => (/* binding */ getMonth),
/* harmony export */   "getMonthHuman": () => (/* binding */ getMonthHuman),
/* harmony export */   "getDate": () => (/* binding */ getDate),
/* harmony export */   "getHours": () => (/* binding */ getHours),
/* harmony export */   "getMinutes": () => (/* binding */ getMinutes),
/* harmony export */   "getSeconds": () => (/* binding */ getSeconds),
/* harmony export */   "getCenturyStart": () => (/* binding */ getCenturyStart),
/* harmony export */   "getPreviousCenturyStart": () => (/* binding */ getPreviousCenturyStart),
/* harmony export */   "getNextCenturyStart": () => (/* binding */ getNextCenturyStart),
/* harmony export */   "getCenturyEnd": () => (/* binding */ getCenturyEnd),
/* harmony export */   "getPreviousCenturyEnd": () => (/* binding */ getPreviousCenturyEnd),
/* harmony export */   "getNextCenturyEnd": () => (/* binding */ getNextCenturyEnd),
/* harmony export */   "getCenturyRange": () => (/* binding */ getCenturyRange),
/* harmony export */   "getDecadeStart": () => (/* binding */ getDecadeStart),
/* harmony export */   "getPreviousDecadeStart": () => (/* binding */ getPreviousDecadeStart),
/* harmony export */   "getNextDecadeStart": () => (/* binding */ getNextDecadeStart),
/* harmony export */   "getDecadeEnd": () => (/* binding */ getDecadeEnd),
/* harmony export */   "getPreviousDecadeEnd": () => (/* binding */ getPreviousDecadeEnd),
/* harmony export */   "getNextDecadeEnd": () => (/* binding */ getNextDecadeEnd),
/* harmony export */   "getDecadeRange": () => (/* binding */ getDecadeRange),
/* harmony export */   "getYearStart": () => (/* binding */ getYearStart),
/* harmony export */   "getPreviousYearStart": () => (/* binding */ getPreviousYearStart),
/* harmony export */   "getNextYearStart": () => (/* binding */ getNextYearStart),
/* harmony export */   "getYearEnd": () => (/* binding */ getYearEnd),
/* harmony export */   "getPreviousYearEnd": () => (/* binding */ getPreviousYearEnd),
/* harmony export */   "getNextYearEnd": () => (/* binding */ getNextYearEnd),
/* harmony export */   "getYearRange": () => (/* binding */ getYearRange),
/* harmony export */   "getMonthStart": () => (/* binding */ getMonthStart),
/* harmony export */   "getPreviousMonthStart": () => (/* binding */ getPreviousMonthStart),
/* harmony export */   "getNextMonthStart": () => (/* binding */ getNextMonthStart),
/* harmony export */   "getMonthEnd": () => (/* binding */ getMonthEnd),
/* harmony export */   "getPreviousMonthEnd": () => (/* binding */ getPreviousMonthEnd),
/* harmony export */   "getNextMonthEnd": () => (/* binding */ getNextMonthEnd),
/* harmony export */   "getMonthRange": () => (/* binding */ getMonthRange),
/* harmony export */   "getDayStart": () => (/* binding */ getDayStart),
/* harmony export */   "getPreviousDayStart": () => (/* binding */ getPreviousDayStart),
/* harmony export */   "getNextDayStart": () => (/* binding */ getNextDayStart),
/* harmony export */   "getDayEnd": () => (/* binding */ getDayEnd),
/* harmony export */   "getPreviousDayEnd": () => (/* binding */ getPreviousDayEnd),
/* harmony export */   "getNextDayEnd": () => (/* binding */ getNextDayEnd),
/* harmony export */   "getDayRange": () => (/* binding */ getDayRange),
/* harmony export */   "getDaysInMonth": () => (/* binding */ getDaysInMonth),
/* harmony export */   "getHoursMinutes": () => (/* binding */ getHoursMinutes),
/* harmony export */   "getHoursMinutesSeconds": () => (/* binding */ getHoursMinutesSeconds),
/* harmony export */   "getISOLocalMonth": () => (/* binding */ getISOLocalMonth),
/* harmony export */   "getISOLocalDate": () => (/* binding */ getISOLocalDate),
/* harmony export */   "getISOLocalDateTime": () => (/* binding */ getISOLocalDateTime)
/* harmony export */ });
/**
 * Utils
 */
function makeGetEdgeOfNeighbor(getPeriod, getEdgeOfPeriod, defaultOffset) {
  return function makeGetEdgeOfNeighborInternal(date) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOffset;
    var previousPeriod = getPeriod(date) + offset;
    return getEdgeOfPeriod(previousPeriod);
  };
}

function makeGetEnd(getBeginOfNextPeriod) {
  return function makeGetEndInternal(date) {
    return new Date(getBeginOfNextPeriod(date).getTime() - 1);
  };
}

function makeGetRange(functions) {
  return function makeGetRangeInternal(date) {
    return functions.map(function (fn) {
      return fn(date);
    });
  };
}
/**
 * Simple getters - getting a property of a given point in time
 */

/**
 * Gets year from date.
 *
 * @param {Date|number|string} date Date to get year from.
 */


function getYear(date) {
  if (date instanceof Date) {
    return date.getFullYear();
  }

  if (typeof date === 'number') {
    return date;
  }

  var year = parseInt(date, 10);

  if (typeof date === 'string' && !isNaN(year)) {
    return year;
  }

  throw new Error("Failed to get year from date: ".concat(date, "."));
}
/**
 * Gets month from date.
 *
 * @param {Date} date Date to get month from.
 */

function getMonth(date) {
  if (date instanceof Date) {
    return date.getMonth();
  }

  throw new Error("Failed to get month from date: ".concat(date, "."));
}
/**
 * Gets human-readable month from date.
 *
 * @param {Date} date Date to get human-readable month from.
 */

function getMonthHuman(date) {
  if (date instanceof Date) {
    return date.getMonth() + 1;
  }

  throw new Error("Failed to get human-readable month from date: ".concat(date, "."));
}
/**
 * Gets human-readable day of the month from date.
 *
 * @param {Date} date Date to get day of the month from.
 */

function getDate(date) {
  if (date instanceof Date) {
    return date.getDate();
  }

  throw new Error("Failed to get year from date: ".concat(date, "."));
}
/**
 * Gets hours from date.
 *
 * @param {Date|string} date Date to get hours from.
 */

function getHours(date) {
  if (date instanceof Date) {
    return date.getHours();
  }

  if (typeof date === 'string') {
    var datePieces = date.split(':');

    if (datePieces.length >= 2) {
      var hoursString = datePieces[0];
      var hours = parseInt(hoursString, 10);

      if (!isNaN(hours)) {
        return hours;
      }
    }
  }

  throw new Error("Failed to get hours from date: ".concat(date, "."));
}
/**
 * Gets minutes from date.
 *
 * @param {Date|string} date Date to get minutes from.
 */

function getMinutes(date) {
  if (date instanceof Date) {
    return date.getMinutes();
  }

  if (typeof date === 'string') {
    var datePieces = date.split(':');

    if (datePieces.length >= 2) {
      var minutesString = datePieces[1] || 0;
      var minutes = parseInt(minutesString, 10);

      if (!isNaN(minutes)) {
        return minutes;
      }
    }
  }

  throw new Error("Failed to get minutes from date: ".concat(date, "."));
}
/**
 * Gets seconds from date.
 *
 * @param {Date|string} date Date to get seconds from.
 */

function getSeconds(date) {
  if (date instanceof Date) {
    return date.getSeconds();
  }

  if (typeof date === 'string') {
    var datePieces = date.split(':');

    if (datePieces.length >= 2) {
      var secondsString = datePieces[2] || 0;
      var seconds = parseInt(secondsString, 10);

      if (!isNaN(seconds)) {
        return seconds;
      }
    }
  }

  throw new Error("Failed to get seconds from date: ".concat(date, "."));
}
/**
 * Century
 */

function getCenturyStart(date) {
  var year = getYear(date);
  var centuryStartYear = year + (-year + 1) % 100;
  var centuryStartDate = new Date();
  centuryStartDate.setFullYear(centuryStartYear, 0, 1);
  centuryStartDate.setHours(0, 0, 0, 0);
  return centuryStartDate;
}
var getPreviousCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, -100);
var getNextCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, 100);
var getCenturyEnd = makeGetEnd(getNextCenturyStart);
var getPreviousCenturyEnd = makeGetEdgeOfNeighbor(getYear, getCenturyEnd, -100);
var getNextCenturyEnd = makeGetEdgeOfNeighbor(getYear, getCenturyEnd, 100);
var getCenturyRange = makeGetRange([getCenturyStart, getCenturyEnd]);
/**
 * Decade
 */

function getDecadeStart(date) {
  var year = getYear(date);
  var decadeStartYear = year + (-year + 1) % 10;
  var decadeStartDate = new Date();
  decadeStartDate.setFullYear(decadeStartYear, 0, 1);
  decadeStartDate.setHours(0, 0, 0, 0);
  return decadeStartDate;
}
var getPreviousDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, -10);
var getNextDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, 10);
var getDecadeEnd = makeGetEnd(getNextDecadeStart);
var getPreviousDecadeEnd = makeGetEdgeOfNeighbor(getYear, getDecadeEnd, -10);
var getNextDecadeEnd = makeGetEdgeOfNeighbor(getYear, getDecadeEnd, 10);
var getDecadeRange = makeGetRange([getDecadeStart, getDecadeEnd]);
/**
 * Year
 */

function getYearStart(date) {
  var year = getYear(date);
  var yearStartDate = new Date();
  yearStartDate.setFullYear(year, 0, 1);
  yearStartDate.setHours(0, 0, 0, 0);
  return yearStartDate;
}
var getPreviousYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, -1);
var getNextYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, 1);
var getYearEnd = makeGetEnd(getNextYearStart);
var getPreviousYearEnd = makeGetEdgeOfNeighbor(getYear, getYearEnd, -1);
var getNextYearEnd = makeGetEdgeOfNeighbor(getYear, getYearEnd, 1);
var getYearRange = makeGetRange([getYearStart, getYearEnd]);
/**
 * Month
 */

function makeGetEdgeOfNeighborMonth(getEdgeOfPeriod, defaultOffset) {
  return function makeGetEdgeOfNeighborMonthInternal(date) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOffset;
    var year = getYear(date);
    var month = getMonth(date) + offset;
    var previousPeriod = new Date();
    previousPeriod.setFullYear(year, month, 1);
    previousPeriod.setHours(0, 0, 0, 0);
    return getEdgeOfPeriod(previousPeriod);
  };
}

function getMonthStart(date) {
  var year = getYear(date);
  var month = getMonth(date);
  var monthStartDate = new Date();
  monthStartDate.setFullYear(year, month, 1);
  monthStartDate.setHours(0, 0, 0, 0);
  return monthStartDate;
}
var getPreviousMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, -1);
var getNextMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, 1);
var getMonthEnd = makeGetEnd(getNextMonthStart);
var getPreviousMonthEnd = makeGetEdgeOfNeighborMonth(getMonthEnd, -1);
var getNextMonthEnd = makeGetEdgeOfNeighborMonth(getMonthEnd, 1);
var getMonthRange = makeGetRange([getMonthStart, getMonthEnd]);
/**
 * Day
 */

function makeGetEdgeOfNeighborDay(getEdgeOfPeriod, defaultOffset) {
  return function makeGetEdgeOfNeighborDayInternal(date) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOffset;
    var year = getYear(date);
    var month = getMonth(date);
    var day = getDate(date) + offset;
    var previousPeriod = new Date();
    previousPeriod.setFullYear(year, month, day);
    previousPeriod.setHours(0, 0, 0, 0);
    return getEdgeOfPeriod(previousPeriod);
  };
}

function getDayStart(date) {
  var year = getYear(date);
  var month = getMonth(date);
  var day = getDate(date);
  var dayStartDate = new Date();
  dayStartDate.setFullYear(year, month, day);
  dayStartDate.setHours(0, 0, 0, 0);
  return dayStartDate;
}
var getPreviousDayStart = makeGetEdgeOfNeighborDay(getDayStart, -1);
var getNextDayStart = makeGetEdgeOfNeighborDay(getDayStart, 1);
var getDayEnd = makeGetEnd(getNextDayStart);
var getPreviousDayEnd = makeGetEdgeOfNeighborDay(getDayEnd, -1);
var getNextDayEnd = makeGetEdgeOfNeighborDay(getDayEnd, 1);
var getDayRange = makeGetRange([getDayStart, getDayEnd]);
/**
 * Other
 */

/**
 * Returns a number of days in a month of a given date.
 *
 * @param {Date} date Date.
 */

function getDaysInMonth(date) {
  return getDate(getMonthEnd(date));
}

function padStart(num) {
  var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var numStr = "".concat(num);

  if (numStr.length >= val) {
    return num;
  }

  return "0000".concat(numStr).slice(-val);
}
/**
 * Returns local hours and minutes (hh:mm).
 */


function getHoursMinutes(date) {
  var hours = padStart(getHours(date));
  var minutes = padStart(getMinutes(date));
  return "".concat(hours, ":").concat(minutes);
}
/**
 * Returns local hours, minutes and seconds (hh:mm:ss).
 */

function getHoursMinutesSeconds(date) {
  var hours = padStart(getHours(date));
  var minutes = padStart(getMinutes(date));
  var seconds = padStart(getSeconds(date));
  return "".concat(hours, ":").concat(minutes, ":").concat(seconds);
}
/**
 * Returns local month in ISO-like format (YYYY-MM).
 */

function getISOLocalMonth(date) {
  var year = padStart(getYear(date), 4);
  var month = padStart(getMonthHuman(date));
  return "".concat(year, "-").concat(month);
}
/**
 * Returns local date in ISO-like format (YYYY-MM-DD).
 */

function getISOLocalDate(date) {
  var year = padStart(getYear(date), 4);
  var month = padStart(getMonthHuman(date));
  var day = padStart(getDate(date));
  return "".concat(year, "-").concat(month, "-").concat(day);
}
/**
 * Returns local date & time in ISO-like format (YYYY-MM-DDThh:mm:ss).
 */

function getISOLocalDateTime(date) {
  return "".concat(getISOLocalDate(date), "T").concat(getHoursMinutesSeconds(date));
}

/***/ }),

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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

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
/* harmony import */ var react_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-calendar */ "./node_modules/react-calendar/dist/esm/index.js");
/* harmony import */ var react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-calendar/dist/Calendar.css */ "./node_modules/react-calendar/dist/Calendar.css");
/* harmony import */ var _date2str__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date2str */ "./src/date2str.js");
/* harmony import */ var _localStrToDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStrToDate */ "./src/localStrToDate.js");
/* harmony import */ var _browserDetect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./browserDetect */ "./src/browserDetect.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



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
    f.value = (0,_date2str__WEBPACK_IMPORTED_MODULE_2__.date2str)(f.value, f.format);
  } else {
    f.dateValue = (0,_localStrToDate__WEBPACK_IMPORTED_MODULE_3__.localStrToDate)(f.value);
  }

  var handleCalendarChange = function handleCalendarChange(value) {
    var e = {};
    e.target = {};
    e.target.name = f.name;
    e.target.value = (0,_date2str__WEBPACK_IMPORTED_MODULE_2__.date2str)(value, f.format);
    f.onChange(e);
  };

  var triangle = showCalender ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, "\u25B2") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, "\u25BC"); // 9650   BLACK UP-POINTING TRIANGLE     9660   BLACK DOWN-POINTING TRIANGLE
  //  pattern="(?:19|20)\[0-9\]{2}-(?:(?:0\[1-9\]|1\[0-2\])-(?:0\[1-9\]|1\[0-9\]|2\[0-9\])|(?:(?!02)(?:0\[1-9\]|1\[0-2\])-(?:30))|(?:(?:0\[13578\]|1\[02\])-31))"
  // title="Enter a date in this format YYYY-MM-DD"

  if (_browserDetect__WEBPACK_IMPORTED_MODULE_4__.isSafari || _browserDetect__WEBPACK_IMPORTED_MODULE_4__.isIE) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
      type: "text",
      size: 10,
      "data-date-format": f.format
    }, f)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return setShowCalender(!showCalender);
      }
    }, triangle), showCalender && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        zIndex: 10,
        position: 'absolute'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_calendar__WEBPACK_IMPORTED_MODULE_5__.default, {
      autoFocus: true,
      name: f.name,
      value: f.dateValue,
      onChange: handleCalendarChange
    }))));
  } else {
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
  }
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





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

  return {
    choices: choices,
    leftValues: left,
    rightValues: right,
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
    _this.state = reset(_this.props);
    return _this;
  }

  _createClass(DoubleListBox, [{
    key: "render",
    value: function render() {
      var topSt = {
        display: 'flex'
      };
      var colSt = {
        flexDirection: 'column',
        width: 'min-content'
      };
      var listSt = {
        minWidth: '8em'
      };
      var buttonSt = {
        width: 50,
        margin: "0.25em 0.75em",
        // top/bot 0.25  left/right 0.75
        justifyContent: "center",
        backgroundColor: this.props.buttonBackgroundColor || 'blue',
        color: this.props.buttonColor || 'white'
      };
      var size = Math.max(7, this.props.size || 0, this.props.choices.length); // arrow buttons need 7 lines

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "DoubleListBoxClass",
        style: this.props.style
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
        size: size,
        onChange: this.leftHandleChange,
        keyname: "left",
        style: listSt
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: colSt
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        name: "moveRightSelect",
        style: buttonSt,
        onClick: this.moveRightSelectButton
      }, ">"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        name: "moveRightAll",
        style: buttonSt,
        onClick: this.moveRightAllButton
      }, ">>"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        name: "moveLeftSelect",
        style: buttonSt,
        onClick: this.moveLeftSelectButton
      }, "<"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        name: "moveLeftAll",
        style: buttonSt,
        onClick: this.moveLeftAllButton
      }, "<<")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "rightClass",
        style: this.props.rightStyle
      }, this.props.rightTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_List_js__WEBPACK_IMPORTED_MODULE_2__.List, {
        list: this.state.rightValues,
        ref: this.rightRef,
        size: size,
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
        return reset(props);
      }

      for (var i = 0; i < props.choices.length; i++) {
        if (props.choices[i] !== state.choices[i]) {
          return reset(props);
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

  var fileStyle = {
    display: "none"
  };
  var buttonStyle = {
    margin: "10px",
    borderRadius: "10px",
    color: "white",
    backgroundColor: "blue",
    fontWeight: "bold",
    padding: "5px",
    display: "inline-block",
    cursor: "pointer"
  };

  if (hasProperty(props, 'buttonStyle')) {
    buttonStyle = props.buttonStyle;
  }

  var textStyle = {
    width: "40em",
    height: "25px"
  };

  if (hasProperty(props, 'textStyle')) {
    textStyle = props.textStyle;
  }

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

  var marginStyle = {
    marginRight: "10px"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "InputFileClass"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: props.id,
    style: marginStyle
  }, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    file: "text",
    id: "pfile",
    name: "displayFile",
    value: displayFile,
    style: textStyle,
    onChange: function onChange(event) {
      return processDisplay(event.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: props.id,
    style: buttonStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "file",
    name: props.name,
    value: inputFile,
    id: props.id,
    accept: props.hasOwnProperty('accept') ? props.accept : '',
    style: fileStyle,
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

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
/* harmony import */ var _funnel_filter_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./funnel-filter-svgrepo-com.svg */ "./src/funnel-filter-svgrepo-com.svg");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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

/*
import {CheckBox, Choice, isInvalid, setInvalidScreen, copyStyle,
    validStyling, processStyleScreen, wasClickedScreen,
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
  var SRCHHDR = 2;
  var numCols = (props === null || props === void 0 ? void 0 : (_props$data$ = props.data[0]) === null || _props$data$ === void 0 ? void 0 : _props$data$.length) || 10;
  var initialFilters = Array(numCols).fill(''); // React doesn't like <input value={null}

  var initialBackground = Array(63).fill({
    backgroundColor: Theme.backgroundColor
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

  var imageStyle = {
    backgroundColor: "lightgreen"
  };
  var imageStyle2 = {
    backgroundColor: Theme.backgroundColor
  };
  var genButtonStyle = (0,_Theme_js__WEBPACK_IMPORTED_MODULE_5__.generateButton)(buttonStyle, props.error, false, 'gray');
  var genTopButtonStyle = (0,_Theme_js__WEBPACK_IMPORTED_MODULE_5__.generateButton)(noButtonStyle, props.error, topDisabled, 'gray');
  var genPreviousButtonStyle = (0,_Theme_js__WEBPACK_IMPORTED_MODULE_5__.generateButton)(noButtonStyle, props.error, previousDisabled, 'gray');
  var genNextButtonStyle = (0,_Theme_js__WEBPACK_IMPORTED_MODULE_5__.generateButton)(noButtonStyle, props.error, nextDisabled, 'gray');
  var genBottomButtonStyle = (0,_Theme_js__WEBPACK_IMPORTED_MODULE_5__.generateButton)(noButtonStyle, props.error, bottomDisabled, 'gray');
  var genFilterStyle = (0,_Theme_js__WEBPACK_IMPORTED_MODULE_5__.generateButton)(filterPressed === true ? imageStyle : imageStyle2, props.error, filterOn !== 'Y', 'gray');
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

  var buttonStyle2 = {
    border: "none",
    backgroundColor: "none"
  };
  var filterSection = hasProperty(props, 'nofilter') === true ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CheckBox_js__WEBPACK_IMPORTED_MODULE_1__.default, {
    selectedValue: "Y",
    name: "filterOn",
    text: "\xA0\xA0\xA0Filter On",
    value: filterOn,
    onChange: function onChange(event) {
      return processFilterOn(event.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: filterButton,
    style: buttonStyle2,
    disabled: props.error || filterOn !== 'Y'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _funnel_filter_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_8__,
    width: "30px",
    height: "30px",
    style: genFilterStyle
  })));
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
  }), "rows"), topButtonHTML, previousButtonHTML, hasProperty(props, 'nodisplay') === true ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, start + ' - ' + end + ' of ' + length), nextButtonHTML, bottomButtonHTML);
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
      if (sortOrder[i] === 'A') {
        btnImg = "\u2BC5"; // Up arrow
      } else if (sortOrder[i] === 'D') {
        btnImg = "\u2BC6"; // Down arrow
      } else if (sortOrder[i] === 'N') {
        btnImg = "\u2BC8"; // Right arrow
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
            name: filterName,
            style: filterStyle,
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
            style: headerStyle
          }, row.header, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
            name: "sort",
            onClick: function onClick() {
              return sortClicked(row.name, 'X', indexes);
            },
            style: buttonStyle2
          }, btnImg));
        } else {
          // Searching and filtering is allowed
          return (
            /*#__PURE__*/
            // Display header and input field for filtering
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
              key: key,
              style: headerStyle
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, row.header, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
              name: "sort",
              onClick: function onClick() {
                return sortClicked(row.name, 'X', indexes);
              },
              style: buttonStyle2
            }, btnImg)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
              className: "checkForError"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
              type: "text",
              name: filterName,
              style: filterStyle,
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
        style: headerStyle
      }, row.header, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        name: "sort",
        onClick: function onClick() {
          return sortClicked(row.name, 'X', indexes);
        },
        style: buttonStyle2
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
    } // Check for the dateTable in the props


    var areDates = false;

    if (props.hasOwnProperty('dateTable')) {
      areDates = true;
    }

    var foundDate = false;
    var dateIndex = -1; // Spin through the data and see if it meets the filter criteria

    for (var _i5 = 0; _i5 < indexes.length; _i5++) {
      found = []; // Empty the found array for the next data element

      done = false; // Spin through the filter input boxes to see if the data element matches

      for (var j = 0; j < indexing.length && done === false; j++) {
        if (areDates === true) {
          foundDate = false;
          dateIndex = -1; // Find if the index is in the date table

          for (var k = 0; k < props.dateTable.length; k++) {
            if (props.dateTable[k].index === indexing[j]) {
              foundDate = true;
              dateIndex = k;
            }
          }
        } // The data field is blank or has no value


        if (data[indexes[_i5]][props.table[indexing[j]].name] === null) {
          found.push(false);
          done = true;
        } else if (foundDate === true) {
          // The field contains a date
          var dataPart = null;
          var filterPart = null; // Convert the format for the data part

          if (props.dateTable[dateIndex].data === 'MM/DD/YYYY') {
            dataPart = convertDate(data[indexes[_i5]][props.table[indexing[j]].name], '/');
          } else if (props.dateTable[dateIndex].data === 'MM-DD-YYYY') {
            dataPart = convertDate(data[indexes[_i5]][props.table[indexing[j]].name], '-');
          } else if (props.dateTable[dateIndex].data === 'MM/DD/YYYY HH:MM:SS') {
            dataPart = convertDateTime(data[indexes[_i5]][props.table[indexing[j]].name], '/');
          } else if (props.dateTable[dateIndex].data === 'MM-DD-YYYY HH:MM:SS') {
            dataPart = convertDateTime(data[indexes[_i5]][props.table[indexing[j]].name], '-');
          } else if (props.dateTable[dateIndex].data === 'YYYY-MM-DDTHH:MM:SS.SSS') {
            dataPart = convertDateTimeReg(data[indexes[_i5]][props.table[indexing[j]].name]);
          } else {
            dataPart = data[indexes[_i5]][props.table[indexing[j]].name];
          } // Convert the format for the filter part


          if (props.dateTable[dateIndex].filter === 'MM/DD/YYYY') {
            filterPart = convertDate(filter[indexing[j]], '/');
          } else if (props.dateTable[dateIndex].filter === 'MM-DD-YYYY') {
            filterPart = convertDate(filter[indexing[j]], '-');
          } else if (props.dateTable[dateIndex].filter === 'MM/DD/YYYY HH:MM:SS') {
            filterPart = convertDateTime(filter[indexing[j]], '/');
          } else if (props.dateTable[dateIndex].filter === 'MM-DD-YYYY HH:MM:SS') {
            filterPart = convertDateTime(filter[indexing[j]], '-');
          } else if (props.dateTable[dateIndex].filter === 'YYYY-MM-DDTHH:MM:SS.SSS') {
            filterPart = convertDateTimeReg(filter[indexing[j]]);
          } else {
            filterPart = filter[indexing[j]];
          }

          if (dataPart === filterPart) {
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

      for (var _k = 0; _k < found.length && move === true; _k++) {
        if (found[_k] === false) {
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
    return "".concat(localDate[2], "-").concat(localDate[0], "-").concat(localDate[1], "T").concat(dateTime[1]);
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

    var sortAry = [];
    indexes.map(function (row) {
      return sortAry.push({
        index: row,
        data: props.data[row][name]
      });
    });
    sortAry.sort(function (item1, item2) {
      // Convert to upper case if ignoring case
      if (typeof item1.data === 'string' && hasProperty(props, 'ignorecase') === true) {
        item1.data = item1.data !== null ? item1.data.toUpperCase() : null;
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
      style: background[i]
    }, row), "\xA0\xA0");
  }

  function resetSortOrder() {
    var order = new Array(props.table.length).fill('N');
    setSortOrder(order);
  }

  function clearSetBackground(index, set) {
    var backgrd = _toConsumableArray(background);

    for (var _i8 = 0; _i8 < backgrd.length; _i8++) {
      backgrd[_i8] = {
        backgroundColor: Theme.backgroundColor
      };
    }

    if (set === true) {
      backgrd[index] = {
        backgroundColor: "lightblue"
      };
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

      sortClicked(props.table[index].name, 'A', indexing); // ascending order

      var newIndexes = []; // Find the beginning of the letter

      var begin = 0; // Where the beginning of the letter is

      var _found = false; // Indicates that the letter was found

      for (begin = 0; begin < indexing.length; begin++) {
        // Letter or digit is found
        if (props.data[indexing[begin]][props.table[index].name] !== null && props.data[indexing[begin]][props.table[index].name].toString().startsWith(letter) === true) {
          _found = true;
          break;
        }
      } // Find the end of the letter


      var stop = 0; // Where the end of the letter is

      for (stop = begin; stop < indexing.length; stop++) {
        // End of the letter or digit is found
        if (props.data[indexing[stop]][props.table[index].name] !== null && props.data[indexing[stop]][props.table[index].name].toString().startsWith(letter) === false) {
          break;
        }

        newIndexes.push(indexing[stop]);
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
    } else if (endLen - maxItems < 0) {
      // Can not go any further up so disable top and previous
      setPreviousDisabled(true);
      setTopDisabled(true);
    } else {
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/react-calendar/dist/Calendar.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/react-calendar/dist/Calendar.css ***!
  \************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".react-calendar {\n  width: 350px;\n  max-width: 100%;\n  background: white;\n  border: 1px solid #a0a096;\n  font-family: Arial, Helvetica, sans-serif;\n  line-height: 1.125em;\n}\n\n.react-calendar--doubleView {\n  width: 700px;\n}\n\n.react-calendar--doubleView .react-calendar__viewContainer {\n  display: flex;\n  margin: -0.5em;\n}\n\n.react-calendar--doubleView .react-calendar__viewContainer > * {\n  width: 50%;\n  margin: 0.5em;\n}\n\n.react-calendar,\n.react-calendar *,\n.react-calendar *:before,\n.react-calendar *:after {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.react-calendar button {\n  margin: 0;\n  border: 0;\n  outline: none;\n}\n\n.react-calendar button:enabled:hover {\n  cursor: pointer;\n}\n\n.react-calendar__navigation {\n  height: 44px;\n  margin-bottom: 1em;\n}\n\n.react-calendar__navigation button {\n  min-width: 44px;\n  background: none;\n}\n\n.react-calendar__navigation button:enabled:hover,\n.react-calendar__navigation button:enabled:focus {\n  background-color: #e6e6e6;\n}\n\n.react-calendar__navigation button[disabled] {\n  background-color: #f0f0f0;\n}\n\n.react-calendar__month-view__weekdays {\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 0.75em;\n}\n\n.react-calendar__month-view__weekdays__weekday {\n  padding: 0.5em;\n}\n\n.react-calendar__month-view__weekNumbers {\n  font-weight: bold;\n}\n\n.react-calendar__month-view__weekNumbers .react-calendar__tile {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75em;\n  padding: calc(0.75em / 0.75) calc(0.5em / 0.75);\n}\n\n.react-calendar__month-view__days__day--weekend {\n  color: #d10000;\n}\n\n.react-calendar__month-view__days__day--neighboringMonth {\n  color: #757575;\n}\n\n.react-calendar__year-view .react-calendar__tile,\n.react-calendar__decade-view .react-calendar__tile,\n.react-calendar__century-view .react-calendar__tile {\n  padding: 2em 0.5em;\n}\n\n.react-calendar__tile {\n  max-width: 100%;\n  text-align: center;\n  padding: 0.75em 0.5em;\n  background: none;\n}\n\n.react-calendar__tile:disabled {\n  background-color: #f0f0f0;\n}\n\n.react-calendar__tile:enabled:hover,\n.react-calendar__tile:enabled:focus {\n  background-color: #e6e6e6;\n}\n\n.react-calendar__tile--now {\n  background: #ffff76;\n}\n\n.react-calendar__tile--now:enabled:hover,\n.react-calendar__tile--now:enabled:focus {\n  background: #ffffa9;\n}\n\n.react-calendar__tile--hasActive {\n  background: #76baff;\n}\n\n.react-calendar__tile--hasActive:enabled:hover,\n.react-calendar__tile--hasActive:enabled:focus {\n  background: #a9d4ff;\n}\n\n.react-calendar__tile--active {\n  background: #006edc;\n  color: white;\n}\n\n.react-calendar__tile--active:enabled:hover,\n.react-calendar__tile--active:enabled:focus {\n  background: #1087ff;\n}\n\n.react-calendar--selectRange .react-calendar__tile--hover {\n  background-color: #e6e6e6;\n}", "",{"version":3,"sources":["webpack://./node_modules/react-calendar/dist/Calendar.css"],"names":[],"mappings":"AAAA;EACE,YAAA;EACA,eAAA;EACA,iBAAA;EACA,yBAAA;EACA,yCAAA;EACA,oBAAA;AACF;;AACA;EACE,YAAA;AAEF;;AAAA;EACE,aAAA;EACA,cAAA;AAGF;;AADA;EACE,UAAA;EACA,aAAA;AAIF;;AAFA;;;;EAIE,2BAAA;EACA,8BAAA;EACA,sBAAA;AAKF;;AAHA;EACE,SAAA;EACA,SAAA;EACA,aAAA;AAMF;;AAJA;EACE,eAAA;AAOF;;AALA;EACE,YAAA;EACA,kBAAA;AAQF;;AANA;EACE,eAAA;EACA,gBAAA;AASF;;AAPA;;EAEE,yBAAA;AAUF;;AARA;EACE,yBAAA;AAWF;;AATA;EACE,kBAAA;EACA,yBAAA;EACA,iBAAA;EACA,iBAAA;AAYF;;AAVA;EACE,cAAA;AAaF;;AAXA;EACE,iBAAA;AAcF;;AAZA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,iBAAA;EACA,+CAAA;AAeF;;AAbA;EACE,cAAA;AAgBF;;AAdA;EACE,cAAA;AAiBF;;AAfA;;;EAGE,kBAAA;AAkBF;;AAhBA;EACE,eAAA;EACA,kBAAA;EACA,qBAAA;EACA,gBAAA;AAmBF;;AAjBA;EACE,yBAAA;AAoBF;;AAlBA;;EAEE,yBAAA;AAqBF;;AAnBA;EACE,mBAAA;AAsBF;;AApBA;;EAEE,mBAAA;AAuBF;;AArBA;EACE,mBAAA;AAwBF;;AAtBA;;EAEE,mBAAA;AAyBF;;AAvBA;EACE,mBAAA;EACA,YAAA;AA0BF;;AAxBA;;EAEE,mBAAA;AA2BF;;AAzBA;EACE,yBAAA;AA4BF","sourcesContent":[".react-calendar {\n  width: 350px;\n  max-width: 100%;\n  background: white;\n  border: 1px solid #a0a096;\n  font-family: Arial, Helvetica, sans-serif;\n  line-height: 1.125em;\n}\n.react-calendar--doubleView {\n  width: 700px;\n}\n.react-calendar--doubleView .react-calendar__viewContainer {\n  display: flex;\n  margin: -0.5em;\n}\n.react-calendar--doubleView .react-calendar__viewContainer > * {\n  width: 50%;\n  margin: 0.5em;\n}\n.react-calendar,\n.react-calendar *,\n.react-calendar *:before,\n.react-calendar *:after {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.react-calendar button {\n  margin: 0;\n  border: 0;\n  outline: none;\n}\n.react-calendar button:enabled:hover {\n  cursor: pointer;\n}\n.react-calendar__navigation {\n  height: 44px;\n  margin-bottom: 1em;\n}\n.react-calendar__navigation button {\n  min-width: 44px;\n  background: none;\n}\n.react-calendar__navigation button:enabled:hover,\n.react-calendar__navigation button:enabled:focus {\n  background-color: #e6e6e6;\n}\n.react-calendar__navigation button[disabled] {\n  background-color: #f0f0f0;\n}\n.react-calendar__month-view__weekdays {\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 0.75em;\n}\n.react-calendar__month-view__weekdays__weekday {\n  padding: 0.5em;\n}\n.react-calendar__month-view__weekNumbers {\n  font-weight: bold;\n}\n.react-calendar__month-view__weekNumbers .react-calendar__tile {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75em;\n  padding: calc(0.75em / 0.75) calc(0.5em / 0.75);\n}\n.react-calendar__month-view__days__day--weekend {\n  color: #d10000;\n}\n.react-calendar__month-view__days__day--neighboringMonth {\n  color: #757575;\n}\n.react-calendar__year-view .react-calendar__tile,\n.react-calendar__decade-view .react-calendar__tile,\n.react-calendar__century-view .react-calendar__tile {\n  padding: 2em 0.5em;\n}\n.react-calendar__tile {\n  max-width: 100%;\n  text-align: center;\n  padding: 0.75em 0.5em;\n  background: none;\n}\n.react-calendar__tile:disabled {\n  background-color: #f0f0f0;\n}\n.react-calendar__tile:enabled:hover,\n.react-calendar__tile:enabled:focus {\n  background-color: #e6e6e6;\n}\n.react-calendar__tile--now {\n  background: #ffff76;\n}\n.react-calendar__tile--now:enabled:hover,\n.react-calendar__tile--now:enabled:focus {\n  background: #ffffa9;\n}\n.react-calendar__tile--hasActive {\n  background: #76baff;\n}\n.react-calendar__tile--hasActive:enabled:hover,\n.react-calendar__tile--hasActive:enabled:focus {\n  background: #a9d4ff;\n}\n.react-calendar__tile--active {\n  background: #006edc;\n  color: white;\n}\n.react-calendar__tile--active:enabled:hover,\n.react-calendar__tile--active:enabled:focus {\n  background: #1087ff;\n}\n.react-calendar--selectRange .react-calendar__tile--hover {\n  background-color: #e6e6e6;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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
___CSS_LOADER_EXPORT___.push([module.id, ".contextMenuHov {\n  position: absolute;\n  display: block;\n  padding: 10px;\n  z-index: 1;\n}\n\n.contextMenuHov > span:hover {\n  visibility: visible;\n  background-color: lightgray;\n}", "",{"version":3,"sources":["webpack://./src/contextMenuHover.css"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,cAAA;EACA,aAAA;EACA,UAAA;AACJ;;AAEA;EACI,mBAAA;EACA,2BAAA;AACJ","sourcesContent":[".contextMenuHov {\n    position: absolute;\n    display: block;\n    padding: 10px;\n    z-index: 1;\n}\n\n.contextMenuHov > span:hover {\n    visibility: visible;\n    background-color: lightgray;\n}\n"],"sourceRoot":""}]);
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

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

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

/***/ "./node_modules/get-user-locale/dist/esm/index.js":
/*!********************************************************!*\
  !*** ./node_modules/get-user-locale/dist/esm/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUserLocales": () => (/* binding */ getUserLocales),
/* harmony export */   "getUserLocale": () => (/* binding */ getUserLocale),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_once__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.once */ "./node_modules/lodash.once/index.js");
/* harmony import */ var lodash_once__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_once__WEBPACK_IMPORTED_MODULE_0__);


function filterDuplicates(arr) {
  return arr.filter(function (el, index, self) {
    return self.indexOf(el) === index;
  });
}

function fixLowercaseProperties(arr) {
  return arr.map(function (el) {
    if (!el || el.indexOf('-') === -1 || el.toLowerCase() !== el) {
      return el;
    }

    var splitEl = el.split('-');
    return "".concat(splitEl[0], "-").concat(splitEl[1].toUpperCase());
  });
}

function getUserLocalesInternal() {
  var languageList = [];

  if (typeof window !== 'undefined') {
    if (window.navigator.languages) {
      languageList = languageList.concat(window.navigator.languages);
    }

    if (window.navigator.language) {
      languageList.push(window.navigator.language);
    }

    if (window.navigator.userLanguage) {
      languageList.push(window.navigator.userLanguage);
    }

    if (window.navigator.browserLanguage) {
      languageList.push(window.navigator.browserLanguage);
    }

    if (window.navigator.systemLanguage) {
      languageList.push(window.navigator.systemLanguage);
    }
  }

  languageList.push('en-US'); // Fallback

  return fixLowercaseProperties(filterDuplicates(languageList));
}

var getUserLocales = lodash_once__WEBPACK_IMPORTED_MODULE_0___default()(getUserLocalesInternal);

function getUserLocaleInternal() {
  return getUserLocales()[0];
}

var getUserLocale = lodash_once__WEBPACK_IMPORTED_MODULE_0___default()(getUserLocaleInternal);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUserLocale);

/***/ }),

/***/ "./node_modules/lodash.once/index.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash.once/index.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Creates a function that invokes `func`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `func` invocation.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {number} n The number of calls at which `func` is no longer invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * jQuery(element).on('click', _.before(5, addContactToList));
 * // => Allows adding up to 4 contacts to the list.
 */
function before(n, func) {
  var result;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  n = toInteger(n);
  return function() {
    if (--n > 0) {
      result = func.apply(this, arguments);
    }
    if (n <= 1) {
      func = undefined;
    }
    return result;
  };
}

/**
 * Creates a function that is restricted to invoking `func` once. Repeat calls
 * to the function return the value of the first invocation. The `func` is
 * invoked with the `this` binding and arguments of the created function.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * var initialize = _.once(createApplication);
 * initialize();
 * initialize();
 * // => `createApplication` is invoked once
 */
function once(func) {
  return before(2, func);
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = once;


/***/ }),

/***/ "./node_modules/merge-class-names/dist/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/merge-class-names/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mergeClassNames)
/* harmony export */ });
function mergeClassNames() {
  return Array.prototype.slice.call(arguments).reduce(function (classList, arg) {
    return classList.concat(arg);
  }, []).filter(function (arg) {
    return typeof arg === 'string';
  }).join(' ');
}

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


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

/***/ "./node_modules/react-calendar/dist/esm/Calendar.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/Calendar.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Calendar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var merge_class_names__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! merge-class-names */ "./node_modules/merge-class-names/dist/esm/index.js");
/* harmony import */ var _Calendar_Navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Calendar/Navigation */ "./node_modules/react-calendar/dist/esm/Calendar/Navigation.js");
/* harmony import */ var _CenturyView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CenturyView */ "./node_modules/react-calendar/dist/esm/CenturyView.js");
/* harmony import */ var _DecadeView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DecadeView */ "./node_modules/react-calendar/dist/esm/DecadeView.js");
/* harmony import */ var _YearView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./YearView */ "./node_modules/react-calendar/dist/esm/YearView.js");
/* harmony import */ var _MonthView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MonthView */ "./node_modules/react-calendar/dist/esm/MonthView.js");
/* harmony import */ var _shared_dates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/dates */ "./node_modules/react-calendar/dist/esm/shared/dates.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/utils */ "./node_modules/react-calendar/dist/esm/shared/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }












var defaultMinDate = new Date();
defaultMinDate.setFullYear(1, 0, 1);
defaultMinDate.setHours(0, 0, 0, 0);
var defaultMaxDate = new Date(8.64e15);
var baseClassName = 'react-calendar';
var allViews = ['century', 'decade', 'year', 'month'];
var allValueTypes = [].concat(_toConsumableArray(allViews.slice(1)), ['day']);

function toDate(value) {
  if (value instanceof Date) {
    return value;
  }

  return new Date(value);
}
/**
 * Returns views array with disallowed values cut off.
 */


function getLimitedViews(minDetail, maxDetail) {
  return allViews.slice(allViews.indexOf(minDetail), allViews.indexOf(maxDetail) + 1);
}
/**
 * Determines whether a given view is allowed with currently applied settings.
 */


function isViewAllowed(view, minDetail, maxDetail) {
  var views = getLimitedViews(minDetail, maxDetail);
  return views.indexOf(view) !== -1;
}
/**
 * Gets either provided view if allowed by minDetail and maxDetail, or gets
 * the default view if not allowed.
 */


function getView(view, minDetail, maxDetail) {
  if (isViewAllowed(view, minDetail, maxDetail)) {
    return view;
  }

  return maxDetail;
}
/**
 * Returns value type that can be returned with currently applied settings.
 */


function getValueType(maxDetail) {
  return allValueTypes[allViews.indexOf(maxDetail)];
}

function getValue(value, index) {
  if (!value) {
    return null;
  }

  var rawValue = Array.isArray(value) && value.length === 2 ? value[index] : value;

  if (!rawValue) {
    return null;
  }

  var valueDate = toDate(rawValue);

  if (isNaN(valueDate.getTime())) {
    throw new Error("Invalid date: ".concat(value));
  }

  return valueDate;
}

function getDetailValue(_ref, index) {
  var value = _ref.value,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      maxDetail = _ref.maxDetail;
  var valuePiece = getValue(value, index);

  if (!valuePiece) {
    return null;
  }

  var valueType = getValueType(maxDetail);
  var detailValueFrom = [_shared_dates__WEBPACK_IMPORTED_MODULE_2__.getBegin, _shared_dates__WEBPACK_IMPORTED_MODULE_2__.getEnd][index](valueType, valuePiece);
  return (0,_shared_utils__WEBPACK_IMPORTED_MODULE_3__.between)(detailValueFrom, minDate, maxDate);
}

var getDetailValueFrom = function getDetailValueFrom(args) {
  return getDetailValue(args, 0);
};

var getDetailValueTo = function getDetailValueTo(args) {
  return getDetailValue(args, 1);
};

var getDetailValueArray = function getDetailValueArray(args) {
  var value = args.value;

  if (Array.isArray(value)) {
    return value;
  }

  return [getDetailValueFrom, getDetailValueTo].map(function (fn) {
    return fn(args);
  });
};

function getActiveStartDate(props) {
  var maxDate = props.maxDate,
      maxDetail = props.maxDetail,
      minDate = props.minDate,
      minDetail = props.minDetail,
      value = props.value,
      view = props.view;
  var rangeType = getView(view, minDetail, maxDetail);
  var valueFrom = getDetailValueFrom({
    value: value,
    minDate: minDate,
    maxDate: maxDate,
    maxDetail: maxDetail
  }) || new Date();
  return (0,_shared_dates__WEBPACK_IMPORTED_MODULE_2__.getBegin)(rangeType, valueFrom);
}

function getInitialActiveStartDate(props) {
  var activeStartDate = props.activeStartDate,
      defaultActiveStartDate = props.defaultActiveStartDate,
      defaultValue = props.defaultValue,
      defaultView = props.defaultView,
      maxDetail = props.maxDetail,
      minDetail = props.minDetail,
      value = props.value,
      view = props.view,
      otherProps = _objectWithoutProperties(props, ["activeStartDate", "defaultActiveStartDate", "defaultValue", "defaultView", "maxDetail", "minDetail", "value", "view"]);

  var rangeType = getView(view, minDetail, maxDetail);
  var valueFrom = activeStartDate || defaultActiveStartDate;

  if (valueFrom) {
    return (0,_shared_dates__WEBPACK_IMPORTED_MODULE_2__.getBegin)(rangeType, valueFrom);
  }

  return getActiveStartDate(_objectSpread({
    maxDetail: maxDetail,
    minDetail: minDetail,
    value: value || defaultValue,
    view: view || defaultView
  }, otherProps));
}

var getIsSingleValue = function getIsSingleValue(value) {
  return value && [].concat(value).length === 1;
};

var Calendar = /*#__PURE__*/function (_Component) {
  _inherits(Calendar, _Component);

  var _super = _createSuper(Calendar);

  function Calendar() {
    var _this;

    _classCallCheck(this, Calendar);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(_args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      /* eslint-disable react/destructuring-assignment */
      activeStartDate: _this.props.defaultActiveStartDate,
      value: _this.props.defaultValue,
      view: _this.props.defaultView
      /* eslint-enable react/destructuring-assignment */

    });

    _defineProperty(_assertThisInitialized(_this), "setStateAndCallCallbacks", function (nextState, event, callback) {
      var _assertThisInitialize = _assertThisInitialized(_this),
          previousActiveStartDate = _assertThisInitialize.activeStartDate,
          previousView = _assertThisInitialize.view;

      var _this$props = _this.props,
          allowPartialRange = _this$props.allowPartialRange,
          onActiveStartDateChange = _this$props.onActiveStartDateChange,
          onChange = _this$props.onChange,
          onViewChange = _this$props.onViewChange,
          selectRange = _this$props.selectRange;
      var prevArgs = {
        activeStartDate: previousActiveStartDate,
        view: previousView
      };

      _this.setState(nextState, function () {
        var args = {
          activeStartDate: nextState.activeStartDate || _this.activeStartDate,
          value: nextState.value || _this.value,
          view: nextState.view || _this.view
        };

        function shouldUpdate(key) {
          return (// Key must exist, and…
            key in nextState && ( // …key changed from undefined to defined or the other way around, or…
            _typeof(nextState[key]) !== _typeof(prevArgs[key]) // …value changed.
            || (nextState[key] instanceof Date ? nextState[key].getTime() !== prevArgs[key].getTime() : nextState[key] !== prevArgs[key]))
          );
        }

        if (shouldUpdate('activeStartDate')) {
          if (onActiveStartDateChange) onActiveStartDateChange(args);
        }

        if (shouldUpdate('view')) {
          if (onViewChange) onViewChange(args);
        }

        if (shouldUpdate('value')) {
          if (onChange) {
            if (selectRange) {
              var isSingleValue = getIsSingleValue(nextState.value);

              if (!isSingleValue) {
                onChange(nextState.value, event);
              } else if (allowPartialRange) {
                onChange([nextState.value], event);
              }
            } else {
              onChange(nextState.value, event);
            }
          }
        }

        if (callback) callback(args);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setActiveStartDate", function (activeStartDate) {
      _this.setStateAndCallCallbacks({
        activeStartDate: activeStartDate
      });
    });

    _defineProperty(_assertThisInitialized(_this), "drillDown", function (nextActiveStartDate, event) {
      if (!_this.drillDownAvailable) {
        return;
      }

      _this.onClickTile(nextActiveStartDate, event);

      var _assertThisInitialize2 = _assertThisInitialized(_this),
          view = _assertThisInitialize2.view,
          views = _assertThisInitialize2.views;

      var onDrillDown = _this.props.onDrillDown;
      var nextView = views[views.indexOf(view) + 1];

      _this.setStateAndCallCallbacks({
        activeStartDate: nextActiveStartDate,
        view: nextView
      }, undefined, onDrillDown);
    });

    _defineProperty(_assertThisInitialized(_this), "drillUp", function () {
      if (!_this.drillUpAvailable) {
        return;
      }

      var _assertThisInitialize3 = _assertThisInitialized(_this),
          activeStartDate = _assertThisInitialize3.activeStartDate,
          view = _assertThisInitialize3.view,
          views = _assertThisInitialize3.views;

      var onDrillUp = _this.props.onDrillUp;
      var nextView = views[views.indexOf(view) - 1];
      var nextActiveStartDate = (0,_shared_dates__WEBPACK_IMPORTED_MODULE_2__.getBegin)(nextView, activeStartDate);

      _this.setStateAndCallCallbacks({
        activeStartDate: nextActiveStartDate,
        view: nextView
      }, undefined, onDrillUp);
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (value, event) {
      var selectRange = _this.props.selectRange;

      _this.onClickTile(value, event);

      var nextValue;

      if (selectRange) {
        // Range selection turned on
        var _assertThisInitialize4 = _assertThisInitialized(_this),
            previousValue = _assertThisInitialize4.value,
            valueType = _assertThisInitialize4.valueType;

        if (!getIsSingleValue(previousValue)) {
          // Value has 0 or 2 elements - either way we're starting a new array
          // First value
          nextValue = (0,_shared_dates__WEBPACK_IMPORTED_MODULE_2__.getBegin)(valueType, value);
        } else {
          // Second value
          nextValue = (0,_shared_dates__WEBPACK_IMPORTED_MODULE_2__.getValueRange)(valueType, previousValue, value);
        }
      } else {
        // Range selection turned off
        nextValue = _this.getProcessedValue(value);
      }

      var nextActiveStartDate = getActiveStartDate(_objectSpread(_objectSpread({}, _this.props), {}, {
        value: nextValue
      }));
      event.persist();

      _this.setStateAndCallCallbacks({
        activeStartDate: nextActiveStartDate,
        value: nextValue
      }, event);
    });

    _defineProperty(_assertThisInitialized(_this), "onClickTile", function (value, event) {
      var _assertThisInitialize5 = _assertThisInitialized(_this),
          view = _assertThisInitialize5.view;

      var _this$props2 = _this.props,
          onClickDay = _this$props2.onClickDay,
          onClickDecade = _this$props2.onClickDecade,
          onClickMonth = _this$props2.onClickMonth,
          onClickYear = _this$props2.onClickYear;

      var callback = function () {
        switch (view) {
          case 'century':
            return onClickDecade;

          case 'decade':
            return onClickYear;

          case 'year':
            return onClickMonth;

          case 'month':
            return onClickDay;

          default:
            throw new Error("Invalid view: ".concat(view, "."));
        }
      }();

      if (callback) callback(value, event);
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseOver", function (value) {
      _this.setState(function (prevState) {
        if (prevState.hover && prevState.hover.getTime() === value.getTime()) {
          return null;
        }

        return {
          hover: value
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseLeave", function () {
      _this.setState({
        hover: null
      });
    });

    return _this;
  }

  _createClass(Calendar, [{
    key: "getProcessedValue",

    /**
     * Gets current value in a desired format.
     */
    value: function getProcessedValue(value) {
      var _this$props3 = this.props,
          minDate = _this$props3.minDate,
          maxDate = _this$props3.maxDate,
          maxDetail = _this$props3.maxDetail,
          returnValue = _this$props3.returnValue;

      var processFunction = function () {
        switch (returnValue) {
          case 'start':
            return getDetailValueFrom;

          case 'end':
            return getDetailValueTo;

          case 'range':
            return getDetailValueArray;

          default:
            throw new Error('Invalid returnValue.');
        }
      }();

      return processFunction({
        value: value,
        minDate: minDate,
        maxDate: maxDate,
        maxDetail: maxDetail
      });
    }
  }, {
    key: "renderContent",
    value: function renderContent(next) {
      var currentActiveStartDate = this.activeStartDate,
          onMouseOver = this.onMouseOver,
          valueType = this.valueType,
          value = this.value,
          view = this.view;
      var _this$props4 = this.props,
          calendarType = _this$props4.calendarType,
          locale = _this$props4.locale,
          maxDate = _this$props4.maxDate,
          minDate = _this$props4.minDate,
          selectRange = _this$props4.selectRange,
          tileClassName = _this$props4.tileClassName,
          tileContent = _this$props4.tileContent,
          tileDisabled = _this$props4.tileDisabled;
      var hover = this.hover;
      var activeStartDate = next ? (0,_shared_dates__WEBPACK_IMPORTED_MODULE_2__.getBeginNext)(view, currentActiveStartDate) : (0,_shared_dates__WEBPACK_IMPORTED_MODULE_2__.getBegin)(view, currentActiveStartDate);
      var onClick = this.drillDownAvailable ? this.drillDown : this.onChange;
      var commonProps = {
        activeStartDate: activeStartDate,
        hover: hover,
        locale: locale,
        maxDate: maxDate,
        minDate: minDate,
        onClick: onClick,
        onMouseOver: selectRange ? onMouseOver : null,
        tileClassName: tileClassName,
        tileContent: tileContent,
        tileDisabled: tileDisabled,
        value: value,
        valueType: valueType
      };

      switch (view) {
        case 'century':
          {
            var formatYear = this.props.formatYear;
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CenturyView__WEBPACK_IMPORTED_MODULE_4__.default, _extends({
              formatYear: formatYear
            }, commonProps));
          }

        case 'decade':
          {
            var _formatYear = this.props.formatYear;
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DecadeView__WEBPACK_IMPORTED_MODULE_5__.default, _extends({
              formatYear: _formatYear
            }, commonProps));
          }

        case 'year':
          {
            var _this$props5 = this.props,
                formatMonth = _this$props5.formatMonth,
                formatMonthYear = _this$props5.formatMonthYear;
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_YearView__WEBPACK_IMPORTED_MODULE_6__.default, _extends({
              formatMonth: formatMonth,
              formatMonthYear: formatMonthYear
            }, commonProps));
          }

        case 'month':
          {
            var _this$props6 = this.props,
                formatDay = _this$props6.formatDay,
                formatLongDate = _this$props6.formatLongDate,
                formatShortWeekday = _this$props6.formatShortWeekday,
                onClickWeekNumber = _this$props6.onClickWeekNumber,
                showDoubleView = _this$props6.showDoubleView,
                showFixedNumberOfWeeks = _this$props6.showFixedNumberOfWeeks,
                showNeighboringMonth = _this$props6.showNeighboringMonth,
                showWeekNumbers = _this$props6.showWeekNumbers;
            var onMouseLeave = this.onMouseLeave;
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MonthView__WEBPACK_IMPORTED_MODULE_7__.default, _extends({
              calendarType: calendarType,
              formatDay: formatDay,
              formatLongDate: formatLongDate,
              formatShortWeekday: formatShortWeekday,
              onClickWeekNumber: onClickWeekNumber,
              onMouseLeave: selectRange ? onMouseLeave : null,
              showFixedNumberOfWeeks: showFixedNumberOfWeeks || showDoubleView,
              showNeighboringMonth: showNeighboringMonth,
              showWeekNumbers: showWeekNumbers
            }, commonProps));
          }

        default:
          throw new Error("Invalid view: ".concat(view, "."));
      }
    }
  }, {
    key: "renderNavigation",
    value: function renderNavigation() {
      var showNavigation = this.props.showNavigation;

      if (!showNavigation) {
        return null;
      }

      var activeStartDate = this.activeStartDate,
          view = this.view,
          views = this.views;
      var _this$props7 = this.props,
          formatMonthYear = _this$props7.formatMonthYear,
          formatYear = _this$props7.formatYear,
          locale = _this$props7.locale,
          maxDate = _this$props7.maxDate,
          minDate = _this$props7.minDate,
          navigationAriaLabel = _this$props7.navigationAriaLabel,
          navigationLabel = _this$props7.navigationLabel,
          next2AriaLabel = _this$props7.next2AriaLabel,
          next2Label = _this$props7.next2Label,
          nextAriaLabel = _this$props7.nextAriaLabel,
          nextLabel = _this$props7.nextLabel,
          prev2AriaLabel = _this$props7.prev2AriaLabel,
          prev2Label = _this$props7.prev2Label,
          prevAriaLabel = _this$props7.prevAriaLabel,
          prevLabel = _this$props7.prevLabel,
          showDoubleView = _this$props7.showDoubleView;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Calendar_Navigation__WEBPACK_IMPORTED_MODULE_8__.default, {
        activeStartDate: activeStartDate,
        drillUp: this.drillUp,
        formatMonthYear: formatMonthYear,
        formatYear: formatYear,
        locale: locale,
        maxDate: maxDate,
        minDate: minDate,
        navigationAriaLabel: navigationAriaLabel,
        navigationLabel: navigationLabel,
        next2AriaLabel: next2AriaLabel,
        next2Label: next2Label,
        nextAriaLabel: nextAriaLabel,
        nextLabel: nextLabel,
        prev2AriaLabel: prev2AriaLabel,
        prev2Label: prev2Label,
        prevAriaLabel: prevAriaLabel,
        prevLabel: prevLabel,
        setActiveStartDate: this.setActiveStartDate,
        showDoubleView: showDoubleView,
        view: view,
        views: views
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props8 = this.props,
          className = _this$props8.className,
          inputRef = _this$props8.inputRef,
          selectRange = _this$props8.selectRange,
          showDoubleView = _this$props8.showDoubleView;
      var onMouseLeave = this.onMouseLeave,
          value = this.value;
      var valueArray = [].concat(value);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: (0,merge_class_names__WEBPACK_IMPORTED_MODULE_9__.default)(baseClassName, selectRange && valueArray.length === 1 && "".concat(baseClassName, "--selectRange"), showDoubleView && "".concat(baseClassName, "--doubleView"), className),
        ref: inputRef
      }, this.renderNavigation(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "".concat(baseClassName, "__viewContainer"),
        onBlur: selectRange ? onMouseLeave : null,
        onMouseLeave: selectRange ? onMouseLeave : null
      }, this.renderContent(), showDoubleView && this.renderContent(true)));
    }
  }, {
    key: "activeStartDate",
    get: function get() {
      var activeStartDateProps = this.props.activeStartDate;
      var activeStartDateState = this.state.activeStartDate;
      return activeStartDateProps || activeStartDateState || getInitialActiveStartDate(this.props);
    }
  }, {
    key: "value",
    get: function get() {
      var _this$props9 = this.props,
          selectRange = _this$props9.selectRange,
          valueProps = _this$props9.value;
      var valueState = this.state.value; // In the middle of range selection, use value from state

      if (selectRange && getIsSingleValue(valueState)) {
        return valueState;
      }

      return valueProps !== undefined ? valueProps : valueState;
    }
  }, {
    key: "valueType",
    get: function get() {
      var maxDetail = this.props.maxDetail;
      return getValueType(maxDetail);
    }
  }, {
    key: "view",
    get: function get() {
      var _this$props10 = this.props,
          minDetail = _this$props10.minDetail,
          maxDetail = _this$props10.maxDetail,
          viewProps = _this$props10.view;
      var viewState = this.state.view;
      return getView(viewProps || viewState, minDetail, maxDetail);
    }
  }, {
    key: "views",
    get: function get() {
      var _this$props11 = this.props,
          minDetail = _this$props11.minDetail,
          maxDetail = _this$props11.maxDetail;
      return getLimitedViews(minDetail, maxDetail);
    }
  }, {
    key: "hover",
    get: function get() {
      var selectRange = this.props.selectRange;
      var hover = this.state.hover;
      return selectRange ? hover : null;
    }
  }, {
    key: "drillDownAvailable",
    get: function get() {
      var view = this.view,
          views = this.views;
      return views.indexOf(view) < views.length - 1;
    }
  }, {
    key: "drillUpAvailable",
    get: function get() {
      var view = this.view,
          views = this.views;
      return views.indexOf(view) > 0;
    }
  }]);

  return Calendar;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


Calendar.defaultProps = {
  maxDate: defaultMaxDate,
  maxDetail: 'month',
  minDate: defaultMinDate,
  minDetail: 'century',
  returnValue: 'start',
  showNavigation: true,
  showNeighboringMonth: true
};
var isActiveStartDate = prop_types__WEBPACK_IMPORTED_MODULE_1___default().instanceOf(Date);
var isLooseValue = prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), _shared_propTypes__WEBPACK_IMPORTED_MODULE_10__.isValue]);
Calendar.propTypes = {
  activeStartDate: isActiveStartDate,
  allowPartialRange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  calendarType: _shared_propTypes__WEBPACK_IMPORTED_MODULE_10__.isCalendarType,
  className: _shared_propTypes__WEBPACK_IMPORTED_MODULE_10__.isClassName,
  defaultActiveStartDate: isActiveStartDate,
  defaultValue: isLooseValue,
  defaultView: _shared_propTypes__WEBPACK_IMPORTED_MODULE_10__.isView,
  formatDay: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  formatLongDate: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  formatMonth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  formatMonthYear: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  formatShortWeekday: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  formatYear: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  inputRef: _shared_propTypes__WEBPACK_IMPORTED_MODULE_10__.isRef,
  locale: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  maxDate: _shared_propTypes__WEBPACK_IMPORTED_MODULE_10__.isMaxDate,
  maxDetail: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(allViews),
  minDate: _shared_propTypes__WEBPACK_IMPORTED_MODULE_10__.isMinDate,
  minDetail: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(allViews),
  navigationAriaLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  navigationLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  next2AriaLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  next2Label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  nextAriaLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  nextLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  onActiveStartDateChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onClickDay: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onClickDecade: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onClickMonth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onClickWeekNumber: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onClickYear: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onDrillDown: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onDrillUp: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onViewChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  prev2AriaLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  prev2Label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  prevAriaLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  prevLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  returnValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['start', 'end', 'range']),
  selectRange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  showDoubleView: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  showFixedNumberOfWeeks: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  showNavigation: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  showNeighboringMonth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  showWeekNumbers: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  tileClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().func), _shared_propTypes__WEBPACK_IMPORTED_MODULE_10__.isClassName]),
  tileContent: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)]),
  tileDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  value: isLooseValue,
  view: _shared_propTypes__WEBPACK_IMPORTED_MODULE_10__.isView
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/Calendar/Navigation.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/Calendar/Navigation.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var get_user_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! get-user-locale */ "./node_modules/get-user-locale/dist/esm/index.js");
/* harmony import */ var _shared_dates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/esm/shared/dates.js");
/* harmony import */ var _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dateFormatter */ "./node_modules/react-calendar/dist/esm/shared/dateFormatter.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");






var className = 'react-calendar__navigation';
function Navigation(_ref) {
  var activeStartDate = _ref.activeStartDate,
      drillUp = _ref.drillUp,
      _ref$formatMonthYear = _ref.formatMonthYear,
      formatMonthYear = _ref$formatMonthYear === void 0 ? _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_2__.formatMonthYear : _ref$formatMonthYear,
      _ref$formatYear = _ref.formatYear,
      formatYear = _ref$formatYear === void 0 ? _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_2__.formatYear : _ref$formatYear,
      locale = _ref.locale,
      maxDate = _ref.maxDate,
      minDate = _ref.minDate,
      _ref$navigationAriaLa = _ref.navigationAriaLabel,
      navigationAriaLabel = _ref$navigationAriaLa === void 0 ? '' : _ref$navigationAriaLa,
      navigationLabel = _ref.navigationLabel,
      _ref$next2AriaLabel = _ref.next2AriaLabel,
      next2AriaLabel = _ref$next2AriaLabel === void 0 ? '' : _ref$next2AriaLabel,
      _ref$next2Label = _ref.next2Label,
      next2Label = _ref$next2Label === void 0 ? '»' : _ref$next2Label,
      _ref$nextAriaLabel = _ref.nextAriaLabel,
      nextAriaLabel = _ref$nextAriaLabel === void 0 ? '' : _ref$nextAriaLabel,
      _ref$nextLabel = _ref.nextLabel,
      nextLabel = _ref$nextLabel === void 0 ? '›' : _ref$nextLabel,
      _ref$prev2AriaLabel = _ref.prev2AriaLabel,
      prev2AriaLabel = _ref$prev2AriaLabel === void 0 ? '' : _ref$prev2AriaLabel,
      _ref$prev2Label = _ref.prev2Label,
      prev2Label = _ref$prev2Label === void 0 ? '«' : _ref$prev2Label,
      _ref$prevAriaLabel = _ref.prevAriaLabel,
      prevAriaLabel = _ref$prevAriaLabel === void 0 ? '' : _ref$prevAriaLabel,
      _ref$prevLabel = _ref.prevLabel,
      prevLabel = _ref$prevLabel === void 0 ? '‹' : _ref$prevLabel,
      setActiveStartDate = _ref.setActiveStartDate,
      showDoubleView = _ref.showDoubleView,
      view = _ref.view,
      views = _ref.views;
  var drillUpAvailable = views.indexOf(view) > 0;
  var shouldShowPrevNext2Buttons = view !== 'century';
  var previousActiveStartDate = (0,_shared_dates__WEBPACK_IMPORTED_MODULE_3__.getBeginPrevious)(view, activeStartDate);
  var previousActiveStartDate2 = shouldShowPrevNext2Buttons && (0,_shared_dates__WEBPACK_IMPORTED_MODULE_3__.getBeginPrevious2)(view, activeStartDate);
  var nextActiveStartDate = (0,_shared_dates__WEBPACK_IMPORTED_MODULE_3__.getBeginNext)(view, activeStartDate);
  var nextActiveStartDate2 = shouldShowPrevNext2Buttons && (0,_shared_dates__WEBPACK_IMPORTED_MODULE_3__.getBeginNext2)(view, activeStartDate);

  var prevButtonDisabled = function () {
    if (previousActiveStartDate.getFullYear() < 0) {
      return true;
    }

    var previousActiveEndDate = (0,_shared_dates__WEBPACK_IMPORTED_MODULE_3__.getEndPrevious)(view, activeStartDate);
    return minDate && minDate >= previousActiveEndDate;
  }();

  var prev2ButtonDisabled = shouldShowPrevNext2Buttons && function () {
    if (previousActiveStartDate2.getFullYear() < 0) {
      return true;
    }

    var previousActiveEndDate = (0,_shared_dates__WEBPACK_IMPORTED_MODULE_3__.getEndPrevious2)(view, activeStartDate);
    return minDate && minDate >= previousActiveEndDate;
  }();

  var nextButtonDisabled = maxDate && maxDate <= nextActiveStartDate;
  var next2ButtonDisabled = shouldShowPrevNext2Buttons && maxDate && maxDate <= nextActiveStartDate2;

  function onClickPrevious() {
    setActiveStartDate(previousActiveStartDate);
  }

  function onClickPrevious2() {
    setActiveStartDate(previousActiveStartDate2);
  }

  function onClickNext() {
    setActiveStartDate(nextActiveStartDate);
  }

  function onClickNext2() {
    setActiveStartDate(nextActiveStartDate2);
  }

  function renderLabel(date) {
    var label = function () {
      switch (view) {
        case 'century':
          return (0,_shared_dates__WEBPACK_IMPORTED_MODULE_3__.getCenturyLabel)(locale, formatYear, date);

        case 'decade':
          return (0,_shared_dates__WEBPACK_IMPORTED_MODULE_3__.getDecadeLabel)(locale, formatYear, date);

        case 'year':
          return formatYear(locale, date);

        case 'month':
          return formatMonthYear(locale, date);

        default:
          throw new Error("Invalid view: ".concat(view, "."));
      }
    }();

    return navigationLabel ? navigationLabel({
      date: date,
      label: label,
      locale: locale || (0,get_user_locale__WEBPACK_IMPORTED_MODULE_4__.getUserLocale)(),
      view: view
    }) : label;
  }

  function renderButton() {
    var labelClassName = "".concat(className, "__label");
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      "aria-label": navigationAriaLabel,
      className: labelClassName,
      disabled: !drillUpAvailable,
      onClick: drillUp,
      style: {
        flexGrow: 1
      },
      type: "button"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "".concat(labelClassName, "__labelText ").concat(labelClassName, "__labelText--from")
    }, renderLabel(activeStartDate)), showDoubleView && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "".concat(labelClassName, "__divider")
    }, ' ', "\u2013", ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "".concat(labelClassName, "__labelText ").concat(labelClassName, "__labelText--to")
    }, renderLabel(nextActiveStartDate))));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className,
    style: {
      display: 'flex'
    }
  }, prev2Label !== null && shouldShowPrevNext2Buttons && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    "aria-label": prev2AriaLabel,
    className: "".concat(className, "__arrow ").concat(className, "__prev2-button"),
    disabled: prev2ButtonDisabled,
    onClick: onClickPrevious2,
    type: "button"
  }, prev2Label), prevLabel !== null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    "aria-label": prevAriaLabel,
    className: "".concat(className, "__arrow ").concat(className, "__prev-button"),
    disabled: prevButtonDisabled,
    onClick: onClickPrevious,
    type: "button"
  }, prevLabel), renderButton(), nextLabel !== null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    "aria-label": nextAriaLabel,
    className: "".concat(className, "__arrow ").concat(className, "__next-button"),
    disabled: nextButtonDisabled,
    onClick: onClickNext,
    type: "button"
  }, nextLabel), next2Label !== null && shouldShowPrevNext2Buttons && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    "aria-label": next2AriaLabel,
    className: "".concat(className, "__arrow ").concat(className, "__next2-button"),
    disabled: next2ButtonDisabled,
    onClick: onClickNext2,
    type: "button"
  }, next2Label));
}
Navigation.propTypes = {
  activeStartDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default().instanceOf(Date).isRequired,
  drillUp: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  formatMonthYear: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  formatYear: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  locale: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  maxDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default().instanceOf(Date),
  minDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default().instanceOf(Date),
  navigationAriaLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  navigationLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  next2AriaLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  next2Label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  nextAriaLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  nextLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  prev2AriaLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  prev2Label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  prevAriaLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  prevLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  setActiveStartDate: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  showDoubleView: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  view: _shared_propTypes__WEBPACK_IMPORTED_MODULE_5__.isView.isRequired,
  views: _shared_propTypes__WEBPACK_IMPORTED_MODULE_5__.isViews.isRequired
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/CenturyView.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/CenturyView.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CenturyView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CenturyView_Decades__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CenturyView/Decades */ "./node_modules/react-calendar/dist/esm/CenturyView/Decades.js");


function CenturyView(props) {
  function renderDecades() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CenturyView_Decades__WEBPACK_IMPORTED_MODULE_1__.default, props);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "react-calendar__century-view"
  }, renderDecades());
}

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/CenturyView/Decade.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/CenturyView/Decade.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Decade)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Tile */ "./node_modules/react-calendar/dist/esm/Tile.js");
/* harmony import */ var _shared_dates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/esm/shared/dates.js");
/* harmony import */ var _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dateFormatter */ "./node_modules/react-calendar/dist/esm/shared/dateFormatter.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var className = 'react-calendar__century-view__decades__decade';
function Decade(_ref) {
  var classes = _ref.classes,
      _ref$formatYear = _ref.formatYear,
      formatYear = _ref$formatYear === void 0 ? _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_2__.formatYear : _ref$formatYear,
      otherProps = _objectWithoutProperties(_ref, ["classes", "formatYear"]);

  var date = otherProps.date,
      locale = otherProps.locale;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Tile__WEBPACK_IMPORTED_MODULE_3__.default, _extends({}, otherProps, {
    classes: [].concat(classes, className),
    maxDateTransform: _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_4__.getDecadeEnd,
    minDateTransform: _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_4__.getDecadeStart,
    view: "century"
  }), (0,_shared_dates__WEBPACK_IMPORTED_MODULE_5__.getDecadeLabel)(locale, formatYear, date));
}
Decade.propTypes = _objectSpread(_objectSpread({}, _shared_propTypes__WEBPACK_IMPORTED_MODULE_6__.tileProps), {}, {
  formatYear: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
});

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/CenturyView/Decades.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/CenturyView/Decades.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Decades)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _TileGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TileGroup */ "./node_modules/react-calendar/dist/esm/TileGroup.js");
/* harmony import */ var _Decade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Decade */ "./node_modules/react-calendar/dist/esm/CenturyView/Decade.js");
/* harmony import */ var _shared_dates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/esm/shared/dates.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







function Decades(props) {
  var activeStartDate = props.activeStartDate;
  var start = (0,_shared_dates__WEBPACK_IMPORTED_MODULE_1__.getBeginOfCenturyYear)(activeStartDate);
  var end = start + 99;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TileGroup__WEBPACK_IMPORTED_MODULE_2__.default, _extends({}, props, {
    className: "react-calendar__century-view__decades",
    dateTransform: _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_3__.getDecadeStart,
    dateType: "decade",
    end: end,
    start: start,
    step: 10,
    tile: _Decade__WEBPACK_IMPORTED_MODULE_4__.default
  }));
}
Decades.propTypes = _objectSpread({}, _shared_propTypes__WEBPACK_IMPORTED_MODULE_5__.tileGroupProps);

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/DecadeView.js":
/*!************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/DecadeView.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DecadeView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DecadeView_Years__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DecadeView/Years */ "./node_modules/react-calendar/dist/esm/DecadeView/Years.js");


function DecadeView(props) {
  function renderYears() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DecadeView_Years__WEBPACK_IMPORTED_MODULE_1__.default, props);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "react-calendar__decade-view"
  }, renderYears());
}

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/DecadeView/Year.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/DecadeView/Year.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Year)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Tile */ "./node_modules/react-calendar/dist/esm/Tile.js");
/* harmony import */ var _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dateFormatter */ "./node_modules/react-calendar/dist/esm/shared/dateFormatter.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var className = 'react-calendar__decade-view__years__year';
function Year(_ref) {
  var classes = _ref.classes,
      _ref$formatYear = _ref.formatYear,
      formatYear = _ref$formatYear === void 0 ? _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_2__.formatYear : _ref$formatYear,
      otherProps = _objectWithoutProperties(_ref, ["classes", "formatYear"]);

  var date = otherProps.date,
      locale = otherProps.locale;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Tile__WEBPACK_IMPORTED_MODULE_3__.default, _extends({}, otherProps, {
    classes: [].concat(classes, className),
    maxDateTransform: _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_4__.getYearEnd,
    minDateTransform: _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_4__.getYearStart,
    view: "decade"
  }), formatYear(locale, date));
}
Year.propTypes = _objectSpread(_objectSpread({}, _shared_propTypes__WEBPACK_IMPORTED_MODULE_5__.tileProps), {}, {
  formatYear: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
});

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/DecadeView/Years.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/DecadeView/Years.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Years)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TileGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TileGroup */ "./node_modules/react-calendar/dist/esm/TileGroup.js");
/* harmony import */ var _Year__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Year */ "./node_modules/react-calendar/dist/esm/DecadeView/Year.js");
/* harmony import */ var _shared_dates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/esm/shared/dates.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






function Years(props) {
  var activeStartDate = props.activeStartDate;
  var start = (0,_shared_dates__WEBPACK_IMPORTED_MODULE_1__.getBeginOfDecadeYear)(activeStartDate);
  var end = start + 9;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TileGroup__WEBPACK_IMPORTED_MODULE_2__.default, _extends({}, props, {
    className: "react-calendar__decade-view__years",
    dateTransform: function dateTransform(year) {
      var date = new Date();
      date.setFullYear(year, 0, 1);
      date.setHours(0, 0, 0, 0);
      return date;
    },
    dateType: "year",
    end: end,
    start: start,
    tile: _Year__WEBPACK_IMPORTED_MODULE_3__.default
  }));
}
Years.propTypes = _objectSpread({}, _shared_propTypes__WEBPACK_IMPORTED_MODULE_4__.tileGroupProps);

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/Flex.js":
/*!******************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/Flex.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Flex)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function toPercent(num) {
  return "".concat(num, "%");
}

function Flex(_ref) {
  var children = _ref.children,
      className = _ref.className,
      direction = _ref.direction,
      count = _ref.count,
      offset = _ref.offset,
      style = _ref.style,
      wrap = _ref.wrap,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "direction", "count", "offset", "style", "wrap"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({
    className: className,
    style: _objectSpread({
      display: 'flex',
      flexDirection: direction,
      flexWrap: wrap ? 'wrap' : 'no-wrap'
    }, style)
  }, otherProps), react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(children, function (child, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(child, _objectSpread(_objectSpread({}, child.props), {}, {
      style: {
        flexBasis: toPercent(100 / count),
        maxWidth: toPercent(100 / count),
        overflow: 'hidden',
        marginLeft: offset && index === 0 ? toPercent(100 * offset / count) : null
      }
    }));
  }));
}
Flex.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  count: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  direction: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  offset: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default().objectOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)])),
  wrap: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/MonthView.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/MonthView.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MonthView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var merge_class_names__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! merge-class-names */ "./node_modules/merge-class-names/dist/esm/index.js");
/* harmony import */ var _MonthView_Days__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MonthView/Days */ "./node_modules/react-calendar/dist/esm/MonthView/Days.js");
/* harmony import */ var _MonthView_Weekdays__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MonthView/Weekdays */ "./node_modules/react-calendar/dist/esm/MonthView/Weekdays.js");
/* harmony import */ var _MonthView_WeekNumbers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MonthView/WeekNumbers */ "./node_modules/react-calendar/dist/esm/MonthView/WeekNumbers.js");
/* harmony import */ var _shared_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/const */ "./node_modules/react-calendar/dist/esm/shared/const.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










function getCalendarTypeFromLocale(locale) {
  return Object.keys(_shared_const__WEBPACK_IMPORTED_MODULE_2__.CALENDAR_TYPE_LOCALES).find(function (calendarType) {
    return _shared_const__WEBPACK_IMPORTED_MODULE_2__.CALENDAR_TYPE_LOCALES[calendarType].includes(locale);
  }) || _shared_const__WEBPACK_IMPORTED_MODULE_2__.CALENDAR_TYPES.ISO_8601;
}

function MonthView(props) {
  var activeStartDate = props.activeStartDate,
      locale = props.locale,
      onMouseLeave = props.onMouseLeave,
      showFixedNumberOfWeeks = props.showFixedNumberOfWeeks;

  var _props$calendarType = props.calendarType,
      calendarType = _props$calendarType === void 0 ? getCalendarTypeFromLocale(locale) : _props$calendarType,
      formatShortWeekday = props.formatShortWeekday,
      onClickWeekNumber = props.onClickWeekNumber,
      showWeekNumbers = props.showWeekNumbers,
      childProps = _objectWithoutProperties(props, ["calendarType", "formatShortWeekday", "onClickWeekNumber", "showWeekNumbers"]);

  function renderWeekdays() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MonthView_Weekdays__WEBPACK_IMPORTED_MODULE_3__.default, {
      calendarType: calendarType,
      formatShortWeekday: formatShortWeekday,
      locale: locale,
      onMouseLeave: onMouseLeave
    });
  }

  function renderWeekNumbers() {
    if (!showWeekNumbers) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MonthView_WeekNumbers__WEBPACK_IMPORTED_MODULE_4__.default, {
      activeStartDate: activeStartDate,
      calendarType: calendarType,
      onClickWeekNumber: onClickWeekNumber,
      onMouseLeave: onMouseLeave,
      showFixedNumberOfWeeks: showFixedNumberOfWeeks
    });
  }

  function renderDays() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MonthView_Days__WEBPACK_IMPORTED_MODULE_5__.default, _extends({
      calendarType: calendarType
    }, childProps));
  }

  var className = 'react-calendar__month-view';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,merge_class_names__WEBPACK_IMPORTED_MODULE_6__.default)(className, showWeekNumbers ? "".concat(className, "--weekNumbers") : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, renderWeekNumbers(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      flexGrow: 1,
      width: '100%'
    }
  }, renderWeekdays(), renderDays())));
}
MonthView.propTypes = {
  activeStartDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default().instanceOf(Date).isRequired,
  calendarType: _shared_propTypes__WEBPACK_IMPORTED_MODULE_7__.isCalendarType,
  formatShortWeekday: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  locale: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  onClickWeekNumber: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onMouseLeave: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  showFixedNumberOfWeeks: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  showWeekNumbers: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/MonthView/Day.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/MonthView/Day.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Day)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Tile */ "./node_modules/react-calendar/dist/esm/Tile.js");
/* harmony import */ var _shared_dates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/esm/shared/dates.js");
/* harmony import */ var _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dateFormatter */ "./node_modules/react-calendar/dist/esm/shared/dateFormatter.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var className = 'react-calendar__month-view__days__day';
function Day(_ref) {
  var _ref$formatDay = _ref.formatDay,
      formatDay = _ref$formatDay === void 0 ? _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_2__.formatDay : _ref$formatDay,
      _ref$formatLongDate = _ref.formatLongDate,
      formatLongDate = _ref$formatLongDate === void 0 ? _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_2__.formatLongDate : _ref$formatLongDate,
      calendarType = _ref.calendarType,
      classes = _ref.classes,
      currentMonthIndex = _ref.currentMonthIndex,
      otherProps = _objectWithoutProperties(_ref, ["formatDay", "formatLongDate", "calendarType", "classes", "currentMonthIndex"]);

  var date = otherProps.date,
      locale = otherProps.locale;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Tile__WEBPACK_IMPORTED_MODULE_3__.default, _extends({}, otherProps, {
    classes: [].concat(classes, className, (0,_shared_dates__WEBPACK_IMPORTED_MODULE_4__.isWeekend)(date, calendarType) ? "".concat(className, "--weekend") : null, date.getMonth() !== currentMonthIndex ? "".concat(className, "--neighboringMonth") : null),
    formatAbbr: formatLongDate,
    maxDateTransform: _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_5__.getDayEnd,
    minDateTransform: _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_5__.getDayStart,
    view: "month"
  }), formatDay(locale, date));
}
Day.propTypes = _objectSpread(_objectSpread({}, _shared_propTypes__WEBPACK_IMPORTED_MODULE_6__.tileProps), {}, {
  currentMonthIndex: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  formatDay: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  formatLongDate: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
});

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/MonthView/Days.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/MonthView/Days.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Days)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _TileGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TileGroup */ "./node_modules/react-calendar/dist/esm/TileGroup.js");
/* harmony import */ var _Day__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Day */ "./node_modules/react-calendar/dist/esm/MonthView/Day.js");
/* harmony import */ var _shared_dates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/esm/shared/dates.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








function Days(props) {
  var activeStartDate = props.activeStartDate,
      calendarType = props.calendarType;

  var showFixedNumberOfWeeks = props.showFixedNumberOfWeeks,
      showNeighboringMonth = props.showNeighboringMonth,
      otherProps = _objectWithoutProperties(props, ["showFixedNumberOfWeeks", "showNeighboringMonth"]);

  var year = (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__.getYear)(activeStartDate);
  var monthIndex = (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__.getMonth)(activeStartDate);
  var hasFixedNumberOfWeeks = showFixedNumberOfWeeks || showNeighboringMonth;
  var dayOfWeek = (0,_shared_dates__WEBPACK_IMPORTED_MODULE_3__.getDayOfWeek)(activeStartDate, calendarType);
  var offset = hasFixedNumberOfWeeks ? 0 : dayOfWeek;
  /**
   * Defines on which day of the month the grid shall start. If we simply show current
   * month, we obviously start on day one, but if showNeighboringMonth is set to
   * true, we need to find the beginning of the week the first day of the month is in.
   */

  var start = (hasFixedNumberOfWeeks ? -dayOfWeek : 0) + 1;
  /**
   * Defines on which day of the month the grid shall end. If we simply show current
   * month, we need to stop on the last day of the month, but if showNeighboringMonth
   * is set to true, we need to find the end of the week the last day of the month is in.
   */

  var end = function () {
    if (showFixedNumberOfWeeks) {
      // Always show 6 weeks
      return start + 6 * 7 - 1;
    }

    var daysInMonth = (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__.getDaysInMonth)(activeStartDate);

    if (showNeighboringMonth) {
      var activeEndDate = new Date();
      activeEndDate.setFullYear(year, monthIndex, daysInMonth);
      activeEndDate.setHours(0, 0, 0, 0);
      var daysUntilEndOfTheWeek = 7 - (0,_shared_dates__WEBPACK_IMPORTED_MODULE_3__.getDayOfWeek)(activeEndDate, calendarType) - 1;
      return daysInMonth + daysUntilEndOfTheWeek;
    }

    return daysInMonth;
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TileGroup__WEBPACK_IMPORTED_MODULE_4__.default, _extends({}, otherProps, {
    className: "react-calendar__month-view__days",
    count: 7,
    currentMonthIndex: monthIndex,
    dateTransform: function dateTransform(day) {
      var date = new Date();
      date.setFullYear(year, monthIndex, day);
      date.setHours(0, 0, 0, 0);
      return date;
    },
    dateType: "day",
    end: end,
    offset: offset,
    start: start,
    tile: _Day__WEBPACK_IMPORTED_MODULE_5__.default
  }));
}
Days.propTypes = _objectSpread({
  calendarType: _shared_propTypes__WEBPACK_IMPORTED_MODULE_6__.isCalendarType.isRequired,
  showFixedNumberOfWeeks: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  showNeighboringMonth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
}, _shared_propTypes__WEBPACK_IMPORTED_MODULE_6__.tileGroupProps);

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/MonthView/WeekNumber.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/MonthView/WeekNumber.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WeekNumber)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function WeekNumber(_ref) {
  var date = _ref.date,
      onClickWeekNumber = _ref.onClickWeekNumber,
      weekNumber = _ref.weekNumber;
  var props = {
    className: 'react-calendar__tile',
    style: {
      flexGrow: 1
    }
  };
  var children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, weekNumber);
  return onClickWeekNumber ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", _extends({}, props, {
    onClick: function onClick(event) {
      return onClickWeekNumber(weekNumber, date, event);
    },
    type: "button"
  }), children) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", props, children);
}
WeekNumber.propTypes = {
  date: prop_types__WEBPACK_IMPORTED_MODULE_1___default().instanceOf(Date).isRequired,
  onClickWeekNumber: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  weekNumber: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired)
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/MonthView/WeekNumbers.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/MonthView/WeekNumbers.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WeekNumbers)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _WeekNumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WeekNumber */ "./node_modules/react-calendar/dist/esm/MonthView/WeekNumber.js");
/* harmony import */ var _Flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Flex */ "./node_modules/react-calendar/dist/esm/Flex.js");
/* harmony import */ var _shared_dates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/esm/shared/dates.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");







function WeekNumbers(props) {
  var activeStartDate = props.activeStartDate,
      calendarType = props.calendarType,
      onClickWeekNumber = props.onClickWeekNumber,
      onMouseLeave = props.onMouseLeave,
      showFixedNumberOfWeeks = props.showFixedNumberOfWeeks;

  var numberOfWeeks = function () {
    if (showFixedNumberOfWeeks) {
      return 6;
    }

    var numberOfDays = (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__.getDaysInMonth)(activeStartDate);
    var startWeekday = (0,_shared_dates__WEBPACK_IMPORTED_MODULE_3__.getDayOfWeek)(activeStartDate, calendarType);
    var days = numberOfDays - (7 - startWeekday);
    return 1 + Math.ceil(days / 7);
  }();

  var dates = function () {
    var year = (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__.getYear)(activeStartDate);
    var monthIndex = (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__.getMonth)(activeStartDate);
    var day = (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__.getDate)(activeStartDate);
    var result = [];

    for (var index = 0; index < numberOfWeeks; index += 1) {
      result.push((0,_shared_dates__WEBPACK_IMPORTED_MODULE_3__.getBeginOfWeek)(new Date(year, monthIndex, day + index * 7), calendarType));
    }

    return result;
  }();

  var weekNumbers = dates.map(function (date) {
    return (0,_shared_dates__WEBPACK_IMPORTED_MODULE_3__.getWeekNumber)(date, calendarType);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Flex__WEBPACK_IMPORTED_MODULE_4__.default, {
    className: "react-calendar__month-view__weekNumbers",
    count: numberOfWeeks,
    direction: "column",
    onFocus: onMouseLeave,
    onMouseOver: onMouseLeave,
    style: {
      flexBasis: 'calc(100% * (1 / 8)',
      flexShrink: 0
    }
  }, weekNumbers.map(function (weekNumber, weekIndex) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_WeekNumber__WEBPACK_IMPORTED_MODULE_5__.default, {
      key: weekNumber,
      date: dates[weekIndex],
      onClickWeekNumber: onClickWeekNumber,
      weekNumber: weekNumber
    });
  }));
}
WeekNumbers.propTypes = {
  activeStartDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default().instanceOf(Date).isRequired,
  calendarType: _shared_propTypes__WEBPACK_IMPORTED_MODULE_6__.isCalendarType.isRequired,
  onClickWeekNumber: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onMouseLeave: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  showFixedNumberOfWeeks: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/MonthView/Weekdays.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/MonthView/Weekdays.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Weekdays)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _Flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Flex */ "./node_modules/react-calendar/dist/esm/Flex.js");
/* harmony import */ var _shared_dates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/esm/shared/dates.js");
/* harmony import */ var _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dateFormatter */ "./node_modules/react-calendar/dist/esm/shared/dateFormatter.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");







var className = 'react-calendar__month-view__weekdays';
function Weekdays(props) {
  var calendarType = props.calendarType,
      _props$formatShortWee = props.formatShortWeekday,
      formatShortWeekday = _props$formatShortWee === void 0 ? _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_2__.formatShortWeekday : _props$formatShortWee,
      locale = props.locale,
      onMouseLeave = props.onMouseLeave;
  var anyDate = new Date();
  var beginOfMonth = (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_3__.getMonthStart)(anyDate);
  var year = (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_3__.getYear)(beginOfMonth);
  var monthIndex = (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_3__.getMonth)(beginOfMonth);
  var weekdays = [];

  for (var weekday = 1; weekday <= 7; weekday += 1) {
    var weekdayDate = new Date(year, monthIndex, weekday - (0,_shared_dates__WEBPACK_IMPORTED_MODULE_4__.getDayOfWeek)(beginOfMonth, calendarType));
    var abbr = (0,_shared_dateFormatter__WEBPACK_IMPORTED_MODULE_2__.formatWeekday)(locale, weekdayDate);
    weekdays.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: weekday,
      className: "".concat(className, "__weekday")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("abbr", {
      "aria-label": abbr,
      title: abbr
    }, formatShortWeekday(locale, weekdayDate).replace('.', ''))));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Flex__WEBPACK_IMPORTED_MODULE_5__.default, {
    className: className,
    count: 7,
    onFocus: onMouseLeave,
    onMouseOver: onMouseLeave
  }, weekdays);
}
Weekdays.propTypes = {
  calendarType: _shared_propTypes__WEBPACK_IMPORTED_MODULE_6__.isCalendarType.isRequired,
  formatShortWeekday: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  locale: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  onMouseLeave: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/Tile.js":
/*!******************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/Tile.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tile)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var merge_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! merge-class-names */ "./node_modules/merge-class-names/dist/esm/index.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function getValue(nextProps, prop) {
  var activeStartDate = nextProps.activeStartDate,
      date = nextProps.date,
      view = nextProps.view;
  return typeof prop === 'function' ? prop({
    activeStartDate: activeStartDate,
    date: date,
    view: view
  }) : prop;
}

var Tile = /*#__PURE__*/function (_Component) {
  _inherits(Tile, _Component);

  var _super = _createSuper(Tile);

  function Tile() {
    var _this;

    _classCallCheck(this, Tile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    return _this;
  }

  _createClass(Tile, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          activeStartDate = _this$props.activeStartDate,
          children = _this$props.children,
          classes = _this$props.classes,
          date = _this$props.date,
          formatAbbr = _this$props.formatAbbr,
          locale = _this$props.locale,
          maxDate = _this$props.maxDate,
          maxDateTransform = _this$props.maxDateTransform,
          minDate = _this$props.minDate,
          minDateTransform = _this$props.minDateTransform,
          onClick = _this$props.onClick,
          onMouseOver = _this$props.onMouseOver,
          style = _this$props.style,
          tileDisabled = _this$props.tileDisabled,
          view = _this$props.view;
      var _this$state = this.state,
          tileClassName = _this$state.tileClassName,
          tileContent = _this$state.tileContent;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: (0,merge_class_names__WEBPACK_IMPORTED_MODULE_2__.default)(classes, tileClassName),
        disabled: minDate && minDateTransform(minDate) > date || maxDate && maxDateTransform(maxDate) < date || tileDisabled && tileDisabled({
          activeStartDate: activeStartDate,
          date: date,
          view: view
        }),
        onClick: onClick && function (event) {
          return onClick(date, event);
        },
        onFocus: onMouseOver && function () {
          return onMouseOver(date);
        },
        onMouseOver: onMouseOver && function () {
          return onMouseOver(date);
        },
        style: style,
        type: "button"
      }, formatAbbr ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("abbr", {
        "aria-label": formatAbbr(locale, date)
      }, children) : children, tileContent);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var tileClassName = nextProps.tileClassName,
          tileContent = nextProps.tileContent;
      var nextState = {};

      if (tileClassName !== prevState.tileClassNameProps) {
        nextState.tileClassName = getValue(nextProps, tileClassName);
        nextState.tileClassNameProps = tileClassName;
      }

      if (tileContent !== prevState.tileContentProps) {
        nextState.tileContent = getValue(nextProps, tileContent);
        nextState.tileContentProps = tileContent;
      }

      return nextState;
    }
  }]);

  return Tile;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


Tile.propTypes = _objectSpread(_objectSpread({}, _shared_propTypes__WEBPACK_IMPORTED_MODULE_3__.tileProps), {}, {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired),
  formatAbbr: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  maxDateTransform: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  minDateTransform: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
});

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/TileGroup.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/TileGroup.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TileGroup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Flex */ "./node_modules/react-calendar/dist/esm/Flex.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/utils */ "./node_modules/react-calendar/dist/esm/shared/utils.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function TileGroup(_ref) {
  var className = _ref.className,
      _ref$count = _ref.count,
      count = _ref$count === void 0 ? 3 : _ref$count,
      dateTransform = _ref.dateTransform,
      dateType = _ref.dateType,
      end = _ref.end,
      hover = _ref.hover,
      offset = _ref.offset,
      start = _ref.start,
      _ref$step = _ref.step,
      step = _ref$step === void 0 ? 1 : _ref$step,
      Tile = _ref.tile,
      value = _ref.value,
      valueType = _ref.valueType,
      tileProps = _objectWithoutProperties(_ref, ["className", "count", "dateTransform", "dateType", "end", "hover", "offset", "start", "step", "tile", "value", "valueType"]);

  var tiles = [];

  for (var point = start; point <= end; point += step) {
    var date = dateTransform(point);
    tiles.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Tile, _extends({
      key: date.getTime(),
      classes: (0,_shared_utils__WEBPACK_IMPORTED_MODULE_2__.getTileClasses)({
        value: value,
        valueType: valueType,
        date: date,
        dateType: dateType,
        hover: hover
      }),
      date: date,
      point: point
    }, tileProps)));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Flex__WEBPACK_IMPORTED_MODULE_3__.default, {
    className: className,
    count: count,
    offset: offset,
    wrap: true
  }, tiles);
}
TileGroup.propTypes = _objectSpread(_objectSpread({}, _shared_propTypes__WEBPACK_IMPORTED_MODULE_4__.tileGroupProps), {}, {
  activeStartDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default().instanceOf(Date),
  count: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  dateTransform: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  dateType: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  offset: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  step: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  tile: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
});

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/YearView.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/YearView.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ YearView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _YearView_Months__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./YearView/Months */ "./node_modules/react-calendar/dist/esm/YearView/Months.js");


function YearView(props) {
  function renderMonths() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_YearView_Months__WEBPACK_IMPORTED_MODULE_1__.default, props);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "react-calendar__year-view"
  }, renderMonths());
}

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/YearView/Month.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/YearView/Month.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Month)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Tile */ "./node_modules/react-calendar/dist/esm/Tile.js");
/* harmony import */ var _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dateFormatter */ "./node_modules/react-calendar/dist/esm/shared/dateFormatter.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var className = 'react-calendar__year-view__months__month';
function Month(_ref) {
  var classes = _ref.classes,
      _ref$formatMonth = _ref.formatMonth,
      formatMonth = _ref$formatMonth === void 0 ? _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_2__.formatMonth : _ref$formatMonth,
      _ref$formatMonthYear = _ref.formatMonthYear,
      formatMonthYear = _ref$formatMonthYear === void 0 ? _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_2__.formatMonthYear : _ref$formatMonthYear,
      otherProps = _objectWithoutProperties(_ref, ["classes", "formatMonth", "formatMonthYear"]);

  var date = otherProps.date,
      locale = otherProps.locale;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Tile__WEBPACK_IMPORTED_MODULE_3__.default, _extends({}, otherProps, {
    classes: [].concat(classes, className),
    formatAbbr: formatMonthYear,
    maxDateTransform: _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_4__.getMonthEnd,
    minDateTransform: _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_4__.getMonthStart,
    view: "year"
  }), formatMonth(locale, date));
}
Month.propTypes = _objectSpread(_objectSpread({}, _shared_propTypes__WEBPACK_IMPORTED_MODULE_5__.tileProps), {}, {
  formatMonth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  formatMonthYear: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
});

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/YearView/Months.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/YearView/Months.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Months)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _TileGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TileGroup */ "./node_modules/react-calendar/dist/esm/TileGroup.js");
/* harmony import */ var _Month__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Month */ "./node_modules/react-calendar/dist/esm/YearView/Month.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







function Months(props) {
  var activeStartDate = props.activeStartDate;
  var start = 0;
  var end = 11;
  var year = (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__.getYear)(activeStartDate);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TileGroup__WEBPACK_IMPORTED_MODULE_3__.default, _extends({}, props, {
    className: "react-calendar__year-view__months",
    dateTransform: function dateTransform(monthIndex) {
      var date = new Date();
      date.setFullYear(year, monthIndex, 1);
      date.setHours(0, 0, 0, 0);
      return date;
    },
    dateType: "month",
    end: end,
    start: start,
    tile: _Month__WEBPACK_IMPORTED_MODULE_4__.default
  }));
}
Months.propTypes = _objectSpread(_objectSpread({}, _shared_propTypes__WEBPACK_IMPORTED_MODULE_5__.tileGroupProps), {}, {
  locale: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
});

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Calendar": () => (/* reexport safe */ _Calendar__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "CenturyView": () => (/* reexport safe */ _CenturyView__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "DecadeView": () => (/* reexport safe */ _DecadeView__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "YearView": () => (/* reexport safe */ _YearView__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "MonthView": () => (/* reexport safe */ _MonthView__WEBPACK_IMPORTED_MODULE_4__.default)
/* harmony export */ });
/* harmony import */ var _Calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calendar */ "./node_modules/react-calendar/dist/esm/Calendar.js");
/* harmony import */ var _CenturyView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CenturyView */ "./node_modules/react-calendar/dist/esm/CenturyView.js");
/* harmony import */ var _DecadeView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DecadeView */ "./node_modules/react-calendar/dist/esm/DecadeView.js");
/* harmony import */ var _YearView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./YearView */ "./node_modules/react-calendar/dist/esm/YearView.js");
/* harmony import */ var _MonthView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MonthView */ "./node_modules/react-calendar/dist/esm/MonthView.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Calendar__WEBPACK_IMPORTED_MODULE_0__.default);


/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/shared/const.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/shared/const.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CALENDAR_TYPES": () => (/* binding */ CALENDAR_TYPES),
/* harmony export */   "CALENDAR_TYPE_LOCALES": () => (/* binding */ CALENDAR_TYPE_LOCALES),
/* harmony export */   "WEEKDAYS": () => (/* binding */ WEEKDAYS)
/* harmony export */ });
var _CALENDAR_TYPE_LOCALE;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CALENDAR_TYPES = {
  ARABIC: 'Arabic',
  HEBREW: 'Hebrew',
  ISO_8601: 'ISO 8601',
  US: 'US'
};
var CALENDAR_TYPE_LOCALES = (_CALENDAR_TYPE_LOCALE = {}, _defineProperty(_CALENDAR_TYPE_LOCALE, CALENDAR_TYPES.US, ['en-CA', 'en-US', 'es-AR', 'es-BO', 'es-CL', 'es-CO', 'es-CR', 'es-DO', 'es-EC', 'es-GT', 'es-HN', 'es-MX', 'es-NI', 'es-PA', 'es-PE', 'es-PR', 'es-SV', 'es-VE', 'pt-BR']), _defineProperty(_CALENDAR_TYPE_LOCALE, CALENDAR_TYPES.ARABIC, [// ar-LB, ar-MA intentionally missing
'ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LY', 'ar-OM', 'ar-QA', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-YE', 'dv', 'dv-MV', 'ps', 'ps-AR']), _defineProperty(_CALENDAR_TYPE_LOCALE, CALENDAR_TYPES.HEBREW, ['he', 'he-IL']), _CALENDAR_TYPE_LOCALE);
var WEEKDAYS = _toConsumableArray(Array(7)).map(function (el, index) {
  return index;
});

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/shared/dateFormatter.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/shared/dateFormatter.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatDate": () => (/* binding */ formatDate),
/* harmony export */   "formatDay": () => (/* binding */ formatDay),
/* harmony export */   "formatLongDate": () => (/* binding */ formatLongDate),
/* harmony export */   "formatMonth": () => (/* binding */ formatMonth),
/* harmony export */   "formatMonthYear": () => (/* binding */ formatMonthYear),
/* harmony export */   "formatShortWeekday": () => (/* binding */ formatShortWeekday),
/* harmony export */   "formatWeekday": () => (/* binding */ formatWeekday),
/* harmony export */   "formatYear": () => (/* binding */ formatYear)
/* harmony export */ });
/* harmony import */ var get_user_locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! get-user-locale */ "./node_modules/get-user-locale/dist/esm/index.js");


function getFormatter(options) {
  return function (locale, date) {
    return date.toLocaleString(locale || (0,get_user_locale__WEBPACK_IMPORTED_MODULE_0__.default)(), options);
  };
}
/**
 * Changes the hour in a Date to ensure right date formatting even if DST is messed up.
 * Workaround for bug in WebKit and Firefox with historical dates.
 * For more details, see:
 * https://bugs.chromium.org/p/chromium/issues/detail?id=750465
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1385643
 *
 * @param {Date} date Date.
 */


function toSafeHour(date) {
  var safeDate = new Date(date);
  return new Date(safeDate.setHours(12));
}

function getSafeFormatter(options) {
  return function (locale, date) {
    return getFormatter(options)(locale, toSafeHour(date));
  };
}

var formatDateOptions = {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric'
};
var formatDayOptions = {
  day: 'numeric'
};
var formatLongDateOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
};
var formatMonthOptions = {
  month: 'long'
};
var formatMonthYearOptions = {
  month: 'long',
  year: 'numeric'
};
var formatShortWeekdayOptions = {
  weekday: 'short'
};
var formatWeekdayOptions = {
  weekday: 'long'
};
var formatYearOptions = {
  year: 'numeric'
};
var formatDate = getSafeFormatter(formatDateOptions);
var formatDay = getSafeFormatter(formatDayOptions);
var formatLongDate = getSafeFormatter(formatLongDateOptions);
var formatMonth = getSafeFormatter(formatMonthOptions);
var formatMonthYear = getSafeFormatter(formatMonthYearOptions);
var formatShortWeekday = getSafeFormatter(formatShortWeekdayOptions);
var formatWeekday = getSafeFormatter(formatWeekdayOptions);
var formatYear = getSafeFormatter(formatYearOptions);

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/shared/dates.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/shared/dates.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDayOfWeek": () => (/* binding */ getDayOfWeek),
/* harmony export */   "getBeginOfCenturyYear": () => (/* binding */ getBeginOfCenturyYear),
/* harmony export */   "getBeginOfDecadeYear": () => (/* binding */ getBeginOfDecadeYear),
/* harmony export */   "getBeginOfWeek": () => (/* binding */ getBeginOfWeek),
/* harmony export */   "getWeekNumber": () => (/* binding */ getWeekNumber),
/* harmony export */   "getBegin": () => (/* binding */ getBegin),
/* harmony export */   "getBeginPrevious": () => (/* binding */ getBeginPrevious),
/* harmony export */   "getBeginNext": () => (/* binding */ getBeginNext),
/* harmony export */   "getBeginPrevious2": () => (/* binding */ getBeginPrevious2),
/* harmony export */   "getBeginNext2": () => (/* binding */ getBeginNext2),
/* harmony export */   "getEnd": () => (/* binding */ getEnd),
/* harmony export */   "getEndPrevious": () => (/* binding */ getEndPrevious),
/* harmony export */   "getEndPrevious2": () => (/* binding */ getEndPrevious2),
/* harmony export */   "getRange": () => (/* binding */ getRange),
/* harmony export */   "getValueRange": () => (/* binding */ getValueRange),
/* harmony export */   "getCenturyLabel": () => (/* binding */ getCenturyLabel),
/* harmony export */   "getDecadeLabel": () => (/* binding */ getDecadeLabel),
/* harmony export */   "isWeekend": () => (/* binding */ isWeekend)
/* harmony export */ });
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ "./node_modules/react-calendar/dist/esm/shared/const.js");
/* harmony import */ var _dateFormatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dateFormatter */ "./node_modules/react-calendar/dist/esm/shared/dateFormatter.js");



var SUNDAY = _const__WEBPACK_IMPORTED_MODULE_0__.WEEKDAYS[0];
var FRIDAY = _const__WEBPACK_IMPORTED_MODULE_0__.WEEKDAYS[5];
var SATURDAY = _const__WEBPACK_IMPORTED_MODULE_0__.WEEKDAYS[6];
/* Simple getters - getting a property of a given point in time */

function getDayOfWeek(date) {
  var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _const__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_TYPES.ISO_8601;
  var weekday = date.getDay();

  switch (calendarType) {
    case _const__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_TYPES.ISO_8601:
      // Shifts days of the week so that Monday is 0, Sunday is 6
      return (weekday + 6) % 7;

    case _const__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_TYPES.ARABIC:
      return (weekday + 1) % 7;

    case _const__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_TYPES.HEBREW:
    case _const__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_TYPES.US:
      return weekday;

    default:
      throw new Error('Unsupported calendar type.');
  }
}
/**
 * Century
 */

function getBeginOfCenturyYear(date) {
  var beginOfCentury = (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getCenturyStart)(date);
  return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getYear)(beginOfCentury);
}
/**
 * Decade
 */

function getBeginOfDecadeYear(date) {
  var beginOfDecade = (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getDecadeStart)(date);
  return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getYear)(beginOfDecade);
}
/**
 * Week
 */

/**
 * Returns the beginning of a given week.
 *
 * @param {Date} date Date.
 * @param {string} calendarType Calendar type. Can be ISO 8601 or US.
 */

function getBeginOfWeek(date) {
  var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _const__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_TYPES.ISO_8601;
  var year = (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getYear)(date);
  var monthIndex = (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getMonth)(date);
  var day = date.getDate() - getDayOfWeek(date, calendarType);
  return new Date(year, monthIndex, day);
}
/**
 * Gets week number according to ISO 8601 or US standard.
 * In ISO 8601, Arabic and Hebrew week 1 is the one with January 4.
 * In US calendar week 1 is the one with January 1.
 *
 * @param {Date} date Date.
 * @param {string} calendarType Calendar type. Can be ISO 8601 or US.
 */

function getWeekNumber(date) {
  var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _const__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_TYPES.ISO_8601;
  var calendarTypeForWeekNumber = calendarType === _const__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_TYPES.US ? _const__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_TYPES.US : _const__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_TYPES.ISO_8601;
  var beginOfWeek = getBeginOfWeek(date, calendarTypeForWeekNumber);
  var year = (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getYear)(date) + 1;
  var dayInWeekOne;
  var beginOfFirstWeek; // Look for the first week one that does not come after a given date

  do {
    dayInWeekOne = new Date(year, 0, calendarTypeForWeekNumber === _const__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_TYPES.ISO_8601 ? 4 : 1);
    beginOfFirstWeek = getBeginOfWeek(dayInWeekOne, calendarTypeForWeekNumber);
    year -= 1;
  } while (date - beginOfFirstWeek < 0);

  return Math.round((beginOfWeek - beginOfFirstWeek) / (8.64e7 * 7)) + 1;
}
/**
 * Others
 */

/**
 * Returns the beginning of a given range.
 *
 * @param {string} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 */

function getBegin(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getCenturyStart)(date);

    case 'decade':
      return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getDecadeStart)(date);

    case 'year':
      return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getYearStart)(date);

    case 'month':
      return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getMonthStart)(date);

    case 'day':
      return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getDayStart)(date);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getBeginPrevious(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getPreviousCenturyStart)(date);

    case 'decade':
      return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getPreviousDecadeStart)(date);

    case 'year':
      return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getPreviousYearStart)(date);

    case 'month':
      return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getPreviousMonthStart)(date);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getBeginNext(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getNextCenturyStart)(date);

    case 'decade':
      return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getNextDecadeStart)(date);

    case 'year':
      return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getNextYearStart)(date);

    case 'month':
      return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getNextMonthStart)(date);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
var getBeginPrevious2 = function getBeginPrevious2(rangeType, date) {
  switch (rangeType) {
    case 'decade':
      return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getPreviousDecadeStart)(date, -100);

    case 'year':
      return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getPreviousYearStart)(date, -10);

    case 'month':
      return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getPreviousMonthStart)(date, -12);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
};
var getBeginNext2 = function getBeginNext2(rangeType, date) {
  switch (rangeType) {
    case 'decade':
      return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getNextDecadeStart)(date, 100);

    case 'year':
      return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getNextYearStart)(date, 10);

    case 'month':
      return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getNextMonthStart)(date, 12);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
};
/**
 * Returns the end of a given range.
 *
 * @param {string} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 */

function getEnd(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getCenturyEnd)(date);

    case 'decade':
      return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getDecadeEnd)(date);

    case 'year':
      return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getYearEnd)(date);

    case 'month':
      return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getMonthEnd)(date);

    case 'day':
      return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getDayEnd)(date);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getEndPrevious(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getPreviousCenturyEnd)(date);

    case 'decade':
      return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getPreviousDecadeEnd)(date);

    case 'year':
      return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getPreviousYearEnd)(date);

    case 'month':
      return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getPreviousMonthEnd)(date);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
var getEndPrevious2 = function getEndPrevious2(rangeType, date) {
  switch (rangeType) {
    case 'decade':
      return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getPreviousDecadeEnd)(date, -100);

    case 'year':
      return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getPreviousYearEnd)(date, -10);

    case 'month':
      return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getPreviousMonthEnd)(date, -12);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
};
/**
 * Returns an array with the beginning and the end of a given range.
 *
 * @param {string} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 */

function getRange(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getCenturyRange)(date);

    case 'decade':
      return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getDecadeRange)(date);

    case 'year':
      return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getYearRange)(date);

    case 'month':
      return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getMonthRange)(date);

    case 'day':
      return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getDayRange)(date);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
/**
 * Creates a range out of two values, ensuring they are in order and covering entire period ranges.
 *
 * @param {string} rangeType Range type (e.g. 'day')
 * @param {Date} date1 First date.
 * @param {Date} date2 Second date.
 */

function getValueRange(rangeType, date1, date2) {
  var rawNextValue = [date1, date2].sort(function (a, b) {
    return a - b;
  });
  return [getBegin(rangeType, rawNextValue[0]), getEnd(rangeType, rawNextValue[1])];
}

function toYearLabel(locale) {
  var formatYear = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _dateFormatter__WEBPACK_IMPORTED_MODULE_2__.formatYear;
  var dates = arguments.length > 2 ? arguments[2] : undefined;
  return dates.map(function (date) {
    return formatYear(locale, date);
  }).join(' – ');
}
/**
 * Returns a string labelling a century of a given date.
 * For example, for 2017 it will return 2001-2100.
 *
 * @param {Date|String|Number} date Date or a year as a string or as a number.
 */


function getCenturyLabel(locale, formatYear, date) {
  return toYearLabel(locale, formatYear, (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getCenturyRange)(date));
}
/**
 * Returns a string labelling a century of a given date.
 * For example, for 2017 it will return 2011-2020.
 *
 * @param {Date|String|Number} date Date or a year as a string or as a number.
 */

function getDecadeLabel(locale, formatYear, date) {
  return toYearLabel(locale, formatYear, (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getDecadeRange)(date));
}
/**
 * Returns a boolean determining whether a given date is on Saturday or Sunday.
 *
 * @param {Date} date Date.
 */

function isWeekend(date) {
  var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _const__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_TYPES.ISO_8601;
  var weekday = date.getDay();

  switch (calendarType) {
    case _const__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_TYPES.ARABIC:
    case _const__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_TYPES.HEBREW:
      return weekday === FRIDAY || weekday === SATURDAY;

    case _const__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_TYPES.ISO_8601:
    case _const__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_TYPES.US:
      return weekday === SATURDAY || weekday === SUNDAY;

    default:
      throw new Error('Unsupported calendar type.');
  }
}

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/shared/propTypes.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/shared/propTypes.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isCalendarType": () => (/* binding */ isCalendarType),
/* harmony export */   "isClassName": () => (/* binding */ isClassName),
/* harmony export */   "isMinDate": () => (/* binding */ isMinDate),
/* harmony export */   "isMaxDate": () => (/* binding */ isMaxDate),
/* harmony export */   "isRef": () => (/* binding */ isRef),
/* harmony export */   "isValue": () => (/* binding */ isValue),
/* harmony export */   "isViews": () => (/* binding */ isViews),
/* harmony export */   "isView": () => (/* binding */ isView),
/* harmony export */   "tileGroupProps": () => (/* binding */ tileGroupProps),
/* harmony export */   "tileProps": () => (/* binding */ tileProps)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ "./node_modules/react-calendar/dist/esm/shared/const.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



var calendarTypes = Object.values(_const__WEBPACK_IMPORTED_MODULE_1__.CALENDAR_TYPES);
var allViews = ['century', 'decade', 'year', 'month'];
var isCalendarType = prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(calendarTypes);
var isClassName = prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().string))]);
var isMinDate = function isMinDate(props, propName, componentName) {
  var minDate = props[propName];

  if (!minDate) {
    return null;
  }

  if (!(minDate instanceof Date)) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(minDate), "` supplied to `").concat(componentName, "`, expected instance of `Date`."));
  }

  var maxDate = props.maxDate;

  if (maxDate && minDate > maxDate) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(minDate), "` supplied to `").concat(componentName, "`, minDate cannot be larger than maxDate."));
  }

  return null;
};
var isMaxDate = function isMaxDate(props, propName, componentName) {
  var maxDate = props[propName];

  if (!maxDate) {
    return null;
  }

  if (!(maxDate instanceof Date)) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(maxDate), "` supplied to `").concat(componentName, "`, expected instance of `Date`."));
  }

  var minDate = props.minDate;

  if (minDate && maxDate < minDate) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(maxDate), "` supplied to `").concat(componentName, "`, maxDate cannot be smaller than minDate."));
  }

  return null;
};
var isRef = prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().func), prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  // eslint-disable-next-line react/forbid-prop-types
  current: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().any)
})]);
var isValue = prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default().instanceOf(Date), prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default().instanceOf(Date))]);
var isViews = prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(allViews));
var isView = function isView(props, propName, componentName) {
  var view = props[propName];
  var views = props.views;
  var allowedViews = views || allViews;

  if (view !== undefined && allowedViews.indexOf(view) === -1) {
    return new Error("Invalid prop `".concat(propName, "` of value `").concat(view, "` supplied to `").concat(componentName, "`, expected one of [").concat(allowedViews.map(function (a) {
      return "\"".concat(a, "\"");
    }).join(', '), "]."));
  } // Everything is fine


  return null;
};

isView.isRequired = function (props, propName, componentName) {
  var view = props[propName];

  if (!view) {
    return new Error("The prop `".concat(propName, "` is marked as required in `").concat(componentName, "`, but its value is `").concat(view, "`."));
  }

  return isView(props, propName, componentName);
};

var tileGroupProps = {
  activeStartDate: prop_types__WEBPACK_IMPORTED_MODULE_0___default().instanceOf(Date).isRequired,
  hover: prop_types__WEBPACK_IMPORTED_MODULE_0___default().instanceOf(Date),
  locale: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  maxDate: isMaxDate,
  minDate: isMinDate,
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func),
  onMouseOver: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func),
  tileClassName: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().func), isClassName]),
  tileContent: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().node)]),
  value: isValue,
  valueType: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
};
var tileProps = {
  activeStartDate: prop_types__WEBPACK_IMPORTED_MODULE_0___default().instanceOf(Date).isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)).isRequired,
  date: prop_types__WEBPACK_IMPORTED_MODULE_0___default().instanceOf(Date).isRequired,
  locale: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  maxDate: isMaxDate,
  minDate: isMinDate,
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func),
  onMouseOver: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func),
  style: prop_types__WEBPACK_IMPORTED_MODULE_0___default().objectOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)])),
  tileClassName: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().func), isClassName]),
  tileContent: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().node)]),
  tileDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func)
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/shared/utils.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/shared/utils.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "between": () => (/* binding */ between),
/* harmony export */   "isValueWithinRange": () => (/* binding */ isValueWithinRange),
/* harmony export */   "isRangeWithinRange": () => (/* binding */ isRangeWithinRange),
/* harmony export */   "doRangesOverlap": () => (/* binding */ doRangesOverlap),
/* harmony export */   "getTileClasses": () => (/* binding */ getTileClasses)
/* harmony export */ });
/* harmony import */ var _dates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dates */ "./node_modules/react-calendar/dist/esm/shared/dates.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/**
 * Returns a value no smaller than min and no larger than max.
 *
 * @param {*} value Value to return.
 * @param {*} min Minimum return value.
 * @param {*} max Maximum return value.
 */

function between(value, min, max) {
  if (min && min > value) {
    return min;
  }

  if (max && max < value) {
    return max;
  }

  return value;
}
function isValueWithinRange(value, range) {
  return range[0] <= value && range[1] >= value;
}
function isRangeWithinRange(greaterRange, smallerRange) {
  return greaterRange[0] <= smallerRange[0] && greaterRange[1] >= smallerRange[1];
}
function doRangesOverlap(range1, range2) {
  return isValueWithinRange(range1[0], range2) || isValueWithinRange(range1[1], range2);
}

function getRangeClassNames(valueRange, dateRange, baseClassName) {
  var isRange = doRangesOverlap(dateRange, valueRange);
  var classes = [];

  if (isRange) {
    classes.push(baseClassName);
    var isRangeStart = isValueWithinRange(valueRange[0], dateRange);
    var isRangeEnd = isValueWithinRange(valueRange[1], dateRange);

    if (isRangeStart) {
      classes.push("".concat(baseClassName, "Start"));
    }

    if (isRangeEnd) {
      classes.push("".concat(baseClassName, "End"));
    }

    if (isRangeStart && isRangeEnd) {
      classes.push("".concat(baseClassName, "BothEnds"));
    }
  }

  return classes;
}

function getTileClasses() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      value = _ref.value,
      valueType = _ref.valueType,
      date = _ref.date,
      dateType = _ref.dateType,
      hover = _ref.hover;

  var className = 'react-calendar__tile';
  var classes = [className];

  if (!date) {
    return classes;
  }

  if (!Array.isArray(date) && !dateType) {
    throw new Error('getTileClasses(): Unable to get tile activity classes because one or more required arguments were not passed.');
  }

  var now = new Date();
  var dateRange = Array.isArray(date) ? date : (0,_dates__WEBPACK_IMPORTED_MODULE_0__.getRange)(dateType, date);

  if (isValueWithinRange(now, dateRange)) {
    classes.push("".concat(className, "--now"));
  }

  if (!value) {
    return classes;
  }

  if (!Array.isArray(value) && !valueType) {
    throw new Error('getTileClasses(): Unable to get tile activity classes because one or more required arguments were not passed.');
  }

  var valueRange = Array.isArray(value) ? value : (0,_dates__WEBPACK_IMPORTED_MODULE_0__.getRange)(valueType, value);

  if (isRangeWithinRange(valueRange, dateRange)) {
    classes.push("".concat(className, "--active"));
  } else if (doRangesOverlap(valueRange, dateRange)) {
    classes.push("".concat(className, "--hasActive"));
  }

  var valueRangeClassNames = getRangeClassNames(valueRange, dateRange, "".concat(className, "--range"));
  classes.push.apply(classes, _toConsumableArray(valueRangeClassNames));

  if (hover) {
    var hoverRange = hover > valueRange[1] ? [valueRange[1], hover] : [hover, valueRange[0]];
    var hoverRangeClassNames = getRangeClassNames(hoverRange, dateRange, "".concat(className, "--hover"));
    classes.push.apply(classes, _toConsumableArray(hoverRangeClassNames));
  }

  return classes;
}

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-calendar/dist/Calendar.css":
/*!*******************************************************!*\
  !*** ./node_modules/react-calendar/dist/Calendar.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_sass_loader_dist_cjs_js_Calendar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js!../../sass-loader/dist/cjs.js!./Calendar.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/react-calendar/dist/Calendar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_sass_loader_dist_cjs_js_Calendar_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_sass_loader_dist_cjs_js_Calendar_css__WEBPACK_IMPORTED_MODULE_6__.default && _css_loader_dist_cjs_js_sass_loader_dist_cjs_js_Calendar_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _css_loader_dist_cjs_js_sass_loader_dist_cjs_js_Calendar_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


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
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contextMenuHover_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./contextMenuHover.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/contextMenuHover.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contextMenuHover_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contextMenuHover_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contextMenuHover_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contextMenuHover_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


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
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/modal.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


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
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_mousehover_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./mousehover.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/mousehover.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_mousehover_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_mousehover_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_mousehover_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_mousehover_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


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
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_table_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./table.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/table.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_table_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_table_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_table_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_table_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

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

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/* harmony export */   "DateInput": () => (/* reexport safe */ _DateInput_js__WEBPACK_IMPORTED_MODULE_7__.default),
/* harmony export */   "DoubleListBox": () => (/* reexport safe */ _DoubleListBox_js__WEBPACK_IMPORTED_MODULE_8__.default),
/* harmony export */   "ErrorModal": () => (/* reexport safe */ _ErrorModal_js__WEBPACK_IMPORTED_MODULE_9__.default),
/* harmony export */   "InputFile": () => (/* reexport safe */ _InputFile_js__WEBPACK_IMPORTED_MODULE_10__.default),
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
/* harmony export */   "isOpera": () => (/* reexport safe */ _browserDetect_js__WEBPACK_IMPORTED_MODULE_18__.isOpera),
/* harmony export */   "isFirefox": () => (/* reexport safe */ _browserDetect_js__WEBPACK_IMPORTED_MODULE_18__.isFirefox),
/* harmony export */   "isSafari": () => (/* reexport safe */ _browserDetect_js__WEBPACK_IMPORTED_MODULE_18__.isSafari),
/* harmony export */   "isIE": () => (/* reexport safe */ _browserDetect_js__WEBPACK_IMPORTED_MODULE_18__.isIE),
/* harmony export */   "isEdge": () => (/* reexport safe */ _browserDetect_js__WEBPACK_IMPORTED_MODULE_18__.isEdge),
/* harmony export */   "isChrome": () => (/* reexport safe */ _browserDetect_js__WEBPACK_IMPORTED_MODULE_18__.isChrome),
/* harmony export */   "isEdgeChromium": () => (/* reexport safe */ _browserDetect_js__WEBPACK_IMPORTED_MODULE_18__.isEdgeChromium),
/* harmony export */   "isBlink": () => (/* reexport safe */ _browserDetect_js__WEBPACK_IMPORTED_MODULE_18__.isBlink),
/* harmony export */   "date2str": () => (/* reexport safe */ _date2str_js__WEBPACK_IMPORTED_MODULE_19__.date2str),
/* harmony export */   "localStrToDate": () => (/* reexport safe */ _localStrToDate_js__WEBPACK_IMPORTED_MODULE_20__.localStrToDate),
/* harmony export */   "makeChangeHandler": () => (/* reexport safe */ _makeChangeHandler_js__WEBPACK_IMPORTED_MODULE_21__.default)
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
/* harmony import */ var _Theme_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Theme.js */ "./src/Theme.js");
/* harmony import */ var _browserDetect_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./browserDetect.js */ "./src/browserDetect.js");
/* harmony import */ var _date2str_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./date2str.js */ "./src/date2str.js");
/* harmony import */ var _localStrToDate_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./localStrToDate.js */ "./src/localStrToDate.js");
/* harmony import */ var _makeChangeHandler_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./makeChangeHandler.js */ "./src/makeChangeHandler.js");























})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map