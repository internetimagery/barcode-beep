
beep = new Audio("audio/beep.mp3");
beep.load();

window.onload = function(){
  var page = document.getElementById("body");
  page.onclick = function() {
    beep.play();
  }
}
