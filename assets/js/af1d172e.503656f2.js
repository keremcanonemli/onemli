(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{224:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(8),a=(n(0),n(280)),c={id:"unicode",title:"Unicode",sidebar_label:"16.0 Unicode",slug:"unicode",custom_edit_url:null},i={unversionedId:"python/unicode/unicode",id:"python/unicode/unicode",isDocsHomePage:!1,title:"Unicode",description:"Programs we write are not isolated. They download data from the Internet, read and write data on disk, transmit data over the network.",source:"@site/docs/python/unicode/0_overview.md",slug:"/python/unicode/unicode",permalink:"/docs/python/unicode/unicode",editUrl:null,version:"current",sidebar_label:"16.0 Unicode",sidebar:"someSidebar",previous:{title:"Tasks",permalink:"/docs/python/module_re/tasks"},next:{title:"Unicode Standard",permalink:"/docs/python/unicode/unicode_standard"}},u=[],s={toc:u};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Programs we write are not isolated. They download data from the Internet, read and write data on disk, transmit data over the network."),Object(a.b)("p",null,"So it\u2019s very important to understand the difference between how a computer stores and transmits data and how that data is perceived by a person. We take text, computer takes bytes."),Object(a.b)("p",null,"Python 3, respectively, has two concepts:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"text - an immutable sequence of unicode characters. Type string (str) is used to store these characters"),Object(a.b)("li",{parentName:"ul"},"data - an immutable sequence of bytes. Type bytes is used for storage")),Object(a.b)("p",null,"Note"),Object(a.b)("p",null,"It is more correct to say that text is an immutable sequence of Unicode codes (codepoints)."))}d.isMDXComponent=!0},280:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=d(n),b=r,f=l["".concat(c,".").concat(b)]||l[b]||p[b]||a;return n?o.a.createElement(f,i(i({ref:t},s),{},{components:n})):o.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);