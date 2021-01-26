$(document).ready(function(){
	
		//easy scroll nav
	
	$('.easyscroll').click(function(){
		
      var hash = this.hash;
		jQuery('html, body').animate({
        scrollTop: jQuery(hash).offset().top
      }, 800, function(){})
		
		return false;
		
	});
	
	
})