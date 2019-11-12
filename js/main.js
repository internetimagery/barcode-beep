var page = document.getElementById("body");
page.addEventListener("mousedown", function(event){
  event.preventDefault();
  beep.play();
  page.classList.add("flash");
});
page.addEventListener("touchstart", function(event){
  event.preventDefault();
  beep.play();
  page.classList.add("flash");
});


var beep = new Audio("audio/beep.mp3");
beep.load();
beep.addEventListener("ended", function(event){
  page.classList.remove("flash");
});
