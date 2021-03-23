(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(8),s=(n(0),n(281)),a={id:"processes_and_threads_in_python",title:"Processes And Threads In Python (Cpython)",sidebar_label:"Processes And Threads In Python (Cpython)",slug:"processes_and_threads_in_python",custom_edit_url:null},i={unversionedId:"python/19_concurrent_connections/processes_and_threads_in_python",id:"python/19_concurrent_connections/processes_and_threads_in_python",isDocsHomePage:!1,title:"Processes And Threads In Python (Cpython)",description:"First, we need to work out the terms:",source:"@site/docs/python/19_concurrent_connections/2_processes_and_threads.md",slug:"/python/19_concurrent_connections/processes_and_threads_in_python",permalink:"/docs/python/19_concurrent_connections/processes_and_threads_in_python",editUrl:null,version:"current",sidebar_label:"Processes And Threads In Python (Cpython)",sidebar:"someSidebar",previous:{title:"Measure Script Execution Time",permalink:"/docs/python/19_concurrent_connections/measure_script_execution_time"},next:{title:"Number Of Threads",permalink:"/docs/python/19_concurrent_connections/number_of_threads"}},c=[{value:"Processes",id:"processes",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"First, we need to work out the terms:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"process - roughly speaking, it\u2019s a launched program. Separate resources are allocated to the process: memory, processor time"),Object(s.b)("li",{parentName:"ul"},"thread - execution unit in the process. Thread share resources of the process to which they relate.")),Object(s.b)("p",null,"Python (or, more precisely, CPython - the implementation used in the book) is optimized to work in single-threaded mode. This is good if program uses only one thread. And, at the same time, Python has certain nuances of running in multithreaded mode. This is because CPython uses GIL (global interpreter lock)."),Object(s.b)("p",null,"GIL does not allow multiple threads to execute Python code at the same time. If you don\u2019t go into detail, GIL can be visualized as a sort of flag that carried over from thread to thread. Whoever has the flag can do the job. The flag is transmitted either every Python instruction or, for example, when some type of input-output operation is performed."),Object(s.b)("p",null,"Therefore, different threads will not run in parallel and the program will simply switch between them executing them at different times. However, if in the program there is some \u201cwait\u201d (packages from the network, user request, time.sleep pause), then in such program the threads will be executed as if in parallel. This is because during such pauses the flag (GIL) can be passed to another thread."),Object(s.b)("p",null,"That is, threads are well suited for tasks that involve input-output (IO) operations:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Connection to equipment and network connectivity in general"),Object(s.b)("li",{parentName:"ul"},"Working with file system"),Object(s.b)("li",{parentName:"ul"},"Downloading files")),Object(s.b)("p",null,"Note"),Object(s.b)("p",null,"In the Internet it is often possible to find phrases like \xabIn Python it is better not to use threads at all\xbb. Unfortunately, such phrases are not always written in context, namely that it is about specific tasks that are tied to CPU."),Object(s.b)("p",null,"The next sections discuss how to use threads to connect via Telnet/SSH. Script execution time will be checked comparing the sequential execution and execution using processes."),Object(s.b)("h2",{id:"processes"},"Processes"),Object(s.b)("p",null,"Processes allow to execute tasks on different computer cores. This is important for tasks that are tied to CPU. For each process a copy of resources is created, a memory is allocated, each process has its own GIL. This also makes processes \u201cheavier\u201d than threads."),Object(s.b)("p",null,"In addition, the number of processes that run in parallel depends on the number of cores and CPU and is usually estimated in dozens, while the number of threads for input-output operations can be estimated in hundreds."),Object(s.b)("p",null,"Processes and threads can be combined but this complicates the program and at the base level for input-output operations it is better to stop at threads."),Object(s.b)("p",null,"Note"),Object(s.b)("p",null,"Combining threads and processes, i.e., starting a process in a program and then starting threads inside it, makes troubleshooting difficult. And I\u2019d recomend not use that option."),Object(s.b)("p",null,"Although it is usually better to use threads for input-output tasks, for some modules it is better to use processes because they may not work correctly with threads."),Object(s.b)("p",null,"Note"),Object(s.b)("p",null,"In addition to processes and threads, there is another version of concurrent connections to device: asynchronous programming. This option is not covered in the book."))}u.isMDXComponent=!0},281:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,b=p["".concat(a,".").concat(d)]||p[d]||h[d]||s;return n?o.a.createElement(b,i(i({ref:t},l),{},{components:n})):o.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);