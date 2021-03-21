(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{119:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(125),i=a(124);var r=function(e){const{metadata:t}=e;return l.a.createElement("nav",{className:"pagination-nav","aria-label":Object(i.b)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},l.a.createElement("div",{className:"pagination-nav__item"},t.previous&&l.a.createElement(s.a,{className:"pagination-nav__link",to:t.previous.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},l.a.createElement(i.a,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&l.a.createElement(s.a,{className:"pagination-nav__link",to:t.next.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},l.a.createElement(i.a,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),l.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},o=a(16),c=a(126),d=a(122);function m({siteTitle:e,versionLabel:t}){return l.a.createElement(i.a,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:e,versionLabel:l.a.createElement("strong",null,t)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")}function u({siteTitle:e,versionLabel:t}){return l.a.createElement(i.a,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:e,versionLabel:l.a.createElement("strong",null,t)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}function v({versionLabel:e,to:t,onClick:a}){return l.a.createElement(i.a,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label userd to tell the user that he's browsing an unmaintained doc version",values:{versionLabel:e,latestVersionLink:l.a.createElement("strong",null,l.a.createElement(s.a,{to:t,onClick:a},l.a.createElement(i.a,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}var p=function(){const{siteConfig:{title:e}}=Object(o.default)(),{pluginId:t}=Object(c.useActivePlugin)({failfast:!0}),{savePreferredVersionName:a}=Object(d.useDocsPreferredVersion)(t),n=Object(c.useActiveVersion)(t),{latestDocSuggestion:s,latestVersionSuggestion:i}=Object(c.useDocVersionSuggestions)(t);if(!i)return l.a.createElement(l.a.Fragment,null);const r=null!=s?s:(p=i).docs.find((e=>e.id===p.mainDocId));var p;return l.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},l.a.createElement("div",null,"current"===n.name?l.a.createElement(m,{siteTitle:e,versionLabel:n.label}):l.a.createElement(u,{siteTitle:e,versionLabel:n.label})),l.a.createElement("div",{className:"margin-top--md"},l.a.createElement(v,{versionLabel:i.label,to:r.path,onClick:()=>a(i.name)})))},b=a(148),g=a(74),E=a.n(g);function h({lastUpdatedAt:e,formattedLastUpdatedAt:t}){return l.a.createElement(i.a,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:l.a.createElement("time",{dateTime:new Date(1e3*e).toISOString(),className:E.a.lastUpdatedDate},t)}}," on {date}")}function f({lastUpdatedBy:e}){return l.a.createElement(i.a,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:l.a.createElement("strong",null,e)}}," by {user}")}function L({lastUpdatedAt:e,formattedLastUpdatedAt:t,lastUpdatedBy:a}){return l.a.createElement("div",{className:"col text--right"},l.a.createElement("em",null,l.a.createElement("small",null,l.a.createElement(i.a,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:e&&t?l.a.createElement(h,{lastUpdatedAt:e,formattedLastUpdatedAt:t}):"",byUser:a?l.a.createElement(f,{lastUpdatedBy:a}):""}},"Last updated{atDate}{byUser}"),!1)))}var N=a(134),_=a(3),U=a(123),w=a(75),T=a.n(w);var y=({className:e,...t})=>l.a.createElement("svg",Object(_.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(U.a)(T.a.iconEdit,e),"aria-label":"Edit page"},t),l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})));function k({editUrl:e}){return l.a.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener"},l.a.createElement(y,null),l.a.createElement(i.a,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var A=a(76),O=a.n(A);t.default=function(e){const{content:t}=e,{metadata:a,frontMatter:{image:n,keywords:s,hide_title:i,hide_table_of_contents:o}}=t,{description:d,title:m,editUrl:u,lastUpdatedAt:v,formattedLastUpdatedAt:g,lastUpdatedBy:E}=a,{pluginId:h}=Object(c.useActivePlugin)({failfast:!0}),f=Object(c.useVersions)(h),_=Object(c.useActiveVersion)(h),w=f.length>1;return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{title:m,description:d,keywords:s,image:n}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:Object(U.a)("col",{[O.a.docItemCol]:!o})},l.a.createElement(p,null),l.a.createElement("div",{className:O.a.docItemContainer},l.a.createElement("article",null,w&&l.a.createElement("div",null,l.a.createElement("span",{className:"badge badge--secondary"},"Version: ",_.label)),!i&&l.a.createElement("header",null,l.a.createElement("h1",{className:O.a.docTitle},m)),l.a.createElement("div",{className:"markdown"},l.a.createElement(t,null))),(u||v||E)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},u&&l.a.createElement(k,{editUrl:u})),(v||E)&&l.a.createElement(L,{lastUpdatedAt:v,formattedLastUpdatedAt:g,lastUpdatedBy:E}))),l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(r,{metadata:a})))),!o&&t.toc&&l.a.createElement("div",{className:"col col--3"},l.a.createElement(N.a,{toc:t.toc}))))}},134:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(123);var i=function(e,t,a){const[l,s]=Object(n.useState)(void 0);Object(n.useEffect)((()=>{function n(){const n=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=a}));if(t){if(t.getBoundingClientRect().top>=a){const a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(n){let a=0,i=!1;const r=document.getElementsByClassName(e);for(;a<r.length&&!i;){const e=r[a],{href:o}=e,c=decodeURIComponent(o.substring(o.indexOf("#")+1));n.id===c&&(l&&l.classList.remove(t),e.classList.add(t),s(e),i=!0),a+=1}}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),()=>{document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},r=a(57),o=a.n(r);const c="table-of-contents__link";function d({toc:e,isChild:t}){return e.length?l.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map((e=>l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:`#${e.id}`,className:c,dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(d,{isChild:!0,toc:e.children}))))):null}t.a=function({toc:e}){return i(c,"table-of-contents__link--active",100),l.a.createElement("div",{className:Object(s.a)(o.a.tableOfContents,"thin-scrollbar")},l.a.createElement(d,{toc:e}))}}}]);