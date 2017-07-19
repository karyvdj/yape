function cargarpagina() {
	 $('.carousel.carousel-slider').carousel({fullWidth: true});
	 validarTel();
}

var $inputTel = $("#input-tel");
var $checkboxTel = $("#checkbox-tel");
var $btnContinuar = $("#continuar");
var $formularioTel= $("#formulario-tel");

console.log($checkboxTel);

$inputTel.keyup(validarTel);

function validarTel() {
	var $tel = $inputTel.val().length;
	if ($tel == 10) {
		$btnContinuar.removeAttr("disabled");
		$checkboxTel.attr("checked", true);
	}else{
		$btnContinuar.attr("disabled", true);
		$checkboxTel.removeAttr("checked");
	}
};

// url: http//localhost:3000/api/registerNumber
// metodo http: POST
// data: {"phone":"...","terms": "..."}

// Petición al servidor
function getJSON(url) {
	return new Promise(function (resolve, reject) {
		var ajax = new XMLHttpRequest();

		ajax.open("GET", url),
		ajax.send();
		ajax.onreadystatechange = function () {
			if (ajax.readyState == 4) {
				// resolve(JSON.parse(ajax.responseText));
			}
		}
	});
}

getJSON("api/users.js")
.then(function (datos) {
	console.log(datos);
	return getJSON(dato);
});


$(document).ready( cargarpagina);
