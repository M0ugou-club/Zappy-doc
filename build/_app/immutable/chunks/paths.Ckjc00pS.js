import{n as u,s as g}from"./scheduler.BGzgsL_S.js";const n=[];function z(t,o){return{subscribe:h(t,o).subscribe}}function h(t,o=u){let i;const r=new Set;function b(e){if(g(t,e)&&(t=e,i)){const c=!n.length;for(const s of r)s[1](),n.push(s,t);if(c){for(let s=0;s<n.length;s+=2)n[s][0](n[s+1]);n.length=0}}}function a(e){b(e(t))}function _(e,c=u){const s=[e,c];return r.add(s),r.size===1&&(i=o(b,a)||u),e(t),()=>{r.delete(s),r.size===0&&i&&(i(),i=null)}}return{set:b,update:a,subscribe:_}}var f;const p=((f=globalThis.__sveltekit_1gvt4sz)==null?void 0:f.base)??"";var l;const q=((l=globalThis.__sveltekit_1gvt4sz)==null?void 0:l.assets)??p;export{q as a,p as b,z as r,h as w};