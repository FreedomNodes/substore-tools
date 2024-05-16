/*!
 substore-tools - version: 1.7.0
 Build fullhash:beda40e993efabcd6e32, chunkhash:f8efafea4f1c086181d6 (2024-05-17 24:28:42)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var y={5099:function(){var _=(o,n,c)=>new Promise((u,r)=>{var s=e=>{try{t(c.next(e))}catch(i){r(i)}},a=e=>{try{t(c.throw(e))}catch(i){r(i)}},t=e=>e.done?u(e.value):Promise.resolve(e.value).then(s,a);t((c=c.apply(o,n)).next())});_(this,null,function*(){const o=d(),{group:n}=o,c=yield m("/v1/policy_groups"),u=(yield m(`/v1/policy_groups/select?group_name=${encodeURIComponent(n)}`)).policy,r=[],s=c[`${n}`],a=[];for(const l in c)a.push(l);for(let l=0;l<s.length;++l)r.push(s[l].name);let t;for(let l=0;l<r.length;++l)u===r[l]&&(t=l);$trigger==="button"&&(t+=1,t>s.length-1&&(t=0),$surge.setSelectGroupPolicy(n,r[t]));let e=r[t],i,p=e;for(a.includes(p)===!0&&(i=(yield m(`/v1/policy_groups/select?group_name=${encodeURIComponent(p)}`)).policy,e=`${e} \u279F ${i}`);a.includes(p)===!0;)p=(yield m(`/v1/policy_groups/select?group_name=${encodeURIComponent(p)}`)).policy;s[t].isGroup===!0&&i!==p&&(e=`${e} \u279F ${p}`),$done({title:n,content:e,icon:o.icon,"icon-color":o.color})});function m(o="",n="GET",c=null){return new Promise(u=>{$httpAPI(n,o,c,r=>{u(r)})})}function d(){return Object.fromEntries($argument.split("&").map(o=>o.split("=")).map(([o,n])=>[o,decodeURIComponent(n)]))}}},f={};y[5099]()})();})();
