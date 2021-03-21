(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{116:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(3),o=t(8),r=(t(0),t(121)),s={id:"list_comprehension",title:"List Comprehension",sidebar_label:"2.6 List Comprehension",slug:"list_comprehension",custom_edit_url:null},i={unversionedId:"python/working_with_data/list_comprehension",id:"python/working_with_data/list_comprehension",isDocsHomePage:!1,title:"List Comprehension",description:"\u200b",source:"@site/docs/python/working_with_data/06_List_comprehension.md",slug:"/python/working_with_data/list_comprehension",permalink:"/docs/python/working_with_data/list_comprehension",editUrl:null,version:"current",sidebar_label:"2.6 List Comprehension",sidebar:"someSidebar",previous:{title:"Collections",permalink:"/docs/python/working_with_data/collections"},next:{title:"Objects",permalink:"/docs/python/working_with_data/objects"}},c=[{value:"Creating new lists",id:"creating-new-lists",children:[]},{value:"Filtering",id:"filtering",children:[]},{value:"Use cases",id:"use-cases",children:[]},{value:"General Syntax",id:"general-syntax",children:[]},{value:"Historical Digression",id:"historical-digression",children:[]},{value:"Exercises",id:"exercises",children:[{value:"Exercise 2.19: List comprehensions",id:"exercise-219-list-comprehensions",children:[]},{value:"Exercise 2.20: Sequence Reductions",id:"exercise-220-sequence-reductions",children:[]},{value:"Exercise 2.21: Data Queries",id:"exercise-221-data-queries",children:[]},{value:"Exercise 2.22: Data Extraction",id:"exercise-222-data-extraction",children:[]},{value:"Exercise 2.23: Extracting Data From CSV Files",id:"exercise-223-extracting-data-from-csv-files",children:[]},{value:"Commentary",id:"commentary",children:[]}]}],l={toc:c};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u200b",Object(r.b)("br",{parentName:"p"}),"\n","A common task is processing items in a list.  This section introduces list comprehensions,\na powerful tool for doing just that."),Object(r.b)("h3",{id:"creating-new-lists"},"Creating new lists"),Object(r.b)("p",null,"A list comprehension creates a new list by applying an operation to\neach element of a sequence."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},">>> a = [1, 2, 3, 4, 5]\n>>> b = [2*x for x in a ]\n>>> b\n[2, 4, 6, 8, 10]\n>>>\n")),Object(r.b)("p",null,"Another example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},">>> names = ['Elwood', 'Jake']\n>>> a = [name.lower() for name in names]\n>>> a\n['elwood', 'jake']\n>>>\n")),Object(r.b)("p",null,"The general syntax is: ",Object(r.b)("inlineCode",{parentName:"p"},"[ <expression> for <variable_name> in <sequence> ]"),"."),Object(r.b)("h3",{id:"filtering"},"Filtering"),Object(r.b)("p",null,"You can also filter during the list comprehension."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},">>> a = [1, -5, 4, 2, -2, 10]\n>>> b = [2*x for x in a if x > 0 ]\n>>> b\n[2, 8, 4, 20]\n>>>\n")),Object(r.b)("h3",{id:"use-cases"},"Use cases"),Object(r.b)("p",null,"List comprehensions are hugely useful.  For example, you can collect values of a specific\ndictionary fields:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"stocknames = [s['name'] for s in stocks]\n")),Object(r.b)("p",null,"You can perform database-like queries on sequences."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"a = [s for s in stocks if s['price'] > 100 and s['shares'] > 50 ]\n")),Object(r.b)("p",null,"You can also combine a list comprehension with a sequence reduction:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"cost = sum([s['shares']*s['price'] for s in stocks])\n")),Object(r.b)("h3",{id:"general-syntax"},"General Syntax"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-code"},"[ <expression> for <variable_name> in <sequence> if <condition>]\n")),Object(r.b)("p",null,"What it means:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"result = []\nfor variable_name in sequence:\n    if condition:\n        result.append(expression)\n")),Object(r.b)("h3",{id:"historical-digression"},"Historical Digression"),Object(r.b)("p",null,"List comprehensions come from math (set-builder notation)."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-code"},"a = [ x * x for x in s if x > 0 ] # Python\n\na = { x^2 | x \u2208 s, x > 0 }         # Math\n")),Object(r.b)("p",null,"It is also implemented in several other languages. Most\ncoders probably aren't thinking about their math class though. So,\nit's fine to view it as a cool list shortcut."),Object(r.b)("h2",{id:"exercises"},"Exercises"),Object(r.b)("p",null,"Start by running your ",Object(r.b)("inlineCode",{parentName:"p"},"report.py")," program so that you have the\nportfolio of stocks loaded in the interactive mode."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"bash % python3 -i report.py\n")),Object(r.b)("p",null,"Now, at the Python interactive prompt, type statements to perform the\noperations described below.  These operations perform various kinds of\ndata reductions, transforms, and queries on the portfolio data."),Object(r.b)("h3",{id:"exercise-219-list-comprehensions"},"Exercise 2.19: List comprehensions"),Object(r.b)("p",null,"Try a few simple list comprehensions just to become familiar with the syntax."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},">>> nums = [1,2,3,4]\n>>> squares = [ x * x for x in nums ]\n>>> squares\n[1, 4, 9, 16]\n>>> twice = [ 2 * x for x in nums if x > 2 ]\n>>> twice\n[6, 8]\n>>>\n")),Object(r.b)("p",null,"Notice how the list comprehensions are creating a new list with the\ndata suitably transformed or filtered."),Object(r.b)("h3",{id:"exercise-220-sequence-reductions"},"Exercise 2.20: Sequence Reductions"),Object(r.b)("p",null,"Compute the total cost of the portfolio using a single Python statement."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},">>> portfolio = read_portfolio('Data/portfolio.csv')\n>>> cost = sum([ s['shares'] * s['price'] for s in portfolio ])\n>>> cost\n44671.15\n>>>\n")),Object(r.b)("p",null,"After you have done that, show how you can compute the current value\nof the portfolio using a single statement."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},">>> value = sum([ s['shares'] * prices[s['name']] for s in portfolio ])\n>>> value\n28686.1\n>>>\n")),Object(r.b)("p",null,"Both of the above operations are an example of a map-reduction. The\nlist comprehension is mapping an operation across the list."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},">>> [ s['shares'] * s['price'] for s in portfolio ]\n[3220.0000000000005, 4555.0, 12516.0, 10246.0, 3835.1499999999996, 3254.9999999999995, 7044.0]\n>>>\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"sum()")," function is then performing a reduction across the result:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},">>> sum(_)\n44671.15\n>>>\n")),Object(r.b)("p",null,"With this knowledge, you are now ready to go launch a big-data startup company."),Object(r.b)("h3",{id:"exercise-221-data-queries"},"Exercise 2.21: Data Queries"),Object(r.b)("p",null,"Try the following examples of various data queries."),Object(r.b)("p",null,"First, a list of all portfolio holdings with more than 100 shares."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},">>> more100 = [ s for s in portfolio if s['shares'] > 100 ]\n>>> more100\n[{'price': 83.44, 'name': 'CAT', 'shares': 150}, {'price': 51.23, 'name': 'MSFT', 'shares': 200}]\n>>>\n")),Object(r.b)("p",null,"All portfolio holdings for MSFT and IBM stocks."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},">>> msftibm = [ s for s in portfolio if s['name'] in {'MSFT','IBM'} ]\n>>> msftibm\n[{'price': 91.1, 'name': 'IBM', 'shares': 50}, {'price': 51.23, 'name': 'MSFT', 'shares': 200},\n  {'price': 65.1, 'name': 'MSFT', 'shares': 50}, {'price': 70.44, 'name': 'IBM', 'shares': 100}]\n>>>\n")),Object(r.b)("p",null,"A list of all portfolio holdings that cost more than $10000."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},">>> cost10k = [ s for s in portfolio if s['shares'] * s['price'] > 10000 ]\n>>> cost10k\n[{'price': 83.44, 'name': 'CAT', 'shares': 150}, {'price': 51.23, 'name': 'MSFT', 'shares': 200}]\n>>>\n")),Object(r.b)("h3",{id:"exercise-222-data-extraction"},"Exercise 2.22: Data Extraction"),Object(r.b)("p",null,"Show how you could build a list of tuples ",Object(r.b)("inlineCode",{parentName:"p"},"(name, shares)")," where ",Object(r.b)("inlineCode",{parentName:"p"},"name")," and ",Object(r.b)("inlineCode",{parentName:"p"},"shares")," are taken from ",Object(r.b)("inlineCode",{parentName:"p"},"portfolio"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},">>> name_shares =[ (s['name'], s['shares']) for s in portfolio ]\n>>> name_shares\n[('AA', 100), ('IBM', 50), ('CAT', 150), ('MSFT', 200), ('GE', 95), ('MSFT', 50), ('IBM', 100)]\n>>>\n")),Object(r.b)("p",null,"If you change the the square brackets (",Object(r.b)("inlineCode",{parentName:"p"},"["),",",Object(r.b)("inlineCode",{parentName:"p"},"]"),") to curly braces (",Object(r.b)("inlineCode",{parentName:"p"},"{"),", ",Object(r.b)("inlineCode",{parentName:"p"},"}"),"), you get something known as a set comprehension.\nThis gives you unique or distinct values."),Object(r.b)("p",null,"For example, this determines the set of unique stock names that appear in ",Object(r.b)("inlineCode",{parentName:"p"},"portfolio"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},">>> names = { s['name'] for s in portfolio }\n>>> names\n{ 'AA', 'GE', 'IBM', 'MSFT', 'CAT' }\n>>>\n")),Object(r.b)("p",null,"If you specify ",Object(r.b)("inlineCode",{parentName:"p"},"key:value")," pairs, you can build a dictionary.\nFor example, make a dictionary that maps the name of a stock to the total number of shares held."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},">>> holdings = { name: 0 for name in names }\n>>> holdings\n{'AA': 0, 'GE': 0, 'IBM': 0, 'MSFT': 0, 'CAT': 0}\n>>>\n")),Object(r.b)("p",null,"This latter feature is known as a ",Object(r.b)("strong",{parentName:"p"},"dictionary comprehension"),". Let\u2019s tabulate:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},">>> for s in portfolio:\n        holdings[s['name']] += s['shares']\n\n>>> holdings\n{ 'AA': 100, 'GE': 95, 'IBM': 150, 'MSFT':250, 'CAT': 150 }\n>>>\n")),Object(r.b)("p",null,"Try this example that filters the ",Object(r.b)("inlineCode",{parentName:"p"},"prices")," dictionary down to only\nthose names that appear in the portfolio:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},">>> portfolio_prices = { name: prices[name] for name in names }\n>>> portfolio_prices\n{'AA': 9.22, 'GE': 13.48, 'IBM': 106.28, 'MSFT': 20.89, 'CAT': 35.46}\n>>>\n")),Object(r.b)("h3",{id:"exercise-223-extracting-data-from-csv-files"},"Exercise 2.23: Extracting Data From CSV Files"),Object(r.b)("p",null,"Knowing how to use various combinations of list, set, and dictionary\ncomprehensions can be useful in various forms of data processing.\nHere\u2019s an example that shows how to extract selected columns from a\nCSV file."),Object(r.b)("p",null,"First, read a row of header information from a CSV file:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},">>> import csv\n>>> f = open('Data/portfoliodate.csv')\n>>> rows = csv.reader(f)\n>>> headers = next(rows)\n>>> headers\n['name', 'date', 'time', 'shares', 'price']\n>>>\n")),Object(r.b)("p",null,"Next, define a variable that lists the columns that you actually care about:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},">>> select = ['name', 'shares', 'price']\n>>>\n")),Object(r.b)("p",null,"Now, locate the indices of the above columns in the source CSV file:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},">>> indices = [ headers.index(colname) for colname in select ]\n>>> indices\n[0, 3, 4]\n>>>\n")),Object(r.b)("p",null,"Finally, read a row of data and turn it into a dictionary using a\ndictionary comprehension:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},">>> row = next(rows)\n>>> record = { colname: row[index] for colname, index in zip(select, indices) }   # dict-comprehension\n>>> record\n{'price': '32.20', 'name': 'AA', 'shares': '100'}\n>>>\n")),Object(r.b)("p",null,"If you\u2019re feeling comfortable with what just happened, read the rest\nof the file:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},">>> portfolio = [ { colname: row[index] for colname, index in zip(select, indices) } for row in rows ]\n>>> portfolio\n[{'price': '91.10', 'name': 'IBM', 'shares': '50'}, {'price': '83.44', 'name': 'CAT', 'shares': '150'},\n  {'price': '51.23', 'name': 'MSFT', 'shares': '200'}, {'price': '40.37', 'name': 'GE', 'shares': '95'},\n  {'price': '65.10', 'name': 'MSFT', 'shares': '50'}, {'price': '70.44', 'name': 'IBM', 'shares': '100'}]\n>>>\n")),Object(r.b)("p",null,"Oh my, you just reduced much of the ",Object(r.b)("inlineCode",{parentName:"p"},"read_portfolio()")," function to a single statement."),Object(r.b)("h3",{id:"commentary"},"Commentary"),Object(r.b)("p",null,"List comprehensions are commonly used in Python as an efficient means\nfor transforming, filtering, or collecting data.  Due to the syntax,\nyou don\u2019t want to go overboard\u2014try to keep each list comprehension as\nsimple as possible.  It\u2019s okay to break things into multiple\nsteps. For example, it\u2019s not clear that you would want to spring that\nlast example on your unsuspecting co-workers."),Object(r.b)("p",null,"That said, knowing how to quickly manipulate data is a skill that\u2019s\nincredibly useful.  There are numerous situations where you might have\nto solve some kind of one-off problem involving data imports, exports,\nextraction, and so forth.  Becoming a guru master of list\ncomprehensions can substantially reduce the time spent devising a\nsolution.  Also, don't forget about the ",Object(r.b)("inlineCode",{parentName:"p"},"collections")," module."))}p.isMDXComponent=!0},121:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return h}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(t),m=a,h=b["".concat(s,".").concat(m)]||b[m]||u[m]||r;return t?o.a.createElement(h,i(i({ref:n},l),{},{components:t})):o.a.createElement(h,i({ref:n},l))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=t[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);