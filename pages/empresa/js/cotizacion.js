$(function() {
	$("#button").click(function(){

	let error = false; 

	if( !$('#inputEmail').val() || !$('#inputName').val() || !$('#inputTelefono').val() || !$('#inputMensaje').val() ){

		$('#logsCoti').html('<strong >Por Favor ingrese todos los datos</strong>');
		error = true;
	}


	let data = {telefono : $('#inputTelefono').val() , email : $('#inputEmail').val() , mensaje : $('#inputMensaje').val(), nombre : $('#inputName').val()};
	console.log(data)
	if( ! error){
		 $.post("http://api.seedbc.net/api/registroCotizacion", data , function(data){
	    	$('#logsCoti').html('<strong>Cotización enviada correctamente</strong>');
	    	limpiarInputs();
	     	setTimeout("QuitarTexto()", 4*1000);
		});
	}

	});
});

function QuitarTexto(){
	$('#logsCoti').html('');
}

function limpiarInputs(){
	$('#inputMensaje').val('');
	$('#inputName').val('');
	$('#inputTelefono').val('');
	$('#inputEmail').val('');
}

