function QuitarTexto(){
	$('.alert').css({display : 'none'});
}


$(function() {

	$("form").submit(function(evt){
		evt.preventDefault();

		var data = $(this).serialize();

	    $.post( "http://crm.maxicomm.net/index.php?entryPoint=WebToPersonCapture", data, function( data ) {
		  console.log( data ); // John
		}, "json");

		$('.alert').css({display : 'inline-block'});
	    

	    setTimeout("QuitarTexto()", 4*1000);
	    
	    document.getElementById("WebToLeadForm").reset();
	});
});
