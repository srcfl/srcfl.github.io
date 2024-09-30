"use strict";(self.webpackChunksrcful_documentation=self.webpackChunksrcful_documentation||[]).push([[8756],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3009:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_label:"Setup Guide: Energy Gateway",sidebar_position:0,sidebar_class_name:"item1"},i="Setup Guide: Energy Gateway",l={unversionedId:"guide",id:"guide",title:"Setup Guide: Energy Gateway",description:"- You will need a compatible inverter to connect your Energy Gateway. Please see our list of compatible inverters//docs.srcful.io/energy-gateway/compatible-inverter/",source:"@site/docs/guide.md",sourceDirName:".",slug:"/guide",permalink:"/guide",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_label:"Setup Guide: Energy Gateway",sidebar_position:0,sidebar_class_name:"item1"},sidebar:"tutorialSidebar",previous:{title:"SolarEdge API Integration Beta",permalink:"/api-beta"},next:{title:"Overview",permalink:"/"}},s={},p=[{value:"Getting started",id:"getting-started",level:2},{value:"Pairing over Bluetooth",id:"pairing-over-bluetooth",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Location",id:"location",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setup-guide-energy-gateway"},"Setup Guide: Energy Gateway"),(0,a.kt)("admonition",{title:"Important",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"You will need a compatible inverter to connect your Energy Gateway. Please see our list of compatible inverters: ",(0,a.kt)("a",{parentName:"li",href:"https://docs.srcful.io/energy-gateway/compatible-inverter/"},"https://docs.srcful.io/energy-gateway/compatible-inverter/")),(0,a.kt)("li",{parentName:"ul"},"You will need a Solana Wallet to configure your Energy Gateway and to get beta token rewards. See our instructional video on how to set up Phantom: ",(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/5G5H3nmAgwM"},"https://youtu.be/5G5H3nmAgwM")))),(0,a.kt)("br",null),(0,a.kt)("div",{class:"configure-video"},(0,a.kt)("iframe",{src:"https://www.youtube.com/embed/3U-8tfRBY6g?si=_G290Uaygq71aTv1",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0})),(0,a.kt)("h2",{id:"getting-started"},"Getting started"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Connect the Energy Gateway")," to the internet using an Ethernet cable, and power it on by connecting the power cable.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Wait approximately 10-15 minutes")," for the Energy Gateway to start up and fetch the latest firmware. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"If you wish to use Wi-Fi")," instead of Ethernet, you can remove the Ethernet cable at this point."))),(0,a.kt)("h2",{id:"pairing-over-bluetooth"},"Pairing over Bluetooth"),(0,a.kt)("admonition",{title:"Info ",type:"caution"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Be sure to be within close range of your Energy Gateway")," to pair over Bluetooth.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"iPhones ",(0,a.kt)("strong",{parentName:"p"},"cannot")," be used for this process as of right now.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You must have a ",(0,a.kt)("strong",{parentName:"p"},"Solana Wallet")," and a browser plugin (PC/Mac/Linux) like ",(0,a.kt)("strong",{parentName:"p"},"Phantom")," or ",(0,a.kt)("strong",{parentName:"p"},"Solflare")," or an app like Phantom or Solflare (Android) to be able to link your Wallet.")))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Visit ",(0,a.kt)("a",{parentName:"strong",href:"https://app.srcful.io"},"https://app.srcful.io"))," to start pairing your Energy Gateway.")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},'Start by clicking the "Select Wallet"')," button to link your Solana Wallet.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(8405).Z,width:"1923",height:"1715"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Connect")," your Solana Wallet, we recommend using ",(0,a.kt)("strong",{parentName:"li"},"Phantom"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(5198).Z,width:"1923",height:"1715"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Start the pairing process"),' by clicking "Onboard New Gateway" in the left sidebar.')),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(3399).Z,width:"1923",height:"1715"})),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Finish the pairing process"),' by selecting your Energy Gateway in the Bluetooth menu that pops up in your browser after clicking "Connect".')),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(2064).Z,width:"1923",height:"1715"})),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To find your inverter's IP address, please refer to your router admin page, or use the ",(0,a.kt)("strong",{parentName:"p"},"Scan")," function.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For other information regarding your inverter, please refer to the inverter documentation.")))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Start by selecting your Wi-Fi network")," in the dropdown menu, and enter your password, and click Submit. You will see a small pop-up message when credentials has been set:")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(5182).Z,width:"2297",height:"1715"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Enter your Solana Wallet-Address"),", and click ",(0,a.kt)("strong",{parentName:"li"},"Submit"),": ")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(6210).Z,width:"1733",height:"696"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Select your inverter brand in the drop-down menu"),", then enter your inverter information, or use the ",(0,a.kt)("strong",{parentName:"li"},"Scan")," function, then click ",(0,a.kt)("strong",{parentName:"li"},"Submit"),", you will see a small pop-up message once the inverter has been found and connected:")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(8681).Z,width:"2297",height:"1715"})),(0,a.kt)("h2",{id:"location"},"Location"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Set your location")," by dropping a pin on the map, then press ",(0,a.kt)("strong",{parentName:"li"},"Assert Location"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(9668).Z,width:"1651",height:"1012"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Your Energy Gateway")," should now be visible in the ",(0,a.kt)("a",{parentName:"li",href:"https://srcful.io"},(0,a.kt)("strong",{parentName:"a"},"Srcful Explorer")))),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("admonition",{title:"Issues",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Should you lose connection to your Energy Gateway during the configuration process, you must refresh your browser window, and sometimes restart your Bluetooth."),(0,a.kt)("li",{parentName:"ul"},"If you experience issues with several failed attempts or dropped connection, disconnect any other bluetooth devices that are paired to your computer or Android phone, then try again."))))}m.isMDXComponent=!0},8405:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/step1-b50099da9307e3f9f701a441de97ab83.png"},5198:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/step2-f85845d3bf1b3bc917ea6fdcac1a50ed.png"},3399:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/step3-b6a85b4e5bd4414ce08a2bcd66fc39d1.png"},2064:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/step4-8d6c641127b51016b814579c193a279b.png"},5182:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/step5-7df618bbe634f6ba332b139878ef53eb.png"},6210:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/step6-c56a6679c780b65ecb85b180bf60ab4a.png"},8681:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/step8-24d016757e38b5b3078d2086d42daad5.png"},9668:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/step9-acce2cdbbbd8b6a8e23a6a2e37e6f72c.png"}}]);