function inicio () {
	console.log('a inicio');
	return "Inicio";
}
function pagina1 () {
	console.log('a pagina1');
	return "Pagina 1";
}
function pagina2 () {
	console.log('a pagina2');
	return "Pagina 2";
}

exports.inicio = inicio;
exports.pagina1 = pagina1;
exports.pagina2 = pagina2;