$(document).ready(function(){

  $('.your-class').slick({
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    speed: 5000, // 切り替え時間（ミリ秒）
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 6000, // 表示時間（ミリ秒）
  });

  $('.your-class').on('afterChange', function(event, slick, currentSlide, nextSlide){
    if (0 == currentSlide) {
      // 1番目のスライドの時、表示時間を6秒に設定する。
      $('.your-class').slick('slickSetOption', 'autoplaySpeed', 6000, false);
    } else {
      // 1番目以外のスライドの時、表示時間を4秒に設定する。
      $('.your-class').slick('slickSetOption', 'autoplaySpeed', 4000, false);
    }
  });

});