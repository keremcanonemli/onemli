(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{242:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return i})),n.d(e,"metadata",(function(){return o})),n.d(e,"toc",(function(){return l})),n.d(e,"default",(function(){return u}));var r=n(3),a=n(8),s=(n(0),n(280)),i={id:"tasks",title:"Tasks",sidebar_label:"4.13 Tasks",slug:"tasks",custom_edit_url:null},o={unversionedId:"python/data_structures/tasks",id:"python/data_structures/tasks",isDocsHomePage:!1,title:"Tasks",description:"All tasks and additional files can be downloaded from repository.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/python/data_structures/13_tasks.md",slug:"/python/data_structures/tasks",permalink:"/tr/docs/python/data_structures/tasks",editUrl:null,version:"current",sidebar_label:"4.13 Tasks",sidebar:"someSidebar",previous:{title:"Further Reading",permalink:"/tr/docs/python/data_structures/further_reading"},next:{title:"Basic Scripts",permalink:"/tr/docs/python/basic_scripts/basic_scripts"}},l=[{value:"Task 4.1",id:"task-41",children:[]},{value:"Task 4.2",id:"task-42",children:[]},{value:"Task 4.3",id:"task-43",children:[]},{value:"Task 4.4",id:"task-44",children:[]},{value:"Task 4.5",id:"task-45",children:[]},{value:"Task 4.6",id:"task-46",children:[]},{value:"Task 4.7",id:"task-47",children:[]},{value:"Task 4.8",id:"task-48",children:[]}],c={toc:l};function u(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(s.b)("wrapper",Object(r.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(s.b)("p",null,"All tasks and additional files can be downloaded from ",Object(s.b)("a",{parentName:"p",href:"https://github.com/natenka/pyneng-examples-exercises-en/"},"repository"),"."),Object(s.b)("p",null,"Warning"),Object(s.b)("p",null,"Starting from section \u201c4. Data types in Python\u201d there are automated tests for testing tasks. They help to check whether everything matches the task, and also give feedback on what does not correspond to the task. As a rule, after the first period of adaptation to tests, it becomes easier to do tasks with tests. Testing is done using the pyneng utility. ",Object(s.b)("a",{parentName:"p",href:"https://pyneng.readthedocs.io/en/latest/book/additional_info/pyneng.html#additional-info-pyneng"},"Learn more about how to work with the pyneng utility"),"."),Object(s.b)("p",null,"Note"),Object(s.b)("p",null,"In section 4, the tests can be easily \u201ctricked\u201d into making the correct output without getting results from initial data using Python. This does not mean that the task was done correctly, it is just that at this stage it is difficult otherwise test the result."),Object(s.b)("h2",{id:"task-41"},"Task 4.1"),Object(s.b)("p",null,"Using the prepared nat string, get a new string where the FastEthernet interface is replaced with GigabitEthernet. Print the resulting new string to the standard output (stdout) using print."),Object(s.b)("p",null,"Restriction: All tasks must be done using the topics covered in this and previous chapters."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'nat = "ip nat inside source list ACL interface FastEthernet0/1 overload"\n')),Object(s.b)("h2",{id:"task-42"},"Task 4.2"),Object(s.b)("p",null,"Convert string in mac variable from XXXX:XXXX:XXXX format to XXXX.XXXX.XXXX format. Print the resulting new string to the standard output (stdout) using print."),Object(s.b)("p",null,"Restriction: All tasks must be done using the topics covered in this and previous chapters."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'mac = "AAAA:BBBB:CCCC"\n')),Object(s.b)("h2",{id:"task-43"},"Task 4.3"),Object(s.b)("p",null,"Get the following list of VLANs from the config string: ",Object(s.b)("inlineCode",{parentName:"p"},'["1", "3", "10", "20", "30", "100"]')),Object(s.b)("p",null,"Write the resulting list to the result variable. (this is the variable that will be checked in the test)"),Object(s.b)("p",null,"Print the resulting list to the standard output (stdout) using print."),Object(s.b)("p",null,"Here is a very important point that you need to get exactly the list (data type), and not, for example, a string that looks like the list shown."),Object(s.b)("p",null,"Restriction: All tasks must be done using the topics covered in this and previous chapters."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'config = "switchport trunk allowed vlan 1,3,10,20,30,100"\n')),Object(s.b)("h2",{id:"task-44"},"Task 4.4"),Object(s.b)("p",null,"Vlans list is a list of VLANs collected from all devices on the network, therefore there are duplicate VLAN numbers in the list."),Object(s.b)("p",null,"Get a new list of unique VLAN numbers from the vlans list, sorted in ascending order of numbers. To get the final list, you cannot delete specific vlans manually."),Object(s.b)("p",null,"Write the resulting list to the result variable. (this is the variable that will be checked in the test)"),Object(s.b)("p",null,"Print the resulting list to the standard output (stdout) using print."),Object(s.b)("p",null,"Restriction: All tasks must be done using the topics covered in this and previous chapters."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"vlans = [10, 20, 30, 1, 2, 100, 10, 30, 3, 4, 10]\n")),Object(s.b)("h2",{id:"task-45"},"Task 4.5"),Object(s.b)("p",null,"From the strings command1 and command2, get a list of VLANs that exist in both command1 and command2 (intersection)."),Object(s.b)("p",null,"In this case, the result should be a list: ",Object(s.b)("inlineCode",{parentName:"p"},"['1', '3', '8']"),"."),Object(s.b)("p",null,"Write the resulting list to the result variable. (this is the variable that will be checked in the test)"),Object(s.b)("p",null,"Print the resulting list to the standard output (stdout) using print."),Object(s.b)("p",null,"Restriction: All tasks must be done using the topics covered in this and previous chapters."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'command1 = "switchport trunk allowed vlan 1,2,3,5,8"\ncommand2 = "switchport trunk allowed vlan 1,3,8,9"\n')),Object(s.b)("h2",{id:"task-46"},"Task 4.6"),Object(s.b)("p",null,"Process the ospf_route string and print the information to the stdout as follows:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"Prefix                10.0.24.0/24\nAD/Metric             110/41\nNext-Hop              10.0.13.3\nLast update           3d18h\nOutbound Interface    FastEthernet0/0\n")),Object(s.b)("p",null,"Restriction: All tasks must be done using the topics covered in this and previous chapters."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'ospf_route = "       10.0.24.0/24 [110/41] via 10.0.13.3, 3d18h, FastEthernet0/0"\n')),Object(s.b)("h2",{id:"task-47"},"Task 4.7"),Object(s.b)("p",null,"Convert MAC address in mac string to binary string like this: ",Object(s.b)("inlineCode",{parentName:"p"},"101010101010101010111011101110111100110011001100")),Object(s.b)("p",null,"Print the resulting new string to the standard output (stdout) using print."),Object(s.b)("p",null,"Restriction: All tasks must be done using the topics covered in this and previous chapters."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'mac = "AAAA:BBBB:CCCC"\n')),Object(s.b)("h2",{id:"task-48"},"Task 4.8"),Object(s.b)("p",null,"Convert the IP address in the ip variable to binary and print output in columns to stdout:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"the first line must be decimal values"),Object(s.b)("li",{parentName:"ul"},"the second line is binary values")),Object(s.b)("p",null,"The output should be ordered in the same way as in the example output below:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"in columns"),Object(s.b)("li",{parentName:"ul"},"column width 10 characters (in binary you need to add two spaces between columns to separate octets among themselves)")),Object(s.b)("p",null,"Example output for address 10.1.1.1:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"10        1         1         1\n00001010  00000001  00000001  00000001\n")),Object(s.b)("p",null,"Restriction: All tasks must be done using the topics covered in this and previous chapters."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'ip = "192.168.3.1"\n')))}u.isMDXComponent=!0},280:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return h}));var r=n(0),a=n.n(r);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},s=Object.keys(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=a.a.createContext({}),u=function(t){var e=a.a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=u(t.components);return a.a.createElement(c.Provider,{value:e},t.children)},b={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},d=a.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,s=t.originalType,i=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(i,".").concat(d)]||p[d]||b[d]||s;return n?a.a.createElement(h,o(o({ref:e},c),{},{components:n})):a.a.createElement(h,o({ref:e},c))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);