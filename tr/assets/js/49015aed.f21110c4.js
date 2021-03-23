(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{141:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(8),i=(t(0),t(281)),c={id:"variable_unpacking",title:"Variable Unpacking",sidebar_label:"Variable Unpacking",slug:"variable_unpacking",custom_edit_url:null},l={unversionedId:"python/08_python_basic_examples/variable_unpacking",id:"python/08_python_basic_examples/variable_unpacking",isDocsHomePage:!1,title:"Variable Unpacking",description:"Variable unpacking is a special syntax that allows to assign elements of an iterable to variables.",source:"@site/docs/python/08_python_basic_examples/2_variable_unpacking.md",slug:"/python/08_python_basic_examples/variable_unpacking",permalink:"/tr/docs/python/08_python_basic_examples/variable_unpacking",editUrl:null,version:"current",sidebar_label:"Variable Unpacking",sidebar:"someSidebar",previous:{title:"Formatting Lines With F-Strings",permalink:"/tr/docs/python/08_python_basic_examples/formatting_lines_with_f_strings"},next:{title:"List Dict Set Comprehensions",permalink:"/tr/docs/python/08_python_basic_examples/list_dict_set_comprehensions"}},s=[{value:"Replacement of unnecessary elements <code>_</code>",id:"replacement-of-unnecessary-elements-_",children:[]},{value:"Use <code>*</code>",id:"use-",children:[]},{value:"Unpacking examples",id:"unpacking-examples",children:[{value:"Unpacking of iterable objects",id:"unpacking-of-iterable-objects",children:[]},{value:"Example of unpacking in <em>for</em> loop",id:"example-of-unpacking-in-for-loop",children:[]}]}],o={toc:s};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Variable unpacking is a special syntax that allows to assign elements of an iterable to variables."),Object(i.b)("p",null,"Note"),Object(i.b)("p",null,"This functionality is often referred to as tuple unpacking but unpacking works on any iterable object, not only with tuples"),Object(i.b)("p",null,"Example of variable unpacking:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [1]: interface = ['FastEthernet0/1', '10.1.1.1', 'up', 'up']\n\nIn [2]: intf, ip, status, protocol = interface\n\nIn [3]: intf\nOut[3]: 'FastEthernet0/1'\n\nIn [4]: ip\nOut[4]: '10.1.1.1'\n")),Object(i.b)("p",null,"This option is much more convenient than the use of indexes:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [5]: intf, ip, status, protocol = interface[0], interface[1], interface[2], interface[3]\n")),Object(i.b)("p",null,"When you unpack variables, each item in list falls into the corresponding variable. It is important to take into account that there should be exactly as many variables on the left as there are elements in the list."),Object(i.b)("p",null,"If amount of variables are less or more, there will be an exception:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [6]: intf, ip, status = interface\n------------------------------------------------------------\nValueError                 Traceback (most recent call last)\n<ipython-input-11-a304c4372b1a> in <module>()\n----\x3e 1 intf, ip, status = interface\n\nValueError: too many values to unpack (expected 3)\n\nIn [7]: intf, ip, status, protocol, other = interface\n------------------------------------------------------------\nValueError                 Traceback (most recent call last)\n<ipython-input-12-ac93e78b978c> in <module>()\n----\x3e 1 intf, ip, status, protocol, other = interface\n\nValueError: not enough values to unpack (expected 5, got 4)\n")),Object(i.b)("h2",{id:"replacement-of-unnecessary-elements-_"},"Replacement of unnecessary elements ",Object(i.b)("inlineCode",{parentName:"h2"},"_")),Object(i.b)("p",null,"Often only some of elements of an iterable are needed. Unpacking syntax requires that exactly as many variables as elements in the object being iterated be specified."),Object(i.b)("p",null,"If, for example, only VLAN, MAC and interface should be obtained from line, you still need to specify a variable for \u201cDYNAMIC\u201d:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [8]: line = '100    01bb.c580.7000    DYNAMIC     Gi0/1'\n\nIn [9]: vlan, mac, item_type, intf = line.split()\n\nIn [10]: vlan\nOut[10]: '100'\n\nIn [11]: intf\nOut[11]: 'Gi0/1'\n")),Object(i.b)("p",null,"If record type is no longer needed, you can replace item_type variable with underline character:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [12]: vlan, mac, _, intf = line.split()\n")),Object(i.b)("p",null,"This clearly indicates that this element is not needed."),Object(i.b)("p",null,"Underline character can be used more than once:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [13]: dhcp = '00:09:BB:3D:D6:58   10.1.10.2        86250       dhcp-snooping   10    FastEthernet0/1'\n\nIn [14]: mac, ip, _, _, vlan, intf = dhcp.split()\n\nIn [15]: mac\nOut[15]: '00:09:BB:3D:D6:58'\n\nIn [16]: vlan\nOut[16]: '10'\n")),Object(i.b)("h2",{id:"use-"},"Use ",Object(i.b)("inlineCode",{parentName:"h2"},"*")),Object(i.b)("p",null,"Variable unpacking supports a special syntax that allows unpacking of several elements into one. If you put ",Object(i.b)("inlineCode",{parentName:"p"},"*")," in front of variable name, all elements except those that are explicitly assigned will be written into it."),Object(i.b)("p",null,"For example, you can get the first element in ",Object(i.b)("em",{parentName:"p"},"first")," variable and the rest in ",Object(i.b)("em",{parentName:"p"},"rest"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [18]: vlans = [10, 11, 13, 30]\n\nIn [19]: first, *rest = vlans\n\nIn [20]: first\nOut[20]: 10\n\nIn [21]: rest\nOut[21]: [11, 13, 30]\n")),Object(i.b)("p",null,"Variable with an asterisk will always contain a list:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [22]: vlans = (10, 11, 13, 30)\n\nIn [22]: first, *rest = vlans\n\nIn [23]: first\nOut[23]: 10\n\nIn [24]: rest\nOut[24]: [11, 13, 30]\n")),Object(i.b)("p",null,"If there is only one item, unpacking will still work:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [25]: first, *rest = vlans\n\nIn [26]: first\nOut[26]: 55\n\nIn [27]: rest\nOut[27]: []\n")),Object(i.b)("p",null,"There can be only one variable with an asterisk in the unpacking expression."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'In [28]: vlans = (10, 11, 13, 30)\n\nIn [29]: first, *rest, *others = vlans\n  File "<ipython-input-37-dedf7a08933a>", line 1\n    first, *rest, *others = vlans\n                                 ^\nSyntaxError: two starred expressions in assignment\n')),Object(i.b)("p",null,"This variable may not only be at the end of expression:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [30]: vlans = (10, 11, 13, 30)\n\nIn [31]: *rest, last = vlans\n\nIn [32]: rest\nOut[32]: [10, 11, 13]\n\nIn [33]: last\nOut[33]: 30\n")),Object(i.b)("p",null,"Thus, the first, second and last element can be specified:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [34]: cdp = 'SW1     Eth 0/0    140   S I   WS-C3750-  Eth 0/1'\n\nIn [35]: name, l_intf, *other, r_intf = cdp.split()\n\nIn [36]: name\nOut[36]: 'SW1'\n\nIn [37]: l_intf\nOut[37]: 'Eth'\n\nIn [38]: r_intf\nOut[38]: '0/1'\n")),Object(i.b)("h2",{id:"unpacking-examples"},"Unpacking examples"),Object(i.b)("h3",{id:"unpacking-of-iterable-objects"},"Unpacking of iterable objects"),Object(i.b)("p",null,"These examples show that you can unpack not only lists, tuples and strings but also any other iterable objects."),Object(i.b)("p",null,"Unpacking the range:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [39]: first, *rest = range(1, 6)\n\nIn [40]: first\nOut[40]: 1\n\nIn [41]: rest\nOut[41]: [2, 3, 4, 5]\n")),Object(i.b)("p",null,"Unpacking zip:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [42]: a = [1, 2, 3, 4, 5]\n\nIn [43]: b = [100, 200, 300, 400, 500]\n\nIn [44]: zip(a, b)\nOut[44]: <zip at 0xb4df4fac>\n\nIn [45]: list(zip(a, b))\nOut[45]: [(1, 100), (2, 200), (3, 300), (4, 400), (5, 500)]\n\nIn [46]: first, *rest, last = zip(a, b)\n\nIn [47]: first\nOut[47]: (1, 100)\n\nIn [48]: rest\nOut[48]: [(2, 200), (3, 300), (4, 400)]\n\nIn [49]: last\nOut[49]: (5, 500)\n")),Object(i.b)("h3",{id:"example-of-unpacking-in-for-loop"},"Example of unpacking in ",Object(i.b)("em",{parentName:"h3"},"for")," loop"),Object(i.b)("p",null,"Example of a loop that runs through the keys:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [50]: access_template = ['switchport mode access',\n    ...:                    'switchport access vlan',\n    ...:                    'spanning-tree portfast',\n    ...:                    'spanning-tree bpduguard enable']\n    ...:\n\nIn [51]: access = {'0/12':10,\n    ...:           '0/14':11,\n    ...:           '0/16':17}\n    ...:\n\nIn [52]: for intf in access:\n    ...:     print('interface FastEthernet' + intf)\n    ...:     for command in access_template:\n    ...:         if command.endswith('access vlan'):\n    ...:             print(' {} {}'.format(command, access[intf]))\n    ...:         else:\n    ...:             print(' {}'.format(command))\n    ...:\ninterface FastEthernet0/12\n switchport mode access\n switchport access vlan 10\n spanning-tree portfast\n spanning-tree bpduguard enable\ninterface FastEthernet0/14\n switchport mode access\n switchport access vlan 11\n spanning-tree portfast\n spanning-tree bpduguard enable\ninterface FastEthernet0/16\n switchport mode access\n switchport access vlan 17\n spanning-tree portfast\n spanning-tree bpduguard enable\n")),Object(i.b)("p",null,"Instead, you can run through key-value pairs and immediately unpack them into different variables:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [53]: for intf, vlan in access.items():\n    ...:     print('interface FastEthernet' + intf)\n    ...:     for command in access_template:\n    ...:         if command.endswith('access vlan'):\n    ...:             print(' {} {}'.format(command, vlan))\n    ...:         else:\n    ...:             print(' {}'.format(command))\n    ...:\n")),Object(i.b)("p",null,"Example of unpacking list items in the loop:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [54]: table\nOut[54]:\n[['100', 'a1b2.ac10.7000', 'DYNAMIC', 'Gi0/1'],\n ['200', 'a0d4.cb20.7000', 'DYNAMIC', 'Gi0/2'],\n ['300', 'acb4.cd30.7000', 'DYNAMIC', 'Gi0/3'],\n ['100', 'a2bb.ec40.7000', 'DYNAMIC', 'Gi0/4'],\n ['500', 'aa4b.c550.7000', 'DYNAMIC', 'Gi0/5'],\n ['200', 'a1bb.1c60.7000', 'DYNAMIC', 'Gi0/6'],\n ['300', 'aa0b.cc70.7000', 'DYNAMIC', 'Gi0/7']]\n\n\nIn [55]: for line in table:\n    ...:     vlan, mac, _, intf = line\n    ...:     print(vlan, mac, intf)\n    ...:\n100 a1b2.ac10.7000 Gi0/1\n200 a0d4.cb20.7000 Gi0/2\n300 acb4.cd30.7000 Gi0/3\n100 a2bb.ec40.7000 Gi0/4\n500 aa4b.c550.7000 Gi0/5\n200 a1bb.1c60.7000 Gi0/6\n300 aa0b.cc70.7000 Gi0/7\n")),Object(i.b)("p",null,"But it\u2019s better to do this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [56]: for vlan, mac, _, intf in table:\n    ...:     print(vlan, mac, intf)\n    ...:\n100 a1b2.ac10.7000 Gi0/1\n200 a0d4.cb20.7000 Gi0/2\n300 acb4.cd30.7000 Gi0/3\n100 a2bb.ec40.7000 Gi0/4\n500 aa4b.c550.7000 Gi0/5\n200 a1bb.1c60.7000 Gi0/6\n300 aa0b.cc70.7000 Gi0/7\n")))}p.isMDXComponent=!0},281:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return f}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),p=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=p(e.components);return r.a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),b=p(t),m=a,f=b["".concat(c,".").concat(m)]||b[m]||u[m]||i;return t?r.a.createElement(f,l(l({ref:n},o),{},{components:t})):r.a.createElement(f,l({ref:n},o))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var o=2;o<i;o++)c[o]=t[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);