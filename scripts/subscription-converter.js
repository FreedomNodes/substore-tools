/**
 * Bundle of subscription-converter
 * Build 2024-05-19 03:21:13
 * Author: Kien Tran
 */

function t(){t=function(){return e};var r,e={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,r,e){t[r]=e.value},a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(r){l=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var o=r&&r.prototype instanceof m?r:m,a=Object.create(o.prototype),u=new T(n||[]);return i(a,"_invoke",{value:j(t,e,u)}),a}function p(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var d="suspendedStart",h="suspendedYield",y="executing",v="completed",g={};function m(){}function b(){}function w(){}var _={};l(_,u,(function(){return this}));var x=Object.getPrototypeOf,L=x&&x(x(P([])));L&&L!==n&&o.call(L,u)&&(_=L);var E=w.prototype=m.prototype=Object.create(_);function k(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function O(t,r){function e(n,i,a,u){var c=p(t[n],t,i);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==typeof l&&o.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,a,u)}),(function(t){e("throw",t,a,u)})):r.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,u)}))}u(c.arg)}var n;i(this,"_invoke",{value:function(t,o){function i(){return new r((function(r,n){e(t,o,r,n)}))}return n=n?n.then(i,i):i()}})}function j(t,e,n){var o=d;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:r,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=A(u,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=p(t,e,n);if("normal"===s.type){if(o=n.done?v:h,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function A(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,A(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=p(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function S(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function N(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function P(t){if(t||""===t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}throw new TypeError(typeof t+" is not iterable")}return b.prototype=w,i(E,"constructor",{value:w,configurable:!0}),i(w,"constructor",{value:b,configurable:!0}),b.displayName=l(w,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===b||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},k(O.prototype),l(O.prototype,c,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new O(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(E),l(E,s,"Generator"),l(E,u,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=P,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return u.type="throw",u.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),N(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;N(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}},e}function r(t,r,e,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void e(t)}u.done?r(c):Promise.resolve(c).then(n,o)}function e(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function u(t){r(a,o,i,u,c,"next",t)}function c(t){r(a,o,i,u,c,"throw",t)}u(void 0)}))}}function n(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return o(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function i(t){return t&&"null"!==t&&"undefined"!==t}var a={log:{disabled:!1,level:"info",timestamp:!0},experimental:{clash_api:{external_controller:"127.0.0.1:9090"}},dns:{servers:[{address:"8.8.4.4",address_resolver:"dns-direct",strategy:"prefer_ipv4",tag:"dns-remote"},{address:"local",address_resolver:"dns-local",detour:"direct",strategy:"prefer_ipv4",tag:"dns-direct"},{address:"rcode://success",tag:"block-dns"}],rules:[{domain_suffix:[".arpa.",".arpa"],server:"block-dns",rewrite_ttl:20},{outbound:"direct",server:"dns-direct",rewrite_ttl:20},{outbound:"any",server:"dns-direct",disable_cache:!0},{rule_set:["ADBVN"],server:"block-dns",disable_cache:!0},{network:"udp",port:443,server:"block-dns",rewrite_ttl:20}],reverse_mapping:!0,strategy:"ipv4_only",independent_cache:!0,disable_cache:!0},inbounds:[{listen:"0.0.0.0",listen_port:6450,override_address:"8.8.8.8",override_port:53,tag:"dns-in",type:"direct"},{type:"tun",tag:"tun-in",interface_name:"tun0",inet4_address:"172.19.0.1/30",mtu:9e3,auto_route:!0,strict_route:!0,stack:"system",endpoint_independent_nat:!1,sniff:!1},{listen:"0.0.0.0",listen_port:2080,sniff:!1,tag:"mixed-in",type:"mixed"}],outbounds:[{type:"direct",tag:"direct"},{type:"dns",tag:"dns-out"},{type:"block",tag:"block"}],route:{auto_detect_interface:!0,override_android_vpn:!0,find_process:!0,final:"VIEFAST MASTER",rules:[{protocol:"dns",outbound:"dns-out"},{protocol:"quic",port:443,network:"udp",outbound:"block"},{rule_set:"ADBVN",outbound:"block"},{inbound:"dns-in",outbound:"dns-out"},{outbound:"dns-out",port:53},{ip_cidr:["224.0.0.0/3","ff00::/8"],outbound:"block",source_ip_cidr:["224.0.0.0/3","ff00::/8"]}],rule_set:[{tag:"ADBVN",url:"https://raw.githubusercontent.com/lonely0811/olsd/main/Singbox/Rule/ADBVN.json",type:"remote",format:"source",download_detour:"direct",update_interval:"24h"}]}};function u(t){return c.apply(this,arguments)}function c(){return(c=e(t().mark((function r(e){var o,u,c,s;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{u=JSON.parse(null!==(c=$content)&&void 0!==c?c:$files[0])}catch(t){}return i(u)||(u=a),t.next=4,produceArtifact({type:"collection",name:e,platform:"sing-box",produceType:"internal"});case 4:return s=t.sent,(o=u.outbounds).push.apply(o,n(s)),t.abrupt("return",JSON.stringify(u,null,2));case 7:case"end":return t.stop()}}),r)})))).apply(this,arguments)}var s=function(){var r=e(t().mark((function r(){var e,n,o;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,e=$arguments,n=e.type,i(o=e.source)){t.next=4;break}return t.abrupt("return");case 4:if(!/sing-box/i.test(n)){t.next=8;break}return t.next=7,u(o);case 7:$content=t.sent;case 8:t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error("Error:",t.t0);case 13:case"end":return t.stop()}}),r,null,[[0,10]])})));return function(){return r.apply(this,arguments)}}();await s();
