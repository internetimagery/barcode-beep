var flasher = document.getElementById("flash");
flasher.addEventListener("mousedown", function(event){
  event.preventDefault();
  beep.play();
  flasher.classList.add("flashing");
});
flasher.addEventListener("touchstart", function(event){
  event.preventDefault();
  beep.play();
  flasher.classList.add("flashing");
});


var beep = new Audio("audio/beep.mp3");
beep.load();
beep.addEventListener("ended", function(event){
  flasher.classList.remove("flashing");
});
