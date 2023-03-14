//Desarrolle un algoritmo que permita determinar el área lateral y volumen de un cilindro dado su radio (R) y altura (H). Formula: (VOL = π * R^2 * H), (AREA_LATERAL = 2 * π * R * H)


let pi = Math.PI;
console.log(pi);

let radio = prompt("Introduce el radio del cilindro");
let altura = prompt("Introduce la altura del cilindro");

let volumen = pi * radio ** 2 * altura;
let areaLateral = 2 * pi * radio * altura;

console.log("El volumen del cilindro es: " + volumen);
console.log("El área lateral del cilindro es: " + areaLateral);


