

var http = require('http')

var server = http.createServer()

server.on('request', function(request, response){
    console.log(request.url)

    response.write('hello')
    response.write('哈哈哈')

    response.end()
})

server.listen(3000, function(){
    console.log('服务器启动成功了')
})