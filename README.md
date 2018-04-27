# Node.js

JS是脚本语言，脚本语言都需要一个解析器才能运行。对于写在HTML页面里的JS，浏览器充当了解析器的角色。而对于需要独立运行的JS，NodeJS就是一个解析器。

每一种解析器都是一个运行环境，不但允许JS定义各种数据结构，进行各种计算，还允许JS使用运行环境提供的内置对象和方法做一些事情。例如运行在浏览器中的JS的用途是操作DOM，浏览器就提供了document之类的内置对象。而运行在NodeJS中的JS的用途是操作磁盘文件或搭建HTTP服务器，NodeJS就相应提供了fs、http等内置对象。

## Install

Centos:

```
curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash -
yum -y install nodejs
```

ubuntu:

```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get -y install nodejs
```

### 辅助工具

* yarn:包管理工具

Centos:

```
wget https://dl.yarnpkg.com/rpm/yarn.repo -O /etc/yum.repos.d/yarn.repo
yum -y install yarn
yarn global add yrs
yarn global add nodemon
yarn global add pm2

```

ubuntu:

```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -

echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt-get update && sudo apt-get install yarn

yarn global add yrs
yarn global add nodemon
yarn global add pm2
```

* pm2 : nodejs守护进程管理工具

```
npm install pm2 -g

or

yarn global add pm2 

```

## Module

编写稍大一点的程序时一般都会将代码模块化。在NodeJS中，一般将代码合理拆分到不同的JS文件中，每一个文件就是一个模块，而文件路径就是模块名。

在编写每个模块时，都有require、exports、module三个预先定义好的变量可供使用。

* require

require函数用于在当前模块中加载和使用别的模块，传入一个模块名，返回一个模块导出对象。模块名可以使用相对路径，或者绝对路径。模块名中的.js扩展名可省略

```
var t1 = require('./test')
var t2 = require('./test.js')
var t3 = require('/opt/project/test')
var t4 = require('/opt/project/test.js')


// t1,t2,t3,t4保存的值是同一个模块导出的对象

var data = require('./data.json')  
var test = require('./test.node')

//可以加载json文件，也可以加载使用C/C++编写二进制模块，扩展名为.node。

```

* exports

exports对象是当前模块的导出对象，用于导出模块共有方法和属性。别的模块通过require函数使用当前模块时得到的就是当前模块的exports对象

```
exports.hello = function () {
    console.log('hello world');
    };


```

* module

通过module对象可以访问到当前模块的一些相关信息，但最多的用途是替换当前模块的导出对象

> 如模块导出对象默认是一个普通对象，如果想改成一个函数的话，可以使用以下方式。

```
module.exports = function () {
    console.log('hello world');
    };

```

**一个模块中的JS代码仅在模块第一次被使用时执行一次，并在执行过程中初始化模块的导出对象。之后，缓存起来的导出对象被重复利用。**


### 模块路径解析

require()函数支持用相对路径和绝对路径调用模块，但是这两种路径在模块之间建立强耦合关系，一旦某个模块文件的存放位置需要变更，使用该模块的其他模块代码也需要进行调整，因此，require函数支持第三种形式的路径,写法类似“foo/bar”

* 内置模块

如果require函数调用的时NodeJS内置模块名称，不做路径解析，直接返回内置模块的导出对象。如: 'require('fs')'

* node_modules目录

NodeJS 定义了一个特殊的目录node_modules目录用于存放模块。

> 如一个模块路径为/opt/object/test.js,在这个模块中使用require('foo/bar')方式加载模块时，nodejs解析路径为:

```
/opt/project/node_modules/foo/bar
/opt/node_modules/foo/bar
/node_modules/foo/bar

```

* NODE_PATH环境变量

NodeJS允许通过NODE_PATH环境变量来指定额外的模块搜索路径。与PATH类似

> 例:定义NODE_PATH为:

```
NODE_PATH=/opt/project/lib:/opt/lib

//require('foo/bar')加载模块时，nodejs路径解析为:

/opt/project/lib/foo/bar
/opt/lib/foo/bar

```

### package包

JS模块基本单位为单个JS文件，但一些复杂的模块是由多个子模块组成的，为了方便管理和使用，把由多个子模块组成的大模块称为包，并把所有的子模块放在同一目录

> 在一个包的所有子模块中需要有一个入口模块，入口模块的导出对象被作为包的导出对象。

```
- /opt/project/lib
  - test/
    head.js
    body.js
    main.js

//test目录定义一个包，包含3个子模块，main.js作为入口模块，main.js内容:

var head = require('./head')
var body = require('./body')

exports.create = function (name) {
    return {
        name: name,
        head: head.create(),
        body: body.create()
    };
};

//在其它模块里使用包的时候，需要加载包的入口模块。使用require('/home/user/lib/cat/main')能达到目的，但是入口模块名称出现在路径里看上去不是个好主意。因此我们需要做点额外的工作，让包使用起来更像是单个模块。

```

* index.js

当模块的文件名为idnex.js，加载模块时可以使用模块所在的目录路径代替模块文件路径

```
var test = require('/opt/project/lib/test');

等同:

var test = require('/opt/project/lib/test/index.js')

```

* package.json

自定义入口模块的文件名和存放位置，需要在包目录下包含一个package.json文件，在其中指定入口模块的路径

```
- /opt/project/lib
  - test/
    + outher/
    - lib/
        head.js
        body.js
        main.js
    + img/
    package.json

//package.json内容:

{
    "name": "test",
    "main": "./lib/main.js"
}

//同样可以使用require('/home/user/lib/cat')的方式加载模块。NodeJS会根据包目录下的package.json找到入口模块所在位置。

```

## 基础点

* process.argv[n]   

获取命令行参数，argv[0]为node执行程序路径，argv[1]为主模块文件路径，第一个命令行参数从argv[2]开始

* process.exit(n)

程序运行结束、异常退出、指定退出的情况下指定退出状态码

* process.stdin,process.stdout,process.stderr

标准输入stdin，标准输出stdout，标准错误stderr。输入为只读数据流，输出及错误为只写数据流

















































