$(document).ready(function() {
    $(".iconoSoluciones").hover(
        function() { $(this).addClass("Hover"); },
        function() { $(this).removeClass("Hover"); }
    );
});
$(function() {
  	$('#textoVerMas').hover(function (){
		$('#imgVerMas').css({'visibility':'visible','opacity' : '1' , 'transform': 'scale(1.8)', 'transition-duration'  : '.6s', 'cursor' : 'pointer'});
	    $('#textoSeguridad').css({'visibility':'hidden', 'opacity': '0' , 'transform': 'scale(.5)', 'transition-duration'  : '.6s'});
	    $('#icnSolution1').css({'transform': 'scale(1.2)', 'transition-duration'  : '.6s'})
  }, function() {
    // on mouseout, reset the background colour
    $('#imgVerMas').css({'visibility':'hidden','opacity':'0'  , 'transform': 'scale(1)', 'transition-duration'  : '.6s'});
    $('#textoSeguridad').css({'visibility' : 'visible' , 'opacity': '1' , 'transform': 'scale(1)', 'transition-duration'  : '.6s' });
    $('#icnSolution1').css({'transform': 'scale(1)', 'transition-duration'  : '.6s'})
  });
});

$(function() {
  $('#icnSolution1').hover(function() {
    $('#imgVerMas').css({'visibility':'visible','opacity' : '1' , 'transform': 'scale(1.8)', 'transition-duration'  : '.6s'});
    $('#textoSeguridad').css({'visibility':'hidden', 'opacity': '0' , 'transform': 'scale(.5)', 'transition-duration'  : '.6s'});
    $('#icnSolution1').css({'transform': 'scale(1.2)', 'transition-duration'  : '.6s'})
  }, function() {
    // on mouseout, reset the background colour
    $('#imgVerMas').css({'visibility':'hidden','opacity':'0'  , 'transform': 'scale(1)', 'transition-duration'  : '.6s'});
    $('#textoSeguridad').css({'visibility' : 'visible' , 'opacity': '1' , 'transform': 'scale(1)', 'transition-duration'  : '.6s' });
    $('#icnSolution1').css({'transform': 'scale(1)', 'transition-duration'  : '.6s'})
  });
});
//equipamiento
$(function() {
  	$('#textoVerMas1').hover(function (){
		$('#imgVerMas1').css({'visibility':'visible','opacity' : '1' , 'transform': 'scale(1.8)', 'transition-duration'  : '.6s', 'cursor' : 'pointer'});
	    $('#textoEquipamiento').css({'visibility':'hidden', 'opacity': '0' , 'transform': 'scale(.5)', 'transition-duration'  : '.6s'});
	    $('#icnSolution2').css({'transform': 'scale(1.2)', 'transition-duration'  : '.6s'})
  }, function() {
    // on mouseout, reset the background colour
    $('#imgVerMas1').css({'visibility':'hidden','opacity':'0'  , 'transform': 'scale(1)', 'transition-duration'  : '.6s'});
    $('#textoEquipamiento').css({'visibility' : 'visible' , 'opacity': '1' , 'transform': 'scale(1)', 'transition-duration'  : '.6s' });
    $('#icnSolution2').css({'transform': 'scale(1)', 'transition-duration'  : '.6s'})
  });
});

$(function() {
  $('#icnSolution2').hover(function() {
    $('#imgVerMas1').css({'visibility':'visible','opacity' : '1' , 'transform': 'scale(1.8)', 'transition-duration'  : '.6s'});
    $('#textoEquipamiento').css({'visibility':'hidden', 'opacity': '0' , 'transform': 'scale(.5)', 'transition-duration'  : '.6s'});
    $('#icnSolution2').css({'transform': 'scale(1.2)', 'transition-duration'  : '.6s'})
  }, function() {
    // on mouseout, reset the background colour
    $('#imgVerMas1').css({'visibility':'hidden','opacity':'0'  , 'transform': 'scale(1)', 'transition-duration'  : '.6s'});
    $('#textoEquipamiento').css({'visibility' : 'visible' , 'opacity': '1' , 'transform': 'scale(1)', 'transition-duration'  : '.6s' });
    $('#icnSolution2').css({'transform': 'scale(1)', 'transition-duration'  : '.6s'})
  });
});

