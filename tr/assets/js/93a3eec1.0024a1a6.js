(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{201:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(8),i=(t(0),t(281)),a={id:"work_with_csv_files",title:"Work With Csv Files",sidebar_label:"Work With Csv Files",slug:"work_with_csv_files",custom_edit_url:null},s={unversionedId:"python/csv_json_yaml/work_with_csv_files",id:"python/csv_json_yaml/work_with_csv_files",isDocsHomePage:!1,title:"Work With Csv Files",description:"CSV (comma-separated value) - a tabular data format (for example, it may be data from a table or data from a database).",source:"@site/docs/python/csv_json_yaml/1_work_with_csv.md",slug:"/python/csv_json_yaml/work_with_csv_files",permalink:"/tr/docs/python/csv_json_yaml/work_with_csv_files",editUrl:null,version:"current",sidebar_label:"Work With Csv Files",sidebar:"someSidebar",previous:{title:"Working With Csv Json Yaml Files",permalink:"/tr/docs/python/csv_json_yaml/working_with_csv_json_yaml_files"},next:{title:"Work With Json Files",permalink:"/tr/docs/python/csv_json_yaml/work_with_json_files"}},c=[{value:"Reading",id:"reading",children:[]},{value:"Writing",id:"writing",children:[{value:"DictWriter",id:"dictwriter",children:[]}]},{value:"Delimiter",id:"delimiter",children:[]}],l={toc:c};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"CSV (comma-separated value)")," - a tabular data format (for example, it may be data from a table or data from a database)."),Object(i.b)("p",null,"In this format, each line of a file is a line of a table. Despite format name the separator can be not only a comma. Formats with a different separator may have their own name, for example, TSV (tab separated values), however, the name CSV usually means any separators)."),Object(i.b)("p",null,"Example of a CSV file (sw_data.csv):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"hostname,vendor,model,location\nsw1,Cisco,3750,London\nsw2,Cisco,3850,Liverpool\nsw3,Cisco,3650,Liverpool\nsw4,Cisco,3650,London\n")),Object(i.b)("p",null,"The standard Python library has a csv module that allows working with files in CSV format."),Object(i.b)("h2",{id:"reading"},"Reading"),Object(i.b)("p",null,"Example of reading a file in CSV format (csv_read.py file):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"import csv\n\nwith open('sw_data.csv') as f:\n    reader = csv.reader(f)\n    for row in reader:\n        print(row)\n")),Object(i.b)("p",null,"The output is:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ python csv_read.py\n['hostname', 'vendor', 'model', 'location']\n['sw1', 'Cisco', '3750', 'London']\n['sw2', 'Cisco', '3850', 'Liverpool']\n['sw3', 'Cisco', '3650', 'Liverpool']\n['sw4', 'Cisco', '3650', 'London']\n")),Object(i.b)("p",null,"First list contains column names and remaining list contains the corresponding values."),Object(i.b)("p",null,"Note that ",Object(i.b)("inlineCode",{parentName:"p"},"csv.reader")," returns an iterator:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [1]: import csv\n\nIn [2]: with open('sw_data.csv') as f:\n   ...:     reader = csv.reader(f)\n   ...:     print(reader)\n   ...:\n<_csv.reader object at 0x10385b050>\n")),Object(i.b)("p",null,"If necessary it could be converted into a list in the following way:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"In [3]: with open('sw_data.csv') as f:\n   ...:     reader = csv.reader(f)\n   ...:     print(list(reader))\n   ...:\n[['hostname', 'vendor', 'model', 'location'], ['sw1', 'Cisco', '3750', 'London'], ['sw2', 'Cisco', '3850', 'Liverpool'], ['sw3', 'Cisco', '3650', 'Liverpool'], ['sw4', 'Cisco', '3650', 'London']]\n")),Object(i.b)("p",null,"Most often column headers are more convenient to get by a separate object. This can be done in this way (csv_read_headers.py file):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"import csv\n\nwith open('sw_data.csv') as f:\n    reader = csv.reader(f)\n    headers = next(reader)\n    print('Headers: ', headers)\n    for row in reader:\n        print(row)\n")),Object(i.b)("p",null,"Sometimes it is more convenient to get dictionaries in which keys are column names and values are column values."),Object(i.b)("p",null,"For this purpose, module has ",Object(i.b)("inlineCode",{parentName:"p"},"DictReader")," (csv_read_dict.py file):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"import csv\n\nwith open('sw_data.csv') as f:\n    reader = csv.DictReader(f)\n    for row in reader:\n        print(row)\n        print(row['hostname'], row['model'])\n")),Object(i.b)("p",null,"The output is:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ python csv_read_dict.py\n{'hostname': 'sw1', 'vendor': 'Cisco', 'model': '3750', 'location': 'London, Globe Str 1 '}\nsw1 3750\n{'hostname': 'sw2', 'vendor': 'Cisco', 'model': '3850', 'location': 'Liverpool'}\nsw2 3850\n{'hostname': 'sw3', 'vendor': 'Cisco', 'model': '3650', 'location': 'Liverpool'}\nsw3 3650\n{'hostname': 'sw4', 'vendor': 'Cisco', 'model': '3650', 'location': 'London, Grobe Str 1'}\nsw4 3650\n")),Object(i.b)("p",null,"Note"),Object(i.b)("p",null,"Prior to Python 3.8 OrderedDict type was returned, not dict."),Object(i.b)("h2",{id:"writing"},"Writing"),Object(i.b)("p",null,"Similarly, a csv module can be used to write data to file in CSV format (csv_write.py file):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"import csv\n\ndata = [['hostname', 'vendor', 'model', 'location'],\n        ['sw1', 'Cisco', '3750', 'London, Best str'],\n        ['sw2', 'Cisco', '3850', 'Liverpool, Better str'],\n        ['sw3', 'Cisco', '3650', 'Liverpool, Better str'],\n        ['sw4', 'Cisco', '3650', 'London, Best str']]\n\n\nwith open('sw_data_new.csv', 'w') as f:\n    writer = csv.writer(f)\n    for row in data:\n        writer.writerow(row)\n\nwith open('sw_data_new.csv') as f:\n    print(f.read())\n")),Object(i.b)("p",null,"In example above, strings from list are written to the file and then the content of file is displayed on standard output stream."),Object(i.b)("p",null,"The output will be as follows:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'$ python csv_write.py\nhostname,vendor,model,location\nsw1,Cisco,3750,"London, Best str"\nsw2,Cisco,3850,"Liverpool, Better str"\nsw3,Cisco,3650,"Liverpool, Better str"\nsw4,Cisco,3650,"London, Best str"\n')),Object(i.b)("p",null,"Note the interesting thing: strings in the last column are quoted and other values are not."),Object(i.b)("p",null,"This is because all strings in the last column have a comma. And quotes indicate what is an entire string. When a comma is inside quotation marks the csv module does not perceive it as a separator."),Object(i.b)("p",null,"Sometimes it\u2019s better to have all strings quoted. Of course, in this case, example is simple enough but when there are more values in the strings, the quotes indicate where value begins and ends."),Object(i.b)("p",null,"Csv module allows you to control this. For all strings to be written in a CSV file with quotes you should change script this way (csv_write_quoting.py file):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"import csv\n\n\ndata = [['hostname', 'vendor', 'model', 'location'],\n        ['sw1', 'Cisco', '3750', 'London, Best str'],\n        ['sw2', 'Cisco', '3850', 'Liverpool, Better str'],\n        ['sw3', 'Cisco', '3650', 'Liverpool, Better str'],\n        ['sw4', 'Cisco', '3650', 'London, Best str']]\n\n\nwith open('sw_data_new.csv', 'w') as f:\n    writer = csv.writer(f, quoting=csv.QUOTE_NONNUMERIC)\n    for row in data:\n        writer.writerow(row)\n\nwith open('sw_data_new.csv') as f:\n    print(f.read())\n")),Object(i.b)("p",null,"Now the output is this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'$ python csv_write_quoting.py\n"hostname","vendor","model","location"\n"sw1","Cisco","3750","London, Best str"\n"sw2","Cisco","3850","Liverpool, Better str"\n"sw3","Cisco","3650","Liverpool, Better str"\n"sw4","Cisco","3650","London, Best str"\n')),Object(i.b)("p",null,"Now all values are quoted. And because model number is given as a string in original list, it is quoted here as well."),Object(i.b)("p",null,"Besides ",Object(i.b)("inlineCode",{parentName:"p"},"writerow")," method, ",Object(i.b)("inlineCode",{parentName:"p"},"writerows")," method is supported. It accepts any iterable object."),Object(i.b)("p",null,"So, previous example can be written this way (csv_writerows.py file):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"import csv\n\ndata = [['hostname', 'vendor', 'model', 'location'],\n        ['sw1', 'Cisco', '3750', 'London, Best str'],\n        ['sw2', 'Cisco', '3850', 'Liverpool, Better str'],\n        ['sw3', 'Cisco', '3650', 'Liverpool, Better str'],\n        ['sw4', 'Cisco', '3650', 'London, Best str']]\n\n\nwith open('sw_data_new.csv', 'w') as f:\n    writer = csv.writer(f, quoting=csv.QUOTE_NONNUMERIC)\n    writer.writerows(data)\n\nwith open('sw_data_new.csv') as f:\n    print(f.read())\n")),Object(i.b)("h3",{id:"dictwriter"},"DictWriter"),Object(i.b)("p",null,"With ",Object(i.b)("inlineCode",{parentName:"p"},"DictWriter")," you can write dictionaries in CSV format."),Object(i.b)("p",null,"In general, ",Object(i.b)("inlineCode",{parentName:"p"},"DictWriter")," works as ",Object(i.b)("inlineCode",{parentName:"p"},"writer")," but since dictionaries are not ordered it is necessary to specify the order of columns in file. The ",Object(i.b)("inlineCode",{parentName:"p"},"fieldnames")," option is used for this purpose (csv_write_dict.py file):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"import csv\n\ndata = [{\n    'hostname': 'sw1',\n    'location': 'London',\n    'model': '3750',\n    'vendor': 'Cisco'\n}, {\n    'hostname': 'sw2',\n    'location': 'Liverpool',\n    'model': '3850',\n    'vendor': 'Cisco'\n}, {\n    'hostname': 'sw3',\n    'location': 'Liverpool',\n    'model': '3650',\n    'vendor': 'Cisco'\n}, {\n    'hostname': 'sw4',\n    'location': 'London',\n    'model': '3650',\n    'vendor': 'Cisco'\n}]\n\nwith open('csv_write_dictwriter.csv', 'w') as f:\n    writer = csv.DictWriter(\n        f, fieldnames=list(data[0].keys()), quoting=csv.QUOTE_NONNUMERIC)\n    writer.writeheader()\n    for d in data:\n        writer.writerow(d)\n")),Object(i.b)("h2",{id:"delimiter"},"Delimiter"),Object(i.b)("p",null,"Sometimes other values are used as a separator. In this case, it should be possible to tell module which separator to use."),Object(i.b)("p",null,"For example, if the file uses separator ",Object(i.b)("inlineCode",{parentName:"p"},";")," (sw_data2.csv file):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"hostname;vendor;model;location\nsw1;Cisco;3750;London\nsw2;Cisco;3850;Liverpool\nsw3;Cisco;3650;Liverpool\nsw4;Cisco;3650;London\n")),Object(i.b)("p",null,"Simply specify which separator is used in ",Object(i.b)("inlineCode",{parentName:"p"},"reader")," (csv_read_delimiter.py file):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"import csv\n\nwith open('sw_data2.csv') as f:\n    reader = csv.reader(f, delimiter=';')\n    for row in reader:\n        print(row)\n")))}p.isMDXComponent=!0},281:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},w=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(t),w=r,m=d["".concat(a,".").concat(w)]||d[w]||b[w]||i;return t?o.a.createElement(m,s(s({ref:n},l),{},{components:t})):o.a.createElement(m,s({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=w;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}w.displayName="MDXCreateElement"}}]);