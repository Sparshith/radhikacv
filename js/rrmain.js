
function main() {

(function () {
   'use strict';

	// Hide .navbar first
	$(".navbar").hide();
	
	// Fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 200) {
				$('.navbar').fadeIn();
			} else {
				$('.navbar').fadeOut();
			}
		});

	
	});

  $(".lazy").lazyload({
    effect : "fadeIn"
  }).removeClass('lazy');
	
	// Preloader */
	  	$(window).load(function() {

   	// will first fade out the loading animation 
    	$("#status").fadeOut("slow"); 

    	// will fade out the whole DIV that covers the website. 
    	$("#preloader").delay(500).fadeOut("slow").remove();      

  	}) 


    //Disabling carousel 

    $('.carousel').carousel({
      interval: false
    }); 

   // Page scroll
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

    // Show Menu on Book
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 100;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    })

      $(window).load(function() {   
       var $container = $('.portfolio-items');   
       $container.isotope({    
           filter: '*',    
           animationOptions: {   
               duration: 750,    
               easing: 'linear',   
               queue: false    
           }   
       });   
       $('.cat a').click(function() {    
           $('.cat .active').removeClass('active');    
           $(this).addClass('active');   
           var selector = $(this).attr('data-filter');   
           $container.isotope({    
               filter: selector,   
               animationOptions: {   
                   duration: 750,    
                   easing: 'linear',   
                   queue: false    
               }   
           });   
           return false;   
       });   
   
   });   

    // $('.work-filter').on('click', function(event) {
    //     console.log("here");
    //     event.preventDefault();
    // });
	

  // jQuery Parallax
  function initParallax() {
    $('#intro').parallax("100%", 0.3);
    $('#works').parallax("100%", 0.3);
    $('#testimonials').parallax("100%", 0.3);

  }
  initParallax();
}());


}
main();