
beep = new Audio("audio/beep.mp3");
beep.load();

window.onload = function(){
  var page = document.getElementById("body");
  page.onmousedown = function() {
    beep.play();
    page.classList.add("beep");
    setTimeout(function () {
      page.classList.remove("beep");
    }, 1000);
  }
}
