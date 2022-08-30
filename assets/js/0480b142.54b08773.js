"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[836],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(r),c=n,h=u["".concat(i,".").concat(c)]||u[c]||d[c]||o;return r?a.createElement(h,l(l({ref:t},m),{},{components:r})):a.createElement(h,l({ref:t},m))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3584:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={},l="FAQ",s={unversionedId:"faq",id:"faq",title:"FAQ",description:"What are the Proposal Templates for?",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/faq",draft:!1,editUrl:"https://github.com/keezdao/KEEZ-Protocol-Documentation/tree/main/packages/create-docusaurus/templates/shared/docs/faq.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Multisig",permalink:"/Contracts/readme-multisig"}},i={},p=[{value:"What are the Proposal Templates for?",id:"what-are-the-proposal-templates-for",level:2},{value:"What are the key permissions and what do they do?",id:"what-are-the-key-permissions-and-what-do-they-do",level:2}],m={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"faq"},"FAQ"),(0,n.kt)("h2",{id:"what-are-the-proposal-templates-for"},"What are the Proposal Templates for?"),(0,n.kt)("p",null,"To help guide the user through common proposal types. These templates include proposals to change voting parameters, send tokens from the DAO, and add & revoke permissions. A general template allows members to create custom proposals for anything outside the three templates described above."),(0,n.kt)("h2",{id:"what-are-the-key-permissions-and-what-do-they-do"},"What are the key permissions and what do they do?"),(0,n.kt)("p",null,"Key permissions enable the assignment of various role and responsibilities to specific DAO members, a feature made possible by the innovative standards LUKSO has created."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key Permission"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Vote"),(0,n.kt)("td",{parentName:"tr",align:null},"allows a member to vote on proposals on the DAO profile page")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Propose"),(0,n.kt)("td",{parentName:"tr",align:null},"allows a member to make proposals on the DAO profile page and in the governance tab")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Register Votes"),(0,n.kt)("td",{parentName:"tr",align:null},"allows a member to register the signatures (votes) on a proposal after the voting period has ended. Vote must be registered to enable the execution of a proposal.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Execute"),(0,n.kt)("td",{parentName:"tr",align:null},"allows a member to push a proposal result once votes have been registered by a member with the register vote              permission")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Add Permission"),(0,n.kt)("td",{parentName:"tr",align:null},"allows the member to assign permissions to other members")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Remove Permissions"),(0,n.kt)("td",{parentName:"tr",align:null},"allows the member to revoke permissions from other members")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Send Delegate"),(0,n.kt)("td",{parentName:"tr",align:null},"allow a member to delegate their vote to other members who have the Receive Delegate Key")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Receive Delegate"),(0,n.kt)("td",{parentName:"tr",align:null},"allows a members to vote on behalf of another member")))))}d.isMDXComponent=!0}}]);