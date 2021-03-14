
// 读写文件模块
var fs = require('fs')

// 读取文件
fs.readFile('./HelloWorld.js', function(error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
        console.log('>>>>>>>>>>>>>>>>>');
        console.log(data.toString());
    }
})