//sistemas
$(function() {
  	$('#textoVerMas2').hover(function (){
		$('#imgVerMas2').css({'visibility':'visible','opacity' : '1' , 'transform': 'scale(1.8)', 'transition-duration'  : '.6s', 'cursor' : 'pointer'});
	    $('#textoSistemas').css({'visibility':'hidden', 'opacity': '0' , 'transform': 'scale(.5)', 'transition-duration'  : '.6s'});
	    $('#icnSolution3').css({'transform': 'scale(1.2)', 'transition-duration'  : '.6s'})
  }, function() {
    // on mouseout, reset the background colour
    $('#imgVerMas2').css({'visibility':'hidden','opacity':'0'  , 'transform': 'scale(1)', 'transition-duration'  : '.6s'});
    $('#textoSistemas').css({'visibility' : 'visible' , 'opacity': '1' , 'transform': 'scale(1)', 'transition-duration'  : '.6s' });
    $('#icnSolution3').css({'transform': 'scale(1)', 'transition-duration'  : '.6s'})
  });
});

$(function() {
  $('#icnSolution3').hover(function() {
    $('#imgVerMas2').css({'visibility':'visible','opacity' : '1' , 'transform': 'scale(1.8)', 'transition-duration'  : '.6s'});
    $('#textoSistemas').css({'visibility':'hidden', 'opacity': '0' , 'transform': 'scale(.5)', 'transition-duration'  : '.6s'});
    $('#icnSolution3').css({'transform': 'scale(1.2)', 'transition-duration'  : '.6s'})
  }, function() {
    // on mouseout, reset the background colour
    $('#imgVerMas2').css({'visibility':'hidden','opacity':'0'  , 'transform': 'scale(1)', 'transition-duration'  : '.6s'});
    $('#textoSistemas').css({'visibility' : 'visible' , 'opacity': '1' , 'transform': 'scale(1)', 'transition-duration'  : '.6s' });
    $('#icnSolution3').css({'transform': 'scale(1)', 'transition-duration'  : '.6s'})
  });
});

//Consultoria
$(function() {
  	$('#textoVerMas3').hover(function (){
		$('#imgVerMas4').css({'visibility':'visible','opacity' : '1' , 'transform': 'scale(1.8)', 'transition-duration'  : '.6s', 'cursor' : 'pointer'});
	    $('#textoConsultoria').css({'visibility':'hidden', 'opacity': '0' , 'transform': 'scale(.5)', 'transition-duration'  : '.6s'});
	    $('#icnSolution4').css({'transform': 'scale(1.2)', 'transition-duration'  : '.6s'})
  }, function() {
    // on mouseout, reset the background colour
    $('#imgVerMas4').css({'visibility':'hidden','opacity':'0'  , 'transform': 'scale(1)', 'transition-duration'  : '.6s'});
    $('#textoConsultoria').css({'visibility' : 'visible' , 'opacity': '1' , 'transform': 'scale(1)', 'transition-duration'  : '.6s' });
    $('#icnSolution4').css({'transform': 'scale(1)', 'transition-duration'  : '.6s'})
  });
});

