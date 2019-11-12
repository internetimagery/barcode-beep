var page = document.getElementById("body");
page.addEventListener("mousedown", function(event){
  beep.play();
  page.classList.add("flash");
});

var beep = new Audio("audio/beep.mp3");
beep.load();
beep.addEventListener("ended", function(event){
  page.classList.remove("flash");
});
