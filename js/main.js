//"Desarrolle un algoritmo para la empresa Constructora Tecnovivir Casas C.A., que le permita calcular e" imprimir la nómina para su cancelación a un total de 50 obreros calificados a quienes debe cancelar por horas trabajadas. Lahora trabajada se pautó en 30.000 Bolívares.

let costoHora = 30000; 
let numObreros = 50; 

let horasTrabajadas = []; 

for (let i = 0; i < numObreros; i++) {
    horasTrabajadas[i] = parseInt(prompt("Ingrese las horas trabajadas por el obrero " + (i+1) + ": "));
}

let totalHoras = horasTrabajadas.reduce((a, b) => a + b, 0); 
let totalPagar = totalHoras * costoHora; 

console.log("El total de horas trabajadas es: " + totalHoras);
console.log("El monto total a pagar es: " + totalPagar + " Bolívares");
