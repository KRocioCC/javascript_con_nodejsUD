/** ESPACIOS DE MEMORIA
 * 
 * VARIABLES
 * 
 * 3 formas de declarar variables en JS
 * 
 * var (declaracion antigua, no se recomienda su uso)
 * let (declaracion moderna, se puede reasignar)
 * const (declaracion moderna, no se puede reasignar)
*/

//variable let
let nombre = "karen";
let x = 2;
console.log(nombre);
console.log(x);

let persona = {
    nombre: "karen",
    edad: 30,
    fechaDeNacimiento: null,
    direccion: {
        pais: "Colombia",
        ciudad: "Medellin",
    },
    ciudadesVisitadas: [
        "Bogota", 
        "Cali", 
        "Barranquilla"
    ],
};
console.log(persona);


//reasignacion de variable
let ciudad;
ciudad = "Medellin";
ciudad = "la paz"
console.log(ciudad);


//variables const
const pais = "Colombia";
console.log(pais);

const numero_pi = 3.14;
console.log(numero_pi);

//las constantes no se pueden reasignar