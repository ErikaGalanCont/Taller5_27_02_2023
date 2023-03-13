// Desarrolle un algoritmo que realice la sumatoria de los números enteros comprendidos entre el 1 y el 1O, es decir, 1 + 2 + 3 + .... + 1O
let sumatoria = 0;

for (let i = 1; i <= 10; i++) {
    sumatoria += i;
}

console.log("La sumatoria de los números enteros del 1 al 10 es: " + sumatoria);