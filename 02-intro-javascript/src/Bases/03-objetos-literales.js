const persona = {
    nombre: 'Isaac',
    apellido: 'Ñuflo',
    edad: 23,
    direccion: {
        ciudad: 'Lima',
        zip: 12123124,
        lat: 14.3232,
        lng: 24.63452,
    }
};

//console.table({persona});

const persona2 = {...persona}; //Clonar objeto
persona2.nombre = 'Elias';

console.log({persona});
console.log(persona2)