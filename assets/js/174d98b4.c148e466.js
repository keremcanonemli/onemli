(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{281:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var i=t(0),a=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),p=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=p(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},_={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(t),d=i,m=b["".concat(o,".").concat(d)]||b[d]||_[d]||r;return t?a.a.createElement(m,l(l({ref:n},c),{},{components:t})):a.a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},87:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var i=t(3),a=t(8),r=(t(0),t(281)),o={id:"protocols",title:"Protocols",sidebar_label:"Protocols",slug:"protocols",custom_edit_url:null},l={unversionedId:"python/23_oop_special_methods/protocols",id:"python/23_oop_special_methods/protocols",isDocsHomePage:!1,title:"Protocols",description:"Special methods are responsible not only for support of operations like addition and comparison, but also for protocol support. Protocol - set of methods that must be implemented in object to make object support a certain behavior. For example, Python has protocols like iteration, context manager, containers and others. After creating certain methods in the object, it will behave as built-in and use an interface understood by all who write on Python.",source:"@site/docs/python/23_oop_special_methods/4_protocols.md",slug:"/python/23_oop_special_methods/protocols",permalink:"/docs/python/23_oop_special_methods/protocols",editUrl:null,version:"current",sidebar_label:"Protocols",sidebar:"someSidebar",previous:{title:"Arithmetic Operator Support",permalink:"/docs/python/23_oop_special_methods/arithmetic_operator_support"},next:{title:"Tasks",permalink:"/docs/python/23_oop_special_methods/tasks"}},s=[{value:"Iterator creation",id:"iterator-creation",children:[]},{value:"Creation of iterable",id:"creation-of-iterable",children:[]}],c={toc:s};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Special methods are responsible not only for support of operations like addition and comparison, but also for protocol support. Protocol - set of methods that must be implemented in object to make object support a certain behavior. For example, Python has protocols like iteration, context manager, containers and others. After creating certain methods in the object, it will behave as built-in and use an interface understood by all who write on Python."),Object(r.b)("p",null,"Note"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://docs.python.org/3/library/collections.abc.html#collections-abstract-base-classes"},"A table with abstract classes describing which methods an object should have to make it support a certain protocol")),Object(r.b)("h1",{id:"iteration-protocol"},"Iteration protocol"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"iterable")," - object that can return elements one at a time. For Python, it is any object that has ",Object(r.b)("inlineCode",{parentName:"p"},"__iter__")," or ",Object(r.b)("inlineCode",{parentName:"p"},"__getitem__")," method. If an object has ",Object(r.b)("inlineCode",{parentName:"p"},"__iter__")," method, the iterable becomes an iterator by calling ",Object(r.b)("inlineCode",{parentName:"p"},"iter(name)")," where ",Object(r.b)("inlineCode",{parentName:"p"},"name")," - name of iterable. If ",Object(r.b)("inlineCode",{parentName:"p"},"__iter__")," method is not present, Python iterates elements using ",Object(r.b)("inlineCode",{parentName:"p"},"__getitem__")," (also by calling ",Object(r.b)("inlineCode",{parentName:"p"},"iter")," function)."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"class Items:\n    def __init__(self, items):\n        self.items = items\n\n    def __getitem__(self, index):\n        print('\u0412\u044b\u0437\u044b\u0432\u0430\u044e __getitem__')\n        return self.items[index]\n\n\nIn [2]: iterable_1 = Items([1, 2, 3, 4])\n\nIn [3]: iterable_1[0]\nCalling __getitem__\nOut[3]: 1\n\nIn [4]: for i in iterable_1:\n   ...:     print('>>>>', i)\n   ...:\nCalling __getitem__\n>>>> 1\nCalling __getitem__\n>>>> 2\nCalling __getitem__\n>>>> 3\nCalling __getitem__\n>>>> 4\nCalling __getitem__\n\nIn [5]: list(map(str, iterable_1))\nCalling __getitem__\nCalling __getitem__\nCalling __getitem__\nCalling __getitem__\nCalling __getitem__\nOut[5]: ['1', '2', '3', '4']\n")),Object(r.b)("p",null,"If object has ",Object(r.b)("inlineCode",{parentName:"p"},"__iter__")," method (which must return iterator), it is used for values iteration:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"class Items:\n    def __init__(self, items):\n        self.items = items\n\n    def __getitem__(self, index):\n        print('\u0412\u044b\u0437\u044b\u0432\u0430\u044e __getitem__')\n        return self.items[index]\n\n    def __iter__(self):\n        print('\u0412\u044b\u0437\u044b\u0432\u0430\u044e __iter__')\n        return iter(self.items)\n\n\nIn [12]: iterable_1 = Items([1, 2, 3, 4])\n\nIn [13]: for i in iterable_1:\n     ...:     print('>>>>', i)\n     ...:\nCalling __iter__\n>>>> 1\n>>>> 2\n>>>> 3\n>>>> 4\n\nIn [14]: list(map(str, iterable_1))\nCalling __iter__\nOut[14]: ['1', '2', '3', '4']\n")),Object(r.b)("p",null,"In Python, ",Object(r.b)("inlineCode",{parentName:"p"},"iter")," function is responsible for getting an iterator:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [1]: lista = [1, 2, 3]\n\nIn [2]: iter(lista)\nOut[2]: <list_iterator at 0xb4ede28c>\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"iter")," function will work on any object that has ",Object(r.b)("inlineCode",{parentName:"p"},"__iter__")," or ",Object(r.b)("inlineCode",{parentName:"p"},"__getitem__")," method. Method ",Object(r.b)("inlineCode",{parentName:"p"},"__iter__")," returns an iterator. If this method is not available, ",Object(r.b)("inlineCode",{parentName:"p"},"iter")," function checks availability of ",Object(r.b)("inlineCode",{parentName:"p"},"__getitem__")," method that can get elements by index. If ",Object(r.b)("inlineCode",{parentName:"p"},"__getitem__")," method exists, elements will be iterated through index (starting with 0)."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"iterator")," - object that returns its elements one at a time. From Python point of view, it is any object that has ",Object(r.b)("inlineCode",{parentName:"p"},"__next__")," method. This method returns the next item if any or raises ",Object(r.b)("inlineCode",{parentName:"p"},"Stopiteration")," exception when items are ended. In addition, iterator remembers which object it stopped at in the last iteration. Each iterator also has ",Object(r.b)("inlineCode",{parentName:"p"},"__iter__")," method - that is, every iterator is an iterable object. This method returns iterator itself."),Object(r.b)("p",null,"An example of creating iterator from list:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [3]: lista = [1, 2, 3]\n\nIn [4]: i = iter(lista)\n")),Object(r.b)("p",null,"Now you can use ",Object(r.b)("inlineCode",{parentName:"p"},"next")," function that calls ",Object(r.b)("inlineCode",{parentName:"p"},"__next__")," method to take the next element:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [5]: next(i)\nOut[5]: 1\n\nIn [6]: next(i)\nOut[6]: 2\n\nIn [7]: next(i)\nOut[7]: 3\n\nIn [8]: next(i)\n------------------------------------------------------------\nStopIteration              Traceback (most recent call last)\n<ipython-input-8-bed2471d02c1> in <module>()\n----\x3e 1 next(i)\n\nStopIteration:\n")),Object(r.b)("p",null,"After elements are ended, ",Object(r.b)("inlineCode",{parentName:"p"},"Stopiteration")," exception is raised. In order for iterator to return elements again, it has to be re-created. Similar steps are performed when ",Object(r.b)("inlineCode",{parentName:"p"},"for")," loop iterates items in the list:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [9]: for item in lista:\n   ...:     print(item)\n   ...:\n1\n2\n3\n")),Object(r.b)("p",null,"When we iterate list items, ",Object(r.b)("inlineCode",{parentName:"p"},"iter")," function is first applied to the list to create an iterator and then ",Object(r.b)("inlineCode",{parentName:"p"},"__next__")," method is called until ",Object(r.b)("inlineCode",{parentName:"p"},"Stopiteration")," exception raised."),Object(r.b)("p",null,"An example of ",Object(r.b)("inlineCode",{parentName:"p"},"my_for")," function that works with any iterable and loosely imitates built-in function ",Object(r.b)("inlineCode",{parentName:"p"},"for")," (actually gititem are iterated over by iter function):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"def my_for(iterable):\n    if getattr(iterable, \"__iter__\", None):\n        print('\u0415\u0441\u0442\u044c __iter__')\n        iterator = iter(iterable)\n        while True:\n            try:\n                print(next(iterator))\n            except StopIteration:\n                break\n    elif getattr(iterable, \"__getitem__\", None):\n        print('\u041d\u0435\u0442 __iter__, \u043d\u043e \u0435\u0441\u0442\u044c __getitem__')\n        index = 0\n        while True:\n            try:\n                print(iterable[index])\n                index += 1\n            except IndexError:\n                break\n")),Object(r.b)("p",null,"Check function on object that has ",Object(r.b)("inlineCode",{parentName:"p"},"__iter__"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [18]: my_for([1, 2, 3, 4])\n\u0415\u0441\u0442\u044c __iter__\n1\n2\n3\n4\n")),Object(r.b)("p",null,"Check function on object that does not have ",Object(r.b)("inlineCode",{parentName:"p"},"__iter__")," but has ",Object(r.b)("inlineCode",{parentName:"p"},"__getitem__"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"class Items:\n    def __init__(self, items):\n        self.items = items\n\n    def __getitem__(self, index):\n        print('\u0412\u044b\u0437\u044b\u0432\u0430\u044e __getitem__')\n        return self.items[index]\n\n\nIn [20]: iterable_1 = Items([1, 2, 3, 4, 5])\n\nIn [21]: my_for(iterable_1)\n\u041d\u0435\u0442 __iter__, \u043d\u043e \u0435\u0441\u0442\u044c __getitem__\nCalling __getitem__\n1\nCalling __getitem__\n2\nCalling __getitem__\n3\nCalling __getitem__\n4\nCalling __getitem__\n5\nCalling __getitem__\n")),Object(r.b)("h2",{id:"iterator-creation"},"Iterator creation"),Object(r.b)("p",null,"Example of Network class:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [10]: import ipaddress\n    ...:\n    ...: class Network:\n    ...:     def __init__(self, network):\n    ...:         self.network = network\n    ...:         subnet = ipaddress.ip_network(self.network)\n    ...:         self.addresses = [str(ip) for ip in subnet.hosts()]\n")),Object(r.b)("p",null,"Example of Network class instance creation:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [14]: net1 = Network('10.1.1.192/30')\n\nIn [15]: net1\nOut[15]: <__main__.Network at 0xb3124a6c>\n\nIn [16]: net1.addresses\nOut[16]: ['10.1.1.193', '10.1.1.194']\n\nIn [17]: net1.network\nOut[17]: '10.1.1.192/30'\n")),Object(r.b)("p",null,"Create an iterator from Network class:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"class Network:\n    def __init__(self, network):\n        self.network = network\n        subnet = ipaddress.ip_network(self.network)\n        self.addresses = [str(ip) for ip in subnet.hosts()]\n        self._index = 0\n\n    def __iter__(self):\n        print('\u0412\u044b\u0437\u044b\u0432\u0430\u044e __iter__')\n        return self\n\n    def __next__(self):\n        print('\u0412\u044b\u0437\u044b\u0432\u0430\u044e __next__')\n        if self._index < len(self.addresses):\n            current_address = self.addresses[self._index]\n            self._index += 1\n            return current_address\n        else:\n            raise StopIteration\n")),Object(r.b)("p",null,"Method ",Object(r.b)("inlineCode",{parentName:"p"},"__iter__")," in iterator must return object itself, therefore ",Object(r.b)("inlineCode",{parentName:"p"},"return self")," is specified in method and ",Object(r.b)("inlineCode",{parentName:"p"},"__next__")," method returns elements one at a time and raises ",Object(r.b)("inlineCode",{parentName:"p"},"StopIteration")," exception when elements have run out."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [14]: net1 = Network('10.1.1.192/30')\n\nIn [15]: for ip in net1:\n    ...:     print(ip)\n    ...:\nCalling __iter__\nCalling __next__\n10.1.1.193\nCalling __next__\n10.1.1.194\nCalling __next__\n")),Object(r.b)("p",null,"Most of the time, iterator is a disposable object and once we\u2019ve iterated elements, we can\u2019t do it again:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [16]: for ip in net1:\n    ...:     print(ip)\n    ...:\nCalling __iter__\nCalling __next__\n")),Object(r.b)("h2",{id:"creation-of-iterable"},"Creation of iterable"),Object(r.b)("p",null,"Very often it is sufficient for class to be an iterable and not necessarily an iterator. If an object is iterable, it can be used in ",Object(r.b)("inlineCode",{parentName:"p"},"for")," loop, ",Object(r.b)("inlineCode",{parentName:"p"},"map")," functions, ",Object(r.b)("inlineCode",{parentName:"p"},"filter"),", ",Object(r.b)("inlineCode",{parentName:"p"},"sorted"),", ",Object(r.b)("inlineCode",{parentName:"p"},"enumerate")," and others. It is also generally easier to make an iterable than an iterator."),Object(r.b)("p",null,"In order for Network class to be iterable, class must have ",Object(r.b)("inlineCode",{parentName:"p"},"__iter__")," (",Object(r.b)("inlineCode",{parentName:"p"},"__next__")," is not needed) and method must return iterator. Since in this case, Network iterates addresses that are in ",Object(r.b)("inlineCode",{parentName:"p"},"self.addresses")," list, the easiest option to return iterator is to return ",Object(r.b)("inlineCode",{parentName:"p"},"iter(self.addresses)"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"class Network:\n    def __init__(self, network):\n        self.network = network\n        subnet = ipaddress.ip_network(self.network)\n        self.addresses = [str(ip) for ip in subnet.hosts()]\n\n    def __iter__(self):\n        return iter(self.addresses)\n")),Object(r.b)("p",null,"Now all Network class instances will be iterable objects:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [18]: net1 = Network('10.1.1.192/30')\n\nIn [19]: for ip in net1:\n    ...:     print(ip)\n    ...:\n10.1.1.193\n10.1.1.194\n")),Object(r.b)("h1",{id:"sequence-protocol"},"Sequence protocol"),Object(r.b)("p",null,"In the most basic version, sequence protocol (sequence) includes two methods: ",Object(r.b)("inlineCode",{parentName:"p"},"__len__")," and ",Object(r.b)("inlineCode",{parentName:"p"},"__getitem__"),". In more complete version also methods: ",Object(r.b)("inlineCode",{parentName:"p"},"__contains__"),", ",Object(r.b)("inlineCode",{parentName:"p"},"__iter__"),", ",Object(r.b)("inlineCode",{parentName:"p"},"__reversed__"),", ",Object(r.b)("inlineCode",{parentName:"p"},"index")," and ",Object(r.b)("inlineCode",{parentName:"p"},"count"),". If sequence is mutable, several other methods are added."),Object(r.b)("p",null,"Add ",Object(r.b)("inlineCode",{parentName:"p"},"__len__")," and ",Object(r.b)("inlineCode",{parentName:"p"},"__getitem__")," methods to Network class:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [1]: class Network:\n   ...:     def __init__(self, network):\n   ...:         self.network = network\n   ...:         subnet = ipaddress.ip_network(self.network)\n   ...:         self.addresses = [str(ip) for ip in subnet.hosts()]\n   ...:\n   ...:     def __iter__(self):\n   ...:         return iter(self.addresses)\n   ...:\n   ...:     def __len__(self):\n   ...:         return len(self.addresses)\n   ...:\n   ...:     def __getitem__(self, index):\n   ...:         return self.addresses[index]\n   ...:\n")),Object(r.b)("p",null,"Method ",Object(r.b)("inlineCode",{parentName:"p"},"__len__")," is called by ",Object(r.b)("inlineCode",{parentName:"p"},"len")," function:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [2]: net1 = Network('10.1.1.192/30')\n\nIn [3]: len(net1)\nOut[3]: 2\n")),Object(r.b)("p",null,"And ",Object(r.b)("inlineCode",{parentName:"p"},"__getitem__")," method is called when you acess item by index:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [4]: net1[0]\nOut[4]: '10.1.1.193'\n\nIn [5]: net1[1]\nOut[5]: '10.1.1.194'\n\nIn [6]: net1[-1]\nOut[6]: '10.1.1.194'\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"__getitem__")," method is responsible not only for access by index, but also for slices:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [7]: net1 = Network('10.1.1.192/28')\n\nIn [8]: net1[0]\nOut[8]: '10.1.1.193'\n\nIn [9]: net1[3:7]\nOut[9]: ['10.1.1.196', '10.1.1.197', '10.1.1.198', '10.1.1.199']\n\nIn [10]: net1[3:]\nOut[10]:\n['10.1.1.196',\n '10.1.1.197',\n '10.1.1.198',\n '10.1.1.199',\n '10.1.1.200',\n '10.1.1.201',\n '10.1.1.202',\n '10.1.1.203',\n '10.1.1.204',\n '10.1.1.205',\n '10.1.1.206']\n")),Object(r.b)("p",null,"In this case, because ",Object(r.b)("inlineCode",{parentName:"p"},"__getitem__")," method uses a ",Object(r.b)("inlineCode",{parentName:"p"},"list"),", errors are processed correctly automatically:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [11]: net1[100]\n---------------------------------------------------------------------------\nIndexError                                Traceback (most recent call last)\n<ipython-input-11-09ca84e34cb6> in <module>\n----\x3e 1 net1[100]\n\n<ipython-input-2-bc213b4a03ca> in __getitem__(self, index)\n     12\n     13     def __getitem__(self, index):\n---\x3e 14         return self.addresses[index]\n     15\n\nIndexError: list index out of range\n\nIn [12]: net1['a']\n---------------------------------------------------------------------------\nTypeError                                 Traceback (most recent call last)\n<ipython-input-12-facd90673864> in <module>\n----\x3e 1 net1['a']\n\n<ipython-input-2-bc213b4a03ca> in __getitem__(self, index)\n     12\n     13     def __getitem__(self, index):\n---\x3e 14         return self.addresses[index]\n     15\n\nTypeError: list indices must be integers or slices, not str\n")),Object(r.b)("p",null,"Remaining methods of sequence protocol:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"__contains__")," - this method is responsible for checking the presence of element in sequence ",Object(r.b)("inlineCode",{parentName:"li"},"'10.1.1.198' in net1"),". If object does not define this method, the presence of element is checked by iteration of elements using ",Object(r.b)("inlineCode",{parentName:"li"},"__iter__")," and if this method is also unavailable, then by index iteration with ",Object(r.b)("inlineCode",{parentName:"li"},"__getitem__"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"__reversed__")," - is used by built-in ",Object(r.b)("inlineCode",{parentName:"li"},"reversed")," function. This method is usually best not to create and rely on the fact that ",Object(r.b)("inlineCode",{parentName:"li"},"reversed")," function in absence of ",Object(r.b)("inlineCode",{parentName:"li"},"__reversed__")," method will use methods ",Object(r.b)("inlineCode",{parentName:"li"},"__len__")," and ",Object(r.b)("inlineCode",{parentName:"li"},"__getitem__"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"index")," - returns index of element. Works exactly the same as ",Object(r.b)("inlineCode",{parentName:"li"},"index")," method in lists and tuples."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"count")," - returns number of values. Works exactly the same as ",Object(r.b)("inlineCode",{parentName:"li"},"count")," method in lists and tuples.")),Object(r.b)("h1",{id:"context-manager"},"Context manager"),Object(r.b)("p",null,"Context manager allows specified actions to be performed at the beginning and end of ",Object(r.b)("inlineCode",{parentName:"p"},"with")," block. Two methods are responsible for context manager:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"__enter__(self)")," - indicates what should be done at the beginning of ",Object(r.b)("inlineCode",{parentName:"li"},"with")," block. Value that returns method is assigned to variable after ",Object(r.b)("inlineCode",{parentName:"li"},"as"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"__exit__(self, exc_type, exc_value, traceback)")," - indicates what should be done at the end of ",Object(r.b)("inlineCode",{parentName:"li"},"with")," block or when it is interrupted. If there is an exception within block, then exc_type, exc_value, traceback will contain exception information, if there is no exception they will be equal to None.")),Object(r.b)("p",null,"Examples of context manager usage:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"file opening/closing"),Object(r.b)("li",{parentName:"ul"},"opening/closing of SSH/Telnet session"),Object(r.b)("li",{parentName:"ul"},"transactions handling in database")),Object(r.b)("p",null,"CiscoSSH class uses paramiko to connect to the equipment:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"class CiscoSSH:\n    def __init__(self, ip, username, password, enable, disable_paging=True):\n        client = paramiko.SSHClient()\n        client.set_missing_host_key_policy(paramiko.AutoAddPolicy())\n\n        client.connect(\n            hostname=ip,\n            username=username,\n            password=password,\n            look_for_keys=False,\n            allow_agent=False)\n\n        self.ssh = client.invoke_shell()\n        self.ssh.send('enable\\n')\n        self.ssh.send(enable + '\\n')\n        if disable_paging:\n            self.ssh.send('terminal length 0\\n')\n        time.sleep(1)\n        self.ssh.recv(1000)\n\n    def send_show_command(self, command):\n        self.ssh.send(command + '\\n')\n        time.sleep(2)\n        result = self.ssh.recv(5000).decode('ascii')\n        return result\n")),Object(r.b)("p",null,"Example of class usage:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [9]: r1 = CiscoSSH('192.168.100.1', 'cisco', 'cisco', 'cisco')\n\nIn [10]: r1.send_show_command('sh clock')\nOut[10]: 'sh clock\\r\\n*12:58:47.523 UTC Sun Jul 28 2019\\r\\nR1#'\n\nIn [11]: r1.send_show_command('sh ip int br')\nOut[11]: 'sh ip int br\\r\\nInterface                  IP-Address      OK? Method Status                Protocol\\r\\nEthernet0/0                192.168.100.1   YES NVRAM  up                    up      \\r\\nEthernet0/1                192.168.200.1   YES NVRAM  up                    up      \\r\\nEthernet0/2                19.1.1.1        YES NVRAM  up                    up      \\r\\nEthernet0/3                192.168.230.1   YES NVRAM  up                    up      \\r\\nLoopback0                  4.4.4.4         YES NVRAM  up                    up      \\r\\nLoopback90                 90.1.1.1        YES manual up                    up      \\r\\nR1#'\n")),Object(r.b)("p",null,"In order for the class to support work in context manager, it is necessary to add methods ",Object(r.b)("inlineCode",{parentName:"p"},"__enter__")," and ",Object(r.b)("inlineCode",{parentName:"p"},"__exit__"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"class CiscoSSH:\n    def __init__(self, ip, username, password, enable, disable_paging=True):\n        print('\u041c\u0435\u0442\u043e\u0434 __init__')\n        client = paramiko.SSHClient()\n        client.set_missing_host_key_policy(paramiko.AutoAddPolicy())\n\n        client.connect(\n            hostname=ip,\n            username=username,\n            password=password,\n            look_for_keys=False,\n            allow_agent=False)\n\n        self.ssh = client.invoke_shell()\n        self.ssh.send('enable\\n')\n        self.ssh.send(enable + '\\n')\n        if disable_paging:\n            self.ssh.send('terminal length 0\\n')\n        time.sleep(1)\n        self.ssh.recv(1000)\n\n    def __enter__(self):\n        print('\u041c\u0435\u0442\u043e\u0434 __enter__')\n        return self\n\n    def __exit__(self, exc_type, exc_value, traceback):\n        print('\u041c\u0435\u0442\u043e\u0434 __exit__')\n        self.ssh.close()\n\n    def send_show_command(self, command):\n        self.ssh.send(command + '\\n')\n        time.sleep(2)\n        result = self.ssh.recv(5000).decode('ascii')\n        return result\n")),Object(r.b)("p",null,"Example of class usage in context manager:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [14]: with CiscoSSH('192.168.100.1', 'cisco', 'cisco', 'cisco') as r1:\n    ...:     print(r1.send_show_command('sh clock'))\n    ...:\n\u041c\u0435\u0442\u043e\u0434 __init__\n\u041c\u0435\u0442\u043e\u0434 __enter__\nsh clock\n*13:05:50.677 UTC Sun Jul 28 2019\nR1#\n\u041c\u0435\u0442\u043e\u0434 __exit__\n")),Object(r.b)("p",null,"Even if an exception occurs within block, ",Object(r.b)("inlineCode",{parentName:"p"},"__exit__")," method is executed:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [18]: with CiscoSSH('192.168.100.1', 'cisco', 'cisco', 'cisco') as r1:\n    ...:     result = r1.send_show_command('sh clock')\n    ...:     result / 2\n    ...:\n\u041c\u0435\u0442\u043e\u0434 __init__\n\u041c\u0435\u0442\u043e\u0434 __enter__\n\u041c\u0435\u0442\u043e\u0434 __exit__\n---------------------------------------------------------------------------\nTypeError                                 Traceback (most recent call last)\n<ipython-input-18-b9ff1fa74be2> in <module>\n      1 with CiscoSSH('192.168.100.1', 'cisco', 'cisco', 'cisco') as r1:\n      2     result = r1.send_show_command('sh clock')\n----\x3e 3     result / 2\n      4\n\nTypeError: unsupported operand type(s) for /: 'str' and 'int'\n")))}p.isMDXComponent=!0}}]);