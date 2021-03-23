(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{269:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(8),a=(t(0),t(281)),c={id:"unicode_in_python_3",title:"Unicode In Python 3",sidebar_label:"Unicode In Python 3",slug:"unicode_in_python_3",custom_edit_url:null},i={unversionedId:"python/unicode/unicode_in_python_3",id:"python/unicode/unicode_in_python_3",isDocsHomePage:!1,title:"Unicode In Python 3",description:"Python 3 has:",source:"@site/docs/python/unicode/2_unicode_in_python3.md",slug:"/python/unicode/unicode_in_python_3",permalink:"/docs/python/unicode/unicode_in_python_3",editUrl:null,version:"current",sidebar_label:"Unicode In Python 3",sidebar:"someSidebar",previous:{title:"Unicode Standard",permalink:"/docs/python/unicode/unicode_standard"},next:{title:"Conversion Between Bytes And Strings",permalink:"/docs/python/unicode/conversion_between_bytes_and_strings"}},b=[{value:"Strings",id:"strings",children:[]},{value:"Bytes",id:"bytes",children:[]}],s={toc:b};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Python 3 has:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"strings - an immutable sequence of Unicode characters. Type string (str) is used to store these characters"),Object(a.b)("li",{parentName:"ul"},"bytes - an immutable sequence of bytes. Type bytes is used for storage")),Object(a.b)("h2",{id:"strings"},"Strings"),Object(a.b)("p",null,"Examples of strings:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [11]: hi = '\u043f\u0440\u0438\u0432\u0435\u0442'\n\nIn [12]: hi\nOut[12]: '\u043f\u0440\u0438\u0432\u0435\u0442'\n\nIn [15]: type(hi)\nOut[15]: str\n\nIn [13]: beautiful = 'sch\xf6n'\n\nIn [14]: beautiful\nOut[14]: 'sch\xf6n'\n")),Object(a.b)("p",null,"Since strings are a sequence of Unicode codes you can write a string in different ways."),Object(a.b)("p",null,"Unicode symbol can be written using its name:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [1]: \"\\N{LATIN SMALL LETTER O WITH DIAERESIS}\"\nOut[1]: '\xf6'\n")),Object(a.b)("p",null,"Or by using this format:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [4]: \"\\u00F6\"\nOut[4]: '\xf6'\n")),Object(a.b)("p",null,"You can write a string as a sequence of Unicode codes:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [19]: hi1 = '\u043f\u0440\u0438\u0432\u0435\u0442'\n\nIn [20]: hi2 = '\\u043f\\u0440\\u0438\\u0432\\u0435\\u0442'\n\nIn [21]: hi2\nOut[21]: '\u043f\u0440\u0438\u0432\u0435\u0442'\n\nIn [22]: hi1 == hi2\nOut[22]: True\n\nIn [23]: len(hi2)\nOut[23]: 6\n")),Object(a.b)("p",null,"Function ord() returns value of Unicode code for character:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [6]: ord('\xf6')\nOut[6]: 246\n")),Object(a.b)("p",null,"Function chr() returns Unicode character that corresponds to the code:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [7]: chr(246)\nOut[7]: '\xf6'\n")),Object(a.b)("h2",{id:"bytes"},"Bytes"),Object(a.b)("p",null,"Bytes are an immutable sequence of bytes."),Object(a.b)("p",null,"Bytes are denoted in the same way as strings but with addition of letter ",Object(a.b)("inlineCode",{parentName:"p"},"b")," before string:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [30]: b1 = b'\\xd0\\xb4\\xd0\\xb0'\n\nIn [31]: b2 = b\"\\xd0\\xb4\\xd0\\xb0\"\n\nIn [32]: b3 = b'''\\xd0\\xb4\\xd0\\xb0'''\n\nIn [36]: type(b1)\nOut[36]: bytes\n\nIn [37]: len(b1)\nOut[37]: 4\n")),Object(a.b)("p",null,"In Python, bytes that correspond to ASCII symbols are displayed as these symbols, not as their corresponding bytes. This may be a bit confusing but it is always possible to recognize bytes type by letter ",Object(a.b)("inlineCode",{parentName:"p"},"b"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [38]: bytes1 = b'hello'\n\nIn [39]: bytes1\nOut[39]: b'hello'\n\nIn [40]: len(bytes1)\nOut[40]: 5\n\nIn [41]: bytes1.hex()\nOut[41]: '68656c6c6f'\n\nIn [42]: bytes2 = b'\\x68\\x65\\x6c\\x6c\\x6f'\n\nIn [43]: bytes2\nOut[43]: b'hello'\n")),Object(a.b)("p",null,"If you try to write not an ASCII character in a byte literal, an error will occur:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [44]: bytes3 = b'\u043f\u0440\u0438\u0432\u0435\u0442'\n  File \"<ipython-input-44-dc8b23504fa7>\", line 1\n    bytes3 = b'\u043f\u0440\u0438\u0432\u0435\u0442'\n            ^\nSyntaxError: bytes can only contain ASCII literal characters.\n")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://pyneng.readthedocs.io/en/latest/book/16_unicode/python_3_convert.html"},"Next "),Object(a.b)("a",{parentName:"p",href:"https://pyneng.readthedocs.io/en/latest/book/16_unicode/unicode_standard.html"}," Previous")))}u.isMDXComponent=!0},281:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return y}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),l=u(t),d=r,y=l["".concat(c,".").concat(d)]||l[d]||p[d]||a;return t?o.a.createElement(y,i(i({ref:n},s),{},{components:t})):o.a.createElement(y,i({ref:n},s))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var b in n)hasOwnProperty.call(n,b)&&(i[b]=n[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);