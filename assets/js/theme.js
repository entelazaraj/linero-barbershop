(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
// jQuery for page scrolling feature - requires jQuery Easing plugin
    
    
$(function() {
    $('a.js-scroll-trigger').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Keep navbar light (solid) at all times
  $("#mainNav").addClass("navbar-light");

 

})(jQuery); // End of use strict
