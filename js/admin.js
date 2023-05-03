import Pelicula from "./classPelicula.js";
import { sumarioValidacion } from "./helpers.js";

let formAdminPelicula = document.getElementById("formPelicula");
let listaDePeliculas = [];
let modalFormPeliculas = new bootstrap.Modal(
  document.getElementById("modalPelicula")
);
console.log(modalFormPeliculas);

let btnCrearPelicula = document.getElementById("btnCrearPelicula");
btnCrearPelicula.addEventListener("click", mostrarFormularioPelicula);

let codigo = document.getElementById("codigo"),
  titulo = document.getElementById("titulo"),
  descripcion = document.getElementById("descripcion"),
  imagen = document.getElementById("imagen"),
  genero = document.getElementById("genero"),
  anio = document.getElementById("anio"),
  duracion = document.getElementById("duracion"),
  director = document.getElementById("director"),
  reparto = document.getElementById("reparto"),
  pais = document.getElementById("pais");

formAdminPelicula.addEventListener("submit", prepararFormulario);

function prepararFormulario(e) {
  e.preventDefault();
  console.log("prueba crear peli");
  crearPelicula();
}

function crearPelicula() {
  // validar datos del formulario
  let resumen = sumarioValidacion(
    titulo.value,
    descripcion.value,
    duracion.value,
    imagen.value,
    anio.value,
    genero.value,
    pais.value,
    director.value
  );
  if (resumen.length === 0) {
    // los datos son validos
    //crear pelicula
    const peliculaNueva = new Pelicula(
      titulo.value,
      descripcion.value,
      imagen.value,
      genero.value,
      anio.value,
      duracion.value,
      pais.value,
      director.value,
      reparto.value
    );
    console.log(peliculaNueva);
    // lo agrego en un array
    listaDePeliculas.push(peliculaNueva);
    console.log(listaDePeliculas);
    // almaceno el array en localStorage
    localStorage.setItem("listaDePeliculas", JSON.stringify(listaDePeliculas));
    // cierro el modal del form
    limpiarFormulario();
    modalFormPeliculas.hide();
  } else {
    // los datos no son validos -> mostrar alert
    let alertError = document.getElementById("alerta");
    alertError.innerHTML = resumen;
    alertError.className = "alert alert-danger mt-3";
  }
}
function limpiarFormulario() {
  formAdminPelicula.reset();
}

function mostrarFormularioPelicula() {
  modalFormPeliculas.show();
}
