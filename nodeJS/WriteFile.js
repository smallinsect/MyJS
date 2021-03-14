

var fs = require('fs')

// 成功：
//    文件写入成功 error null
fs.writeFile('./data/hello.txt', '哇卡卡卡', function(error){
    if (error) {
        console.log('写入失败');
        console.log(error);
    } else {
        console.log('写入成功');
    }
})









