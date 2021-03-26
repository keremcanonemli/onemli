(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{250:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(3),i=t(8),r=(t(0),t(280)),o={id:"formatting_lines_with_f_strings",title:"Formatting Lines With F-Strings",sidebar_label:"8.1 Formatting Lines With F-Strings",slug:"formatting_lines_with_f_strings",custom_edit_url:null},s={unversionedId:"python/python_basic_examples/formatting_lines_with_f_strings",id:"python/python_basic_examples/formatting_lines_with_f_strings",isDocsHomePage:!1,title:"Formatting Lines With F-Strings",description:"Python 3.6 added a new version of string formatting - f-strings or interpolation of strings. The f-strings allow not only to set values to template but also to perform calls to functions, methods, etc.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/python/python_basic_examples/1_formatting_lise_with_fstring.md",slug:"/python/python_basic_examples/formatting_lines_with_f_strings",permalink:"/tr/docs/python/python_basic_examples/formatting_lines_with_f_strings",editUrl:null,version:"current",sidebar_label:"8.1 Formatting Lines With F-Strings",sidebar:"someSidebar",previous:{title:"Python Basic Examples",permalink:"/tr/docs/python/python_basic_examples/python_basic_examples"},next:{title:"Variable Unpacking",permalink:"/tr/docs/python/python_basic_examples/variable_unpacking"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Special aspects of f-strings",id:"special-aspects-of-f-strings",children:[]},{value:"Examples of f-string usage",id:"examples-of-f-string-usage",children:[]},{value:"What to use format or f-strings",id:"what-to-use-format-or-f-strings",children:[]}],c={toc:l};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Python 3.6 added a new version of string formatting - f-strings or interpolation of strings. The f-strings allow not only to set values to template but also to perform calls to functions, methods, etc."),Object(r.b)("p",null,"In many situations f-strings are easier to use than ",Object(r.b)("inlineCode",{parentName:"p"},"format")," and f-strings work faster than ",Object(r.b)("inlineCode",{parentName:"p"},"format")," and other methods of string formatting."),Object(r.b)("h2",{id:"syntax"},"Syntax"),Object(r.b)("p",null,"F-string is a string literal with a letter ",Object(r.b)("inlineCode",{parentName:"p"},"f")," in front of it. Inside f-string, in curly braces there are names of variables that will be substituted:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [1]: ip = '10.1.1.1'\n\nIn [2]: mask = 24\n\nIn [3]: f\"IP: {ip}, mask: {mask}\"\nOut[3]: 'IP: 10.1.1.1, mask: 24'\n\nThe same result with ``format`` method you can achieve by:\n``\"IP: {ip}, mask: {mask}\".format(ip=ip, mask=mask)``.\n")),Object(r.b)("p",null,"A very important difference between f-strings and ",Object(r.b)("inlineCode",{parentName:"p"},"format"),": f-strings are expressions that are processed, not just strings. That is, in case of ipython, as soon as we wrote the expression and pressed Enter, it was performed and instead of expressions ",Object(r.b)("inlineCode",{parentName:"p"},"{ip}")," and ",Object(r.b)("inlineCode",{parentName:"p"},"{mask}")," the values of variables were substituted."),Object(r.b)("p",null,"Therefore, for example, you cannot first write a template and then define variables that are used in template:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},'In [1]: f"IP: {ip}, mask: {mask}"\n---------------------------------------------------------------------------\nNameError                                 Traceback (most recent call last)\n<ipython-input-1-e6f8e01ac9c4> in <module>()\n----\x3e 1 f"IP: {ip}, mask: {mask}"\n\nNameError: name \'ip\' is not defined\n')),Object(r.b)("p",null,"In addition to substituting variable values you can write expressions in curly braces:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [1]: octets = ['10', '1', '1', '1']\n\nIn [2]: mask = 24\n\nIn [3]: f\"IP: {'.'.join(octets)}, mask: {mask}\"\nOut[3]: 'IP: 10.1.1.1, mask: 24'\n")),Object(r.b)("p",null,"After colon in f-strings you can specify the same values as in ",Object(r.b)("inlineCode",{parentName:"p"},"format"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [9]: oct1, oct2, oct3, oct4 = [10, 1, 1, 1]\n\nIn [10]: print(f'''\n    ...: IP address:\n    ...: {oct1:<8} {oct2:<8} {oct3:<8} {oct4:<8}\n    ...: {oct1:08b} {oct2:08b} {oct3:08b} {oct4:08b}''')\n\nIP address:\n10       1        1        1\n00001010 00000001 00000001 00000001\n")),Object(r.b)("h2",{id:"special-aspects-of-f-strings"},"Special aspects of f-strings"),Object(r.b)("p",null,"When using f-strings you cannot first create a template and then use it as in ",Object(r.b)("inlineCode",{parentName:"p"},"format")," method."),Object(r.b)("p",null,"F-string is immediately executed and contains the values of variables that were defined earlier:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [7]: ip = '10.1.1.1'\n\nIn [8]: mask = 24\n\nIn [9]: print(f\"IP: {ip}, mask: {mask}\")\nIP: 10.1.1.1, mask: 24\n")),Object(r.b)("p",null,"If you want to set other values you must create new variables (with the same names) and write f-string again:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [11]: ip = '10.2.2.2'\n\nIn [12]: mask = 24\n\nIn [13]: print(f\"IP: {ip}, mask: {mask}\")\nIP: 10.2.2.2, mask: 24\n")),Object(r.b)("p",null,"When using f-strings in loops an f-string must be written in body of the loop to \xabcatch\xbb new variable values within each iteration:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [1]: ip_list = ['10.1.1.1/24', '10.2.2.2/24', '10.3.3.3/24']\n\nIn [2]: for ip_address in ip_list:\n   ...:     ip, mask = ip_address.split('/')\n   ...:     print(f\"IP: {ip}, mask: {mask}\")\n   ...:\nIP: 10.1.1.1, mask: 24\nIP: 10.2.2.2, mask: 24\nIP: 10.3.3.3, mask: 24\n")),Object(r.b)("h2",{id:"examples-of-f-string-usage"},"Examples of f-string usage"),Object(r.b)("p",null,"Basic variable substitution:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [1]: intf_type = 'Gi'\n\nIn [2]: intf_name = '0/3'\n\nIn [3]: f'interface {intf_type}/{intf_name}'\nOut[3]: 'interface Gi/0/3'\n")),Object(r.b)("p",null,"Column alignment:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [6]: topology = [['sw1', 'Gi0/1', 'r1', 'Gi0/2'],\n   ...:             ['sw1', 'Gi0/2', 'r2', 'Gi0/1'],\n   ...:             ['sw1', 'Gi0/3', 'r3', 'Gi0/0'],\n   ...:             ['sw1', 'Gi0/5', 'sw4', 'Gi0/2']]\n   ...:\n\nIn [7]: for connection in topology:\n   ...:     l_device, l_port, r_device, r_port = connection\n   ...:     print(f'{l_device:10} {l_port:7} {r_device:10} {r_port:7}')\n   ...:\nsw1        Gi0/1   r1         Gi0/2\nsw1        Gi0/2   r2         Gi0/1\nsw1        Gi0/3   r3         Gi0/0\nsw1        Gi0/5   sw4        Gi0/2\n")),Object(r.b)("p",null,"Column width can be specified by variable:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [6]: topology = [['sw1', 'Gi0/1', 'r1', 'Gi0/2'],\n   ...:             ['sw1', 'Gi0/2', 'r2', 'Gi0/1'],\n   ...:             ['sw1', 'Gi0/3', 'r3', 'Gi0/0'],\n   ...:             ['sw1', 'Gi0/5', 'sw4', 'Gi0/2']]\n   ...:\n\nIn [7]: width = 10\n\nIn [8]: for connection in topology:\n   ...:     l_device, l_port, r_device, r_port = connection\n   ...:     print(f'{l_device:{width}} {l_port:{width}} {r_device:{width}} {r_port:{width}}')\n   ...:\nsw1        Gi0/1      r1         Gi0/2\nsw1        Gi0/2      r2         Gi0/1\nsw1        Gi0/3      r3         Gi0/0\nsw1        Gi0/5      sw4        Gi0/2\n")),Object(r.b)("p",null,"Accessing a dictionary key:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [1]: session_stats = {'done': 10, 'todo': 5}\n\nIn [2]: if session_stats['todo']:\n   ...:     print(f\"Pomodoros done: {session_stats['done']}, TODO: {session_stats['todo']}\")\n   ...: else:\n   ...:     print(f\"Good job! All {session_stats['done']} pomodoros done!\")\n   ...:\nPomodoros done: 10, TODO: 5\n")),Object(r.b)("p",null,"Call len() function inside f-string:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [2]: topology = [['sw1', 'Gi0/1', 'r1', 'Gi0/2'],\n   ...:             ['sw1', 'Gi0/2', 'r2', 'Gi0/1'],\n   ...:             ['sw1', 'Gi0/3', 'r3', 'Gi0/0'],\n   ...:             ['sw1', 'Gi0/5', 'sw4', 'Gi0/2']]\n   ...:\n\nIn [3]: print(f'Number of connections in topology: {len(topology)}')\nNumber of connections in topology: 4\n")),Object(r.b)("p",null,"Call upper() method inside f-string:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [1]: name = 'python'\n\nIn [2]: print(f'Zen of {name.upper()}')\nZen of PYTHON\n")),Object(r.b)("p",null,"Converting numbers to binary format:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [7]: ip = '10.1.1.1'\n\nIn [8]: oct1, oct2, oct3, oct4 = ip.split('.')\n\nIn [9]: print(f'{int(oct1):08b} {int(oct2):08b} {int(oct3):08b} {int(oct4):08b}')\n00001010 00000001 00000001 00000001\n")),Object(r.b)("h2",{id:"what-to-use-format-or-f-strings"},"What to use format or f-strings"),Object(r.b)("p",null,"In many cases f-strings are more convenient to use as template looks more understandable and compact. However, there are cases when ",Object(r.b)("inlineCode",{parentName:"p"},"format")," method is more convenient. For example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [6]: ip = [10, 1, 1, 1]\n\nIn [7]: oct1, oct2, oct3, oct4 = ip\n   ...: print(f'{oct1:08b} {oct2:08b} {oct3:08b} {oct4:08b}')\n   ...:\n00001010 00000001 00000001 00000001\n\nIn [8]: template = \"{:08b} \"*4\n\nIn [9]: template.format(*ip)\nOut[9]: '00001010 00000001 00000001 00000001 '\n")),Object(r.b)("p",null,"Another situation where ",Object(r.b)("inlineCode",{parentName:"p"},"format")," is usually more convenient to use: the need to use the same template many times in script. F-string will execute the first time and will set current values of variables and to use template again it has to be rewritten. This means that script will contain copies of the same line. At the same time ",Object(r.b)("inlineCode",{parentName:"p"},"format")," allows to create a template in one place and then use it again substituting variables as needed."),Object(r.b)("p",null,"This can be avoided by creating a function but creating a function to print a string based on template is not always justified. Example of creating a function:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [1]: def show_me_ip(ip, mask):\n   ...:     return f\"IP: {ip}, mask: {mask}\"\n   ...:\n\nIn [2]: show_me_ip('10.1.1.1', 24)\nOut[2]: 'IP: 10.1.1.1, mask: 24'\n\nIn [3]: show_me_ip('192.16.10.192', 28)\nOut[3]: 'IP: 192.16.10.192, mask: 28'\n")))}p.isMDXComponent=!0},280:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return f}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),p=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},b=function(e){var n=p(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(t),u=a,f=b["".concat(o,".").concat(u)]||b[u]||m[u]||r;return t?i.a.createElement(f,s(s({ref:n},c),{},{components:t})):i.a.createElement(f,s({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);