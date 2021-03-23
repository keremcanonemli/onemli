(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{228:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return h}));var n=r(3),o=r(8),a=(r(0),r(280)),i={id:"thread_safety",title:"Thread Safety",sidebar_label:"19.4 Thread Safety",slug:"thread_safety",custom_edit_url:null},s={unversionedId:"python/concurrent_connections/thread_safety",id:"python/concurrent_connections/thread_safety",isDocsHomePage:!1,title:"Thread Safety",description:"When working with threads there are several recommendations and rules. If they are respected, it is easier to work with threads and it is likely that there will be no problem with threads. Of course, from time to time, there will be tasks that will require violations of recommendations. However, before doing so, it is better to try to meet the task by adhering to recommendations. If this is not possible, then we should look for ways to secure the solution so that the data is not damaged.",source:"@site/docs/python/concurrent_connections/4_thread_safety.md",slug:"/python/concurrent_connections/thread_safety",permalink:"/tr/docs/python/concurrent_connections/thread_safety",editUrl:null,version:"current",sidebar_label:"19.4 Thread Safety",sidebar:"someSidebar",previous:{title:"Number Of Threads",permalink:"/tr/docs/python/concurrent_connections/number_of_threads"},next:{title:"Module Logging",permalink:"/tr/docs/python/concurrent_connections/module_logging"}},l=[],c={toc:l};function h(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"When working with threads there are several recommendations and rules. If they are respected, it is easier to work with threads and it is likely that there will be no problem with threads. Of course, from time to time, there will be tasks that will require violations of recommendations. However, before doing so, it is better to try to meet the task by adhering to recommendations. If this is not possible, then we should look for ways to secure the solution so that the data is not damaged."),Object(a.b)("p",null,"Very important feature of working with threads: with a small number of threads and small test tasks \u201ceverything works\u201d. For example, printing output when connected to 20 devices in 5 threads will work normally. But when connected to a large number of devices with a large number of threads, it turns out that sometimes messages overlap. This peculiarity appears very often, so do not trust the version when \u201ceverything works\u201d on basic examples, follow the rules of working with threads."),Object(a.b)("p",null,"Before dealing with rules we have to deal with term \u201cthread safety\u201d. Thread safety is a concept that describes work with multithreaded programs. Code is considered to be thread-safe if it can work normally with multiple threads."),Object(a.b)("p",null,"For example, ",Object(a.b)("inlineCode",{parentName:"p"},"print")," function is not thread-safe. This is demonstrated by the fact that when code executes ",Object(a.b)("inlineCode",{parentName:"p"},"print")," from different threads, messages in the output can be mixed. There could be output with a part of message from the first thread, then a part from the second thread, then a part from the first thread, and so on. That is, ",Object(a.b)("inlineCode",{parentName:"p"},"print")," function does not work normally (as it should be) in thread. In this case, it is said that ",Object(a.b)("inlineCode",{parentName:"p"},"print")," function is not thread-safe."),Object(a.b)("p",null,"In general, there is no problem if each thread works with its own resources. For example, each thread writes data to its own file. However, this is not always possible or can complicate the solution."),Object(a.b)("p",null,"Note"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"print")," has problems because we write from different threads into one standard output stream but ",Object(a.b)("inlineCode",{parentName:"p"},"print")," is not thread-safe."),Object(a.b)("p",null,"If you have to write from different threads to the same resource, there are two options:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Write to the same resource after job in thread is finished. For example, a function has been executed in threads 1, 2 and 3, its result is obtained in turn (consecutively) from each thread, and then written into a file."),Object(a.b)("li",{parentName:"ol"},"Use a thread-safe alternative (not always available and/or easy). For example, use a logging module instead of ",Object(a.b)("inlineCode",{parentName:"li"},"print")," function.")),Object(a.b)("p",null,"Recommendations when working with threads:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Do not write to the same resource from different threads if resource or what you write is not intended for multithreading. It is easy to find out by google something like \u201cpython write to file from threads\u201d.")),Object(a.b)("blockquote",null,Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"There are nuances to this recommendation. For example, you can write from different threads to the same file if you use a Lock or a thread-safe queue. These options are often difficult to use and are not covered in the book. It\u2019s likely that 95 percent of problems you\u2019ll be facing can be solved without them."),Object(a.b)("li",{parentName:"ul"},"This category includes writing/changing lists/dictionaries/sets from different threads. These objects are inherently thread-safe but there is no guarantee that when you change the same list from different threads, data in the list will be correct. If you want to use a common container for different threads, use queue from Queue module. It\u2019s thread-safe and you can work with it from different threads."))),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"If there is a possibility, avoid communication between threads in the course of their work. This is not an easy task and it is best to avoid it."),Object(a.b)("li",{parentName:"ol"},"Follow the KISS (Keep it simple, stupid) principle - try to make solution as simple as possible.")),Object(a.b)("p",null,"Note"),Object(a.b)("p",null,"These recommendations are generally written for those who are just beginning to program on Python. However, they tend to be relevant to most programmers who write applications for users rather than frameworks."),Object(a.b)("p",null,"Module concurrent.futures which will be covered further, simplifies implementation of the first principle \u201cDo not write to the same resource from different threads\u2026 \u201c. The module interface itself encourages this, but of course it does not prohibit breaking it."),Object(a.b)("p",null,"However, before getting to know concurrent.futures, you should read fundamentals of logging module. It will be used instead of ",Object(a.b)("inlineCode",{parentName:"p"},"print")," function which is not thread-safe."))}h.isMDXComponent=!0},280:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return p}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),h=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=h(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=h(r),f=n,p=u["".concat(i,".").concat(f)]||u[f]||d[f]||a;return r?o.a.createElement(p,s(s({ref:t},c),{},{components:r})):o.a.createElement(p,s({ref:t},c))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);