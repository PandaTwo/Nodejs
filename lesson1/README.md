**第一课-Hello world.**

--创建一个web服务器，打印 Hello world.

```
//引入 http 模块
let http = require("http");

let doRequest = (request, response) => {
  response.writeHead(200, { "Content-Text": "text/plain;charset=utf-8" });
  response.write("Hello World.");
  response.end();
};

//监听9999端口
http.createServer(doRequest).listen(9999);

console.log('server Runing  http://localhost:9999 ');

```

使用 node server.js 运行 则会在页面显示

Hello World 的字样。

在使用上面代码的时候，自己的粗心，把

```
reponse.end(); 
写成了
response.end;

```
导致代码一直处于loading状态。。。粗心啊。

