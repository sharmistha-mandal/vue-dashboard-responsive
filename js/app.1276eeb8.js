(function(t){function e(e){for(var s,i,c=e[0],o=e[1],l=e[2],f=0,u=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);d&&d(e);while(u.length)u.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,c=1;c<a.length;c++){var o=a[c];0!==r[o]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},r={app:0},n=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-dashboard-responsive/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=o;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=n(t);return a(e)}function n(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=n,t.exports=r,r.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t.user?a("div",[a("router-view",{attrs:{user:t.user}})],1):a("div",[a("Login")],1)])},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login-page"},[a("div",{staticClass:"form"},[a("form",{staticClass:"login-form",on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",placeholder:"username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("button",[t._v("login")]),a("p",{staticClass:"message"},[t._v("Not registered? "),a("router-link",{attrs:{to:"/register"}},[t._v("Create an account")])],1)])])])},c=[],o=a("1da1"),l=(a("96cf"),{name:"Login",data:function(){return{username:"",password:""}},methods:{handleSubmit:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:localStorage.setItem("user",t.username),t.$router.push("/");case 2:case"end":return e.stop()}}),e)})))()}}}),d=l,f=(a("79f2"),a("2877")),u=Object(f["a"])(d,i,c,!1,null,"b2d76402",null),b=u.exports,m={name:"App",components:{Login:b},data:function(){return{user:null}},mounted:function(){this.user="admin"}},v=m,h=(a("034f"),Object(f["a"])(v,r,n,!1,null,null,null)),_=h.exports,p=a("8c4f"),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("Navbar",{attrs:{toggle:t.sidebarOpen},on:{"nav-btn-clicked":t.openSidebar}}),a("Main"),a("Sidebar",{attrs:{toggle:t.sidebarOpen},on:{"close-btn-clicked":t.closeSidebar}}),a("BackToTop",{attrs:{text:"Back to top"}})],1)},g=[],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar"},[a("div",{staticClass:"nav_icon",on:{click:function(e){return t.$emit("nav-btn-clicked")}}},[a("i",{staticClass:"fa fa-bars",attrs:{"aria-hidden":"true"}})]),a("div",{staticClass:"navbar__left"},[a("router-link",{attrs:{to:"/"}},[t._v("Subscribers")]),a("router-link",{attrs:{to:"/"}},[t._v("Video Management")]),a("router-link",{staticClass:"active_link",attrs:{to:"/"}},[t._v(" Admin ")])],1),t._m(0)])},y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navbar__right"},[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}})]),s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-clock-o",attrs:{"aria-hidden":"true"}})]),s("a",{attrs:{href:"#"}},[s("img",{attrs:{width:"30",src:a("bc28"),alt:"avatar"}})])])}],k={props:{toggle:{type:Boolean}}},w=k,x=(a("5812"),Object(f["a"])(w,C,y,!1,null,"d627b39c",null)),E=x.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{sidebar_responsive:t.toggle},attrs:{id:"sidebar"}},[a("div",{staticClass:"sidebar__title"},[t._m(0),a("i",{staticClass:"fa fa-times",attrs:{id:"sidebarIcon","aria-hidden":"true"},on:{click:function(e){return t.$emit("close-btn-clicked")}}})]),a("div",{staticClass:"sidebar__menu"},[t._m(1),a("h2",[t._v("MNG")]),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),a("h2",[t._v("LEAVE")]),t._m(7),t._m(8),t._m(9),t._m(10),a("h2",[t._v("PAYROLL")]),t._m(11),t._m(12),a("div",{staticClass:"sidebar__logout",on:{click:t.submitLogout}},[a("i",{staticClass:"fa fa-power-off"}),a("a",{attrs:{href:"#"}},[t._v("Log out")])])])])},$=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sidebar__img"},[s("img",{attrs:{src:a("cf05"),alt:"icon"}}),s("h1",[t._v("Demo Template")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar__link active_menu_link"},[a("i",{staticClass:"fa fa-home"}),a("a",{attrs:{href:"#"}},[t._v("Dashboard")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar__link"},[a("i",{staticClass:"fa fa-user-secret",attrs:{"aria-hidden":"true"}}),a("a",{attrs:{href:"#"}},[t._v("Admin Management")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar__link"},[a("i",{staticClass:"fa fa-building-o"}),a("a",{attrs:{href:"#"}},[t._v("Company Management")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar__link"},[a("i",{staticClass:"fa fa-wrench"}),a("a",{attrs:{href:"#"}},[t._v("Employee Management")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar__link"},[a("i",{staticClass:"fa fa-archive"}),a("a",{attrs:{href:"#"}},[t._v("Warehouse")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar__link"},[a("i",{staticClass:"fa fa-handshake-o"}),a("a",{attrs:{href:"#"}},[t._v("Contracts")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar__link"},[a("i",{staticClass:"fa fa-question"}),a("a",{attrs:{href:"#"}},[t._v("Requests")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar__link"},[a("i",{staticClass:"fa fa-sign-out"}),a("a",{attrs:{href:"#"}},[t._v("Leave Policy")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar__link"},[a("i",{staticClass:"fa fa-calendar-check-o"}),a("a",{attrs:{href:"#"}},[t._v("Special Days")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar__link"},[a("i",{staticClass:"fa fa-files-o"}),a("a",{attrs:{href:"#"}},[t._v("Apply for leave")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar__link"},[a("i",{staticClass:"fa fa-money"}),a("a",{attrs:{href:"#"}},[t._v("Payroll")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar__link"},[a("i",{staticClass:"fa fa-briefcase"}),a("a",{attrs:{href:"#"}},[t._v("Paygrade")])])}],S={name:"Sidebar",props:{toggle:{type:Boolean}},methods:{submitLogout:function(){localStorage.clear(),this.$router.push("/login")}}},z=S,T=(a("73e7"),Object(f["a"])(z,O,$,!1,null,"0b4c0f9b",null)),L=T.exports,M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",[s("div",{staticClass:"main__container"},[s("div",{staticClass:"main__title"},[s("img",{attrs:{src:a("9100"),alt:"hello"}}),s("div",{staticClass:"main__greeting"},[s("h1",[t._v("Hello, "+t._s(t.username?t.username:"Anonymous"))]),s("p",[t._v("Welcome to your admin dashboard")])])]),t._m(0),s("div",{staticClass:"charts"},[s("div",{staticClass:"charts__left"},[t._m(1),s("Chart")],1),t._m(2)])])])},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main__cards"},[a("div",{staticClass:"card"},[a("i",{staticClass:"fa fa-user-o fa-2x text-lightblue",attrs:{"aria-hidden":"true"}}),a("div",{staticClass:"card_inner"},[a("p",{staticClass:"text-primary-p"},[t._v("Number of Subscribers")]),a("span",{staticClass:"font-bold text-title"},[t._v("578")])])]),a("div",{staticClass:"card"},[a("i",{staticClass:"fa fa-calendar fa-2x text-red",attrs:{"aria-hidden":"true"}}),a("div",{staticClass:"card_inner"},[a("p",{staticClass:"text-primary-p"},[t._v("Times of Watching")]),a("span",{staticClass:"font-bold text-title"},[t._v("2467")])])]),a("div",{staticClass:"card"},[a("i",{staticClass:"fa fa-video-camera fa-2x text-yellow",attrs:{"aria-hidden":"true"}}),a("div",{staticClass:"card_inner"},[a("p",{staticClass:"text-primary-p"},[t._v("Number of Videos")]),a("span",{staticClass:"font-bold text-title"},[t._v("340")])])]),a("div",{staticClass:"card"},[a("i",{staticClass:"fa fa-thumbs-up fa-2x text-green",attrs:{"aria-hidden":"true"}}),a("div",{staticClass:"card_inner"},[a("p",{staticClass:"text-primary-p"},[t._v("Number of Likes")]),a("span",{staticClass:"font-bold text-title"},[t._v("645")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"charts__left__title"},[a("div",[a("h1",[t._v("Daily Reports")]),a("p",[t._v("London, UK")])]),a("i",{staticClass:"fa fa-gbp",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"charts__right"},[a("div",{staticClass:"charts__right__title"},[a("div",[a("h1",[t._v("Stats Reports")]),a("p",[t._v("London, UK")])]),a("i",{staticClass:"fa fa-gbp",attrs:{"aria-hidden":"true"}})]),a("div",{staticClass:"charts__right__cards"},[a("div",{staticClass:"card1"},[a("h1",[t._v("Income")]),a("p",[t._v("£75,300")])]),a("div",{staticClass:"card2"},[a("h1",[t._v("Sales")]),a("p",[t._v("£124,200")])]),a("div",{staticClass:"card3"},[a("h1",[t._v("Users")]),a("p",[t._v("3900")])]),a("div",{staticClass:"card4"},[a("h1",[t._v("Orders")]),a("p",[t._v("1881")])])])])}],N=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("canvas",{attrs:{id:"income-chart"}})])}],R=a("2909"),D=(a("d81d"),a("30ef")),B=a.n(D),I={type:"line",data:{labels:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],datasets:[{label:"Daily Income",data:[1e4,0,7900,820,27,14,50],borderColor:"#35a4ba"}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}],xAxes:[{gridLines:{display:!1}}]},elements:{line:{fill:!1,tension:0,borderWidth:4},point:{radius:0,hitRadius:5,hoverRadius:5}}}},q=I,U={name:"Chart",data:function(){return{dailyChartData:q}},methods:{generateRandomArray:function(t,e){return Object(R["a"])(new Array(t)).map((function(){return Math.round(Math.random()*e)}))}},mounted:function(){var t=document.getElementById("income-chart");new B.a(t,this.dailyChartData)}},W=U,F=Object(f["a"])(W,N,P,!1,null,null,null),V=F.exports,H={name:"Main",components:{Chart:V},data:function(){return{username:null}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.username=localStorage.getItem("user");case 1:case"end":return e.stop()}}),e)})))()}},J=H,K=(a("e6a2"),Object(f["a"])(J,M,A,!1,null,"4914258e",null)),Y=K.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"back-to-top-fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"vue-back-to-top",style:"bottom:"+this.bottom+";right:"+this.right+";",on:{click:t.backToTop}},[t._t("default",(function(){return[a("div",{staticClass:"default"},[a("span",[t._v(" "+t._s(t.text)+" ")])])]}))],2)])},Z=[],Q=(a("a9e3"),{name:"BackToTop",props:{text:{type:String,default:"text"},visibleoffset:{type:[String,Number],default:300},right:{type:String,default:"30px"},bottom:{type:String,default:"40px"}},data:function(){return{visible:!1}},mounted:function(){window.smoothscroll=function(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>0&&(window.requestAnimationFrame(window.smoothscroll),window.scrollTo(0,Math.floor(t-t/5)))},window.addEventListener("scroll",this.catchScroll)},destroyed:function(){window.removeEventListener("scroll",this.catchScroll)},methods:{catchScroll:function(){this.visible=window.pageYOffset>parseInt(this.visibleoffset)},backToTop:function(){window.smoothscroll(),this.$emit("scrolled")}}}),X=Q,tt=(a("ce64"),Object(f["a"])(X,G,Z,!1,null,"770fe1d9",null)),et=tt.exports,at={name:"Home",components:{Navbar:E,Sidebar:L,Main:Y,BackToTop:et},data:function(){return{sidebarOpen:!1}},methods:{openSidebar:function(){this.sidebarOpen=!0},closeSidebar:function(){this.sidebarOpen=!1}}},st=at,rt=Object(f["a"])(st,j,g,!1,null,null,null),nt=rt.exports;s["a"].use(p["a"]);var it=new p["a"]({mode:"history",routes:[{path:"/",component:nt},{path:"/login",component:b}]});s["a"].config.productionTip=!1,new s["a"]({router:it,render:function(t){return t(_)}}).$mount("#app")},5812:function(t,e,a){"use strict";a("c71d")},"70a9":function(t,e,a){},"73e7":function(t,e,a){"use strict";a("b62b")},"79f2":function(t,e,a){"use strict";a("98c2")},"85ec":function(t,e,a){},9100:function(t,e,a){t.exports=a.p+"img/hello.0873cf0d.svg"},"98c2":function(t,e,a){},b62b:function(t,e,a){},bc28:function(t,e,a){t.exports=a.p+"img/avatar.ba93a3b0.svg"},c71d:function(t,e,a){},ce64:function(t,e,a){"use strict";a("70a9")},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},e6a2:function(t,e,a){"use strict";a("f944")},f944:function(t,e,a){}});
//# sourceMappingURL=app.1276eeb8.js.map