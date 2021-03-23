(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{269:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),i=(n(0),n(280)),o={id:"types_checking",title:"Types Checking",sidebar_label:"4.9 Types Checking",slug:"types_checking",custom_edit_url:null},c={unversionedId:"python/data_structures/types_checking",id:"python/data_structures/types_checking",isDocsHomePage:!1,title:"Types Checking",description:"This type of error can occur when converting data types:",source:"@site/docs/python/data_structures/9_types_checking.md",slug:"/python/data_structures/types_checking",permalink:"/docs/python/data_structures/types_checking",editUrl:null,version:"current",sidebar_label:"4.9 Types Checking",sidebar:"someSidebar",previous:{title:"Types Conversion",permalink:"/docs/python/data_structures/types_conversion"},next:{title:"Method Chaining",permalink:"/docs/python/data_structures/method_chaining"}},s=[{value:"<code>isdigit</code>",id:"isdigit",children:[]},{value:"<code>isalpha</code>",id:"isalpha",children:[]},{value:"<code>isalnum</code>",id:"isalnum",children:[]},{value:"<code>type</code>",id:"type",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This type of error can occur when converting data types:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [1]: int('a')\n------------------------------------------------------\nValueError           Traceback (most recent call last)\n<ipython-input-42-b3c3f4515dd4> in <module>()\n----\x3e 1 int('a')\n\nValueError: invalid literal for int() with base 10: 'a'\n")),Object(i.b)("p",null,"Error is perfectly logical. We\u2019re trying to convert string \u2018a\u2019 into decimal format. For example, this can be useful when you want to go through a list of strings and convert to a number the strings that contain numbers, you can get that error. To avoid error, it would be nice to be able to check what we\u2019re working with."),Object(i.b)("h2",{id:"isdigit"},Object(i.b)("inlineCode",{parentName:"h2"},"isdigit")),Object(i.b)("p",null,"Python has such methods. For example, ",Object(i.b)("inlineCode",{parentName:"p"},"isdigit")," method can be used to check whether a string consists only of digits:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'In [2]: "a".isdigit()\nOut[2]: False\n\nIn [3]: "a10".isdigit()\nOut[3]: False\n\nIn [4]: "10".isdigit()\nOut[4]: True\n')),Object(i.b)("h2",{id:"isalpha"},Object(i.b)("inlineCode",{parentName:"h2"},"isalpha")),Object(i.b)("p",null,"Method ",Object(i.b)("inlineCode",{parentName:"p"},"isalpha")," makes it possible to check whether a string consists only of letters:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'In [7]: "a".isalpha()\nOut[7]: True\n\nIn [8]: "a100".isalpha()\nOut[8]: False\n\nIn [9]: "a--  ".isalpha()\nOut[9]: False\n\nIn [10]: "a ".isalpha()\nOut[10]: False\n')),Object(i.b)("h2",{id:"isalnum"},Object(i.b)("inlineCode",{parentName:"h2"},"isalnum")),Object(i.b)("p",null,"Method ",Object(i.b)("inlineCode",{parentName:"p"},"isalnum")," makes it possible to check whether a string consists of letters or numbers:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'In [11]: "a".isalnum()\nOut[1]: True\n\nIn [12]: "a10".isalnum()\nOut[12]: True\n')),Object(i.b)("h2",{id:"type"},Object(i.b)("inlineCode",{parentName:"h2"},"type")),Object(i.b)("p",null,"Sometimes, depending on the result, a library or function can return different types of objects. For example, if there is one object, string is returned. If several, tuple is returned. We have to construct the program in different ways, depending on whether a string or a tuple has been returned."),Object(i.b)("p",null,"Method ",Object(i.b)("inlineCode",{parentName:"p"},"type")," function can help:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'In [13]: type("string")\nOut[13]: str\n\nIn [14]: type("string") == str\nOut[14]: True\n')),Object(i.b)("p",null,"Similar to tuple (and other data types):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [15]: type((1, 2, 3))\nOut[15]: tuple\n\nIn [16]: type((1, 2, 3)) == tuple\nOut[16]: True\n\nIn [17]: type((1, 2, 3)) == list\nOut[17]: False\n")))}p.isMDXComponent=!0},280:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,h=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return n?a.a.createElement(h,c(c({ref:t},l),{},{components:n})):a.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);