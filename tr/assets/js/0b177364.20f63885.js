(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{281:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?r.a.createElement(f,l(l({ref:t},c),{},{components:n})):r.a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),o=(n(0),n(281)),i={id:"tasks",title:"Tasks",sidebar_label:"Tasks",slug:"tasks",custom_edit_url:null},l={unversionedId:"python/jinja2/tasks",id:"python/jinja2/tasks",isDocsHomePage:!1,title:"Tasks",description:"All tasks and additional files can be downloaded from repository.",source:"@site/docs/python/jinja2/6_tasks.md",slug:"/python/jinja2/tasks",permalink:"/tr/docs/python/jinja2/tasks",editUrl:null,version:"current",sidebar_label:"Tasks",sidebar:"someSidebar",previous:{title:"Further Reading",permalink:"/tr/docs/python/jinja2/further_reading"},next:{title:"Parsing Command Output With Textfsm",permalink:"/tr/docs/python/textfsm/parsing_command_output_with_textfsm"}},s=[{value:"Task 20.1",id:"task-201",children:[]},{value:"Task 20.2",id:"task-202",children:[]},{value:"Task 20.3",id:"task-203",children:[]},{value:"\u0417\u0430\u0434\u0430\u043d\u0438\u0435 20.4",id:"\u0437\u0430\u0434\u0430\u043d\u0438\u0435-204",children:[]},{value:"Task 20.5",id:"task-205",children:[]},{value:"Task 20.5a",id:"task-205a",children:[]}],c={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"All tasks and additional files can be downloaded from ",Object(o.b)("a",{parentName:"p",href:"https://github.com/natenka/pyneng-examples-exercises-en/"},"repository"),"."),Object(o.b)("p",null,"Warning"),Object(o.b)("p",null,"Starting from section \u201c4. Data types in Python\u201d there are automated tests for testing tasks. They help to check whether everything matches the task, and also give feedback on what does not correspond to the task. As a rule, after the first period of adaptation to tests, it becomes easier to do tasks with tests. Testing is done using the pyneng utility. ",Object(o.b)("a",{parentName:"p",href:"https://pyneng.readthedocs.io/en/latest/book/additional_info/pyneng.html#additional-info-pyneng"},"Learn more about how to work with the pyneng utility"),"."),Object(o.b)("h2",{id:"task-201"},"Task 20.1"),Object(o.b)("p",null,"Create generate_config function."),Object(o.b)("p",null,"Function parameters:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"template - path to the template file (for example, \u201ctemplates/for.txt\u201d)"),Object(o.b)("li",{parentName:"ul"},"data_dict - a dictionary with values to be substituted into the template")),Object(o.b)("p",null,"The function should return the generated configuration string."),Object(o.b)("p",null,"Check the operation of the function on the templates/for.txt template and data from the data_files/for.yml file."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'import yaml\n\n\n# function call should looks like\nif __name__ == "__main__":\n    data_file = "data_files/for.yml"\n    template_file = "templates/for.txt"\n    with open(data_file) as f:\n        data = yaml.safe_load(f)\n    print(generate_config(template_file, data))\n')),Object(o.b)("h2",{id:"task-202"},"Task 20.2"),Object(o.b)("p",null,"Create template templates/cisco_router_base.txt."),Object(o.b)("p",null,"The templates/cisco_router_base.txt template should include the content of the templates:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"templates/cisco_base.txt"),Object(o.b)("li",{parentName:"ul"},"templates/alias.txt"),Object(o.b)("li",{parentName:"ul"},"templates/eem_int_desc.txt")),Object(o.b)("p",null,"Template text cannot be copied."),Object(o.b)("p",null,"Test the template templates/cisco_router_base.txt using the generate_config function from task 20.1. Do not copy the code of the generate_config function."),Object(o.b)("p",null,"As data, use the information from the data_files/router_info.yml file."),Object(o.b)("h2",{id:"task-203"},"Task 20.3"),Object(o.b)("p",null,"Create a template templates/ospf.txt based on the OSPF configuration in the cisco_ospf.txt file. A configuration example is given to show the syntax."),Object(o.b)("p",null,"The template must be created manually by copying parts of the config into the corresponding template."),Object(o.b)("p",null,"What values should be variables:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"process number. Variable name - process")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"router-id. Variable name - router_id")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"reference-bandwidth. Variable name - ref_bw")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"interfaces on which to enable OSPF. The variable name is ospf_intf. In place of this variable, a list of dictionaries with the following keys is expected:"),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"name - interface name, like Fa0/1, Vlan10, Gi0/0"),Object(o.b)("li",{parentName:"ul"},"ip - interface IP address, like 10.0.1.1"),Object(o.b)("li",{parentName:"ul"},"area - zone number"),Object(o.b)("li",{parentName:"ul"},"passive - whether the interface is passive. Valid values: True or False"))))),Object(o.b)("p",null,"For all interfaces in the ospf_intf list, you need to generate the following lines:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"network x.x.x.x 0.0.0.0 area x\n")),Object(o.b)("p",null,"If the interface is passive, the line must be added for it:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"passive-interface x\n")),Object(o.b)("p",null,"For interfaces that are not passive, in interface configuration mode, you need to add the line:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"ip ospf hello-interval 1\n")),Object(o.b)("p",null,"All commands must be in the appropriate configuration mode."),Object(o.b)("p",null,"Check the resulting template templates/ospf.txt, against the data in the data_files/ospf.yml file, using the generate_config function from task 20.1. Do not copy the code of the generate_config function."),Object(o.b)("p",null,"The result should be a configuration of the following type (the commands in router ospf mode do not have to be in this order, the main thing is that they are in the correct config section):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"router ospf 10\n router-id 10.0.0.1\n auto-cost reference-bandwidth 20000\n network 10.255.0.1 0.0.0.0 area 0\n network 10.255.1.1 0.0.0.0 area 0\n network 10.255.2.1 0.0.0.0 area 0\n network 10.0.10.1 0.0.0.0 area 2\n network 10.0.20.1 0.0.0.0 area 2\n passive-interface Fa0/0.10\n passive-interface Fa0/0.20\ninterface Fa0/1\n ip ospf hello-interval 1\ninterface Fa0/1.100\n ip ospf hello-interval 1\ninterface Fa0/1.200\n ip ospf hello-interval 1\n")),Object(o.b)("h2",{id:"\u0437\u0430\u0434\u0430\u043d\u0438\u0435-204"},"\u0417\u0430\u0434\u0430\u043d\u0438\u0435 20.4"),Object(o.b)("p",null,"Create a template templates/add_vlan_to_switch.txt that will be used if you need to add a VLAN to the switch."),Object(o.b)("p",null,"The template must support the following features:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"add VLAN and VLAN name"),Object(o.b)("li",{parentName:"ul"},"adding VLANs as access, on the specified interface"),Object(o.b)("li",{parentName:"ul"},"adding VLANs to the list of allowed, on specified trunks")),Object(o.b)("p",null,"The template must be created manually by copying parts of the config into the corresponding template."),Object(o.b)("p",null,"If VLAN needs to be added as access, you need to configure the interface mode and add it to VLAN:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"interface Gi0/1\n switchport mode access\n switchport access vlan 5\n")),Object(o.b)("p",null,"For trunks, you only need to add VLANs to the allowed list:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"interface Gi0/10\n switchport trunk allowed vlan add 5\n")),Object(o.b)("p",null,"The variable names should be chosen based on the sample data in the data_files/add_vlan_to_switch.yaml file."),Object(o.b)("p",null,"Check the templates/add_vlan_to_switch.txt template against the data in data_files/add_vlan_to_switch.yaml using the generate_config function from task 20.1. Do not copy the code of the generate_config function."),Object(o.b)("h2",{id:"task-205"},"Task 20.5"),Object(o.b)("p",null,"Create templates templates/gre_ipsec_vpn_1.txt and templates/gre_ipsec_vpn_2.txt that generate IPsec over GRE configuration between two routers."),Object(o.b)("p",null,"The templates/gre_ipsec_vpn_1.txt template creates the configuration for one side of the tunnel, and templates gre_ipsec_vpn_2.txt for the other."),Object(o.b)("p",null,"Examples of the final configuration that should be generated from templates in the files: cisco_vpn_1.txt and cisco_vpn_2.txt."),Object(o.b)("p",null,"Templates must be created manually by copying parts of the config into the corresponding templates."),Object(o.b)("p",null,"Create a create_vpn_config function that uses these templates to generate a VPN configuration based on the data in the data dictionary."),Object(o.b)("p",null,"Function parameters:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"template1 - the name of the template file that creates the configuration for one side of the tunnel"),Object(o.b)("li",{parentName:"ul"},"template2 - the name of the template file that creates the configuration for the second side of the tunnel"),Object(o.b)("li",{parentName:"ul"},"data_dict - a dictionary with values to be substituted into templates")),Object(o.b)("p",null,"The function must return a tuple with two configurations (strings) that are derived from templates."),Object(o.b)("p",null,"Examples of VPN configurations that the create_vpn_config function should return in the cisco_vpn_1.txt and cisco_vpn_2.txt files."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"data = {\n    'tun_num': 10,\n    'wan_ip_1': '192.168.100.1',\n    'wan_ip_2': '192.168.100.2',\n    'tun_ip_1': '10.0.1.1 255.255.255.252',\n    'tun_ip_2': '10.0.1.2 255.255.255.252'\n}\n")),Object(o.b)("h2",{id:"task-205a"},"Task 20.5a"),Object(o.b)("p",null,"Create a configure_vpn function that uses the templates from task 20.5 to configure VPN on routers based on the data in the data dictionary."),Object(o.b)("p",null,"Function parameters:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"src_device_params - dictionary with connection parameters for device 1"),Object(o.b)("li",{parentName:"ul"},"dst_device_params - dictionary with connection parameters for device 2"),Object(o.b)("li",{parentName:"ul"},"src_template - a template that creates the configuration for side 1"),Object(o.b)("li",{parentName:"ul"},"dst_template - a template that creates the configuration for side 2"),Object(o.b)("li",{parentName:"ul"},"vpn_data_dict - a dictionary with values to be substituted into templates")),Object(o.b)("p",null,"The function should configure the VPN based on templates and data on each device using netmiko. The function returns a tuple with the output of commands from two routers (the output returned by the netmiko send_config_set method). The first element of the tuple is the output from the first device (string), the second element of the tuple is the output from the second device."),Object(o.b)("p",null,"In this task, the data dictionary does not specify the Tunnel interface number to use. The number must be determined independently based on information from the equipment. If the router does not have Tunnel interfaces, take the number 0, if there is, take the nearest free number, but the same for two routers."),Object(o.b)("p",null,"For example, if the src router has the following interfaces: Tunnel1, Tunnel4. And on the dst router are: Tunnel2, Tunnel3, Tunnel8. The first free number that is the same for two routers will be 5. And you will need to configure the Tunnel 5 interface."),Object(o.b)("p",null,"For this task, the test verifies that the function works on the first two devices from the devices.yaml file. And it checks that the output contains commands for configuring interfaces, but does not check the configured tunnel numbers and other commands. The tunnels must be configured, but the test has been simplified so that there are fewer constraints on the task."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"data = {\n    'tun_num': None,\n    'wan_ip_1': '192.168.100.1',\n    'wan_ip_2': '192.168.100.2',\n    'tun_ip_1': '10.0.1.1 255.255.255.252',\n    'tun_ip_2': '10.0.1.2 255.255.255.252'\n}\n")))}p.isMDXComponent=!0}}]);