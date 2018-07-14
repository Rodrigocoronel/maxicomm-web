$(document).ready(function() {
    $(".nav-link").hover(
        function() { $(this).addClass("Hover"); },
        function() { $(this).removeClass("Hover"); }
    );
});
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

