(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{251:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),o=(n(0),n(281)),l={id:"tuple",title:"Tuple",sidebar_label:"Tuple",slug:"tuple",custom_edit_url:null},c={unversionedId:"python/data_structures/tuple",id:"python/data_structures/tuple",isDocsHomePage:!1,title:"Tuple",description:"Tuple in Python is:",source:"@site/docs/python/data_structures/5_tuple.md",slug:"/python/data_structures/tuple",permalink:"/docs/python/data_structures/tuple",editUrl:null,version:"current",sidebar_label:"Tuple",sidebar:"someSidebar",previous:{title:"Dictionary",permalink:"/docs/python/data_structures/dictionary"},next:{title:"Set",permalink:"/docs/python/data_structures/set"}},u=[],p={toc:u};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Tuple in Python is:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"a sequence of elements separated by a comma and enclosed in parentheses"),Object(o.b)("li",{parentName:"ul"},"immutable ordered data type")),Object(o.b)("p",null,"Roughly speaking, a tuple is a list that can\u2019t be changed. We can say that the tuple has read-only permissions. It could be a defense against accidental change."),Object(o.b)("p",null,"Create an empty tuple:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [1]: tuple1 = tuple()\n\nIn [2]: print(tuple1)\n()\n")),Object(o.b)("p",null,"Tuple with one element (note the comma):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [3]: tuple2 = ('password',)\n")),Object(o.b)("p",null,"Tuple from list:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [4]: list_keys = ['hostname', 'location', 'vendor', 'model', 'ios', 'ip']\n\nIn [5]: tuple_keys = tuple(list_keys)\n\nIn [6]: tuple_keys\nOut[6]: ('hostname', 'location', 'vendor', 'model', 'ios', 'ip')\n")),Object(o.b)("p",null,"Objects in tuple can be accessed as well as objects in list, by order number:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [7]: tuple_keys[0]\nOut[7]: 'hostname'\n")),Object(o.b)("p",null,"But since tuple is immutable you cannot assign a new value:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [8]: tuple_keys[1] = 'test'\n---------------------------------------------------------------------------\nTypeError                                 Traceback (most recent call last)\n<ipython-input-9-1c7162cdefa3> in <module>()\n----\x3e 1 tuple_keys[1] = 'test'\n\nTypeError: 'tuple' object does not support item assignment\n")),Object(o.b)("p",null,"Function ",Object(o.b)("inlineCode",{parentName:"p"},"sorted")," sorts tuple elements in ascending order and returns a new list with sorted elements:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [2]: tuple_keys = ('hostname', 'location', 'vendor', 'model', 'ios', 'ip')\n\nIn [3]: sorted(tuple_keys)\nOut[3]: ['hostname', 'ios', 'ip', 'location', 'model', 'vendor']\n")))}s.isMDXComponent=!0},281:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),i=s(n),d=r,m=i["".concat(l,".").concat(d)]||i[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var p=2;p<o;p++)l[p]=n[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);