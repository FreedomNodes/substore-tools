/*!
 Made with ❤️ in Hanoi
 Build fullhash:ddf5c3655f887f0f153f, chunkhash:eee824985032ebf39c59 (2024-05-18 17:20:06)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var f={2038:(t,e,r)=>{r.d(e,{A:()=>b});var _=(a,s,n)=>new Promise((l,u)=>{var h=o=>{try{i(n.next(o))}catch(p){u(p)}},w=o=>{try{i(n.throw(o))}catch(p){u(p)}},i=o=>o.done?l(o.value):Promise.resolve(o.value).then(h,w);i((n=n.apply(a,s)).next())});function b(a){return _(this,null,function*(){var s;let n;try{n=JSON.parse($content)}catch(u){throw d(`${(s=u.message)!=null?s:u}`),new Error("Configuration file is not valid JSON")}const l=yield produceArtifact({type:"collection",name:a,platform:"sing-box",produceType:"internal"});return n.outbounds.push(...l),JSON.stringify(n,null,2)})}function d(a){console.log(`[\u{1F4E6} sing-box sub-convert] ${a}`)}}},v={};function c(t){var e=v[t];if(e!==void 0)return e.exports;var r=v[t]={exports:{}};return f[t](r,r.exports,c),r.exports}c.d=(t,e)=>{for(var r in e)c.o(e,r)&&!c.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},c.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var y={};(()=>{var t=c(2038);const{type:e,source:r}=$arguments;e==="sing-box"&&(0,t.A)(r).then(_=>{$content=_}).catch(_=>{$content=_})})()})();})();
