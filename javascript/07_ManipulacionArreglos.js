/**
 * Manipulacion arreglos
 */

//ForEach recorre los elementos de un arreglo
var letras = ['a', 'b', 'c', 'd', 'e'];
//console.log(letras.length); //el tamaño del arreglo

//for (let i = 0; i < letras.length; i++){
//   const element = letras[i];
//   console.log(element);
//}


letras.forEach((element) => {
    console.log(element);
})

//Push, pop, shift
//push agrega un elemento al final del arreglo
var letras = ['a', 'b', 'c', 'd', 'e'];
letras.push('f'); //agrega un elemento 
console.log(letras);

//shift elimina el primer elemento del arreglo
letras.shift(); //elimina el primer elemento
console.log(letras);

//pop elimina el ultimo elemento del arreglo
letras.pop(); 
console.log(letras);

//unshift agrega un elemento al inicio del arreglo
letras.unshift('x');
console.log(letras);

//MAP
//es inmutable, no modifica el arreglo original
//Retorna un nuevo arreglo
var estudiantes = ["jhess", "Edely", "rosa", "karen", "sara", "bet", "mika"];
var asistencia = estudiantes.map((nombre) => {
    return {
        nombre: nombre,
        asistencia: false,
    }
})
console.log(estudiantes);
console.log(asistencia);

var productos = [
    {nombre: "camisa", precio: 20},
    {nombre: "pantalon", precio: 25},
    {nombre: "zapatos", precio: 50},
    {nombre: "calcetas", precio: 5},
]
var productosImpuestos = productos.map((producto) => {
    producto.impuesto = 12;
    return producto;
})
console.log(productos);
console.log(productosImpuestos);