(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{214:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return i})),t.d(e,"metadata",(function(){return c})),t.d(e,"toc",(function(){return u})),t.d(e,"default",(function(){return s}));var r=t(3),o=t(8),a=(t(0),t(280)),i={id:"any",title:"Any",sidebar_label:"10.7 Any",slug:"any",custom_edit_url:null},c={unversionedId:"python/useful_functions/any",id:"python/useful_functions/any",isDocsHomePage:!1,title:"Any",description:"Function any returns True if at least one element is true.",source:"@site/docs/python/useful_functions/7_any.md",slug:"/python/useful_functions/any",permalink:"/tr/docs/python/useful_functions/any",editUrl:null,version:"current",sidebar_label:"10.7 Any",sidebar:"someSidebar",previous:{title:"All",permalink:"/tr/docs/python/useful_functions/all"},next:{title:"Anonymous Function (Lambda Expression)",permalink:"/tr/docs/python/useful_functions/anonymous_function_(lambda_expression)"}},u=[],l={toc:u};function s(n){var e=n.components,t=Object(o.a)(n,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Function ",Object(a.b)("inlineCode",{parentName:"p"},"any")," returns True if at least one element is true."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [7]: any([False, True, True])\nOut[7]: True\n\nIn [8]: any([False, False, False])\nOut[8]: False\n\nIn [9]: any([])\nOut[9]: False\n\nIn [10]: any(i.isdigit() for i in '10.1.1.a'.split('.'))\nOut[10]: True\n")),Object(a.b)("p",null,"For example, with ",Object(a.b)("inlineCode",{parentName:"p"},"any")," you can replace ",Object(a.b)("inlineCode",{parentName:"p"},"ignore_command")," function:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"def ignore_command(command):\n    '''\n    Function checks if command contains a word from ignore list.\n    * command is a string. Command that need to be checked returns True\n    * if command contains a word from ignore list, False - if not.\n    '''\n    ignore = ['duplex', 'alias', 'Current configuration']\n\n    for word in ignore:\n        if word in command:\n            return True\n    return False\n")),Object(a.b)("p",null,"To this option:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"def ignore_command(command):\n    '''\n    Function checks if command contains a word from ignore list.\n    * command is a string. Command that need to be checked returns True\n    * if command contains a word from ignore list, False - if not.\n    '''\n    ignore = ['duplex', 'alias', 'Current configuration']\n\n    return any(word in command for word in ignore)\n")))}s.isMDXComponent=!0},280:function(n,e,t){"use strict";t.d(e,"a",(function(){return p})),t.d(e,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var l=o.a.createContext({}),s=function(n){var e=o.a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},p=function(n){var e=s(n.components);return o.a.createElement(l.Provider,{value:e},n.children)},f={inlineCode:"code",wrapper:function(n){var e=n.children;return o.a.createElement(o.a.Fragment,{},e)}},m=o.a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,a=n.originalType,i=n.parentName,l=u(n,["components","mdxType","originalType","parentName"]),p=s(t),m=r,d=p["".concat(i,".").concat(m)]||p[m]||f[m]||a;return t?o.a.createElement(d,c(c({ref:e},l),{},{components:t})):o.a.createElement(d,c({ref:e},l))}));function d(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=n,c.mdxType="string"==typeof n?n:r,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);