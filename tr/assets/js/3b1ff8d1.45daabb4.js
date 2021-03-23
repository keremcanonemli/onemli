(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{126:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return b}));var r=t(3),a=t(8),o=(t(0),t(281)),i={id:"function_re_sub",title:"Function Re.Sub",sidebar_label:"Function Re.Sub",slug:"function_re.sub",custom_edit_url:null},c={unversionedId:"python/15_module_re/function_re_sub",id:"python/15_module_re/function_re_sub",isDocsHomePage:!1,title:"Function Re.Sub",description:"Function re.sub works similary to replace method in strings. But in re.sub you can use regex and therefore make substitutions using more complex conditions. Replace commas, square brackets and via word with space in ospf_route string:",source:"@site/docs/python/15_module_re/10_function_resub.md",slug:"/python/15_module_re/function_re.sub",permalink:"/tr/docs/python/15_module_re/function_re.sub",editUrl:null,version:"current",sidebar_label:"Function Re.Sub",sidebar:"someSidebar",previous:{title:"Function Re.Split",permalink:"/tr/docs/python/15_module_re/function_re.split"},next:{title:"Further Reading",permalink:"/tr/docs/python/15_module_re/further_reading"}},u=[],s={toc:u};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Function ",Object(o.b)("inlineCode",{parentName:"p"},"re.sub")," works similary to ",Object(o.b)("inlineCode",{parentName:"p"},"replace")," method in strings. But in ",Object(o.b)("inlineCode",{parentName:"p"},"re.sub")," you can use regex and therefore make substitutions using more complex conditions. Replace commas, square brackets and via word with space in ospf_route string:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [7]: ospf_route = 'O    10.0.24.0/24 [110/41] via 10.0.13.3, 3d18h, FastEthernet0/0'\n\nIn [8]: re.sub(r'(via|[,\\[\\]])', ' ', ospf_route)\nOut[8]: 'O        10.0.24.0/24  110/41    10.0.13.3  3d18h  FastEthernet0/0'\n")),Object(o.b)("p",null,"With ",Object(o.b)("inlineCode",{parentName:"p"},"re.sub")," you can transform a string. For example, convert mac_table string to:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [9]: mac_table = '''\n   ...:  100    aabb.cc10.7000    DYNAMIC     Gi0/1\n   ...:  200    aabb.cc20.7000    DYNAMIC     Gi0/2\n   ...:  300    aabb.cc30.7000    DYNAMIC     Gi0/3\n   ...:  100    aabb.cc40.7000    DYNAMIC     Gi0/4\n   ...:  500    aabb.cc50.7000    DYNAMIC     Gi0/5\n   ...:  200    aabb.cc60.7000    DYNAMIC     Gi0/6\n   ...:  300    aabb.cc70.7000    DYNAMIC     Gi0/7\n   ...: '''\n\nIn [4]: print(re.sub(r' *(\\d+) +'\n   ...:              r'([a-f0-9]+)\\.'\n   ...:              r'([a-f0-9]+)\\.'\n   ...:              r'([a-f0-9]+) +\\w+ +'\n   ...:              r'(\\S+)',\n   ...:              r'\\1 \\2:\\3:\\4 \\5',\n   ...:              mac_table))\n   ...:\n\n100 aabb:cc10:7000 Gi0/1\n200 aabb:cc20:7000 Gi0/2\n300 aabb:cc30:7000 Gi0/3\n100 aabb:cc40:7000 Gi0/4\n500 aabb:cc50:7000 Gi0/5\n200 aabb:cc60:7000 Gi0/6\n300 aabb:cc70:7000 Gi0/7\n")),Object(o.b)("p",null,"Regex is divided into groups:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"(\\d+)")," - the first group. VLAN number gets here"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"([a-f0-9]+).([a-f0-9]+).([a-f0-9]+)")," - the following three groups (2, 3, 4) describe MAC address"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"(\\S+)")," - the fifth group. Describes an interface.")),Object(o.b)("p",null,"In a second regex these groups are used. To refer to a group a backslash and a group number are used. To avoid backslash screening, raw string is used. As a result, the corresponding substrings will be substituted instead of group numbers. For example, format of MAC address record was also changed."))}b.isMDXComponent=!0},281:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),b=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=b(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=b(t),d=r,m=l["".concat(i,".").concat(d)]||l[d]||p[d]||o;return t?a.a.createElement(m,c(c({ref:n},s),{},{components:t})):a.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);