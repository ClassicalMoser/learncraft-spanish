(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,r){},19:function(t,e,r){t.exports=r(38)},28:function(t,e,r){},38:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),i=r(16),a=r.n(i),c=(r(28),r(1)),u=r(2);r(13),r(15);function s(){s=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return _()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=x(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=u;var h={};function f(){}function p(){}function d(){}var v={};c(v,o,function(){return this});var y=Object.getPrototypeOf,m=y&&y(y(O([])));m&&m!==e&&r.call(m,o)&&(v=m);var g=d.prototype=f.prototype=Object.create(v);function w(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function b(t,e){var n;this._invoke=function(o,i){function a(){return new e(function(n,a){!function n(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then(function(t){n("next",t,a,c)},function(t){n("throw",t,a,c)}):e.resolve(h).then(function(t){s.value=t,a(s)},function(t){return n("throw",t,a,c)})}c(u.arg)}(o,i,n,a)})}return n=n?n.then(a,a):a()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=d,c(g,"constructor",d),c(d,"constructor",p),p.displayName=c(d,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,a,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(b.prototype),c(b.prototype,i,function(){return this}),t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},w(g),c(g,a,"Generator"),c(g,o,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var l="https://lcs-api.herokuapp.com/api/";function h(t,e){return f.apply(this,arguments)}function f(){return(f=Object(c.a)(s().mark(function t(e,r){var n,o;return s().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(l,"public/").concat(e),console.log("Fetching ".concat(n)),t.next=4,fetch(n,{method:"GET",headers:{Authorization:"Bearer ".concat(r)}}).then(function(t){if(t.ok)return t.json().then(function(t){var e=[t];return e.sort(function(t,e){return t.sortReference>e.sortReference?1:t.sortReference<e.sortReference?-1:0}),e})}).catch(function(t){return console.log(t)});case 4:return o=t.sent,t.abrupt("return",o);case 6:case"end":return t.stop()}},t)}))).apply(this,arguments)}function p(t,e){return d.apply(this,arguments)}function d(){return(d=Object(c.a)(s().mark(function t(e,r){var n,o;return s().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(l,"public/").concat(e,"/student-examples"),t.next=3,fetch(n,{method:"GET",headers:{Authorization:"Bearer ".concat(r)}}).then(function(t){if(t.ok)return t.json().then(function(t){return t})}).catch(function(t){return console.log(t)});case 3:return o=t.sent,t.abrupt("return",o);case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}function v(t,e){return y.apply(this,arguments)}function y(){return(y=Object(c.a)(s().mark(function t(e,r){var n,o;return s().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(l,"public/").concat(e,"/examples"),t.next=3,fetch(n,{method:"GET",headers:{Authorization:"Bearer ".concat(r)}}).then(function(t){if(t.ok)return t.json().then(function(t){return t})}).catch(function(t){return console.log(t)});case 3:return o=t.sent,t.abrupt("return",o);case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}var m=r(6);var g=r(5);var w=r(17),b=r.n(w);function x(){x=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return _()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=b(a,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=u;var l={};function h(){}function f(){}function p(){}var d={};c(d,o,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(O([])));y&&y!==e&&r.call(y,o)&&(d=y);var m=p.prototype=h.prototype=Object.create(d);function g(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var n;this._invoke=function(o,i){function a(){return new e(function(n,a){!function n(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then(function(t){n("next",t,a,c)},function(t){n("throw",t,a,c)}):e.resolve(h).then(function(t){l.value=t,a(l)},function(t){return n("throw",t,a,c)})}c(u.arg)}(o,i,n,a)})}return n=n?n.then(a,a):a()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:_}}function _(){return{value:void 0,done:!0}}return f.prototype=p,c(m,"constructor",p),c(p,"constructor",f),f.displayName=c(p,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,a,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(w.prototype),c(w.prototype,i,function(){return this}),t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},g(m),c(m,a,"Generator"),c(m,o,function(){return this}),c(m,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}function E(t){var e=t.studentID,r=t.studentName,i=Object(g.b)(),a=(i.user,i.isAuthorized,i.getAccessTokenSilently),s=Object(n.useState)([]),l=Object(u.a)(s,2),h=(l[0],l[1]),f=Object(n.useState)([]),d=Object(u.a)(f,2),y=d[0],w=d[1],E=Object(n.useState)([]),L=Object(u.a)(E,2),j=(L[0],L[1],Object(n.useState)(!1)),O=Object(u.a)(j,2),_=O[0],k=O[1],N=Object(n.useState)([]),S=Object(u.a)(N,2),P=S[0],G=S[1],I=Object(n.useState)(1),T=Object(u.a)(I,2),A=T[0],F=T[1],D=Object(n.useState)("english"),z=Object(u.a)(D,2),C=z[0],B=z[1],R=Object(n.useState)(!1),Y=Object(u.a)(R,2),q=Y[0],M=Y[1];function W(){B("english"),M(!1),_?(k(!1),F(1)):k(!0)}function H(){return(H=Object(c.a)(x().mark(function t(){return x().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:"spanish"===C?(B("english"),M(!1)):(B("spanish"),M(!1));case 1:case"end":return t.stop()}},t)}))).apply(this,arguments)}var J="spanish"===C?"spanishAudioLa":"englishAudio",Q=_?P[A-1][J]:"";return Object(n.useEffect)(function(){if("Loading ID"!==e){var t=function(){var t=Object(c.a)(x().mark(function t(){var r,n,o;return x().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a({authorizationParams:{audience:"https://lcs-api.herokuapp.com/",scope:"openID email profile read:current_user update:current_user_metadata"}});case 3:return r=t.sent,t.next=6,p(e,r).then(function(t){return t});case 6:return n=t.sent,h(n),t.next=10,v(e,r).then(function(t){return t});case 10:o=t.sent,w(o),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.log(t.t0.message);case 17:case"end":return t.stop()}},t,null,[[0,14]])}));return function(){return t.apply(this,arguments)}}();console.log(e),t()}else console.log("Student ID still loading")},[e]),"Loading ID"!==e&&o.a.createElement("div",{className:"quizInterface"},o.a.createElement("div",null,o.a.createElement("h2",null,"Welcome back, ",r,"!")),o.a.createElement("div",{style:{display:_?"none":"flex",justifyContent:"space-around"}},o.a.createElement("button",{onClick:function(){var t=function(t){for(var e=[],r=Object(m.a)(t),n=0;n<t.length;n++){var o=Math.floor(Math.random()*r.length),i=r[o];r.splice(o,1),e[n]=i}return e}(y);G(t),W()}},"Begin Review")),o.a.createElement("div",{style:{display:_?"flex":"none"},className:"quiz"},o.a.createElement("div",{className:"exampleBox"},o.a.createElement("div",{style:{display:"english"===C?"flex":"none"},className:"englishTranslation"},o.a.createElement("p",null,P[A-1]?P[A-1].englishTranslation:"")),o.a.createElement("div",{style:{display:"spanish"===C?"flex":"none"},className:"spanishExample"},o.a.createElement("p",null,P[A-1]?P[A-1].spanishExample:"")),o.a.createElement(b.a,{src:""===Q?"https://mom-academic.s3.us-east-2.amazonaws.com/dbexamples/example+1+spanish+LA.mp3":Q,playing:q})),o.a.createElement("div",{className:"buttonBox"},o.a.createElement("button",{onClick:function(){F(A>1?A-1:1),B("english"),M(!1)}},"Previous Example"),o.a.createElement("button",{style:{display:""===Q?"none":"inherit"},onClick:function(){console.log("Playing: ".concat(!q)),M(!q)}},"Play/Pause Audio"),o.a.createElement("button",{onClick:function(){A<P.length?F(A+1):F(P.length),B("english"),M(!1)}},"Next Example")),o.a.createElement("div",{className:"buttonBox"},o.a.createElement("button",{onClick:function(){return H.apply(this,arguments)}},"Flip Card"),o.a.createElement("button",{onClick:W},"Restart Quiz")),o.a.createElement("div",{className:"progressBar2"},o.a.createElement("div",{className:"progressBarDescription"},"Example ",A," of ",P.length))))}var L=function(){var t=Object(g.b)(),e=t.isAuthenticated,r=t.isLoading,n=t.loginWithRedirect;return!e&&!r&&o.a.createElement("button",{style:{width:"150px",margin:"20px"},onClick:function(){return n()}},"Log In")},j=function(){var t=Object(g.b)(),e=t.isAuthenticated,r=(t.isLoading,t.logout);return e&&o.a.createElement("button",{style:{width:"150px",margin:"20px"},onClick:function(){return r({logoutParams:{returnTo:window.location.origin}})}},"Log Out")};function O(){O=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new L(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return _()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=b(a,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=u;var l={};function h(){}function f(){}function p(){}var d={};c(d,o,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(j([])));y&&y!==e&&r.call(y,o)&&(d=y);var m=p.prototype=h.prototype=Object.create(d);function g(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var n;this._invoke=function(o,i){function a(){return new e(function(n,a){!function n(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then(function(t){n("next",t,a,c)},function(t){n("throw",t,a,c)}):e.resolve(h).then(function(t){l.value=t,a(l)},function(t){return n("throw",t,a,c)})}c(u.arg)}(o,i,n,a)})}return n=n?n.then(a,a):a()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:_}}function _(){return{value:void 0,done:!0}}return f.prototype=p,c(m,"constructor",p),c(p,"constructor",f),f.displayName=c(p,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,a,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(w.prototype),c(w.prototype,i,function(){return this}),t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},g(m),c(m,a,"Generator"),c(m,o,function(){return this}),c(m,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}var _=function(){var t=Object(g.b)(),e=t.user,r=t.isAuthenticated,i=t.getAccessTokenSilently,a=(t.isLoading,Object(n.useState)(void 0)),s=Object(u.a)(a,2),l=s[0],f=s[1],p=Object(n.useState)({name:"Loading Name",recordId:"Loading ID",emailAddress:"Loading Email"}),d=Object(u.a)(p,2),v=d[0],y=d[1];return Object(n.useEffect)(function(){e&&f(e.email)},[r,e]),Object(n.useEffect)(function(){l&&function(){var t=Object(c.a)(O().mark(function t(){var e,r;return O().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i({authorizationParams:{audience:"https://lcs-api.herokuapp.com/",scope:"openID email profile read:current_user update:current_user_metadata"}});case 3:return e=t.sent,t.next=6,h(l,e).then(function(t){return t[0].studentTable[0]});case 6:return r=t.sent,y(r),t.abrupt("return",r);case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0.message);case 14:case"end":return t.stop()}},t,null,[[0,11]])}));return function(){return t.apply(this,arguments)}}()()},[l]),o.a.createElement("div",{className:"App",style:{textAlign:"center"}},o.a.createElement("div",{className:"div-header",style:{textAlign:"center"}},o.a.createElement("h1",null,"LearnCraft Spanish"),o.a.createElement(j,null)),o.a.createElement(L,null),"Loading ID"!==v.recordId&&o.a.createElement(E,{studentID:v.recordId,studentName:v.name}))};a.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g.a,{domain:"dev-34nyaerydb7nt4yw.us.auth0.com",clientId:"8EjjTUWQkoHPL1DvOfH1xePnqkZ0s8bO",authorizationParams:{redirect_uri:window.location.origin,audience:"https://lcs-api.herokuapp.com/",scope:"openID email profile read:current_user update:current_user_metadata"}},o.a.createElement(_,null))))}},[[19,2,1]]]);
//# sourceMappingURL=main.6766a027.chunk.js.map