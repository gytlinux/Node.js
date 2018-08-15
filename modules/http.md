# NodeJS - http 网络操作模块


## http

#### server


```
var http = require('http');

http.createServer(function (request,response) {
    response.writeHead(200,{ 'Content-Type':'text-plain'});
    response.end('hello world\n');
}).listen(80)

```

* http.createServer(function(){}).listen(port)

创建一个web服务器，监听端口

* response.writeHead() 

对于客户端的网络请求返回的头部信息

* response.end()

对于客户端的网络请求返回的body


```
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    request.on('data', function (chunk) {
         response.write(chunk);
    });

    request.on('end', function () {
         response.end();
    });
}).listen(80);

```

除了可以使用response对象来写入响应头数据外，还能把response对象当作一个只写数据流来写入响应体数据。

```
http.createServer(function (request,response){
    var body = [];
        
    console.log(request.method);
    console.log(request.headers);
                    
    request.on('data',function(chunk){
         body.push(chunk);
    });                                                                
                                                
    request.on('end',function() {
         body = Buffer.concat(body);
         console.log(body.toString())
    });
}).listen(80)


-----------------------------------------------

POST
{ 'content-type': 'application/x-www-form-urlencoded',
  host: 'localhost',
  connection: 'close',
  'transfer-encoding': 'chunked' }

hello world

```

http模块创建的HTTP服务器在接收到完整的请求头后，就会调用回调函数。在回调函数中，可以使用request对象访问请求头数据，还能把request对象当作一个只读数据流来访问请求体数据。

#### client


```
var options = {
    hostname: 'localhost',
    port: 80,
    path: '/upload',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlenconded'
    }
};

var request = http.request(options,function(response){});

request.write('hello world');
request.end();

```

.request方法创建了一个客户端，并指定请求目标和请求头数据。之后，就可以把request对象当作一个只写数据流来写入请求体数据和结束请求。另外，由于HTTP请求中GET请求是最常见的一种，并且不需要请求体，因此http模块也提供了以下便捷API。

```
http.get('http://localhost/', function (response) {});

```

```
http.get('http://localhost/',function(response){
    var body = [];
    
    console.log(response.statusCode);
    console.log(response.headers);
    
    response.on('data',function(chunk){
        body.push(chunk);
        });
    response.on('end',function(){
        body = Buffer.concat(body);
        console.log(body.toString());
        });
});

```

当客户端发送请求并接收到完整的服务端响应头时，就会调用回调函数。在回调函数中，除了可以使用response对象访问响应头数据外，还能把response对象当作一个只读数据流来访问响应体数据。


