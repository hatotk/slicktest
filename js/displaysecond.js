$(document).ready(function(){

  let second = 0;

  setInterval(function() {

    second = second + 1;

    document.getElementById("second").textContent = second;

  }, 1000);

});