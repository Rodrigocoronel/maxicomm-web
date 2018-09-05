$(document).ready(function() {
    $(".nav-link").hover(
        function() { $(this).addClass("Hover"); },
        function() { $(this).removeClass("Hover"); } 
    );
    $("#logoMaxi").addClass('fadeIn');




   

  $(function() {
      $('a>img.iconoSoluciones').hover(function (){

        let papa = this.parentNode.childNodes;
        let hijos = papa[5].childNodes;

        
        hijos[1].style.visibility = 'hidden'; hijos[1].style.opacity = '0'; hijos[1].style.transform = 'scale(.5) ';hijos[1].style.transitionDuration = '1s';

        hijos[3].style.visibility = 'visible';hijos[3].style.opacity = '1'; hijos[3].style.transform = 'scale(1.8) ';  hijos[3].style.transitionDuration = '1s'; ;
        
        $(this).css({'visibility':'visible','opacity' : '1' , 'transform': 'scale(1.2) ', 'transition-duration'  : '.6s', 'cursor' : 'pointer'});

      }, function() {
        let papa = this.parentNode.childNodes;
        let hijos = papa[5].childNodes;

        $(this).css({'transform': 'scale(1)', 'transition-duration'  : '.6s'})

        hijos[3].style.visibility = 'hidden'; hijos[3].style.opacity = '0'; hijos[3].style.transform = 'scale(.4)';  hijos[3].style.transitionDuration = '1s';


        hijos[1].style.visibility = 'visible'; hijos[1].style.opacity = '1'; hijos[1].style.transform = 'scale(1)'; hijos[1].style.transitionDuration = '1s';
       
  });

      $('div.textoVerMas').hover(function(){

        hijos = this.childNodes;
        papa = this.parentNode.childNodes;

        papa[1].style.transform = 'scale(1.2)'; papa[1].style.transitionDuration= '1s';

        hijos[1].style.visibility = 'hidden'; hijos[1].style.opacity = '0'; hijos[1].style.transform = 'scale(.5)'; hijos[1].style.transitionDuration = '1s';

        hijos[3].style.visibility = 'visible'; hijos[3].style.opacity = '1'; hijos[3].style.transform = 'scale(1.8)';  hijos[3].style.transitionDuration = '1s';hijos[3].style.cursor = 'pointer';

       
      }, function(){
         let papa = this.parentNode.childNodes;
        let hijos = this.childNodes;

        papa = this.parentNode.childNodes;
        papa[1].style.transform = 'scale(1)'; papa[1].style.transitionDuration= '1s';

        $(this).css({'transform': 'scale(1)', 'transition-duration'  : '1s'})

        hijos[3].style.visibility = 'hidden'; hijos[3].style.opacity = '0'; hijos[3].style.transform = 'scale(1)';  hijos[3].style.transitionDuration = '1s';

        hijos[1].style.visibility = 'visible'; hijos[1].style.opacity = '1'; hijos[1].style.transform = 'scale(1)';  hijos[1].style.transitionDuration = '1s';
    });
  

  });

  //   $(function() {
  //   $('div.cuadros>img').hover(function (){
  //     $(this).css({'visibility':'visible','opacity' : '1' , 'transform': 'scale(1.2)', 'transition-duration'  : '.6s', 'cursor' : 'pointer'});
  //     }, function() {
  //     // on mouseout, reset the background colour
  //     $(this).css({'transform': 'scale(1)', 'transition-duration'  : '.6s'})
  //   });
  // });

});


function isElementVisible(elem){
   let viewScrollTop = $(window).scrollTop(); // distancia de scroll superior
   let viewBottom = viewScrollTop + $(window).height(); // distancia de scroll + el alto actual de window (lo no visible por scroll + lo visible)
   let topElemD = $(elem).offset().top; // distancia desde el elemento hasta el tope superior del viewport
   return (topElemD < viewBottom);
}


function cameraDelay(){
  $(".animated2s.camaraVideo").addClass('fadeInLeft')
}

// invoco una función anónima en el evento scroll sobre window
$(window).on("scroll" ,function() {

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
  
  let parallaxMswindows = $('.animated2s.parallaxMswindows');
  if(parallaxMswindows.length > 0)
    isElementVisible(parallaxMswindows) ? parallaxMswindows.addClass('fadeInLeft') : ""

  let parallaxContpaq = $('.animated2s.parallaxContpaq');
  if(parallaxContpaq.length > 0)
    isElementVisible(parallaxContpaq) ? parallaxContpaq.addClass('fadeInLeft') : ""

  let camaraVideo = $('.animated2s.camaraVideo');
  if(camaraVideo.length > 0)
    isElementVisible(camaraVideo) ?  setTimeout("cameraDelay()", 320)  : ""

  let sigenosContacto = $('.animated2s.sigenosContacto');
  if(sigenosContacto.length > 0)
    isElementVisible(sigenosContacto) ?  sigenosContacto.addClass('fadeIn')  : ""

  let textoCotizacion = $('.animated2s.textoCotizacion');
  if(textoCotizacion.length > 0)
    isElementVisible(textoCotizacion) ?  textoCotizacion.addClass('pulse')  : textoCotizacion.removeClass('pulse')

  let scrollFadeIn = $('.animated.scrollFadeIn');
  if(scrollFadeIn.length > 0)
    isElementVisible(scrollFadeIn) ?  scrollFadeIn.addClass('fadeIn')  : ""

  let scrollLeft = $('.animated2s.scrollLeft');
  if(scrollLeft.length > 0)
    isElementVisible(scrollLeft) ?  scrollLeft.addClass('fadeInLeft')  : ""

  let scrollRight = $('.animated2s.scrollRight');
  if(scrollRight.length > 0)
    isElementVisible(scrollRight) ?  scrollRight.addClass('fadeInRight')  : ""


  // iconos animados
 	var elms = document.querySelectorAll(".animated.icono");

  if(elms.length > 0){
    for(var i = 0; i < elms.length; i++) {
        isElementVisible(elms[i]) ? elms[i].classList.add('fadeIn') : ""
    }
  }
  	
})

