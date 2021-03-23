(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{219:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(8),o=(n(0),n(280)),i={id:"tasks",title:"Tasks",sidebar_label:"21.7 Tasks",slug:"tasks",custom_edit_url:null},l={unversionedId:"python/textfsm/tasks",id:"python/textfsm/tasks",isDocsHomePage:!1,title:"Tasks",description:"All tasks and additional files can be downloaded from repository.",source:"@site/docs/python/textfsm/7_tasks.md",slug:"/python/textfsm/tasks",permalink:"/tr/docs/python/textfsm/tasks",editUrl:null,version:"current",sidebar_label:"21.7 Tasks",sidebar:"someSidebar",previous:{title:"Further Reading",permalink:"/tr/docs/python/textfsm/further_reading"},next:{title:"Basics Of Object-Oriented Programming",permalink:"/tr/docs/python/oop_basics/basics_of_object_oriented_programming"}},s=[{value:"Task 21.1",id:"task-211",children:[]},{value:"Task 21.1a",id:"task-211a",children:[]},{value:"Task 21.2",id:"task-212",children:[]},{value:"Task 21.3",id:"task-213",children:[]},{value:"Task 21.4",id:"task-214",children:[]},{value:"Task 21.5",id:"task-215",children:[]}],c={toc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"All tasks and additional files can be downloaded from ",Object(o.b)("a",{parentName:"p",href:"https://github.com/natenka/pyneng-examples-exercises-en/"},"repository"),"."),Object(o.b)("p",null,"Warning"),Object(o.b)("p",null,"Starting from section \u201c4. Data types in Python\u201d there are automated tests for testing tasks. They help to check whether everything matches the task, and also give feedback on what does not correspond to the task. As a rule, after the first period of adaptation to tests, it becomes easier to do tasks with tests. Testing is done using the pyneng utility. ",Object(o.b)("a",{parentName:"p",href:"https://pyneng.readthedocs.io/en/latest/book/additional_info/pyneng.html#additional-info-pyneng"},"Learn more about how to work with the pyneng utility"),"."),Object(o.b)("h2",{id:"task-211"},"Task 21.1"),Object(o.b)("p",null,"Create parse_command_output function. Function parameters:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"template - name of the file containing the TextFSM template. For example templates/sh_ip_int_br.template"),Object(o.b)("li",{parentName:"ul"},"command_output - output the corresponding show command (string)")),Object(o.b)("p",null,"The function should return a list:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"the first element is a list with column names"),Object(o.b)("li",{parentName:"ul"},"the rest of the items are lists, which contain the results of processing the output of the show command")),Object(o.b)("p",null,"Check the operation of the function on the output of the sh ip int br command from the equipment and on the templates/sh_ip_int_br.template template."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'from netmiko import ConnectHandler\n\n\n# this is how a function call should look\nif __name__ == "__main__":\n    r1_params = {\n        "device_type": "cisco_ios",\n        "host": "192.168.100.1",\n        "username": "cisco",\n        "password": "cisco",\n        "secret": "cisco",\n    }\n    with ConnectHandler(**r1_params) as r1:\n        r1.enable()\n        output = r1.send_command("sh ip int br")\n    result = parse_command_output("templates/sh_ip_int_br.template", output)\n    print(result)\n')),Object(o.b)("h2",{id:"task-211a"},"Task 21.1a"),Object(o.b)("p",null,"Create parse_output_to_dict function."),Object(o.b)("p",null,"Function parameters:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"template is the name of the file containing the TextFSM template. For example templates/sh_ip_int_br.template"),Object(o.b)("li",{parentName:"ul"},"command_output - output of the corresponding show command (string)")),Object(o.b)("p",null,"The function should return a list of dictionaries:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"keys - names of variables in the TextFSM template"),Object(o.b)("li",{parentName:"ul"},"values - parts of the output that correspond to variables")),Object(o.b)("p",null,"Check the operation of the function on the output of the command output/sh_ip_int_br.txt and the template templates/sh_ip_int_br.template."),Object(o.b)("h2",{id:"task-212"},"Task 21.2"),Object(o.b)("p",null,"Create a TextFSM template to parse the output of the sh ip dhcp snooping binding command and write it to templates/sh_ip_dhcp_snooping.template"),Object(o.b)("p",null,"The command output is located in the file output/sh_ip_dhcp_snooping.txt."),Object(o.b)("p",null,"The template should process and return the values of such columns:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"mac - 00:04:A3:3E:5B:69"),Object(o.b)("li",{parentName:"ul"},"ip - 10.1.10.6"),Object(o.b)("li",{parentName:"ul"},"vlan - 10"),Object(o.b)("li",{parentName:"ul"},"intf - FastEthernet0/10")),Object(o.b)("p",null,"Check the work of the template using the parse_command_output function from task 21.1."),Object(o.b)("h2",{id:"task-213"},"Task 21.3"),Object(o.b)("p",null,"Create function parse_command_dynamic."),Object(o.b)("p",null,"Function parameters:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"command_output - command output (string)"),Object(o.b)("li",{parentName:"ul"},"attributes_dict - an attribute dict containing the following key-value pairs:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u2018Command\u2019: command"),Object(o.b)("li",{parentName:"ul"},"\u2018Vendor\u2019: vendor"))),Object(o.b)("li",{parentName:"ul"},"index_file is the name of the file where the correspondence between commands and templates is stored. The default is \u201cindex\u201d"),Object(o.b)("li",{parentName:"ul"},"templ_path - directory where templates are stored. The default is \u201ctemplates\u201d")),Object(o.b)("p",null,"The function should return a list of dicts with the results of parsing the command output (as in task 21.1a):"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"keys - names of variables in the TextFSM template"),Object(o.b)("li",{parentName:"ul"},"values - parts of the output that correspond to variables")),Object(o.b)("p",null,"Check the function on the output of the sh ip int br command."),Object(o.b)("h2",{id:"task-214"},"Task 21.4"),Object(o.b)("p",null,"Create function send_and_parse_show_command."),Object(o.b)("p",null,"Function parameters:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"device_dict - a dict with connectin parameters for one device"),Object(o.b)("li",{parentName:"ul"},"command - the command to be executed"),Object(o.b)("li",{parentName:"ul"},"templates_path - path to the directory with TextFSM templates"),Object(o.b)("li",{parentName:"ul"},"index - file index name, default value \u201cindex\u201d")),Object(o.b)("p",null,"The function should connect to one device, send a show command using netmiko, and then parse the command output using TextFSM."),Object(o.b)("p",null,"The function should return a list of dictionaries with the results of parsing the command output (as in task 21.1a):"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"keys - names of variables in the TextFSM template"),Object(o.b)("li",{parentName:"ul"},"values - parts of the output that correspond to variables")),Object(o.b)("p",null,"Check the operation of the function using the output of the sh ip int br command and devices from devices.yaml."),Object(o.b)("h2",{id:"task-215"},"Task 21.5"),Object(o.b)("p",null,"Create function send_and_parse_command_parallel."),Object(o.b)("p",null,"The send_and_parse_command_parallel function must run the send_and_parse_show_command function from task 21.4 in concurrent threads."),Object(o.b)("p",null,"Send_and_parse_command_parallel function parameters:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"devices - a list of dicts with connection parameters for devices"),Object(o.b)("li",{parentName:"ul"},"command - command"),Object(o.b)("li",{parentName:"ul"},"templates_path - path to the directory with TextFSM templates"),Object(o.b)("li",{parentName:"ul"},"limit - maximum number of concurrent threads (default 3)")),Object(o.b)("p",null,"The function should return a dictionary:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"keys - the IP address of the device from which the output was received"),Object(o.b)("li",{parentName:"ul"},"values - a list of dicts (the output returned by the send_and_parse_show_command function)")),Object(o.b)("p",null,"Dictionary example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"{'192.168.100.1': [{'address': '192.168.100.1',\n                    'intf': 'Ethernet0/0',\n                    'protocol': 'up',\n                    'status': 'up'},\n                   {'address': '192.168.200.1',\n                    'intf': 'Ethernet0/1',\n                    'protocol': 'up',\n                    'status': 'up'}],\n '192.168.100.2': [{'address': '192.168.100.2',\n                    'intf': 'Ethernet0/0',\n                    'protocol': 'up',\n                    'status': 'up'},\n                   {'address': '10.100.23.2',\n                    'intf': 'Ethernet0/1',\n                    'protocol': 'up',\n                    'status': 'up'}]}\n")),Object(o.b)("p",null,"Check the operation of the function using the output of the sh ip int br command and devices from devices.yaml."))}u.isMDXComponent=!0},280:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,d=p["".concat(i,".").concat(b)]||p[b]||m[b]||o;return n?r.a.createElement(d,l(l({ref:t},c),{},{components:n})):r.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);