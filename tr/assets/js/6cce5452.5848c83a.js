(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(8),o=(n(0),n(280)),a={id:"working_with_files",title:"Working With Files",sidebar_label:"7.0 Working With Files",slug:"working_with_files",custom_edit_url:null},l={unversionedId:"python/files/working_with_files",id:"python/files/working_with_files",isDocsHomePage:!1,title:"Working With Files",description:"In real life, in order to make full use of everything covered before this section you need to understand how to work with files.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/python/files/0_overview.md",slug:"/python/files/working_with_files",permalink:"/tr/docs/python/files/working_with_files",editUrl:null,version:"current",sidebar_label:"7.0 Working With Files",sidebar:"someSidebar",previous:{title:"Tasks",permalink:"/tr/docs/python/control_structures/tasks"},next:{title:"File Opening",permalink:"/tr/docs/python/files/file_opening"}},s=[],c={toc:s};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In real life, in order to make full use of everything covered before this section you need to understand how to work with files."),Object(o.b)("p",null,"When working with network equipment (and not only), files can be:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"configurations (simple, non-structured text files)",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"They are discussed in this section"))),Object(o.b)("li",{parentName:"ul"},"configuration templates",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"usually a special file format."),Object(o.b)("li",{parentName:"ul"},"section ",Object(o.b)("a",{parentName:"li",href:"https://pyneng.readthedocs.io/en/latest/book/21_jinja2/"},"Jinja configuration temlates")," discusses the use of Jinja2 to create configuration templates"))),Object(o.b)("li",{parentName:"ul"},"files with connection options",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"usually they are structured files in some particular format: YAML, JSON, CSV",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"section ",Object(o.b)("a",{parentName:"li",href:"https://pyneng.readthedocs.io/en/latest/book/17_serialization/"},"Data serialization")," discusses how to handle such files"))))),Object(o.b)("li",{parentName:"ul"},"other Python scripts",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"section ",Object(o.b)("a",{parentName:"li",href:"https://pyneng.readthedocs.io/en/latest/book/11_modules/"},"Modules")," discusses how to work with modules (other Python scripts)")))),Object(o.b)("p",null,"This section covers simple text files. For example, Cisco configuration file."),Object(o.b)("p",null,"There are several aspects to working with files:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"opening/closing"),Object(o.b)("li",{parentName:"ul"},"reading"),Object(o.b)("li",{parentName:"ul"},"writing")),Object(o.b)("p",null,"This section covers only the minimum required for working with files. More in ",Object(o.b)("a",{parentName:"p",href:"https://docs.python.org/3/library/stdtypes.html#bltin-file-objects"},"Python documentation"),"."))}u.isMDXComponent=!0},280:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,m=p["".concat(a,".").concat(f)]||p[f]||b[f]||o;return n?i.a.createElement(m,l(l({ref:t},c),{},{components:n})):i.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);