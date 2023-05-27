// Control de Flujo
// Nos permite evaluar condiciones e iteraciones

//if(si es true se va a ejecurtar)

const edad = 10
if (edad > 5 && edad < 18) {// recibe una evalucion
    console.log('Play');

} else {// nos ayudara a podener una condicion si el if no se cumple
    console.log('No Play');
}
/* NOTA: a veces no sera necesario usar else si, 
podriamos poner la condiccion en un console.log*/

//while(mientras se cumpla se ejecutara si no lo hace saldra del codigo)
let x = 0;
while (x < 5) {
    console.log(x);
    x++
}

//switch

let y = 3
switch (y) {
    case 1: {
        console.log("victor");
        break;
    }
    case 2: {
        console.log("david");
        break;
    }
    case 3: {
        console.log("Perez");
        break;
    }
    default:
        console.log("hola");
        break;


}

// Mi ejercicio
const te_quiero = false

if (te_quiero) {
    console.log("casate comigo");

} else {
    console.log("no te quiero");
}


// for
for (let i = 0; i < 10; i++)/*instrucciones*/ {
    console.log(i);
}

let i = 0
while (i < 10) {

    console.log(i);
}

// navegar o acceder a un array

const numeros = [1, 2, "hola", 4, 5]

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

let hola = 45
