# nodejs - multer

Multer 是一个 node.js 中间件，用于处理 multipart/form-data 类型的表单数据，它主要用于上传文件。它是写在 busboy 之上非常高效。

**注意: Multer 不会处理任何非 multipart/form-data 类型的表单数据**

## Install

```
npm install multer --save

```

## Use

```
var express = require('express');
var multer = require('multer');
var upload = multer({dest: 'upload/'});
var app = express();

app.post('/',upload.singe('fieldname'),function(req,res){
    req.file  //fieldname文件信息
    })

```


### [详情了解](https://github.com/expressjs/multer/blob/master/doc/README-zh-cn.md)
