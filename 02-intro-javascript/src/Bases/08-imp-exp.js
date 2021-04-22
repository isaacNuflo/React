import heroes, { owners } from "../data/heroes";

export const getHeroeById = (id) => heroes.find(heroe => heroe.id === id);

export const getHeroesByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner);

//console.log(heroes);
//console.log(getHeroeById(2));
//console.log(getHeroeById(3));
//console.log(getHeroeById(4));
//
//console.log(getHeroesByOwner('DC'));
//
//console.log(owners);