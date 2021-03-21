(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{121:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return h}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,h=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return t?o.a.createElement(h,c(c({ref:n},s),{},{components:t})):o.a.createElement(h,c({ref:n},s))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},92:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(8),a=(t(0),t(121)),i={id:"functions",title:"Functions",sidebar_label:"1.7 Functions",slug:"functions",custom_edit_url:null},c={unversionedId:"python/introduction/functions",id:"python/introduction/functions",isDocsHomePage:!1,title:"Functions",description:"\u200b",source:"@site/docs/python/introduction/07_Functions.md",slug:"/python/introduction/functions",permalink:"/docs/python/introduction/functions",editUrl:null,version:"current",sidebar_label:"1.7 Functions",sidebar:"someSidebar",previous:{title:"File Management",permalink:"/docs/python/introduction/file_management"},next:{title:"Datatypes",permalink:"/docs/python/working_with_data/datatypes"}},l=[{value:"Custom Functions",id:"custom-functions",children:[]},{value:"Library Functions",id:"library-functions",children:[]},{value:"Errors and exceptions",id:"errors-and-exceptions",children:[]},{value:"Catching and Handling Exceptions",id:"catching-and-handling-exceptions",children:[]},{value:"Raising Exceptions",id:"raising-exceptions",children:[]},{value:"Exercises",id:"exercises",children:[{value:"Exercise 1.29: Defining a function",id:"exercise-129-defining-a-function",children:[]},{value:"Exercise 1.30: Turning a script into a function",id:"exercise-130-turning-a-script-into-a-function",children:[]},{value:"Exercise 1.31: Error handling",id:"exercise-131-error-handling",children:[]},{value:"Exercise 1.32: Using a library function",id:"exercise-132-using-a-library-function",children:[]},{value:"Exercise 1.33: Reading from the command line",id:"exercise-133-reading-from-the-command-line",children:[]}]}],s={toc:l};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u200b    "),Object(a.b)("p",null,"As your programs start to get larger, you'll want to get organized.  This section\nbriefly introduces functions and library modules.  Error handling with exceptions is also introduced."),Object(a.b)("h3",{id:"custom-functions"},"Custom Functions"),Object(a.b)("p",null,"Use functions for code you want to reuse. Here is a function definition:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"def sumcount(n):\n    '''\n    Returns the sum of the first n integers\n    '''\n    total = 0\n    while n > 0:\n        total += n\n        n -= 1\n    return total\n")),Object(a.b)("p",null,"To call a function."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"a = sumcount(100)\n")),Object(a.b)("p",null,"A function is a series of statements that perform some task and return a result.\nThe ",Object(a.b)("inlineCode",{parentName:"p"},"return")," keyword is needed to explicitly specify the return value of the function."),Object(a.b)("h3",{id:"library-functions"},"Library Functions"),Object(a.b)("p",null,"Python comes with a large standard library.\nLibrary modules are accessed using ",Object(a.b)("inlineCode",{parentName:"p"},"import"),".\nFor example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"import math\nx = math.sqrt(10)\n\nimport urllib.request\nu = urllib.request.urlopen('http://www.python.org/')\ndata = u.read()\n")),Object(a.b)("p",null,"We will cover libraries and modules in more detail later."),Object(a.b)("h3",{id:"errors-and-exceptions"},"Errors and exceptions"),Object(a.b)("p",null,"Functions report errors as exceptions.  An exception causes a function to abort and may\ncause your entire program to stop if unhandled."),Object(a.b)("p",null,"Try this in your python REPL."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},">>> int('N/A')\nTraceback (most recent call last):\nFile \"<stdin>\", line 1, in <module>\nValueError: invalid literal for int() with base 10: 'N/A'\n>>>\n")),Object(a.b)("p",null,"For debugging purposes, the message describes what happened, where the error occurred,\nand a traceback showing the other function calls that led to the failure."),Object(a.b)("h3",{id:"catching-and-handling-exceptions"},"Catching and Handling Exceptions"),Object(a.b)("p",null,"Exceptions can be caught and handled."),Object(a.b)("p",null,"To catch, use the ",Object(a.b)("inlineCode",{parentName:"p"},"try - except")," statement."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'for line in f:\n    fields = line.split()\n    try:\n        shares = int(fields[1])\n    except ValueError:\n        print("Couldn\'t parse", line)\n    ...\n')),Object(a.b)("p",null,"The name ",Object(a.b)("inlineCode",{parentName:"p"},"ValueError")," must match the kind of error you are trying to catch."),Object(a.b)("p",null,"It is often difficult to know exactly what kinds of errors might occur\nin advance depending on the operation being performed.  For better or\nfor worse, exception handling often gets added ",Object(a.b)("em",{parentName:"p"},"after"),' a program has\nunexpectedly crashed (i.e., "oh, we forgot to catch that error. We\nshould handle that!").'),Object(a.b)("h3",{id:"raising-exceptions"},"Raising Exceptions"),Object(a.b)("p",null,"To raise an exception, use the ",Object(a.b)("inlineCode",{parentName:"p"},"raise")," statement."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"raise RuntimeError('What a kerfuffle')\n")),Object(a.b)("p",null,"This will cause the program to abort with an exception traceback. Unless caught by a ",Object(a.b)("inlineCode",{parentName:"p"},"try-except")," block."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'% python3 foo.py\nTraceback (most recent call last):\n  File "foo.py", line 21, in <module>\n    raise RuntimeError("What a kerfuffle")\nRuntimeError: What a kerfuffle\n')),Object(a.b)("h2",{id:"exercises"},"Exercises"),Object(a.b)("h3",{id:"exercise-129-defining-a-function"},"Exercise 1.29: Defining a function"),Object(a.b)("p",null,"Try defining a simple function:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},">>> def greeting(name):\n        'Issues a greeting'\n        print('Hello', name)\n\n>>> greeting('Guido')\nHello Guido\n>>> greeting('Paula')\nHello Paula\n>>>\n")),Object(a.b)("p",null,"If the first statement of a function is a string, it serves as documentation.\nTry typing a command such as ",Object(a.b)("inlineCode",{parentName:"p"},"help(greeting)")," to see it displayed."),Object(a.b)("h3",{id:"exercise-130-turning-a-script-into-a-function"},"Exercise 1.30: Turning a script into a function"),Object(a.b)("p",null,"Take the code you wrote for the ",Object(a.b)("inlineCode",{parentName:"p"},"pcost.py")," program in ",Object(a.b)("a",{parentName:"p",href:"/docs/python/introduction/file_management"},"Exercise 1.27"),"\nand turn it into a function ",Object(a.b)("inlineCode",{parentName:"p"},"portfolio_cost(filename)"),".  This\nfunction takes a filename as input, reads the portfolio data in that\nfile, and returns the total cost of the portfolio as a float."),Object(a.b)("p",null,"To use your function, change your program so that it looks something\nlike this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"def portfolio_cost(filename):\n    ...\n    # Your code here\n    ...\n\ncost = portfolio_cost('Data/portfolio.csv')\nprint('Total cost:', cost)\n")),Object(a.b)("p",null,"When you run your program, you should see the same output as before.\nAfter you\u2019ve run your program, you can also call your function\ninteractively by typing this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"bash $ python3 -i pcost.py\n")),Object(a.b)("p",null,"This will allow you to call your function from the interactive mode."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},">>> portfolio_cost('Data/portfolio.csv')\n44671.15\n>>>\n")),Object(a.b)("p",null,"Being able to experiment with your code interactively is useful for\ntesting and debugging."),Object(a.b)("h3",{id:"exercise-131-error-handling"},"Exercise 1.31: Error handling"),Object(a.b)("p",null,"What happens if you try your function on a file with some missing fields?"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},">>> portfolio_cost('Data/missing.csv')\nTraceback (most recent call last):\n    File \"<stdin>\", line 1, in <module>\n    File \"pcost.py\", line 11, in portfolio_cost\n    nshares    = int(fields[1])\nValueError: invalid literal for int() with base 10: ''\n>>>\n")),Object(a.b)("p",null,"At this point, you\u2019re faced with a decision. To make the program work\nyou can either sanitize the original input file by eliminating bad\nlines or you can modify your code to handle the bad lines in some\nmanner."),Object(a.b)("p",null,"Modify the ",Object(a.b)("inlineCode",{parentName:"p"},"pcost.py")," program to catch the exception, print a warning\nmessage, and continue processing the rest of the file."),Object(a.b)("h3",{id:"exercise-132-using-a-library-function"},"Exercise 1.32: Using a library function"),Object(a.b)("p",null,"Python comes with a large standard library of useful functions.  One\nlibrary that might be useful here is the ",Object(a.b)("inlineCode",{parentName:"p"},"csv")," module. You should use\nit whenever you have to work with CSV data files.  Here is an example\nof how it works:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},">>> import csv\n>>> f = open('Data/portfolio.csv')\n>>> rows = csv.reader(f)\n>>> headers = next(rows)\n>>> headers\n['name', 'shares', 'price']\n>>> for row in rows:\n        print(row)\n\n['AA', '100', '32.20']\n['IBM', '50', '91.10']\n['CAT', '150', '83.44']\n['MSFT', '200', '51.23']\n['GE', '95', '40.37']\n['MSFT', '50', '65.10']\n['IBM', '100', '70.44']\n>>> f.close()\n>>>\n")),Object(a.b)("p",null,"One nice thing about the ",Object(a.b)("inlineCode",{parentName:"p"},"csv")," module is that it deals with a variety\nof low-level details such as quoting and proper comma splitting.  In\nthe above output, you\u2019ll notice that it has stripped the double-quotes\naway from the names in the first column."),Object(a.b)("p",null,"Modify your ",Object(a.b)("inlineCode",{parentName:"p"},"pcost.py")," program so that it uses the ",Object(a.b)("inlineCode",{parentName:"p"},"csv")," module for\nparsing and try running earlier examples."),Object(a.b)("h3",{id:"exercise-133-reading-from-the-command-line"},"Exercise 1.33: Reading from the command line"),Object(a.b)("p",null,"In the ",Object(a.b)("inlineCode",{parentName:"p"},"pcost.py")," program, the name of the input file has been hardwired into the code:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"# pcost.py\n\ndef portfolio_cost(filename):\n    ...\n    # Your code here\n    ...\n\ncost = portfolio_cost('Data/portfolio.csv')\nprint('Total cost:', cost)\n")),Object(a.b)("p",null,"That\u2019s fine for learning and testing, but in a real program you\nprobably wouldn\u2019t do that."),Object(a.b)("p",null,"Instead, you might pass the name of the file in as an argument to a\nscript. Try changing the bottom part of the program as follows:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"# pcost.py\nimport sys\n\ndef portfolio_cost(filename):\n    ...\n    # Your code here\n    ...\n\nif len(sys.argv) == 2:\n    filename = sys.argv[1]\nelse:\n    filename = 'Data/portfolio.csv'\n\ncost = portfolio_cost(filename)\nprint('Total cost:', cost)\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"sys.argv")," is a list that contains passed arguments on the command line (if any)."),Object(a.b)("p",null,"To run your program, you\u2019ll need to run Python from the\nterminal."),Object(a.b)("p",null,"For example, from bash on Unix:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"bash % python3 pcost.py Data/portfolio.csv\nTotal cost: 44671.15\nbash %\n")))}u.isMDXComponent=!0}}]);