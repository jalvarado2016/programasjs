/*LISTA ORDENADA DE ELEMENTOS*/
function printListaReproduccion ( listaCanciones ) {
	var listHTML = '<ol>';
	for (var i = 0; i < listaCanciones.length; i++)
		{listHTML += '<li>Tema: ' + listaCanciones[i][0] + '. Por:' + listaCanciones[i][1] + '</li>';}
	listHTML += '<ol>';
	print(listHTML);
}
//ESTA FUNCION IMPRIME EL HTML QUE LE DEMOS
function print(html) {
	document.write(html);
}
var playList =[];
playList.push(["Strange in the night", "Frank Sinatra"]);
playList.push(["Mi conejito", "Los conquistadores"]);
playList.push(["Borro casette","Maluma"]);
playList.push(["The girl in the ipanema","Pitbull"]);
playList.push(["Sonero de bailadores","Pete Conde, Cheo Feliciano"]);
 printListaReproduccion(playList); 