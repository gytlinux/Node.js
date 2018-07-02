# Node.js - Promise

Promise是抽象异步处理对象以及对其进行各种操作的组件

### 使用示例

##### 示例:mysql操作处理

* 设置mysql连接池

```

var mysql =require('mysql');

var pool = mysql.createPool({
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    user: MYSQL_USER,
    database: MYSQL_DB
    });

```

* 将通用的调用步骤通过promise机制编写成函数接口

```

var query = function(sql,values){
    return new Promise(function(resolve,reject){
        pool.getConnection(function(err,connection){   
            if (err) {
                reject(err);
            } else {
                connection.query(sql,values,function(err,data){
                    if (err){
                        reject(err);    
                    } else {
                        resolve(data);   
                    }
                    con.release()
                });    
            };
        });
    });
}

```

* 调用函数，获取执行结果

> 把函数使用promise机制规范化后,直接执行函数返回的只是一个promise对象。只有通过.then和。catch方法才能获取promise对象执行的结果。.then(onFulfilled,onRejected)方法,函数执行成功或失败都可以使用,.catch(onRejected)方法是在函数执行失败，使用

then和catch的使用根据情况来确定:
-- 使用promise.then(onFulfilled, onRejected);则在 onFulfilled 中发生异常的话，在 onRejected 中是捕获不到这个异常的。

-- 在 promise.then(onFulfilled).catch(onRejected) 的情况下;则then 中产生的异常能在 .catch 中捕获

-- .then和.catch本质上没有区别，只不过需要区分场合使用

```
//promise.then(onFulfilled, onRejected)
query("show tables",[]).then(function(result){
        console.log(result);
    },function(err){
        console.log(err);    
    });


//promise.then(onFulfilled).catch(onRejected)
query("show tables",[]).then(function(result){
        console.log(result);   
    }).catch(function(err){
        console.log(err);    
    })


```

### promise方法

* ```new Promise(function(resolve,reject){})``` //一般情况创建promise对象的方法

* ```Promise.resolve(value)```  //```new Promise()```方法快捷方式，等同于```new Promise(function(resolve){resolve(value)})```

* ```Promise.reject(new Error())```  //```new Promise()```方法快捷方式，等同于```new Promise(function(resolve,reject){reject(new Error())})```









