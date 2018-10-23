function redirect(){
   window.location.href = "https://maxicomm.com.mx/pages/empresa";
}

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
    	
    	let data = $(this).serialize();
      console.log(data)
    	$.post( "https://api.maxicomm.com.mx/api/registroSeminario",data, function( response ) {
	      console.log(response)
	      document.getElementById("seminario").reset();
        $('.alert2').removeClass('d-none');
        setTimeout("redirect()", 4*1000);
       
	      
	    }), "jsonp";
    });

    

});