"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),h=r,c=m["".concat(s,".").concat(h)]||m[h]||u[h]||n;return a?o.createElement(c,i(i({ref:t},d),{},{components:a})):o.createElement(c,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<n;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4394:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var o=a(7462),r=(a(7294),a(3905));const n={slug:"/"},i=void 0,l={unversionedId:"KEEZ Protocol/Project Explenation",id:"KEEZ Protocol/Project Explenation",title:"Project Explenation",description:"By Sage Bray",source:"@site/docs/KEEZ Protocol/Project Explenation.md",sourceDirName:"KEEZ Protocol",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/keezdao/KEEZ-Protocol-Documentation/tree/main/packages/create-docusaurus/templates/shared/docs/KEEZ Protocol/Project Explenation.md",tags:[],version:"current",frontMatter:{slug:"/"},sidebar:"tutorialSidebar",next:{title:"Project Outlook",permalink:"/KEEZ Protocol/Project Outlook"}},s={},p=[{value:"Step One: Add name, description, categories, and image for the DAO",id:"step-one-add-name-description-categories-and-image-for-the-dao",level:3},{value:"Step Two: Add individual UP addresses to the member list with selected permissions.",id:"step-two-add-individual-up-addresses-to-the-member-list-with-selected-permissions",level:3},{value:"Step Three: Create a multisig and a vault for the UP",id:"step-three-create-a-multisig-and-a-vault-for-the-up",level:3},{value:"Step Four: Establish voting parameters for the DAOs governance process",id:"step-four-establish-voting-parameters-for-the-daos-governance-process",level:3}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"By Sage Bray  "),(0,r.kt)("p",null,"This hackathon has been very valuable for the KEEZ Protocol Team and the KEEZ community. Building with LUSKO standards, interacting with the LUKSO team and community, and creating a dApp has strengthened us. At this time, our team has produced a site that allows a blockchain-based identity to create a DAO using LSP0, the Universal Profile (UP). With the UP, the DAO can onboard members through the LSP6 (key manager), create a vault (LSP9) for data and asset management, and govern the DAO. These ideas can be further developed to make a full DAO stack run through a single UP. For now, our Minimum Viable Product (MVP) allows for essential DAO functions. This doc will highlight what we have accomplished in these six weeks and what we would like to improve/add moving forward. "),(0,r.kt)("p",null,"We have created a protocol that enables an individual to create a DAO as a Universal Profile. The creation process is as follows: "),(0,r.kt)("p",null,"In the Navbar, go to the Get Started tab, and click the Create tab to begin creating an UP for a DAO:"),(0,r.kt)("h3",{id:"step-one-add-name-description-categories-and-image-for-the-dao"},"Step One: Add name, description, categories, and image for the DAO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Here you give it a name, description, category, and image. Add a category so people can sort and filter for the DAO, a description so individuals can learn what the DAO does, and an image + name to represent the DAO. ")),(0,r.kt)("h3",{id:"step-two-add-individual-up-addresses-to-the-member-list-with-selected-permissions"},"Step Two: Add individual UP addresses to the member list with selected permissions."),(0,r.kt)("p",null,"Step two is onboarding members using LSP6 (Key Management) permissions. Permissions currently include: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add Permission and Revoke"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The add and revoke permissions allow an individual to add/revoke permissions of another."),(0,r.kt)("li",{parentName:"ul"},"We also included a proposal template to democratically remove someone from the DAO, as this permission is intended for addition and seldom subtraction."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Vote and Propose"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Vote and Propose permissions allow you to vote and propose. If you have the Vote permission, your UP can submit votes on proposals within the DAO. The same thing with proposals; the permissioned member can create proposals for that DAO."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Send Delegate and Receive Delegate. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Send Delegate and Receive Delegate allow you to delegate votes. If an UP has SendDelegate permission, they can delegate their vote to anyone who has RecieveDelegate permission. Anyone who has RecieveDelegate permission will be able to accept or decline an individual's delegation.")))),(0,r.kt)("p",null,"We hope to create the ability for any DAO to add their own permissions in the future. "),(0,r.kt)("h3",{id:"step-three-create-a-multisig-and-a-vault-for-the-up"},"Step Three: Create a multisig and a vault for the UP"),(0,r.kt)("p",null,"Step three: you insert the name of the DAOs first vault."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This vault is in place to hold the DAOs treasury and any data.  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"In the future, we will make It so you can create more vaults.")))),(0,r.kt)("p",null,"The following section is adding members to the multisig. The multisig is in place to add security to the DAOs UP. In this step, the creator of the DAO can give multisig permission to any of the member UPs that were added in step two. The permissions are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Vote and Propose"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"These will allow the member to vote and propose on multisig matters once the interface is available. "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add permission and Remove permission"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"These will allow permissions to be added and removed from other multisigners."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Register Votes "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"These allow the holder to gather all signatures from multisig voting and tally them up. "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Execute Proposal"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Execute Proposal allows the holder to execute the proposal based on the registered signatures.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For the hackathon, anyone added to the multisig will be given all of the permissions at once.")),(0,r.kt)("h3",{id:"step-four-establish-voting-parameters-for-the-daos-governance-process"},"Step Four: Establish voting parameters for the DAOs governance process"),(0,r.kt)("p",null,"Step four is establishing voting parameters. Upon creation, all of these are set by the DAO and changeable through a proposal. These parameters are used for every proposal in the DAO and can change through a proposal template. These parameters are currently:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Voting Delay"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Voting delay is the time before the proposal is open for voting. During this period, voters should spend time learning about the context of the proposal."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Voting Period"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The voting period is the time the proposal is open for voting."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Execution Delay."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The execution delay is the amount of time after the voting period until the result executes. "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Participation Rate "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The participation rate is the percentage of all members that are needed for the proposal to be. "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Majority"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The majority is the minimum percentage of total votes received that is used to determine the proposal decision. ")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"There is also a vote registration period open for 24 hours post voting period and before execution delay. This period is where signatures representing votes will be collected, verified, and counted with the register votes permission through our smart contracts.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"From there, multisig members with the execute votes permission can push the vote through after the execution delay. "))),(0,r.kt)("p",null,"The last step brings you to the summary page, where you can make any last-minute changes. Once those are settled, the UP is created for the DAO. This concludes the DAO creation process, all permissions are active, and the UPs that have them can begin to use them. "),(0,r.kt)("p",null,"One way they can use the permissions is by making proposals. We have created templates for proposals that allow you to execute basic DAO needs. The results of all templates except the general template are executable after the execution delay. There are currently four templates:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Voting Parameters"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This template allows you to propose changes to the voting parameters established in the DAO creation process. "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Send Tokens"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This template allows you to input the vault from which you would like to send tokens, the token type, and the receiving address. If a DAO is looking to pay an individual for their work, move assets into another vault, or move assets for any other reason, they may use this template to propose It. "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add/Revoke"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This template allows you to enter an UP address and choose the permissions you want to add or remove from them. Ideally, this template will add new member permissions or add/revoke permissions of current members. This template is currently the only way to add another member to a DAO, as we have not yet made the user interface (UI) that allows the add/revoke permissions to be usable. "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"General Template "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This template allows for general, non-executable proposals. These proposals are more like polls; they ask a question and earn a response, but nothing happens on the backside. ")))),(0,r.kt)("p",null,"In the future, more templates can be added as needed, and we hope to implement the ability for individuals/DAOs to create other executable proposals. Similar to how snapshot allows individuals to develop voting strategies, we would love to provide the opportunity for DAOs to add more template options. "),(0,r.kt)("p",null,"We have also added profile pages for the DAOs. The DAO profile page is a place for their proposals to live and a homepage for their operation. Individuals with proper permissions can go onto the DAO page and participate in the governance process. They can make proposals, vote, register votes, and execute if they are permissioned to do so. On top of that, a profile page for individuals. These individual pages show the DAOs for which the UP has permissions and any activity they have done."))}u.isMDXComponent=!0}}]);