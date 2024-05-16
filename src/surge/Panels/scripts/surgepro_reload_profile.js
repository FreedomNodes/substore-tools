/*!
 substore-tools - version: 1.7.0
 Build fullhash:beda40e993efabcd6e32, chunkhash:cba28f411fd244f8aa18 (2024-05-17 24:28:42)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var m={4196:function(){var d=(t,o,e)=>new Promise((r,a)=>{var i=n=>{try{s(e.next(n))}catch(c){a(c)}},l=n=>{try{s(e.throw(n))}catch(c){a(c)}},s=n=>n.done?r(n.value):Promise.resolve(n.value).then(i,l);s((e=e.apply(t,o)).next())});const u=h();d(this,null,function*(){const t=yield f("/v1/traffic","GET"),o=new Date,e=Math.floor(t.startTime*1e3),r=p(o,e);$trigger==="button"&&(yield f("/v1/profiles/reload")),$done({title:"Surge Pro",content:`Startup duration: ${r}`,icon:u.icon,"icon-color":u.color})});function p(t,o){const e=t-o,r=Math.floor(e/(24*3600*1e3)),a=e%(24*3600*1e3),i=Math.floor(a/(3600*1e3)),l=a%(3600*1e3),s=Math.floor(l/(60*1e3)),n=l%(60*1e3),c=Math.round(n/1e3);return r===0?i===0?s===0?`${c}s`:`${s}m${c}s`:`${i}h${s}m${c}s`:`${r}d${i}h${s}m`}function f(t="",o="POST",e=null){return new Promise(r=>{$httpAPI(o,t,e,a=>{r(a)})})}function h(){return Object.fromEntries($argument.split("&").map(t=>t.split("=")).map(([t,o])=>[t,decodeURIComponent(o)]))}}},v={};m[4196]()})();})();
