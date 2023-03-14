
let catetoA = parseFloat(prompt("Introduce la longitud del cateto A: "));
let catetoB = parseFloat(prompt("Introduce la longitud del cateto B: "));


let hipotenusa = (catetoA ** 2 + catetoB ** 2) ** 0.5;

hipotenusa = hipotenusa.toFixed(2);
console.log(`La longitud de la hipotenusa es: ${hipotenusa}`);
