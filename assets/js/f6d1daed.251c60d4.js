(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var o=n(3),a=n(8),r=(n(0),n(121)),i={id:"modules",title:"Modules",sidebar_label:"3.4 Modules",slug:"modules",custom_edit_url:null},l={unversionedId:"python/program_organization/modules",id:"python/program_organization/modules",isDocsHomePage:!1,title:"Modules",description:"This section introduces the concept of modules and working with functions that span",source:"@site/docs/python/program_organization/04_Modules.md",slug:"/python/program_organization/modules",permalink:"/docs/python/program_organization/modules",editUrl:null,version:"current",sidebar_label:"3.4 Modules",sidebar:"someSidebar",previous:{title:"Error Checking",permalink:"/docs/python/program_organization/error_checking"},next:{title:"Main Module",permalink:"/docs/python/program_organization/main_module"}},s=[{value:"Modules and import",id:"modules-and-import",children:[]},{value:"Namespaces",id:"namespaces",children:[]},{value:"Global Definitions",id:"global-definitions",children:[]},{value:"Modules as Environments",id:"modules-as-environments",children:[]},{value:"Module Execution",id:"module-execution",children:[]},{value:"<code>import as</code> statement",id:"import-as-statement",children:[]},{value:"<code>from</code> module import",id:"from-module-import",children:[]},{value:"Comments on importing",id:"comments-on-importing",children:[]},{value:"Module Loading",id:"module-loading",children:[]},{value:"Locating Modules",id:"locating-modules",children:[]},{value:"Module Search Path",id:"module-search-path",children:[]},{value:"Exercises",id:"exercises",children:[{value:"Exercise 3.11: Module imports",id:"exercise-311-module-imports",children:[]},{value:"Exercise 3.12: Using your library module",id:"exercise-312-using-your-library-module",children:[]},{value:"Exercise 3.14: Using more library imports",id:"exercise-314-using-more-library-imports",children:[]},{value:"Commentary",id:"commentary",children:[]}]}],p={toc:s};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This section introduces the concept of modules and working with functions that span\nmultiple files."),Object(r.b)("h3",{id:"modules-and-import"},"Modules and import"),Object(r.b)("p",null,"Any Python source file is a module."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"# foo.py\ndef grok(a):\n    ...\ndef spam(b):\n    ...\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"import")," statement loads and ",Object(r.b)("em",{parentName:"p"},"executes")," a module."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"# program.py\nimport foo\n\na = foo.grok(2)\nb = foo.spam('Hello')\n...\n")),Object(r.b)("h3",{id:"namespaces"},"Namespaces"),Object(r.b)("p",null,"A module is a collection of named values and is sometimes said to be a\n",Object(r.b)("em",{parentName:"p"},"namespace"),".  The names are all of the global variables and functions\ndefined in the source file.  After importing, the module name is used\nas a prefix. Hence the ",Object(r.b)("em",{parentName:"p"},"namespace"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"import foo\n\na = foo.grok(2)\nb = foo.spam('Hello')\n...\n")),Object(r.b)("p",null,"The module name is directly tied to the file name (foo -> foo.py)."),Object(r.b)("h3",{id:"global-definitions"},"Global Definitions"),Object(r.b)("p",null,"Everything defined in the ",Object(r.b)("em",{parentName:"p"},"global")," scope is what populates the module\nnamespace. Consider two modules\nthat define the same variable ",Object(r.b)("inlineCode",{parentName:"p"},"x"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"# foo.py\nx = 42\ndef grok(a):\n    ...\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"# bar.py\nx = 37\ndef spam(a):\n    ...\n")),Object(r.b)("p",null,"In this case, the ",Object(r.b)("inlineCode",{parentName:"p"},"x")," definitions refer to different variables.  One\nis ",Object(r.b)("inlineCode",{parentName:"p"},"foo.x")," and the other is ",Object(r.b)("inlineCode",{parentName:"p"},"bar.x"),".  Different modules can use the\nsame names and those names won't conflict with each other."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Modules are isolated.")),Object(r.b)("h3",{id:"modules-as-environments"},"Modules as Environments"),Object(r.b)("p",null,"Modules form an enclosing environment for all of the code defined inside."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"# foo.py\nx = 42\n\ndef grok(a):\n    print(x)\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Global")," variables are always bound to the enclosing module (same file).\nEach source file is its own little universe."),Object(r.b)("h3",{id:"module-execution"},"Module Execution"),Object(r.b)("p",null,"When a module is imported, ",Object(r.b)("em",{parentName:"p"},"all of the statements in the module\nexecute")," one after another until the end of the file is reached.  The\ncontents of the module namespace are all of the ",Object(r.b)("em",{parentName:"p"},"global")," names that\nare still defined at the end of the execution process.  If there are\nscripting statements that carry out tasks in the global scope\n(printing, creating files, etc.) you will see them run on import."),Object(r.b)("h3",{id:"import-as-statement"},Object(r.b)("inlineCode",{parentName:"h3"},"import as")," statement"),Object(r.b)("p",null,"You can change the name of a module as you import it:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"import math as m\ndef rectangular(r, theta):\n    x = r * m.cos(theta)\n    y = r * m.sin(theta)\n    return x, y\n")),Object(r.b)("p",null,"It works the same as a normal import. It just renames the module in that one file."),Object(r.b)("h3",{id:"from-module-import"},Object(r.b)("inlineCode",{parentName:"h3"},"from")," module import"),Object(r.b)("p",null,"This picks selected symbols out of a module and makes them available locally."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"from math import sin, cos\n\ndef rectangular(r, theta):\n    x = r * cos(theta)\n    y = r * sin(theta)\n    return x, y\n")),Object(r.b)("p",null,"This allows parts of a module to be used without having to type the module prefix.\nIt's useful for frequently used names."),Object(r.b)("h3",{id:"comments-on-importing"},"Comments on importing"),Object(r.b)("p",null,"Variations on import do ",Object(r.b)("em",{parentName:"p"},"not")," change the way that modules work."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"import math\n# vs\nimport math as m\n# vs\nfrom math import cos, sin\n...\n")),Object(r.b)("p",null,"Specifically, ",Object(r.b)("inlineCode",{parentName:"p"},"import")," always executes the ",Object(r.b)("em",{parentName:"p"},"entire")," file and modules\nare still isolated environments."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"import module as")," statement is only changing the name locally.\nThe ",Object(r.b)("inlineCode",{parentName:"p"},"from math import cos, sin")," statement still loads the entire\nmath module behind the scenes. It's merely copying the ",Object(r.b)("inlineCode",{parentName:"p"},"cos")," and ",Object(r.b)("inlineCode",{parentName:"p"},"sin"),"\nnames from the module into the local space after it's done."),Object(r.b)("h3",{id:"module-loading"},"Module Loading"),Object(r.b)("p",null,"Each module loads and executes only ",Object(r.b)("em",{parentName:"p"},"once"),".\n",Object(r.b)("em",{parentName:"p"},"Note: Repeated imports just return a reference to the previously loaded module.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"sys.modules")," is a dict of all loaded modules."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},">>> import sys\n>>> sys.modules.keys()\n['copy_reg', '__main__', 'site', '__builtin__', 'encodings', 'encodings.encodings', 'posixpath', ...]\n>>>\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Caution:")," A common confusion arises if you repeat an ",Object(r.b)("inlineCode",{parentName:"p"},"import")," statement after\nchanging the source code for a module.  Because of the module cache ",Object(r.b)("inlineCode",{parentName:"p"},"sys.modules"),",\nrepeated imports always return the previously loaded module--even if a change\nwas made.  The safest way to load modified code into Python is to quit and restart\nthe interpreter."),Object(r.b)("h3",{id:"locating-modules"},"Locating Modules"),Object(r.b)("p",null,"Python consults a path list (sys.path) when looking for modules."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},">>> import sys\n>>> sys.path\n[\n  '',\n  '/usr/local/lib/python36/python36.zip',\n  '/usr/local/lib/python36',\n  ...\n]\n")),Object(r.b)("p",null,"The current working directory is usually first."),Object(r.b)("h3",{id:"module-search-path"},"Module Search Path"),Object(r.b)("p",null,"As noted, ",Object(r.b)("inlineCode",{parentName:"p"},"sys.path")," contains the search paths.\nYou can manually adjust if you need to."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"import sys\nsys.path.append('/project/foo/pyfiles')\n")),Object(r.b)("p",null,"Paths can also be added via environment variables."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"% env PYTHONPATH=/project/foo/pyfiles python3\nPython 3.6.0 (default, Feb 3 2017, 05:53:21)\n[GCC 4.2.1 Compatible Apple LLVM 8.0.0 (clang-800.0.38)]\n>>> import sys\n>>> sys.path\n['','/project/foo/pyfiles', ...]\n")),Object(r.b)("p",null,"As a general rule, it should not be necessary to manually adjust\nthe module search path.  However, it sometimes arises if you're\ntrying to import Python code that's in an unusual location or\nnot readily accessible from the current working directory."),Object(r.b)("h2",{id:"exercises"},"Exercises"),Object(r.b)("p",null,"For this exercise involving modules, it is critically important to\nmake sure you are running Python in a proper environment.  Modules\noften present new programmers with problems related to the current working\ndirectory or with Python's path settings.  For this course, it is\nassumed that you're writing all of your code in the ",Object(r.b)("inlineCode",{parentName:"p"},"Work/")," directory.\nFor best results, you should make sure you're also in that directory\nwhen you launch the interpreter.  If not, you need to make sure\n",Object(r.b)("inlineCode",{parentName:"p"},"practical-python/Work")," is added to ",Object(r.b)("inlineCode",{parentName:"p"},"sys.path"),"."),Object(r.b)("h3",{id:"exercise-311-module-imports"},"Exercise 3.11: Module imports"),Object(r.b)("p",null,"In section 3, we created a general purpose function ",Object(r.b)("inlineCode",{parentName:"p"},"parse_csv()")," for\nparsing the contents of CSV datafiles."),Object(r.b)("p",null,"Now, we\u2019re going to see how to use that function in other programs.\nFirst, start in a new shell window.  Navigate to the folder where you\nhave all your files. We are going to import them."),Object(r.b)("p",null,"Start Python interactive mode."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},'bash % python3\nPython 3.6.1 (v3.6.1:69c0db5050, Mar 21 2017, 01:21:04)\n[GCC 4.2.1 (Apple Inc. build 5666) (dot 3)] on darwin\nType "help", "copyright", "credits" or "license" for more information.\n>>>\n')),Object(r.b)("p",null,"Once you\u2019ve done that, try importing some of the programs you\npreviously wrote.  You should see their output exactly as before.\nJust to emphasize, importing a module runs its code."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},">>> import bounce\n... watch output ...\n>>> import mortgage\n... watch output ...\n>>> import report\n... watch output ...\n>>>\n")),Object(r.b)("p",null,"If none of this works, you\u2019re probably running Python in the wrong directory.\nNow, try importing your ",Object(r.b)("inlineCode",{parentName:"p"},"fileparse")," module and getting some help on it."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},">>> import fileparse\n>>> help(fileparse)\n... look at the output ...\n>>> dir(fileparse)\n... look at the output ...\n>>>\n")),Object(r.b)("p",null,"Try using the module to read some data:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},">>> portfolio = fileparse.parse_csv('Data/portfolio.csv',select=['name','shares','price'], types=[str,int,float])\n>>> portfolio\n... look at the output ...\n>>> pricelist = fileparse.parse_csv('Data/prices.csv',types=[str,float], has_headers=False)\n>>> pricelist\n... look at the output ...\n>>> prices = dict(pricelist)\n>>> prices\n... look at the output ...\n>>> prices['IBM']\n106.11\n>>>\n")),Object(r.b)("p",null,"Try importing a function so that you don\u2019t need to include the module name:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},">>> from fileparse import parse_csv\n>>> portfolio = parse_csv('Data/portfolio.csv', select=['name','shares','price'], types=[str,int,float])\n>>> portfolio\n... look at the output ...\n>>>\n")),Object(r.b)("h3",{id:"exercise-312-using-your-library-module"},"Exercise 3.12: Using your library module"),Object(r.b)("p",null,"In section 2, you wrote a program ",Object(r.b)("inlineCode",{parentName:"p"},"report.py")," that produced a stock report like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"      Name     Shares      Price     Change\n---------- ---------- ---------- ----------\n        AA        100       9.22     -22.98\n       IBM         50     106.28      15.18\n       CAT        150      35.46     -47.98\n      MSFT        200      20.89     -30.34\n        GE         95      13.48     -26.89\n      MSFT         50      20.89     -44.21\n       IBM        100     106.28      35.84\n")),Object(r.b)("p",null,"Take that program and modify it so that all of the input file\nprocessing is done using functions in your ",Object(r.b)("inlineCode",{parentName:"p"},"fileparse")," module.  To do\nthat, import ",Object(r.b)("inlineCode",{parentName:"p"},"fileparse")," as a module and change the ",Object(r.b)("inlineCode",{parentName:"p"},"read_portfolio()"),"\nand ",Object(r.b)("inlineCode",{parentName:"p"},"read_prices()")," functions to use the ",Object(r.b)("inlineCode",{parentName:"p"},"parse_csv()")," function."),Object(r.b)("p",null,"Use the interactive example at the start of this exercise as a guide.\nAfterwards, you should get exactly the same output as before."),Object(r.b)("h3",{id:"exercise-314-using-more-library-imports"},"Exercise 3.14: Using more library imports"),Object(r.b)("p",null,"In section 1, you wrote a program ",Object(r.b)("inlineCode",{parentName:"p"},"pcost.py")," that read a portfolio and computed its cost."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},">>> import pcost\n>>> pcost.portfolio_cost('Data/portfolio.csv')\n44671.15\n>>>\n")),Object(r.b)("p",null,"Modify the ",Object(r.b)("inlineCode",{parentName:"p"},"pcost.py")," file so that it uses the ",Object(r.b)("inlineCode",{parentName:"p"},"report.read_portfolio()")," function."),Object(r.b)("h3",{id:"commentary"},"Commentary"),Object(r.b)("p",null,"When you are done with this exercise, you should have three\nprograms. ",Object(r.b)("inlineCode",{parentName:"p"},"fileparse.py")," which contains a general purpose\n",Object(r.b)("inlineCode",{parentName:"p"},"parse_csv()")," function.  ",Object(r.b)("inlineCode",{parentName:"p"},"report.py")," which produces a nice report, but\nalso contains ",Object(r.b)("inlineCode",{parentName:"p"},"read_portfolio()")," and ",Object(r.b)("inlineCode",{parentName:"p"},"read_prices()")," functions.  And\nfinally, ",Object(r.b)("inlineCode",{parentName:"p"},"pcost.py")," which computes the portfolio cost, but makes use\nof the ",Object(r.b)("inlineCode",{parentName:"p"},"read_portfolio()")," function written for the ",Object(r.b)("inlineCode",{parentName:"p"},"report.py")," program."))}c.isMDXComponent=!0},121:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),c=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||r;return n?a.a.createElement(b,l(l({ref:t},p),{},{components:n})):a.a.createElement(b,l({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);