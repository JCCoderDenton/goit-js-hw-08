!function(){function e(e){return e&&e.__esModule?e.default:e}var t,o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var a="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof o&&o&&o.Object===Object&&o,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,g=Math.max,v=Math.min,b=function(){return d.Date.now()};function p(e,t,o){var n,r,i,l,f,u,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(a);function p(t){var o=n,a=r;return n=r=void 0,c=t,l=e.apply(a,o)}function j(e){return c=e,f=setTimeout(h,t),s?p(e):l}function I(e){var o=e-u;return void 0===u||o>=t||o<0||d&&e-c>=i}function h(){var e=b();if(I(e))return w(e);f=setTimeout(h,function(e){var o=t-(e-u);return d?v(o,i-(e-c)):o}(e))}function w(e){return f=void 0,m&&n?p(e):(n=r=void 0,l)}function O(){var e=b(),o=I(e);if(n=arguments,r=this,u=e,o){if(void 0===f)return j(u);if(d)return f=setTimeout(h,t),p(u)}return void 0===f&&(f=setTimeout(h,t)),l}return t=S(t)||0,y(o)&&(s=!!o.leading,i=(d="maxWait"in o)?g(S(o.maxWait)||0,t):i,m="trailing"in o?!!o.trailing:m),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,n=u=r=f=void 0},O.flush=function(){return void 0===f?l:w(b())},O}function y(t){var o=void 0===t?"undefined":e(n)(t);return!!t&&("object"==o||"function"==o)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(n)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var o="function"==typeof t.valueOf?t.valueOf():t;t=y(o)?o+"":o}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var a=l.test(t);return a||f.test(t)?u(t.slice(2),a?2:8):i.test(t)?NaN:+t}t=function(e,t,o){var n=!0,r=!0;if("function"!=typeof e)throw new TypeError(a);return y(o)&&(n="leading"in o?!!o.leading:n,r="trailing"in o?!!o.trailing:r),p(e,t,{leading:n,maxWait:t,trailing:r})};var j=document.forms[0],I=j.elements.email,h=j.elements.message,w=JSON.parse(localStorage.getItem("feedback-form-state"));localStorage.getItem(!0)&&(console.log("1",localStorage.getItem("feedback-form-state")),I.value=w.email,h.value=w.message),console.log("2",localStorage.getItem("feedback-form-state"));var O=e(t)((function(){var e={email:I.value,message:h.value};console.log("3",localStorage.getItem("feedback-form-state")),localStorage.setItem("feedback-form-state",e)}),500);j.addEventListener("input",O),j.addEventListener("submit",(function(e){e.preventDefault();var t={email:I.value,message:h.value};console.log(t),console.log("5",localStorage.getItem("feedback-form-state")),localStorage.removeItem(localStorage.getItem("feedback-form-state")),I.value="",h.value="",console.log("4",localStorage.getItem("feedback-form-state"))}))}();
//# sourceMappingURL=03-feedback.da0d516f.js.map
