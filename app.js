const http = require('http');

http.createServer(function (req, res) {
  res.write('001 test Hello World!'); 
  res.end(); 
}).listen(8080, '0.0.0.0'); 

