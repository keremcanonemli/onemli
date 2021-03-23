(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{170:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return u})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(8),o=(t(0),t(281)),u={id:"numbers",title:"Numbers",sidebar_label:"Numbers",slug:"numbers",custom_edit_url:null},c={unversionedId:"python/04_data_structures/numbers",id:"python/04_data_structures/numbers",isDocsHomePage:!1,title:"Numbers",description:"With numbers it is possible to perform various mathematical operations.",source:"@site/docs/python/04_data_structures/1_numbers.md",slug:"/python/04_data_structures/numbers",permalink:"/docs/python/04_data_structures/numbers",editUrl:null,version:"current",sidebar_label:"Numbers",sidebar:"someSidebar",previous:{title:"Python Data Types",permalink:"/docs/python/04_data_structures/python_data_types"},next:{title:"Strings",permalink:"/docs/python/04_data_structures/strings"}},l=[],i={toc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"With numbers it is possible to perform various mathematical operations."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [1]: 1 + 2\nOut[1]: 3\n\nIn [2]: 1.0 + 2\nOut[2]: 3.0\n\nIn [3]: 10 - 4\nOut[3]: 6\n\nIn [4]: 2**3\nOut[4]: 8\n")),Object(o.b)("p",null,"Division int and float:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [5]: 10/3\nOut[5]: 3.3333333333333335\n\nIn [6]: 10/3.0\nOut[6]: 3.3333333333333335\n")),Object(o.b)("p",null,"The round() function - round a number to a given precision in decimal digits:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [9]: round(10/3.0, 2)\nOut[9]: 3.33\n\nIn [10]: round(10/3.0, 4)\nOut[10]: 3.3333\n")),Object(o.b)("p",null,"Remainder of division:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [11]: 10 % 3\nOut[11]: 1\n")),Object(o.b)("p",null,"Comparison operators"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [12]: 10 > 3.0\nOut[12]: True\n\nIn [13]: 10 < 3\nOut[13]: False\n\nIn [14]: 10 == 3\nOut[14]: False\n\nIn [15]: 10 == 10\nOut[15]: True\n\nIn [16]: 10 <= 10\nOut[16]: True\n\nIn [17]: 10.0 == 10\nOut[17]: True\n")),Object(o.b)("p",null,"The int() function allows converting to int type. The second argument can specify number system:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [18]: a = '11'\n\nIn [19]: int(a)\nOut[19]: 11\n")),Object(o.b)("p",null,"If you specify that string should be read as a binary number, the result is:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [20]: int(a, 2)\nOut[20]: 3\n")),Object(o.b)("p",null,"Convert to int from float:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [21]: int(3.333)\nOut[21]: 3\n\nIn [22]: int(3.9)\nOut[22]: 3\n")),Object(o.b)("p",null,"The bin() function produces a binary representation of a number (note that the result is a string):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [23]: bin(8)\nOut[23]: '0b1000'\n\nIn [24]: bin(255)\nOut[24]: '0b11111111'\n")),Object(o.b)("p",null,"Similarly, function hex() produces a hexadecimal value:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [25]: hex(10)\nOut[25]: '0xa'\n")),Object(o.b)("p",null,"And, of course, you can do several changes at the same time:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [26]: int('ff', 16)\nOut[26]: 255\n\nIn [27]: bin(int('ff', 16))\nOut[27]: '0b11111111'\n")),Object(o.b)("p",null,"For more complex mathematical functions, Python has a ",Object(o.b)("inlineCode",{parentName:"p"},"math")," module:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [28]: import  math\n\nIn [29]: math.sqrt(9)\nOut[29]: 3.0\n\nIn [30]: math.sqrt(10)\nOut[30]: 3.1622776601683795\n\nIn [31]: math.factorial(3)\nOut[31]: 6\n\nIn [32]: math.pi\nOut[32]: 3.141592653589793\n")))}p.isMDXComponent=!0},281:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return O}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a.a.createContext({}),p=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return a.a.createElement(i.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),s=p(t),m=r,O=s["".concat(u,".").concat(m)]||s[m]||b[m]||o;return t?a.a.createElement(O,c(c({ref:n},i),{},{components:t})):a.a.createElement(O,c({ref:n},i))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,u=new Array(o);u[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,u[1]=c;for(var i=2;i<o;i++)u[i]=t[i];return a.a.createElement.apply(null,u)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);