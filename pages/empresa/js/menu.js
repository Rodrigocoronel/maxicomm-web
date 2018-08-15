$(document).ready(function() {
    $(".nav-link").hover(
        function() { $(this).addClass("Hover"); },
        function() { $(this).removeClass("Hover"); } 
    );
    $("#logoMaxi").addClass('fadeIn');
});


function isElementVisible(elem){
   let viewScrollTop = $(window).scrollTop(); // distancia de scroll superior
   let viewBottom = viewScrollTop + $(window).height(); // distancia de scroll + el alto actual de window (lo no visible por scroll + lo visible)
   let topElemD = $(elem).offset().top; // distancia desde el elemento hasta el tope superior del viewport
   return (topElemD < viewBottom);
}


// invoco una función anónima en el evento scroll sobre window
$(window).on("scroll" ,function() {
   let elem = $('#textoQuienes'); // obtengo el elemento por id
   	if ($('#textoQuienes').length > 0) {
  		isElementVisible(elem) ? elem.addClass('fadeInLeft') : ""
	}
/*
   	let elemIcono = $('#icono'); // obtengo el elemento por id
   	if ($('#icono').length > 0) {	
   		isElementVisible(elemIcono) ? elemIcono.addClass('fadeIn') : ""
   	}*/

   	var elms = document.querySelectorAll("[id='iconos']");

	for(var i = 0; i < elms.length; i++) 
	  console.log(elms[i])
})

