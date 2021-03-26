(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{280:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,h=u["".concat(s,".").concat(b)]||u[b]||p[b]||o;return n?a.a.createElement(h,i(i({ref:t},l),{},{components:n})):a.a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(8),o=(n(0),n(280)),s={id:"tasks",title:"Tasks",sidebar_label:"6.8 Tasks",slug:"tasks",custom_edit_url:null},i={unversionedId:"python/control_structures/tasks",id:"python/control_structures/tasks",isDocsHomePage:!1,title:"Tasks",description:"All tasks and additional files can be downloaded from repository.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/python/control_structures/8_tasks.md",slug:"/python/control_structures/tasks",permalink:"/tr/docs/python/control_structures/tasks",editUrl:null,version:"current",sidebar_label:"6.8 Tasks",sidebar:"someSidebar",previous:{title:"Further Reading",permalink:"/tr/docs/python/control_structures/further_reading"},next:{title:"Working With Files",permalink:"/tr/docs/python/files/working_with_files"}},c=[{value:"Task 6.1",id:"task-61",children:[]},{value:"Task 6.2",id:"task-62",children:[]},{value:"Task 6.2a",id:"task-62a",children:[]},{value:"Task 6.2b",id:"task-62b",children:[]},{value:"Task 6.3",id:"task-63",children:[]}],l={toc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"All tasks and additional files can be downloaded from ",Object(o.b)("a",{parentName:"p",href:"https://github.com/natenka/pyneng-examples-exercises-en/"},"repository"),"."),Object(o.b)("p",null,"Warning"),Object(o.b)("p",null,"Starting from section \u201c4. Data types in Python\u201d there are automated tests for testing tasks. They help to check whether everything matches the task, and also give feedback on what does not correspond to the task. As a rule, after the first period of adaptation to tests, it becomes easier to do tasks with tests. Testing is done using the pyneng utility. ",Object(o.b)("a",{parentName:"p",href:"https://pyneng.readthedocs.io/en/latest/book/additional_info/pyneng.html#additional-info-pyneng"},"Learn more about how to work with the pyneng utility"),"."),Object(o.b)("h2",{id:"task-61"},"Task 6.1"),Object(o.b)("p",null,"The mac list contains MAC addresses in the format XXXX:XXXX:XXXX However, in Cisco equipment MAC addresses are in XXXX.XXXX.XXXX format."),Object(o.b)("p",null,"Write a code that converts MAC addresses to cisco format and adds them to a new list named result. Print the result list to the stdout using print function."),Object(o.b)("p",null,"Restriction: All tasks must be done using the topics covered in this and previous chapters."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'mac = ["aabb:cc80:7000", "aabb:dd80:7340", "aabb:ee80:7000", "aabb:ff80:7000"]\n')),Object(o.b)("h2",{id:"task-62"},"Task 6.2"),Object(o.b)("p",null,"Prompt the user to enter an IP address in the format 10.0.1.1. Depending on the type of address (described below), print to the stdout:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u2018unicast\u2019 - if the first byte is in the range 1-223"),Object(o.b)("li",{parentName:"ul"},"\u2018multicast\u2019 - if the first byte is in the range 224-239"),Object(o.b)("li",{parentName:"ul"},"\u2018local broadcast\u2019 - if the IP address is 255.255.255.255"),Object(o.b)("li",{parentName:"ul"},"\u2018unassigned\u2019 - if the IP address is 0.0.0.0"),Object(o.b)("li",{parentName:"ul"},"\u2018unused\u2019 - in all other cases")),Object(o.b)("p",null,"Restriction: All tasks must be done using the topics covered in this and previous chapters."),Object(o.b)("h2",{id:"task-62a"},"Task 6.2a"),Object(o.b)("p",null,"Make a copy of the code from the task 6.2."),Object(o.b)("p",null,"Add verification of the entered IP address. An IP address is considered correct if it:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"consists of 4 numbers (not letters or other symbols)"),Object(o.b)("li",{parentName:"ul"},"numbers are separated by a dot"),Object(o.b)("li",{parentName:"ul"},"every number in the range from 0 to 255")),Object(o.b)("p",null,"If the IP address is incorrect, print the message: \u2018Invalid IP address\u2019"),Object(o.b)("p",null,"The message \u201cInvalid IP address\u201d should be printed only once, even if several points above are not met."),Object(o.b)("p",null,"Restriction: All tasks must be done using the topics covered in this and previous chapters."),Object(o.b)("h2",{id:"task-62b"},"Task 6.2b"),Object(o.b)("p",null,"Make a copy of the code from the task 6.2a."),Object(o.b)("p",null,"Add this functionality: If the address was entered incorrectly, request the address again."),Object(o.b)("p",null,"Restriction: All tasks must be done using the topics covered in this and previous chapters."),Object(o.b)("h2",{id:"task-63"},"Task 6.3"),Object(o.b)("p",null,"A configuration generator for access ports is made in the script. Make a similar configuration generator for trunk ports."),Object(o.b)("p",null,"In trunks, the situation is complicated by the fact that there can be many VLANs, and you need to understand what to do with them (add, delete, overwrite)."),Object(o.b)("p",null,"Therefore, in accordance with each port there is a list and the first (zero index) element of the list specifies how to interpret VLAN numbers that follow."),Object(o.b)("p",null,"Dict value and corresponding command:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"['add', '10', '20']")," - switchport trunk allowed vlan add 10,20"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"['del', '17']")," - switchport trunk allowed vlan remove 17"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"['only', '11', '30']")," - switchport trunk allowed vlan 11,30")),Object(o.b)("p",null,"Task for ports 0/1, 0/2, 0/4:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"generate a configuration based on the trunk_template template"),Object(o.b)("li",{parentName:"ul"},"taking into account the keywords add, del, only")),Object(o.b)("p",null,"The code should not be tied to specific port numbers. I.e, if there are other interface numbers in the trunk dictionary, the code should work."),Object(o.b)("p",null,"For data in the trunk_template dictionary, output to the standard output should be like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"interface FastEthernet 0/1\n switchport trunk encapsulation dot1q\n switchport mode trunk\n switchport trunk allowed vlan add 10,20\ninterface FastEthernet 0/2\n switchport trunk encapsulation dot1q\n switchport mode trunk\n switchport trunk allowed vlan 11,30\ninterface FastEthernet 0/4\n switchport trunk encapsulation dot1q\n switchport mode trunk\n switchport trunk allowed vlan remove 17\n")),Object(o.b)("p",null,"Restriction: All tasks must be done using the topics covered in this and previous chapters."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'access_template = [\n    "switchport mode access",\n    "switchport access vlan",\n    "spanning-tree portfast",\n    "spanning-tree bpduguard enable",\n]\n\ntrunk_template = [\n    "switchport trunk encapsulation dot1q",\n    "switchport mode trunk",\n    "switchport trunk allowed vlan",\n]\n\naccess = {"0/12": "10", "0/14": "11", "0/16": "17", "0/17": "150"}\ntrunk = {"0/1": ["add", "10", "20"], "0/2": ["only", "11", "30"], "0/4": ["del", "17"]}\n\nfor intf, vlan in access.items():\n    print("interface FastEthernet" + intf)\n    for command in access_template:\n        if command.endswith("access vlan"):\n            print(f" {command} {vlan}")\n        else:\n            print(f" {command}")\n')))}d.isMDXComponent=!0}}]);