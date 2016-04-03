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
var productos =[];
productos.push("Pollo");
productos.push("Carne");
productos.push("Arroz");
productos.push("Lenteja");
productos.push("Azucar");


while (true)
{ 
		var buscar  = prompt("Ingrese el producto a buscar , sino presione s para salir o i para ver el inventario: ");
		if (buscar == "s")
		{
		break;
		}
		else if (buscar == "i")
		{
		printList(productos);
		}
		else
	{
		var buscado = productos.indexOf(buscar);
		if (buscado >= 0)
		{
		alert("Si existe el producto");
		}
		else if (buscado < 0)
		{
		alert("No hay producto");
		}

 	}
}