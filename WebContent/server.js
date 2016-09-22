var http = require('http');   
var fs = require('fs');

const PORT = 8095;

   http.createServer(function (req, res) {
      var content = '';
      var type = '';
      if(req.url === '/') {
         content = fs.readFileSync('./index.html');
         type = 'text/html';
      } else if(req.url === '/styles.css') {
         content = fs.readFileSync('styles/styles.css');
         type = 'text/css';
      }
      res.writeHead(200, {'Content-Type': type});
      res.end(content + '\n');
   }).listen(PORT);
   console.log('Server running at http://127.0.0.1:'+PORT+'/');

