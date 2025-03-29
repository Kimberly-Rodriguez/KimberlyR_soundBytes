
const keys = document.querySelectorAll(".key");


function playSound(event) {
  const keyCode = event.keyCode || event.target.getAttribute("data-key");

  // Get the currently active instrument
  const activeInstrument = document.querySelector(".active-instrument");

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
//slide show
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    slides[i].classList.remove("active-instrument");
  }
  
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  slides[slideIndex - 1].classList.add("active-instrument");
}


keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
document.addEventListener("keydown", playSound);
keys.forEach((key) => key.addEventListener("click", (event) => playSound({ keyCode: event.target.getAttribute("data-key") }))); 
