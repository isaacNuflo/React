const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [, , personaje3] = personajes;

console.log(personaje3);


const returnaArreglo = () => {
    return ['ABC', 123];
}

const arr = returnaArreglo();

const [letras, numeros] = arr;

console.log(letras, numeros);

const userState = (valor) => {
    return [valor, () => console.log('Hola Mundo')];
}

const arr2 = userState('Isaac');

console.log(arr2);

const [nombre, setNombre] = arr2;

console.log(nombre);
setNombre();