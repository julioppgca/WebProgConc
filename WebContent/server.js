var app = require('http').createServer(handler);
var fs = require('fs');

app.listen(8095);

function handler (req, res) {
  fs.readFile('index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Erro ao abrir o arquivo: index.html');
    }
    res.writeHead(200);
    res.end(data);
  });
}