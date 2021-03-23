(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{280:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a.a.createContext({}),p=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=p(t),f=r,b=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return t?a.a.createElement(b,s(s({ref:n},i),{},{components:t})):a.a.createElement(b,s({ref:n},i))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=t[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},74:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(8),o=(t(0),t(280)),l={id:"class_example",title:"Class Example",sidebar_label:"22.6 Class Example",slug:"class_example",custom_edit_url:null},s={unversionedId:"python/oop_basics/class_example",id:"python/oop_basics/class_example",isDocsHomePage:!1,title:"Class Example",description:"The class that describes the network:",source:"@site/docs/python/oop_basics/6_class_example.md",slug:"/python/oop_basics/class_example",permalink:"/tr/docs/python/oop_basics/class_example",editUrl:null,version:"current",sidebar_label:"22.6 Class Example",sidebar:"someSidebar",previous:{title:"Method `__Init__`",permalink:"/tr/docs/python/oop_basics/method_init"},next:{title:"Class Namespace",permalink:"/tr/docs/python/oop_basics/class_namespace"}},c=[],i={toc:c};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The class that describes the network:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'class Network:\n    def __init__(self, network):\n        self.network = network\n        self.hosts = tuple(str(ip) for ip in ipaddress.ip_network(network).hosts())\n        self.allocated = []\n\n    def allocate(self, ip):\n        if ip in self.hosts:\n            if ip not in self.allocated:\n                self.allocated.append(ip)\n            else:\n                raise ValueError(f"IP address {ip} is already in the allocated list")\n        else:\n            raise ValueError(f"IP address {ip} does not belong to {self.network}")\n')),Object(o.b)("p",null,"Using the class:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [2]: net1 = Network(\"10.1.1.0/29\")\n\nIn [3]: net1.allocate(\"10.1.1.1\")\n\nIn [4]: net1.allocate(\"10.1.1.2\")\n\nIn [5]: net1.allocated\nOut[5]: ['10.1.1.1', '10.1.1.2']\n\nIn [6]: net1.allocate(\"10.1.1.100\")\n---------------------------------------------------------------------------\nValueError                                Traceback (most recent call last)\n<ipython-input-6-9a4157e02c78> in <module>\n----\x3e 1 net1.allocate(\"10.1.1.100\")\n\n<ipython-input-1-c5255d37a7fd> in allocate(self, ip)\n     12             raise ValueError(f\"IP address {ip} is already in the allocated list\")\n     13     else:\n---\x3e 14         raise ValueError(f\"IP address {ip} does not belong to {self.network}\")\n     15\n\nValueError: IP address 10.1.1.100 does not belong to 10.1.1.0/29\n\nIn [7]: net1.hosts\nOut[7]: ('10.1.1.1', '10.1.1.2', '10.1.1.3', '10.1.1.4', '10.1.1.5', '10.1.1.6')\n")))}p.isMDXComponent=!0}}]);