(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(8),i=(n(0),n(280)),a={id:"working_with_repository_of_tasks_and_examples",title:"Working With Repository Of Tasks And Examples",sidebar_label:"2.7 Working With Repository Of Tasks And Examples",slug:"working_with_repository_of_tasks_and_examples",custom_edit_url:null},s={unversionedId:"python/git_github/working_with_repository_of_tasks_and_examples",id:"python/git_github/working_with_repository_of_tasks_and_examples",isDocsHomePage:!1,title:"Working With Repository Of Tasks And Examples",description:"All examples and tasks of book are published in a separate repository.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/python/git_github/7_working_with_repo_of_tasks_and_examples.md",slug:"/python/git_github/working_with_repository_of_tasks_and_examples",permalink:"/tr/docs/python/git_github/working_with_repository_of_tasks_and_examples",editUrl:null,version:"current",sidebar_label:"2.7 Working With Repository Of Tasks And Examples",sidebar:"someSidebar",previous:{title:"Working With Own Repository",permalink:"/tr/docs/python/git_github/working_with_own_repository"},next:{title:"Further Reading",permalink:"/tr/docs/python/git_github/further_reading"}},l=[{value:"Copying repository from Github",id:"copying-repository-from-github",children:[]},{value:"Updating local copy of repository",id:"updating-local-copy-of-repository",children:[]},{value:"View changes",id:"view-changes",children:[]},{value:"View changes that will be synchronized",id:"view-changes-that-will-be-synchronized",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"All examples and tasks of book are published in a separate ",Object(i.b)("a",{parentName:"p",href:"https://github.com/natenka/pyneng-examples-exercises-en"},"repository"),"."),Object(i.b)("h2",{id:"copying-repository-from-github"},"Copying repository from Github"),Object(i.b)("p",null,"Examples and tasks are sometimes updated, so it will be more convenient to clone this repository to your machine and periodically update it."),Object(i.b)("p",null,"To copy a repository from Github, run ",Object(i.b)("inlineCode",{parentName:"p"},"git clone"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ git clone https://github.com/natenka/pyneng-examples-exercises\nCloning into 'pyneng-examples-exercises'...\nremote: Counting objects: 1263, done.\nremote: Compressing objects: 100% (504/504), done.\nremote: Total 1263 (delta 735), reused 1263 (delta 735), pack-reused 0\nReceiving objects: 100% (1263/1263), 267.10 KiB | 444.00 KiB/s, done.\nResolving deltas: 100% (735/735), done.\nChecking connectivity... done.\n")),Object(i.b)("h2",{id:"updating-local-copy-of-repository"},"Updating local copy of repository"),Object(i.b)("p",null,"If you need to update local repository to synchronize it with Github version, you need to perform ",Object(i.b)("inlineCode",{parentName:"p"},"git pull")," from inside the created pyneng-examples-exercises directory."),Object(i.b)("p",null,"If there were no updates, output would be:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ git pull\nAlready up-to-date.\n")),Object(i.b)("p",null,"If there were updates, output would be something like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ git pull\nremote: Counting objects: 3, done.\nremote: Compressing objects: 100% (1/1), done.\nremote: Total 3 (delta 2), reused 3 (delta 2), pack-reused 0\nUnpacking objects: 100% (3/3), done.\nFrom https://github.com/natenka/pyneng-examples-exercises\n   49e9f1b..1eb82ad  master     -> origin/master\nUpdating 49e9f1b..1eb82ad\nFast-forward\n README.md | 2 +-\n 1 file changed, 1 insertion(+), 1 deletion(-)\n")),Object(i.b)("p",null,"Please note that only README.md file has been changed."),Object(i.b)("h2",{id:"view-changes"},"View changes"),Object(i.b)("p",null,"If you want to see what changes have been made, you can use ",Object(i.b)("inlineCode",{parentName:"p"},"git log"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ git log -p -1\ncommit 98e393c27e7aae4b41878d9d979c7587bfeb24b4\nAuthor: Nataliya Samoylenko <nataliya.samoylenko@gmail.com>\nDate:   Fri Aug 18 17:32:07 2017 +0300\n\n    Update task_24_4.md\n\ndiff --git a/exercises/24_ansible_for_network/task_24_4.md b/exercises/24_ansible_for_network/task_24_4.md\nindex c4307fa..137a221 100644\n--- a/exercises/24_ansible_for_network/task_24_4.md\n+++ b/exercises/24_ansible_for_network/task_24_4.md\n@@ -13,11 +13,12 @@\n * apply ACL to interface\n\n ACL should be like:\n+\n ip access-list extended INET-to-LAN\n  permit tcp 10.0.1.0 0.0.0.255 any eq www\n  permit tcp 10.0.1.0 0.0.0.255 any eq 22\n  permit icmp any any\n-\n+\n\n Check playbook execution on R1 router.\n")),Object(i.b)("p",null,"In this command ",Object(i.b)("inlineCode",{parentName:"p"},"-p")," flag indicates that the output of Linux diff utility should be displayed for changes, not just commit comment. In turn, ",Object(i.b)("inlineCode",{parentName:"p"},"-1")," indicates that only the latest commit should be shown."),Object(i.b)("h2",{id:"view-changes-that-will-be-synchronized"},"View changes that will be synchronized"),Object(i.b)("p",null,"The previous version of ",Object(i.b)("inlineCode",{parentName:"p"},"git log")," relies on number of commands but this is not always convenient. Before executing ",Object(i.b)("inlineCode",{parentName:"p"},"git pull")," you can see what changes have been made since last synchronization."),Object(i.b)("p",null,"The following command shall be used:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ git log -p ..origin/master\ncommit 4c1821030d20b3682b67caf362fd777d098d9126\nAuthor: Nataliya Samoylenko <nataliya.samoylenko@gmail.com>\nDate:   Mon May 29 07:53:45 2017 +0300\n\nUpdate README.md\n\ndiff --git a/tools/README.md b/tools/README.md\nindex 2b6f380..4f8d4af 100644\n--- a/tools/README.md\n+++ b/tools/README.md\n@@ -1 +1,4 @@\n+\n+Here you can find PDF versions of configuration manuals of tools that are used on course.\n")),Object(i.b)("p",null,"In this case, changes were only in one file. This command will be very useful to see what changes have been made to tasks and which tasks. This will make it easier to navigate and to understand whether it is related to tasks you have already done and, if so, whether they should be changed."),Object(i.b)("p",null,"Note"),Object(i.b)("p",null,"\u201c..origin/master\u201d in ",Object(i.b)("inlineCode",{parentName:"p"},"git log -p ..origin/master")," means to show all commits that are present in origin/master (in this case, it\u2019s GitHub) but that are not in local copy of repository"),Object(i.b)("p",null,"If changes were in tasks you haven\u2019t yet done, this output will tell you which files should be copied from course repository to your personal repository (and maybe the entire section if you haven\u2019t yet done tasks from this section)."))}p.isMDXComponent=!0},280:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),b=o,m=d["".concat(a,".").concat(b)]||d[b]||u[b]||i;return n?r.a.createElement(m,s(s({ref:t},c),{},{components:n})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);