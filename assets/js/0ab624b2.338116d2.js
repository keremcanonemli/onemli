(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{280:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return O}));var r=t(0),a=t.n(r);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=a.a.createContext({}),b=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},i=function(e){var n=b(e.components);return a.a.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,c=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),i=b(t),m=r,O=i["".concat(c,".").concat(m)]||i[m]||s[m]||p;return t?a.a.createElement(O,l(l({ref:n},o),{},{components:t})):a.a.createElement(O,l({ref:n},o))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,c=new Array(p);c[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var o=2;o<p;o++)c[o]=t[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},77:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return b}));var r=t(3),a=t(8),p=(t(0),t(280)),c={id:"numbers",title:"Numbers",sidebar_label:"4.1 Numbers",slug:"numbers",custom_edit_url:null},l={unversionedId:"python/data_structures/numbers",id:"python/data_structures/numbers",isDocsHomePage:!1,title:"Numbers",description:"With numbers it is possible to perform various mathematical operations.",source:"@site/docs/python/data_structures/1_numbers.md",slug:"/python/data_structures/numbers",permalink:"/docs/python/data_structures/numbers",editUrl:null,version:"current",sidebar_label:"4.1 Numbers",sidebar:"someSidebar",previous:{title:"Python Data Types",permalink:"/docs/python/data_structures/python_data_types"},next:{title:"Strings",permalink:"/docs/python/data_structures/strings"}},u=[],o={toc:u};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(r.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(p.b)("p",null,"With numbers it is possible to perform various mathematical operations."),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-python"},"print(1 + 2)\n\nprint(1.0 + 2)\n\nprint(10 - 4)\n\nprint(2 ** 3)\n")),Object(p.b)("p",null,"Output"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-python"},"3\n3.0\n6\n8\n")),Object(p.b)("p",null,"Division int and float:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-python"},"print(10 / 3)\n\nprint(10 / 3.0)\n")),Object(p.b)("p",null,"Output"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-python"},"3.3333333333333335\n3.3333333333333335\n")),Object(p.b)("p",null,"The round() function - round a number to a given precision in decimal digits:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-python"},"print(round(10 / 3.0, 2))\n\nprint(round(10 / 3.0, 4))\n")),Object(p.b)("p",null,"Output"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-python"},"3.33\n3.3333\n")),Object(p.b)("p",null,"Remainder of division:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-python"},"print(10 % 3)\n")),Object(p.b)("p",null,"Output"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-python"},"1\n")),Object(p.b)("p",null,"Comparison operators"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-python"},"print(10 % 3)\n\nprint(10 > 3.0)\n\nprint(10 < 3)\n\nprint(10 == 3)\n\nprint(10 == 10)\n\nprint(10 <= 10)\n\nprint(10.0 == 10)\n")),Object(p.b)("p",null,"Output"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-python"},"True\nFalse\nFalse\nTrue\nTrue\nTrue\n")),Object(p.b)("p",null,"The int() function allows converting to int type. The second argument can specify number system:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-python"},"a = '11'\n\nprint(int(a))\n")),Object(p.b)("p",null,"Output"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre"},"11\n")),Object(p.b)("p",null,"If you specify that string should be read as a binary number, the result is:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-python"},"print(int(a, 2))\n")),Object(p.b)("p",null,"Output"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-python"},"3\n")),Object(p.b)("p",null,"Convert to int from float:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-python"},"print(int(3.333))\n\nprint(int(3.9))\n")),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-python"},"3\n\n3\n")),Object(p.b)("p",null,"The bin() function produces a binary representation of a number (note that the result is a string):"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-python"},"print(bin(8))\n\nprint(bin(255))\n")),Object(p.b)("p",null,"Output"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-python"},"0b1000\n0b11111111\n")),Object(p.b)("p",null,"Similarly, function hex() produces a hexadecimal value:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-python"},"print(hex(10))\n")),Object(p.b)("p",null,"Output"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-python"},"0xa\n")),Object(p.b)("p",null,"And, of course, you can do several changes at the same time:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-python"},"print(int('ff', 16))\n\nprint(bin(int('ff', 16)))\n")),Object(p.b)("p",null,"Output"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-python"},"255\n0b11111111\n")),Object(p.b)("p",null,"For more complex mathematical functions, Python has a ",Object(p.b)("inlineCode",{parentName:"p"},"math")," module:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-python"},"print(math.sqrt(9))\n\nprint(math.factorial(3))\n\nprint(math.pi)\n")),Object(p.b)("p",null,"Output"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-python"},"3.0\n6\n3.141592653589793\n")))}b.isMDXComponent=!0}}]);