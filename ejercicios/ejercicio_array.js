let array =
    [[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]]

console.log(array[2][2]);

// Convertir un String en un array
let myData = 'Bogota,Medellin, Santa Marta, Barranquilla';
let cities = myData.split(',');
console.log(cities);
// Convertir un array en un string
// toString() nos sirve simplemente para convertir en array
let holaString = cities.join('-')
console.log(holaString);
// pop() elimina el ulmo elemento de array
let popped = cities.pop();
console.log(popped);


//ejercicio

let myString = 'Javascript+es+super+cool'
let myArray = myString.split('+')
console.log(myArray);
let arraylength = myArray.length
const lastItem = myArray[3]
console.log(lastItem);