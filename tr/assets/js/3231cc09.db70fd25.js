(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{127:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(8),o=(t(0),t(281)),c={id:"set",title:"Set",sidebar_label:"Set",slug:"set",custom_edit_url:null},s={unversionedId:"python/data_structures/set",id:"python/data_structures/set",isDocsHomePage:!1,title:"Set",description:"Set is a mutable unordered data type. Set always contains only unique elements. Set in Python is a sequence of elements that are separated by a comma and placed in curly braces.",source:"@site/docs/python/data_structures/6_set.md",slug:"/python/data_structures/set",permalink:"/tr/docs/python/data_structures/set",editUrl:null,version:"current",sidebar_label:"Set",sidebar:"someSidebar",previous:{title:"Tuple",permalink:"/tr/docs/python/data_structures/tuple"},next:{title:"Boolean Values",permalink:"/tr/docs/python/data_structures/boolean_values"}},l=[{value:"<code>add</code>",id:"add",children:[]},{value:"<code>discard</code>",id:"discard",children:[]},{value:"<code>clear</code>",id:"clear",children:[]}],i={toc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Set is a mutable unordered data type. Set always contains only unique elements. Set in Python is a sequence of elements that are separated by a comma and placed in curly braces."),Object(o.b)("p",null,"Set can easily remove repetitive elements:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [1]: vlans = [10, 20, 30, 40, 100, 10]\n\nIn [2]: set(vlans)\nOut[2]: {10, 20, 30, 40, 100}\n\nIn [3]: set1 = set(vlans)\n\nIn [4]: print(set1)\n{40, 100, 10, 20, 30}\n")),Object(o.b)("h1",{id:"set-methods"},"Set methods"),Object(o.b)("h2",{id:"add"},Object(o.b)("inlineCode",{parentName:"h2"},"add")),Object(o.b)("p",null,"Method ",Object(o.b)("inlineCode",{parentName:"p"},"add")," adds an item to set:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [1]: set1 = {10,20,30,40}\n\nIn [2]: set1.add(50)\n\nIn [3]: set1\nOut[3]: {10, 20, 30, 40, 50}\n")),Object(o.b)("h2",{id:"discard"},Object(o.b)("inlineCode",{parentName:"h2"},"discard")),Object(o.b)("p",null,"Method ",Object(o.b)("inlineCode",{parentName:"p"},"discard")," allows deleting elements without showing an error if there is no element in set:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [3]: set1\nOut[3]: {10, 20, 30, 40, 50}\n\nIn [4]: set1.discard(55)\n\nIn [5]: set1\nOut[5]: {10, 20, 30, 40, 50}\n\nIn [6]: set1.discard(50)\n\nIn [7]: set1\nOut[7]: {10, 20, 30, 40}\n")),Object(o.b)("h2",{id:"clear"},Object(o.b)("inlineCode",{parentName:"h2"},"clear")),Object(o.b)("p",null,"Method ",Object(o.b)("inlineCode",{parentName:"p"},"clear")," empties set:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [8]: set1 = {10,20,30,40}\n\nIn [9]: set1.clear()\n\nIn [10]: set1\nOut[10]: set()\n")),Object(o.b)("h1",{id:"operations-with-sets"},"Operations with sets"),Object(o.b)("p",null,"Sets are useful in performing different operations such as finding union of sets, intersection and so on."),Object(o.b)("p",null,"Union of sets can be obtained by ",Object(o.b)("inlineCode",{parentName:"p"},"union")," or operator ",Object(o.b)("inlineCode",{parentName:"p"},"|"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [1]: vlans1 = {10,20,30,50,100}\nIn [2]: vlans2 = {100,101,102,102,200}\n\nIn [3]: vlans1.union(vlans2)\nOut[3]: {10, 20, 30, 50, 100, 101, 102, 200}\n\nIn [4]: vlans1 | vlans2\nOut[4]: {10, 20, 30, 50, 100, 101, 102, 200}\n")),Object(o.b)("p",null,"Intersection of sets can be obtained by ",Object(o.b)("inlineCode",{parentName:"p"},"intersection")," or operator ",Object(o.b)("inlineCode",{parentName:"p"},"&"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [5]: vlans1 = {10,20,30,50,100}\nIn [6]: vlans2 = {100,101,102,102,200}\n\nIn [7]: vlans1.intersection(vlans2)\nOut[7]: {100}\n\nIn [8]: vlans1 & vlans2\nOut[8]: {100}\n")),Object(o.b)("h1",{id:"options-for-set-creation"},"Options for set creation"),Object(o.b)("p",null,"You cannot create an empty set using a literal set (in this case it will not be a set but a dictionary):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [1]: set1 = {}\n\nIn [2]: type(set1)\nOut[2]: dict\n")),Object(o.b)("p",null,"But an empty set can be created in this way:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [3]: set2 = set()\n\nIn [4]: type(set2)\nOut[4]: set\n")),Object(o.b)("p",null,"Set from string:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [5]: set('long long long long string')\nOut[5]: {' ', 'g', 'i', 'l', 'n', 'o', 'r', 's', 't'}\n")),Object(o.b)("p",null,"Set from list:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [6]: set([10, 20, 30, 10, 10, 30])\nOut[6]: {10, 20, 30}\n")))}p.isMDXComponent=!0},281:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return O}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),p=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return r.a.createElement(i.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,O=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return t?r.a.createElement(O,s(s({ref:n},i),{},{components:t})):r.a.createElement(O,s({ref:n},i))}));function O(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var i=2;i<o;i++)c[i]=t[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);