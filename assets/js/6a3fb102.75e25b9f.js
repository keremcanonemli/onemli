(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{171:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(3),i=t(8),o=(t(0),t(281)),a={id:"working_with_try_except_else_finally",title:"Working With Try Except Else Finally",sidebar_label:"Working With Try Except Else Finally",slug:"working_with_try_except_else_finally",custom_edit_url:null},c={unversionedId:"python/06_control_structures/working_with_try_except_else_finally",id:"python/06_control_structures/working_with_try_except_else_finally",isDocsHomePage:!1,title:"Working With Try Except Else Finally",description:"try/except",source:"@site/docs/python/06_control_structures/6_working_with_try_except.md",slug:"/python/06_control_structures/working_with_try_except_else_finally",permalink:"/docs/python/06_control_structures/working_with_try_except_else_finally",editUrl:null,version:"current",sidebar_label:"Working With Try Except Else Finally",sidebar:"someSidebar",previous:{title:"For Else While Else",permalink:"/docs/python/06_control_structures/for_else_while_else"},next:{title:"Further Reading",permalink:"/docs/python/06_control_structures/further_reading"}},l=[{value:"try/except",id:"tryexcept",children:[]},{value:"try/except/else",id:"tryexceptelse",children:[]},{value:"try/except/finally",id:"tryexceptfinally",children:[]},{value:"When to use exceptions",id:"when-to-use-exceptions",children:[]}],p={toc:l};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"tryexcept"},"try/except"),Object(o.b)("p",null,"If you repeated examples that were used before, there could be situations where a mistake was made. It was probably a syntax error when a colon was missing, for example. Python generally reacts quite understandably to such errors and they can easily be corrected. However, even if the code is syntactically correct, errors can occur. In Python, these errors are called ",Object(o.b)("em",{parentName:"p"},"exceptions"),"."),Object(o.b)("p",null,"Examples of exceptions:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [1]: 2/0\n-----------------------------------------------------\nZeroDivisionError: division by zero\n\nIn [2]: 'test' + 2\n-----------------------------------------------------\nTypeError: must be str, not int\n")),Object(o.b)("p",null,"In this case, two exceptions were raised: ",Object(o.b)("inlineCode",{parentName:"p"},"ZeroDivisionError")," and ",Object(o.b)("inlineCode",{parentName:"p"},"TypeError"),"."),Object(o.b)("p",null,"Most often, it is possible to predict what kind of exceptions will occur during execution of the program. For example, if program expects two numbers in input and output returns their sum and user has entered a string instead of one of numbers a TypeError error will appear as in example above."),Object(o.b)("p",null,"Python allows working with exceptions. They can be intercepted and acted upon if an exception has been occurred."),Object(o.b)("p",null,"Note"),Object(o.b)("p",null,"When an exception appears, program is immediately interrupted."),Object(o.b)("p",null,"In order to work with exceptions ",Object(o.b)("inlineCode",{parentName:"p"},"try/except")," statement is used:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [3]: try:\n   ...:     2/0\n   ...: except ZeroDivisionError:\n   ...:     print(\"You can't divide by zero\")\n   ...:\nYou can't divide by zero\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"try")," statement works as follows:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"first execute expressions that are written in ",Object(o.b)("inlineCode",{parentName:"p"},"try")," block")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"if there are no exceptions during execution of ",Object(o.b)("inlineCode",{parentName:"p"},"try")," block, block ",Object(o.b)("inlineCode",{parentName:"p"},"except")," is skipped and the following code is executed")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"if there is an exception within"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"try\n")),Object(o.b)("p",null,"  block, the rest part of"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"try\n")),Object(o.b)("p",null,"  block is skipped"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"if ",Object(o.b)("inlineCode",{parentName:"li"},"except")," block contains an exception which has been occurred, code in ",Object(o.b)("inlineCode",{parentName:"li"},"except")," block is executed"),Object(o.b)("li",{parentName:"ul"},"if exception that has raised is not specified in ",Object(o.b)("inlineCode",{parentName:"li"},"except")," block, program execution is interrupted and an error is generated")),Object(o.b)("p",null,"Note that ",Object(o.b)("inlineCode",{parentName:"p"},"Cool!")," string in ",Object(o.b)("inlineCode",{parentName:"p"},"try")," block is not displayed:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [4]: try:\n   ...:     print(\"Let's divide some numbers\")\n   ...:     2/0\n   ...:     print('Cool!')\n   ...: except ZeroDivisionError:\n   ...:     print(\"You can't divide by zero\")\n   ...:\nLet's divide some numbers\nYou can't divide by zero\n")),Object(o.b)("p",null,"try/except statement may have many ",Object(o.b)("inlineCode",{parentName:"p"},"except")," if different actions are needed depending on type of error."),Object(o.b)("p",null,"For example, divide.py script divides two numbers entered by user:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'# -*- coding: utf-8 -*-\n\ntry:\n    a = input("Enter first number: ")\n    b = input("Enter second number: ")\n    print("Result: ", int(a)/int(b))\nexcept ValueError:\n    print("Please enter only numbers")\nexcept ZeroDivisionError:\n    print("You can\'t divide by zero")\n')),Object(o.b)("p",null,"Examples of script execution:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ python divide.py\nEnter first number: 3\nEnter second number: 1\nResult:  3\n\n$ python divide.py\nEnter first number: 5\nEnter second number: 0\nYou can't divide by zero\n\n$ python divide.py\nEnter first number: qewr\nEnter second number: 3\nPlease enter only numbers\n")),Object(o.b)("p",null,"In this case, ValueError exception raised when user has entered a string instead of a number. ZeroDivisionError exception raised if second number is 0."),Object(o.b)("p",null,"If you do not need to print different messages on ValueError and ZeroDivisionError, you can do this (divide_ver2.py file):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'# -*- coding: utf-8 -*-\n\ntry:\n    a = input("Enter first number: ")\n    b = input("Enter second number: ")\n    print("Result: ", int(a)/int(b))\nexcept (ValueError, ZeroDivisionError):\n    print("Something went wrong...")\n')),Object(o.b)("p",null,"Verification:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ python divide_ver2.py\nEnter first number: wer\nEnter second number: 4\nSomething went wrong...\n\n$ python divide_ver2.py\nEnter first number: 5\nEnter second number: 0\nSomething went wrong...\n")),Object(o.b)("p",null,"Note"),Object(o.b)("p",null,"In block ",Object(o.b)("inlineCode",{parentName:"p"},"except")," you don\u2019t have to specify a specific exception or exceptions. In that case, all exceptions would be intercepted."),Object(o.b)("p",null,"That is not recommended!"),Object(o.b)("h2",{id:"tryexceptelse"},"try/except/else"),Object(o.b)("p",null,"Try/except has an optional ",Object(o.b)("inlineCode",{parentName:"p"},"else")," block. It is implemented if there is no exception."),Object(o.b)("p",null,"For example, if you need to perform any further operations with data that user entered, you can write them in ",Object(o.b)("inlineCode",{parentName:"p"},"else")," block (divide_ver3.py file):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'# -*- coding: utf-8 -*-\n\ntry:\n    a = input("Enter first number: ")\n    b = input("Enter second number: ")\n    result = int(a)/int(b)\nexcept (ValueError, ZeroDivisionError):\n    print("Something went wrong...")\nelse:\n    print("Result is squared: ", result``2)\n')),Object(o.b)("p",null,"Example of execution:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ python divide_ver3.py\nEnter first number: 10\nEnter second number: 2\nResult is squared:  25\n\n$ python divide_ver3.py\nEnter first number: werq\nEnter second number: 3\nSomething went wrong...\n")),Object(o.b)("h2",{id:"tryexceptfinally"},"try/except/finally"),Object(o.b)("p",null,"Block ",Object(o.b)("inlineCode",{parentName:"p"},"finally")," is another optional block in ",Object(o.b)("inlineCode",{parentName:"p"},"try")," statement. It is ",Object(o.b)("em",{parentName:"p"},"always")," implemented, whether an exception has been raised or not. It\u2019s about actions that you have to do anyway. For example, it could be a file closing."),Object(o.b)("p",null,"File divide_ver4.py \u0441 \u0431\u043b\u043e\u043a\u043e\u043c finally:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'# -*- coding: utf-8 -*-\n\ntry:\n    a = input("Enter first number: ")\n    b = input("Enter second number: ")\n    result = int(a)/int(b)\nexcept (ValueError, ZeroDivisionError):\n    print("Something went wrong...")\nelse:\n    print("Result is squared: ", result``2)\nfinally:\n    print("And they lived happily ever after.")\n')),Object(o.b)("p",null,"Verification:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ python divide_ver4.py\nEnter first number: 10\nEnter second number: 2\nResult is squared:  25\nAnd they lived happily ever after.\n\n$ python divide_ver4.py\nEnter first number: qwerewr\nEnter second number: 3\nSomething went wrong...\nAnd they lived happily ever after.\n\n$ python divide_ver4.py\nEnter first number: 4\nEnter second number: 0\nSomething went wrong...\nAnd they lived happily ever after.\n")),Object(o.b)("h2",{id:"when-to-use-exceptions"},"When to use exceptions"),Object(o.b)("p",null,"As a rule, same code can be written with or without exceptions."),Object(o.b)("p",null,"For example, this version of code:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'while True:\n    a = input("Enter first number: ")\n    b = input("Enter second number: ")\n    try:\n        result = int(a)/int(b)\n    except ValueError:\n        print("Only digits are supported")\n    except ZeroDivisionError:\n        print("You can\'t divide by zero")\n    else:\n        print(result)\n        break\n')),Object(o.b)("p",null,"You can rewrite this without try/except (try_except_divide.py file):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'while True:\n    a = input("Enter first number: ")\n    b = input("Enter second number: ")\n    if a.isdigit() and b.isdigit():\n        if int(b) == 0:\n            print("You can\'t divide by zero")\n        else:\n            print(int(a)/int(b))\n            break\n    else:\n        print("Only digits are supported")\n')),Object(o.b)("p",null,"But the same option without exceptions will not always be simple and understandable."),Object(o.b)("p",null,"It is important to assess in each specific situation which version of code is more comprehensible, compact and universal - with or without exceptions."),Object(o.b)("p",null,"If you\u2019ve used some other programming language before, it\u2019s possible that use of exceptions was considered a bad form. In Python this is not true. To get a little bit more into this issue, look at the links to additional material at the end of this section."))}s.isMDXComponent=!0},281:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),s=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=s(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(t),d=r,m=b["".concat(a,".").concat(d)]||b[d]||u[d]||o;return t?i.a.createElement(m,c(c({ref:n},p),{},{components:t})):i.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=t[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);