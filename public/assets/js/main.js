function cargarpagina() {
	 carrusel();
	 validarTel();
}

function carrusel() {
	$('.carousel.carousel-slider').carousel({
		fullWidth: true
	});
}
var $inputTel = $("#input-tel");
var $checkboxTel = $("#checkbox-tel");
var $btnContinuar = $("#continuar");
var $formularioTel= $("#formulario-tel");
//console.log($checkboxTel);
$inputTel.keyup(validarTel);
$checkboxTel.change(validarTel);

function validarTel() {
	var $tel = $inputTel.val().length;
	if ($tel == 10 && $checkboxTel.prop("checked")) {
		$btnContinuar.removeClass("disabled");
	}else{
		$btnContinuar.addClass("disabled");
	}
};

$(document).ready( cargarpagina);
