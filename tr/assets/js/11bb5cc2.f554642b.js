(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{280:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),b=r,d=m["".concat(a,".").concat(b)]||m[b]||u[b]||o;return n?i.a.createElement(d,s(s({ref:t},c),{},{components:n})):i.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(8),o=(n(0),n(280)),a={id:"with_statement",title:"With Statement",sidebar_label:"7.5 With Statement",slug:"with_statement",custom_edit_url:null},s={unversionedId:"python/files/with_statement",id:"python/files/with_statement",isDocsHomePage:!1,title:"With Statement",description:"The with statement is called the context manager.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/python/files/5_with_statement.md",slug:"/python/files/with_statement",permalink:"/tr/docs/python/files/with_statement",editUrl:null,version:"current",sidebar_label:"7.5 With Statement",sidebar:"someSidebar",previous:{title:"File Closing",permalink:"/tr/docs/python/files/file_closing"},next:{title:"Examples",permalink:"/tr/docs/python/files/examples"}},l=[{value:"Open two files",id:"open-two-files",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"with")," statement is called the context manager."),Object(o.b)("p",null,"Python has a more convenient way of working with files than the ones used so far - statement ",Object(o.b)("inlineCode",{parentName:"p"},"with"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [1]: with open('r1.txt', 'r') as f:\n  ....:     for line in f:\n  ....:         print(line)\n  ....:\n!\n\nservice timestamps debug datetime msec localtime show-timezone year\n\nservice timestamps log datetime msec localtime show-timezone year\n\nservice password-encryption\n\nservice sequence-numbers\n\n!\n\nno ip domain lookup\n\n!\n\nip ssh version 2\n\n!\n")),Object(o.b)("p",null,"In addition, statement ",Object(o.b)("inlineCode",{parentName:"p"},"with")," guarantees file closure automatically."),Object(o.b)("p",null,"Pay attention to how lines of the file are read:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"for line in f:\n    print(line)\n")),Object(o.b)("p",null,"When file needs to be run line by line, it is best to use this option."),Object(o.b)("p",null,"In previous output there were extra empty lines between lines of the file because ",Object(o.b)("inlineCode",{parentName:"p"},"print")," adds another new line character."),Object(o.b)("p",null,"To get rid of this you can use ",Object(o.b)("inlineCode",{parentName:"p"},"rstrip")," method:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [2]: with open('r1.txt', 'r') as f:\n  ....:     for line in f:\n  ....:         print(line.rstrip())\n  ....:\n!\nservice timestamps debug datetime msec localtime show-timezone year\nservice timestamps log datetime msec localtime show-timezone year\nservice password-encryption\nservice sequence-numbers\n!\nno ip domain lookup\n!\nip ssh version 2\n!\n\nIn [3]: f.closed\nOut[3]: True\n")),Object(o.b)("p",null,"And of course, ",Object(o.b)("inlineCode",{parentName:"p"},"with")," statement can be used not only as a line-by-line reader, all methods that have been covered before also work:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [4]: with open('r1.txt', 'r') as f:\n  ....:     print(f.read())\n  ....:\n!\nservice timestamps debug datetime msec localtime show-timezone year\nservice timestamps log datetime msec localtime show-timezone year\nservice password-encryption\nservice sequence-numbers\n!\nno ip domain lookup\n!\nip ssh version 2\n!\n")),Object(o.b)("h2",{id:"open-two-files"},"Open two files"),Object(o.b)("p",null,"Sometimes you have to work with two files simultaneously. For example, write some lines from one file to another."),Object(o.b)("p",null,"In this case you can open two files in ",Object(o.b)("inlineCode",{parentName:"p"},"with")," block as follows:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [5]: with open('r1.txt') as src, open('result.txt', 'w') as dest:\n   ...:     for line in src:\n   ...:         if line.startswith('service'):\n   ...:             dest.write(line)\n   ...:\n\nIn [6]: cat result.txt\nservice timestamps debug datetime msec localtime show-timezone year\nservice timestamps log datetime msec localtime show-timezone year\nservice password-encryption\nservice sequence-numbers\n")),Object(o.b)("p",null,"This is equivalent to:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [7]: with open('r1.txt') as src:\n   ...:     with open('result.txt', 'w') as dest:\n   ...:         for line in src:\n   ...:             if line.startswith('service'):\n   ...:                 dest.write(line)\n   ...:\n")))}p.isMDXComponent=!0}}]);