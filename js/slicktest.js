$(document).ready(function() {

  $('.your-class').slick({
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    speed: 4000, // 切り替え時間（ミリ秒）
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 6000, // 表示時間（ミリ秒）
  });

  $('.your-class').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    if (0 == nextSlide) {
      // スライドを切り替える処理実行する前のタイミングで、
      // 次のスライドが1番目のスライド（動画のスライド）の時、動画再生位置を設定する。
      document.getElementById("testVideo").currentTime = 0;
    }
  });

  $('.your-class').on('afterChange', function(event, slick, currentSlide) {
    if (0 == currentSlide) {
      // スライドを切り替える処理実行した後のタイミングで、
      // 現在のスライドが1番目のスライド（動画のスライド）の時、表示時間を5秒に設定する。
      $('.your-class').slick('slickSetOption', 'autoplaySpeed', 5000, false);
    } else {
      // スライドを切り替える処理実行した後のタイミングで、
      // 現在のスライドが1番目以外のスライド（静止画のスライド）の時、表示時間を3秒に設定する。
      $('.your-class').slick('slickSetOption', 'autoplaySpeed', 3000, false);
    }
  });

});
