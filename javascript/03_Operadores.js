/**
 * OPERADORES
 */

/*
operadores de asignacion
*/

// operador de asignacion

var x = 2;
var y = true;

//operador de asignacion de adiccion
var x = 1;
x += 1; // x = x + 1
console.log(x);

//operador de asignacion de sustraccion
var y = 2;
y -= 1; // y = y - 1
console.log(y);

//operador de asignacion de multiplicacion
var z = 3;
z *= 2; // z = z * 2
console.log(z);

//operador de asignacion de division
var w = 10;
w /= 2; // w = w / 2
console.log(w);


/*
OPERADORES DE COMPARACION
*/

// operador igual (==)
console.log(3 == 3); //true
console.log(3 == "3"); //true

//operador no es igual (!=)
console.log(3 != 3); //false

//operador estrictamente igual (===) es estrito en el tipo de dato
console.log(3 === 3); //true
console.log(3 === "3"); //false

//operador desigualdad estricta (!==)
console.log(3 !== 3); //false
console.log(3 !== "3"); //true

//operadores >, >=, <, <=
console.log(3 > 2);
console.log(3 >= 3);
console.log(2 < 3);
console.log(3 <= 3);

/**
 * Operadores aritmeticos
 * -+, *, /, %
 */

console.log(3 + 2);
console.log(3 - 2);
console.log(3 * 2);
console.log(3 / 2);
console.log(3 % 2); //modulo o residuo de una division

//operadores de incremento (++)
var numero = 0;
console.log(++numero);

/**
 * operadores logicos
 * AND (&&)
 * OR (||)
 * NOT (!)  
 */

// AND (&&)
console.log(true && true);
console.log(2 > 1 && 3 > 2);

// OR (||)
console.log(true || false);
console.log(2 > 1 || 3 < 2);

// NOT (!)
console.log(!true);
console.log(!false);
console.log(!(2 > 1));
console.log(!(2 < 1));

//operador de cadena de texto o concatenacion (+)
let texto1 = "hola ";
let texto2 = "mundo";
console.log(texto1 + texto2);

//operador condicional (ternario)
let edad = 18;
let puedeVotar = (edad >= 18) ? "puede votar" : "no puede votar";
console.log(puedeVotar);

//operador de destructuracion
let persona = {
    nombre: "karen",
    edad: 30,
    pais: "Colombia"
};

let { nombre, pais } = persona;
console.log(persona);

//destructuracion en arreglos
let numeros = [1, 2, 3];
let [primero, segundo, tercero] = numeros;
console.log(primero, segundo, tercero);

//operador de miembro o acceso de propiedad (.)
let perrito = {
    nombre: "firulais",
    edad: 5,
}
console.log(perrito.nombre);
console.log(perrito.edad);