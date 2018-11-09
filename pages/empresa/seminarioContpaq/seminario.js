function redirect(){
   window.location.href = "https://maxicomm.com.mx/pages/empresa";
}

var api_production = "https://api.maxicomm.com.mx";
var api_dev = "http://127.0.0.1:8000";

$(function() {
    $( "#tipo" ).change(function() {

    	let codigo = "<div class='form-group' id='remove'> <label class='seminario'>Nombre Empresa:  <span class='required'>*</span></label> <input class='form-control' type='text' name='empresa' required></div>";

    	if(this.value == 'empresa')
       		$('.nombreEmpresa').html(codigo);       	
       	else{
       		var parent = document.getElementById("nombreEmpresa");
			var child = document.getElementById("remove");
			parent.removeChild(child);
       	}

    });

    $("form").submit(function(evt){
    	evt.preventDefault();
    	
    	let data = $(this).serialize() + '&evento_id=' + eventoSeleccionado.id;
      data['id_evento'] = eventoSeleccionado.id;
      console.log(data)
    	$.post( api_production+"/api/registroSeminario",data, function( response ) {
	      console.log(response)
	      document.getElementById("seminario").reset();
        $('.alert2').removeClass('d-none');
        setTimeout("redirect()", 4*1000);
       
	      
	    }), "jsonp";
    });

});


  var eventosArray = [];
  var eventoSeleccionado = [];

function actualizarInfo(){
   document.getElementById('titulo').innerHTML='<p>'+eventoSeleccionado.titulo+'</p>';
   document.getElementById('lugar').innerHTML='<p>'+eventoSeleccionado.lugar+'</p>';
   document.getElementById('horario').innerHTML='<p>'+eventoSeleccionado.horario+'</p>';
   document.getElementById('expositor').innerHTML='<p>'+eventoSeleccionado.expositor+'</p>';
   document.getElementById('fecha_evento').innerHTML='<p>'+eventoSeleccionado.fecha_evento+'</p>';
}

$(function(){

  var $dropdown = $("#selectEvento");
  $.get(api_production+'/api/evento/listaPorFecha',function(response){
      let index = 0;
    $.each(response, function() {
      $dropdown.append($("<option />").val(index).text(this.titulo));
      index++;
    });
    eventosArray = response;
    eventoSeleccionado = response[0]
    actualizarInfo();
  });

  $( "#selectEvento" ).change(function() {
    eventoSeleccionado = eventosArray[this.value]
    actualizarInfo(eventoSeleccionado);

  });
  
});