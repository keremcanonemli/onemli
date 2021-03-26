(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{204:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(8),i=(n(0),n(280)),p={id:"package_management_system_pip",title:"Package Management System Pip",sidebar_label:"1.3 Package Management System Pip",slug:"package_management_system_pip",custom_edit_url:null},o={unversionedId:"python/intro/package_management_system_pip",id:"python/intro/package_management_system_pip",isDocsHomePage:!1,title:"Package Management System Pip",description:"Pip will be used to install Python packages. It is a package management system used to install packages from Python Package Index (Pypi). Most likely, if you already have Python installed, pip is installed.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/python/intro/3_pip.md",slug:"/python/intro/package_management_system_pip",permalink:"/tr/docs/python/intro/package_management_system_pip",editUrl:null,version:"current",sidebar_label:"1.3 Package Management System Pip",sidebar:"someSidebar",previous:{title:"Os And Editor",permalink:"/tr/docs/python/intro/os_and_editor"},next:{title:"Virtual Environment",permalink:"/tr/docs/python/intro/virtual_environment"}},l=[{value:"Module installation",id:"module-installation",children:[]},{value:"pip or pip3",id:"pip-or-pip3",children:[]}],c={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Pip will be used to install Python packages. It is a package management system used to install packages from Python Package Index (Pypi). Most likely, if you already have Python installed, pip is installed."),Object(i.b)("p",null,"Check pip version:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ pip --version\npip 19.1.1 from /home/vagrant/venv/pyneng-py3-7/lib/python3.7/site-packages/pip (python 3.7)\n")),Object(i.b)("p",null,"If command failed, pip is not installed. Pip installation is described in ",Object(i.b)("a",{parentName:"p",href:"https://pip.pypa.io/en/stable/installing/"},"documentation")),Object(i.b)("h2",{id:"module-installation"},"Module installation"),Object(i.b)("p",null,"Command to install modules ",Object(i.b)("inlineCode",{parentName:"p"},"pip install"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ pip install tabulate\n")),Object(i.b)("p",null,"To delete package:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ pip uninstall tabulate\n")),Object(i.b)("p",null,"In addition, it is sometimes necessary to update package:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ pip install --upgrade tabulate\n")),Object(i.b)("h2",{id:"pip-or-pip3"},"pip or pip3"),Object(i.b)("p",null,"Depending on how Python is installed and configured in system it may be necessary to use pip3 instead of pip. To check which option is used, you should execute command ",Object(i.b)("inlineCode",{parentName:"p"},"pip --version"),"."),Object(i.b)("p",null,"A version where pip corresponds to Python 2.7:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ pip --version\npip 9.0.1 from /usr/local/lib/python2.7/dist-packages (python 2.7)\n")),Object(i.b)("p",null,"A version where pip3 corresponds to 3.7:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ pip3 --version\npip 19.1.1 from /home/vagrant/venv/pyneng-py3-7/lib/python3.7/site-packages/pip (python 3.7)\n")),Object(i.b)("p",null,"If system uses pip3, then every time a Python module is installed in book it will be necessary to replace pip with pip3."),Object(i.b)("p",null,"Alternatively, call pip:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ python3.7 -m pip install tabulate\n")),Object(i.b)("p",null,"Thus, it is always clear for which version of Python the package is installed."))}s.isMDXComponent=!0},280:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,d=u["".concat(p,".").concat(m)]||u[m]||b[m]||i;return n?r.a.createElement(d,o(o({ref:t},c),{},{components:n})):r.a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var c=2;c<i;c++)p[c]=n[c];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);