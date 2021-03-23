(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{163:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return m})),t.d(n,"default",(function(){return u}));var o=t(3),r=t(8),i=(t(0),t(281)),c={id:"netmiko_exit_config_mode",title:"\u2699\ufe0f exit_config_mode()",sidebar_label:"\u2699\ufe0f exit_config_mode()",slug:"netmiko_exit_config_mode_method",custom_edit_url:null},a={unversionedId:"netmiko/methods/netmiko_exit_config_mode",id:"netmiko/methods/netmiko_exit_config_mode",isDocsHomePage:!1,title:"\u2699\ufe0f exit_config_mode()",description:"`python",source:"@site/docs/netmiko/methods/6_netmiko_exit_config_mode.md",slug:"/netmiko/methods/netmiko_exit_config_mode_method",permalink:"/tr/docs/netmiko/methods/netmiko_exit_config_mode_method",editUrl:null,version:"current",sidebar_label:"\u2699\ufe0f exit_config_mode()",sidebar:"someSidebar",previous:{title:"\u2699\ufe0f check_config_mode()",permalink:"/tr/docs/netmiko/methods/netmiko_check_config_mode_method"},next:{title:"\u2699\ufe0f send_command()",permalink:"/tr/docs/netmiko/methods/netmiko_send_command_method"}},m=[{value:"Example",id:"example",children:[]}],l={toc:m};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'from netmiko import ConnectHandler\ndevice = {\n    "device_type":"cisco_ios",\n    "host":"192.168.10.12",\n    "username":"keremcan",\n    "password":"onemli",\n    "verbose":"True",\n    "secret":"onemli"}\n')),Object(i.b)("p",null,"\u200b    "),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"with ConnectHandler(**device) as connection:\n   connection.config_mode() # enter configuration mode\n   print(connection.check_config_mode()) # return value: True\n   connection.exit_config_mode() # exit configuration mode\n   print(connection.check_config_mode()) # return value: False\n")),Object(i.b)("p",null,"Output"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"SSH connection established to 192.168.10.12:22\nInteractive SSH session established\nTrue\nFalse\n")))}u.isMDXComponent=!0},281:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var o=t(0),r=t.n(o);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),u=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=u(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),d=u(t),s=o,f=d["".concat(c,".").concat(s)]||d[s]||p[s]||i;return t?r.a.createElement(f,a(a({ref:n},l),{},{components:t})):r.a.createElement(f,a({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=s;var a={};for(var m in n)hasOwnProperty.call(n,m)&&(a[m]=n[m]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=t[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);