"use strict";(self.webpackChunksrcful_documentation=self.webpackChunksrcful_documentation||[]).push([[6143],{3905:(t,e,n)=>{n.d(e,{Zo:()=>o,kt:()=>N});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,o=d(t,["components","mdxType","originalType","parentName"]),m=u(n),g=r,N=m["".concat(p,".").concat(g)]||m[g]||k[g]||l;return n?a.createElement(N,i(i({ref:e},o),{},{components:n})):a.createElement(N,i({ref:e},o))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=g;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d[m]="string"==typeof t?t:r,i[1]=d;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5969:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:1,slug:"/energy-gateway/compatible-devices/"},i="Overview",d={unversionedId:"energy-gateway/compatible-devices/overview",id:"energy-gateway/compatible-devices/overview",title:"Overview",description:"You will need a compatible Inverter to connect your Energy Gateway.",source:"@site/docs/energy-gateway/compatible-devices/overview.md",sourceDirName:"energy-gateway/compatible-devices",slug:"/energy-gateway/compatible-devices/",permalink:"/energy-gateway/compatible-devices/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/energy-gateway/compatible-devices/"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/energy-gateway/"},next:{title:"Enphase",permalink:"/energy-gateway/compatible-devices/enphase"}},p={},u=[{value:"List of explicitly supported Inverters",id:"list-of-explicitly-supported-inverters",level:2},{value:"Status Legend",id:"status-legend",level:3},{value:"Modbus SunSpec Support",id:"modbus-sunspec-support",level:2},{value:"Can&#39;t find your specific Inverter model?",id:"cant-find-your-specific-inverter-model",level:2}],o={toc:u},m="wrapper";function k(t){let{components:e,...n}=t;return(0,r.kt)(m,(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You will need a ",(0,r.kt)("strong",{parentName:"p"},"compatible")," Inverter to connect your Energy Gateway.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Even if you don't see your specific Inverter model in our compatibility list below, it may still work with our Energy Gateway if it's SunSpec compliant.")),(0,r.kt)("h2",{id:"list-of-explicitly-supported-inverters"},"List of explicitly supported Inverters"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(Last updated 2024-11-04)")),(0,r.kt)("p",null,"We continuously add Inverters and update the table below."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Inverter Make"),(0,r.kt)("th",{parentName:"tr",align:null},"Read Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Control Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Protocol"),(0,r.kt)("th",{parentName:"tr",align:null},"Communication Interface"),(0,r.kt)("th",{parentName:"tr",align:null},"Getting Started"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sungrow"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 Ready"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd04 Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"Modbus TCP (SunSpec)"),(0,r.kt)("td",{parentName:"tr",align:null},"Ethernet/Wi-Fi"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#"},"Guide"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Solaredge"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 Ready"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd04 Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"Modbus TCP (SunSpec)"),(0,r.kt)("td",{parentName:"tr",align:null},"Ethernet/Wi-Fi"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#"},"Guide"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Huawei"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 Ready"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd04 Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"Modbus TCP"),(0,r.kt)("td",{parentName:"tr",align:null},"Ethernet/Wi-Fi"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#"},"Guide"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deye"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 Ready"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd04 Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"Modbus TCP (SolarmanV5)"),(0,r.kt)("td",{parentName:"tr",align:null},"Wi-Fi"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#"},"Guide"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fronius"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 Ready"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd04 Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"Modbus TCP (SunSpec)"),(0,r.kt)("td",{parentName:"tr",align:null},"Ethernet/Wi-Fi"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#"},"Guide"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SMA"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 Ready"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd04 Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"Modbus TCP (SunSpec)"),(0,r.kt)("td",{parentName:"tr",align:null},"Ethernet/Wi-Fi"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#"},"Guide"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ferroamp"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 Ready"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd04 Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"Modbus TCP"),(0,r.kt)("td",{parentName:"tr",align:null},"Ethernet/Wi-Fi"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#"},"Guide"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"APsystems"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 Ready"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd04 Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"Modbus TCP (SunSpec)"),(0,r.kt)("td",{parentName:"tr",align:null},"RS-485"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#"},"Guide"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enphase"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udccb Evaluating"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd04 Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"Local API"),(0,r.kt)("td",{parentName:"tr",align:null},"Ethernet/Wi-Fi"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/energy-gateway/compatible-devices/enphase"},"Guide"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Solplanet"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd0d Untested"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd04 Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"Modbus TCP (SunSpec)"),(0,r.kt)("td",{parentName:"tr",align:null},"RS-485"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Kostal"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd0d Untested"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd04 Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"Modbus TCP (SunSpec)"),(0,r.kt)("td",{parentName:"tr",align:null},"Ethernet"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ABB"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd0d Untested"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd04 Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"Modbus TCP (SunSpec)"),(0,r.kt)("td",{parentName:"tr",align:null},"RS-485/Ethernet"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Schneider"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd0d Untested"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd04 Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"Modbus TCP (SunSpec)"),(0,r.kt)("td",{parentName:"tr",align:null},"RS-485"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Solis"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd0d Untested"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd04 Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"TBD"),(0,r.kt)("td",{parentName:"tr",align:null},"TBD"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sol-ark"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd0d Untested"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd04 Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"TBD"),(0,r.kt)("td",{parentName:"tr",align:null},"TBD"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Growatt"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd04 Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd04 Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"TBD"),(0,r.kt)("td",{parentName:"tr",align:null},"TBD"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GoodWe"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd04 Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd04 Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"TBD"),(0,r.kt)("td",{parentName:"tr",align:null},"TBD"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fox-Ess"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd04 Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd04 Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"TBD"),(0,r.kt)("td",{parentName:"tr",align:null},"TBD"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Eg4"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd04 Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd04 Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"TBD"),(0,r.kt)("td",{parentName:"tr",align:null},"TBD"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sofar-solar"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd04 Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd04 Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"TBD"),(0,r.kt)("td",{parentName:"tr",align:null},"TBD"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Livoltek"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd04 Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd04 Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"TBD"),(0,r.kt)("td",{parentName:"tr",align:null},"TBD"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lenercom"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd04 Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd04 Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"TBD"),(0,r.kt)("td",{parentName:"tr",align:null},"TBD"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Delta"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd04 Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd04 Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"TBD"),(0,r.kt)("td",{parentName:"tr",align:null},"TBD"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SAJ"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd04 Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd04 Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"TBD"),(0,r.kt)("td",{parentName:"tr",align:null},"TBD"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"status-legend"},"Status Legend"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2705 Ready: Reading data is fully supported"),(0,r.kt)("li",{parentName:"ul"},"\u26a1 Partial: Some control features are available"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udd04 Planned: Control features are planned"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udccb Evaluating: Device is under evaluation"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udd0d Untested: Should work if SunSpec compatible, but not yet tested")),(0,r.kt)("h2",{id:"modbus-sunspec-support"},"Modbus SunSpec Support"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Our Energy Gateway is compatible with all Inverters that conform to the Modbus SunSpec standard.")),(0,r.kt)("p",null,"Modbus SunSpec combines the Modbus communication protocol with the SunSpec data model standard. This combination is widely adopted by Inverter manufacturers. Our support for Modbus SunSpec significantly expands the range of compatible devices beyond our explicitly listed Inverter brands. So if you can't find your specific Inverter model in the table above, it may still work with our Energy Gateway if it's SunSpec compliant."),(0,r.kt)("h2",{id:"cant-find-your-specific-inverter-model"},"Can't find your specific Inverter model?"),(0,r.kt)("p",null,"If you can't find your Inverter in the table above, or if you're unsure about Modbus SunSpec compatibility, don't hesitate to reach out:"),(0,r.kt)("a",{class:"button button--primary",href:"https://discord.gg/Sourceful"},"Join Our Discord for Support"))}k.isMDXComponent=!0}}]);