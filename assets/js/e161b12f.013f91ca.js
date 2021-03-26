(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{263:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var a=t(3),i=t(8),r=(t(0),t(280)),o={id:"file_reading",title:"File Reading",sidebar_label:"7.2 File Reading",slug:"file_reading",custom_edit_url:null},l={unversionedId:"python/files/file_reading",id:"python/files/file_reading",isDocsHomePage:!1,title:"File Reading",description:"Python has several file reading methods:",source:"@site/docs/python/files/2_file_reading.md",slug:"/python/files/file_reading",permalink:"/docs/python/files/file_reading",editUrl:null,version:"current",sidebar_label:"7.2 File Reading",sidebar:"someSidebar",previous:{title:"File Opening",permalink:"/docs/python/files/file_opening"},next:{title:"File Writing",permalink:"/docs/python/files/file_writing"}},s=[{value:"<code>read</code>",id:"read",children:[]},{value:"<code>readline</code>",id:"readline",children:[]},{value:"<code>readlines</code>",id:"readlines",children:[]},{value:"<code>seek</code>",id:"seek",children:[]}],c={toc:s};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Python has several file reading methods:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"read")," - reads the contents of file to string"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"readline")," - reads file line by line"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"readlines")," - reads file lines and creates a list from the lines")),Object(r.b)("p",null,"Let\u2019s see how to read contents of files using the example of r1.txt:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"!\nservice timestamps debug datetime msec localtime show-timezone year\nservice timestamps log datetime msec localtime show-timezone year\nservice password-encryption\nservice sequence-numbers\n!\nno ip domain lookup\n!\nip ssh version 2\n!\n")),Object(r.b)("h2",{id:"read"},Object(r.b)("inlineCode",{parentName:"h2"},"read")),Object(r.b)("p",null,"Method ",Object(r.b)("inlineCode",{parentName:"p"},"read")," reads the entire file to one string:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"f = open('r1.txt')\n\nprint(f.read())\n'!\\nservice timestamps debug datetime msec localtime show-timezone year\\nservice timestamps log datetime msec localtime show-timezone year\\nservice password-encryption\\nservice sequence-numbers\\n!\\nno ip domain lookup\\n!\\nip ssh version 2\\n!\\n'\n\nprint(f.read())\n\n")),Object(r.b)("p",null,"Output"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"'!\\nservice timestamps debug datetime msec localtime show-timezone year\\nservice timestamps log datetime msec localtime show-timezone year\\nservice password-encryption\\nservice sequence-numbers\\n!\\nno ip domain lookup\\n!\\nip ssh version 2\\n!\\n'\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"")),Object(r.b)("p",null,"When reading a file once again an empty line is displayed in line 3. This is because the whole file is read when ",Object(r.b)("inlineCode",{parentName:"p"},"read")," method is called. And after the file has been read the cursor stays at the end of file. The cursor position can be controlled by ",Object(r.b)("inlineCode",{parentName:"p"},"seek")," method."),Object(r.b)("h2",{id:"readline"},Object(r.b)("inlineCode",{parentName:"h2"},"readline")),Object(r.b)("p",null,"File can be read line by line using ",Object(r.b)("inlineCode",{parentName:"p"},"readline")," method:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},'f = open("r1.txt")\n\nprint(f.readline())\n\nprint(f.readline())\n\nprint(f.readline())\n\nprint(f.readline())\n')),Object(r.b)("p",null,"Output"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"!\n\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"service timestamps debug datetime msec localtime show-timezone year\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"service timestamps log datetime msec localtime show-timezone year\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"service password-encryption\n")),Object(r.b)("p",null,"But most often it is easier to walk through a ",Object(r.b)("strong",{parentName:"p"},"file")," object in a loop without using ",Object(r.b)("inlineCode",{parentName:"p"},"read...")," methods:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"f = open('r1.txt')\n\nfor line in f:\n    print(line)\n\n")),Object(r.b)("p",null,"Output"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"!\n\nservice timestamps debug datetime msec localtime show-timezone year\n\nservice timestamps log datetime msec localtime show-timezone year\n\nservice password-encryption\n\nservice sequence-numbers\n\n!\n\nno ip domain lookup\n\n!\n\nip ssh version 2\n\n!\n\nProcess finished with exit code 0\n\n")),Object(r.b)("h2",{id:"readlines"},Object(r.b)("inlineCode",{parentName:"h2"},"readlines")),Object(r.b)("p",null,"Another useful method is ",Object(r.b)("inlineCode",{parentName:"p"},"readlines"),". It reads file lines to the list:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"f = open('r1.txt')\n\nf.readlines()\n\n")),Object(r.b)("p",null,"Output"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"['!\\n', 'service timestamps debug datetime msec localtime show-timezone year\\n', 'service timestamps log datetime msec localtime show-timezone year\\n', 'service password-encryption\\n', 'service sequence-numbers\\n', '!\\n', 'no ip domain lookup\\n', '!\\n', 'ip ssh version 2\\n', '!']\n\n")),Object(r.b)("p",null,"If you want to get lines of a file but without a new line character at the end, you can use ",Object(r.b)("inlineCode",{parentName:"p"},"split")," method and specify symbol ",Object(r.b)("inlineCode",{parentName:"p"},"\\n")," as a separator:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"f = open(\"r1.txt\")\n\nprint(f.read().split('\\n'))\n")),Object(r.b)("p",null,"Output"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"['!', 'service timestamps debug datetime msec localtime show-timezone year', 'service timestamps log datetime msec localtime show-timezone year', 'service password-encryption', 'service sequence-numbers', '!', 'no ip domain lookup', '!', 'ip ssh version 2', '!']\n\n")),Object(r.b)("p",null,"Note that the last item in list is an empty string."),Object(r.b)("p",null,"If you use ",Object(r.b)("inlineCode",{parentName:"p"},"split")," before ",Object(r.b)("inlineCode",{parentName:"p"},"rstrip"),", list will be without empty string at the end:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"f = open(\"r1.txt\")\n\nprint(f.read().rstrip().split('\\n'))\n")),Object(r.b)("p",null,"Output"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"['!', 'service timestamps debug datetime msec localtime show-timezone year', 'service timestamps log datetime msec localtime show-timezone year', 'service password-encryption', 'service sequence-numbers', '!', 'no ip domain lookup', '!', 'ip ssh version 2', '!']\n\n")),Object(r.b)("h2",{id:"seek"},Object(r.b)("inlineCode",{parentName:"h2"},"seek")),Object(r.b)("p",null,"Until now, file had to be reopened to read it again. This is because after reading methods a cursor is at the end of the file. And second reading returns an empty string."),Object(r.b)("p",null,"To read information from a file again you need to use the ",Object(r.b)("inlineCode",{parentName:"p"},"seek")," method which moves the cursor to the desired position."),Object(r.b)("p",null,"Example of file opening and content reading:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},'f = open("r1.txt")\n\nprint(f.read())\n')),Object(r.b)("p",null,"Output"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"!\nservice timestamps debug datetime msec localtime show-timezone year\nservice timestamps log datetime msec localtime show-timezone year\nservice password-encryption\nservice sequence-numbers\n!\nno ip domain lookup\n!\nip ssh version 2\n!\n\n")),Object(r.b)("p",null,"If you call ",Object(r.b)("inlineCode",{parentName:"p"},"read")," method again an empty string returns:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"print(f.read())In [17]: \n")),Object(r.b)("p",null,"Output"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"")),Object(r.b)("p",null,"But with ",Object(r.b)("inlineCode",{parentName:"p"},"seek")," method you can go to the beginning of file (0 means the beginning of file):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"f.seek(0)\n")),Object(r.b)("p",null,"Once cursor has been set to the beginning of file you can read the content again:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},'f = open("r1.txt")\n\nprint(f.read())\nprint(55*"-")\nf.seek(0)\nprint(f.read())\n')),Object(r.b)("p",null,"Output"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"!\nservice timestamps debug datetime msec localtime show-timezone year\nservice timestamps log datetime msec localtime show-timezone year\nservice password-encryption\nservice sequence-numbers\n!\nno ip domain lookup\n!\nip ssh version 2\n!\n-------------------------------------------------------\n!\nservice timestamps debug datetime msec localtime show-timezone year\nservice timestamps log datetime msec localtime show-timezone year\nservice password-encryption\nservice sequence-numbers\n!\nno ip domain lookup\n!\nip ssh version 2\n!\n")))}p.isMDXComponent=!0},280:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return u}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),p=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=p(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,u=m["".concat(o,".").concat(d)]||m[d]||b[d]||r;return t?i.a.createElement(u,l(l({ref:n},c),{},{components:t})):i.a.createElement(u,l({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);