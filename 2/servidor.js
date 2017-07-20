var servidor = require('http');
function arrancaServidor(req, res){
	console.log('Alguien se ha conectado');
	res.writeHead(200,{"Content-type":"text/html"});
	res.write("<h1>servidor funciona correctamente</h1>");
	res.end();
}
servidor.createServer(arrancaServidor).listen(8888);