(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{225:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return o})),a.d(n,"metadata",(function(){return c})),a.d(n,"toc",(function(){return l})),a.d(n,"default",(function(){return u}));var t=a(3),r=a(8),s=(a(0),a(281)),o={id:"function_parameters_and_arguments",title:"Function Parameters And Arguments",sidebar_label:"Function Parameters And Arguments",slug:"function_parameters_and_arguments",custom_edit_url:null},c={unversionedId:"python/09_functions/function_parameters_and_arguments",id:"python/09_functions/function_parameters_and_arguments",isDocsHomePage:!1,title:"Function Parameters And Arguments",description:"The purpose of creating a function is typically to take a piece of code that performs a particular task to a separate object. This allows you to use this piece of code multiple times without having to re-create it in program.",source:"@site/docs/python/09_functions/3_function_parameters_and_arg.md",slug:"/python/09_functions/function_parameters_and_arguments",permalink:"/tr/docs/python/09_functions/function_parameters_and_arguments",editUrl:null,version:"current",sidebar_label:"Function Parameters And Arguments",sidebar:"someSidebar",previous:{title:"Namespace Scope Of Variables",permalink:"/tr/docs/python/09_functions/namespace_scope_of_variables"},next:{title:"Example",permalink:"/tr/docs/python/09_functions/example"}},l=[{value:"Required parameters",id:"required-parameters",children:[]},{value:"Optional parameters (default parameters)",id:"optional-parameters-default-parameters",children:[]},{value:"Positional argument",id:"positional-argument",children:[]},{value:"Keyword arguments",id:"keyword-arguments",children:[]},{value:"Variable length positional arguments",id:"variable-length-positional-arguments",children:[]},{value:"Keyword variable length arguments",id:"keyword-variable-length-arguments",children:[]},{value:"Unpacking positional arguments",id:"unpacking-positional-arguments",children:[]},{value:"Unpacking keyword alrguments",id:"unpacking-keyword-alrguments",children:[]}],i={toc:l};function u(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(t.a)({},i,a,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The purpose of creating a function is typically to take a piece of code that performs a particular task to a separate object. This allows you to use this piece of code multiple times without having to re-create it in program."),Object(s.b)("p",null,"Typically, a function must perform some actions with input values and produce an output."),Object(s.b)("p",null,"When working with functions it is important to distinguish:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"parameters")," - variables that are used when creating a function."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"arguments")," - actual values (data) that are passed to function when called.")),Object(s.b)("p",null,"For a function to receive incoming values, it must be created with parameters (func_check_passwd.py file):"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [1]: def check_passwd(username, password):\n   ...:     if len(password) < 8:\n   ...:         print('Password is too short')\n   ...:         return False\n   ...:     elif username in password:\n   ...:         print('Password contains username')\n   ...:         return False\n   ...:     else:\n   ...:         print(f'Password for user {username} has passed all checks')\n   ...:         return True\n   ...:\n")),Object(s.b)("p",null,"In this case, function has two parameters: username and password."),Object(s.b)("p",null,"Function checks password and returns False if checks fail and True if password passed checks:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [2]: check_passwd('nata', '12345')\nPassword is too short\nOut[2]: False\n\nIn [3]: check_passwd('nata', '12345lsdkjflskfdjsnata')\nPassword contains username\nOut[3]: False\n\nIn [4]: check_passwd('nata', '12345lsdkjflskfdjs')\nPassword for user nata has passed all checks\nOut[4]: True\n")),Object(s.b)("p",null,"When defining a function in this way it is necessary to pass both arguments. If only one argument is passed, there is an error:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [5]: check_passwd('nata')\n---------------------------------------------------------------------------\nTypeError                                 Traceback (most recent call last)\n<ipython-input-5-e07773bb4cc8> in <module>\n----\x3e 1 check_passwd('nata')\n\nTypeError: check_passwd() missing 1 required positional argument: 'password'\n")),Object(s.b)("p",null,"Similarly, an error will occur if three or more arguments are passed."),Object(s.b)("h1",{id:"function-parameter-types"},"Function parameter types"),Object(s.b)("p",null,"When creating a function you can specify which arguments must be passed and which must not. Accordingly, a function can be created with:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"required parameters")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"optional parameters")," (with default values)")),Object(s.b)("h2",{id:"required-parameters"},"Required parameters"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Required parameters")," - determine which arguments must be passed to functions. At the same time, they need to be passed exactly as many as parameters of function are specified (you cannot specify more or less)"),Object(s.b)("p",null,"Function with mandatory parameters (func_params_types.py file):"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [1]: def check_passwd(username, password):\n   ...:     if len(password) < 8:\n   ...:         print('Password is too short')\n   ...:         return False\n   ...:     elif username in password:\n   ...:         print('Password contains username')\n   ...:         return False\n   ...:     else:\n   ...:         print(f'Password for user {username} has passed all checks')\n   ...:         return True\n   ...:\n")),Object(s.b)("p",null,"Function check_passwd() expects two arguments: username and password."),Object(s.b)("p",null,"Function checks password and returns False if checks fail and True if password passed all checks:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [2]: check_passwd('nata', '12345')\nPassword is too short\nOut[2]: False\n\nIn [3]: check_passwd('nata', '12345lsdkjflskfdjsnata')\nPassword contains username\nOut[3]: False\n\nIn [4]: check_passwd('nata', '12345lsdkjflskfdjs')\nPassword for user nata has passed all checks\nOut[4]: True\n")),Object(s.b)("h2",{id:"optional-parameters-default-parameters"},"Optional parameters (default parameters)"),Object(s.b)("p",null,"When creating a function you can specify default value for parameter in this way: ",Object(s.b)("inlineCode",{parentName:"p"},"def check_passwd(username, password, min_length=8)"),". In this case, min_length option is specified with default value and may not be passed when a function is called."),Object(s.b)("p",null,"Example of a ",Object(s.b)("inlineCode",{parentName:"p"},"check_passwd")," function with default parameter (func_check_passwd_optional_param.py file):"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [6]: def check_passwd(username, password, min_length=8):\n   ...:     if len(password) < min_length:\n   ...:         print('Password is too short')\n   ...:         return False\n   ...:     elif username in password:\n   ...:         print('Password contains username')\n   ...:         return False\n   ...:     else:\n   ...:         print(f'Password for user {username} has passed all checks')\n   ...:         return True\n   ...:\n")),Object(s.b)("p",null,"Since min_length parameter has a default value the corresponding argument can be omitted when a function is called if default value fits you:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [7]: check_passwd('nata', '12345')\nPassword is too short\nOut[7]: False\n")),Object(s.b)("p",null,"If you want to change default value:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [8]: check_passwd('nata', '12345', 3)\nPassword for user nata has passed all checks\nOut[8]: True\n")),Object(s.b)("h1",{id:"function-argument-types"},"Function argument types"),Object(s.b)("p",null,"When a function is called the arguments can be passed in two ways:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"as ",Object(s.b)("strong",{parentName:"li"},"positional")," - passed in the same order in which they are defined at creation of function. That is, the order in which arguments are passed determines what value each argument will receive."),Object(s.b)("li",{parentName:"ul"},"as ",Object(s.b)("strong",{parentName:"li"},"keyword")," - passed with argument name and its value. In such a case, arguments can be stated in any order as their name is clearly indicated.")),Object(s.b)("p",null,"Positional and keyword arguments can be mixed when calling a function. That is, it is possible to use both methods when passing arguments of the same function. In this process, Positional arguments must be indicated before keyword arguments."),Object(s.b)("p",null,"Look at different ways to pass arguments using check_passwd (func_check_check_passwd_optional_param.py file):"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [1]: def check_passwd(username, password):\n   ...:     if len(password) < 8:\n   ...:         print('Password is too short')\n   ...:         return False\n   ...:     elif username in password:\n   ...:         print('Password contains username')\n   ...:         return False\n   ...:     else:\n   ...:         print(f'Password for user {username} has passed all checks')\n   ...:         return True\n   ...:\n")),Object(s.b)("h2",{id:"positional-argument"},"Positional argument"),Object(s.b)("p",null,"Positional arguments when calling a function must be passed in the correct order (therefore they are called positional arguments)."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [2]: check_passwd('nata', '12345')\nPassword is too short\nOut[2]: False\n\nIn [3]: check_passwd('nata', '12345lsdkjflskfdjsnata')\nPassword contains username\nOut[3]: False\n\nIn [4]: check_passwd('nata', '12345lsdkjflskfdjs')\nPassword for user nata has passed all checks\nOut[4]: True\n")),Object(s.b)("p",null,"If you swap arguments when calling a function the error will likely occur depending on function."),Object(s.b)("h2",{id:"keyword-arguments"},"Keyword arguments"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Keyword arguments"),":"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"are passed with name of argument"),Object(s.b)("li",{parentName:"ul"},"thus they can be passed in any order")),Object(s.b)("p",null,"If both arguments are keyword, they can be passed in any order:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [9]: check_passwd(password='12345', username='nata', min_length=4)\nPassword for user nata has passed all checks\nOut[9]: True\n")),Object(s.b)("p",null,"Warning"),Object(s.b)("p",null,"Please note that first there should always be positional arguments and then keyword arguments."),Object(s.b)("p",null,"If you do the opposite, there\u2019s an error:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [10]: check_passwd(password='12345', username='nata', 4)\n  File \"<ipython-input-10-7e8246b6b402>\", line 1\n    check_passwd(password='12345', username='nata', 4)\n                                                   ^\nSyntaxError: positional argument follows keyword argument\n")),Object(s.b)("p",null,"But in that combination it works:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [11]: check_passwd('nata', '12345', min_length=3)\nPassword for user nata has passed all checks\nOut[11]: True\n")),Object(s.b)("p",null,"In real life, it is often better to specify flags (parameters with True/False values) or numerical values as a keyword argument. If you set a good name for the parameter you can immediately know by its name what it does."),Object(s.b)("p",null,"For example, you can add a flag that will control whether or not a username should be checked in password:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [12]: def check_passwd(username, password, min_length=8, check_username=True):\n    ...:     if len(password) < min_length:\n    ...:         print('Password is too short')\n    ...:         return False\n    ...:     elif check_username and username in password:\n    ...:         print('Password contains username')\n    ...:         return False\n    ...:     else:\n    ...:         print(f'Password for user {username} has passed all checks')\n    ...:         return True\n    ...:\n")),Object(s.b)("p",null,"By default, flag is True which means check should be done:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [14]: check_passwd('nata', '12345nata', min_length=3)\nPassword contains username\nOut[14]: False\n\nIn [15]: check_passwd('nata', '12345nata', min_length=3, check_username=True)\nPassword contains username\nOut[15]: False\n")),Object(s.b)("p",null,"If you specify a value equal to False the verification will not be performed:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [16]: check_passwd('nata', '12345nata', min_length=3, check_username=False)\nPassword for user nata has passed all checks\nOut[16]: True\n")),Object(s.b)("h1",{id:"variable-length-arguments"},"Variable length arguments"),Object(s.b)("p",null,"Sometimes it is necessary to make function accept not a fixed number of arguments, but any number. For such a case, in Python it is possible to create a function with a special parameter that accepts variable length arguments. This parameter can be both keyword and positional."),Object(s.b)("p",null,"Note"),Object(s.b)("p",null,"Even if you don\u2019t use it in your scripts there\u2019s a good chance you\u2019ll find it in someone else\u2019s code."),Object(s.b)("h2",{id:"variable-length-positional-arguments"},"Variable length positional arguments"),Object(s.b)("p",null,"Parameter that takes positional variable length arguments is created by adding an asterisk before parameter name. Parameter can have any name but by agreement ",Object(s.b)("inlineCode",{parentName:"p"},"*args")," is the most common name."),Object(s.b)("p",null,"Example of a function:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [1]: def sum_arg(a, *args):\n  ....:     print(a, args)\n  ....:     return a + sum(args)\n  ....:\n")),Object(s.b)("p",null,"Function ",Object(s.b)("inlineCode",{parentName:"p"},"sum_arg")," is created with two parameters:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"parameter")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"a\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"if passed as positional argument, should be first")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"if passed as a keyword argument, the order does not matter")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"parameter"))),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"*args\n")),Object(s.b)("p",null,"  ","-"," expects variable length arguments"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"all other arguments as a tuple"),Object(s.b)("li",{parentName:"ul"},"these arguments may be missed")),Object(s.b)("p",null,"Call a function with different number of arguments:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [2]: sum_arg(1, 10, 20, 30)\n1 (10, 20, 30)\nOut[2]: 61\n\nIn [3]: sum_arg(1, 10)\n1 (10,)\nOut[3]: 11\n\nIn [4]: sum_arg(1)\n1 ()\nOut[4]: 1\n")),Object(s.b)("p",null,"You can also create such a function:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [5]: def sum_arg(*args):\n  ....:     print(args)\n  ....:     return sum(args)\n  ....:\n\nIn [6]: sum_arg(1, 10, 20, 30)\n(1, 10, 20, 30)\nOut[6]: 61\n\nIn [7]: sum_arg()\n()\nOut[7]: 0\n")),Object(s.b)("h2",{id:"keyword-variable-length-arguments"},"Keyword variable length arguments"),Object(s.b)("p",null,"Parameter that accepts keyword variable length arguments is created by adding two asterisk in front of parameter name. Name of parameter can be any but by agreement most commonly use name ",Object(s.b)("inlineCode",{parentName:"p"},"**kwargs")," (from keyword arguments)."),Object(s.b)("p",null,"Example of a function:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [8]: def sum_arg(a, **kwargs):\n  ....:     print(a, kwargs)\n  ....:     return a + sum(kwargs.values())\n  ....:\n")),Object(s.b)("p",null,"Function ",Object(s.b)("inlineCode",{parentName:"p"},"sum_arg")," is created with two parameters:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"parameter")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"a\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"if passed as positional argument, should be first")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"if passed as a keyword argument, the order does not matter")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"parameter"))),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"**kwargs\n")),Object(s.b)("p",null,"  ","-"," expects keyword variable length arguments"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"all other keyword arguments as a dictionary"),Object(s.b)("li",{parentName:"ul"},"these arguments may be missed")),Object(s.b)("p",null,"Calling a function with different number of keyword arguments:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [9]: sum_arg(a=10, b=10, c=20, d=30)\n10 {'c': 20, 'b': 10, 'd': 30}\nOut[9]: 70\n\nIn [10]: sum_arg(b=10, c=20, d=30, a=10)\n10 {'c': 20, 'b': 10, 'd': 30}\nOut[10]: 70\n")),Object(s.b)("h1",{id:"unpacking-arguments"},"Unpacking arguments"),Object(s.b)("p",null,"In Python the expressions ",Object(s.b)("inlineCode",{parentName:"p"},"*args")," and ",Object(s.b)("inlineCode",{parentName:"p"},"**kwargs")," allow for another task - ",Object(s.b)("strong",{parentName:"p"},"unpacking arguments"),"."),Object(s.b)("p",null,"So far we\u2019ve called all functions manually. Hence, we passed on all relevant arguments."),Object(s.b)("p",null,"In reality, it is usually necessary to pass data to function programmatically. And often data comes in the form of a Python object."),Object(s.b)("h2",{id:"unpacking-positional-arguments"},"Unpacking positional arguments"),Object(s.b)("p",null,"For example, when formatting strings you often need to pass multiple arguments to ",Object(s.b)("inlineCode",{parentName:"p"},"format")," method. And often these arguments are already in list or tuple. To pass them to ",Object(s.b)("inlineCode",{parentName:"p"},"format")," method you have to use indexes:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [1]: items = [1, 2, 3]\n\nIn [2]: print('One: {}, Two: {}, Three: {}'.format(items[0], items[1], items[2]))\nOne: 1, Two: 2, Three: 3\n")),Object(s.b)("p",null,"Instead, you can take advantage of unpacking argument and do this:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [4]: items = [1, 2, 3]\n\nIn [5]: print('One: {}, Two: {}, Three: {}'.format(*items))\nOne: 1, Two: 2, Three: 3\n")),Object(s.b)("p",null,"Another example is config_interface function (func_config_interface_unpacking.py file):"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [8]: def config_interface(intf_name, ip_address, mask):\n    ..:     interface = f'interface {intf_name}'\n    ..:     no_shut = 'no shutdown'\n    ..:     ip_addr = f'ip address {ip_address} {mask}'\n    ..:     result = [interface, no_shut, ip_addr]\n    ..:     return result\n    ..:\n")),Object(s.b)("p",null,"Function expects such arguments:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"intf_name - interface name"),Object(s.b)("li",{parentName:"ul"},"ip_address - IP address"),Object(s.b)("li",{parentName:"ul"},"mask - subnet mask")),Object(s.b)("p",null,"Function returns a list of strings to configure interface:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [9]: config_interface('Fa0/1', '10.0.1.1', '255.255.255.0')\nOut[9]: ['interface Fa0/1', 'no shutdown', 'ip address 10.0.1.1 255.255.255.0']\n\nIn [11]: config_interface('Fa0/10', '10.255.4.1', '255.255.255.0')\nOut[11]: ['interface Fa0/10', 'no shutdown', 'ip address 10.255.4.1 255.255.255.0']\n")),Object(s.b)("p",null,"Suppose you call a function and pass it information that has been obtained from another source, for example from database. For example, interfaces_info list contains parameters for configuring interfaces:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [14]: interfaces_info = [['Fa0/1', '10.0.1.1', '255.255.255.0'],\n    ...:                    ['Fa0/2', '10.0.2.1', '255.255.255.0'],\n    ...:                    ['Fa0/3', '10.0.3.1', '255.255.255.0'],\n    ...:                    ['Fa0/4', '10.0.4.1', '255.255.255.0'],\n    ...:                    ['Lo0', '10.0.0.1', '255.255.255.255']]\n    ...:\n")),Object(s.b)("p",null,"If you go through list in the loop and pass nested list as a function argument, an error will occur:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [15]: for info in interfaces_info:\n    ...:     print(config_interface(info))\n    ...:\n---------------------------------------------------------------------------\nTypeError                                 Traceback (most recent call last)\n<ipython-input-15-d34ced60c796> in <module>\n      1 for info in interfaces_info:\n----\x3e 2     print(config_interface(info))\n      3\n\nTypeError: config_interface() missing 2 required positional arguments: 'ip_address' and 'mask'\n")),Object(s.b)("p",null,"Error is quite logical: function expects three arguments and it is given 1 argument - a list. In such a situation it is necessary to unpack arguments. Just add ",Object(s.b)("inlineCode",{parentName:"p"},"*")," before passing the list as an argument and there is no error anymore:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [16]: for info in interfaces_info:\n    ...:     print(config_interface(*info))\n    ...:\n['interface Fa0/1', 'no shutdown', 'ip address 10.0.1.1 255.255.255.0']\n['interface Fa0/2', 'no shutdown', 'ip address 10.0.2.1 255.255.255.0']\n['interface Fa0/3', 'no shutdown', 'ip address 10.0.3.1 255.255.255.0']\n['interface Fa0/4', 'no shutdown', 'ip address 10.0.4.1 255.255.255.0']\n['interface Lo0', 'no shutdown', 'ip address 10.0.0.1 255.255.255.255']\n")),Object(s.b)("p",null,"Python will unpack info list itself and pass list elements to function as arguments."),Object(s.b)("p",null,"Note"),Object(s.b)("p",null,"Tuple can also be unpacked in this way."),Object(s.b)("h2",{id:"unpacking-keyword-alrguments"},"Unpacking keyword alrguments"),Object(s.b)("p",null,"Similarly, you can unpack dictionary to pass it as keyword arguments."),Object(s.b)("p",null,"Check_passwd function (func_check_pass_optional_param_2.py file):"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [19]: def check_passwd(username, password, min_length=8, check_username=True):\n    ...:     if len(password) < min_length:\n    ...:         print('Password is too short')\n    ...:         return False\n    ...:     elif check_username and username in password:\n    ...:         print('Password contains username')\n    ...:         return False\n    ...:     else:\n    ...:         print(f'Password for user {username} has passed all checks')\n    ...:         return True\n    ...:\n")),Object(s.b)("p",null,"List of dictionaries ",Object(s.b)("inlineCode",{parentName:"p"},"username_passwd")," where username and password are specified:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [20]: username_passwd = [{'username': 'cisco', 'password': 'cisco'},\n    ...:                    {'username': 'nata', 'password': 'natapass'},\n    ...:                    {'username': 'user', 'password': '123456789'}]\n")),Object(s.b)("p",null,"If you pass dictionary to check_passwd function, there is an error:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [21]: for data in username_passwd:\n    ...:     check_passwd(data)\n    ...:\n---------------------------------------------------------------------------\nTypeError                                 Traceback (most recent call last)\n<ipython-input-21-ad848f85c77f> in <module>\n      1 for data in username_passwd:\n----\x3e 2     check_passwd(data)\n      3\n\nTypeError: check_passwd() missing 1 required positional argument: 'password'\n")),Object(s.b)("p",null,"Error is because the function has taken dictionary as one argument and believes that it lacks only password argument."),Object(s.b)("p",null,"If you add ",Object(s.b)("inlineCode",{parentName:"p"},"**")," before passing a dictionary to function, function will work properly:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [22]: for data in username_passwd:\n    ...:     check_passwd(**data)\n    ...:\nPassword is too short\nPassword contains username\nPassword for user user has passed all checks\n\nIn [23]: for data in username_passwd:\n    ...:     print(data)\n    ...:     check_passwd(**data)\n    ...:\n{'username': 'cisco', 'password': 'cisco'}\nPassword is too short\n{'username': 'nata', 'password': 'natapass'}\nPassword contains username\n{'username': 'user', 'password': '123456789'}\nPassword for user user has passed all checks\n")),Object(s.b)("p",null,"Python unpacks dictionary and passes it to function as keyword arguments. The ",Object(s.b)("inlineCode",{parentName:"p"},"check_passwd(**data)")," is converted to a ",Object(s.b)("inlineCode",{parentName:"p"},"check_passwd(username='cisco', password='cisco')")))}u.isMDXComponent=!0},281:function(e,n,a){"use strict";a.d(n,"a",(function(){return p})),a.d(n,"b",(function(){return m}));var t=a(0),r=a.n(t);function s(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function c(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){s(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),u=function(e){var n=r.a.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):c(c({},n),e)),a},p=function(e){var n=u(e.components);return r.a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,s=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=u(a),b=t,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||s;return a?r.a.createElement(m,c(c({ref:n},i),{},{components:a})):r.a.createElement(m,c({ref:n},i))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var s=a.length,o=new Array(s);o[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,o[1]=c;for(var i=2;i<s;i++)o[i]=a[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);