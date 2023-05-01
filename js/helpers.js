function validarCantidadCaracteres(texto, min, max) {
  if (texto.length >= min && texto.length <= max) {
    console.log("dato correcto");
    return true;
  } else {
    console.log("dato erroneo");
    return false;
  }
}

function validarDuracion (tiempo) {
    let regEx = /^\d{1,3}$/;
    if(regEx.test(tiempo)){
        console.log('la expresion regular funciona');
        return true
    } else {
        console.log('la expresion regular falló');
        return false
    }

}

export function sumarioValidacion(titulo, descripcion, duracion){
    let resumen = '';
    if(!validarCantidadCaracteres(titulo,2,100)){
resumen += 'El título ingresado no es válido. Debe tener entre 2 y 100 caracteres. <br>' 
    }
    if(!validarCantidadCaracteres(descripcion,5,500)){
        resumen += 'La descripción de la película debe tener entre 5 y 500 caracteres. <br>' 
            }
    if (!validarDuracion(duracion)){
        resumen += 'La duración debe ser una cantidad de minutos de entre 1 y 3 caracteres numericos. <br>'
    }
    return resumen;
}
