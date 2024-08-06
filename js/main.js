console.log("Sol Martinez Schippert - Calcular nota final de alumnos ingresados");

class Alumno {
    constructor(nombre, apellido, edad, nota) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.nota = nota;
    }
}

const claseUno = [];
let acumulador = 0;

function agregarAlumno() {
    let nombre = prompt("Ingresá el nombre del alumno:");
    let apellido = prompt("Ingresá el apellido del alumno:");
    let edad = parseInt(prompt("Ingresá la edad del alumno:"));
    let nota = parseFloat(prompt("Ingresá la nota del alumno:"));
    
    let nuevoAlumno = new Alumno(nombre, apellido, edad, nota);
    
    claseUno.push(nuevoAlumno);
}

function sumadorDeNotas() {
    let ingreso = prompt("¿Querés ingresar notas de alumnos o no? Escribí 'no' para salir");
    
    while (ingreso !== "no") {
        agregarAlumno();
        acumulador += claseUno[claseUno.length - 1].nota;
        ingreso = prompt("¿Necesitás ingresar más alumnos? Escribí 'no' para salir");
    }
}

sumadorDeNotas();
alert("La sumatoria de las notas de los alumnos es de " + acumulador);

let detallesAlumnos = "Detalles de los alumnos:\n";
for (let alumno of claseUno) {
    detallesAlumnos += `Nombre: ${alumno.nombre}, Apellido: ${alumno.apellido}, Edad: ${alumno.edad}, Nota: ${alumno.nota}\n`;
}
alert(detallesAlumnos);

alert("¡Nos vemos pronto!");