(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{232:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return g}));var o=t(3),r=t(8),i=(t(0),t(280)),a={id:"module_logging",title:"Module Logging",sidebar_label:"19.5 Module Logging",slug:"module_logging",custom_edit_url:null},l={unversionedId:"python/concurrent_connections/module_logging",id:"python/concurrent_connections/module_logging",isDocsHomePage:!1,title:"Module Logging",description:"Module logging - a module from Python standard library that allows you to configure logging from the script. Module logging has a lot of features and a lot of configuration options. Only basic configuration option is discussed in this section.",source:"@site/docs/python/concurrent_connections/5_module_logging.md",slug:"/python/concurrent_connections/module_logging",permalink:"/docs/python/concurrent_connections/module_logging",editUrl:null,version:"current",sidebar_label:"19.5 Module Logging",sidebar:"someSidebar",previous:{title:"Thread Safety",permalink:"/docs/python/concurrent_connections/thread_safety"},next:{title:"Module Concurrent.Futures",permalink:"/docs/python/concurrent_connections/module_concurrent_futures"}},c=[],s={toc:c};function g(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Module logging - a module from Python standard library that allows you to configure logging from the script. Module logging has a lot of features and a lot of configuration options. Only basic configuration option is discussed in this section."),Object(i.b)("p",null,"The easiest way to configure logging in script, use logging.basicConfig:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"import logging\n\n\nlogging.basicConfig(\n    format='%(threadName)s %(name)s %(levelname)s: %(message)s',\n    level=logging.INFO,\n)\n")),Object(i.b)("p",null,"In this version, the settings are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"all messages will be displayed on standard output"),Object(i.b)("li",{parentName:"ul"},"messages of INFO level and above will be displayed"),Object(i.b)("li",{parentName:"ul"},"each message will contain thread information, log name, message level, and message itself")),Object(i.b)("p",null,"Now, to output a log message in this script, you need to write ",Object(i.b)("inlineCode",{parentName:"p"},'logging.info("test")'),"."),Object(i.b)("p",null,"Example of script with logging settings (logging_basics.py file):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"from datetime import datetime\nimport logging\nimport netmiko\nimport yaml\n\n\n# this string indicates that paramiko log messages will be displayed\n# only if they have WARNING level or higher\nlogging.getLogger(\"paramiko\").setLevel(logging.WARNING)\n\nlogging.basicConfig(\n    format = '%(threadName)s %(name)s %(levelname)s: %(message)s',\n    level=logging.INFO)\n\n\ndef send_show(device, show):\n    start_msg = '===> {} Connection: {}'\n    received_msg = '<=== {} Received:   {}'\n    ip = device[\"ip\"]\n    logging.info(start_msg.format(datetime.now().time(), ip))\n\n    with netmiko.ConnectHandler(**device) as ssh:\n        ssh.enable()\n        result =  ssh.send_command(show)\n        logging.info(received_msg.format(datetime.now().time(), ip))\n    return result\n\n\nif __name__ == \"__main__\":\n    with open('devices.yaml') as f:\n        devices = yaml.safe_load(f)\n    for dev in devices:\n        print(send_show(dev, 'sh clock'))\n")),Object(i.b)("p",null,"Result of script execution:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ python logging_basics.py\nMainThread root INFO: ===> 12:26:12.767168 Connection: 192.168.100.1\nMainThread root INFO: <=== 12:26:18.307017 Received:   192.168.100.1\n*12:26:18.137 UTC Wed Jun 5 2019\nMainThread root INFO: ===> 12:26:18.413913 Connection: 192.168.100.2\nMainThread root INFO: <=== 12:26:23.991715 Received:   192.168.100.2\n*12:26:23.819 UTC Wed Jun 5 2019\nMainThread root INFO: ===> 12:26:24.095452 Connection: 192.168.100.3\nMainThread root INFO: <=== 12:26:29.478553 Received:   192.168.100.3\n*12:26:29.308 UTC Wed Jun 5 2019\n")),Object(i.b)("p",null,"Note"),Object(i.b)("p",null,"There are still many features in logging module. This section only uses basic configuration option. For more information on features of the module, see ",Object(i.b)("a",{parentName:"p",href:"https://docs.python.org/3/howto/logging.html#logging-basic-tutorial"},"Logging HOWTO")))}g.isMDXComponent=!0},280:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var o=t(0),r=t.n(o);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),g=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=g(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=g(t),p=o,m=u["".concat(a,".").concat(p)]||u[p]||d[p]||i;return t?r.a.createElement(m,l(l({ref:n},s),{},{components:t})):r.a.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);