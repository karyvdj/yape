function cargarpagina() {
	 $('.carousel.carousel-slider').carousel({fullWidth: true});
}

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
