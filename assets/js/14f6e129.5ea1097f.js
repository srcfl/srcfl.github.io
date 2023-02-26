"use strict";(self.webpackChunksrcful_documentation=self.webpackChunksrcful_documentation||[]).push([[5881],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),h=a,g=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3983:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={title:"Secure and Transparent Energy Transactions with Srcful",authors:"davmoz"},i=void 0,s={permalink:"/blog/2023/01/16/",source:"@site/blog/2023-01-16.md",title:"Secure and Transparent Energy Transactions with Srcful",description:"As the lead hardware engineer at Srcful, I'm excited to share with you an overview of our platform's architecture. At Srcful, we're leveraging cutting-edge technologies to create a decentralized platform that enables home owners to participate in the energy market and earn crypto rewards.",date:"2023-01-16T00:00:00.000Z",formattedDate:"January 16, 2023",tags:[],readingTime:1.79,hasTruncateMarker:!1,authors:[{name:"David Mozart Andraws",title:"Crunches hardware",url:"https://twitter.com/DMozartAndraws",imageURL:"https://github.com/davmoz.png",key:"davmoz"}],frontMatter:{title:"Secure and Transparent Energy Transactions with Srcful",authors:"davmoz"},prevItem:{title:"Promoting Energy Independence and Resilience through DERs",permalink:"/blog/2023/02/03/"},nextItem:{title:"Earn Crypto with Srcful Energy Gateway",permalink:"/blog/earn-crypto-with-srcful-energy-gateway"}},c={authorsImageUrls:[void 0]},l=[],u={toc:l},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As the lead hardware engineer at Srcful, I'm excited to share with you an overview of our platform's architecture. At Srcful, we're leveraging cutting-edge technologies to create a decentralized platform that enables home owners to participate in the energy market and earn crypto rewards."),(0,a.kt)("p",null,"One of the key challenges of creating a decentralized platform is ensuring that the devices are up-to-date and secure. To address this challenge, we're using OTA (over-the-air) updates to keep the firmware of the Srcful Energy Gateway up-to-date. These updates are signed by the crypto chip, ensuring that the device is secure and trusted."),(0,a.kt)("p",null,"Another challenge is ensuring that the energy data and rewards are transacted securely and transparently on the blockchain. To address this challenge, we've developed a system for signing data packages that are sent to the blockchain. This system ensures that the data is tamper-proof and transparent, which is critical for a decentralized platform."),(0,a.kt)("p",null,"Here's an example of how to sign a data package using C++ pseudo code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},"void sign_data_package(unsigned char* data, unsigned int len, unsigned char* signature)\n{\n    // get the private key from the crypto chip\n    unsigned char private_key[32];\n    get_private_key(private_key);\n\n    // calculate the hash of the data\n    unsigned char hash[32];\n    sha256(data, len, hash);\n\n    // sign the hash with the private key\n    sign(private_key, hash, signature);\n}\n")),(0,a.kt)("p",null,"In addition to these security features, we're also using AI on the edge to prevent gaming of the system. Our platform is designed to prevent users from exploiting the system to earn more rewards than they are entitled to. By using AI on the edge, we're able to detect and prevent fraudulent activities, ensuring that the rewards are distributed fairly and transparently."),(0,a.kt)("p",null,"In summary, the architecture of the Srcful platform is designed with security, transparency, and fairness in mind. We're leveraging cutting-edge technologies like OTA updates, crypto chips, and AI on the edge to create a decentralized platform that enables home owners to participate in the energy market and earn crypto rewards. By signing data packages that are sent to the blockchain, we ensure that the data is tamper-proof and transparent, and by using AI on the edge, we prevent fraudulent activities."))}p.isMDXComponent=!0}}]);