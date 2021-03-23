(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{267:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(8),a=(n(0),n(281)),s={id:"os",title:"Os",sidebar_label:"Os",slug:"os",custom_edit_url:null},i={unversionedId:"python/useful_modules/os",id:"python/useful_modules/os",isDocsHomePage:!1,title:"Os",description:"Module os allows working with filesystem, environment and managing processes.",source:"@site/docs/python/useful_modules/2_os.md",slug:"/python/useful_modules/os",permalink:"/tr/docs/python/useful_modules/os",editUrl:null,version:"current",sidebar_label:"Os",sidebar:"someSidebar",previous:{title:"Subprocess",permalink:"/tr/docs/python/useful_modules/subprocess"},next:{title:"IPaddress",permalink:"/tr/docs/python/useful_modules/ipaddress"}},l=[],c={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Module ",Object(a.b)("inlineCode",{parentName:"p"},"os")," allows working with filesystem, environment and managing processes."),Object(a.b)("p",null,"This subsection addresses only several useful features. For a more complete description of capabilities of module please refer to ",Object(a.b)("a",{parentName:"p",href:"https://docs.python.org/3/library/os.html"},"documentation")," or ",Object(a.b)("a",{parentName:"p",href:"https://pymotw.com/3/os/"},"article on Pymotw"),"."),Object(a.b)("p",null,"Module ",Object(a.b)("inlineCode",{parentName:"p"},"os")," allows you to create directories:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [1]: import os\n\nIn [2]: os.mkdir('test')\n\nIn [3]: ls -ls\ntotal 0\n0 drwxr-xr-x  2 nata  nata  68 Jan 23 18:58 test/\n")),Object(a.b)("p",null,"In addition, module contains relevant existence checks. For example, if you try to re-create a directory, an error will occur:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [4]: os.mkdir('test')\n---------------------------------------------------------------------------\nFileExistsError                           Traceback (most recent call last)\n<ipython-input-4-cbf3b897c095> in <module>()\n----\x3e 1 os.mkdir('test')\n\nFileExistsError: [Errno 17] File exists: 'test'\n")),Object(a.b)("p",null,"In this case, testing with ",Object(a.b)("inlineCode",{parentName:"p"},"os.path.exists")," is useful:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [5]: os.path.exists('test')\nOut[5]: True\n\nIn [6]: if not os.path.exists('test'):\n   ...:     os.mkdir('test')\n   ...:\n")),Object(a.b)("p",null,"Method ",Object(a.b)("inlineCode",{parentName:"p"},"listdir")," allows you to view the content of directory:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [7]: os.listdir('.')\nOut[7]: ['cover3.png', 'dir2', 'dir3', 'README.txt', 'test']\n")),Object(a.b)("p",null,"By checking ",Object(a.b)("inlineCode",{parentName:"p"},"os.path.isdir")," and ",Object(a.b)("inlineCode",{parentName:"p"},"os.path.isfile")," you can get a separate list of files and list of directories:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [8]: dirs = [d for d in os.listdir('.') if os.path.isdir(d)]\n\nIn [9]: dirs\nOut[9]: ['dir2', 'dir3', 'test']\n\nIn [10]: files = [f for f in os.listdir('.') if os.path.isfile(f)]\n\nIn [11]: files\nOut[11]: ['cover3.png', 'README.txt']\n")),Object(a.b)("p",null,"Also in module there are separate methods for working with paths:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [12]: file = 'Programming/PyNEng/book/25_additional_info/README.md'\n\nIn [13]: os.path.basename(file)\nOut[13]: 'README.md'\n\nIn [14]: os.path.dirname(file)\nOut[14]: 'Programming/PyNEng/book/25_additional_info'\n\nIn [15]: os.path.split(file)\nOut[15]: ('Programming/PyNEng/book/25_additional_info', 'README.md')\n")))}p.isMDXComponent=!0},281:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(s,".").concat(b)]||u[b]||d[b]||a;return n?o.a.createElement(m,i(i({ref:t},c),{},{components:n})):o.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);