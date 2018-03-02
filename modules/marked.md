# Nodejs - Marked

markdown转换html


## Install and Config

* 安装marked

```
npm install marked --save
``` 

* 路由配置

```
var express = require('express');
var router = express.Router();
var fs = require('fs');
var marked = require('marked');

/* GET ink page. */
router.get('/', function(req, res, next) {
  res.render('ink/ink');
});
router.get('/md/:inkfile', function(req,res,next) {
  console.log('name:'+ req.params.inkfile);
  fs.readFile(__dirname+'/../markdown/ink/'+ req.params.inkfile +'.md',function(err,dat
a) {        if (err) {
          console.log('file is not found');
          res.send('file is not found');
        }else{
          console.log(data);
          htmlStr = marked(data.toString());
          res.render('ink/inkmd',{inkmd: htmlStr});
        }
  });
});

module.exports = router;

```

* 模板添加

```
ejs
<%- inkmd %>

pug

div
  != inkmd

```


