var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequire7bc7;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},e.parcelRequire7bc7=n);var i=n("iQIUW");const r=document.querySelector("form.form");function l(e,o){return new Promise(((t,n)=>{setTimeout((()=>{Math.random()>.3?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}r.addEventListener("submit",(function(e){e.preventDefault();const{amount:o,delay:t,step:n}=e.currentTarget,a=o.value,s=t.value,u=n.value;for(let e=0;e<a;e+=1){l(e+1,1*s+e*u).then((({position:e,delay:o})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)})).finally((()=>r.reset()))}}));
//# sourceMappingURL=03-promises.0bbf8c17.js.map
