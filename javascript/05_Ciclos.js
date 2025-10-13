/**
 * CICLOS
 */

//while
//mientras se cumpla la condicion 
let contador = 0;
while (contador <= 10){
    console.log("hola mundo");
    contador += 1; //o contador = contador + 1
}

//Do-while
//ejecuta al menos una vez
var cont = 1;
do {
    console.log("hola mundo");
    cont += 1;
}while (cont <= 10);

//for
for (let i = 0; i <= 10; i++){
    console.log("hola mundo" );
}

//for-in
//sirve para iterar dentro de objetos
var person = {
    name: "Juan",
    age: 30,
    city: "New York"
}

//in restorna un booleano
//se usa en etapas de debug

for (let clave in persona){
    console.log(clave, persona[clave]); 
}

//for-of
//recorre objetos iterables, no se podria con objetos
var arreglo = [10, 20, 30, 40, 50];
for (let valor of arreglo){
    console.log(valor);
}
