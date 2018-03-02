# Nodejs module - child_process 

子进程模块(自生模块)

### 异步执行

**child_process.exec(command[, options][, callback])**

```
var cp = require('child_process');

cp.exec("ls -l /",{timeout:10},function(err,stdout,stderr){
	if (err) throw err;
	console.log(stdout);
	...
});

```


**child_process.execFile(file[, args][, options][, callback])**

```
var cp = require('child_process');

cp.exec("ls -l /",{shell: '/bin/bash',timeout:10},function(err,stdout,stderr){
        if (err) throw err;
	console.log(err);
        ...
});


```

* command : shell命令

* options : 

```
cwd：当前工作路径。
env：环境变量。
encoding：编码，默认是utf8。
shell：用来执行命令的shell，unix上默认是/bin/sh，windows上默认是cmd.exe。
timeout：默认是0。
killSignal：默认是SIGTERM。
uid：执行进程的uid。
gid：执行进程的gid。
maxBuffer： 标准输出、错误输出最大允许的数据量（单位为字节），如果超出的话，子进程就会被杀死。默认是200*1024（就是200k啦）

备注：

如果timeout大于0，那么，当子进程运行超过timeout毫秒，那么，就会给进程发送killSignal指定的信号（比如SIGTERM）。
如果运行没有出错，那么error为null。如果运行出错，那么，error.code就是退出代码（exist code），error.signal会被设置成终止进程的信号。（比如CTRL+C时发送的SIGINT）

```

* callback : 回调函数

* exec()和execFile()

> exec() : 创建一个shell，然后在shell里执行命令，。执行完成后，将stdout、stderr作为参数传入回调方法。

> execFile():跟.exec()类似，不同点在于，没有创建一个新的shell。比child_process.exec()效率高一些。（实际待测试），一些操作，比如I/O重定向，文件glob等不支持。
备注：execFile()内部最终还是通过spawn()实现的， 如果没有设置 {shell: '/bin/bash'}，那么 spawm() 内部对命令的解析会有所不同，execFile('ls -l /') 会直接报错。


### 异步执行

大部分时候，子进程的创建是异步的。也就是说，它不会阻塞当前的事件循环，这对于性能的提升很有帮助。

当然，有的时候，同步的方式会更方便（阻塞事件循环），比如通过子进程的方式来执行shell脚本时。

node同样提供同步的版本，比如：

* spawnSync()

* execSync()

* execFileSync()










