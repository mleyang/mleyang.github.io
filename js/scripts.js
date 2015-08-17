$(document).ready(function() {
 
        var aboveHeight = $(window).height()-125;
 

        $(window).scroll(function(){
6
                if ($(window).scrollTop() > aboveHeight){
 
                $('.navbarout').addClass('fixed');
                $('.restofsite').css('margin-top','0px');
                $('.fadelogo').css('opacity','1')
 
                } else {
 

                $('.navbarout').removeClass('fixed');
                $('.restofsite').css('margin-top','0');
                $('.fadelogo').css('opacity','0')
                }
        });
});
