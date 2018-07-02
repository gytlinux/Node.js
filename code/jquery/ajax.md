# jquery - ajax

ajax交互

### 前端页面

```
<script src="/js/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("button").click({
    $.ajax({
        url:"/ajax",  //向服务器请求的路径
        type: "POST", //请求方式
        dataType:"json", //向服务器发送数据类型
        data:{
            id:1,
            title:"test"
            },//向服务器返送的数据

        cache:false, //缓存
        timeout: 5000, //超时时间

        success: function(data){} //发送成功执行操作
        error: function(){}  //发送失败执行操作
    });
  });
})
</script>

//也可以写成函数，调用
<script>
function ajax(){
    $.ajax({...})
}
</script>
<button onclick="ajax()"></button>

```

### nodejs服务端

```
var express = require('express');
var router = express.Router();

router.post('/ajax',function(req,res){
    console.log(req.body);
    var data = {
        code:1,
        body:"test"
        }     
    res.send(data)
    res.json(data)    //res.json或res.send向前端发送数据
    })






```




