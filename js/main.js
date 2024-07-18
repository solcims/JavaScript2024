console.log ("Sol Martinez Schippert - Calcular nota final de alumnos ingresados")

let ingreso = prompt("¿Querés ingresar notas de alumnos o no? Escribí esc para salir");
let acumulador = 0;

function sumadorDeNotas (){
    while (ingreso !== "esc") {

        const nota = parseInt(prompt("Ingresá la nota del alumno:"));

        acumulador += nota;

        ingreso = prompt("¿Necesitás ingresar más notas de alumnos o no(esc)? Escribí esc para salir");}
}

sumadorDeNotas ();

alert("La sumatoria de la nota de los alumnos es de " + acumulador);

alert ("¡Nos vemos pronto!")