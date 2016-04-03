/*LISTA ORDENADA DE ELEMENTOS*/
function printList ( list ) {
	var listHTML = '<ol>';
	for (var i = 0; i < list.length; i++)
		{listHTML += '<li>' + list[i] + '</li>';}
	listHTML += '<ol>';
	print(listHTML);
}
//ESTA FUNCION IMPRIME EL HTML QUE LE DEMOS
function print(html) {
	document.write(html);
}

var playList =[];
playList.push("Strange in the night");
playList.push("Mi conejito");
playList.push("Borro casette");
playList.push("The girl in the ipanema");
playList.push("Sonero de bailadores");
 printList(playList); 