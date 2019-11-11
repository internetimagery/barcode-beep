
window.onload = function(){
  var scanner = document.getElementById("scanner");
  var beep = new Audio("https://freesound.org/data/previews/144/144418_62484-lq.mp3")
  scanner.onclick = function() {
    beep.play();
  }
}
