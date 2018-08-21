$(document).ready(function() {
    $(".nav-link").hover(
        function() { $(this).addClass("Hover"); },
        function() { $(this).removeClass("Hover"); }
    );


});

// determina si un elemento comienza a ser visible
function isElementVisible(elem){
   let viewScrollTop = $(window).scrollTop(); // distancia de scroll superior
   let viewBottom = viewScrollTop + $(window).height(); // distancia de scroll + el alto actual de window (lo no visible por scroll + lo visible)
   let topElemD = $(elem).offset().top; // distancia desde el elemento hasta el tope superior del viewport
   return (topElemD < viewBottom);
}


// invoco una función anónima en el evento scroll sobre window
$(window).on("scroll" ,function() {
   let elem = $('.iconoSoluciones'); // obtengo el elemento por id
   if(elem.length > 0)
   isElementVisible(elem) ? elem.addClass('fadeIn') : ""// si es visible agrego la class, de lo contrario la remuevo

   let scrollLeft = $('.animated2s.scrollLeft');
  if(scrollLeft.length > 0)
    isElementVisible(scrollLeft) ?  scrollLeft.addClass('fadeInLeft')  : ""

  let scrollRight = $('.animated2s.scrollRight');
  if(scrollRight.length > 0)
    isElementVisible(scrollRight) ?  scrollRight.addClass('fadeInRight')  : ""

  let scrollFadeIn = $('.animated.scrollFadeIn');
  if(scrollFadeIn.length > 0)
    isElementVisible(scrollFadeIn) ?  scrollFadeIn.addClass('fadeIn')  : ""
 
  

});