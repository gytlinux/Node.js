# socket.io

socket.io是一个实现实时web通信的JavaScript库。它包含两部分，在浏览器上运行的客户端库和在nodejs上运行的服务器端库。

## server [API](https://socket.io/docs/server-api/)

> socket.emit: 发送数据，'data'自定义事件与客户端相对应，{key: body} 数据内容

> socket.on: 接收处理，'test'与客户端相对应的事件

```
const io = reuqire('socket.io').listen(port);

io.sockets.on('connection',function(socket) {

        socket.emit('data',{key : body });
        socket.on('test',function(data){
                console.log(data);
        });
});


```

## client [API](https://socket.io/docs/client-api/)

* 服务器为客户端

```
npm install socket.io-client

const io = require('socket.io-client');
const socket = io(url:port)

socket.emit('test',{key : body });
socket.on('data',function(data){
      console.log(data);
        });

```

* 浏览器为客户端

```
<script src="http://host:port/socket.io/socket.io.js"></script>
<script>

var socket = io.connect('http://host:port')

socket.emit('test',{key : body });
socket.on('data',function(data){
       console.log(data);
        });

</script>
```










