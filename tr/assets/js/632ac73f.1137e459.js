(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(3),a=n(8),i=(n(0),n(281)),r={id:"tasks",title:"Tasks",sidebar_label:"Tasks",slug:"tasks",custom_edit_url:null},s={unversionedId:"python/csv_json_yaml/tasks",id:"python/csv_json_yaml/tasks",isDocsHomePage:!1,title:"Tasks",description:"All tasks and additional files can be downloaded from repository.",source:"@site/docs/python/csv_json_yaml/5_tasks.md",slug:"/python/csv_json_yaml/tasks",permalink:"/tr/docs/python/csv_json_yaml/tasks",editUrl:null,version:"current",sidebar_label:"Tasks",sidebar:"someSidebar",previous:{title:"Further Reading",permalink:"/tr/docs/python/csv_json_yaml/further_reading"},next:{title:"Connection To Network Devices",permalink:"/tr/docs/python/ssh_telnet/connection_to_network_devices"}},l=[{value:"Task 17.1",id:"task-171",children:[]},{value:"Task 17.2",id:"task-172",children:[]},{value:"Task 17.3",id:"task-173",children:[]},{value:"Task 17.3a",id:"task-173a",children:[]},{value:"Task 17.3b",id:"task-173b",children:[]},{value:"Task 17.4",id:"task-174",children:[]}],c={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"All tasks and additional files can be downloaded from ",Object(i.b)("a",{parentName:"p",href:"https://github.com/natenka/pyneng-examples-exercises-en/"},"repository"),"."),Object(i.b)("p",null,"Warning"),Object(i.b)("p",null,"Starting from section \u201c4. Data types in Python\u201d there are automated tests for testing tasks. They help to check whether everything matches the task, and also give feedback on what does not correspond to the task. As a rule, after the first period of adaptation to tests, it becomes easier to do tasks with tests. Testing is done using the pyneng utility. ",Object(i.b)("a",{parentName:"p",href:"https://pyneng.readthedocs.io/en/latest/book/additional_info/pyneng.html#additional-info-pyneng"},"Learn more about how to work with the pyneng utility"),"."),Object(i.b)("h2",{id:"task-171"},"Task 17.1"),Object(i.b)("p",null,"Create the write_dhcp_snooping_to_csv function, which processes the output of the show dhcp snooping binding command from different files and writes the processed data to the csv file."),Object(i.b)("p",null,"Function arguments:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"filenames - list of filenames with \u201cshow dhcp snooping binding\u201d command output"),Object(i.b)("li",{parentName:"ul"},"output - the name of the csv file into which the result will be written")),Object(i.b)("p",null,"The function returns None."),Object(i.b)("p",null,"For example, if a list with one file sw3_dhcp_snooping.txt was passed as an argument:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"MacAddress          IpAddress        Lease(sec)  Type           VLAN  Interface\n------------------  ---------------  ----------  -------------  ----  --------------------\n00:E9:BC:3F:A6:50   100.1.1.6        76260       dhcp-snooping   3    FastEthernet0/20\n00:E9:22:11:A6:50   100.1.1.7        76260       dhcp-snooping   3    FastEthernet0/21\nTotal number of bindings: 2\n")),Object(i.b)("p",null,"The resulting csv file should contain the following content:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"switch,mac,ip,vlan,interface\nsw3,00:E9:BC:3F:A6:50,100.1.1.6,3,FastEthernet0/20\nsw3,00:E9:22:11:A6:50,100.1.1.7,3,FastEthernet0/21\n")),Object(i.b)("p",null,"The first column in the csv file, the name of the switch, must be obtained from the file name, the rest - from the contents in the files."),Object(i.b)("p",null,"Check the function on the contents of the files sw1_dhcp_snooping.txt, sw2_dhcp_snooping.txt, sw3_dhcp_snooping.txt."),Object(i.b)("h2",{id:"task-172"},"Task 17.2"),Object(i.b)("p",null,"In this task you need:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"take the contents of several files with the output of the sh version command"),Object(i.b)("li",{parentName:"ul"},"parse command output using regular expressions and get device information"),Object(i.b)("li",{parentName:"ul"},"write this information to a file in CSV format")),Object(i.b)("p",null,"To complete the task, you need to create two functions."),Object(i.b)("p",null,"parse_sh_version function:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"expects the output of the sh version command as an argument in single string (not a filename)"),Object(i.b)("li",{parentName:"ul"},"processes output using regular expressions"),Object(i.b)("li",{parentName:"ul"},"returns a tuple of three elements:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"ios - \u201c12.4(5)T\u201d"),Object(i.b)("li",{parentName:"ul"},"image - \u201cflash:c2800-advipservicesk9-mz.124-5.T.bin\u201d"),Object(i.b)("li",{parentName:"ul"},"uptime - \u201c5 days, 3 hours, 3 minutes\u201d")))),Object(i.b)("p",null,"The write_inventory_to_csv function must have two parameters:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"data_filenames - expects a list of filenames as an argument with the output of sh version"),Object(i.b)("li",{parentName:"ul"},"csv_filename - expects as an argument the name of a file (for example, routers_inventory.csv) to which information will be written in CSV format")),Object(i.b)("p",null,"write_inventory_to_csv function writes the contents to a file, in CSV format and returns nothing."),Object(i.b)("p",null,"The write_inventory_to_csv function should do the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"process information from each file with sh version output: sh_version_r1.txt, sh_version_r2.txt, sh_version_r3.txt"),Object(i.b)("li",{parentName:"ul"},"using the parse_sh_version function, ios, image, uptime information should be obtained from each output"),Object(i.b)("li",{parentName:"ul"},"from the file name you need to get the hostname"),Object(i.b)("li",{parentName:"ul"},"after that all information should be written to a CSV file")),Object(i.b)("p",null,"The routers_inventory.csv file should have the following columns (in this order): hostname, ios, image, uptime"),Object(i.b)("p",null,"The code below has created a list of files using the glob module. You can uncomment the print(sh_version_files) line to see the content of the list."),Object(i.b)("p",null,"In addition, a list of headers has been created, which should be written to CSV."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'import glob\n\nsh_version_files = glob.glob("sh_vers*")\n#print(sh_version_files)\n\nheaders = ["hostname", "ios", "image", "uptime"]\n')),Object(i.b)("h2",{id:"task-173"},"Task 17.3"),Object(i.b)("p",null,"Create a function parse_sh_cdp_neighbors that processes the output of the show cdp neighbors command."),Object(i.b)("p",null,"The function expects, as an argument, the output of the command as a single string (not a filename). The function should return a dictionary that describes the connections between devices."),Object(i.b)("p",null,"For example, if the following output was passed as an argument:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"R4>show cdp neighbors\n\nDevice ID    Local Intrfce   Holdtme     Capability       Platform    Port ID\nR5           Fa 0/1          122           R S I           2811       Fa 0/1\nR6           Fa 0/2          143           R S I           2811       Fa 0/0\n")),Object(i.b)("p",null,"The function should return a dictionary like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'{"R4": {"Fa 0/1": {"R5": "Fa 0/1"},\n        "Fa 0/2": {"R6": "Fa 0/0"}}}\n')),Object(i.b)("p",null,"Interfaces must be written with a space. That is, so Fa 0/0, and not so Fa0/0."),Object(i.b)("p",null,"Check the function on the contents of the sh_cdp_n_sw1.txt file"),Object(i.b)("h2",{id:"task-173a"},"Task 17.3a"),Object(i.b)("p",null,"Create a generate_topology_from_cdp function that processes the show cdp neighbor command output from multiple files and writes the resulting topology to a single dictionary."),Object(i.b)("p",null,"The generate_topology_from_cdp function must be created with parameters:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"list_of_files - list of files from which to read the output of the sh cdp neighbor command"),Object(i.b)("li",{parentName:"ul"},"save_to_filename is the name of the YAML file where the topology will be saved.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"default is None. By default, the topology is not saved to a file."),Object(i.b)("li",{parentName:"ul"},"topology is saved only if save_to_filename is file name as argument")))),Object(i.b)("p",null,"The function should return a dictionary that describes the connections between devices, regardless of whether the topology is saved to a file."),Object(i.b)("p",null,"Dictionary example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'{"R4": {"Fa 0/1": {"R5": "Fa 0/1"},\n        "Fa 0/2": {"R6": "Fa 0/0"}},\n "R5": {"Fa 0/1": {"R4": "Fa 0/1"}},\n "R6": {"Fa 0/0": {"R4": "Fa 0/2"}}}\n')),Object(i.b)("p",null,"Interfaces must be written with a space. That is, so Fa 0/0, and not so Fa0/0."),Object(i.b)("p",null,"Check the work of the generate_topology_from_cdp function on the list of files:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"sh_cdp_n_sw1.txt"),Object(i.b)("li",{parentName:"ul"},"sh_cdp_n_r1.txt"),Object(i.b)("li",{parentName:"ul"},"sh_cdp_n_r2.txt"),Object(i.b)("li",{parentName:"ul"},"sh_cdp_n_r3.txt"),Object(i.b)("li",{parentName:"ul"},"sh_cdp_n_r4.txt"),Object(i.b)("li",{parentName:"ul"},"sh_cdp_n_r5.txt"),Object(i.b)("li",{parentName:"ul"},"sh_cdp_n_r6.txt")),Object(i.b)("p",null,"Check the operation of the save_to_filename parameter and write the resulting dictionary to the topology.yaml file. You will need it in the next task."),Object(i.b)("h2",{id:"task-173b"},"Task 17.3b"),Object(i.b)("p",null,"Create a transform_topology function that converts the topology to a format suitable for the draw_topology function."),Object(i.b)("p",null,"The function expects a YAML filename as an argument in which the topology is stored."),Object(i.b)("p",null,"The function must read data from the YAML file, transform it accordingly, so that the function returns a dictionary of the following form:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'{("R4", "Fa 0/1"): ("R5", "Fa 0/1"),\n ("R4", "Fa 0/2"): ("R6", "Fa 0/0")}\n')),Object(i.b)("p",null,"The transform_topology function should not only change the format of the topology representation, but also remove the \u201cduplicate\u201d connections (they are best seen in the diagram that the draw_topology function generates from the draw_network_graph.py file). \u201cDuplicate\u201d connections are connections of this kind:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'("R1", "Eth0/0"): ("SW1", "Eth0/1")\n("SW1", "Eth0/1"): ("R1", "Eth0/0")\n')),Object(i.b)("p",null,"Due to the fact that the same link is described twice, there will be extra connections on the diagram. The task is to leave only one of these links in the final dictionary, does not matter which one."),Object(i.b)("p",null,"Check the operation of the function on the topology.yaml file (must be created in task 17.3a). Based on the resulting dictionary, you need to generate a topology image using the draw_topology function. Do not copy draw_topology function code from draw_network_graph.py file."),Object(i.b)("p",null,"The result should look the same as the diagram in the task_17_3b_topology.svg file:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Interfaces must be written with a space Fa 0/0"),Object(i.b)("li",{parentName:"ul"},"The arrangement of devices on the diagram may be different"),Object(i.b)("li",{parentName:"ul"},"Connections must match the diagram"),Object(i.b)("li",{parentName:"ul"},"There should be no \u201cduplicate\u201d links on the diagram")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/natenka/pyneng-examples-exercises/master/exercises/17_serialization/task_17_3b_topology.png",alt:"https://raw.githubusercontent.com/natenka/pyneng-examples-exercises/master/exercises/17_serialization/task_17_3b_topology.png"})),Object(i.b)("p",null,"Note"),Object(i.b)("p",null,"To complete this task, graphviz must be installed: apt-get install graphviz"),Object(i.b)("p",null,"And a python module to work with graphviz: pip install graphviz"),Object(i.b)("h2",{id:"task-174"},"Task 17.4"),Object(i.b)("p",null,"Create function write_last_log_to_csv."),Object(i.b)("p",null,"Function arguments:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"source_log - the name of the csv file from which the data is read (mail_log.csv)"),Object(i.b)("li",{parentName:"ul"},"output - the name of the csv file into which the result will be written")),Object(i.b)("p",null,"The function returns None."),Object(i.b)("p",null,"The write_last_log_to_csv function processes the csv file mail_log.csv. The mail_log.csv file contains the logs of the username change. User cannot change email, only username."),Object(i.b)("p",null,"The write_last_log_to_csv function should select from the mail_log.csv file only the most recent entries for each user and write them to another csv file. In the output file, the first line should be the column headers as in the source_log file."),Object(i.b)("p",null,"For some users, there is only one record, and then it is necessary to write to the final file only her. For some users, there are multiple entries with different names. For example, a user with email ",Object(i.b)("a",{parentName:"p",href:"mailto:c3po%40gmail.com"},"c3po@gmail.com")," changed his username several times:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"C=3PO,c3po@gmail.com,16/12/2019 17:10\nC3PO,c3po@gmail.com,16/12/2019 17:15\nC-3PO,c3po@gmail.com,16/12/2019 17:24\n")),Object(i.b)("p",null,"Of these three records, only one should be written to the final file - the most recent:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"C-3PO,c3po@gmail.com,16/12/2019 17:24\n")),Object(i.b)("p",null,"It is convenient to use datetime objects from the datetime module for comparing dates. To make it easier to work with dates, the convert_str_to_datetime function has been created - it converts a date string in the format 11/10/2019 14:05 into a datetime object. The resulting datetime objects can be compared with each other. The second function, convert_datetime_to_str, does the opposite \u2014 it turns a datetime object into a string."),Object(i.b)("p",null,"It is not necessary to use the functions convert_str_to_datetime and convert_datetime_to_str"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'import datetime\n\n\ndef convert_str_to_datetime(datetime_str):\n    """\n    Converts a date string formatted as 11/10/2019 14:05 to a datetime object.\n    """\n    return datetime.datetime.strptime(datetime_str, "%d/%m/%Y %H:%M")\n\n\ndef convert_datetime_to_str(datetime_obj):\n    """\n    Converts a datetime object to a date string in the format 11/10/2019 14:05.\n    """\n    return datetime.datetime.strftime(datetime_obj, "%d/%m/%Y %H:%M")\n')))}u.isMDXComponent=!0},281:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=o,m=p["".concat(r,".").concat(b)]||p[b]||h[b]||i;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);