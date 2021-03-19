(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{79:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return r})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var o=t(3),i=t(8),a=(t(0),t(96)),c={id:"netmiko_send_config_set",title:"\u2699\ufe0f send_config_set()",sidebar_label:"\u2699\ufe0f send_config_set()",slug:"/netmiko_send_config_set_method",custom_edit_url:null},r={unversionedId:"netmiko_send_config_set",id:"netmiko_send_config_set",isDocsHomePage:!1,title:"\u2699\ufe0f send_config_set()",description:"`python",source:"@site/docs/8_netmiko_send_config_set.md",slug:"/netmiko_send_config_set_method",permalink:"/docs/netmiko_send_config_set_method",editUrl:null,version:"current",sidebar_label:"\u2699\ufe0f send_config_set()",sidebar:"someSidebar",previous:{title:"\u2699\ufe0f send_command()",permalink:"/docs/netmiko_send_command_method"},next:{title:"\u2699\ufe0f find_prompt()",permalink:"/docs/netmiko_find_prompt_method"}},s=[{value:"Example",id:"example",children:[]},{value:"Alternative Example",id:"alternative-example",children:[]},{value:"Verification",id:"verification",children:[]},{value:"Parameters",id:"parameters",children:[{value:"config_commands",id:"config_commands",children:[]},{value:"exit_config_mode",id:"exit_config_mode",children:[]}]}],l={toc:s};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'from netmiko import ConnectHandler\ndevice = {\n    "device_type":"cisco_ios",\n    "host":"192.168.10.12",\n    "username":"keremcan",\n    "password":"onemli",\n    "verbose":"True",\n    "secret":"onemli"}\n')),Object(a.b)("p",null,"\u200b    "),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'configuration = ["interface loopback 99","ip address 9.9.9.9 255.255.255.255"]\nwith ConnectHandler(**device) as connection:\n    print(connection.send_config_set(configuration))\n')),Object(a.b)("p",null,"Output"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"SSH connection established to 192.168.10.12:22\nInteractive SSH session established\nconfigure terminal\nEnter configuration commands, one per line.  End with CNTL/Z.\nSW2(config)#interface loopback 99\nSW2(config-if)#ip address 9.9.9.9 255.255.255.255\nSW2(config-if)#end\nSW2#\n")),Object(a.b)("p",null,"\u200b    "),Object(a.b)("p",null,"\u200b    "),Object(a.b)("h2",{id:"alternative-example"},"Alternative Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'with ConnectHandler(**device) as connection:\n    print(connection.send_config_set(["interface loopback 99","ip address 9.9.9.9 255.255.255.255"]))\n')),Object(a.b)("p",null,"Output"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"SSH connection established to 192.168.10.12:22\nInteractive SSH session established\nconfigure terminal\nEnter configuration commands, one per line.  End with CNTL/Z.\nSW2(config)#interface loopback 99\nSW2(config-if)#ip address 9.9.9.9 255.255.255.255\nSW2(config-if)#end\nSW2#\n")),Object(a.b)("h2",{id:"verification"},"Verification"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'    print(connection.send_command("show ip interface brief"))\n')),Object(a.b)("p",null,"Output"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"Interface              IP-Address      OK? Method Status                Protocol\nGigabitEthernet0/0     unassigned      YES unset  up                    up      \nGigabitEthernet0/1     unassigned      YES unset  up                    up      \nGigabitEthernet0/2     unassigned      YES unset  up                    up      \nGigabitEthernet0/3     unassigned      YES unset  up                    up      \nGigabitEthernet1/0     unassigned      YES unset  down                  down    \nGigabitEthernet1/1     unassigned      YES unset  up                    up      \nGigabitEthernet1/2     unassigned      YES unset  up                    up      \nGigabitEthernet1/3     unassigned      YES unset  up                    up      \nLoopback99             9.9.9.9         YES manual up                    up      \nVlan1                  192.168.10.12   YES NVRAM  up                    up      \n")),Object(a.b)("h2",{id:"parameters"},"Parameters"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"def send_config_set\n(self, config_commands=None, exit_config_mode=True, delay_factor=1, max_loops=150, strip_prompt=False,\n strip_command=False, config_mode_command=None, cmd_verify=True, enter_config_mode=True)\n")),Object(a.b)("p",null,"\u200b    "),Object(a.b)("p",null,"\u200b    "),Object(a.b)("h3",{id:"config_commands"},"config_commands"),Object(a.b)("p",null,"This parameter is an iterable containing all of the configuration commands. The commands will be executed one by one. When you send the command list to , it is assigned to the ",Object(a.b)("inlineCode",{parentName:"p"},"config_commands"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'configuration =["interface loopback 99","ip address 9.9.9.9 255.255.255.255"]\nwith ConnectHandler(**device) as connection:\n    print(connection.send_config_set(config_commands=configuration))\n')),Object(a.b)("p",null,"Output"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"SSH connection established to 192.168.10.12:22\nInteractive SSH session established\nconfigure terminal\nEnter configuration commands, one per line.  End with CNTL/Z.\nSW2(config)#interface loopback 99\nSW2(config-if)#ip address 9.9.9.9 255.255.255.255\nSW2(config-if)#end\nSW2#\n")),Object(a.b)("p",null,"\u200b    "),Object(a.b)("h3",{id:"exit_config_mode"},"exit_config_mode"),Object(a.b)("p",null,"This parameter's default value is ",Object(a.b)("inlineCode",{parentName:"p"},"exit_config_mode=True"),". It's for, It's for, exit from configuration mode to enable mode after the process is complete."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'# True is the default value. So you don\'t need to write. It was written here as an example.\nconfiguration =["interface loopback 99","ip address 9.9.9.9 255.255.255.255"]\nwith ConnectHandler(**device) as connection:\n    print(connection.send_config_set(configuration,exit_config_mode=True))\n    print(connection.find_prompt())\n')),Object(a.b)("p",null,"Output"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"SSH connection established to 192.168.10.12:22\nInteractive SSH session established\nconfigure terminal\nEnter configuration commands, one per line.  End with CNTL/Z.\nSW2(config)#interface loopback 99\nSW2(config-if)#ip address 9.9.9.9 255.255.255.255\nSW2(config-if)#end\nSW2#\nSW2#\n")),Object(a.b)("p",null,"\u200b    "),Object(a.b)("p",null,"Change value with the ",Object(a.b)("inlineCode",{parentName:"p"},"exit_config_mode=False")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"print(connection.send_config_set(configuration,exit_config_mode=False))\n")),Object(a.b)("p",null,"Output"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"SSH connection established to 192.168.10.12:22\nInteractive SSH session established\nconfigure terminal\nEnter configuration commands, one per line.  End with CNTL/Z.\nSW2(config)#interface loopback 99\nSW2(config-if)#ip address 9.9.9.9 255.255.255.255\nSW2(config-if)#\nSW2(config-if)#\n")),Object(a.b)("p",null,"\u200b    "))}p.isMDXComponent=!0},96:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var o=t(0),i=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),p=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),b=o,m=d["".concat(c,".").concat(b)]||d[b]||u[b]||a;return t?i.a.createElement(m,r(r({ref:n},l),{},{components:t})):i.a.createElement(m,r({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=b;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,c[1]=r;for(var l=2;l<a;l++)c[l]=t[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);