var http = require('http')

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('Hello World\n');

}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');