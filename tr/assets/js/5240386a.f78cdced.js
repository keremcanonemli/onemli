(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{148:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(8),o=(t(0),t(281)),i={id:"all",title:"All",sidebar_label:"All",slug:"all",custom_edit_url:null},l={unversionedId:"python/10_useful_functions/all",id:"python/10_useful_functions/all",isDocsHomePage:!1,title:"All",description:"Function all returns True if all elements are true (or object is empty).",source:"@site/docs/python/10_useful_functions/6_all.md",slug:"/python/10_useful_functions/all",permalink:"/tr/docs/python/10_useful_functions/all",editUrl:null,version:"current",sidebar_label:"All",sidebar:"someSidebar",previous:{title:"Zip",permalink:"/tr/docs/python/10_useful_functions/zip"},next:{title:"Any",permalink:"/tr/docs/python/10_useful_functions/any"}},c=[],u={toc:c};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Function ",Object(o.b)("inlineCode",{parentName:"p"},"all")," returns True if all elements are true (or object is empty)."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [1]: all([False, True, True])\nOut[1]: False\n\nIn [2]: all([True, True, True])\nOut[2]: True\n\nIn [3]: all([])\nOut[3]: True\n")),Object(o.b)("p",null,"For example, it is possible to check that all octets in an IP address are numbers:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [4]: IP = '10.0.1.1'\n\nIn [5]: all(i.isdigit() for i in IP.split('.'))\nOut[5]: True\n\nIn [6]: all(i.isdigit() for i in '10.1.1.a'.split('.'))\nOut[6]: False\n")),Object(o.b)("h1",{id:"any"},"any"),Object(o.b)("p",null,"Function ",Object(o.b)("inlineCode",{parentName:"p"},"any")," returns True if at least one element is true."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [7]: any([False, True, True])\nOut[7]: True\n\nIn [8]: any([False, False, False])\nOut[8]: False\n\nIn [9]: any([])\nOut[9]: False\n\nIn [10]: any(i.isdigit() for i in '10.1.1.a'.split('.'))\nOut[10]: True\n")),Object(o.b)("p",null,"For example, with ",Object(o.b)("inlineCode",{parentName:"p"},"any")," you can replace ",Object(o.b)("inlineCode",{parentName:"p"},"ignore_command")," function:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"def ignore_command(command):\n    '''\n    Function checks if command contains a word from ignore list.\n    * command is a string. Command that need to be checked returns True\n    * if command contains a word from ignore list, False - if not.\n    '''\n    ignore = ['duplex', 'alias', 'Current configuration']\n\n    for word in ignore:\n        if word in command:\n            return True\n    return False\n")),Object(o.b)("p",null,"To this option:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"def ignore_command(command):\n    '''\n    Function checks if command contains a word from ignore list.\n    * command is a string. Command that need to be checked returns True\n    * if command contains a word from ignore list, False - if not.\n    '''\n    ignore = ['duplex', 'alias', 'Current configuration']\n\n    return any(word in command for word in ignore)\n")))}s.isMDXComponent=!0},281:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),d=r,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return t?a.a.createElement(f,l(l({ref:n},u),{},{components:t})):a.a.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);