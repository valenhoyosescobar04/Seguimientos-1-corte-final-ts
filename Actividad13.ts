console.log("Bienvenido a VenXtucarro - Concesionario de carros");

console.log("Marcas disponibles:");
console.log("1. Chevrolet");
console.log("2. Mazda");
console.log("3. Renault");

const opcionMarca: number = parseInt(prompt("Seleccione una marca (1 para Chevrolet, 2 para Mazda, 3 para Renault):"));
let referenciaSeleccionada: string = "";

const referenciasPorMarca: { [key: number]: string[] } = {
  1: ["Captiva", "Tracker"],
  2: ["Modelo A", "Modelo B"],
  3: ["Referencia X", "Referencia Y"],
};

const marcas: string[] = ["Chevrolet", "Mazda", "Renault"];
const referenciaElegida: string | undefined = referenciasPorMarca[opcionMarca]
  ? referenciasPorMarca[opcionMarca][parseInt(prompt(`Seleccione una referencia para ${marcas[opcionMarca - 1]} (1 o 2):`)) - 1]
  : undefined;

if (!referenciaElegida) {
  console.log("Marca o referencia inválida.");
} else {
  console.log(`Información de la referencia ${referenciaElegida}:`);
  console.log("Características técnicas: ...");
  console.log("Precio: ...");
  console.log("Disponibilidad: ...");
}

console.log("¡Gracias por visitar VenXtucarro! ¡Hasta luego!");
