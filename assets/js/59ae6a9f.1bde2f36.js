(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{155:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var i=t(3),r=t(8),a=(t(0),t(281)),o={id:"file_reading",title:"File Reading",sidebar_label:"File Reading",slug:"file_reading",custom_edit_url:null},s={unversionedId:"python/07_files/file_reading",id:"python/07_files/file_reading",isDocsHomePage:!1,title:"File Reading",description:"Python has several file reading methods:",source:"@site/docs/python/07_files/2_file_reading.md",slug:"/python/07_files/file_reading",permalink:"/docs/python/07_files/file_reading",editUrl:null,version:"current",sidebar_label:"File Reading",sidebar:"someSidebar",previous:{title:"File Opening",permalink:"/docs/python/07_files/file_opening"},next:{title:"File Writing",permalink:"/docs/python/07_files/file_writing"}},l=[{value:"<code>read</code>",id:"read",children:[]},{value:"<code>readline</code>",id:"readline",children:[]},{value:"<code>readlines</code>",id:"readlines",children:[]},{value:"<code>seek</code>",id:"seek",children:[]}],c={toc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Python has several file reading methods:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"read")," - reads the contents of file to string"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"readline")," - reads file line by line"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"readlines")," - reads file lines and creates a list from the lines")),Object(a.b)("p",null,"Let\u2019s see how to read contents of files using the example of r1.txt:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"!\nservice timestamps debug datetime msec localtime show-timezone year\nservice timestamps log datetime msec localtime show-timezone year\nservice password-encryption\nservice sequence-numbers\n!\nno ip domain lookup\n!\nip ssh version 2\n!\n")),Object(a.b)("h2",{id:"read"},Object(a.b)("inlineCode",{parentName:"h2"},"read")),Object(a.b)("p",null,"Method ",Object(a.b)("inlineCode",{parentName:"p"},"read")," reads the entire file to one string:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [1]: f = open('r1.txt')\n\nIn [2]: f.read()\nOut[2]: '!\\nservice timestamps debug datetime msec localtime show-timezone year\\nservice timestamps log datetime msec localtime show-timezone year\\nservice password-encryption\\nservice sequence-numbers\\n!\\nno ip domain lookup\\n!\\nip ssh version 2\\n!\\n'\n\nIn [3]: f.read()\nOut[3]: ''\n")),Object(a.b)("p",null,"When reading a file once again an empty line is displayed in line 3. This is because the whole file is read when ",Object(a.b)("inlineCode",{parentName:"p"},"read")," method is called. And after the file has been read the cursor stays at the end of file. The cursor position can be controlled by ",Object(a.b)("inlineCode",{parentName:"p"},"seek")," method."),Object(a.b)("h2",{id:"readline"},Object(a.b)("inlineCode",{parentName:"h2"},"readline")),Object(a.b)("p",null,"File can be read line by line using ",Object(a.b)("inlineCode",{parentName:"p"},"readline")," method:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [4]: f = open('r1.txt')\n\nIn [5]: f.readline()\nOut[5]: '!\\n'\n\nIn [6]: f.readline()\nOut[6]: 'service timestamps debug datetime msec localtime show-timezone year\\n'\n")),Object(a.b)("p",null,"But most often it is easier to walk through a ",Object(a.b)("strong",{parentName:"p"},"file")," object in a loop without using ",Object(a.b)("inlineCode",{parentName:"p"},"read...")," methods:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [7]: f = open('r1.txt')\n\nIn [8]: for line in f:\n   ...:     print(line)\n   ...:\n!\n\nservice timestamps debug datetime msec localtime show-timezone year\n\nservice timestamps log datetime msec localtime show-timezone year\n\nservice password-encryption\n\nservice sequence-numbers\n\n!\n\nno ip domain lookup\n\n!\n\nip ssh version 2\n\n!\n")),Object(a.b)("h2",{id:"readlines"},Object(a.b)("inlineCode",{parentName:"h2"},"readlines")),Object(a.b)("p",null,"Another useful method is ",Object(a.b)("inlineCode",{parentName:"p"},"readlines"),". It reads file lines to the list:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [9]: f = open('r1.txt')\n\nIn [10]: f.readlines()\nOut[10]:\n['!\\n',\n 'service timestamps debug datetime msec localtime show-timezone year\\n',\n 'service timestamps log datetime msec localtime show-timezone year\\n',\n 'service password-encryption\\n',\n 'service sequence-numbers\\n',\n '!\\n',\n 'no ip domain lookup\\n',\n '!\\n',\n 'ip ssh version 2\\n',\n '!\\n']\n")),Object(a.b)("p",null,"If you want to get lines of a file but without a new line character at the end, you can use ",Object(a.b)("inlineCode",{parentName:"p"},"split")," method and specify symbol ",Object(a.b)("inlineCode",{parentName:"p"},"\\n")," as a separator:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [11]: f = open('r1.txt')\n\nIn [12]: f.read().split('\\n')\nOut[12]:\n['!',\n 'service timestamps debug datetime msec localtime show-timezone year',\n 'service timestamps log datetime msec localtime show-timezone year',\n 'service password-encryption',\n 'service sequence-numbers',\n '!',\n 'no ip domain lookup',\n '!',\n 'ip ssh version 2',\n '!',\n '']\n")),Object(a.b)("p",null,"Note that the last item in list is an empty string."),Object(a.b)("p",null,"If you use ",Object(a.b)("inlineCode",{parentName:"p"},"split")," before ",Object(a.b)("inlineCode",{parentName:"p"},"rstrip"),", list will be without empty string at the end:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [13]: f = open('r1.txt')\n\nIn [14]: f.read().rstrip().split('\\n')\nOut[14]:\n['!',\n 'service timestamps debug datetime msec localtime show-timezone year',\n 'service timestamps log datetime msec localtime show-timezone year',\n 'service password-encryption',\n 'service sequence-numbers',\n '!',\n 'no ip domain lookup',\n '!',\n 'ip ssh version 2',\n '!']\n")),Object(a.b)("h2",{id:"seek"},Object(a.b)("inlineCode",{parentName:"h2"},"seek")),Object(a.b)("p",null,"Until now, file had to be reopened to read it again. This is because after reading methods a cursor is at the end of the file. And second reading returns an empty string."),Object(a.b)("p",null,"To read information from a file again you need to use the ",Object(a.b)("inlineCode",{parentName:"p"},"seek")," method which moves the cursor to the desired position."),Object(a.b)("p",null,"Example of file opening and content reading:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [15]: f = open('r1.txt')\n\nIn [16]: print(f.read())\n!\nservice timestamps debug datetime msec localtime show-timezone year\nservice timestamps log datetime msec localtime show-timezone year\nservice password-encryption\nservice sequence-numbers\n!\nno ip domain lookup\n!\nip ssh version 2\n!\n")),Object(a.b)("p",null,"If you call ",Object(a.b)("inlineCode",{parentName:"p"},"read")," method again an empty string returns:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [17]: print(f.read())\n")),Object(a.b)("p",null,"But with ",Object(a.b)("inlineCode",{parentName:"p"},"seek")," method you can go to the beginning of file (0 means the beginning of file):"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [18]: f.seek(0)\n")),Object(a.b)("p",null,"Once cursor has been set to the beginning of file you can read the content again:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [19]: print(f.read())\n!\nservice timestamps debug datetime msec localtime show-timezone year\nservice timestamps log datetime msec localtime show-timezone year\nservice password-encryption\nservice sequence-numbers\n!\nno ip domain lookup\n!\nip ssh version 2\n!\n")))}p.isMDXComponent=!0},281:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return u}));var i=t(0),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),p=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=p(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),b=i,u=m["".concat(o,".").concat(b)]||m[b]||d[b]||a;return t?r.a.createElement(u,s(s({ref:n},c),{},{components:t})):r.a.createElement(u,s({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=b;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);