function cargarpagina() {
	 carrusel();
}

function carrusel() {
	$('.carousel.carousel-slider').carousel({
		fullWidth: true
	});
}

$(document).ready( cargarpagina);
