const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const getUser = () => (
    {
        uid: '123',
        username: 'Aisac'
    }
)

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre
})
//console.log(saludar('Isaac'));
console.log(saludar3('Isaac Elias'));
console.log(getUsuarioActivo('Ana'));