"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[472],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>b});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=l(o),u=r,b=c["".concat(p,".").concat(u)]||c[u]||g[u]||a;return o?n.createElement(b,i(i({ref:t},m),{},{components:o})):n.createElement(b,i({ref:t},m))}));function b(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},8894:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=o(7462),r=(o(7294),o(3905));const a={sidebar_position:2},i="Imaging RoboRio 1.0",s={unversionedId:"system-setup/image_roborio1",id:"system-setup/image_roborio1",title:"Imaging RoboRio 1.0",description:"This page will teach you how to Program/Config your radio",source:"@site/docs/system-setup/image_roborio1.md",sourceDirName:"system-setup",slug:"/system-setup/image_roborio1",permalink:"/docs/system-setup/image_roborio1",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/system-setup/installation"},next:{title:"Radio Configuration",permalink:"/docs/system-setup/radio_config"}},p={},l=[{value:"Connection",id:"connection",level:2},{value:"Imaging Tool",id:"imaging-tool",level:2}],m={toc:l},c="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"imaging-roborio-10"},"Imaging RoboRio 1.0"),(0,r.kt)("p",null,"This page will teach you how to ",(0,r.kt)("strong",{parentName:"p"},"Program/Config your radio")),(0,r.kt)("p",null,"Learn more about ",(0,r.kt)("a",{parentName:"p",href:"/docs/QA/roborio1"},"Radio")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This is for RoboRio 1.0, if you have RoboRio 2.0 refer ",(0,r.kt)("a",{parentName:"p",href:"https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-3/roborio2-imaging.html"},"here")),(0,r.kt)("p",{parentName:"admonition"},"We will be using USB protocol as it is the best way to image your RoboRio."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"IMPORTANT: Make sure you have ",(0,r.kt)("a",{parentName:"strong",href:"https://www.andymark.com/products/6-foot-usb-a-to-usb-b-2-0-cable"},"USB A to USB B 2.0")))),(0,r.kt)("h2",{id:"connection"},"Connection"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Have your ",(0,r.kt)("a",{parentName:"li",href:"https://www.andymark.com/products/6-foot-usb-a-to-usb-b-2-0-cable"},"USB A to USB B 2.0")," on hand."),(0,r.kt)("li",{parentName:"ol"},"Locate your RoboRio 1.0 and find the USB 2.0 Port as shown in the picture."),(0,r.kt)("li",{parentName:"ol"},"Connect the USB B 2.0 head to the connector on your RoboRio.\n",(0,r.kt)("img",{alt:"RoboRioUSB2.png",src:o(407).Z,width:"1046",height:"1034"}))),(0,r.kt)("h2",{id:"imaging-tool"},"Imaging Tool"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Connect your USB A head to your computer")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"roboRIO Imaging Tool")," app"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"FRCImagingTool.png",src:o(2062).Z,width:"152",height:"204"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Let the application scan for the RoboRio."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"FRCImagingAppOpen.pm9",src:o(3256).Z,width:"599",height:"346"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'If in the "roboRIO Targets" doesn\'t show your RoboRio click the ',(0,r.kt)("inlineCode",{parentName:"p"},"Recan")," Button")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Select your RoboRio from the roboRIO Targets"),(0,r.kt)("li",{parentName:"ol"},'Change the "Team Number" section to your Team Number (Our team number is ',(0,r.kt)("strong",{parentName:"li"},"4384"),")"),(0,r.kt)("li",{parentName:"ol"},'Select "Format Target"'),(0,r.kt)("li",{parentName:"ol"},"Select your Latest Image from the Select Image section\n",(0,r.kt)("img",{alt:"FRCImagingToolsFormatTarget.png",src:o(4500).Z,width:"589",height:"654"})),(0,r.kt)("li",{parentName:"ol"},'Click "Reformat"')),(0,r.kt)("p",null,"Once the reformatting is done, your RoboRIO is now reformatted to your new image! \ud83c\udf89"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Double check if the reformatting worked by looking at ",(0,r.kt)("inlineCode",{parentName:"p"},"System Information > Current Image"),".\nIt should show your ",(0,r.kt)("strong",{parentName:"p"},"latest image")," that is on your RoboRio."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{alt:"FRCImagingToolsSystemInfo.png",src:o(4226).Z,width:"524",height:"269"}))))}g.isMDXComponent=!0},3256:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/FRCImagingAppOpen-0ada35882d32c7316b2db549567b57ab.png"},2062:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/FRCImagingTool-25d6803fdf9170d24582eae9411b0f14.png"},4500:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/FRCImagingToolsFormatTarget-aaa97414b98363ba79a8bbe1bbeb3966.png"},4226:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/FRCImagingToolsSystemInfo-f87b5a364c10e1e7e241d0f12879560a.png"},407:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/RoboRioUSB2-5b2ab39b567d042ef3b7e85e59e51e1a.png"}}]);