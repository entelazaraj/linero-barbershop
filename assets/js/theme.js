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

  // Reveal on scroll for elements with .reveal-on-scroll
  var revealItems = document.querySelectorAll('.reveal-on-scroll');
  if (revealItems.length) {
    revealItems.forEach(function(el){
      el.style.opacity = 0;
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity .6s ease, transform .6s ease';
    });
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
          io.unobserve(entry.target);
        }
      });
    }, {threshold: 0.15});
    revealItems.forEach(function(el){ io.observe(el); });
  }

 

})(jQuery); // End of use strict
