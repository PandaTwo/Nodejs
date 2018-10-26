//引入 http 模块
let http = require("http");

let doRequest = (request, response) => {
  response.writeHead(200, { "Content-Text": "text/html;charset=utf-8" });
  response.write("Hello World.");
  response.end();
};

//监听8899端口
http.createServer(doRequest).listen(8899);

console.log("server Runing  http://localhost:8899 ");
