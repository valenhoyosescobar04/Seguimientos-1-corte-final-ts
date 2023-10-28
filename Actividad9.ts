console.log("Bienvenido al sistema de votación electrónica");

let votosAnaMaria: number = 0;
let votosDiegoAcero: number = 0;

for (let i: number = 1; i <= 10; i++) {
  console.log("Votante " + i + ":");
  console.log("1. Ana Maria Suarez");
  console.log("2. Diego Acero");

  const opcionVoto: number = parseInt(prompt("Seleccione una opción de voto (1 o 2):"));

  if (opcionVoto === 1) {
    votosAnaMaria++;
  } else if (opcionVoto === 2) {
    votosDiegoAcero++;
  } else {
    console.log("Opción inválida. Voto no registrado.");
  }
}

let ganador: string | undefined;
let perdedor: string | undefined;

if (votosAnaMaria > votosDiegoAcero) {
  ganador = "Ana Maria Suarez";
  perdedor = "Diego Acero";
} else if (votosDiegoAcero > votosAnaMaria) {
  ganador = "Diego Acero";
  perdedor = "Ana Maria Suarez";
} else {
  console.log("La votación terminó en empate.");
}

console.log("El ganador es " + (ganador ? ganador : "") + " con " + (votosAnaMaria > votosDiegoAcero ? votosAnaMaria : votosDiegoAcero) + " votos.");
console.log("El perdedor es " + (perdedor ? perdedor : "") + " con " + (votosAnaMaria < votosDiegoAcero ? votosAnaMaria : votosDiegoAcero) + " votos.");
console.log("Gracias por usar el sistema de votación electrónica. ¡Hasta luego!");
