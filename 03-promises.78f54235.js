!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},u=n.parcelRequired7c6;null==u&&((u=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var u={id:e,exports:{}};return t[e]=u,n.call(u.exports,u,u.exports),u.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=u);var i=u("iU1Pc"),r=document.querySelector(".form"),a=(document.getElementsByTagName("label"),document.getElementsByTagName("button"),document.getElementsByName("delay")),l=document.getElementsByName("step"),c=document.getElementsByName("amount"),d=r.elements,f=d.delay,s=d.step,m=d.amount,p=function(n,t){e(i).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))},v=function(n,t){e(i).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))};function y(e,n){return new Promise((function(t,o){setTimeout((function(){var u=Math.random()>.3,i={position:e,delay:n};u?t(i):o(i)}),n)}))}function g(){f.value;s.value,m.value}r.addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(f.value),t=Number(s.value),o=Number(m.value),u=1;u<=o;u+=1)y(u,n).then((function(e){return p(e.position,e.delay)})).catch((function(e){return v(e.position,e.delay)})),n+=t})),a[0].addEventListener("input",(function(){g()})),l[0].addEventListener("input",(function(){g()})),c[0].addEventListener("input",(function(){g()}))}();
//# sourceMappingURL=03-promises.78f54235.js.map
