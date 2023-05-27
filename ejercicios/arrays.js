// METODOS DE ARRAYS

// forEach ()--> se recorre un array
let frutas = ["Manzana", "Banana", "Zanahoria", "Remolacha", "Yuca", "Naranja", "Sandia"]
frutas.forEach(function (elemento, indice, array) {
    console.log(elemento, indice, array)
})

// push()--> agrega un nuevo elemento en la parte final del array
//unshift()--> agrega elementos al inicio del array
let newlong = frutas.push('lulo')
console.log(frutas);

// pop() --> elimina el ultimo elemento de un Array 
//shift()--> elimina el primer elemento de un Array
let ultimo = frutas.pop()
let primero = frutas.shift("Manzana")

// indexOf()--> muestra la posicion del elemento
let pos = frutas.indexOf("Banana")
console.log(pos)
console.log(frutas);

// splice(posicion, cantidad)--> elimina y devuelve los elementos del array
let itemDelete = frutas.splice(pos, 1)
console.log(itemDelete)
console.log(frutas);
/*
Con .splice() no solo se puede eliminar elementos del array, 
si no que también podemos extraerlos guardándolo en un nuevo array. 
¡Ojo! que al hacer esto estaríamos modificando el array de origen.
*/
let vegetales = frutas.splice(frutas, 3, 4, 5)
console.log(vegetales);

//slice() --> este metodo se utiliza para copiar un Array
let copyArray = vegetales.slice(vegetales, 1)
console.log(copyArray);


/*NOTA: Estudiar los siguentes metodos
join()
sort()
concat()
filter()
find()
map()
reduce()
every()
some()

*/
