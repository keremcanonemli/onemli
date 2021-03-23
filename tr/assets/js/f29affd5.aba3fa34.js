(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{272:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(8),o=(n(0),n(281)),c={id:"measure_script_execution_time",title:"Measure Script Execution Time",sidebar_label:"Measure Script Execution Time",slug:"measure_script_execution_time",custom_edit_url:null},a={unversionedId:"python/concurrent_connections/measure_script_execution_time",id:"python/concurrent_connections/measure_script_execution_time",isDocsHomePage:!1,title:"Measure Script Execution Time",description:"There are several options for estimating execution time of the script. The simplest options are:",source:"@site/docs/python/concurrent_connections/1_measure_script_exec_time.md",slug:"/python/concurrent_connections/measure_script_execution_time",permalink:"/tr/docs/python/concurrent_connections/measure_script_execution_time",editUrl:null,version:"current",sidebar_label:"Measure Script Execution Time",sidebar:"someSidebar",previous:{title:"Concurent Connections To Multiple Devices",permalink:"/tr/docs/python/concurrent_connections/concurent_connections_to_multiple_devices"},next:{title:"Processes And Threads In Python (Cpython)",permalink:"/tr/docs/python/concurrent_connections/processes_and_threads_in_python"}},u=[{value:"<code>time</code>",id:"time",children:[]},{value:"<code>datetime</code>",id:"datetime",children:[]}],s={toc:u};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"There are several options for estimating execution time of the script. The simplest options are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Linux time utility"),Object(o.b)("li",{parentName:"ul"},"and Python datetime module")),Object(o.b)("p",null,"When measuring the execution time of script in this case, high accuracy is not important. The main thing is to compare the execution time of script in different variants."),Object(o.b)("h2",{id:"time"},Object(o.b)("inlineCode",{parentName:"h2"},"time")),Object(o.b)("p",null,"Linux ",Object(o.b)("inlineCode",{parentName:"p"},"time")," utility allows you to measure the execution time of a script. To use ",Object(o.b)("inlineCode",{parentName:"p"},"time")," utility it is enough to write ",Object(o.b)("inlineCode",{parentName:"p"},"time")," before starting the script:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ time python thread_paramiko.py\n...\nreal    0m4.712s\nuser    0m0.336s\nsys     0m0.064s\n")),Object(o.b)("p",null,"We are interested in real time. In this case, it\u2019s 4.7 seconds."),Object(o.b)("h2",{id:"datetime"},Object(o.b)("inlineCode",{parentName:"h2"},"datetime")),Object(o.b)("p",null,"The second option is a ",Object(o.b)("inlineCode",{parentName:"p"},"datetime")," module. This module allows working with time and dates in Python."),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"from datetime import datetime\nimport time\n\nstart_time = datetime.now()\n\n#Code is running here\ntime.sleep(5)\n\nprint(datetime.now() - start_time)\n")),Object(o.b)("p",null,"Output:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ python test.py\n0:00:05.004949\n")))}p.isMDXComponent=!0},281:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(n),d=r,b=l["".concat(c,".").concat(d)]||l[d]||m[d]||o;return n?i.a.createElement(b,a(a({ref:t},s),{},{components:n})):i.a.createElement(b,a({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var s=2;s<o;s++)c[s]=n[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);