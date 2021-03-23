(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{281:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return _}));var r=t(0),s=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var d=s.a.createContext({}),c=function(e){var n=s.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return s.a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return s.a.createElement(s.a.Fragment,{},n)}},m=s.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),l=c(t),m=r,_=l["".concat(o,".").concat(m)]||l[m]||u[m]||a;return t?s.a.createElement(_,i(i({ref:n},d),{},{components:t})):s.a.createElement(_,i({ref:n},d))}));function _(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<a;d++)o[d]=t[d];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},78:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return c}));var r=t(3),s=t(8),a=(t(0),t(281)),o={id:"arithmetic_operator_support",title:"Arithmetic Operator Support",sidebar_label:"Arithmetic Operator Support",slug:"arithmetic_operator_support",custom_edit_url:null},i={unversionedId:"python/23_oop_special_methods/arithmetic_operator_support",id:"python/23_oop_special_methods/arithmetic_operator_support",isDocsHomePage:!1,title:"Arithmetic Operator Support",description:"Special methods are also responsible for arithmetic operations support, for example, add method is responsible for addition operation:",source:"@site/docs/python/23_oop_special_methods/3_arihmetic_operator_support.md",slug:"/python/23_oop_special_methods/arithmetic_operator_support",permalink:"/docs/python/23_oop_special_methods/arithmetic_operator_support",editUrl:null,version:"current",sidebar_label:"Arithmetic Operator Support",sidebar:"someSidebar",previous:{title:"Methods Str And Repr",permalink:"/docs/python/23_oop_special_methods/methods_str_and_repr"},next:{title:"Protocols",permalink:"/docs/python/23_oop_special_methods/protocols"}},p=[],d={toc:p};function c(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Special methods are also responsible for arithmetic operations support, for example, ",Object(a.b)("inlineCode",{parentName:"p"},"__add__")," method is responsible for addition operation:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"__add__(self, other)\n")),Object(a.b)("p",null,"Let\u2019s add to IPAddress class the support of summing with numbers, but in order not to complicate method implementation we will take an advantage of ",Object(a.b)("inlineCode",{parentName:"p"},"ipaddress")," module possibilities."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [1]: import ipaddress\n\nIn [2]: ipaddress1 = ipaddress.ip_address('10.1.1.1')\n\nIn [3]: int(ipaddress1)\nOut[3]: 167837953\n\nIn [4]: ipaddress.ip_address(167837953)\nOut[4]: IPv4Address('10.1.1.1')\n")),Object(a.b)("p",null,"IPAddress class with ",Object(a.b)("inlineCode",{parentName:"p"},"__add__"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'class IPAddress:\n    def __init__(self, ip):\n        self.ip = ip\n\n    def __str__(self):\n        return f"IPAddress: {self.ip}"\n\n    def __repr__(self):\n        return f"IPAddress(\'{self.ip}\')"\n\n    def __add__(self, other):\n        ip_int = int(ipaddress.ip_address(self.ip))\n        sum_ip_str = str(ipaddress.ip_address(ip_int + other))\n        return IPAddress(sum_ip_str)\n')),Object(a.b)("p",null,"ip_int variable refers to source address value in decimal format. And sum_ip_str is a string with IP address obtained by adding two numbers. In general, it is desirable that the summation operation returns an instance of the same class, so in the last line of method an instance of IPAddress class is created and a string with resulting address is passed to it as an argument."),Object(a.b)("p",null,"Now IPAddress class instances support addition with number. As a result we get a new instance of IPAddress class."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [6]: ip1 = IPAddress('10.1.1.1')\n\nIn [7]: ip1 + 5\nOut[7]: IPAddress('10.1.1.6')\n")),Object(a.b)("p",null,"Since ipaddress module is used within method and it supports creating IP address only from a decimal number, it is necessary to limit method to work only with ",Object(a.b)("inlineCode",{parentName:"p"},"int")," data type. If the second element was an object of another type, an exception must be generated. The exception and error message are taken from a similar error in the ",Object(a.b)("inlineCode",{parentName:"p"},"ipaddress.ip_address")," function:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [8]: a1 = ipaddress.ip_address('10.1.1.1')\n\nIn [9]: a1 + 4\nOut[9]: IPv4Address('10.1.1.5')\n\nIn [10]: a1 + 4.0\n---------------------------------------------------------------------------\nTypeError                                 Traceback (most recent call last)\n<ipython-input-10-a0a045adedc5> in <module>\n----\x3e 1 a1 + 4.0\n\nTypeError: unsupported operand type(s) for +: 'IPv4Address' and 'float'\n")),Object(a.b)("p",null,"Now IPAddress class looks like:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'class IPAddress:\n    def __init__(self, ip):\n        self.ip = ip\n\n    def __str__(self):\n        return f"IPAddress: {self.ip}"\n\n    def __repr__(self):\n        return f"IPAddress(\'{self.ip}\')"\n\n    def __add__(self, other):\n        if not isinstance(other, int):\n            raise TypeError(f"unsupported operand type(s) for +:"\n                            f" \'IPAddress\' and \'{type(other).__name__}\'")\n\n        ip_int = int(ipaddress.ip_address(self.ip))\n        sum_ip_str = str(ipaddress.ip_address(ip_int + other))\n        return IPAddress(sum_ip_str)\n')),Object(a.b)("p",null,"If the second operand is not an instanse of ",Object(a.b)("inlineCode",{parentName:"p"},"int")," class, a TypeError exception is generated. In exception, information is displayed that summation is not supported between IPAddress class instances and operand class instance. Class name is derived from class itself, after calling type: ",Object(a.b)("inlineCode",{parentName:"p"},"type(other).__name__"),"."),Object(a.b)("p",null,"Check for summation with decimal number and error generation:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [12]: ip1 = IPAddress('10.1.1.1')\n\nIn [13]: ip1 + 5\nOut[13]: IPAddress('10.1.1.6')\n\nIn [14]: ip1 + 5.0\n---------------------------------------------------------------------------\nTypeError                                 Traceback (most recent call last)\n<ipython-input-14-5e619f8dc37a> in <module>\n----\x3e 1 ip1 + 5.0\n\n<ipython-input-11-77b43bc64757> in __add__(self, other)\n     11     def __add__(self, other):\n     12         if not isinstance(other, int):\n---\x3e 13             raise TypeError(f\"unsupported operand type(s) for +:\"\n     14                             f\" 'IPAddress' and '{type(other).__name__}'\")\n     15\n\nTypeError: unsupported operand type(s) for +: 'IPAddress' and 'float'\n\nIn [15]: ip1 + '1'\n---------------------------------------------------------------------------\nTypeError                                 Traceback (most recent call last)\n<ipython-input-15-c5ce818f55d8> in <module>\n----\x3e 1 ip1 + '1'\n\n<ipython-input-11-77b43bc64757> in __add__(self, other)\n     11     def __add__(self, other):\n     12         if not isinstance(other, int):\n---\x3e 13             raise TypeError(f\"unsupported operand type(s) for +:\"\n     14                             f\" 'IPAddress' and '{type(other).__name__}'\")\n     15\n\nTypeError: unsupported operand type(s) for +: 'IPAddress' and 'str'\n")),Object(a.b)("p",null,"See also"),Object(a.b)("p",null,"Manual of special methods ",Object(a.b)("a",{parentName:"p",href:"https://rszalski.github.io/magicmethods/#numeric"},"Numeric magic methods")))}c.isMDXComponent=!0}}]);