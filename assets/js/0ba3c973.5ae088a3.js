(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{281:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),c=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(t),d=r,m=s["".concat(l,".").concat(d)]||s[d]||b[d]||i;return t?a.a.createElement(m,o(o({ref:n},u),{},{components:t})):a.a.createElement(m,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},79:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return c}));var r=t(3),a=t(8),i=(t(0),t(281)),l={id:"print",title:"Print",sidebar_label:"Print",slug:"print",custom_edit_url:null},o={unversionedId:"python/10_useful_functions/print",id:"python/10_useful_functions/print",isDocsHomePage:!1,title:"Print",description:"Function print has been used many times in book, but its full syntax has not yet been discussed:",source:"@site/docs/python/10_useful_functions/1_print.md",slug:"/python/10_useful_functions/print",permalink:"/docs/python/10_useful_functions/print",editUrl:null,version:"current",sidebar_label:"Print",sidebar:"someSidebar",previous:{title:"Tasks",permalink:"/docs/python/09_functions/tasks"},next:{title:"Range",permalink:"/docs/python/10_useful_functions/range"}},p=[{value:"sep",id:"sep",children:[]},{value:"end",id:"end",children:[]},{value:"file",id:"file",children:[]},{value:"flush",id:"flush",children:[]}],u={toc:p};function c(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Function ",Object(i.b)("inlineCode",{parentName:"p"},"print")," has been used many times in book, but its full syntax has not yet been discussed:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"print(*items, sep=' ', end='\\n', file=sys.stdout, flush=False)\n")),Object(i.b)("p",null,"Function ",Object(i.b)("inlineCode",{parentName:"p"},"print")," outputs all elements by separating them by their ",Object(i.b)("inlineCode",{parentName:"p"},"sep")," value and finishes output with ",Object(i.b)("inlineCode",{parentName:"p"},"end")," value."),Object(i.b)("p",null,"All elements that are passed as arguments are converted into strings:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [4]: def f(a):\n   ...:     return a\n   ...:\n\nIn [5]: print(1, 2, f, range(10))\n1 2 <function f at 0xb4de926c> range(0, 10)\n")),Object(i.b)("p",null,"For functions f and range the result is equivalent to str:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [6]: str(f)\nOut[6]: '<function f at 0xb4de926c>'\n\nIn [7]: str(range(10))\nOut[7]: 'range(0, 10)'\n")),Object(i.b)("h2",{id:"sep"},"sep"),Object(i.b)("p",null,"Parameter ",Object(i.b)("inlineCode",{parentName:"p"},"sep")," controls which separator will be used between elements."),Object(i.b)("p",null,"By default, space is used:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [8]: print(1, 2, 3)\n1 2 3\n")),Object(i.b)("p",null,"You can change ",Object(i.b)("inlineCode",{parentName:"p"},"sep")," value to any other string:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [9]: print(1, 2, 3, sep='|')\n1|2|3\n\nIn [10]: print(1, 2, 3, sep='\\n')\n1\n2\n3\n\nIn [11]: print(1, 2, 3, sep=f\"\\n{'-' * 10}\\n\")\n1\n----------\n2\n----------\n3\n")),Object(i.b)("p",null,"Note"),Object(i.b)("p",null,"Note that all arguments that manage behavior of ",Object(i.b)("inlineCode",{parentName:"p"},"print")," function must be passed on as keyword, not positional."),Object(i.b)("p",null,"In some situations ",Object(i.b)("inlineCode",{parentName:"p"},"print")," function can replace join method:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [12]: items = [1, 2, 3, 4, 5]\n\nIn [13]: print(*items, sep=', ')\n1, 2, 3, 4, 5\n")),Object(i.b)("h2",{id:"end"},"end"),Object(i.b)("p",null,"Parameter ",Object(i.b)("inlineCode",{parentName:"p"},"end")," controls which value will be displayed after all elements are printed. By default, new line character is used:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [19]: print(1, 2, 3)\n1 2 3\n")),Object(i.b)("p",null,"You can change ",Object(i.b)("inlineCode",{parentName:"p"},"end")," value to any other string:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [20]: print(1, 2, 3, end='\\n' + '-' * 10)\n1 2 3\n----------\n")),Object(i.b)("h2",{id:"file"},"file"),Object(i.b)("p",null,"Parameter ",Object(i.b)("inlineCode",{parentName:"p"},"file")," controls where values of ",Object(i.b)("inlineCode",{parentName:"p"},"print")," function are displayed. The default output is sys.stdout."),Object(i.b)("p",null,"Python allows to pass to ",Object(i.b)("inlineCode",{parentName:"p"},"file")," as an argument any object with write(string) method."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [1]: f = open('result.txt', 'w')\n\nIn [2]: for num in range(10):\n   ...:     print('Item {}'.format(num), file=f)\n   ...:\n\nIn [3]: f.close()\n\nIn [4]: cat result.txt\nItem 0\nItem 1\nItem 2\nItem 3\nItem 4\nItem 5\nItem 6\nItem 7\nItem 8\nItem 9\n")),Object(i.b)("h2",{id:"flush"},"flush"),Object(i.b)("p",null,"By default, when writing to a file or print to a standard output stream, the output is buffered. Function ",Object(i.b)("inlineCode",{parentName:"p"},"print")," allows to disable buffering. You can control it in a file."),Object(i.b)("p",null,"Example script that displays a number from 0 to 10 every second (print_nums.py file):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"import time\n\nfor num in range(10):\n    print(num)\n    time.sleep(1)\n")),Object(i.b)("p",null,"Try running a script and make sure the numbers are displayed once per second."),Object(i.b)("p",null,"Now, a similar script but the numbers will appear in one line (print_nums_oneline.py file):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"import time\n\nfor num in range(10):\n    print(num, end=' ')\n    time.sleep(1)\n")),Object(i.b)("p",null,"Try running a function. Numbers does not appear one per second but all appear after 10 seconds."),Object(i.b)("p",null,"This is because when output is displayed on standard output, ",Object(i.b)("inlineCode",{parentName:"p"},"flush")," is performed after new line character."),Object(i.b)("p",null,"In order to make script work properly ",Object(i.b)("inlineCode",{parentName:"p"},"flush")," should be set to True (print_nums_oneline_fixed.py file):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"import time\n\nfor num in range(10):\n    print(num, end=' ', flush=True)\n    time.sleep(1)\n")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://pyneng.readthedocs.io/en/latest/book/10_useful_functions/range.html"},"Next "),Object(i.b)("a",{parentName:"p",href:"https://pyneng.readthedocs.io/en/latest/book/10_useful_functions/index.html"}," Previous")))}c.isMDXComponent=!0}}]);