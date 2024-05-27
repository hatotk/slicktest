$(document).ready(function() {

  let second = 0;

  setInterval(function() {

    second = second + 1;

    document.getElementById("second").textContent = second;

    var testVideoElement = document.getElementById('testVideo');
    testVideoElement.addEventListener('timeupdate', function() {
      document.getElementById("videoCurrentTime").textContent = testVideoElement.currentTime;
    });

  }, 1000);

});