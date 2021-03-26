(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{197:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return i})),t.d(e,"metadata",(function(){return p})),t.d(e,"toc",(function(){return l})),t.d(e,"default",(function(){return c}));var r=t(3),o=t(8),a=(t(0),t(280)),i={id:"pprint",title:"Pprint",sidebar_label:"12.5 Pprint",slug:"pprint",custom_edit_url:null},p={unversionedId:"python/useful_modules/pprint",id:"python/useful_modules/pprint",isDocsHomePage:!1,title:"Pprint",description:"Module pprint allows you to show Python objects beautifully. This saves the structure of object. You can use the result that produces pprint to create object. Module pprint is part of standard Python library.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/python/useful_modules/5_pprint.md",slug:"/python/useful_modules/pprint",permalink:"/tr/docs/python/useful_modules/pprint",editUrl:null,version:"current",sidebar_label:"12.5 Pprint",sidebar:"someSidebar",previous:{title:"Tabulate",permalink:"/tr/docs/python/useful_modules/tabulate"},next:{title:"Tasks",permalink:"/tr/docs/python/useful_modules/tasks"}},l=[{value:"Nesting restriction",id:"nesting-restriction",children:[]},{value:"pformat",id:"pformat",children:[]},{value:"Additional material",id:"additional-material",children:[]}],s={toc:l};function c(n){var e=n.components,t=Object(o.a)(n,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Module ",Object(a.b)("inlineCode",{parentName:"p"},"pprint")," allows you to show Python objects beautifully. This saves the structure of object. You can use the result that produces ",Object(a.b)("inlineCode",{parentName:"p"},"pprint")," to create object. Module ",Object(a.b)("inlineCode",{parentName:"p"},"pprint")," is part of standard Python library."),Object(a.b)("p",null,"The simplest use of module is ",Object(a.b)("inlineCode",{parentName:"p"},"pprint")," function. For example, a dictionary with nested dictionaries is displayed as follows:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [6]: london_co = {'r1': {'hostname': 'london_r1', 'location': '21 New Globe Wal\n   ...: k', 'vendor': 'Cisco', 'model': '4451', 'IOS': '15.4', 'IP': '10.255.0.1'}\n   ...: , 'r2': {'hostname': 'london_r2', 'location': '21 New Globe Walk', 'vendor\n   ...: ': 'Cisco', 'model': '4451', 'IOS': '15.4', 'IP': '10.255.0.2'}, 'sw1': {'\n   ...: hostname': 'london_sw1', 'location': '21 New Globe Walk', 'vendor': 'Cisco\n   ...: ', 'model': '3850', 'IOS': '3.6.XE', 'IP': '10.255.0.101'}}\n   ...:\n\nIn [7]: from pprint import pprint\n\nIn [8]: pprint(london_co)\n{'r1': {'IOS': '15.4',\n        'IP': '10.255.0.1',\n        'hostname': 'london_r1',\n        'location': '21 New Globe Walk',\n        'model': '4451',\n        'vendor': 'Cisco'},\n 'r2': {'IOS': '15.4',\n        'IP': '10.255.0.2',\n        'hostname': 'london_r2',\n        'location': '21 New Globe Walk',\n        'model': '4451',\n        'vendor': 'Cisco'},\n 'sw1': {'IOS': '3.6.XE',\n         'IP': '10.255.0.101',\n         'hostname': 'london_sw1',\n         'location': '21 New Globe Walk',\n         'model': '3850',\n         'vendor': 'Cisco'}}\n")),Object(a.b)("p",null,"List of lists:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [13]: interfaces = [['FastEthernet0/0', '15.0.15.1', 'YES', 'manual', 'up', 'up\n    ...: '], ['FastEthernet0/1', '10.0.1.1', 'YES', 'manual', 'up', 'up'], ['FastE\n    ...: thernet0/2', '10.0.2.1', 'YES', 'manual', 'up', 'down']]\n    ...:\n\nIn [14]: pprint(interfaces)\n[['FastEthernet0/0', '15.0.15.1', 'YES', 'manual', 'up', 'up'],\n ['FastEthernet0/1', '10.0.1.1', 'YES', 'manual', 'up', 'up'],\n ['FastEthernet0/2', '10.0.2.1', 'YES', 'manual', 'up', 'down']]\n")),Object(a.b)("p",null,"String:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [18]: tunnel\nOut[18]: '\\ninterface Tunnel0\\n ip address 10.10.10.1 255.255.255.0\\n ip mtu 1416\\n ip ospf hello-interval 5\\n tunnel source FastEthernet1/0\\n tunnel protection ipsec profile DMVPN\\n'\n\nIn [19]: pprint(tunnel)\n('\\n'\n 'interface Tunnel0\\n'\n ' ip address 10.10.10.1 255.255.255.0\\n'\n ' ip mtu 1416\\n'\n ' ip ospf hello-interval 5\\n'\n ' tunnel source FastEthernet1/0\\n'\n ' tunnel protection ipsec profile DMVPN\\n')\n")),Object(a.b)("h2",{id:"nesting-restriction"},"Nesting restriction"),Object(a.b)("p",null,"Function ",Object(a.b)("inlineCode",{parentName:"p"},"pprint")," has an additional ",Object(a.b)("strong",{parentName:"p"},"depth")," parameter that allows limiting the depth of data structure display."),Object(a.b)("p",null,"For example, there\u2019s a dictionary:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [3]: result = {\n   ...:  'interface Tunnel0': [' ip unnumbered Loopback0',\n   ...:   ' tunnel mode mpls traffic-eng',\n   ...:   ' tunnel destination 10.2.2.2',\n   ...:   ' tunnel mpls traffic-eng priority 7 7',\n   ...:   ' tunnel mpls traffic-eng bandwidth 5000',\n   ...:   ' tunnel mpls traffic-eng path-option 10 dynamic',\n   ...:   ' no routing dynamic'],\n   ...:  'ip access-list standard LDP': [' deny   10.0.0.0 0.0.255.255',\n   ...:   ' permit 10.0.0.0 0.255.255.255'],\n   ...:  'router bgp 100': {' address-family vpnv4': ['  neighbor 10.2.2.2 activat\n   ...: e',\n   ...:    '  neighbor 10.2.2.2 send-community both',\n   ...:    '  exit-address-family'],\n   ...:   ' bgp bestpath igp-metric ignore': [],\n   ...:   ' bgp log-neighbor-changes': [],\n   ...:   ' neighbor 10.2.2.2 next-hop-self': [],\n   ...:   ' neighbor 10.2.2.2 remote-as 100': [],\n   ...:   ' neighbor 10.2.2.2 update-source Loopback0': [],\n   ...:   ' neighbor 10.4.4.4 remote-as 40': []},\n   ...:  'router ospf 1': [' mpls ldp autoconfig area 0',\n   ...:   ' mpls traffic-eng router-id Loopback0',\n   ...:   ' mpls traffic-eng area 0',\n   ...:   ' network 10.0.0.0 0.255.255.255 area 0']}\n   ...:\n")),Object(a.b)("p",null,"You can only display keys with depth equal to 1:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [5]: pprint(result, depth=1)\n{'interface Tunnel0': [...],\n 'ip access-list standard LDP': [...],\n 'router bgp 100': {...},\n 'router ospf 1': [...]}\n")),Object(a.b)("p",null,"Hidden nesting levels are replaced with ",Object(a.b)("inlineCode",{parentName:"p"},"..."),"."),Object(a.b)("p",null,"If you specify a depth of 2, the next level is displayed:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [6]: pprint(result, depth=2)\n{'interface Tunnel0': [' ip unnumbered Loopback0',\n                       ' tunnel mode mpls traffic-eng',\n                       ' tunnel destination 10.2.2.2',\n                       ' tunnel mpls traffic-eng priority 7 7',\n                       ' tunnel mpls traffic-eng bandwidth 5000',\n                       ' tunnel mpls traffic-eng path-option 10 dynamic',\n                       ' no routing dynamic'],\n 'ip access-list standard LDP': [' deny   10.0.0.0 0.0.255.255',\n                                 ' permit 10.0.0.0 0.255.255.255'],\n 'router bgp 100': {' address-family vpnv4': [...],\n                    ' bgp bestpath igp-metric ignore': [],\n                    ' bgp log-neighbor-changes': [],\n                    ' neighbor 10.2.2.2 next-hop-self': [],\n                    ' neighbor 10.2.2.2 remote-as 100': [],\n                    ' neighbor 10.2.2.2 update-source Loopback0': [],\n                    ' neighbor 10.4.4.4 remote-as 40': []},\n 'router ospf 1': [' mpls ldp autoconfig area 0',\n                   ' mpls traffic-eng router-id Loopback0',\n                   ' mpls traffic-eng area 0',\n                   ' network 10.0.0.0 0.255.255.255 area 0']}\n")),Object(a.b)("h2",{id:"pformat"},"pformat"),Object(a.b)("p",null,"pformat() is a function that displays the result as a string. It is convenient to use if you want to write a data structure into a file, for example to log."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [15]: from pprint import pformat\n\nIn [16]: formatted_result = pformat(result)\n\nIn [17]: print(formatted_result)\n{'interface Tunnel0': [' ip unnumbered Loopback0',\n                       ' tunnel mode mpls traffic-eng',\n                       ' tunnel destination 10.2.2.2',\n                       ' tunnel mpls traffic-eng priority 7 7',\n                       ' tunnel mpls traffic-eng bandwidth 5000',\n                       ' tunnel mpls traffic-eng path-option 10 dynamic',\n                       ' no routing dynamic'],\n 'ip access-list standard LDP': [' deny   10.0.0.0 0.0.255.255',\n                                 ' permit 10.0.0.0 0.255.255.255'],\n 'router bgp 100': {' address-family vpnv4': ['  neighbor 10.2.2.2 activate',\n                                              '  neighbor 10.2.2.2 '\n                                              'send-community both',\n                                              '  exit-address-family'],\n                    ' bgp bestpath igp-metric ignore': [],\n                    ' bgp log-neighbor-changes': [],\n                    ' neighbor 10.2.2.2 next-hop-self': [],\n                    ' neighbor 10.2.2.2 remote-as 100': [],\n                    ' neighbor 10.2.2.2 update-source Loopback0': [],\n                    ' neighbor 10.4.4.4 remote-as 40': []},\n 'router ospf 1': [' mpls ldp autoconfig area 0',\n                   ' mpls traffic-eng router-id Loopback0',\n                   ' mpls traffic-eng area 0',\n                   ' network 10.0.0.0 0.255.255.255 area 0']}\n")),Object(a.b)("h2",{id:"additional-material"},"Additional material"),Object(a.b)("p",null,"Documentation:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://docs.python.org/3/library/pprint.html"},"pprint \u2014 Data pretty printer")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://pymotw.com/3/pprint/"},"PyMOTW. pprint \u2014 Pretty-Print Data Structures"))))}c.isMDXComponent=!0},280:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function p(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var s=o.a.createContext({}),c=function(n){var e=o.a.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):p(p({},e),n)),t},u=function(n){var e=c(n.components);return o.a.createElement(s.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return o.a.createElement(o.a.Fragment,{},e)}},b=o.a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,a=n.originalType,i=n.parentName,s=l(n,["components","mdxType","originalType","parentName"]),u=c(t),b=r,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return t?o.a.createElement(m,p(p({ref:e},s),{},{components:t})):o.a.createElement(m,p({ref:e},s))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var a=t.length,i=new Array(a);i[0]=b;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=n,p.mdxType="string"==typeof n?n:r,i[1]=p;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);