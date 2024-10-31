"use strict";(self.webpackChunksrcful_documentation=self.webpackChunksrcful_documentation||[]).push([[6143],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>g});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),u=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=u(a),c=r,g=m["".concat(p,".").concat(c)]||m[c]||s[c]||l;return a?n.createElement(g,i(i({ref:e},d),{},{components:a})):n.createElement(g,i({ref:e},d))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5969:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:1,slug:"/energy-gateway/compatible-devices/"},i="Overview",o={unversionedId:"energy-gateway/compatible-devices/overview",id:"energy-gateway/compatible-devices/overview",title:"Overview",description:"You will need a compatible DER (Distributed Energy Resource) to connect your Energy Gateway.",source:"@site/docs/energy-gateway/compatible-devices/overview.md",sourceDirName:"energy-gateway/compatible-devices",slug:"/energy-gateway/compatible-devices/",permalink:"/energy-gateway/compatible-devices/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/energy-gateway/compatible-devices/"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/energy-gateway/"},next:{title:"Fronius",permalink:"/energy-gateway/compatible-devices/fronius"}},p={},u=[{value:"Modbus SunSpec Support",id:"modbus-sunspec-support",level:2},{value:"Check Your DER&#39;s SunSpec Compatibility",id:"check-your-ders-sunspec-compatibility",level:2},{value:"List of explicitly supported DERs",id:"list-of-explicitly-supported-ders",level:2},{value:"Can&#39;t find your specific DER model?",id:"cant-find-your-specific-der-model",level:2}],d={toc:u},m="wrapper";function s(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You will need a ",(0,r.kt)("strong",{parentName:"p"},"compatible")," DER (Distributed Energy Resource) to connect your Energy Gateway.")),(0,r.kt)("h2",{id:"modbus-sunspec-support"},"Modbus SunSpec Support"),(0,r.kt)("p",null,"Good news for many DER owners! Our Energy Gateway supports DERs that implement the Modbus SunSpec standard. This means:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Our Energy Gateway is compatible with all DERs that conform to the Modbus SunSpec standard.")),(0,r.kt)("p",null,"Modbus SunSpec combines the Modbus communication protocol with the SunSpec data model standard. This combination is widely adopted by DER manufacturers. Our support for Modbus SunSpec significantly expands the range of compatible devices beyond our explicitly listed DER brands."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Even if you don't see your specific DER model in our compatibility list below, it may still work with our Energy Gateway if it's SunSpec compliant.")),(0,r.kt)("h2",{id:"check-your-ders-sunspec-compatibility"},"Check Your DER's SunSpec Compatibility"),(0,r.kt)("p",null,"To verify if your DER implements the SunSpec standard:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Visit the ",(0,r.kt)("a",{parentName:"li",href:"https://sunspec.org/certified-registry/"},"SunSpec Certified Registry"),"."),(0,r.kt)("li",{parentName:"ol"},"Use the search function to find your DER manufacturer or model."),(0,r.kt)("li",{parentName:"ol"},'Look for entries with the Certificate Type "SunSpec Modbus".')),(0,r.kt)("p",null,"If your DER is listed with a SunSpec Modbus certificate, it should be compatible with our Energy Gateway."),(0,r.kt)("h2",{id:"list-of-explicitly-supported-ders"},"List of explicitly supported DERs"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(Last updated 2024-09-16)")),(0,r.kt)("p",null,"We continuously add DERs and update the table below."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2705 - Supported"),(0,r.kt)("li",{parentName:"ul"},"\u274c - Not Supported"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udd1c - To be evaluated")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"DER"),(0,r.kt)("th",{parentName:"tr",align:null},"Read"),(0,r.kt)("th",{parentName:"tr",align:null},"Control"),(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Compatible Models"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sungrow"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Partial support"),(0,r.kt)("td",{parentName:"tr",align:null},"Evaluating"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/energy-gateway/compatible-devices/sungrow"},"View Details"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Solaredge"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"Evaluating"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/energy-gateway/compatible-devices/solaredge"},"View Details"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Huawei"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"Evaluating"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/energy-gateway/compatible-devices/huawei"},"View Details"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deye"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"Evaluating"),(0,r.kt)("td",{parentName:"tr",align:null},"Coming soon")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fronius"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"Evaluating"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/energy-gateway/compatible-devices/fronius"},"View Details"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SMA"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"Evaluating"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/energy-gateway/compatible-devices/sma"},"View Details"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ferroamp"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"Evaluating"),(0,r.kt)("td",{parentName:"tr",align:null},"Coming soon")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Growatt"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"In Development"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GoodWe"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"In Development"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fox-Ess"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Solis"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enphase"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Homegrid"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sol-ark"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Eg4"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sofar-solar"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Livoltek"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lenercom"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h2",{id:"cant-find-your-specific-der-model"},"Can't find your specific DER model?"),(0,r.kt)("p",null,"If you can't find your DER in the table above, or if you're unsure about Modbus SunSpec compatibility, don't hesitate to reach out:"),(0,r.kt)("a",{class:"button button--primary",href:"https://discord.gg/Sourceful"},"Join Our Discord for Support"))}s.isMDXComponent=!0}}]);