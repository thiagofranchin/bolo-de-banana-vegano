(function(e){function t(t){for(var r,n,s=t[0],c=t[1],l=t[2],u=0,f=[];u<s.length;u++)n=s[u],o[n]&&f.push(o[n][0]),o[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,n=1;n<a.length;n++){var c=a[n];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},o={app:0},i=[];function n(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"f4ab49ed"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a=o[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise(function(t,r){a=o[e]=[t,r]});t.push(a[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=n(e),i=function(t){c.onerror=c.onload=null,clearTimeout(l);var a=o[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,n=new Error("Loading chunk "+e+" failed.\n("+r+": "+i+")");n.type=r,n.request=i,a[1](n)}o[e]=void 0}};var l=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/bolo-de-banana-vegano/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("744f"),a("6c7b"),a("7514"),a("20d6"),a("1c4c"),a("6762"),a("cadf"),a("e804"),a("55dd"),a("d04f"),a("c8ce"),a("217b"),a("7f7f"),a("f400"),a("7f25"),a("536b"),a("d9ab"),a("f9ab"),a("32d7"),a("25c9"),a("9f3c"),a("042e"),a("c7c6"),a("f4ff"),a("049f"),a("7872"),a("a69f"),a("0b21"),a("6c1a"),a("c7c62"),a("84b4"),a("c5f6"),a("2e37"),a("fca0"),a("7cdf"),a("ee1d"),a("b1b1"),a("87f3"),a("9278"),a("5df2"),a("04ff"),a("f751"),a("4504"),a("fee7"),a("ffc1"),a("0d6d"),a("9986"),a("8e6e"),a("25db"),a("e4f7"),a("b9a1"),a("64d5"),a("9aea"),a("db97"),a("66c8"),a("57f0"),a("165b"),a("456d"),a("cf6a"),a("fd24"),a("8615"),a("551c"),a("097d"),a("df1b"),a("2397"),a("88ca"),a("ba16"),a("d185"),a("ebde"),a("2d34"),a("f6b3"),a("2251"),a("c698"),a("a19f"),a("9253"),a("9275"),a("3b2b"),a("3846"),a("4917"),a("a481"),a("28a5"),a("386d"),a("6b54"),a("4f7f"),a("8a81"),a("ac4d"),a("8449"),a("9c86"),a("fa83"),a("48c0"),a("a032"),a("aef6"),a("d263"),a("6c37"),a("9ec8"),a("5695"),a("2fdb"),a("d0b0"),a("5df3"),a("b54a"),a("f576"),a("ed50"),a("788d"),a("14b9"),a("f386"),a("f559"),a("1448"),a("673e"),a("242a"),a("c66f"),a("b05c"),a("34ef"),a("6aa2"),a("15ac"),a("af56"),a("b6e4"),a("9c29"),a("63d9"),a("4dda"),a("10ad"),a("c02b"),a("4795"),a("130f"),a("ac6a"),a("96cf"),a("0cdd");var r=a("2b0e"),o=a("5f5b");a("ab8b"),a("2dd8");r["default"].use(o["a"]);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{staticClass:"d-none",attrs:{to:"/"}},[e._v("Home")])],1),a("router-view")],1)},n=[],s=(a("5c0b"),a("2877")),c={},l=Object(s["a"])(c,i,n,!1,null,null,null),u=l.exports,d=a("8c4f"),f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},p=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home py-5"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h1",{staticClass:"text-success text-center"},[e._v("Bolo de "),a("span",{staticClass:"text-warning"},[e._v("banana")]),e._v(" vegano")]),a("h3",{staticClass:"text-danger text-center text-md-left mb-3"},[e._v("Ingredientes")]),a("ul",{staticClass:"list-group"},[a("li",{staticClass:"list-group-item list-group-item-dark"},[e._v("2 colheres de sopa de fermento químico")]),a("li",{staticClass:"list-group-item list-group-item-dark"},[e._v("1 colher de café de bicarbonato")]),a("li",{staticClass:"list-group-item list-group-item-dark"},[e._v("Misturar geral")]),a("li",{staticClass:"list-group-item list-group-item-dark"},[e._v("Cortar algumas fatias de banana para colocar em cima do bolo")]),a("li",{staticClass:"list-group-item list-group-item-dark"},[e._v("Esmagar 6 bananas")]),a("li",{staticClass:"list-group-item list-group-item-dark"},[e._v("Untar forma com manteiga e jogar farinha")]),a("li",{staticClass:"list-group-item list-group-item-dark"},[e._v("1½ xícara de farinha integral")]),a("li",{staticClass:"list-group-item list-group-item-dark"},[e._v("1½ xícara de farinha branca")]),a("li",{staticClass:"list-group-item list-group-item-dark"},[e._v("Misture as farinhas")]),a("li",{staticClass:"list-group-item list-group-item-dark"},[e._v("1 colher de sopa de canela")]),a("li",{staticClass:"list-group-item list-group-item-dark"},[e._v("2 duas colheres de café de sal")]),a("li",{staticClass:"list-group-item list-group-item-dark"},[e._v("1 xícara de açúcar mascavo")]),a("li",{staticClass:"list-group-item list-group-item-dark"},[e._v("1 xícara de coco ralado sem açúcar")]),a("li",{staticClass:"list-group-item list-group-item-dark"},[e._v("Misturar tudo")]),a("li",{staticClass:"list-group-item list-group-item-dark"},[e._v("1 colher de café de vinagre")]),a("li",{staticClass:"list-group-item list-group-item-dark"},[e._v("Abrir buraco na farinha e colocar 1 xícara de óleo de girassol 200ml")]),a("li",{staticClass:"list-group-item list-group-item-dark"},[e._v("Jogar banana no buraco onde foi colocado o óleo")]),a("li",{staticClass:"list-group-item list-group-item-dark"},[e._v("Mexer pouco até misturar")]),a("li",{staticClass:"list-group-item list-group-item-dark"},[e._v("Pré-aquecer o forno e colocar 40 minutos no mínimo")]),a("li",{staticClass:"list-group-item list-group-item-dark"},[e._v("Após 40 minutos colocar no fogo alto e deixar mais 10 minutos")])])])])])])}],m={name:"home"},g=m,b=Object(s["a"])(g,f,p,!1,null,null,null),v=b.exports;r["default"].use(d["a"]);var h=new d["a"]({routes:[{path:"/",name:"home",component:v},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),_=a("2f62");r["default"].use(_["a"]);var C=new _["a"].Store({state:{},mutations:{},actions:{}}),k=a("9483");Object(k["a"])("".concat("/bolo-de-banana-vegano/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["default"].config.productionTip=!1,new r["default"]({router:h,store:C,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var r=a("5e27"),o=a.n(r);o.a},"5e27":function(e,t,a){}});
//# sourceMappingURL=app.c67007cd.js.map