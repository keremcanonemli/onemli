(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{226:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return l}));var r=n(3),i=n(8),a=(n(0),n(281)),s={id:"basic_scripts",title:"Basic Scripts",sidebar_label:"Basic Scripts",slug:"basic_scripts",custom_edit_url:null},c={unversionedId:"python/basic_scripts/basic_scripts",id:"python/basic_scripts/basic_scripts",isDocsHomePage:!1,title:"Basic Scripts",description:"Generally speaking, script is a regular file. This file stores the sequence of commands that you want to execute.",source:"@site/docs/python/basic_scripts/0_overview.md",slug:"/python/basic_scripts/basic_scripts",permalink:"/docs/python/basic_scripts/basic_scripts",editUrl:null,version:"current",sidebar_label:"Basic Scripts",sidebar:"someSidebar",previous:{title:"Tasks",permalink:"/docs/python/data_structures/tasks"},next:{title:"Executable File",permalink:"/docs/python/basic_scripts/executable_file"}},o=[],p={toc:o};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Generally speaking, script is a regular file. This file stores the sequence of commands that you want to execute."),Object(a.b)("p",null,"Let\u2019s start with basic script and print several strings on standard output. To do this, you need to create an access_template.py file with this content:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"access_template = ['switchport mode access',\n                   'switchport access vlan {}',\n                   'switchport nonegotiate',\n                   'spanning-tree portfast',\n                   'spanning-tree bpduguard enable']\n\nprint('\\n'.join(access_template).format(5))\n")),Object(a.b)("p",null,"First, items in list are combined into a string that is separated by ",Object(a.b)("inlineCode",{parentName:"p"},"\\n")," and VLAN number is inserted into string using string formatting. After this you should save file and go to command line. This is how the script execution looks like:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"$ python access_template.py\nswitchport mode access\nswitchport access vlan 5\nswitchport nonegotiate\nspanning-tree portfast\nspanning-tree bpduguard enable\n")),Object(a.b)("p",null,"All scripts that will be created in this course have an extension ",Object(a.b)("inlineCode",{parentName:"p"},".py"),". You can say that it is a \xabgood manners\xbb - to create Python scripts with .py extension."))}l.isMDXComponent=!0},281:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,f=u["".concat(s,".").concat(d)]||u[d]||b[d]||a;return n?i.a.createElement(f,c(c({ref:t},p),{},{components:n})):i.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var p=2;p<a;p++)s[p]=n[p];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);