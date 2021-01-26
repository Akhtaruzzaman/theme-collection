(function ($) {
 "use strict";

/*--------------------------
tab
---------------------------- */
$(document).ready(function(){
  $(".nav-tabs a").click(function(){
    $(this).tab('show');
  });
});
 
/*--------------------------
venobox
---------------------------- */	
$(document).ready(function(){
    $('.venobox').venobox();
});
/*--------------------------
 searchBox
---------------------------- */	
$(".search-icon").on('click', function(){
	$(".search-box").slideToggle();
});
/*--------------------------
 cart dropdown
---------------------------- */	
$(".minicart-icon").on('click', function(){
	$(".cart-dropdown").slideToggle();
});
/*--------------------------
mobile-menu
---------------------------- */	
$('#mobile-menu').mmenu(); 
/*--------------------------
scrollUp
---------------------------- */	
$.scrollUp({
	scrollText: '<i class="arrow_carrot-up"></i>',
	easingType: 'linear',
	scrollSpeed: 900,
	animation: 'slide'
});
/*---------------------
menu-stick
--------------------- */
var s = $("#sticker");
var pos = s.position();					   
$(window).on('scroll',function() {
	var windowpos = $(window).scrollTop();
	if (windowpos > pos.top) {
	s.addClass("stick");
	} else {
		s.removeClass("stick");	
	}
});
/*-------------------------------------
Hero Slider
----------------------------------------*/
var mainSlider = $('.main-slider');
mainSlider.slick({
	arrows: true,
	prevArrow:"<button type='button' class='slick-prev'><i class='arrow_carrot-left'></i></button>",
	nextArrow:"<button type='button' class='slick-next'><i class='arrow_carrot-right'></i></button>",
	autoplay: false,
	autoplaySpeed: 5000,
	dots: false,
	pauseOnFocus: false,
	pauseOnHover: false,
	fade: true,
	infinite: true,
	slidesToShow: 1,
	responsive: [
		{
			breakpoint: 767,
			settings: {
				arrows: false
			}
		},
		{
			breakpoint: 479,
			settings: {
				arrows: false
			}
		}
	]
});
/*--------------------------
service-carousel
---------------------------- */
$(".service-carousel").slick({
  dots: false,
  arrows:false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  adaptiveHeight: true,
  prevArrow: '<i class="fa fa-angle-left"></i>',
  nextArrow: '<i class="fa fa-angle-right"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
});
/*--------------------------
project-carousel
---------------------------- */
$(".projects-carousel").slick({
  dots: false,
  arrows:true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoPlay: true,
  adaptiveHeight: true,
	prevArrow:"<button type='button' class='slick-prev'><i class='arrow_carrot-left'></i></button>",
	nextArrow:"<button type='button' class='slick-next'><i class='arrow_carrot-right'></i></button>",
	responsive: [
		{
			breakpoint: 1169,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		},
		{
			breakpoint: 769,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 481,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
	]
});
/*--------------------------
team-carousel
---------------------------- */
$(".team-carousel").slick({
  dots: false,
  arrows:true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoPlay: true,
  adaptiveHeight: true,
	prevArrow:"<button type='button' class='slick-prev'><i class='arrow_carrot-left'></i></button>",
	nextArrow:"<button type='button' class='slick-next'><i class='arrow_carrot-right'></i></button>",
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 361,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
	]
});
/*--------------------------
related-products
---------------------------- */
$(".related-products").slick({
  dots: false,
  arrows:true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoPlay: true,
  adaptiveHeight: true,
	prevArrow:"<button type='button' class='slick-prev'><i class='arrow_carrot-left'></i></button>",
	nextArrow:"<button type='button' class='slick-next'><i class='arrow_carrot-right'></i></button>",
	responsive: [
		{
			breakpoint: 1169,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		},
		{
			breakpoint: 769,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 481,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
	]
});
/*--------------------------
address-carousel
---------------------------- */
$(".address-carousel").slick({
  dots: false,
  arrows:false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoPlay: true,
  adaptiveHeight: true,
	prevArrow:"<button type='button' class='slick-prev'><i class='arrow_carrot-left'></i></button>",
	nextArrow:"<button type='button' class='slick-next'><i class='arrow_carrot-right'></i></button>",
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 481,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
	]
});
/*--------------------------
services-carousel
---------------------------- */
$(".services-carousel").slick({
  dots: true,
  arrows:false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoPlay: true,
  adaptiveHeight: true,
	prevArrow:"<button type='button' class='slick-prev'><i class='arrow_carrot-left'></i></button>",
	nextArrow:"<button type='button' class='slick-next'><i class='arrow_carrot-right'></i></button>",
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 481,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
	]
});
/*--------------------------
testimonial-carousel
---------------------------- */
$(".testimonial-items").slick({
  dots: false,
  arrows:true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  adaptiveHeight: true,
	prevArrow:"<button type='button' class='slick-prev'><i class='arrow_carrot-left'></i></button>",
	nextArrow:"<button type='button' class='slick-next'><i class='arrow_carrot-right'></i></button>",
});
$(".two-col-testimonial").slick({
  dots: true,
  arrows:false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  adaptiveHeight: false,
	prevArrow:"<button type='button' class='slick-prev'><i class='arrow_carrot-left'></i></button>",
	nextArrow:"<button type='button' class='slick-next'><i class='arrow_carrot-right'></i></button>",
	responsive: [
		{
			breakpoint: 1169,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1
			}
		},
		{
			breakpoint: 481,
			settings: {
				slidesToShow: 1
			}
		},
	]
});
/*--------------------------
package-carousel
---------------------------- */
$(".package-carousel").slick({
  dots: false,
  arrows:true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoPlay: true,
  adaptiveHeight: true,
	prevArrow:"<button type='button' class='slick-prev'><i class='arrow_carrot-left'></i></button>",
	nextArrow:"<button type='button' class='slick-next'><i class='arrow_carrot-right'></i></button>",
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				arrows:false
			}
		},
		{
			breakpoint: 481,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
	]
});
/*--------------------------
blog-carousel
---------------------------- */
$(".blog-carousel").slick({
  dots: false,
  arrows:true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  adaptiveHeight: true,
	prevArrow:"<button type='button' class='slick-prev'><i class='arrow_carrot-left'></i></button>",
	nextArrow:"<button type='button' class='slick-next'><i class='arrow_carrot-right'></i></button>",
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				arrows:false
			}
		},
		{
			breakpoint: 481,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
	]
});
$(".blog-two-carousel").slick({
  dots: false,
  arrows:false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  adaptiveHeight: true,
	prevArrow:"<button type='button' class='slick-prev'><i class='arrow_carrot-left'></i></button>",
	nextArrow:"<button type='button' class='slick-next'><i class='arrow_carrot-right'></i></button>",
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				arrows:false
			}
		},
		{
			breakpoint: 481,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
	]
});
/*--------------------------
brand-carousel
---------------------------- */
$(".brand-items").slick({
  dots: true,
  arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoPlay: true,
  adaptiveHeight: true,
	prevArrow:"<button type='button' class='slick-prev'><i class='arrow_carrot-left'></i></button>",
	nextArrow:"<button type='button' class='slick-next'><i class='arrow_carrot-right'></i></button>",
});
$(".brands").slick({
  dots: false,
  arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoPlay: true,
  adaptiveHeight: true,
	prevArrow:"<button type='button' class='slick-prev'><i class='arrow_carrot-left'></i></button>",
	nextArrow:"<button type='button' class='slick-next'><i class='arrow_carrot-right'></i></button>",
	responsive: [
		{
			breakpoint: 1169,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 361,
			settings: {
				slidesToShow: 1,
			}
		},
	]
});
/*--------------------------
project-details-carousel
---------------------------- */
$(".project-details-carousel").slick({
  dots: false,
  arrows:true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoPlay: true,
  adaptiveHeight: true,
	prevArrow:"<button type='button' class='slick-prev'><i class='arrow_carrot-left'></i></button>",
	nextArrow:"<button type='button' class='slick-next'><i class='arrow_carrot-right'></i></button>",
});
/*--------------------------
 counterUp
---------------------------- */	
$('.count1').counterUp({
	delay: 10,
	time: 1000
});	