$(function() {
  $('#icnSolution4').hover(function() {
    $('#imgVerMas4').css({'visibility':'visible','opacity' : '1' , 'transform': 'scale(1.8)', 'transition-duration'  : '.6s'});
    $('#textoConsultoria').css({'visibility':'hidden', 'opacity': '0' , 'transform': 'scale(.5)', 'transition-duration'  : '.6s'});
    $('#icnSolution4').css({'transform': 'scale(1.2)', 'transition-duration'  : '.6s'})
  }, function() {
    // on mouseout, reset the background colour
    $('#imgVerMas4').css({'visibility':'hidden','opacity':'0'  , 'transform': 'scale(1)', 'transition-duration'  : '.6s'});
    $('#textoConsultoria').css({'visibility' : 'visible' , 'opacity': '1' , 'transform': 'scale(1)', 'transition-duration'  : '.6s' });
    $('#icnSolution4').css({'transform': 'scale(1)', 'transition-duration'  : '.6s'})
  });
})
//redes
$(function() {
  	$('#textoVerMas5').hover(function (){
		$('#imgVerMas5').css({'visibility':'visible','opacity' : '1' , 'transform': 'scale(1.8)', 'transition-duration'  : '.6s', 'cursor' : 'pointer'});
	    $('#textoRedes').css({'visibility':'hidden', 'opacity': '0' , 'transform': 'scale(.5)', 'transition-duration'  : '.6s'});
	    $('#icnSolution5').css({'transform': 'scale(1.2)', 'transition-duration'  : '.6s'})
  }, function() {
    // on mouseout, reset the background colour
    $('#imgVerMas5').css({'visibility':'hidden','opacity':'0'  , 'transform': 'scale(1)', 'transition-duration'  : '.6s'});
    $('#textoRedes').css({'visibility' : 'visible' , 'opacity': '1' , 'transform': 'scale(1)', 'transition-duration'  : '.6s' });
    $('#icnSolution5').css({'transform': 'scale(1)', 'transition-duration'  : '.6s'})
  });
});

$(function() {
  $('#icnSolution5').hover(function() {
    $('#imgVerMas5').css({'visibility':'visible','opacity' : '1' , 'transform': 'scale(1.8)', 'transition-duration'  : '.6s'});
    $('#textoRedes').css({'visibility':'hidden', 'opacity': '0' , 'transform': 'scale(.5)', 'transition-duration'  : '.6s'});
    $('#icnSolution5').css({'transform': 'scale(1.2)', 'transition-duration'  : '.6s'})
  }, function() {
    // on mouseout, reset the background colour
    $('#imgVerMas5').css({'visibility':'hidden','opacity':'0'  , 'transform': 'scale(1)', 'transition-duration'  : '.6s'});
    $('#textoRedes').css({'visibility' : 'visible' , 'opacity': '1' , 'transform': 'scale(1)', 'transition-duration'  : '.6s' });
    $('#icnSolution5').css({'transform': 'scale(1)', 'transition-duration'  : '.6s'})
  });
})

//redes
$(function() {
  	$('#textoVerMas6').hover(function (){
		$('#imgVerMas6').css({'visibility':'visible','opacity' : '1' , 'transform': 'scale(1.8)', 'transition-duration'  : '.6s', 'cursor' : 'pointer'});
	    $('#textoMantenimiento').css({'visibility':'hidden', 'opacity': '0' , 'transform': 'scale(.5)', 'transition-duration'  : '.6s'});
	    $('#icnSolution6').css({'transform': 'scale(1.2)', 'transition-duration'  : '.6s'})
  }, function() {
    // on mouseout, reset the background colour
    $('#imgVerMas6').css({'visibility':'hidden','opacity':'0'  , 'transform': 'scale(1)', 'transition-duration'  : '.6s'});
    $('#textoMantenimiento').css({'visibility' : 'visible' , 'opacity': '1' , 'transform': 'scale(1)', 'transition-duration'  : '.6s' });
    $('#icnSolution6').css({'transform': 'scale(1)', 'transition-duration'  : '.6s'})
  });
});

$(function() {
  $('#icnSolution6').hover(function() {
    $('#imgVerMas6').css({'visibility':'visible','opacity' : '1' , 'transform': 'scale(1.8)', 'transition-duration'  : '.6s'});
    $('#textoMantenimiento').css({'visibility':'hidden', 'opacity': '0' , 'transform': 'scale(.5)', 'transition-duration'  : '.6s'});
    $('#icnSolution6').css({'transform': 'scale(1.2)', 'transition-duration'  : '.6s'})
  }, function() {
    // on mouseout, reset the background colour
    $('#imgVerMas6').css({'visibility':'hidden','opacity':'0'  , 'transform': 'scale(1)', 'transition-duration'  : '.6s'});
    $('#textoMantenimiento').css({'visibility' : 'visible' , 'opacity': '1' , 'transform': 'scale(1)', 'transition-duration'  : '.6s' });
    $('#icnSolution6').css({'transform': 'scale(1)', 'transition-duration'  : '.6s'})
  });
})

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

