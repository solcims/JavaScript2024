// cometario de una línea. Si acá le doy enter, la siguiente línea ya no queda comentado. No es necesario cerrarlo.

/* 
    comentario de varias liníneas
    puedo darle enter sin problema, pero se debe cerrar. 
*/

//! rojo
//? azul
//todo naranja
//* verde clarito

/* Sintaxis:

Existen palabras reservadas en js, las cuales yo no puedo utilizar para crear variables.
Esto es porque se están utilizando por js.

-------------

Variables y Valores:

Variables> es un espacio reservado donde se guarda cierta información. 
Esta info puede cambiar. Le damos un nombre a esa variable, 
se guarda con un valor, y el mismo puede ir cambiando a medida que se ejecuta el programa.

Ya no se utiliza más la sintaxis "var" para crear variables. Si bien funciona, no se utiliza más.
Se usa let y const. el término let inicializa una variable

------------

strings, son valores guardados como texto. Es una cadena de texto.
*/

//todo Creando/Declarando Variable LET. La primera opción es crear la variable y luego en otra línea le asigno el valor. Pero se puede hacer todo junto

let nombre; //declarando variable
//declarando valor de la variable 
nombre = "Sol"; //! string

let apellido = "Martínez Schippert"; //declarando variable y su valor. Se pueden usar comillas, dobles, simples o las que son diagonales.
apellido = "Martínez" //modificando valor de variable let. No solo puedo modificar el valor, sino  también el tipo.
apellido = 5; //modificando tipo de valor a variable apellido.

apellidoDos = "Martínez Schippert";

//todo Declarando Variable CONST

const anioNacimiento = 1995; // es otro tipo de variable, pero que es constante. Quiere decir que su valor no cambia.

// con las variables const, se debe asignar el valor al momento que la creamos, dado que son const, si se crea vacía queda vacía.



//? ------------------------------------
//? ------------------------------------


//todo Variables con operaciones matemáticas.

let num1 = 5;
let num2 = 3;

let suma = num1 + num2; //Acá sumo 5 + 3. en las operaciones matemáticas, yo no guardo la operación 5 + 3, guardo el resultado que es 8.

console.log(suma); //mostramos daatos de js en la consola.

nombreCompleto= nombre + " " + apellidoDos
console.log(nombreCompleto);
// console.log(nombre + " " + apellidoDos); //concateno string

console.log("Hola, soy " + nombreCompleto + ". Mi año de nacimiento es: " + anioNacimiento + ".");

//todo prompt , consola y alert

//prompt le damos la posibilidad al usuario de podes escribir algo y que eso sea parte del codigo. Es un método de js.

// let nombreUsuario = prompt("Ingresá tu nombre");
// console.log("El nombre de usuario es: " + nombreUsuario);

//? let numero1 = prompt("Ingresá el primer número"); //! los prompt devuelven siempre string, no formato número.
//? let numero2 = prompt("Ingresá el segundo número");

//? console.log(parseInt(numero1) + parseInt(numero2));

let numero1 = parseInt(prompt("Ingresá el primer número")); // transformando a número directamente el prompt
let numero2 = parseInt(prompt("Ingresá el segundo número"));

//console.log(numero1 + numero2);

alert("La suma es: " + (numero1 + numero2)); // es como un prompt pero para mostrar info. acá, al concaterar variable numero1 y numero2 con un string, hace que los números se concatenen y no hace la fucnión matemática. por eso se ponene los paréntesis.

//con parseInt convertimos String en Numero. El parseInt convierte a numero entero hacia abajo.
// se puede usar parseFloat convierte a número con su decimal.