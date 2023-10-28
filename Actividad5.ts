console.log("Bienvenido al simulador de compra de stickers");

console.log("Tamaños disponibles:");
console.log("1. Pequeño ($4000)");
console.log("2. Grande ($6000)");

const opcionTamaño: number = parseInt(prompt("Seleccione el tamaño de los stickers (1 para Pequeño, 2 para Grande):"));

let costoUnitario: number | undefined;

if (opcionTamaño === 1) {
  costoUnitario = 4000;
} else if (opcionTamaño === 2) {
  costoUnitario = 6000;
} else {
  console.log("Opción inválida. Por favor, seleccione una opción correcta.");
}

let cantidadStickers: number | undefined;

do {
  cantidadStickers = parseInt(prompt("Ingrese la cantidad de stickers que desea comprar (mínimo 10):"));

  if (cantidadStickers && cantidadStickers < 10) {
    console.log("La cantidad mínima permitida es 10. Por favor, ingrese una cantidad válida.");
  }
} while (cantidadStickers && cantidadStickers < 10);

if (costoUnitario !== undefined && cantidadStickers !== undefined) {
  const costoTotal: number = costoUnitario * cantidadStickers;

  console.log("El costo total de la compra es: $" + costoTotal.toFixed(2));
} else {
  console.log("No se pudo calcular el costo total debido a opciones inválidas.");
}

console.log("¡Gracias por usar el simulador de compra de stickers. Hasta luego!");
