(self["webpackChunkqiji"]=self["webpackChunkqiji"]||[]).push([[7570],{86845:function(){},85934:function(e,t,n){"use strict";n.r(t);var a=n(67294),r=n(96089),o=n(32851),c=a.memo((e=>{var t=e.demos,n=t["qui-checkbox-demo"].component,c=t["qui-checkbox-demo-1"].component,l=t["qui-checkbox-demo-2"].component,i=t["qui-checkbox-demo-3"].component,u=t["qui-checkbox-demo-4"].component;return a.createElement(a.Fragment,null,a.createElement(a.Fragment,null,a.createElement("div",{className:"markdown"},a.createElement("h2",{id:"checkbox-\u591a\u9009\u6846"},a.createElement(r.AnchorLink,{to:"#checkbox-\u591a\u9009\u6846","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"Checkbox \u591a\u9009\u6846"),a.createElement("h3",{id:"\u57fa\u672c\u7528\u6cd5"},a.createElement(r.AnchorLink,{to:"#\u57fa\u672c\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u7528\u6cd5:")),a.createElement(o.default,t["qui-checkbox-demo"].previewerProps,a.createElement(n,null)),a.createElement("div",{className:"markdown"},a.createElement("h3",{id:"\u4e0d\u53ef\u7528"},a.createElement(r.AnchorLink,{to:"#\u4e0d\u53ef\u7528","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u4e0d\u53ef\u7528:")),a.createElement(o.default,t["qui-checkbox-demo-1"].previewerProps,a.createElement(c,null)),a.createElement("div",{className:"markdown"},a.createElement("h3",{id:"\u53d7\u63a7\u7ec4\u4ef6"},a.createElement(r.AnchorLink,{to:"#\u53d7\u63a7\u7ec4\u4ef6","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u53d7\u63a7\u7ec4\u4ef6:")),a.createElement(o.default,t["qui-checkbox-demo-2"].previewerProps,a.createElement(l,null)),a.createElement("div",{className:"markdown"},a.createElement("h3",{id:"checkbox\u7ec4"},a.createElement(r.AnchorLink,{to:"#checkbox\u7ec4","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"checkBox\u7ec4:")),a.createElement(o.default,t["qui-checkbox-demo-3"].previewerProps,a.createElement(i,null)),a.createElement("div",{className:"markdown"},a.createElement("h3",{id:"\u5e03\u5c40"},a.createElement(r.AnchorLink,{to:"#\u5e03\u5c40","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u5e03\u5c40:"),a.createElement("p",null,"Checkbox.Group \u5185\u5d4c Checkbox\uff0c\u53ef\u4ee5\u5b9e\u73b0\u7075\u6d3b\u7684\u5e03\u5c40")),a.createElement(o.default,t["qui-checkbox-demo-4"].previewerProps,a.createElement(u,null)),a.createElement("div",{className:"markdown"},a.createElement("h2",{id:"api"},a.createElement(r.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"API"),a.createElement("p",null,"\u53c2\u7167\uff1a",a.createElement(r.Link,{to:"https://www.npmjs.com/package/rc-checkbox"},"https://www.npmjs.com/package/rc-checkbox")))))}));t["default"]=e=>{var t=a.useContext(r.context),n=t.demos;return a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.createElement(c,{demos:n})}},32851:function(e,t,n){"use strict";n.r(t);var a=n(67294),r=n(7097),o=n(37899),c=n(96089),l=n(65659);n(86845);function i(e,t){return f(e)||s(e,t)||d(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function s(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,o=[],c=!0,l=!1;try{for(n=n.call(e);!(c=(a=n.next()).done);c=!0)if(o.push(a.value),t&&o.length===t)break}catch(i){l=!0,r=i}finally{try{c||null==n["return"]||n["return"]()}finally{if(l)throw r}}return o}}function f(e){if(Array.isArray(e))return e}function p(e,t){var n,a=null===(n=e.match(/\.(\w+)$/))||void 0===n?void 0:n[1];return a||(a=t.tsx?"tsx":"jsx"),a}var h=function(e){var t,n,u,d=(0,a.useRef)(),m=(0,a.useContext)(c.context),s=m.locale,f=(0,c.useLocaleProps)(s,e),h=(0,c.useDemoUrl)(f.identifier),E=f.demoUrl||h,b=(null===o.m8||void 0===o.m8?void 0:o.m8.location.hash)==="#".concat(f.identifier),k=1===Object.keys(f.sources).length,v=(0,c.useCodeSandbox)((null===(t=f.hideActions)||void 0===t?void 0:t.includes("CSB"))?null:f),x=(0,c.useRiddle)((null===(n=f.hideActions)||void 0===n?void 0:n.includes("RIDDLE"))?null:f),_=(0,c.useMotions)(f.motions||[],d.current),w=i(_,2),y=w[0],g=w[1],N=(0,c.useCopy)(),C=i(N,2),A=C[0],S=C[1],L=(0,a.useState)((function(){return f.sources._?"_":Object.keys(f.sources)[0]})),I=i(L,2),j=I[0],q=I[1],P=(0,a.useState)(p(j,f.sources[j])),R=i(P,2),O=R[0],T=R[1],M=(0,a.useState)(Boolean(f.defaultShowCode)),B=i(M,2),U=B[0],$=B[1],D=(0,a.useState)(Math.random()),F=i(D,2),G=F[0],J=F[1],X=f.sources[j][O]||f.sources[j].content,Z=(0,c.useTSPlaygroundUrl)(s,X),H=(0,a.useRef)(),K=(0,c.usePrefersColor)(),z=i(K,1),Q=z[0],V=f.actionBarRender,W=void 0===V?function(e){return e}:V;function Y(e){q(e),T(p(e,f.sources[e]))}return(0,a.useEffect)((function(){J(Math.random())}),[Q]),a.createElement("div",{style:f.style,className:[f.className,"__dumi-default-previewer",b?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:f.identifier,"data-debug":f.debug||void 0,"data-iframe":f.iframe||void 0},f.iframe&&a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),a.createElement("div",{ref:d,className:"__dumi-default-previewer-demo",style:{transform:f.transform?"translate(0, 0)":void 0,padding:f.compact||f.iframe&&!1!==f.compact?"0":void 0,background:f.background}},f.iframe?a.createElement("iframe",{title:"dumi-previewer",style:{height:String(f.iframe).replace(/(\d)$/,"$1px")},key:G,src:E,ref:H}):f.children),a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":f.title},f.title&&a.createElement(c.AnchorLink,{to:"#".concat(f.identifier)},f.title),f.description&&a.createElement("div",{dangerouslySetInnerHTML:{__html:f.description}})),a.createElement("div",{className:"__dumi-default-previewer-actions"},W(a.createElement(a.Fragment,null,v&&a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:v}),x&&a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:x}),f.motions&&a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:g,onClick:function(){return y()}}),f.iframe&&a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return J(Math.random())}}),!(null===(u=f.hideActions)||void 0===u?void 0:u.includes("EXTERNAL"))&&a.createElement(c.Link,{target:"_blank",to:E},a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),a.createElement("span",null),a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":S,onClick:function(){return A(X)}}),"tsx"===O&&U&&a.createElement(c.Link,{target:"_blank",to:Z},a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(U?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return $(!U)}})))),U&&a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!k&&a.createElement(r.Z,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:j,onChange:Y},Object.keys(f.sources).map((function(e){return a.createElement(r.J,{tab:"_"===e?"index.".concat(p(e,f.sources[e])):e,key:e})}))),a.createElement("div",{className:"__dumi-default-previewer-source"},a.createElement(l.Z,{code:X,lang:O,showCopy:!1}))))};t["default"]=h}}]);