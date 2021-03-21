(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{121:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(o,".").concat(d)]||u[d]||b[d]||r;return n?i.a.createElement(h,s(s({ref:t},l),{},{components:n})):i.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(8),r=(n(0),n(121)),o={id:"containers",title:"Containers",sidebar_label:"2.2 Containers",slug:"containers",custom_edit_url:null},s={unversionedId:"python/working_with_data/containers",id:"python/working_with_data/containers",isDocsHomePage:!1,title:"Containers",description:"\u200b",source:"@site/docs/python/working_with_data/02_Containers.md",slug:"/python/working_with_data/containers",permalink:"/docs/python/working_with_data/containers",editUrl:null,version:"current",sidebar_label:"2.2 Containers",sidebar:"someSidebar",previous:{title:"Datatypes",permalink:"/docs/python/working_with_data/datatypes"},next:{title:"Formatting",permalink:"/docs/python/working_with_data/formatting"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Lists as a Container",id:"lists-as-a-container",children:[]},{value:"List construction",id:"list-construction",children:[]},{value:"Dicts as a Container",id:"dicts-as-a-container",children:[]},{value:"Dict Construction",id:"dict-construction",children:[]},{value:"Dictionary Lookups",id:"dictionary-lookups",children:[]},{value:"Composite keys",id:"composite-keys",children:[]},{value:"Sets",id:"sets",children:[]},{value:"Exercises",id:"exercises",children:[{value:"Exercise 2.4: A list of tuples",id:"exercise-24-a-list-of-tuples",children:[]},{value:"Exercise 2.5: List of Dictionaries",id:"exercise-25-list-of-dictionaries",children:[]},{value:"Exercise 2.6: Dictionaries as a container",id:"exercise-26-dictionaries-as-a-container",children:[]},{value:"Exercise 2.7: Finding out if you can retire",id:"exercise-27-finding-out-if-you-can-retire",children:[]}]}],l={toc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u200b    "),Object(r.b)("p",null,"This section discusses lists, dictionaries, and sets."),Object(r.b)("h3",{id:"overview"},"Overview"),Object(r.b)("p",null,"Programs often have to work with many objects."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A portfolio of stocks"),Object(r.b)("li",{parentName:"ul"},"A table of stock prices")),Object(r.b)("p",null,"There are three main choices to use."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Lists. Ordered data."),Object(r.b)("li",{parentName:"ul"},"Dictionaries. Unordered data."),Object(r.b)("li",{parentName:"ul"},"Sets. Unordered collection of unique items.")),Object(r.b)("h3",{id:"lists-as-a-container"},"Lists as a Container"),Object(r.b)("p",null,"Use a list when the order of the data matters. Remember that lists can hold any kind of object.\nFor example, a list of tuples."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"portfolio = [\n    ('GOOG', 100, 490.1),\n    ('IBM', 50, 91.3),\n    ('CAT', 150, 83.44)\n]\n\nportfolio[0]            # ('GOOG', 100, 490.1)\nportfolio[2]            # ('CAT', 150, 83.44)\n")),Object(r.b)("h3",{id:"list-construction"},"List construction"),Object(r.b)("p",null,"Building a list from scratch."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"records = []  # Initial empty list\n\n# Use .append() to add more items\nrecords.append(('GOOG', 100, 490.10))\nrecords.append(('IBM', 50, 91.3))\n...\n")),Object(r.b)("p",null,"An example when reading records from a file."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"records = []  # Initial empty list\n\nwith open('Data/portfolio.csv', 'rt') as f:\n    next(f) # Skip header\n    for line in f:\n        row = line.split(',')\n        records.append((row[0], int(row[1]), float(row[2])))\n")),Object(r.b)("h3",{id:"dicts-as-a-container"},"Dicts as a Container"),Object(r.b)("p",null,"Dictionaries are useful if you want fast random lookups (by key name).  For\nexample, a dictionary of stock prices:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"prices = {\n   'GOOG': 513.25,\n   'CAT': 87.22,\n   'IBM': 93.37,\n   'MSFT': 44.12\n}\n")),Object(r.b)("p",null,"Here are some simple lookups:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},">>> prices['IBM']\n93.37\n>>> prices['GOOG']\n513.25\n>>>\n")),Object(r.b)("h3",{id:"dict-construction"},"Dict Construction"),Object(r.b)("p",null,"Example of building a dict from scratch."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"prices = {} # Initial empty dict\n\n# Insert new items\nprices['GOOG'] = 513.25\nprices['CAT'] = 87.22\nprices['IBM'] = 93.37\n")),Object(r.b)("p",null,"An example populating the dict from the contents of a file."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"prices = {} # Initial empty dict\n\nwith open('Data/prices.csv', 'rt') as f:\n    for line in f:\n        row = line.split(',')\n        prices[row[0]] = float(row[1])\n")),Object(r.b)("p",null,"Note: If you try this on the ",Object(r.b)("inlineCode",{parentName:"p"},"Data/prices.csv")," file, you'll find that\nit almost works--there's a blank line at the end that causes it to\ncrash.  You'll need to figure out some way to modify the code to\naccount for that (see Exercise 2.6)."),Object(r.b)("h3",{id:"dictionary-lookups"},"Dictionary Lookups"),Object(r.b)("p",null,"You can test the existence of a key."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"if key in d:\n    # YES\nelse:\n    # NO\n")),Object(r.b)("p",null,"You can look up a value that might not exist and provide a default value in case it doesn't."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"name = d.get(key, default)\n")),Object(r.b)("p",null,"An example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},">>> prices.get('IBM', 0.0)\n93.37\n>>> prices.get('SCOX', 0.0)\n0.0\n>>>\n")),Object(r.b)("h3",{id:"composite-keys"},"Composite keys"),Object(r.b)("p",null,"Almost any type of value can be used as a dictionary key in Python. A dictionary key must be of a type that is immutable.\nFor example, tuples:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"holidays = {\n  (1, 1) : 'New Years',\n  (3, 14) : 'Pi day',\n  (9, 13) : \"Programmer's day\",\n}\n")),Object(r.b)("p",null,"Then to access:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},">>> holidays[3, 14]\n'Pi day'\n>>>\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Neither a list, a set, nor another dictionary can serve as a dictionary key, because lists and dictionaries are mutable.")),Object(r.b)("h3",{id:"sets"},"Sets"),Object(r.b)("p",null,"Sets are collection of unordered unique items."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"tech_stocks = { 'IBM','AAPL','MSFT' }\n# Alternative syntax\ntech_stocks = set(['IBM', 'AAPL', 'MSFT'])\n")),Object(r.b)("p",null,"Sets are useful for membership tests."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},">>> tech_stocks\nset(['AAPL', 'IBM', 'MSFT'])\n>>> 'IBM' in tech_stocks\nTrue\n>>> 'FB' in tech_stocks\nFalse\n>>>\n")),Object(r.b)("p",null,"Sets are also useful for duplicate elimination."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"names = ['IBM', 'AAPL', 'GOOG', 'IBM', 'GOOG', 'YHOO']\n\nunique = set(names)\n# unique = set(['IBM', 'AAPL','GOOG','YHOO'])\n")),Object(r.b)("p",null,"Additional set operations:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"names.add('CAT')        # Add an item\nnames.remove('YHOO')    # Remove an item\n\ns1 | s2                 # Set union\ns1 & s2                 # Set intersection\ns1 - s2                 # Set difference\n")),Object(r.b)("h2",{id:"exercises"},"Exercises"),Object(r.b)("p",null,"In these exercises, you start building one of the major programs used\nfor the rest of this course.  Do your work in the file ",Object(r.b)("inlineCode",{parentName:"p"},"Work/report.py"),"."),Object(r.b)("h3",{id:"exercise-24-a-list-of-tuples"},"Exercise 2.4: A list of tuples"),Object(r.b)("p",null,"The file ",Object(r.b)("inlineCode",{parentName:"p"},"Data/portfolio.csv")," contains a list of stocks in a\nportfolio.  In ",Object(r.b)("a",{parentName:"p",href:"/docs/python/introduction/functions"},"Exercise 1.30"),", you\nwrote a function ",Object(r.b)("inlineCode",{parentName:"p"},"portfolio_cost(filename)")," that read this file and\nperformed a simple calculation."),Object(r.b)("p",null,"Your code should have looked something like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"# pcost.py\n\nimport csv\n\ndef portfolio_cost(filename):\n    '''Computes the total cost (shares*price) of a portfolio file'''\n    total_cost = 0.0\n\n    with open(filename, 'rt') as f:\n        rows = csv.reader(f)\n        headers = next(rows)\n        for row in rows:\n            nshares = int(row[1])\n            price = float(row[2])\n            total_cost += nshares * price\n    return total_cost\n")),Object(r.b)("p",null,"Using this code as a rough guide, create a new file ",Object(r.b)("inlineCode",{parentName:"p"},"report.py"),".  In\nthat file, define a function ",Object(r.b)("inlineCode",{parentName:"p"},"read_portfolio(filename)")," that opens a\ngiven portfolio file and reads it into a list of tuples.  To do this,\nyou\u2019re going to make a few minor modifications to the above code."),Object(r.b)("p",null,"First, instead of defining ",Object(r.b)("inlineCode",{parentName:"p"},"total_cost = 0"),", you\u2019ll make a variable\nthat\u2019s initially set to an empty list. For example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"portfolio = []\n")),Object(r.b)("p",null,"Next, instead of totaling up the cost, you\u2019ll turn each row into a\ntuple exactly as you just did in the last exercise and append it to\nthis list. For example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"for row in rows:\n    holding = (row[0], int(row[1]), float(row[2]))\n    portfolio.append(holding)\n")),Object(r.b)("p",null,"Finally, you\u2019ll return the resulting ",Object(r.b)("inlineCode",{parentName:"p"},"portfolio")," list."),Object(r.b)("p",null,"Experiment with your function interactively (just a reminder that in\norder to do this, you first have to run the ",Object(r.b)("inlineCode",{parentName:"p"},"report.py")," program in the\ninterpreter):"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Hint: Use ",Object(r.b)("inlineCode",{parentName:"em"},"-i")," when executing the file in the terminal")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},">>> portfolio = read_portfolio('Data/portfolio.csv')\n>>> portfolio\n[('AA', 100, 32.2), ('IBM', 50, 91.1), ('CAT', 150, 83.44), ('MSFT', 200, 51.23),\n    ('GE', 95, 40.37), ('MSFT', 50, 65.1), ('IBM', 100, 70.44)]\n>>>\n>>> portfolio[0]\n('AA', 100, 32.2)\n>>> portfolio[1]\n('IBM', 50, 91.1)\n>>> portfolio[1][1]\n50\n>>> total = 0.0\n>>> for s in portfolio:\n        total += s[1] * s[2]\n\n>>> print(total)\n44671.15\n>>>\n")),Object(r.b)("p",null,"This list of tuples that you have created is very similar to a 2-D\narray.  For example, you can access a specific column and row using a\nlookup such as ",Object(r.b)("inlineCode",{parentName:"p"},"portfolio[row][column]")," where ",Object(r.b)("inlineCode",{parentName:"p"},"row")," and ",Object(r.b)("inlineCode",{parentName:"p"},"column")," are\nintegers."),Object(r.b)("p",null,"That said, you can also rewrite the last for-loop using a statement like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},">>> total = 0.0\n>>> for name, shares, price in portfolio:\n            total += shares*price\n\n>>> print(total)\n44671.15\n>>>\n")),Object(r.b)("h3",{id:"exercise-25-list-of-dictionaries"},"Exercise 2.5: List of Dictionaries"),Object(r.b)("p",null,'Take the function you wrote in Exercise 2.4 and modify to represent each\nstock in the portfolio with a dictionary instead of a tuple.  In this\ndictionary use the field names of "name", "shares", and "price" to\nrepresent the different columns in the input file.'),Object(r.b)("p",null,"Experiment with this new function in the same manner as you did in\nExercise 2.4."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},">>> portfolio = read_portfolio('Data/portfolio.csv')\n>>> portfolio\n[{'name': 'AA', 'shares': 100, 'price': 32.2}, {'name': 'IBM', 'shares': 50, 'price': 91.1},\n    {'name': 'CAT', 'shares': 150, 'price': 83.44}, {'name': 'MSFT', 'shares': 200, 'price': 51.23},\n    {'name': 'GE', 'shares': 95, 'price': 40.37}, {'name': 'MSFT', 'shares': 50, 'price': 65.1},\n    {'name': 'IBM', 'shares': 100, 'price': 70.44}]\n>>> portfolio[0]\n{'name': 'AA', 'shares': 100, 'price': 32.2}\n>>> portfolio[1]\n{'name': 'IBM', 'shares': 50, 'price': 91.1}\n>>> portfolio[1]['shares']\n50\n>>> total = 0.0\n>>> for s in portfolio:\n        total += s['shares']*s['price']\n\n>>> print(total)\n44671.15\n>>>\n")),Object(r.b)("p",null,"Here, you will notice that the different fields for each entry are\naccessed by key names instead of numeric column numbers.  This is\noften preferred because the resulting code is easier to read later."),Object(r.b)("p",null,"Viewing large dictionaries and lists can be messy. To clean up the\noutput for debugging, consider using the ",Object(r.b)("inlineCode",{parentName:"p"},"pprint")," function."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},">>> from pprint import pprint\n>>> pprint(portfolio)\n[{'name': 'AA', 'price': 32.2, 'shares': 100},\n    {'name': 'IBM', 'price': 91.1, 'shares': 50},\n    {'name': 'CAT', 'price': 83.44, 'shares': 150},\n    {'name': 'MSFT', 'price': 51.23, 'shares': 200},\n    {'name': 'GE', 'price': 40.37, 'shares': 95},\n    {'name': 'MSFT', 'price': 65.1, 'shares': 50},\n    {'name': 'IBM', 'price': 70.44, 'shares': 100}]\n>>>\n")),Object(r.b)("h3",{id:"exercise-26-dictionaries-as-a-container"},"Exercise 2.6: Dictionaries as a container"),Object(r.b)("p",null,"A dictionary is a useful way to keep track of items where you want to\nlook up items using an index other than an integer.  In the Python\nshell, try playing with a dictionary:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},">>> prices = { }\n>>> prices['IBM'] = 92.45\n>>> prices['MSFT'] = 45.12\n>>> prices\n... look at the result ...\n>>> prices['IBM']\n92.45\n>>> prices['AAPL']\n... look at the result ...\n>>> 'AAPL' in prices\nFalse\n>>>\n")),Object(r.b)("p",null,"The file ",Object(r.b)("inlineCode",{parentName:"p"},"Data/prices.csv")," contains a series of lines with stock prices.\nThe file looks something like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-csv"},'"AA",9.22\n"AXP",24.85\n"BA",44.85\n"BAC",11.27\n"C",3.72\n...\n')),Object(r.b)("p",null,"Write a function ",Object(r.b)("inlineCode",{parentName:"p"},"read_prices(filename)")," that reads a set of prices\nsuch as this into a dictionary where the keys of the dictionary are\nthe stock names and the values in the dictionary are the stock prices."),Object(r.b)("p",null,"To do this, start with an empty dictionary and start inserting values\ninto it just as you did above. However, you are reading the values\nfrom a file now."),Object(r.b)("p",null,"We\u2019ll use this data structure to quickly lookup the price of a given\nstock name."),Object(r.b)("p",null,"A few little tips that you\u2019ll need for this part. First, make sure you\nuse the ",Object(r.b)("inlineCode",{parentName:"p"},"csv")," module just as you did before\u2014there\u2019s no need to\nreinvent the wheel here."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},">>> import csv\n>>> f = open('Data/prices.csv', 'r')\n>>> rows = csv.reader(f)\n>>> for row in rows:\n        print(row)\n\n\n['AA', '9.22']\n['AXP', '24.85']\n...\n[]\n>>>\n")),Object(r.b)("p",null,"The other little complication is that the ",Object(r.b)("inlineCode",{parentName:"p"},"Data/prices.csv")," file may\nhave some blank lines in it. Notice how the last row of data above is\nan empty list\u2014meaning no data was present on that line."),Object(r.b)("p",null,"There\u2019s a possibility that this could cause your program to die with\nan exception.  Use the ",Object(r.b)("inlineCode",{parentName:"p"},"try")," and ",Object(r.b)("inlineCode",{parentName:"p"},"except")," statements to catch this as\nappropriate.  Thought: would it be better to guard against bad data with\nan ",Object(r.b)("inlineCode",{parentName:"p"},"if"),"-statement instead?"),Object(r.b)("p",null,"Once you have written your ",Object(r.b)("inlineCode",{parentName:"p"},"read_prices()")," function, test it\ninteractively to make sure it works:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},">>> prices = read_prices('Data/prices.csv')\n>>> prices['IBM']\n106.28\n>>> prices['MSFT']\n20.89\n>>>\n")),Object(r.b)("h3",{id:"exercise-27-finding-out-if-you-can-retire"},"Exercise 2.7: Finding out if you can retire"),Object(r.b)("p",null,"Tie all of this work together by adding a few additional statements to\nyour ",Object(r.b)("inlineCode",{parentName:"p"},"report.py")," program that computes gain/loss. These statements\nshould take the list of stocks in Exercise 2.5 and the dictionary of\nprices in Exercise 2.6 and compute the current value of the portfolio\nalong with the gain/loss."))}p.isMDXComponent=!0}}]);