# jquery

## 语法

#### 基础语法

```
$(selector).action()

```

> "$"符号定义jquery
> (selector) 查询查找HTML元素,根据元素的设置的id，class及本身
> .action()  执行的操作



#### 文档就绪函数

```
$(document).ready(function(){
    
   ---jquery functions go here---
    
    })

```

> 防止文档在完全加载之前运行jquery代码

#### 选择器(selector)

> jquery 元素选择器和属性选择器允许通过标签名、属性名或内容对 HTML 元素进行选择。

> 选择器允许对 HTML 元素组或单个元素进行操作。

> HTML DOM 术语中:选择器允许对 DOM 元素组或单个 DOM 节点进行操作。

* 元素选择器

> 使用CSS选择器来选取HTML元素

例:

```
$("p")  选取<p>元素
$("p.intro")  选取所有class="intro"的<p>元素
$("p#demo")  选取id="demo"的第一个<p>元素

```

* 属性选择器

> 使用XPath表达式选择给定属性的元素

例:

```
$("[href]")  选取所有带href属性的元素
$("[href='#']") 选取所有href值等于"#"的元素
$("[href!='#']")  选取所有href值不等于"#"的元素
$("[href$='.jpg']")  选取所有href值以".jpg"结尾的元素

```

* CSS选择器

> CSS选择器可用于改变HTML的CSS属性

例:

```
$("p").css("background-color","red")   将所有<p>元素的背景颜色更改为红色

```

* 多例

```
$(this)  选取当前元素
$(".intro")  选取所有class="intro"的元素
$("#intro")  选取id="intro"的第一个元素
$("ul li:first")  选取每个<ul>的第一个<li>元素
$("div#intro .head")  选取id="intro"的<div>元素中所有class="head"的元素

```

* **[完整的jquery选择器参考手册](http://www.w3school.com.cn/jquery/jquery_ref_selectors.asp)**


#### jQuery事件

> jQuery是为事件处理特别设计的，jQuery 事件处理函数是 jQuery 中的核心函数。

> 事件处理函数是当HTML中发生事件时自动被调用的函数。由“事件”(event)“触发”(triggered)是经常被用到的术语。

* 调用

```
//网页头部直接调用
<html>
<head>
  <script type="text/javascript" src="/js/jquery.js"></script>
  <script type="text/javascript">
    $(document).ready(function(){
        $("button").click({
            $("p").hide();
            });
        });
  </script>
</head>
<body>
  <p>This is a paragraph</p>
  <button>click</button>
</body>
</html>

```

> 上例定义html按钮点击事件，点击```<button>```按钮，所有的```<p>```元素隐藏


> 网页头部外部js文件调用

将```$(document).ready(function(){...})```代码存入.js文件,通过```<script src="js的路径"></script>```的方式调用


* jQuery名称冲突

> jQuery 使用 $ 符号作为 jQuery 的简介方式。

> 某些其他 JavaScript 库中的函数（比如 Prototype）同样使用 $ 符号。

> jQuery 使用名为 noConflict() 的方法来解决该问题。

> ```var jq=jQuery.noConflict()```帮助您使用自己的名称（比如 jq）来代替 $ 符号。

* 遵循原则

> 把所有 jQuery 代码置于事件处理函数中

> 把所有事件处理函数置于文档就绪事件处理器中

> 把 jQuery 代码置于单独的 .js 文件中

> 如果存在名称冲突，则重命名 jQuery 库

* 例

```
$(document).ready(function(){})    //文档就绪事件,当html文档加载完成后
$(selector).click(function(){})    //被选元素鼠标点击事件
$(selector).dblclick(function(){}) //被选元素鼠标双击事件
$(selector).focus(function(){})    //被选元素获得焦点事件
$(selector).mouseover(function(){})//被选元素鼠标悬停事件

```

* **[完整事件参考手册](http://www.w3school.com.cn/jquery/jquery_ref_events.asp)**

#### jQuery效果

* 隐藏和显示

```
$(selector).hide(speed,callback)   //将选定元素隐藏
$(selector).show(speed,callback)   //将选定元素显示

```

参数:

> speed //速度,设定显示或隐藏过程中的速度，可设定值为:"slow"慢速，"fast"快速,"normal"正常,或"milliseconds"具体时间以毫秒为单位

> callback  //执行函数，hide和show事件函数执行完成后要执行的函数


* 切换

```
$(selector).toggle(speed,callback);

```

toggle()函数使用 show() 或 hide() 函数来切换 HTML 元素的可见状态

参数:

> speed  //速度,设定显示或隐藏过程中的速度，可设定值为:"slow"慢速，"fast"快速,"normal"正常,或"milliseconds"具体时间以毫秒为单位
 
> callback  //执行函数，hide和show事件函数执行完成后要执行的函数,可设定多个callback函数，实现多个函数之间的切换

* 滑动

```
$(selector).slideDown(speed,callback)   选取的元素通过调整高度来滑动显示
 
$(selector).slideUp(speed,callback)     选取的元素通过调整高度来滑动隐藏

$(selector).slideToggle(speed,callback)  选取的元素进行滑动隐藏和滑动显示的切换

```

参数:

> speed  //速度,设定显示或隐藏过程中的速度，可设定值为:"slow"慢速，"fast"快速,"normal"正常,或"milliseconds"具体时间以毫秒为单位
 
> callback  //事件函数执行完成后要执行的函数,可设定多个callback函数，实现多个函数之间的切换

* 透明，淡出淡入

```
$(selector).fadeIn(speed,callback)    逐渐改变被选元素的不透明度，从隐藏到可见

$(selector).fadeOut(speed,callback)   逐渐改变被选元素的不透明度，从可见到隐藏

$(selector).fadeTo(speed,opacity,callback)  把被选元素逐渐改变至给定的不透明度


```

参数:

> speed  //速度,设定显示或隐藏过程中的速度，可设定值为:"slow"慢速，"fast"快速,"normal"正常,或"milliseconds"具体时间以毫秒为单位
 
> callback  //事件函数执行完成后要执行的函数,可设定多个callback函数，实现多个函数之间的切换


* 自定义动画

```
$(selector).animate({params},[duration],[easing],[callback])

```

参数:

> params  //关键参数,定义了产生动画的属性。可以同时设置多个属性

> duration //定义用来应用于动画的时间。它设置的值是："slow", "fast", "normal" 或 毫秒。

> easing   //规定在不同的动画点中设置动画速度的 easing 函数。

> callback  //函数执行完之后，要执行的函数。

**animate()函数只能实现高宽,字体大小等有数值的动画，无法实现颜色等字符串的动画**


* **[完整效果参考手册](http://www.w3school.com.cn/jquery/jquery_ref_effects.asp)**


#### HTML操作

* 改变html内容

```
$(selector).html(content)   //html() 函数改变所匹配的HTML元素的内容（innerHTML）。

```

* 添加html内容

```
$(selector).append(content)   //append() 函数向所匹配的 HTML 元素内部追加内容。

$(selector).prepend(content)  //prepend() 函数向所匹配的 HTML 元素内部预置（Prepend）内容

$(selector).after(content)   //after() 函数在所有匹配的元素之后插入 HTML 内容。

$(selector).before(content)   //before() 函数在所有匹配的元素之前插入 HTML 内容。

```

* **[完整html操作手册](http://www.w3school.com.cn/jquery/jquery_ref_manipulation.asp)**


