(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{257:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(8),i=(t(0),t(281)),o={id:"netmiko_strip_backspace",title:"\u2699\ufe0f strip_backspace()",sidebar_label:"\u2699\ufe0f strip_backspace()",slug:"netmiko_strip_backspace_method",custom_edit_url:null},s={unversionedId:"netmiko/methods/netmiko_strip_backspace",id:"netmiko/methods/netmiko_strip_backspace",isDocsHomePage:!1,title:"\u2699\ufe0f strip_backspace()",description:"`python",source:"@site/docs/netmiko/methods/12_netmiko_strip_backspace.md",slug:"/netmiko/methods/netmiko_strip_backspace_method",permalink:"/docs/netmiko/methods/netmiko_strip_backspace_method",editUrl:null,version:"current",sidebar_label:"\u2699\ufe0f strip_backspace()",sidebar:"someSidebar",previous:{title:"\u2699\ufe0f strip_prompt()",permalink:"/docs/netmiko/methods/netmiko_strip_prompt_method"},next:{title:"\ud83d\udcbb Connecting Devices",permalink:"/docs/netmiko/scripts/netmiko_connecting_devices"}},c=[{value:"Example",id:"example",children:[]}],p={toc:c};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'from netmiko import ConnectHandler\ndevice = {\n    "device_type":"cisco_ios",\n    "host":"192.168.10.12",\n    "username":"keremcan",\n    "password":"onemli",\n    "verbose":"True",\n    "secret":"onemli"}\n')),Object(i.b)("p",null,"\u200b    "),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"This method strip any backspace characters out of the output.. In this example I will use the output from ",Object(i.b)("inlineCode",{parentName:"p"},"send_command"),". And i accually added some backspace characters with code."),Object(i.b)("p",null,"Verify the ",Object(i.b)("inlineCode",{parentName:"p"},"backspaces")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'with ConnectHandler(**device) as connection:\n    data=connection.send_command("show ip interface brief",strip_prompt=False)\n    data+="krmcn_onemli\\x08\\x08\\x08\\x08\\x08\\x08" # add words and \\x08 6 times\n    print(data)\n')),Object(i.b)("p",null,"Output"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'SSH connection established to 192.168.10.12:22\nInteractive SSH session established\n\nInterface              IP-Address      OK? Method Status                Protocol\nGigabitEthernet0/0     unassigned      YES unset  up                    up      \nGigabitEthernet0/1     unassigned      YES unset  up                    up      \nGigabitEthernet0/2     unassigned      YES unset  up                    up      \nGigabitEthernet0/3     unassigned      YES unset  up                    up      \nGigabitEthernet1/0     unassigned      YES unset  down                  down    \nGigabitEthernet1/1     unassigned      YES unset  up                    up      \nGigabitEthernet1/2     unassigned      YES unset  up                    up      \nGigabitEthernet1/3     unassigned      YES unset  up                    up      \nLoopback99             9.9.9.9         YES manual up                    up      \nVlan1                  192.168.10.12   YES NVRAM  up                    up      \nSW2#krmcn_onemli        # The word "onemli" was deleted using \\x08 6 times.\n')),Object(i.b)("p",null,"Use the ",Object(i.b)("inlineCode",{parentName:"p"},"strip_backspaces()")," method"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'with ConnectHandler(**device) as connection:\n    data=connection.send_command("show ip interface brief",strip_prompt=False)\n    data+="krmcn_onemli\\x08\\x08\\x08\\x08\\x08\\x08"\n    print(connection.strip_backspaces(data))\n')),Object(i.b)("p",null,"Output"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"SSH connection established to 192.168.10.12:22\nInteractive SSH session established\n\nInterface              IP-Address      OK? Method Status                Protocol\nGigabitEthernet0/0     unassigned      YES unset  up                    up      \nGigabitEthernet0/1     unassigned      YES unset  up                    up      \nGigabitEthernet0/2     unassigned      YES unset  up                    up      \nGigabitEthernet0/3     unassigned      YES unset  up                    up      \nGigabitEthernet1/0     unassigned      YES unset  down                  down    \nGigabitEthernet1/1     unassigned      YES unset  up                    up      \nGigabitEthernet1/2     unassigned      YES unset  up                    up      \nGigabitEthernet1/3     unassigned      YES unset  up                    up      \nLoopback99             9.9.9.9         YES manual up                    up      \nVlan1                  192.168.10.12   YES NVRAM  up                    up      \nSW2#krmcn_onemli\n  \n")),Object(i.b)("p",null,"\u200b    "))}u.isMDXComponent=!0},281:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=u(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(t),b=r,m=l["".concat(o,".").concat(b)]||l[b]||d[b]||i;return t?a.a.createElement(m,s(s({ref:n},p),{},{components:t})):a.a.createElement(m,s({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=b;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);