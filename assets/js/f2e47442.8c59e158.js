"use strict";(self.webpackChunksrcful_documentation=self.webpackChunksrcful_documentation||[]).push([[1293],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=s(a),c=n,k=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return a?r.createElement(k,i(i({ref:e},u),{},{components:a})):r.createElement(k,i({ref:e},u))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7446:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));a(941),a(4996);const l={sidebar_position:3},i="Distribution",o={unversionedId:"tokenomics/rewards",id:"tokenomics/rewards",title:"Distribution",description:"Please note that Sourceful is still in Beta and pre-token launch.",source:"@site/docs/tokenomics/rewards.mdx",sourceDirName:"tokenomics",slug:"/tokenomics/rewards",permalink:"/tokenomics/rewards",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/tokenomics/"},next:{title:"Introduction",permalink:"/sustainability/"}},p={},s=[{value:"Beta Phase Rewards",id:"beta-phase-rewards",level:2},{value:"Gateway Types and Point Multipliers",id:"gateway-types-and-point-multipliers",level:3},{value:"1. Validated Gateways (2x multiplier)",id:"1-validated-gateways-2x-multiplier",level:4},{value:"2. Hardware Gateways (1x multiplier)",id:"2-hardware-gateways-1x-multiplier",level:4},{value:"3. API Gateways (0.15x multiplier)",id:"3-api-gateways-015x-multiplier",level:4},{value:"How Rewards Are Calculated",id:"how-rewards-are-calculated",level:3},{value:"Step 1: Tracking Activity",id:"step-1-tracking-activity",level:4},{value:"Step 2: Calculating Points",id:"step-2-calculating-points",level:4},{value:"Step 3: Distributing Rewards",id:"step-3-distributing-rewards",level:4},{value:"Example",id:"example",level:3},{value:"Important Notes",id:"important-notes",level:2},{value:"Distribution schedule",id:"distribution-schedule",level:3},{value:"Principles after Beta Phase",id:"principles-after-beta-phase",level:2}],u={toc:s},d="wrapper";function m(t){let{components:e,...a}=t;return(0,n.kt)(d,(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"distribution"},"Distribution"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Please note that Sourceful is still in Beta and pre-token launch.")),(0,n.kt)("h2",{id:"beta-phase-rewards"},"Beta Phase Rewards"),(0,n.kt)("p",null,"In a gesture of appreciation and recognition for the active beta testers and early adopters, who have actively engaged in the earliest stages of the project, Sourceful has implemented a beta rewards program."),(0,n.kt)("p",null,"During this phase, the pool of beta tokens will be set at ",(0,n.kt)("strong",{parentName:"p"},"10 million Beta Points"),". "),(0,n.kt)("p",null,"Beta testers will share this pool and be rewarded based on their uptime for the previous month. Each beta tester's share of the beta reward pool will be proportional to their individual uptime relative to the total uptime of all beta testers."),(0,n.kt)("h3",{id:"gateway-types-and-point-multipliers"},"Gateway Types and Point Multipliers"),(0,n.kt)("p",null,"We have three different types of gateways, each with its own point multiplier:"),(0,n.kt)("h4",{id:"1-validated-gateways-2x-multiplier"},"1. Validated Gateways (2x multiplier)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"These are gateways with verified links (e.g. SolarEdge API)"),(0,n.kt)("li",{parentName:"ul"},"For example: 10 days of activity = 20 points")),(0,n.kt)("h4",{id:"2-hardware-gateways-1x-multiplier"},"2. Hardware Gateways (1x multiplier)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"These are standard hardware gateways"),(0,n.kt)("li",{parentName:"ul"},"For example: 10 days of activity = 10 points")),(0,n.kt)("h4",{id:"3-api-gateways-015x-multiplier"},"3. API Gateways (0.15x multiplier)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"These are SolarEdge API connections"),(0,n.kt)("li",{parentName:"ul"},"For example: 10 days of activity = 1.5 points")),(0,n.kt)("h3",{id:"how-rewards-are-calculated"},"How Rewards Are Calculated"),(0,n.kt)("p",null,"The process works in three main steps:"),(0,n.kt)("h4",{id:"step-1-tracking-activity"},"Step 1: Tracking Activity"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We track each gateway's activity daily"),(0,n.kt)("li",{parentName:"ul"},"A gateway can earn points for up to 15 days of activity"),(0,n.kt)("li",{parentName:"ul"},"Each day of activity counts as one base point")),(0,n.kt)("h4",{id:"step-2-calculating-points"},"Step 2: Calculating Points"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We take the number of active days for each gateway"),(0,n.kt)("li",{parentName:"ul"},"We multiply the days by the gateway's type multiplier"),(0,n.kt)("li",{parentName:"ul"},"For example:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A Validated gateway active for 10 days: 10 days \xd7 2.0 = 20 points"),(0,n.kt)("li",{parentName:"ul"},"A Hardware gateway active for 10 days: 10 days \xd7 1.0 = 10 points"),(0,n.kt)("li",{parentName:"ul"},"An API gateway active for 10 days: 10 days \xd7 0.15 = 1.5 points")))),(0,n.kt)("h4",{id:"step-3-distributing-rewards"},"Step 3: Distributing Rewards"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We add up all points from all gateways to get the total points"),(0,n.kt)("li",{parentName:"ul"},"Each gateway's share of the 10 million SRC is calculated as:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"(Gateway's Points \xf7 Total Points) \xd7 10,000,000 SRC"))))),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("p",null,"Let's say we have three gateways that were active for 10 days each:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Validated Gateway: 20 points"),(0,n.kt)("li",{parentName:"ol"},"Hardware Gateway: 10 points"),(0,n.kt)("li",{parentName:"ol"},"API Gateway: 1.5 points")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Total Points:")," 31.5 points"),(0,n.kt)("p",null,"Their rewards would be:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Validated Gateway: (20 \xf7 31.5) \xd7 10,000,000 = 6,349,206 SRC"),(0,n.kt)("li",{parentName:"ul"},"Hardware Gateway: (10 \xf7 31.5) \xd7 10,000,000 = 3,174,603 SRC"),(0,n.kt)("li",{parentName:"ul"},"API Gateway: (1.5 \xf7 31.5) \xd7 10,000,000 = 476,191 SRC")),(0,n.kt)("h2",{id:"important-notes"},"Important Notes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Gateways in test mode are not eligible for rewards"),(0,n.kt)("li",{parentName:"ul"},"SolarEdge API gateways must have a valid H3 index to be eligible"),(0,n.kt)("li",{parentName:"ul"},"The maximum number of days that count toward rewards is 15"),(0,n.kt)("li",{parentName:"ul"},"All rewards are calculated based on the total pool of eligible gateways during the distribution period")),(0,n.kt)("h3",{id:"distribution-schedule"},"Distribution schedule"),(0,n.kt)("p",null,"Tokens will be distributed on a set date every month during the beta phase (2024)."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Month"),(0,n.kt)("th",{parentName:"tr",align:null},"Date"),(0,n.kt)("th",{parentName:"tr",align:null},"Completed"),(0,n.kt)("th",{parentName:"tr",align:null},"Amount"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"January"),(0,n.kt)("td",{parentName:"tr",align:null},"12th"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null},"4 000 000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"February"),(0,n.kt)("td",{parentName:"tr",align:null},"11th"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null},"2 000 000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"March"),(0,n.kt)("td",{parentName:"tr",align:null},"12th"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null},"3 000 000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"April"),(0,n.kt)("td",{parentName:"tr",align:null},"11th"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null},"10 500 000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"May"),(0,n.kt)("td",{parentName:"tr",align:null},"12th"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null},"14 000 000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"June"),(0,n.kt)("td",{parentName:"tr",align:null},"10th"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null},"15 000 000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"July"),(0,n.kt)("td",{parentName:"tr",align:null},"11th"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null},"17 500 000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"August"),(0,n.kt)("td",{parentName:"tr",align:null},"10th"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null},"10 000 000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"September"),(0,n.kt)("td",{parentName:"tr",align:null},"10th"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null},"10 000 000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"October"),(0,n.kt)("td",{parentName:"tr",align:null},"9th"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null},"10 000 000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"November"),(0,n.kt)("td",{parentName:"tr",align:null},"8th"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"December"),(0,n.kt)("td",{parentName:"tr",align:null},"8th"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h2",{id:"principles-after-beta-phase"},"Principles after Beta Phase"),(0,n.kt)("p",null,"Initially, the token allocation will incentivize the setup of energy gateways and the connection of distributed energy resources (DERs). This approach aims to quickly expand our network's infrastructure, creating a robust foundation for the world's largest decentralized virtual power plant."),(0,n.kt)("p",null,"As our network grows, the token distribution will gradually shift towards rewarding the efficient control and utilization of these resources. This transition is designed to enhance the overall effectiveness of the DER network, encouraging participants to not just deploy resources, but to actively start participating in various energy services depending on current customer demand."),(0,n.kt)("admonition",{title:"Deep dive",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Read more about the SRC token in our ",(0,n.kt)("a",{href:"../whitepaper/token-rewards/"},(0,n.kt)("b",null,"Whitepaper")),".")))}m.isMDXComponent=!0}}]);