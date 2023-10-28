console.log("Bienvenido a la pizzería Italiana pizza");

console.log("Opciones disponibles:");
console.log("1. Pizza ($7000 por unidad)");
console.log("2. Sándwiches ($5000 por unidad)");
console.log("3. Ensaladas ($15000 por unidad)");

const opcion: number = parseInt(prompt("Seleccione una opción (1 para Pizza, 2 para Sándwiches, 3 para Ensaladas):"));

let costoUnitario: number | undefined;

switch (opcion) {
  case 1:
    costoUnitario = 7000;
    break;
  case 2:
    costoUnitario = 5000;
    break;
  case 3:
    costoUnitario = 15000;
    break;
  default:
    console.log("Opción inválida. Por favor, seleccione una opción correcta.");
}

const cantidadPorciones: number = parseInt(prompt("Ingrese la cantidad de porciones que desea:"));

const agregarSalsa: string = prompt("¿Desea agregar salsa adicional? (sí/no)").toLowerCase();

let costoSalsaAdicional: number = 0;

if (agregarSalsa === "sí") {
  costoSalsaAdicional = 500;
}

let costoTotal: number | undefined;

if (costoUnitario !== undefined) {
  costoTotal = (costoUnitario * cantidadPorciones) + costoSalsaAdicional;

  console.log("El costo total de su pedido es: $" + costoTotal.toFixed(2));
} else {
  console.log("No se pudo calcular el costo total debido a opciones inválidas.");
}

console.log("¡Gracias por ordenar en Italiana pizza. Que disfrute su comida!");
