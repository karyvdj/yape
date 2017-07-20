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

function mostrarTelValido() {
  var $telValidado = $("#telValidado");
  $telValidado.text(localStorage.getItem('telUsuario'))
}

function validarCodigo(){
	var $codigo = $inputCodigo.val();
  console.log($codigo);
	if($codigo == $codigoValido){
		location.href = "usuario.html";
	} else {
		// generarNuevoCodigo();
	}
};

$(document).ready(cargarPagina);
