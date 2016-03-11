$(document).ready(function() {
    // Window Resize
    $(window).resize(function(){
        if($(window).width() > 768 ) {
            $('.main-nav ul').removeAttr('style');
            $('.hamburger').removeClass('open');
        }
    });

    // Mobile Nav
    $('.hamburger').click(function(e) {
        $('.main-nav ul').slideToggle('fast');
        $(this).toggleClass('open');
    });

    $('.flexslider').flexslider({
        animation: "fade"
    });

});

$(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
        $('.main-nav, .main-nav ul li a, .main-nav .logo-img').addClass('sticky');
    } else{
        $('.main-nav, .main-nav ul li a, .main-nav .logo-img').removeClass('sticky');
    };
});
