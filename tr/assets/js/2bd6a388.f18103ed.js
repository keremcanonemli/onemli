(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{114:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return d}));var r=t(3),o=t(8),a=(t(0),t(280)),i={id:"number_of_threads",title:"Number Of Threads",sidebar_label:"19.3 Number Of Threads",slug:"number_of_threads",custom_edit_url:null},s={unversionedId:"python/concurrent_connections/number_of_threads",id:"python/concurrent_connections/number_of_threads",isDocsHomePage:!1,title:"Number Of Threads",description:"How many threads you need to use when connecting to device? There is no clear answer to this question. The number of threads depends at least on which computer runs the script (OS, memory, processor), on network itself (delays).",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/python/concurrent_connections/3_number_of_threads.md",slug:"/python/concurrent_connections/number_of_threads",permalink:"/tr/docs/python/concurrent_connections/number_of_threads",editUrl:null,version:"current",sidebar_label:"19.3 Number Of Threads",sidebar:"someSidebar",previous:{title:"Processes And Threads In Python (Cpython)",permalink:"/tr/docs/python/concurrent_connections/processes_and_threads_in_python"},next:{title:"Thread Safety",permalink:"/tr/docs/python/concurrent_connections/thread_safety"}},c=[],u={toc:c};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"How many threads you need to use when connecting to device? There is no clear answer to this question. The number of threads depends at least on which computer runs the script (OS, memory, processor), on network itself (delays)."),Object(a.b)("p",null,"So instead of looking for the perfect number of threads, you have to measure the number on your computer, your network, your script. For example, in the examples to this section there is a script netmiko_count_threads.py that runs the same function with different threads and displays runtime information. Function by default uses a small number of devices from the devices_all.yaml file and a small number of threads, but it can be adapted to any number based on your network."),Object(a.b)("p",null,"Example of connecting to 5,000 devices with different number of threads:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"Number of devices: 5460\n\n#30 threads\n----------------------------------------\nExecution time: 0:09:17.187867\n\n#50 threads\n----------------------------------------\nExecution time: 0:09:17.604252\n\n#70 threads\n----------------------------------------\nExecution time: 0:09:17.117332\n\n#90 threads\n----------------------------------------\nExecution time: 0:09:16.693774\n\n#100 threads\n----------------------------------------\nExecution time: 0:09:17.083294\n\n#120 threads\n----------------------------------------\nExecution time: 0:09:17.945270\n\n#140 threads\n----------------------------------------\nExecution time: 0:09:18.114993\n\n#200 threads\n----------------------------------------\nExecution time: 0:11:12.951247\n\n#300 threads\n----------------------------------------\nExecution time: 0:14:03.790432\n")),Object(a.b)("p",null,"In this case, the execution time with 30 threads and 120 threads is the same and after time only increases. This is because switching between threads also takes a lot of time and the more streams the more switching. And from some moment it makes no sense to increase number of threads. For this example (this PC, code and number of devices), the optimal number is approximately 50 threads. We\u2019re not taking 30 here in order to make a reserve."))}d.isMDXComponent=!0},280:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return h}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),d=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=d(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=d(t),p=r,h=m["".concat(i,".").concat(p)]||m[p]||l[p]||a;return t?o.a.createElement(h,s(s({ref:n},u),{},{components:t})):o.a.createElement(h,s({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);