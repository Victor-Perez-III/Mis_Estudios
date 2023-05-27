// Tipos de Datos

//String: cadena de caracteres. 'a' 'hola' "hola mundo"
//Number: numeros (123 )
//Boolean: true o false
//Null: es nulo (es una variable definida pero su valor es nulo)
//Undefined: no definido
//Object: Esto es un objeto 

// Definicion de Variables
// var
// let
// const (no de puede cambiar los datos)

let miPrimeraVariable = "var"

// Re-asignando una variable(mutabilidad)
miPrimeraVariable = "Esto ha cambiado"
console.log(miPrimeraVariable);

//boolean
let miBoolean = true
let miBoolean2 = false

// Numeros
let miNumero = 0
let miNumero2 = 12
let miNumero3 = -25

// undefined
let Undef
console.log(Undef);

// Null
let nulo = null
console.log(nulo);

// Object (Es una Agrupacion de datos)

//Objeto vacio
const Objeto = {}

//Objeto data
const miobjecto = {
    unNUmero: 12,
    unString: "hola",
    unaCondicion: true,
}

console.log(miobjecto);

// navegar en las propiedades
console.log(miobjecto.unaCondicion);

// Arreglos (Array)
const arrV = []
const arr = [1, 2, "hola", true, miobjecto]
console.log(arr);

//agregar elementos a un arreglo
arr.push(5)// push --> empujar o introducir
arrV.push(true, 21, 'Victor')

//agregando elemtentos a un array vacio
console.log(arrV);

// NOTA: Listas: Una lista debe tener los mismos tipos de datos


let num = 5
if (num < 2) {
    console.log("es mayor");
} else {
    console.log("es menor");
}