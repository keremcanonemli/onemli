(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{206:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return o})),n.d(e,"metadata",(function(){return g})),n.d(e,"toc",(function(){return c})),n.d(e,"default",(function(){return l}));var a=n(3),i=n(8),r=(n(0),n(280)),o={id:"additional_features",title:"Additional Features",sidebar_label:"2.4 Additional Features",slug:"additional_features",custom_edit_url:null},g={unversionedId:"python/git_github/additional_features",id:"python/git_github/additional_features",isDocsHomePage:!1,title:"Additional Features",description:"git diff",source:"@site/docs/python/git_github/4_additional_features.md",slug:"/python/git_github/additional_features",permalink:"/docs/python/git_github/additional_features",editUrl:null,version:"current",sidebar_label:"2.4 Additional Features",sidebar:"someSidebar",previous:{title:"Working With Git",permalink:"/docs/python/git_github/working_with_git"},next:{title:"Github Authentication",permalink:"/docs/python/git_github/github_authentication"}},c=[{value:"git diff",id:"git-diff",children:[]},{value:"git log",id:"git-log",children:[]}],s={toc:c};function l(t){var e=t.components,n=Object(i.a)(t,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"git-diff"},"git diff"),Object(r.b)("p",null,"Command ",Object(r.b)("inlineCode",{parentName:"p"},"git diff")," allows you to see the difference between different states. For example, README and .gitignore files have been changed in repository."),Object(r.b)("p",null,"Command ",Object(r.b)("inlineCode",{parentName:"p"},"git status")," shows that both files have been changed"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/natenka/PyNEng/master/images/git/git_status_5.png",alt:"https://raw.githubusercontent.com/natenka/PyNEng/master/images/git/git_status_5.png"})),Object(r.b)("p",null,"Command ",Object(r.b)("inlineCode",{parentName:"p"},"git diff")," command shows what changes have been made since last commit"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/natenka/PyNEng/master/images/git/git_diff.png",alt:"https://raw.githubusercontent.com/natenka/PyNEng/master/images/git/git_diff.png"})),Object(r.b)("p",null,"If you add changes made to staging via ",Object(r.b)("inlineCode",{parentName:"p"},"git add")," command and run ",Object(r.b)("inlineCode",{parentName:"p"},"git diff")," again, it will show nothing"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/natenka/PyNEng/master/images/git/git_add_git_diff.png",alt:"https://raw.githubusercontent.com/natenka/PyNEng/master/images/git/git_add_git_diff.png"})),Object(r.b)("p",null,"To show the difference between staging and last commit, add parameter ",Object(r.b)("inlineCode",{parentName:"p"},"--staged")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/natenka/PyNEng/master/images/git/git_diff_staged.png",alt:"https://raw.githubusercontent.com/natenka/PyNEng/master/images/git/git_diff_staged.png"})),Object(r.b)("p",null,"Commit changes"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/natenka/PyNEng/master/images/git/git_commit_2.png",alt:"https://raw.githubusercontent.com/natenka/PyNEng/master/images/git/git_commit_2.png"})),Object(r.b)("h2",{id:"git-log"},"git log"),Object(r.b)("p",null,"Command ",Object(r.b)("inlineCode",{parentName:"p"},"git log")," command shows when last changes were made"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/natenka/PyNEng/master/images/git/git_log.png",alt:"https://raw.githubusercontent.com/natenka/PyNEng/master/images/git/git_log.png"})),Object(r.b)("p",null,"By default, command displays all commits starting from the nearest time. With help of additional parameters it is possible not only to look at information about commits but also what changes have been made."),Object(r.b)("p",null,"Flag ",Object(r.b)("inlineCode",{parentName:"p"},"-p")," allows you to display the differences that have been made by each commit"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/natenka/PyNEng/master/images/git/git_log_p.png",alt:"https://raw.githubusercontent.com/natenka/PyNEng/master/images/git/git_log_p.png"})),Object(r.b)("p",null,"Shorter output option can be displayed with flag ",Object(r.b)("inlineCode",{parentName:"p"},"--stat")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/natenka/PyNEng/master/images/git/git_log_stat.png",alt:"https://raw.githubusercontent.com/natenka/PyNEng/master/images/git/git_log_stat.png"})))}l.isMDXComponent=!0},280:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return b}));var a=n(0),i=n.n(a);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=i.a.createContext({}),l=function(t){var e=i.a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):g(g({},e),t)),n},p=function(t){var e=l(t.components);return i.a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.a.createElement(i.a.Fragment,{},e)}},m=i.a.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,o=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),p=l(n),m=a,b=p["".concat(o,".").concat(m)]||p[m]||u[m]||r;return n?i.a.createElement(b,g(g({ref:e},s),{},{components:n})):i.a.createElement(b,g({ref:e},s))}));function b(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,o=new Array(r);o[0]=m;var g={};for(var c in e)hasOwnProperty.call(e,c)&&(g[c]=e[c]);g.originalType=t,g.mdxType="string"==typeof t?t:a,o[1]=g;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);