const persona = {
    nombre: ' Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado'
};

const { nombre: nombre2 } = persona;

console.log(nombre2);

const userContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {
    console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.3232,
            lng: 24.63452
        }
    }
}

const avenger = userContext(persona);
const { nombreClave, anios, latlng: { lat, lng } } = avenger;
console.log(nombreClave, anios, lat, lng);