(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{210:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),i=(n(0),n(280)),o={id:"getting_started_with_textfsm",title:"Getting Started With Textfsm",sidebar_label:"21.1 Getting Started With Textfsm",slug:"getting_started_with_textfsm",custom_edit_url:null},l={unversionedId:"python/textfsm/getting_started_with_textfsm",id:"python/textfsm/getting_started_with_textfsm",isDocsHomePage:!1,title:"Getting Started With Textfsm",description:"First, library must be installed:",source:"@site/docs/python/textfsm/1_getting_started_with_textfsm.md",slug:"/python/textfsm/getting_started_with_textfsm",permalink:"/tr/docs/python/textfsm/getting_started_with_textfsm",editUrl:null,version:"current",sidebar_label:"21.1 Getting Started With Textfsm",sidebar:"someSidebar",previous:{title:"Parsing Command Output With Textfsm",permalink:"/tr/docs/python/textfsm/parsing_command_output_with_textfsm"},next:{title:"Textfsm Template Syntax",permalink:"/tr/docs/python/textfsm/textfsm_template_syntax"}},c=[],s={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"First, library must be installed:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"pip install textfsm\n")),Object(i.b)("p",null,"To use TextFSM you should create a template to handle the output of command."),Object(i.b)("p",null,"Example of traceroute command output:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"r2#traceroute 90.0.0.9 source 33.0.0.2\ntraceroute 90.0.0.9 source 33.0.0.2\nType escape sequence to abort.\nTracing the route to 90.0.0.9\nVRF info: (vrf in name/id, vrf out name/id)\n  1 10.0.12.1 1 msec 0 msec 0 msec\n  2 15.0.0.5  0 msec 5 msec 4 msec\n  3 57.0.0.7  4 msec 1 msec 4 msec\n  4 79.0.0.9  4 msec *  1 msec\n")),Object(i.b)("p",null,"For example, you have to get hops that packet went through."),Object(i.b)("p",null,"In this case TextFSM template will look like this (traceroute.template file):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"Value ID (\\d+)\nValue Hop (\\S+)\n\nStart\n  ^  ${ID} ${Hop} +\\d+ -> Record\n")),Object(i.b)("p",null,"First two lines define variables:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Value ID (\\d+)")," - this line defines an ",Object(i.b)("inlineCode",{parentName:"li"},"ID")," variable that describes a regular expression: ",Object(i.b)("inlineCode",{parentName:"li"},"(\\d+)")," - one or more digits, here are the hop numbers"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Value Hop (\\S+)")," - line that defines a ",Object(i.b)("inlineCode",{parentName:"li"},"Hop")," variable that describes an IP address by such regular expression")),Object(i.b)("p",null,"After ",Object(i.b)("inlineCode",{parentName:"p"},"Start")," line, the template itself begins. In this case, it\u2019s very simple:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"^ ${ID} ${Hop} -> Record")),Object(i.b)("li",{parentName:"ul"},"first goes caret sign, then two spaces and ",Object(i.b)("inlineCode",{parentName:"li"},"ID")," and ",Object(i.b)("inlineCode",{parentName:"li"},"Hop")," variables"),Object(i.b)("li",{parentName:"ul"},"in TextFSM the variables are written like this: ",Object(i.b)("inlineCode",{parentName:"li"},"${variable name}")),Object(i.b)("li",{parentName:"ul"},"word ",Object(i.b)("inlineCode",{parentName:"li"},"Record")," at the end means that lines that matches regular expression will be processed and included in the results of TextFSM (we\u2019ll look at this in the next section)")),Object(i.b)("p",null,"Script to process output of traceroute command with TextFSM (parse_traceroute.py):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"import textfsm\n\ntraceroute = '''\nr2#traceroute 90.0.0.9 source 33.0.0.2\ntraceroute 90.0.0.9 source 33.0.0.2\nType escape sequence to abort.\nTracing the route to 90.0.0.9\nVRF info: (vrf in name/id, vrf out name/id)\n  1 10.0.12.1 1 msec 0 msec 0 msec\n  2 15.0.0.5  0 msec 5 msec 4 msec\n  3 57.0.0.7  4 msec 1 msec 4 msec\n  4 79.0.0.9  4 msec *  1 msec\n'''\n\nwith open('traceroute.template') as template:\n    fsm = textfsm.TextFSM(template)\n    result = fsm.ParseText(traceroute)\n\nprint(fsm.header)\nprint(result)\n")),Object(i.b)("p",null,"The result of script execution:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ python parse_traceroute.py\n['ID', 'Hop']\n[['1', '10.0.12.1'], ['2', '15.0.0.5'], ['3', '57.0.0.7'], ['4', '79.0.0.9']]\n")),Object(i.b)("p",null,"Lines that match the described template are returned as a list of lists. Each element is a list that consists of two elements: hop number and IP address."),Object(i.b)("p",null,"Let\u2019s sort out the content of script:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"traceroute - a variable that contains traceroute command output"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"template = open('traceroute.template')")," - content of TextFSM template file is read into a ",Object(i.b)("em",{parentName:"li"},"template")," variable"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"fsm = textfsm.TextFSM(template)")," - class that processes a template and creates an object from it in TextFSM"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"result = fsm.ParseText(traceroute)")," - method that handles output according to a template and returns a list of lists in which each element is a processed string"),Object(i.b)("li",{parentName:"ul"},"At the end, ",Object(i.b)("inlineCode",{parentName:"li"},"print(fsm.header)")," header is displayed which contains variable names and processing result")),Object(i.b)("p",null,"We can work with that output further. For example, periodically execute traceroute command and compare whether the number of hops and their order has changed."),Object(i.b)("p",null,"To work with TextFSM you need command output and template:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"different commands need different templates"),Object(i.b)("li",{parentName:"ul"},"TextFSM returns a tabular processing result (as a list of lists)"),Object(i.b)("li",{parentName:"ul"},"this output is easily converted to csv format or to a list of dictionaries")))}p.isMDXComponent=!0},280:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,d=u["".concat(o,".").concat(b)]||u[b]||m[b]||i;return n?a.a.createElement(d,l(l({ref:t},s),{},{components:n})):a.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);