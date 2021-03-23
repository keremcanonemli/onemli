(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),l=n(8),o=(n(0),n(280)),i={id:"textfsm_cli_table",title:"Textfsm Cli Table",sidebar_label:"21.5 Textfsm Cli Table",slug:"textfsm_cli_table",custom_edit_url:null},r={unversionedId:"python/textfsm/textfsm_cli_table",id:"python/textfsm/textfsm_cli_table",isDocsHomePage:!1,title:"Textfsm Cli Table",description:"With TextFSM it is possible to process output of commands and get a structured result. However, it is still necessary to manually specify which template will handle show commands each time TextFSM is used.",source:"@site/docs/python/textfsm/5_textfsm_cli_table.md",slug:"/python/textfsm/textfsm_cli_table",permalink:"/docs/python/textfsm/textfsm_cli_table",editUrl:null,version:"current",sidebar_label:"21.5 Textfsm Cli Table",sidebar:"someSidebar",previous:{title:"Examples Of Textfsm Usage",permalink:"/docs/python/textfsm/examples_of_textfsm_usage"},next:{title:"Further Reading",permalink:"/docs/python/textfsm/further_reading"}},c=[{value:"How to use CLI table",id:"how-to-use-cli-table",children:[]}],s={toc:c};function p(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"With TextFSM it is possible to process output of commands and get a structured result. However, it is still necessary to manually specify which template will handle show commands each time TextFSM is used."),Object(o.b)("p",null,"It would be much more convenient to have some mapping between command and template so that you can write a common script that performs connections to devices, sends commands, chooses template and parse output according to template."),Object(o.b)("p",null,"TextFSM has such feature. To use it, you should create a file that describes mapping between commands and templates. In TextFSM it is called ",Object(o.b)("inlineCode",{parentName:"p"},"index"),"."),Object(o.b)("p",null,"This file should be in a directory with templates and should have this format:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"first line - column names"),Object(o.b)("li",{parentName:"ul"},"every next line is a pattern match to a command"),Object(o.b)("li",{parentName:"ul"},"mandatory columns with fixed position (mandatory first and last, respectively):",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"first column - names of templates"),Object(o.b)("li",{parentName:"ul"},"last column - the corresponding command. This column uses a special format to describe that a command may not be fully written"))),Object(o.b)("li",{parentName:"ul"},"other columns are optional",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"in example below there are columns Hostname, Vendor. They allow you to refine your device information to determine which template to use. For example, ",Object(o.b)("em",{parentName:"li"},"show version")," command may be in Cisco and HP devices. Of course, having only commands are not sufficient to determine which template to use. In this case, you can pass information about the type of equipment used with command and then you can define the correct template."))),Object(o.b)("li",{parentName:"ul"},"all columns except the first column support regular expressions. Regular expressions are not supported inside ",Object(o.b)("inlineCode",{parentName:"li"},"[[]]"))),Object(o.b)("p",null,"Example of index file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"Template, Hostname, Vendor, Command\nsh_cdp_n_det.template, .*, Cisco, sh[[ow]] cdp ne[[ighbors]] de[[tail]]\nsh_clock.template, .*, Cisco, sh[[ow]] clo[[ck]]\nsh_ip_int_br.template, .*, Cisco, sh[[ow]] ip int[[erface]] br[[ief]]\nsh_ip_route_ospf.template, .*, Cisco, sh[[ow]] ip rou[[te]] o[[spf]]\n")),Object(o.b)("p",null,"Note how commands are written: ",Object(o.b)("inlineCode",{parentName:"p"},"sh[[ow]] ip int[[erface]] br[[ief]]"),". Record will be converted to ",Object(o.b)("inlineCode",{parentName:"p"},"sh((ow)?)? ip int((erface)?)? br((ief)?)?"),". This means that TextFSM will be able to determine which template to use even if command is not fully written. For example, such command variants will work:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"sh ip int br"),Object(o.b)("li",{parentName:"ul"},"show ip inter bri")),Object(o.b)("h2",{id:"how-to-use-cli-table"},"How to use CLI table"),Object(o.b)("p",null,"Let\u2019s see how to use ",Object(o.b)("inlineCode",{parentName:"p"},"clitable")," class and index file. ",Object(o.b)("inlineCode",{parentName:"p"},"templates")," directory contains such templates and index file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"sh_cdp_n_det.template\nsh_clock.template\nsh_ip_int_br.template\nsh_ip_route_ospf.template\nindex\n")),Object(o.b)("p",null,"First we try to work with CLI Table in ipython to see what features this class has and then we look at the final script."),Object(o.b)("p",null,"First, we import ",Object(o.b)("inlineCode",{parentName:"p"},"clitable")," class:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [1]: from textfsm import clitable\n")),Object(o.b)("p",null,"Warning"),Object(o.b)("p",null,"There are different ways to import ",Object(o.b)("inlineCode",{parentName:"p"},"clitable")," depending on textfsm version:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"import clitable")," for version <= 0.4.1"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"from textfsm import clitable")," for version >= 1.1.0")),Object(o.b)("p",null,"See textfsm version: ",Object(o.b)("inlineCode",{parentName:"p"},"pip show textfsm"),"."),Object(o.b)("p",null,"We will check ",Object(o.b)("inlineCode",{parentName:"p"},"clitable")," on the last example from previous section - \u201cshow ip route ospf\u201d command. Read the output that is stored in output/sh_ip_route_ospf.txt file to string:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [2]: with open('output/sh_ip_route_ospf.txt') as f:\n   ...:     output_sh_ip_route_ospf = f.read()\n   ...:\n")),Object(o.b)("p",null,"First, you should initialize a class by giving it name of file in which mapping between templates and commands is stored, and specify name of directory in which templates are stored:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [3]: cli_table = clitable.CliTable('index', 'templates')\n")),Object(o.b)("p",null,"Specify which command should be passed and specify additional attributes that will help to identify template. To do this, you should create a dictionary in which keys are names of columns that are defined in index file. In this case, it is not necessary to specify vendor name, since \u201csh ip route ospf\u201d command corresponds to only one template."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [4]: attributes = {'Command': 'show ip route ospf' , 'Vendor': 'Cisco'}\n")),Object(o.b)("p",null,"Command output and dictionary with parameters should be passed to ParseCmd method:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [5]: cli_table.ParseCmd(output_sh_ip_route_ospf, attributes)\n")),Object(o.b)("p",null,"As a result we have processed output of \u201csh ip route ospf\u201d command in cli_table object."),Object(o.b)("p",null,"cli_table methods (to see all methods, call dir(cli_table)):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [6]: cli_table.\ncli_table.AddColumn        cli_table.NewRow           cli_table.index            cli_table.size\ncli_table.AddKeys          cli_table.ParseCmd         cli_table.index_file       cli_table.sort\ncli_table.Append           cli_table.ReadIndex        cli_table.next             cli_table.superkey\ncli_table.CsvToTable       cli_table.Remove           cli_table.raw              cli_table.synchronised\ncli_table.FormattedTable   cli_table.Reset            cli_table.row              cli_table.table\ncli_table.INDEX            cli_table.RowWith          cli_table.row_class        cli_table.template_dir\ncli_table.KeyValue         cli_table.extend           cli_table.row_index\ncli_table.LabelValueTable  cli_table.header           cli_table.separator\n")),Object(o.b)("p",null,"For example, if you call ",Object(o.b)("inlineCode",{parentName:"p"},"print(cli_table)")," you get this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [7]: print(cli_table)\nNetwork, Mask, Distance, Metric, NextHop\n10.0.24.0, /24, 110, 20, ['10.0.12.2']\n10.0.34.0, /24, 110, 20, ['10.0.13.3']\n10.2.2.2, /32, 110, 11, ['10.0.12.2']\n10.3.3.3, /32, 110, 11, ['10.0.13.3']\n10.4.4.4, /32, 110, 21, ['10.0.13.3', '10.0.12.2', '10.0.14.4']\n10.5.35.0, /24, 110, 20, ['10.0.13.3']\n")),Object(o.b)("p",null,"FormattedTable method produces a table output:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [8]: print(cli_table.FormattedTable())\n Network    Mask  Distance  Metric  NextHop\n====================================================================\n 10.0.24.0  /24   110       20      10.0.12.2\n 10.0.34.0  /24   110       20      10.0.13.3\n 10.2.2.2   /32   110       11      10.0.12.2\n 10.3.3.3   /32   110       11      10.0.13.3\n 10.4.4.4   /32   110       21      10.0.13.3, 10.0.12.2, 10.0.14.4\n 10.5.35.0  /24   110       20      10.0.13.3\n")),Object(o.b)("p",null,"This can be useful for displaying information."),Object(o.b)("p",null,"To get a structured output from cli_table object, such as a list of lists, you have to refer to object in this way:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [9]: data_rows = [list(row) for row in cli_table]\n\nIn [11]: data_rows\nOut[11]:\n[['10.0.24.0', '/24', '110', '20', ['10.0.12.2']],\n ['10.0.34.0', '/24', '110', '20', ['10.0.13.3']],\n ['10.2.2.2', '/32', '110', '11', ['10.0.12.2']],\n ['10.3.3.3', '/32', '110', '11', ['10.0.13.3']],\n ['10.4.4.4', '/32', '110', '21', ['10.0.13.3', '10.0.12.2', '10.0.14.4']],\n ['10.5.35.0', '/24', '110', '20', ['10.0.13.3']]]\n")),Object(o.b)("p",null,"You can get column names separately:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [12]: header = list(cli_table.header)\n\nIn [14]: header\nOut[14]: ['Network', 'Mask', 'Distance', 'Metric', 'NextHop']\n")),Object(o.b)("p",null,"The output is now similar to that of the previous section."),Object(o.b)("p",null,"Assemble everything into one script (textfsm_clitable.py file):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"import clitable\n\noutput_sh_ip_route_ospf = open('output/sh_ip_route_ospf.txt').read()\n\ncli_table = clitable.CliTable('index', 'templates')\n\nattributes = {'Command': 'show ip route ospf' , 'Vendor': 'Cisco'}\n\ncli_table.ParseCmd(output_sh_ip_route_ospf, attributes)\nprint('CLI Table output:\\n', cli_table)\n\nprint('Formatted Table:\\n', cli_table.FormattedTable())\n\ndata_rows = [list(row) for row in cli_table]\nheader = list(cli_table.header)\n\nprint(header)\nfor row in data_rows:\n    print(row)\n")),Object(o.b)("p",null,"In exercises to this section there will be a task to combine described procedure into a function and task to get a list of dictionaries."),Object(o.b)("p",null,"The output will be:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ python textfsm_clitable.py\nCLI Table output:\nNetwork, Mask, Distance, Metric, NextHop\n10.0.24.0, /24, 110, 20, ['10.0.12.2']\n10.0.34.0, /24, 110, 20, ['10.0.13.3']\n10.2.2.2, /32, 110, 11, ['10.0.12.2']\n10.3.3.3, /32, 110, 11, ['10.0.13.3']\n10.4.4.4, /32, 110, 21, ['10.0.13.3', '10.0.12.2', '10.0.14.4']\n10.5.35.0, /24, 110, 20, ['10.0.13.3']\n\nFormatted Table:\n Network    Mask  Distance  Metric  NextHop\n====================================================================\n 10.0.24.0  /24   110       20      10.0.12.2\n 10.0.34.0  /24   110       20      10.0.13.3\n 10.2.2.2   /32   110       11      10.0.12.2\n 10.3.3.3   /32   110       11      10.0.13.3\n 10.4.4.4   /32   110       21      10.0.13.3, 10.0.12.2, 10.0.14.4\n 10.5.35.0  /24   110       20      10.0.13.3\n\n['Network', 'Mask', 'Distance', 'Metric', 'NextHop']\n['10.0.24.0', '/24', '110', '20', ['10.0.12.2']]\n['10.0.34.0', '/24', '110', '20', ['10.0.13.3']]\n['10.2.2.2', '/32', '110', '11', ['10.0.12.2']]\n['10.3.3.3', '/32', '110', '11', ['10.0.13.3']]\n['10.4.4.4', '/32', '110', '21', ['10.0.13.3', '10.0.12.2', '10.0.14.4']]\n['10.5.35.0', '/24', '110', '20', ['10.0.13.3']]\n")),Object(o.b)("p",null,"Now with TextFSM it is possible not only to get a structured output, but also to automatically determine which template to use by command and optional arguments."))}p.isMDXComponent=!0},280:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),l=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=l.a.createContext({}),p=function(e){var t=l.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},b=function(e){var t=p(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return n?l.a.createElement(d,r(r({ref:t},s),{},{components:n})):l.a.createElement(d,r({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var s=2;s<o;s++)i[s]=n[s];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);