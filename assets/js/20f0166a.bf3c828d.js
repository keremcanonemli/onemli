(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{110:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(8),o=(t(0),t(281)),s={id:"class_creation",title:"Class Creation",sidebar_label:"Class Creation",slug:"class_creation",custom_edit_url:null},c={unversionedId:"python/oop_basics/class_creation",id:"python/oop_basics/class_creation",isDocsHomePage:!1,title:"Class Creation",description:"Note",source:"@site/docs/python/oop_basics/2_class_creation.md",slug:"/python/oop_basics/class_creation",permalink:"/docs/python/oop_basics/class_creation",editUrl:null,version:"current",sidebar_label:"Class Creation",sidebar:"someSidebar",previous:{title:"Oop Basics",permalink:"/docs/python/oop_basics/oop_basics"},next:{title:"Method Creation",permalink:"/docs/python/oop_basics/method_creation"}},i=[],l={toc:i};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Note"),Object(o.b)("p",null,"Note that the basis is explained here given that the reader has no experience with OOP. Some examples are not very correct from Python\u2019s ideology point of view, but they help to better understand how it works. At the end, an explanation is given of how this should be done in proper way."),Object(o.b)("p",null,"Keyword ",Object(o.b)("inlineCode",{parentName:"p"},"class")," is used in python to create classes. The easiest class you can create in Python:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [1]: class Switch:\n   ...:     pass\n   ...:\n")),Object(o.b)("p",null,"Note"),Object(o.b)("p",null,"Class names: usually class names in Python are written in CamelCase format."),Object(o.b)("p",null,"To create a class instance, call class:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [2]: sw1 = Switch()\n\nIn [3]: print(sw1)\n<__main__.Switch object at 0xb44963ac>\n")),Object(o.b)("p",null,"Using dot notation, it is possible to get values of instance variables, create new variables and assign a new value to existing ones:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [5]: sw1.hostname = 'sw1'\n\nIn [6]: sw1.model = 'Cisco 3850'\n")),Object(o.b)("p",null,"In another instance of Switch class, the variables may be different:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [7]: sw2 = Switch()\n\nIn [8]: sw2.hostname = 'sw2'\n\nIn [9]: sw2.model = 'Cisco 3750'\n")),Object(o.b)("p",null,"You can see value of instance variables using the same dot notation:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [10]: sw1.model\nOut[10]: 'Cisco 3850'\n\nIn [11]: sw2.model\nOut[11]: 'Cisco 3750'\n")))}p.isMDXComponent=!0},281:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,m=u["".concat(s,".").concat(d)]||u[d]||b[d]||o;return t?r.a.createElement(m,c(c({ref:n},l),{},{components:t})):r.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=t[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);