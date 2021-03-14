// 用来获取机器信息的
var os = require('os')

// 用来操作路径
var path = require('path')

// 获取当前机器的CPU信息
console.log(os.cpus())

// 内存
console.log(os.totalmem())

// 获取一个路径中的扩展名部分
console.log(path.extname('E:/smallinsect/MyJS/README.md'))

