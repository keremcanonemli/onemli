(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{107:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(8),o=(t(0),t(281)),c={id:"match_function",title:"Match Function",sidebar_label:"Match Function",slug:"match_function",custom_edit_url:null},i={unversionedId:"python/15_module_re/match_function",id:"python/15_module_re/match_function",isDocsHomePage:!1,title:"Match Function",description:"Function match:",source:"@site/docs/python/15_module_re/4_match_function.md",slug:"/python/15_module_re/match_function",permalink:"/docs/python/15_module_re/match_function",editUrl:null,version:"current",sidebar_label:"Match Function",sidebar:"someSidebar",previous:{title:"Search Function",permalink:"/docs/python/15_module_re/search_function"},next:{title:"Finditer Function",permalink:"/docs/python/15_module_re/finditer_function"}},p=[],l={toc:p};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Function ",Object(o.b)("inlineCode",{parentName:"p"},"match"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"is used to search at the beginning of string that corresponds to regex"),Object(o.b)("li",{parentName:"ul"},"returns Match object if match is found"),Object(o.b)("li",{parentName:"ul"},"returns ",Object(o.b)("inlineCode",{parentName:"li"},"None")," if no match was found")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Match")," function differs from ",Object(o.b)("inlineCode",{parentName:"p"},"search")," in that ",Object(o.b)("inlineCode",{parentName:"p"},"match")," always looks for a match at the beginning of the line. For example, if you repeat the example that was used for ",Object(o.b)("inlineCode",{parentName:"p"},"search")," function, but with ",Object(o.b)("inlineCode",{parentName:"p"},"match"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [2]: import re\n\nIn [3]: log = '%SW_MATM-4-MACFLAP_NOTIF: Host 01e2.4c18.0156 in vlan 10 is flapping between port Gi0/16 and port Gi0/24'\n\nIn [4]: match = re.match(r'Host \\S+ '\n   ...:                  r'in vlan (\\d+) '\n   ...:                  r'is flapping between port '\n   ...:                  r'(\\S+) and port (\\S+)', log)\n   ...:\n")),Object(o.b)("p",null,"The result will be None:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [6]: print(match)\nNone\n")),Object(o.b)("p",null,"This is because ",Object(o.b)("inlineCode",{parentName:"p"},"match")," searches for Host word at the beginning of the line. But this message is in the middle."),Object(o.b)("p",null,"In this case it is easy to fix expression so that match() function finds match:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [4]: match = re.match(r'\\S+: Host \\S+ '\n   ...:                  r'in vlan (\\d+) '\n   ...:                  r'is flapping between port '\n   ...:                  r'(\\S+) and port (\\S+)', log)\n   ...:\n")),Object(o.b)("p",null,"Expression ",Object(o.b)("inlineCode",{parentName:"p"},"\\S+:")," was added before ",Object(o.b)("em",{parentName:"p"},"Host")," word. Now match will be found:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"In [11]: print(match)\n<_sre.SRE_Match object; span=(0, 104), match='%SW_MATM-4-MACFLAP_NOTIF: Host 01e2.4c18.0156 in >\n\nIn [12]: match.groups()\nOut[12]: ('10', 'Gi0/16', 'Gi0/24')\n")),Object(o.b)("p",null,"Example is similar to one used in ",Object(o.b)("inlineCode",{parentName:"p"},"search")," function with minor changes (parse_log_match match.py file):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"import re\n\nregex = (r'\\S+: Host \\S+ '\n         r'in vlan (\\d+) '\n         r'is flapping between port '\n         r'(\\S+) and port (\\S+)')\n\nports = set()\n\nwith open('log.txt') as f:\n    for line in f:\n        match = re.match(regex, line)\n        if match:\n            vlan = match.group(1)\n            ports.add(match.group(2))\n            ports.add(match.group(3))\n\nprint('Loop between ports {} in VLAN {}'.format(', '.join(ports), vlan))\n")),Object(o.b)("p",null,"The result is:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ python parse_log_match.py\nLoop between ports Gi0/19, Gi0/24, Gi0/16 in VLAN 10\n")))}u.isMDXComponent=!0},281:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(t),m=r,d=s["".concat(c,".").concat(m)]||s[m]||b[m]||o;return t?a.a.createElement(d,i(i({ref:n},l),{},{components:t})):a.a.createElement(d,i({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);