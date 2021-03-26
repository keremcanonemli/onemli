(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{124:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(8),o=(t(0),t(280)),i={id:"python_interpreter_ipython",title:"Python Interpreter. Ipython",sidebar_label:"3.2 Python Interpreter. Ipython",slug:"python_interpreter._ipython",custom_edit_url:null},c={unversionedId:"python/start/python_interpreter_ipython",id:"python/start/python_interpreter_ipython",isDocsHomePage:!1,title:"Python Interpreter. Ipython",description:"Interpreter makes it possible to receive an instant response to executed actions. You can say that interpreter works as CLI (Command Line Interface) of network devices more complex objects (such as cycles or functions) are executed only after twice pressing Enter.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/python/start/2_python_interpreter.md",slug:"/python/start/python_interpreter._ipython",permalink:"/tr/docs/python/start/python_interpreter._ipython",editUrl:null,version:"current",sidebar_label:"3.2 Python Interpreter. Ipython",sidebar:"someSidebar",previous:{title:"Python Syntax",permalink:"/tr/docs/python/start/python_syntax"},next:{title:"Ipython Special Commands",permalink:"/tr/docs/python/start/ipython_special_commands"}},l=[{value:"help()",id:"help",children:[]},{value:"<code>print</code>",id:"print",children:[]},{value:"dir()",id:"dir",children:[]}],s={toc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Interpreter makes it possible to receive an instant response to executed actions. You can say that interpreter works as CLI (Command Line Interface) of network devices: each command will be executed immediately after pressing Enter. However, there is an exception: more complex objects (such as cycles or functions) are executed only after twice pressing Enter."),Object(o.b)("p",null,"In previous section, a standard interpreter was called to verify Python installation. There is also an improved interpreter ",Object(o.b)("a",{parentName:"p",href:"http://ipython.readthedocs.io/en/stable/index.html"},"IPython"),". IPython allows much more than standard interpreter called by \u201cpython\u201d command. Some examples (IPython features are much broader):"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Autocomplete Tab commands or hints if there are more than one command version"),Object(o.b)("li",{parentName:"ul"},"More structured and understandable output of commands"),Object(o.b)("li",{parentName:"ul"},"Automatic indentation in loops and other objects"),Object(o.b)("li",{parentName:"ul"},"You can either walk through the command execution history or watch it with %history \u2018magic\u2019 command")),Object(o.b)("p",null,"You can install IPython using pip (installation will be done in a virtual environment if configured):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"pip install ipython\n")),Object(o.b)("p",null,"After that, you can move to IPython as follows:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"$ ipython\nPython 3.7.3 (default, May 13 2019, 15:44:23)\nType 'copyright', 'credits' or 'license' for more information\nIPython 7.5.0 -- An enhanced Interactive Python. Type '?' for help.\n\nIn [1]:\n")),Object(o.b)("p",null,"Command ",Object(o.b)("inlineCode",{parentName:"p"},"quit")," is used to exit. The following is how IPython will be used."),Object(o.b)("p",null,"To get acquainted with interpreter, you can use it as a calculator:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [1]: 1 + 2\nOut[1]: 3\n\nIn [2]: 22*45\nOut[2]: 990\n\nIn [3]: 2**3\nOut[3]: 8\n")),Object(o.b)("p",null,"In IPython, input and output are marked:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"In - user input data"),Object(o.b)("li",{parentName:"ul"},"Out - result that command returns (if any)"),Object(o.b)("li",{parentName:"ul"},"Numbers after In or Out are sequential numbers of executed commands in current IPython session")),Object(o.b)("p",null,"Example of string output by function ",Object(o.b)("inlineCode",{parentName:"p"},"print"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [4]: print('Hello!')\nHello!\n")),Object(o.b)("p",null,"When a loop is created in interpreter, for example, invitation changes to ellipsis inside loop. To complete loop and exit this shortcut, double press Enter:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [5]: for i in range(5):\n   ...:     print(i)\n   ...:\n0\n1\n2\n3\n4\n")),Object(o.b)("h2",{id:"help"},"help()"),Object(o.b)("p",null,"In IPython you can view help for an arbitrary object, function or method using ",Object(o.b)("inlineCode",{parentName:"p"},"help"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [1]: help(str)\nHelp on class str in module builtins:\n\nclass str(object)\n |  str(object='') -> str\n |  str(bytes_or_buffer[, encoding[, errors]]) -> str\n |\n |  Create a new string object from given object. If encoding or\n |  errors is specified, then object must expose a data buffer\n |  that will be decoded using given encoding and error handler.\n...\n\nIn [2]: help(str.strip)\nHelp on method_descriptor:\n\nstrip(...)\n    S.strip([chars]) -> str\n\n    Return a copy of string S with leading and trailing\n    whitespace removed.\n    If chars is given and not None, remove characters in chars instead.\n")),Object(o.b)("p",null,"The second option is:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [3]: ?str\nInit signature: str(self, /, *args, **kwargs)\nDocstring:\nstr(object='') -> str\nstr(bytes_or_buffer[, encoding[, errors]]) -> str\n\nCreate a new string object from given object. If encoding or\nerrors is specified, then object must expose a data buffer\nthat will be decoded using given encoding and error handler.\nOtherwise, returns the result of object.__str__() (if defined)\nor repr(object).\nencoding defaults to sys.getdefaultencoding().\nerrors defaults to 'strict'.\nType:           type\n\nIn [4]: ?str.strip\nDocstring:\nS.strip([chars]) -> str\n\nReturn a copy of string S with leading and trailing\nwhitespace removed.\nIf chars is given and not None, remove characters in chars instead.\nType:      method_descriptor\n")),Object(o.b)("h2",{id:"print"},Object(o.b)("inlineCode",{parentName:"h2"},"print")),Object(o.b)("p",null,"Function ",Object(o.b)("inlineCode",{parentName:"p"},"print")," displays information on a standard output (current terminal screen). If you want to get a string, you should place it in quotes(double or single). If you want to get, for example, a computation result or just a number, quotes are not needed:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [6]: print('Hello!')\nHello!\n\nIn [7]: print(5*5)\n25\n")),Object(o.b)("p",null,"If you want to get several values in a row through a space, you have to enumerate them through a comma:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [8]: print(1*5, 2*5, 3*5, 4*5)\n5 10 15 20\n\nIn [9]: print('one', 'two', 'three')\none two three\n")),Object(o.b)("p",null,"By default, at the end of each expression passed to ",Object(o.b)("inlineCode",{parentName:"p"},"print"),", there will be a new line character. If it is necessary that after the output of each expression there would be no new line, an additional \u201cend\u201d argument should be specified as the last expression in ",Object(o.b)("inlineCode",{parentName:"p"},"print"),"."),Object(o.b)("p",null,"See also"),Object(o.b)("p",null,"Additional parameters of print function ",Object(o.b)("a",{parentName:"p",href:"https://pyneng.readthedocs.io/en/latest/book/10_useful_functions/print.html#print"},"print")),Object(o.b)("h2",{id:"dir"},"dir()"),Object(o.b)("p",null,"Function ",Object(o.b)("inlineCode",{parentName:"p"},"dir")," can be used to see what attributes (variables tied to object) and methods (functions tied to object) are available."),Object(o.b)("p",null,"For example, for number the output will be (pay attention on various methods that allow arithmetic operations):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [10]: dir(5)\nOut[10]:\n['__abs__',\n '__add__',\n '__and__',\n ...\n 'bit_length',\n 'conjugate',\n 'denominator',\n 'imag',\n 'numerator',\n 'real']\n")),Object(o.b)("p",null,"The same for string:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [11]: dir('hello')\nOut[11]:\n['__add__',\n '__class__',\n '__contains__',\n ...\n 'startswith',\n 'strip',\n 'swapcase',\n 'title',\n 'translate',\n 'upper',\n 'zfill']\n")),Object(o.b)("p",null,"If you call ",Object(o.b)("inlineCode",{parentName:"p"},"dir")," with no value, it shows existing methods, attributes, and variables defined in current session of interpreter:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [12]: dir()\nOut[12]:\n['__builtin__',\n '__builtins__',\n '__doc__',\n '__name__',\n '_dh',\n ...\n '_oh',\n '_sh',\n 'exit',\n 'get_ipython',\n 'i',\n 'quit']\n")),Object(o.b)("p",null,"For example, after creating variable a and test():"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [13]: a = 'hello'\n\nIn [14]: def test():\n   ....:     print('test')\n   ....:\n\nIn [15]: dir()\nOut[15]:\n ...\n 'a',\n 'exit',\n 'get_ipython',\n 'i',\n 'quit',\n 'test']\n")))}p.isMDXComponent=!0},280:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return h}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,h=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return t?a.a.createElement(h,c(c({ref:n},s),{},{components:t})):a.a.createElement(h,c({ref:n},s))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);