"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[856],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),A=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=A(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=A(r),m=n,d=c["".concat(i,".").concat(m)]||c[m]||u[m]||o;return r?a.createElement(d,l(l({ref:t},s),{},{components:r})):a.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:n,l[1]=p;for(var A=2;A<o;A++)l[A]=r[A];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4732:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>A});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:2},l="Robot Code Setup",p={unversionedId:"programming/robot_project",id:"programming/robot_project",title:"Robot Code Setup",description:"This page will help you create a robot code template",source:"@site/docs/programming/robot_project.md",sourceDirName:"programming",slug:"/programming/robot_project",permalink:"/docs/programming/robot_project",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Start Here",permalink:"/docs/programming/setup"},next:{title:"What is Radio?",permalink:"/docs/QA/radio"}},i={},A=[{value:"WPILib VSCode",id:"wpilib-vscode",level:2},{value:"Coding",id:"coding",level:2}],s={toc:A},c="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"robot-code-setup"},"Robot Code Setup"),(0,n.kt)("p",null,"This page will help you create a robot code template"),(0,n.kt)("h2",{id:"wpilib-vscode"},"WPILib VSCode"),(0,n.kt)("p",null,'During your installation of WPILib, you should have downloaded a version of VSCode called "WPILib VS Code".\nTake a look at the ',(0,n.kt)("a",{parentName:"p",href:"/docs/system-setup/wpilib_setup"},"WPILib installation guide")," on how to download WPILib."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Open "WPILib VS Code"'),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"WPILib_VsCode_App.png",src:r(2213).Z,width:"679",height:"178"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Once the app has loaded, Click ",(0,n.kt)("inlineCode",{parentName:"p"},"Ctrl + Shift + P"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Type "WPILib: Create a new project" and select the option ',(0,n.kt)("inlineCode",{parentName:"p"},"WPILib: Create a new project")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"WPILibCreateProject.png",src:r(51).Z,width:"620",height:"89"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You should see a project setup up screen "),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"WPILibCreateProjectScreen.png",src:r(6641).Z,width:"840",height:"623"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Select "Select a project type"')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'You can either choose "Template" or "Example"'),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Example"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If you chose Example, select any project that suits your needs"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Template"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If you chose Template, select any of the template that suits your needs"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Then select "Java" as your language')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"For Base Folder, select your project directory you want to store your project. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Under "Project Name" enter any project name.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Under "Team Number" enter your team number. Ours is 4384. ')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Click "Generate Project" and you have now created a base codebase for our robot.'),(0,n.kt)("img",{src:r(8479).Z,width:"40%"}))),(0,n.kt)("h2",{id:"coding"},"Coding"),(0,n.kt)("p",null,"To edit your robot project, we will use a code editor. You can either use ",(0,n.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/idea/"},"IntelliJ")," ",(0,n.kt)("b",null,"(Team Preference)")," or ",(0,n.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VSCode")," ",(0,n.kt)("strong",{parentName:"p"},"(FRC Preference)"),". For our team we will use IntelliJ."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"IntelliJ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Open IntelliJ"),(0,n.kt)("li",{parentName:"ul"},'Select "Projects" on the left panel'),(0,n.kt)("li",{parentName:"ul"},'Click on "New Project" on the top-right of the widget'),(0,n.kt)("li",{parentName:"ul"},"Go to your project folder path"),(0,n.kt)("li",{parentName:"ul"},'Then click "Open"'),(0,n.kt)("li",{parentName:"ul"},"This should open up the editor and allow you to edit the project")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},'If you get a message about project trust, just click "Trust Project"')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"VSCode",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Open VSCode"),(0,n.kt)("li",{parentName:"ul"},'Top left click on "File"'),(0,n.kt)("li",{parentName:"ul"},'Select "Open Folder"'),(0,n.kt)("li",{parentName:"ul"},"Go to your project folder path"),(0,n.kt)("li",{parentName:"ul"},'Then Click "Open"'),(0,n.kt)("li",{parentName:"ul"},"This should allow you to edit the project")))))}u.isMDXComponent=!0},8479:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/WPILibGeneratedProject-1a5b32c27a84c46fdf33de87d8722fd0.png"},51:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,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"},6641:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/WPILibCreateProjectScreen-1db4e6331d0c293ca711b8de866fc7f2.png"},2213:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/WPILib_VsCode_App.png-0145ba78e1512aaa330a74e91b33bc10.png"}}]);