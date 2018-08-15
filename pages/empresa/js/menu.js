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

  // parallax software

  let desarrolloSoftware = $('.animated2s.devSoftware');
  if(desarrolloSoftware.length > 0)
    isElementVisible(desarrolloSoftware) ? desarrolloSoftware.addClass('fadeInLeft') : ""

  //parallax webservices
  let webServices = $('.animated2s.webServices');
  if(webServices.length > 0)
    isElementVisible(webServices) ? webServices.addClass('fadeInLeft') : ""

    //parallax webservices
  let fibraOptica = $('.animated2s.fibraOptica');
  if(fibraOptica.length > 0)
    isElementVisible(fibraOptica) ? fibraOptica.addClass('fadeInLeft') : ""

  // iconos animados
 	var elms = document.querySelectorAll(".animated.icono");

  if(elms.length > 0){
    for(var i = 0; i < elms.length; i++) {
        isElementVisible(elms[i]) ? elms[i].classList.add('fadeIn') : ""
    }
  }
  	
})

