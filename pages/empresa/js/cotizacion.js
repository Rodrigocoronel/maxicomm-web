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

	$("form").submit(function(){
		
		console.log('Se envio el form');
	    document.getElementById("WebToLeadForm").reset();
	});
});


