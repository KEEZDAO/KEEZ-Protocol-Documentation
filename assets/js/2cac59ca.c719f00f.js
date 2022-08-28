"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[695],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>N});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),k=m(a),N=r,u=k["".concat(o,".").concat(N)]||k[N]||p[N]||i;return a?n.createElement(u,l(l({ref:t},d),{},{components:a})):n.createElement(u,l({ref:t},d))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},1996:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const i={title:"DAO"},l=void 0,s={unversionedId:"contracts/dao",id:"contracts/dao",title:"DAO",description:"Public methods",source:"@site/docs/contracts/dao.md",sourceDirName:"contracts",slug:"/contracts/dao",permalink:"/KEEZ-Protocol-Documentation/contracts/dao",draft:!1,editUrl:"https://github.com/keezdao/KEEZ-Protocol-Documentation/tree/main/packages/create-docusaurus/templates/shared/docs/contracts/dao.md",tags:[],version:"current",frontMatter:{title:"DAO"},sidebar:"tutorialSidebar",previous:{title:"Contracts",permalink:"/KEEZ-Protocol-Documentation/category/contracts"},next:{title:"Multisig",permalink:"/KEEZ-Protocol-Documentation/contracts/multisig"}},o={},m=[{value:"Public methods",id:"public-methods",level:2},{value:"getNewPermissionHash",id:"getnewpermissionhash",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Return Values:",id:"return-values",level:4},{value:"claimPermission",id:"claimpermission",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"addPermissions",id:"addpermissions",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"removePermissions",id:"removepermissions",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"delegate",id:"delegate",level:3},{value:"Parameters:",id:"parameters-4",level:4},{value:"changeDelegate",id:"changedelegate",level:3},{value:"Parameters:",id:"parameters-5",level:4},{value:"undelegate",id:"undelegate",level:3},{value:"createProposal",id:"createproposal",level:3},{value:"Parameters:",id:"parameters-6",level:4},{value:"getProposalHash",id:"getproposalhash",level:3},{value:"Parameters:",id:"parameters-7",level:4},{value:"Return values:",id:"return-values-1",level:4},{value:"registerVotes",id:"registervotes",level:3},{value:"Parameters:",id:"parameters-8",level:4},{value:"executeProposal",id:"executeproposal",level:3},{value:"Parameters:",id:"parameters-9",level:4},{value:"Return values:",id:"return-values-2",level:4}],d={toc:m};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"public-methods"},"Public methods"),(0,r.kt)("h3",{id:"getnewpermissionhash"},"getNewPermissionHash"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function getNewPermissionHash(\n  address _from,\n  address _to,\n  bytes32 _permissions\n) external view returns(bytes32 _hash)\n")),(0,r.kt)("p",null,"Get the message needed to be signed for awarding a set of permissions."),(0,r.kt)("h4",{id:"parameters"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_from")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address that awards a set of permissions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_to")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address that receives a set of permissions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_permissions")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The set of permissions that are awarded.")))),(0,r.kt)("h4",{id:"return-values"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_hash")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The message neede to be signed for awarding a new permission.")))),(0,r.kt)("h3",{id:"claimpermission"},"claimPermission"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function claimPermission(\n  address _from,\n  bytes32 _permissions,\n  bytes memory _signature\n) external\n")),(0,r.kt)("p",null,"Claim a permission using a signature."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_from")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address that has awarded the set of permissions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_permissions")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The set of permissions that are awarded.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_signature")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The signature needed for claiming the set of permissions.")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("h4",{parentName:"admonition",id:"requirements"},"Requirements:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_from")," must have the ADD_PERMISSION permission."),(0,r.kt)("li",{parentName:"ul"},"The signer of ",(0,r.kt)("inlineCode",{parentName:"li"},"_signature")," must be ",(0,r.kt)("inlineCode",{parentName:"li"},"_from"),"."))),(0,r.kt)("h3",{id:"addpermissions"},"addPermissions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function addPermissions(\n  address _to,\n  bytes32 _permissions\n) external\n")),(0,r.kt)("p",null,"Add a permission."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_to")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address that will receive new permissions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_permissions")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The permissions that will be given to ",(0,r.kt)("inlineCode",{parentName:"td"},"_to"),".")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("h4",{parentName:"admonition",id:"requirements-1"},"Requirements:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"msg.sender")," must have ADD_PERMISSION permission"))),(0,r.kt)("h3",{id:"removepermissions"},"removePermissions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function removePermissions(\n  address _to,\n  bytes32 _permissions\n) external\n")),(0,r.kt)("p",null,"Add a permission."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_to")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address that will permissions removed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_permissions")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The permissions that will be removed from ",(0,r.kt)("inlineCode",{parentName:"td"},"_to"),".")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("h4",{parentName:"admonition",id:"requirements-2"},"Requirements:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"msg.sender")," must have REMOVE_PERMISSION permission"))),(0,r.kt)("h3",{id:"delegate"},"delegate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function delegate(\n  address delegatee\n) external\n")),(0,r.kt)("p",null,"Delegate a vote."),(0,r.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"delegatee")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address of the delegatee to be set for ",(0,r.kt)("inlineCode",{parentName:"td"},"msg.sender"),".")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("h4",{parentName:"admonition",id:"requirements-3"},"Requirements:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"msg.sender")," must have SEND_DELEGATE permission."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"delegatee")," must have RECEIVE_DELEGATE permission."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"msg.sender")," must have no delegatee set."))),(0,r.kt)("h3",{id:"changedelegate"},"changeDelegate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function changeDelegate(\n  address newDelegatee\n) external\n")),(0,r.kt)("p",null,"Change a delegatee."),(0,r.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"newDelegatee")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address of the new delegatee to be set for ",(0,r.kt)("inlineCode",{parentName:"td"},"msg.sender"),".")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("h4",{parentName:"admonition",id:"requirements-4"},"Requirements:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"msg.sender")," must have SEND_DELEGATE permission."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"newDelegatee")," must have RECEIVE_DELEGATE permission."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"msg.sender")," must have a delegatee set."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"newDelegatee")," must be different from the current delegatee of ",(0,r.kt)("inlineCode",{parentName:"li"},"msg.sender"),"."))),(0,r.kt)("h3",{id:"undelegate"},"undelegate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function undelegate() external\n")),(0,r.kt)("p",null,"Remove a delegatee."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("h4",{parentName:"admonition",id:"requirements-5"},"Requirements:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"msg.sender")," must have SEND_DELEGATE permission."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"msg.sender")," must have a delegatee set."))),(0,r.kt)("h3",{id:"createproposal"},"createProposal"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function createProposal(\n  string calldata _title,\n  string calldata _metadataLink,\n  bytes32 _votingDelay,\n  bytes32 _votingPeriod,\n  bytes32 _executionDelay,\n  bytes[] calldata _payloads,\n  bytes32 _choices,\n  bytes32 _choicesPerVote\n) external\n")),(0,r.kt)("p",null,"Create a proposal."),(0,r.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_title")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Title of the proposal. Used to create the proposal signature.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_metadataLink")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Link to the metadata JSON file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_votingDelay")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Period before voting can start. Must be >= with the minimum voting delay set in dao settings.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_votingPeriod")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Period one could register votes for the proposal. Must be >= with the minimum voting period set in dao settings.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_executionDelay")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Period after which one could execute the proposal. Must be >= with the minimum execution delay set in dao settings.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_payloads")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"An array of payloads which will be executed if the proposal is successful.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_choices")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of choices allowed for the proposal. Choice name and description must be stored inside ",(0,r.kt)("inlineCode",{parentName:"td"},"_metadataLink"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_choicesPerVote")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Maximum number of choices allowed for each voter.")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("h4",{parentName:"admonition",id:"requirements-6"},"Requirements:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_choicesPerVote")," miust be smaller or equal to ",(0,r.kt)("inlineCode",{parentName:"li"},"_choices"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_votingDelay")," must be bigger or equal to the minimum value set in the dao's settings."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_votingPeriod")," must be bigger or equal to the minimum value set in the dao's settings."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_executionDelay")," must be bigger or equal to the minimum value set in the dao's settings."))),(0,r.kt)("h3",{id:"getproposalhash"},"getProposalHash"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function getProposalHash(\n  address _signer,\n  bytes10 _proposalSignature,\n  bytes32 _choicesBitArray\n) external view returns(bytes32 _hash)\n")),(0,r.kt)("p",null,"Get the hash needed to be signed by the proposal voters."),(0,r.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_signer")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address of the voter.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_proposalSignature")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes10"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The unique identifier of a proposal.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_choicesBitArray")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The choices of the voter.")))),(0,r.kt)("h4",{id:"return-values-1"},"Return values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_hash")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The message neede to be signed for voting on a proposal.")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("h4",{parentName:"admonition",id:"requirements-7"},"Requirements"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"msg.sender")," must have PROPOSE permission."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_signer")," must be the same as the address that will sign the message."))),(0,r.kt)("h3",{id:"registervotes"},"registerVotes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function registerVotes(\n  bytes10 _proposalSignature,\n  bytes[] memory _signatures,\n  address[] memory _signers,\n  bytes32[] memory _choicesBitArray\n) external\n")),(0,r.kt)("p",null,"Register the participants with its choices and signed vote."),(0,r.kt)("h4",{id:"parameters-8"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_proposalSignature")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes10"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The unique identifier of a proposal.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_signatures")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"An array of signatures, generated by ",(0,r.kt)("inlineCode",{parentName:"td"},"getProposalHash(...)"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_signers")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"An array of addresses that signed the ",(0,r.kt)("inlineCode",{parentName:"td"},"_signatures"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_choicesBitArray")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes32[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"An array of BitArrays representing the choices of ",(0,r.kt)("inlineCode",{parentName:"td"},"_signers"),".")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("h4",{parentName:"admonition",id:"requirements-8"},"Requirements"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"msg.sender")," must have REGISTER_VOTES permission."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_signatures.length")," must be equal to ",(0,r.kt)("inlineCode",{parentName:"li"},"_signers.length")," and to ",(0,r.kt)("inlineCode",{parentName:"li"},"_choicesBitArray.length"),"."),(0,r.kt)("li",{parentName:"ul"},"Voting delay period must be over."),(0,r.kt)("li",{parentName:"ul"},"Voting period must not be over."))),(0,r.kt)("h3",{id:"executeproposal"},"executeProposal"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function executeProposal(\n  bytes10 proposalSignature\n) external returns(uint256[] memory)\n")),(0,r.kt)("p",null,"Execute the proposal by signature."),(0,r.kt)("h4",{id:"parameters-9"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_proposalSignature")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes10"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The unique identifier of a proposal.")))),(0,r.kt)("h4",{id:"return-values-2"},"Return values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"arrayOfVotesPerChoice")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"An arra of votes where each index is a different choice.")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("h4",{parentName:"admonition",id:"requirements-9"},"Requirements"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"msg.sender")," must have EXECUTE permission."),(0,r.kt)("li",{parentName:"ul"},"Votes must be registered before executing the proposal."),(0,r.kt)("li",{parentName:"ul"},"Voting delay, voting period and execute delay phases must be over."))))}p.isMDXComponent=!0}}]);