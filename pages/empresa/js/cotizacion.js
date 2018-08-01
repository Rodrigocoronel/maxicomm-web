$(function() {
	$("#button").click(function(){

	let error = false; 

	if( !$('#inputEmail').val() || !$('#inputName').val() || !$('#inputTelefono').val() || !$('#inputMensaje').val() ){
		$('#logsCoti').css({display : 'inline'});
		$('#logsCoti').html('<strong >Por Favor ingrese todos los datos</strong>');
		setTimeout("QuitarTexto()", 4*1000);
		error = true;
	}


	let data = {telefono : $('#inputTelefono').val() , email : $('#inputEmail').val() , mensaje : $('#inputMensaje').val(), nombre : $('#inputName').val()};
	console.log(data)
	if( ! error){
		 $.post("http://api.seedbc.net/api/registroCotizacion", data , function(data){
		 	$('#logsCoti').css({display : 'inline'});
	    	$('#logsCoti').html('<strong>Cotización enviada correctamente</strong>');
	    	limpiarInputs();
	     	setTimeout("QuitarTexto()", 4*1000);
		});
	}

	});
});

function QuitarTexto(){
	$('#logsCoti').html('');
	$('#logsCoti').css({display : 'none'});
}

function limpiarInputs(){
	$('#inputMensaje').val('');
	$('#inputName').val('');
	$('#inputTelefono').val('');
	$('#inputEmail').val('');
}

