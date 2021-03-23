(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{218:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(8),i=(t(0),t(280)),o={id:"virtual_environment",title:"Virtual Environment",sidebar_label:"1.4 Virtual Environment",slug:"virtual_environment",custom_edit_url:null},l={unversionedId:"python/intro/virtual_environment",id:"python/intro/virtual_environment",isDocsHomePage:!1,title:"Virtual Environment",description:"Virtual environments:",source:"@site/docs/python/intro/4_virtual_env.md",slug:"/python/intro/virtual_environment",permalink:"/tr/docs/python/intro/virtual_environment",editUrl:null,version:"current",sidebar_label:"1.4 Virtual Environment",sidebar:"someSidebar",previous:{title:"Package Management System Pip",permalink:"/tr/docs/python/intro/package_management_system_pip"},next:{title:"Python Interpreter",permalink:"/tr/docs/python/intro/python_interpreter"}},p=[{value:"virtualenvwrapper",id:"virtualenvwrapper",children:[]},{value:"Working with virtual environments",id:"working-with-virtual-environments",children:[]},{value:"Built-in venv module",id:"built-in-venv-module",children:[]},{value:"Package installation",id:"package-installation",children:[]}],c={toc:p};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Virtual environments:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Allow different projects to be isolated from each other"),Object(i.b)("li",{parentName:"ul"},"Packages that are needed by different projects are in different places - for example, if one project requires 1.0 package and another project requires the same package but version 3.1, they will not interfere with each other"),Object(i.b)("li",{parentName:"ul"},"Packages that are installed in virtual environments do not impact on global packages")),Object(i.b)("p",null,"Note"),Object(i.b)("p",null,"Python has several options for creating virtual environments. You can use any of them. To start with, you can use virtualenvwrapper and then eventually you can figure out which option you prefer."),Object(i.b)("h2",{id:"virtualenvwrapper"},"virtualenvwrapper"),Object(i.b)("p",null,"Virtual environments are created with virtualenvwrapper."),Object(i.b)("p",null,"Installing virtualenvwrapper with pip:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ sudo pip3.7 install virtualenvwrapper\n")),Object(i.b)("p",null,"After installation, in . bashrc file in current user\u2019s home folder, you need to add several lines:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"export VIRTUALENVWRAPPER_PYTHON=/usr/local/bin/python3.7\nexport WORKON_HOME=~/venv\n. /usr/local/bin/virtualenvwrapper.sh\n")),Object(i.b)("p",null,"If you are using a command interpreter other than bash, see if it is supported in virtualenvwrapper ",Object(i.b)("a",{parentName:"p",href:"http://virtualenvwrapper.readthedocs.io/en/latest/install.html"},"documentation"),". Environment variable VIRTUALENVWRAPPER_PYTHON points to Python command line binary file, WORKON_HOME \u2013 points to location of virtual environments. The third line indicates location of script installed with virtualenvwrapper package. To start virtualenvwrapper.sh script work with virtual environments, bash must be restarted."),Object(i.b)("p",null,"Restart command interpreter:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ exec bash\n")),Object(i.b)("p",null,"This may not always be the right option. More on ",Object(i.b)("a",{parentName:"p",href:"http://stackoverflow.com/questions/2518127/how-do-i-reload-bashrc-without-logging-out-and-back-in"},"Stack Overflow"),"."),Object(i.b)("h2",{id:"working-with-virtual-environments"},"Working with virtual environments"),Object(i.b)("p",null,"Creating a new virtual environment in which Python 3.7 is used by default:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ mkvirtualenv --python=/usr/local/bin/python3.7 pyneng\nNew python executable in PyNEng/bin/python\nInstalling distribute........................done.\nInstalling pip...............done.\n(pyneng)$\n")),Object(i.b)("p",null,"The name of virtual environment is shown in parentheses before standard invitation. That means you\u2019re inside it. Virtualenvwrapper uses Tab to autocomplete name of virtual environment. This is particularly useful when there are many virtual environments. Now \u201cpyneng\u201d directory was created in directory specified in environment variable WORKON_HOME:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"(pyneng)$ ls -ls venv\ntotal 52\n....\n4 -rwxr-xr-x 1 nata nata   99 Sep 30 16:41 preactivate\n4 -rw-r--r-- 1 nata nata   76 Sep 30 16:41 predeactivate\n4 -rwxr-xr-x 1 nata nata   91 Sep 30 16:41 premkproject\n4 -rwxr-xr-x 1 nata nata  130 Sep 30 16:41 premkvirtualenv\n4 -rwxr-xr-x 1 nata nata  111 Sep 30 16:41 prermvirtualenv\n4 drwxr-xr-x 6 nata nata 4096 Sep 30 16:42 pyneng\n")),Object(i.b)("p",null,"Exit virtual environment:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"(pyneng)$ deactivate\n$\n")),Object(i.b)("p",null,"To move to created virtual environment, you should run \u201cworkon\u201d command:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ workon pyneng\n(pyneng)$\n")),Object(i.b)("p",null,"If you want to go from one virtual environment to another, you don\u2019t need to do deactivate, you can go directly through \u201cworkon\u201d:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ workon Test\n(Test)$ workon pyneng\n(pyneng)$\n")),Object(i.b)("p",null,"If you want to remove virtual environment, you should use \u201crmvirtualenv\u201d:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ rmvirtualenv Test\nRemoving Test...\n$\n")),Object(i.b)("p",null,"See which packages are installed in a virtual environment using \u201clssitepackages\u201d:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"(pyneng)$ lssitepackages\nANSI.py                                pexpect-3.3-py2.7.egg-info\nANSI.pyc                               pickleshare-0.5-py2.7.egg-info\ndecorator-4.0.4-py2.7.egg-info         pickleshare.py\ndecorator.py                           pickleshare.pyc\ndecorator.pyc                          pip-1.1-py2.7.egg\ndistribute-0.6.24-py2.7.egg            pxssh.py\neasy-install.pth                       pxssh.pyc\nfdpexpect.py                           requests\nfdpexpect.pyc                          requests-2.7.0-py2.7.egg-info\nFSM.py                                 screen.py\nFSM.pyc                                screen.pyc\nIPython                                setuptools.pth\nipython-4.0.0-py2.7.egg-info           simplegeneric-0.8.1-py2.7.egg-info\nipython_genutils                       simplegeneric.py\nipython_genutils-0.1.0-py2.7.egg-info  simplegeneric.pyc\npath.py                                test_path.py\npath.py-8.1.1-py2.7.egg-info           test_path.pyc\npath.pyc                               traitlets\npexpect                                traitlets-4.0.0-py2.7.egg-info\n")),Object(i.b)("h2",{id:"built-in-venv-module"},"Built-in venv module"),Object(i.b)("p",null,"Starting from version 3.5, it is recommended that Python use venv to create virtual environments:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ python3.7 -m venv new/pyneng\n")),Object(i.b)("p",null,"Python or python3 can be used instead of python 3.7, depending on how Python 3.7 is installed. This command creates specified directory and all necessary subdirectories within it if they have not been created."),Object(i.b)("p",null,"Command creates the following directory structure:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ ls -ls new/pyneng\ntotal 16\n4 drwxr-xr-x 2 vagrant vagrant 4096 Aug 21 14:50 bin\n4 drwxr-xr-x 2 vagrant vagrant 4096 Aug 21 14:50 include\n4 drwxr-xr-x 3 vagrant vagrant 4096 Aug 21 14:50 lib\n4 -rw-r--r-- 1 vagrant vagrant   75 Aug 21 14:50 pyvenv.cfg\n")),Object(i.b)("p",null,"To move to a virtual environment, you should execute command:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ source new/pyneng/bin/activate\n")),Object(i.b)("p",null,"To exit virtual environment, use command \u201cdeactivate\u201d:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ deactivate\n")),Object(i.b)("p",null,"More about the venv module in ",Object(i.b)("a",{parentName:"p",href:"https://docs.python.org/3/library/venv.html#module-venv"},"documentation"),"."),Object(i.b)("h2",{id:"package-installation"},"Package installation"),Object(i.b)("p",null,"For example, let\u2019s install simplejson package in virtual environment."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"(pyneng)$ pip install simplejson\n...\nSuccessfully installed simplejson\nCleaning up...\n")),Object(i.b)("p",null,"If you open Python interpreter and import simplejson, it is available and there are no errors:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"(pyneng)$ python\n>>> import simplejson\n>>> simplejson\n<module 'simplejson' from '/home/vagrant/venv/pyneng-py3-7/lib/python3.7/site-packages/simplejson/__init__.py'>\n>>>\n")),Object(i.b)("p",null,"But if you exit from virtual environment and try to do the same thing, there is no such module:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"(pyneng)$ deactivate\n\n$ python\n>>> import simplejson\nTraceback (most recent call last):\n  File \"<stdin>\", line 1, in <module>\nModuleNotFoundError: No module named 'simplejson'\n>>>\n")))}u.isMDXComponent=!0},280:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),u=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},v=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(t),v=r,m=s["".concat(o,".").concat(v)]||s[v]||b[v]||i;return t?a.a.createElement(m,l(l({ref:n},c),{},{components:t})):a.a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=v;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}v.displayName="MDXCreateElement"}}]);