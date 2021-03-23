(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{257:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var o=t(3),i=t(8),a=(t(0),t(280)),r={id:"module_netmiko",title:"Module Netmiko",sidebar_label:"18.6 Module Netmiko",slug:"module_netmiko",custom_edit_url:null},c={unversionedId:"python/ssh_telnet/module_netmiko",id:"python/ssh_telnet/module_netmiko",isDocsHomePage:!1,title:"Module Netmiko",description:"Netmiko is a module that makes it easier to use paramiko for network devices. Netmiko uses paramiko but also creates interface and methods needed to work with network devices.",source:"@site/docs/python/ssh_telnet/6_module_netmiko.md",slug:"/python/ssh_telnet/module_netmiko",permalink:"/docs/python/ssh_telnet/module_netmiko",editUrl:null,version:"current",sidebar_label:"18.6 Module Netmiko",sidebar:"someSidebar",previous:{title:"Module Paramiko",permalink:"/docs/python/ssh_telnet/module_paramiko"},next:{title:"Further Reading",permalink:"/docs/python/ssh_telnet/further_reading"}},l=[{value:"Supported device types",id:"supported-device-types",children:[]},{value:"Dictionary for defining device parameters",id:"dictionary-for-defining-device-parameters",children:[]},{value:"Connect via SSH",id:"connect-via-ssh",children:[]},{value:"Enable mode",id:"enable-mode",children:[]},{value:"Sending commands",id:"sending-commands",children:[{value:"<code>send_command</code>",id:"send_command",children:[]},{value:"<code>send_config_from_file</code>",id:"send_config_from_file",children:[]}]},{value:"Additional methods",id:"additional-methods",children:[]},{value:"Telnet support",id:"telnet-support",children:[]},{value:"Example of netmiko use",id:"example-of-netmiko-use",children:[]},{value:"Paginated command output",id:"paginated-command-output",children:[]}],m={toc:l};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Netmiko is a module that makes it easier to use paramiko for network devices. Netmiko uses paramiko but also creates interface and methods needed to work with network devices."),Object(a.b)("p",null,"First you need to install netmiko:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"pip install netmiko\n")),Object(a.b)("h2",{id:"supported-device-types"},"Supported device types"),Object(a.b)("p",null,"Netmiko supports several types of devices:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Arista vEOS"),Object(a.b)("li",{parentName:"ul"},"Cisco ASA"),Object(a.b)("li",{parentName:"ul"},"Cisco IOS"),Object(a.b)("li",{parentName:"ul"},"Cisco IOS-XR"),Object(a.b)("li",{parentName:"ul"},"Cisco SG300"),Object(a.b)("li",{parentName:"ul"},"HP Comware7"),Object(a.b)("li",{parentName:"ul"},"HP ProCurve"),Object(a.b)("li",{parentName:"ul"},"Juniper Junos"),Object(a.b)("li",{parentName:"ul"},"Linux"),Object(a.b)("li",{parentName:"ul"},"and other")),Object(a.b)("p",null,"The whole list can be viewed in module ",Object(a.b)("a",{parentName:"p",href:"https://github.com/ktbyers/netmiko"},"repository"),"."),Object(a.b)("h2",{id:"dictionary-for-defining-device-parameters"},"Dictionary for defining device parameters"),Object(a.b)("p",null,"Dictionary may have the next parameters:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"cisco_router = {\n    'device_type': 'cisco_ios',\n    'host': '192.168.1.1',\n    'username': 'user',\n    'password': 'userpass',\n    'secret': 'enablepass',\n    'port': 20022,\n}\n")),Object(a.b)("h2",{id:"connect-via-ssh"},"Connect via SSH"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"ssh = ConnectHandler(**cisco_router)\n")),Object(a.b)("h2",{id:"enable-mode"},"Enable mode"),Object(a.b)("p",null,"Switch to enable mode:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"ssh.enable()\n")),Object(a.b)("p",null,"Exit enable mode:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"ssh.exit_enable_mode()\n")),Object(a.b)("h2",{id:"sending-commands"},"Sending commands"),Object(a.b)("p",null,"Netmiko has several ways to send commands:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"send_command")," - send one command"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"send_config_set")," - send list of commands or command in configuration mode"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"send_config_from_file")," - send commands from the file (uses ",Object(a.b)("inlineCode",{parentName:"li"},"send_config_set")," method inside)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"send_command_timing")," - send command and wait for the output based on timer")),Object(a.b)("h3",{id:"send_command"},Object(a.b)("inlineCode",{parentName:"h3"},"send_command")),Object(a.b)("p",null,"Method send_command allows you to send one command to device."),Object(a.b)("p",null,"For example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"result = ssh.send_command('show ip int br')\n")),Object(a.b)("p",null,"Method works as follows:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"sends command to device and gets the output until string with prompt or until specified string"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"prompt is automatically determined"),Object(a.b)("li",{parentName:"ul"},"if your device does not determine it, you can simply specify a string till which to read the output"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"send_command_expect")," method previously worked this way, but since version")),Object(a.b)("blockquote",{parentName:"li"},Object(a.b)("p",{parentName:"blockquote"},"1.0.0 this is how send_command works and send_command_expect method is left for compatibility"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"method returns command output")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"the following parameters can be passed to method:"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"command_string")," - command"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"expect_string")," - to which substring to read the output"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"delay_factor")," - option allows to increase delay before the start of string search"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"max_loops")," - number of iterations before method gives out an error (exception). By default 500"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"strip_prompt")," - remove prompt from the output. Removed by default"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"strip_command")," - remove command from output")))),Object(a.b)("p",null,"In most cases, only command will be sufficient to specify."),Object(a.b)("h4",{id:"send_config_set"},Object(a.b)("inlineCode",{parentName:"h4"},"send_config_set")),Object(a.b)("p",null,"Method ",Object(a.b)("inlineCode",{parentName:"p"},"send_config_set")," allows you to send command or multiple commands in configuration mode."),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"commands = ['router ospf 1',\n            'network 10.0.0.0 0.255.255.255 area 0',\n            'network 192.168.100.0 0.0.0.255 area 1']\n\nresult = ssh.send_config_set(commands)\n")),Object(a.b)("p",null,"Method works as follows:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"goes into configuration mode,"),Object(a.b)("li",{parentName:"ul"},"then passes all commands"),Object(a.b)("li",{parentName:"ul"},"and exits configuration mode"),Object(a.b)("li",{parentName:"ul"},"depending on device type, there may be no exit from configuration mode. For example, there will be no exit for IOS-XR because you first have to commit changes")),Object(a.b)("h3",{id:"send_config_from_file"},Object(a.b)("inlineCode",{parentName:"h3"},"send_config_from_file")),Object(a.b)("p",null,"Method ",Object(a.b)("inlineCode",{parentName:"p"},"send_config_from_file")," sends commands from specified file to configuration mode."),Object(a.b)("p",null,"Example of use:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"result = ssh.send_config_from_file('config_ospf.txt')\n")),Object(a.b)("p",null,"Method opens a file, reads commands and passes them to ",Object(a.b)("inlineCode",{parentName:"p"},"send_config_set")," method."),Object(a.b)("h2",{id:"additional-methods"},"Additional methods"),Object(a.b)("p",null,"Besides the above methods for sending commands, netmiko supports such methods:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"config_mode")," - switch to configuration mode: ",Object(a.b)("inlineCode",{parentName:"li"},"ssh.config_mode")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"exit_config_mode")," - exit configuration mode: ",Object(a.b)("inlineCode",{parentName:"li"},"ssh.exit_config_mode")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"check_config_mode")," - check whether netmiko is in configuration mode (returns True if in configuration mode and False if not): ",Object(a.b)("inlineCode",{parentName:"li"},"ssh.check_config_mode")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"find_prompt")," - returns the current prompt of device: ",Object(a.b)("inlineCode",{parentName:"li"},"ssh.find_prompt")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"commit")," - commit on IOS-XR and Juniper: ",Object(a.b)("inlineCode",{parentName:"li"},"ssh.commit")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"disconnect")," - terminate SSH connection")),Object(a.b)("p",null,"Note"),Object(a.b)("p",null,"Variable ssh is a pre-created SSH connection: ",Object(a.b)("inlineCode",{parentName:"p"},"ssh = ConnectHandler(**cisco_router)")),Object(a.b)("h2",{id:"telnet-support"},"Telnet support"),Object(a.b)("p",null,"Since version 1.0.0 netmiko supports Telnet connections, so far only for Cisco IOS devices. Inside netmiko uses telnetlib to connect via Telnet. But, at the same time, it provides the same interface for work as for SSH connection."),Object(a.b)("p",null,"In order to connect via Telnet, it is enough in the dictionary that defines connection parameters specify device type ",Object(a.b)("inlineCode",{parentName:"p"},"cisco_ios_telnet"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'device = {\n    "device_type": "cisco_ios_telnet",\n    "host": "192.168.100.1",\n    "username": "cisco",\n    "password": "cisco",\n    "secret": "cisco",\n}\n')),Object(a.b)("p",null,"Otherwise, methods that apply to SSH apply to Telnet. An example similar to SSH (4_netmiko_telnet.py file):"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'from pprint import pprint\nimport yaml\nfrom netmiko import (\n    ConnectHandler,\n    NetmikoTimeoutException,\n    NetmikoAuthenticationException,\n)\n\n\ndef send_show_command(device, commands):\n    result = {}\n    try:\n        with ConnectHandler(**device) as ssh:\n            ssh.enable()\n            for command in commands:\n                output = ssh.send_command(command)\n                result[command] = output\n        return result\n    except (NetmikoTimeoutException, NetmikoAuthenticationException) as error:\n        print(error)\n\n\nif __name__ == "__main__":\n    device = {\n        "device_type": "cisco_ios_telnet",\n        "host": "192.168.100.1",\n        "username": "cisco",\n        "password": "cisco",\n        "secret": "cisco",\n    }\n    result = send_show_command(device, ["sh clock", "sh ip int br"])\n    pprint(result, width=120)\n')),Object(a.b)("p",null,"Other methods works similarly:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"send_command_timing")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"find_prompt")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"send_config_set")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"send_config_from_file")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"check_enable_mode")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"disconnect"))),Object(a.b)("h2",{id:"example-of-netmiko-use"},"Example of netmiko use"),Object(a.b)("p",null,"Example of netmiko use (4_netmiko.py file):"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'from pprint import pprint\nimport yaml\nfrom netmiko import (\n    ConnectHandler,\n    NetmikoTimeoutException,\n    NetmikoAuthenticationException,\n)\n\n\ndef send_show_command(device, commands):\n    result = {}\n    try:\n        with ConnectHandler(**device) as ssh:\n            ssh.enable()\n            for command in commands:\n                output = ssh.send_command(command)\n                result[command] = output\n        return result\n    except (NetmikoTimeoutException, NetmikoAuthenticationException) as error:\n        print(error)\n\n\nif __name__ == "__main__":\n    with open("devices.yaml") as f:\n        devices = yaml.safe_load(f)\n    for device in devices:\n        result = send_show_command(device, ["sh clock", "sh ip int br"])\n        pprint(result, width=120)\n')),Object(a.b)("p",null,"In this example ",Object(a.b)("inlineCode",{parentName:"p"},"terminal length")," command is not passed because netmiko executes this command by default."),Object(a.b)("p",null,"The result of script execution:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"{'sh clock': '*09:12:15.210 UTC Mon Jul 20 2020',\n 'sh ip int br': 'Interface     IP-Address      OK? Method Status                Protocol\\n'\n                 'Ethernet0/0   192.168.100.1   YES NVRAM  up                    up      \\n'\n                 'Ethernet0/1   192.168.200.1   YES NVRAM  up                    up      \\n'\n                 'Ethernet0/2   unassigned      YES NVRAM  up                    up      \\n'\n                 'Ethernet0/3   192.168.130.1   YES NVRAM  up                    up      \\n'}\n{'sh clock': '*09:12:24.507 UTC Mon Jul 20 2020',\n 'sh ip int br': 'Interface     IP-Address      OK? Method Status                Protocol\\n'\n                 'Ethernet0/0   192.168.100.2   YES NVRAM  up                    up      \\n'\n                 'Ethernet0/1   unassigned      YES NVRAM  up                    up      \\n'\n                 'Ethernet0/2   unassigned      YES NVRAM  administratively down down    \\n'\n                 'Ethernet0/3   unassigned      YES NVRAM  administratively down down    \\n'}\n{'sh clock': '*09:12:33.573 UTC Mon Jul 20 2020',\n 'sh ip int br': 'Interface     IP-Address      OK? Method Status                Protocol\\n'\n                 'Ethernet0/0   192.168.100.3   YES NVRAM  up                    up      \\n'\n                 'Ethernet0/1   unassigned      YES NVRAM  up                    up      \\n'\n                 'Ethernet0/2   unassigned      YES NVRAM  administratively down down    \\n'\n                 'Ethernet0/3   unassigned      YES NVRAM  administratively down down    \\n'}\n")),Object(a.b)("h2",{id:"paginated-command-output"},"Paginated command output"),Object(a.b)("p",null,"Example of using netmiko with paginated output of show command (4_netmiko_more.py file):"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'from netmiko import ConnectHandler, NetmikoTimeoutException\nimport yaml\n\n\ndef send_show_command(device_params, command):\n    with ConnectHandler(**device_params) as ssh:\n        ssh.enable()\n        prompt = ssh.find_prompt()\n        ssh.send_command("terminal length 100")\n        ssh.write_channel(f"{command}\\n")\n        output = ""\n        while True:\n            try:\n                page = ssh.read_until_pattern(f"More|{prompt}")\n                output += page\n                if "More" in page:\n                    ssh.write_channel(" ")\n                elif prompt in output:\n                    break\n            except NetmikoTimeoutException:\n                break\n    return output\n\n\nif __name__ == "__main__":\n    with open("devices.yaml") as f:\n        devices = yaml.safe_load(f)\n    print(send_show_command(devices[0], "sh run"))\n')))}s.isMDXComponent=!0},280:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var o=t(0),i=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var m=i.a.createContext({}),s=function(e){var n=i.a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=s(e.components);return i.a.createElement(m.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(t),b=o,u=d["".concat(r,".").concat(b)]||d[b]||p[b]||a;return t?i.a.createElement(u,c(c({ref:n},m),{},{components:t})):i.a.createElement(u,c({ref:n},m))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var m=2;m<a;m++)r[m]=t[m];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);