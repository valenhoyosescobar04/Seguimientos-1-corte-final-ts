console.log("Bienvenido al sistema de pago de la pesa electrónica");

const costoServicio: number = 500;
let montoTotal: number = 0;

console.log("Tipos de pago disponibles:");
console.log("1. Moneda");
console.log("2. Billete");

const tipoPago: number = parseInt(prompt("Seleccione un tipo de pago (1 para Moneda, 2 para Billete):"));

if (tipoPago === 1) {
  console.log("Valores de monedas disponibles:");
  console.log("1. 500 pesos");
  console.log("2. 1000 pesos");
  
  const valorMoneda: number = parseInt(prompt("Seleccione el valor de la moneda (1 para 500 pesos, 2 para 1000 pesos):"));

  if (valorMoneda === 1) {
    montoTotal += 500;
  } else if (valorMoneda === 2) {
    montoTotal += 1000;
  } else {
    console.log("Valor de moneda inválido.");
    process.exit(1);
  }
} else if (tipoPago === 2) {
  console.log("Valores de billetes disponibles:");
  console.log("1. 2000 pesos");
  console.log("2. 5000 pesos");
  
  const valorBillete: number = parseInt(prompt("Seleccione el valor del billete (1 para 2000 pesos, 2 para 5000 pesos):"));

  if (valorBillete === 1) {
    montoTotal += 2000;
  } else if (valorBillete === 2) {
    montoTotal += 5000;
  } else {
    console.log("Valor de billete inválido.");
  }
} else {
  console.log("Tipo de pago inválido.");
}

if (montoTotal >= costoServicio) {
  if (montoTotal > costoServicio) {
    const cambio: number = montoTotal - costoServicio;
    console.log("Su cambio es: " + cambio + " pesos.");
  }
} else {
  console.log("Falta dinero para completar el pago.");
}

console.log("¡Vuelve pronto!");
