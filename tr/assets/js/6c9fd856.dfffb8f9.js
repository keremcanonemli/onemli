(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{169:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return a})),n.d(e,"metadata",(function(){return s})),n.d(e,"toc",(function(){return u})),n.d(e,"default",(function(){return l}));var i=n(3),r=n(8),o=(n(0),n(280)),a={id:"displaying_repository_status_in_invitation",title:"Displaying Repository Status In Invitation",sidebar_label:"2.2 Displaying Repository Status In Invitation",slug:"displaying_repository_status_in_invitation",custom_edit_url:null},s={unversionedId:"python/git_github/displaying_repository_status_in_invitation",id:"python/git_github/displaying_repository_status_in_invitation",isDocsHomePage:!1,title:"Displaying Repository Status In Invitation",description:"This is an additional functionality that is not required to work with Git but is very helpful in this regard. When working with Git it is very convenient when you can immediately determine whether you are in a regular directory or in a Git repository. In addition, it would be good to understand status of current repository. To do this, you need to install a special utility that will show status of repository. To install utility, copy its repository to user\u2019s home directory under which you work:",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/python/git_github/2_displaying_repository_status.md",slug:"/python/git_github/displaying_repository_status_in_invitation",permalink:"/tr/docs/python/git_github/displaying_repository_status_in_invitation",editUrl:null,version:"current",sidebar_label:"2.2 Displaying Repository Status In Invitation",sidebar:"someSidebar",previous:{title:"Git Fundamentals",permalink:"/tr/docs/python/git_github/git_fundamentals"},next:{title:"Working With Git",permalink:"/tr/docs/python/git_github/working_with_git"}},u=[],p={toc:u};function l(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(o.b)("wrapper",Object(i.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This is an additional functionality that is not required to work with Git but is very helpful in this regard. When working with Git it is very convenient when you can immediately determine whether you are in a regular directory or in a Git repository. In addition, it would be good to understand status of current repository. To do this, you need to install a special ",Object(o.b)("a",{parentName:"p",href:"https://github.com/magicmonty/bash-git-prompt/"},"utility")," that will show status of repository. To install utility, copy its repository to user\u2019s home directory under which you work:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"cd ~\ngit clone https://github.com/magicmonty/bash-git-prompt.git .bash-git-prompt --depth=1\n")),Object(o.b)("p",null,"And then add to the end of ",Object(o.b)("inlineCode",{parentName:"p"},"~/.bashrc")," file such lines:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"GIT_PROMPT_ONLY_IN_REPO=1\nsource ~/.bash-git-prompt/gitprompt.sh\n")),Object(o.b)("p",null,"To apply changes, restart bash:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"exec bash\n")),Object(o.b)("p",null,"In my configuration command line invitation is spread over several lines, so you will have a different one. Please note that additional information appears when you move to repository."),Object(o.b)("p",null,"Now, if you\u2019re in a regular catalog, invitation is like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[~]\nvagrant@jessie-i386:\n$\n")),Object(o.b)("p",null,"If you go to Git repository:"))}l.isMDXComponent=!0},280:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return b}));var i=n(0),r=n.n(i);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=r.a.createContext({}),l=function(t){var e=r.a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},c=function(t){var e=l(t.components);return r.a.createElement(p.Provider,{value:e},t.children)},y={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},d=r.a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,a=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),c=l(n),d=i,b=c["".concat(a,".").concat(d)]||c[d]||y[d]||o;return n?r.a.createElement(b,s(s({ref:e},p),{},{components:n})):r.a.createElement(b,s({ref:e},p))}));function b(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s.mdxType="string"==typeof t?t:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);