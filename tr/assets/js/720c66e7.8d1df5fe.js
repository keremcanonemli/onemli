(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{174:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return a})),r.d(n,"toc",(function(){return d})),r.d(n,"default",(function(){return l}));var t=r(3),o=r(8),i=(r(0),r(281)),c={id:"converting_errors",title:"Converting Errors",sidebar_label:"Converting Errors",slug:"converting_errors",custom_edit_url:null},a={unversionedId:"python/unicode/converting_errors",id:"python/unicode/converting_errors",isDocsHomePage:!1,title:"Converting Errors",description:"When converting between strings and bytes it is very important to know exactly which encoding is used as well as to know the possibilities of different encodings.",source:"@site/docs/python/unicode/5_converting_errors.md",slug:"/python/unicode/converting_errors",permalink:"/tr/docs/python/unicode/converting_errors",editUrl:null,version:"current",sidebar_label:"Converting Errors",sidebar:"someSidebar",previous:{title:"Examples Of Converting Between Bytes And Strings",permalink:"/tr/docs/python/unicode/examples_of_converting_between_bytes_and_strings"},next:{title:"Further Reading",permalink:"/tr/docs/python/unicode/further_reading"}},d=[{value:"Error processing",id:"error-processing",children:[{value:"Parameter errors in encode",id:"parameter-errors-in-encode",children:[]},{value:"Parameter errors in decode",id:"parameter-errors-in-decode",children:[]}]}],s={toc:d};function l(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},s,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"When converting between strings and bytes it is very important to know exactly which encoding is used as well as to know the possibilities of different encodings."),Object(i.b)("p",null,"For example, ASCII codec cannot encode Cyrillic:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [32]: hi_unicode = '\u043f\u0440\u0438\u0432\u0435\u0442'\n\nIn [33]: hi_unicode.encode('ascii')\n---------------------------------------------------------------------------\nUnicodeEncodeError                        Traceback (most recent call last)\n<ipython-input-33-ec69c9fd2dae> in <module>()\n----\x3e 1 hi_unicode.encode('ascii')\n\nUnicodeEncodeError: 'ascii' codec can't encode characters in position 0-5: ordinal not in range(128)\n")),Object(i.b)("p",null,"Similarly, if the string \u201c\u043f\u0440\u0438\u0432\u0435\u0442\u201d is converted to bytes and you try to convert it into a string with ascii, we will also get an error:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [34]: hi_unicode = '\u043f\u0440\u0438\u0432\u0435\u0442'\n\nIn [35]: hi_bytes = hi_unicode.encode('utf-8')\n\nIn [36]: hi_bytes.decode('ascii')\n---------------------------------------------------------------------------\nUnicodeDecodeError                        Traceback (most recent call last)\n<ipython-input-36-aa0ada5e44e9> in <module>()\n----\x3e 1 hi_bytes.decode('ascii')\n\nUnicodeDecodeError: 'ascii' codec can't decode byte 0xd0 in position 0: ordinal not in range(128)\n")),Object(i.b)("p",null,"Another version of error where different encodings are used to conversion:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [37]: de_hi_unicode = 'gr\xfcezi'\n\nIn [38]: utf_16 = de_hi_unicode.encode('utf-16')\n\nIn [39]: utf_16.decode('utf-8')\n---------------------------------------------------------------------------\nUnicodeDecodeError                        Traceback (most recent call last)\n<ipython-input-39-4b4c731e69e4> in <module>()\n----\x3e 1 utf_16.decode('utf-8')\n\nUnicodeDecodeError: 'utf-8' codec can't decode byte 0xff in position 0: invalid start byte\n")),Object(i.b)("p",null,"Having mistakes is good. They\u2019re telling what the problem is. It\u2019s worse when it\u2019s like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [40]: hi_unicode = '\u043f\u0440\u0438\u0432\u0435\u0442'\n\nIn [41]: hi_bytes = hi_unicode.encode('utf-8')\n\nIn [42]: hi_bytes\nOut[42]: b'\\xd0\\xbf\\xd1\\x80\\xd0\\xb8\\xd0\\xb2\\xd0\\xb5\\xd1\\x82'\n\nIn [43]: hi_bytes.decode('utf-16')\nOut[43]: '\ubfd0\u80d1\ub8d0\ub2d0\ub5d0\u82d1'\n")),Object(i.b)("h2",{id:"error-processing"},"Error processing"),Object(i.b)("p",null,"Encode and decode methods have error-processing modes that indicate how to respond to a conversion error."),Object(i.b)("h3",{id:"parameter-errors-in-encode"},"Parameter errors in encode"),Object(i.b)("p",null,"By default ",Object(i.b)("inlineCode",{parentName:"p"},"encode")," uses ",Object(i.b)("inlineCode",{parentName:"p"},"strict")," mode - UnicodeError exception is generated when encoding errors occur. Examples of such behaviour are above."),Object(i.b)("p",null,"Instead, you can use ",Object(i.b)("inlineCode",{parentName:"p"},"replace")," to substitute character with a question mark:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [44]: de_hi_unicode = 'gr\xfcezi'\n\nIn [45]: de_hi_unicode.encode('ascii', 'replace')\nOut[45]: b'gr?ezi'\n")),Object(i.b)("p",null,"Or ",Object(i.b)("inlineCode",{parentName:"p"},"namereplace")," to replace character with the name:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [46]: de_hi_unicode = 'gr\xfcezi'\n\nIn [47]: de_hi_unicode.encode('ascii', 'namereplace')\nOut[47]: b'gr\\\\N{LATIN SMALL LETTER U WITH DIAERESIS}ezi'\n")),Object(i.b)("p",null,"In addition, characters that cannot be encoded may be completely ignored:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [48]: de_hi_unicode = 'gr\xfcezi'\n\nIn [49]: de_hi_unicode.encode('ascii', 'ignore')\nOut[49]: b'grezi'\n")),Object(i.b)("h3",{id:"parameter-errors-in-decode"},"Parameter errors in decode"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"decode")," method also uses strict mode by default and generates a UnicodeDecodeError exception."),Object(i.b)("p",null,"If you change mode to ignore, as in encode, characters will simply be ignored:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [50]: de_hi_unicode = 'gr\xfcezi'\n\nIn [51]: de_hi_utf8 = de_hi_unicode.encode('utf-8')\n\nIn [52]: de_hi_utf8\nOut[52]: b'gr\\xc3\\xbcezi'\n\nIn [53]: de_hi_utf8.decode('ascii', 'ignore')\nOut[53]: 'grezi'\n")),Object(i.b)("p",null,"Mode ",Object(i.b)("inlineCode",{parentName:"p"},"replace")," substitutes characters:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [54]: de_hi_unicode = 'gr\xfcezi'\n\nIn [55]: de_hi_utf8 = de_hi_unicode.encode('utf-8')\n\nIn [56]: de_hi_utf8.decode('ascii', 'replace')\nOut[56]: 'gr\ufffd\ufffdezi'\n")))}l.isMDXComponent=!0},281:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return h}));var t=r(0),o=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function d(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var n=o.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=l(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=l(r),b=t,h=u["".concat(c,".").concat(b)]||u[b]||p[b]||i;return r?o.a.createElement(h,a(a({ref:n},s),{},{components:r})):o.a.createElement(h,a({ref:n},s))}));function h(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,c=new Array(i);c[0]=b;var a={};for(var d in n)hasOwnProperty.call(n,d)&&(a[d]=n[d]);a.originalType=e,a.mdxType="string"==typeof e?e:t,c[1]=a;for(var s=2;s<i;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);