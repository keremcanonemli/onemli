(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{216:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(8),r=(n(0),n(280)),i={id:"tasks",title:"Tasks",sidebar_label:"5.4 Tasks",slug:"tasks",custom_edit_url:null},s={unversionedId:"python/basic_scripts/tasks",id:"python/basic_scripts/tasks",isDocsHomePage:!1,title:"Tasks",description:"All tasks and additional files can be downloaded from repository.",source:"@site/docs/python/basic_scripts/4_tasks.md",slug:"/python/basic_scripts/tasks",permalink:"/docs/python/basic_scripts/tasks",editUrl:null,version:"current",sidebar_label:"5.4 Tasks",sidebar:"someSidebar",previous:{title:"User Input",permalink:"/docs/python/basic_scripts/user_input"},next:{title:"Control Structures",permalink:"/docs/python/control_structures/control_structures"}},c=[{value:"Task 5.1",id:"task-51",children:[]},{value:"Task 5.1a",id:"task-51a",children:[]},{value:"Task 5.1b",id:"task-51b",children:[]},{value:"Task 5.1c",id:"task-51c",children:[]},{value:"Task 5.1d",id:"task-51d",children:[]},{value:"Task 5.2",id:"task-52",children:[]},{value:"Task 5.2a",id:"task-52a",children:[]},{value:"Task 5.3",id:"task-53",children:[]},{value:"Task 5.3a",id:"task-53a",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"All tasks and additional files can be downloaded from ",Object(r.b)("a",{parentName:"p",href:"https://github.com/natenka/pyneng-examples-exercises-en/"},"repository"),"."),Object(r.b)("p",null,"Warning"),Object(r.b)("p",null,"Starting from section \u201c4. Data types in Python\u201d there are automated tests for testing tasks. They help to check whether everything matches the task, and also give feedback on what does not correspond to the task. As a rule, after the first period of adaptation to tests, it becomes easier to do tasks with tests. Testing is done using the pyneng utility. ",Object(r.b)("a",{parentName:"p",href:"https://pyneng.readthedocs.io/en/latest/book/additional_info/pyneng.html#additional-info-pyneng"},"Learn more about how to work with the pyneng utility"),"."),Object(r.b)("h2",{id:"task-51"},"Task 5.1"),Object(r.b)("p",null,"The task contains a dictionary with information about different devices."),Object(r.b)("p",null,"In the task you need: ask the user to enter the device name (r1, r2 or sw1). Print information about the corresponding device to standard output (information will be in the form of a dictionary)."),Object(r.b)("p",null,"An example of script execution:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'$ python task_5_1.py\nEnter name of device: r1\n{"location": "21 New Globe Walk", "vendor": "Cisco", "model": "4451", "ios": "15.4", "ip": "10.255.0.1"}\n')),Object(r.b)("p",null,"Restriction: You cannot modify the london_co dictionary."),Object(r.b)("p",null,"All tasks must be completed using only the topics covered. That is, this task can be solved without using the if condition. Restriction: You cannot change london_co dictionary."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'london_co = {\n    "r1": {\n        "location": "21 New Globe Walk",\n        "vendor": "Cisco",\n        "model": "4451",\n        "ios": "15.4",\n        "ip": "10.255.0.1"\n    },\n    "r2": {\n        "location": "21 New Globe Walk",\n        "vendor": "Cisco",\n        "model": "4451",\n        "ios": "15.4",\n        "ip": "10.255.0.2"\n    },\n    "sw1": {\n        "location": "21 New Globe Walk",\n        "vendor": "Cisco",\n        "model": "3850",\n        "ios": "3.6.XE",\n        "ip": "10.255.0.101",\n        "vlans": "10,20,30",\n        "routing": True\n    }\n}\n')),Object(r.b)("h2",{id:"task-51a"},"Task 5.1a"),Object(r.b)("p",null,"Modify the script from task 5.1 so that, in addition to the device name, the script requested and then printed the device parameter as well."),Object(r.b)("p",null,"Display information about the corresponding parameter of the specified device."),Object(r.b)("p",null,"An example of script execution:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$ python task_5_1a.py\nEnter device name : r1\nEnter parameter name: ios\n15.4\n")),Object(r.b)("p",null,"Restriction: You cannot modify the london_co dictionary."),Object(r.b)("p",null,"All tasks must be completed using only the topics covered. That is, this task can be solved without using the if condition."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'london_co = {\n    "r1": {\n        "location": "21 New Globe Walk",\n        "vendor": "Cisco",\n        "model": "4451",\n        "ios": "15.4",\n        "ip": "10.255.0.1"\n    },\n    "r2": {\n        "location": "21 New Globe Walk",\n        "vendor": "Cisco",\n        "model": "4451",\n        "ios": "15.4",\n        "ip": "10.255.0.2"\n    },\n    "sw1": {\n        "location": "21 New Globe Walk",\n        "vendor": "Cisco",\n        "model": "3850",\n        "ios": "3.6.XE",\n        "ip": "10.255.0.101",\n        "vlans": "10,20,30",\n        "routing": True\n    }\n}\n')),Object(r.b)("h2",{id:"task-51b"},"Task 5.1b"),Object(r.b)("p",null,"Modify the script from task 5.1a so that, when requesting a parameter, a list of possible parameters was displayed. The list of parameters must be obtained from the dictionary, rather than written manually."),Object(r.b)("p",null,"Display information about the corresponding parameter of the specified device."),Object(r.b)("p",null,"An example of script execution:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$ python task_5_1b.py\nEnter device name: r1\nEnter parameter name (ios, model, vendor, location, ip): ip\n10.255.0.1\n")),Object(r.b)("p",null,"Restriction: You cannot modify the london_co dictionary."),Object(r.b)("p",null,"All tasks must be completed using only the topics covered. That is, this task can be solved without using the if condition."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'london_co = {\n    "r1": {\n        "location": "21 New Globe Walk",\n        "vendor": "Cisco",\n        "model": "4451",\n        "ios": "15.4",\n        "ip": "10.255.0.1"\n    },\n    "r2": {\n        "location": "21 New Globe Walk",\n        "vendor": "Cisco",\n        "model": "4451",\n        "ios": "15.4",\n        "ip": "10.255.0.2"\n    },\n    "sw1": {\n        "location": "21 New Globe Walk",\n        "vendor": "Cisco",\n        "model": "3850",\n        "ios": "3.6.XE",\n        "ip": "10.255.0.101",\n        "vlans": "10,20,30",\n        "routing": True\n    }\n}\n')),Object(r.b)("h2",{id:"task-51c"},"Task 5.1c"),Object(r.b)("p",null,"Copy and modify the script from task 5.1b so that when you request a parameter that is not in the device dictionary, the message \u2018There is no such parameter\u2019 is displayed. The assignment applies only to the parameters of the devices, not to the devices themselves."),Object(r.b)("p",null,"Note"),Object(r.b)("p",null,"Try typing a non-existent parameter, to see what the result will be. And then complete the task."),Object(r.b)("p",null,"If an existing parameter is selected, print information about the corresponding parameter."),Object(r.b)("p",null,"An example of script execution:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$ python task_5_1c.py\nEnter device name: r1\nEnter parameter name (ios, model, vendor, location, ip): ips\nNo such parameter\n")),Object(r.b)("p",null,"Restriction: You cannot modify the london_co dictionary."),Object(r.b)("p",null,"All tasks must be completed using only the topics covered. That is, this task can be solved without using the if condition."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'london_co = {\n    "r1": {\n        "location": "21 New Globe Walk",\n        "vendor": "Cisco",\n        "model": "4451",\n        "ios": "15.4",\n        "ip": "10.255.0.1"\n    },\n    "r2": {\n        "location": "21 New Globe Walk",\n        "vendor": "Cisco",\n        "model": "4451",\n        "ios": "15.4",\n        "ip": "10.255.0.2"\n    },\n    "sw1": {\n        "location": "21 New Globe Walk",\n        "vendor": "Cisco",\n        "model": "3850",\n        "ios": "3.6.XE",\n        "ip": "10.255.0.101",\n        "vlans": "10,20,30",\n        "routing": True\n    }\n}\n')),Object(r.b)("h2",{id:"task-51d"},"Task 5.1d"),Object(r.b)("p",null,"Modify the script from task 5.1c so that, when requesting a parameter, the user could enter the parameter name in any case."),Object(r.b)("p",null,"An example of script execution:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$ python task_5_1d.py\nEnter device name: r1\nEnter parameter name (ios, model, vendor, location, ip): IOS\n15.4\n")),Object(r.b)("p",null,"Restriction: You cannot modify the london_co dictionary."),Object(r.b)("p",null,"All tasks must be completed using only the topics covered. That is, this task can be solved without using the if condition."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'london_co = {\n    "r1": {\n        "location": "21 New Globe Walk",\n        "vendor": "Cisco",\n        "model": "4451",\n        "ios": "15.4",\n        "ip": "10.255.0.1"\n    },\n    "r2": {\n        "location": "21 New Globe Walk",\n        "vendor": "Cisco",\n        "model": "4451",\n        "ios": "15.4",\n        "ip": "10.255.0.2"\n    },\n    "sw1": {\n        "location": "21 New Globe Walk",\n        "vendor": "Cisco",\n        "model": "3850",\n        "ios": "3.6.XE",\n        "ip": "10.255.0.101",\n        "vlans": "10,20,30",\n        "routing": True\n    }\n}\n')),Object(r.b)("h2",{id:"task-52"},"Task 5.2"),Object(r.b)("p",null,"Ask the user to enter the IP network in the format: ",Object(r.b)("inlineCode",{parentName:"p"},"10.1.1.0/24"),"."),Object(r.b)("p",null,"Then print information about the network and mask in this format:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Network:\n10        1         1         0\n00001010  00000001  00000001  00000000\n\nMask:\n/24\n255       255       255       0\n11111111  11111111  11111111  00000000\n")),Object(r.b)("p",null,"Check the script work on different network/mask combinations."),Object(r.b)("p",null,"Hint: You can get the mask in binary format like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},'In [1]: "1" * 28 + "0" * 4\nOut[1]: "11111111111111111111111111110000"\n')),Object(r.b)("p",null,"You can then take 8 bits of the binary mask using slices and convert them to decimal."),Object(r.b)("p",null,"Restriction: All tasks must be done using the topics covered in this and previous chapters."),Object(r.b)("h2",{id:"task-52a"},"Task 5.2a"),Object(r.b)("p",null,"Copy and modify the script from task 5.2 so that, if the user entered a host address rather than a network address, convert the host address to a network address and print the network address and mask, as in task 5.2."),Object(r.b)("p",null,"An example of a network address (all host bits are equal to zero):"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"10.0.1.0/24"),Object(r.b)("li",{parentName:"ul"},"190.1.0.0/16")),Object(r.b)("p",null,"Host address example:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"10.0.1.1/24 - host from network 10.0.1.0/24"),Object(r.b)("li",{parentName:"ul"},"10.0.5.195/28 - host from network 10.0.5.192/28")),Object(r.b)("p",null,"If the user entered the address 10.0.1.1/24, the output should look like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Network:\n10        0         1         0\n00001010  00000000  00000001  00000000\n\nMask:\n/24\n255       255       255       0\n11111111  11111111  11111111  00000000\n")),Object(r.b)("p",null,"Check the script work on different host/mask combinations, for example: 10.0.5.195/28, 10.0.1.1/24"),Object(r.b)("p",null,"Hint:"),Object(r.b)("p",null,"The network address can be calculated from the binary host address and the netmask. If the mask is 28, then the network address is the first 28 bits host addresses + 4 zeros. For example, the host address 10.1.1.195/28 in binary will be:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'bin_ip = "00001010000000010000000111000011"\n')),Object(r.b)("p",null,"Then the network address will be the first 28 characters from bin_ip + 0000 (4 because in total there can be 32 bits in the address, and 32 - 28 = 4)"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"00001010000000010000000111000000\n")),Object(r.b)("p",null,"Restriction: All tasks must be done using the topics covered in this and previous chapters."),Object(r.b)("h2",{id:"task-53"},"Task 5.3"),Object(r.b)("p",null,"The script should prompt the user for input:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"interface mode (access/trunk)"),Object(r.b)("li",{parentName:"ul"},"interface number (Gi0/3)"),Object(r.b)("li",{parentName:"ul"},"VLAN number (for trunk mode, a list of VLANs will be entered)")),Object(r.b)("p",null,"Depending on the selected mode, print corresponding access or trunk configuration on stdout (command templates are in the lists access_template and trunk_template)."),Object(r.b)("p",null,"The output should first print the interface line and the interface number, and then the corresponding template in which the VLAN number (or the list of VLANs) is inserted."),Object(r.b)("p",null,"Restriction: All tasks must be done using the topics covered in this and previous chapters. This task can be solved without using the if condition and for/while loops."),Object(r.b)("p",null,"Hint: Leading up to this task was task 5.1. To make it easier to solve this task, you can look at task 5.1 and figure out exactly how different information is displayed in the task, depending on user input."),Object(r.b)("p",null,"Below are examples of script execution to make it easier to understand the task."),Object(r.b)("p",null,"An example of script execution when the access mode is selected:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$ python task_5_3.py\nEnter interface mode (access/trunk): access\nEnter type and interface number: Fa0/6\nEnter number of vlan (vlans): 3\n\ninterface Fa0/6\nswitchport mode access\nswitchport access vlan 3\nswitchport nonegotiate\nspanning-tree portfast\nspanning-tree bpduguard enable\n")),Object(r.b)("p",null,"An example of script execution when the trunk mode is selected:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'$ python task_5_3.py\nEnter interface mode (access/trunk): trunk\nEnter type and interface number: Fa0/7\nEnter number of vlan (vlans): 2,3,4,5\n\ninterface Fa0/7\nswitchport trunk encapsulation dot1q\nswitchport mode trunk\nswitchport trunk allowed vlan 2,3,4,5\naccess_template = [\n    "switchport mode access", "switchport access vlan {}",\n    "switchport nonegotiate", "spanning-tree portfast",\n    "spanning-tree bpduguard enable"\n]\n\ntrunk_template = [\n    "switchport trunk encapsulation dot1q", "switchport mode trunk",\n    "switchport trunk allowed vlan {}"\n]\n')),Object(r.b)("h2",{id:"task-53a"},"Task 5.3a"),Object(r.b)("p",null,"Copy and change the script from task 5.3 in such a way that, depending on the selected mode, different questions were asked in the request for the VLAN number or VLAN list:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"for access: \u2018Enter VLAN number:\u2019"),Object(r.b)("li",{parentName:"ul"},"for trunk: \u2018Enter the allowed VLANs:\u2019")),Object(r.b)("p",null,"Restriction: All tasks must be done using the topics covered in this and previous chapters. This task can be solved without using the if condition and for/while loops."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'access_template = [\n    "switchport mode access", "switchport access vlan {}",\n    "switchport nonegotiate", "spanning-tree portfast",\n    "spanning-tree bpduguard enable"\n]\n\ntrunk_template = [\n    "switchport trunk encapsulation dot1q", "switchport mode trunk",\n    "switchport trunk allowed vlan {}"\n]\n')))}p.isMDXComponent=!0},280:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,h=d["".concat(i,".").concat(u)]||d[u]||b[u]||r;return n?a.a.createElement(h,s(s({ref:t},l),{},{components:n})):a.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);