console.log("Bienvenido al simulador de resultados de la Champions League");

function calcularPuntos(marcadorEquipoA: number, marcadorEquipoB: number): number {
  if (marcadorEquipoA > marcadorEquipoB) {
    return 3; // Victoria
  } else if (marcadorEquipoA === marcadorEquipoB) {
    return 1; // Empate
  } else {
    return 0; // Derrota
  }
}

const nombresEquipos: string[] = [];
const puntosEquipos: number[] = [];

for (let i: number = 1; i <= 3; i++) {
  console.log("Resultados de la fecha " + i + ":");

  for (let j: number = 1; j <= 3; j++) {
    const nombreEquipoA: string = prompt("Ingrese el nombre del equipo A en el partido " + j + ":");
    const marcadorEquipoA: number = parseInt(prompt("Ingrese el marcador del equipo A en el partido " + j + ":"));

    const nombreEquipoB: string = prompt("Ingrese el nombre del equipo B en el partido " + j + ":");
    const marcadorEquipoB: number = parseInt(prompt("Ingrese el marcador del equipo B en el partido " + j + ":"));

    const puntosEquipoA: number = calcularPuntos(marcadorEquipoA, marcadorEquipoB);
    const puntosEquipoB: number = calcularPuntos(marcadorEquipoB, marcadorEquipoA);

    if (!nombresEquipos.includes(nombreEquipoA)) {
      nombresEquipos.push(nombreEquipoA);
      puntosEquipos.push(puntosEquipoA);
    } else {
      const index: number = nombresEquipos.indexOf(nombreEquipoA);
      puntosEquipos[index] += puntosEquipoA;
    }

    if (!nombresEquipos.includes(nombreEquipoB)) {
      nombresEquipos.push(nombreEquipoB);
      puntosEquipos.push(puntosEquipoB);
    } else {
      const index: number = nombresEquipos.indexOf(nombreEquipoB);
      puntosEquipos[index] += puntosEquipoB;
    }
  }
}

const equipos: { nombre: string; puntos: number }[] = [];
for (let i: number = 0; i < nombresEquipos.length; i++) {
  equipos.push({ nombre: nombresEquipos[i], puntos: puntosEquipos[i] });
}

equipos.sort((a, b) => b.puntos - a.puntos);

console.log("Ranking de equipos:");
for (let i: number = 0; i < equipos.length; i++) {
  console.log((i + 1) + ". " + equipos[i].nombre + " - " + equipos[i].puntos + " puntos");
}

console.log("¡Gracias por usar el simulador de resultados de la Champions League. Hasta luego!");
