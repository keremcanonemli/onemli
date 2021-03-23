(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(8),s=(n(0),n(281)),o={id:"tasks",title:"Tasks",sidebar_label:"Tasks",slug:"tasks",custom_edit_url:null},i={unversionedId:"python/useful_modules/tasks",id:"python/useful_modules/tasks",isDocsHomePage:!1,title:"Tasks",description:"All tasks and additional files can be downloaded from repository.",source:"@site/docs/python/useful_modules/6_tasks.md",slug:"/python/useful_modules/tasks",permalink:"/tr/docs/python/useful_modules/tasks",editUrl:null,version:"current",sidebar_label:"Tasks",sidebar:"someSidebar",previous:{title:"Pprint",permalink:"/tr/docs/python/useful_modules/pprint"},next:{title:"Iterable",permalink:"/tr/docs/python/iterator_generator/iterable"}},l=[{value:"Task 12.1",id:"task-121",children:[]},{value:"Task 12.2",id:"task-122",children:[]},{value:"Task 12.3",id:"task-123",children:[]}],c={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"All tasks and additional files can be downloaded from ",Object(s.b)("a",{parentName:"p",href:"https://github.com/natenka/pyneng-examples-exercises-en/"},"repository"),"."),Object(s.b)("p",null,"Warning"),Object(s.b)("p",null,"Starting from section \u201c4. Data types in Python\u201d there are automated tests for testing tasks. They help to check whether everything matches the task, and also give feedback on what does not correspond to the task. As a rule, after the first period of adaptation to tests, it becomes easier to do tasks with tests. Testing is done using the pyneng utility. ",Object(s.b)("a",{parentName:"p",href:"https://pyneng.readthedocs.io/en/latest/book/additional_info/pyneng.html#additional-info-pyneng"},"Learn more about how to work with the pyneng utility"),"."),Object(s.b)("h2",{id:"task-121"},"Task 12.1"),Object(s.b)("p",null,"Create a ping_ip_addresses function that checks if IP addresses are pingable."),Object(s.b)("p",null,"The function expects a list of IP addresses as an argument."),Object(s.b)("p",null,"The function must return a tuple with two lists:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"list of available IP addresses"),Object(s.b)("li",{parentName:"ul"},"list of unavailable IP addresses")),Object(s.b)("p",null,"To check the availability of an IP address, use the ping command."),Object(s.b)("p",null,"Restriction: All tasks must be done using the topics covered in this and previous chapters."),Object(s.b)("h2",{id:"task-122"},"Task 12.2"),Object(s.b)("p",null,"The ping_ip_addresses function from task 12.1 only accepts a list of addresses, but it would be convenient to be able to specify addresses using a range, for example 192.168.100.1-10."),Object(s.b)("p",null,"In this task, you need to create a function convert_ranges_to_ip_list that converts a list of IP addresses in different formats into a list where each IP address is listed separately."),Object(s.b)("p",null,"The function expects as an argument a list containing IP addresses and/or ranges of IP addresses."),Object(s.b)("p",null,"List items can be in the format:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"10.1.1.1"),Object(s.b)("li",{parentName:"ul"},"10.1.1.1-10.1.1.10"),Object(s.b)("li",{parentName:"ul"},"10.1.1.1-10")),Object(s.b)("p",null,"If the address is specified as a range, the range must be expanded into individual addresses, including the last address in the range. To simplify the task, we can assume that only the last octet of the address changes in the range."),Object(s.b)("p",null,"The function returns a list of IP addresses."),Object(s.b)("p",null,"For example, if you pass the following list to the convert_ranges_to_ip_list function:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"['8.8.4.4', '1.1.1.1-3', '172.21.41.128-172.21.41.132']\n")),Object(s.b)("p",null,"The function should return a list like this:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"['8.8.4.4', '1.1.1.1', '1.1.1.2', '1.1.1.3', '172.21.41.128',\n '172.21.41.129', '172.21.41.130', '172.21.41.131', '172.21.41.132']\n")),Object(s.b)("h2",{id:"task-123"},"Task 12.3"),Object(s.b)("p",null,"Create a function print_ip_table that prints a table of available and unavailable IP addresses."),Object(s.b)("p",null,"The function expects two lists as arguments:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"list of available IP addresses"),Object(s.b)("li",{parentName:"ul"},"list of unavailable IP addresses")),Object(s.b)("p",null,"The result of the function is printing a table to the stdout:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"Reachable    Unreachable\n-----------  -------------\n10.1.1.1     10.1.1.7\n10.1.1.2     10.1.1.8\n             10.1.1.9\n")))}u.isMDXComponent=!0},281:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,f=p["".concat(o,".").concat(b)]||p[b]||d[b]||s;return n?r.a.createElement(f,i(i({ref:t},c),{},{components:n})):r.a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);