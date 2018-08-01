$(document).ready(function() {
    $(".nav-link").hover(
        function() { $(this).addClass("Hover"); },
        function() { $(this).removeClass("Hover"); }
    );
});