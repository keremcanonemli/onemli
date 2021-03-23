(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(8),i=(n(0),n(281)),c={id:"netmiko_find_prompt",title:"\u2699\ufe0f find_prompt()",sidebar_label:"\u2699\ufe0f find_prompt()",slug:"netmiko_find_prompt_method",custom_edit_url:null},a={unversionedId:"netmiko/methods/netmiko_find_prompt",id:"netmiko/methods/netmiko_find_prompt",isDocsHomePage:!1,title:"\u2699\ufe0f find_prompt()",description:"`python",source:"@site/docs/netmiko/methods/9_netmiko_find_prompt.md",slug:"/netmiko/methods/netmiko_find_prompt_method",permalink:"/docs/netmiko/methods/netmiko_find_prompt_method",editUrl:null,version:"current",sidebar_label:"\u2699\ufe0f find_prompt()",sidebar:"someSidebar",previous:{title:"\u2699\ufe0f send_config_set()",permalink:"/docs/netmiko/methods/netmiko_send_config_set_method"},next:{title:"\u2699\ufe0f strip_command()",permalink:"/docs/netmiko/methods/netmiko_strip_command_method"}},p=[{value:"Example",id:"example",children:[]}],m={toc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'from netmiko import ConnectHandler\ndevice = {\n    "device_type":"cisco_ios",\n    "host":"192.168.10.12",\n    "username":"keremcan",\n    "password":"onemli",\n    "verbose":"True",\n    "secret":"onemli"}\n')),Object(i.b)("p",null,"\u200b    "),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"This method finds the current network device prompt, last line only"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"with ConnectHandler(**device) as connection:\n    print(connection.find_prompt())\n")),Object(i.b)("p",null,"Output"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"SSH connection established to 192.168.10.12:22\nInteractive SSH session established\nSW2#\n")))}l.isMDXComponent=!0},281:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=o.a.createContext({}),l=function(e){var t=o.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return o.a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=l(n),u=r,f=s["".concat(c,".").concat(u)]||s[u]||d[u]||i;return n?o.a.createElement(f,a(a({ref:t},m),{},{components:n})):o.a.createElement(f,a({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=u;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var m=2;m<i;m++)c[m]=n[m];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);