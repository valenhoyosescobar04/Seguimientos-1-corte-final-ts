console.log("Bienvenido");

const costoApartamento: number = parseFloat(prompt("Ingrese el costo del apartamento:"));

console.log("Opciones de tipo de inmueble:\n1. Usado\n2. Nuevo");

let tipoInmueble: number;

do {
  tipoInmueble = parseInt(prompt("Ingrese el tipo de inmueble (1 o 2):"));
  if (tipoInmueble !== 1 && tipoInmueble !== 2) {
    console.log("Opción inválida. Por favor, ingrese 1 o 2.");
  }
} while (tipoInmueble !== 1 && tipoInmueble !== 2);

const comisionInmobiliaria: number = tipoInmueble === 1 ? costoApartamento * 0.1 : costoApartamento * 0.2;

const valorPropietario: number = costoApartamento - comisionInmobiliaria;
const valorInmobiliaria: number = comisionInmobiliaria;

console.log("Resultados:");
console.log("Valor que recibe el propietario: $" + valorPropietario.toFixed(2));
console.log("Valor recibido por la inmobiliaria: $" + valorInmobiliaria.toFixed(2));

console.log("Gracias por visitar la página. ¡Hasta luego!");
