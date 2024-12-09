// Protocolo de intercambio
var http = require('http');  

var server = http.createServer();

// Servicio Web
function Gordillo(req, resp) {
    resp.writeHead(200, { 'Content-Type': 'text/plain' });
    resp.write('Carlos Gordillo, de 20 años, es estudiante de quinto nivel en la carrera de Desarrollo de Software. Este texto corresponde al examen de la asignatura Herramientas para el Desarrollo de Software y presenta un ejemplo práctico de cómo levantar un servicio web.');

    resp.end();
}

server.on('request', Gordillo);

// El servidor escucha en el puerto 3000
server.listen(3000, function() {
    console.log('La solicitud fue realizada por el puerto 3000');
});
