(this["webpackJsonpsp-project"]=this["webpackJsonpsp-project"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a(34)},,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),i=a.n(c),o=a(7),l=a(1),s=a(2),d=a(4),u=a(3),m=(a(19),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={btnToggle:!1},e}return Object(s.a)(a,[{key:"render",value:function(){var e="menu-btn";return this.state.btnToggle&&(e="".concat(e," change")),r.a.createElement("div",{className:e,onClick:this.props.show},r.a.createElement("div",{className:"bar1"}),r.a.createElement("div",{className:"bar2"}),r.a.createElement("div",{className:"bar3"}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.btnToggle!==e.btnToggle?{btnToggle:e.close}:null}}]),a}(n.Component)),h=a(11),f=a.n(h),p=(a(22),(new Date).getFullYear()),v=(new Date).getMonth(),b=(new Date).getDate(),g="".concat(p,"/").concat(v,"/").concat(b),E=f()(g,"YYYY/MM/DD").locale("fa").format("YYYY/MM/DD"),w=function(){return r.a.createElement("p",{className:"date"},E)},y=(a(23),function(e){return r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"d-flex"},r.a.createElement("h2",{className:"commodity"},e.commodity),r.a.createElement("div",{className:"item-btn",onClick:function(){e.onDelete(e.id)}},"\xd7")),r.a.createElement("div",{className:"d-flex"},r.a.createElement("p",{className:"entry"},"\u062a\u0627\u0631\u06cc\u062e \u0648\u0631\u0648\u062f: ",e.entry),r.a.createElement("p",{className:"expiration"},"\u062a\u0627\u0631\u06cc\u062e \u0627\u0646\u0642\u0636\u0627: ",e.expiration)))}),k=(a(24),function(e){var t=r.a.createElement("h2",{className:"nolist"},"\u0647\u0646\u0648\u0632 \u0645\u062d\u0635\u0648\u0644\u06cc \u062b\u0628\u062a \u0646\u06a9\u0631\u062f\u0647\u200c\u0627\u06cc\u062f");e.data.length>0&&(t=e.data.map((function(t,a){return r.a.createElement(y,{key:a,id:a,commodity:t.commodity,entry:t.entryDate,expiration:t.expirationDate,onDelete:e.onDelete})})));var a="";return e.data.length>0&&(a="list"),r.a.createElement("center",{className:a,clicked:e.clicked},t)}),N=(a(25),function(e){return e.show?r.a.createElement("div",{className:"Backdrop",onClick:e.clicked}):null}),D=(a(26),function(e){return r.a.createElement("center",{className:"side-bar",style:{opacity:e.show?"1":"0"}},r.a.createElement(N,{show:e.show,clicked:e.sideBarClosed}),r.a.createElement("div",{className:"menu-items",onClick:e.sideBarClosed},r.a.createElement("div",{className:"menu-item",style:{display:e.show?"block":"none"}},r.a.createElement("div",{className:"link"},r.a.createElement("a",{href:"/Product-expiration-date/"},"\u0635\u0641\u062d\u0647 \u0627\u0635\u0644\u06cc")),r.a.createElement("div",{className:"link"},r.a.createElement("a",{href:"/Product-expiration-date/"},"\u062a\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627")))))});function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var j=r.a.createElement("path",{d:"m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"}),x=function(e){var t=e.svgRef,a=e.title,n=O(e,["svgRef","title"]);return r.a.createElement("svg",S({height:"448pt",viewBox:"0 0 448 448",width:"448pt",ref:t},n),a?r.a.createElement("title",null,a):null,j)},C=r.a.forwardRef((function(e,t){return r.a.createElement(x,S({svgRef:t},e))})),B=(a.p,a(27),function(e){var t="svg";return e.btnStyle&&(t="".concat(t," rotate")),r.a.createElement("div",{className:"add-icon"},r.a.createElement("div",{className:"bg-icon-",onClick:e.clicked},r.a.createElement(C,{className:t})))}),P=a(13),A=(a(28),a(12)),L=a.n(A),W=function(e){var t=Object(n.useState)({date:null}),a=Object(P.a)(t,2),c=a[0],i=a[1];return r.a.createElement(L.a,{value:c.date,onChange:function(t){i({date:t}),e.expDate(t)},inputPlaceholder:"\u062a\u0627\u0631\u06cc\u062e \u0627\u0646\u0642\u0636\u0627 \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f",shouldHighlightWeekends:!0,locale:"fa",calendarPopperPosition:"top",colorPrimary:"#3da5eb"})},Y=(a(29),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",date:""},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.name&&""!==e.state.date&&(e.props.onFormSubmit(e.state),e.setState({name:"",date:""}))},e.handleDate=function(t){var a=t.day+"-"+t.month+"-"+t.year;e.setState({date:a})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"new-list",style:{opacity:this.props.show?1:0}},r.a.createElement(N,{show:this.props.show,clicked:this.props.clicked}),r.a.createElement("form",{className:"list-inputs",onSubmit:this.handleSubmit,style:{display:this.props.show?"block":"none"}},r.a.createElement("h3",{className:"list-title",style:{display:this.props.show?"block":"none"}},"\u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0646 \u0645\u062d\u0635\u0648\u0644"),r.a.createElement("input",{type:"text",name:"name",className:"newlist-input",value:this.state.name,placeholder:"\u0646\u0627\u0645 \u0645\u062d\u0635\u0648\u0644 \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f",onChange:function(t){return e.setState({name:t.target.value})}}),r.a.createElement(W,{expDate:this.handleDate}),r.a.createElement("button",{className:"list-btn",onClick:this.props.clicked},"\u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u062f")))}}]),a}(n.Component)),R=(a(30),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={sideBar:!1,addList:!1,listData:[]},e.showSideBar=function(){e.setState({sideBar:!0})},e.closeSideBar=function(){e.setState({sideBar:!1})},e.handleAddList=function(){e.setState({addList:!e.state.addList})},e.handleSubmit=function(t){var a={commodity:t.name,expirationDate:t.date,entryDate:E};e.setState({listData:[].concat(Object(o.a)(e.state.listData),[a])})},e.handleDelete=function(t){var a=Object(o.a)(e.state.listData);a.splice(t,1),e.setState({listData:a})},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement(D,{show:this.state.sideBar,sideBarClosed:this.closeSideBar}),r.a.createElement("header",{className:"nav"},r.a.createElement(m,{show:this.showSideBar,close:this.state.sideBar}),r.a.createElement(w,null)),r.a.createElement(k,{data:this.state.listData,onDelete:this.handleDelete}),r.a.createElement(B,{clicked:this.handleAddList,btnStyle:this.state.addList}),r.a.createElement(Y,{show:this.state.addList,clicked:this.handleAddList,list:this.state.listData,onFormSubmit:this.handleSubmit}))}}]),a}(n.Component));a(31);var T=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(R,null))},M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function F(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(32),a(33);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Product-expiration-date",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Product-expiration-date","/service-worker.js");M?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):F(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):F(t,e)}))}}()}],[[14,1,2]]]);
//# sourceMappingURL=main.cd0556c9.chunk.js.map