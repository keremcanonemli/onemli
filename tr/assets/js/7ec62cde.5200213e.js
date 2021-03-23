(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{182:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var i=t(3),r=t(8),o=(t(0),t(280)),a={id:"file_writing",title:"File Writing",sidebar_label:"7.3 File Writing",slug:"file_writing",custom_edit_url:null},l={unversionedId:"python/files/file_writing",id:"python/files/file_writing",isDocsHomePage:!1,title:"File Writing",description:"When writing information to a file, it is very important to specify the correct mode for opening the file, so as not to accidentally delete it:",source:"@site/docs/python/files/3_file_writing.md",slug:"/python/files/file_writing",permalink:"/tr/docs/python/files/file_writing",editUrl:null,version:"current",sidebar_label:"7.3 File Writing",sidebar:"someSidebar",previous:{title:"File Reading",permalink:"/tr/docs/python/files/file_reading"},next:{title:"File Closing",permalink:"/tr/docs/python/files/file_closing"}},s=[{value:"<code>write</code>",id:"write",children:[]},{value:"<code>writelines</code>",id:"writelines",children:[]}],c={toc:s};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When writing information to a file, it is very important to specify the correct mode for opening the file, so as not to accidentally delete it:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"w")," - open file for writing. If file exists, its content is removed"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"a")," - open file to add data. Data is appended to the end of the file")),Object(o.b)("p",null,"Both modes create a file if it does not exist."),Object(o.b)("p",null,"The following methods are used to write to a file:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"write")," - write one line to file"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"writelines")," - allows to send as argument a list of strings")),Object(o.b)("h2",{id:"write"},Object(o.b)("inlineCode",{parentName:"h2"},"write")),Object(o.b)("p",null,"Method ",Object(o.b)("inlineCode",{parentName:"p"},"write")," expects string to write."),Object(o.b)("p",null,"For example, take a list of lines with configuration:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [1]: cfg_lines = ['!',\n   ...:  'service timestamps debug datetime msec localtime show-timezone year',\n   ...:  'service timestamps log datetime msec localtime show-timezone year',\n   ...:  'service password-encryption',\n   ...:  'service sequence-numbers',\n   ...:  '!',\n   ...:  'no ip domain lookup',\n   ...:  '!',\n   ...:  'ip ssh version 2',\n   ...:  '!']\n")),Object(o.b)("p",null,"Open r2.txt file in write mode:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [2]: f = open('r2.txt', 'w')\n")),Object(o.b)("p",null,"Convert the list of commands to one large string using ",Object(o.b)("inlineCode",{parentName:"p"},"join"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [3]: cfg_lines_as_string = '\\n'.join(cfg_lines)\n\nIn [4]: cfg_lines_as_string\nOut[4]: '!\\nservice timestamps debug datetime msec localtime show-timezone year\\nservice timestamps log datetime msec localtime show-timezone year\\nservice password-encryption\\nservice sequence-numbers\\n!\\nno ip domain lookup\\n!\\nip ssh version 2\\n!'\n")),Object(o.b)("p",null,"Write a string to a file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [5]: f.write(cfg_lines_as_string)\n")),Object(o.b)("p",null,"Similarly, you can add a string manually:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [6]: f.write('\\nhostname r2')\n")),Object(o.b)("p",null,"After work with file is finished, it should be closed:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [7]: f.close()\n")),Object(o.b)("p",null,"Since ipython supports ",Object(o.b)("em",{parentName:"p"},"cat")," command, you can easily see the content of file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [8]: cat r2.txt\n!\nservice timestamps debug datetime msec localtime show-timezone year\nservice timestamps log datetime msec localtime show-timezone year\nservice password-encryption\nservice sequence-numbers\n!\nno ip domain lookup\n!\nip ssh version 2\n!\nhostname r2\n")),Object(o.b)("h2",{id:"writelines"},Object(o.b)("inlineCode",{parentName:"h2"},"writelines")),Object(o.b)("p",null,"Method ",Object(o.b)("inlineCode",{parentName:"p"},"writelines")," expects list of strings as an argument."),Object(o.b)("p",null,"Writing cfg_lines list into the file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [1]: cfg_lines = ['!',\n   ...:  'service timestamps debug datetime msec localtime show-timezone year',\n   ...:  'service timestamps log datetime msec localtime show-timezone year',\n   ...:  'service password-encryption',\n   ...:  'service sequence-numbers',\n   ...:  '!',\n   ...:  'no ip domain lookup',\n   ...:  '!',\n   ...:  'ip ssh version 2',\n   ...:  '!']\n\nIn [9]: f = open('r2.txt', 'w')\n\nIn [10]: f.writelines(cfg_lines)\n\nIn [11]: f.close()\n\nIn [12]: cat r2.txt\n!service timestamps debug datetime msec localtime show-timezone yearservice timestamps log datetime msec localtime show-timezone yearservice password-encryptionservice sequence-numbers!no ip domain lookup!ip ssh version 2!\n")),Object(o.b)("p",null,"As a result, all lines in the list were written into one line because there was no symbol ",Object(o.b)("inlineCode",{parentName:"p"},"\\n")," at the end of lines. You can add newline character in different ways. For example, you can loop through a list:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [13]: cfg_lines2 = []\n\nIn [14]: for line in cfg_lines:\n   ....:     cfg_lines2.append(line + '\\n')\n   ....:\n\nIn [15]: cfg_lines2\nOut[15]:\n['!\\n',\n 'service timestamps debug datetime msec localtime show-timezone year\\n',\n 'service timestamps log datetime msec localtime show-timezone year\\n',\n 'service password-encryption\\n',\n 'service sequence-numbers\\n',\n '!\\n',\n 'no ip domain lookup\\n',\n '!\\n',\n 'ip ssh version 2\\n',\n")),Object(o.b)("p",null,"If the final list is written anew to the file, then it will already contain newlines:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [18]: f = open('r2.txt', 'w')\n\nIn [19]: f.writelines(cfg_lines2)\n\nIn [20]: f.close()\n\nIn [21]: cat r2.txt\n!\nservice timestamps debug datetime msec localtime show-timezone year\nservice timestamps log datetime msec localtime show-timezone year\nservice password-encryption\nservice sequence-numbers\n!\nno ip domain lookup\n!\nip ssh version 2\n!\n")))}p.isMDXComponent=!0},280:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return d}));var i=t(0),r=t.n(i);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),p=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=p(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=i,d=m["".concat(a,".").concat(u)]||m[u]||b[u]||o;return t?r.a.createElement(d,l(l({ref:n},c),{},{components:t})):r.a.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);