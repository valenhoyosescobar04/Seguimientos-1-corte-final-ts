console.log("Bienvenido al examen de conocimientos");

let puntajeTotal: number = 0;

for (let i: number = 1; i <= 5; i++) {
  console.log("Pregunta " + i + ":");

  const respuestasCorrectas: string[] = ["b", "f", "a", "v", "c"];

  const pregunta: number = i;
  let respuesta: string = "";

  switch (pregunta) {
    case 1:
      console.log("¿Cuál es la capital de Francia?");
      respuesta = prompt("Ingrese su respuesta:").toLowerCase();
      break;
    case 2:
      console.log("¿Cuántos continentes tiene el mundo?");
      respuesta = prompt("Ingrese su respuesta:").toLowerCase();
      break;
    case 3:
      console.log("¿Qué gas es necesario para que se produzca la fotosíntesis?");
      respuesta = prompt("Ingrese su respuesta:").toLowerCase();
      break;
    case 4:
      console.log("El Sol es una estrella (v/f).");
      respuesta = prompt("Ingrese su respuesta:").toLowerCase();
      break;
    case 5:
      console.log("¿Cuál es el símbolo químico del agua?");
      respuesta = prompt("Ingrese su respuesta:").toLowerCase();
      break;
    default:
      console.log("Pregunta no válida.");
  }

  if (respuesta === respuestasCorrectas[i - 1]) {
    puntajeTotal += 10;
  }
}

console.log("Resultados del examen:");
console.log("Cantidad de respuestas correctas: " + (puntajeTotal / 10));
console.log("Puntaje total obtenido: " + puntajeTotal + " puntos.");

console.log("Gracias por realizar el examen de conocimientos. ¡Hasta luego!");
