

var http = require('http')
// 创建一个服务器
var server = http.createServer()
// 提供一个服务
server.on('request', function () {
    console.log('收到消息')
})

// 绑定端口号，启动服务器
server.listen(3000, function () {
    console.log('服务器启动成功了')
})



