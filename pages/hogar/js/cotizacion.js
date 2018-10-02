$.fn.serializeObject = function()
{
   var o = {};
   var a = this.serializeArray();
   $.each(a, function() {
       if (o[this.name]) {
           if (!o[this.name].push) {
               o[this.name] = [o[this.name]];
           }
           o[this.name].push(this.value || '');
       } else {
           o[this.name] = this.value || '';
       }
   });
   return o;
};


function QuitarTexto(){
	$('.alert').css({display : 'none'});
}


$(function() {

	$("form").submit(function(evt){
		
    evt.preventDefault();
		console.log('Se envio el form');
    let data = $(this).serialize();

    $.post( "http://crm.maxicomm.net/index.php?entryPoint=WebToPersonCapture",data, function( response ) {
      console.log(response)
      $('.alert').css({display : 'inline-block'});
      setTimeout("QuitarTexto()", 4*1000);
      document.getElementById("WebToLeadForm").reset();
    }), "jsonp";
	   
	});
});
