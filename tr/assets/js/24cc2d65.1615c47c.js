(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),i=(n(0),n(280)),l={id:"state_rules",title:"State Rules",sidebar_label:"21.3 State Rules",slug:"state_rules",custom_edit_url:null},o={unversionedId:"python/textfsm/state_rules",id:"python/textfsm/state_rules",isDocsHomePage:!1,title:"State Rules",description:"Each state consists of one or more rules:",source:"@site/docs/python/textfsm/3_state_rules.md",slug:"/python/textfsm/state_rules",permalink:"/tr/docs/python/textfsm/state_rules",editUrl:null,version:"current",sidebar_label:"21.3 State Rules",sidebar:"someSidebar",previous:{title:"Textfsm Template Syntax",permalink:"/tr/docs/python/textfsm/textfsm_template_syntax"},next:{title:"Examples Of Textfsm Usage",permalink:"/tr/docs/python/textfsm/examples_of_textfsm_usage"}},c=[{value:"Action in rules",id:"action-in-rules",children:[{value:"Line Actions",id:"line-actions",children:[]},{value:"Record Action",id:"record-action",children:[]},{value:"State Transition",id:"state-transition",children:[]},{value:"Error Action",id:"error-action",children:[]}]}],s={toc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Each state consists of one or more rules:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"TextFSM handles incoming strings and compares them to rules"),Object(i.b)("li",{parentName:"ul"},"if rule (regex) matches the string, actions in rule are executed and for the next string the process is repeated from the beginning of state.")),Object(i.b)("p",null,"Rules should be written in this format:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"^regex [-> action]\n")),Object(i.b)("p",null,"In rule:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"each rule must start with two spaces and caret symbol ",Object(i.b)("inlineCode",{parentName:"li"},"^"),". Caret symbol ",Object(i.b)("inlineCode",{parentName:"li"},"^")," means the beginning of a line and must always be clearly indicated"),Object(i.b)("li",{parentName:"ul"},"regex - regex in which variables can be used",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"to specify variable you can use syntax like ",Object(i.b)("inlineCode",{parentName:"li"},"$ValueName")," or ",Object(i.b)("inlineCode",{parentName:"li"},"${ValueName}"),"(preferred format)"),Object(i.b)("li",{parentName:"ul"},"in rule, variables are substituted by regex"),Object(i.b)("li",{parentName:"ul"},"if you want to explicitly specify end of line, use ",Object(i.b)("inlineCode",{parentName:"li"},"$$"))))),Object(i.b)("h2",{id:"action-in-rules"},"Action in rules"),Object(i.b)("p",null,"After regex, rule may indicate actions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"there must be ",Object(i.b)("inlineCode",{parentName:"p"},"->")," character between regex and action")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"actions can consist of three parts in such format:"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"L.R S\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"L - Line Action")," - actions that apply to an input string")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"R - Record Action")," - actions that apply to collected values")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"S - State Transition")," - changing state")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"By default ",Object(i.b)("inlineCode",{parentName:"p"},"Next.NoRecord")," is used"))),Object(i.b)("h3",{id:"line-actions"},"Line Actions"),Object(i.b)("p",null,"Line Actions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Next")," - process the line, read the next line and start checking it from the beginning. This action is used by default unless otherwise specified"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Continue")," - continue to process rules as if there was no match while values are assigned")),Object(i.b)("h3",{id:"record-action"},"Record Action"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Record Action")," - optional action that can be specified after Line Action. They must be separated by a dot. Types of actions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"NoRecord")," - do nothing. This is default action when no other is specified"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Record")," - all variables except those with Filldown option are reset."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Clear")," - reset all variables except those where Filldown option is specified."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Clearall")," - reset all variables.")),Object(i.b)("p",null,"You need to split actions with a dot only if you want to specify both Line and Record actions. If you need to specify only one of them, dot is not required."),Object(i.b)("h3",{id:"state-transition"},"State Transition"),Object(i.b)("p",null,"A new state can be specified after action:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"state must be one of reserved or defined in template"),Object(i.b)("li",{parentName:"ul"},"if input line matches:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"all actions are executed,"),Object(i.b)("li",{parentName:"ul"},"the next line is read,"),Object(i.b)("li",{parentName:"ul"},"then the current state changes to a new state and processing continues in new state.")))),Object(i.b)("p",null,"If rule uses ",Object(i.b)("inlineCode",{parentName:"p"},"Continue")," action, it is not possible to change state inside this rule. This rule is needed to avoid loops in sequence of states."),Object(i.b)("h3",{id:"error-action"},"Error Action"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Error")," stops all line processing, discards all lines that have been collected so far and returns an exception."),Object(i.b)("p",null,"Syntax of this action is:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'^regex -> Error [word|"string"]\n')))}b.isMDXComponent=!0},280:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return n?r.a.createElement(m,o(o({ref:t},s),{},{components:n})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);