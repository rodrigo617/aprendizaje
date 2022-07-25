var http = require("http")

var manager = function(request, response){
    console.log('We received a new request')
    response.end('Hello World')
}

var server = http.createServer(manager)

server.listen(8080)