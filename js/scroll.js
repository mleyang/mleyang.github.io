$.fn.scrollTo = function(offset, callback) {
	var that = $(this);
	$('html, body').animate({
		scrollTop: that.offset().top - (offset || 0)
	}, 500, callback);
};

$(function() {
	  //$('.link').on("click", function (e) {
	   			//e.preventDefault();
                //var id = $(this).attr('href');
                //$(id).scrollTo(20);
                //window.location.hash = id.substring(1);
                //return false;

        $('#slide1').css('height', $(window).height());
              
        $('.linklogo').click(function() {
		$('#slide1').scrollTo(0); });
        $('.linkresume').click(function() {
		$('#resume').scrollTo(160); });
		$('.linkabout').click(function() {
		$('#about').scrollTo(160);});
		$('.linkportfolio').click(function() {
		$('#portfolio').scrollTo(160);});
		$('.linkdrb').click(function() {
		$('#drb').scrollTo(120);});

$('#slide1').vAlign();
        });


$.fn.vAlign = function() {       	
		return this.each(function(i){
			if ($(this).find(".nitinh-vAlign").length == 0)
	       		$(this).find(">:first-child").wrapAll('<div class="nitinh-vAlign" style="position:relative;"></div>');
	    
	        var div = $(this).find(">:first-child");
	        var ph = $(this).innerHeight();
	        var dh = div.height();
	        var mh = (ph - dh) / 2;
	        div.css('top', mh-80);
		});
	}
