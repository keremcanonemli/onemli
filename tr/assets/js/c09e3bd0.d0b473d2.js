(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{237:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(8),s=(n(0),n(281)),i={id:"passing_arguments_to_the_script",title:"Passing Arguments To The Script",sidebar_label:"Passing Arguments To The Script",slug:"passing_arguments_to_the_script",custom_edit_url:null},c={unversionedId:"python/basic_scripts/passing_arguments_to_the_script",id:"python/basic_scripts/passing_arguments_to_the_script",isDocsHomePage:!1,title:"Passing Arguments To The Script",description:"(sys.argv)",source:"@site/docs/python/basic_scripts/2_passing_arguments.md",slug:"/python/basic_scripts/passing_arguments_to_the_script",permalink:"/tr/docs/python/basic_scripts/passing_arguments_to_the_script",editUrl:null,version:"current",sidebar_label:"Passing Arguments To The Script",sidebar:"someSidebar",previous:{title:"Executable File",permalink:"/tr/docs/python/basic_scripts/executable_file"},next:{title:"User Input",permalink:"/tr/docs/python/basic_scripts/user_input"}},o=[{value:"(sys.argv)",id:"sysargv",children:[]}],p={toc:o};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"sysargv"},"(sys.argv)"),Object(s.b)("p",null,"Very often script solves some common problem. For example, script processes a configuration file. Of course, in this case you don\u2019t want to edit name of file every time with your hands in script. It will be much better to pass file name as script argument and then use already specified file. The sys module allows working with script arguments via argv."),Object(s.b)("p",null,"Example of access_template_argv.py:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"from sys import argv\n\ninterface = argv[1]\nvlan = argv[2]\n\naccess_template = ['switchport mode access',\n                   'switchport access vlan {}',\n                   'switchport nonegotiate',\n                   'spanning-tree portfast',\n                   'spanning-tree bpduguard enable']\n\nprint('interface {}'.format(interface))\nprint('\\n'.join(access_template).format(vlan))\n")),Object(s.b)("p",null,"Script output:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"$ python access_template_argv.py Gi0/7 4\ninterface Gi0/7\nswitchport mode access\nswitchport access vlan 4\nswitchport nonegotiate\nspanning-tree portfast\nspanning-tree bpduguard enable\n")),Object(s.b)("p",null,"Arguments that have been passed to script are substituted as values in template. Several points need to be clarified:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"argv is a list"),Object(s.b)("li",{parentName:"ul"},"all arguments are in list and represented as strings"),Object(s.b)("li",{parentName:"ul"},"argv contains not only arguments that passed to script but also name of script itself")),Object(s.b)("p",null,"In this case, argv list contains the following elements:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"['access_template_argv.py', 'Gi0/7', '4']\n")),Object(s.b)("p",null,"First comes the name of script itself, then arguments in the same order."),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://pyneng.readthedocs.io/en/latest/book/05_basic_scripts/user_input.html"},"Next "),Object(s.b)("a",{parentName:"p",href:"https://pyneng.readthedocs.io/en/latest/book/05_basic_scripts/executable.html"}," Previous")))}l.isMDXComponent=!0},281:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(i,".").concat(m)]||u[m]||b[m]||s;return n?a.a.createElement(f,c(c({ref:t},p),{},{components:n})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<s;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);