(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{153:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return i}));var r=t(3),a=t(8),o=(t(0),t(281)),s={id:"grouping",title:"Grouping",sidebar_label:"Grouping",slug:"grouping",custom_edit_url:null},u={unversionedId:"python/regex/grouping",id:"python/regex/grouping",isDocsHomePage:!1,title:"Grouping",description:"Grouping indicates that sequence of symbols should be considered as a one. However, this is not the only advantage of grouping. In addition, by use of groups you can get only a certain portion of string that has been described by expression.",source:"@site/docs/python/regex/6_grouping.md",slug:"/python/regex/grouping",permalink:"/tr/docs/python/regex/grouping",editUrl:null,version:"current",sidebar_label:"Grouping",sidebar:"someSidebar",previous:{title:"Greedy Qualifiers",permalink:"/tr/docs/python/regex/greedy_qualifiers"},next:{title:"Parsing The Output",permalink:"/tr/docs/python/regex/parsing_the_output"}},c=[{value:"Numbered groups",id:"numbered-groups",children:[]},{value:"Named groups",id:"named-groups",children:[]}],p={toc:c};function i(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Grouping indicates that sequence of symbols should be considered as a one. However, this is not the only advantage of grouping. In addition, by use of groups you can get only a certain portion of string that has been described by expression."),Object(o.b)("p",null,"For example, from a log file you should select strings in which \u201c%SW_MATM-4-MACFLAP_NOTIF\u201d match occur and then from each such string get MAC address, VLAN and interfaces. In this case, regex has to describe a string and all parts of string to be remembered are placed in parentheses."),Object(o.b)("p",null,"For example, from the log file, you need to select the lines that contain \u201c%SW_MATM-4-MACFLAP_NOTIF\u201d, and then get the MAC address, VLAN and interfaces from each such line. In this case, the regex not only describes the string, but also indicates all parts of the string to be returned in parentheses."),Object(o.b)("p",null,"Python has two options for using groups:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Numbered groups"),Object(o.b)("li",{parentName:"ul"},"Named groups")),Object(o.b)("h2",{id:"numbered-groups"},"Numbered groups"),Object(o.b)("p",null,"Group is defined by placing expression in parentheses ",Object(o.b)("inlineCode",{parentName:"p"},"()"),"."),Object(o.b)("p",null,"Inside expression, group are numbered from left to right starting with 1. Groups can then be selected by numbers to get text that corresponds to group expression."),Object(o.b)("p",null,"Example of groups use:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [8]: line = \"FastEthernet0/1      10.0.12.1   YES manual up          up\"\nIn [9]: match = re.search('(\\S+)\\s+([\\w.]+)\\s+.*', line)\n")),Object(o.b)("p",null,"In this example, two groups are specified:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"first group - any characters other than whitespaces"),Object(o.b)("li",{parentName:"ul"},"second group - any letter or digit (symbol ",Object(o.b)("inlineCode",{parentName:"li"},"\\w"),") or dot")),Object(o.b)("p",null,"The second group could be described as the first. Other version is just for example."),Object(o.b)("p",null,"You can now access a group by number. Group 0 is a string that corresponds to the entire match:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [10]: match.group(0)\nOut[10]: 'FastEthernet0/1            10.0.12.1       YES manual up                    up'\n\nIn [11]: match.group(1)\nOut[11]: 'FastEthernet0/1'\n\nIn [12]: match.group(2)\nOut[12]: '10.0.12.1'\n")),Object(o.b)("p",null,"If necessary, you can list several group numbers:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [13]: match.group(1, 2)\nOut[13]: ('FastEthernet0/1', '10.0.12.1')\n\nIn [14]: match.group(2, 1, 2)\nOut[14]: ('10.0.12.1', 'FastEthernet0/1', '10.0.12.1')\n")),Object(o.b)("p",null,"Starting with Python 3.6, groups can be accessed as follows:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [15]: match[0]\nOut[15]: 'FastEthernet0/1            10.0.12.1       YES manual up                    up'\n\nIn [16]: match[1]\nOut[16]: 'FastEthernet0/1'\n\nIn [17]: match[2]\nOut[17]: '10.0.12.1'\n")),Object(o.b)("p",null,"Method ",Object(o.b)("inlineCode",{parentName:"p"},"groups")," is used to return all substrings that correspond to groups:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [18]: match.groups()\nOut[18]: ('FastEthernet0/1', '10.0.12.1')\n")),Object(o.b)("h2",{id:"named-groups"},"Named groups"),Object(o.b)("p",null,"When expression is complex, it is not very convenient to determine number of group. Plus, when you modify an expression the order of groups can be changed and you will need to change the code that refers to groups."),Object(o.b)("p",null,"Named groups allow you to give a name to the group. Syntax of named group ",Object(o.b)("inlineCode",{parentName:"p"},"(?P<name>regex)"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [19]: line = \"FastEthernet0/1            10.0.12.1       YES manual up                    up\"\n\nIn [20]: match = re.search('(?P<intf>\\S+)\\s+(?P<address>\\S+)\\s+', line)\n")),Object(o.b)("p",null,"These groups can now be accessed by name:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [21]: match.group('intf')\nOut[21]: 'FastEthernet0/1'\n\nIn [22]: match.group('address')\nOut[22]: '10.0.12.1'\n")),Object(o.b)("p",null,"It is also very useful that with ",Object(o.b)("inlineCode",{parentName:"p"},"groupdict")," method you can get a dictionary where keys are the names of groups and values are the substrings that correspond to them:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [23]: match.groupdict()\nOut[23]: {'address': '10.0.12.1', 'intf': 'FastEthernet0/1'}\n")),Object(o.b)("p",null,"And then you can add groups to regex and rely on their name instead of order:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [24]: match = re.search('(?P<intf>\\S+)\\s+(?P<address>\\S+)\\s+\\w+\\s+\\w+\\s+(?P<status>up|down)\\s+(?P<protocol>up|down)', line)\n\nIn [25]: match.groupdict()\nOut[25]:\n{'address': '10.0.12.1',\n 'intf': 'FastEthernet0/1',\n 'protocol': 'up',\n 'status': 'up'}\n")))}i.isMDXComponent=!0},281:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return g}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),i=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},l=function(e){var n=i(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=i(t),d=r,g=l["".concat(s,".").concat(d)]||l[d]||b[d]||o;return t?a.a.createElement(g,u(u({ref:n},p),{},{components:t})):a.a.createElement(g,u({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=d;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,s[1]=u;for(var p=2;p<o;p++)s[p]=t[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);