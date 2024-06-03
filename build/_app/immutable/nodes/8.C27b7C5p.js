import{s as r,n}from"../chunks/scheduler.BGzgsL_S.js";import{S as o,i as c,e as l,c as h,g as d,a as f,b as m,d as p}from"../chunks/index.CSRrO7X8.js";function u(a){let e,s='<div class="space-y-5 w-full"><h1 class="h1 py-4"><b>Server</b></h1> <span>The server part is responsible for managing connections between clients and the game. It is written in C and only uses the standard library.</span> <hr class="!border-t-2"/> <h2 class="h2 py-4"><b>Select</b></h2> <span>The management of communication is done using the standard C library function <code class="code">select</code></span> <br/> <br/> <span>Each time a client attempts to connect to the server, a new connection is created, this connection contains a character buffer, each time data is sent from the client to the server, it gets added to this buffer until a \\n is found, the buffer is then interpreted by the server and execute its corresponding action if found.</span></div>';return{c(){e=l("div"),e.innerHTML=s,this.h()},l(t){e=h(t,"DIV",{class:!0,"data-svelte-h":!0}),d(e)!=="svelte-1k2v1ls"&&(e.innerHTML=s),this.h()},h(){f(e,"class","h-full m-8 flex")},m(t,i){m(t,e,i)},p:n,i:n,o:n,d(t){t&&p(e)}}}class g extends o{constructor(e){super(),c(this,e,null,u,r,{})}}export{g as component};