(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // src/AlertModal.js
  var import_react2 = __toESM(__require("react"));

  // src/Modal.js
  var import_react = __toESM(__require("react"));
  var import_react_dom = __require("react-dom");
  var Modal = ({ children }) => {
    const elRef = (0, import_react.useRef)(null);
    if (!elRef.current) {
      const div = document.createElement("div");
      elRef.current = div;
    }
    (0, import_react.useEffect)(() => {
      const modalRoot = document.getElementById("sw-modal");
      if (modalRoot) {
        modalRoot.appendChild(elRef.current);
        return () => modalRoot.removeChild(elRef.current);
      } else {
        console.log("Can not find DOM element ID: sw-modal, Modal widget will not pop up.");
        console.log("Please add the following to your index.html");
        console.log('    <div id="sw-modal"></div>');
      }
    }, []);
    return (0, import_react_dom.createPortal)(/* @__PURE__ */ import_react.default.createElement("div", null, children), elRef.current);
  };
  var Modal_default = Modal;

  // src/AlertModal.js
  var defProps = {
    show: true,
    closeFunct: () => {
    },
    message: "No Alert message given"
  };
  var AlertModal = (inProps) => {
    const props = { ...defProps, ...inProps };
    if ("show" in inProps === false) {
      console.error("AlertModal: The show property is not present");
    }
    if ("closeFunct" in inProps === false) {
      console.error("AlertModal: The closeFunct property is not present");
    }
    return /* @__PURE__ */ import_react2.default.createElement("div", null, props.show === true ? /* @__PURE__ */ import_react2.default.createElement(Modal_default, null, /* @__PURE__ */ import_react2.default.createElement("div", null, /* @__PURE__ */ import_react2.default.createElement("h1", null, props.message === "" ? defProps.message : props.message), /* @__PURE__ */ import_react2.default.createElement("button", { name: "ok", onClick: () => props.closeFunct(false), className: "sw-modal_abuttonStyle" }, "OK"))) : null);
  };
  var AlertModal_default = AlertModal;

  // src/CheckBox.js
  var import_react3 = __toESM(__require("react"));
  var checked = String.fromCharCode(9745);
  var unchecked = String.fromCharCode(9744);
  var CheckBox = (props) => {
    const handle = (e) => {
      if (typeof e.preventDefault === "function")
        e.preventDefault();
      e.target.name = props.name;
      e.target.value = props.value === props.selectedValue ? "" : props.selectedValue;
      props.onChange(e);
    };
    const { selectedValue, text, children, className, ...rest } = props;
    const isChecked = props.value === selectedValue;
    const symbol = isChecked ? checked : unchecked;
    return /* @__PURE__ */ import_react3.default.createElement("button", { type: "button", onClick: handle, className: "sw-checkbox_defaultStyle " + className, ...rest }, symbol, text, children);
  };
  var CheckBox_default = CheckBox;

  // src/ChoiceText.js
  var import_react4 = __toESM(__require("react"));
  var ChoiceText = (inProps) => {
    let props = { ...inProps };
    const pref = props.hasOwnProperty("name") ? props.name + "_" : "";
    const choices = props.choices;
    delete props.choices;
    return /* @__PURE__ */ import_react4.default.createElement("span", null, /* @__PURE__ */ import_react4.default.createElement("input", { type: "text", ...props }), /* @__PURE__ */ import_react4.default.createElement("datalist", { id: props.list }, choices.map((el, k) => /* @__PURE__ */ import_react4.default.createElement("option", { key: pref + k, value: el }, el))));
  };
  var ChoiceText_default = ChoiceText;

  // src/Common.js
  var sanitize = (text, item) => {
    const table = [
      "SELECT",
      "DELETE",
      "INSERT",
      "UPDATE",
      "ALTER"
    ];
    let message = null;
    if (text === null || text === "") {
      return { valid: true, message: "" };
    }
    if (text.startsWith(":")) {
      message = item + " can not start with a colon (:)";
      return { valid: false, message };
    }
    for (let i = 0; i < table.length; i++) {
      if (text.toUpperCase().startsWith(table[i])) {
        message = item + " can not start with the word " + table[i];
        return { valid: false, message };
      }
    }
    return { valid: true, message: "" };
  };
  var formatMoney = (amount, decimalCount = 2, decimal = ".", thousands = ",", dollarSign = "$") => {
    try {
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
      const negativeSign = amount < 0 ? "-" : "";
      let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
      let j = i.length > 3 ? i.length % 3 : 0;
      return dollarSign + negativeSign + (j ? i.substr(0, j) + thousands : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
      console.log(e);
    }
  };

  // src/ConfirmModal.js
  var import_react5 = __toESM(__require("react"));
  var defProps2 = {
    show: true,
    yesFunct: () => {
    },
    noFunct: () => {
    },
    closeFunct: () => {
    },
    message: "No Confirm message given"
  };
  var ConfirmModal = (inProps) => {
    const props = { ...defProps2, ...inProps };
    if ("show" in inProps === false) {
      console.error("ConfirmModal: The show property is not present");
    }
    if ("yesFunct" in inProps === false) {
      console.error("ConfirmModal: The yesFunct property is not present");
    }
    if ("noFunct" in inProps === false && "closeFunct" in inProps === false) {
      console.error("ConfirmModal: The closeFunct property is not present");
    }
    return /* @__PURE__ */ import_react5.default.createElement("div", null, props.show === true ? /* @__PURE__ */ import_react5.default.createElement(Modal_default, null, /* @__PURE__ */ import_react5.default.createElement("div", null, /* @__PURE__ */ import_react5.default.createElement("h1", null, props.message === "" ? defProps2.message : props.message), /* @__PURE__ */ import_react5.default.createElement("button", { name: "yes", onClick: (async) => processYesFunct(), className: "sw-modal_cbuttonStyle" }, "Yes"), /* @__PURE__ */ import_react5.default.createElement("button", { name: "no", onClick: (async) => processNoFunct(), className: "sw-modal_cbuttonStyle" }, "No"))) : null);
    function processYesFunct() {
      if ("noFunct" in inProps === true && "closeFunct" in inProps === false) {
        props.noFunct(false);
      } else {
        props.closeFunct(false);
      }
      if (props.yesFunct !== null) {
        props.yesFunct();
      }
    }
    function processNoFunct() {
      if ("noFunct" in inProps === true && "closeFunct" in inProps === false) {
        props.noFunct(false);
      } else {
        props.closeFunct(false);
      }
      if (props.noFunct !== null) {
        props.noFunct();
      }
    }
  };
  var ConfirmModal_default = ConfirmModal;

  // src/ContextMenu.js
  var import_react6 = __toESM(__require("react"));
  var ContextMenu = (propsIn) => {
    const { positionX, positionY, noLeave, noCancel, menu, ...props } = propsIn;
    const propsPositionX = positionX || 10;
    const propsPositionY = positionY || 10;
    const propsNoLeave = noLeave || false;
    const propsNoCancel = noCancel || false;
    const propsMenu = menu || [];
    const menuPositionStyle = {
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
      if (propsNoLeave === false) {
        props.closeFunct(false);
      }
    }
    function buildMenuItem(row, i) {
      let key = "row_" + props.name + i;
      let dkey = "div_" + key;
      return /* @__PURE__ */ import_react6.default.createElement("div", { key: dkey }, /* @__PURE__ */ import_react6.default.createElement("span", { className: "sw-cm_contextMenuHov", key, onClick: () => execute(row.funct) }, row.name), /* @__PURE__ */ import_react6.default.createElement("br", null), /* @__PURE__ */ import_react6.default.createElement("br", null));
    }
    if (props.show === true) {
      return /* @__PURE__ */ import_react6.default.createElement("div", { className: "sw-cm_contextMenuHov sw-cm_menuStyle", onMouseLeave: mouseLeave, style: menuPositionStyle }, propsMenu.map(buildMenuItem), propsNoCancel ? /* @__PURE__ */ import_react6.default.createElement("br", null) : /* @__PURE__ */ import_react6.default.createElement("span", null, /* @__PURE__ */ import_react6.default.createElement("span", { className: "sw-cm_contextMenuHov", key: "cancelKey", onClick: cancelButton }, "Cancel"), /* @__PURE__ */ import_react6.default.createElement("br", null), /* @__PURE__ */ import_react6.default.createElement("br", null)));
    } else {
      return null;
    }
  };
  var ContextMenu_default = ContextMenu;

  // src/DateFunct.js
  var convertDate = (convDate) => {
    if (convDate === null)
      return null;
    if (convDate.indexOf("-") === -1)
      return convDate;
    let date = convDate.split("-");
    return date[1] + "/" + date[2] + "/" + date[0];
  };
  var dateTime = (dateAndTime) => {
    if (dateAndTime === null)
      return null;
    let splitDT = dateAndTime.split("T");
    let date = splitDT[0].split("-");
    let partTime = splitDT[1].split(".");
    let time = partTime[0].split(":");
    return date[1] + "/" + date[2] + "/" + date[0] + " " + time[0] + ":" + time[1] + ":" + time[2];
  };
  var addDigit = (value2) => {
    let newValue = null;
    if (value2.length === 1) {
      newValue = "0" + value2;
      return newValue;
    }
    return value2;
  };
  var currentDateTime = () => {
    let today = /* @__PURE__ */ new Date();
    return addDigit((today.getMonth() + 1).toString()) + "/" + addDigit(today.getDate().toString()) + "/" + today.getFullYear().toString() + " " + addDigit(today.getHours().toString()) + ":" + addDigit(today.getMinutes().toString()) + ":" + addDigit(today.getSeconds().toString());
  };
  var currentDate = () => {
    let today = /* @__PURE__ */ new Date();
    return addDigit((today.getMonth() + 1).toString()) + "/" + addDigit(today.getDate().toString()) + "/" + today.getFullYear().toString();
  };
  var currentDBDateTime = () => {
    let today = /* @__PURE__ */ new Date();
    return today.getFullYear().toString().substr(2, 2) + "-" + // Two digit year
    monthName(today.getMonth()) + "-" + // Month as a three letter abbreviation
    addDigit(today.getDate().toString()) + " " + addDigit(today.getHours().toString()) + ":" + addDigit(today.getMinutes().toString()) + ":" + addDigit(today.getSeconds().toString()) + "." + today.getMilliseconds().toString();
  };
  var currentDBDate = () => {
    let today = /* @__PURE__ */ new Date();
    return today.getFullYear().toString() + "-" + // Format the date in the YYYY-MM-DD format
    addDigit((today.getMonth() + 1).toString()) + "-" + addDigit(today.getDate().toString());
  };
  var dbDate = (date) => {
    let split = date.split("/");
    return split[2] + "-" + // Convert to the YYYY-MM-DD format
    split[0] + "-" + split[1];
  };
  var monthName = (month) => {
    switch (month) {
      case 0:
        return "JAN";
      case 1:
        return "FEB";
      case 2:
        return "MAR";
      case 3:
        return "APR";
      case 4:
        return "MAY";
      case 5:
        return "JUN";
      case 6:
        return "JUL";
      case 7:
        return "AUG";
      case 8:
        return "SEP";
      case 9:
        return "OCT";
      case 10:
        return "NOV";
      case 11:
        return "DEC";
    }
  };

  // src/DateInput.js
  var import_react7 = __toESM(__require("react"));

  // src/date2str.js
  var date2str = (date, pattern) => {
    var z = {
      y: date.getFullYear(),
      M: date.getMonth() + 1,
      d: date.getDate(),
      h: date.getHours(),
      m: date.getMinutes(),
      s: date.getSeconds()
    };
    return pattern.replace(/(y+|M+|d+|h+|m+|s+)/g, function(v) {
      const len = v.length > 2 ? v.length : 2;
      const s = "0" + z[v.slice(-1)];
      return s.slice(-len);
    });
  };

  // src/DateInput.js
  var DateInput = (props) => {
    let { name, value: value2, format, onChange, ...whatsLeft } = props;
    if (!value2)
      value2 = "";
    if (value2 instanceof Date) {
      value2 = date2str(value2, format);
    }
    return /* @__PURE__ */ import_react7.default.createElement(
      "input",
      {
        type: "date",
        ...whatsLeft,
        key: name,
        name,
        value: value2,
        onChange,
        placeholder: format,
        "data-date-format": format
      }
    );
  };
  var DateInput_default = DateInput;

  // src/DoubleListBox.js
  var import_react9 = __toESM(__require("react"));

  // src/List.js
  var import_react8 = __toESM(__require("react"));
  var hasProperty = (obj, propName) => {
    return !!Object.getOwnPropertyDescriptor(obj, propName);
  };
  var _Choice = (propsIn, ref) => {
    const { list: list2, choices, size, value: value2, onChange, ...props } = propsIn;
    const opt = list2 || choices || [];
    const keyPart = hasProperty(props, "keyName") ? props.keyName + "_" : "";
    const pref = hasProperty(props, "name") ? props.name + "_" + keyPart : "";
    if (typeof value2 == "string" && !opt.includes(value2)) {
      if (opt.length > 0) {
        console.log(`Adding missing default value: '${value2}' to ${pref} [${opt.length}]`);
      }
      opt.unshift(value2);
    }
    const listHandleChange = (e) => {
      if (typeof e.preventDefault === "function") {
        e.preventDefault();
      }
      const e2 = {
        preventDefault: e.preventDefault,
        target: { ...e.target }
      };
      const arr = Array.from(e.target.selectedOptions, (option) => option.value);
      e2.target.name = e.target.name;
      e2.target.value = props.multiple ? arr : e.target.value;
      onChange(e2);
    };
    return /* @__PURE__ */ import_react8.default.createElement(import_react8.Fragment, null, /* @__PURE__ */ import_react8.default.createElement("select", { ref, multiple: props.multiple, size, value: value2, onChange: listHandleChange, ...props }, opt.map((el, key) => /* @__PURE__ */ import_react8.default.createElement("option", { key: pref + key, value: el }, el))));
  };
  var _List = (props, ref) => /* @__PURE__ */ import_react8.default.createElement(Choice, { className: "ChoiceClass", ref, multiple: true, ...props });
  var Choice = import_react8.default.forwardRef(_Choice);
  var List = import_react8.default.forwardRef(_List);

  // src/DoubleListBox.js
  var hasProperty2 = (obj, propName) => {
    return !!Object.getOwnPropertyDescriptor(obj, propName);
  };
  var DoubleListBox = (props) => {
    const leftRef = (0, import_react9.useRef)();
    const rightRef = (0, import_react9.useRef)();
    const [choices, setChoices] = (0, import_react9.useState)([...props.choices || []]);
    const [leftValues, setLeftValues] = (0, import_react9.useState)(choices.filter((item) => ![...props.value || []].find((r) => r === item)));
    const [rightValues, setRightValues] = (0, import_react9.useState)([...props.value || []]);
    const [leftSelections, setLeftSelections] = (0, import_react9.useState)([]);
    const [rightSelections, setRightSelections] = (0, import_react9.useState)([]);
    const reset = (props2) => {
      if (!props2.value) {
        console.log("DoubleListBox props 'value' field is missing.");
      }
      if (!props2.choices) {
        console.log("DoubleListBox props 'choices' field is missing.");
      }
      const choices2 = [...props2.choices || []];
      const right = [...props2.value || []];
      const left = choices2.filter((item) => !right.find((r) => r === item));
      setChoices(choices2);
      setLeftValues(left);
      setRightValues(right);
      setLeftSelections([]);
      setRightSelections([]);
    };
    (0, import_react9.useEffect)(() => reset(props), [props.choices]);
    const reportChange = (right) => {
      let compName = "DoubleListBox";
      if (hasProperty2(props, "name") === true) {
        compName = props.name;
      }
      props.onChange({ target: { name: compName, value: right } });
    };
    const add = (a, b) => {
      let ans = [...a];
      for (let i = 0; i < b.length; i++) {
        ans.push(b[i]);
      }
      return ans;
    };
    const sub = (a, b) => {
      let ans = [];
      for (let i = 0; i < a.length; i++) {
        if (!b.includes(a[i]))
          ans.push(a[i]);
      }
      return ans;
    };
    const moveRightSelectButton = (e) => {
      let right = add(rightValues, leftSelections);
      let left = sub(leftValues, right);
      setLeftValues(left);
      setRightValues(right), setLeftSelections([]);
      reportChange(right);
      clearSelections();
    };
    const clearSelections = () => {
      const leftBox = leftRef.current;
      const rightBox = rightRef.current;
      for (let i = 0; i < leftBox.length; i++) {
        leftBox[i].selected = false;
      }
      for (let i = 0; i < rightBox.length; i++) {
        rightBox[i].selected = false;
      }
    };
    const moveLeftSelectButton = (e) => {
      let left = add(leftValues, rightSelections);
      let right = sub(rightValues, left);
      setLeftValues(left);
      setRightValues(right);
      setRightSelections([]);
      reportChange(right);
      clearSelections();
    };
    const moveRightAllButton = (e) => {
      let left = leftValues;
      let right = [...rightValues];
      for (let i = 0; i < left.length; i++) {
        right.push(left[i]);
      }
      setLeftValues([]);
      setRightValues(right);
      setLeftSelections([]);
      reportChange(right);
    };
    const moveLeftAllButton = (e) => {
      let left = [...leftValues];
      let right = rightValues;
      for (let i = 0; i < right.length; i++) {
        left.push(right[i]);
      }
      setLeftValues(left);
      setRightValues([]);
      setRightSelections([]);
      reportChange([]);
    };
    const leftHandleChange = (e) => {
      if (typeof e === "string")
        return;
      if (typeof e.preventDefault === "function") {
        e.preventDefault();
      }
      const leftBox = leftRef.current;
      let values = [];
      for (let i = 0; i < leftBox.length; i++) {
        if (leftBox[i].selected === true) {
          values.push(leftBox[i].value);
        }
      }
      setLeftSelections(values);
    };
    const rightHandleChange = (e) => {
      if (typeof e === "string")
        return;
      if (typeof e.preventDefault === "function") {
        e.preventDefault();
      }
      const rightBox = rightRef.current;
      let values = [];
      for (let i = 0; i < rightBox.length; i++) {
        if (rightBox[i].selected === true) {
          values.push(rightBox[i].value);
        }
      }
      setRightSelections(values);
    };
    const isPosInt = (num) => {
      return /^\d*$/.test(num);
    };
    let defaultSize = 7;
    if (props.leftTitle && !props.rightTitle || !props.leftTitle && props.rightTitle) {
      console.log("There must both be a right title and a left title");
    } else if (props.leftTitle && props.rightTitle) {
      defaultSize = 10;
    } else if (!props.leftTitle && !props.rightTitle) {
      defaultSize = 7;
    }
    let size = 0;
    if (hasProperty2(props, "size") === true) {
      if (props.size === "all") {
        size = Math.max(defaultSize, props.choices.length);
      } else if (isPosInt(props.size)) {
        size = Math.max(defaultSize, parseInt(props.size));
      } else {
        size = defaultSize;
      }
    } else {
      size = defaultSize;
    }
    return /* @__PURE__ */ import_react9.default.createElement("div", { className: "sw-dlb_overallStyle" }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "sw-dlb_titleClass" }, /* @__PURE__ */ import_react9.default.createElement("label", null, props.title)), /* @__PURE__ */ import_react9.default.createElement("div", { className: "sw-dlb_topSt" }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "sw-dlb_display" }, /* @__PURE__ */ import_react9.default.createElement("p", { className: "sw-dlb_leftClass" }, props.leftTitle), /* @__PURE__ */ import_react9.default.createElement(List, { list: leftValues, ref: leftRef, size, onChange: leftHandleChange, keyname: "left", className: "sw-dlb_listSt" })), /* @__PURE__ */ import_react9.default.createElement("div", { className: "sw-dlb_colSt" }, /* @__PURE__ */ import_react9.default.createElement("button", { name: "moveRightSelect", className: "sw-dlb_buttonSt", onClick: moveRightSelectButton }, ">"), /* @__PURE__ */ import_react9.default.createElement("button", { name: "moveRightAll", className: "sw-dlb_buttonSt", onClick: moveRightAllButton }, ">>"), /* @__PURE__ */ import_react9.default.createElement("button", { name: "moveLeftSelect", className: "sw-dlb_buttonSt", onClick: moveLeftSelectButton }, "<"), /* @__PURE__ */ import_react9.default.createElement("button", { name: "moveLeftAll", className: "sw-dlb_buttonSt", onClick: moveLeftAllButton }, "<<")), /* @__PURE__ */ import_react9.default.createElement("div", { className: "sw-dlb_display" }, /* @__PURE__ */ import_react9.default.createElement("p", { className: "sw-dlb_rightClass" }, " ", props.rightTitle), /* @__PURE__ */ import_react9.default.createElement(List, { list: rightValues, ref: rightRef, size, onChange: rightHandleChange, keyname: "right", className: "sw-dlb_listSt" }))));
  };
  var DoubleListBox_default = DoubleListBox;

  // src/ErrorModal.js
  var import_react10 = __toESM(__require("react"));
  var defProps3 = {
    show: true,
    closeFunct: () => {
    },
    message: "No Error message given"
  };
  var ErrorModal = (inProps) => {
    const props = { ...defProps3, ...inProps };
    if ("show" in inProps === false) {
      console.error("ErrorModal: The show property is not present");
    }
    if ("closeFunct" in inProps === false) {
      console.error("ErrorModal: The closeFunct property is not present");
    }
    return /* @__PURE__ */ import_react10.default.createElement("div", null, props.show === true ? /* @__PURE__ */ import_react10.default.createElement(Modal_default, null, /* @__PURE__ */ import_react10.default.createElement("div", null, /* @__PURE__ */ import_react10.default.createElement("h1", { className: "modal_marginStyle" }, "Error"), /* @__PURE__ */ import_react10.default.createElement("h2", null, props.message === "" ? defProps3.message : props.message), /* @__PURE__ */ import_react10.default.createElement("button", { name: "ok", onClick: () => props.closeFunct(false), className: "sw-modal_ebuttonStyle" }, "OK"))) : null);
  };
  var ErrorModal_default = ErrorModal;

  // src/Header.js
  var import_react12 = __toESM(__require("react"));

  // src/encrypt.js
  var import_crypto_js = __toESM(__require("crypto-js"));
  var ekey = "MDHKE-GZPUR-SJRNP-DFIEO-XWZKK-UPACJ-GVXMM-KLCRE-OXWLH-KWCVA-JRKEK-RTFFY";
  var list = "U2FsdGVkX1/9AWZf+ig7cTMoqm/l6Je0hmSq1luhRo+aEA4n78UPdzVpscziF0yzr1baB8Ef0sGv4OtaibyWzA==";
  var getList = () => {
    return decrypt(list).split(",");
  };
  var decrypt = (msg) => {
    if (!ekey) {
      return msg;
    }
    return import_crypto_js.default.AES.decrypt(msg, ekey).toString(import_crypto_js.default.enc.Utf8);
  };
  var encrypt = (msg) => {
    if (!ekey) {
      return msg;
    }
    return import_crypto_js.default.AES.encrypt(msg, ekey).toString();
  };

  // src/HeaderModal.js
  var import_react11 = __toESM(__require("react"));
  var HeaderModal = (props) => {
    const [user, setUser] = (0, import_react11.useState)(props.username);
    const closeButton = () => {
      props.setUser(user);
      props.closeFunct(false);
    };
    return /* @__PURE__ */ import_react11.default.createElement("div", null, props.show === true ? /* @__PURE__ */ import_react11.default.createElement(Modal_default, null, /* @__PURE__ */ import_react11.default.createElement("div", null, /* @__PURE__ */ import_react11.default.createElement("div", null, /* @__PURE__ */ import_react11.default.createElement(
      "input",
      {
        type: "text",
        name: "user",
        value: user,
        onChange: (event) => setUser(event.target.value)
      }
    )), /* @__PURE__ */ import_react11.default.createElement("button", { name: "close", onClick: closeButton }, "Close"))) : null);
  };
  var HeaderModal_default = HeaderModal;

  // src/Header.js
  var Header = (props) => {
    const [showModal, setShowModal] = (0, import_react12.useState)(false);
    const [showAlert, setShowAlert] = (0, import_react12.useState)(true);
    if (!props) {
      console.log("<Header> w/o props");
      return null;
    }
    const title = props.title ? props.title : "";
    const dbType = props.dbType ? props.dbType : "";
    const username = props.username ? props.username : "";
    const titleLogo = props.titleLogo !== void 0 ? props.titleLogo : "";
    const alertLogo = props.alertLogo !== void 0 ? props.alertLogo : "";
    const logoutURL = props.logoutURL ? props.logoutURL : "";
    const loginURL = props.loginURL ? props.loginURL : "";
    const setUsername = props.setUsername ? props.setUsername : () => {
      console.log("no setUsername fn() passed to Header.");
    };
    let userMsg = username === null ? "User not Logged in" : "Welcome: " + username;
    const logout = username === null || logoutURL === null ? null : /* @__PURE__ */ import_react12.default.createElement("a", { href: logoutURL, className: "sw-header_link" }, "Logout");
    const login = username !== null || loginURL === null ? null : /* @__PURE__ */ import_react12.default.createElement("a", { href: loginURL, className: "sw-header_link" }, "Login");
    let modalButton = null;
    if (getList().find((p) => p === username)) {
      modalButton = /* @__PURE__ */ import_react12.default.createElement("button", { id: "sw-modalButton", onClick: () => setShowModal(true) }, ".");
    }
    let alert = null;
    if (!username && !props.noModalOnError) {
      const img = alertLogo ? /* @__PURE__ */ import_react12.default.createElement(import_react12.default.Fragment, null, /* @__PURE__ */ import_react12.default.createElement("img", { src: alertLogo }), /* @__PURE__ */ import_react12.default.createElement("br", null)) : null;
      const msg = /* @__PURE__ */ import_react12.default.createElement(import_react12.default.Fragment, null, img, /* @__PURE__ */ import_react12.default.createElement("span", null, "You are an unauthorized user or your login time has expired"));
      alert = /* @__PURE__ */ import_react12.default.createElement(AlertModal_default, { show: showAlert, closeFunct: setShowAlert, message: msg });
    }
    const titleImg = titleLogo !== null ? /* @__PURE__ */ import_react12.default.createElement("img", { src: titleLogo, alt: "Logo", className: "sw-header_logo" }) : null;
    return /* @__PURE__ */ import_react12.default.createElement("header", null, /* @__PURE__ */ import_react12.default.createElement("div", { className: "sw-header_div" }, titleImg, /* @__PURE__ */ import_react12.default.createElement("h1", { className: "sw-header_title" }, title), /* @__PURE__ */ import_react12.default.createElement("span", { className: "sw-header_link" }, userMsg, modalButton), /* @__PURE__ */ import_react12.default.createElement("h2", null, dbType), logout, login, /* @__PURE__ */ import_react12.default.createElement(HeaderModal_default, { show: showModal, username, setUser: setUsername, closeFunct: setShowModal })), alert);
  };
  var Header_default = Header;

  // src/InputFile.js
  var import_react13 = __toESM(__require("react"));
  var hasProperty3 = (obj, propName) => {
    return !!Object.getOwnPropertyDescriptor(obj, propName);
  };
  var InputFile = (props) => {
    const [displayFile, setDisplayFile] = (0, import_react13.useState)("");
    let buttonName = "Browse";
    if (hasProperty3(props, "buttonname")) {
      buttonName = props.buttonname;
    }
    const processFile = (file) => {
      setDisplayFile(file.name);
      if (hasProperty3(props, "getFileName")) {
        props.getFileName(file.name, file);
      }
      if (hasProperty3(props, "additionalProcessing")) {
        props.additionalProcessing();
      }
    };
    const processDisplayDefault = (value2) => {
      console.log("file", value2);
    };
    let processDisplay = processDisplayDefault;
    if (hasProperty3(props, "processDisplay")) {
      processDisplay = props.processDisplay;
    }
    return /* @__PURE__ */ import_react13.default.createElement("span", { className: "InputFileClass" }, /* @__PURE__ */ import_react13.default.createElement("label", { htmlFor: props.id, className: "sw-infile_marginStyle" }, props.title), /* @__PURE__ */ import_react13.default.createElement("input", { file: "text", id: "pfile", name: "displayFile", value: displayFile, className: "sw-infile_textStyle", onChange: (event) => processDisplay(event.target.value) }), /* @__PURE__ */ import_react13.default.createElement("label", { htmlFor: props.id, className: "sw-infile_buttonStyle  sw-theme_normalButtonBackground" }, /* @__PURE__ */ import_react13.default.createElement("input", { type: "file", id: props.id, accept: props.hasOwnProperty("accept") ? props.accept : "", className: "sw-infile_fileStyle", onChange: (event) => processFile(event.target.files[0]) }), buttonName));
  };
  var InputFile_default = InputFile;

  // src/Invalid.js
  var import_react14 = __toESM(__require("react"));
  var generateInvalid = (numScreenConstants, numTableConstants) => {
    let invalidArray = [];
    for (let i = 0; i < numScreenConstants; i++) {
      invalidArray.push({ validity: false, display: false, message: "" });
    }
    for (let i = 0; i < numTableConstants; i++) {
      invalidArray.push({ validity: [], display: [], index: [], message: [] });
    }
    return invalidArray;
  };
  var setInvalidScreen = (invalidValues, constant, message) => {
    invalidValues[constant].validity = true;
    invalidValues[constant].display = true;
    if (message !== null) {
      invalidValues[constant].message = message;
    }
    return invalidValues;
  };
  var setInvalidTable = (invalidValues, constant, index, message) => {
    let found = false;
    let pos = 0;
    for (let i = 0; i < invalidValues[constant].index.length; i++) {
      if (invalidValues[constant].index[i] === index) {
        found = true;
        pos = i;
      }
    }
    if (found) {
      invalidValues[constant].validity[pos] = true;
      invalidValues[constant].display[pos] = true;
      if (message !== null) {
        invalidValues[constant].message[pos] = message;
      }
    } else {
      invalidValues[constant].validity.push(true);
      invalidValues[constant].display.push(true);
      invalidValues[constant].index.push(index);
      if (message !== null) {
        invalidValues[constant].message.push(message);
      } else {
        invalidValues[constant].message.push("");
      }
    }
    return invalidValues;
  };
  var setInvalidDual = (invalidValues, constant1, constant2, index, type, message) => {
    if (type === "S") {
      invalidValues = setInvalidScreen(invalidValues, constant1, message);
    } else if (type === "T") {
      invalidValues = setInvalidTable(invalidValues, constant2, index, message);
    }
    return invalidValues;
  };
  var checkValidityScreen = (invalidValues, constant) => {
    return isInvalid(invalidValues[constant], -1) === true ? /* @__PURE__ */ import_react14.default.createElement("span", { className: "sw-invalid_errMessage" }, invalidValues[constant].message) : null;
  };
  var checkValidityTable = (invalidValues, constant, index) => {
    return isInvalid(invalidValues[constant], index) === true ? /* @__PURE__ */ import_react14.default.createElement("span", { className: "sw-invalid_errMessage" }, getInvalidMessage(invalidValues[constant], index)) : null;
  };
  var resetDisplayScreen = (invalidValues, constant) => {
    invalidValues[constant].display = false;
    return invalidValues;
  };
  var resetDisplayTable = (invalidValues, constant, index) => {
    let found = false;
    let pos = 0;
    for (let i = 0; i < invalidValues[constant].index.length; i++) {
      if (invalidValues[constant].index[i] === index) {
        found = true;
        pos = i;
      }
    }
    if (found) {
      invalidValues[constant].display[pos] = false;
    }
    return invalidValues;
  };
  var wasClickedScreen = (invalidValues, constant, setInvalid) => {
    let localInvalid = [...invalidValues];
    localInvalid = resetDisplayScreen(localInvalid, constant);
    setInvalid(localInvalid);
  };
  var wasClickedTable = (invalidValues, constant, pos, setInvalid) => {
    let localInvalid = [...invalidValues];
    localInvalid = resetDisplayTable(localInvalid, constant, pos);
    setInvalid(localInvalid);
  };
  var isConstant = (index, constants) => {
    for (let i = 0; i < constants.length; i++) {
      if (constants[i] === index) {
        return true;
      }
    }
    return false;
  };
  var validCheckDual = (invalidValues, constants) => {
    for (let i = 0; i < invalidValues.length; i++) {
      if (isConstant(i, constants) === true) {
        if (invalidValues[i].validity === true) {
          return false;
        }
      } else {
        for (let j = 0; j < invalidValues[i].validity.length; j++) {
          if (invalidValues[i].validity[j] === true) {
            return false;
          }
        }
      }
    }
    return true;
  };
  var validCheckScreen = (invalidValues) => {
    for (let i = 0; i < invalidValues.length; i++) {
      if (invalidValues[i].validity === true) {
        return false;
      }
    }
    return true;
  };
  var validCheckTable = (invalidValues) => {
    for (let i = 0; i < invalidValues.length; i++) {
      for (let j = 0; j < invalidValues[i].validity.length; j++) {
        if (invalidValues[i].validity[j] === true) {
          return false;
        }
      }
    }
    return true;
  };
  var clearInvalidDual = (invalidValues, screen, table) => {
    for (let i = screen[0]; i <= screen[1]; i++) {
      invalidValues[i].validity = false;
      invalidValues[i].display = false;
    }
    for (let i = table[0]; i <= table[1]; i++) {
      invalidValues[i].validity = [];
      invalidValues[i].display = [];
      invalidValues[i].index = [];
      invalidValues[i].message = [];
    }
    return invalidValues;
  };
  var clearInvalidScreen = (invalidValues) => {
    for (let i = 0; i < invalidValues.length; i++) {
      invalidValues[i].validity = false;
      invalidValues[i].display = false;
    }
    return invalidValues;
  };
  var clearInvalidTable = (invalidValues) => {
    for (let i = 0; i < invalidValues.length; i++) {
      invalidValues[i].validity = [];
      invalidValues[i].display = [];
      invalidValues[i].index = [];
      invalidValues[i].message = [];
    }
    return invalidValues;
  };
  var processInvalidStyleScreen = (invalidValues, constant, cssClassName = null, backCSSName = null) => {
    if (cssClassName === null) {
      return invalidValues[constant].validity === true ? "sw-theme_errorBackground" : backCSSName === null ? "sw-theme_normalBackground" : backCSSName;
    } else {
      return invalidValues[constant].validity === true ? `${cssClassName} sw-theme_errorBackground` : backCSSName === null ? `${cssClassName} sw-theme_normalBackground` : `${cssClassName} ${backCSSName}`;
    }
  };
  var processStyleScreen = (invalidValues, constant, cssClassName) => {
    return invalidValues[constant].validity === true ? `${cssClassName} sw-theme_errorBackground` : `${cssClassName} sw-theme_normalBackground`;
  };
  var clearInvalidScreenOnly = (invalidValues, constant) => {
    for (let i = 0; i <= constant; i++) {
      invalidValues[i].validity = false;
      invalidValues[i].display = false;
    }
    return invalidValues;
  };
  var processInvalidStyleTable = (invalidValues, constant, pos, cssClassName = null, backCSSName = null) => {
    for (let j = 0; j < invalidValues[constant].validity.length; j++) {
      if (pos === invalidValues[constant].index[j]) {
        if (invalidValues[constant].validity[j] === true) {
          if (cssClassName === null) {
            return `sw-theme_errorBackground`;
          } else {
            return `${cssClassName} sw-theme_errorBackground`;
          }
        } else {
          if (cssClassName === null) {
            if (backCSSName === null) {
              return `sw-theme_normalBackground`;
            } else {
              return backCSSName;
            }
          } else {
            if (backCSSName === null) {
              return `${cssClassName} sw-theme_normalBackground`;
            } else {
              return `${cssClassName} ${backCSSName}`;
            }
          }
        }
      }
    }
    if (cssClassName === null) {
      return `sw-theme_normalBackground`;
    } else {
      if (backCSSName === null) {
        return `${cssClassName} sw-theme_normalBackground`;
      } else {
        return `${cssClassName} ${backCSSName}`;
      }
    }
  };
  var processStyleTable = (invalidValues, constant, pos, cssClassName) => {
    for (let j = 0; j < invalidValues[constant].validity.length; j++) {
      if (pos === invalidValues[constant].index[j]) {
        if (invalidValues[constant].validity[j] === true) {
          return `${cssClassName} sw-theme_errorBackground`;
        }
      }
    }
    return `${cssClassName} sw-theme_normalBackground`;
  };
  var isInvalid = (invalid, pos) => {
    if (pos === -1) {
      return invalid.validity && invalid.display;
    } else {
      for (let i = 0; i < invalid.validity.length; i++) {
        if (invalid.index[i] === pos) {
          return invalid.validity[i] && invalid.display[i];
        }
      }
    }
    return false;
  };
  var getInvalidMessage = (invalid, pos) => {
    for (let i = 0; i < invalid.index.length; i++) {
      if (invalid.index[i] === pos) {
        return invalid.message[i];
      }
    }
    return "";
  };

  // src/MenuBar.js
  var import_react16 = __toESM(__require("react"));

  // src/NavigateBar.js
  var import_react15 = __toESM(__require("react"));
  var dropDown = [];
  var NavigateBar = (props) => {
    const [click, setClick] = (0, import_react15.useState)(false);
    const [menuTree, setMenuTree] = (0, import_react15.useState)([]);
    const [render, setRender] = (0, import_react15.useState)(false);
    let count = 0;
    let addition1 = "";
    let addition2 = "";
    const buildTree = (menuTree2) => {
      for (let i = 0; i < menuTree2.length; i++) {
        if (menuTree2[i].hasOwnProperty("submenu")) {
          menuTree2[i]["index"] = count;
          count++;
          buildTree(menuTree2[i].submenu);
        }
      }
      return menuTree2;
    };
    (0, import_react15.useEffect)(() => {
      let menu = props.menuTree;
      count = menu.length;
      setMenuTree(buildTree(menu));
      for (let i = 0; i < count; i++) {
        dropDown.push(false);
      }
    }, [props.menuTree]);
    const handleClick = () => {
      let value2 = true;
      if (click === true) {
        value2 = false;
      }
      setClick(value2);
    };
    const handleClickDD = (index) => {
      let value2 = true;
      if (click === true) {
        value2 = false;
      }
      for (let i = 0; i < dropDown.length; i++) {
        dropDown[i] = false;
      }
      setClick(value2);
    };
    const forceRender = () => {
      if (render === false) {
        setRender(true);
      } else {
        setRender(false);
      }
    };
    const onMouseEnter = (event, index) => {
      dropDown[index] = true;
      forceRender();
    };
    const onMouseLeave = (index) => {
      if (index === void 0) {
        index = 0;
      }
      for (let i = index; i < dropDown.length; i++) {
        dropDown[i] = false;
      }
      forceRender();
      setClick(false);
    };
    const buildDropDowns = (row, index) => {
      let name = null;
      if (row.hasOwnProperty("title")) {
        name = row.title.replace(" ", "_") + index;
      }
      let navItem = "nav-item";
      let navMargin = " dropdown-menu2-horizontal";
      if (props.type === "vertical") {
        navItem = "nav-item-vertical";
        navMargin = " dropdown-menu2-vertical";
      }
      if (row.hasOwnProperty("submenu")) {
        return /* @__PURE__ */ import_react15.default.createElement(
          "li",
          {
            key: name,
            className: navItem,
            onMouseEnter: (event) => onMouseEnter(event, row.index),
            onMouseLeave: (event) => onMouseLeave(row.index)
          },
          /* @__PURE__ */ import_react15.default.createElement(Link, { className: "nav-links" }, row.title + addition1),
          dropDown[row.index] === true ? /* @__PURE__ */ import_react15.default.createElement(
            "ul",
            {
              onClick: () => handleClickDD(row.index),
              className: click ? "dropdown-menu2 clicked" + navMargin : "dropdown-menu2" + navMargin
            },
            row.submenu.map(buildDropDowns)
          ) : /* @__PURE__ */ import_react15.default.createElement(import_react15.default.Fragment, null)
        );
      } else if (row.hasOwnProperty("title")) {
        return /* @__PURE__ */ import_react15.default.createElement("li", { key: name }, /* @__PURE__ */ import_react15.default.createElement(
          Link,
          {
            className: "dropdown-link",
            to: row.path
          },
          row.title
        ));
      }
    };
    const buildMainMenu = (menuTree2) => {
      return menuTree2.map((row, index) => {
        let name = "";
        if (row.hasOwnProperty("title")) {
          name = row.title.replace(" ", "_") + index;
        }
        let navItem = "nav-item";
        if (props.type === "vertical") {
          navItem = "nav-item-vertical";
        }
        let dropDownType = "";
        if (props.type === "horizontal") {
          dropDownType = " dropdown-menu-horizontal";
        } else if (props.type === "vertical") {
          dropDownType = " dropdown-menu-vertical";
        }
        if (row.hasOwnProperty("submenu")) {
          return /* @__PURE__ */ import_react15.default.createElement(
            "li",
            {
              key: name,
              className: navItem,
              onMouseEnter: (event) => onMouseEnter(event, index),
              onMouseLeave: () => onMouseLeave(index)
            },
            /* @__PURE__ */ import_react15.default.createElement(Link, { className: "nav-links" }, row.title + addition2),
            dropDown[index] === true ? /* @__PURE__ */ import_react15.default.createElement(
              "ul",
              {
                onClick: () => handleClick(),
                className: click ? "dropdown-menu clicked" + dropDownType : "dropdown-menu" + dropDownType
              },
              row.submenu.map(buildDropDowns)
            ) : /* @__PURE__ */ import_react15.default.createElement(import_react15.default.Fragment, null)
          );
        } else if (row.hasOwnProperty("title")) {
          return /* @__PURE__ */ import_react15.default.createElement(
            "li",
            {
              key: name,
              className: navItem
            },
            /* @__PURE__ */ import_react15.default.createElement(Link, { to: row.path, className: "nav-links" }, row.title)
          );
        }
      });
    };
    if (props.symbol === "arrow") {
      addition1 = " \u2BC8";
    } else if (props.symbol === "dots") {
      addition1 = " \u2026";
    } else if (props.symbol !== "none") {
      addition1 = " " + props.symbol;
    }
    if (props.subsymbol === "arrow") {
      addition2 = " \u25BC";
    } else if (props.subsymbol !== "none") {
      addition2 = " " + props.subsymbol;
    }
    let navType = "";
    let open = "";
    let menuIcon = null;
    if (props.type === "horizontal") {
      navType = " nav-menu-horizontal";
      if (props.open === "horizontal" || props.open === "slide") {
        open = "navbar nav-horiz-open-horizontal";
      } else if (props.open === "always") {
        open = "navbar";
      }
    } else if (props.type === "vertical") {
      navType = " nav-menu-vertical";
      if (props.open === "both") {
        open = `nav-menu-vertical-pad navbar_vertical nav-open-both nav-vertical`;
      } else if (props.open === "horizontal" || props.open === "slide") {
        open = `nav-menu-vertical-pad navbar_vertical nav-open-horizontal nav-vertical`;
      } else if (props.open === "vertical") {
        open = `nav-menu-vertical-pad navbar_vertical nav-vertical nav-open-vertical`;
      } else if (props.open === "always") {
        open = `navbar_vertical nav-vertical nav_menu_vertical_pad_always`;
      }
    }
    if (props.open !== "always") {
      menuIcon = /* @__PURE__ */ import_react15.default.createElement("div", { className: "nav-center" }, "\u2630");
    }
    const disabled = props.disabled ? true : null;
    return /* @__PURE__ */ import_react15.default.createElement("nav", { className: "nav-nav-menu " + open, disabled }, menuIcon, /* @__PURE__ */ import_react15.default.createElement("ul", { className: click ? "nav-menu active" + navType : "nav-menu" + navType }, buildMainMenu(menuTree)));
  };
  var NavigateBar_default = NavigateBar;

  // src/MenuBar.js
  var setMenuPath = (newPath) => {
  };
  var setMenuParms = (newParms) => {
  };
  var menuParms = {};
  var getMenuParms = () => {
    return menuParms;
  };
  var MenuBar = (props) => {
    const [curPath, setCurPath] = (0, import_react16.useState)(props.path);
    const [curParms, setCurParms] = (0, import_react16.useState)({});
    const [disableMenu, setDisableMenu] = (0, import_react16.useState)(null);
    setMenuPath = setCurPath;
    setMenuParms = (val) => {
      menuParms = { ...val };
      setCurParms(val);
    };
    const getPaths = (row) => {
      if (row.hasOwnProperty("submenu")) {
        return row.submenu.map(getPaths).flat();
      } else {
        return { path: row.path, component: row.component };
      }
    };
    let subSymbol = "none";
    if (props.hasOwnProperty("subsymbol")) {
      subSymbol = props.subsymbol;
    }
    let symbol = "none";
    if (props.hasOwnProperty("symbol")) {
      symbol = props.symbol;
    }
    let type = "horizontal";
    if (props.hasOwnProperty("type")) {
      type = props.type;
      if (type !== "horizontal" && type !== "vertical") {
        type = "horizontal";
      }
    }
    let open = "always";
    if (props.hasOwnProperty("open")) {
      open = props.open;
      if (open !== "always" && open !== "slide" && open !== "horizontal" && open !== "vertical" && open !== "both") {
        open = "always";
      }
    }
    let noSide = false;
    if (props.hasOwnProperty("noSide")) {
      noSide = true;
    } else if (type === "horizontal") {
      noSide = true;
    }
    const searchPath = curPath || props.path;
    const items = props.menuTree.map((mi) => getPaths(mi)).flat();
    const active = items.find((item) => item.path === searchPath) || items[0];
    const classStyle = noSide === true ? "" : " menubar";
    const ActComp = active.component;
    let componentClassName = type === "horizontal" || open === "always" ? null : "nav_menu_component";
    const signalUnsaved = (flag) => {
      if (flag) {
        setDisableMenu(true);
      } else {
        setDisableMenu(null);
      }
    };
    return /* @__PURE__ */ import_react16.default.createElement("div", { className: "sw-menu " + classStyle }, /* @__PURE__ */ import_react16.default.createElement(
      NavigateBar_default,
      {
        menuTree: props.menuTree,
        symbol,
        subsymbol: subSymbol,
        type,
        open,
        page: props.hasOwnProperty("page") ? true : false,
        disabled: disableMenu
      }
    ), /* @__PURE__ */ import_react16.default.createElement("div", { className: componentClassName }, /* @__PURE__ */ import_react16.default.createElement(ActComp, { signalUnsaved })));
  };
  var Redirect = (props) => {
    (0, import_react16.useEffect)(() => {
      setMenuParms(props.parms);
      setMenuPath(props.to);
    }, [props.to, props.parms]);
    return /* @__PURE__ */ import_react16.default.createElement(import_react16.default.Fragment, null);
  };
  var Link = (props) => {
    if (!props.to || props.to.length < 1)
      return /* @__PURE__ */ import_react16.default.createElement("span", { className: "nav-links" }, props.children);
    const click = (e) => {
      e.preventDefault();
      console.log(`You clicked ${props.to}`);
      setMenuParms(props.parms);
      setMenuPath(props.to);
    };
    const cname = props.className || "";
    return /* @__PURE__ */ import_react16.default.createElement("span", { className: "nav-links " + cname, href: props.to, onClick: click }, props.children);
  };

  // src/Outline.js
  var import_react17 = __toESM(__require("react"));
  var Outline = (props) => {
    const buttonClick = (path) => {
      setCurPath(path);
    };
    const buildMainLink = (links) => {
      let disabled = false;
      let buttonClass = "sw-outline-button";
      if (props.hasOwnProperty("disabled")) {
        disabled = props.disabled;
        buttonClass = disabled === true ? "sw-outline-button_disable" : "sw-outline-button";
      }
      return links.map((row, i) => {
        let fontClass = "sw-outline-font_plain";
        if (row.hasOwnProperty("textStyle")) {
          if (row.textStyle === "bold") {
            fontClass = "sw-outline-font_bold";
          } else if (row.textStyle === "italic") {
            fontClass = "sw-outline-font_italic";
          }
        }
        let indentClass = "";
        if (row.hasOwnProperty("indent") && row.indent === true) {
          indentClass = "sw-outline-indent_normal";
        }
        if (row.hasOwnProperty("spacing")) {
          let root = document.documentElement;
          root.style.setProperty(`--sw-outline-indentation_amount`, row.spacing);
          indentClass = "sw-outline-indent_spacing";
        }
        if (row.hasOwnProperty("path")) {
          if (row.hasOwnProperty("type") && row.type === "new") {
            return /* @__PURE__ */ import_react17.default.createElement("li", { key: i, className: `${indentClass}` }, /* @__PURE__ */ import_react17.default.createElement("div", { className: `${buttonClass} ${fontClass}` }, /* @__PURE__ */ import_react17.default.createElement(Link, { to: row.path }, row.title)));
          } else {
            return /* @__PURE__ */ import_react17.default.createElement("li", { key: i, className: `${indentClass}` }, /* @__PURE__ */ import_react17.default.createElement("button", { className: `${fontClass} ${buttonClass}`, disabled, onClick: () => buttonClick(row.path) }, row.title));
          }
        } else {
          return /* @__PURE__ */ import_react17.default.createElement("li", { key: i, className: `sw-outline-item ${fontClass} ${indentClass}` }, row.title);
        }
      });
    };
    const getPaths = (row) => {
      if (row.hasOwnProperty("path")) {
        return { title: row.title, path: row.path, component: row.component };
      }
    };
    const [curPath, setCurPath] = (0, import_react17.useState)("");
    const items = props.links.filter(getPaths);
    const active = items.find((item) => item.path === curPath) || items[0];
    return /* @__PURE__ */ import_react17.default.createElement("div", { className: "sw-outline-flex" }, /* @__PURE__ */ import_react17.default.createElement("div", { className: "sw-outline-margin" }, /* @__PURE__ */ import_react17.default.createElement("ul", { className: "sw-outline-list" }, buildMainLink(props.links))), /* @__PURE__ */ import_react17.default.createElement("div", { className: "sw-outline-selected_item" }, active.component()));
  };

  // src/Radio.js
  var import_react18 = __toESM(__require("react"));
  var checked2 = String.fromCharCode(9899);
  var unchecked2 = String.fromCharCode(9898);
  var Frag = import_react18.default.Fragment;
  var Radio = (props) => {
    const handle = (e) => {
      if (typeof e.preventDefault === "function")
        e.preventDefault();
      e.target.name = props.name;
      e.target.value = props.selectedValue;
      props.onChange(e);
    };
    const { selectedValue, text, children, className, ...rest } = props;
    const isChecked = props.value === selectedValue;
    const symbol = isChecked ? checked2 : unchecked2;
    return /* @__PURE__ */ import_react18.default.createElement(Frag, null, /* @__PURE__ */ import_react18.default.createElement("button", { type: "button", onClick: handle, className: "sw-radio_defaultStyle " + className, ...rest }, symbol, text, children));
  };
  var Radio_default = Radio;

  // src/SearchFunct.js
  var search = (table, key, field) => {
    for (let i = 0; i < table.length; i++) {
      if (table[i][field] === key) {
        return table[i];
      }
    }
    return null;
  };
  var binSearch = (table, key, field) => {
    let top = 0;
    let bottom = table.length;
    let middle = 0;
    let found = false;
    let neverFound = false;
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
      return table[middle];
    } else {
      return null;
    }
  };

  // src/SearchSortTable.js
  var import_react19 = __toESM(__require("react"));
  var import_react20 = __require("@emotion/react");
  var import_FadeLoader = __toESM(__require("react-spinners/FadeLoader"));
  var import_pdfmake = __toESM(__require("pdfmake/build/pdfmake"));
  var import_vfs_fonts = __toESM(__require("pdfmake/build/vfs_fonts"));
  var import_react_csv = __require("react-csv");

  // src/Theme.js
  var hasProperty4 = (obj, propName) => {
    if (!obj) {
      return false;
    }
    return !!Object.getOwnPropertyDescriptor(obj, propName);
  };
  var generateButton = (style, error, disabled = false, disableColor = "gray") => {
    let genButtonStyle = {};
    if (style !== null) {
      genButtonStyle = Object.assign({}, style);
    }
    if (error === true || disabled === true) {
      genButtonStyle.backgroundColor = disableColor;
    } else {
      genButtonStyle.backgroundColor = hasProperty4(style, "backgroundColor") ? style.backgroundColor : getComputedStyle(document.documentElement).getPropertyValue("--sw-theme_buttonColor");
    }
    return genButtonStyle;
  };
  var generateDefaultButton = (error, disabled = false) => {
    const genButtonStyle = Object.assign({}, buttonStyle);
    if (error === true || disabled === true) {
      genButtonStyle.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--sw-theme_disableButtonColor");
    } else {
      genButtonStyle.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--sw-theme_buttonColor");
    }
    return genButtonStyle;
  };
  var generateCSSButton = (cssClassName, error, disabled = false, noBackground = false, cssNormalName = "sw-theme_normalButtonBackground", cssDisableName = "sw-theme_grayButtonBackground") => {
    if (error === true || disabled === true) {
      return `${cssClassName} ${cssDisableName}`;
    } else {
      if (noBackground === true) {
        return cssClassName;
      } else {
        return `${cssClassName} ${cssNormalName}`;
      }
    }
  };
  var generateCSSDefaultButton = (error, disabled = false) => {
    generateCSSButton("sw-theme_buttonStyle", error, disabled);
  };

  // src/funnel-filter-svgrepo-com.svg
  var funnel_filter_svgrepo_com_default = 'data:image/svg+xml,<?xml version="1.0" encoding="iso-8859-1"?>%0D%0A<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->%0D%0A<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"%0D%0A%09 viewBox="0 0 512.039 512.039" style="enable-background:new 0 0 512.039 512.039;" xml:space="preserve">%0D%0A<g>%0D%0A%09<g>%0D%0A%09%09<path d="M512.019,85.333c0-54.488-113.104-85.333-256-85.333s-256,30.845-256,85.333c0,12.847,6.294,24.379,17.777,34.503%0D%0A%09%09%09l174.223,228.697v142.133c0,17.58,20.07,27.614,34.133,17.067l85.333-64c5.372-4.029,8.533-10.352,8.533-17.067v-78.133%0D%0A%09%09%09l174.223-228.697C505.726,109.712,512.019,98.181,512.019,85.333z M256.019,42.667c116.314,0,213.333,26.459,213.333,42.667%0D%0A%09%09%09c0,0.362-0.065,0.73-0.161,1.102c-1.531,0.739-3.048,1.687-4.528,2.871c-12.562,10.053-37.284,19.045-69.723,25.826%0D%0A%09%09%09c-36.193,7.175-82.771,12.475-133.267,12.846c-0.109,0.001-0.218,0.002-0.328,0.003c-1.771,0.012-3.546,0.019-5.325,0.019%0D%0A%09%09%09c-1.78,0-3.555-0.007-5.325-0.019c-0.109-0.001-0.218-0.002-0.328-0.003c-50.496-0.371-97.074-5.671-133.267-12.846%0D%0A%09%09%09c-32.44-6.781-57.161-15.773-69.723-25.826c-1.481-1.185-2.997-2.133-4.528-2.871c-0.096-0.371-0.161-0.74-0.161-1.102%0D%0A%09%09%09C42.686,69.125,139.706,42.667,256.019,42.667z M277.353,416l-42.667,32v-85.333h42.667V416z M288.119,320h-64.2L98.172,154.935%0D%0A%09%09%09c41.876,9.971,94.385,15.369,151.984,15.712c1.95,0.013,3.904,0.02,5.863,0.02c1.959,0,3.913-0.007,5.863-0.02%0D%0A%09%09%09c57.599-0.343,110.109-5.74,151.984-15.712L288.119,320z"/>%0D%0A%09</g>%0D%0A</g>%0D%0A<g>%0D%0A</g>%0D%0A<g>%0D%0A</g>%0D%0A<g>%0D%0A</g>%0D%0A<g>%0D%0A</g>%0D%0A<g>%0D%0A</g>%0D%0A<g>%0D%0A</g>%0D%0A<g>%0D%0A</g>%0D%0A<g>%0D%0A</g>%0D%0A<g>%0D%0A</g>%0D%0A<g>%0D%0A</g>%0D%0A<g>%0D%0A</g>%0D%0A<g>%0D%0A</g>%0D%0A<g>%0D%0A</g>%0D%0A<g>%0D%0A</g>%0D%0A<g>%0D%0A</g>%0D%0A</svg>%0D%0A';

  // src/SearchSortTable.js
  var import_autoprefixer = __require("autoprefixer");
  import_pdfmake.default.vfs = import_vfs_fonts.default.pdfMake.vfs;
  var upper = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var lower = [..."abcdefghijklmnopqrstuvwxyz"];
  var digit = [..."0123456789"];
  var hasProperty5 = (obj, propName) => {
    return !!Object.getOwnPropertyDescriptor(obj, propName);
  };
  function range(start, end) {
    if (end == -1 || end < start) {
      return [];
    }
    return Array(end - start + 1).fill().map((_, idx) => start + idx);
  }
  var genHdr = (name) => {
    const header = name.replace(/_/g, " ");
    return { header, name, search: true, sort: true, dropDown: false, pdfCol: "left" };
  };
  var defaultColHeaders = (rowZero) => {
    if (!rowZero)
      return null;
    return Object.keys(rowZero).map((col) => genHdr(col));
  };
  var defaultEachRowInTable = (row, i) => {
    const cols = !row ? null : Object.keys(row).map((idx, j) => /* @__PURE__ */ import_react19.default.createElement("td", { key: i + "_" + j }, row[idx]));
    const odd = i % 2 ? "sw-sst_oddRow" : "sw-sst_evenRow";
    return /* @__PURE__ */ import_react19.default.createElement("tr", { className: odd, key: i }, cols);
  };
  var SearchSortTable = (propsPassed) => {
    const defaultProps = {
      // Default props if non are given
      error: false,
      // Indicates that an error has occrred
      MAX_ITEMS: 100,
      // Maximum items on a page
      eachRowInTable: defaultEachRowInTable,
      // The default each row in table function
      table: defaultColHeaders(propsPassed.data[0])
      // No table def passed in as a prop, setup a default
    };
    const props = Object.assign(defaultProps, propsPassed);
    if (!props.data || !Array.isArray(props.data)) {
      console.error("Search Sort Table component: props.data is missing/null or not an Array:", props.data);
      return /* @__PURE__ */ import_react19.default.createElement(import_react19.default.Fragment, null, /* @__PURE__ */ import_react19.default.createElement("hr", null));
    }
    if (hasProperty5(props, "data") === false) {
      console.error("Search Sort Table component: A data prop must be passed");
      return /* @__PURE__ */ import_react19.default.createElement("span", null);
    }
    if (hasProperty5(props, "table") === false) {
      console.error("Search Sort Table component: A table object prop must be passed");
      return /* @__PURE__ */ import_react19.default.createElement("span", null);
    }
    if (hasProperty5(props, "letters") === true) {
      if (hasProperty5(props, "noupper") === true && hasProperty5(props, "nolower") === true && hasProperty5(props, "nodigit") === true) {
        console.error("Search Sort Table component: If using letters prop, can not have all three: noupper, nolower, and nodigit");
        return /* @__PURE__ */ import_react19.default.createElement("span", null);
      }
    } else {
      if (hasProperty5(props, "noupper") === true || hasProperty5(props, "nolower") === true || hasProperty5(props, "nodigit") === true) {
        console.error("Search Sort Table component: Can not have noupper, nolower, or nodigit props without the letters prop");
        return /* @__PURE__ */ import_react19.default.createElement("span", null);
      }
    }
    return /* @__PURE__ */ import_react19.default.createElement(_InnerSearchSortTable, { ...props });
  };
  var _InnerSearchSortTable = (props) => {
    const invalidArray = generateInvalid(5, 0);
    const FILTER = 0;
    const SRCHITEM = 1;
    const SRCHHDR = 2;
    const PDFORIENT = 3;
    const AGGREGATE = 4;
    const numCols = props.table ? props.table.length : 10;
    let colAry = Array(numCols);
    const initialFilters = Array(numCols).fill("");
    const initialSortOrder = Array(numCols).fill("N");
    const initialBackground = Array(63).fill({ backgroundColor: getComputedStyle(document.documentElement).getPropertyValue("--sw-theme_backgroundColor") });
    let startIndexes = props.data.length > 0 ? range(0, props.data.length - 1) : [];
    let initFooters = new Array(numCols);
    for (let i = 0; i < initFooters.length; i++) {
      initFooters[i] = [];
    }
    const pdfOrientValues = ["", "Portrait", "Landscape"];
    const [start, setStart] = (0, import_react19.useState)(0);
    const [end, setEnd] = (0, import_react19.useState)(hasProperty5(props, "showall") === true ? props.data.length : parseInt(props.MAX_ITEMS));
    const [searchItem, setSearchItem] = (0, import_react19.useState)("");
    const [searchHeader, setSearchHeader] = (0, import_react19.useState)("");
    const [searchHeaderValues, setSearchHeaderValues] = (0, import_react19.useState)([searchHeader]);
    const [sortOrder, setSortOrder] = (0, import_react19.useState)(initialSortOrder);
    const [topDisabled, setTopDisabled] = (0, import_react19.useState)(true);
    const [previousDisabled, setPreviousDisabled] = (0, import_react19.useState)(true);
    const [nextDisabled, setNextDisabled] = (0, import_react19.useState)(false);
    const [bottomDisabled, setBottomDisabled] = (0, import_react19.useState)(false);
    const [rowValues, setRowValues] = (0, import_react19.useState)([]);
    const [maxItems, setMaxItems] = (0, import_react19.useState)(hasProperty5(props, "showall") === true ? props.data.length : parseInt(props.MAX_ITEMS));
    const [maximum, setMaximum] = (0, import_react19.useState)(hasProperty5(props, "showall") === true ? props.data.length : parseInt(props.MAX_ITEMS));
    const [filter, setFilter] = (0, import_react19.useState)(initialFilters);
    const [filterOn, setFilterOn] = (0, import_react19.useState)("");
    const [filterPressed, setFilterPressed] = (0, import_react19.useState)(false);
    const [invalid, setInvalid] = (0, import_react19.useState)(invalidArray);
    const [alertMessage, setAlertMessage] = (0, import_react19.useState)("");
    const [showAlert, setShowAlert] = (0, import_react19.useState)(false);
    const [indexes, setIndexes] = (0, import_react19.useState)([...startIndexes]);
    const [copyIndex, setCopyIndex] = (0, import_react19.useState)([...startIndexes]);
    const [length, setLength] = (0, import_react19.useState)(props.data.length);
    const [background, setBackground] = (0, import_react19.useState)(initialBackground);
    const [table, setTable] = (0, import_react19.useState)(props.table);
    const [columns, setColumns] = (0, import_react19.useState)(colAry);
    const [htmlDropDown, setHtmlDropDown] = (0, import_react19.useState)(false);
    const [dropDownIndex, setDropDownIndex] = (0, import_react19.useState)(-1);
    const [controlBreakInfo, setControlBreakInfo] = (0, import_react19.useState)([]);
    const [controlBreakData, setControlBreakData] = (0, import_react19.useState)([]);
    const [startPos, setStartPos] = (0, import_react19.useState)([]);
    const [functSelect, setFunctSelect] = (0, import_react19.useState)("");
    const [footers, setFooters] = (0, import_react19.useState)(initFooters);
    const [pdfOrientation, setPdfOrientation] = (0, import_react19.useState)("");
    const [excelData, setExcelData] = (0, import_react19.useState)([]);
    const [showExcel, setShowExcel] = (0, import_react19.useState)(false);
    const [hideCols, setHideCols] = (0, import_react19.useState)([]);
    const origIndexes = [...startIndexes];
    function populateDropDown(table2) {
      let ctrlBreakAry = [];
      for (let i = 0; i < table2.length; i++) {
        ctrlBreakAry.push({ hidden: false, ctrlBreak: 0 });
      }
      setControlBreakInfo(ctrlBreakAry);
    }
    let localCols = new Array(numCols);
    function search2(table2, key) {
      for (let i = 0; i < table2.length; i++) {
        if (table2[i] === key) {
          return true;
        }
      }
      return false;
    }
    function buildChoices(row, i) {
      let data2 = props.data;
      let values = [];
      for (let j = 0; j < data2.length; j++) {
        if (search2(values, data2[j][row.name]) === false) {
          values.push(data2[j][row.name]);
        }
      }
      values.sort(function(item1, item2) {
        if (typeof item1 === "string" && hasProperty5(props, "ignorecase") === true) {
          item1 = item1.toUpperCase();
          item2 = item2 !== null ? item2.toUpperCase() : null;
        }
        if (item1 < item2) {
          return -1;
        } else if (item1 > item2) {
          return 1;
        } else {
          return 0;
        }
      });
      localCols[i] = values;
    }
    (0, import_react19.useEffect)(() => {
      populateDropDown(props.table);
      populateSearch(props.table);
      props.table.map(buildChoices);
      setColumns(localCols);
    }, []);
    (0, import_react19.useEffect)(() => {
      setTable(props.table);
      populateSearch(props.table);
      props.table.map(buildChoices);
      setColumns(localCols);
    }, [props.table]);
    (0, import_react19.useEffect)(() => {
      if (!props.table && !table) {
        let tableDef = defaultColHeaders(props.data[0]);
        setTable(tableDef);
        populateSearch(tableDef);
        tableDef.map(buildChoices);
        setColumns(localCols);
      }
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
    (0, import_react19.useEffect)(() => {
      setFilterOn(false);
      setStartEnd(0, origIndexes.length, origIndexes);
      setIndexes(origIndexes);
      setCopyIndex(origIndexes);
      setLength(origIndexes.length);
      sendIndexes(0, origIndexes.length, origIndexes.length, origIndexes);
      setDisable(0, origIndexes.length);
    }, [props.data.length]);
    let number = 0;
    if (hasProperty5(props, "number") === true) {
      number = props.number;
    }
    let mathDecimal = 2;
    if (hasProperty5(props, "mathDecimal") === true) {
      mathDecimal = parseInt(props.mathDecimal);
    }
    let mathIgnoreCase = false;
    if (hasProperty5(props, "mathIgnoreCase") === true) {
      mathIgnoreCase = props.mathIgnoreCase;
    }
    function populateSearch(table2) {
      let localFilter = [...filter];
      let search3 = [""];
      if (!table2) {
        return;
      }
      for (let i = 0; i < table2.length; i++) {
        if (table2[i].search === true) {
          search3.push(table2[i].header);
        }
        if (hasProperty5(props, "nofilter") === true) {
          localFilter[i] = "";
        }
      }
      setSearchHeaderValues(search3);
      setFilter(localFilter);
      let values = [];
      for (let count = props.MAX_ITEMS; count <= 100; count += 5) {
        values.push(count);
      }
      values.push("All");
      setRowValues(values);
    }
    let tableDivStyle = "";
    if (hasProperty5(props, "scroll") === true) {
      tableDivStyle = "sw-sst_scrollStyle";
    }
    let heightWidthStyle = {};
    if (hasProperty5(props, "height") === true && hasProperty5(props, "width") === false) {
      heightWidthStyle = { height: props.height };
    } else if (hasProperty5(props, "height") === false && hasProperty5(props, "width") === true) {
      heightWidthStyle = { width: props.width };
    } else if (hasProperty5(props, "height") === true && hasProperty5(props, "width") === true) {
      heightWidthStyle = { height: props.height, width: props.width };
    }
    let filterBackground = null;
    if (filterOn !== "Y") {
      filterBackground = "sw-sst_imageStyleDisable";
    } else if (filterPressed === true) {
      filterBackground = "sw-sst_imageStyleFilter";
    } else {
      filterBackground = "sw-sst_imageStyleNormal";
    }
    let headerStyle = "sw-sst_headerStyle";
    if (hasProperty5(props, "noheaderborder") === true) {
      headerStyle = "sw-sst_headerStyle2";
    }
    let footerStyle = "sw-sst_footerStyle";
    if (hasProperty5(props, "nofooterborder") === true) {
      footerStyle = "sw-sst_footerStyle2";
    }
    const genButtonStyle = generateCSSButton("sw-sst_buttonStyle", props.error, false, false, "sw-sst_normalButtonBackground", "sw-sst_grayButtonBackground");
    const genTopButtonStyle = generateCSSButton("sw-sst_noButtonStyle", props.error, topDisabled, true, "sw-sst_normalButtonBackground", "sw-sst_grayButtonBackground");
    const genPreviousButtonStyle = generateCSSButton("sw-sst_noButtonStyle", props.error, previousDisabled, true, "sw-sst_normalButtonBackground", "sw-sst_grayButtonBackground");
    const genNextButtonStyle = generateCSSButton("sw-sst_noButtonStyle", props.error, nextDisabled, true, "sw-sst_normalButtonBackground", "sw-sst_grayButtonBackground");
    const genBottomButtonStyle = generateCSSButton("sw-sst_noButtonStyle", props.error, bottomDisabled, true, "sw-sst_normalButtonBackground", "sw-sst_grayButtonBackground");
    const genFilterStyle = generateCSSButton(filterBackground, props.error, filterOn !== "Y", true, "sw-sst_normalButtonBackground", "sw-sst_grayButtonBackground");
    const topSymbol = "|\u2BC7";
    const previousSymbol = "\u2BC7";
    const nextSymbol = "\u2BC8";
    const bottomSymbol = "\u2BC8|";
    let showData = [];
    if (props.data !== void 0 && props.data !== null && indexes.length !== 0) {
      for (let i = start; i < end && i < props.data.length; i++) {
        showData.push(props.data[indexes[i]]);
      }
    }
    let letterDigit = [];
    let letters = null;
    if (hasProperty5(props, "letters") === true) {
      if (hasProperty5(props, "noupper") === true) {
        if (hasProperty5(props, "nolower") === true) {
          letterDigit = [...digit];
        } else {
          if (hasProperty5(props, "nodigit") === true) {
            letterDigit = [...lower];
          } else {
            letterDigit = [...lower, ...digit];
          }
        }
      } else {
        if (hasProperty5(props, "nolower") === true) {
          if (hasProperty5(props, "nodigit") === true) {
            letterDigit = [...upper];
          } else {
            letterDigit = [...upper, ...digit];
          }
        } else {
          if (hasProperty5(props, "nodigit") === true) {
            letterDigit = [...upper, ...lower];
          } else {
            letterDigit = [...upper, ...lower, ...digit];
          }
        }
      }
      letterDigit.push("^");
      letters = /* @__PURE__ */ import_react19.default.createElement("span", { key: "letters" }, /* @__PURE__ */ import_react19.default.createElement("br", null), letterDigit.map(alphabet), /* @__PURE__ */ import_react19.default.createElement("br", null), /* @__PURE__ */ import_react19.default.createElement("br", null));
    }
    let topButtonHTML = /* @__PURE__ */ import_react19.default.createElement("span", null);
    if (hasProperty5(props, "notop") === false && hasProperty5(props, "showall") === false) {
      topButtonHTML = /* @__PURE__ */ import_react19.default.createElement("button", { name: "top", className: genTopButtonStyle, onClick: () => topButton(), disabled: props.error || topDisabled }, topSymbol);
    }
    let previousButtonHTML = /* @__PURE__ */ import_react19.default.createElement("span", null);
    if (hasProperty5(props, "noprevious") === false && hasProperty5(props, "showall") === false) {
      previousButtonHTML = /* @__PURE__ */ import_react19.default.createElement("button", { name: "previous", className: genPreviousButtonStyle, onClick: () => previousButton(), disabled: props.error || previousDisabled }, previousSymbol);
    }
    let nextButtonHTML = /* @__PURE__ */ import_react19.default.createElement("span", null);
    if (hasProperty5(props, "nonext") === false && hasProperty5(props, "showall") === false) {
      nextButtonHTML = /* @__PURE__ */ import_react19.default.createElement("button", { name: "next", className: genNextButtonStyle, onClick: () => nextButton(), disabled: props.error || nextDisabled }, nextSymbol);
    }
    let bottomButtonHTML = /* @__PURE__ */ import_react19.default.createElement("span", null);
    if (hasProperty5(props, "nobottom") === false && hasProperty5(props, "showall") === false) {
      bottomButtonHTML = /* @__PURE__ */ import_react19.default.createElement("button", { name: "bottom", className: genBottomButtonStyle, onClick: () => bottomButton(), disabled: props.error || bottomDisabled }, bottomSymbol);
    }
    let allButtonHTML = /* @__PURE__ */ import_react19.default.createElement("span", null);
    if (hasProperty5(props, "showall") === true) {
      allButtonHTML = /* @__PURE__ */ import_react19.default.createElement("button", { name: "all", className: genBottomButtonStyle, onClick: () => allButton(), disabled: props.error }, "All");
    }
    let title = null;
    if (hasProperty5(props, "title") === true) {
      if (hasProperty5(props, "titleSize") === true) {
        if (props.titleSize === "1") {
          title = /* @__PURE__ */ import_react19.default.createElement("h1", { className: "sw-sst_titleStyle" }, props.title);
        } else if (props.titleSize === "2") {
          title = /* @__PURE__ */ import_react19.default.createElement("h2", { className: "sw-sst_titleStyle" }, props.title);
        } else if (props.titleSize === "3") {
          title = /* @__PURE__ */ import_react19.default.createElement("h3", { className: "sw-sst_titleStyle" }, props.title);
        } else if (props.titleSize === "4") {
          title = /* @__PURE__ */ import_react19.default.createElement("h4", { className: "sw-sst_titleStyle" }, props.title);
        } else if (props.titleSize === "5") {
          title = /* @__PURE__ */ import_react19.default.createElement("h5", { className: "sw-sst_titleStyle" }, props.title);
        } else if (props.titleSize === "6") {
          title = /* @__PURE__ */ import_react19.default.createElement("h6", { className: "sw-sst_titleStyle" }, props.title);
        }
      } else {
        title = /* @__PURE__ */ import_react19.default.createElement("h3", { className: "sw-sst_titleStyle" }, props.title);
      }
    }
    const filterSection = hasProperty5(props, "nofilter") === true ? null : /* @__PURE__ */ import_react19.default.createElement(import_react19.default.Fragment, null, /* @__PURE__ */ import_react19.default.createElement(CheckBox_default, { selectedValue: "Y", name: "filterOn", text: "\xA0\xA0\xA0Filter On", value: filterOn, onChange: (event) => processFilterOn(event.target.value) }), /* @__PURE__ */ import_react19.default.createElement("button", { onClick: filterButton, className: "sw-sst_buttonStyle2", disabled: props.error || filterOn !== "Y" }, /* @__PURE__ */ import_react19.default.createElement("img", { src: funnel_filter_svgrepo_com_default, width: "30px", height: "30px", className: genFilterStyle })));
    const searchStyle = processInvalidStyleScreen(invalid, SRCHHDR, "sw-sst_searchStyle");
    const itemStyle = processInvalidStyleScreen(invalid, SRCHITEM);
    const searchSection = hasProperty5(props, "nosearch") === true ? null : /* @__PURE__ */ import_react19.default.createElement(import_react19.default.Fragment, null, /* @__PURE__ */ import_react19.default.createElement("span", { className: "sw-invalid_checkForError" }, /* @__PURE__ */ import_react19.default.createElement(Choice, { choices: searchHeaderValues, name: "searchHeader", value: searchHeader, onChange: (event) => setSearchHeader(event.target.value), onClick: () => wasClickedScreen(invalid, SRCHHDR, setInvalid), className: searchStyle, disabled: props.error }), isInvalid(invalid[SRCHHDR], -1) === true ? /* @__PURE__ */ import_react19.default.createElement("span", { className: "sw-invalid_errMessage" }, invalid[SRCHHDR].message) : null), /* @__PURE__ */ import_react19.default.createElement("span", { className: "sw-invalid_checkForError" }, /* @__PURE__ */ import_react19.default.createElement("input", { type: "text", name: "searchItem", value: searchItem, onChange: (event) => setupSearch(event.target.value), onClick: () => wasClickedScreen(invalid, SRCHITEM, setInvalid), className: itemStyle, disabled: props.error }), isInvalid(invalid[SRCHITEM], -1) === true ? /* @__PURE__ */ import_react19.default.createElement("span", { className: "sw-invalid_errMessage" }, invalid[SRCHITEM].message) : null), /* @__PURE__ */ import_react19.default.createElement("button", { name: "searchButtonName", className: genButtonStyle, onClick: () => searchItemButton(), disabled: props.error }, "Search"));
    function pdfRegButton() {
      let title2 = "PDF Report";
      if (hasProperty5(props, "title") === true) {
        title2 = props.title;
      } else if (hasProperty5(props, "report") === true) {
        title2 = props.report;
      }
      let docDefinition = {
        // This contains the PDF report information
        info: {
          title: title2
        },
        pageOrientation: pdfOrientation,
        pageMargins: [20, 100, 20, 80],
        content: [
          // The main body of the PDF
        ],
        styles: {
          // Styles for the header and cell headers
          header1: {
            fontSize: 14,
            bold: true,
            alignment: "center",
            margin: [0, 3, 0, 0]
          },
          cellLeftBold: {
            alignment: "left",
            fontSize: 12,
            bold: true
          },
          cellRight: {
            alignment: "right"
          },
          cellCenter: {
            alignment: "center"
          }
        }
      };
      docDefinition.header = {
        // Build the header and footer
        stack: [
          { columns: [
            { text: "Report Date: " + currentDate(), alignment: "right", margin: [0, 5, 5, 0] }
          ] },
          { text: title2, style: "header1" }
        ]
      };
      docDefinition.footer = { text: "For Official Use Only", alignment: "center" };
      docDefinition.footer = function(currentPage, pageCount) {
        return { text: "Page: " + currentPage.toString() + " of " + pageCount + "   For Official Use Only", alignment: "center" };
      };
      if (props.data.length > 0) {
        let widths = [];
        let headers = [];
        for (let i = 0; i < table.length; i++) {
          if (controlBreakInfo[i].hidden === false) {
            headers.push({ text: table[i].header, style: "cellCenter" });
          }
        }
        for (let i = 0; i < headers.length; i++) {
          widths.push("auto");
        }
        let tableSST = { table: {
          // Build the table
          headerRows: 1,
          // 1 row of headers
          widths,
          body: [
            // Build the table header
            headers
          ],
          alignment: "center"
        } };
        docDefinition.content.push(tableSST);
        for (let i = 0; i < indexes.length; i++) {
          let text2 = [];
          for (let j = 0; j < table.length; j++) {
            if (controlBreakInfo[j].hidden === false) {
              if (hasProperty5(table[j], "pdfCol") === true) {
                if (table[j].pdfCol === "left") {
                  text2.push({ text: props.data[indexes[i]][table[j].name] });
                } else if (table[j].pdfCol === "right") {
                  text2.push({ text: props.data[indexes[i]][table[j].name], style: "cellRight" });
                } else if (table[j].pdfCol === "center") {
                  text2.push({ text: props.data[indexes[i]][table[j].name], style: "cellCenter" });
                } else if (table[j].pdfCol === "date") {
                  text2.push({ text: convertDate(props.data[indexes[i]][table[j].name]), style: "cellCenter" });
                } else if (table[j].pdfCol === "dateLeft") {
                  text2.push({ text: convertDate(props.data[indexes[i]][table[j].name]) });
                } else if (table[j].pdfCol === "dateRight") {
                  text2.push({ text: convertDate(props.data[indexes[i]][table[j].name]), style: "cellRight" });
                } else if (table[j].pdfCol === "money") {
                  text2.push({ text: formatMoney(props.data[indexes[i]][table[j].name]), style: "cellRight" });
                } else {
                  text2.push({ text: props.data[indexes[i]][table[j].name] });
                }
              } else if (typeof props.data[indexes[i]][table[j].name] === "number") {
                text2.push({ text: props.data[indexes[i]][table[j].name], style: "cellRight" });
              } else if (hasProperty5(table[j], "dataDate") === true || hasProperty5(table[j], "filterDate") === true || hasProperty5(table[j], "searchDate") === true || hasProperty5(table[j], "sortDate") === true) {
                text2.push({ text: convertDate(props.data[indexes[i]][table[j].name]), style: "cellCenter" });
              } else {
                text2.push({ text: props.data[indexes[i]][table[j].name] });
              }
            }
          }
          docDefinition.content[0].table.body.push(text2);
        }
        let foundFooter = false;
        let text = [];
        for (let i = 0; i < footers.length; i++) {
          if (footers[i].length > 0) {
            let value2 = "";
            for (let j = 0; j < footers[i].length; j++) {
              value2 += footers[i][j] + "\n";
            }
            text.push({ text: value2, style: "cellLeftBold" });
            foundFooter = true;
          } else {
            text.push({ text: " ", style: "cellLeftBold" });
          }
        }
        if (foundFooter === true) {
          docDefinition.content[0].table.body.push(text);
        }
        import_pdfmake.default.createPdf(docDefinition).open();
      }
    }
    function pdfCBButton() {
      let title2 = "PDF Report";
      if (hasProperty5(props, "title") === true) {
        title2 = props.title;
      } else if (hasProperty5(props, "report") === true) {
        title2 = props.report;
      }
      let docDefinition = {
        // This contains the PDF report information
        info: {
          title: title2
        },
        pageOrientation: pdfOrientation,
        pageMargins: [20, 100, 20, 80],
        content: [
          // The main body of the PDF
        ],
        styles: {
          // Styles for the header and cell headers
          header1: {
            fontSize: 14,
            bold: true,
            alignment: "center",
            margin: [0, 3, 0, 0]
          },
          cellLeftBold: {
            alignment: "left",
            fontSize: 12,
            bold: true
          },
          cellCenterBoldBig: {
            alignment: "center",
            fontSize: 14,
            bold: true
          },
          cellRight: {
            alignment: "right"
          },
          cellCenter: {
            alignment: "center"
          }
        }
      };
      docDefinition.header = {
        // Build the header and footer
        stack: [
          { columns: [
            { text: "Report Date: " + currentDate(), alignment: "right", margin: [0, 5, 5, 0] }
          ] },
          { text: title2, style: "header1" }
        ]
      };
      docDefinition.footer = { text: "For Official Use Only", alignment: "center" };
      docDefinition.footer = function(currentPage, pageCount) {
        return { text: "Page: " + currentPage.toString() + " of " + pageCount + "   For Official Use Only", alignment: "center" };
      };
      if (props.data.length > 0) {
        let index = 0;
        for (let k = 0; k < controlBreakData.length; k++) {
          if (k !== 0) {
            docDefinition.content.push({ text: " ", style: "cellCenterBoldBig" });
            index++;
          }
          docDefinition.content.push({ text: controlBreakData[k].title, style: "cellCenterBoldBig" });
          index++;
          let widths = [];
          let headers = [];
          for (let i = 0; i < table.length; i++) {
            if (controlBreakInfo[i].hidden === false) {
              headers.push({ text: table[i].header, style: "cellCenter" });
            }
          }
          for (let i = 0; i < headers.length; i++) {
            if (controlBreakInfo[i].hidden === false) {
              widths.push("auto");
            }
          }
          let tableSST = { table: {
            // Build the table
            headerRows: 1,
            // 1 row of headers
            widths,
            body: [
              // Build the table header
              headers
            ]
          } };
          docDefinition.content.push(tableSST);
          for (let i = 0; i < controlBreakData[k].data.length; i++) {
            let text2 = [];
            for (let j = 0; j < table.length; j++) {
              if (controlBreakInfo[j].hidden === false) {
                if (hasProperty5(table[j], "pdfCol") === true) {
                  if (table[j].pdfCol === "left") {
                    text2.push({ text: controlBreakData[k].data[i][table[j].name] });
                  } else if (table[j].pdfCol === "right") {
                    text2.push({ text: controlBreakData[k].data[i][table[j].name], style: "cellRight" });
                  } else if (table[j].pdfCol === "center") {
                    text2.push({ text: controlBreakData[k].data[i][table[j].name], style: "cellCenter" });
                  } else if (table[j].pdfCol === "date") {
                    text2.push({ text: convertDate(controlBreakData[k].data[i][table[j].name]), style: "cellCenter" });
                  } else if (table[j].pdfCol === "dateLeft") {
                    text2.push({ text: convertDate(controlBreakData[k].data[i][table[j].name]) });
                  } else if (table[j].pdfCol === "dateRight") {
                    text2.push({ text: convertDate(controlBreakData[k].data[i][table[j].name]), style: "cellRight" });
                  } else if (table[j].pdfCol === "money") {
                    text2.push({ text: formatMoney(controlBreakData[k].data[i][table[j].name]), style: "cellRight" });
                  } else {
                    text2.push({ text: controlBreakData[k].data[i][table[j].name] });
                  }
                } else if (typeof controlBreakData[k].data[i][table[j].name] === "number") {
                  text2.push({ text: controlBreakData[k].data[i][table[j].name], style: "cellRight" });
                } else if (hasProperty5(table[j], "dataDate") === true || hasProperty5(table[j], "filterDate") === true || hasProperty5(table[j], "searchDate") === true || hasProperty5(table[j], "sortDate") === true) {
                  text2.push({ text: convertDate(controlBreakData[k].data[i][table[j].name]), style: "cellCenter" });
                } else {
                  text2.push({ text: controlBreakData[k].data[i][table[j].name] });
                }
              }
            }
            docDefinition.content[index].table.body.push(text2);
          }
          let foundFooter = false;
          let text = [];
          for (let i = 0; i < controlBreakData[k].footer.length; i++) {
            if (controlBreakData[k].footer[i].length > 0) {
              let value2 = "";
              for (let j = 0; j < controlBreakData[k].footer[i].length; j++) {
                value2 += controlBreakData[k].footer[i][j] + "\n";
              }
              text.push({ text: value2, style: "cellLeftBold" });
              foundFooter = true;
            } else {
              text.push({ text: " ", style: "cellLeftBold" });
            }
          }
          if (foundFooter === true) {
            docDefinition.content[index].table.body.push(text);
          }
          index++;
        }
        import_pdfmake.default.createPdf(docDefinition).open();
      }
    }
    function pdfButton() {
      let localInvalid = [...invalid];
      if (pdfOrientation === "" || pdfOrientation === null || pdfOrientation === void 0) {
        localInvalid = setInvalidScreen(localInvalid, PDFORIENT, "An orientation must be entered for the PDF");
        setInvalid(localInvalid);
        return;
      }
      if (isControlBreak(controlBreakInfo) === true) {
        pdfCBButton();
      } else {
        pdfRegButton();
      }
    }
    function excelRegButton() {
      let title2 = "Excel Report";
      if (hasProperty5(props, "title") === true) {
        title2 = props.title;
      } else if (hasProperty5(props, "report") === true) {
        title2 = props.report;
      }
      let exData = [];
      exData.push(["Report Date: " + currentDate()]);
      exData.push([" "]);
      exData.push([title2]);
      exData.push([" "]);
      let header = [];
      for (let i = 0; i < table.length; i++) {
        header.push(table[i].header);
      }
      exData.push(header);
      exData.push([" "]);
      for (let i = 0; i < props.data.length; i++) {
        let text = [];
        for (let j = 0; j < table.length; j++) {
          text.push(props.data[indexes[i]][table[j].name]);
        }
        exData.push(text);
      }
      exData.push([" "]);
      exData.push[["For Offical Use Only"]];
      setExcelData(exData);
      setShowExcel(true);
    }
    function excelCBButton() {
      let title2 = "Excel Report";
      if (hasProperty5(props, "title") === true) {
        title2 = props.title;
      } else if (hasProperty5(props, "report") === true) {
        title2 = props.report;
      }
      let exData = [];
      exData.push(["Report Date: " + currentDate()]);
      exData.push([" "]);
      exData.push([title2]);
      exData.push([" "]);
      let header = [];
      for (let i = 0; i < table.length; i++) {
        header.push(table[i].header);
      }
      for (let k = 0; k < controlBreakData.length; k++) {
        exData.push([" "]);
        exData.push([" "]);
        exData.push([controlBreakData[k].title]);
        exData.push(header);
        exData.push([" "]);
        for (let i = 0; i < controlBreakData[k].data.length; i++) {
          let text = [];
          for (let j = 0; j < table.length; j++) {
            text.push(controlBreakData[k].data[i][table[j].name]);
          }
          exData.push(text);
        }
      }
      exData.push([" "]);
      exData.push[["For Offical Use Only"]];
      setExcelData(exData);
      setShowExcel(true);
    }
    function excelBuildButton() {
      if (isControlBreak(controlBreakInfo) === true) {
        excelCBButton();
      } else {
        excelRegButton();
      }
    }
    function closeExDisplay() {
      setShowExcel(false);
    }
    const pdfDisplay = hasProperty5(props, "nopdf") === true ? null : /* @__PURE__ */ import_react19.default.createElement("span", null, /* @__PURE__ */ import_react19.default.createElement("button", { name: "pdf", className: genButtonStyle, onClick: pdfButton }, "PDF"), /* @__PURE__ */ import_react19.default.createElement("span", { className: "sw-invalid_checkForError" }, /* @__PURE__ */ import_react19.default.createElement("label", { htmlFor: "pdfOrientation" }, "Orientation: "), /* @__PURE__ */ import_react19.default.createElement(
      Choice,
      {
        choices: pdfOrientValues,
        name: "pdfOrientation",
        value: pdfOrientation,
        onChange: (event) => setPdfOrientation(event.target.value),
        onClick: () => wasClickedScreen(invalid, PDFORIENT, setInvalid),
        className: processInvalidStyleScreen(invalid, PDFORIENT)
      }
    ), isInvalid(invalid[PDFORIENT], -1) === true ? /* @__PURE__ */ import_react19.default.createElement("span", { className: "sw-invalid_errMessage" }, invalid[PDFORIENT].message) : null));
    const excelDisplay = hasProperty5(props, "noexcel") === true ? null : /* @__PURE__ */ import_react19.default.createElement("span", null, /* @__PURE__ */ import_react19.default.createElement("button", { name: "excelBuild", className: genButtonStyle, onClick: excelBuildButton }, "Excel Build"), showExcel === false ? null : /* @__PURE__ */ import_react19.default.createElement(import_react_csv.CSVLink, { data: excelData, target: "_blank", onClick: closeExDisplay, className: "sw-sst_excelButtonStyle" }, "Excel Display"));
    const pdfExcel = hasProperty5(props, "nopdf") === true && hasProperty5(props, "noexcel") === true ? null : /* @__PURE__ */ import_react19.default.createElement("div", { className: "sw-sst_footStyle2" }, pdfDisplay, excelDisplay);
    const footer = hasProperty5(props, "nofooter") === true ? null : /* @__PURE__ */ import_react19.default.createElement("div", null, /* @__PURE__ */ import_react19.default.createElement("div", { className: "sw-sst_footStyle" }, hasProperty5(props, "norows") === true ? null : /* @__PURE__ */ import_react19.default.createElement("span", { className: "sw-sst_marginStyle" }, /* @__PURE__ */ import_react19.default.createElement(Choice, { choices: rowValues, name: "rows", value: maximum, onChange: (event) => processMaxItems(event.target.value), className: "sw-sst_noBorderStyle", disabled: props.error }), "rows"), topButtonHTML, previousButtonHTML, hasProperty5(props, "nodisplay") === true ? null : /* @__PURE__ */ import_react19.default.createElement("span", null, start + " - " + end + " of " + length), nextButtonHTML, bottomButtonHTML), pdfExcel);
    let hoverClassName = `sw-sst_tableStyle `;
    if (hasProperty5(props, "hover") === true) {
      let root = document.documentElement;
      let hoverBackColor = "cyan";
      let found = false;
      if (hasProperty5(props, "hoverColor") === true) {
        hoverBackColor = props.hoverColor;
      }
      for (let i = 1; i <= 10 && found === false; i++) {
        let colorValue = getComputedStyle(root).getPropertyValue(`--sw-sst_hover_back_color${i}`);
        if (colorValue === " none") {
          root.style.setProperty(`--sw-sst_hover_back_color${i}`, hoverBackColor);
          hoverClassName += `sw-sst_search_sort_table${i}`;
          found = true;
        } else if (colorValue === hoverBackColor) {
          hoverClassName += `sw-sst_search_sort_table${i}`;
          found = true;
        }
      }
      if (found === false) {
        console.error("You can have at most 10 different hover colors for tables.");
      }
    }
    if (!table) {
      const override = import_react20.css`
        margin: 0 auto;
        `;
      const msg = props.spinner ? /* @__PURE__ */ import_react19.default.createElement("div", { style: { height: "6em" } }, /* @__PURE__ */ import_react19.default.createElement("h3", null, "Loading"), /* @__PURE__ */ import_react19.default.createElement(import_FadeLoader.default, { css: override, size: "30px", color: "teal", loading: true })) : /* @__PURE__ */ import_react19.default.createElement("span", null);
      return msg;
    }
    let controlBreakVal = isControlBreak(controlBreakInfo);
    let tableBuild = null;
    let cbCount = -1;
    if (controlBreakVal === true) {
      let cbTable = `cbtitles_${number}`;
      let cbHeader = `cbhead_${number}`;
      tableBuild = /* @__PURE__ */ import_react19.default.createElement("span", null, /* @__PURE__ */ import_react19.default.createElement("table", { className: "sw-sst_table", key: cbTable }, /* @__PURE__ */ import_react19.default.createElement("tr", { key: cbHeader }, table.map(buildHeaders(true, 0)))), controlBreakData.map(renderCtrlBreak));
    } else {
      let keyTable = `table_${number}`;
      let header = `head_${number}`;
      let count = -1;
      tableBuild = /* @__PURE__ */ import_react19.default.createElement("table", { className: hoverClassName + " sw-sst_table", name: `table${number}`, key: keyTable }, /* @__PURE__ */ import_react19.default.createElement("tbody", null, /* @__PURE__ */ import_react19.default.createElement("tr", { key: header, className: "sw-sst_centerBoldStyle" }, table.map(buildHeaders(true, 0))), showData.map((row) => {
        count++;
        return props.eachRowInTable(row, count);
      }), hasProperty5(props, "footer") === true ? /* @__PURE__ */ import_react19.default.createElement("tr", { className: "footerStyle" }, props.footer.map(buildFooter)) : null, /* @__PURE__ */ import_react19.default.createElement("tr", null, footers.map(buildMathFooters))));
    }
    function areDropDowns() {
      for (let i = 0; i < table.length; i++) {
        if (hasProperty5(table[i], "dropDown") === true && table[i].dropDown === true) {
          return true;
        }
      }
      return false;
    }
    return /* @__PURE__ */ import_react19.default.createElement("div", { className: "sw-sst_divStyle" }, title, /* @__PURE__ */ import_react19.default.createElement("div", null, hasProperty5(props, "sfbottom") === false ? /* @__PURE__ */ import_react19.default.createElement(import_react19.default.Fragment, null, filterSection, searchSection, /* @__PURE__ */ import_react19.default.createElement("span", { className: "sw-sst_right" }, areDropDowns() === false ? null : /* @__PURE__ */ import_react19.default.createElement("button", { name: "reset", className: genButtonStyle, onClick: () => resetButton(), disabled: props.error }, "Reset")), allButtonHTML, letters) : null), props.data.length === 0 && hasProperty5(props, "showtable") === false ? /* @__PURE__ */ import_react19.default.createElement("div", null, "No Data to Display") : /* @__PURE__ */ import_react19.default.createElement("div", null, /* @__PURE__ */ import_react19.default.createElement("div", { className: tableDivStyle, style: heightWidthStyle }, tableBuild), footer, /* @__PURE__ */ import_react19.default.createElement("div", null, hasProperty5(props, "sfbottom") === true ? /* @__PURE__ */ import_react19.default.createElement(import_react19.default.Fragment, null, filterSection, searchSection, allButtonHTML, letters) : null)), /* @__PURE__ */ import_react19.default.createElement(AlertModal_default, { show: showAlert, closeFunct: setShowAlert, message: alertMessage }));
    function processMaxItems(value2) {
      if (value2 === "All") {
        setMaxItems(props.data.length);
      } else {
        setMaxItems(parseInt(value2));
      }
      setMaximum(value2);
    }
    function setupSearch(value2) {
      setStartEnd(0, length, indexes);
      setSearchItem(value2);
    }
    function resetButton() {
      let ctrlBreakInfo = [...controlBreakInfo];
      let locFooters = [...footers];
      let ctrlBreakData = [...controlBreakData];
      for (let i = 0; i < ctrlBreakInfo.length; i++) {
        ctrlBreakInfo[i].hidden = false;
        ctrlBreakInfo[i].ctrlBreak = 0;
      }
      for (let i = 0; i < locFooters.length; i++) {
        locFooters[i] = [];
      }
      for (let i = 0; i < ctrlBreakData.length; i++) {
        for (let j = 0; j < ctrlBreakData[i].footer.length; j++) {
          ctrlBreakData[i].footer[j] = [];
        }
        ctrlBreakData[i].title = "";
      }
      hideTheColumns(ctrlBreakInfo);
      setIndex(origIndexes);
      setControlBreakInfo(ctrlBreakInfo);
      setFooters(locFooters);
      setControlBreakData(ctrlBreakData);
    }
    function isControlBreak(controlBreakInfo2) {
      for (let i = 0; i < controlBreakInfo2.length; i++) {
        if (controlBreakInfo2[i].ctrlBreak > 0) {
          return true;
        }
      }
      return false;
    }
    function _hideTheColumnxx(row, i, name, isCtrlBreak, hideShow) {
      let tableElement = document.getElementsByName(name)[0];
      console.log("tableElement :", tableElement);
      if (tableElement === void 0) {
        return;
      }
      let tbodyElement = tableElement.children;
      console.log("tbodyElement :", tbodyElement);
      let trElement = tbodyElement[isCtrlBreak === false ? 0 : 1].children;
      console.log("trElement :", trElement);
      for (const trChild of trElement) {
        console.log("trChild :", trChild);
        let count = 0;
        for (const tdChild of trChild.children) {
          if (count === i) {
            if (hideShow === true) {
              tdChild.setAttribute("hidden", row.hidden);
            } else {
              tdChild.removeAttribute("hidden");
            }
          }
          count++;
        }
      }
    }
    function hideTheColumns(ctrlBreakInfo) {
      let hide = [];
      for (let i = 0; i < ctrlBreakInfo.length; i++) {
        hide.push(ctrlBreakInfo[i].hidden);
      }
      if (hasProperty5(props, "hidden") === true) {
        props.hidden(hide);
      }
      setHideCols(hide);
    }
    function hideColumn(row, i) {
      let ctrlBreakInfo = [...controlBreakInfo];
      ctrlBreakInfo[i].hidden = true;
      hideTheColumns(ctrlBreakInfo);
      setControlBreakInfo(controlBreakInfo);
      setHtmlDropDown(false);
    }
    function showColumn(row, i) {
      let ctrlBreakInfo = [...controlBreakInfo];
      ctrlBreakInfo[i].hidden = false;
      hideTheColumns(ctrlBreakInfo);
      setControlBreakInfo(controlBreakInfo);
      setHtmlDropDown(false);
    }
    function maxPlusOne(controlBreakInfo2) {
      let max = -1;
      for (let i = 0; i < controlBreakInfo2.length; i++) {
        if (controlBreakInfo2[i].ctrlBreak > max) {
          max = controlBreakInfo2[i].ctrlBreak;
        }
      }
      return max + 1;
    }
    function buildSortData(breakOrder, row) {
      let data2 = [];
      for (let i = 0; i < breakOrder.length; i++) {
        let dateFormat = null;
        if (hasProperty5(table[breakOrder[i].col], "sortDate")) {
          dateFormat = table[breakOrder[i].col].sortDate;
        }
        if (dateFormat !== null) {
          if (dateFormat === "MM/DD/YYYY") {
            data2.push(convertDate2(props.data[row][table[breakOrder[i].col].name], "/", 1));
          } else if (dateFormat === "MM-DD-YYYY") {
            data2.push(convertDate2(props.data[row][table[breakOrder[i].col].name], "-", 1));
          } else if (dateFormat === "MM/DD/YYYY HH:MM:SS") {
            data2.push(convertDateTime(props.data[row][table[breakOrder[i].col].name], "/", 1));
          } else if (dateFormat === "MM-DD-YYYY HH:MM:SS") {
            data2.push(convertDateTime(props.data[row][table[breakOrder[i].col].name], "-", 1));
          } else if (dateFormat === "YYYY-MM-DDTHH:MM:SS.SSS") {
            data2.push(convertDateTimeReg(props.data[row][table[breakOrder[i].col].name]));
          } else {
            data2.push(props.data[row][table[breakOrder[i].col].name]);
          }
        } else {
          data2.push(props.data[row][table[breakOrder[i].col].name]);
        }
      }
      return data2;
    }
    function sortMultipleCols(ctrlBreakInfo, indexes2) {
      let breakOrder = [];
      let sortAry = [];
      if (table === null)
        return;
      for (let i = 0; i < ctrlBreakInfo.length; i++) {
        if (ctrlBreakInfo[i].ctrlBreak > 0) {
          breakOrder.push({ col: i, order: ctrlBreakInfo[i].ctrlBreak });
        }
      }
      breakOrder.sort(function(item1, item2) {
        return item1.order - item2.order;
      });
      indexes2.map((row) => {
        sortAry.push({ index: row, data: buildSortData(breakOrder, row) });
      });
      sortAry.sort(function(item1, item2) {
        for (let i = 0; i < breakOrder.length; i++) {
          if (typeof item1.data[i] === "string" && hasProperty5(props, "ignorecase") === true) {
            item1.data[i] = item1.data[i].toUpperCase();
            item2.data = item2.data[i] !== null ? item2.data.toUpperCase() : null;
          }
          if (item1.data[i] < item2.data[i]) {
            return -1;
          } else if (item1.data[i] > item2.data[i]) {
            return 1;
          }
        }
        return 0;
      });
      let newIndexes = [];
      sortAry.map((row) => newIndexes.push(row.index));
      setIndex(newIndexes, false);
      return { indexes: newIndexes, srtOrder: breakOrder };
    }
    function calcStartEndCB(point) {
      let tablePos = 0;
      let index = 0;
      let count = 0;
      let length2 = 0;
      let done = false;
      for (let i = 0; i < controlBreakData.length && done === false; i++) {
        length2 = controlBreakData[i].data.length;
        if (count + length2 < point) {
          count += length2;
        } else {
          tablePos = i;
          index = point - count;
          done = true;
        }
      }
      return { table: tablePos, index };
    }
    function calcPagination() {
      let starting = calcStartEndCB(start);
      let ending = calcStartEndCB(end);
      let infoObj = {
        tableStart: starting.table,
        // Place the starting and ending position in an object
        startIndex: starting.index,
        // and return the object
        tableEnd: ending.table,
        endIndex: ending.index
      };
      return infoObj;
    }
    function renderCtrlBreak(row, i) {
      let name = `table${number}_${i}`;
      let tableCBInfo = calcPagination();
      let displayFooter = false;
      let data2 = [];
      if (i < tableCBInfo.tableStart) {
        return null;
      } else if (tableCBInfo.tableStart === i) {
        let end2 = controlBreakData[i].data.length;
        if (tableCBInfo.tableEnd === i) {
          end2 = tableCBInfo.endIndex;
        }
        for (let j = tableCBInfo.startIndex; j < end2; j++) {
          data2.push(row.data[j]);
          if (j + 1 === controlBreakData[i].data.length) {
            displayFooter = true;
          }
        }
      } else if (i < tableCBInfo.tableEnd) {
        data2 = row.data;
      } else if (tableCBInfo.tableEnd === i) {
        for (let j = 0; j < tableCBInfo.endIndex; j++) {
          data2.push(row.data[j]);
          if (j + 1 === controlBreakData[i].data.length) {
            displayFooter = true;
          }
        }
      } else {
        return null;
      }
      if (data2.length === controlBreakData[i].data.length) {
        displayFooter = true;
      }
      let keyTable = `cbtable_${number}_${i}`;
      let keyHeader = `cbrow_${number}`;
      let key = `cbfoot_${number}_${i}`;
      console.log("render");
      return (
        // Render the control break
        /* @__PURE__ */ import_react19.default.createElement("table", { name, className: hoverClassName + " sw-sst_table", key: keyTable }, /* @__PURE__ */ import_react19.default.createElement("caption", { className: "sw-sst_tableBold" }, row.title), /* @__PURE__ */ import_react19.default.createElement("tbody", null, /* @__PURE__ */ import_react19.default.createElement("tr", { key: keyHeader }, table.map(buildHeaders(false, i))), data2.map((row2) => {
          cbCount++;
          return props.eachRowInTable(row2, cbCount);
        }), /* @__PURE__ */ import_react19.default.createElement("tr", { key }, displayFooter === true ? row.footer.map(buildMathFooters) : null)))
      );
    }
    function compare(k, info, temp) {
      let found = true;
      for (let j = 0; j < info.srtOrder.length; j++) {
        if (props.data[info.indexes[k]][table[info.srtOrder[j].col].name] !== temp[table[info.srtOrder[j].col].name]) {
          found = false;
        }
      }
      return found;
    }
    function processTemp(k, info) {
      let temp = {};
      for (let i = 0; i < info.srtOrder.length; i++) {
        temp[table[info.srtOrder[i].col].name] = props.data[info.indexes[k]][table[info.srtOrder[i].col].name];
      }
      return temp;
    }
    function processTitle(k, info) {
      let title2 = "";
      for (let i = 0; i < info.srtOrder.length; i++) {
        title2 += `${table[info.srtOrder[i].col].header} ${props.data[info.indexes[k]][table[info.srtOrder[i].col].name]}; `;
      }
      return title2;
    }
    function processFooter() {
      let footer2 = new Array(table.length);
      for (let i = 0; i < table.length; i++) {
        footer2[i] = [];
      }
      return footer2;
    }
    function findCtrlBreak(controlBreakInfo2, indexes2) {
      let info = sortMultipleCols(controlBreakInfo2, indexes2);
      let ctrlBreakData = [];
      let startingPos = [0];
      let pos = 0;
      let data2 = [];
      let temp = processTemp(0, info);
      for (let k = 0; k < info.indexes.length; k++) {
        if (compare(k, info, temp) === true) {
          pos = k;
          data2.push(props.data[info.indexes[k]]);
          if (k + 1 === info.indexes.length) {
            let title2 = processTitle(k, info);
            let footer2 = processFooter();
            ctrlBreakData.push({ title: title2, data: [...data2], footer: footer2 });
          }
        } else {
          startingPos.push(k);
          let title2 = processTitle(pos, info);
          let footer2 = processFooter();
          ctrlBreakData.push({ title: title2, data: [...data2], footer: footer2 });
          data2 = [];
          temp = processTemp(k, info);
          data2.push(props.data[info.indexes[k]]);
          if (k + 1 === info.indexes.length) {
            let title3 = processTitle(k, info);
            let footer3 = processFooter();
            ctrlBreakData.push({ title: title3, data: [...data2], footer: footer3 });
          }
        }
      }
      if (hasProperty5(props, "startingpos") === true) {
        props.startingPos(startingPos);
      }
      setStartPos(startingPos);
      setControlBreakData(ctrlBreakData);
    }
    function controlBreakOn(row, i) {
      let ctrlBreakInfo = [...controlBreakInfo];
      ctrlBreakInfo[i].ctrlBreak = maxPlusOne(ctrlBreakInfo);
      findCtrlBreak(ctrlBreakInfo, indexes);
      setControlBreakInfo(ctrlBreakInfo);
      setHtmlDropDown(false);
    }
    function controlBreakOff(row, i) {
      let ctrlBreakInfo = [...controlBreakInfo];
      ctrlBreakInfo[i].ctrlBreak = 0;
      findCtrlBreak(ctrlBreakInfo, indexes);
      setControlBreakInfo(ctrlBreakInfo);
      setHtmlDropDown(false);
    }
    function cancel() {
      setHtmlDropDown(false);
    }
    function summationFunct(row, i) {
      let sum = 0;
      if (isControlBreak(controlBreakInfo) === true) {
        for (let j = 0; j < controlBreakData.length; j++) {
          sum = 0;
          for (let k = 0; k < controlBreakData[j].data.length; k++) {
            sum += controlBreakData[j].data[k][row.name];
          }
          controlBreakData[j].footer[i].push(`Sum: ${sum}`);
        }
      } else {
        let locFooters = [...footers];
        for (let j = 0; j < props.data.length; j++) {
          sum += props.data[j][row.name];
        }
        locFooters[i].push(`Sum: ${sum}`);
        setFooters(locFooters);
      }
    }
    function averageFunct(row, i) {
      let sum = 0;
      let count = 0;
      if (isControlBreak(controlBreakInfo) === true) {
        for (let j = 0; j < controlBreakData.length; j++) {
          sum = 0;
          count = 0;
          for (let k = 0; k < controlBreakData[j].data.length; k++) {
            sum += controlBreakData[j].data[k][row.name];
            count++;
          }
          controlBreakData[j].footer[i].push(`Average: ${(sum / count).toFixed(mathDecimal)}`);
        }
      } else {
        let locFooters = [...footers];
        for (let j = 0; j < props.data.length; j++) {
          sum += props.data[j][row.name];
          count++;
        }
        locFooters[i].push(`Average: ${(sum / count).toFixed(mathDecimal)}`);
        setFooters(locFooters);
      }
    }
    function countFunct(row, i) {
      let count = 0;
      if (isControlBreak(controlBreakInfo) === true) {
        for (let j = 0; j < controlBreakData.length; j++) {
          count = 0;
          for (let k = 0; k < controlBreakData[j].data.length; k++) {
            count++;
          }
          controlBreakData[j].footer[i].push(`Count: ${count}`);
        }
      } else {
        let locFooters = [...footers];
        for (let j = 0; j < props.data.length; j++) {
          count++;
        }
        locFooters[i].push(`Count: ${count}`);
        setFooters(locFooters);
      }
    }
    function countDistinctFunct(row, i) {
      let count = 0;
      if (isControlBreak(controlBreakInfo) === true) {
        for (let j = 0; j < controlBreakData.length; j++) {
          count = 0;
          for (let k = 0; k < controlBreakData[j].data.length; k++) {
            let found = false;
            for (let m = 0; m < k; m++) {
              if (mathIgnoreCase === true && typeof controlBreakData[j].data[k][row.name] === "string") {
                if (controlBreakData[j].data[k][row.name].toUpperCase() === controlBreakData[j].data[m][row.name].toUpperCase() && found === false) {
                  found = true;
                }
              } else {
                if (controlBreakData[j].data[k][row.name] === controlBreakData[j].data[m][row.name] && found === false) {
                  found = true;
                }
              }
            }
            if (found === false) {
              count++;
            }
          }
          controlBreakData[j].footer[i].push(`Distinct Count: ${count}`);
        }
      } else {
        let locFooters = [...footers];
        for (let j = 0; j < props.data.length; j++) {
          let found = false;
          for (let m = 0; m < j; m++) {
            if (mathIgnoreCase === true && typeof props.data[j][row.name] === "string") {
              if (props.data[j][row.name].toUpperCase() === props.data[m][row.name].toUpperCase() && found === false) {
                found = true;
              }
            } else {
              if (props.data[j][row.name] === props.data[m][row.name] && found === false) {
                found = true;
              }
            }
          }
          if (found === false) {
            count++;
          }
        }
        locFooters[i].push(`Distinct Count: ${count}`);
        setFooters(locFooters);
      }
    }
    function minimumFunct(row, i) {
      let minimum = null;
      if (isControlBreak(controlBreakInfo) === true) {
        for (let j = 0; j < controlBreakData.length; j++) {
          minimum = controlBreakData[j].data[0][row.name];
          for (let k = 0; k < controlBreakData[j].data.length; k++) {
            if (mathIgnoreCase === true && typeof controlBreakData[j].data[k][row.name] === "string") {
              if (controlBreakData[j].data[k][row.name].toUpperCase() < minimum.toUpperCase()) {
                minimum = controlBreakData[j].data[k][row.name];
              }
            } else {
              if (controlBreakData[j].data[k][row.name] < minimum) {
                minimum = controlBreakData[j].data[k][row.name];
              }
            }
          }
          controlBreakData[j].footer[i].push(`Minimum: ${minimum}`);
        }
      } else {
        let locFooters = [...footers];
        minimum = props.data[0][row.name];
        for (let j = 0; j < props.data.length; j++) {
          if (mathIgnoreCase === true && typeof props.data[j][row.name] === "string") {
            if (props.data[j][row.name].toUpperCase() < minimum.toUpperCase()) {
              minimum = props.data[j][row.name];
            }
          } else {
            if (props.data[j][row.name] < minimum) {
              minimum = props.data[j][row.name];
            }
          }
        }
        locFooters[i].push(`Minimum: ${minimum}`);
        setFooters(locFooters);
      }
    }
    function maximumFunct(row, i) {
      let maximum2 = null;
      if (isControlBreak(controlBreakInfo) === true) {
        for (let j = 0; j < controlBreakData.length; j++) {
          maximum2 = controlBreakData[j].data[0][row.name];
          for (let k = 0; k < controlBreakData[j].data.length; k++) {
            if (mathIgnoreCase === true && typeof controlBreakData[j].data[k][row.name] === "string") {
              if (controlBreakData[j].data[k][row.name].toUpperCase() > maximum2.toUpperCase()) {
                maximum2 = controlBreakData[j].data[k][row.name];
              }
            } else {
              if (controlBreakData[j].data[k][row.name] > maximum2) {
                maximum2 = controlBreakData[j].data[k][row.name];
              }
            }
          }
          controlBreakData[j].footer[i].push(`Maximum: ${maximum2}`);
        }
      } else {
        let locFooters = [...footers];
        maximum2 = props.data[0][row.name];
        for (let j = 0; j < props.data.length; j++) {
          if (mathIgnoreCase === true && typeof props.data[j][row.name] === "string") {
            if (props.data[j][row.name].toUpperCase() > maximum2.toUpperCase()) {
              maximum2 = props.data[j][row.name];
            }
          } else {
            if (props.data[j][row.name] > maximum2) {
              maximum2 = props.data[j][row.name];
            }
          }
        }
        locFooters[i].push(`Maximum: ${maximum2}`);
        setFooters(locFooters);
      }
    }
    function medianFunct(row, i) {
      let median = null;
      let middle = 0;
      let data2 = null;
      if (isControlBreak(controlBreakInfo) === true) {
        for (let j = 0; j < controlBreakData.length; j++) {
          let data3 = [...controlBreakData[j].data];
          data3.sort(function(item1, item2) {
            if (item1[row.name] < item2[row.name]) {
              return -1;
            } else if (item1[row.name] > item2[row.name]) {
              return 1;
            } else {
              return 0;
            }
          });
          if (data3.length % 2 === 0) {
            middle = parseInt(data3.length / 2);
            median = ((data3[middle - 1][row.name] + data3[middle][row.name]) / 2).toFixed(mathDecimal);
          } else {
            middle = parseInt(data3.length / 2);
            median = data3[middle][row.name];
          }
          controlBreakData[j].footer[i].push(`Median: ${median}`);
        }
      } else {
        let locFooters = [...footers];
        median = null;
        middle = 0;
        data2 = [...props.data];
        data2.sort(function(item1, item2) {
          if (item1[row.name] < item2[row.name]) {
            return -1;
          } else if (item1[row.name] > item2[row.name]) {
            return 1;
          } else {
            return 0;
          }
        });
        if (data2.length % 2 === 0) {
          middle = parseInt(data2.length / 2);
          median = ((data2[middle - 1][row.name] + data2[middle][row.name]) / 2).toFixed(mathDecimal);
        } else {
          middle = parseInt(data2.length / 2);
          median = data2[middle][row.name];
        }
        locFooters[i].push(`Median: ${median}`);
        setFooters(locFooters);
      }
    }
    function applyFunction(row, i) {
      let localInvalid = [...invalid];
      if (functSelect === "" || functSelect === null || functSelect === void 0) {
        localInvalid = setInvalidScreen(localInvalid, AGGREGATE, "An aggregate must be entered");
        setInvalid(localInvalid);
        return;
      }
      if (functSelect === "Summation") {
        summationFunct(row, i);
      } else if (functSelect === "Average") {
        averageFunct(row, i);
      } else if (functSelect === "Count") {
        countFunct(row, i);
      } else if (functSelect === "Count Distinct") {
        countDistinctFunct(row, i);
      } else if (functSelect === "Minimum") {
        minimumFunct(row, i);
      } else if (functSelect === "Maximum") {
        maximumFunct(row, i);
      } else if (functSelect === "Median") {
        medianFunct(row, i);
      }
      setHtmlDropDown(false);
    }
    function showDropDown(row, i) {
      let functionList = null;
      if (hasProperty5(row, "type") === true) {
        if (row.type === "string") {
          functionList = ["", "Count", "Count Distinct", "Minimum", "Maximum"];
        } else {
          functionList = ["", "Summation", "Average", "Count", "Count Distinct", "Minimum", "Maximum", "Median"];
        }
      } else if (typeof props.data[0][row.name] === "string") {
        functionList = ["", "Count", "Count Distinct", "Minimum", "Maximum"];
      } else if (typeof props.data[0][row.name] === "number") {
        functionList = ["", "Summation", "Average", "Count", "Count Distinct", "Minimum", "Maximum", "Median"];
      }
      return /* @__PURE__ */ import_react19.default.createElement("div", { className: "sw-sst_dropDownDiv" }, controlBreakInfo[i].hidden === false ? /* @__PURE__ */ import_react19.default.createElement("span", { className: "sw-sst_showToolTip" }, /* @__PURE__ */ import_react19.default.createElement("button", { name: "hidden", onClick: () => hideColumn(row, i), className: "sw-sst_dropDownButton" }, "\u{1F5CF}\u2297"), /* @__PURE__ */ import_react19.default.createElement("span", { className: "sw-sst_toolTip sw-sst_top" }, "Hide Column")) : /* @__PURE__ */ import_react19.default.createElement("span", { className: "sw-sst_showToolTip" }, /* @__PURE__ */ import_react19.default.createElement("button", { name: "show", onClick: () => showColumn(row, i), className: "sw-sst_dropDownButton" }, "\u{1F5CF}"), /* @__PURE__ */ import_react19.default.createElement("span", { className: "sw-sst_toolTip sw-sst_top" }, "Show Column")), controlBreakInfo[i].ctrlBreak === 0 ? /* @__PURE__ */ import_react19.default.createElement("span", { className: "sw-sst_showToolTip" }, /* @__PURE__ */ import_react19.default.createElement("button", { name: "controlBreakOn", onClick: () => controlBreakOn(row, i), className: "sw-sst_dropDownButton" }, "\u{1F5D0}"), /* @__PURE__ */ import_react19.default.createElement("span", { className: "sw-sst_toolTip sw-sst_top" }, "Control Break")) : /* @__PURE__ */ import_react19.default.createElement("span", { className: "sw-sst_showToolTip" }, /* @__PURE__ */ import_react19.default.createElement("button", { name: "controlBreakOff", onClick: () => controlBreakOff(row, i), className: "sw-sst_dropDownButton" }, "\u{1F5D0}\u2297"), /* @__PURE__ */ import_react19.default.createElement("span", { className: "sw-sst_toolTip sw-sst_top" }, "Undo Control Break")), /* @__PURE__ */ import_react19.default.createElement("span", { className: "sw-sst_showToolTip" }, /* @__PURE__ */ import_react19.default.createElement("button", { name: "cancel", onClick: cancel, className: "sw-sst_dropDownButton" }, "\u2297"), /* @__PURE__ */ import_react19.default.createElement("br", null), /* @__PURE__ */ import_react19.default.createElement("span", { className: "sw-sst_toolTip sw-sst_top" }, "Cancel")), /* @__PURE__ */ import_react19.default.createElement("span", { className: "sw-invalid_checkForError" }, /* @__PURE__ */ import_react19.default.createElement(
        Choice,
        {
          choices: functionList,
          name: "functSelect",
          value: functSelect,
          onChange: (event) => setFunctSelect(event.target.value),
          onClick: () => wasClickedScreen(invalid, AGGREGATE, setInvalid),
          className: "sw-sst-dropDown_choice" + processInvalidStyleScreen(invalid, AGGREGATE)
        }
      ), isInvalid(invalid[AGGREGATE], -1) === true ? /* @__PURE__ */ import_react19.default.createElement("span", { className: "sw-invalid_errMessage" }, invalid[AGGREGATE].message) : null), /* @__PURE__ */ import_react19.default.createElement("button", { name: "apply", onClick: () => applyFunction(row, i), className: "sw-sst_dropButton" }, "Apply"));
    }
    function displayDropDown(row, i) {
      setDropDownIndex(i);
      setFunctSelect("");
      setHtmlDropDown(true);
    }
    function buildHeaders(main, tableIndex) {
      const f = (row, i) => {
        let key = "cell_" + i;
        let btnImg = "\u2BC8";
        let filterName = row.header + "_filter";
        let ctrlBreak = false;
        if (isControlBreak(controlBreakInfo) === true) {
          ctrlBreak = true;
        }
        let doSort = false;
        if (main === true && ctrlBreak === false || main === false && ctrlBreak === true) {
          doSort = true;
        }
        if (doSort === true && controlBreakInfo.length > 0 && controlBreakInfo[i].hidden === true) {
          return;
        }
        let fontColor = null;
        if (main === true) {
          fontColor = "sw-sst_headerColor";
        }
        if (table[i].sort === true && sortOrder[i] !== "N" && doSort === true) {
          if (sortOrder[i] === "A") {
            btnImg = "\u2BC5";
          } else if (sortOrder[i] === "D") {
            btnImg = "\u2BC6";
          } else if (sortOrder[i] === "N") {
            btnImg = "\u2BC8";
          }
        }
        if (filterOn === "Y" && hasProperty5(props, "nofilter") === false && main === true) {
          let filterStyle = processInvalidStyleScreen(invalid, FILTER, "sw-sst_widthStyle");
          if (row.sort === false || hasProperty5(props, "nosort") === true) {
            if (row.search === false) {
              if (row.dropDown === true && main === true) {
                return /* @__PURE__ */ import_react19.default.createElement("th", { key, className: headerStyle }, i === dropDownIndex && htmlDropDown === true ? showDropDown(row, i) : null, /* @__PURE__ */ import_react19.default.createElement("button", { className: "sw-sst_headerButton " + fontColor, onClick: () => displayDropDown(row, i) }, row.header));
              } else {
                return /* @__PURE__ */ import_react19.default.createElement("th", { key, className: headerStyle }, /* @__PURE__ */ import_react19.default.createElement("div", { className: fontColor }, row.header));
              }
            } else {
              return /* @__PURE__ */ import_react19.default.createElement("th", { key, className: headerStyle + " sw-sst_bottom" }, i === dropDownIndex && main === true && htmlDropDown === true ? showDropDown(row, i) : null, row.dropDown === true && main === true ? /* @__PURE__ */ import_react19.default.createElement("button", { className: "sw-sst_headerButton" + fontColor, onClick: () => displayDropDown(row, i) }, row.header) : /* @__PURE__ */ import_react19.default.createElement("div", { className: fontColor }, row.header), /* @__PURE__ */ import_react19.default.createElement("span", { className: "sw-invalid_checkForError" }, hasProperty5(props, "choice") === false ? /* @__PURE__ */ import_react19.default.createElement("input", { type: "text", name: filterName, className: filterStyle, value: filter[i], onChange: (event) => processFilter(event.target.value, i), disabled: props.error }) : /* @__PURE__ */ import_react19.default.createElement(ChoiceText_default, { list: "dropDown_" + i, choices: columns[i], name: filterName, className: filterStyle, value: filter[i], onChange: (event) => processFilter(event.target.value, i), disabled: props.error })));
            }
          } else {
            if (row.search === false) {
              return /* @__PURE__ */ import_react19.default.createElement("th", { key, className: headerStyle }, i === dropDownIndex && main === true && htmlDropDown === true ? showDropDown(row, i) : null, row.dropDown === true && main === true ? /* @__PURE__ */ import_react19.default.createElement("button", { className: "sw-sst_headerButton " + fontColor, onClick: () => displayDropDown(row, i) }, row.header) : /* @__PURE__ */ import_react19.default.createElement("div", { className: fontColor }, row.header), doSort === true ? /* @__PURE__ */ import_react19.default.createElement("button", { name: "sort", onClick: () => sortClicked(row.name, "X", indexes, tableIndex), className: "sw-sst_buttonStyle2" }, btnImg) : null);
            } else {
              return (
                // Display header and input field for filtering
                /* @__PURE__ */ import_react19.default.createElement("th", { key, className: headerStyle + " sw-sst_bottom" }, i === dropDownIndex && main === true && htmlDropDown === true ? showDropDown(row, i) : null, /* @__PURE__ */ import_react19.default.createElement("div", null, row.dropDown === true && main === true ? /* @__PURE__ */ import_react19.default.createElement("button", { className: "sw-sst_headerButton " + fontColor, onClick: () => displayDropDown(row, i) }, row.header) : /* @__PURE__ */ import_react19.default.createElement("div", { className: fontColor }, row.header), doSort === true ? /* @__PURE__ */ import_react19.default.createElement("button", { name: "sort", onClick: () => sortClicked(row.name, "X", indexes, tableIndex), className: "sw-sst_buttonStyle2" }, btnImg) : null), /* @__PURE__ */ import_react19.default.createElement("span", { className: "sw-invalid_checkForError" }, hasProperty5(props, "choice") === false ? /* @__PURE__ */ import_react19.default.createElement("input", { type: "text", name: filterName, className: filterStyle, value: filter[i], onChange: (event) => processFilter(event.target.value, i), disabled: props.error }) : /* @__PURE__ */ import_react19.default.createElement(ChoiceText_default, { list: "dropDown" + i, choices: columns[i], name: filterName, className: filterStyle, value: filter[i], onChange: (event) => processFilter(event.target.value, i), disabled: props.error })))
              );
            }
          }
        } else if (row.sort === false || hasProperty5(props, "nosort") === true) {
          return /* @__PURE__ */ import_react19.default.createElement("th", { key, className: headerStyle }, i === dropDownIndex && main === true && htmlDropDown === true ? showDropDown(row, i) : null, row.dropDown === true && main === true ? /* @__PURE__ */ import_react19.default.createElement("button", { className: fontColor, onClick: () => displayDropDown(row, i) }, row.header) : /* @__PURE__ */ import_react19.default.createElement("div", { className: fontColor }, row.header));
        } else {
          return /* @__PURE__ */ import_react19.default.createElement("th", { key, className: headerStyle }, i === dropDownIndex && main === true && htmlDropDown === true ? showDropDown(row, i) : null, row.dropDown === true && main === true ? /* @__PURE__ */ import_react19.default.createElement("button", { className: "sw-sst_headerButton " + fontColor, onClick: () => displayDropDown(row, i) }, row.header) : /* @__PURE__ */ import_react19.default.createElement("div", { className: fontColor }, row.header), doSort === true ? /* @__PURE__ */ import_react19.default.createElement("button", { name: "sort", onClick: () => sortClicked(row.name, "X", indexes, tableIndex), className: "sw-sst_buttonStyle2" }, btnImg) : null);
        }
      };
      return f;
    }
    function buildFooter(row, i) {
      let key = "footer_" + i;
      return (
        // Place a value in the column
        /* @__PURE__ */ import_react19.default.createElement("td", { key, className: footerStyle }, row)
      );
    }
    function buildMathFooters(row, i) {
      if (row === void 0 || row === null) {
        return /* @__PURE__ */ import_react19.default.createElement("td", null);
      }
      let key = "mathfooter_" + i;
      let foot = [];
      for (let j = 0; j < row.length; j++) {
        foot.push(/* @__PURE__ */ import_react19.default.createElement("span", null, row[j], /* @__PURE__ */ import_react19.default.createElement("br", null)));
      }
      return (
        // Place a value in the column
        /* @__PURE__ */ import_react19.default.createElement("td", { key, className: footerStyle }, foot)
      );
    }
    function processFilterOn(value2) {
      setFilterOn(value2);
      if (value2 === "Y") {
        clearSetBackground(0, false);
      } else {
        setFilterPressed(false);
      }
      if (value2 !== "Y" && isControlBreak(controlBreakInfo) === true) {
        findCtrlBreak(controlBreakInfo, origIndexes);
      } else {
        setIndex(origIndexes, true);
        resetSortOrder();
      }
    }
    function processFilter(value2, i) {
      let local = [...filter];
      local[i] = value2;
      setFilter(local);
    }
    function filterValidate() {
      let localInvalid = [...invalid];
      localInvalid[FILTER].validity = false;
      localInvalid[FILTER].display = false;
      for (let i = 0; i < filter.length; i++) {
        if (filter[i] !== "") {
          return true;
        }
      }
      localInvalid = setInvalidScreen(localInvalid, FILTER, "");
      localInvalid[FILTER].display = false;
      setInvalid(localInvalid);
      setAlertMessage("A filter value must be entered in at least one filter box");
      setShowAlert(true);
      return false;
    }
    function filterButton() {
      if (filterValidate() === false) {
        return;
      }
      let data2 = props.data;
      let newData = [];
      let indexing = [];
      let found = [];
      let count = 0;
      let done = false;
      for (let i = 0; i < table.length; i++) {
        if (filter[i] !== "") {
          indexing.push(i);
        }
      }
      let foundDate = false;
      for (let i = 0; i < indexes.length; i++) {
        found = [];
        done = false;
        for (let j = 0; j < indexing.length && done === false; j++) {
          foundDate = false;
          if (hasProperty5(table[indexing[j]], "dataDate") && hasProperty5(table[indexing[j]], "filterDate")) {
            foundDate = true;
          }
          if (data2[indexes[i]][table[indexing[j]].name] === null || data2[indexes[i]][table[indexing[j]].name] === void 0) {
            found.push(false);
            done = true;
          } else if (foundDate === true) {
            let dataPart = null;
            let filterPart = null;
            if (table[indexing[j]].dataDate === "MM/DD/YYYY") {
              dataPart = convertDate2(data2[indexes[i]][table[indexing[j]].name], "/", 1);
            } else if (table[indexing[j]].dataDate === "MM-DD-YYYY") {
              dataPart = convertDate2(data2[indexes[i]][table[indexing[j]].name], "-", 1);
            } else if (table[indexing[j]].dataDate === "MM/DD/YYYY HH:MM:SS") {
              dataPart = convertDateTime(data2[indexes[i]][table[indexing[j]].name], "/", 1);
            } else if (table[indexing[j]].dataDate === "MM-DD-YYYY HH:MM:SS") {
              dataPart = convertDateTime(data2[indexes[i]][table[indexing[j]].name], "-", 1);
            } else if (table[indexing[j]].dataDate === "YYYY-MM-DDTHH:MM:SS.SSS") {
              dataPart = convertDateTimeReg(data2[indexes[i]][table[indexing[j]].name]);
            } else {
              dataPart = data2[indexes[i]][table[indexing[j]].name];
            }
            if (table[indexing[j]].filterDate === "MM/DD/YYYY") {
              if (filter[indexing[j]].length === "MM/DD/YYYY".length) {
                filterPart = convertDate2(filter[indexing[j]], "/", 1);
              } else if (filter[indexing[j]].length === "MM/YYYY".length && filter[indexing[j]].indexOf("/") !== -1) {
                filterPart = convertDate2(filter[indexing[j]], "/", 2);
              } else {
                filterPart = filter[indexing[j]];
              }
            } else if (table[indexing[j]].filterDate === "MM-DD-YYYY") {
              if (filter[indexing[j]].length === "MM-DD-YYYY".length) {
                filterPart = convertDate2(filter[indexing[j]], "-", 1);
              } else if (filter[indexing[j]].length === "MM-YYYY".length && filter[indexing[j]].indexOf("-") !== -1) {
                filterPart = convertDate2(filter[indexing[j]], "-", 2);
              } else {
                filterPart = filter[indexing[j]];
              }
            } else if (table[indexing[j]].filterDate === "MM/DD/YYYY HH:MM:SS") {
              if (filter[indexing[j]].length === "MM/DD/YYYY HH:MM:SS".length) {
                filterPart = convertDateTime(filter[indexing[j]], "/", 1);
              } else if (filter[indexing[j]].length === "MM/YYYY".length && filter[indexing[j]].indexOf("/") !== -1) {
                filterPart = convertDate2(filter[indexing[j]], "/", 2);
              } else {
                filterPart = filter[indexing[j]];
              }
            } else if (table[indexing[j]].filterDate === "MM-DD-YYYY HH:MM:SS") {
              if (filter[indexing[j]].length === "MM-DD-YYYY HH:MM:SS".length) {
                filterPart = convertDateTime(filter[indexing[j]], "-", 1);
              } else if (filter[indexing[j]].length === "MM/YYYY".length && filter[indexing[j]].indexOf("-") !== -1) {
                filterPart = convertDate2(filter[indexing[j]], "-", 2);
              } else {
                filterPart = filter[indexing[j]];
              }
            } else if (table[indexing].filterDate === "YYYY-MM-DDTHH:MM:SS.SSS") {
              if (filter[indexing[j]].length === "YYYY-MM-DDTHH:MM:SS.SSS".length) {
                filterPart = convertDateTimeReg(filter[indexing[j]]);
              } else {
                filterPart = filter[indexing[j]];
              }
            } else {
              filterPart = filter[indexing[j]];
            }
            if (dataPart.toString().indexOf(filterPart.toString()) !== -1) {
              found.push(true);
            } else {
              found.push(false);
              done = true;
            }
          } else if (data2[indexes[i]][table[indexing[j]].name].toString().indexOf(filter[indexing[j]].toString()) !== -1) {
            found.push(true);
          } else {
            found.push(false);
            done = true;
          }
        }
        let move = true;
        for (let k = 0; k < found.length && move === true; k++) {
          if (found[k] === false) {
            move = false;
          }
        }
        if (move === true) {
          newData.push(indexes[i]);
          count++;
        }
      }
      if (count > 0) {
        setIndex(newData, true);
        setFilterPressed(true);
        if (isControlBreak(controlBreakInfo) === true) {
          findCtrlBreak(controlBreakInfo, newData);
        }
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
    function convertDate2(date, char, type) {
      let split = date.split(char);
      if (type === 1) {
        return `${split[2]}-${split[0]}-${split[1]}`;
      } else {
        return `${split[1]}-${split[0]}`;
      }
    }
    function convertDateTime(date, char, type) {
      let dateTime2 = date.split(" ");
      let localDate = dateTime2[0].split(char);
      if (type === 1) {
        return `${localDate[2]}-${localDate[0]}-${localDate[1]}T${dateTime2[1]}`;
      } else {
        return `${localDate[1]}-${localDate[0]}`;
      }
    }
    function convertDateTimeReg(date) {
      let split = date.split(".");
      if (split.length === 0) {
        return date;
      } else {
        return split[0];
      }
    }
    function validate(_which) {
      let localInvalid = [...invalid];
      localInvalid[SRCHHDR].validity = false;
      localInvalid[SRCHHDR].display = false;
      localInvalid[SRCHITEM].validity = false;
      localInvalid[SRCHITEM].display = false;
      if (searchHeader === "") {
        localInvalid = setInvalidScreen(localInvalid, SRCHHDR, "A column header to be searched must be selected");
      }
      setInvalid(localInvalid);
      return localInvalid[SRCHHDR].validity === false && localInvalid[SRCHITEM].validity === false;
    }
    function searchItemButton() {
      if (table && validate("B") === true) {
        let search3 = null;
        search3 = hasProperty5(props, "ignorecase") === true ? searchItem.toUpperCase() : (
          // Convert to upper case to ignore case
          searchItem
        );
        let tableIndex = table.map(function(e) {
          return e.header;
        }).indexOf(searchHeader);
        if (hasProperty5(table[tableIndex], "dataDate") && hasProperty5(table[tableIndex], "searchDate")) {
          searchDate(search3, tableIndex);
        } else if (hasProperty5(props, "searchstart") === true) {
          searchStart(search3, table[tableIndex].name);
        } else {
          searchAny(search3, table[tableIndex].name);
        }
      }
    }
    function searchDate(searchItem2, tableIndex) {
      let data2 = props.data;
      let done = false;
      for (let i = 0; i < indexes.length && done === false; i++) {
        if (data2[indexes[i]][table[tableIndex].name] === null) {
          done = true;
        } else {
          let dataPart = null;
          let searchPart = null;
          if (table[tableIndex].dataDate === "MM/DD/YYYY") {
            dataPart = convertDate2(data2[indexes[i]][table[tableIndex].name], "/", 1);
          } else if (table[tableIndex].dataDate === "MM-DD-YYYY") {
            dataPart = convertDate2(data2[indexes[i]][table[tableIndex].name], "-", 1);
          } else if (table[tableIndex].dataDate === "MM/DD/YYYY HH:MM:SS") {
            dataPart = convertDateTime(data2[indexes[i]][table[tableIndex].name], "/", 1);
          } else if (table[tableIndex].dataDate === "MM-DD-YYYY HH:MM:SS") {
            dataPart = convertDateTime(data2[indexes[i]][table[tableIndex].name], "-", 1);
          } else if (table[tableIndex].dataDate === "YYYY-MM-DDTHH:MM:SS.SSS") {
            dataPart = convertDateTimeReg(data2[indexes[i]][table[tableIndex].name]);
          } else {
            dataPart = data2[indexes[i]][table[tableIndex].name];
          }
          if (table[tableIndex].searchDate === "MM/DD/YYYY") {
            if (searchItem2.length === "MM/DD/YYYY".length) {
              searchPart = convertDate2(searchItem2, "/", 1);
            } else if (searchItem2.length === "MM/YYYY".length && searchItem2.indexOf("/") !== -1) {
              searchPart = convertDate2(searchItem2, "/", 2);
            } else {
              searchPart = searchItem2;
            }
          } else if (table[tableIndex].searchDate === "MM-DD-YYYY") {
            if (searchItem2.length === "MM-DD-YYYY".length) {
              searchPart = convertDate2(searchItem2, "-", 1);
            } else if (searchItem2.length === "MM-YYYY".length && searchItem2.indexOf("-") !== -1) {
              searchPart = convertDate2(searchItem2, "-", 2);
            } else {
              searchPart = searchItem2;
            }
          } else if (table[tableIndex].searchDate === "MM/DD/YYYY HH:MM:SS") {
            if (searchItem2.length === "MM/DD/YYYY HH:MM:SS".length) {
              searchPart = convertDateTime(searchItem2, "/", 1);
            } else if (searchItem2.length === "MM/YYYY".length && searchItem2.indexOf("/") !== -1) {
              searchPart = convertDate2(searchItem2, "/", 2);
            } else {
              searchPart = searchItem2;
            }
          } else if (table[tableIndex].searchDate === "MM-DD-YYYY HH:MM:SS") {
            if (searchItem2.length === "MM-DD-YYYY HH:MM:SS".length) {
              searchPart = convertDateTime(searchItem2, "-", 1);
            } else if (searchItem2.length === "MM/YYYY".length && searchItem2.indexOf("-") !== -1) {
              searchPart = convertDate2(searchItem2, "-", 2);
            } else {
              searchPart = searchItem2;
            }
          } else if (table[tableIndex].searchDate === "YYYY-MM-DDTHH:MM:SS.SSS") {
            if (searchItem2.length === "YYYY-MM-DDTHH:MM:SS.SSS".length) {
              searchPart = convertDateTimeReg(searchItem2);
            } else {
              searchPart = searchItem2;
            }
          } else {
            searchPart = searchItem2;
          }
          if (dataPart.toString().indexOf(searchPart.toString()) !== -1) {
            setStartEnd(i, length, indexes);
            done = true;
          }
        }
      }
    }
    function searchStart(search3, name) {
      let begin = hasProperty5(props, "nocontsearch") === true || start === 0 ? 0 : start + 1;
      let found = false;
      for (let i = begin; i < length && found === false; i++) {
        let compareStr = hasProperty5(props, "ignorecase") ? props.data[indexes[i]][name].toString().toUpperCase() : props.data[indexes[i]][name].toString();
        if (compareStr.startsWith(search3)) {
          found = true;
          setStartEnd(i, length, indexes);
        }
      }
    }
    function searchAny(search3, name) {
      let begin = hasProperty5(props, "nocontsearch") === true || start === 0 ? 0 : start + 1;
      let found = false;
      for (let i = begin; i < props.data.length && found === false; i++) {
        const str = props.data[indexes[i]][name] ? props.data[indexes[i]][name].toString() : "";
        const compareStr = hasProperty5(props, "ignorecase") ? str.toUpperCase() : str;
        if (compareStr.indexOf(search3) !== -1) {
          found = true;
          setStartEnd(i, length, indexes);
        }
      }
    }
    function sortClicked(name, orderType, indexes2, tableIndex) {
      if (!table) {
        return [];
      }
      let index = table.map(function(e) {
        return e.name;
      }).indexOf(name);
      let localIndexes = [...indexes2];
      let ctrlBreak = false;
      let startingPosition = 0;
      let endingPosition = 0;
      if (isControlBreak(controlBreakInfo) === true) {
        startingPosition = startPos[tableIndex];
        if (tableIndex + 1 >= startPos.length) {
          endingPosition = startingPosition + 1;
        } else {
          endingPosition = startPos[tableIndex + 1];
        }
        localIndexes = [];
        for (let j = startingPosition; j < endingPosition; j++) {
          localIndexes.push(indexes2[j]);
        }
        ctrlBreak = true;
      }
      let order = [...sortOrder];
      let ordering = "A";
      if (orderType === "A") {
        ordering = "A";
      } else {
        if (order[index] === "N") {
          ordering = "A";
          order[index] = "A";
        } else if (order[index] === "A") {
          ordering = "D";
          order[index] = "D";
        } else if (order[index] === "D") {
          if (ctrlBreak === true) {
            ordering = "A";
            order[index] = "A";
          } else {
            ordering = "N";
            order[index] = "N";
          }
        }
        setSortOrder(order);
      }
      if (ordering === "N") {
        setIndex(copyIndex, false);
        return;
      }
      let dateFormat = null;
      if (hasProperty5(table[index], "sortDate")) {
        dateFormat = table[index].sortDate;
      }
      let sortAry = [];
      localIndexes.map((row) => {
        if (dateFormat !== null) {
          if (dateFormat === "MM/DD/YYYY") {
            sortAry.push({ index: row, data: convertDate2(props.data[row][name], "/", 1) });
          } else if (dateFormat === "MM-DD-YYYY") {
            sortAry.push({ index: row, data: convertDate2(props.data[row][name], "-", 1) });
          } else if (dateFormat === "MM/DD/YYYY HH:MM:SS") {
            sortAry.push({ index: row, data: convertDateTime(props.data[row][name], "/", 1) });
          } else if (dateFormat === "MM-DD-YYYY HH:MM:SS") {
            sortAry.push({ index: row, data: convertDateTime(props.data[row][name], "-", 1) });
          } else if (dateFormat === "YYYY-MM-DDTHH:MM:SS.SSS") {
            sortAry.push({ index: row, data: convertDateTimeReg(import_autoprefixer.data[row][name]) });
          } else {
            sortAry.push({ index: row, data: props.data[row][name] });
          }
        } else {
          sortAry.push({ index: row, data: props.data[row][name] });
        }
      });
      sortAry.sort(function(item1, item2) {
        if (typeof item1.data === "string" && hasProperty5(props, "ignorecase") === true) {
          item1.data = item1.data.toUpperCase();
          item2.data = item2.data !== null ? item2.data.toUpperCase() : null;
        }
        if (item1.data < item2.data) {
          return ordering === "A" ? -1 : 1;
        } else if (item1.data > item2.data) {
          return ordering === "A" ? 1 : -1;
        } else {
          return 0;
        }
      });
      if (ctrlBreak === true) {
        let cbData = [];
        console.log("sortAry :", sortAry);
        for (let i = 0; i < sortAry.length; i++) {
          localIndexes[i] = sortAry[i].index;
          cbData.push(props.data[sortAry[i].index]);
        }
        let newIndexes = [...indexes2];
        for (let i = startingPosition, j = 0; i < endingPosition; i++, j++) {
          newIndexes[i] = localIndexes[j];
        }
        let localData = [...controlBreakData];
        localData[tableIndex].data = cbData;
        setControlBreakData(localData);
        setIndex(newIndexes, false);
        return newIndexes;
      } else {
        let newIndexes = [];
        sortAry.map((row) => newIndexes.push(row.index));
        setIndex(newIndexes, false);
        return newIndexes;
      }
    }
    function alphabet(row, i) {
      let key = "anchor_" + i;
      return /* @__PURE__ */ import_react19.default.createElement("span", { key }, /* @__PURE__ */ import_react19.default.createElement("a", { onClick: () => letterLink(`${row}`, i), className: background[i] }, row), "\xA0\xA0");
    }
    function resetSortOrder() {
      let order = new Array(table.length).fill("N");
      setSortOrder(order);
    }
    function clearSetBackground(index, set) {
      let backgrd = [...background];
      for (let i = 0; i < backgrd.length; i++) {
        backgrd[i] = "sw-sst_regBackground";
      }
      if (set === true) {
        backgrd[index] = "sw-sst_letterBackground";
      }
      setBackground(backgrd);
    }
    function letterLink(letter, bIndex) {
      if (!table) {
        return;
      }
      let indexing = [...origIndexes];
      if (validate("H") === true) {
        let index = table.map(function(e) {
          return e.header;
        }).indexOf(searchHeader);
        clearSetBackground(bIndex, true);
        resetSortOrder();
        setIndex(origIndexes, true);
        if (letter === "^") {
          return;
        }
        const sortIndexes = sortClicked(table[index].name, "A", indexing);
        let newIndexes = [];
        let begin = 0;
        let found = false;
        for (begin = 0; begin < sortIndexes.length; begin++) {
          if (props.data[sortIndexes[begin]][table[index].name] !== null && props.data[sortIndexes[begin]][table[index].name].toString().startsWith(letter) === true) {
            found = true;
            break;
          }
        }
        let stop = 0;
        for (stop = begin; stop < sortIndexes.length; stop++) {
          if (props.data[sortIndexes[stop]][table[index].name] !== null && props.data[sortIndexes[stop]][table[index].name].toString().startsWith(letter) === false) {
            break;
          }
          newIndexes.push(sortIndexes[stop]);
        }
        if (found === true) {
          setIndex(newIndexes, true);
          setDisable(0, newIndexes.length);
          setFilterOn(false);
        } else {
          setAlertMessage("No " + searchHeader + " starts with a " + letter);
          setShowAlert(true);
        }
      }
    }
    function allButton() {
      setStart(0);
      setEnd(length);
    }
    function setDisable(index, endLen) {
      if (index > 0) {
        setPreviousDisabled(false);
        setTopDisabled(false);
      } else {
        setPreviousDisabled(true);
        setTopDisabled(true);
      }
      if (index + maxItems >= endLen) {
        setNextDisabled(true);
        setBottomDisabled(true);
      } else {
        setNextDisabled(false);
        setBottomDisabled(false);
      }
    }
    function sendIndexes(start2, end2, length2, indexes2) {
      let sentIndexes = [];
      for (let i = start2; i < end2 && i < length2; i++) {
        sentIndexes.push(indexes2[i]);
      }
      if (hasProperty5(props, "indexing")) {
        props.indexing(sentIndexes);
      }
      if (hasProperty5(props, "allIndexes") === true) {
        props.allIndexes(indexes2);
      }
    }
    function setStartEnd(index, dataLen, indexes2) {
      if (index !== -1) {
        if (index + maxItems >= dataLen) {
          setStart(index);
          setEnd(dataLen);
          hasProperty5(props, "startEnd") === true ? props.startEnd(index, dataLen) : null;
          sendIndexes(index, dataLen, dataLen, indexes2);
          setDisable(index, dataLen);
        } else {
          setStart(index);
          setEnd(index + maxItems);
          setDisable(index, dataLen);
          hasProperty5(props, "startEnd") === true ? props.startEnd(index, index + maxItems) : null;
          sendIndexes(index, index + maxItems, dataLen, indexes2);
        }
      }
    }
    function topButton() {
      if (maxItems < length) {
        setStart(0);
        setEnd(maxItems);
        hasProperty5(props, "startEnd") === true ? props.startEnd(0, maxItems) : null;
        sendIndexes(0, maxItems, length, indexes);
      } else {
        setStart(0);
        setEnd(length);
        hasProperty5(props, "startEnd") === true ? props.startEnd(0, length) : null;
        sendIndexes(0, length, length, indexes);
      }
      setDisable(0, length);
    }
    function previousButton() {
      let index = start - maxItems;
      if (index <= 0) {
        setStart(0);
        setEnd(maxItems);
        hasProperty5(props, "startEnd") === true ? props.startEnd(0, maxItems) : null;
        sendIndexes(0, maxItems, length, indexes);
      } else {
        setStart(index);
        setEnd(index + maxItems);
        hasProperty5(props, "startEnd") === true ? props.startEnd(index, index + maxItems) : null;
        sendIndexes(index, index + maxItems, length, indexes);
      }
      setDisable(index, length);
    }
    function nextButton() {
      let index = parseInt(end);
      let begin = 0;
      if (index < length) {
        begin = index;
      } else {
        begin = start;
      }
      if (index + maxItems >= length) {
        setStart(begin);
        setEnd(length);
        hasProperty5(props, "startEnd") === true ? props.startEnd(begin, length) : null;
        sendIndexes(begin, length, length, indexes);
      } else {
        setStart(begin);
        setEnd(index + maxItems);
        hasProperty5(props, "startEnd") === true ? props.startEnd(begin, index + maxItems) : null;
        sendIndexes(begin, index + maxItems, length, indexes);
      }
      setDisable(index, length);
    }
    function bottomButton() {
      if (length - maxItems < 0) {
        setStart(0);
        setEnd(length);
        hasProperty5(props, "startEnd") === true ? props.startEnd(0, length) : null;
        sendIndexes(0, length, length, indexes);
      } else {
        setStart(length - maxItems);
        setEnd(length);
        hasProperty5(props, "startEnd") === true ? props.startEnd(length - maxItems, length) : null;
        sendIndexes(length - maxItems, length, length, indexes);
      }
      setDisable(length, length);
    }
  };
  var SearchSortTable_default = SearchSortTable;

  // src/Slider.js
  var import_react21 = __toESM(__require("react"));
  var Slider = (props) => {
    const min = props.hasOwnProperty("start") ? props.start : 0;
    const max = props.hasOwnProperty("end") ? props.end : 100;
    const startValue = props.hasOwnProperty("startValue") ? props.startValue : 0;
    const displayValue = props.hasOwnProperty("noshow") ? false : true;
    const [rangeValue, setRangeValue] = (0, import_react21.useState)(startValue);
    return /* @__PURE__ */ import_react21.default.createElement("div", { className: "sw-slider_rangeslider" }, /* @__PURE__ */ import_react21.default.createElement("input", { type: "range", className: "sw-slider_range", name: "slider", min, defaultValue: startValue, max, onChange: (event) => setRangeValue(event.target.value), onMouseMove: (event) => setRangeValue(event.target.value) }), displayValue === true ? /* @__PURE__ */ import_react21.default.createElement("span", { id: "id_rangeValue", name: "rangeValue", value: rangeValue, className: "sw-slider_rangeValue" }, rangeValue) : null);
  };
  var Slider_default = Slider;

  // src/SpreadSheet.js
  var import_react22 = __toESM(__require("react"));
  var hasProperty6 = (obj, propName) => {
    return !!Object.getOwnPropertyDescriptor(obj, propName);
  };
  var functYes = null;
  var SpreadSheet = (props) => {
    if (hasProperty6(props, "sheet") === false) {
      console.error("SpreadSheet: The sheet prop is missing");
      return /* @__PURE__ */ import_react22.default.createElement("div", null);
    }
    const invalidArray = generateInvalid(0, props.sheet.length);
    const ADDITIONAL = hasProperty6(props, "additionalRows") === true ? props.additionalRows : 20;
    const ADD = hasProperty6(props, "blankRows") === true ? props.blankRows : 100;
    const [data2, setData] = (0, import_react22.useState)(props.data);
    const [start, setStart] = (0, import_react22.useState)("");
    const [indexes, setIndexes] = (0, import_react22.useState)([]);
    const [invalid, setInvalid] = (0, import_react22.useState)(invalidArray);
    const [showConfirm, setShowConfirm] = (0, import_react22.useState)(false);
    const [confirmMessage, setConfirmMessage] = (0, import_react22.useState)("");
    let sheet = [...props.sheet];
    for (let i = 0; i < sheet.length; i++) {
      if (hasProperty6(sheet[i], "validate") === false)
        sheet[i]["validate"] = false;
      if (hasProperty6(sheet[i], "save") === false)
        sheet[i]["save"] = true;
      if (hasProperty6(sheet[i], "hidden") === false)
        sheet[i]["hidden"] = false;
      if (hasProperty6(sheet[i], "disabled") === false)
        sheet[i]["disabled"] = false;
    }
    const populateDirty = () => {
      let localData = [...props.data];
      for (let i = 0; i < localData.length; i++) {
        if (localData[i].count === 0) {
          for (let j = 0; j < localData[i].dirty.length; j++) {
            if (localData[i][sheet[j].name] !== "" && localData[i][sheet[j].name] !== null && localData[i][sheet[j].name] !== void 0) {
              localData[i].dirty[j] = true;
              localData[i].count++;
            }
          }
        }
      }
      setData(localData);
    };
    (0, import_react22.useEffect)(() => {
      populateDirty();
      setData(props.data);
    }, [props.data]);
    const startEnd = (start2, end) => {
      setStart(start2);
      if (hasProperty6(props, "startEnd") === true) {
        props.startEnd(start2, end);
      }
    };
    const indexing = (indexes2) => {
      setIndexes(indexes2);
      if (hasProperty6(props, "indexing") === true) {
        props.indexing(indexes2);
      }
    };
    const populate = (numRows = ADD, clear = false) => {
      let blank = [];
      for (let i = 0; i < numRows; i++) {
        let obj = {
          count: 0,
          dirty: new Array(sheet.length).fill(false)
        };
        for (let j = 0; j < sheet.length; j++) {
          obj[sheet[j].name] = "";
        }
        blank.push(obj);
      }
      if (hasProperty6(props, "preload") === true) {
        props.preload(blank);
      }
      if (clear === true) {
        setData(blank);
      } else {
        setData((prev) => [...prev, ...blank]);
      }
    };
    (0, import_react22.useEffect)(() => {
      populate();
    }, []);
    const table = [];
    for (let i = 0; i < sheet.length; i++) {
      if (sheet[i].hidden === false) {
        table.push({ header: sheet[i].header, name: sheet[i].name, search: false, sort: false });
      }
    }
    const processCount = (localData, value2, index, posNum) => {
      if (value2 === "" && localData[index].count > 0) {
        localData[index].count--;
        localData[index].dirty[posNum] = false;
      } else if (localData[index].dirty[posNum] === false) {
        localData[index].count++;
        localData[index].dirty[posNum] = true;
      }
      return localData;
    };
    const processValue = (event, index, posNum) => {
      let localData = [...data2];
      let name = event.target.name;
      let value2 = event.target.value;
      localData = processCount(localData, value2, index, posNum);
      if (hasProperty6(props, "specialProcessing") === true) {
        localData = props.specialProcessing(localData, name, value2, index);
      }
      localData[index][name] = value2;
      setData(localData);
    };
    const validate = () => {
      let localInvalid = [...invalid];
      setInvalid(clearInvalidTable(localInvalid));
      for (let i = 0; i < data2.length; i++) {
        if (data2[i].count > 0) {
          for (let j = 0; j < sheet.length; j++) {
            if (sheet[j].validate === true && sheet[j].hidden === false) {
              if (data2[i][sheet[j].name] === "" || data2[i][sheet[j].name] === null || data2[i][sheet[j].name] === void 0) {
                localInvalid = setInvalidTable(localInvalid, j, i, `A ${sheet[j].header} must be given or selected`);
              } else if (sheet[j].type === "text" || sheet[j].type === "textarea") {
                let answer = sanitize(data2[i][sheet[j].name], sheet[j].header);
                if (answer.valid === false) {
                  localInvalid = setInvalidTable(localInvalid, j, i, answer.message);
                }
              }
            }
          }
        }
      }
      setInvalid(localInvalid);
      return validCheckTable(localInvalid);
    };
    const buildHTML = (row, pos) => {
      let html = [];
      const genButtonStyle2 = generateCSSButton("sw-ss_button", props.error);
      for (let i = 0; i < sheet.length; i++) {
        let rowSheet = sheet[i];
        if (rowSheet.hidden === false) {
          if (rowSheet.type === "text" || rowSheet.type === "date" || rowSheet.type === "number") {
            if (rowSheet.validate === true) {
              html.push(/* @__PURE__ */ import_react22.default.createElement("td", { className: "sw-invalid_checkForError" }, /* @__PURE__ */ import_react22.default.createElement(
                "input",
                {
                  type: rowSheet.type,
                  name: rowSheet.name,
                  value: row[rowSheet.name],
                  onChange: (event) => processValue(event, pos, i),
                  onClick: () => wasClickedTable(invalid, i, pos, setInvalid),
                  disabled: props.error || rowSheet.disabled,
                  className: rowSheet.className + " " + processInvalidStyleTable(invalid, i, pos)
                }
              ), checkValidityTable(invalid, i, pos)));
            } else {
              html.push(/* @__PURE__ */ import_react22.default.createElement("td", null, /* @__PURE__ */ import_react22.default.createElement(
                "input",
                {
                  type: rowSheet.type,
                  name: rowSheet.name,
                  value: row[rowSheet.name],
                  onChange: (event) => processValue(event, pos, i),
                  className: rowSheet.className,
                  disabled: props.error || rowSheet.disabled
                }
              )));
            }
          } else if (rowSheet.type === "textarea") {
            if (rowSheet.validate === true) {
              html.push(/* @__PURE__ */ import_react22.default.createElement("td", { className: "sw-invalid_checkForError" }, /* @__PURE__ */ import_react22.default.createElement(
                "textarea",
                {
                  name: rowSheet.name,
                  value: row[rowSheet.name],
                  onChange: (event) => processValue(event, pos, i),
                  onClick: () => wasClickedTable(invalid, i, pos, setInvalid),
                  disabled: props.error || rowSheet.disabled,
                  className: rowSheet.className + " " + processInvalidStyleTable(invalid, i, pos)
                }
              ), checkValidityTable(invalid, i, pos)));
            } else {
              html.push(/* @__PURE__ */ import_react22.default.createElement("td", null, /* @__PURE__ */ import_react22.default.createElement(
                "textarea",
                {
                  name: rowSheet.name,
                  value: row[rowSheet.name],
                  onChange: (event) => processValue(event, pos, i),
                  className: rowSheet.className,
                  disabled: props.error || rowSheet.disabled
                }
              )));
            }
          } else if (rowSheet.type === "Choice") {
            if (rowSheet.validate === true) {
              html.push(/* @__PURE__ */ import_react22.default.createElement("td", { className: "sw-invalid_checkForError" }, /* @__PURE__ */ import_react22.default.createElement(
                Choice,
                {
                  choices: rowSheet.choices,
                  name: rowSheet.name,
                  value: row[rowSheet.name],
                  onChange: (event) => processValue(event, pos, i),
                  onClick: () => wasClickedTable(invalid, i, pos, setInvalid),
                  disabled: props.error || rowSheet.disabled,
                  className: rowSheet.className + " " + processInvalidStyleTable(invalid, i, pos)
                }
              ), checkValidityTable(invalid, i, pos)));
            } else {
              html.push(/* @__PURE__ */ import_react22.default.createElement("td", null, /* @__PURE__ */ import_react22.default.createElement(
                Choice,
                {
                  choices: rowSheet.choices,
                  name: rowSheet.name,
                  value: row[rowSheet.name],
                  onChange: (event) => processValue(event, pos, i),
                  className: rowSheet.className,
                  disabled: props.error || rowSheet.disabled
                }
              )));
            }
          } else if (rowSheet.type === "ChoiceText") {
            if (rowSheet.validate === true) {
              html.push(/* @__PURE__ */ import_react22.default.createElement("td", { className: "sw-invalid_checkForError" }, /* @__PURE__ */ import_react22.default.createElement(
                ChoiceText_default,
                {
                  list: `sheetList_${i}_${pos}`,
                  choices: rowSheet.choices,
                  name: rowSheet.name,
                  value: row[rowSheet.name],
                  onChange: (event) => processValue(event, pos, i),
                  onClick: () => wasClickedTable(invalid, i, pos, setInvalid),
                  disabled: props.error || rowSheet.disabled,
                  className: rowSheet.className + " " + processInvalidStyleTable(invalid, i, pos)
                }
              ), checkValidityTable(invalid, i, pos)));
            } else {
              html.push(/* @__PURE__ */ import_react22.default.createElement("td", null, /* @__PURE__ */ import_react22.default.createElement(
                ChoiceText_default,
                {
                  list: `sheetList_${i}_${pos}`,
                  choices: rowSheet.choices,
                  name: rowSheet.name,
                  value: row[rowSheet.name],
                  onChange: (event) => processValue(event, pos, i),
                  className: rowSheet.className,
                  disabled: props.error || rowSheet.disabled
                }
              )));
            }
          } else if (rowSheet.type === "CheckBox") {
            html.push(/* @__PURE__ */ import_react22.default.createElement("td", null, /* @__PURE__ */ import_react22.default.createElement(
              CheckBox_default,
              {
                selectedValue: rowSheet.selectedValue,
                name: rowSheet.name,
                value: row[rowSheet.name],
                text: rowSheet.header,
                onChange: (event) => processValue(event, pos, i),
                className: rowSheet.className,
                disabled: props.error || rowSheet.disabled
              }
            )));
          } else if (rowSheet.type === "Radio") {
            html.push(/* @__PURE__ */ import_react22.default.createElement("td", null, /* @__PURE__ */ import_react22.default.createElement(
              Radio_default,
              {
                selectedValue: rowSheet.selectedValue,
                name: rowSheet.name,
                value: row[rowSheet.name],
                text: rowSheet.header,
                onChange: (event) => processValue(event, pos, i),
                className: rowSheet.className,
                disabled: props.error || rowSheet.disabled
              }
            )));
          } else if (rowSheet.type === "button") {
            html.push(/* @__PURE__ */ import_react22.default.createElement("td", null, /* @__PURE__ */ import_react22.default.createElement(
              "button",
              {
                name: rowSheet.name,
                onClick: () => rowSheet.buttonOnClick(rowSheet.parameters, pos, data2),
                className: genButtonStyle2 + " " + rowSheet.className,
                disabled: props.error || rowSheet.disabled
              },
              rowSheet.name
            )));
          } else if (rowSheet.type === "html") {
            html.push(/* @__PURE__ */ import_react22.default.createElement("td", null, rowSheet.html));
          }
        }
      }
      return html;
    };
    const eachRowInTable = (row, i) => {
      let key = "row_" + (start + i);
      let pos = indexes[i];
      let html = buildHTML(row, pos);
      return /* @__PURE__ */ import_react22.default.createElement("tr", { key }, html.map((row2) => row2));
    };
    const saveButton = async () => {
      if (validate() === true) {
        let localData = [...data2];
        let newData = [];
        for (let i = 0; i < localData.length; i++) {
          if (localData[i].count > 0) {
            newData.push(localData[i]);
          }
        }
        for (let i = 0; i < newData.length; i++) {
          if (hasProperty6(props, "specialProcessingSave") === true) {
            newData[i] = props.specialProcessingSave(newData[i]);
          }
          delete newData[i].dirty;
          delete newData[i].count;
          for (let j = 0; j < sheet.length; j++) {
            if (props.sheet[j].save === false) {
              delete newData[i][sheet[j].name];
            }
          }
        }
        if (newData.length !== 0) {
          if (hasProperty6(props, "saveFunct") === true) {
            props.saveFunct(newData);
          }
        }
      }
    };
    const clearButton = () => {
      functYes = clearButtonYes;
      setConfirmMessage("Do you want to clear?");
      setShowConfirm(true);
    };
    const clearButtonYes = () => {
      populate(ADD, true);
    };
    const genButtonStyle = generateCSSButton("sw-theme_buttonStyle", props.error);
    let title = null;
    if (hasProperty6(props, "title") === true) {
      title = /* @__PURE__ */ import_react22.default.createElement("h1", { className: "sw-ss_center" }, props.title);
    }
    return /* @__PURE__ */ import_react22.default.createElement("div", null, title, /* @__PURE__ */ import_react22.default.createElement(
      SearchSortTable_default,
      {
        data: data2,
        table,
        MAX_ITEMS: hasProperty6(props, "maxItems") === true ? props.maxItems : 50,
        eachRowInTable,
        startEnd,
        indexing,
        error: props.error,
        scroll: true,
        nosearch: true,
        nofilter: true,
        noheaderborder: true,
        height: hasProperty6(props, "height") === true ? props.height : "675px"
      }
    ), /* @__PURE__ */ import_react22.default.createElement("div", { className: "sw-ss_center" }, hasProperty6(props, "noSave") === true ? null : /* @__PURE__ */ import_react22.default.createElement("button", { name: "save", className: genButtonStyle, onClick: saveButton }, "Save"), hasProperty6(props, "noClear") === true ? null : /* @__PURE__ */ import_react22.default.createElement("button", { name: "clear", className: genButtonStyle, onClick: clearButton }, "Clear"), hasProperty6(props, "noAddRows") === true ? null : /* @__PURE__ */ import_react22.default.createElement("button", { name: "addrows", className: genButtonStyle, onClick: () => populate(ADDITIONAL) }, "Add Rows")), /* @__PURE__ */ import_react22.default.createElement(ConfirmModal_default, { show: showConfirm, yesFunct: functYes, closeFunct: setShowConfirm, message: confirmMessage }));
  };
  var SpreadSheet_default = SpreadSheet;

  // src/StatusBox.js
  var import_react23 = __toESM(__require("react"));
  var StatusBox = ({ status }) => {
    if (!status)
      return null;
    let errSection = null;
    if (status.err) {
      const errMsg = JSON.stringify(status.err, null, 2);
      console.log("status.err:", status.err);
      errSection = /* @__PURE__ */ import_react23.default.createElement(import_react23.default.Fragment, null, /* @__PURE__ */ import_react23.default.createElement("br", null), errMsg);
    }
    return /* @__PURE__ */ import_react23.default.createElement(import_react23.default.Fragment, null, status.msg, errSection);
  };

  // src/browserDetect.js
  var window2 = window2 ? window2 : {};
  var navigator2 = navigator2 ? navigator2 : { userAgent: "" };
  var document2 = document2 ? document2 : {};
  var isOpera = !!window2.opr && !!opr.addons || !!window2.opera || navigator2.userAgent.indexOf(" OPR/") >= 0;
  var isFirefox = typeof InstallTrigger !== "undefined";
  var isSafari = /constructor/i.test(window2.HTMLElement) || function(p) {
    return p.toString() === "[object SafariRemoteNotification]";
  }(!window2["safari"] || typeof safari !== "undefined" && window2["safari"].pushNotification);
  var isIE = !!document2.documentMode;
  var isEdge = !isIE && !!window2.StyleMedia;
  var isChrome = !!window2.chrome && (!!window2.chrome.webstore || !!window2.chrome.runtime);
  var isEdgeChromium = isChrome && navigator2.userAgent.indexOf("Edg") != -1;
  var isBlink = (isChrome || isOpera) && !!window2.CSS;

  // src/camel.js
  var toCamelCase = (str) => {
    return str.toLowerCase().replace(/_/g, " ").replace(/(?:^\w|[A-Z]|\b\w)/g, (ltr, idx) => idx === 0 ? ltr.toLowerCase() : ltr.toUpperCase()).replace(/\s+/g, "").replace("#", "");
  };

  // src/dateUtils.js
  var lastOfMonth = () => {
    let today = /* @__PURE__ */ new Date();
    const first = new Date(today.getFullYear(), today.getMonth() + 1, 1);
    const last = new Date(first - 1);
    const mm = last.getMonth() + 1;
    const month = ("" + mm).padStart(2, "0");
    return [last.getFullYear(), month, last.getDate()];
  };
  var todayString = () => {
    let today = /* @__PURE__ */ new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    if (dd < 10) {
      dd = `0${dd}`;
    }
    if (mm < 10) {
      mm = `0${mm}`;
    }
    return `${mm}/${dd}/${yyyy}`;
  };

  // src/generalStore.js
  var import_zustand = __require("zustand");
  var storeInventory = {};
  var createStoreItem = (name, initialValue) => {
    const setFn = toCamelCase("set " + name);
    const useStore = (0, import_zustand.create)((set) => ({
      [name]: initialValue,
      [setFn]: (newValue) => set((state) => ({ [name]: newValue }))
    }));
    storeInventory[name] = useStore;
    return () => useStore((state) => [state[name], state[setFn]]);
  };
  storeInventory["useUsername"] = createStoreItem("username", "");
  var useStoreItem = (name) => {
    const setFn = toCamelCase("set " + name);
    if (!storeInventory[name]) {
      throw new Error("call createStoreItem() before calling useStoreItem().");
    }
    const useStore = storeInventory[name];
    return useStore((state) => [state[name], state[setFn]]);
  };
  var openGeneralStore = () => {
    return storeInventory;
  };

  // src/localStrToDate.js
  var ltzCode = null;
  var getLTZ = () => {
    if (ltzCode == null) {
      var now2 = /* @__PURE__ */ new Date() + "";
      var i = now2.indexOf(" GMT");
      if (i > -1)
        ltzCode = now2.substring(i, i + 10);
      console.log("ltzCode:", ltzCode);
    }
    return ltzCode;
  };
  var localStrToDate = (target) => {
    if (target == null)
      return null;
    var i = target.indexOf(" GMT");
    if (i == -1)
      target += getLTZ();
    return new Date(target);
  };

  // src/makeChangeHandler.js
  function makeChangeHandler_default(yourComponent) {
    return (e) => {
      if (typeof e === "string")
        return;
      if (typeof e.preventDefault === "function")
        e.preventDefault();
      if ("target" in e && "name" in e.target && "value" in e.target) {
        var stateChange = {};
        stateChange[e.target.name] = e.target.value;
        yourComponent.setState(stateChange);
      } else {
      }
    };
  }

  // src/serviceWorker.js
  var isLocalhost = Boolean(
    window.location.hostname === "localhost" || // [::1] is the IPv6 localhost address.
    window.location.hostname === "[::1]" || // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
  );
  function register(config) {
    if (false) {
      const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
      if (publicUrl.origin !== window.location.origin) {
        return;
      }
      window.addEventListener("load", () => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
        if (isLocalhost) {
          checkValidServiceWorker(swUrl, config);
          navigator.serviceWorker.ready.then(() => {
            console.log(
              "This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA"
            );
          });
        } else {
          registerValidSW(swUrl, config);
        }
      });
    }
  }
  function unregister() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.unregister();
      }).catch((error) => {
        console.error(error.message);
      });
    }
  }

  // src/time.js
  function now() {
    return /* @__PURE__ */ new Date();
  }
  var twoDigit = (n) => {
    return n < 10 ? "0" + n : "" + n;
  };
  var TS = () => {
    const d = /* @__PURE__ */ new Date();
    return "[" + d.getFullYear() + "-" + twoDigit(d.getMonth() + 1) + "-" + twoDigit(d.getDate()) + " " + twoDigit(d.getHours()) + ":" + twoDigit(d.getMinutes()) + ":" + twoDigit(d.getSeconds()) + "." + d.getMilliseconds() + "]";
  };

  // src/forms/DefaultFormElements.js
  var applyOptions = (formFieldList, missing) => {
    formFieldList.map((f) => {
      if ((f.type == "choice" || f.type == "chkBoxes") && missing[f.name]) {
        if (f.options != missing[f.name]) {
        }
        f.options = missing[f.name];
      }
    });
    return formFieldList;
  };

  // src/forms/FormFields.js
  var import_react28 = __toESM(__require("react"));

  // src/forms/FieldGenerator.js
  var import_react27 = __toESM(__require("react"));

  // src/forms/List.js
  var import_react24 = __toESM(__require("react"));
  var compareString = (a, b) => {
    a = a.toUpperCase();
    b = b.toUpperCase();
    if (a < b)
      return -1;
    if (a > b)
      return 1;
    return 0;
  };
  var sortKeysByValue = (obj) => {
    const keys = Object.keys(obj);
    const list2 = keys.map((k) => {
      return { id: k, value: obj[k] };
    }).sort((a, b) => compareString(a.value, b.value));
    return list2.map((item) => item.id);
  };
  var Choice2 = (propsIn) => {
    const { list: list2, choices, size, ...props } = propsIn;
    const siz = size || 10;
    const opt = list2 || choices || [];
    const isKeyed = !Array.isArray(opt);
    const keys = isKeyed ? sortKeysByValue(opt) : opt;
    const genOption = (el, k) => {
      if (isKeyed) {
        return opt[el] == props.value ? /* @__PURE__ */ import_react24.default.createElement("option", { key: k, value: el, selected: true }, opt[el]) : (
          // <option key="1" value="2" selected={true}>'Hernandez, April'</option>
          /* @__PURE__ */ import_react24.default.createElement("option", { key: k, value: el }, opt[el])
        );
      } else {
        return el == props.value ? /* @__PURE__ */ import_react24.default.createElement("option", { key: k, value: el, selected: true }, el) : /* @__PURE__ */ import_react24.default.createElement("option", { key: k, value: el }, el);
      }
    };
    if (!isKeyed && typeof props.value == "string" && Array.isArray(opt) && !opt.includes(props.value)) {
      console.log(`Adding missing default value: '${value}' to ${props.name} [${opt.length}]`);
      opt.unshift(props.value);
    }
    if (props.multiple) {
      return /* @__PURE__ */ import_react24.default.createElement(import_react24.Fragment, null, /* @__PURE__ */ import_react24.default.createElement("select", { multiple: true, size: siz, ...props }, keys.map((el, k) => genOption(el, k))));
    } else {
      return /* @__PURE__ */ import_react24.default.createElement(import_react24.Fragment, null, /* @__PURE__ */ import_react24.default.createElement("select", { ...props }, keys.map((el, k) => genOption(el, k))));
    }
  };

  // src/forms/Input.js
  var import_react25 = __toESM(__require("react"));
  var Input = (props) => {
    const {
      className,
      type,
      name,
      text,
      handleChange,
      id = name,
      value: value2 = "",
      placeholder = text,
      required = false,
      ...whatsleft
    } = props;
    return /* @__PURE__ */ import_react25.default.createElement(
      "input",
      {
        className,
        key: id,
        type,
        name,
        value: value2,
        id,
        placeholder,
        required,
        onChange: handleChange,
        ...whatsleft
      }
    );
  };
  var Input_default = Input;

  // src/forms/CheckBoxGroup.js
  var import_react26 = __toESM(__require("react"));
  var CheckBoxGroup = ({
    choices,
    name,
    values,
    onChange,
    className
  }) => {
    if (!choices)
      choices = [];
    const n = choices.length;
    if (!values)
      values = Array(n).fill("");
    const [items, setItems] = (0, import_react26.useState)(values);
    const setOneItem = (e) => {
      let arr = [...items];
      arr[e.target.name] = e.target.value;
      setItems(arr);
      e.target.name = name;
      e.target.value = arr;
      onChange(e);
    };
    if (choices.length === 0)
      return /* @__PURE__ */ import_react26.default.createElement("div", { className }, "\xA0 \xA0 \xA0 \xA0");
    return /* @__PURE__ */ import_react26.default.createElement("div", { className }, choices.map(
      (word, idx) => /* @__PURE__ */ import_react26.default.createElement(
        CheckBox_default,
        {
          key: idx,
          id: name + "-" + idx,
          selectedValue: word,
          text: word,
          name: idx,
          value: items[idx],
          onChange: setOneItem
        }
      )
    ));
  };
  var CheckBoxGroup_default = CheckBoxGroup;

  // src/forms/FieldGenerator.js
  function isFunction(functionToCheck) {
    return functionToCheck && {}.toString.call(functionToCheck) === "[object Function]";
  }
  var createFieldTextArea = (f, handleChange) => {
    const { className, name, rows = 1, cols = 30, ...whatsleft } = f;
    return /* @__PURE__ */ import_react27.default.createElement(
      "textarea",
      {
        ...whatsleft,
        className: `input-field form-control ${className || ""}`,
        name,
        key: name,
        rows,
        cols,
        onChange: handleChange
      }
    );
  };
  var createFieldText = (f, handleChange) => {
    const { className, ...whatsleft } = f;
    return /* @__PURE__ */ import_react27.default.createElement(
      Input_default,
      {
        ...whatsleft,
        className: `input-field form-control ${className || ""}`,
        handleChange
      }
    );
  };
  var createFieldChoice = (f, handleChange) => {
    const { className, name, ...whatsleft } = f;
    const options = isFunction(f.options) ? f.options() : f.options;
    return /* @__PURE__ */ import_react27.default.createElement(
      Choice2,
      {
        ...whatsleft,
        className: `select-field form-control ${className || ""}`,
        name,
        key: name,
        id: name,
        choices: options,
        onChange: handleChange
      }
    );
  };
  var createFieldChkBox = (f, handleChange) => {
    const { className, name, ...whatsleft } = f;
    const options = isFunction(f.options) ? f.options() : f.options;
    return /* @__PURE__ */ import_react27.default.createElement(
      CheckBox_default,
      {
        ...whatsleft,
        className: `checkbox-field form-control ${className || ""}`,
        name,
        key: name,
        choices: options,
        onChange: handleChange
      }
    );
  };
  var createFieldChkBoxes = (f, handleChange) => {
    const { className, name, ...whatsleft } = f;
    const options = isFunction(f.options) ? f.options() : f.options;
    return /* @__PURE__ */ import_react27.default.createElement(
      CheckBoxGroup_default,
      {
        ...whatsleft,
        className: `checkbox-group-field form-control ${className || ""}`,
        name,
        key: name,
        choices: options,
        onChange: handleChange
      }
    );
  };
  var createFieldDate = (f, handleChange) => {
    const { className, name, format, ...whatsleft } = f;
    return /* @__PURE__ */ import_react27.default.createElement(
      DateInput_default,
      {
        ...whatsleft,
        className: `date-field form-control ${className || ""}`,
        name,
        format,
        key: name,
        placeholder: format,
        onChange: handleChange
      }
    );
  };
  var createFieldNumber = (f, handleChange) => {
    const { className, ...whatsleft } = f;
    return /* @__PURE__ */ import_react27.default.createElement(
      Input_default,
      {
        ...whatsleft,
        type: "number",
        className: `input-field form-control ${className || ""}`,
        handleChange
      }
    );
  };
  var fieldGenerators = {
    "text": createFieldText,
    "textArea": createFieldTextArea,
    "password": createFieldText,
    "email": createFieldText,
    "choice": createFieldChoice,
    "chkBox": createFieldChkBox,
    "chkBoxes": createFieldChkBoxes,
    "date": createFieldDate,
    "number": createFieldNumber
    // TODO: Radio buttons, DoubleListBox, List, File, (incomplete list)
  };
  var setFieldGenerator = (fieldType, func) => {
    fieldGenerators[fieldType] = func;
  };
  var fieldGeneratorLookup = (fieldType) => {
    return fieldGenerators[fieldType];
  };

  // src/forms/FormFields.js
  var createFields = (formStructure, formData, handleChange) => {
    return formStructure.map((f, idx) => createField(f, idx, formData[f.name], handleChange));
  };
  var createField = (fieldStructure, idx, value2, handleChange) => {
    const f = { ...fieldStructure, value: value2 };
    const gen = fieldGeneratorLookup(f.type);
    let field = `unkknown field type: ${f.type}`;
    const ifRequired = f.required ? /* @__PURE__ */ import_react28.default.createElement("span", { className: "required" }, "*") : null;
    if (gen) {
      try {
        field = gen(f, handleChange);
      } catch (e) {
        const msg = `Error Creating Field type: ${f.type} [${idx}]`;
        console.log(msg);
        console.log(JSON.stringify(fieldStructure, null, 2));
        console.log(e);
        console.log(e.stack());
        field = msg;
      }
    }
    return /* @__PURE__ */ import_react28.default.createElement("label", { htmlFor: f.name, key: idx, className: "form-group" }, /* @__PURE__ */ import_react28.default.createElement("span", null, f.label, ifRequired), field);
  };
  var FormFields = ({ formStructure, formData, setFormData, showDebug }) => {
    if (!formStructure) {
      console.log("missing formStructure");
      formStructure = [];
    }
    const handleChange = (e) => {
      if (showDebug) {
        console.log(`FormFields.handleChange [${e.target.name}] = ${e.target.value};`);
      }
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const [fields, setFields] = (0, import_react28.useState)(createFields(formStructure, formData, handleChange));
    (0, import_react28.useEffect)(() => {
      setFields(createFields(formStructure, formData, handleChange));
    }, [formData]);
    if (!fields) {
      return "<FormFields />   Somthing horrible: createFields() returned null";
    }
    const badEntry = fields.findIndex((element) => element === null);
    if (badEntry !== -1) {
      console.log({ formStructure });
      return `<FormFields />   Somthing horrible: createFields() returned [${badEntry}] as null`;
    }
    return /* @__PURE__ */ import_react28.default.createElement(import_react28.default.Fragment, null, fields);
  };
  var FormFields_default = FormFields;

  // src/forms/Show.js
  var pretty = (obj) => JSON.stringify(obj, null, 2);
  var Show = ({ data: data2, hide }) => {
    const _data = { ...data2 };
    if (hide)
      hide.map((f) => {
        delete _data[f];
      });
    return /* @__PURE__ */ React.createElement("pre", null, pretty(_data));
  };

  // src/forms/Form.js
  var import_react29 = __toESM(__require("react"));
  var Form = (props) => {
    if (props.debug) {
      console.log("------- Form:");
    }
    const heading = props.heading ? props.heading : "";
    const debug = props.debug || props.show;
    const doneBtnLabel = props.doneBtnLabel ? props.doneBtnLabel : null;
    const businessLogic = props.businessLogic ? props.businessLogic : (old, changed) => changed;
    const [formData, setFormDataInternal] = (0, import_react29.useState)({});
    const [formList, setFormList] = (0, import_react29.useState)(props.form);
    (0, import_react29.useEffect)(() => {
      if (debug) {
        console.log("InitialData setup");
      }
      setFormData(props.data);
    }, []);
    (0, import_react29.useEffect)(() => {
      if (debug) {
        console.log("   Form: props.form changed");
      }
      setFormData(props.data);
    }, [props.form]);
    (0, import_react29.useEffect)(() => {
      if (debug) {
        console.log("   Form: props.data changed");
      }
      setFormData(props.data);
    }, [props.data]);
    const setFormData = (newData) => {
      const [modState, formOpts] = businessLogic(formData, newData);
      setFormList(applyOptions(props.form, formOpts));
      setFormDataInternal(modState);
    };
    const flexParent = { display: "flex", flexDirection: "row" };
    const flexChild = props.show ? { flex: "50%" } : {};
    const rightChild = { ...flexChild, borderLeft: "solid gray", borderWidth: "thin" };
    const onSubmit = (e) => {
      e.preventDefault();
      props.onSubmit(formData);
    };
    const doneButton = doneBtnLabel ? /* @__PURE__ */ import_react29.default.createElement("input", { type: "button", onClick: onSubmit, value: doneBtnLabel }) : null;
    return /* @__PURE__ */ import_react29.default.createElement("div", { style: flexParent }, /* @__PURE__ */ import_react29.default.createElement("div", { style: flexChild }, /* @__PURE__ */ import_react29.default.createElement("div", { className: props.className }, /* @__PURE__ */ import_react29.default.createElement("div", { className: "heading" }, heading), /* @__PURE__ */ import_react29.default.createElement(
      FormFields_default,
      {
        formStructure: formList,
        formData,
        setFormData,
        showDebug: debug
      }
    ), /* @__PURE__ */ import_react29.default.createElement("div", { className: "footer" }, doneButton))), props.show && /* @__PURE__ */ import_react29.default.createElement("div", { style: rightChild }, /* @__PURE__ */ import_react29.default.createElement(ReactJson, { name: "data", src: formData }), /* @__PURE__ */ import_react29.default.createElement("hr", null), /* @__PURE__ */ import_react29.default.createElement(ReactJson, { name: "formList", src: formList })));
  };
  var Form_default = Form;

  // src/forms/useFetch.js
  var import_react30 = __require("react");
  function useFetch(url) {
    const [data2, setData] = (0, import_react30.useState)([]);
    async function fetchUrl(url2) {
      try {
        const response = await fetch(url2);
        const json = await response.json();
        setData(json);
      } catch (err) {
        console.log("Unable to load err:", err);
        console.log("Unable to load url:", url2);
      }
    }
    (0, import_react30.useEffect)(() => {
      fetchUrl(url);
    }, [url]);
    return [data2];
  }
  var useFetch_default = useFetch;
})();
//# sourceMappingURL=index.js.map
