webpackJsonp([0],{0:function(t,e,r){t.exports=r("NHnr")},"4+hh":function(t,e){},AnE8:function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("/5sW"),n=r("Lgyv"),i=r.n(n),c=(r("4+hh"),r("AnE8"),{name:"cats",data:function(){return{cats:[],error:!1}},created:function(){this.getCats()},methods:{getCats:function(){var t=this;fetch("https://api.giphy.com/v1/gifs/search?api_key=xWw0i2Ch0K5rqrUkBc7sCOAS4OKcILIc&q=cat&limit=10&offset=0&rating=G&lang=en").then(function(t){return t.json()}).then(function(e){t.cats=e.data}).catch(function(){t.error="You appear to be offline, no cats for you..."})}}}),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cat-container"},[t.error?r("md-card",[r("h1",[t._v(t._s(t.error))])]):t._e(),t._l(t.cats,function(e){return e.images.fixed_height.url?r("md-card",{key:e.id},[r("md-card-media-cover",{attrs:{"md-solid":""}},[r("md-card-media",[r("img",{attrs:{src:e.images.fixed_height.url,alt:e.title}})]),r("md-card-area",[r("md-card-header",[r("span",[t._v(t._s(e.title.replace(" GIF","")))])])],1)],1)],1):t._e()})],2)},o=[],u=r("XyMi");function d(t){r("jvAv")}var l=!1,f=d,p=null,m=null,v=Object(u["a"])(c,s,o,l,f,p,m),h=v.exports;a["default"].use(i.a);var _={name:"app",components:{Cats:h}},g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("md-app",[r("md-app-toolbar",{staticClass:"md-primary"},[r("span",{staticClass:"md-title"},[t._v("Cats To Go")])]),r("md-app-content",[r("Cats")],1)],1)],1)},C=[],y=!1,j=null,k=null,b=null,x=Object(u["a"])(_,g,C,y,j,k,b),A=x.exports;a["default"].config.productionTip=!1,"serviceWorker"in navigator&&navigator.serviceWorker.register("service-worker.js"),new a["default"]({render:function(t){return t(A)}}).$mount("#app")},jvAv:function(t,e){}},[0]);
//# sourceMappingURL=app.610d1289.js.map