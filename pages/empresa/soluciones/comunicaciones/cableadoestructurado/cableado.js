$(document).ready(function() {
		    $(".nav-link").hover(
		        function() { $(this).addClass("Hover"); },
		        function() { $(this).removeClass("Hover"); }
		    );
           jQuery('button.collapseTopics').click( function(e) {
                jQuery('.collapse.topics').collapse('hide');
            });

            $( ".mas" ).click(function() {
                if(this.src.substr(this.src.length - 15) == 'plus-symbol.svg'){
                    $( this ).attr('src', './images/minus-symbol.svg');
                }else{
                    $( this ).attr('src', './images/plus-symbol.svg');
                }
              
              $( ".mas1" ).attr('src', './images/plus-symbol.svg');
              $( ".mas2" ).attr('src', './images/plus-symbol.svg');
            });
             $( ".mas1" ).click(function() {
               if(this.src.substr(this.src.length - 15) == 'plus-symbol.svg'){
                    $( this ).attr('src', './images/minus-symbol.svg');
                }else{
                    $( this ).attr('src', './images/plus-symbol.svg');
                }
              $( ".mas" ).attr('src', './images/plus-symbol.svg');
              $( ".mas2" ).attr('src', './images/plus-symbol.svg');
            });
              $( ".mas2" ).click(function() {
               if(this.src.substr(this.src.length - 15) == 'plus-symbol.svg'){
                    $( this ).attr('src', './images/minus-symbol.svg');
                }else{
                    $( this ).attr('src', './images/plus-symbol.svg');
                }
              $( ".mas" ).attr('src', './images/plus-symbol.svg');
              $( ".mas1" ).attr('src', './images/plus-symbol.svg');
            });


               $( ".accionMas" ).click(function() {
                let masu=document.getElementById("mas");
                if(masu.src.substr(masu.src.length - 15) == 'plus-symbol.svg'){
                    $( masu ).attr('src', './images/minus-symbol.svg');
                }else{
                    $( masu ).attr('src', './images/plus-symbol.svg');
                }
              
              $( ".mas1" ).attr('src', './images/plus-symbol.svg');
              $( ".mas2" ).attr('src', './images/plus-symbol.svg');
            });
             $( ".accionMas1" ).click(function() {
              let masu=document.getElementById("mas1");
               if(masu.src.substr(masu.src.length - 15) == 'plus-symbol.svg'){
                    $( masu ).attr('src', './images/minus-symbol.svg');
                }else{
                    $( masu ).attr('src', './images/plus-symbol.svg');
                }
              $( ".mas" ).attr('src', './images/plus-symbol.svg');
              $( ".mas2" ).attr('src', './images/plus-symbol.svg');
            });
              $( ".accionMas2" ).click(function() {
                let masu=document.getElementById("mas2");
               if(masu.src.substr(masu.src.length - 15) == 'plus-symbol.svg'){
                    $( masu ).attr('src', './images/minus-symbol.svg');
                }else{
                    $( masu ).attr('src', './images/plus-symbol.svg');
                }
              $( ".mas" ).attr('src', './images/plus-symbol.svg');
              $( ".mas1" ).attr('src', './images/plus-symbol.svg');
            });
		});