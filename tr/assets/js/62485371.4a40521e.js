(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(8),s=(n(0),n(280)),i={id:"examples_of_converting",title:"Examples Of Converting Between Bytes And Strings",sidebar_label:"16.4 Examples Of Converting Between Bytes And Strings",slug:"examples_of_converting_between_bytes_and_strings",custom_edit_url:null},a={unversionedId:"python/unicode/examples_of_converting",id:"python/unicode/examples_of_converting",isDocsHomePage:!1,title:"Examples Of Converting Between Bytes And Strings",description:"Consider a few examples of working with bytes and converting bytes to string.",source:"@site/docs/python/unicode/4_examples_of_converting.md",slug:"/python/unicode/examples_of_converting_between_bytes_and_strings",permalink:"/tr/docs/python/unicode/examples_of_converting_between_bytes_and_strings",editUrl:null,version:"current",sidebar_label:"16.4 Examples Of Converting Between Bytes And Strings",sidebar:"someSidebar",previous:{title:"Conversion Between Bytes And Strings",permalink:"/tr/docs/python/unicode/conversion_between_bytes_and_strings"},next:{title:"Converting Errors",permalink:"/tr/docs/python/unicode/converting_errors"}},c=[{value:"subprocess",id:"subprocess",children:[]},{value:"telnetlib",id:"telnetlib",children:[]},{value:"pexpect",id:"pexpect",children:[]},{value:"Working with files",id:"working-with-files",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Consider a few examples of working with bytes and converting bytes to string."),Object(s.b)("h2",{id:"subprocess"},"subprocess"),Object(s.b)("p",null,"Module subprocess returns the result of command as bytes:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [1]: import subprocess\n\nIn [2]: result = subprocess.run(['ping', '-c', '3', '-n', '8.8.8.8'],\n   ...:                         stdout=subprocess.PIPE)\n   ...:\n\nIn [3]: result.stdout\nOut[3]: b'PING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.\\n64 bytes from 8.8.8.8: icmp_seq=1 ttl=43 time=59.4 ms\\n64 bytes from 8.8.8.8: icmp_seq=2 ttl=43 time=54.4 ms\\n64 bytes from 8.8.8.8: icmp_seq=3 ttl=43 time=55.1 ms\\n\\n--- 8.8.8.8 ping statistics ---\\n3 packets transmitted, 3 received, 0% packet loss, time 2002ms\\nrtt min/avg/max/mdev = 54.470/56.346/59.440/2.220 ms\\n'\n")),Object(s.b)("p",null,"If it is necessary to work with this output further you should immediately convert it to string:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [4]: output = result.stdout.decode('utf-8')\n\nIn [5]: print(output)\nPING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.\n64 bytes from 8.8.8.8: icmp_seq=1 ttl=43 time=59.4 ms\n64 bytes from 8.8.8.8: icmp_seq=2 ttl=43 time=54.4 ms\n64 bytes from 8.8.8.8: icmp_seq=3 ttl=43 time=55.1 ms\n\n--- 8.8.8.8 ping statistics ---\n3 packets transmitted, 3 received, 0% packet loss, time 2002ms\nrtt min/avg/max/mdev = 54.470/56.346/59.440/2.220 ms\n")),Object(s.b)("p",null,"Module subprocess supports another conversion option - ",Object(s.b)("inlineCode",{parentName:"p"},"encoding")," parameter. If you specify it when you call run() function, the result will be as a string:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [6]: result = subprocess.run(['ping', '-c', '3', '-n', '8.8.8.8'],\n   ...:                         stdout=subprocess.PIPE, encoding='utf-8')\n   ...:\n\nIn [7]: result.stdout\nOut[7]: 'PING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.\\n64 bytes from 8.8.8.8: icmp_seq=1 ttl=43 time=55.5 ms\\n64 bytes from 8.8.8.8: icmp_seq=2 ttl=43 time=54.6 ms\\n64 bytes from 8.8.8.8: icmp_seq=3 ttl=43 time=53.3 ms\\n\\n--- 8.8.8.8 ping statistics ---\\n3 packets transmitted, 3 received, 0% packet loss, time 2003ms\\nrtt min/avg/max/mdev = 53.368/54.534/55.564/0.941 ms\\n'\n\nIn [8]: print(result.stdout)\nPING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.\n64 bytes from 8.8.8.8: icmp_seq=1 ttl=43 time=55.5 ms\n64 bytes from 8.8.8.8: icmp_seq=2 ttl=43 time=54.6 ms\n64 bytes from 8.8.8.8: icmp_seq=3 ttl=43 time=53.3 ms\n\n--- 8.8.8.8 ping statistics ---\n3 packets transmitted, 3 received, 0% packet loss, time 2003ms\nrtt min/avg/max/mdev = 53.368/54.534/55.564/0.941 ms\n")),Object(s.b)("h2",{id:"telnetlib"},"telnetlib"),Object(s.b)("p",null,"Depending on module, conversion between strings and bytes can be performed automatically or may be required explicitly."),Object(s.b)("p",null,"For example, ",Object(s.b)("inlineCode",{parentName:"p"},"telnetlib")," module must pass bytes to ",Object(s.b)("inlineCode",{parentName:"p"},"read_until")," and ",Object(s.b)("inlineCode",{parentName:"p"},"write")," methods:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"import telnetlib\nimport time\n\nt = telnetlib.Telnet('192.168.100.1')\n\nt.read_until(b'Username:')\nt.write(b'cisco\\n')\n\nt.read_until(b'Password:')\nt.write(b'cisco\\n')\nt.write(b'sh ip int br\\n')\n\ntime.sleep(5)\n\noutput = t.read_very_eager().decode('utf-8')\nprint(output)\n")),Object(s.b)("p",null,"Method returns bytes, so penultimate line uses decode."),Object(s.b)("h2",{id:"pexpect"},"pexpect"),Object(s.b)("p",null,"Module ",Object(s.b)("inlineCode",{parentName:"p"},"pexpect")," waits for a string as an argument and returns bytes:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [9]: import pexpect\n\nIn [10]: output = pexpect.run('ls -ls')\n\nIn [11]: output\nOut[11]: b'total 8\\r\\n4 drwxr-xr-x 2 vagrant vagrant 4096 Aug 28 12:16 concurrent_futures\\r\\n4 drwxr-xr-x 2 vagrant vagrant 4096 Aug  3 07:59 iterator_generator\\r\\n'\n\nIn [12]: output.decode('utf-8')\nOut[12]: 'total 8\\r\\n4 drwxr-xr-x 2 vagrant vagrant 4096 Aug 28 12:16 concurrent_futures\\r\\n4 drwxr-xr-x 2 vagrant vagrant 4096 Aug  3 07:59 iterator_generator\\r\\n'\n")),Object(s.b)("p",null,"And it also supports ",Object(s.b)("inlineCode",{parentName:"p"},"encoding")," parameter:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [13]: output = pexpect.run('ls -ls', encoding='utf-8')\n\nIn [14]: output\nOut[14]: 'total 8\\r\\n4 drwxr-xr-x 2 vagrant vagrant 4096 Aug 28 12:16 concurrent_futures\\r\\n4 drwxr-xr-x 2 vagrant vagrant 4096 Aug  3 07:59 iterator_generator\\r\\n'\n")),Object(s.b)("h2",{id:"working-with-files"},"Working with files"),Object(s.b)("p",null,"Until now, when working with files, the following expression was used:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"with open(filename) as f:\n    for line in f:\n        print(line)\n")),Object(s.b)("p",null,"But actually, when you read a file you convert bytes to a string. And default encoding was used:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [1]: import locale\n\nIn [2]: locale.getpreferredencoding()\nOut[2]: 'UTF-8'\n")),Object(s.b)("p",null,"Default encoding in file:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [2]: f = open('r1.txt')\n\nIn [3]: f\nOut[3]: <_io.TextIOWrapper name='r1.txt' mode='r' encoding='UTF-8'>\n")),Object(s.b)("p",null,"When working with files it is better to specify encoding explicitly because it may differ in different operating systems:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [4]: with open('r1.txt', encoding='utf-8') as f:\n   ...:     for line in f:\n   ...:         print(line, end='')\n   ...:\n!\nservice timestamps debug datetime msec localtime show-timezone year\nservice timestamps log datetime msec localtime show-timezone year\nservice password-encryption\nservice sequence-numbers\n!\nno ip domain lookup\n!\nip ssh version 2\n!\n")),Object(s.b)("h2",{id:"conclusion"},"Conclusion"),Object(s.b)("p",null,"These examples are shown here to show that different modules can treat the issue of conversion between strings and bytes differently. And different functions and methods of these modules can expect arguments and return values of different types. However, all of these items are in documentation."),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://pyneng.readthedocs.io/en/latest/book/16_unicode/errors.html"},"Next "),Object(s.b)("a",{parentName:"p",href:"https://pyneng.readthedocs.io/en/latest/book/16_unicode/python_3_convert.html"}," Previous")))}p.isMDXComponent=!0},280:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||s;return n?o.a.createElement(d,a(a({ref:t},l),{},{components:n})):o.a.createElement(d,a({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);