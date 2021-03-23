(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return m}));var o=n(3),r=n(8),a=(n(0),n(281)),i={id:"module_import",title:"Module Import",sidebar_label:"Module Import",slug:"module_import",custom_edit_url:null},l={unversionedId:"python/11_modules/module_import",id:"python/11_modules/module_import",isDocsHomePage:!1,title:"Module Import",description:"Python has several ways to import a module:",source:"@site/docs/python/11_modules/1_module_import.md",slug:"/python/11_modules/module_import",permalink:"/tr/docs/python/11_modules/module_import",editUrl:null,version:"current",sidebar_label:"Module Import",sidebar:"someSidebar",previous:{title:"Modules",permalink:"/tr/docs/python/11_modules/modules"},next:{title:"Create Your Own Modules",permalink:"/tr/docs/python/11_modules/create_your_own_modules"}},p=[{value:"<code>import module</code>",id:"import-module",children:[]},{value:"<code>import module as</code>",id:"import-module-as",children:[]},{value:"<code>from module import object</code>",id:"from-module-import-object",children:[]},{value:"<code>from module import *</code>",id:"from-module-import-",children:[]}],c={toc:p};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Python has several ways to import a module:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"import module")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"import module as")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"from module import object")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"from module import *"))),Object(a.b)("h2",{id:"import-module"},Object(a.b)("inlineCode",{parentName:"h2"},"import module")),Object(a.b)("p",null,"Example of ",Object(a.b)("strong",{parentName:"p"},"import module"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [1]: dir()\nOut[1]:\n['In',\n 'Out',\n ...\n 'exit',\n 'get_ipython',\n 'quit']\n\nIn [2]: import os\n\nIn [3]: dir()\nOut[3]:\n['In',\n 'Out',\n ...\n 'exit',\n 'get_ipython',\n 'os',\n 'quit']\n")),Object(a.b)("p",null,"After importing the ",Object(a.b)("strong",{parentName:"p"},"os")," module appeared in the output ",Object(a.b)("inlineCode",{parentName:"p"},"dir"),".This means that it is now in the current namespace."),Object(a.b)("p",null,"To call some function or method from ",Object(a.b)("strong",{parentName:"p"},"os")," module you should specify ",Object(a.b)("inlineCode",{parentName:"p"},"os.")," and then object name:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [4]: os.getlogin()\nOut[4]: 'natasha'\n")),Object(a.b)("p",null,"This import method is good because module objects do not enter the namespace of current program. That is, if you create a function named ",Object(a.b)("inlineCode",{parentName:"p"},"getlogin")," it will not conflict with the same function of ",Object(a.b)("strong",{parentName:"p"},"os")," module."),Object(a.b)("p",null,"Note"),Object(a.b)("p",null,"If file name contains a dot, the standard way of importing will not work. In such cases, ",Object(a.b)("a",{parentName:"p",href:"http://stackoverflow.com/questions/1828127/how-to-reference-python-package-when-filename-contains-a-period/1828249#1828249"},"another method")," is used."),Object(a.b)("h2",{id:"import-module-as"},Object(a.b)("inlineCode",{parentName:"h2"},"import module as")),Object(a.b)("p",null,"Construction ",Object(a.b)("strong",{parentName:"p"},"import module as")," allows importing a module under a different name (usually shorter):"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [1]: import subprocess as sp\n\nIn [2]: sp.check_output('ping -c 2 -n  8.8.8.8', shell=True)\nOut[2]: 'PING 8.8.8.8 (8.8.8.8): 56 data bytes\\n64 bytes from 8.8.8.8: icmp_seq=0 ttl=48 time=49.880 ms\\n64 bytes from 8.8.8.8: icmp_seq=1 ttl=48 time=46.875 ms\\n\\n--- 8.8.8.8 ping statistics ---\\n2 packets transmitted, 2 packets received, 0.0% packet loss\\nround-trip min/avg/max/stddev = 46.875/48.377/49.880/1.503 ms\\n'\n")),Object(a.b)("h2",{id:"from-module-import-object"},Object(a.b)("inlineCode",{parentName:"h2"},"from module import object")),Object(a.b)("p",null,"Option ",Object(a.b)("strong",{parentName:"p"},"from module import object")," is convenient to use when only few functions are needed from whole module:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [1]: from os import getlogin, getcwd\n")),Object(a.b)("p",null,"These functions are now available in the current namespace:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [2]: dir()\nOut[2]:\n['In',\n 'Out',\n ...\n 'exit',\n 'get_ipython',\n 'getcwd',\n 'getlogin',\n 'quit']\n")),Object(a.b)("p",null,"They can be called without module name:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [3]: getlogin()\nOut[3]: 'natasha'\n\nIn [4]: getcwd()\nOut[4]: '/Users/natasha/Desktop/Py_net_eng/code_test'\n")),Object(a.b)("h2",{id:"from-module-import-"},Object(a.b)("inlineCode",{parentName:"h2"},"from module import *")),Object(a.b)("p",null,"Option ",Object(a.b)("inlineCode",{parentName:"p"},"from module import *")," imports all module names into the current namespace:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [1]: from os import *\n\nIn [2]: dir()\nOut[2]:\n['EX_CANTCREAT',\n 'EX_CONFIG',\n ...\n 'wait',\n 'wait3',\n 'wait4',\n 'waitpid',\n 'walk',\n 'write']\n\nIn [3]: len(dir())\nOut[3]: 218\n")),Object(a.b)("p",null,"There are many objects in ",Object(a.b)("strong",{parentName:"p"},"os")," module, so the output is shortened. At the end, length of the list of names of current namespace is specified."),Object(a.b)("p",null,"This import option is best not to use. With such code import it is not clear which function is taken, for example from ",Object(a.b)("strong",{parentName:"p"},"os")," module. This makes it much harder to understand the code."),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://pyneng.readthedocs.io/en/latest/book/11_modules/create.html"},"Next "),Object(a.b)("a",{parentName:"p",href:"https://pyneng.readthedocs.io/en/latest/book/11_modules/index.html"}," Previous")))}m.isMDXComponent=!0},281:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),m=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=m(n),d=o,b=u["".concat(i,".").concat(d)]||u[d]||s[d]||a;return n?r.a.createElement(b,l(l({ref:t},c),{},{components:n})):r.a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);