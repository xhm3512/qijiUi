(self["webpackChunkqiji"]=self["webpackChunkqiji"]||[]).push([[641],{86845:function(){},8036:function(){},61105:function(e,t,n){"use strict";n.r(t);var r=n(67294),l=n(96089),a=n(32851),o=n(4187),i=r.memo((e=>{var t=e.demos,n=t["qui-col-demo"].component;return r.createElement(r.Fragment,null,r.createElement(r.Fragment,null,r.createElement("div",{className:"markdown"},r.createElement("h2",{id:"col-\u73ca\u683c"},r.createElement(l.AnchorLink,{to:"#col-\u73ca\u683c","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"Col \u73ca\u683c"),r.createElement("p",null,"Demo:")),r.createElement(a.default,t["qui-col-demo"].previewerProps,r.createElement(n,null)),r.createElement("div",{className:"markdown"},r.createElement("h2",{id:"api"},r.createElement(l.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"API"),r.createElement("p",null,"\u5c5e\u6027\u8bf4\u660e\u5982\u4e0b\uff1a"),r.createElement(o.Z,null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"\u5c5e\u6027"),r.createElement("th",{align:"center"},"\u8bf4\u660e"),r.createElement("th",{align:"center"},"\u7c7b\u578b"),r.createElement("th",{align:"center"},"\u9ed8\u8ba4\u503c"),r.createElement("th",{align:"right"},"\u7248\u672c"))),r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,"span"),r.createElement("td",{align:"center"},"\u6805\u683c\u5360\u4f4d\u683c\u6570\uff0c\u4e3a 0 \u65f6\u76f8\u5f53\u4e8e display: none"),r.createElement("td",{align:"center"},r.createElement("code",null,"number")," | ",r.createElement("code",null,"string")),r.createElement("td",{align:"center"},"-"),r.createElement("td",{align:"right"})),r.createElement("tr",null,r.createElement("td",null,"flex"),r.createElement("td",{align:"center"},"flex \u5e03\u5c40\u5c5e\u6027"),r.createElement("td",{align:"center"},r.createElement("code",null,"number")," | ",r.createElement("code",null,"string")),r.createElement("td",{align:"center"},"-"),r.createElement("td",{align:"right"})),r.createElement("tr",null,r.createElement("td",null,"style"),r.createElement("td",{align:"center"},"style"),r.createElement("td",{align:"center"},r.createElement("code",null,"CSSProperties")),r.createElement("td",{align:"center"},"-"),r.createElement("td",{align:"right"})))))))}));t["default"]=e=>{var t=r.useContext(l.context),n=t.demos;return r.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.createElement(i,{demos:n})}},32851:function(e,t,n){"use strict";n.r(t);var r=n(67294),l=n(7097),a=n(37899),o=n(96089),i=n(65659);n(86845);function c(e,t){return f(e)||m(e,t)||d(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done);o=!0)if(a.push(r.value),t&&a.length===t)break}catch(c){i=!0,l=c}finally{try{o||null==n["return"]||n["return"]()}finally{if(i)throw l}}return a}}function f(e){if(Array.isArray(e))return e}function E(e,t){var n,r=null===(n=e.match(/\.(\w+)$/))||void 0===n?void 0:n[1];return r||(r=t.tsx?"tsx":"jsx"),r}var v=function(e){var t,n,u,d=(0,r.useRef)(),s=(0,r.useContext)(o.context),m=s.locale,f=(0,o.useLocaleProps)(m,e),v=(0,o.useDemoUrl)(f.identifier),p=f.demoUrl||v,h=(null===a.m8||void 0===a.m8?void 0:a.m8.location.hash)==="#".concat(f.identifier),b=1===Object.keys(f.sources).length,y=(0,o.useCodeSandbox)((null===(t=f.hideActions)||void 0===t?void 0:t.includes("CSB"))?null:f),g=(0,o.useRiddle)((null===(n=f.hideActions)||void 0===n?void 0:n.includes("RIDDLE"))?null:f),_=(0,o.useMotions)(f.motions||[],d.current),w=c(_,2),k=w[0],S=w[1],C=(0,o.useCopy)(),N=c(C,2),x=N[0],A=N[1],L=(0,r.useState)((function(){return f.sources._?"_":Object.keys(f.sources)[0]})),j=c(L,2),I=j[0],O=j[1],R=(0,r.useState)(E(I,f.sources[I])),T=c(R,2),M=T[0],P=T[1],U=(0,r.useState)(Boolean(f.defaultShowCode)),$=c(U,2),q=$[0],B=$[1],D=(0,r.useState)(Math.random()),Z=c(D,2),F=Z[0],z=Z[1],J=f.sources[I][M]||f.sources[I].content,W=(0,o.useTSPlaygroundUrl)(m,J),X=(0,r.useRef)(),G=(0,o.usePrefersColor)(),H=c(G,1),K=H[0],Q=f.actionBarRender,V=void 0===Q?function(e){return e}:Q;function Y(e){O(e),P(E(e,f.sources[e]))}return(0,r.useEffect)((function(){z(Math.random())}),[K]),r.createElement("div",{style:f.style,className:[f.className,"__dumi-default-previewer",h?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:f.identifier,"data-debug":f.debug||void 0,"data-iframe":f.iframe||void 0},f.iframe&&r.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),r.createElement("div",{ref:d,className:"__dumi-default-previewer-demo",style:{transform:f.transform?"translate(0, 0)":void 0,padding:f.compact||f.iframe&&!1!==f.compact?"0":void 0,background:f.background}},f.iframe?r.createElement("iframe",{title:"dumi-previewer",style:{height:String(f.iframe).replace(/(\d)$/,"$1px")},key:F,src:p,ref:X}):f.children),r.createElement("div",{className:"__dumi-default-previewer-desc","data-title":f.title},f.title&&r.createElement(o.AnchorLink,{to:"#".concat(f.identifier)},f.title),f.description&&r.createElement("div",{dangerouslySetInnerHTML:{__html:f.description}})),r.createElement("div",{className:"__dumi-default-previewer-actions"},V(r.createElement(r.Fragment,null,y&&r.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:y}),g&&r.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:g}),f.motions&&r.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:S,onClick:function(){return k()}}),f.iframe&&r.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return z(Math.random())}}),!(null===(u=f.hideActions)||void 0===u?void 0:u.includes("EXTERNAL"))&&r.createElement(o.Link,{target:"_blank",to:p},r.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),r.createElement("span",null),r.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":A,onClick:function(){return x(J)}}),"tsx"===M&&q&&r.createElement(o.Link,{target:"_blank",to:W},r.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),r.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(q?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return B(!q)}})))),q&&r.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!b&&r.createElement(l.Z,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:I,onChange:Y},Object.keys(f.sources).map((function(e){return r.createElement(l.J,{tab:"_"===e?"index.".concat(E(e,f.sources[e])):e,key:e})}))),r.createElement("div",{className:"__dumi-default-previewer-source"},r.createElement(i.Z,{code:J,lang:M,showCopy:!1}))))};t["default"]=v},4187:function(e,t,n){"use strict";var r=n(67294),l=n(97397),a=n.n(l);n(8036);function o(e,t){return s(e)||d(e,t)||c(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,t){if(e){if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done);o=!0)if(a.push(r.value),t&&a.length===t)break}catch(c){i=!0,l=c}finally{try{o||null==n["return"]||n["return"]()}finally{if(i)throw l}}return a}}function s(e){if(Array.isArray(e))return e}var m=function(e){var t=e.children,n=(0,r.useRef)(),l=(0,r.useState)(!1),i=o(l,2),c=i[0],u=i[1],d=(0,r.useState)(!1),s=o(d,2),m=s[0],f=s[1];return(0,r.useEffect)((function(){var e=n.current,t=a()((function(){u(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),r.createElement("div",{className:"__dumi-default-table"},r.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":c||void 0,"data-right-folded":m||void 0},r.createElement("table",null,t)))};t["Z"]=m}}]);