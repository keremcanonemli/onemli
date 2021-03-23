(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{253:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(8),l=(t(0),t(280)),i={id:"lists",title:"Lists",sidebar_label:"4.3 Lists",slug:"lists",custom_edit_url:null},s={unversionedId:"python/data_structures/lists",id:"python/data_structures/lists",isDocsHomePage:!1,title:"Lists",description:"List in Python is:",source:"@site/docs/python/data_structures/3_lists.md",slug:"/python/data_structures/lists",permalink:"/docs/python/data_structures/lists",editUrl:null,version:"current",sidebar_label:"4.3 Lists",sidebar:"someSidebar",previous:{title:"Strings",permalink:"/docs/python/data_structures/strings"},next:{title:"Dictionary",permalink:"/docs/python/data_structures/dictionary"}},o=[{value:"<code>join</code>",id:"join",children:[]},{value:"<code>append</code>",id:"append",children:[]},{value:"<code>extend</code>",id:"extend",children:[]},{value:"<code>pop</code>",id:"pop",children:[]},{value:"<code>remove</code>",id:"remove",children:[]},{value:"<code>index</code>",id:"index",children:[]},{value:"<code>insert</code>",id:"insert",children:[]},{value:"<code>sort</code>",id:"sort",children:[]}],c={toc:o};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"List in Python is:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"sequence of elements separated by comma and enclosed in square brackets"),Object(l.b)("li",{parentName:"ul"},"mutable ordered data type")),Object(l.b)("p",null,"Examples of lists:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},"In [1]: list1 = [10,20,30,77]\nIn [2]: list2 = ['one', 'dog', 'seven']\nIn [3]: list3 = [1, 20, 4.0, 'word']\n")),Object(l.b)("p",null,"Creating a list using a literal:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},"In [1]: vlans = [10, 20, 30, 50]\n")),Object(l.b)("p",null,"Note"),Object(l.b)("p",null,"Literal is an expression that creates an object."),Object(l.b)("p",null,"Create a list using ",Object(l.b)("inlineCode",{parentName:"p"},"list")," function:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},"In [2]: list1 = list('router')\n\nIn [3]: print(list1)\n['r', 'o', 'u', 't', 'e', 'r']\n")),Object(l.b)("p",null,"Since a list is an ordered data type just like a string, in lists you can refer to an item by number, make slices:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},"In [4]: list3 = [1, 20, 4.0, 'word']\n\nIn [5]: list3[1]\nOut[5]: 20\n\nIn [6]: list3[1::]\nOut[6]: [20, 4.0, 'word']\n\nIn [7]: list3[-1]\nOut[7]: 'word'\n\nIn [8]: list3[::-1]\nOut[8]: ['word', 4.0, 20, 1]\n")),Object(l.b)("p",null,"You can reverse list by ",Object(l.b)("inlineCode",{parentName:"p"},"reverse")," method:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},"In [10]: vlans = ['10', '15', '20', '30', '100-200']\n\nIn [11]: vlans.reverse()\n\nIn [12]: vlans\nOut[12]: ['100-200', '30', '20', '15', '10']\n")),Object(l.b)("p",null,"Since lists are mutable, list elements can be changed:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},"In [13]: list3\nOut[13]: [1, 20, 4.0, 'word']\n\nIn [14]: list3[0] = 'test'\n\nIn [15]: list3\nOut[15]: ['test', 20, 4.0, 'word']\n")),Object(l.b)("p",null,"You can also create a list of lists. As in a regular list you can refer to items in nested lists:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},"In [16]: interfaces = [['FastEthernet0/0', '15.0.15.1', 'YES', 'manual', 'up', 'up'],\n   ....: ['FastEthernet0/1', '10.0.1.1', 'YES', 'manual', 'up', 'up'],\n   ....: ['FastEthernet0/2', '10.0.2.1', 'YES', 'manual', 'up', 'down']]\n\nIn [17]: interfaces[0][0]\nOut[17]: 'FastEthernet0/0'\n\nIn [18]: interfaces[2][0]\nOut[18]: 'FastEthernet0/2'\n\nIn [19]: interfaces[2][1]\nOut[19]: '10.0.2.1'\n")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"len")," function returns number of items in list:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},"In [1]: items = [1, 2, 3]\n\nIn [2]: len(items)\nOut[2]: 3\n")),Object(l.b)("p",null,"And ",Object(l.b)("inlineCode",{parentName:"p"},"sorted")," function sorts list items in ascending order and returns a new list with sorted items:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},"In [1]: names = ['John', 'Michael', 'Antony']\n\nIn [2]: sorted(names)\nOut[2]: ['Antony', 'John', 'Michael']\n")),Object(l.b)("h1",{id:"list-methods"},"List methods"),Object(l.b)("p",null,"List is a mutable data type, so it is important to note that most list methods change a list in place without returning anything."),Object(l.b)("h2",{id:"join"},Object(l.b)("inlineCode",{parentName:"h2"},"join")),Object(l.b)("p",null,"Method ",Object(l.b)("inlineCode",{parentName:"p"},"join")," collects a list of strings into one string with separator specified before join:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},"In [16]: vlans = ['10', '20', '30']\n\nIn [17]: ','.join(vlans)\nOut[17]: '10,20,30'\n")),Object(l.b)("p",null,"Note"),Object(l.b)("p",null,"Method ",Object(l.b)("inlineCode",{parentName:"p"},"join")," actually string method but since the value must be passed to it as a list, it is covered here."),Object(l.b)("h2",{id:"append"},Object(l.b)("inlineCode",{parentName:"h2"},"append")),Object(l.b)("p",null,"Method ",Object(l.b)("inlineCode",{parentName:"p"},"append")," adds specified item to the end of list:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},"In [18]: vlans = ['10', '20', '30', '100-200']\n\nIn [19]: vlans.append('300')\n\nIn [20]: vlans\nOut[20]: ['10', '20', '30', '100-200', '300']\n")),Object(l.b)("p",null,"Method ",Object(l.b)("inlineCode",{parentName:"p"},"append")," changes list on spot and does not return anything."),Object(l.b)("h2",{id:"extend"},Object(l.b)("inlineCode",{parentName:"h2"},"extend")),Object(l.b)("p",null,"If you want to combine two lists you can use one of two methods: ",Object(l.b)("inlineCode",{parentName:"p"},"extend")," method or addition operation. These methods have an important difference: ",Object(l.b)("inlineCode",{parentName:"p"},"extend")," changes list to which method is applied and addition returns a new list that consists of two."),Object(l.b)("p",null,"Method ",Object(l.b)("inlineCode",{parentName:"p"},"extend"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},"In [21]: vlans = ['10', '20', '30', '100-200']\n\nIn [22]: vlans2 = ['300', '400', '500']\n\nIn [23]: vlans.extend(vlans2)\n\nIn [24]: vlans\nOut[24]: ['10', '20', '30', '100-200', '300', '400', '500']\n")),Object(l.b)("p",null,"Addition operation:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},"In [27]: vlans = ['10', '20', '30', '100-200']\n\nIn [28]: vlans2 = ['300', '400', '500']\n\nIn [29]: vlans + vlans2\nOut[29]: ['10', '20', '30', '100-200', '300', '400', '500']\n")),Object(l.b)("p",null,"Note that when adding lists in IPython the \u2018Out\u2019 line appeared. This means that the result of summation can be assigned to variable:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},"In [30]: result = vlans + vlans2\n\nIn [31]: result\nOut[31]: ['10', '20', '30', '100-200', '300', '400', '500']\n")),Object(l.b)("h2",{id:"pop"},Object(l.b)("inlineCode",{parentName:"h2"},"pop")),Object(l.b)("p",null,"Method ",Object(l.b)("inlineCode",{parentName:"p"},"pop")," removes item that corresponds to specified number. Method returns this item:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},"In [28]: vlans = ['10', '20', '30', '100-200']\n\nIn [29]: vlans.pop(-1)\nOut[29]: '100-200'\n\nIn [30]: vlans\nOut[30]: ['10', '20', '30']\n")),Object(l.b)("p",null,"Without number specified the last item in list is deleted."),Object(l.b)("h2",{id:"remove"},Object(l.b)("inlineCode",{parentName:"h2"},"remove")),Object(l.b)("p",null,"Method ",Object(l.b)("inlineCode",{parentName:"p"},"remove")," removes specified item (",Object(l.b)("inlineCode",{parentName:"p"},"remove")," does not return deleted item):"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},"In [31]: vlans = ['10', '20', '30', '100-200']\n\nIn [32]: vlans.remove('20')\n\nIn [33]: vlans\nOut[33]: ['10', '30', '100-200']\n")),Object(l.b)("p",null,"In ",Object(l.b)("inlineCode",{parentName:"p"},"remove")," you must specify item to be deleted, not its index. If item number is specified, error occurs:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},"In [34]: vlans.remove(-1)\n-------------------------------------------------\nValueError      Traceback (most recent call last)\n<ipython-input-32-f4ee38810cb7> in <module>()\n----\x3e 1 vlans.remove(-1)\n\nValueError: list.remove(x): x not in list\n")),Object(l.b)("h2",{id:"index"},Object(l.b)("inlineCode",{parentName:"h2"},"index")),Object(l.b)("p",null,"Method ",Object(l.b)("inlineCode",{parentName:"p"},"index")," - returns the first index of the passed value:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},"In [35]: vlans = ['10', '20', '30', '100-200']\n\nIn [36]: vlans.index('30')\nOut[36]: 2\n")),Object(l.b)("h2",{id:"insert"},Object(l.b)("inlineCode",{parentName:"h2"},"insert")),Object(l.b)("p",null,"Method ",Object(l.b)("inlineCode",{parentName:"p"},"insert")," allows to insert an item into a specific place in list:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},"In [37]: vlans = ['10', '20', '30', '100-200']\n\nIn [38]: vlans.insert(1, '15')\n\nIn [39]: vlans\nOut[39]: ['10', '15', '20', '30', '100-200']\n")),Object(l.b)("h2",{id:"sort"},Object(l.b)("inlineCode",{parentName:"h2"},"sort")),Object(l.b)("p",null,"Method ",Object(l.b)("inlineCode",{parentName:"p"},"sort")," sorts list in place:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},"In [40]: vlans = [1, 50, 10, 15]\n\nIn [41]: vlans.sort()\n\nIn [42]: vlans\nOut[42]: [1, 10, 15, 50]\n")))}p.isMDXComponent=!0},280:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),p=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},b=function(e){var n=p(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),b=p(t),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||l;return t?r.a.createElement(m,s(s({ref:n},c),{},{components:t})):r.a.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<l;c++)i[c]=t[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);