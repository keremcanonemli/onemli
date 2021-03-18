(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{80:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(8),a=(t(0),t(94)),i={id:"nt1",title:"enable()",sidebar_label:"~ enable()",slug:"/",custom_edit_url:null},c={unversionedId:"nt1",id:"nt1",isDocsHomePage:!1,title:"enable()",description:"If the user's privilege level 15, the following command may not work correctly. Privilege level 15 user enters the enable mode directly when establish the connection. If you want to test this scenario, you must set the user's privilege level to 1.",source:"@site/docs/1_netmiko_enable.md",slug:"/",permalink:"/docs/",editUrl:null,version:"current",sidebar_label:"~ enable()",sidebar:"someSidebar",next:{title:"exit_enable_mode()",permalink:"/docs/netmiko_exit_enable_mode_method"}},l=[{value:"Example",id:"example",children:[]},{value:"Possible Exceptions",id:"possible-exceptions",children:[]}],s={toc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"If the user's ",Object(a.b)("u",null,"privilege level 15"),", the following command may not work correctly. Privilege level 15 user enters the enable mode directly when establish the connection. ",Object(a.b)("u",null,"If you want to test this scenario, you must set the user's privilege level to 1.")))),Object(a.b)("p",null,"\u200b    "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'from netmiko import ConnectHandler\ndevice = {\n    "device_type":"cisco_ios",\n    "host":"192.168.10.12",\n    "username":"keremcan",\n    "password":"onemli",\n    "verbose":"True",\n    "secret":"onemli"}\n')),Object(a.b)("p",null,"\u200b    "),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"with ConnectHandler(**device) as connection:\n    print(connection.find_prompt()) # --\x3e to print the prompt before enable mode\n    connection.enable()\n    print(connection.find_prompt()) # --\x3e to print the prompt after enable mode\n\n")),Object(a.b)("p",null,"Output"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"SSH connection established to 192.168.10.12:22\nInteractive SSH session established\nSW2>\nSW2#\n")),Object(a.b)("p",null,"\u200b    "),Object(a.b)("h2",{id:"possible-exceptions"},"Possible Exceptions"),Object(a.b)("p",null,"If you forget to give the secret password to the Cisco device, you will get an error like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'Traceback (most recent call last):\n  File "C:/Users/<USER>/PycharmProjects/Netmiko/basic_connection.py", line 13, in <module>\n    connection.enable()\n  File "C:\\Users\\<USER>\\PycharmProjects\\Netmiko\\venv\\lib\\site-packages\\netmiko\\cisco_base_connection.py", line 24, in enable\n    return super().enable(\n  File "C:\\Users\\<USER>\\PycharmProjects\\Netmiko\\venv\\lib\\site-packages\\netmiko\\base_connection.py", line 1688, in enable\n    raise ValueError(msg)\nValueError: Failed to enter enable mode. Please ensure you pass the \'secret\' argument to ConnectHandler.\n')))}p.isMDXComponent=!0},94:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(t),m=r,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||a;return t?o.a.createElement(d,c(c({ref:n},s),{},{components:t})):o.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);