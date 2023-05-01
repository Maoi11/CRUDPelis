import Pelicula from "./classPelicula.js";
import { sumarioValidacion } from "./helpers.js";

let formAdminPelicula = document.getElementById("formPelicula");
let listaDePeliculas = [];
let codigo = document.getElementById('codigo'),
titulo = document.getElementById('titulo'),
descripcion = document.getElementById('descripcion'),
imagen = document.getElementById('imagen'),
genero = document.getElementById('genero'),
anio = document.getElementById('anio'),
duracion = document.getElementById('duracion'),
director = document.getElementById('director'),
reparto = document.getElementById('reparto'),
pais = document.getElementById('pais');




formAdminPelicula.addEventListener("submit", prepararFormulario);

function prepararFormulario(e) {
  e.preventDefault();
  console.log("prueba crear peli");
  crearPelicula();
}

function crearPelicula() {
  // validar datos del formulario
  let resumen = sumarioValidacion("algun texto!!");
  if (resumen.length === 0) {
    // los datos son validos
     //crear pelicula
  const peliculaNueva = new Pelicula(
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
  console.log(peliculaNueva);
  // lo agrego en un array
  listaDePeliculas.push(peliculaNueva);
  console.log(listaDePeliculas);
  // almaceno el array en localStorage
  localStorage.setItem("listaDePeliculas", JSON.stringify(listaDePeliculas));
  // cierro el modal del form
  } else {
    // los datos no son validos -> mostrar alert
    let alertError = document.getElementById('alerta');
    alertError.innerHTML = resumen;
    alertError.className = 'alert alert-danger mt-3'

  }

 
}
