(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{251:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(8),a=(n(0),n(281)),c={id:"further_reading",title:"Further Reading",sidebar_label:"Further Reading",slug:"further_reading",custom_edit_url:null},u={unversionedId:"python/19_concurrent_connections/further_reading",id:"python/19_concurrent_connections/further_reading",isDocsHomePage:!1,title:"Further Reading",description:"GIL",source:"@site/docs/python/19_concurrent_connections/7_further_reading.md",slug:"/python/19_concurrent_connections/further_reading",permalink:"/tr/docs/python/19_concurrent_connections/further_reading",editUrl:null,version:"current",sidebar_label:"Further Reading",sidebar:"someSidebar",previous:{title:"Module Concurrent.Futures",permalink:"/tr/docs/python/19_concurrent_connections/module_concurrent_futures"},next:{title:"Tasks",permalink:"/tr/docs/python/19_concurrent_connections/tasks"}},l=[{value:"GIL",id:"gil",children:[]},{value:"concurrent.futures",id:"concurrentfutures",children:[]},{value:"Useful questions and answers on stackoverflow",id:"useful-questions-and-answers-on-stackoverflow",children:[]}],i={toc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"gil"},"GIL"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://docs.python.org/3/faq/library.html#can-t-we-get-rid-of-the-global-interpreter-lock"},"Can\u2019t we get rid of the Global Interpreter Lock?")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"http://www.dabeaz.com/GIL/"},"Understanding the Python GIL")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"http://jessenoller.com/blog/2009/02/01/python-threads-and-the-global-interpreter-lock"},"Python threads and the GIL"))),Object(a.b)("h2",{id:"concurrentfutures"},"concurrent.futures"),Object(a.b)("p",null,"Python documentation:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://docs.python.org/3/library/concurrent.futures.html"},"concurrent.futures \u2014 Launching parallel tasks")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.python.org/dev/peps/pep-3148/"},"PEP 3148")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://pymotw.com/3/concurrent.futures/index.html"},"PyMOTW. concurrent.futures \u2014 Manage Pools of Concurrent Tasks"))),Object(a.b)("p",null,"Articles:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"http://masnun.com/2016/03/29/python-a-quick-introduction-to-the-concurrent-futures-module.html"},"A quick introduction to the concurrent.futures module")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"http://eli.thegreenplace.net/2013/01/16/python-paralellizing-cpu-bound-tasks-with-concurrent-futures"},"Python - paralellizing CPU-bound tasks with concurrent.futures")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.ploggingdev.com/2017/01/concurrent.futures-in-python-3/"},"concurrent.futures in Python 3"))),Object(a.b)("h2",{id:"useful-questions-and-answers-on-stackoverflow"},"Useful questions and answers on stackoverflow"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://stackoverflow.com/a/23816818"},"How many processes should I run in parallel?")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://stackoverflow.com/questions/481970/how-many-threads-is-too-many"},"How many threads is too many?"))))}s.isMDXComponent=!0},281:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),s=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,d=p["".concat(c,".").concat(f)]||p[f]||b[f]||a;return n?o.a.createElement(d,u(u({ref:t},i),{},{components:n})):o.a.createElement(d,u({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,c[1]=u;for(var i=2;i<a;i++)c[i]=n[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);