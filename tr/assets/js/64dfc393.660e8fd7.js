(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{162:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return r})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var p=t(3),a=t(8),s=(t(0),t(280)),o={id:"module_pexpect",title:"Module Pexpect",sidebar_label:"18.2 Module Pexpect",slug:"module_pexpect",custom_edit_url:null},r={unversionedId:"python/ssh_telnet/module_pexpect",id:"python/ssh_telnet/module_pexpect",isDocsHomePage:!1,title:"Module Pexpect",description:"Module pexpect allows to automate interactive connections such as:",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/python/ssh_telnet/2_module_pexpect.md",slug:"/python/ssh_telnet/module_pexpect",permalink:"/tr/docs/python/ssh_telnet/module_pexpect",editUrl:null,version:"current",sidebar_label:"18.2 Module Pexpect",sidebar:"someSidebar",previous:{title:"Password Input",permalink:"/tr/docs/python/ssh_telnet/password_input"},next:{title:"Example Of Pexpect Use",permalink:"/tr/docs/python/ssh_telnet/example_of_pexpect_use"}},c=[{value:"<code>pexpect.spawn</code>",id:"pexpectspawn",children:[]},{value:"Special characters in shell",id:"special-characters-in-shell",children:[]},{value:"pexpect.EOF",id:"pexpecteof",children:[]},{value:"Method <code>pexpect.expect</code>",id:"method-pexpectexpect",children:[]},{value:"Working with pexpect without disabling commands pagination",id:"working-with-pexpect-without-disabling-commands-pagination",children:[]}],i={toc:c};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(p.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Module pexpect allows to automate interactive connections such as:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"telnet"),Object(s.b)("li",{parentName:"ul"},"ssh"),Object(s.b)("li",{parentName:"ul"},"ftp")),Object(s.b)("p",null,"Note"),Object(s.b)("p",null,"Pexpect is an implementation of expect in Python."),Object(s.b)("p",null,"First, pexpect module needs to be installed:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"pip install pexpect\n")),Object(s.b)("p",null,"The logic of pexpect is:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"some program is running"),Object(s.b)("li",{parentName:"ul"},"pexpect expects a certain output (prompt, password request, etc.)"),Object(s.b)("li",{parentName:"ul"},"after receiving the output, it sends commands/data"),Object(s.b)("li",{parentName:"ul"},"last two actions are repeated as many times as necessary")),Object(s.b)("p",null,"At the same time, pexpect does not implement utilities but uses ready-made ones."),Object(s.b)("h2",{id:"pexpectspawn"},Object(s.b)("inlineCode",{parentName:"h2"},"pexpect.spawn")),Object(s.b)("p",null,"Class ",Object(s.b)("inlineCode",{parentName:"p"},"spawn")," allows you to interact with called program by sending data and waiting for a response."),Object(s.b)("p",null,"For example, you can initiate SSH connecton:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [5]: ssh = pexpect.spawn('ssh cisco@192.168.100.1')\n")),Object(s.b)("p",null,"After executing this line, connection is established. Now you must specify which line to expect. In this case, wait for password request:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [6]: ssh.expect('[Pp]assword')\nOut[6]: 0\n")),Object(s.b)("p",null,"Note how line that pexpect expects is written as ",Object(s.b)("inlineCode",{parentName:"p"},"[Pp]assword"),". This is a regex that describes a ",Object(s.b)("inlineCode",{parentName:"p"},"password")," or ",Object(s.b)("inlineCode",{parentName:"p"},"Password")," string. That is, ",Object(s.b)("inlineCode",{parentName:"p"},"expect")," method can be used to pass a regex as an argument."),Object(s.b)("p",null,"Method ",Object(s.b)("inlineCode",{parentName:"p"},"expect")," returned number 0 as a result of the work. This number indicates that a match has been found and that this element with index zero. Index appears here because you can pass a list of strings. For example, you can pass a list with two elements:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [7]: ssh = pexpect.spawn('ssh cisco@192.168.100.1')\n\nIn [8]: ssh.expect(['password', 'Password'])\nOut[8]: 1\n")),Object(s.b)("p",null,"Note that it now returns 1. This means that ",Object(s.b)("inlineCode",{parentName:"p"},"Password")," word matched."),Object(s.b)("p",null,"Now you can send password using ",Object(s.b)("inlineCode",{parentName:"p"},"sendline")," method:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [9]: ssh.sendline('cisco')\nOut[9]: 6\n")),Object(s.b)("p",null,"Method ",Object(s.b)("inlineCode",{parentName:"p"},"sendline")," sends a string, automatically adds a new line character to it based on the value of ",Object(s.b)("inlineCode",{parentName:"p"},"os.linesep")," and then returns a number indicating how many bytes were written."),Object(s.b)("p",null,"Note"),Object(s.b)("p",null,"Pexpect has several methods for sending commands, not just sendline."),Object(s.b)("p",null,"To get into enable mode expect-sendline cycle repeats:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [10]: ssh.expect('[>#]')\nOut[10]: 0\n\nIn [11]: ssh.sendline('enable')\nOut[11]: 7\n\nIn [12]: ssh.expect('[Pp]assword')\nOut[12]: 0\n\nIn [13]: ssh.sendline('cisco')\nOut[13]: 6\n\nIn [14]: ssh.expect('[>#]')\nOut[14]: 0\n")),Object(s.b)("p",null,"Now we can send a command:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [15]: ssh.sendline('sh ip int br')\nOut[15]: 13\n")),Object(s.b)("p",null,"After sending the command, pexpect must be told until what point to read the output. We specify that it should read untill ",Object(s.b)("inlineCode",{parentName:"p"},"#"),":"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [16]: ssh.expect('#')\nOut[16]: 0\n")),Object(s.b)("p",null,"Command output is in ",Object(s.b)("inlineCode",{parentName:"p"},"before")," attribute:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [17]: ssh.before\nOut[17]: b'sh ip int br\\r\\nInterface                  IP-Address      OK? Method Status                Protocol\\r\\nEthernet0/0                192.168.100.1   YES NVRAM  up                    up      \\r\\nEthernet0/1                192.168.200.1   YES NVRAM  up                    up      \\r\\nEthernet0/2                19.1.1.1        YES NVRAM  up                    up      \\r\\nEthernet0/3                192.168.230.1   YES NVRAM  up                    up      \\r\\nEthernet0/3.100            10.100.0.1      YES NVRAM  up                    up      \\r\\nEthernet0/3.200            10.200.0.1      YES NVRAM  up                    up      \\r\\nEthernet0/3.300            10.30.0.1       YES NVRAM  up                    up      \\r\\nR1'\n")),Object(s.b)("p",null,"Since the result is displayed as a sequence of bytes you should convert it to a string:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [18]: show_output = ssh.before.decode('utf-8')\n\nIn [19]: print(show_output)\nsh ip int br\nInterface                  IP-Address      OK? Method Status                Protocol\nEthernet0/0                192.168.100.1   YES NVRAM  up                    up\nEthernet0/1                192.168.200.1   YES NVRAM  up                    up\nEthernet0/2                19.1.1.1        YES NVRAM  up                    up\nEthernet0/3                192.168.230.1   YES NVRAM  up                    up\nEthernet0/3.100            10.100.0.1      YES NVRAM  up                    up\nEthernet0/3.200            10.200.0.1      YES NVRAM  up                    up\nEthernet0/3.300            10.30.0.1       YES NVRAM  up                    up\nR1\n")),Object(s.b)("p",null,"Session ends with a ",Object(s.b)("inlineCode",{parentName:"p"},"close")," call:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [20]: ssh.close()\n")),Object(s.b)("h2",{id:"special-characters-in-shell"},"Special characters in shell"),Object(s.b)("p",null,"Pexpect does not interpret special shell characters such as ",Object(s.b)("inlineCode",{parentName:"p"},">"),", ",Object(s.b)("inlineCode",{parentName:"p"},"|"),", ",Object(s.b)("inlineCode",{parentName:"p"},"*"),"."),Object(s.b)("p",null,"For example, in order make command ",Object(s.b)("inlineCode",{parentName:"p"},"ls -ls | grep SUMMARY")," work, shell must be run as follows:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [1]: import pexpect\n\nIn [2]: p = pexpect.spawn('/bin/bash -c \"ls -ls | grep pexpect\"')\n\nIn [3]: p.expect(pexpect.EOF)\nOut[3]: 0\n\nIn [4]: print(p.before)\nb'4 -rw-r--r-- 1 vagrant vagrant 3203 Jul 14 07:15 1_pexpect.py\\r\\n'\n\nIn [5]: print(p.before.decode('utf-8'))\n4 -rw-r--r-- 1 vagrant vagrant 3203 Jul 14 07:15 1_pexpect.py\n")),Object(s.b)("h2",{id:"pexpecteof"},"pexpect.EOF"),Object(s.b)("p",null,"In the previous example we met pexpect.EOF."),Object(s.b)("p",null,"Note"),Object(s.b)("p",null,"EOF \u2014 end of file"),Object(s.b)("p",null,"This is a special value that allows you to react to the end of a command or session that has been run in spawn."),Object(s.b)("p",null,"When calling ",Object(s.b)("inlineCode",{parentName:"p"},"ls -ls")," command, pexpect does not receive an interactive session. Command is simply executed and that ends its work."),Object(s.b)("p",null,"Therefore, if you run this command and set prompt in ",Object(s.b)("inlineCode",{parentName:"p"},"expect"),", there is an error:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [5]: p = pexpect.spawn('/bin/bash -c \"ls -ls | grep SUMMARY\"')\n\nIn [6]: p.expect('nattaur')\n---------------------------------------------------------------------------\nEOF                                       Traceback (most recent call last)\n<ipython-input-9-9c71777698c2> in <module>()\n----\x3e 1 p.expect('nattaur')\n...\n")),Object(s.b)("p",null,"If EOF passed to ",Object(s.b)("inlineCode",{parentName:"p"},"expect"),", there will be no error."),Object(s.b)("h2",{id:"method-pexpectexpect"},"Method ",Object(s.b)("inlineCode",{parentName:"h2"},"pexpect.expect")),Object(s.b)("p",null,"In ",Object(s.b)("inlineCode",{parentName:"p"},"pexpect.expect")," as a value can be used:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"regex"),Object(s.b)("li",{parentName:"ul"},"EOF - this template allows you to react to EOF exception"),Object(s.b)("li",{parentName:"ul"},"TIMEOUT - timeout exception (default timeout = 30 seconds)"),Object(s.b)("li",{parentName:"ul"},"compiled regex")),Object(s.b)("p",null,"Another very useful feature of ",Object(s.b)("inlineCode",{parentName:"p"},"pexpect.expect")," is that you can pass not a single value, but a list."),Object(s.b)("p",null,"For example:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"In [7]: p = pexpect.spawn('/bin/bash -c \"ls -ls | grep netmiko\"')\n\nIn [8]: p.expect(['py3_convert', pexpect.TIMEOUT, pexpect.EOF])\nOut[8]: 2\n")),Object(s.b)("p",null,"Here are some important points:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"when pexpect.expect is called with a list, you can specify different expected strings"),Object(s.b)("li",{parentName:"ul"},"apart strings, exceptions also can be specified"),Object(s.b)("li",{parentName:"ul"},"pexpect.expect returns number of element that matched",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"in this case number 2 because EOF exception is number two in the list"))),Object(s.b)("li",{parentName:"ul"},"with this format you can make branches in the program depending on the element which had a match")),Object(s.b)("h1",{id:"example-of-pexpect-use"},"Example of pexpect use"),Object(s.b)("p",null,"Example of using pexpect when connecting to equipment and passing show command (file 1_pexpect.py):"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'import pexpect\nimport re\nfrom pprint import pprint\n\n\ndef send_show_command(ip, username, password, enable, commands, prompt="#"):\n    with pexpect.spawn(f"ssh {username}@{ip}", timeout=10, encoding="utf-8") as ssh:\n        ssh.expect("[Pp]assword")\n        ssh.sendline(password)\n        enable_status = ssh.expect([">", "#"])\n        if enable_status == 0:\n            ssh.sendline("enable")\n            ssh.expect("[Pp]assword")\n            ssh.sendline(enable)\n            ssh.expect(prompt)\n\n        ssh.sendline("terminal length 0")\n        ssh.expect(prompt)\n\n        result = {}\n        for command in commands:\n            ssh.sendline(command)\n            match = ssh.expect([prompt, pexpect.TIMEOUT, pexpect.EOF])\n            if match == 1:\n                print(\n                    f"Symbol {prompt} is not found in output. Resulting output is written to\n                    dictionary")\n            if match == 2:\n                print("Connection was terminated by server")\n                return result\n            else:\n                output = ssh.before\n                result[command] = output.replace("\\r\\n", "\\n")\n        return result\n\n\nif __name__ == "__main__":\n    devices = ["192.168.100.1", "192.168.100.2", "192.168.100.3"]\n    commands = ["sh clock", "sh int desc"]\n    for ip in devices:\n        result = send_show_command(ip, "cisco", "cisco", "cisco", commands)\n        pprint(result, width=120)\n')),Object(s.b)("p",null,"This part of function is responsible for switching to enable mode:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'enable_status = ssh.expect([">", "#"])\nif enable_status == 0:\n    ssh.sendline("enable")\n    ssh.expect("[Pp]assword")\n    ssh.sendline(enable)\n    ssh.expect(prompt)\n')),Object(s.b)("p",null,"If ",Object(s.b)("inlineCode",{parentName:"p"},'ssh.expect([">", "#"])')," does not return index 0, it means that connection was not switched to enable mode automaticaly and it should be done separately. If index 1 is returned, then we are already in enable mode, for example, because device is configured with privilege 15."),Object(s.b)("p",null,"Another interesting point about this function:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'for command in commands:\n    ssh.sendline(command)\n    match = ssh.expect([prompt, pexpect.TIMEOUT, pexpect.EOF])\n    if match == 1:\n        print(\n            f"Symbol {prompt} is not found in output. Resulting output is written to dictionary"\n        )\n    if match == 2:\n        print("Connection was terminated by server")\n        return result\n    else:\n        output = ssh.before\n        result[command] = output.replace("\\r\\n", "\\n")\nreturn result\n')),Object(s.b)("p",null,"Here commands are sent in turn and ",Object(s.b)("inlineCode",{parentName:"p"},"expect")," waits for three options: prompt, timeout or EOF. If ",Object(s.b)("inlineCode",{parentName:"p"},"expect")," method didn\u2019t catch ",Object(s.b)("inlineCode",{parentName:"p"},"#"),", value 1 will be returned and in this case a message is displayed, that symbol was not found. But in both cases, when a match is found or timeout the resulting output is written to dictionary. Thus, you can see what was received from device, even if prompt is not found."),Object(s.b)("p",null,"Output after script execution:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"{'sh clock': 'sh clock\\n*13:13:47.525 UTC Sun Jul 19 2020\\n',\n 'sh int desc': 'sh int desc\\n'\n                'Interface          Status         Protocol Description\\n'\n                'Et0/0              up             up       \\n'\n                'Et0/1              up             up       \\n'\n                'Et0/2              up             up       \\n'\n                'Et0/3              up             up       \\n'\n                'Lo22               up             up       \\n'\n                'Lo33               up             up       \\n'\n                'Lo45               up             up       \\n'\n                'Lo55               up             up       \\n'}\n{'sh clock': 'sh clock\\n*13:13:50.450 UTC Sun Jul 19 2020\\n',\n 'sh int desc': 'sh int desc\\n'\n                'Interface          Status         Protocol Description\\n'\n                'Et0/0              up             up       \\n'\n                'Et0/1              up             up       \\n'\n                'Et0/2              admin down     down     \\n'\n                'Et0/3              admin down     down     \\n'\n                'Lo0                up             up       \\n'\n                'Lo9                up             up       \\n'\n                'Lo19               up             up       \\n'\n                'Lo33               up             up       \\n'\n                'Lo100              up             up       \\n'}\n{'sh clock': 'sh clock\\n*13:13:53.360 UTC Sun Jul 19 2020\\n',\n 'sh int desc': 'sh int desc\\n'\n                'Interface          Status         Protocol Description\\n'\n                'Et0/0              up             up       \\n'\n                'Et0/1              up             up       \\n'\n                'Et0/2              admin down     down     \\n'\n                'Et0/3              admin down     down     \\n'\n                'Lo33               up             up       \\n'}\n")),Object(s.b)("h2",{id:"working-with-pexpect-without-disabling-commands-pagination"},"Working with pexpect without disabling commands pagination"),Object(s.b)("p",null,"Sometimes the output of a command is very large and cannot be read completely or device is not makes it possible to disable pagination. In this case, a slightly different approach is needed."),Object(s.b)("p",null,"Note"),Object(s.b)("p",null,"The same task will be repeated for other modules in this section."),Object(s.b)("p",null,"Example of using pexpect to work with paginated output of show command (1_pexpect_more.py file):"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'import pexpect\nimport re\nfrom pprint import pprint\n\n\ndef send_show_command(ip, username, password, enable, command, prompt="#"):\n    with pexpect.spawn(f"ssh {username}@{ip}", timeout=10, encoding="utf-8") as ssh:\n        ssh.expect("[Pp]assword")\n        ssh.sendline(password)\n        enable_status = ssh.expect([">", "#"])\n        if enable_status == 0:\n            ssh.sendline("enable")\n            ssh.expect("[Pp]assword")\n            ssh.sendline(enable)\n            ssh.expect(prompt)\n\n        ssh.sendline(command)\n        output = ""\n\n        while True:\n            match = ssh.expect([prompt, "--More--", pexpect.TIMEOUT])\n            page = ssh.before.replace("\\r\\n", "\\n")\n            page = re.sub(" +\\x08+ +\\x08+", "\\n", page)\n            output += page\n            if match == 0:\n                break\n            elif match == 1:\n                ssh.send(" ")\n            else:\n                print("Error: timeout")\n                break\n        output = re.sub("\\n +\\n", "\\n", output)\n        return output\n\n\nif __name__ == "__main__":\n    devices = ["192.168.100.1", "192.168.100.2", "192.168.100.3"]\n    for ip in devices:\n        result = send_show_command(ip, "cisco", "cisco", "cisco", "sh run")\n        with open(f"{ip}_result.txt", "w") as f:\n            f.write(result)\n')),Object(s.b)("p",null,"Now after sending the command, ",Object(s.b)("inlineCode",{parentName:"p"},"expect")," method waits for another option ",Object(s.b)("inlineCode",{parentName:"p"},"--More--")," - sign, that there will be one more page further. Since it\u2019s not known in advance how many pages will be in the output, reading is performed in a loop ",Object(s.b)("inlineCode",{parentName:"p"},"while True"),". Loop is interrupted if prompt is met ",Object(s.b)("inlineCode",{parentName:"p"},"#")," or no prompt appears within 10 seconds or ",Object(s.b)("inlineCode",{parentName:"p"},"--More--"),"."),Object(s.b)("p",null,"If ",Object(s.b)("inlineCode",{parentName:"p"},"--More--")," is met, pages are not over yet and you have to scroll through the next one. In Cisco, you need to press space bar to do this (without new line). Therefore, ",Object(s.b)("inlineCode",{parentName:"p"},"send")," method is used here, not ",Object(s.b)("inlineCode",{parentName:"p"},"sendline")," - sendline automatically adds a new line character."),Object(s.b)("p",null,"This string ",Object(s.b)("inlineCode",{parentName:"p"},'page = re.sub(" +\\x08+ +\\x08+", "\\n", page)')," removes backspace symbols which are around ",Object(s.b)("inlineCode",{parentName:"p"},"--More--")," so they don\u2019t end up in the final output."))}l.isMDXComponent=!0},280:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var p=t(0),a=t.n(p);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);n&&(p=p.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,p)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,p,a=function(e,n){if(null==e)return{};var t,p,a={},s=Object.keys(e);for(p=0;p<s.length;p++)t=s[p],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(p=0;p<s.length;p++)t=s[p],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a.a.createContext({}),l=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=l(e.components);return a.a.createElement(i.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,p=e.mdxType,s=e.originalType,o=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=l(t),d=p,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||s;return t?a.a.createElement(m,r(r({ref:n},i),{},{components:t})):a.a.createElement(m,r({ref:n},i))}));function m(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var s=t.length,o=new Array(s);o[0]=d;var r={};for(var c in n)hasOwnProperty.call(n,c)&&(r[c]=n[c]);r.originalType=e,r.mdxType="string"==typeof e?e:p,o[1]=r;for(var i=2;i<s;i++)o[i]=t[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);