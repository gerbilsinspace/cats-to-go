webpackJsonp([1],{0:function(t,a,e){t.exports=e("NHnr")},"4+hh":function(t,a){},AnE8:function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("/5sW"),s=e("Lgyv"),r=e.n(s),i=(e("4+hh"),e("AnE8"),{name:"cats",data:function(){return{cats:[]}},created:function(){this.getCats()},methods:{getCats:function(){var t=this;fetch("https://api.giphy.com/v1/gifs/search?api_key=xWw0i2Ch0K5rqrUkBc7sCOAS4OKcILIc&q=cats&limit=25&offset=0&rating=G&lang=en").then(function(t){return t.json()}).then(function(a){t.cats=a.data})}}}),c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",t._l(t.cats,function(a){return a.images.original.url?e("md-card",{key:a.id},[e("md-card-media-cover",{attrs:{"md-solid":""}},[e("md-card-media",{attrs:{"md-ratio":"4:3"}},[e("img",{attrs:{src:a.images.original.url,alt:a.title}})]),e("md-card-area",[e("md-card-header",[e("span",{staticClass:"md-title"},[t._v(t._s(a.title))]),e("span",{staticClass:"md-subhead"},[t._v(t._s(a.type))])])],1)],1)],1):t._e()}))},d=[],l=e("XyMi"),o=!1,u=null,p=null,m=null,f=Object(l["a"])(i,c,d,o,u,p,m),h=f.exports;n["default"].use(r.a);var v={name:"app",components:{Cats:h}},_=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("md-app",[e("md-app-toolbar",{staticClass:"md-primary"},[e("span",{staticClass:"md-title"},[t._v("Cats To Go")])]),e("md-app-content",[e("Cats")],1)],1)],1)},g=[],C=!1,y=null,b=null,O=null,j=Object(l["a"])(v,_,g,C,y,b,O),k=j.exports;n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(k)}}).$mount("#app")}},[0]);
//# sourceMappingURL=app.4ec31367.js.map