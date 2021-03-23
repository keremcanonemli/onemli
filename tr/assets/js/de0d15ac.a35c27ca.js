(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{259:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return c}));var n=r(3),a=r(8),o=(r(0),r(280)),i={id:"generator",title:"Generator",sidebar_label:"13.3 Generator",slug:"generator",custom_edit_url:null},s={unversionedId:"python/iterator_generator/generator",id:"python/iterator_generator/generator",isDocsHomePage:!1,title:"Generator",description:"Generators are a special class of functions that allows you to easily create your own iterators. Unlike regular functions, a generator doesn\u2019t just return a value and exit, but returns an iterator that returns the elements one at a time.",source:"@site/docs/python/iterator_generator/3_generator.md",slug:"/python/iterator_generator/generator",permalink:"/tr/docs/python/iterator_generator/generator",editUrl:null,version:"current",sidebar_label:"13.3 Generator",sidebar:"someSidebar",previous:{title:"Iterators",permalink:"/tr/docs/python/iterator_generator/iterators"},next:{title:"Further Reading",permalink:"/tr/docs/python/iterator_generator/further_reading"}},l=[{value:"generator expression",id:"generator-expression",children:[]}],u={toc:l};function c(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Generators are a special class of functions that allows you to easily create your own iterators. Unlike regular functions, a generator doesn\u2019t just return a value and exit, but returns an iterator that returns the elements one at a time."),Object(o.b)("p",null,"Note"),Object(o.b)("p",null,"Generators are not covered in this book and are only mentioned here because they are a fairly straightforward way to create iterators. ",Object(o.b)("a",{parentName:"p",href:"https://advpyneng.readthedocs.io/ru/latest/book/14_generators/further_reading.html"},"More about generators")),Object(o.b)("p",null,"A normal function exits if:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"execution reached the ",Object(o.b)("inlineCode",{parentName:"li"},"return")," statement"),Object(o.b)("li",{parentName:"ul"},"function code is ended (this works as ",Object(o.b)("inlineCode",{parentName:"li"},"return None")," expression)"),Object(o.b)("li",{parentName:"ul"},"an exception raised")),Object(o.b)("p",null,"After function execution is finished the control is returned and program execution goes further. All arguments that were passed to function like local variables, all of this is lost. Only the result that returned a function remains."),Object(o.b)("p",null,"A function can return a list of elements, multiple objects or different results depending on arguments, but it always returns a single result."),Object(o.b)("p",null,"Generator generates values. Values are then returned on demand and after return of one value a function-generator is suspended until the next value is requested. Between requests, generator retains its state."),Object(o.b)("p",null,"Python allows generators to be created in two ways:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"generator expression"),Object(o.b)("li",{parentName:"ul"},"generator function")),Object(o.b)("h2",{id:"generator-expression"},"generator expression"),Object(o.b)("p",null,"Generator expression uses the same syntax as a list comprehensions, but returns iterator, not list (not\u0435 the parentheses instead of the square brackets):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [1]: genexpr = (x**2 for x in range(10000))\n\nIn [2]: genexpr\nOut[2]: <generator object <genexpr> at 0xb571ec8c>\n\nIn [3]: next(genexpr)\nOut[3]: 0\n\nIn [4]: next(genexpr)\nOut[4]: 1\n\nIn [5]: next(genexpr)\nOut[5]: 4\n")),Object(o.b)("p",null,"It is useful when working with a large iterable object or infinite iterator."))}c.isMDXComponent=!0},280:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),c=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return r?a.a.createElement(f,s(s({ref:t},u),{},{components:r})):a.a.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);