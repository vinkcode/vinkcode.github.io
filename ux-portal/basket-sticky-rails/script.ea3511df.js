parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"aG3w":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.trainDeparture=exports.train=void 0;var e=function(){var e=document.querySelector(".right"),o=document.querySelector(".stop");o.style.marginTop=o.offsetTop+"px";var t=e.offsetTop,r=0;return function(){var n=window.scrollY>=e.offsetTop,s=o.offsetTop-e.offsetHeight>window.scrollY,i=e.offsetTop>=t&&o.offsetTop-e.offsetHeight,p=window.pageYOffset||document.documentElement.scrollTop;p>r?n&&s&&(e.style.marginTop=window.scrollY-t+"px"):i>window.scrollY&&(e.style.marginTop=window.scrollY-t+"px"),r=p<=0?0:p,parseInt(document.querySelector(".right").style.marginTop.replace("px",""))<0&&(e.style.marginTop="0px")}};exports.train=e;var o=function(o){if(o){var t=e(),r=!1;document.addEventListener("scroll",function(e){r||(window.requestAnimationFrame(function(){t(),r=!1}),r=!0)})}};exports.trainDeparture=o;
},{}],"mpVp":[function(require,module,exports) {
"use strict";var r=require("./train-rails");(0,r.trainDeparture)(!0);
},{"./train-rails":"aG3w"}]},{},["mpVp"], null)
//# sourceMappingURL=/script.ea3511df.js.map