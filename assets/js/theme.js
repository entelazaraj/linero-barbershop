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
    'assets/img/portfolio/klient_klippning.png',
    'assets/img/portfolio/klient_barn.png',
    'assets/img/portfolio/IMG_51211.JPG',
    'assets/img/portfolio/E1C252DF-1.JPG',
    'assets/img/portfolio/IMG_51261.JPG',
    'assets/img/portfolio/IMG_51091.JPG',
    'assets/img/portfolio/IMG_51291.JPG',
    'assets/img/portfolio/F62BCFCF-1.JPG',
    'assets/img/portfolio/IMG_50901.JPG',
    'assets/img/portfolio/A69958A7-1.JPG',
    'assets/img/portfolio/B9CE75D9-1.JPG',
    'assets/img/portfolio/IMG_49611.JPG',
    'assets/img/portfolio/IMG_49621.JPG',
    'assets/img/portfolio/IMG_49911.JPG',
    'assets/img/portfolio/IMG_49941.JPG',
    'assets/img/portfolio/IMG_49801.JPG',
    'assets/img/portfolio/IMG_48421.JPG',
    'assets/img/portfolio/IMG_48411.JPG',
    'assets/img/portfolio/IMG_49781 2.JPG',
    'assets/img/portfolio/IMG_49781.JPG',
    'assets/img/portfolio/IMG_50241.JPG',
    'assets/img/portfolio/klient_skägg.png'
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
