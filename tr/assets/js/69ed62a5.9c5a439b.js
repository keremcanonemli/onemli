(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),i=n(8),r=(n(0),n(280)),o={id:"textfsm_template_syntax",title:"Textfsm Template Syntax",sidebar_label:"21.2 Textfsm Template Syntax",slug:"textfsm_template_syntax",custom_edit_url:null},l={unversionedId:"python/textfsm/textfsm_template_syntax",id:"python/textfsm/textfsm_template_syntax",isDocsHomePage:!1,title:"Textfsm Template Syntax",description:"This section covers template syntax based on TextFSM documentation. The following section shows examples of syntax usage. Therefore, you can move to the next section and return to this section as necessary for those situations for which there is no example and when you need to recall the meaning of parameter.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/python/textfsm/2_textfsm_template_syntax.md",slug:"/python/textfsm/textfsm_template_syntax",permalink:"/tr/docs/python/textfsm/textfsm_template_syntax",editUrl:null,version:"current",sidebar_label:"21.2 Textfsm Template Syntax",sidebar:"someSidebar",previous:{title:"Getting Started With Textfsm",permalink:"/tr/docs/python/textfsm/getting_started_with_textfsm"},next:{title:"State Rules",permalink:"/tr/docs/python/textfsm/state_rules"}},s=[{value:"Value definition",id:"value-definition",children:[]},{value:"State definition",id:"state-definition",children:[{value:"Reserved states",id:"reserved-states",children:[]}]}],c={toc:s};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This section covers template syntax based on TextFSM documentation. The following section shows examples of syntax usage. Therefore, you can move to the next section and return to this section as necessary for those situations for which there is no example and when you need to recall the meaning of parameter."),Object(r.b)("p",null,"TextFSM template describes how data should be processed. Each template consists of two parts:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"value definitions (or variable definitions) - these variables describe which columns will be in the table view"),Object(r.b)("li",{parentName:"ul"},"state definitions")),Object(r.b)("p",null,"Example of traceroute command examination:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Value ID (\\d+)\nValue Hop (\\d+(\\.\\d+){3})\n\nStart\n   ^  ${ID} ${Hop} -> Record\n")),Object(r.b)("h2",{id:"value-definition"},"Value definition"),Object(r.b)("p",null,"Only value definitions should be used in value section. The only exception there may be comments in this section. This section should not contain empty strings. For TextFSM, an empty string means the end of value definition section."),Object(r.b)("p",null,"Format of value description:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Value [option[,option...]] name regex\n")),Object(r.b)("p",null,"Syntax of value description (for each option below we will consider examples):"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Value")," - keyword that indicates that a value is being created. It must be specified"),Object(r.b)("li",{parentName:"ul"},"option - options that define how to work with a variable. If several options are to be specified, they must be separated by a comma, without spaces. These options are supported:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Filldown")," - value that previously matched with a regex, remembered until the next processing line (if has not been explicitly cleared or matched again). This means that the last column value that matches regex is stored and used in the following strings if this column is not present."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Key")," - determines that this field contains a unique string identifier"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Required")," - string that is processed will only be written if this value is present."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"List")," - value is a list, and each match with a regex will add an item to the list. By default, each next match overwrites the previous one."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Fillup")," - works as Filldown but fills empty value up until it finds a match. Not compatible with Required."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"name")," - name of value that will be used as column name. Reserved names should not be used as value names."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"regex")," - regex that describes a value. regex should be in curly braces.")),Object(r.b)("h2",{id:"state-definition"},"State definition"),Object(r.b)("p",null,"After defining values, we need to defiine states:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"each state definition must be separated by an empty line (at least one)"),Object(r.b)("li",{parentName:"ul"},"first line - state name"),Object(r.b)("li",{parentName:"ul"},"then follows lines that describe rules. Rules must start with two spaces and caret symbol ",Object(r.b)("inlineCode",{parentName:"li"},"^"))),Object(r.b)("p",null,"Initial state is always ",Object(r.b)("inlineCode",{parentName:"p"},"Start"),". Input data is compared to the current state but rule line can specify that you want to go to a different state."),Object(r.b)("p",null,"Checking is done line-by-line until ",Object(r.b)("inlineCode",{parentName:"p"},"EOF")," (end of file) is reached or the current state goes to ",Object(r.b)("inlineCode",{parentName:"p"},"End")," state."),Object(r.b)("h3",{id:"reserved-states"},"Reserved states"),Object(r.b)("p",null,"The following states are reserved:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Start")," - state that must be specified. Without it the template won\u2019t work."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"End")," - state that completes processing of incoming strings and does not execute ",Object(r.b)("inlineCode",{parentName:"li"},"EOF")," state."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"EOF")," - implicit state that always executes when processing reaches the end of the file. It looks like this:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"EOF\n  ^.* -> Record\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"EOF")," writes down the current string before it is finished. If this behavior needs to be changed you should explicitly write EOF at the end of template:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"EOF\n")))}u.isMDXComponent=!0},280:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||r;return n?i.a.createElement(m,l(l({ref:t},c),{},{components:n})):i.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);