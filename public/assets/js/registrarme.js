
function cargarpagina() {
	 validarTel();
	 $inputTel.keyup(validarTel);
	 $checkboxTel.change(validarTel);
	 $btnContinuar.click(generarCodigo);
}

var $inputTel = $("#input-tel");
var $checkboxTel = $("#checkbox-tel");
var $btnContinuar = $("#continuar");
var $formularioTel= $("#formulario-tel");
var $url = "http://localhost:3000/api/registerNumber";
//console.log($checkboxTel);

function validarTel() {
	var $tel = $inputTel.val().length;
	if ($tel == 10 && $checkboxTel.prop("checked")) {
		$btnContinuar.removeClass("disabled");
	}
	else{
		$btnContinuar.addClass("disabled");
	}
};

//------------- DATOS API-------------------//
// url: http//localhost:3000/api/registerNumber
// metodo http: POST
// data: {"phone":"...","terms": "..."}

function generarCodigo () {
    $.post($url, {
				'phone':$inputTel.val(),
				'terms':true
			}, function(usuario){
        if (usuario.success == true) {
            localStorage.setItem('codigoUsuario', usuario.data.code)//guarga el dato para ser utilzado posteriormente
            localStorage.setItem('telUsuario', usuario.data.phone)
            location.href = "codigo.html";
        }
				else{
					alert(usuario.message);
				}
    })
}
$(document).ready( cargarpagina);
