/**
 * Control de Flujo
 */
// estructura if

var llueve = true;
if (llueve){
    console.log("lleva paraguas");
}

//estructura if...else

const MAYORIA_DE_EDAD = 18;
var edad = 20;

if (edad >= MAYORIA_DE_EDAD){
    console.log("es mayor de edad");
} else {
    console.log("es menor de edad");
}

//estructura if...else if...else
var semaforo = "rojo"
if (semaforo === "verde"){
    console.log("puede cruzar");
} else if (semaforo === "amarillo"){
    console.log("precaucion");
} else if (semaforo === "rojo"){
    console.log("no puede cruzar");
} else {
    console.log("semaforo no funciona");
}

//switch -----
switch (expresion){
    case caso1:
        //codigo a ejecutar si la expresion es igual a caso1
        break;
    case caso2:
        //codigo a ejecutar si la expresion es igual a caso2
        break;
    default:
        //codigo a ejecutar si la expresion no es igual a ningun caso
        break;
}

var producto = "leche";
switch (producto){
    case "pan":
        console.log("el pan cuesta $1000");
        break;
    case "leche":
        console.log("la leche cuesta $2500");
        break;
    case "huevos":
        console.log("los huevos cuestan $5000");
        break;
    default:
        console.log("producto no disponible");
        break;
}

