var servidor = require('http');
var url = require('url');

function iniciar(manejador, enrutar){
	function arrancaServidor(req, res){
		var ruta = url.parse(req.url).pathname;
		console.log('Alguien se ha conectado');
		enrutar(manejador, ruta);
		res.writeHead(200,{"Content-type":"text/html"});
		res.write("<h1>servidor funciona correctamente</h1>");
		res.end();
	}
servidor.createServer(arrancaServidor).listen(8888);
}
exports.iniciar = iniciar;