function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,r=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return c.Date.now()};function g(e,t,n){var o,i,a,r,u,f,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,a=i;return o=i=void 0,l=t,r=e.apply(a,n)}function S(e){return l=e,u=setTimeout(h,t),c?y(e):r}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=a}function h(){var e=m();if(j(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-f);return s?v(n,a-(e-l)):n}(e))}function w(e){return u=void 0,g&&o?y(e):(o=i=void 0,r)}function O(){var e=m(),n=j(e);if(o=arguments,i=this,f=e,n){if(void 0===u)return S(f);if(s)return u=setTimeout(h,t),y(f)}return void 0===u&&(u=setTimeout(h,t)),r}return t=b(t)||0,p(n)&&(c=!!n.leading,a=(s="maxWait"in n)?d(b(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=f=i=u=void 0},O.flush=function(){return void 0===u?r:w(m())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||r.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:o,maxWait:t,trailing:i})};let y=document.forms[0],S=y.elements.email,j=y.elements.message;null!==savedState&&(console.log("1"),S.value=savedState.email,j.value=savedState.message);const h=e(t)((()=>{const e={email:S.value,message:j.value};localStorage.setItem("feedback-form-state",JSON.stringify(e));const t=localStorage.getItem("feedback-form-state");console.log("savedState: ",JSON.parse(t))}),500);y.addEventListener("input",h),y.addEventListener("submit",(e=>{e.preventDefault();const t={email:S.value,message:j.value};console.log(t),localStorage.removeItem("feedback-form-state"),S.value="",j.value=""}));
//# sourceMappingURL=03-feedback.6514f053.js.map
