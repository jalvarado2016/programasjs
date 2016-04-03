var preguntas = [
{ pregunta: "Quien descubrio America?", respuesta: "colon"},
{ pregunta: "A que Canton Corresponde la Parroquia Muey?", respuesta: "salinas"},
{ pregunta: "Que año se suponia que era el fin del mundo?", respuesta: 2012},
{ pregunta: "Cuantos Km hay de Playas a Guayaquil?", respuesta: 96},
{ pregunta: "Evento que celebra hoy 03/abril/2016 la WWE?", respuesta: "westlemania"}
];
//Imprime las respuestas, distinguiendo del tipo, correcta o incorrecta
function imprimirRespuestas(respondidaCorrectamente)
{
	var stringRespuestas = '';
	var contRespuestas = 0;
	for (var i =0; i<preguntas.length; i++)
	{	
		if(respondidaCorrectamente==preguntas[i]["acerto"])
		{
			contRespuestas++;
			stringRespuestas += "<p><b>" + preguntas[i].pregunta + "</b><br>" + 
			preguntas[i].respuestaUsuario + "</p>";		
		
			//Si la respuesta es incorrecta, agregar las respuesta verdadera	
			if(!preguntas[i].acerto)
			{
			stringRespuestas+= "<i>La respuesta correcta era: " + 
			preguntas[i].respuesta + "</i>";
			}	
		}
	}
	
	if(contRespuestas<1)
	{
		stringRespuestas = "No hubo respuestas ";
		if(respondidaCorrectamente){
			stringRespuestas += "correctas";
		}else{
			stringRespuestas += "incorrectas";}
	}
	return stringRespuestas;
}

//Imprime todas el cuestionario, incluyendo respuestas correctas e incorrectas
function imprimirCuestionario()
{
	html += '<h3 style="color:green;">Respuestas Correctas</h3>';
	html += imprimirRespuestas(true);
	html += '<h3 style="color:red;">Respuestas Incorrectas</h3>';
	html += imprimirRespuestas(false);
	return html;
}

function printHTML(mensaje)
{
	//document.write(html);
	//Reemplazado por Get elementByID para tomar el nodo (Node Object) en el DOM
	var outputDiv = document.getElementById("output");
	outputDiv.innerHTML = mensaje;
}

//Preguntamos y procesamos las respuestas
for(var i=0; i<preguntas.length; i++)
{
	var respuestaSimple;
	do{
		respuestaSimple = prompt("Responda: " + preguntas[i].pregunta);
	}while(respuestaSimple=='')

	if(isNaN(respuestaSimple))
	{
		preguntas[i].respuestaUsuario = respuestaSimple.toLowerCase();
	}else{
		preguntas[i].respuestaUsuario = parseInt(respuestaSimple);
	}

	if(preguntas[i].respuestaUsuario==preguntas[i].respuesta)
	{
		preguntas[i].acerto = true;
	}else{
		preguntas[i].acerto = false;	
	}
}

var html = "<h1>Adivina adivinador</h1>";
html += "<h2>Resultado de respuestas</h2>"
html += imprimirCuestionario();
printHTML(html);