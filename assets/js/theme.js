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

  // Build slideshow from a folder list (static list for now)
  // Add filenames inside this array; just drop new files and add names
  var slideshowImages = [
    'assets/img/portfolio/1.JPG',
    'assets/img/portfolio/2.JPG',
    'assets/img/portfolio/3.JPG',
    'assets/img/portfolio/4.JPG',
    'assets/img/portfolio/5.JPG',
    'assets/img/portfolio/6.JPG',
    'assets/img/portfolio/7.JPG',
    'assets/img/portfolio/8.JPG',
    'assets/img/portfolio/9.JPG',
    'assets/img/portfolio/10.JPG',
    'assets/img/portfolio/11.JPG',
    'assets/img/portfolio/12.JPG',
    'assets/img/portfolio/13.JPG',
    'assets/img/portfolio/14.JPG',
    'assets/img/portfolio/15.JPG',
    'assets/img/portfolio/16.JPG',
    'assets/img/portfolio/17.JPG',
    'assets/img/portfolio/18.JPG',
    'assets/img/portfolio/19.JPG',
    'assets/img/portfolio/20.JPG',
    'assets/img/portfolio/21.JPG',
  ];
  var carousel = document.getElementById('barberCarousel');
  if (carousel && slideshowImages.length){
    var indicators = carousel.querySelector('.carousel-indicators');
    var inner = carousel.querySelector('.carousel-inner');
    slideshowImages.forEach(function(src, idx){
      var li = document.createElement('li');
      li.setAttribute('data-target', '#barberCarousel');
      li.setAttribute('data-slide-to', String(idx));
      if(idx===0) li.className = 'active';
      indicators.appendChild(li);

      var item = document.createElement('div');
      item.className = 'carousel-item' + (idx===0 ? ' active' : '');
      var img = document.createElement('img');
      img.className = 'd-block w-100 carousel-img';
      img.alt = 'Slideshow image ' + (idx+1);
      img.src = src;
      item.appendChild(img);
      inner.appendChild(item);
    });
  }

 

})(jQuery); // End of use strict
