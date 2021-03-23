(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{211:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return s})),n.d(e,"metadata",(function(){return i})),n.d(e,"toc",(function(){return l})),n.d(e,"default",(function(){return c}));var a=n(3),r=n(8),o=(n(0),n(281)),s={id:"work_with_json_files",title:"Work With Json Files",sidebar_label:"Work With Json Files",slug:"work_with_json_files",custom_edit_url:null},i={unversionedId:"python/17_csv_json_yaml/work_with_json_files",id:"python/17_csv_json_yaml/work_with_json_files",isDocsHomePage:!1,title:"Work With Json Files",description:"JSON (JavaScript Object Notation) - a text format for data storage and exchange.",source:"@site/docs/python/17_csv_json_yaml/2_work_with_json.md",slug:"/python/17_csv_json_yaml/work_with_json_files",permalink:"/tr/docs/python/17_csv_json_yaml/work_with_json_files",editUrl:null,version:"current",sidebar_label:"Work With Json Files",sidebar:"someSidebar",previous:{title:"Work With Csv Files",permalink:"/tr/docs/python/17_csv_json_yaml/work_with_csv_files"},next:{title:"Work With Yaml Files",permalink:"/tr/docs/python/17_csv_json_yaml/work_with_yaml_files"}},l=[{value:"Reading",id:"reading",children:[{value:"<code>json.load</code>",id:"jsonload",children:[]},{value:"<code>json.loads</code>",id:"jsonloads",children:[]}]},{value:"Writing",id:"writing",children:[{value:"json.dumps()",id:"jsondumps",children:[]},{value:"<code>json.dump</code>",id:"jsondump",children:[]},{value:"Additional parameters of write methods",id:"additional-parameters-of-write-methods",children:[]},{value:"Changing data type",id:"changing-data-type",children:[]},{value:"Limitation on data types",id:"limitation-on-data-types",children:[]}]}],p={toc:l};function c(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"JSON (JavaScript Object Notation)")," - a text format for data storage and exchange."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://ru.wikipedia.org/wiki/JSON"},"JSON")," syntax is very similar to Python and is user-friendly."),Object(o.b)("p",null,"As for CSV, Python has a module that allows easy writing and reading of data in JSON format."),Object(o.b)("h2",{id:"reading"},"Reading"),Object(o.b)("p",null,"File sw_templates.json:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{\n  "access": [\n    "switchport mode access",\n    "switchport access vlan",\n    "switchport nonegotiate",\n    "spanning-tree portfast",\n    "spanning-tree bpduguard enable"\n  ],\n  "trunk": [\n    "switchport trunk encapsulation dot1q",\n    "switchport mode trunk",\n    "switchport trunk native vlan 999",\n    "switchport trunk allowed vlan"\n  ]\n}\n')),Object(o.b)("p",null,"There are two methods for reading in json module:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"json.load")," - method reads JSON file and returns Python objects"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"json.loads")," - method reads string in JSON format and returns Python objects")),Object(o.b)("h3",{id:"jsonload"},Object(o.b)("inlineCode",{parentName:"h3"},"json.load")),Object(o.b)("p",null,"Reading JSON file to Python object (json_read_load.py file):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"import json\n\nwith open('sw_templates.json') as f:\n    templates = json.load(f)\n\nprint(templates)\n\nfor section, commands in templates.items():\n    print(section)\n    print('\\n'.join(commands))\n")),Object(o.b)("p",null,"The output will be as follows:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ python json_read_load.py\n{'access': ['switchport mode access', 'switchport access vlan', 'switchport nonegotiate', 'spanning-tree portfast', 'spanning-tree bpduguard enable'], 'trunk': ['switchport trunk encapsulation dot1q', 'switchport mode trunk', 'switchport trunk native vlan 999', 'switchport trunk allowed vlan']}\naccess\nswitchport mode access\nswitchport access vlan\nswitchport nonegotiate\nspanning-tree portfast\nspanning-tree bpduguard enable\ntrunk\nswitchport trunk encapsulation dot1q\nswitchport mode trunk\nswitchport trunk native vlan 999\nswitchport trunk allowed vlan\n")),Object(o.b)("h3",{id:"jsonloads"},Object(o.b)("inlineCode",{parentName:"h3"},"json.loads")),Object(o.b)("p",null,"Reading JSON string to Python object (json_read_loads.py file):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"import json\n\nwith open('sw_templates.json') as f:\n    file_content = f.read()\n    templates = json.loads(file_content)\n\nprint(templates)\n\nfor section, commands in templates.items():\n    print(section)\n    print('\\n'.join(commands))\n")),Object(o.b)("p",null,"The result will be similar to previous output."),Object(o.b)("h2",{id:"writing"},"Writing"),Object(o.b)("p",null,"Writing a file in JSON format is also fairly easy."),Object(o.b)("p",null,"There are also two methods for writing information in JSON format in json module:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"json.dump")," - method writes Python object to file in JSON format"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"json.dumps")," - method returns string in JSON format")),Object(o.b)("h3",{id:"jsondumps"},"json.dumps()"),Object(o.b)("p",null,"Convert object to string in JSON format (json_write_dumps.py):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"import json\n\ntrunk_template = [\n    'switchport trunk encapsulation dot1q', 'switchport mode trunk',\n    'switchport trunk native vlan 999', 'switchport trunk allowed vlan'\n]\n\naccess_template = [\n    'switchport mode access', 'switchport access vlan',\n    'switchport nonegotiate', 'spanning-tree portfast',\n    'spanning-tree bpduguard enable'\n]\n\nto_json = {'trunk': trunk_template, 'access': access_template}\n\nwith open('sw_templates.json', 'w') as f:\n    f.write(json.dumps(to_json))\n\nwith open('sw_templates.json') as f:\n    print(f.read())\n")),Object(o.b)("p",null,"Method ",Object(o.b)("inlineCode",{parentName:"p"},"json.dumps")," is suitable for situations where you want to return a string in JSON format. For example, to pass it to the API."),Object(o.b)("h3",{id:"jsondump"},Object(o.b)("inlineCode",{parentName:"h3"},"json.dump")),Object(o.b)("p",null,"Write a Python object to a JSON file (json_write_dump.py file):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"import json\n\ntrunk_template = [\n    'switchport trunk encapsulation dot1q', 'switchport mode trunk',\n    'switchport trunk native vlan 999', 'switchport trunk allowed vlan'\n]\n\naccess_template = [\n    'switchport mode access', 'switchport access vlan',\n    'switchport nonegotiate', 'spanning-tree portfast',\n    'spanning-tree bpduguard enable'\n]\n\nto_json = {'trunk': trunk_template, 'access': access_template}\n\nwith open('sw_templates.json', 'w') as f:\n    json.dump(to_json, f)\n\nwith open('sw_templates.json') as f:\n    print(f.read())\n")),Object(o.b)("p",null,"When you want to write information in JSON format into a file, it is better to use ",Object(o.b)("inlineCode",{parentName:"p"},"dump")," method."),Object(o.b)("h3",{id:"additional-parameters-of-write-methods"},"Additional parameters of write methods"),Object(o.b)("p",null,"Methods ",Object(o.b)("inlineCode",{parentName:"p"},"dump")," and ",Object(o.b)("inlineCode",{parentName:"p"},"dumps")," can pass additional parameters to manage the output format."),Object(o.b)("p",null,"By default, these methods write information in a compact view. As a rule, when data is used by other programs, visual presentation of data is not important. If data in file needs to be read by person, this format is not very convenient to perceive. Fortunately, ",Object(o.b)("inlineCode",{parentName:"p"},"json")," module allows you to manage such things."),Object(o.b)("p",null,"By passing additional parameters to ",Object(o.b)("inlineCode",{parentName:"p"},"dump")," method (or ",Object(o.b)("inlineCode",{parentName:"p"},"dumps")," method) you can get a more readable output (json_write_indent.py file):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"import json\n\ntrunk_template = [\n    'switchport trunk encapsulation dot1q', 'switchport mode trunk',\n    'switchport trunk native vlan 999', 'switchport trunk allowed vlan'\n]\n\naccess_template = [\n    'switchport mode access', 'switchport access vlan',\n    'switchport nonegotiate', 'spanning-tree portfast',\n    'spanning-tree bpduguard enable'\n]\n\nto_json = {'trunk': trunk_template, 'access': access_template}\n\nwith open('sw_templates.json', 'w') as f:\n    json.dump(to_json, f, sort_keys=True, indent=2)\n\nwith open('sw_templates.json') as f:\n    print(f.read())\n")),Object(o.b)("p",null,"Now the content of sw_templates.json file is:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{\n  "access": [\n    "switchport mode access",\n    "switchport access vlan",\n    "switchport nonegotiate",\n    "spanning-tree portfast",\n    "spanning-tree bpduguard enable"\n  ],\n  "trunk": [\n    "switchport trunk encapsulation dot1q",\n    "switchport mode trunk",\n    "switchport trunk native vlan 999",\n    "switchport trunk allowed vlan"\n  ]\n}\n')),Object(o.b)("h3",{id:"changing-data-type"},"Changing data type"),Object(o.b)("p",null,"Another important aspect of data conversion to JSON format is that data will not always be the same type as source data in Python."),Object(o.b)("p",null,"For example, when you write a tuple to JSON it becomes a list:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [1]: import json\n\nIn [2]: trunk_template = ('switchport trunk encapsulation dot1q',\n   ...:                   'switchport mode trunk',\n   ...:                   'switchport trunk native vlan 999',\n   ...:                   'switchport trunk allowed vlan')\n\nIn [3]: print(type(trunk_template))\n<class 'tuple'>\n\nIn [4]: with open('trunk_template.json', 'w') as f:\n   ...:     json.dump(trunk_template, f, sort_keys=True, indent=2)\n   ...:\n\nIn [5]: cat trunk_template.json\n[\n  \"switchport trunk encapsulation dot1q\",\n  \"switchport mode trunk\",\n  \"switchport trunk native vlan 999\",\n  \"switchport trunk allowed vlan\"\n]\nIn [6]: templates = json.load(open('trunk_template.json'))\n\nIn [7]: type(templates)\nOut[7]: list\n\nIn [8]: print(templates)\n['switchport trunk encapsulation dot1q', 'switchport mode trunk', 'switchport trunk native vlan 999', 'switchport trunk allowed vlan']\n")),Object(o.b)("p",null,"This is because JSON uses different data types and does not have matches for all Python data types."),Object(o.b)("p",null,"Python data conversion table to JSON:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Python"),Object(o.b)("th",{parentName:"tr",align:null},"JSON"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"dict"),Object(o.b)("td",{parentName:"tr",align:null},"object")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"list, tuple"),Object(o.b)("td",{parentName:"tr",align:null},"array")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"str"),Object(o.b)("td",{parentName:"tr",align:null},"string")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"int, float"),Object(o.b)("td",{parentName:"tr",align:null},"number")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"True"),Object(o.b)("td",{parentName:"tr",align:null},"true")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"False"),Object(o.b)("td",{parentName:"tr",align:null},"false")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"None"),Object(o.b)("td",{parentName:"tr",align:null},"null")))),Object(o.b)("p",null,"JSON conversion table to Python data:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"JSON"),Object(o.b)("th",{parentName:"tr",align:null},"Python"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"object"),Object(o.b)("td",{parentName:"tr",align:null},"dict")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"array"),Object(o.b)("td",{parentName:"tr",align:null},"list")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},"str")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"number (int)"),Object(o.b)("td",{parentName:"tr",align:null},"int")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"number (real)"),Object(o.b)("td",{parentName:"tr",align:null},"float")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"true"),Object(o.b)("td",{parentName:"tr",align:null},"True")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"false"),Object(o.b)("td",{parentName:"tr",align:null},"False")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"null"),Object(o.b)("td",{parentName:"tr",align:null},"None")))),Object(o.b)("h3",{id:"limitation-on-data-types"},"Limitation on data types"),Object(o.b)("p",null,"It\u2019s not possible to write a dictionary in JSON format if it has tuples as a keys."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [23]: to_json = {('trunk', 'cisco'): trunk_template, 'access': access_template}\n\nIn [24]: with open('sw_templates.json', 'w') as f:\n    ...:     json.dump(to_json, f)\n    ...:\n...\nTypeError: key ('trunk', 'cisco') is not a string\n")),Object(o.b)("p",null,"By using additional parameter you can ignore such keys:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'In [25]: to_json = {(\'trunk\', \'cisco\'): trunk_template, \'access\': access_template}\n\nIn [26]: with open(\'sw_templates.json\', \'w\') as f:\n    ...:     json.dump(to_json, f, skipkeys=True)\n    ...:\n    ...:\n\nIn [27]: cat sw_templates.json\n{"access": ["switchport mode access", "switchport access vlan", "switchport nonegotiate", "spanning-tree portfast", "spanning-tree bpduguard enable"]}\n')),Object(o.b)("p",null,"Beside that, dictionary keys can only be strings in JSON. But if numbers are used in Python dictionary there will be no error. But conversion from numbers to strings will take place:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'In [28]: d = {1:100, 2:200}\n\nIn [29]: json.dumps(d)\nOut[29]: \'{"1": 100, "2": 200}\'\n')),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://pyneng.readthedocs.io/en/latest/book/17_serialization/yaml.html"},"Next "),Object(o.b)("a",{parentName:"p",href:"https://pyneng.readthedocs.io/en/latest/book/17_serialization/csv.html"}," Previous")))}c.isMDXComponent=!0},281:function(t,e,n){"use strict";n.d(e,"a",(function(){return b})),n.d(e,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=r.a.createContext({}),c=function(t){var e=r.a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},b=function(t){var e=c(t.components);return r.a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},u=r.a.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),b=c(n),u=a,m=b["".concat(s,".").concat(u)]||b[u]||d[u]||o;return n?r.a.createElement(m,i(i({ref:e},p),{},{components:n})):r.a.createElement(m,i({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);