(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{175:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return u}));var a=t(3),r=t(8),o=(t(0),t(281)),c={id:"match_object",title:"Match Object",sidebar_label:"Match Object",slug:"match_object",custom_edit_url:null},l={unversionedId:"python/15_module_re/match_object",id:"python/15_module_re/match_object",isDocsHomePage:!1,title:"Match Object",description:"In re module, several functions return Match object if a match is found:",source:"@site/docs/python/15_module_re/2_match_object.md",slug:"/python/15_module_re/match_object",permalink:"/tr/docs/python/15_module_re/match_object",editUrl:null,version:"current",sidebar_label:"Match Object",sidebar:"someSidebar",previous:{title:"Module Re",permalink:"/tr/docs/python/15_module_re/module_re"},next:{title:"Search Function",permalink:"/tr/docs/python/15_module_re/search_function"}},p=[{value:"<code>group</code>",id:"group",children:[]},{value:"<code>groups</code>",id:"groups",children:[]},{value:"<code>groupdict</code>",id:"groupdict",children:[]},{value:"<code>start</code>, <code>end</code>",id:"start-end",children:[]},{value:"<code>span</code>",id:"span",children:[]}],i={toc:p};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In ",Object(o.b)("inlineCode",{parentName:"p"},"re")," module, several functions return Match object if a match is found:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"search")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"match")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"finditer")," - returns an iterator with Match objects")),Object(o.b)("p",null,"This subsection covers methods of Match object."),Object(o.b)("p",null,"Example of Match object:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [1]: log = 'Jun  3 14:39:05.941: %SW_MATM-4-MACFLAP_NOTIF: Host f03a.b216.7ad7 in vlan 10 is flapping between port Gi0/5 and port Gi0/15'\n\nIn [2]: match = re.search(r'Host (\\S+) in vlan (\\d+) .* port (\\S+) and port (\\S+)', log)\n\nIn [3]: match\nOut[3]: <_sre.SRE_Match object; span=(47, 124), match='Host f03a.b216.7ad7 in vlan 10 is flapping betwee>'\n")),Object(o.b)("p",null,"The 3rd line output simply displays information about object. Therefore, it is not necessary to rely on what is displayed in match part as displayed line is cut by a fixed number of characters."),Object(o.b)("h2",{id:"group"},Object(o.b)("inlineCode",{parentName:"h2"},"group")),Object(o.b)("p",null,"Method ",Object(o.b)("inlineCode",{parentName:"p"},"group")," returns a substring that matches an expression or an expression in a group."),Object(o.b)("p",null,"If method is called without arguments, the whole substring is displayed:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [4]: match.group()\nOut[4]: 'Host f03a.b216.7ad7 in vlan 10 is flapping between port Gi0/5 and port Gi0/15'\n")),Object(o.b)("p",null,"The same result returns group 0:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [5]: match.group(0)\nOut[5]: 'Host f03a.b216.7ad7 in vlan 10 is flapping between port Gi0/5 and port Gi0/15'\n")),Object(o.b)("p",null,"Other numbers show only the contents of relevant group:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [6]: match.group(1)\nOut[6]: 'f03a.b216.7ad7'\n\nIn [7]: match.group(2)\nOut[7]: '10'\n\nIn [8]: match.group(3)\nOut[8]: 'Gi0/5'\n\nIn [9]: match.group(4)\nOut[9]: 'Gi0/15'\n")),Object(o.b)("p",null,"If you call a ",Object(o.b)("inlineCode",{parentName:"p"},"group")," method with a group number that is larger than number of existing groups, there is an error:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [10]: match.group(5)\n-----------------------------------------------------------------\nIndexError                      Traceback (most recent call last)\n<ipython-input-18-9df93fa7b44b> in <module>()\n----\x3e 1 match.group(5)\n\nIndexError: no such group\n")),Object(o.b)("p",null,"If you call a method with multiple group numbers, the result is a tuple with strings that correspond to matches:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [11]: match.group(1, 2, 3)\nOut[11]: ('f03a.b216.7ad7', '10', 'Gi0/5')\n")),Object(o.b)("p",null,"Group may not get anything, then it will be matched with an empty string:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [12]: log = 'Jun  3 14:39:05.941: %SW_MATM-4-MACFLAP_NOTIF: Host f03a.b216.7ad7 in vlan 10 is flapping between port Gi0/5 and port Gi0/15'\n\nIn [13]: match = re.search(r'Host (\\S+) in vlan (\\D*)', log)\n\nIn [14]: match.group(2)\nOut[14]: ''\n")),Object(o.b)("p",null,"If group describes a part of template and there are more than one match, method displays the last match:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [15]: log = 'Jun  3 14:39:05.941: %SW_MATM-4-MACFLAP_NOTIF: Host f03a.b216.7ad7 in vlan 10 is flapping between port Gi0/5 and port Gi0/15'\n\nIn [16]: match = re.search(r'Host (\\w{4}\\.)+', log)\n\nIn [17]: match.group(1)\nOut[17]: 'b216.'\n")),Object(o.b)("p",null,"This is because expression in parentheses describes four letters or numbers, dot and then there is a plus. The first and the second part of MAC address matched to expression in parentheses. But only the last expression is remembered and returned."),Object(o.b)("p",null,"If named groups are used in expression, group name can be passed to ",Object(o.b)("inlineCode",{parentName:"p"},"group")," method and the corresponding substring can be obtained:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [18]: log = 'Jun  3 14:39:05.941: %SW_MATM-4-MACFLAP_NOTIF: Host f03a.b216.7ad7 in vlan 10 is flapping between port Gi0/5 and port Gi0/15'\n\nIn [19]: match = re.search(r'Host (?P<mac>\\S+) '\n    ...:                   r'in vlan (?P<vlan>\\d+) .* '\n    ...:                   r'port (?P<int1>\\S+) '\n    ...:                   r'and port (?P<int2>\\S+)',\n    ...:                   log)\n    ...:\n\nIn [20]: match.group('mac')\nOut[20]: 'f03a.b216.7ad7'\n\nIn [21]: match.group('int2')\nOut[21]: 'Gi0/15'\n")),Object(o.b)("p",null,"Groups are also available via number:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [22]: match.group(3)\nOut[22]: 'Gi0/5'\n\nIn [23]: match.group(4)\nOut[23]: 'Gi0/15'\n")),Object(o.b)("h2",{id:"groups"},Object(o.b)("inlineCode",{parentName:"h2"},"groups")),Object(o.b)("p",null,"Method ",Object(o.b)("inlineCode",{parentName:"p"},"group")," returns a tuple with strings in which the elements are those substrings that fall into respective groups:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [24]: log = 'Jun  3 14:39:05.941: %SW_MATM-4-MACFLAP_NOTIF: Host f03a.b216.7ad7 in vlan 10 is flapping between port Gi0/5 and port Gi0/15'\n\nIn [25]: match = re.search(r'Host (\\S+) '\n    ...:                   r'in vlan (\\d+) .* '\n    ...:                   r'port (\\S+) '\n    ...:                   r'and port (\\S+)',\n    ...:                   log)\n    ...:\n\nIn [26]: match.groups()\nOut[26]: ('f03a.b216.7ad7', '10', 'Gi0/5', 'Gi0/15')\n")),Object(o.b)("p",null,"Method ",Object(o.b)("inlineCode",{parentName:"p"},"group")," has an optional parameter - default. It returned when anything that comes into group is optional."),Object(o.b)("p",null,"For example, with this line the match will be in both the first group and the second:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [26]: line = '100     aab1.a1a1.a5d3    FastEthernet0/1'\n\nIn [27]: match = re.search(r'(\\d+) +(\\w+)?', line)\n\nIn [28]: match.groups()\nOut[28]: ('100', 'aab1')\n")),Object(o.b)("p",null,"If there is nothing in the line after space, nothing will get into the group. But the match will be because it is stated in regex that the group is optional:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [30]: line = '100     '\n\nIn [31]: match = re.search(r'(\\d+) +(\\w+)?', line)\n\nIn [32]: match.groups()\nOut[32]: ('100', None)\n")),Object(o.b)("p",null,"Accordingly, for the second group the value is None."),Object(o.b)("p",null,"If ",Object(o.b)("inlineCode",{parentName:"p"},"group")," method is given a default value, it will be returned instead of None:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [33]: line = '100     '\n\nIn [34]: match = re.search(r'(\\d+) +(\\w+)?', line)\n\nIn [35]: match.groups(default=0)\nOut[35]: ('100', 0)\n\nIn [36]: match.groups(default='No match')\nOut[36]: ('100', 'No match')\n")),Object(o.b)("h2",{id:"groupdict"},Object(o.b)("inlineCode",{parentName:"h2"},"groupdict")),Object(o.b)("p",null,"Method ",Object(o.b)("inlineCode",{parentName:"p"},"groupdict")," returns a dictionary in which keys are group names and values are corresponding lines:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [37]: log = 'Jun  3 14:39:05.941: %SW_MATM-4-MACFLAP_NOTIF: Host f03a.b216.7ad7 in vlan 10 is flapping between port Gi0/5 and port Gi0/15'\n\nIn [38]: match = re.search(r'Host (?P<mac>\\S+) '\n    ...:                   r'in vlan (?P<vlan>\\d+) .* '\n    ...:                   r'port (?P<int1>\\S+) '\n    ...:                   r'and port (?P<int2>\\S+)',\n    ...:                   log)\n    ...:\n\nIn [39]: match.groupdict()\nOut[39]: {'int1': 'Gi0/5', 'int2': 'Gi0/15', 'mac': 'f03a.b216.7ad7', 'vlan': '10'}\n")),Object(o.b)("h2",{id:"start-end"},Object(o.b)("inlineCode",{parentName:"h2"},"start"),", ",Object(o.b)("inlineCode",{parentName:"h2"},"end")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"start")," and ",Object(o.b)("inlineCode",{parentName:"p"},"end")," methods return indexes of the beginning and end of the match of regex."),Object(o.b)("p",null,"If methods are called without arguments, they return indexes for whole match:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [40]: line = '  10     aab1.a1a1.a5d3    FastEthernet0/1  '\n\nIn [41]: match = re.search(r'(\\d+) +([0-9a-f.]+) +(\\S+)', line)\n\nIn [42]: match.start()\nOut[42]: 2\n\nIn [43]: match.end()\nOut[43]: 42\n\nIn [45]: line[match.start():match.end()]\nOut[45]: '10     aab1.a1a1.a5d3    FastEthernet0/1'\n")),Object(o.b)("p",null,"You can pass number or name of the group to methods. Then they return indexes for this group:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [46]: match.start(2)\nOut[46]: 9\n\nIn [47]: match.end(2)\nOut[47]: 23\n\nIn [48]: line[match.start(2):match.end(2)]\nOut[48]: 'aab1.a1a1.a5d3'\n")),Object(o.b)("p",null,"Similarly for named groups:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [49]: log = 'Jun  3 14:39:05.941: %SW_MATM-4-MACFLAP_NOTIF: Host f03a.b216.7ad7 in vlan 10 is flapping between port Gi0/5 and port Gi0/15'\n\nIn [50]: match = re.search(r'Host (?P<mac>\\S+) '\n    ...:                   r'in vlan (?P<vlan>\\d+) .* '\n    ...:                   r'port (?P<int1>\\S+) '\n    ...:                   r'and port (?P<int2>\\S+)',\n    ...:                   log)\n    ...:\n\nIn [51]: match.start('mac')\nOut[51]: 52\n\nIn [52]: match.end('mac')\nOut[52]: 66\n")),Object(o.b)("h2",{id:"span"},Object(o.b)("inlineCode",{parentName:"h2"},"span")),Object(o.b)("p",null,"Method ",Object(o.b)("inlineCode",{parentName:"p"},"span")," returns a tuple with an index of the beginning and end of substring. It works in a similar way to ",Object(o.b)("inlineCode",{parentName:"p"},"start")," and ",Object(o.b)("inlineCode",{parentName:"p"},"end")," methods, but returns a pair of numbers."),Object(o.b)("p",null,"Without arguments ",Object(o.b)("inlineCode",{parentName:"p"},"span")," returns indexes for whole match:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [53]: line = '  10     aab1.a1a1.a5d3    FastEthernet0/1  '\n\nIn [54]: match = re.search(r'(\\d+) +([0-9a-f.]+) +(\\S+)', line)\n\nIn [55]: match.span()\nOut[55]: (2, 42)\n")),Object(o.b)("p",null,"But you can also pass number of the group:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [56]: line = '  10     aab1.a1a1.a5d3    FastEthernet0/1  '\n\nIn [57]: match = re.search(r'(\\d+) +([0-9a-f.]+) +(\\S+)', line)\n\nIn [58]: match.span(2)\nOut[58]: (9, 23)\n")),Object(o.b)("p",null,"Similarly for named groups:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [59]: log = 'Jun  3 14:39:05.941: %SW_MATM-4-MACFLAP_NOTIF: Host f03a.b216.7ad7 in vlan 10 is flapping between port Gi0/5 and port Gi0/15'\n\nIn [60]: match = re.search(r'Host (?P<mac>\\S+) '\n    ...:                   r'in vlan (?P<vlan>\\d+) .* '\n    ...:                   r'port (?P<int1>\\S+) '\n    ...:                   r'and port (?P<int2>\\S+)',\n    ...:                   log)\n    ...:\n\nIn [64]: match.span('mac')\nOut[64]: (52, 66)\n\nIn [65]: match.span('vlan')\nOut[65]: (75, 77)\n")))}u.isMDXComponent=!0},281:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return h}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),u=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return r.a.createElement(i.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=u(t),d=a,h=s["".concat(c,".").concat(d)]||s[d]||b[d]||o;return t?r.a.createElement(h,l(l({ref:n},i),{},{components:t})):r.a.createElement(h,l({ref:n},i))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var i=2;i<o;i++)c[i]=t[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);