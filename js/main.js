//Desarrolle un algoritmo que permita determinar el área lateral y volumen de un cilindro dado su radio (R) y altura (H). Formula: (VOL = π * R^2 * H), (AREA_LATERAL = 2 * π * R * H)


let numeros = [];

for (let i = 0; i < 2; i++) {
    numeros[i] = parseInt(prompt("Ingrese el numero " + (i+1) + ": "));
}

for (let i = 0; i < 1; i++) {
    for (let j = 0; j < 1; j++) {
        if (numeros[j] > numeros[j+1]) {
            [numeros[j], numeros[j+1]] = [numeros[j+1], numeros[j]];
        }
    }
}

console.log("Los numeros ordenados de menor a mayor son: " + numeros[0] + ", " + numeros[1]);
