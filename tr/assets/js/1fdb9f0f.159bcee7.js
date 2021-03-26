(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var i=n(3),r=n(8),a=(n(0),n(280)),s={id:"examples",title:"Examples",sidebar_label:"7.6 Examples",slug:"examples",custom_edit_url:null},o={unversionedId:"python/files/examples",id:"python/files/examples",isDocsHomePage:!1,title:"Examples",description:"This subsection covers working with files and brings together topics: files, loops, and conditions.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/python/files/6_examples.md",slug:"/python/files/examples",permalink:"/tr/docs/python/files/examples",editUrl:null,version:"current",sidebar_label:"7.6 Examples",sidebar:"someSidebar",previous:{title:"With Statement",permalink:"/tr/docs/python/files/with_statement"},next:{title:"Further Reading",permalink:"/tr/docs/python/files/further_reading"}},l=[{value:"Parsing column output",id:"parsing-column-output",children:[]},{value:"Getting key and value from different output lines",id:"getting-key-and-value-from-different-output-lines",children:[]},{value:"Nested dictionary",id:"nested-dictionary",children:[]},{value:"Output with empty values",id:"output-with-empty-values",children:[]}],p={toc:l};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This subsection covers working with files and brings together topics: files, loops, and conditions."),Object(a.b)("p",null,"When processing output of commands or configuration, often it will be necessary to write summary data to the dictionary. It is not always obvious how to handle the output of commands and how to deal with the output in general. This subsection discusses several examples with increasing complexity."),Object(a.b)("h2",{id:"parsing-column-output"},"Parsing column output"),Object(a.b)("p",null,"This example will deal with the output of ",Object(a.b)("inlineCode",{parentName:"p"},"sh ip int br")," command. From the output of command we need to get interface name and IP address. Interface name is dictionary key and IP address is value. At the same time, match must be made only for those interfaces with IP address assigned."),Object(a.b)("p",null,"An example of ",Object(a.b)("inlineCode",{parentName:"p"},"sh ip int br")," output (sh_ip_int_br.txt file):"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"R1#show ip interface brief\nInterface             IP-Address      OK? Method Status        Protocol\nFastEthernet0/0       15.0.15.1       YES manual up            up\nFastEthernet0/1       10.0.12.1       YES manual up            up\nFastEthernet0/2       10.0.13.1       YES manual up            up\nFastEthernet0/3       unassigned      YES unset  up            down\nLoopback0             10.1.1.1        YES manual up            up\nLoopback100           100.0.0.1       YES manual up            up\n")),Object(a.b)("p",null,"Working_with_dict_example_1.py file:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"result = {}\n\nwith open('sh_ip_int_br.txt') as f:\n    for line in f:\n        line = line.split()\n        if line and line[1][0].isdigit():\n            interface, address, *other = line\n            result[interface] = address\n\nprint(result)\n")),Object(a.b)("p",null,"Command ",Object(a.b)("inlineCode",{parentName:"p"},"sh ip int br")," displays the output with columns. So desired fields are in the same line. Script processes the output line by line and divides each line using split() method."),Object(a.b)("p",null,"The resulting list contains output columns. Because we need only interfaces on which IP address is configured, first character of second column is checked: if first character is a number the address is assigned to interface and string has to be processed."),Object(a.b)("p",null,"In ",Object(a.b)("inlineCode",{parentName:"p"},"interface, address, *other = line")," - variables are unpacked. Variable ",Object(a.b)("em",{parentName:"p"},"interface")," will have interface name, ",Object(a.b)("em",{parentName:"p"},"address")," will have IP address and ",Object(a.b)("em",{parentName:"p"},"other")," - all other fields. Since each line has a key-value pair, they are assigned to dictionary: ",Object(a.b)("inlineCode",{parentName:"p"},"result[interface] = address"),"."),Object(a.b)("p",null,"The result of script execution will be a dictionary (here it is split into key-value pairs for convenience, in real script the dictionary output will be displayed in one line):"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"{'FastEthernet0/0': '15.0.15.1',\n 'FastEthernet0/1': '10.0.12.1',\n 'FastEthernet0/2': '10.0.13.1',\n 'Loopback0': '10.1.1.1',\n 'Loopback100': '100.0.0.1'}\n")),Object(a.b)("h2",{id:"getting-key-and-value-from-different-output-lines"},"Getting key and value from different output lines"),Object(a.b)("p",null,"Very often the output of commands looks like that key and value are in different lines. And you have to figure out how to process the output to get right match. For example, from the output of ",Object(a.b)("em",{parentName:"p"},"sh ip int br")," command you need to get match ",Object(a.b)("em",{parentName:"p"},"interface name \u2013 MTU")," (sh_ip_interface.txt file):"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"Ethernet0/0 is up, line protocol is up\n  Internet address is 192.168.100.1/24\n  Broadcast address is 255.255.255.255\n  Address determined by non-volatile memory\n  MTU is 1500 bytes\n  Helper address is not set\n  ...\nEthernet0/1 is up, line protocol is up\n  Internet address is 192.168.200.1/24\n  Broadcast address is 255.255.255.255\n  Address determined by non-volatile memory\n  MTU is 1500 bytes\n  Helper address is not set\n  ...\nEthernet0/2 is up, line protocol is up\n  Internet address is 19.1.1.1/24\n  Broadcast address is 255.255.255.255\n  Address determined by non-volatile memory\n  MTU is 1500 bytes\n  Helper address is not set\n  ...\n")),Object(a.b)("p",null,"Interface name is in ",Object(a.b)("inlineCode",{parentName:"p"},"Ethernet0/0 is up, line protocol is up")," line and MTU in ",Object(a.b)("inlineCode",{parentName:"p"},"MTU is 1500 bytes")," line."),Object(a.b)("p",null,"For example, try to remember interface each time and print its value when MTU parameter is detected, together with MTU value:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [2]: with open('sh_ip_interface.txt') as f:\n   ...:     for line in f:\n   ...:         if 'line protocol' in line:\n   ...:             interface = line.split()[0]\n   ...:         elif 'MTU is' in line:\n   ...:             mtu = line.split()[-2]\n   ...:             print('{:15}{}'.format(interface, mtu))\n   ...:\nEthernet0/0    1500\nEthernet0/1    1500\nEthernet0/2    1500\nEthernet0/3    1500\nLoopback0      1514\n")),Object(a.b)("p",null,"Command output is organized in such a way that there is always a line with interface first and then a line with MTU after several lines. If you remember the name of interface every time it appears and at the time when line matches MTU, the last memorized interface is the one which matches this MTU. Now, if you want to create a dictionary that matches ",Object(a.b)("em",{parentName:"p"},"interface \u2013 MTU"),", it\u2019s enough to write values when MTU was found."),Object(a.b)("p",null,"Working_with_dict_example_2.py file:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"result = {}\n\nwith open('sh_ip_interface.txt') as f:\n    for line in f:\n        if 'line protocol' in line:\n            interface = line.split()[0]\n        elif 'MTU is' in line:\n            mtu = line.split()[-2]\n            result[interface] = mtu\n\nprint(result)\n")),Object(a.b)("p",null,"The result of script execution will be a dictionary (here it is split into key-value pairs for convenience, in real script the dictionary output will be displayed in one line):"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"{'Ethernet0/0': '1500',\n 'Ethernet0/1': '1500',\n 'Ethernet0/2': '1500',\n 'Ethernet0/3': '1500',\n 'Loopback0': '1514'}\n")),Object(a.b)("p",null,"This technique will be quite often useful because command output is generally organized in a very similar way."),Object(a.b)("h2",{id:"nested-dictionary"},"Nested dictionary"),Object(a.b)("p",null,"If you want to get several parameters from the output, it is very convenient to use a dictionary with a nested dictionary. For example, from output ",Object(a.b)("inlineCode",{parentName:"p"},"sh ip interface")," you need to get two parameters: IP address and MTU. First, output of information:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"Ethernet0/0 is up, line protocol is up\n  Internet address is 192.168.100.1/24\n  Broadcast address is 255.255.255.255\n  Address determined by non-volatile memory\n  MTU is 1500 bytes\n  Helper address is not set\n  ...\nEthernet0/1 is up, line protocol is up\n  Internet address is 192.168.200.1/24\n  Broadcast address is 255.255.255.255\n  Address determined by non-volatile memory\n  MTU is 1500 bytes\n  Helper address is not set\n  ...\nEthernet0/2 is up, line protocol is up\n  Internet address is 19.1.1.1/24\n  Broadcast address is 255.255.255.255\n  Address determined by non-volatile memory\n  MTU is 1500 bytes\n  Helper address is not set\n  ...\n")),Object(a.b)("p",null,"In the first step, each value is stored in a variable and then all three values are displayed. Values are displayed when a string has MTU because it is the last string:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [2]: with open('sh_ip_interface.txt') as f:\n   ...:     for line in f:\n   ...:         if 'line protocol' in line:\n   ...:             interface = line.split()[0]\n   ...:         elif 'Internet address' in line:\n   ...:             ip_address = line.split()[-1]\n   ...:         elif 'MTU' in line:\n   ...:             mtu = line.split()[-2]\n   ...:             print('{:15}{:17}{}'.format(interface, ip_address, mtu))\n   ...:\nEthernet0/0    192.168.100.1/24 1500\nEthernet0/1    192.168.200.1/24 1500\nEthernet0/2    19.1.1.1/24      1500\nEthernet0/3    192.168.230.1/24 1500\nLoopback0      4.4.4.4/32       1514\n")),Object(a.b)("p",null,"It uses the same technique as in previous example but adds another nested dictionary:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"result = {}\n\nwith open('sh_ip_interface.txt') as f:\n    for line in f:\n        if 'line protocol' in line:\n            interface = line.split()[0]\n            result[interface] = {}\n        elif 'Internet address' in line:\n            ip_address = line.split()[-1]\n            result[interface]['ip'] = ip_address\n        elif 'MTU' in line:\n            mtu = line.split()[-2]\n            result[interface]['mtu'] = mtu\n\nprint(result)\n")),Object(a.b)("p",null,"Each time an interface is detected, ",Object(a.b)("inlineCode",{parentName:"p"},"result")," dictionary creates a key with the name of interface that corresponds to an empty dictionary. This blank is used so that at the time when IP address or MTU is detected, parameter can be written into nested dictionary of the corresponding interface."),Object(a.b)("p",null,"The result of script execution will be a dictionary (here it is split into key-value pairs for convenience, in real script the dictionary output will be displayed in one line):"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"{'Ethernet0/0': {'ip': '192.168.100.1/24', 'mtu': '1500'},\n 'Ethernet0/1': {'ip': '192.168.200.1/24', 'mtu': '1500'},\n 'Ethernet0/2': {'ip': '19.1.1.1/24', 'mtu': '1500'},\n 'Ethernet0/3': {'ip': '192.168.230.1/24', 'mtu': '1500'},\n 'Loopback0': {'ip': '4.4.4.4/32', 'mtu': '1514'}}\n")),Object(a.b)("h2",{id:"output-with-empty-values"},"Output with empty values"),Object(a.b)("p",null,"Sometimes, sections with empty values will be found in the output. For example, in case of output ",Object(a.b)("inlineCode",{parentName:"p"},"sh ip interface"),", interfaces may look like:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"Ethernet0/1 is up, line protocol is up\n  Internet protocol processing disabled\nEthernet0/2 is administratively down, line protocol is down\n  Internet protocol processing disabled\nEthernet0/3 is administratively down, line protocol is down\n  Internet protocol processing disabled\n")),Object(a.b)("p",null,"Consequently, there is no MTU or IP address. And if you execute previous script for a file with such interfaces, the result is this (output for file sh_ip_interface2.txt):"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"{'Ethernet0/0': {'ip': '192.168.100.2/24', 'mtu': '1500'},\n 'Ethernet0/1': {},\n 'Ethernet0/2': {},\n 'Ethernet0/3': {},\n 'Loopback0': {'ip': '2.2.2.2/32', 'mtu': '1514'}}\n")),Object(a.b)("p",null,"If you need to add interfaces to dictionary only when an IP address is assigned to interface, you need to move the creation of key with interface name to a moment when line with IP address is detected (working_with_dict_example_4.py file):"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"result = {}\n\nwith open('sh_ip_interface2.txt') as f:\n    for line in f:\n        if 'line protocol' in line:\n            interface = line.split()[0]\n        elif 'Internet address' in line:\n            ip_address = line.split()[-1]\n            result[interface] = {}\n            result[interface]['ip'] = ip_address\n        elif 'MTU' in line:\n            mtu = line.split()[-2]\n            result[interface]['mtu'] = mtu\n\nprint(result)\n")),Object(a.b)("p",null,"In this case, the result will be a dictionary:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"{'Ethernet0/0': {'ip': '192.168.100.2/24', 'mtu': '1500'},\n 'Loopback0': {'ip': '2.2.2.2/32', 'mtu': '1514'}}\n")))}c.isMDXComponent=!0},280:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),c=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),b=i,m=u["".concat(s,".").concat(b)]||u[b]||d[b]||a;return n?r.a.createElement(m,o(o({ref:t},p),{},{components:n})):r.a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);