parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"sfan":[function(require,module,exports) {
"use strict";var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable;function n(r){if(null==r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}function o(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var t={},e=0;e<10;e++)t["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(r){return t[r]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(r){n[r]=r}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(r){return!1}}module.exports=o()?Object.assign:function(o,c){for(var a,i,s=n(o),f=1;f<arguments.length;f++){for(var u in a=Object(arguments[f]))t.call(a,u)&&(s[u]=a[u]);if(r){i=r(a);for(var b=0;b<i.length;b++)e.call(a,i[b])&&(s[i[b]]=a[i[b]])}}return s};
},{}],"mv/J":[function(require,module,exports) {
"use strict";var e=require("object-assign"),r="function"==typeof Symbol&&Symbol.for,t=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,u=r?Symbol.for("react.strict_mode"):60108,l=r?Symbol.for("react.profiler"):60114,i=r?Symbol.for("react.provider"):60109,c=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,a=r?Symbol.for("react.forward_ref"):60112;r&&Symbol.for("react.placeholder");var p="function"==typeof Symbol&&Symbol.iterator;function s(e,r,t,n,o,u,l,i){if(!e){if(e=void 0,void 0===r)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[t,n,o,u,l,i],f=0;(e=Error(r.replace(/%s/g,function(){return c[f++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}function y(e){for(var r=arguments.length-1,t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=0;n<r;n++)t+="&args[]="+encodeURIComponent(arguments[n+1]);s(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",t)}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function h(e,r,t){this.props=e,this.context=r,this.refs=v,this.updater=t||d}function m(){}function b(e,r,t){this.props=e,this.context=r,this.refs=v,this.updater=t||d}h.prototype.isReactComponent={},h.prototype.setState=function(e,r){"object"!=typeof e&&"function"!=typeof e&&null!=e&&y("85"),this.updater.enqueueSetState(this,e,r,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=h.prototype;var _=b.prototype=new m;_.constructor=b,e(_,h.prototype),_.isPureReactComponent=!0;var S={current:null,currentDispatcher:null},g=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function $(e,r,n){var o=void 0,u={},l=null,i=null;if(null!=r)for(o in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(l=""+r.key),r)g.call(r,o)&&!k.hasOwnProperty(o)&&(u[o]=r[o]);var c=arguments.length-2;if(1===c)u.children=n;else if(1<c){for(var f=Array(c),a=0;a<c;a++)f[a]=arguments[a+2];u.children=f}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===u[o]&&(u[o]=c[o]);return{$$typeof:t,type:e,key:l,ref:i,props:u,_owner:S.current}}function w(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}function P(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return r[e]})}var j=/\/+/g,C=[];function E(e,r,t,n){if(C.length){var o=C.pop();return o.result=e,o.keyPrefix=r,o.func=t,o.context=n,o.count=0,o}return{result:e,keyPrefix:r,func:t,context:n,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>C.length&&C.push(e)}function O(e,r,o,u){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var i=!1;if(null===e)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case t:case n:i=!0}}if(i)return o(u,e,""===r?"."+U(e,0):r),1;if(i=0,r=""===r?".":r+":",Array.isArray(e))for(var c=0;c<e.length;c++){var f=r+U(l=e[c],c);i+=O(l,f,o,u)}else if(null===e||"object"!=typeof e?f=null:f="function"==typeof(f=p&&e[p]||e["@@iterator"])?f:null,"function"==typeof f)for(e=f.call(e),c=0;!(l=e.next()).done;)i+=O(l=l.value,f=r+U(l,c++),o,u);else"object"===l&&y("31","[object Object]"===(o=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":o,"");return i}function A(e,r,t){return null==e?0:O(e,"",r,t)}function U(e,r){return"object"==typeof e&&null!==e&&null!=e.key?P(e.key):r.toString(36)}function q(e,r){e.func.call(e.context,r,e.count++)}function F(e,r,t){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?I(e,n,t,function(e){return e}):null!=e&&(x(e)&&(e=w(e,o+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(j,"$&/")+"/")+t)),n.push(e))}function I(e,r,t,n,o){var u="";null!=t&&(u=(""+t).replace(j,"$&/")+"/"),A(e,F,r=E(r,u,n,o)),R(r)}function M(e,r){var t=S.currentDispatcher;return null===t&&y("277"),t.readContext(e,r)}var D={Children:{map:function(e,r,t){if(null==e)return e;var n=[];return I(e,n,null,r,t),n},forEach:function(e,r,t){if(null==e)return e;A(e,q,r=E(null,null,r,t)),R(r)},count:function(e){return A(e,function(){return null},null)},toArray:function(e){var r=[];return I(e,r,null,function(e){return e}),r},only:function(e){return x(e)||y("143"),e}},createRef:function(){return{current:null}},Component:h,PureComponent:b,createContext:function(e,r){return void 0===r&&(r=null),(e={$$typeof:c,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,Provider:null,Consumer:null,unstable_read:null}).Provider={$$typeof:i,_context:e},e.Consumer=e,e.unstable_read=M.bind(null,e),e},forwardRef:function(e){return{$$typeof:a,render:e}},Fragment:o,StrictMode:u,unstable_AsyncMode:f,unstable_Profiler:l,createElement:$,cloneElement:function(r,n,o){null==r&&y("267",r);var u=void 0,l=e({},r.props),i=r.key,c=r.ref,f=r._owner;if(null!=n){void 0!==n.ref&&(c=n.ref,f=S.current),void 0!==n.key&&(i=""+n.key);var a=void 0;for(u in r.type&&r.type.defaultProps&&(a=r.type.defaultProps),n)g.call(n,u)&&!k.hasOwnProperty(u)&&(l[u]=void 0===n[u]&&void 0!==a?a[u]:n[u])}if(1===(u=arguments.length-2))l.children=o;else if(1<u){a=Array(u);for(var p=0;p<u;p++)a[p]=arguments[p+2];l.children=a}return{$$typeof:t,type:r.type,key:i,ref:c,props:l,_owner:f}},createFactory:function(e){var r=$.bind(null,e);return r.type=e,r},isValidElement:x,version:"16.5.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:S,assign:e}},T={default:D},V=T&&D||T;module.exports=V.default||V;
},{"object-assign":"sfan"}],"u853":[function(require,module,exports) {
"use strict";module.exports=require("./cjs/react.production.min.js");
},{"./cjs/react.production.min.js":"mv/J"}],"d81k":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=o;var e=["constructor","render","componentWillMount","componentDidMount","componentWillReceiveProps","shouldComponentUpdate","componentWillUpdate","componentDidUpdate","componentWillUnmount"],t=[];function o(o){if(void 0!==o){var r=Object.getPrototypeOf(o);(t=arguments.length>1?Array.prototype.slice.call(arguments,1):Object.getOwnPropertyNames(r)).forEach(function(t){var o=Object.getOwnPropertyDescriptor(r,t);void 0!==o?-1===e.indexOf(t)&&"function"==typeof o.value&&Object.defineProperty(r,t,n(r,t,o)):console.warn('Autobind: "'+t+'" method not found in class.')})}else console.error("Autobind error: No context provided.")}function n(e,t,o){var n=o.value;return{configurable:!0,get:function(){if(this===e||this.hasOwnProperty(t))return n;var o=n.bind(this);return Object.defineProperty(this,t,{value:o,configurable:!0,writable:!0}),o}}}module.exports=exports.default;
},{}],"9dun":[function(require,module,exports) {
module.exports=require("./lib/autoBind");
},{"./lib/autoBind":"d81k"}],"Y+iy":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),r=require("react"),n=u(r),o=require("react-autobind"),a=u(o);function u(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s={backgroundColor:"Transparent",backgroundRepeat:"no-repeat",border:"none",cursor:"pointer",overflow:"hidden",outline:"none",color:"inherit"},f=String.fromCharCode(9745),h=String.fromCharCode(9744),d=function(r){function o(e){i(this,o);var t=c(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e));return(0,a.default)(t),t}return p(o,n.default.Component),t(o,[{key:"handle",value:function(e){"function"==typeof e.preventDefault&&e.preventDefault(),e.target.name=this.props.name,e.target.value=this.props.value===this.props.selectedValue?"":this.props.selectedValue,this.props.onChange(e)}},{key:"render",value:function(){var t=this.props,r=t.selectedValue,o=t.text,a=t.color,u=t.style,i=l(t,["selectedValue","text","color","style"]),c=this.props.value===r?f:h,p=e({},s,u,{color:a});return n.default.createElement("button",e({type:"button",onClick:this.handle,style:p},i),c,o)}}]),o}();exports.default=d;
},{"react":"u853","react-autobind":"9dun"}],"9t91":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),r=require("react"),n=o(r);function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(r){function o(){return u(this,o),a(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return c(o,n.default.Component),t(o,[{key:"render",value:function(){var t=e({},this.props),r=t.choices;return delete t.choices,n.default.createElement("span",null,n.default.createElement("select",t,r.map(function(e){return n.default.createElement("option",{key:e,value:e},e)})))}}]),o}();exports.default=i;
},{"react":"u853"}],"+Jkp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),r=require("react"),n=u(r),o=require("react-autobind"),a=u(o);function u(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var p=String.fromCharCode(9899),s=String.fromCharCode(9898),d=n.default.Fragment,b=function(r){function o(e){i(this,o);var t=c(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e));return(0,a.default)(t),t}return f(o,n.default.Component),t(o,[{key:"handle",value:function(e){"function"==typeof e.preventDefault&&e.preventDefault(),e.target.name=this.props.name,e.target.value=this.props.selectedValue,this.props.onChange(e)}},{key:"render",value:function(){var t=this.props,r=t.selectedValue,o=t.text,a=t.style,u=l(t,["selectedValue","text","style"]),i=this.props.value===r?p:s,c=e({},{border:"none",backgroundColor:"white",borderRadius:"25px"},a);return n.default.createElement(d,null,n.default.createElement("button",e({type:"button",onClick:this.handle,style:c},u),i),o)}}]),o}();exports.default=b;
},{"react":"u853","react-autobind":"9dun"}],"f/LS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function t(t){return function(o){if("string"!=typeof o)if("function"==typeof o.preventDefault){o.preventDefault();var n={};n[o.target.name]=o.target.value,t.setState(n)}else console.log(void 0===o?"undefined":e(o)),console.log(o)}}exports.makeChangeHandler=t;
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./CheckBox"),a=l(e),r=require("./Choice"),u=l(r),d=require("./Radio"),i=l(d),o=require("./makeChangeHandler");function l(e){return e&&e.__esModule?e:{default:e}}module.exports={CheckBox:a.default,Choice:u.default,Radio:i.default,makeChangeHandler:o.makeChangeHandler};
},{"./CheckBox":"Y+iy","./Choice":"9t91","./Radio":"+Jkp","./makeChangeHandler":"f/LS"}]},{},["Focm"], null)
//# sourceMappingURL=/index.map