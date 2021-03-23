(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{127:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return r})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var i=t(3),a=t(8),l=(t(0),t(281)),o={id:"netmiko_connecting_devices",title:"\ud83d\udcbb Connecting Devices",sidebar_label:"\ud83d\udcbb Connecting Devices",slug:"netmiko_connecting_devices",custom_edit_url:null},r={unversionedId:"netmiko/scripts/netmiko_connecting_devices",id:"netmiko/scripts/netmiko_connecting_devices",isDocsHomePage:!1,title:"\ud83d\udcbb Connecting Devices",description:"I will use the same device information in all the examples on this page.",source:"@site/docs/netmiko/scripts/13_netmiko_connecting_devices.md",slug:"/netmiko/scripts/netmiko_connecting_devices",permalink:"/docs/netmiko/scripts/netmiko_connecting_devices",editUrl:null,version:"current",sidebar_label:"\ud83d\udcbb Connecting Devices",sidebar:"someSidebar",previous:{title:"\u2699\ufe0f strip_backspace()",permalink:"/docs/netmiko/methods/netmiko_strip_backspace_method"},next:{title:"\ud83d\udcbb TextFSM Templates",permalink:"/docs/netmiko/scripts/netmiko_using_textfsm_templates"}},c=[{value:"with Only For Loop",id:"with-only-for-loop",children:[{value:"Example",id:"example",children:[]}]},{value:"with Lists",id:"with-lists",children:[{value:"Example",id:"example-1",children:[]}]},{value:"with Excel",id:"with-excel",children:[{value:"Openpyxl Installation",id:"openpyxl-installation",children:[]},{value:"Excel File",id:"excel-file",children:[]},{value:"Example",id:"example-2",children:[]}]}],s={toc:c};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(i.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Information")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"I will use the same device information in all the examples on this page."))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},"from netmiko import ConnectHandler\n\ndevice1= { \n        'device_type': 'cisco_ios', \n        'host': '192.168.10.12', \n        'username': 'keremcan', \n        'password': 'onemli',\n        'secret':'onem.li'\n        } \n\ndevice2= { \n        'device_type': 'cisco_ios', \n        'host': '192.168.10.13', \n        'username': 'keremcan', \n        'password': 'onemli',\n        'secret':'onem.li'\n        } \n\ndevice3= { \n        'device_type': 'cisco_ios', \n        'host': '192.168.10.14', \n        'username': 'keremcan', \n        'password': 'onemli',\n        'secret':'onem.li'\n        } \n")),Object(l.b)("p",null,"\u200b    "),Object(l.b)("h2",{id:"with-only-for-loop"},"with Only For Loop"),Object(l.b)("p",null,"The for loop is a useful option for connecting to multiple devices. Each time the loop returns, it will send the dictionaries we provide as arguments to ",Object(l.b)("inlineCode",{parentName:"p"},"ConnectHandler()")," one by one."),Object(l.b)("h3",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},'for device in (device1, device2, device3):\n    with ConnectHandler(**device) as netConnect:\n        print(netConnect.send_command("show running-config"))\n')),Object(l.b)("p",null,"If you want to handle errors with ",Object(l.b)("inlineCode",{parentName:"p"},"try-except"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},'for device in (device1,device2,device3):\n    try:\n        with ConnectHandler(**device) as netConnect:\n            print(netConnect.send_command("show running-config"))\n    except Exception as e:\n            print("Houston We Have a Problem")\n')),Object(l.b)("p",null,"Output"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},"VLAN Name                             Status    Ports\n---- -------------------------------- --------- -------------------------------\n1    default                          active    Gi0/0, Gi0/1, Gi0/2, Gi0/3, Gi1/0, Gi1/1, Gi1/2, Gi1/3\n100  IT                               active    \n200  AP                               active    \n300  OOB                              active    \n1002 fddi-default                     act/unsup \n1003 token-ring-default               act/unsup \n1004 fddinet-default                  act/unsup \n1005 trnet-default                    act/unsup \n\nVLAN Name                             Status    Ports\n---- -------------------------------- --------- -------------------------------\n1    default                          active    Gi0/0, Gi0/1, Gi0/2, Gi0/3, Gi1/0, Gi1/1, Gi1/2, Gi1/3\n1002 fddi-default                     act/unsup \n1003 token-ring-default               act/unsup \n1004 fddinet-default                  act/unsup \n1005 trnet-default                    act/unsup \n\nVLAN Name                             Status    Ports\n---- -------------------------------- --------- -------------------------------\n1    default                          active    Gi0/0, Gi0/1, Gi0/2, Gi0/3, Gi1/0, Gi1/1, Gi1/2, Gi1/3\n1002 fddi-default                     act/unsup \n1003 token-ring-default               act/unsup \n1004 fddinet-default                  act/unsup \n1005 trnet-default                    act/unsup \n")),Object(l.b)("p",null,"\u200b    "),Object(l.b)("p",null,"\u200b    "),Object(l.b)("h2",{id:"with-lists"},"with Lists"),Object(l.b)("p",null,"The lists are useful for organizing and accessing multiple devices with a loop. Each time the loop returns, it will send the dictionary we provide as arguments to ",Object(l.b)("inlineCode",{parentName:"p"},"ConnectHandler()")," one by one."),Object(l.b)("h3",{id:"example-1"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},'devices_list = [device1,device2,device3]\n\nfor device in devices_list:\n    with ConnectHandler(**device) as connection:\n        output = connection.send_command("show ip interface brief")\n        print(output)\n')),Object(l.b)("p",null,"If you want to handle errors with ",Object(l.b)("inlineCode",{parentName:"p"},"try-except"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},'for device in devices_list:\n    with ConnectHandler(**device) as connection:\n        try:\n            output = connection.send_command("show ip interface brief")\n            print(output)\n        except Exception as e:\n            print("Houston We Have a Problem")\n')),Object(l.b)("p",null,"\u200b    "),Object(l.b)("p",null,"\u200b    "),Object(l.b)("h2",{id:"with-excel"},"with Excel"),Object(l.b)("p",null,"In my opinion, the most practical method for connecting devices with Netmiko is to use excel files. It provides flexibility in adding new devices and changing the information of previously added devices. This is just my opinion."),Object(l.b)("p",null,"\u200b    "),Object(l.b)("h3",{id:"openpyxl-installation"},"Openpyxl Installation"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},"pip install openpyxl\n")),Object(l.b)("p",null,"\u200b    "),Object(l.b)("h3",{id:"excel-file"},"Excel File"),Object(l.b)("p",null,"I created the ",Object(l.b)("inlineCode",{parentName:"p"},"Hosts.xlsx")," file in the same folder where my python code is located. I added the information in the following table to it. First row values are completely customizable."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"device_type"),Object(l.b)("th",{parentName:"tr",align:null},"host"),Object(l.b)("th",{parentName:"tr",align:null},"username"),Object(l.b)("th",{parentName:"tr",align:null},"password"),Object(l.b)("th",{parentName:"tr",align:null},"secret"),Object(l.b)("th",{parentName:"tr",align:null},"sleep"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"cisco_ios"),Object(l.b)("td",{parentName:"tr",align:null},"192.168.10.12"),Object(l.b)("td",{parentName:"tr",align:null},"keremcan"),Object(l.b)("td",{parentName:"tr",align:null},"onemli"),Object(l.b)("td",{parentName:"tr",align:null},"onem.li"),Object(l.b)("td",{parentName:"tr",align:null},"10")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"cisco_ios"),Object(l.b)("td",{parentName:"tr",align:null},"192.168.10.13"),Object(l.b)("td",{parentName:"tr",align:null},"keremcan"),Object(l.b)("td",{parentName:"tr",align:null},"onemli"),Object(l.b)("td",{parentName:"tr",align:null},"onem.li"),Object(l.b)("td",{parentName:"tr",align:null},"10")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"cisco_ios"),Object(l.b)("td",{parentName:"tr",align:null},"192.168.10.14"),Object(l.b)("td",{parentName:"tr",align:null},"keremcan"),Object(l.b)("td",{parentName:"tr",align:null},"onemli"),Object(l.b)("td",{parentName:"tr",align:null},"onem.li"),Object(l.b)("td",{parentName:"tr",align:null},"10")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"cisco_ios"),Object(l.b)("td",{parentName:"tr",align:null},"192.168.10.15"),Object(l.b)("td",{parentName:"tr",align:null},"keremcan"),Object(l.b)("td",{parentName:"tr",align:null},"onemli"),Object(l.b)("td",{parentName:"tr",align:null},"onem.li"),Object(l.b)("td",{parentName:"tr",align:null},"10")))),Object(l.b)("p",null,"\u200b    "),Object(l.b)("h3",{id:"example-2"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},'from netmiko import ConnectHandler\nfrom openpyxl import load_workbook\nimport time\nfrom datetime import datetime\n# Worksheet from Hosts.xlsx file. Set the active worksheet index 0\nworkBook = load_workbook("Hosts.xlsx")\nworkBook.active = 0\n# Sheet id\'s starting at 0 in openpyxl, like list\'s index value.\nworkSheet = workBook.active\n\n# if there is any sleep value specified in Hosts.xlsx, we can assign value to SLEEP variable\nSLEEP = 0\n\n# min_row specifies from which line the loop will start\nfor row in workSheet.iter_rows(min_row=2):\n    # we will add values from excel file one by one to the DEVICE dictionary\n    DEVICE = {}\n    for cell in row:\n        if cell.column == 1 and str(cell.value).strip() is not None:\n            DEVICE["device_type"] = cell.value\n        elif cell.column == 2 and str(cell.value).strip() is not None:\n            DEVICE["host"] = cell.value\n        elif cell.column == 3 and str(cell.value).strip() is not None:\n            DEVICE["username"] = cell.value\n        elif cell.column == 4 and str(cell.value).strip() is not None:\n            DEVICE["password"] = cell.value\n        elif cell.column == 5 and str(cell.value).strip() is not None:\n            DEVICE["secret"] = cell.value\n        elif cell.column == 6 and str(cell.value).strip() is not None and str(cell.value).isdigit():\n            SLEEP = cell.value\n    try:\n        print(10 * "*",  "START TIME --\x3e ",datetime.now(),"CONNECTING --\x3e ", DEVICE["host"], 10 * "*")\n        net_connect = ConnectHandler(**DEVICE)\n        time.sleep(SLEEP)\n        print(net_connect.send_command("show vlan brief"))\n        print(10 * "*",  "FINISH TIME --\x3e ",datetime.now(),"FINISHED --\x3e ", DEVICE["host"], 10 * "*")\n\n    except Exception as e:\n        print(10 * "*",  "FAILED TIME --\x3e ",datetime.now(),"FAILED --\x3e ", DEVICE["host"], 10 * "*")\n        print(f"Houston We Have a Connection Problem to {DEVICE[\'host\']}")\n')),Object(l.b)("p",null,"Output"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"********** START TIME --\x3e  2021-03-06 17:37:03.626502 CONNECTING --\x3e  192.168.10.12 **********\n\nVLAN Name                             Status    Ports\n---- -------------------------------- --------- -------------------------------\n1    default                          active    Gi0/0, Gi0/1, Gi0/2, Gi0/3, Gi1/0, Gi1/1, Gi1/2, Gi1/3\n100  IT                               active    \n200  AP                               active    \n300  OOB                              active    \n1002 fddi-default                     act/unsup \n1003 token-ring-default               act/unsup \n1004 fddinet-default                  act/unsup \n1005 trnet-default                    act/unsup \n********** FINISH TIME --\x3e  2021-03-06 17:37:14.626593 FINISHED --\x3e  192.168.10.12 **********\n********** START TIME --\x3e  2021-03-06 17:37:14.626593 CONNECTING --\x3e  192.168.10.13 **********\n\nVLAN Name                             Status    Ports\n---- -------------------------------- --------- -------------------------------\n1    default                          active    Gi0/0, Gi0/1, Gi0/2, Gi0/3, Gi1/0, Gi1/1, Gi1/2, Gi1/3\n1002 fddi-default                     act/unsup \n1003 token-ring-default               act/unsup \n1004 fddinet-default                  act/unsup \n1005 trnet-default                    act/unsup \n********** FINISH TIME --\x3e  2021-03-06 17:37:25.753442 FINISHED --\x3e  192.168.10.13 **********\n********** START TIME --\x3e  2021-03-06 17:37:25.753442 CONNECTING --\x3e  192.168.10.14 **********\n\n\nVLAN Name                             Status    Ports\n---- -------------------------------- --------- -------------------------------\n1    default                          active    Gi0/0, Gi0/1, Gi0/2, Gi0/3, Gi1/0, Gi1/1, Gi1/2, Gi1/3\n1002 fddi-default                     act/unsup \n1003 token-ring-default               act/unsup \n1004 fddinet-default                  act/unsup \n1005 trnet-default                    act/unsup \n********** FINISH TIME --\x3e  2021-03-06 17:37:36.819639 FINISHED --\x3e  192.168.10.14 **********\n\n********** FAILED TIME --\x3e  2021-03-06 17:37:02.985668 FAILED --\x3e  192.168.10.15 **********\nHouston We Have a Connection Problem to 192.168.10.15\n\n")))}p.isMDXComponent=!0},281:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var i=t(0),a=t.n(i);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),b=i,m=d["".concat(o,".").concat(b)]||d[b]||u[b]||l;return t?a.a.createElement(m,r(r({ref:n},s),{},{components:t})):a.a.createElement(m,r({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=b;var r={};for(var c in n)hasOwnProperty.call(n,c)&&(r[c]=n[c]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var s=2;s<l;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);