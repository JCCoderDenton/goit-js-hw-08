!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,v=c||s||Function("return this")(),d=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return v.Date.now()};function b(e,t,n){var o,r,a,u,f,l,c=0,s=!1,v=!1,d=!0;if("function"!=typeof e)throw new TypeError(i);function b(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function O(e){return c=e,f=setTimeout(h,t),s?b(e):u}function S(e){var n=e-l;return void 0===l||n>=t||n<0||v&&e-c>=a}function h(){var e=p();if(S(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return v?g(n,a-(e-c)):n}(e))}function w(e){return f=void 0,d&&o?b(e):(o=r=void 0,u)}function T(){var e=p(),n=S(e);if(o=arguments,r=this,l=e,n){if(void 0===f)return O(l);if(v)return f=setTimeout(h,t),b(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=j(t)||0,y(n)&&(s=!!n.leading,a=(v="maxWait"in n)?m(j(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},T.flush=function(){return void 0===f?u:w(p())},T}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=u.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:o,maxWait:t,trailing:r})};var O=document.forms[0],S=O.elements.email,h=O.elements.message,w=localStorage.getItem(T),T="feedback-form-state";null!==w&&(console.log("1"),S.value=w.email,h.value=w.message);var x=e(t)((function(){var e={email:S.value,message:h.value};localStorage.setItem(T,JSON.stringify(e)),w=localStorage.getItem(T),console.log("savedState: ",JSON.parse(w))}),500);O.addEventListener("input",x),O.addEventListener("submit",(function(e){e.preventDefault();var t={email:S.value,message:h.value};console.log(t),localStorage.removeItem(T),S.value="",h.value=""}))}();
//# sourceMappingURL=03-feedback.cd05b33a.js.map
