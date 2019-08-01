function QuitarTexto(){
  $('.alert').css({display : 'none'});
}


$(function() {

  $("form").submit(function(evt){
    
    evt.preventDefault();
    // console.log('Se envio el form');
    var URLactual = window.location.href;
    // console.log('url---->',URLactual);
    var descripcion=$("[name='description']").val();
    $("[name='description']").val(descripcion+ " Enviado desde la Sección: "+URLactual);
    let data = $(this).serialize();

    $.post( "https://crm.maxicomm.net/index.php?entryPoint=WebToPersonCapture",data, function( response ) {

      $.post("https://api.maxicomm.com.mx/api/registroCotizacion" , data ,function(response){

        console.log('guardado')
        $('.alert').css({display : 'inline-block'});
        setTimeout("QuitarTexto()", 4*1000);

      });
      
      document.getElementById("WebToLeadForm").reset();

    }), "jsonp";
    
  });

});

