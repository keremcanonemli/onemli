(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{281:function(e,n,a){"use strict";a.d(n,"a",(function(){return p})),a.d(n,"b",(function(){return m}));var s=a(0),t=a.n(s);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,s)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function u(e,n){if(null==e)return{};var a,s,t=function(e,n){if(null==e)return{};var a,s,t={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var c=t.a.createContext({}),l=function(e){var n=t.a.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},p=function(e){var n=l(e.components);return t.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.a.createElement(t.a.Fragment,{},n)}},f=t.a.forwardRef((function(e,n){var a=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(a),f=s,m=p["".concat(o,".").concat(f)]||p[f]||d[f]||r;return a?t.a.createElement(m,i(i({ref:n},c),{},{components:a})):t.a.createElement(m,i({ref:n},c))}));function m(e,n){var a=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=f;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var c=2;c<r;c++)o[c]=a[c];return t.a.createElement.apply(null,o)}return t.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},70:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return o})),a.d(n,"metadata",(function(){return i})),a.d(n,"toc",(function(){return u})),a.d(n,"default",(function(){return l}));var s=a(3),t=a(8),r=(a(0),a(281)),o={id:"example",title:"Example",sidebar_label:"Example",slug:"example",custom_edit_url:null},i={unversionedId:"python/functions/example",id:"python/functions/example",isDocsHomePage:!1,title:"Example",description:"Using variable length arguments and unpacking arguments you can pass arguments between functions. Let me give you an example.",source:"@site/docs/python/functions/4_example_of_using_variable_lenght_keyword.md",slug:"/python/functions/example",permalink:"/docs/python/functions/example",editUrl:null,version:"current",sidebar_label:"Example",sidebar:"someSidebar",previous:{title:"Function Parameters And Arguments",permalink:"/docs/python/functions/function_parameters_and_arguments"},next:{title:"Tasks",permalink:"/docs/python/functions/tasks"}},u=[],c={toc:u};function l(e){var n=e.components,a=Object(t.a)(e,["components"]);return Object(r.b)("wrapper",Object(s.a)({},c,a,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Using variable length arguments and unpacking arguments you can pass arguments between functions. Let me give you an example."),Object(r.b)("p",null,"Function ",Object(r.b)("inlineCode",{parentName:"p"},"check_passwd")," (func_add_user_kwargs_example.py file):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [1]: def check_passwd(username, password, min_length=8, check_username=True):\n   ...:     if len(password) < min_length:\n   ...:         print('Password is too short')\n   ...:         return False\n   ...:     elif check_username and username in password:\n   ...:         print('Password contains username')\n   ...:         return False\n   ...:     else:\n   ...:         print(f'Password for user {username} has passed all checks')\n   ...:         return True\n   ...:\n")),Object(r.b)("p",null,"Function checks password and returns True if password has passed verification and False if not."),Object(r.b)("p",null,"Call function in ipython:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [3]: check_passwd('nata', '12345', min_length=3)\nPassword for user nata has passed all checks\nOut[3]: True\n\nIn [4]: check_passwd('nata', '12345nata', min_length=3)\nPassword contains username\nOut[4]: False\n\nIn [5]: check_passwd('nata', '12345nata', min_length=3, check_username=False)\nPassword for user nata has passed all checks\nOut[5]: True\n\nIn [6]: check_passwd('nata', '12345nata', min_length=3, check_username=True)\nPassword contains username\nOut[6]: False\n")),Object(r.b)("p",null,"We will create ",Object(r.b)("inlineCode",{parentName:"p"},"add_user_to_users_file")," function that requests password for specified user, checks it and requests it again if password has not been checked or writes user and password to file if password has been verified"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [7]: def add_user_to_users_file(user, users_filename='users.txt'):\n   ...:     while True:\n   ...:         passwd = input(f'Enter password for user {user}: ')\n   ...:         if check_passwd(user, passwd):\n   ...:             break\n   ...:     with open(users_filename, 'a') as f:\n   ...:         f.write(f'{user},{passwd}\\n')\n   ...:\n\nIn [8]: add_user_to_users_file('nata')\nEnter password for user nata: natasda\nPassword is too short\nEnter password for user nata: natasdlajsl;fjd\nPassword contains username\nEnter password for user nata: salkfdjsalkdjfsal;dfj\nPassword for user nata has passed all checks\n\nIn [9]: cat users.txt\nnata,salkfdjsalkdjfsal;dfj\n")),Object(r.b)("p",null,"In this version of add_user_to_users_file() function, it is not possible to regulate the minimum password length and whether to verify the presence of a username in password. In the following version of add_user_to_users_file() function, these features are added:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [5]: def add_user_to_users_file(user, users_filename='users.txt', min_length=8, check_username=True):\n   ...:     while True:\n   ...:         passwd = input(f'Enter password for user {user}: ')\n   ...:         if check_passwd(user, passwd, min_length, check_username):\n   ...:             break\n   ...:     with open(users_filename, 'a') as f:\n   ...:         f.write(f'{user},{passwd}\\n')\n   ...:\n\nIn [6]: add_user_to_users_file('nata', min_length=5)\nEnter password for user nata: natas2342\nPassword contains username\nEnter password for user nata: dlfjgkd\nPassword for user nata has passed all checks\n")),Object(r.b)("p",null,"You can now specify min_length or check_username when calling a function. However, it was necessary to repeat parameters of ",Object(r.b)("inlineCode",{parentName:"p"},"check_passwd")," function in defining of ",Object(r.b)("inlineCode",{parentName:"p"},"add_user_to_users_file")," function. This is not very good and when there are many parameters it is just inconvenient, especially considering that check_passwd function can have other parameters."),Object(r.b)("p",null,"This happens quite often and Python has a common solution to this problem: all arguments for internal function (in this case it is check_passwd) will be taken in ",Object(r.b)("a",{parentName:"p",href:"https://pyneng.readthedocs.io/en/latest/book/09_functions/func_unpacking_and_var_args_example.html#id1"},"**"),"kwargs. Then, when calling check_passwd() function they will be unpacked into keyword arguments by the same ",Object(r.b)("inlineCode",{parentName:"p"},"**kwargs")," syntax."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"In [7]: def add_user_to_users_file(user, users_filename='users.txt', **kwargs):\n   ...:     while True:\n   ...:         passwd = input(f'Enter password for user {user}: ')\n   ...:         if check_passwd(user, passwd, **kwargs):\n   ...:             break\n   ...:     with open(users_filename, 'a') as f:\n   ...:         f.write(f'{user},{passwd}\\n')\n   ...:\n\nIn [8]: add_user_to_users_file('nata', min_length=5)\nEnter password for user nata: alskfdjlksadjf\nPassword for user nata has passed all checks\n\nIn [9]: add_user_to_users_file('nata', min_length=5)\nEnter password for user nata: 345\nPassword is too short\nEnter password for user nata: 309487538\nPassword for user nata has passed all checks\n")),Object(r.b)("p",null,"In this version you can add arguments to check_passwd() function without having to duplicate them in add_user_to_users_file function."))}l.isMDXComponent=!0}}]);