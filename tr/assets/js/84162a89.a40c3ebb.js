(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{185:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(8),o=(t(0),t(281)),s={id:"class_namespace",title:"Class Namespace",sidebar_label:"Class Namespace",slug:"class_namespace",custom_edit_url:null},i={unversionedId:"python/oop_basics/class_namespace",id:"python/oop_basics/class_namespace",isDocsHomePage:!1,title:"Class Namespace",description:"Each method in class has its own local visibility area. This means that one class method does not see variables of another class method. For variables to be available, you have to assign their instance through self.name. Basically, method is a function tied to an object. Therefore, all nuances that concern function apply to methods.",source:"@site/docs/python/oop_basics/7_class_namespace.md",slug:"/python/oop_basics/class_namespace",permalink:"/tr/docs/python/oop_basics/class_namespace",editUrl:null,version:"current",sidebar_label:"Class Namespace",sidebar:"someSidebar",previous:{title:"Class Example",permalink:"/tr/docs/python/oop_basics/class_example"},next:{title:"Class Variables",permalink:"/tr/docs/python/oop_basics/class_variables"}},c=[],l={toc:c};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Each method in class has its own local visibility area. This means that one class method does not see variables of another class method. For variables to be available, you have to assign their instance through ",Object(o.b)("inlineCode",{parentName:"p"},"self.name"),". Basically, method is a function tied to an object. Therefore, all nuances that concern function apply to methods."),Object(o.b)("p",null,"Variable instances are available in another method because instance itself is passed as a first argument to each method. In example below in ",Object(o.b)("inlineCode",{parentName:"p"},"__init__")," method, ",Object(o.b)("inlineCode",{parentName:"p"},"hostname")," and ",Object(o.b)("inlineCode",{parentName:"p"},"model")," variables are assigned to an instance and then used in ",Object(o.b)("inlineCode",{parentName:"p"},"info")," due to instance being passed as a first argument:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"class Switch:\n    def __init__(self, hostname, model):\n        self.hostname = hostname\n        self.model = model\n\n    def info(self):\n        print(f'Hostname: {self.hostname}\\nModel: {self.model}')\n")))}p.isMDXComponent=!0},281:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),b=a,d=u["".concat(s,".").concat(b)]||u[b]||m[b]||o;return t?r.a.createElement(d,i(i({ref:n},l),{},{components:t})):r.a.createElement(d,i({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=b;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);