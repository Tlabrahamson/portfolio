$(document).ready(function(){
    //Toggles the hamburger menu in the mobile format
    $('#menuIcon').on('click', function(){
        $('#linkList').toggle();
    });
    //Smooth slide for the links
    $(".link").click(function() {
        var position = $($(this).attr("href")).offset().top;
        $("body, html").animate({
            scrollTop: position
        } ,700);
    });
});