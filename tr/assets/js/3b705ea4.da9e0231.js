(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{135:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return c}));var n=r(3),o=r(8),a=(r(0),r(280)),i={id:"regular_expressions",title:"Regular Expressions",sidebar_label:"14.0 Regular Expressions",slug:"regular_expressions",custom_edit_url:null},s={unversionedId:"python/regex/regular_expressions",id:"python/regex/regular_expressions",isDocsHomePage:!1,title:"Regular Expressions",description:"A regular expression is a sequence of ordinary and special characters. This sequence specifies a template that is later used to find search pattern.",source:"@site/docs/python/regex/0_overview.md",slug:"/python/regex/regular_expressions",permalink:"/tr/docs/python/regex/regular_expressions",editUrl:null,version:"current",sidebar_label:"14.0 Regular Expressions",sidebar:"someSidebar",previous:{title:"Further Reading",permalink:"/tr/docs/python/iterator_generator/further_reading"},next:{title:"Regular Expression Syntax",permalink:"/tr/docs/python/regex/regular_expression_syntax"}},l=[],u={toc:l};function c(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A regular expression is a sequence of ordinary and special characters. This sequence specifies a template that is later used to find search pattern."),Object(a.b)("p",null,"When working with network equipment, regular expressions can be used, for example, to:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"retrieve information from show command output"),Object(a.b)("li",{parentName:"ul"},"select a portion of lines from show command output that matches the template"),Object(a.b)("li",{parentName:"ul"},"check whether there are certain settings in configuration")),Object(a.b)("p",null,"A few examples are:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"After processing the output of show version command, you can collect information about OS version and uptime."),Object(a.b)("li",{parentName:"ul"},"get from log file the lines that correspond to the template."),Object(a.b)("li",{parentName:"ul"},"get from configuration those interfaces that do not have a description")),Object(a.b)("p",null,"In addition, in network equipment the regular expressions can be used to filter the output of any show commands."),Object(a.b)("p",null,"In general, use of regular expressions will involve getting part of a text out of a large output. But that\u2019s not the only thing they can be used for. For example, regular expressions can be used to perform string replacements or for dividing a string."),Object(a.b)("p",null,"These areas of use overlap with methods that apply to strings. And if problemi is clear and simple to solve with string methods, it is better to use them. This code will be easier to understand and, in addition, string methods work faster."),Object(a.b)("p",null,"But string methods may not solve all problems or may make problem much harder to solve. Regular expressions can help in this case."))}c.isMDXComponent=!0},280:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),c=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=n,d=p["".concat(i,".").concat(f)]||p[f]||m[f]||a;return r?o.a.createElement(d,s(s({ref:t},u),{},{components:r})):o.a.createElement(d,s({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);