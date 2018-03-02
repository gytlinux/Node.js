# JavaScript RegExp对象
(RegExp:正则表达式"regular expression"的简写)

* RegExp 对象
 > 正则表达式是描述字符模式的对象

 > 正则表达式用于对字符串模式匹配及检索替换，是对字符串执行模式匹配的强大工具

* 语法

```
var patt=new RegExp(pattern,modifiers);
或者更简单的方式:
var patt=/pattern/modifiers;

```

 > pattern (模式)描述了表达式的模式

 > modifiers (修饰符)用于指定全局匹配、区分大小写的匹配和多行匹配

**注意:当使用构造函数创造正则对象时，需要常规的字符转义规则（在前面加反斜杠\）。比如，以下时等价的**

```
var re = new RegExp("\\w+");
var re = /\w+/;

```
## 目录

 * [1.修饰符](#修饰符)
 * [2.方括号](#方括号)
 * [3.元字符](#元字符)
 * [4.量词](#量词)
 * [5.RegExp对象方法](#js1)
 * [6.支持正则表达式的String对象的方法](#js2)


### 修饰符
<hr>

* 修饰符用于执行区分大小写和全局匹配：

| 修饰符 | 描述 |
| ------ | ---- |
| i | 执行对大小写不敏感的匹配 |
| g | 执行全局匹配（查找所有匹配而非在找到第一个匹配后停止） |
| m | 执行多行匹配 |

### 方括号
<hr>

* 方括号用于查找某个范围内的字符：

| 表达式 | 描述 | 
| ------ | ---- |
| [abc] | 查找方括号之间的任何字符 |
| [^abc] | 查找任何不在方括号之间的字符 |
| [0-9] | 查找任何从0至9的数字 |
| [a-z] | 查找任何从小写a到小写z的字符 |
| [A-Z] | 查找任何从大写A到大写Z的字符 |
| [A-z] | 查找任何从大写A到小写z的字符 | 
| [adgk] | 查找给定集合内的任何字符 |
| [^adgk] | 查找给定集合外的任何字符 |
| (red\|blue\|green) | 查找任何指定的选项 |

### 元字符
<hr>

* 元字符时拥有特殊含义的字符:

| 元字符 | 描述 |
| ------ | ---- | 
| . | 查找单个字符，除了换行和行结束符 |
| \w | 查找单词字符 |
| \W | 查找非单词字符 |
| \d | 查找数字 |
| \D | 查找非数字字符 |
| \s | 查找空白字符 |
| \S | 查找非空白字符 |
| \b | 查找单词边界 |
| \D | 查找非单词边界 |
| \O | 查找NULL字符 |
| \n | 查找换行符 |
| \f | 查找换页符 |
| \r | 查找回车符 |
| \t | 查找制表符 |
| \v | 查找垂直制表符 |
| \xxx | 查找以八进制数xxx规定的字符 |
| \xdd | 查找以十六进制数dd规定的字符 |
| \uxxxx | 查找以十六进制数xxxx规定的Unicode字符 |

### 量词 
<hr>

| 量词 | 描述 |
| ---- | ---- | 
| n+ | 匹配任何包含至少一个n的字符串 <br> 例如，/a+/匹配"candy"中的"a"，"caaaaaandy"中所有的"a" |
| n* | 匹配任何包含零个或多个n的字符串 <br> 例如,/bo*/匹配"A ghost booooed"中的"boooo"，"A bird warbled"中的"b"，但是不匹配"A gost grunted"  |
| n? | 匹配任何包含零个或者一个n的字符串 <br> 例如, /e?le/匹配"angel"中的"el"，"angle"中的"le" |
| n{X} | 匹配包含X个n的序列的字符串 <br> 例如,/a{2}/不匹配"candy"中的"a"，但时匹配"caandy"中的两个"a"和"caaady"中的前两个"a" |
| n{X,} | X是一个正整数。前面的模式n连续出现至少X次时匹配 <br> 例如,/a{2,}/不匹配"candy"中的"a"，但匹配"caandy"和"caaaaaandy"中的所有"a" |
| n{X,Y} | X和Y为正整数。前面的模式n连续出现至少X次，之多Y次时匹配 <br> 例如,/a{1,3}/不匹配"cndy"，匹配"candy"中的"a"，"caandy"中的两个"a"，匹配"caaaaaaaandy"中的前三个"a"。当匹配"caaaaaaaandy"时，即使原始字符串拥有更多的"a"，匹配项也是"aaa"。 |
| n$ | 匹配任何结尾为n的字符串 |
| ^n | 匹配任何开头为n的字符串 |
| ?=n | 匹配任何其后紧接指定字符串n的字符串 |
| ?!n | 匹配任何去后没有紧接指定字符串n的字符串 |

<h3 id="js1">RegExp 对象方法</h3>
<hr>

| 方法 | 描述 | FF | IE |
| ---- | ---- | -- | -- | 
| compile | 编译正则表达式 | 1 | 4 |
| exec | 检索字符串中指定的值。返回找到的值，并确定其位置 | 1 | 4 |
| test | 检索字符串中指定的值。返回true或false | 1 | 4 |

* JavaScript compile()方法：

 > compile()方法用于在脚本执行过程中的便宜正则表达式。

 > compile()方法也可用于改变和重新编译正则表达式。

 **语法**

```

RegExpObject.compile(regexp,modifier)

```
 
| 参数 | 描述 |
| ---- | ---- |
| regexp | 正则表达式 |
| modifier | 规定匹配的类型。"g"用于全局匹配，"i"用于区分大小写，"gi"用于全局区分大小写的匹配 |

例：在字符串中全局搜索"man"并用"person"替换。然后通过compile()方法，改变正则表达式，用"person"替换"man"或"woman"

```
<script>
var str="Every man in the world! Every woman on earth!";
var patt=/man/g;
var str2=str.replace(patt,"person");
document.write(str2+"<br>");
patt=/(wo)?man/g;
patt.compile(patt); 
str2=str.replace(patt,"person");
document.write(str2);
</script>

```

结果：

```
Every person in the world! Every woperson on earth!
Every person in the world! Every person on earth!

```

* JavaScript exec()方法

 > exec()方法用于检索字符串中的正则表达式的匹配

 > 如果字符串中有匹配的值返回该匹配值，否则返回null

 **语法**

```

RegExpObject.exec(string)

```

| 参数 | 描述 |
| ---- | ---- |
| string | Required. The string to be searched |

例：在字符串中全局搜索“Hello”和“W3CSchool”字符串

```
<script>

var str="Hello world!";
//look for "Hello"
var patt=/Hello/g;
var result=patt.exec(str);
document.write("Returned value: " + result);

//look for "W3Schools"
patt=/W3Schools/g;
result=patt.exec(str);
document.write("<br>Returned value: " + result);

</script>

```

输出结果：

```
Returned value: Hello
Returned value: null

```

* JavaScript test()

 > test()方法用于检测一个字符串是否匹配某个模式

 > 如果字符串中有匹配的值返回true，否则返回false。

**语法**

```

RegExpObject.test(string)

```

| 参数 | 描述 |
| ---- | ---- |
| string | 必需。要检测的字符串 |

例：在字符串中全局搜索"Hello"和"Runoob"字符串

```
var str="Hello world!";
//查找"Hello"
var patt=/Hello/g;
var result=patt.test(str);
document.write("返回值" + result);
// 查找"Runoob"
patt=/Runoob/g;
result=patt.test(str);
document.write("<br>返回值" + result);

```

输出结果：

```

返回值：ture
返回值：false

```

<h3 id="js2">支持正则表达式的String对象的方法</h3>
<hr>

| 方法 | 描述 | FF | IE |
| ---- | ---- | -- | -- |
| search | 检索与正则表达式相匹配的值 | 1 | 4 |
| match | 找到一个或多个正则表达式的匹配 | 1 | 4 |
| replace | 替换与正则表达式匹配的子串 | 1 | 4 |
| split | 把字符串分割为字符串数组 | 1 | 4 |

* search()方法

例：查找"Runoob"

```
var str="Visit Runoob!";
var n=str.search("Runoob");
```

n输出结果：

```
6
```

**定义和用法**
 
 >search()方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。

 > 如果没有找到任何匹配的子串，则返回-1

**语法**

```
string.search(searchvalue)
```

 > 参数值

| 参数 | 描述 |
| ---- | ---- |
| searchvalue | 必须。查找的字符串或者正则表达式 |

 > 返回值

| 类型 | 描述 |
| ---- | ---- | 
| Number | 与指定查找的字符串或者正则表达式相匹配的String对象起始位置 |

**技术细节：JavaScript版本: 1.2**

例：执行一次对大小写敏感的查找

```
var str="Mr. Blue has a blue house";
document.write(str.search("blue"));
```

输出结果

```
15
```

例：执行一次忽略大小写的检索

```
var str="Mr. Blue has a blue house";
document.write(str.search(/blue/i));
```

结果：

```
4
```

* match()方法

例：在字符串中查找”ain“

```
var str="The rain in SPAIN stays mainly in the plain"; 
var n=str.match(/ain/g);
```
结果

```
ain,ain,ain
```

**定义和用法**

 > match()方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。

 > **注意:match()方法将检索的字符串String Oblect，以找到与一个或多个与regexp匹配的文本。这个方法的行为在很大程度上有赖与regexp是否具有标志g。如果regexp没有标志g，那么match()方法就只能在stringObject中执行一次匹配。如果没有找到任何匹配的文本，match()将返回null。否则，它将返回一个数组，其中存放了它找到的匹配文本有关的信息。**

 **语法**

```
string.match(regexp)
```

参数值

| 参数 | 描述 |
| ---- | ---- |
| regexp | 必须。会顶要匹配的模式的RegExp对象。如果该参数不是RegExp对象，则需要首先把它传递给RegExp构造函数，将其转换为RegExp对象 |

返回值

| 类型 | 描述 |
| ---- | ---- |
| Array | 存放匹配结果的数组。该数组的内容依赖于regexp是否具有全局标志g。如果没找到匹配的结果返回bull |

 > **javascript版本: 1.2**

例：全局查找字符串”ain“，且不区分大小写

```
var str="The rain in SPAIN stays mainly in the plain"; 
var n=str.match(/ain/gi);
```

n输出结果

```
ain,AIN,ain,ain
```

* replace()方法

例：执行一次全局替换，每当”Microsoft“被找到，它就被替换为”Runoob“

```
var str="Visit Microsoft!";
var n=str.replace("Microsoft","Runoob");
```

n输出结果

```
Visit Runoob!
```

**定义和用法**

 > replace()方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。

 > 该方法不会改变原始字符串

**语法**

```
string.replace(searchvalue,newvalue)
```

参数值 

| 参数 | 描述 |
| ---- | ---- |
| searchvalue | 必须。规定子字符串或要替换的模式的RegExp对象 <br> 注意，如果该值是一个字符串，则将它作为要检索的直接量文本模式,而不是首先被转换为RegExp对象 |
| newvalue | 必须。一个字符串值。规定了替换文本或生成替换文本的函数 |

返回值

| 类型 | 描述 |
| ---- | ---- |
| String | 一个新的字符串，是用replacement替换了regexp的第一次匹配或所有匹配之后得到的 |

 > **技术细节：javascript版本: 1.2**

例：执行一个全局替换

```
var str="Mr Blue has a blue house and a blue car";
var n=str.replace(/blue/g,"red");
```

结果:

```
Mr Blue has a red house and a red car
```

例：执行一个全局替换，忽略大小写

```
ar str="Mr Blue has a blue house and a blue car";
var n=str.replace(/blue/gi, "red");
```

结果：

```
Mr red has a red house and a red car
```

* split()方法

例：把一个字符串分割成字符串数组

```
var str="How are you doing today?";
var n=str.split(" ");
```

n输出

```
How,are,you,doing,today?
```

**定义和用法**

 > split()方法用于把一个字符串分割成字符串数组。

 > 提示:如果把空字符串("")用作separator，那么stringObject中的每个字符之间都会分割。

 > 注意:split()方法不改变原始字符串。

**语法**

```
string.split(separator,limit)
```

参数值

| 参数 | 描述 |
| ---- | ---- |
| separator | 可选。字符串或正则表达式，从该参数指定的地方分割string Object |
| limit | 可选。该参数可指定返回的数组的最大长度。如果设置了该参数，返回的子串不会多于这个参数指定的数组。如果没有设置该参数，整个字符串都会被分割，不考虑它的长度 |

返回值

| 类型 | 描述 |
| ---- | ---- |
| Array | 一个字符串数组。该数组是通过在separator指定的边界处将字符串string Object  分割成子串创建的。返回的数组中字串不包括separator自身 |

**技术细节: javascript版本: 1.1**

例：省略分割参数

```
var str="How are you doing today?";
var n=str.split();
```

结果:

```
How are you doing today?
```

例：分割每个字符，包括空格

```
var str="How are you doing today?";
var n=str.split("");
```

结果

```
H,o,w, ,a,r,e, ,y,o,u, ,d,o,i,n,g, ,t,o,d,a,y,?
```

例：使用limit参数

```
var str="How are you doing today?";
var n=str.split(" ",3);
```

结果

```
How,are,you
```

例：使用一个字符作为分隔符

```
var str="How are you doing today?";
var n=str.split("o");
```

结果

```
H,w are y,u d,ing t,day?
```


