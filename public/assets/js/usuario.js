function cargarPagina() {
  console.log(localStorage.getItem('codigoUsuario'));
  console.log(localStorage.getItem('telUsuario'));
  $telValidado.text(localStorage.getItem('telUsuario'))
}
var $telValidado = $("#telValidado");



$(document).ready(cargarPagina);
