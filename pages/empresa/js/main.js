$(document).ready(function() {
    $(".iconoSoluciones").hover(
        function() { $(this).addClass("Hover"); },
        function() { $(this).removeClass("Hover"); }
    );
    
    setTimeout("aparecerTexto()", 720);
    setTimeout("aparecerTexto2()", 720);
    setTimeout("aparecerTexto3()", 720);
});

function aparecerTexto(){
  $("#textoInicio").addClass('fadeInDown');
}

function aparecerTexto2(){
  $("#textoInicio2").addClass('fadeInDown');
}

function aparecerTexto3(){
  $("#textoInicio3").addClass('fadeInDown');
}

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


