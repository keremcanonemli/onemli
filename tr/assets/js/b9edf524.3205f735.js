(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{230:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(8),i=(t(0),t(280)),o={id:"repeating_characters",title:"Repeating Characters",sidebar_label:"14.3 Repeating Characters",slug:"repeating_characters",custom_edit_url:null},c={unversionedId:"python/regex/repeating_characters",id:"python/regex/repeating_characters",isDocsHomePage:!1,title:"Repeating Characters",description:"- regex+ - one or more repetitions of preceding element",source:"@site/docs/python/regex/3_repeating_characters.md",slug:"/python/regex/repeating_characters",permalink:"/tr/docs/python/regex/repeating_characters",editUrl:null,version:"current",sidebar_label:"14.3 Repeating Characters",sidebar:"someSidebar",previous:{title:"Character Sets",permalink:"/tr/docs/python/regex/character_sets"},next:{title:"Special Symbols",permalink:"/tr/docs/python/regex/special_symbols"}},l=[{value:"<code>+</code>",id:"",children:[]},{value:"<code>*</code>",id:"-1",children:[]},{value:"<code>?</code>",id:"-2",children:[]},{value:"<code>{n}</code>",id:"n",children:[]}],s={toc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"regex+")," - one or more repetitions of preceding element"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"regex*")," - zero or more repetitions of preceding element"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"regex?")," \u2013 zero or one repetition of preceding element"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"regex{n}")," - exactly n repetitions of preceding element"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"regex{n,m}")," - from n to m repetitions of preceding element"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"regex{n,}")," - n or more repetitions of preceding element")),Object(i.b)("h2",{id:""},Object(i.b)("inlineCode",{parentName:"h2"},"+")),Object(i.b)("p",null,"Plus indicates that the previous expression can be repeated as many times as you like, but at least once. For example, here the repetition refers to letter \u2018a\u2019:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [1]: line = '100     aab1.a1a1.a5d3    FastEthernet0/1'\n\nIn [2]: re.search('a+', line).group()\nOut[2]: 'aa'\n")),Object(i.b)("p",null,"And in this expression, string \u2018a1\u2019 is repeated:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [3]: line = '100     aab1.a1a1.a5d3    FastEthernet0/1'\n\nIn [4]: re.search('(a1)+', line).group()\nOut[4]: 'a1a1'\n")),Object(i.b)("p",null,"Expresson ",Object(i.b)("inlineCode",{parentName:"p"},"(a1)+")," uses parentheses to specify that repetition is related to sequence of symbols \u2018a1\u2019."),Object(i.b)("p",null,"IP address can be described by ",Object(i.b)("inlineCode",{parentName:"p"},"\\d+\\.\\d+\\.\\d+\\.\\d+"),". Plus is used to indicate that there can be several digits. Expression ",Object(i.b)("inlineCode",{parentName:"p"},"\\.")," is required because the dot is a special symbol (it denotes any symbol). And in order to indicate that we are interested in a dot as a symbol, you have to screen it - put a backslash in front of a dot."),Object(i.b)("p",null,"Using this expression, you can get an IP address from sh_ip_int_br string:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [5]: sh_ip_int_br = 'Ethernet0/1    192.168.200.1   YES NVRAM  up          up'\n\nIn [6]: re.search('\\d+\\.\\d+\\.\\d+\\.\\d+', sh_ip_int_br).group()\nOut[6]: '192.168.200.1'\n")),Object(i.b)("p",null,"Another example of an expression: ",Object(i.b)("inlineCode",{parentName:"p"},"\\d+\\s+\\S+")," - describes a string which has digits first, then whitespace characters, and then non-whitespace characters (all except space, tab, and other similar characters). Using it you can get VLAN and MAC address from string:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [7]: line = '1500     aab1.a1a1.a5d3    FastEthernet0/1'\n\nIn [8]: re.search('\\d+\\s+\\S+', line).group()\nOut[8]: '1500     aab1.a1a1.a5d3'\n")),Object(i.b)("h2",{id:"-1"},Object(i.b)("inlineCode",{parentName:"h2"},"*")),Object(i.b)("p",null,"Asterisk indicates that the previous expression can be repeated 0 or more times. For example, if an asterisk stands after ",Object(i.b)("inlineCode",{parentName:"p"},"a")," symbol, it means a repetition of that symbol."),Object(i.b)("p",null,"Expression ",Object(i.b)("inlineCode",{parentName:"p"},"ba*")," means ",Object(i.b)("inlineCode",{parentName:"p"},"b")," and then zero or more repetitions of ",Object(i.b)("inlineCode",{parentName:"p"},"a"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [9]: line = '100     a011.baaa.a5d3    FastEthernet0/1'\n\nIn [10]: re.search('ba*', line).group()\nOut[10]: 'baaa'\n")),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"b")," occurs in line before ",Object(i.b)("inlineCode",{parentName:"p"},"baaa"),", then ",Object(i.b)("inlineCode",{parentName:"p"},"b")," will match:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [11]: line = '100     ab11.baaa.a5d3    FastEthernet0/1'\n\nIn [12]: re.search('ba*', line).group()\nOut[12]: 'b'\n")),Object(i.b)("p",null,"Suppose you write a regex that describes email addresses in two formats: ",Object(i.b)("a",{parentName:"p",href:"mailto:user%40example.com"},"user@example.com")," and ",Object(i.b)("a",{parentName:"p",href:"mailto:user.test%40example.com"},"user.test@example.com"),". That is, the left side of address can have either one word or two words separated by a dot."),Object(i.b)("p",null,"The first version is an example of email without a dot:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [13]: email1 = 'user1@gmail.com'\n")),Object(i.b)("p",null,"This address can be described by ",Object(i.b)("inlineCode",{parentName:"p"},"\\w+@\\w+\\.\\w+"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [14]: re.search('\\w+@\\w+\\.\\w+', email1).group()\nOut[14]: 'user1@gmail.com'\n")),Object(i.b)("p",null,"But such an expression is not suitable for an email address with a dot:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [15]: email2 = 'user2.test@gmail.com'\n\nIn [16]: re.search('\\w+@\\w+\\.\\w+', email2).group()\nOut[16]: 'test@gmail.com'\n")),Object(i.b)("p",null,"Regex for email with a dot:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [17]: re.search('\\w+\\.\\w+@\\w+\\.\\w+', email2).group()\nOut[17]: 'user2.test@gmail.com'\n")),Object(i.b)("p",null,"To describe both email, you have to specify that the dot is optional:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"'\\w+\\.*\\w+@\\w+\\.\\w+'\n")),Object(i.b)("p",null,"This regex describes both options:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [18]: email1 = 'user1@gmail.com'\n\nIn [19]: email2 = 'user2.test@gmail.com'\n\nIn [20]: re.search('\\w+\\.*\\w+@\\w+\\.\\w+', email1).group()\nOut[20]: 'user1@gmail.com'\n\nIn [21]: re.search('\\w+\\.*\\w+@\\w+\\.\\w+', email2).group()\nOut[21]: 'user2.test@gmail.com'\n")),Object(i.b)("h2",{id:"-2"},Object(i.b)("inlineCode",{parentName:"h2"},"?")),Object(i.b)("p",null,"In the last example, regex indicates that the dot is optional, but at the same time determines that it can appear many times."),Object(i.b)("p",null,"In this situation, it is more logical to use a question mark. It denotes zero or one repetition of a preceding expression or symbol. Now regex looks like ",Object(i.b)("inlineCode",{parentName:"p"},"\\w+\\.?\\w+@\\w+\\.\\w+"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [22]: mail_log = ['Jun 18 14:10:35 client-ip=154.10.180.10 from=user1@gmail.com, size=551',\n    ...:             'Jun 18 14:11:05 client-ip=150.10.180.10 from=user2.test@gmail.com, size=768']\n\nIn [23]: for message in mail_log:\n     ...:     match = re.search('\\w+\\.?\\w+@\\w+\\.\\w+', message)\n     ...:     if match:\n     ...:         print(\"Found email: \", match.group())\n     ...:\nFound email:  user1@gmail.com\nFound email:  user2.test@gmail.com\n")),Object(i.b)("h2",{id:"n"},Object(i.b)("inlineCode",{parentName:"h2"},"{n}")),Object(i.b)("p",null,"You can set how many times the previous expression should be repeated with curly braces."),Object(i.b)("p",null,"For example, expression ",Object(i.b)("inlineCode",{parentName:"p"},"\\w{4}\\.\\w{4}\\.\\w{4}")," describes 12 letters or digits that are divided into three groups of four characters and separated by dot. This way you can get a MAC address:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [24]: line = '100     aab1.a1a1.a5d3    FastEthernet0/1'\n\nIn [25]: re.search('\\w{4}\\.\\w{4}\\.\\w{4}', line).group()\nOut[25]: 'aab1.a1a1.a5d3'\n")),Object(i.b)("p",null,"You can specify a repetition range in curly braces. For example, try to get all VLAN numbers from string mac_table:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [26]: mac_table = '''\n    ...: sw1#sh mac address-table\n    ...:           Mac Address Table\n    ...: -------------------------------------------\n    ...:\n    ...: Vlan    Mac Address       Type        Ports\n    ...: ----    -----------       --------    -----\n    ...:  100    a1b2.ac10.7000    DYNAMIC     Gi0/1\n    ...:  200    a0d4.cb20.7000    DYNAMIC     Gi0/2\n    ...:  300    acb4.cd30.7000    DYNAMIC     Gi0/3\n    ...: 1100    a2bb.ec40.7000    DYNAMIC     Gi0/4\n    ...:  500    aa4b.c550.7000    DYNAMIC     Gi0/5\n    ...: 1200    a1bb.1c60.7000    DYNAMIC     Gi0/6\n    ...: 1300    aa0b.cc70.7000    DYNAMIC     Gi0/7\n    ...: '''\n")),Object(i.b)("p",null,"Since ",Object(i.b)("inlineCode",{parentName:"p"},"search")," only looks for the first match, expression ",Object(i.b)("inlineCode",{parentName:"p"},"\\d{1,4}")," will have VLAN number:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [27]: for line in mac_table.split('\\n'):\n    ...:     match = re.search('\\d{1,4}', line)\n    ...:     if match:\n    ...:         print('VLAN: ', match.group())\n    ...:\nVLAN:  1\nVLAN:  100\nVLAN:  200\nVLAN:  300\nVLAN:  1100\nVLAN:  500\nVLAN:  1200\nVLAN:  1300\n")),Object(i.b)("p",null,"Expression ",Object(i.b)("inlineCode",{parentName:"p"},"\\d{1,4}")," describes one to four digits."),Object(i.b)("p",null,"Note that the output of command from equipment does not have a VLAN with number 1. Regex got a number 1 from somewhere. Number 1 was in the output from hostname in line ",Object(i.b)("inlineCode",{parentName:"p"},"sw1#sh mac address-table"),"."),Object(i.b)("p",null,"To correct this, it suffices to complete an expression and indicate that at least one space must follow the numbers:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [28]: for line in mac_table.split('\\n'):\n    ...:     match = re.search('\\d{1,4} +', line)\n    ...:     if match:\n    ...:         print('VLAN: ', match.group())\n    ...:\nVLAN:  100\nVLAN:  200\nVLAN:  300\nVLAN:  1100\nVLAN:  500\nVLAN:  1200\nVLAN:  1300\n")))}p.isMDXComponent=!0},280:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=p(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(t),u=a,d=b["".concat(o,".").concat(u)]||b[u]||m[u]||i;return t?r.a.createElement(d,c(c({ref:n},s),{},{components:t})):r.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);