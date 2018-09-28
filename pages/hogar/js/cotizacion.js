function QuitarTexto(){
	$('.alert').css({display : 'none'});
}


$(function() {

	$("form").submit(function(){
		
		console.log('Se envio el form');
	    document.getElementById("WebToLeadForm").reset();
	});
});