$(document).ready(function() {
    $(".nav-link").hover(
        function() { $(this).addClass("Hover"); },
        function() { $(this).removeClass("Hover"); }
    );
});
$(document).ready(function() {
    $(".iconoSoluciones").hover(
        function() { $(this).addClass("Hover"); },
        function() { $(this).removeClass("Hover"); }
    );
});
// function hover(element) {
//   	if(element.id == 'icnSolution1'){
// 		$('.verMas1').css({'visibility': 'visible', 'opacity': '1'});
// 		$('#icnSolution1').css({ 'cursor': 'pointer'});
// 	}
// 	else if(element.id == 'icnSolution2'){
// 		$('.verMas2').css({'visibility': 'visible', 'opacity': '1'});
// 	}
// 	else if(element.id == 'icnSolution3'){
// 		$('.verMas3').css({'visibility': 'visible', 'opacity': '1'});
// 	}
// }
// function unhover(element) {
//   	if(element.id == 'icnSolution1'){
// 		$('.verMas1').css({'visibility': 'hidden', 'opacity': '0' , 'transition':'opacity .6s linear;*'});
// 	}
// 	else if(element.id == 'icnSolution2'){
// 		$('.verMas2').css({'visibility': 'hidden', 'opacity': '0' , 'transition':'opacity .6s linear;*'});
// 	}
// 	else if(element.id == 'icnSolution3'){
// 		$('.verMas3').css({'visibility': 'hidden', 'opacity': '0' , 'transition':'opacity .6s linear;*'});
// 	}
// }