(self["webpackChunkqiji"]=self["webpackChunkqiji"]||[]).push([[425],{86845:function(){},11190:function(e,t,n){"use strict";n.r(t);var r=n(67294),a=n(96089),o=n(32851),l=r.memo((e=>{var t=e.demos,n=t["qui-sc-catch-err-demo"].component,l=t["qui-sc-catch-err-demo-1"].component;return r.createElement(r.Fragment,null,r.createElement(r.Fragment,null,r.createElement("div",{className:"markdown"},r.createElement("h2",{id:"hook"},r.createElement(a.AnchorLink,{to:"#hook","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"hook"),r.createElement("p",null,"Demo:")),r.createElement(o.default,t["qui-sc-catch-err-demo"].previewerProps,r.createElement(n,null)),r.createElement("div",{className:"markdown"},r.createElement("h2",{id:"class"},r.createElement(a.AnchorLink,{to:"#class","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"class"),r.createElement("p",null,"Demo:")),r.createElement(o.default,t["qui-sc-catch-err-demo-1"].previewerProps,r.createElement(l,null))))}));t["default"]=e=>{var t=r.useContext(a.context),n=t.demos;return r.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.createElement(l,{demos:n})}},32851:function(e,t,n){"use strict";n.r(t);var r=n(67294),a=n(7097),o=n(37899),l=n(96089),i=n(65659);n(86845);function c(e,t){return f(e)||m(e,t)||s(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done);l=!0)if(o.push(r.value),t&&o.length===t)break}catch(c){i=!0,a=c}finally{try{l||null==n["return"]||n["return"]()}finally{if(i)throw a}}return o}}function f(e){if(Array.isArray(e))return e}function p(e,t){var n,r=null===(n=e.match(/\.(\w+)$/))||void 0===n?void 0:n[1];return r||(r=t.tsx?"tsx":"jsx"),r}var v=function(e){var t,n,u,s=(0,r.useRef)(),d=(0,r.useContext)(l.context),m=d.locale,f=(0,l.useLocaleProps)(m,e),v=(0,l.useDemoUrl)(f.identifier),h=f.demoUrl||v,E=(null===o.m8||void 0===o.m8?void 0:o.m8.location.hash)==="#".concat(f.identifier),_=1===Object.keys(f.sources).length,b=(0,l.useCodeSandbox)((null===(t=f.hideActions)||void 0===t?void 0:t.includes("CSB"))?null:f),y=(0,l.useRiddle)((null===(n=f.hideActions)||void 0===n?void 0:n.includes("RIDDLE"))?null:f),k=(0,l.useMotions)(f.motions||[],s.current),g=c(k,2),w=g[0],C=g[1],N=(0,l.useCopy)(),x=c(N,2),S=x[0],A=x[1],j=(0,r.useState)((function(){return f.sources._?"_":Object.keys(f.sources)[0]})),L=c(j,2),I=L[0],R=L[1],O=(0,r.useState)(p(I,f.sources[I])),T=c(O,2),q=T[0],M=T[1],P=(0,r.useState)(Boolean(f.defaultShowCode)),D=c(P,2),U=D[0],B=D[1],$=(0,r.useState)(Math.random()),F=c($,2),J=F[0],X=F[1],Z=f.sources[I][q]||f.sources[I].content,G=(0,l.useTSPlaygroundUrl)(m,Z),H=(0,r.useRef)(),K=(0,l.usePrefersColor)(),z=c(K,1),Q=z[0],V=f.actionBarRender,W=void 0===V?function(e){return e}:V;function Y(e){R(e),M(p(e,f.sources[e]))}return(0,r.useEffect)((function(){X(Math.random())}),[Q]),r.createElement("div",{style:f.style,className:[f.className,"__dumi-default-previewer",E?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:f.identifier,"data-debug":f.debug||void 0,"data-iframe":f.iframe||void 0},f.iframe&&r.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),r.createElement("div",{ref:s,className:"__dumi-default-previewer-demo",style:{transform:f.transform?"translate(0, 0)":void 0,padding:f.compact||f.iframe&&!1!==f.compact?"0":void 0,background:f.background}},f.iframe?r.createElement("iframe",{title:"dumi-previewer",style:{height:String(f.iframe).replace(/(\d)$/,"$1px")},key:J,src:h,ref:H}):f.children),r.createElement("div",{className:"__dumi-default-previewer-desc","data-title":f.title},f.title&&r.createElement(l.AnchorLink,{to:"#".concat(f.identifier)},f.title),f.description&&r.createElement("div",{dangerouslySetInnerHTML:{__html:f.description}})),r.createElement("div",{className:"__dumi-default-previewer-actions"},W(r.createElement(r.Fragment,null,b&&r.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:b}),y&&r.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:y}),f.motions&&r.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:C,onClick:function(){return w()}}),f.iframe&&r.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return X(Math.random())}}),!(null===(u=f.hideActions)||void 0===u?void 0:u.includes("EXTERNAL"))&&r.createElement(l.Link,{target:"_blank",to:h},r.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),r.createElement("span",null),r.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":A,onClick:function(){return S(Z)}}),"tsx"===q&&U&&r.createElement(l.Link,{target:"_blank",to:G},r.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),r.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(U?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return B(!U)}})))),U&&r.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!_&&r.createElement(a.Z,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:I,onChange:Y},Object.keys(f.sources).map((function(e){return r.createElement(a.J,{tab:"_"===e?"index.".concat(p(e,f.sources[e])):e,key:e})}))),r.createElement("div",{className:"__dumi-default-previewer-source"},r.createElement(i.Z,{code:Z,lang:q,showCopy:!1}))))};t["default"]=v}}]);