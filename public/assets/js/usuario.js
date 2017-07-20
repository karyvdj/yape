function cargarPagina() {
  mostrarTelValido();
  alert("Tu código es: " + $codigoOriginal);
  // console.log(localStorage.getItem('codigoUsuario'));
  // console.log(localStorage.getItem('telUsuario'));
}

var $url = 'http://localhost:3000/api/resendCode'; 
var $codigoOriginal = localStorage.getItem('codigoUsuario')

function mostrarTelValido() {
  var $telValidado = $("#telValidado");
  $telValidado.text(localStorage.getItem('telUsuario'))
}


$(document).ready(cargarPagina);
