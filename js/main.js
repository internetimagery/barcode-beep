var flasher = document.getElementById("flash");
function stopFlashing(event){
  beep.play();
  flasher.classList.add("flashing");
}
document.addEventListener("mousedown", stopFlashing);
document.addEventListener("touchstart", stopFlashing);

var beep = new Audio("audio/beep.mp3");
beep.load();
beep.addEventListener("ended", function(event){
  flasher.classList.remove("flashing");
});
