#操作文档结构-document

使用document对象控制HTML和CSS样式信息的文档模型(DOM)来实现操作文档结构

## Web API

* window :是载入浏览器的标签，在JavaScript中用 Window对象 来表示，使用这个对象的可用方法，你可以返回窗口的大小（Window.innerWidth和Window.innerHeight），操作载入窗口的文档，存储客户端上文档的特殊数据（例如使用本地数据库或其他存储设备），为当前窗口绑定event handler，等等。

* navigator : 表示浏览器存在于web上的状态和标识（即用户代理）。在JavaScript中，用Navigator来表示。你可以用这个对象获取一些信息，比如来自用户摄像头的地理信息、用户偏爱的语言、多媒体流等等。

* document: （在浏览器中用DOM表示）是载入窗口的实际页面，在JavaScript中用Document 对象表示，你可以用这个对象来返回和操作文档中HTML和CSS上的信息。例如获取DOM中一个元素的引用，修改其文本内容，并应用新的样式，创建新的元素并添加为当前元素的子元素，甚至把他们一起删除。

## document方法

* document.querySelector() :参数为DOM元素(即html标签)或一个或多个css选择器(即html标签属性中的class和id),返回文档中匹配指定的选择器组的第一个元素

* document.querySelectorAll() :同上,但返回文档中匹配指定的选择器组的所有元素,并存储到一个数组中

* document.getElementById() : 选择指定id属性的元素

* document.getElementByTagName() :返回指定html标签的所有元素的数组；

* document.getElementByClassName() : 返回包含带有指定类名的所有元素的节点列表。

* document.getAttribute() : 返回指定的属性值

* document.createElement() : 创建新的元素节点，参数为新创建的元素标签

* document.createAttribute() : 创建属性节点

* document.createTextNode(text) : 创建一个文本节点

* node.appendChild() :参数为一个元素节点或文本节点，将参数的节点追加到node节点内;

* node.cloneNode() : 节点副本;

* node.removeChild() : 删除节点;

* node.replaceChild() : 替换节点;

* node.Attribute() : 把指定属性设置或修改为指定的值

* insertBefore() : 在指定的子节点前面插入新的子节点。

* node.parentNode.removeChild(node) : 删除基于自身引用的节点 node为同一节点;










### 元素节点内容操作

```

节点内文本内容:

node.textContent = text;

节点css样式设置:

方法一:

node.style.css-style = style；

方法二:

css-style已设置

<style>
.highlight {
  color: white;
  background-color: black;
  padding: 10px;
  width: 250px;
  text-align: center;
}
</style>

node.setAttribute('class', 'highlight');
        










```


 
