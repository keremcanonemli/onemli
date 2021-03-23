(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{179:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var o=n(3),a=n(8),r=(n(0),n(281)),i={id:"tasks",title:"Tasks",sidebar_label:"Tasks",slug:"tasks",custom_edit_url:null},s={unversionedId:"python/19_concurrent_connections/tasks",id:"python/19_concurrent_connections/tasks",isDocsHomePage:!1,title:"Tasks",description:"All tasks and additional files can be downloaded from repository.",source:"@site/docs/python/19_concurrent_connections/8_tasks.md",slug:"/python/19_concurrent_connections/tasks",permalink:"/docs/python/19_concurrent_connections/tasks",editUrl:null,version:"current",sidebar_label:"Tasks",sidebar:"someSidebar",previous:{title:"Further Reading",permalink:"/docs/python/19_concurrent_connections/further_reading"},next:{title:"Jinja2 Configuration Templates",permalink:"/docs/python/20_jinja2/jinja2_configuration_templates"}},c=[{value:"Task 19.1",id:"task-191",children:[]},{value:"Task 19.2",id:"task-192",children:[]},{value:"Task 19.3",id:"task-193",children:[]},{value:"Task 19.3a",id:"task-193a",children:[]},{value:"Task 19.4",id:"task-194",children:[]}],l={toc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"All tasks and additional files can be downloaded from ",Object(r.b)("a",{parentName:"p",href:"https://github.com/natenka/pyneng-examples-exercises-en/"},"repository"),"."),Object(r.b)("p",null,"Warning"),Object(r.b)("p",null,"Starting from section \u201c4. Data types in Python\u201d there are automated tests for testing tasks. They help to check whether everything matches the task, and also give feedback on what does not correspond to the task. As a rule, after the first period of adaptation to tests, it becomes easier to do tasks with tests. Testing is done using the pyneng utility. ",Object(r.b)("a",{parentName:"p",href:"https://pyneng.readthedocs.io/en/latest/book/additional_info/pyneng.html#additional-info-pyneng"},"Learn more about how to work with the pyneng utility"),"."),Object(r.b)("h2",{id:"task-191"},"Task 19.1"),Object(r.b)("p",null,"Create a ping_ip_addresses function that checks if IP addresses are pingable. Checking IP addresses should be done concurrent in different threads."),Object(r.b)("p",null,"Ping_ip_addresses function parameters:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"ip_list - list of IP addresses"),Object(r.b)("li",{parentName:"ul"},"limit - maximum number of parallel threads (default 3)")),Object(r.b)("p",null,"The function must return a tuple with two lists:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"list of available IP addresses"),Object(r.b)("li",{parentName:"ul"},"list of unavailable IP addresses")),Object(r.b)("p",null,"You can create any additional functions to complete the task. To check the availability of an IP address, use ping."),Object(r.b)("p",null,"Note"),Object(r.b)("p",null,"A hint about working with concurrent.futures: If you need to ping several IP addresses in different threads, you need to create a function that will ping one IP address, and then run this function in different threads for different IP addresses using concurrent.futures (this last part must be done in the ping_ip_addresses function)."),Object(r.b)("h2",{id:"task-192"},"Task 19.2"),Object(r.b)("p",null,"Create a send_show_command_to_devices function that sends the same show command to different devices in concurrent threads and then writes the output of the commands to a file. The output from the devices in the file can be in any order."),Object(r.b)("p",null,"Function parameters:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"devices - a list of dictionaries with parameters for connecting to devices"),Object(r.b)("li",{parentName:"ul"},"command - show command"),Object(r.b)("li",{parentName:"ul"},"filename - is the name of a text file to which the output of all commands will be written"),Object(r.b)("li",{parentName:"ul"},"limit - maximum number of concurrent threads (default 3)")),Object(r.b)("p",null,"The function returns None."),Object(r.b)("p",null,"The output of the commands should be written to a plain text file in this format (before the output of the command, you must write the hostname and the command itself):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"R1#sh ip int br\nInterface                  IP-Address      OK? Method Status                Protocol\nEthernet0/0                192.168.100.1   YES NVRAM  up                    up\nEthernet0/1                192.168.200.1   YES NVRAM  up                    up\nR2#sh ip int br\nInterface                  IP-Address      OK? Method Status                Protocol\nEthernet0/0                192.168.100.2   YES NVRAM  up                    up\nEthernet0/1                10.1.1.1        YES NVRAM  administratively down down\nR3#sh ip int br\nInterface                  IP-Address      OK? Method Status                Protocol\nEthernet0/0                192.168.100.3   YES NVRAM  up                    up\nEthernet0/1                unassigned      YES NVRAM  administratively down down\n")),Object(r.b)("p",null,"You can create any additional functions to complete the task."),Object(r.b)("p",null,"Check the operation of the function on devices from the devices.yaml file."),Object(r.b)("h2",{id:"task-193"},"Task 19.3"),Object(r.b)("p",null,"Create a send_command_to_devices function that sends different show commands to different devices in concurrent threads and then writes the output of the commands to a file. The output from the devices in the file can be in any order."),Object(r.b)("p",null,"Function parameters:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"devices - a list of dictionaries with parameters for connecting to devices"),Object(r.b)("li",{parentName:"ul"},"commands_dict - a dictionary that specifies which device to send which command. Dictionary example - commands"),Object(r.b)("li",{parentName:"ul"},"filename is the name of the file to which the output of all commands will be written"),Object(r.b)("li",{parentName:"ul"},"limit - maximum number of concurrent threads (default 3)")),Object(r.b)("p",null,"The function returns None."),Object(r.b)("p",null,"The output of the commands should be written to a plain text file in this format (before the output of the command, you must write the hostname and the command itself):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"R1#sh ip int br\nInterface                  IP-Address      OK? Method Status                Protocol\nEthernet0/0                192.168.100.1   YES NVRAM  up                    up\nEthernet0/1                192.168.200.1   YES NVRAM  up                    up\nR2#sh int desc\nInterface                      Status         Protocol Description\nEt0/0                          up             up\nEt0/1                          up             up\nEt0/2                          admin down     down\nEt0/3                          admin down     down\nLo9                            up             up\nLo19                           up             up\nR3#sh run | s ^router ospf\nrouter ospf 1\n network 0.0.0.0 255.255.255.255 area 0\n")),Object(r.b)("p",null,"You can create any additional functions to complete the task."),Object(r.b)("p",null,"Check the operation of the function on devices from the devices.yaml file."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'# This dictionary is only needed to check the operation of the code;\n# you can change the IP addresses in it.\n# The test takes addresses from the devices.yaml file\ncommands = {\n    "192.168.100.3": "sh run | s ^router ospf",\n    "192.168.100.1": "sh ip int br",\n    "192.168.100.2": "sh int desc",\n}\n')),Object(r.b)("h2",{id:"task-193a"},"Task 19.3a"),Object(r.b)("p",null,"Create a send_command_to_devices function that sends a list of the specified show commands to different devices in concurrent threads, and then writes the output of the commands to a file. The output from the devices in the file can be in any order."),Object(r.b)("p",null,"Function parameters:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"devices - a list of dictionaries with parameters for connecting to devices"),Object(r.b)("li",{parentName:"ul"},"commands_dict - a dictionary that specifies which device to send which commands. Dictionary example - commands"),Object(r.b)("li",{parentName:"ul"},"filename is the name of the file to which the output of all commands will be written"),Object(r.b)("li",{parentName:"ul"},"limit - maximum number of parallel threads (default 3)")),Object(r.b)("p",null,"The function returns None."),Object(r.b)("p",null,"The output of the commands should be written to a plain text file in this format (before the output of the command, you must write the hostname and the command itself):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"R2#sh arp\nProtocol  Address          Age (min)  Hardware Addr   Type   Interface\nInternet  192.168.100.1          87   aabb.cc00.6500  ARPA   Ethernet0/0\nInternet  192.168.100.2           -   aabb.cc00.6600  ARPA   Ethernet0/0\nR1#sh ip int br\nInterface                  IP-Address      OK? Method Status                Protocol\nEthernet0/0                192.168.100.1   YES NVRAM  up                    up\nEthernet0/1                192.168.200.1   YES NVRAM  up                    up\nR1#sh arp\nProtocol  Address          Age (min)  Hardware Addr   Type   Interface\nInternet  10.30.0.1               -   aabb.cc00.6530  ARPA   Ethernet0/3.300\nInternet  10.100.0.1              -   aabb.cc00.6530  ARPA   Ethernet0/3.100\nR3#sh ip int br\nInterface                  IP-Address      OK? Method Status                Protocol\nEthernet0/0                192.168.100.3   YES NVRAM  up                    up\nEthernet0/1                unassigned      YES NVRAM  administratively down down\nR3#sh ip route | ex -\n\nGateway of last resort is not set\n\n      10.0.0.0/8 is variably subnetted, 4 subnets, 2 masks\nO        10.1.1.1/32 [110/11] via 192.168.100.1, 07:12:03, Ethernet0/0\nO        10.30.0.0/24 [110/20] via 192.168.100.1, 07:12:03, Ethernet0/0\n")),Object(r.b)("p",null,"Commands can be written to a file in any order. To complete the task, you can create any additional functions, as well as use the functions created in previous tasks."),Object(r.b)("p",null,"Check the operation of the function on devices from the devices.yaml file and the commands dictionary"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'# This dictionary is only needed to check the operation of the code;\n# you can change the IP addresses in it.\n# The test takes addresses from the devices.yaml file\ncommands = {\n    "192.168.100.3": ["sh ip int br", "sh ip route | ex -"],\n    "192.168.100.1": ["sh ip int br", "sh int desc"],\n    "192.168.100.2": ["sh int desc"],\n}\n')),Object(r.b)("h2",{id:"task-194"},"Task 19.4"),Object(r.b)("p",null,"Create a send_commands_to_devices function that sends a show or config command to different devices in concurrent threads and then writes the output of the commands to a file."),Object(r.b)("p",null,"Function parameters:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"devices - a list of dictionaries with parameters for connecting to devices"),Object(r.b)("li",{parentName:"ul"},"filename is the name of the file to which the output of all commands will be written"),Object(r.b)("li",{parentName:"ul"},"show - the show command to be sent (by default, the value is None)"),Object(r.b)("li",{parentName:"ul"},"config - configuration mode commands to be sent (default None)"),Object(r.b)("li",{parentName:"ul"},"limit - maximum number of parallel threads (default 3)")),Object(r.b)("p",null,"The function returns None."),Object(r.b)("p",null,"The show, config and limit arguments should only be passed as keyword arguments. Passing these arguments as positional should raise a TypeError exception."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [4]: send_commands_to_devices(devices, 'result.txt', 'sh clock')\n---------------------------------------------------------------------------\nTypeError                                 Traceback (most recent call last)\n<ipython-input-4-75adcfb4a005> in <module>\n----\x3e 1 send_commands_to_devices(devices, 'result.txt', 'sh clock')\n\nTypeError: send_commands_to_devices() takes 2 positional argument but 3 were given\n")),Object(r.b)("p",null,"When calling the send_commands_to_devices function, only one of the show, config arguments should always be passed. If both arguments are passed, a ValueError exception should be raised."),Object(r.b)("p",null,"The output of the commands should be written to a plain text file in this format (before the output of the command, you must write the hostname and the command itself):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"R1#sh ip int br\nInterface                  IP-Address      OK? Method Status                Protocol\nEthernet0/0                192.168.100.1   YES NVRAM  up                    up\nEthernet0/1                192.168.200.1   YES NVRAM  up                    up\nR2#sh arp\nProtocol  Address          Age (min)  Hardware Addr   Type   Interface\nInternet  192.168.100.1          76   aabb.cc00.6500  ARPA   Ethernet0/0\nInternet  192.168.100.2           -   aabb.cc00.6600  ARPA   Ethernet0/0\nInternet  192.168.100.3         173   aabb.cc00.6700  ARPA   Ethernet0/0\nR3#sh ip int br\nInterface                  IP-Address      OK? Method Status                Protocol\nEthernet0/0                192.168.100.3   YES NVRAM  up                    up\nEthernet0/1                unassigned      YES NVRAM  administratively down down\n")),Object(r.b)("p",null,"An example of a function call:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [5]: send_commands_to_devices(devices, 'result.txt', show='sh clock')\n\nIn [6]: cat result.txt\nR1#sh clock\n*04:56:34.668 UTC Sat Mar 23 2019\nR2#sh clock\n*04:56:34.687 UTC Sat Mar 23 2019\nR3#sh clock\n*04:56:40.354 UTC Sat Mar 23 2019\n\nIn [11]: send_commands_to_devices(devices, 'result.txt', config='logging 10.5.5.5')\n\nIn [12]: cat result.txt\nconfig term\nEnter configuration commands, one per line.  End with CNTL/Z.\nR1(config)#logging 10.5.5.5\nR1(config)#end\nR1#\nconfig term\nEnter configuration commands, one per line.  End with CNTL/Z.\nR2(config)#logging 10.5.5.5\nR2(config)#end\nR2#\nconfig term\nEnter configuration commands, one per line.  End with CNTL/Z.\nR3(config)#logging 10.5.5.5\nR3(config)#end\nR3#\n\nIn [13]: commands = ['router ospf 55', 'network 0.0.0.0 255.255.255.255 area 0']\n\nIn [13]: send_commands_to_devices(devices, 'result.txt', config=commands)\n\nIn [14]: cat result.txt\nconfig term\nEnter configuration commands, one per line.  End with CNTL/Z.\nR1(config)#router ospf 55\nR1(config-router)#network 0.0.0.0 255.255.255.255 area 0\nR1(config-router)#end\nR1#\nconfig term\nEnter configuration commands, one per line.  End with CNTL/Z.\nR2(config)#router ospf 55\nR2(config-router)#network 0.0.0.0 255.255.255.255 area 0\nR2(config-router)#end\nR2#\nconfig term\nEnter configuration commands, one per line.  End with CNTL/Z.\nR3(config)#router ospf 55\nR3(config-router)#network 0.0.0.0 255.255.255.255 area 0\nR3(config-router)#end\nR3#\n")),Object(r.b)("p",null,"You can create any additional functions to complete task."))}d.isMDXComponent=!0},281:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),h=o,m=u["".concat(i,".").concat(h)]||u[h]||p[h]||r;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);