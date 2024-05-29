// Superheroes 

let nombre = "Piter";
let pelicula = "Spaiderman";
let edad = 29;

let Superheroes = {
    nombre: "Piter",
    pelicula: "Spaiderman",
    edad: 29,
};

console.log(Superheroes);
console.log(Superheroes.pelicula);
console.log(Superheroes['nombre']);


Superheroes.pelicula = "Spaiderman";

let llave = 'pelicula';
Superheroes[llave] = "Ironman";


delete Superheroes.pelicula

console.log(Superheroes);
