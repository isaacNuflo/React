import { getHeroeById } from "./Bases/08-imp-exp";
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('...2 segundos depués');
        const heroe = getHeroeById(2);
        console.log(heroe);
        resolve(heroe);
        //reject('No se pudo encontrar el heroe')
    }, 2000);
});


promesa.then((heroe) => {
    console.log('Then de la promesa');
    console.log(heroe.name);
}).catch(err => console.warn(err));


const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('...2 segundos depués');
            const heroe = getHeroeById(id);
            console.log(heroe);
            if (heroe) {
                resolve(heroe);
            } else {
                reject('No se pudo encontrar el heroe');
            }
        }, 2000);
    });
};

getHeroeByIdAsync(10).then(console.log)
    .catch(console.warn);