$(document).ready(function() {
    $(".iconoSoluciones").hover(
        function() { $(this).addClass("Hover"); },
        function() { $(this).removeClass("Hover"); }
    );
    $(function() {
      $('a>img.iconoSoluciones').hover(function (){
        let papa = this.parentNode.childNodes;
        let hijos = papa[5].childNodes;
        
        hijos[1].style.visibility = 'hidden'; hijos[1].style.opacity = '0'; hijos[1].style.transform = 'scale(.5)';hijos[1].style.transitionDuration = '1s';

        hijos[3].style.visibility = 'visible';hijos[3].style.opacity = '1'; hijos[3].style.transform = 'scale(1.8)';  hijos[3].style.transitionDuration = '1s'; hijos[3].style.cursor = 'pointer';
        
        $(this).css({'visibility':'visible','opacity' : '1' , 'transform': 'scale(1.2)', 'transition-duration'  : '.6s', 'cursor' : 'pointer'});

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
   isElementVisible(elem) ? elem.addClass('fadeIn') : ""// si es visible agrego la class, de lo contrario la remuevo
});


$(function() {
  $( '#menuMision' ).click(function(){
      moverCarousel(0);
  });

   $( '#menuVision' ).click(function(){
      moverCarousel(1);

  });
   $( '#menuFilosofia' ).click(function(){
      moverCarousel(2);

  });
});



  function moverCarousel(pos){
     $('#carousel').carousel(pos);
    var element = document.getElementById("carousel");

    element.scrollIntoView();
 }
  function getGET()
    {
        // capturamos la url
        var loc = document.location.href;
        // si existe el interrogante
        if(loc.indexOf('?')>0)
        {
            // cogemos la parte de la url que hay despues del interrogante
            var getString = loc.split('?')[1];
            // obtenemos un array con cada clave=valor
            var GET = getString.split('&');
            var get = {};
 
            // recorremos todo el array de valores
            for(var i = 0, l = GET.length; i < l; i++){
                var tmp = GET[i].split('=');
                get[tmp[0]] = unescape(decodeURI(tmp[1]));
            }
            return get;
        }
    }
 
    window.onload = function()
    {
        // Cogemos los valores pasados por get
        var valores=getGET();
        if(valores)
        {
            // hacemos un bucle para pasar por cada indice del array de valores
            for(var index in valores)
            {
                console.log("<br>clave: "+index);
                if(index == "mision"){
                  moverCarousel(0);
                }
                else if(index == "vision"){
                  moverCarousel(1);
                }
                else{
                  moverCarousel(2);
                }

            }
        }else{
            // no se ha recibido ningun parametro por GET
            console.log("<br>No se ha recibido ningún parámetro");
        }
    }

