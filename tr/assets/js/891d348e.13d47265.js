(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{195:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(8),o=(t(0),t(281)),p={id:"parsing_the_output",title:"Parsing The Output",sidebar_label:"Parsing The Output",slug:"parsing_the_output",custom_edit_url:null},i={unversionedId:"python/14_regex/parsing_the_output",id:"python/14_regex/parsing_the_output",isDocsHomePage:!1,title:"Parsing The Output",description:"Consider another example of using named groups. In this example, the task is to get from the output of \u2018show ip dhcp snooping binding\u2019 the fields: MAC address, IP address, VLAN and interface.",source:"@site/docs/python/14_regex/7_parsing_the_output.md",slug:"/python/14_regex/parsing_the_output",permalink:"/tr/docs/python/14_regex/parsing_the_output",editUrl:null,version:"current",sidebar_label:"Parsing The Output",sidebar:"someSidebar",previous:{title:"Grouping",permalink:"/tr/docs/python/14_regex/grouping"},next:{title:"Non-Capturing Group",permalink:"/tr/docs/python/14_regex/non-capturing_group"}},c=[],s={toc:c};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Consider another example of using named groups. In this example, the task is to get from the output of \u2018show ip dhcp snooping binding\u2019 the fields: MAC address, IP address, VLAN and interface."),Object(o.b)("p",null,"File dhcp_snooping.txt contains the output of command \u2018show ip dhcp snooping binding\u2019:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"MacAddress          IpAddress        Lease(sec)  Type           VLAN  Interface\n------------------  ---------------  ----------  -------------  ----  --------------------\n00:09:BB:3D:D6:58   10.1.10.2        86250       dhcp-snooping   10    FastEthernet0/1\n00:04:A3:3E:5B:69   10.1.5.2         63951       dhcp-snooping   5     FastEthernet0/10\n00:05:B3:7E:9B:60   10.1.5.4         63253       dhcp-snooping   5     FastEthernet0/9\n00:09:BC:3F:A6:50   10.1.10.6        76260       dhcp-snooping   10    FastEthernet0/3\nTotal number of bindings: 4\n")),Object(o.b)("p",null,"Let\u2019s start with one string:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [1]: line = '00:09:BB:3D:D6:58  10.1.10.2 86250   dhcp-snooping   10  FastEthernet0/1'\n")),Object(o.b)("p",null,"In regex terms, named groups are used for those parts of the output that need to be remembered:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [2]: match = re.search('(?P<mac>\\S+) +(?P<ip>\\S+) +\\d+ +\\S+ +(?P<vlan>\\d+) +(?P<port>\\S+)', line)\n")),Object(o.b)("p",null,"Comments on regex:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"(?P<mac>\\S+) +")," - group with name \u2018mac\u2019 matches any characters except whitespace characters. regex describes a sequence of any characters before space"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"(?P<ip>\\S+) +")," - the same here: a sequence of any non-whitespace characters up to space. Group name - \u2018ip\u2019"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"\\d+ +")," - numerical sequence (one or more digits) followed by one or more spaces. ",Object(o.b)("em",{parentName:"li"},"Lease")," value gets here"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"\\S+ +"),"- sequence of any characters other than whitespace. This matches ",Object(o.b)("em",{parentName:"li"},"Type")," (in this case all of them \u2018dhcp-snooping\u2019)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"(?P<vlan>\\d+) +")," - named group \u2018vlan\u2019. Only numerical sequences with one or more characters are included here"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"(?P<port>.\\S+)")," - named group \u2018port\u2019. All characters except whitespace are included here")),Object(o.b)("p",null,"As a result, ",Object(o.b)("inlineCode",{parentName:"p"},"groupdict")," method will return such a dictionary:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [3]: match.groupdict()\nOut[3]:\n{'int': 'FastEthernet0/1',\n 'ip': '10.1.10.2',\n 'mac': '00:09:BB:3D:D6:58',\n 'vlan': '10'}\n")),Object(o.b)("p",null,"Since regex has worked well, you can create a script. In script all lines of dhcp_snooping.txt file are iterated and information about devices is displayed on the standard output stream (parse_dhcp_snooping.py):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"import re\n\n#'00:09:BB:3D:D6:58   10.1.10.2        86250       dhcp-snooping   10    FastEthernet0/1'\nregex = re.compile('(?P<mac>\\S+) +(?P<ip>\\S+) +\\d+ +\\S+ +(?P<vlan>\\d+) +(?P<port>\\S+)')\nresult = []\n\nwith open('dhcp_snooping.txt') as data:\n    for line in data:\n        match = regex.search(line)\n        if match:\n            result.append(match.groupdict())\n\nprint(f'{len(result)} devices connected to switch')\n\nfor num, comp in enumerate(result, 1):\n    print(f'Parameters of device {num}:')\n    for key in comp:\n        print(f'{key:10}: {comp[key]:10}')\n")),Object(o.b)("p",null,"Script output:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ python parse_dhcp_snooping.py\n4 devices connected to switch\nParameters of device 1:\n    int:    FastEthernet0/1\n    ip:    10.1.10.2\n    mac:    00:09:BB:3D:D6:58\n    vlan:    10\nParameters of device 2:\n    int:    FastEthernet0/10\n    ip:    10.1.5.2\n    mac:    00:04:A3:3E:5B:69\n    vlan:    5\nParameters of device 3:\n    int:    FastEthernet0/9\n    ip:    10.1.5.4\n    mac:    00:05:B3:7E:9B:60\n    vlan:    5\nParameters of device 4:\n    int:    FastEthernet0/3\n    ip:    10.1.10.6\n    mac:    00:09:BC:3F:A6:50\n    vlan:    10\n")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://pyneng.readthedocs.io/en/latest/book/14_regex/non-capturing_groups.html"},"Next "),Object(o.b)("a",{parentName:"p",href:"https://pyneng.readthedocs.io/en/latest/book/14_regex/re_groups.html"}," Previous")))}l.isMDXComponent=!0},281:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(t),b=r,m=u["".concat(p,".").concat(b)]||u[b]||d[b]||o;return t?a.a.createElement(m,i(i({ref:n},s),{},{components:t})):a.a.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=b;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var s=2;s<o;s++)p[s]=t[s];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);