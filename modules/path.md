#Nodejs - path

文件路径处理 


* path.normalize :将传入的路径转换为标准路径，具体讲的话，除了解析路径中的.与..外，还能去掉多余的斜杠


* path.join() :将传入的多个路径拼接为标准路径。

```
path.join('foo/','a.txt')
> "foo/a.txt"
path.join('foo/','test/','../a.txt')
> "foo/a.txt"

```

* path.dirname(): 获取路径中的目录名

```
path.dirname('/a/b/c');
> "/a/b"
```

* path.basename(): 获取一个路径中的文件名，有两个参数，第一个参数为一个文件的完整路径，第二个参数用于去除指定的扩展名

```
path.basename('a/b/c.txt');
> "c.txt"
path.basename('a/b/c.txt', '.txt');
> "c"

```

* path.extname(): 获取文件扩展名，参数必须时文件的完整路径

```
path.extname('/a/b.txt');
> ".txt"

```
