(function(e){function t(t){for(var r,a,c=t[0],i=t[1],l=t[2],s=0,p=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(p.length)p.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0bbca3b5":"a04aac12","chunk-269ae04b":"48d4d0aa"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-0bbca3b5":1,"chunk-269ae04b":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0bbca3b5":"bd4632f7","chunk-269ae04b":"4cbada3d"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var l=u[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===o))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){l=p[c],s=l.getAttribute("data-href");if(s===r||s===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],f.parentNode.removeChild(f),n(u)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(e);var p=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var f=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n(e.layout,{tag:"component"},[n("router-view")],1)],1)},o=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-nav-layout"},[n("div",{staticClass:"app-page"},[n("transition",{attrs:{name:"smooth",appear:""}},[n("router-view")],1)],1)])},c=[],i={name:"empty-layout"},l=i,s=(n("ea97"),n("2877")),p=Object(s["a"])(l,u,c,!1,null,null,null),f=p.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-main-layout"},[n("div",{staticClass:"app-page"},[n("router-view")],1)])},h=[],m={name:"home-layout"},v=m,b=Object(s["a"])(v,d,h,!1,null,null,null),y=b.exports,g={computed:{layout:function(){return(this.$route.meta.layout||"empty")+"-layout"}},components:{NavToggle:f,EmptyLayout:f,HomeLayout:y}},w=g,k=(n("034f"),Object(s["a"])(w,a,o,!1,null,null,null)),O=k.exports,_=n("a18c");r["a"].config.productionTip=!1,new r["a"]({router:_["a"],render:function(e){return e(O)}}).$mount("#app")},"85ec":function(e,t,n){},a18c:function(e,t,n){"use strict";n("d3b7");var r=n("2b0e"),a=n("8c4f");r["a"].use(a["a"]),t["a"]=new a["a"]({mode:"history",base:"/",scrollBehavior:function(e){return e.hash?{selector:e.hash}:{x:0,y:0}},routes:[{path:"/nav",name:"nav-menu",meta:{layout:"empty"},component:function(){return n.e("chunk-269ae04b").then(n.bind(null,"7450"))}},{path:"/",name:"home",meta:{layout:"home"},component:function(){return n.e("chunk-0bbca3b5").then(n.bind(null,"bb51"))}}]})},ea97:function(e,t,n){"use strict";var r=n("ec79"),a=n.n(r);a.a},ec79:function(e,t,n){}});
//# sourceMappingURL=app.e0163c2e.js.map