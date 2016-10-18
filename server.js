const http = require('http');

const httpServer = http.createServer(function(req, res) {

    if(req.url === '/1') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Arajin');
    } 
    
    else if(req.url === '/2') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end("Erkrord");
    }
    else if(req.url === '/3') {
          res.writeHead(200, {'Content-Type' : 'text/plain'});
          res.end("Errord");
    }
    else if(req.url === '/4') {
          res.writeHead(200, {'Content-Type' : 'text/plain'});
          res.end("Chorord");
      }
    else if(req.url === '/5') {
          res.writeHead(200, {'Content-Type' : 'text/plain'});
          res.end("Hingerord");
      }
    else
    {
          res.writeHead(404, {'Content-Type' : 'text/plain'});
          res.end("There is an error");
    }
});

httpServer.listen(246);