$('.count2').counterUp({
	delay: 15,
	time: 2000
});

$('.count3').counterUp({
	delay: 20,
	time: 3000
});

$('.count4').counterUp({
	delay: 10,
	time: 4000
});
/*----------------------------
 service-slider
------------------------------ */  
$( "#service-range" ).slider({
	range: "min",
	value: 350,
	min: 1,
	max: 700,
	slide: function( event, ui ) {
		$( "#square-feets" ).val( ui.value );
	}
});
$( "#square-feets" ).val( $( "#service-range" ).slider( "value" ) );
/*----------------------------
 worker-slider
------------------------------ */  
$( "#cleaning-frequency" ).slider({
	range: "min",
	value: 10,
	min: 1,
	max: 20,
	slide: function( event, ui ) {
		$( "#total-workers" ).val( ui.value );
	}
});
$( "#total-workers" ).val( $( "#cleaning-frequency" ).slider( "value" ) );
/*--------------------------
 isotop
---------------------------- */
$(window).on('load',function() {
	
	var layoutMode = 'fitRows';

	if($(window).width() < 992) {
		layoutMode = 'masonry';
	}
	
	$('.project-items').isotope({
		layoutMode: layoutMode,
	});
});

$('.projects-nav li').on('click', function() {
	
  $(".projects-nav li").removeClass("active");
  $(this).addClass("active");        

	var selector = $(this).attr('data-filter'); 
	$(".project-items").isotope({ 
		filter: selector, 
		animationOptions: { 
			duration: 750, 
			easing: 'linear', 
			queue: false
		} 
	}); 
  return false; 
});
/*---------------------
 countdown
--------------------- */
$('[data-countdown]').each(function() {
	
	var $this = $(this), finalDate = $(this).data('countdown');
	
	$this.countdown(finalDate, function(event) {
	$this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span><p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
	});
	
});
/*----------------------------
 cart-plus-minus-button
------------------------------ */  
$(".qtybutton").on("click", function() {
	var $button = $(this);
	var oldValue = $button.parent().find("input").val();

	if ($button.text() == "+") {
	  var newVal = parseFloat(oldValue) + 1;
	} else {
		// Don't allow decrementing below zero
		if (oldValue > 0) {
			var newVal = parseFloat(oldValue) - 1;
		} else {
			newVal = 0;
		}
	}
	
	$button.parent().find("input").val(newVal);
});

$("#diff-address").on('click', function(){
	$(".different-address").slideToggle();
});
})(jQuery); 