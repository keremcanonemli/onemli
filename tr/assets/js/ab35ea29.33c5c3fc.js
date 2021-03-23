(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{212:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),s=n(8),o=(n(0),n(281)),r={id:"oop_basics",title:"Oop Basics",sidebar_label:"Oop Basics",slug:"oop_basics",custom_edit_url:null},i={unversionedId:"python/22_oop_basics/oop_basics",id:"python/22_oop_basics/oop_basics",isDocsHomePage:!1,title:"Oop Basics",description:"- Class - an element of a program that describes some data type. Class describes a template for creating objects, typically specifies variables of object and actions that can be performed on object.",source:"@site/docs/python/22_oop_basics/1_oop_basics.md",slug:"/python/22_oop_basics/oop_basics",permalink:"/tr/docs/python/22_oop_basics/oop_basics",editUrl:null,version:"current",sidebar_label:"Oop Basics",sidebar:"someSidebar",previous:{title:"Basics Of Object-Oriented Programming",permalink:"/tr/docs/python/22_oop_basics/basics_of_object_oriented_programming"},next:{title:"Class Creation",permalink:"/tr/docs/python/22_oop_basics/class_creation"}},c=[],l={toc:c};function b(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Class - an element of a program that describes some data type. Class describes a template for creating objects, typically specifies variables of object and actions that can be performed on object."),Object(o.b)("li",{parentName:"ul"},"Instance - an object that is a representative of a class."),Object(o.b)("li",{parentName:"ul"},"Method - a function that is defined within a class and describes an action that class supports"),Object(o.b)("li",{parentName:"ul"},"Instance variable (sometimes instance attribute) - data that refer to an object"),Object(o.b)("li",{parentName:"ul"},"Class variable - data that refer to class and shared by all class instances"),Object(o.b)("li",{parentName:"ul"},"Instance attribute - variables and methods that refer to objects (instances) created on the basis of a class. Every object has its own copy of attributes.")),Object(o.b)("p",null,"A real-life OOP example:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Building project - it is a class"),Object(o.b)("li",{parentName:"ul"},"Particular house which was built according to project - instance"),Object(o.b)("li",{parentName:"ul"},"Features such as color of house, number of windows - instance variables (of this particular house)"),Object(o.b)("li",{parentName:"ul"},"House can be sold, repainted, repaired - methods")),Object(o.b)("p",null,"For example, when working with netmiko, the first thing to do was create connection:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'from netmiko import ConnectHandler\n\ndevice = {\n    "device_type": "cisco_ios",\n    "host": "192.168.100.1",\n    "username": "cisco",\n    "password": "cisco",\n    "secret": "cisco",\n}\n\nssh = ConnectHandler(**device)\n')),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ssh")," variable is an object that represents the real connection to equipment. Thanks to the type function, you can find out by an instance what class is the ssh object:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [3]: type(ssh)\nOut[3]: netmiko.cisco.cisco_ios.CiscoIosSSH\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ssh")," has its own methods and variables that depend on the state the current object. For example, the instance variable ",Object(o.b)("inlineCode",{parentName:"p"},"ssh.host")," is available for every instance of the class ",Object(o.b)("inlineCode",{parentName:"p"},"netmiko.cisco.cisco_ios.CiscoIosSSH")," and returns IP address or hostname, whichever is specified in the device dictionary:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [4]: ssh.host\nOut[4]: '192.168.100.1'\n")),Object(o.b)("p",null,"Method ",Object(o.b)("inlineCode",{parentName:"p"},"send_command")," executes a command on the network device:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [5]: ssh.send_command(\"sh clock\")\nOut[5]: '*10:08:50.654 UTC Tue Feb 2 2021'\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"enable")," method goes into enable mode and the ",Object(o.b)("inlineCode",{parentName:"p"},"ssh")," object saves state: before and after the transition, a different prompt is visible:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [6]: ssh.find_prompt()\nOut[6]: 'R1>'\n\nIn [7]: ssh.enable()\nOut[7]: 'enable\\r\\nPassword: \\r\\nR1#'\n\nIn [8]: ssh.find_prompt()\nOut[8]: 'R1#'\n")),Object(o.b)("p",null,"This example illustrates important aspects of OOP: data integration, data handling and state preservation."),Object(o.b)("p",null,"Until now, when writing code, data and actions have been separated. Most often, actions are described as functions, and data is passed as arguments to these functions. When a class is created, data and actions are combined. Of course, these data and actions are linked. That is, those actions that are characteristic of an object of this type, and not some arbitrary actions, become class methods."),Object(o.b)("p",null,"For example, in an class instance ",Object(o.b)("inlineCode",{parentName:"p"},"str"),", all methods refer to working with this string:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [10]: s = 'string'\n\nIn [11]: s.upper()\nOut[11]: 'STRING'\n\nIn [12]: s.center(20, '=')\nOut[12]: '=======string======='\n")),Object(o.b)("p",null,"Note"),Object(o.b)("p",null,"Class does not have to store a state - string is immutable data type and all methods return new strings and do not change the original string."),Object(o.b)("p",null,"Above, the following syntax is used when referring to instance attributes (variables and methods): ",Object(o.b)("inlineCode",{parentName:"p"},"objectname.attribute"),". This entry ",Object(o.b)("inlineCode",{parentName:"p"},"s.lower()")," means: call ",Object(o.b)("inlineCode",{parentName:"p"},"lower")," method on ",Object(o.b)("inlineCode",{parentName:"p"},"s")," object. Calling methods and variables is the same, but to call a method you have to add parentheses and pass all necessary arguments."),Object(o.b)("p",null,"Everything described has been used repeatedly in the book but now we will deal with formal terminology."))}b.isMDXComponent=!0},281:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),s=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=s.a.createContext({}),b=function(e){var t=s.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},u=s.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(r,".").concat(u)]||p[u]||d[u]||o;return n?s.a.createElement(m,i(i({ref:t},l),{},{components:n})):s.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var l=2;l<o;l++)r[l]=n[l];return s.a.createElement.apply(null,r)}return s.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);