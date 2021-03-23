(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{136:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return s}));var i=t(3),r=t(8),a=(t(0),t(281)),o={id:"creation_of_functions",title:"Creation Of Functions",sidebar_label:"Creation Of Functions",slug:"creation_of_functions",custom_edit_url:null},c={unversionedId:"python/09_functions/creation_of_functions",id:"python/09_functions/creation_of_functions",isDocsHomePage:!1,title:"Creation Of Functions",description:"Creation of function:",source:"@site/docs/python/09_functions/1_creation_of_function.md",slug:"/python/09_functions/creation_of_functions",permalink:"/docs/python/09_functions/creation_of_functions",editUrl:null,version:"current",sidebar_label:"Creation Of Functions",sidebar:"someSidebar",previous:{title:"Functions",permalink:"/docs/python/09_functions/functions"},next:{title:"Namespace Scope Of Variables",permalink:"/docs/python/09_functions/namespace_scope_of_variables"}},u=[{value:"Function call",id:"function-call",children:[]},{value:"Operator return",id:"operator-return",children:[]},{value:"Documentation (docstring)",id:"documentation-docstring",children:[]}],l={toc:u};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Creation of function:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"functions are created with a reserved word ",Object(a.b)("inlineCode",{parentName:"p"},"def"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"def")," followed by function name and parentheses")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"parameters that function accepts inside parentheses")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"after parentheses goes colon and from a new line with indent there is a block of code that function executes")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"optionally, the first line can be ",Object(a.b)("inlineCode",{parentName:"p"},"docstring"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"function can use"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"return\n")),Object(a.b)("p",null,"  operator"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"it is used to terminate and exit a function"),Object(a.b)("li",{parentName:"ul"},"most often ",Object(a.b)("inlineCode",{parentName:"li"},"return")," operator returns some value")),Object(a.b)("p",null,"Note"),Object(a.b)("p",null,"Function code used in this subsection can be copied from create_func file."),Object(a.b)("p",null,"Example of function:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [1]: def configure_intf(intf_name, ip, mask):\n   ...:     print('interface', intf_name)\n   ...:     print('ip address', ip, mask)\n   ...:\n")),Object(a.b)("p",null,"Function ",Object(a.b)("inlineCode",{parentName:"p"},"configure_intf")," creates an interface configuration with specified name and IP address. Function has three parameters: intf_name, ip, mask. When function is called the real data will replace these parameters."),Object(a.b)("p",null,"Note"),Object(a.b)("p",null,"When function is created, it does nothing yet. Actions listed in it will be executed only when you call function. This is something like ACL in network equipment: when creating ACL in configuration, it does nothing until it is applied."),Object(a.b)("h2",{id:"function-call"},"Function call"),Object(a.b)("p",null,"When calling a function you must specify its name and pass arguments if necessary."),Object(a.b)("p",null,"Note"),Object(a.b)("p",null,"Parameters are variables that are used to create a function. Arguments are the actual values (data) that are passed to functions when called."),Object(a.b)("p",null,"Function ",Object(a.b)("inlineCode",{parentName:"p"},"configure_intf")," expects three values when called because it was created with three parameters:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [2]: configure_intf('F0/0', '10.1.1.1', '255.255.255.0')\ninterface F0/0\nip address 10.1.1.1 255.255.255.0\n\nIn [3]: configure_intf('Fa0/1', '94.150.197.1', '255.255.255.248')\ninterface Fa0/1\nip address 94.150.197.1 255.255.255.248\n")),Object(a.b)("p",null,"The current version of the ",Object(a.b)("inlineCode",{parentName:"p"},"configure_intf")," function prints commands to a standard output, commands can be seen but the result of function cannot be saved to a variable."),Object(a.b)("p",null,"For example, ",Object(a.b)("inlineCode",{parentName:"p"},"sorted")," function does not simply print the sorting result to standard output stream but ",Object(a.b)("strong",{parentName:"p"},"returns")," it, so it can be saved to variable in this way:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [4]: items = [40, 2, 0, 22]\n\nIn [5]: sorted(items)\nOut[5]: [0, 2, 22, 40]\n\nIn [6]: sorted_items = sorted(items)\n\nIn [7]: sorted_items\nOut[7]: [0, 2, 22, 40]\n")),Object(a.b)("p",null,"Note"),Object(a.b)("p",null,"Note string ",Object(a.b)("inlineCode",{parentName:"p"},"Out[5]")," in ipython: this is how ipython shows that the function/method is returning something and shows what it returns."),Object(a.b)("p",null,"If you try to write the result of the ",Object(a.b)("inlineCode",{parentName:"p"},"configure_intf")," function to a variable, the value of the variable will be None:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},".. code:: python\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"In ","[8]",": result = configure_intf(\u2018Fa0/0\u2019, \u201810.1.1.1\u2019, \u2018255.255.255.0\u2019) interface Fa0/0 ip address 10.1.1.1 255.255.255.0"),Object(a.b)("p",{parentName:"blockquote"},"In ","[9]",": print(result) None")),Object(a.b)("p",null,"For a function to return a value, use ",Object(a.b)("inlineCode",{parentName:"p"},"return")," operator."),Object(a.b)("h2",{id:"operator-return"},"Operator return"),Object(a.b)("p",null,"Operator ",Object(a.b)("inlineCode",{parentName:"p"},"return")," is used to return a value, and at the same time it exits the function. Function can return any Python object. By default, function always returns ",Object(a.b)("inlineCode",{parentName:"p"},"None"),"."),Object(a.b)("p",null,"In order for ",Object(a.b)("inlineCode",{parentName:"p"},"configure_intf")," function to return a value that can then be assigned to a variable, you must use ",Object(a.b)("inlineCode",{parentName:"p"},"return")," operator:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [10]: def configure_intf(intf_name, ip, mask):\n    ...:     config = f'interface {intf_name}\\nip address {ip} {mask}'\n    ...:     return config\n    ...:\n\nIn [11]: result = configure_intf('Fa0/0', '10.1.1.1', '255.255.255.0')\n\nIn [12]: print(result)\ninterface Fa0/0\nip address 10.1.1.1 255.255.255.0\n\nIn [13]: result\nOut[13]: 'interface Fa0/0\\nip address 10.1.1.1 255.255.255.0'\n")),Object(a.b)("p",null,"Now the result variable contains a line with commands to configure interface. In real life, function will almost always return some value."),Object(a.b)("p",null,"Another important aspect of ",Object(a.b)("inlineCode",{parentName:"p"},"return")," operator is that after ",Object(a.b)("inlineCode",{parentName:"p"},"return")," the function closes, meaning that the expressions that follow ",Object(a.b)("inlineCode",{parentName:"p"},"return")," are not executed."),Object(a.b)("p",null,"For example, in function below the line \xabConfiguration is ready\xbb will not be displayed because it stands after ",Object(a.b)("inlineCode",{parentName:"p"},"return"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [14]: def configure_intf(intf_name, ip, mask):\n    ...:     config = f'interface {intf_name}\\nip address {ip} {mask}'\n    ...:     return config\n    ...:     print('Configuration is ready')\n    ...:\n\nIn [15]: configure_intf('Fa0/0', '10.1.1.1', '255.255.255.0')\nOut[15]: 'interface Fa0/0\\nip address 10.1.1.1 255.255.255.0'\n")),Object(a.b)("p",null,"Function can return multiple values. In this case, they are separated by a comma after ",Object(a.b)("inlineCode",{parentName:"p"},"return")," operator. In fact, function returns tuple:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [16]: def configure_intf(intf_name, ip, mask):\n    ...:     config_intf = f'interface {intf_name}\\n'\n    ...:     config_ip = f'ip address {ip} {mask}'\n    ...:     return config_intf, config_ip\n    ...:\n\nIn [17]: result = configure_intf('Fa0/0', '10.1.1.1', '255.255.255.0')\n\nIn [18]: result\nOut[18]: ('interface Fa0/0\\n', 'ip address 10.1.1.1 255.255.255.0')\n\nIn [19]: type(result)\nOut[19]: tuple\n\nIn [20]: intf, ip_addr = configure_intf('Fa0/0', '10.1.1.1', '255.255.255.0')\n\nIn [21]: intf\nOut[21]: 'interface Fa0/0\\n'\n\nIn [22]: ip_addr\nOut[22]: 'ip address 10.1.1.1 255.255.255.0'\n")),Object(a.b)("h2",{id:"documentation-docstring"},"Documentation (docstring)"),Object(a.b)("p",null,"The first line in function definition is docstring, documentation string. This is a comment that is used to describe a function:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"In [23]: def configure_intf(intf_name, ip, mask):\n    ...:     '''\n    ...:     Fucntion generates interface configuration\n    ...:     '''\n    ...:     config_intf = f'interface {intf_name}\\n'\n    ...:     config_ip = f'ip address {ip} {mask}'\n    ...:     return config_intf, config_ip\n    ...:\n\nIn [24]: configure_intf?\nSignature: configure_intf(intf_name, ip, mask)\nDocstring: Fucntion generates interface configuration\nFile:      ~/repos/pyneng-examples-exercises/examples/06_control_structures/<ipython-input-23-2b2bd970db8f>\nType:      function\n")),Object(a.b)("p",null,"It is best to write short comments that describe function. For example, describe what function expects to input, what type of arguments should be and what will be the output. Besides, it is better to write a couple of sentences about what function does. This will help when in a month or two you will be trying to understand what function you wrote is doing."))}s.isMDXComponent=!0},281:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var i=t(0),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),s=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},f=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(t),f=i,d=p["".concat(o,".").concat(f)]||p[f]||b[f]||a;return t?r.a.createElement(d,c(c({ref:n},l),{},{components:t})):r.a.createElement(d,c({ref:n},l))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=t[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);