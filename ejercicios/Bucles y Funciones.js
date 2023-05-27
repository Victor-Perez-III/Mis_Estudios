// Bucles

let contador = 0

while (contador < 10) {
    console.log(contador++);
}

//for
for (let i = 0; i <= 10; i++)
    console.log(i);

// for...of
const nombres = ['Jorge', 'Miguel', 'Victor', 'Alex']

for (const names of nombres)
    console.log(names);
//if (array[i].propiedad === valor){}


// Practica #1

// Ejercicio 1

for (i = 0; i < 10; i++) {
    console.log('Me encanta Javascript');
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Ejercicio 2
for (const num of numeros) {
    console.log(num);
}

// Ejercicio 3
let notas = [0, 1, 2, 3, 4, 5];



for (let nota of notas) {

    if (nota >= 4) {
        console.log("aprueba" + nota);

    } else {
        console.log("re-prueba" + nota);
    }
    console.log(nota);
}

// Funciones

// Declarar una funcion
function suma(num1, num2) {
    return `${num1 + num2}`
}

console.log(suma(2, 3));

//funcion
const multiplicar = function (num) {
    return `el resultado es ${suma(2, 6) * num}`;


}
console.log(multiplicar(10));


//funcion flecha
const dividir = (num3) => {
    return `el resultado es ${suma(2, 6) / num3}`;
}
console.log(dividir(2));