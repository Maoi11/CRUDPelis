function validarCantidadCaracteres(texto, min, max) {
  if (texto.length >= min && texto.length <= max) {
    console.log("dato correcto");
    return true;
  } else {
    console.log("dato erroneo");
    return false;
  }
}

function validarDuracion(tiempo) {
  let regEx = /^\d{1,3}$/;
  if (regEx.test(tiempo)) {
    console.log("la expresion regular funciona");
    return true;
  } else {
    console.log("la expresion regular falló");
    return false;
  }
}

function validarURLImagen(imagen) {
  let regEx = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
  if (regEx.test(imagen)) {
    console.log("la expresion regular de la imagen funciona");
    return true;
  } else {
    console.log("la expresion regular de la imagenfalló");
    return false;
  }
}

function validarAnio(anio) {
  const anioMinimo = 1987;
  const anioMaximo = new Date().getFullYear();
  if (!isNaN(anio) && anio >= anioMinimo && anio <= anioMaximo + 1) {
    return true;
  } else {
    return false;
  }
}

function validarGenero(genero) {
  if (
    genero === "accion" ||
    genero === "drama" ||
    genero === "comedia" ||
    genero === "aventura"
  ) {
    return true;
  } else {
    return false;
  }
}

// function validarReparto(reparto) {
//   if (reparto.length > 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
//NO PUEDO USAR VALIDACION DE REPARTO PORQUE NO ES OBLIGATORIO. PENSAR COMO MAS VALIDARLO. 

export function sumarioValidacion(
  titulo,
  descripcion,
  duracion,
  imagen,
  anio,
  genero,
  pais,
  director,
) {
  let resumen = "";
  if (!validarCantidadCaracteres(titulo, 2, 100)) {
    resumen +=
      "El título ingresado no es válido. Debe tener entre 2 y 100 caracteres. <br>";
  }
  if (!validarCantidadCaracteres(descripcion, 5, 500)) {
    resumen +=
      "La descripción de la película debe tener entre 5 y 500 caracteres. <br>";
  }
  if (!validarDuracion(duracion)) {
    resumen +=
      "La duración debe ser una cantidad de minutos de entre 1 y 3 caracteres numericos. <br>";
  }
  if (!validarURLImagen(imagen)) {
    resumen +=
      "La imagen debe ser un URL de imagen con extensión válida (.jpg o .png o .gif) <br>";
  }
  if (!validarAnio(anio)) {
    resumen += "El año debe estar comprendido entre 1987 y 2024 <br>";
  }
  if (!validarGenero(genero)) {
    resumen +=
      "Los generos permitidos en este CRUD son: accion, drama, comedia o aventura. Seleccione uno de ellos para continuar. <br>";
  }
  if (!validarCantidadCaracteres(pais, 3, 50)) {
    resumen += "El Pais debe tener entre 3 y 50 caracteres. <br>";
  }
  if (!validarCantidadCaracteres(director, 3, 100)) {
    resumen += "El director debe tener entre 3 y 100 caracteres. <br>";
  }
 
  return resumen;
}
