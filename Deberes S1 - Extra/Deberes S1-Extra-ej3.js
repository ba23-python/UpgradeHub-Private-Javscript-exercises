//Deberes S1 extra- ej3
//Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, igual o mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.

const movies = [
  {name: "Your Name", durationInMinutes: 130},
  {name: "Pesadilla antes de navidad", durationInMinutes: 225}, 
  {name: "Origen", durationInMinutes: 165}, 
  {name: "El señor de los anillos", durationInMinutes: 967}, 
  {name: "Solo en casa", durationInMinutes: 214}, 
  {name: "El jardin de las palabras", durationInMinutes: 40}
];

let smallMovies = [];
let mediumMovies = [];
let bigMovies = [];
for(let movie of movies){
  if(movie.durationInMinutes < 100) {
    smallMovies.push(movie);
  } else if(movie.durationInMinutes < 200){
    mediumMovies.push(movie);
  } else {
    bigMovies.push(movie);
  }
}
console.log(smallMovies, mediumMovies, bigMovies);
