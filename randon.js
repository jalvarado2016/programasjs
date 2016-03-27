
/**********DADOS****************/
/*console.log("Inicio del programa");
function tiraDados(){
var dado = Math.floor(Math.random() * 6) + 1;
return dado;
}
alert("Tiramos 3 dados: ");
alert("El dado dice: " + tiraDados());
var multiplo = 2 * tiraDados();
alert("El multiplo de bonus es: " + multiplo);
tiraDados();
tiraDados();
tiraDados(); 
console.log("Programa completado");
*/
//*****NUMERO AL AZAR******//
/*
function numeroAlAzarHastaLimite(limite){
	var num =Math.floor(Math.random() *limite) + 1;
	return num;
}
var numAzar = numeroAlAzarHastaLimite(100);
alert("Numero al azar es: " + numAzar);
document.write("<h1>El numero al azar es: </h1>" +numAzar);
*/
/***DEVUELVE EL NUMERO MAYOR ENTRE DOS NUMEROS***///
/*console.log("Inicio del programa");
function max(num1,num2){
	if(num1 > num2){
	return num1;
alert(+num1);
}
else 
	return num2;
	alert(+num2);
}
console.log("Programa completado");
*/
/*function saludo(){
	var mensaje = "Hola a todos";
	alert(mensaje);}
var mensaje = "Chao";
saludo();
alert(mensaje);
saludo();*/

/***MUESTRA ERROR AL TRATAR DE INGRESAR LETRAS X NUMEROS*/
/*
var num= "Hola";
if(isNaN(num))
	{throw new Error("No es un numero valido"); 
	}
else { num = num * 0.5;
		}
*/
/**INGRESAR LIMITE COMPARADOS MAYOR Y MENOR Y MUESTRA SI LO INGRESADO NO ES NUMERO**/
/*
function numeroAlAzarEntreLimites(limiteInferior, limiteSuperior){
if(isNaN(limiteInferior)||isNaN(limiteSuperior))
{
	throw new Error ("Valor ingresado no corresponde a numero");
}
var num = Math.round(Math.random()) * (limiteSuperior-limiteInferior)) + limiteInferior;
return num;
}

var limiteSuperior = ("Ingrese limite superior");
var limiteInferior = ("Ingrese limite inferior");

alert("Su numero al aza res: " + numeroAlAzarEntreLimites(parseInt(limiteInferior),parseInt(limiteSuperior)));
*/

/*
var contador = 0;
while(contador<10)
{
var randomico = numeroAlAzarEntreLimites(parseInt(limiteInferior), parseInt(limiteSuperior));
}
document.write(randomico + "");
contador++;

} */
function numeroAdivinar()
{
	var num=Math.floor(Math.random()*1000)+1;
	return num;
}
var numAzar = numeroAdivinar();
var conta = 0;

    while (true)
    {
    	conta =conta+1;
        numero2 = numeroAdivinar();
        if (numAzar ===numero2)
        { alert("Numero de inicio: "+numAzar);
			alert("Numero adivinado: " +numero2);
			break;
		}
}
alert("Intentos realizados: " +conta);
document.write("<h1>Intentos realizados por la PC: </h1>" +conta);