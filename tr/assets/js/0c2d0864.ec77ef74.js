(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{280:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,d=p["".concat(i,".").concat(h)]||p[h]||b[h]||o;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),o=(n(0),n(280)),i={id:"tasks",title:"Tasks",sidebar_label:"15.12 Tasks",slug:"tasks",custom_edit_url:null},c={unversionedId:"python/module_re/tasks",id:"python/module_re/tasks",isDocsHomePage:!1,title:"Tasks",description:"All tasks and additional files can be downloaded from repository.",source:"@site/docs/python/module_re/12_tasks.md",slug:"/python/module_re/tasks",permalink:"/tr/docs/python/module_re/tasks",editUrl:null,version:"current",sidebar_label:"15.12 Tasks",sidebar:"someSidebar",previous:{title:"Further Reading",permalink:"/tr/docs/python/module_re/further_reading"},next:{title:"Unicode",permalink:"/tr/docs/python/unicode/unicode"}},s=[{value:"Task 15.1",id:"task-151",children:[]},{value:"Task 15.1a",id:"task-151a",children:[]},{value:"Task 15.1b",id:"task-151b",children:[]},{value:"Task 15.2",id:"task-152",children:[]},{value:"Task 15.3",id:"task-153",children:[]},{value:"Task 15.4",id:"task-154",children:[]},{value:"Task 15.5",id:"task-155",children:[]}],l={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"All tasks and additional files can be downloaded from ",Object(o.b)("a",{parentName:"p",href:"https://github.com/natenka/pyneng-examples-exercises-en/"},"repository"),"."),Object(o.b)("p",null,"Warning"),Object(o.b)("p",null,"Starting from section \u201c4. Data types in Python\u201d there are automated tests for testing tasks. They help to check whether everything matches the task, and also give feedback on what does not correspond to the task. As a rule, after the first period of adaptation to tests, it becomes easier to do tasks with tests. Testing is done using the pyneng utility. ",Object(o.b)("a",{parentName:"p",href:"https://pyneng.readthedocs.io/en/latest/book/additional_info/pyneng.html#additional-info-pyneng"},"Learn more about how to work with the pyneng utility"),"."),Object(o.b)("h2",{id:"task-151"},"Task 15.1"),Object(o.b)("p",null,"Create a get_ip_from_cfg function that expects the name of the file containing the device configuration as an argument."),Object(o.b)("p",null,"The function should process the configuration and return the IP addresses and masks that are configured on the interfaces as a list of tuples:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"the first element of the tuple is the IP address"),Object(o.b)("li",{parentName:"ul"},"the second element of the tuple is a mask")),Object(o.b)("p",null,"For example (arbitrary addresses are taken):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'[("10.0.1.1", "255.255.255.0"), ("10.0.2.1", "255.255.255.0")]\n')),Object(o.b)("p",null,"To get this result, use regular expressions."),Object(o.b)("p",null,"Check the operation of the function using the config_r1.txt file."),Object(o.b)("p",null,"Please note that in this case, you can not check the correctness of the IP address, address ranges, and so on, since the command output from network device is processed, not user input."),Object(o.b)("h2",{id:"task-151a"},"Task 15.1a"),Object(o.b)("p",null,"Copy the get_ip_from_cfg function from task 15.1 and redesign it so that it returns a dictionary:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"key: interface name")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"value: a tuple with two lines:"),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"IP address"),Object(o.b)("li",{parentName:"ul"},"mask"))))),Object(o.b)("p",null,"Add to the dictionary only those interfaces on which IP addresses are configured."),Object(o.b)("p",null,"Dict example (arbitrary addresses are taken):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{"FastEthernet0/1": ("10.0.1.1", "255.255.255.0"),\n "FastEthernet0/2": ("10.0.2.1", "255.255.255.0")}\n')),Object(o.b)("p",null,"To get this result, use regular expressions."),Object(o.b)("p",null,"Check the operation of the function using the example of the config_r1.txt file."),Object(o.b)("p",null,"Please note that in this case, you can not check the correctness of the IP address, address ranges, and so on, since the command output from network device is processed, not user input."),Object(o.b)("h2",{id:"task-151b"},"Task 15.1b"),Object(o.b)("p",null,"Check the get_ip_from_cfg function from task 15.1a on the config_r2.txt configuration."),Object(o.b)("p",null,"Note that there are two IP addresses assigned on the e0/1 interface:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"interface Ethernet0/1\n ip address 10.255.2.2 255.255.255.0\n ip address 10.254.2.2 255.255.255.0 secondary\n")),Object(o.b)("p",null,"And in the dictionary returned by the get_ip_from_cfg function, only one of them (first or second) corresponds to the Ethernet0/1 interface."),Object(o.b)("p",null,"Copy the get_ip_from_cfg function from 15.1a and redesign it to return a list of tuples for each interface in the dictionary value. If only one address is assigned on the interface, there will be one tuple in the list. If several IP addresses are configured on the interface, then the list will contain several tuples. The interface name remains the key."),Object(o.b)("p",null,"Check the function in the config_r2.txt configuration and make sure the Ethernet0/1 interface matches a list of two tuples."),Object(o.b)("p",null,"Please note that in this case, you can not check the correctness of the IP address, address ranges, and so on, since the command output from network device is processed, not user input."),Object(o.b)("h2",{id:"task-152"},"Task 15.2"),Object(o.b)("p",null,"Create a function parse_sh_ip_int_br that expects as an argument the name of the file containing the output of the show ip int br command."),Object(o.b)("p",null,"The function should process the output of the show ip int br command and return the following fields:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Interface"),Object(o.b)("li",{parentName:"ul"},"IP-Address"),Object(o.b)("li",{parentName:"ul"},"Status"),Object(o.b)("li",{parentName:"ul"},"Protocol")),Object(o.b)("p",null,"The information should be returned as a list of tuples:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'[("FastEthernet0/0", "10.0.1.1", "up", "up"),\n ("FastEthernet0/1", "10.0.2.1", "up", "up"),\n ("FastEthernet0/2", "unassigned", "down", "down")]\n')),Object(o.b)("p",null,"To get this result, use regular expressions."),Object(o.b)("p",null,"Check the operation of the function using the example of the sh_ip_int_br.txt file."),Object(o.b)("h2",{id:"task-153"},"Task 15.3"),Object(o.b)("p",null,"Create a convert_ios_nat_to_asa function that converts NAT rules from cisco IOS syntax to cisco ASA."),Object(o.b)("p",null,"The function expects such arguments:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"the name of the file containing the Cisco IOS NAT rules"),Object(o.b)("li",{parentName:"ul"},"the name of the file in which to write the NAT rules for the ASA")),Object(o.b)("p",null,"The function returns None."),Object(o.b)("p",null,"Check the function on the cisco_nat_config.txt file."),Object(o.b)("p",null,"Example cisco IOS NAT rules"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"ip nat inside source static tcp 10.1.2.84 22 interface GigabitEthernet0/1 20022\nip nat inside source static tcp 10.1.9.5 22 interface GigabitEthernet0/1 20023\n")),Object(o.b)("p",null,"And the corresponding NAT rules for the ASA:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"object network LOCAL_10.1.2.84\n host 10.1.2.84\n nat (inside,outside) static interface service tcp 22 20022\nobject network LOCAL_10.1.9.5\n host 10.1.9.5\n nat (inside,outside) static interface service tcp 22 20023\n")),Object(o.b)("p",null,"In the file with the rules for the ASA:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"there should be no blank lines between the rules"),Object(o.b)("li",{parentName:"ul"},"there must be no spaces before the lines \u201cobject network\u201d"),Object(o.b)("li",{parentName:"ul"},"there must be one space before the rest of the lines")),Object(o.b)("p",null,"In all rules for ASA, the interfaces will be the same (inside, outside)."),Object(o.b)("h2",{id:"task-154"},"Task 15.4"),Object(o.b)("p",null,"Create a get_ints_without_description function that expects as an argument the name of the file containing the device configuration."),Object(o.b)("p",null,"The function should process the configuration and return a list of interface names, which do not have a description (description command)."),Object(o.b)("p",null,"An example of an interface with a description:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"interface Ethernet0/2\n description To P_r9 Ethernet0/2\n ip address 10.0.19.1 255.255.255.0\n mpls traffic-eng tunnels\n ip rsvp bandwidth\n")),Object(o.b)("p",null,"Interface without description:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"interface Loopback0\n ip address 10.1.1.1 255.255.255.255\n")),Object(o.b)("p",null,"Check the operation of the function using the example of the config_r1.txt file."),Object(o.b)("h2",{id:"task-155"},"Task 15.5"),Object(o.b)("p",null,"Create a generate_description_from_cdp function that expects as an argument the name of the file that contains the output of the show cdp neighbors command."),Object(o.b)("p",null,"The function should process the show cdp neighbors command output and generate a description for the interfaces based on the command output."),Object(o.b)("p",null,"For example, if R1 has the following command output:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"R1>show cdp neighbors\nCapability Codes: R - Router, T - Trans Bridge, B - Source Route Bridge\n                  S - Switch, H - Host, I - IGMP, r - Repeater\n\nDevice ID        Local Intrfce     Holdtme    Capability  Platform  Port ID\nSW1              Eth 0/0           140          S I      WS-C3750-  Eth 0/1\n")),Object(o.b)("p",null,"For the Eth 0/0 interface, you need to generate the following description:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"description Connected to SW1 port Eth 0/1\n")),Object(o.b)("p",null,"The function must return a dictionary, in which the keys are the names of the interfaces, and the values are the command specifying the description of the interface:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"'Eth 0/0': 'description Connected to SW1 port Eth 0/1'\n")),Object(o.b)("p",null,"Check the operation of the function on the sh_cdp_n_sw1.txt file."))}u.isMDXComponent=!0}}]);