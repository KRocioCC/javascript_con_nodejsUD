/*
Funciones
*/

//Funciones declarativas
function nombreFuncion(param1, param2){
    //Cuerpo de la función
    return param1 + param2;
}

//funcion saludar
function saludar(){
    console.log("holiii");
}
saludar();

function saludo(nombre){
    console.log("holiii $(nombre)");
}
saludar("karen");

function saludar(nombre){
    return "holiii $(nombre)";
}
var saludo1 = saludar("karen");
console.log(saludo1);

//Expresion o anonimos
var suma = function(a, b){
    return a + b;
}

console.log(suma(2,3));

//Funciones de tipo flecha
//arrow functions
//tienen un retunr implicito
var restar = (a, b) =>{
    if(typeof a === 'number' && typeof b === 'number'){
       return a - b;
    } else {
        return "debe ingresar solo numeros";
    }
}
console.log(restar(4,2));

var multiplicar = (a, b) =>{
     a * b;
}
console.log(multiplicar(5,3));
