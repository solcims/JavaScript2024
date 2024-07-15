//todo Booleanos, es otro tipo de data de js que tiene dos valores posibles nada más, TRUE or FALSE.

//Condicionales

//! Comparaciones

//? == Es Igual
//? === Es estrictamente igual
//? != Es distinto
//? !== Es estrictamente distinto
//? < <= > >= Menor/ Mayor / Menor o igual / Mayor o igual

//? && Operador AND (y)
//? || Operador OR (o)
//?  ! Operador NOT (no)

/* if (9 > 8) //en el parentesis va la condición que queremos que se cumpla (true) para que se muestre lo que esta entre {}
    {
        console.log ("hola");
        
    } */

// let numero = parseInt(prompt("Ingresá un número"));

// // 1
// if (numero == 5) {
//     console.log("Es igual a 5");
// }

// //2
// if (numero == 6){
//     console.log("Es igual a 6");
// }


// //3
// if (numero > 0){
//     console.log("Es mayor a 0");
// }

// //4
// if (numero < 100) {
//     console.log("Es menor a 100");
// 

// .toLowerCase() string a min
// .toUpperCase() string a may

//? -------------------------------------------------------

//todo IF / IF ELSE / ELSE

// let clima = prompt("Ingresá el clima de hoy").toLowerCase(); // acá hacemos que lo que ingresa el usuario se pase todo a min y se pueda comprar siempre en el if. Esto tmb se puede sacar de acá
// y se puede colocar en cada if . por ejemplo if (clima.toLowerCase() == "soleado") {}  esto se usaria si necesitamos mantener el string tal cual lo cargó el usuario.

// if (clima == "soleado") {
//     console.log("☀️");
// } else if (clima == "nublado"){
//     console.log("☁️");
// } else if (clima == "tormenta") {
//     console.log("⛈️");
// } else {
//     console.log("No sé cuál es el clima 🤷‍♀️.");
// }

/* si clima es igual a soleado, mostrá el sol
    sino, si el clima es igual a nublado, mostrá la nube.
    si clima no está definido, o no se cumplen ninguna de las  anteriores, se muestra el último else.*/


//? ------------------------------------------------

// let numero = 10;
// let mayorA5 = numero > 5; //booleano, da true. Puedo crear la comparación en una variable (en lugar de colocarlo dentro del if) y llamo al booleano en el if directamente. Es decir llamo a la variable en la condicion del if.

// if (mayorA5) {
//     console.log("Mayor a 5");
// }

//?-----------------------

// console.log(5 == 5); // acá va a dar true porque 5 es igual a 5
// console.log(5 == "5"); //va a dar true porque el valor 5 es igual al valor 5 del string
// console.log(5 === "5"); // va a dar false porque el valor 5 si bien es igual al valor 5 del string, no es igual el tipo de dato (numerico vs string). el estrictamente igual compara valor y tipo de dato.


//? -------------------------------------------

//todo Operadores Lógicos


// // OR ||

// let nombre = prompt("Ingresá tu nombre");
// let apellido = prompt("Ingresá tu apellido");

// if (nombre === "" || apellido === "") { // chequea si una de las condiciones da true.
//     alert("Nombre o apellido inválidos");
// } else {
//     alert ("Nombre: " + nombre + " " + apellido);
// }


// && (and) - chequea si todas las condiciones son true.


// let nombre = prompt("Ingresá tu nombre");
// let apellido = prompt("Ingresá tu apellido");

// if (nombre === "" && apellido === "") { // chequea si todas las condiciones son true
//      alert("Nombre o apellido inválidos");
//  } else {
//      alert ("Nombre: " + nombre + " " + apellido);
//  }

//?------------------------------------------------------
// // not (!) - haace que todo sea lo contrario. Convierte a un booleano en su contrario. si hago un console.log(true); veo true .. pero si hago console.log(!true); va a ser false, pero no lo voy a ver por ser false.

// let condicion = 5 > 4; //esta variable va a devolver booleano true.

// let condicion2 = 6 > 9 //esta variable va a devolver booleano false.

// // quiero mostrar algo con la condicion2, pero sabemos que es un false, por lo que tengo que convertirlo en true para que if lea la condición en el console log que quiero ejecutar.
// if (!condicion2) {
//     console.log("Es falso.");
// }

//? -----------------------------------------

//! Actividad en Clase

//todo actividad 1

// let numero = parseInt(prompt("Ingresá un número"));

// if (numero > 1000) {
//     alert("Tu número es mayor a 1000.");
// } else {
//     alert("Tu número no es mayor a 1000.");
// }

//todo actvidad 2

let texto= prompt("Ingresá un texto");

if (texto === "Hola") {
    console.log("El texto es igual a Hola");
} else {
    console.log("El texto no es igual a Hola");
}



