!function(t){var o={};function e(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=o,e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},e.p="",e(e.s=0)}([function(t,o,e){e(1),t.exports=e(11)},function(t,o,e){Nova.booting(function(t,o){o.addRoutes([{name:"command-runner",path:"/command-runner",component:e(2)}])})},function(t,o,e){var n=e(8)(e(9),e(10),!1,function(t){e(3)},null,null);t.exports=n.exports},function(t,o,e){var n=e(4);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(6)("1dac8f1e",n,!0,{})},function(t,o,e){(t.exports=e(5)(!1)).push([t.i,".history-table{text-align:left}.btn-secondary{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:hover{color:#fff;background-color:#5a6268;border-color:#545b62}.btn-secondary.focus,.btn-secondary:focus{-webkit-box-shadow:0 0 0 .2rem hsla(208,6%,54%,.5);box-shadow:0 0 0 .2rem hsla(208,6%,54%,.5)}.btn-secondary.disabled,.btn-secondary:disabled{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:not(:disabled):not(.disabled).active,.btn-secondary:not(:disabled):not(.disabled):active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#545b62;border-color:#4e555b}.btn-secondary:not(:disabled):not(.disabled).active:focus,.btn-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-secondary.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem hsla(208,6%,54%,.5);box-shadow:0 0 0 .2rem hsla(208,6%,54%,.5)}.btn-success{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:hover{color:#fff;background-color:#218838;border-color:#1e7e34}.btn-success.focus,.btn-success:focus{-webkit-box-shadow:0 0 0 .2rem rgba(72,180,97,.5);box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.btn-success.disabled,.btn-success:disabled{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:not(:disabled):not(.disabled).active,.btn-success:not(:disabled):not(.disabled):active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#1e7e34;border-color:#1c7430}.btn-success:not(:disabled):not(.disabled).active:focus,.btn-success:not(:disabled):not(.disabled):active:focus,.show>.btn-success.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(72,180,97,.5);box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.btn-info{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:hover{color:#fff;background-color:#138496;border-color:#117a8b}.btn-info.focus,.btn-info:focus{-webkit-box-shadow:0 0 0 .2rem rgba(58,176,195,.5);box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-info.disabled,.btn-info:disabled{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#117a8b;border-color:#10707f}.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(58,176,195,.5);box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-warning{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning:hover{color:#212529;background-color:#e0a800;border-color:#d39e00}.btn-warning.focus,.btn-warning:focus{-webkit-box-shadow:0 0 0 .2rem rgba(222,170,12,.5);box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.btn-warning.disabled,.btn-warning:disabled{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning:not(:disabled):not(.disabled).active,.btn-warning:not(:disabled):not(.disabled):active,.show>.btn-warning.dropdown-toggle{color:#212529;background-color:#d39e00;border-color:#c69500}.btn-warning:not(:disabled):not(.disabled).active:focus,.btn-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-warning.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(222,170,12,.5);box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.btn-light{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:hover{color:#212529;background-color:#e2e6ea;border-color:#dae0e5}.btn-light.focus,.btn-light:focus{-webkit-box-shadow:0 0 0 .2rem hsla(220,4%,85%,.5);box-shadow:0 0 0 .2rem hsla(220,4%,85%,.5)}.btn-light.disabled,.btn-light:disabled{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:not(:disabled):not(.disabled).active,.btn-light:not(:disabled):not(.disabled):active,.show>.btn-light.dropdown-toggle{color:#212529;background-color:#dae0e5;border-color:#d3d9df}.btn-light:not(:disabled):not(.disabled).active:focus,.btn-light:not(:disabled):not(.disabled):active:focus,.show>.btn-light.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem hsla(220,4%,85%,.5);box-shadow:0 0 0 .2rem hsla(220,4%,85%,.5)}.btn-dark{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:hover{color:#fff;background-color:#23272b;border-color:#1d2124}.btn-dark.focus,.btn-dark:focus{-webkit-box-shadow:0 0 0 .2rem rgba(82,88,93,.5);box-shadow:0 0 0 .2rem rgba(82,88,93,.5)}.btn-dark.disabled,.btn-dark:disabled{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:not(:disabled):not(.disabled).active,.btn-dark:not(:disabled):not(.disabled):active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#1d2124;border-color:#171a1d}.btn-dark:not(:disabled):not(.disabled).active:focus,.btn-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-dark.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(82,88,93,.5);box-shadow:0 0 0 .2rem rgba(82,88,93,.5)}.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem}.badge-success{color:#fff;background-color:#28a745}.badge-error{color:#fff;background-color:#dc3545}",""])},function(t,o){t.exports=function(t){var o=[];return o.toString=function(){return this.map(function(o){var e=function(t,o){var e=t[1]||"",n=t[3];if(!n)return e;if(o&&"function"==typeof btoa){var r=(s=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),a=n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"});return[e].concat(a).concat([r]).join("\n")}var s;return[e].join("\n")}(o,t);return o[2]?"@media "+o[2]+"{"+e+"}":e}).join("")},o.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(n[a]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&n[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="("+s[2]+") and ("+e+")"),o.push(s))}},o}},function(t,o,e){var n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r=e(7),a={},s=n&&(document.head||document.getElementsByTagName("head")[0]),d=null,i=0,c=!1,l=function(){},b=null,u="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function g(t){for(var o=0;o<t.length;o++){var e=t[o],n=a[e.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](e.parts[r]);for(;r<e.parts.length;r++)n.parts.push(m(e.parts[r]));n.parts.length>e.parts.length&&(n.parts.length=e.parts.length)}else{var s=[];for(r=0;r<e.parts.length;r++)s.push(m(e.parts[r]));a[e.id]={id:e.id,refs:1,parts:s}}}}function p(){var t=document.createElement("style");return t.type="text/css",s.appendChild(t),t}function m(t){var o,e,n=document.querySelector("style["+u+'~="'+t.id+'"]');if(n){if(c)return l;n.parentNode.removeChild(n)}if(f){var r=i++;n=d||(d=p()),o=w.bind(null,n,r,!1),e=w.bind(null,n,r,!0)}else n=p(),o=function(t,o){var e=o.css,n=o.media,r=o.sourceMap;n&&t.setAttribute("media",n);b.ssrId&&t.setAttribute(u,o.id);r&&(e+="\n/*# sourceURL="+r.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}.bind(null,n),e=function(){n.parentNode.removeChild(n)};return o(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;o(t=n)}else e()}}t.exports=function(t,o,e,n){c=e,b=n||{};var s=r(t,o);return g(s),function(o){for(var e=[],n=0;n<s.length;n++){var d=s[n];(i=a[d.id]).refs--,e.push(i)}o?g(s=r(t,o)):s=[];for(n=0;n<e.length;n++){var i;if(0===(i=e[n]).refs){for(var c=0;c<i.parts.length;c++)i.parts[c]();delete a[i.id]}}}};var h,v=(h=[],function(t,o){return h[t]=o,h.filter(Boolean).join("\n")});function w(t,o,e,n){var r=e?"":n.css;if(t.styleSheet)t.styleSheet.cssText=v(o,r);else{var a=document.createTextNode(r),s=t.childNodes;s[o]&&t.removeChild(s[o]),s.length?t.insertBefore(a,s[o]):t.appendChild(a)}}},function(t,o){t.exports=function(t,o){for(var e=[],n={},r=0;r<o.length;r++){var a=o[r],s=a[0],d={id:t+":"+r,css:a[1],media:a[2],sourceMap:a[3]};n[s]?n[s].parts.push(d):e.push(n[s]={id:s,parts:[d]})}return e}},function(t,o){t.exports=function(t,o,e,n,r,a){var s,d=t=t||{},i=typeof t.default;"object"!==i&&"function"!==i||(s=t,d=t.default);var c,l="function"==typeof d?d.options:d;if(o&&(l.render=o.render,l.staticRenderFns=o.staticRenderFns,l._compiled=!0),e&&(l.functional=!0),r&&(l._scopeId=r),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=c):n&&(c=n),c){var b=l.functional,u=b?l.render:l.beforeCreate;b?(l._injectStyles=c,l.render=function(t,o){return c.call(o),u(t,o)}):l.beforeCreate=u?[].concat(u,c):[c]}return{esModule:s,exports:d,options:l}}},function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={data:function(){return{modalOpen:!1,running:!1,commandIndex:null,groups:[],commands:{},history:{}}},mounted:function(){this.getCommands(),this.getHistory()},methods:{getHistory:function(){var t=this;Nova.request().get("/nova-vendor/command-runner/history/").then(function(o){t.history=o.data})},getCommands:function(){var t=this;Nova.request().get("/nova-vendor/command-runner/commands/").then(function(o){for(var e in t.groups=[],o.data)if(o.data.hasOwnProperty(e)){var n=o.data[e].group;t.groups.indexOf(n)<0&&t.groups.push(n)}console.log(t.groups),t.commands=o.data})},runCommand:function(){var t=this;this.running=!0,Nova.request().post("/nova-vendor/command-runner/commands/"+this.commandIndex+"/run").then(function(o){t.$toasted.show(o.data.result,{type:o.data.status?"success":"error"}),t.running=!1,t.getHistory(),t.closeModal()})},confirm:function(t){this.openModal(t)},openModal:function(t){this.commandIndex=t,this.modalOpen=!0},closeModal:function(){this.modalOpen=!1}}}},function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("portal",{attrs:{to:"modals"}},[e("transition",{attrs:{name:"fade"}},[t.modalOpen?e("modal",{staticClass:"modal",attrs:{tabindex:"-1",role:"dialog"}},[e("div",{staticClass:"bg-white rounded-lg shadow-lg overflow-hidden w-action"},[e("div",[e("h2",{staticClass:"pt-8 px-8 text-90 font-normal text-xl"},[t._v(t._s(t.commandIndex))]),t._v(" "),e("p",{staticClass:"text-80 px-8 my-8"},[t._v("\n                            Are you sure you want to run this command ?\n                        ")])]),t._v(" "),e("div",{staticClass:"bg-30 px-6 py-3 flex"},[e("div",{staticClass:"flex items-center ml-auto"},[e("button",{staticClass:"btn text-80 font-normal h-9 px-3 mr-3 btn-link",attrs:{type:"button"},on:{click:function(o){return o.preventDefault(),t.closeModal(o)}}},[t._v("Cancel")]),t._v(" "),e("button",{staticClass:"btn btn-default",class:t.commands[t.commandIndex].type?"btn-"+t.commands[t.commandIndex].type:"btn-primary",attrs:{type:"submit"},on:{click:function(o){t.runCommand()}}},[t.running?t._e():e("span",[t._v("Run Command")]),t._v(" "),t.running?e("svg",{staticClass:"mx-auto block",staticStyle:{width:"30px"},attrs:{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"}},[e("circle",{attrs:{cx:"15",cy:"15",r:"10.9958"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),t._v(" "),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),t._v(" "),e("circle",{attrs:{cx:"60",cy:"15",r:"13.0042","fill-opacity":"0.3"}},[e("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),t._v(" "),e("animate",{attrs:{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),t._v(" "),e("circle",{attrs:{cx:"105",cy:"15",r:"10.9958"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),t._v(" "),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])]):t._e()])])])])]):t._e()],1)],1),t._v(" "),e("heading",{staticClass:"mb-6"},[t._v("Command Runner")]),t._v(" "),e("card",{staticClass:"flex flex-col items-center",staticStyle:{"min-height":"300px"}},[e("h2",{staticClass:"text-black text-3xl font-light mt-4"},[t._v("\n            Available commands\n        ")]),t._v(" "),e("div",{staticClass:"flex bg-grey-lighter"},t._l(t.groups,function(o){return e("div",{staticClass:"flex-1 text-grey-darker text-center bg-grey-light px-4 py-2 m-2"},[e("h4",{staticClass:"text-black text-2xl text-60 font-light mb-6 mt-4"},[t._v("\n                    "+t._s(o||"Unnamed group")+"\n                ")]),t._v(" "),t._l(t.commands,function(n,r){return n.group===o?e("button",{staticClass:"items-left btn btn-default mb-2",class:n.type?"btn-"+n.type:"btn-primary",staticStyle:{width:"100%"},attrs:{type:"button"},on:{click:function(o){t.confirm(r)}}},[t._v("\n                    "+t._s(r)+"\n                ")]):t._e()})],2)}),0)]),t._v(" "),e("heading",{staticClass:"mb-6 mt-6"},[t._v("History")]),t._v(" "),e("card",{staticClass:"mb-6"},[e("table",{staticClass:"table w-full"},[e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("Command")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Options")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Status")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Result")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Duration")]),t._v(" "),e("th",{staticClass:"table-fit",attrs:{scope:"col"}},[t._v("Happened")])])]),t._v(" "),e("tbody",t._l(t.history,function(o){return e("tr",[e("td",[t._v(t._s(o.run))]),t._v(" "),e("td",[t._v(t._s(o.options))]),t._v(" "),e("td",[e("span",{staticClass:"badge",class:"badge-"+o.status},[t._v(t._s(o.status))])]),t._v(" "),e("td",[t._v(t._s(o.result))]),t._v(" "),e("td",[t._v(t._s(o.duration)+" sec.")]),t._v(" "),e("td",{staticClass:"table-fit"},[t._v(t._s(o.time))])])}),0)])])],1)},staticRenderFns:[]}},function(t,o){}]);