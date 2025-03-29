
// Selecting the array of keys and audio elements
const keys = document.querySelectorAll('.key');
const audios = document.querySelectorAll('audio')


function playSound(event){
const keyCode = event.keyCode || event.target.getAttribute('data-key');
// console.log("keyCode", keyCode)
const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
// console.log("audio", audio)
const key = document.querySelector(`.key[data-key="${keyCode}"]`)
// console.log("key", key)
if(!audio) return;

audio.currentTime = 0 
audio.play();

key.classList.add('playing')

}



keys.forEach(key => key.addEventListener('click', playSound));
document.addEventListener('keydown', playSound)