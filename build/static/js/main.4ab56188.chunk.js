(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,r){},19:function(t,e,r){t.exports=r(38)},28:function(t,e,r){},38:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),a=r(16),i=r.n(a),c=(r(28),r(1)),u=r(2);r(13),r(15);function s(){s=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(_){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new j(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return k()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=u;var f={};function h(){}function p(){}function d(){}var v={};c(v,o,function(){return this});var y=Object.getPrototypeOf,m=y&&y(y(O([])));m&&m!==e&&r.call(m,o)&&(v=m);var g=d.prototype=h.prototype=Object.create(v);function w(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function b(t,e){var n;this._invoke=function(o,a){function i(){return new e(function(n,i){!function n(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(f).then(function(t){s.value=t,i(s)},function(t){return n("throw",t,i,c)})}c(u.arg)}(o,a,n,i)})}return n=n?n.then(i,i):i()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=d,c(g,"constructor",d),c(d,"constructor",p),p.displayName=c(d,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(b.prototype),c(b.prototype,a,function(){return this}),t.AsyncIterator=b,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new b(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},w(g),c(g,i,"Generator"),c(g,o,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var l="https://as-vocab-backend.herokuapp.com/",f="https://lcs-api.herokuapp.com/";function h(){return p.apply(this,arguments)}function p(){return(p=Object(c.a)(s().mark(function t(){var e,r;return s().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(l,"qb-students"),t.next=3,fetch(e,{method:"GET"}).then(function(t){if(t.ok)return t.json().then(function(t){return JSON.parse(t)})}).catch(function(t){return console.log(t)});case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}function d(t,e){return v.apply(this,arguments)}function v(){return(v=Object(c.a)(s().mark(function t(e,r){var n,o;return s().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(f,"public/").concat(e),t.next=3,fetch(n,{method:"GET",headers:{Authorization:"Bearer ".concat(r)}}).then(function(t){if(t.ok)return t.json().then(function(t){var e=[t];return e.sort(function(t,e){return t.sortReference>e.sortReference?1:t.sortReference<e.sortReference?-1:0}),e})}).catch(function(t){return console.log(t)});case 3:return o=t.sent,t.abrupt("return",o);case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}function y(t,e){return m.apply(this,arguments)}function m(){return(m=Object(c.a)(s().mark(function t(e,r){var n,o;return s().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(f,"public/").concat(e,"/student-examples"),t.next=3,fetch(n,{method:"GET",headers:{Authorization:"Bearer ".concat(r)}}).then(function(t){if(t.ok)return t.json().then(function(t){return t})}).catch(function(t){return console.log(t)});case 3:return o=t.sent,t.abrupt("return",o);case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}function g(t,e){return w.apply(this,arguments)}function w(){return(w=Object(c.a)(s().mark(function t(e,r){var n,o;return s().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(f,"public/").concat(e,"/examples"),t.next=3,fetch(n,{method:"GET",headers:{Authorization:"Bearer ".concat(r)}}).then(function(t){if(t.ok)return t.json().then(function(t){return t})}).catch(function(t){return console.log(t)});case 3:return o=t.sent,t.abrupt("return",o);case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}var b=r(6);var E=r(5);var x=r(17),L=r.n(x);function j(){j=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(_){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new L(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return k()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=u;var l={};function f(){}function h(){}function p(){}var d={};c(d,o,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(O([])));y&&y!==e&&r.call(y,o)&&(d=y);var m=p.prototype=f.prototype=Object.create(d);function g(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var n;this._invoke=function(o,a){function i(){return new e(function(n,i){!function n(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(f).then(function(t){l.value=t,i(l)},function(t){return n("throw",t,i,c)})}c(u.arg)}(o,a,n,i)})}return n=n?n.then(i,i):i()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=p,c(m,"constructor",p),c(p,"constructor",h),h.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(w.prototype),c(w.prototype,a,function(){return this}),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},g(m),c(m,i,"Generator"),c(m,o,function(){return this}),c(m,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}function O(t,e){var r="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"===typeof t)return k(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return k(t,e)}(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function _(t){var e=t.studentID,r=Object(E.b)(),a=(r.user,r.isAuthorized,r.getAccessTokenSilently);var i=function(){for(var t=[],e=0;e<10;e++)t.push({recordId:e,name:"Loading Students..."});return t}(),s=Object(n.useState)([]),l=Object(u.a)(s,2),f=(l[0],l[1]),p=Object(n.useState)([]),d=Object(u.a)(p,2),v=(d[0],d[1]),m=Object(n.useState)([]),w=Object(u.a)(m,2),x=w[0],k=w[1],_=Object(n.useRef)({examples:[],students:i}),S=Object(n.useState)(_.current.students[0].name),N=Object(u.a)(S,2),I=N[0],T=N[1],G=Object(n.useState)(!1),P=Object(u.a)(G,2),A=P[0],F=P[1],D=Object(n.useState)([]),z=Object(u.a)(D,2),C=z[0],B=z[1],R=Object(n.useState)(1),Y=Object(u.a)(R,2),q=Y[0],M=Y[1],J=Object(n.useState)("english"),W=Object(u.a)(J,2),H=W[0],Q=W[1],U=Object(n.useState)(!1),Z=Object(u.a)(U,2),$=Z[0],K=Z[1];function V(){Q("english"),K(!1),A?(F(!1),M(1)):F(!0)}function X(){return(X=Object(c.a)(j().mark(function t(){return j().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:"spanish"===H?(Q("english"),K(!1)):(Q("spanish"),K(!1));case 1:case"end":return t.stop()}},t)}))).apply(this,arguments)}function tt(t){if(0===t.combinedTextStudentName.length)return!1;var e,r=O(t.combinedTextStudentName);try{for(r.s();!(e=r.n()).done;){e.value;if(t.combinedTextStudentName.includes(I))return!0}}catch(n){r.e(n)}finally{r.f()}return!1}var et="spanish"===H?"spanishAudioLa":"englishAudio",rt=A?C[q-1][et]:"";return Object(n.useEffect)(function(){function t(){return(t=Object(c.a)(j().mark(function t(){return j().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("init called"),t.next=3,h();case 3:_.current.students=t.sent,console.log("init completed"),T(_.current.students[0].name),k("loaded");case 7:case"end":return t.stop()}},t)}))).apply(this,arguments)}!function(){t.apply(this,arguments)}()},[]),Object(n.useEffect)(function(){if("Loading ID"!==e){var t=function(){var t=Object(c.a)(j().mark(function t(){var r,n,o;return j().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a({authorizationParams:{audience:"https://lcs-api.herokuapp.com/",scope:"openID email profile read:current_user update:current_user_metadata"}});case 3:return r=t.sent,t.next=6,y(e,r).then(function(t){return t});case 6:return n=t.sent,f(n),t.next=10,g(e,r).then(function(t){return t});case 10:o=t.sent,v(o),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.log(t.t0.message);case 17:case"end":return t.stop()}},t,null,[[0,14]])}));return function(){return t.apply(this,arguments)}}();console.log(e),t()}else console.log("Student ID still loading")},[e]),o.a.createElement("div",{className:"quizInterface"},o.a.createElement("form",{style:{display:A?"none":"flex"},onSubmit:function(){var t=function(t){for(var e=[],r=Object(b.a)(t),n=0;n<t.length;n++){var o=Math.floor(Math.random()*r.length),a=r[o];r.splice(o,1),e[n]=a}return e}(_.current.examples.filter(tt));B(t),V()},className:"studentSelect"},o.a.createElement("h2",null,"Reviewing as:"),o.a.createElement("div",null,o.a.createElement("select",{onChange:function(t){return T(t.target.value)}},_.current.students.map(function(t,e){return o.a.createElement("option",{key:e,value:t.name},t.name)}),x),o.a.createElement("input",{type:"submit",className:"begin-review",value:"Begin Review"}))),o.a.createElement("div",{style:{display:A?"flex":"none"},className:"quiz"},o.a.createElement("div",{className:"exampleBox"},o.a.createElement("div",{style:{display:"english"===H?"flex":"none"},className:"englishTranslation"},o.a.createElement("p",null,C[q-1]?C[q-1].englishTranslation:"")),o.a.createElement("div",{style:{display:"spanish"===H?"flex":"none"},className:"spanishExample"},o.a.createElement("p",null,C[q-1]?C[q-1].spanishExample:"")),o.a.createElement(L.a,{src:""===rt?"https://mom-academic.s3.us-east-2.amazonaws.com/dbexamples/example+1+spanish+LA.mp3":rt,playing:$})),o.a.createElement("div",{className:"buttonBox"},o.a.createElement("button",{onClick:function(){M(q>1?q-1:1),Q("english"),K(!1)}},"Previous Example"),o.a.createElement("button",{style:{display:""===rt?"none":"inherit"},onClick:function(){console.log("Playing: ".concat(!$)),K(!$)}},"Play/Pause Audio"),o.a.createElement("button",{onClick:function(){q<C.length?M(q+1):M(C.length),Q("english"),K(!1)}},"Next Example")),o.a.createElement("div",{className:"buttonBox"},o.a.createElement("button",{onClick:function(){return X.apply(this,arguments)}},"Flip Card"),o.a.createElement("button",{onClick:V},"Restart Quiz")),o.a.createElement("div",{className:"progressBar2"},o.a.createElement("div",{className:"progressBarDescription"},"Example ",q," of ",C.length))))}var S=function(){var t=Object(E.b)().loginWithRedirect;return o.a.createElement("button",{onClick:function(){return t()}},"Log In")},N=function(){var t=Object(E.b)().logout;return o.a.createElement("button",{onClick:function(){return t({logoutParams:{returnTo:window.location.origin}})}},"Log Out")},I=function(t){var e=t.ID,r=t.Name,n=t.Email,a=Object(E.b)(),i=(a.user,a.isAuthenticated);a.isLoading;return"Loading Name"===r?o.a.createElement("div",null,"Loading ..."):i&&o.a.createElement("div",null,o.a.createElement("p",null,"Welcome back, ",r,"!"),o.a.createElement("p",null,n),o.a.createElement("p",null,e))};function T(){T=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new L(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=u;var l={};function f(){}function h(){}function p(){}var d={};c(d,o,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(j([])));y&&y!==e&&r.call(y,o)&&(d=y);var m=p.prototype=f.prototype=Object.create(d);function g(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var n;this._invoke=function(o,a){function i(){return new e(function(n,i){!function n(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(f).then(function(t){l.value=t,i(l)},function(t){return n("throw",t,i,c)})}c(u.arg)}(o,a,n,i)})}return n=n?n.then(i,i):i()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return h.prototype=p,c(m,"constructor",p),c(p,"constructor",h),h.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(w.prototype),c(w.prototype,a,function(){return this}),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},g(m),c(m,i,"Generator"),c(m,o,function(){return this}),c(m,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}var G=function(){var t=Object(E.b)(),e=t.user,r=t.isAuthenticated,a=t.getAccessTokenSilently,i=(t.isLoading,Object(n.useState)(void 0)),s=Object(u.a)(i,2),l=s[0],f=s[1],h=Object(n.useState)({name:"Loading Name",recordId:"Loading ID",emailAddress:"Loading Email"}),p=Object(u.a)(h,2),v=p[0],y=p[1];return Object(n.useEffect)(function(){e&&f(e.email)},[r,e]),Object(n.useEffect)(function(){l&&function(){var t=Object(c.a)(T().mark(function t(){var e,r;return T().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a({authorizationParams:{audience:"https://lcs-api.herokuapp.com/",scope:"openID email profile read:current_user update:current_user_metadata"}});case 3:return e=t.sent,t.next=6,d(l,e).then(function(t){return t[0].studentTable[0]});case 6:return r=t.sent,y(r),t.abrupt("return",r);case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0.message);case 14:case"end":return t.stop()}},t,null,[[0,11]])}));return function(){return t.apply(this,arguments)}}()()},[l]),o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"div-header"},o.a.createElement("h1",null,"LearnCraft Spanish"),o.a.createElement(S,null),o.a.createElement(N,null)),r&&o.a.createElement(I,{Name:v.name,Email:v.emailAddress,ID:v.recordId}),"Loading ID"!==v.recordId&&o.a.createElement(_,{studentID:v.recordId}))};i.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E.a,{domain:"dev-34nyaerydb7nt4yw.us.auth0.com",clientId:"8EjjTUWQkoHPL1DvOfH1xePnqkZ0s8bO",authorizationParams:{redirect_uri:window.location.origin,audience:"https://lcs-api.herokuapp.com/",scope:"openID email profile read:current_user update:current_user_metadata"}},o.a.createElement(G,null))))}},[[19,2,1]]]);
//# sourceMappingURL=main.4ab56188.chunk.js.map