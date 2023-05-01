import Pelicula from "./classPelicula.js";

let formAdminPelicula = document.getElementById('formPelicula');
formAdminPelicula.addEventListener('submit', prepararFormulario);

function prepararFormulario(e){
    e.preventDefault();
    console.log('prueba crear peli')
    const pelicula = new Pelicula(
        "Título de la película",
        "Descripción de la película",
        "imagen.jpg",
        "Drama",
        2023,
        120,
        "Estados Unidos",
        "Director de la película",
        ["Actor 1", "Actor 2", "Actor 3"]
      );
      console.log(pelicula);
}