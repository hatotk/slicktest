$(document).ready(function(){

  $('.your-class').slick({
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 10000,
  });

  $('.your-class').on('afterChange', function(event, slick, currentSlide, nextSlide){
    if (0 == currentSlide) {
      $('.your-class').slick('slickSetOption', 'autoplaySpeed', 10000, false);
    } else {
      $('.your-class').slick('slickSetOption', 'autoplaySpeed', 5000, false);
    }
  });

});