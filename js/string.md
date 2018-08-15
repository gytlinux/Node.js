# String字符串

## 方法
(var为变量名，值为字符串)

* String(any)||var.toString() : var值为非字符串类型字符,将其他类型字符(any)转换成字符串

* var.length : 返回字符串长度,以单个字符为单位

* var[key] : 返回key位置的字符

*var.indexOf('string') : 在var的值中查找string字符，存在返回key值，不存在返回-1

* var.slice(key1,key2) : 在var的值中提取key1位置的字符到key2减1的位置字符的字符串，如
只有key1的值，则提取key1及key1之后所有的字符组成的字符串

* var.toLowerCase() : 将var值中所有字符转换成小写

* var.toUpperCase() : 将var值中的所有字符转换成大写

* var.replace(oldstring,newstring) : 将var值中的指定字符串oldstring替换为新的字符串newstring;**注:replace()方法只是返回更改后的字符串，但并不会更改原始字符串,需要对变量名重新进行赋值**

