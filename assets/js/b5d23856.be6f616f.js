(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{223:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(8),i=(n(0),n(281)),l={id:"file_closing",title:"File Closing",sidebar_label:"File Closing",slug:"file_closing",custom_edit_url:null},a={unversionedId:"python/07_files/file_closing",id:"python/07_files/file_closing",isDocsHomePage:!1,title:"File Closing",description:"Note",source:"@site/docs/python/07_files/4_file_closing.md",slug:"/python/07_files/file_closing",permalink:"/docs/python/07_files/file_closing",editUrl:null,version:"current",sidebar_label:"File Closing",sidebar:"someSidebar",previous:{title:"File Writing",permalink:"/docs/python/07_files/file_writing"},next:{title:"With Statement",permalink:"/docs/python/07_files/with_statement"}},c=[{value:"<code>close</code>",id:"close",children:[]}],s={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Note"),Object(i.b)("p",null,"In real life, the most common way to close files is use of ",Object(i.b)("inlineCode",{parentName:"p"},"with")," statement. It\u2019s much more convenient way than to close file explicitly. But since you can also find ",Object(i.b)("inlineCode",{parentName:"p"},"close")," method in life, this section discusses how to use it."),Object(i.b)("p",null,"After you finish working with file you have to close it. In some cases Python can close file itself. But it\u2019s best not to count on it and close file explicitly."),Object(i.b)("h2",{id:"close"},Object(i.b)("inlineCode",{parentName:"h2"},"close")),Object(i.b)("p",null,"Method close() met in ",Object(i.b)("a",{parentName:"p",href:"https://pyneng.readthedocs.io/en/latest/book/07_files/3_write.html"},"File writing")," section. It was there to make sure that the content of file was written on disk."),Object(i.b)("p",null,"For this, Python has a separate ",Object(i.b)("inlineCode",{parentName:"p"},"flush")," method. But since in example with file writing there was no need to perform any more operations, file could be closed."),Object(i.b)("p",null,"Open the r1.txt file:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [1]: f = open('r1.txt', 'r')\n")),Object(i.b)("p",null,"You can now read the content:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [2]: print(f.read())\n!\nservice timestamps debug datetime msec localtime show-timezone year\nservice timestamps log datetime msec localtime show-timezone year\nservice password-encryption\nservice sequence-numbers\n!\nno ip domain lookup\n!\nip ssh version 2\n!\n")),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"file")," object has a special ",Object(i.b)("inlineCode",{parentName:"p"},"closed")," attribute that lets you check whether a file is closed or not. If file is open, it returns ",Object(i.b)("inlineCode",{parentName:"p"},"False"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [3]: f.closed\nOut[3]: False\n")),Object(i.b)("p",null,"Now close file and check ",Object(i.b)("inlineCode",{parentName:"p"},"closed")," again:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [4]: f.close()\n\nIn [5]: f.closed\nOut[5]: True\n")),Object(i.b)("p",null,"If you try to read file an exception will be raised:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [6]: print(f.read())\n------------------------------------------------------------------\nValueError                       Traceback (most recent call last)\n<ipython-input-53-2c962247edc5> in <module>()\n----\x3e 1 print(f.read())\n\nValueError: I/O operation on closed file\n")))}p.isMDXComponent=!0},281:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,d=u["".concat(l,".").concat(f)]||u[f]||b[f]||i;return n?o.a.createElement(d,a(a({ref:t},s),{},{components:n})):o.a.createElement(d,a({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);