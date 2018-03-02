# 数据类型

## 类型判断

* typeof #检测变量的数据类型

```
typeof 'hello'
> 'string'
typeof 88
> 'number'
typeof false
> 'boolean'
typeof ['a','c']
> 'object'
typeof {name:'xxx',age:88}
> 'object'

```




## 类型转换

### 数字字符串与数字之间转换

#### 符号转换

* "+" #在数字字符串前加"+"号

```

a = '88';
> '88'
a = +'88';
> 88
 
``` 

* "*" #乘法符号"*"转化

```
a = '88' * 1;
> 88
a = '10' * '8';
> 80
```

* "~~" #"~"原为运算符按位取反，"~~" 转化数字符串为整数

```
a = ~~'1.5';
> 1
a = ~~'-1.5';
> -1
```

* ">>" #原为运算符 带符号右移，使用">> 0"将数字字符串转为整数

```
a = '1.5' >> 0;
> 1
a = '-1.5' >> 0;
> -1

```

* ">>>" # 原为运算符 不带符号右移，使用">>> 0"将数字字符串转为整数

```
a = '1.5' >>> 0;
> 1
a = '-1.5' >>> 0;
> 1
```

#### 函数转换

* parseInt() #将任何进制的数字字符串转换成整数，第二参数指定进制

```
parseInt('88');
> 88
parseInt('88.88');
> 1

parseInt('AF',16);
> 175
parseInt('110',2);
> 6

```

* parseFloat() #字符串必须以十进制形式表示浮点数

```
parseFloat('88');
> 88
parseFloat('88.88');
> 88.88

```

* String()和toString() #将数字转换成字符串

```
String(88);
> '88'
(88).toString();
> '88'

```

### 强制类型转换

使用强制类型转换（type casting）处理转换值的类型。使用强制类型转换可以访问特定的值，即使它是另一种类型的。

可用的3种强制类型转换如下：

* Boolean(value)——把给定的值转换成Boolean型；

* Number(value)——把给定的值转换成数字（可以是整数或浮点数）；

* String(value)——把给定的值转换成字符串。


##### Boolean() 

当要转换的值是至少有一个字符的字符串、非0数字或对象时，Boolean()函数将返回true。如果该值是空字符串、数字0、undefined或null，它将返回false。

```
Boolean(""); //false – empty string
Boolean("hi"); //true – non-empty string
Boolean(100); //true – non-zero number
Boolean(null); //false - null
Boolean(0); //false - zero
Boolean(new Object()); //true – object

```

##### Number()

Number()的强制类型转换与parseInt()和parseFloat()方法的处理方式相似，只是它转换的是整个值，而不是部分值。

```
Number(false) 0
Number(true) 1
Number(undefined) NaN
Number(null) 0
Number( "5.5 ") 5.5
Number( "56 ") 56
Number( "5.6.7 ") NaN
Number(new Object()) NaN
Number(100) 100   

```




