# fs 文件操作


* 小文件拷贝

```
fs.writeFileSync(dst,fs.readFileSync(src))

```

使用fs.readFileSync从源路径读取文件内容，并使用fs.writeFileSync将文件内容写入目标路径。

* 大文件拷贝

```
fs.createReadStream(src).pipe(fs.createWriteStream(dst))

```

使用fs.createReadStream创建了一个源文件的只读数据流，并使用fs.createWriteStream创建了一个目标文件的只写数据流，并且用pipe方法把两个数据流连接了起来。


## API

* Buffer数据块

```
Buffer(string,[utf-8])  //将字符串转换成二进制数据

```







































