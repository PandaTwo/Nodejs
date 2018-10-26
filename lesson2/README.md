**第二课 Nodejs中的模块**

关键词

require module exports

fun.js 文件
```
var name = "Eric Panda"

function showName()
{
    console.log(name);
}

//导出 showName function 在index.js中使用
module.exports = showName;
```

index.js 引用 fun.js文件

```
let showName = require('./fun');

showName();
```

也可以使用 exports.fun = fun;的方式进行导出。