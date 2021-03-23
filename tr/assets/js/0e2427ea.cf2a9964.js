(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{280:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),p=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},h=function(e){var t=p(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,r=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),h=p(n),b=a,u=h["".concat(r,".").concat(b)]||h[b]||d[b]||s;return n?o.a.createElement(u,c(c({ref:t},i),{},{components:n})):o.a.createElement(u,c({ref:t},i))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var i=2;i<s;i++)r[i]=n[i];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(8),s=(n(0),n(280)),r={id:"tasks",title:"Tasks",sidebar_label:"23.5 Tasks",slug:"tasks",custom_edit_url:null},c={unversionedId:"python/oop_special_methods/tasks",id:"python/oop_special_methods/tasks",isDocsHomePage:!1,title:"Tasks",description:"All tasks and additional files can be downloaded from repository.",source:"@site/docs/python/oop_special_methods/5_tasks.md",slug:"/python/oop_special_methods/tasks",permalink:"/tr/docs/python/oop_special_methods/tasks",editUrl:null,version:"current",sidebar_label:"23.5 Tasks",sidebar:"someSidebar",previous:{title:"Protocols",permalink:"/tr/docs/python/oop_special_methods/protocols"},next:{title:"Inheritance Basics",permalink:"/tr/docs/python/oop_inheritance/inheritance_basics"}},l=[{value:"Task 23.1",id:"task-231",children:[]},{value:"Task 23.1a",id:"task-231a",children:[]},{value:"Task 23.2",id:"task-232",children:[]},{value:"Task 23.3",id:"task-233",children:[]},{value:"Task 23.3a",id:"task-233a",children:[]}],i={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"All tasks and additional files can be downloaded from ",Object(s.b)("a",{parentName:"p",href:"https://github.com/natenka/pyneng-examples-exercises-en/"},"repository"),"."),Object(s.b)("p",null,"Warning"),Object(s.b)("p",null,"Starting from section \u201c4. Data types in Python\u201d there are automated tests for testing tasks. They help to check whether everything matches the task, and also give feedback on what does not correspond to the task. As a rule, after the first period of adaptation to tests, it becomes easier to do tasks with tests. Testing is done using the pyneng utility. ",Object(s.b)("a",{parentName:"p",href:"https://pyneng.readthedocs.io/en/latest/book/additional_info/pyneng.html#additional-info-pyneng"},"Learn more about how to work with the pyneng utility"),"."),Object(s.b)("h2",{id:"task-231"},"Task 23.1"),Object(s.b)("p",null,"In this task, you must create an IPAddress class."),Object(s.b)("p",null,"When creating an instance of a class, the IP address and mask are passed as an argument, and the correctness of the address and mask must be checked:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"The address is considered to be correctly specified if it:"),Object(s.b)("blockquote",{parentName:"li"},Object(s.b)("ul",{parentName:"blockquote"},Object(s.b)("li",{parentName:"ul"},"consists of 4 numbers separated by a dot"),Object(s.b)("li",{parentName:"ul"},"every number in the range from 0 to 255")))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"the mask is considered correct if the mask is a number and a number in the range from 8 to 32 inclusiveA"))),Object(s.b)("p",null,"If the mask or address fails validation, you must raise a ValueError with the appropriate text (output below)."),Object(s.b)("p",null,"Also, when creating a class, two instance variables must be created: ip and mask, which contain the address and mask, respectively."),Object(s.b)("p",null,"An example of creating an instance of a class:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [1]: ip1 = IPAddress('10.1.1.1/24')\n")),Object(s.b)("p",null,"ip and mask attributes"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [2]: ip1 = IPAddress('10.1.1.1/24')\n\nIn [3]: ip1.ip\nOut[3]: '10.1.1.1'\n\nIn [4]: ip1.mask\nOut[4]: 24\n")),Object(s.b)("p",null,"Checking the correctness of the address (traceback is shortened)"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [5]: ip1 = IPAddress('10.1.1/24')\n---------------------------------------------------------------------------\n...\nValueError: Incorrect IPv4 address\n\nChecking the correctness of the mask (traceback is shortened)\nIn [6]: ip1 = IPAddress('10.1.1.1/240')\n---------------------------------------------------------------------------\n...\nValueError: Incorrect mask\n")),Object(s.b)("h2",{id:"task-231a"},"Task 23.1a"),Object(s.b)("p",null,"Copy and modify the IPAddress class from task 23.1."),Object(s.b)("p",null,"Add two string views for instances of the IPAddress class. How string representations should look like should be determined from the output below."),Object(s.b)("p",null,"An example of creating an instance of a class:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [5]: ip1 = IPAddress('10.1.1.1/24')\n\nIn [6]: str(ip1)\nOut[6]: 'IP address 10.1.1.1/24'\n\nIn [7]: print(ip1)\nIP address 10.1.1.1/24\n\nIn [8]: ip1\nOut[8]: IPAddress('10.1.1.1/24')\n\nIn [9]: ip_list = []\n\nIn [10]: ip_list.append(ip1)\n\nIn [11]: ip_list\nOut[11]: [IPAddress('10.1.1.1/24')]\n\nIn [12]: print(ip_list)\n[IPAddress('10.1.1.1/24')]\n")),Object(s.b)("h2",{id:"task-232"},"Task 23.2"),Object(s.b)("p",null,"Copy the CiscoTelnet class from any 22.2x task and add context manager support to the class. When exiting the context manager block, the connection should be closed."),Object(s.b)("p",null,"Example of work:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [14]: r1_params = {\n    ...:     'ip': '192.168.100.1',\n    ...:     'username': 'cisco',\n    ...:     'password': 'cisco',\n    ...:     'secret': 'cisco'}\n\nIn [15]: from task_23_2 import CiscoTelnet\n\nIn [16]: with CiscoTelnet(**r1_params) as r1:\n    ...:     print(r1.send_show_command('sh clock'))\n    ...:\nsh clock\n*19:17:20.244 UTC Sat Apr 6 2019\nR1#\n")),Object(s.b)("h2",{id:"task-233"},"Task 23.3"),Object(s.b)("p",null,"Copy and modify the Topology class from job 22.1x."),Object(s.b)("p",null,"In this task, you need to add a method that will allow you to add two instances of the Topology class. The addition should return a new instance of the Topology class."),Object(s.b)("p",null,"Creating two instances of the Topology class:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [1]: t1 = Topology(topology_example)\n\nIn [2]: t1.topology\nOut[2]:\n{('R1', 'Eth0/0'): ('SW1', 'Eth0/1'),\n ('R2', 'Eth0/0'): ('SW1', 'Eth0/2'),\n ('R2', 'Eth0/1'): ('SW2', 'Eth0/11'),\n ('R3', 'Eth0/0'): ('SW1', 'Eth0/3'),\n ('R3', 'Eth0/1'): ('R4', 'Eth0/0'),\n ('R3', 'Eth0/2'): ('R5', 'Eth0/0')}\n\nIn [3]: topology_example2 = {('R1', 'Eth0/4'): ('R7', 'Eth0/0'),\n                             ('R1', 'Eth0/6'): ('R9', 'Eth0/0')}\n\nIn [4]: t2 = Topology(topology_example2)\n\nIn [5]: t2.topology\nOut[5]: {('R1', 'Eth0/4'): ('R7', 'Eth0/0'), ('R1', 'Eth0/6'): ('R9', 'Eth0/0')}\n")),Object(s.b)("p",null,"Summing instances of the Topology class:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [6]: t3 = t1 + t2\n\nIn [7]: t3.topology\nOut[7]:\n{('R1', 'Eth0/0'): ('SW1', 'Eth0/1'),\n ('R1', 'Eth0/4'): ('R7', 'Eth0/0'),\n ('R1', 'Eth0/6'): ('R9', 'Eth0/0'),\n ('R2', 'Eth0/0'): ('SW1', 'Eth0/2'),\n ('R2', 'Eth0/1'): ('SW2', 'Eth0/11'),\n ('R3', 'Eth0/0'): ('SW1', 'Eth0/3'),\n ('R3', 'Eth0/1'): ('R4', 'Eth0/0'),\n ('R3', 'Eth0/2'): ('R5', 'Eth0/0')}\n")),Object(s.b)("p",null,"Checking that the original instances haven\u2019t changed:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [9]: t1.topology\nOut[9]:\n{('R1', 'Eth0/0'): ('SW1', 'Eth0/1'),\n ('R2', 'Eth0/0'): ('SW1', 'Eth0/2'),\n ('R2', 'Eth0/1'): ('SW2', 'Eth0/11'),\n ('R3', 'Eth0/0'): ('SW1', 'Eth0/3'),\n ('R3', 'Eth0/1'): ('R4', 'Eth0/0'),\n ('R3', 'Eth0/2'): ('R5', 'Eth0/0')}\n\nIn [10]: t2.topology\nOut[10]: {('R1', 'Eth0/4'): ('R7', 'Eth0/0'), ('R1', 'Eth0/6'): ('R9', 'Eth0/0')}\n")),Object(s.b)("h2",{id:"task-233a"},"Task 23.3a"),Object(s.b)("p",null,"In this task, you need to make sure that instances of the Topology class are iterables. The base of the Topology class can be taken from either task 22.1x or task 23.3."),Object(s.b)("p",null,"After creating an instance of a class, the instance should act like an iterable object. Each iteration should return a tuple that describes one connection. The order of output of connections can be any."),Object(s.b)("p",null,"An example of how the class works:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [1]: top = Topology(topology_example)\n\nIn [2]: for link in top:\n   ...:     print(link)\n   ...:\n(('R1', 'Eth0/0'), ('SW1', 'Eth0/1'))\n(('R2', 'Eth0/0'), ('SW1', 'Eth0/2'))\n(('R2', 'Eth0/1'), ('SW2', 'Eth0/11'))\n(('R3', 'Eth0/0'), ('SW1', 'Eth0/3'))\n(('R3', 'Eth0/1'), ('R4', 'Eth0/0'))\n(('R3', 'Eth0/2'), ('R5', 'Eth0/0'))\n")))}p.isMDXComponent=!0}}]);