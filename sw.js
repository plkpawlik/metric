if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let a={};const c=e=>s(e,o),l={module:{uri:o},exports:a,require:c};i[o]=Promise.all(r.map((e=>l[e]||c(e)))).then((e=>(n(...e),a)))}}define(["./workbox-3ea082d2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"ac17b6d7c9de4eafda4c0b78518c02a2"},{url:"android-chrome-512x512.png",revision:"f332dd6b868b062f37239ab0bee5788b"},{url:"apple-touch-icon.png",revision:"2e57ea94de6a0760568f297f11275295"},{url:"assets/cheque.70400e7f.gif",revision:null},{url:"assets/desert.ad16b03d.gif",revision:null},{url:"assets/index.1d829dce.css",revision:null},{url:"assets/index.es.5178ce84.js",revision:null},{url:"assets/logo.ccb9c5c2.png",revision:null},{url:"assets/love.96fc6e78.gif",revision:null},{url:"assets/note.f8a0f08d.gif",revision:null},{url:"assets/purify.es.b862aa1a.js",revision:null},{url:"assets/purse.5ef55aa0.gif",revision:null},{url:"favicon-16x16.png",revision:"6ab378c4da3a2cd77a2d12650373b117"},{url:"favicon-32x32.png",revision:"4077b907c465faf1f57df0e3ac393351"},{url:"favicon.ico",revision:"424621a16ee623223898cf92cf77f212"},{url:"index.html",revision:"cb59ed20eb6dc9ded784dfb38ad5ed1d"},{url:"manifest.webmanifest",revision:"33c68eeb7f7235a72294d79bc32160a0"},{url:"registerSW.js",revision:"a257f90cc4996c1f5740e888a212aac9"},{url:"robots.txt",revision:"cd9cd94aaa699e0a16e692b6bb16f672"},{url:"android-chrome-192x192.png",revision:"ac17b6d7c9de4eafda4c0b78518c02a2"},{url:"android-chrome-512x512.png",revision:"f332dd6b868b062f37239ab0bee5788b"},{url:"manifest.webmanifest",revision:"33c68eeb7f7235a72294d79bc32160a0"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
