//Arreglos
//const arreglo = new Array();
const arreglo = [1, 2, 3, 4];
//arreglo.push(1); modifica el objeto

//let arreglo2 = arreglo;
//arreglo2.push(5);

let arreglo2 = [...arreglo, 5] //con operador spread

const arreglo3 = arreglo2.map(function (numero) { //Crea un nuevo array
    return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);