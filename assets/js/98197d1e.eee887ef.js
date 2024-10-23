"use strict";(self.webpackChunksrcful_documentation=self.webpackChunksrcful_documentation||[]).push([[1215],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,y=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9527:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},i="Participate",l={unversionedId:"getting-started/participate",id:"getting-started/participate",title:"Participate",description:"You will need a compatible inverter to be able to connect your Energy Gateway.",source:"@site/docs/getting-started/participate.md",sourceDirName:"getting-started",slug:"/getting-started/participate",permalink:"/getting-started/participate",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Sourceful Energy Simplified",permalink:"/simplified"},next:{title:"Setting up",permalink:"/getting-started/setting-up"}},u={},s=[{value:"Get a Sourceful Energy Gateway",id:"get-a-sourceful-energy-gateway",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Support the Sourceful Community",id:"support-the-sourceful-community",level:2}],c={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"participate"},"Participate"),(0,a.kt)("admonition",{title:"Important",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You will need a compatible inverter to be able to connect your Energy Gateway. "),(0,a.kt)("p",{parentName:"admonition"},"See the list of currently compatible inverters: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.Sourceful.io/energy-gateway/compatible-inverter/"},"Compatible Inverters"))),(0,a.kt)("p",null,"There are a few ways to get involved with Sourceful and start participating in the energy revolution at this stage:"),(0,a.kt)("a",{class:"button button--primary",href:"https://sourceful.energy/beta"},"Click here to find out how"),(0,a.kt)("h2",{id:"get-a-sourceful-energy-gateway"},"Get a Sourceful Energy Gateway"),(0,a.kt)("p",null,"By getting a Sourceful Energy Gateway, you can start validating green energy from your Distributed Energy Resource (DER) and earning tokens for contributing to the decentralized energy grid. To get started, visit our Hardware Vendor ",(0,a.kt)("a",{parentName:"p",href:"https://store.rakwireless.com/products/srcful-energy-gateway"},"RAKwireless store")," and acquire an Energy Gateway. "),(0,a.kt)("h3",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"To install a Sourceful Energy Gateway, there are several requirements that must be met to ensure optimal performance and compatibility with the Sourceful network."),(0,a.kt)("p",null,"Firstly, the ",(0,a.kt)("strong",{parentName:"p"},"Modbus TCP protocol must be activated")," on the inverter. This is necessary to enable the communication between the inverter and the Energy Gateway, which allows for the measurement and validation of the energy produced by the DER."),(0,a.kt)("p",null,"It is also important to have access to ",(0,a.kt)("strong",{parentName:"p"},"Wi-Fi and power delivery near")," the DER to ensure that the Energy Gateway can function properly and connect to the Sourceful network. This will ensure that the data collected from the DER is accurate and that the validation process is reliable."),(0,a.kt)("h2",{id:"support-the-sourceful-community"},"Support the Sourceful Community"),(0,a.kt)("p",null,"You can also support the community surrounding Sourceful by contributing to our open-source projects on Github, participating in discussions on our Discord server, and following us on Twitter to stay up-to-date with the latest news and developments. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Github:")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/srcfl"},"https://github.com/srcfl")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Discord:")," ",(0,a.kt)("a",{parentName:"li",href:"https://discord.gg/srcful"},"https://discord.gg/srcful")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Twitter:")," ",(0,a.kt)("a",{parentName:"li",href:"https://x.com/srcful"},"https://x.com/srcful"))),(0,a.kt)("p",null,"We are thrilled to have you on board as we work towards a more sustainable and decentralized energy system!"))}d.isMDXComponent=!0}}]);