!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.vuexViewport=n():t.vuexViewport=n()}(window,function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=4)}([function(t,n){t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}},function(t,n,e){var r=e(6),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},function(t,n,e){var r=e(1).Symbol;t.exports=r},function(t,n,e){var r=e(0),o=e(5),i=e(8),u="Expected a function",c=Math.max,f=Math.min;t.exports=function(t,n,e){var a,l,s,p,d,v,b=0,y=!1,x=!1,m=!0;if("function"!=typeof t)throw new TypeError(u);function j(n){var e=a,r=l;return a=l=void 0,b=n,p=t.apply(r,e)}function w(t){var e=t-v;return void 0===v||e>=n||e<0||x&&t-b>=s}function g(){var t=o();if(w(t))return h(t);d=setTimeout(g,function(t){var e=n-(t-v);return x?f(e,s-(t-b)):e}(t))}function h(t){return d=void 0,m&&a?j(t):(a=l=void 0,p)}function O(){var t=o(),e=w(t);if(a=arguments,l=this,v=t,e){if(void 0===d)return function(t){return b=t,d=setTimeout(g,n),y?j(t):p}(v);if(x)return d=setTimeout(g,n),j(v)}return void 0===d&&(d=setTimeout(g,n)),p}return n=i(n)||0,r(e)&&(y=!!e.leading,s=(x="maxWait"in e)?c(i(e.maxWait)||0,n):s,m="trailing"in e?!!e.trailing:m),O.cancel=function(){void 0!==d&&clearTimeout(d),b=0,a=v=l=d=void 0},O.flush=function(){return void 0===d?p:h(o())},O}},function(t,n,e){"use strict";e.r(n),e.d(n,"storeModule",function(){return u}),e.d(n,"viewport",function(){return i}),e.d(n,"createPlugin",function(){return f}),e.d(n,"viewportPlugin",function(){return c});var r=e(3),o=e.n(r),i={namespaced:!0,state:function(){return{width:0,height:0}},getters:{},mutations:{measure:function(t){t.width=window.innerWidth,t.height=window.innerHeight}},actions:{}},u=i;function c(){return function(t){var n=function(){t.commit("viewport/measure")},e=o()(n,200,{maxWait:1e3});n(),window.addEventListener("resize",e)}}var f=c},function(t,n,e){var r=e(1);t.exports=function(){return r.Date.now()}},function(t,n,e){(function(n){var e="object"==typeof n&&n&&n.Object===Object&&n;t.exports=e}).call(this,e(7))},function(t,n){var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){var r=e(0),o=e(9),i=NaN,u=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(o(t))return i;if(r(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=r(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var e=f.test(t);return e||a.test(t)?l(t.slice(2),e?2:8):c.test(t)?i:+t}},function(t,n,e){var r=e(10),o=e(13),i="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||o(t)&&r(t)==i}},function(t,n,e){var r=e(2),o=e(11),i=e(12),u="[object Null]",c="[object Undefined]",f=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?c:u:f&&f in Object(t)?o(t):i(t)}},function(t,n,e){var r=e(2),o=Object.prototype,i=o.hasOwnProperty,u=o.toString,c=r?r.toStringTag:void 0;t.exports=function(t){var n=i.call(t,c),e=t[c];try{t[c]=void 0;var r=!0}catch(t){}var o=u.call(t);return r&&(n?t[c]=e:delete t[c]),o}},function(t,n){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},function(t,n){t.exports=function(t){return null!=t&&"object"==typeof t}}])});