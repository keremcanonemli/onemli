(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{214:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(8),i=(t(0),t(281)),s={id:"strings",title:"Strings",sidebar_label:"Strings",slug:"strings",custom_edit_url:null},l={unversionedId:"python/04_data_structures/strings",id:"python/04_data_structures/strings",isDocsHomePage:!1,title:"Strings",description:"String in Python is:",source:"@site/docs/python/04_data_structures/2_strings.md",slug:"/python/04_data_structures/strings",permalink:"/tr/docs/python/04_data_structures/strings",editUrl:null,version:"current",sidebar_label:"Strings",sidebar:"someSidebar",previous:{title:"Numbers",permalink:"/tr/docs/python/04_data_structures/numbers"},next:{title:"Lists",permalink:"/tr/docs/python/04_data_structures/lists"}},o=[{value:"Methods upper, lower, swapcase, capitalize",id:"methods-upper-lower-swapcase-capitalize",children:[]},{value:"Method count",id:"method-count",children:[]},{value:"Method find",id:"method-find",children:[]},{value:"Methods startswith, endswith",id:"methods-startswith-endswith",children:[]},{value:"Method replace",id:"method-replace",children:[]},{value:"Method strip",id:"method-strip",children:[]},{value:"Method split",id:"method-split",children:[]},{value:"String formatting with <code>format</code> method",id:"string-formatting-with-format-method",children:[]},{value:"Strings formatting with f-Strings",id:"strings-formatting-with-f-strings",children:[{value:"Syntax",id:"syntax",children:[]}]}],c={toc:o};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"String in Python is:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"sequence of characters enclosed in quotes"),Object(i.b)("li",{parentName:"ul"},"immutable ordered data type")),Object(i.b)("p",null,"Examples of strings:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [9]: 'Hello'\nOut[9]: 'Hello'\nIn [10]: \"Hello\"\nOut[10]: 'Hello'\n\nIn [11]: tunnel = \"\"\"\n   ....: interface Tunnel0\n   ....:  ip address 10.10.10.1 255.255.255.0\n   ....:  ip mtu 1416\n   ....:  ip ospf hello-interval 5\n   ....:  tunnel source FastEthernet1/0\n   ....:  tunnel protection ipsec profile DMVPN\n   ....: \"\"\"\n\nIn [12]: tunnel\nOut[12]: '\\ninterface Tunnel0\\n ip address 10.10.10.1 255.255.255.0\\n ip mtu 1416\\n ip ospf hello-interval 5\\n tunnel source FastEthernet1/0\\n tunnel protection ipsec profile DMVPN\\n'\n\nIn [13]: print(tunnel)\n\ninterface Tunnel0\n ip address 10.10.10.1 255.255.255.0\n ip mtu 1416\n ip ospf hello-interval 5\n tunnel source FastEthernet1/0\n tunnel protection ipsec profile DMVPN\n")),Object(i.b)("p",null,"Strings can be summed. Then they merge into one string:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [14]: intf = 'interface'\n\nIn [15]: tun = 'Tunnel0'\n\nIn [16]: intf + tun\nOut[16]: 'interfaceTunnel0'\n\nIn [17]: intf + ' ' + tun\nOut[17]: 'interface Tunnel0'\n")),Object(i.b)("p",null,"You can multiply a string by a number. In this case, string repeats specified number of times:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [18]: intf * 5\nOut[18]: 'interfaceinterfaceinterfaceinterfaceinterface'\n\nIn [19]: '#' * 40\nOut[19]: '########################################'\n")),Object(i.b)("p",null,"The fact that strings are an ordered data type allows to refer to characters in a string by a number starting from zero:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [20]: string1 = 'interface FastEthernet1/0'\n\nIn [21]: string1[0]\nOut[21]: 'i'\n")),Object(i.b)("p",null,"All characters in a string are numbered from zero. But if you need to refer to a character from the end, you can specify negative values (this time with 1)."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [22]: string1[1]\nOut[22]: 'n'\n\nIn [23]: string1[-1]\nOut[23]: '0'\n")),Object(i.b)("p",null,"In addition to referring to a specific character you can make string slices by specifying a number range. Slicing starts with first number (included) and ends at second number (excluded):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [24]: string1[0:9]\nOut[24]: 'interface'\n\nIn [25]: string1[10:22]\nOut[25]: 'FastEthernet'\n")),Object(i.b)("p",null,"If no second number is specified, slice is until the end of string:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [26]:  string1[10:]\nOut[26]: 'FastEthernet1/0'\n")),Object(i.b)("p",null,"Slice last three character of string:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [27]: string1[-3:]\nOut[27]: '1/0'\n")),Object(i.b)("p",null,"You can also specify a step in slice. For example, you can get odd numbers:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [28]: a = '0123456789'\n\nIn [29]: a[1::2]\nOut[29]: '13579'\n")),Object(i.b)("p",null,"Or you can get all even numbers of string ",Object(i.b)("inlineCode",{parentName:"p"},"a"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [31]: a[::2]\nOut[31]: '02468'\n")),Object(i.b)("p",null,"Slices can also be used to get a string in reverse order:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [28]: a = '0123456789'\n\nIn [29]: a[::]\nOut[29]: '0123456789'\n\nIn [30]: a[::-1]\nOut[30]: '9876543210'\n")),Object(i.b)("p",null,"Note"),Object(i.b)("p",null,"Entries ",Object(i.b)("inlineCode",{parentName:"p"},"a[::]")," and ",Object(i.b)("inlineCode",{parentName:"p"},"a[:]")," give the same result but double colon makes it possible to indicate that not every element should be taken, but for example every second element."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"len")," function allows you to get number of characters in a string:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [1]: line = 'interface Gi0/1'\n\nIn [2]: len(line)\nOut[2]: 15\n")),Object(i.b)("p",null,"Note"),Object(i.b)("p",null,"Function and method differ in that method is tied to a particular type of object and function is generally more universal and can be applied to objects of different types. For example, ",Object(i.b)("inlineCode",{parentName:"p"},"len")," function can be applied to strings, lists, dictionaries and so on, but ",Object(i.b)("inlineCode",{parentName:"p"},"startswith")," method only applies to strings."),Object(i.b)("h1",{id:"string-methods"},"String methods"),Object(i.b)("p",null,"When automating, very often it will be necessary to work with strings, since config file, command output and commands sent - are strings. Knowledge of various methods (actions) that can be applied to strings helps to work with them more efficiently."),Object(i.b)("p",null,"Strings are immutable data type, so all methods that convert string returns a new string and the original string remains unchanged."),Object(i.b)("h2",{id:"methods-upper-lower-swapcase-capitalize"},"Methods upper, lower, swapcase, capitalize"),Object(i.b)("p",null,"Methods ",Object(i.b)("inlineCode",{parentName:"p"},"upper"),", ",Object(i.b)("inlineCode",{parentName:"p"},"lower"),", ",Object(i.b)("inlineCode",{parentName:"p"},"swapcase"),", ",Object(i.b)("inlineCode",{parentName:"p"},"capitalize")," perform string case conversion:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [25]: string1 = 'FastEthernet'\n\nIn [26]: string1.upper()\nOut[26]: 'FASTETHERNET'\n\nIn [27]: string1.lower()\nOut[27]: 'fastethernet'\n\nIn [28]: string1.swapcase()\nOut[28]: 'fASTeTHERNET'\n\nIn [29]: string2 = 'tunnel 0'\n\nIn [30]: string2.capitalize()\nOut[30]: 'Tunnel 0'\n")),Object(i.b)("p",null,"It is very important to pay attention to the fact that methods often return the converted string. And, therefore, we must not forget to assign it to some variable (you can use the same)."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [31]: string1 = string1.upper()\n\nIn [32]: print(string1)\nFASTETHERNET\n")),Object(i.b)("h2",{id:"method-count"},"Method count"),Object(i.b)("p",null,"Method ",Object(i.b)("inlineCode",{parentName:"p"},"count")," used to count how many times a character or substring occurs in a string:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [33]: string1 = 'Hello, hello, hello, hello'\n\nIn [34]: string1.count('hello')\nOut[34]: 3\n\nIn [35]: string1.count('ello')\nOut[35]: 4\n\nIn [36]: string1.count('l')\nOut[36]: 8\n")),Object(i.b)("h2",{id:"method-find"},"Method find"),Object(i.b)("p",null,"You can pass a substring or character to ",Object(i.b)("inlineCode",{parentName:"p"},"find")," and it will return the lowest index where first character of the substring is (for the first match):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [37]: string1 = 'interface FastEthernet0/1'\n\nIn [38]: string1.find('Fast')\nOut[38]: 10\n\nIn [39]: string1[string1.find('Fast')::]\nOut[39]: 'FastEthernet0/1'\n")),Object(i.b)("p",null,"If no match is found, ",Object(i.b)("inlineCode",{parentName:"p"},"find")," method returns ",Object(i.b)("inlineCode",{parentName:"p"},"-1"),"."),Object(i.b)("h2",{id:"methods-startswith-endswith"},"Methods startswith, endswith"),Object(i.b)("p",null,"Checking if a string starts or ends with certain symbols (methods ",Object(i.b)("inlineCode",{parentName:"p"},"startswith"),", ",Object(i.b)("inlineCode",{parentName:"p"},"endswith"),"):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [40]: string1 = 'FastEthernet0/1'\n\nIn [41]: string1.startswith('Fast')\nOut[41]: True\n\nIn [42]: string1.startswith('fast')\nOut[42]: False\n\nIn [43]: string1.endswith('0/1')\nOut[43]: True\n\nIn [44]: string1.endswith('0/2')\nOut[44]: False\n")),Object(i.b)("h2",{id:"method-replace"},"Method replace"),Object(i.b)("p",null,"Replacing a sequence of characters in a string with another sequence (method ",Object(i.b)("inlineCode",{parentName:"p"},"replace"),"):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [45]: string1 = 'FastEthernet0/1'\n\nIn [46]: string1.replace('Fast', 'Gigabit')\nOut[46]: 'GigabitEthernet0/1'\n")),Object(i.b)("h2",{id:"method-strip"},"Method strip"),Object(i.b)("p",null,"Often when a file is processed, the file is opened line by line. But at the end of each line, there are usually some special characters (and may be at the beginning). For example, new line character."),Object(i.b)("p",null,"To get rid of them, it is very convenient to use method ",Object(i.b)("inlineCode",{parentName:"p"},"strip"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [47]: string1 = '\\n\\tinterface FastEthernet0/1\\n'\n\nIn [48]: print(string1)\n\n    interface FastEthernet0/1\n\n\nIn [49]: string1\nOut[49]: '\\n\\tinterface FastEthernet0/1\\n'\n\nIn [50]: string1.strip()\nOut[50]: 'interface FastEthernet0/1'\n")),Object(i.b)("p",null,"By default, ",Object(i.b)("inlineCode",{parentName:"p"},"strip")," method removes blank characters. This character set includes: ",Object(i.b)("inlineCode",{parentName:"p"},"\\t\\n\\r\\f\\v")),Object(i.b)("p",null,"Method ",Object(i.b)("inlineCode",{parentName:"p"},"strip")," can be passed as an argument of any characters. Then at the beginning and at the end of the line all characters that were specified in the line will be removed:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [51]: ad_metric = '[110/1045]'\n\nIn [52]: ad_metric.strip('[]')\nOut[52]: '110/1045'\n")),Object(i.b)("p",null,"Method ",Object(i.b)("inlineCode",{parentName:"p"},"strip")," removes special characters at the beginning and at the end of the line. If you want to remove characters only on the left or only on the right, you can use ",Object(i.b)("inlineCode",{parentName:"p"},"lstrip")," and ",Object(i.b)("inlineCode",{parentName:"p"},"rstrip"),"."),Object(i.b)("h2",{id:"method-split"},"Method split"),Object(i.b)("p",null,"Method ",Object(i.b)("inlineCode",{parentName:"p"},"split")," splits the string using a symbol (or symbols) as separator and returns a list of strings:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [53]: string1 = 'switchport trunk allowed vlan 10,20,30,100-200'\n\nIn [54]: commands = string1.split()\n\nIn [55]: print(commands)\n['switchport', 'trunk', 'allowed', 'vlan', '10,20,30,100-200']\n")),Object(i.b)("p",null,"In example above, ",Object(i.b)("inlineCode",{parentName:"p"},"string1.split")," splits the string by spaces and returns a list of strings. The list is saved to ",Object(i.b)("inlineCode",{parentName:"p"},"commands")," variable."),Object(i.b)("p",null,"By default, separator is a space symbol (spaces, tabs, new line), but you can specify any separator in parentheses:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [56]: vlans = commands[-1].split(',')\n\nIn [57]: print(vlans)\n['10', '20', '30', '100-200']\n")),Object(i.b)("p",null,"In ",Object(i.b)("inlineCode",{parentName:"p"},"commands")," list, the last element is a string with vlans, so the index -1 is used. Then string is split into parts using ",Object(i.b)("inlineCode",{parentName:"p"},"split")," ",Object(i.b)("inlineCode",{parentName:"p"},"commands[-1].split(',')"),". Since separator is a comma, this list is received ",Object(i.b)("inlineCode",{parentName:"p"},"['10', '20', '30', '100-200']"),"."),Object(i.b)("p",null,"A useful feature of ",Object(i.b)("inlineCode",{parentName:"p"},"split")," method with default separator is that the string is not only split into a list of strings by whitespace characters, but the whitespace characters are also removed at the beginning and at the end of the line:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [58]: string1 = '  switchport trunk allowed vlan 10,20,30,100-200\\n\\n'\n\nIn [59]: string1.split()\nOut[59]: ['switchport', 'trunk', 'allowed', 'vlan', '10,20,30,100-200']\n")),Object(i.b)("p",null,"Method ",Object(i.b)("inlineCode",{parentName:"p"},"split")," has another good feature: by default, method splits a string not by one whitespace character, but by any number. For example, this will be very useful when processing show commands:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [60]: sh_ip_int_br = \"FastEthernet0/0       15.0.15.1    YES manual up         up\"\n\nIn [61]: sh_ip_int_br.split()\nOut[61]: ['FastEthernet0/0', '15.0.15.1', 'YES', 'manual', 'up', 'up']\n")),Object(i.b)("p",null,"And this is the same string when one space is used as the separator:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [62]: sh_ip_int_br.split(' ')\nOut[62]:\n['FastEthernet0/0', '', '', '', '', '', '', '', '', '', '', '', '15.0.15.1', '', '', '', '', '', '', 'YES', 'manual', 'up', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'up']\n")),Object(i.b)("h1",{id:"string-formatting"},"String formatting"),Object(i.b)("p",null,"When working with strings, there are often situations where different data needs to be substituted in string template. This can be done by combining string parts and data, but Python has a more convenient way - strings formatting."),Object(i.b)("p",null,"String formatting can help, for example, in such situations:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"need to set values to a string by a certain template"),Object(i.b)("li",{parentName:"ul"},"need to format output by columns"),Object(i.b)("li",{parentName:"ul"},"need to convert numbers to binary format")),Object(i.b)("p",null,"There are several options for string formatting:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"with operator ",Object(i.b)("inlineCode",{parentName:"li"},"%")," \u2014 older option"),Object(i.b)("li",{parentName:"ul"},"method ",Object(i.b)("inlineCode",{parentName:"li"},"format")," \u2014 relatively new option"),Object(i.b)("li",{parentName:"ul"},"f-\u0441\u0442\u0440\u043e\u043a\u0438 \u2014 new option that appeared in Python 3.6")),Object(i.b)("p",null,"Although ",Object(i.b)("inlineCode",{parentName:"p"},"format")," is recommended, string formatting can often be found through ",Object(i.b)("inlineCode",{parentName:"p"},"%"),"."),Object(i.b)("h2",{id:"string-formatting-with-format-method"},"String formatting with ",Object(i.b)("inlineCode",{parentName:"h2"},"format")," method"),Object(i.b)("p",null,"Example of ",Object(i.b)("inlineCode",{parentName:"p"},"format")," method use:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [1]: \"interface FastEthernet0/{}\".format('1')\nOut[1]: 'interface FastEthernet0/1'\n")),Object(i.b)("p",null,"A special symbol ",Object(i.b)("inlineCode",{parentName:"p"},"{}")," indicates that the value that is passed to ",Object(i.b)("inlineCode",{parentName:"p"},"format")," method is placed here. Each pair of curly braces represents one place for the substitution."),Object(i.b)("p",null,"Values that are placed in curly braces may be of different types. For example, it can be a string, number or list:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [3]: print('{}'.format('10.1.1.1'))\n10.1.1.1\n\nIn [4]: print('{}'.format(100))\n100\n\nIn [5]: print('{}'.format([10, 1, 1,1]))\n[10, 1, 1, 1]\n")),Object(i.b)("p",null,"You can align result in columns by formatting strings. In string formatting, you can specify how many characters are selected for the data. If number of characters in the data is less than number of characters selected, the missing characters are filled with blanks."),Object(i.b)("p",null,"For example, you can allign data in columns of equal width of 15 characters with right side alignment:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [3]: vlan, mac, intf = ['100', 'aabb.cc80.7000', 'Gi0/1']\n\nIn [4]: print(\"{:>15} {:>15} {:>15}\".format(vlan, mac, intf))\n            100  aabb.cc80.7000           Gi0/1\n")),Object(i.b)("p",null,"Alignment to the left:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'In [5]: print("{:15} {:15} {:15}".format(vlan, mac, intf))\n100             aabb.cc80.7000  Gi0/1\n')),Object(i.b)("p",null,"Output template can also be multi-string:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [6]: ip_template = '''\n   ...: IP address:\n   ...: {}\n   ...: '''\n\nIn [7]: print(ip_template.format('10.1.1.1'))\n\nIP address:\n10.1.1.1\n")),Object(i.b)("p",null,"You can also use string formatting to change the display format of numbers."),Object(i.b)("p",null,"For example, you can specify how many digits after the comma to show:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'In [9]: print("{:.3f}".format(10.0/3))\n3.333\n')),Object(i.b)("p",null,"Using string formatting, you can convert numbers to binary format:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [11]: '{:b} {:b} {:b} {:b}'.format(192, 100, 1, 1)\nOut[11]: '11000000 1100100 1 1'\n")),Object(i.b)("p",null,"You can still specify additional parameters such as column width:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [12]: '{:8b} {:8b} {:8b} {:8b}'.format(192, 100, 1, 1)\nOut[12]: '11000000  1100100        1        1'\n")),Object(i.b)("p",null,"You can also specify that numbers should be supplemented with zeros instead of spaces:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [13]: '{:08b} {:08b} {:08b} {:08b}'.format(192, 100, 1, 1)\nOut[13]: '11000000 01100100 00000001 00000001'\n")),Object(i.b)("p",null,"You can enter names in curly braces. This makes it possible to pass arguments in any order and also makes template more understandable:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [15]: '{ip}/{mask}'.format(mask=24, ip='10.1.1.1')\nOut[15]: '10.1.1.1/24'\n")),Object(i.b)("p",null,"Another useful feature of string formatting is argument number specification:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [16]: '{1}/{0}'.format(24, '10.1.1.1')\nOut[16]: '10.1.1.1/24'\n")),Object(i.b)("p",null,"For example this can prevent repetitive transmission of the same values:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [19]: ip_template = '''\n    ...: IP address:\n    ...: {:<8} {:<8} {:<8} {:<8}\n    ...: {:08b} {:08b} {:08b} {:08b}\n    ...: '''\n\nIn [20]: print(ip_template.format(192, 100, 1, 1, 192, 100, 1, 1))\n\nIP address:\n192      100      1        1\n11000000 01100100 00000001 00000001\n")),Object(i.b)("p",null,"In example above the octet address has to be passed twice - one for decimal format and other for binary."),Object(i.b)("p",null,"By specifying value indexes that are passed to ",Object(i.b)("inlineCode",{parentName:"p"},"format")," method, it is possible to avoid duplication:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [21]: ip_template = '''\n    ...: IP address:\n    ...: {0:<8} {1:<8} {2:<8} {3:<8}\n    ...: {0:08b} {1:08b} {2:08b} {3:08b}\n    ...: '''\n\nIn [22]: print(ip_template.format(192, 100, 1, 1))\n\nIP address:\n192      100      1        1\n11000000 01100100 00000001 00000001\n")),Object(i.b)("h2",{id:"strings-formatting-with-f-strings"},"Strings formatting with f-Strings"),Object(i.b)("p",null,"Python 3.6 added a new version of string formatting - f-strings or interpolation of strings. The f-strings allow not only to set values to template, but also to perform calls to functions, methods, etc."),Object(i.b)("p",null,"In many situations f-strings are easier to use than format, and f-strings work faster than format and other methods of string formatting."),Object(i.b)("h3",{id:"syntax"},"Syntax"),Object(i.b)("p",null,"F-string is a literal line with a letter f in front of it. Inside f-string, in curly braces there are names of variables that will be substituted:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [1]: ip = '10.1.1.1'\n\nIn [2]: mask = 24\n\nIn [3]: f\"IP: {ip}, mask: {mask}\"\nOut[3]: 'IP: 10.1.1.1, mask: 24'\n")),Object(i.b)("p",null,"The same result with ",Object(i.b)("inlineCode",{parentName:"p"},"format")," method you can achieve by: ",Object(i.b)("inlineCode",{parentName:"p"},'"IP: {ip}, mask: {mask}".format(ip=ip, mask=mask)'),"."),Object(i.b)("p",null,"A very important difference between f-strings and ",Object(i.b)("inlineCode",{parentName:"p"},"format"),": f-strings are expressions that are processed, not just strings. That is, in case of ipython, as soon as we wrote the expression and pressed Enter, it was performed and instead of expressions ",Object(i.b)("inlineCode",{parentName:"p"},"{ip}")," and ",Object(i.b)("inlineCode",{parentName:"p"},"{mask}")," the values of variables were substituted."),Object(i.b)("p",null,"Therefore, for example, you cannot first write a template and then define variables that are used in template:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [1]: f\"IP: {ip}, mask: {mask}\"\n---------------------------------------------------------------------------\nNameError                                 Traceback (most recent call last)\n<ipython-input-1-e6f8e01ac9c4> in <module>()\n----\x3e 1 f\"IP: {ip}, mask: {mask}\"\n\nNameError: name 'ip' is not defined\n```python\n\nIn addition to substituting variable values you can write expressions in curly braces:\n\n```python\nIn [5]: first_name = 'William'\n\nIn [6]: second_name = 'Shakespeare'\n\nIn [7]: f\"{first_name.upper()} {second_name.upper()}\"\nOut[7]: 'WILLIAM SHAKESPEARE'\n")),Object(i.b)("p",null,"After colon in f-strings you can specify the same values as in ",Object(i.b)("inlineCode",{parentName:"p"},"format"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [9]: oct1, oct2, oct3, oct4 = [10, 1, 1, 1]\n\nIn [10]: print(f'''\n    ...: IP address:\n    ...: {oct1:<8} {oct2:<8} {oct3:<8} {oct4:<8}\n    ...: {oct1:08b} {oct2:08b} {oct3:08b} {oct4:08b}''')\n\nIP address:\n10       1        1        1\n00001010 00000001 00000001 00000001\n")),Object(i.b)("p",null,"Warning"),Object(i.b)("p",null,"Since for full explanation of f-strings it is necessary to show examples with loops and work with objects that have not yet been covered, this topic is also in the section ",Object(i.b)("a",{parentName:"p",href:"https://pyneng.readthedocs.io/en/latest/book/08_python_basic_examples/f-string.html#f-string"},"Formatting lines with f-strings")," with additional examples and explanations."),Object(i.b)("h1",{id:"literal-strings-concatenation"},"Literal strings concatenation"),Object(i.b)("p",null,"Python has very convenient functionality \u2014 literal strings concatenation"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [1]: s = ('Test' 'String')\n\nIn [2]: s\nOut[2]: 'TestString'\n\nIn [3]: s = 'Test' 'String'\n\nIn [4]: s\nOut[4]: 'TestString'\n")),Object(i.b)("p",null,"You can even wrap parts of a line on different lines, but only if they are in parentheses:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [5]: s = ('Test'\n   ...: 'String')\n\nIn [6]: s\nOut[6]: 'TestString'\n")),Object(i.b)("p",null,"This is very convenient to use in regex:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"regex = (\n    '(\\S+) +(\\S+) +'\n    '\\w+ +\\w+ +'\n    '(up|down|administratively down) +'\n    '(\\w+)'\n)\n")),Object(i.b)("p",null,"This way, the regex can be split and made easier to understand. Plus you can add explanatory comments in strings."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"regex = (\n    '(\\S+) +(\\S+) +' # interface and IP\n    '\\w+ +\\w+ +'\n    '(up|down|administratively down) +' # Status\n    '(\\w+)' # Protocol\n)\n")),Object(i.b)("p",null,"It is also convenient to use this technique when writing a long message:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [7]: message = ('During command execution \"{}\" '\n   ...: 'such error occured \"{}\".\\n'\n   ...: 'Exclude this command from the list? [y/n]')\n\nIn [8]: message\nOut[8]: 'During command execution \"{}\" such error occured \"{}\".\\nExclude this command from the list? [y/n]'\n")))}p.isMDXComponent=!0},281:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),p=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=p(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),b=p(t),m=a,d=b["".concat(s,".").concat(m)]||b[m]||u[m]||i;return t?r.a.createElement(d,l(l({ref:n},c),{},{components:t})):r.a.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=m;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<i;c++)s[c]=t[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);