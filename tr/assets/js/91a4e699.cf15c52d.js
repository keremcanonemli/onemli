(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{201:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(8),a=(n(0),n(281)),s={id:"sorted",title:"Sorted",sidebar_label:"Sorted",slug:"sorted",custom_edit_url:null},i={unversionedId:"python/10_useful_functions/sorted",id:"python/10_useful_functions/sorted",isDocsHomePage:!1,title:"Sorted",description:"Function sorted returns a new sorted list that is obtained from an iterable object that has been passed as an argument. Function also supports additional options that allow you to control sorting.",source:"@site/docs/python/10_useful_functions/3_sorted.md",slug:"/python/10_useful_functions/sorted",permalink:"/tr/docs/python/10_useful_functions/sorted",editUrl:null,version:"current",sidebar_label:"Sorted",sidebar:"someSidebar",previous:{title:"Range",permalink:"/tr/docs/python/10_useful_functions/range"},next:{title:"Enumerate",permalink:"/tr/docs/python/10_useful_functions/enumerate"}},l=[{value:"reverse",id:"reverse",children:[]},{value:"key",id:"key",children:[]}],c={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Function ",Object(a.b)("inlineCode",{parentName:"p"},"sorted")," returns a new sorted list that is obtained from an iterable object that has been passed as an argument. Function also supports additional options that allow you to control sorting."),Object(a.b)("p",null,"The first aspect that is important to pay attention to - ",Object(a.b)("inlineCode",{parentName:"p"},"sorted")," returns a list. If you sort a list of items, a new list is returned:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [1]: list_of_words = ['one', 'two', 'list', '', 'dict']\n\nIn [2]: sorted(list_of_words)\nOut[2]: ['', 'dict', 'list', 'one', 'two']\n")),Object(a.b)("p",null,"When sorting a tuple also a list returns:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [3]: tuple_of_words = ('one', 'two', 'list', '', 'dict')\n\nIn [4]: sorted(tuple_of_words)\nOut[4]: ['', 'dict', 'list', 'one', 'two']\n")),Object(a.b)("p",null,"Sorting set:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [5]: set_of_words = {'one', 'two', 'list', '', 'dict'}\n\nIn [6]: sorted(set_of_words)\nOut[6]: ['', 'dict', 'list', 'one', 'two']\n")),Object(a.b)("p",null,"Sorting string:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [7]: string_to_sort = 'long string'\n\nIn [8]: sorted(string_to_sort)\nOut[8]: [' ', 'g', 'g', 'i', 'l', 'n', 'n', 'o', 'r', 's', 't']\n")),Object(a.b)("p",null,"If you pass a dictionary to ",Object(a.b)("inlineCode",{parentName:"p"},"sorted")," the function will return sorted list of keys:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [9]: dict_for_sort = {\n   ...:         'id': 1,\n   ...:         'name': 'London',\n   ...:         'it_vlan': 320,\n   ...:         'user_vlan': 1010,\n   ...:         'mngmt_vlan': 99,\n   ...:         'to_name': None,\n   ...:         'to_id': None,\n   ...:         'port': 'G1/0/11'\n   ...: }\n\nIn [10]: sorted(dict_for_sort)\nOut[10]:\n['id',\n 'it_vlan',\n 'mngmt_vlan',\n 'name',\n 'port',\n 'to_id',\n 'to_name',\n 'user_vlan']\n")),Object(a.b)("h2",{id:"reverse"},"reverse"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"reverse")," flag allows you to control the sorting order. By default, sorting will be in ascending order of items:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [11]: list_of_words = ['one', 'two', 'list', '', 'dict']\n\nIn [12]: sorted(list_of_words)\nOut[12]: ['', 'dict', 'list', 'one', 'two']\n\nIn [13]: sorted(list_of_words, reverse=True)\nOut[13]: ['two', 'one', 'list', 'dict', '']\n")),Object(a.b)("h2",{id:"key"},"key"),Object(a.b)("p",null,"With ",Object(a.b)("inlineCode",{parentName:"p"},"key")," option you can specify how to perform sorting. The ",Object(a.b)("inlineCode",{parentName:"p"},"key")," parameter expects function by which the comparison should be performed."),Object(a.b)("p",null,"For example you can sort a list of strings by string length:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [14]: list_of_words = ['one', 'two', 'list', '', 'dict']\n\nIn [15]: sorted(list_of_words, key=len)\nOut[15]: ['', 'one', 'two', 'list', 'dict']\n")),Object(a.b)("p",null,"If you want to sort dictionary keys but ignore string register:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [16]: dict_for_sort = {\n    ...:         'id': 1,\n    ...:         'name': 'London',\n    ...:         'IT_VLAN': 320,\n    ...:         'User_VLAN': 1010,\n    ...:         'Mngmt_VLAN': 99,\n    ...:         'to_name': None,\n    ...:         'to_id': None,\n    ...:         'port': 'G1/0/11'\n    ...: }\n\nIn [17]: sorted(dict_for_sort, key=str.lower)\nOut[17]:\n['id',\n 'IT_VLAN',\n 'Mngmt_VLAN',\n 'name',\n 'port',\n 'to_id',\n 'to_name',\n 'User_VLAN']\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"key")," option can accept any functions, not only embedded ones. It is also convenient to use anonymous lambda() function."),Object(a.b)("p",null,"Using ",Object(a.b)("inlineCode",{parentName:"p"},"key")," option you can sort objects by any element. However, this requires either lambda() or special functions from ",Object(a.b)("strong",{parentName:"p"},"operator")," module."),Object(a.b)("p",null,"For example, in order to sort the list of tuples with two items in the second element, you should use this technique:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [18]: from operator import itemgetter\n\nIn [19]: list_of_tuples = [('IT_VLAN', 320),\n    ...:  ('Mngmt_VLAN', 99),\n    ...:  ('User_VLAN', 1010),\n    ...:  ('DB_VLAN', 11)]\n\nIn [20]: sorted(list_of_tuples, key=itemgetter(1))\nOut[20]: [('DB_VLAN', 11), ('Mngmt_VLAN', 99), ('IT_VLAN', 320), ('User_VLAN', 1010)]\n")))}u.isMDXComponent=!0},281:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=o,m=p["".concat(s,".").concat(b)]||p[b]||d[b]||a;return n?r.a.createElement(m,i(i({ref:t},c),{},{components:n})):r.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);