const numero: number = parseInt(prompt("Ingrese un número entero para generar la tabla de multiplicar:"));

if (isNaN(numero)) {
  console.log("Por favor, ingrese un número válido.");
} else {
  console.log(`Tabla de multiplicar del número ${numero}:`);
  
  for (let multiplicador: number = 1; multiplicador <= 10; multiplicador++) {
    const resultado: number = numero * multiplicador;
    console.log(`${numero} x ${multiplicador} = ${resultado}`);
  }
}
