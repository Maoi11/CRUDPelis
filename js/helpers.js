function validarCantidadCaracteres(texto, min, max) {
  if (texto.length >= min && texto <= max) {
    console.log("dato correcto");
    return true;
  } else {
    console.log("dato erroneo");
    return false;
  }
}

export function sumarioValidacion(titulo){
    let resumen = '';
    if(!validarCantidadCaracteres(titulo,2,100)){
resumen += 'El título ingresado no es válido. Debe tener entre 2 y 100 caracteres' 
    }
    return resumen;
}
