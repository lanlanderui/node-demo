var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]
if(!port){
    console.log('请输入指令\n比如node server.js 888')
    process.exit(1)
}
var server = http.createServer(function(request,response){
    var parsedUrl = url.parse(request.url,true)
    var path = request.url
    var query = ''
    if(path.indexOf('?') >= 0){query = path.substring(path.indexOf('?'))}
    var pathNoQuery = parsedUrl.pathname
    var queryObject = parsedUrl.query
    var method = request.method

    console.log('得到的HTTP路径\n'+path)
    // console.log('查到字符串为\n'+query)
    // console.log('不含查询字符串的路径为\n'+pathNoQuery)
    if(path == '/'){
        response.write('hihihi')
        response.end()
    }else if(path == '/index') {
        response.setHeader('Content-Type','text/html;charset=utf-8')
        response.write('<!DOCTYPE>\n<html><head><body><h1 style="color:red">Hello Nodejs</h1><P>你好</P></body></head></html>')
        response.end()
    }
    else{
        response.statusCode = 404
        response.end()
    }
    
}) 
server.listen(port)
console.log('监听' + port + '成功\n打开  http://localhost:' + port)