// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,o;t=this,o=function(){"use strict";function t(t,o){return t===o||t!=t&&o!=o}var o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),n=Object.prototype.toString,e=Object.prototype.hasOwnProperty,r="function"==typeof Symbol?Symbol:void 0,f="function"==typeof r?r.toStringTag:"",l=o&&"symbol"==typeof Symbol.toStringTag?function(t){var o,r,l,i,a;if(null==t)return n.call(t);r=t[f],a=f,o=null!=(i=t)&&e.call(i,a);try{t[f]=void 0}catch(o){return n.call(t)}return l=n.call(t),o?t[f]=r:delete t[f],l}:function(t){return n.call(t)},i="function"==typeof Float32Array,a=Number.POSITIVE_INFINITY,u="function"==typeof Float32Array?Float32Array:null,y="function"==typeof Float32Array?Float32Array:void 0,c=function(){var t,o,n;if("function"!=typeof u)return!1;try{o=new u([1,3.14,-3.14,5e40]),n=o,t=(i&&n instanceof Float32Array||"[object Float32Array]"===l(n))&&1===o[0]&&3.140000104904175===o[1]&&-3.140000104904175===o[2]&&o[3]===a}catch(o){t=!1}return t}()?y:function(){throw new Error("not implemented")};function p(t){var o=new c(2);return o[0]=t.re,o[1]=t.im,o}return function(o,n){var e=p(o),r=p(n);return t(e[0],r[0])&&t(e[1],r[1])}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(t="undefined"!=typeof globalThis?globalThis:t||self).isSameValueZerof=o();
//# sourceMappingURL=browser.js.map
