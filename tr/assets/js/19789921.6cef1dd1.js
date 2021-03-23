(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{100:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return b}));var r=t(3),a=t(8),i=(t(0),t(281)),o={id:"unicode_standard",title:"Unicode Standard",sidebar_label:"Unicode Standard",slug:"unicode_standard",custom_edit_url:null},c={unversionedId:"python/unicode/unicode_standard",id:"python/unicode/unicode_standard",isDocsHomePage:!1,title:"Unicode Standard",description:"Unicode is a standard that describes the representation and encoding of almost all languages and other characters.",source:"@site/docs/python/unicode/1_unicode_standart.md",slug:"/python/unicode/unicode_standard",permalink:"/tr/docs/python/unicode/unicode_standard",editUrl:null,version:"current",sidebar_label:"Unicode Standard",sidebar:"someSidebar",previous:{title:"Unicode",permalink:"/tr/docs/python/unicode/unicode"},next:{title:"Unicode In Python 3",permalink:"/tr/docs/python/unicode/unicode_in_python_3"}},l=[{value:"Encodings",id:"encodings",children:[]}],d={toc:l};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Unicode is a standard that describes the representation and encoding of almost all languages and other characters."),Object(i.b)("p",null,"A few facts about Unicode:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"version 13.0 (March 2020) describes 143 859 codes"),Object(i.b)("li",{parentName:"ul"},"each code is a number that corresponds to a certain character"),Object(i.b)("li",{parentName:"ul"},"standard also defines the encoding - the way of representing the symbol code in bytes")),Object(i.b)("p",null,"Each character in Unicode has a specific code. This is a number that is usually written as follows: ",Object(i.b)("inlineCode",{parentName:"p"},"U+0073"),", where 0073 - hexadecimal digits. Apart from the code, each symbol has its own unique name. For example, letter \u201cs\u201d corresponds to code ",Object(i.b)("inlineCode",{parentName:"p"},"U+0073")," and the name \u201cLATIN SMALL LETTER S\u201d."),Object(i.b)("p",null,"Examples of codes, names and corresponding symbols:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"U+0073"),", \u201cLATIN SMALL LETTER S\u201d - s"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"U+00F6"),", \u201cLATIN SMALL LETTER O WITH DIAERESIS\u201d - \xf6"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"U+1F383"),", \u201cJACK-O-LANTERN\u201d - \ud83c\udf83"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"U+2615"),", \u201cHOT BEVERAGE\u201d - \u2615"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"U+1f600"),", \u201cGRINNING FACE\u201d - \ud83d\ude00")),Object(i.b)("h2",{id:"encodings"},"Encodings"),Object(i.b)("p",null,"Encodings allow to write character code in bytes."),Object(i.b)("p",null,"Unicode supports several encodings:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"UTF-8"),Object(i.b)("li",{parentName:"ul"},"UTF-16"),Object(i.b)("li",{parentName:"ul"},"UTF-32")),Object(i.b)("p",null,"One of the most popular encoding to date is UTF-8. This encoding uses a variable number of bytes to write Unicode characters."),Object(i.b)("p",null,"Examples of Unicode characters and their representation in bytes in UTF-8 encoding:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"H - ",Object(i.b)("inlineCode",{parentName:"li"},"48")),Object(i.b)("li",{parentName:"ul"},"i - ",Object(i.b)("inlineCode",{parentName:"li"},"69")),Object(i.b)("li",{parentName:"ul"},"\ud83d\udec0 - ",Object(i.b)("inlineCode",{parentName:"li"},"01 f6 c0")),Object(i.b)("li",{parentName:"ul"},"\ud83d\ude80 - ",Object(i.b)("inlineCode",{parentName:"li"},"01 f6 80")),Object(i.b)("li",{parentName:"ul"},"\u2603 - ",Object(i.b)("inlineCode",{parentName:"li"},"26 03"))))}b.isMDXComponent=!0},281:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=a.a.createContext({}),b=function(e){var n=a.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=b(e.components);return a.a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=b(t),p=r,m=s["".concat(o,".").concat(p)]||s[p]||u[p]||i;return t?a.a.createElement(m,c(c({ref:n},d),{},{components:t})):a.a.createElement(m,c({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var d=2;d<i;d++)o[d]=t[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);