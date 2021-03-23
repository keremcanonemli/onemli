(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),i=n(8),o=(n(0),n(280)),a={id:"github_authentication",title:"Github Authentication",sidebar_label:"2.5 Github Authentication",slug:"github_authentication",custom_edit_url:null},u={unversionedId:"python/git_github/github_authentication",id:"python/git_github/github_authentication",isDocsHomePage:!1,title:"Github Authentication",description:"In order to start working with GitHub, you need to register on it. It is better to use SSH key authentication to work safely with Github.",source:"@site/docs/python/git_github/5_github_authentication.md",slug:"/python/git_github/github_authentication",permalink:"/docs/python/git_github/github_authentication",editUrl:null,version:"current",sidebar_label:"2.5 Github Authentication",sidebar:"someSidebar",previous:{title:"Additional Features",permalink:"/docs/python/git_github/additional_features"},next:{title:"Working With Own Repository",permalink:"/docs/python/git_github/working_with_own_repository"}},c=[{value:"Add SSH key to Github",id:"add-ssh-key-to-github",children:[]}],s={toc:c};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In order to start working with GitHub, you need to ",Object(o.b)("a",{parentName:"p",href:"https://github.com/join"},"register")," on it. It is better to use SSH key authentication to work safely with Github."),Object(o.b)("p",null,"Generation of a new SSH key (use e-mail that is linked to Github):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'$ ssh-keygen -t rsa -b 4096 -C "github_email@gmail.com"\n')),Object(o.b)("p",null,"On all questions, just press Enter. It is more secure to use passphrase but if you press Enter when asked then passphrase will not be requested from you permanently during operations with repository."),Object(o.b)("p",null,"Start SSH agent:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'$ eval "$(ssh-agent -s)"\n')),Object(o.b)("p",null,"Add key to SSH agent:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ ssh-add ~/.ssh/id_rsa\n")),Object(o.b)("h2",{id:"add-ssh-key-to-github"},"Add SSH key to Github"),Object(o.b)("p",null,"To add a key you have to copy it. For example, you can display key with cat to copy it:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ cat ~/.ssh/id_rsa.pub\n")),Object(o.b)("p",null,"After copying, go to Github. When you are on any Github page, in upper right-hand corner click on picture of your profile and select \u201cSettings\u201d in drop down list. In list on the left, select field \u201cSSH and GPG keys\u201d. Then press \u201cNew SSH key\u201d and in \u201cTitle\u201d field write key name (for example \u201cHome\u201d) and in field \u201cKey\u201d insert the content that was copied from file ~/. ssh/id_rsa.pub."),Object(o.b)("p",null,"Note"),Object(o.b)("p",null,"If Github requests a password, enter your account password on Github."),Object(o.b)("p",null,"To check if everything has been successful, try executing command ",Object(o.b)("inlineCode",{parentName:"p"},"ssh -T git@github.com"),"."),Object(o.b)("p",null,"The output should be as follows:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ ssh -T git@github.com\nHi username! You've successfully authenticated, but GitHub does not provide shell access.\n")),Object(o.b)("p",null,"Now you are ready to work with Git and Github."))}l.isMDXComponent=!0},280:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),l=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},b=function(e){var t=l(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=l(n),h=r,d=b["".concat(a,".").concat(h)]||b[h]||p[h]||o;return n?i.a.createElement(d,u(u({ref:t},s),{},{components:n})):i.a.createElement(d,u({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=h;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);