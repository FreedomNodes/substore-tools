/*!
 Made with ❤️ in Hanoi
 Build fullhash:529086b61ec85aa87437, chunkhash:c89d19416ccd38deb4fd (2024-05-18 16:22:33)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var v={2038:(t,e,r)=>{r.d(e,{A:()=>b});var f=(_,u,o)=>new Promise((s,a)=>{var h=n=>{try{l(o.next(n))}catch(i){a(i)}},w=n=>{try{l(o.throw(n))}catch(i){a(i)}},l=n=>n.done?s(n.value):Promise.resolve(n.value).then(h,w);l((o=o.apply(_,u)).next())});function b(_){return f(this,null,function*(){var u;let o;try{o=JSON.parse($content)}catch(a){throw d(`${(u=a.message)!=null?u:a}`),new Error("Configuration file is not valid JSON")}const s=yield produceArtifact({type:"collection",name:_,platform:"sing-box",produceType:"internal"});return o.outbounds.push(...s),JSON.stringify(o,null,2)})}function d(_){console.log(`[\u{1F4E6} sing-box sub-convert] ${_}`)}}},p={};function c(t){var e=p[t];if(e!==void 0)return e.exports;var r=p[t]={exports:{}};return v[t](r,r.exports,c),r.exports}c.d=(t,e)=>{for(var r in e)c.o(e,r)&&!c.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},c.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var y={};(()=>{var t=c(2038);const{type:e,source:r}=$arguments;e==="sing-box"&&($content=(0,t.A)(r))})()})();})();
