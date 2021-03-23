(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{181:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return r})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return d}));var o=t(3),a=t(8),c=(t(0),t(281)),i={id:"tasks",title:"Tasks",sidebar_label:"Tasks",slug:"tasks",custom_edit_url:null},r={unversionedId:"python/18_ssh_telnet/tasks",id:"python/18_ssh_telnet/tasks",isDocsHomePage:!1,title:"Tasks",description:"All tasks and additional files can be downloaded from repository.",source:"@site/docs/python/18_ssh_telnet/8_tasks.md",slug:"/python/18_ssh_telnet/tasks",permalink:"/tr/docs/python/18_ssh_telnet/tasks",editUrl:null,version:"current",sidebar_label:"Tasks",sidebar:"someSidebar",previous:{title:"Further Reading",permalink:"/tr/docs/python/18_ssh_telnet/further_reading"},next:{title:"Concurent Connections To Multiple Devices",permalink:"/tr/docs/python/19_concurrent_connections/concurent_connections_to_multiple_devices"}},s=[{value:"Task 18.1",id:"task-181",children:[]},{value:"Task 18.1a",id:"task-181a",children:[]},{value:"Task 18.1b",id:"task-181b",children:[]},{value:"Task 18.2",id:"task-182",children:[]},{value:"Task 18.2a",id:"task-182a",children:[]},{value:"Task 18.2b",id:"task-182b",children:[]},{value:"Task 18.2c",id:"task-182c",children:[]},{value:"Task 18.3",id:"task-183",children:[]}],l={toc:s};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"All tasks and additional files can be downloaded from ",Object(c.b)("a",{parentName:"p",href:"https://github.com/natenka/pyneng-examples-exercises-en/"},"repository"),"."),Object(c.b)("p",null,"Warning"),Object(c.b)("p",null,"Starting from section \u201c4. Data types in Python\u201d there are automated tests for testing tasks. They help to check whether everything matches the task, and also give feedback on what does not correspond to the task. As a rule, after the first period of adaptation to tests, it becomes easier to do tasks with tests. Testing is done using the pyneng utility. ",Object(c.b)("a",{parentName:"p",href:"https://pyneng.readthedocs.io/en/latest/book/additional_info/pyneng.html#additional-info-pyneng"},"Learn more about how to work with the pyneng utility"),"."),Object(c.b)("h2",{id:"task-181"},"Task 18.1"),Object(c.b)("p",null,"Create send_show_command function."),Object(c.b)("p",null,"The function connects via SSH (using netmiko) to ONE device and executes the specified command."),Object(c.b)("p",null,"Function parameters:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"device - a dictionary with parameters for connecting to a device"),Object(c.b)("li",{parentName:"ul"},"command - the command to be executed")),Object(c.b)("p",null,"The function should return a string with the command output."),Object(c.b)("p",null,"The script should send command command to all devices from the devices.yaml file using the send_show_command function (this part of the code is written)."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'import yaml\n\n\nif __name__ == "__main__":\n    command = "sh ip int br"\n    with open("devices.yaml") as f:\n        devices = yaml.safe_load(f)\n\n    for dev in devices:\n        print(send_show_command(dev, command))\n')),Object(c.b)("h2",{id:"task-181a"},"Task 18.1a"),Object(c.b)("p",null,"Copy the send_show_command function from task 18.1 and rewrite it to handle the exception that is thrown on authentication failure on the device."),Object(c.b)("p",null,"When an error occurs, an exception message should be printed to stdout."),Object(c.b)("p",null,"To verify, change the password on the device or in the devices.yaml file."),Object(c.b)("h2",{id:"task-181b"},"Task 18.1b"),Object(c.b)("p",null,"Copy the send_show_command function from task 18.1a and rewrite it to handle not only the exception that is raised when authentication fails on the device, but also the exception that is raised when the IP address of the device is not available."),Object(c.b)("p",null,"When an error occurs, an exception message should be printed to standard output."),Object(c.b)("p",null,"To check, change the IP address on the device or in the devices.yaml file."),Object(c.b)("h2",{id:"task-182"},"Task 18.2"),Object(c.b)("p",null,"Create send_config_commands function"),Object(c.b)("p",null,"The function connects via SSH (using netmiko) to ONE device and executes a list of commands in configuration mode based on the passed arguments."),Object(c.b)("p",null,"Function parameters:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"device - a dictionary with parameters for connecting to a device"),Object(c.b)("li",{parentName:"ul"},"config_commands - list of configuration commands to be executed")),Object(c.b)("p",null,"The function should return a string with the results of the command:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},"In [7]: r1\nOut[7]:\n{'device_type': 'cisco_ios',\n 'ip': '192.168.100.1',\n 'username': 'cisco',\n 'password': 'cisco',\n 'secret': 'cisco'}\n\nIn [8]: commands\nOut[8]: ['logging 10.255.255.1', 'logging buffered 20010', 'no logging console']\n\nIn [9]: result = send_config_commands(r1, commands)\n\nIn [10]: result\nOut[10]: 'config term\\nEnter configuration commands, one per line.  End with CNTL/Z.\\nR1(config)#logging 10.255.255.1\\nR1(config)#logging buffered 20010\\nR1(config)#no logging console\\nR1(config)#end\\nR1#'\n\nIn [11]: print(result)\nconfig term\nEnter configuration commands, one per line.  End with CNTL/Z.\nR1(config)#logging 10.255.255.1\nR1(config)#logging buffered 20010\nR1(config)#no logging console\nR1(config)#end\nR1#\n")),Object(c.b)("p",null,"The script should send command command to all devices from the devices.yaml file using the send_config_commands function."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"commands = [\n    'logging 10.255.255.1', 'logging buffered 20010', 'no logging console'\n]\n")),Object(c.b)("h2",{id:"task-182a"},"Task 18.2a"),Object(c.b)("p",null,"Copy the send_config_commands function from job 18.2 and add the log parameter. The log parameter controls whether information is displayed about which device the connection is to:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"if log is equal to True - information is printed"),Object(c.b)("li",{parentName:"ul"},"if log is equal to False - information is not printed")),Object(c.b)("p",null,"By default, log is equal to True."),Object(c.b)("p",null,"An example of how the function works:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},"In [13]: result = send_config_commands(r1, commands)\nConnecting to 192.168.100.1...\n\nIn [14]: result = send_config_commands(r1, commands, log=False)\n\nIn [15]:\n")),Object(c.b)("p",null,"The script should send command command to all devices from the devices.yaml file using the send_config_commands function."),Object(c.b)("h2",{id:"task-182b"},"Task 18.2b"),Object(c.b)("p",null,"Copy the send_config_commands function from task 18.2a and add error checking."),Object(c.b)("p",null,"When executing each command, the script should check the output for the following errors: Invalid input detected, Incomplete command, Ambiguous command"),Object(c.b)("p",null,"If an error occurs while executing any of the commands, the function should print a message to the stdout with information about what error occurred, in which command and on which device, for example: The \u201clogging\u201d command was executed with the error \u201cIncomplete command.\u201d on the device 192.168.100.1"),Object(c.b)("p",null,"Errors should always be printed, regardless of the value of the log parameter. At the same time, the log parameter should still control whether the message \u201cConnecting to 192.168.100.1\u2026\u201d will be displayed."),Object(c.b)("p",null,"Send_config_commands should now return a tuple of two dictionaries:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"the first dict with the output of commands that were executed without error"),Object(c.b)("li",{parentName:"ul"},"second dict with the output of commands that were executed with errors")),Object(c.b)("p",null,"In both dictionaries:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"key - command"),Object(c.b)("li",{parentName:"ul"},"value - output with command execution")),Object(c.b)("p",null,"You can test the function on one device."),Object(c.b)("p",null,"An example of how the send_config_commands function works:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},"In [16]: commands\nOut[16]:\n['logging 0255.255.1',\n 'logging',\n 'a',\n 'logging buffered 20010',\n 'ip http server']\n\nIn [17]: result = send_config_commands(r1, commands)\nConnecting to 192.168.100.1...\n\"logging 0255.255.1\" command was executed with error \"Invalid input detected at '^' marker.\" on device 192.168.100.1\n\"logging\" command was executed with error \"Incomplete command.\" on device 192.168.100.1\n\"a\" command was executed with error \"Ambiguous command:  \"a\"\" on device 192.168.100.1\n\nIn [18]: pprint(result, width=120)\n({'ip http server': 'config term\\n'\n                    'Enter configuration commands, one per line.  End with CNTL/Z.\\n'\n                    'R1(config)#ip http server\\n'\n                    'R1(config)#',\n  'logging buffered 20010': 'config term\\n'\n                            'Enter configuration commands, one per line.  End with CNTL/Z.\\n'\n                            'R1(config)#logging buffered 20010\\n'\n                            'R1(config)#'},\n {'a': 'config term\\n'\n       'Enter configuration commands, one per line.  End with CNTL/Z.\\n'\n       'R1(config)#a\\n'\n       '% Ambiguous command:  \"a\"\\n'\n       'R1(config)#',\n  'logging': 'config term\\n'\n             'Enter configuration commands, one per line.  End with CNTL/Z.\\n'\n             'R1(config)#logging\\n'\n             '% Incomplete command.\\n'\n             '\\n'\n             'R1(config)#',\n  'logging 0255.255.1': 'config term\\n'\n                        'Enter configuration commands, one per line.  End with CNTL/Z.\\n'\n                        'R1(config)#logging 0255.255.1\\n'\n                        '                   ^\\n'\n                        \"% Invalid input detected at '^' marker.\\n\"\n                        '\\n'\n                        'R1(config)#'})\n\nIn [19]: good, bad = result\n\nIn [20]: good.keys()\nOut[20]: dict_keys(['logging buffered 20010', 'ip http server'])\n\nIn [21]: bad.keys()\nOut[21]: dict_keys(['logging 0255.255.1', 'logging', 'a'])\n")),Object(c.b)("p",null,"Examples of commands with errors:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"R1(config)#logging 0255.255.1\n                   ^\n% Invalid input detected at '^' marker.\n\nR1(config)#logging\n% Incomplete command.\n\nR1(config)#a\n% Ambiguous command:  \"a\"\n")),Object(c.b)("p",null,"Lists of command lists with and without errors:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"commands_with_errors = ['logging 0255.255.1', 'logging', 'a']\ncorrect_commands = ['logging buffered 20010', 'ip http server']\n\ncommands = commands_with_errors + correct_commands\n")),Object(c.b)("h2",{id:"task-182c"},"Task 18.2c"),Object(c.b)("p",null,"Copy the send_config_commands function from task 18.2b and remake it as follows: If an error occurs while executing a command, ask the user whether to continue executing other commands."),Object(c.b)("p",null,"Answer options ","[y]","/n:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"y - execute other commands. This is the default, so any key is interpreted as y"),Object(c.b)("li",{parentName:"ul"},"n or no - do not execute other commands")),Object(c.b)("p",null,"The send_config_commands function should still return a tuple of two dictionaries:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"the first dictionary with the output of commands that were executed without error"),Object(c.b)("li",{parentName:"ul"},"second dictionary with the output of commands that were executed with errors")),Object(c.b)("p",null,"In both dictionaries:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"key - command"),Object(c.b)("li",{parentName:"ul"},"value - output with command execution")),Object(c.b)("p",null,"You can test the function on one device."),Object(c.b)("p",null,"An example of how the send_config_commands function works:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},"In [11]: result = send_config_commands(r1, commands)\nConnecting to 192.168.100.1...\n\"logging 0255.255.1\" command was executed with error \"Invalid input detected at '^' marker.\" on device 192.168.100.1\nContinue commands execution? [y]/n: y\n\"logging\" command was executed with error \"Incomplete command.\" on device 192.168.100.1\nContinue commands execution? [y]/n: n\n\nIn [12]: pprint(result)\n({},\n {'logging': 'config term\\n'\n             'Enter configuration commands, one per line.  End with CNTL/Z.\\n'\n             'R1(config)#logging\\n'\n             '% Incomplete command.\\n'\n             '\\n'\n             'R1(config)#',\n  'logging 0255.255.1': 'config term\\n'\n                        'Enter configuration commands, one per line.  End with '\n                        'CNTL/Z.\\n'\n                        'R1(config)#logging 0255.255.1\\n'\n                        '                   ^\\n'\n                        \"% Invalid input detected at '^' marker.\\n\"\n                        '\\n'\n                        'R1(config)#'})\n")),Object(c.b)("p",null,"Lists of commands with and without errors:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"commands_with_errors = ['logging 0255.255.1', 'logging', 'a']\ncorrect_commands = ['logging buffered 20010', 'ip http server']\n\ncommands = commands_with_errors + correct_commands\n")),Object(c.b)("h2",{id:"task-183"},"Task 18.3"),Object(c.b)("p",null,"Create a send_commands function (use netmiko to connect via SSH)."),Object(c.b)("p",null,"Function parameters:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"device - a dictionary with parameters for connecting to one device"),Object(c.b)("li",{parentName:"ul"},"show - one show command (string)"),Object(c.b)("li",{parentName:"ul"},"config - a list with commands to be executed in configuration mode")),Object(c.b)("p",null,"The show and config arguments should only be passed as keyword arguments. Passing these arguments as positional should raise a TypeError exception."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},"In [4]: send_commands(r1, 'sh clock')\n---------------------------------------------------------------------------\nTypeError                                 Traceback (most recent call last)\n<ipython-input-4-75adcfb4a005> in <module>\n----\x3e 1 send_commands(r1, 'sh clock')\n\nTypeError: send_commands() takes 1 positional argument but 2 were given\n")),Object(c.b)("p",null,"Depending on which argument was passed, the send_commands function calls different functions internally. When calling the send_commands function, only one of the show, config arguments should always be passed. If both arguments are passed, a ValueError exception should be raised."),Object(c.b)("p",null,"A combination of an argument and a corresponding function:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"show - the send_show_command function from task 18.1"),Object(c.b)("li",{parentName:"ul"},"config - send_config_commands function from task 18.2")),Object(c.b)("p",null,"The function returns a string with the results of executing single command or multiple commands."),Object(c.b)("p",null,"Check function operation:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"with a list of config commands in variable commands"),Object(c.b)("li",{parentName:"ul"},"single show command in variable command")),Object(c.b)("p",null,"An example of how the function works:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},"In [14]: send_commands(r1, show='sh clock')\nOut[14]: '*17:06:12.278 UTC Wed Mar 13 2019'\n\nIn [15]: send_commands(r1, config=['username user5 password pass5', 'username user6 password pass6'])\nOut[15]: 'config term\\nEnter configuration commands, one per line.  End with CNTL/Z.\\nR1(config)#username user5 password pass5\\nR1(config)#username user6 password pass6\\nR1(config)#end\\nR1#'\n")),Object(c.b)("p",null,"Commands example:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"commands = ['logging 10.255.255.1', 'logging buffered 20010']\ncommand = 'sh ip int br'\n")))}d.isMDXComponent=!0},281:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var o=t(0),a=t.n(o);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),d=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=d(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=d(t),p=o,b=m["".concat(i,".").concat(p)]||m[p]||u[p]||c;return t?a.a.createElement(b,r(r({ref:n},l),{},{components:t})):a.a.createElement(b,r({ref:n},l))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=p;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var l=2;l<c;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);