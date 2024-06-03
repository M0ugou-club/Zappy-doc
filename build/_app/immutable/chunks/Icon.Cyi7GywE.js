import{w as Me,r as Ge}from"./paths.DdvJ4afA.js";import{z as qe,s as w,b as T,u as j,g as O,d as M,A as x,a as G,e as Y,r as Qe,B as ee,C as We,D as $,E as q}from"./scheduler.BGzgsL_S.js";import{S as se,i as ae,e as W,s as J,c as B,f as N,d as S,j as U,a as b,b as z,k as V,p as P,q as I,z as ne,A as Q,x as Z,v as y,w as ue,t as Be,h as ze,B as Te,u as te,C as je,D as le,E as Je}from"./index.CSRrO7X8.js";function ce(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function fe(t,e){const l={},i={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],f=e[s];if(f){for(const d in a)d in f||(i[d]=1);for(const d in f)o[d]||(l[d]=f[d],o[d]=1);t[s]=f}else for(const d in a)o[d]=1}for(const a in i)a in l||(l[a]=void 0);return l}function Pt(t){return typeof t=="object"&&t!==null?t:{}}const ie={};function de(t){return t==="local"?localStorage:sessionStorage}function re(t,e,l){const i=JSON,o="local";function s(a,f){de(o).setItem(a,i.stringify(f))}if(!ie[t]){const a=Me(e,m=>{const E=de(o).getItem(t);E&&m(i.parse(E));{const k=r=>{r.key===t&&m(r.newValue?i.parse(r.newValue):null)};return window.addEventListener("storage",k),()=>window.removeEventListener("storage",k)}}),{subscribe:f,set:d}=a;ie[t]={set(m){s(t,m),d(m)},update(m){const E=m(qe(a));s(t,E),d(E)},subscribe:f}}return ie[t]}re("modeOsPrefers",!1);re("modeUserPrefers",void 0);re("modeCurrent",!1);const Oe="(prefers-reduced-motion: reduce)";function Ue(){return window.matchMedia(Oe).matches}Ge(Ue(),t=>{{const e=i=>{t(i.matches)},l=window.matchMedia(Oe);return l.addEventListener("change",e),()=>{l.removeEventListener("change",e)}}});const Ke=t=>({}),he=t=>({}),Xe=t=>({}),ge=t=>({});function Ye(t){let e,l,i,o,s,a,f,d,m,E,k;const r=t[17].lead,_=T(r,t,t[16],ge),c=t[17].default,L=T(c,t,t[16],null),v=t[17].trail,u=T(v,t,t[16],he);return{c(){e=W("div"),l=W("div"),_&&_.c(),o=J(),s=W("div"),L&&L.c(),f=J(),d=W("div"),u&&u.c(),this.h()},l(n){e=B(n,"DIV",{class:!0,"data-testid":!0});var R=N(e);l=B(R,"DIV",{class:!0});var F=N(l);_&&_.l(F),F.forEach(S),o=U(R),s=B(R,"DIV",{class:!0});var g=N(s);L&&L.l(g),g.forEach(S),f=U(R),d=B(R,"DIV",{class:!0});var H=N(d);u&&u.l(H),H.forEach(S),R.forEach(S),this.h()},h(){b(l,"class",i="app-bar-lead "+t[2]),b(s,"class",a="app-bar-default "+t[1]),b(d,"class",m="app-bar-trail "+t[0]),b(e,"class",E="app-rail "+t[3]),b(e,"data-testid","app-rail")},m(n,R){z(n,e,R),V(e,l),_&&_.m(l,null),V(e,o),V(e,s),L&&L.m(s,null),V(e,f),V(e,d),u&&u.m(d,null),k=!0},p(n,[R]){_&&_.p&&(!k||R&65536)&&j(_,r,n,n[16],k?M(r,n[16],R,Xe):O(n[16]),ge),(!k||R&4&&i!==(i="app-bar-lead "+n[2]))&&b(l,"class",i),L&&L.p&&(!k||R&65536)&&j(L,c,n,n[16],k?M(c,n[16],R,null):O(n[16]),null),(!k||R&2&&a!==(a="app-bar-default "+n[1]))&&b(s,"class",a),u&&u.p&&(!k||R&65536)&&j(u,v,n,n[16],k?M(v,n[16],R,Ke):O(n[16]),he),(!k||R&1&&m!==(m="app-bar-trail "+n[0]))&&b(d,"class",m),(!k||R&8&&E!==(E="app-rail "+n[3]))&&b(e,"class",E)},i(n){k||(P(_,n),P(L,n),P(u,n),k=!0)},o(n){I(_,n),I(L,n),I(u,n),k=!1},d(n){n&&S(e),_&&_.d(n),L&&L.d(n),u&&u.d(n)}}}const Ze="grid grid-rows-[auto_1fr_auto] overflow-y-auto",ye="box-border",we="box-border",pe="box-border";function xe(t,e,l){let i,o,s,a,{$$slots:f={},$$scope:d}=e,{background:m="bg-surface-100-800-token"}=e,{border:E=""}=e,{width:k="w-20"}=e,{height:r="h-full"}=e,{gap:_="gap-0"}=e,{regionLead:c=""}=e,{regionDefault:L=""}=e,{regionTrail:v=""}=e,{hover:u="bg-primary-hover-token"}=e,{active:n="bg-primary-active-token"}=e,{spacing:R="space-y-1"}=e,{aspectRatio:F="aspect-square"}=e;return x("active",n),x("hover",u),x("spacing",R),x("aspectRatio",F),t.$$set=g=>{l(18,e=G(G({},e),Y(g))),"background"in g&&l(4,m=g.background),"border"in g&&l(5,E=g.border),"width"in g&&l(6,k=g.width),"height"in g&&l(7,r=g.height),"gap"in g&&l(8,_=g.gap),"regionLead"in g&&l(9,c=g.regionLead),"regionDefault"in g&&l(10,L=g.regionDefault),"regionTrail"in g&&l(11,v=g.regionTrail),"hover"in g&&l(12,u=g.hover),"active"in g&&l(13,n=g.active),"spacing"in g&&l(14,R=g.spacing),"aspectRatio"in g&&l(15,F=g.aspectRatio),"$$scope"in g&&l(16,d=g.$$scope)},t.$$.update=()=>{l(3,i=`${Ze} ${m} ${E} ${k} ${r} ${_} ${e.class||""}`),t.$$.dirty&512&&l(2,o=`${ye} ${c}`),t.$$.dirty&1024&&l(1,s=`${we} ${L}`),t.$$.dirty&2048&&l(0,a=`${pe} ${v}`)},e=Y(e),[a,s,o,i,m,E,k,r,_,c,L,v,u,n,R,F,d,f]}class Dt extends se{constructor(e){super(),ae(this,e,xe,Ye,w,{background:4,border:5,width:6,height:7,gap:8,regionLead:9,regionDefault:10,regionTrail:11,hover:12,active:13,spacing:14,aspectRatio:15})}}const $e=t=>({}),_e=t=>({});function me(t){let e,l,i;const o=t[16].lead,s=T(o,t,t[15],_e);return{c(){e=W("div"),s&&s.c(),this.h()},l(a){e=B(a,"DIV",{class:!0});var f=N(e);s&&s.l(f),f.forEach(S),this.h()},h(){b(e,"class",l="app-rail-lead "+t[1])},m(a,f){z(a,e,f),s&&s.m(e,null),i=!0},p(a,f){s&&s.p&&(!i||f&32768)&&j(s,o,a,a[15],i?M(o,a[15],f,$e):O(a[15]),_e),(!i||f&2&&l!==(l="app-rail-lead "+a[1]))&&b(e,"class",l)},i(a){i||(P(s,a),i=!0)},o(a){I(s,a),i=!1},d(a){a&&S(e),s&&s.d(a)}}}function et(t){let e,l,i,o,s,a,f,d,m,E,k,r=t[6].lead&&me(t);const _=t[16].default,c=T(_,t,t[15],null);let L=[{class:f="app-rail-anchor "+t[3]},{href:d=t[5].href},t[4](),{role:"button"},{"data-testid":"app-rail-anchor"}],v={};for(let u=0;u<L.length;u+=1)v=G(v,L[u]);return{c(){e=W("a"),l=W("div"),r&&r.c(),i=J(),o=W("div"),c&&c.c(),this.h()},l(u){e=B(u,"A",{class:!0,href:!0,role:!0,"data-testid":!0});var n=N(e);l=B(n,"DIV",{class:!0});var R=N(l);r&&r.l(R),i=U(R),o=B(R,"DIV",{class:!0});var F=N(o);c&&c.l(F),F.forEach(S),R.forEach(S),n.forEach(S),this.h()},h(){b(o,"class",s="app-rail-label "+t[0]),b(l,"class",a="app-rail-wrapper "+t[2]),ne(e,v)},m(u,n){z(u,e,n),V(e,l),r&&r.m(l,null),V(l,i),V(l,o),c&&c.m(o,null),m=!0,E||(k=[Q(e,"click",t[17]),Q(e,"keydown",t[18]),Q(e,"keyup",t[19]),Q(e,"keypress",t[20]),Q(e,"mouseover",t[21]),Q(e,"mouseleave",t[22]),Q(e,"focus",t[23]),Q(e,"blur",t[24])],E=!0)},p(u,[n]){u[6].lead?r?(r.p(u,n),n&64&&P(r,1)):(r=me(u),r.c(),P(r,1),r.m(l,i)):r&&(Z(),I(r,1,1,()=>{r=null}),y()),c&&c.p&&(!m||n&32768)&&j(c,_,u,u[15],m?M(_,u[15],n,null):O(u[15]),null),(!m||n&1&&s!==(s="app-rail-label "+u[0]))&&b(o,"class",s),(!m||n&4&&a!==(a="app-rail-wrapper "+u[2]))&&b(l,"class",a),ne(e,v=fe(L,[(!m||n&8&&f!==(f="app-rail-anchor "+u[3]))&&{class:f},(!m||n&32&&d!==(d=u[5].href))&&{href:d},u[4](),{role:"button"},{"data-testid":"app-rail-anchor"}]))},i(u){m||(P(r),P(c,u),m=!0)},o(u){I(r),I(c,u),m=!1},d(u){u&&S(e),r&&r.d(),c&&c.d(u),E=!1,Qe(k)}}}const tt="unstyled",lt="w-full flex flex-col justify-center items-stretch text-center space-y-1",st="font-bold text-xs";function at(t,e,l){let i,o,s,a,f;const d=["selected","regionLead","regionLabel","hover","active","spacing","aspectRatio"];let m=ee(e,d),{$$slots:E={},$$scope:k}=e;const r=We(E);let{selected:_=!1}=e,{regionLead:c="flex justify-center items-center"}=e,{regionLabel:L=""}=e,{hover:v=$("hover")}=e,{active:u=$("active")}=e,{spacing:n=$("spacing")}=e,{aspectRatio:R=$("aspectRatio")}=e;function F(){return delete m.class,m}function g(D){q.call(this,t,D)}function H(D){q.call(this,t,D)}function C(D){q.call(this,t,D)}function h(D){q.call(this,t,D)}function A(D){q.call(this,t,D)}function K(D){q.call(this,t,D)}function X(D){q.call(this,t,D)}function p(D){q.call(this,t,D)}return t.$$set=D=>{l(5,e=G(G({},e),Y(D))),l(25,m=ee(e,d)),"selected"in D&&l(7,_=D.selected),"regionLead"in D&&l(8,c=D.regionLead),"regionLabel"in D&&l(9,L=D.regionLabel),"hover"in D&&l(10,v=D.hover),"active"in D&&l(11,u=D.active),"spacing"in D&&l(12,n=D.spacing),"aspectRatio"in D&&l(13,R=D.aspectRatio),"$$scope"in D&&l(15,k=D.$$scope)},t.$$.update=()=>{t.$$.dirty&2176&&l(14,i=_?u:""),l(3,o=`${tt} ${e.class||""}`),t.$$.dirty&29696&&l(2,s=`${lt} ${R} ${v} ${n} ${i}`),t.$$.dirty&256&&l(1,a=`${c}`),t.$$.dirty&512&&l(0,f=`${st} ${L}`)},e=Y(e),[f,a,s,o,F,e,r,_,c,L,v,u,n,R,i,k,E,g,H,C,h,A,K,X,p]}class Ft extends se{constructor(e){super(),ae(this,e,at,et,w,{selected:7,regionLead:8,regionLabel:9,hover:10,active:11,spacing:12,aspectRatio:13})}}const it=t=>({}),be=t=>({}),ot=t=>({}),ve=t=>({}),ft=t=>({}),ke=t=>({}),rt=t=>({}),Re=t=>({}),nt=t=>({}),Le=t=>({}),ut=t=>({}),Ee=t=>({});function Se(t){let e,l,i;const o=t[19].header,s=T(o,t,t[18],Ee);return{c(){e=W("header"),s&&s.c(),this.h()},l(a){e=B(a,"HEADER",{id:!0,class:!0});var f=N(e);s&&s.l(f),f.forEach(S),this.h()},h(){b(e,"id","shell-header"),b(e,"class",l="flex-none "+t[8])},m(a,f){z(a,e,f),s&&s.m(e,null),i=!0},p(a,f){s&&s.p&&(!i||f&262144)&&j(s,o,a,a[18],i?M(o,a[18],f,ut):O(a[18]),Ee),(!i||f&256&&l!==(l="flex-none "+a[8]))&&b(e,"class",l)},i(a){i||(P(s,a),i=!0)},o(a){I(s,a),i=!1},d(a){a&&S(e),s&&s.d(a)}}}function Pe(t){let e,l;const i=t[19].sidebarLeft,o=T(i,t,t[18],Le);return{c(){e=W("aside"),o&&o.c(),this.h()},l(s){e=B(s,"ASIDE",{id:!0,class:!0});var a=N(e);o&&o.l(a),a.forEach(S),this.h()},h(){b(e,"id","sidebar-left"),b(e,"class",t[7])},m(s,a){z(s,e,a),o&&o.m(e,null),l=!0},p(s,a){o&&o.p&&(!l||a&262144)&&j(o,i,s,s[18],l?M(i,s[18],a,nt):O(s[18]),Le),(!l||a&128)&&b(e,"class",s[7])},i(s){l||(P(o,s),l=!0)},o(s){I(o,s),l=!1},d(s){s&&S(e),o&&o.d(s)}}}function De(t){let e,l,i;const o=t[19].pageHeader,s=T(o,t,t[18],Re),a=s||ct();return{c(){e=W("header"),a&&a.c(),this.h()},l(f){e=B(f,"HEADER",{id:!0,class:!0});var d=N(e);a&&a.l(d),d.forEach(S),this.h()},h(){b(e,"id","page-header"),b(e,"class",l="flex-none "+t[5])},m(f,d){z(f,e,d),a&&a.m(e,null),i=!0},p(f,d){s&&s.p&&(!i||d&262144)&&j(s,o,f,f[18],i?M(o,f[18],d,rt):O(f[18]),Re),(!i||d&32&&l!==(l="flex-none "+f[5]))&&b(e,"class",l)},i(f){i||(P(a,f),i=!0)},o(f){I(a,f),i=!1},d(f){f&&S(e),a&&a.d(f)}}}function ct(t){let e;return{c(){e=Be("(slot:header)")},l(l){e=ze(l,"(slot:header)")},m(l,i){z(l,e,i)},d(l){l&&S(e)}}}function Fe(t){let e,l,i;const o=t[19].pageFooter,s=T(o,t,t[18],ke),a=s||dt();return{c(){e=W("footer"),a&&a.c(),this.h()},l(f){e=B(f,"FOOTER",{id:!0,class:!0});var d=N(e);a&&a.l(d),d.forEach(S),this.h()},h(){b(e,"id","page-footer"),b(e,"class",l="flex-none "+t[3])},m(f,d){z(f,e,d),a&&a.m(e,null),i=!0},p(f,d){s&&s.p&&(!i||d&262144)&&j(s,o,f,f[18],i?M(o,f[18],d,ft):O(f[18]),ke),(!i||d&8&&l!==(l="flex-none "+f[3]))&&b(e,"class",l)},i(f){i||(P(a,f),i=!0)},o(f){I(a,f),i=!1},d(f){f&&S(e),a&&a.d(f)}}}function dt(t){let e;return{c(){e=Be("(slot:footer)")},l(l){e=ze(l,"(slot:footer)")},m(l,i){z(l,e,i)},d(l){l&&S(e)}}}function He(t){let e,l;const i=t[19].sidebarRight,o=T(i,t,t[18],ve);return{c(){e=W("aside"),o&&o.c(),this.h()},l(s){e=B(s,"ASIDE",{id:!0,class:!0});var a=N(e);o&&o.l(a),a.forEach(S),this.h()},h(){b(e,"id","sidebar-right"),b(e,"class",t[6])},m(s,a){z(s,e,a),o&&o.m(e,null),l=!0},p(s,a){o&&o.p&&(!l||a&262144)&&j(o,i,s,s[18],l?M(i,s[18],a,ot):O(s[18]),ve),(!l||a&64)&&b(e,"class",s[6])},i(s){l||(P(o,s),l=!0)},o(s){I(o,s),l=!1},d(s){s&&S(e),o&&o.d(s)}}}function Ae(t){let e,l,i;const o=t[19].footer,s=T(o,t,t[18],be);return{c(){e=W("footer"),s&&s.c(),this.h()},l(a){e=B(a,"FOOTER",{id:!0,class:!0});var f=N(e);s&&s.l(f),f.forEach(S),this.h()},h(){b(e,"id","shell-footer"),b(e,"class",l="flex-none "+t[2])},m(a,f){z(a,e,f),s&&s.m(e,null),i=!0},p(a,f){s&&s.p&&(!i||f&262144)&&j(s,o,a,a[18],i?M(o,a[18],f,it):O(a[18]),be),(!i||f&4&&l!==(l="flex-none "+a[2]))&&b(e,"class",l)},i(a){i||(P(s,a),i=!0)},o(a){I(s,a),i=!1},d(a){a&&S(e),s&&s.d(a)}}}function ht(t){let e,l,i,o,s,a,f,d,m,E,k,r,_,c,L,v=t[10].header&&Se(t),u=t[10].sidebarLeft&&Pe(t),n=t[10].pageHeader&&De(t);const R=t[19].default,F=T(R,t,t[18],null);let g=t[10].pageFooter&&Fe(t),H=t[10].sidebarRight&&He(t),C=t[10].footer&&Ae(t);return{c(){e=W("div"),v&&v.c(),l=J(),i=W("div"),u&&u.c(),o=J(),s=W("div"),n&&n.c(),a=J(),f=W("main"),F&&F.c(),m=J(),g&&g.c(),k=J(),H&&H.c(),r=J(),C&&C.c(),this.h()},l(h){e=B(h,"DIV",{id:!0,class:!0,"data-testid":!0});var A=N(e);v&&v.l(A),l=U(A),i=B(A,"DIV",{class:!0});var K=N(i);u&&u.l(K),o=U(K),s=B(K,"DIV",{id:!0,class:!0});var X=N(s);n&&n.l(X),a=U(X),f=B(X,"MAIN",{id:!0,class:!0});var p=N(f);F&&F.l(p),p.forEach(S),m=U(X),g&&g.l(X),X.forEach(S),k=U(K),H&&H.l(K),K.forEach(S),r=U(A),C&&C.l(A),A.forEach(S),this.h()},h(){b(f,"id","page-content"),b(f,"class",d="flex-auto "+t[4]),b(s,"id","page"),b(s,"class",E=t[1]+" "+Ie),ue(s,"scrollbar-gutter",t[0]),b(i,"class","flex-auto "+_t),b(e,"id","appShell"),b(e,"class",t[9]),b(e,"data-testid","app-shell")},m(h,A){z(h,e,A),v&&v.m(e,null),V(e,l),V(e,i),u&&u.m(i,null),V(i,o),V(i,s),n&&n.m(s,null),V(s,a),V(s,f),F&&F.m(f,null),V(s,m),g&&g.m(s,null),V(i,k),H&&H.m(i,null),V(e,r),C&&C.m(e,null),_=!0,c||(L=Q(s,"scroll",t[20]),c=!0)},p(h,[A]){h[10].header?v?(v.p(h,A),A&1024&&P(v,1)):(v=Se(h),v.c(),P(v,1),v.m(e,l)):v&&(Z(),I(v,1,1,()=>{v=null}),y()),h[10].sidebarLeft?u?(u.p(h,A),A&1024&&P(u,1)):(u=Pe(h),u.c(),P(u,1),u.m(i,o)):u&&(Z(),I(u,1,1,()=>{u=null}),y()),h[10].pageHeader?n?(n.p(h,A),A&1024&&P(n,1)):(n=De(h),n.c(),P(n,1),n.m(s,a)):n&&(Z(),I(n,1,1,()=>{n=null}),y()),F&&F.p&&(!_||A&262144)&&j(F,R,h,h[18],_?M(R,h[18],A,null):O(h[18]),null),(!_||A&16&&d!==(d="flex-auto "+h[4]))&&b(f,"class",d),h[10].pageFooter?g?(g.p(h,A),A&1024&&P(g,1)):(g=Fe(h),g.c(),P(g,1),g.m(s,null)):g&&(Z(),I(g,1,1,()=>{g=null}),y()),(!_||A&2&&E!==(E=h[1]+" "+Ie))&&b(s,"class",E),A&1&&ue(s,"scrollbar-gutter",h[0]),h[10].sidebarRight?H?(H.p(h,A),A&1024&&P(H,1)):(H=He(h),H.c(),P(H,1),H.m(i,null)):H&&(Z(),I(H,1,1,()=>{H=null}),y()),h[10].footer?C?(C.p(h,A),A&1024&&P(C,1)):(C=Ae(h),C.c(),P(C,1),C.m(e,null)):C&&(Z(),I(C,1,1,()=>{C=null}),y()),(!_||A&512)&&b(e,"class",h[9])},i(h){_||(P(v),P(u),P(n),P(F,h),P(g),P(H),P(C),_=!0)},o(h){I(v),I(u),I(n),I(F,h),I(g),I(H),I(C),_=!1},d(h){h&&S(e),v&&v.d(),u&&u.d(),n&&n.d(),F&&F.d(h),g&&g.d(),H&&H.d(),C&&C.d(),c=!1,L()}}}const gt="w-full h-full flex flex-col overflow-hidden",_t="w-full h-full flex overflow-hidden",Ie="flex-1 overflow-x-hidden flex flex-col",mt="flex-none overflow-x-hidden overflow-y-auto",bt="flex-none overflow-x-hidden overflow-y-auto";function vt(t,e,l){let i,o,s,a,f,d,m,E,{$$slots:k={},$$scope:r}=e;const _=We(k);let{scrollbarGutter:c="auto"}=e,{regionPage:L=""}=e,{slotHeader:v="z-10"}=e,{slotSidebarLeft:u="w-auto"}=e,{slotSidebarRight:n="w-auto"}=e,{slotPageHeader:R=""}=e,{slotPageContent:F=""}=e,{slotPageFooter:g=""}=e,{slotFooter:H=""}=e;function C(h){q.call(this,t,h)}return t.$$set=h=>{l(21,e=G(G({},e),Y(h))),"scrollbarGutter"in h&&l(0,c=h.scrollbarGutter),"regionPage"in h&&l(1,L=h.regionPage),"slotHeader"in h&&l(11,v=h.slotHeader),"slotSidebarLeft"in h&&l(12,u=h.slotSidebarLeft),"slotSidebarRight"in h&&l(13,n=h.slotSidebarRight),"slotPageHeader"in h&&l(14,R=h.slotPageHeader),"slotPageContent"in h&&l(15,F=h.slotPageContent),"slotPageFooter"in h&&l(16,g=h.slotPageFooter),"slotFooter"in h&&l(17,H=h.slotFooter),"$$scope"in h&&l(18,r=h.$$scope)},t.$$.update=()=>{l(9,i=`${gt} ${e.class??""}`),t.$$.dirty&2048&&l(8,o=`${v}`),t.$$.dirty&4096&&l(7,s=`${mt} ${u}`),t.$$.dirty&8192&&l(6,a=`${bt} ${n}`),t.$$.dirty&16384&&l(5,f=`${R}`),t.$$.dirty&32768&&l(4,d=`${F}`),t.$$.dirty&65536&&l(3,m=`${g}`),t.$$.dirty&131072&&l(2,E=`${H}`)},e=Y(e),[c,L,E,m,d,f,a,s,o,i,_,v,u,n,R,F,g,H,r,k,C]}class Ht extends se{constructor(e){super(),ae(this,e,vt,ht,w,{scrollbarGutter:0,regionPage:1,slotHeader:11,slotSidebarLeft:12,slotSidebarRight:13,slotPageHeader:14,slotPageContent:15,slotPageFooter:16,slotFooter:17})}}/**
 * @license lucide-svelte v0.381.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function Ne(t,e,l){const i=t.slice();return i[11]=e[l][0],i[12]=e[l][1],i}function oe(t){let e,l=[t[12]],i={};for(let o=0;o<l.length;o+=1)i=G(i,l[o]);return{c(){e=Te(t[11]),this.h()},l(o){e=je(o,t[11],{}),N(e).forEach(S),this.h()},h(){le(e,i)},m(o,s){z(o,e,s)},p(o,s){le(e,i=fe(l,[s&32&&o[12]]))},d(o){o&&S(e)}}}function Ve(t){let e=t[11],l,i=t[11]&&oe(t);return{c(){i&&i.c(),l=te()},l(o){i&&i.l(o),l=te()},m(o,s){i&&i.m(o,s),z(o,l,s)},p(o,s){o[11]?e?w(e,o[11])?(i.d(1),i=oe(o),e=o[11],i.c(),i.m(l.parentNode,l)):i.p(o,s):(i=oe(o),e=o[11],i.c(),i.m(l.parentNode,l)):e&&(i.d(1),i=null,e=o[11])},d(o){o&&S(l),i&&i.d(o)}}}function kt(t){let e,l,i,o,s,a=ce(t[5]),f=[];for(let r=0;r<a.length;r+=1)f[r]=Ve(Ne(t,a,r));const d=t[10].default,m=T(d,t,t[9],null);let E=[Ce,t[7],{width:t[2]},{height:t[2]},{stroke:t[1]},{"stroke-width":i=t[4]?Number(t[3])*24/Number(t[2]):t[3]},{class:o=t[6]("lucide-icon","lucide",t[0]?`lucide-${t[0]}`:"",t[8].class)}],k={};for(let r=0;r<E.length;r+=1)k=G(k,E[r]);return{c(){e=Te("svg");for(let r=0;r<f.length;r+=1)f[r].c();l=te(),m&&m.c(),this.h()},l(r){e=je(r,"svg",{width:!0,height:!0,stroke:!0,"stroke-width":!0,class:!0});var _=N(e);for(let c=0;c<f.length;c+=1)f[c].l(_);l=te(),m&&m.l(_),_.forEach(S),this.h()},h(){le(e,k)},m(r,_){z(r,e,_);for(let c=0;c<f.length;c+=1)f[c]&&f[c].m(e,null);V(e,l),m&&m.m(e,null),s=!0},p(r,[_]){if(_&32){a=ce(r[5]);let c;for(c=0;c<a.length;c+=1){const L=Ne(r,a,c);f[c]?f[c].p(L,_):(f[c]=Ve(L),f[c].c(),f[c].m(e,l))}for(;c<f.length;c+=1)f[c].d(1);f.length=a.length}m&&m.p&&(!s||_&512)&&j(m,d,r,r[9],s?M(d,r[9],_,null):O(r[9]),null),le(e,k=fe(E,[Ce,_&128&&r[7],(!s||_&4)&&{width:r[2]},(!s||_&4)&&{height:r[2]},(!s||_&2)&&{stroke:r[1]},(!s||_&28&&i!==(i=r[4]?Number(r[3])*24/Number(r[2]):r[3]))&&{"stroke-width":i},(!s||_&257&&o!==(o=r[6]("lucide-icon","lucide",r[0]?`lucide-${r[0]}`:"",r[8].class)))&&{class:o}]))},i(r){s||(P(m,r),s=!0)},o(r){I(m,r),s=!1},d(r){r&&S(e),Je(f,r),m&&m.d(r)}}}function Rt(t,e,l){const i=["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"];let o=ee(e,i),{$$slots:s={},$$scope:a}=e,{name:f=void 0}=e,{color:d="currentColor"}=e,{size:m=24}=e,{strokeWidth:E=2}=e,{absoluteStrokeWidth:k=!1}=e,{iconNode:r}=e;const _=(...c)=>c.filter((L,v,u)=>!!L&&u.indexOf(L)===v).join(" ");return t.$$set=c=>{l(8,e=G(G({},e),Y(c))),l(7,o=ee(e,i)),"name"in c&&l(0,f=c.name),"color"in c&&l(1,d=c.color),"size"in c&&l(2,m=c.size),"strokeWidth"in c&&l(3,E=c.strokeWidth),"absoluteStrokeWidth"in c&&l(4,k=c.absoluteStrokeWidth),"iconNode"in c&&l(5,r=c.iconNode),"$$scope"in c&&l(9,a=c.$$scope)},e=Y(e),[f,d,m,E,k,r,_,o,e,a,s]}class At extends se{constructor(e){super(),ae(this,e,Rt,kt,w,{name:0,color:1,size:2,strokeWidth:3,absoluteStrokeWidth:4,iconNode:5})}}export{Ht as A,At as I,Pt as a,Dt as b,Ft as c,fe as g};
