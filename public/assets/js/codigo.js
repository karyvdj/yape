function cargarPagina() {
  mostrarTelValido();
  alert("Tu código es: " + $codigoValido);
  $inputCodigo.keyup(validarCodigo);
  // console.log(localStorage.getItem('codigoUsuario'));
  // console.log(localStorage.getItem('telUsuario'));
}

var $url = 'http://localhost:3000/api/resendCode';
var $codigoValido = localStorage.getItem('codigoUsuario')
var $inputCodigo = $("#input-codigo");
var $telUsuario = localStorage.getItem('telUsuario');

function mostrarTelValido() {
  var $telValidado = $("#telValidado");
  $telValidado.text(localStorage.getItem('telUsuario'))
}

function validarCodigo(){
	var $codigoIngresado = $inputCodigo.val();
  // console.log($codigoIngresado);
	if($codigoIngresado == $codigoValido){
		location.href = "usuario.html";
	} else {
		generarNuevoCodigo();
	}
};

function generarNuevoCodigo() {
  $.post($url, {
    'phone': $telUsuario
  }, function(req){
	  console.log(req);
	});
}

$(document).ready(cargarPagina);
