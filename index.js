
var http = require('http');

var server = http.createServer(function (req, resp) {
    resp.writeHead(200, { 'Content-Type': 'text/plain' });
    resp.write('CalosGordillo: Este es el mensaje que debe de recibir el movil.');  
    resp.end();
});

server.listen(3000, function () {
    console.log('Servidor escuchando en el puerto 3000, funciona!!!'); 
});
