
const keys = document.querySelectorAll(".key");


function playSound(event) {
  const keyCode = event.keyCode || event.target.getAttribute("data-key");
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);

  if (!audio) return;

  audio.currentTime = 0; 
  audio.play();

  key.classList.add("playing");
}


function removeTransition(event) {
  if (event.propertyName !== "transform") return; 
  this.classList.remove("playing");
}


keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
document.addEventListener("keydown", playSound);
keys.forEach((key) => key.addEventListener("click", (event) => playSound({ keyCode: event.target.getAttribute("data-key") }))); // Add click support
