"use strict";(self.webpackChunksrcful_documentation=self.webpackChunksrcful_documentation||[]).push([[215],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,y=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9527:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:2},o="Participate",l={unversionedId:"getting-started/participate",id:"getting-started/participate",title:"Participate",description:"You will need a compatible inverter to be able to connect your Energy Gateway.",source:"@site/docs/getting-started/participate.md",sourceDirName:"getting-started",slug:"/getting-started/participate",permalink:"/getting-started/participate",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction to Srcful",permalink:"/getting-started/"},next:{title:"Setting up",permalink:"/getting-started/setting-up"}},s={},c=[{value:"1. Get a Srcful Energy Gateway",id:"1-get-a-srcful-energy-gateway",level:2},{value:"Requirements",id:"requirements",level:3},{value:"2. Support the Srcful Community",id:"2-support-the-srcful-community",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"participate"},"Participate"),(0,a.kt)("admonition",{title:"Important",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You will need a compatible inverter to be able to connect your Energy Gateway. "),(0,a.kt)("p",{parentName:"admonition"},"See the list of currently compatible inverters: ",(0,a.kt)("a",{parentName:"p",href:"/energy-gateway/"},"Compatible Inverters"))),(0,a.kt)("p",null,"There are two primary ways to get involved with Srcful and start participating in the energy revolution at this stage:"),(0,a.kt)("h2",{id:"1-get-a-srcful-energy-gateway"},"1. Get a Srcful Energy Gateway"),(0,a.kt)("p",null,"By getting a Srcful Energy Gateway, you can start validating green energy from your Distributed Energy Resource (DER) and earning tokens for contributing to the decentralized energy grid. To get started, visit our Hardware Vendor ",(0,a.kt)("a",{parentName:"p",href:"https://store.rakwireless.com/products/srcful-energy-gateway"},"RAKwireless store")," and acquire an Energy Gateway. "),(0,a.kt)("h3",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"To install a Srcful Energy Gateway, there are several requirements that must be met to ensure optimal performance and compatibility with the Srcful network."),(0,a.kt)("p",null,"Firstly, the ",(0,a.kt)("strong",{parentName:"p"},"Modbus TCP protocol must be activated")," on the inverter. This is necessary to enable the communication between the inverter and the Energy Gateway, which allows for the measurement and validation of the energy produced by the DER."),(0,a.kt)("p",null,"The maximum size of the DER that can be connected to the Srcful network is ",(0,a.kt)("strong",{parentName:"p"},"100 kW"),". This limit ensures that the network remains stable and that the validation process remains efficient, while also encouraging the clustering of smaller DERs to create a more reliable and decentralized energy system."),(0,a.kt)("p",null,"It is also important to have access to ",(0,a.kt)("strong",{parentName:"p"},"Wi-Fi and power delivery near")," the DER to ensure that the Energy Gateway can function properly and connect to the Srcful network. This will ensure that the data collected from the DER is accurate and that the validation process is reliable."),(0,a.kt)("p",null,"Finally, to receive rewards for their green energy contributions through Proof-of-Source, DER owners must have a ",(0,a.kt)("strong",{parentName:"p"},"Solana wallet"),". This is necessary to receive SRC tokens as rewards, which can be used to participate in the energy marketplace."),(0,a.kt)("p",null,"Overall, meeting these requirements will ensure that the Srcful Energy Gateway can function optimally and that DER owners can participate in the Srcful network, contribute to a more sustainable and equitable energy system, and earn rewards for their green energy contributions."),(0,a.kt)("h2",{id:"2-support-the-srcful-community"},"2. Support the Srcful Community"),(0,a.kt)("p",null,"You can also support the community surrounding Srcful by contributing to our open-source projects on Github, participating in discussions on our Discord server, and following us on Twitter to stay up-to-date with the latest news and developments. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Github:")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/srcfl"},"https://github.com/srcfl")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Discord:")," ",(0,a.kt)("a",{parentName:"li",href:"https://discordapp.com/invite/tux5qPDcWw"},"https://discord.gg/xQ4W7VhN4m")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Twitter:")," ",(0,a.kt)("a",{parentName:"li",href:"https://twitter.com/srcful"},"https://twitter.com/SrcfulEnergy"))),(0,a.kt)("p",null,"Whether you choose to get a Srcful Energy Gateway or support the community through Github, Discord, and Twitter, we're thrilled to have you on board as we work towards a more sustainable and decentralized energy system. Join us today and be a part of the energy revolution!"))}m.isMDXComponent=!0}}]);