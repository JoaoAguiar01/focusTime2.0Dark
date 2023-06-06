import { timerCountdown } from "./timerCountdown.js";
import Sound from "./sounds.js";
import { elements } from "./elements.js";
const{
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonStop,
  buttonIncrease,
  buttonToDecrease,
  forestSounds,
  forestOnSounds,
  rainSounds,
  rainOnSounds,
  coffeeShopSounds,
  coffeeShopOnSounds,
  fireplaceSounds,
  fireplaceOnSounds,
} = elements

const sound = Sound()

const countdown = timerCountdown(minutesDisplay, secondsDisplay);

const changeThemeBtn = document.querySelector("#change-theme")

let isCountdownRunning = false;

console.log(changeThemeBtn)
changeThemeBtn.addEventListener("change", function(){

  document.body.classList.toggle("dark");
})


buttonPlay.addEventListener("click", function () {
  if (!isCountdownRunning) {
    countdown.countdown();
    isCountdownRunning = true;
    buttonPlay.disabled = true; 
  }
});


buttonStop.addEventListener("click", function () {
  countdown.resetCountdown();
  isCountdownRunning = false;
  buttonPlay.disabled = false; 
});

buttonIncrease.addEventListener('click', function() {
  let minutes = Number(minutesDisplay.textContent);
  minutes += 5;
  minutesDisplay.textContent = String(minutes).padStart(2, '0');
});

buttonToDecrease.addEventListener('click', function() {
  let minutes = Number(minutesDisplay.textContent);
  if (minutes > 0) {
    minutes -= 5;
  } else {
    minutes = 0;
  }
  minutesDisplay.textContent = String(minutes).padStart(2, '0');
});


forestSounds.addEventListener('click', function() {
  forestSounds.classList.add('hide');
  forestOnSounds.classList.remove('hide');

  rainSounds.classList.remove('hide');
  rainOnSounds.classList.add('hide');

  coffeeShopSounds.classList.remove('hide');
  coffeeShopOnSounds.classList.add('hide');

  fireplaceSounds.classList.remove('hide');
  fireplaceOnSounds.classList.add('hide');
  
  sound.playButtonPressForestSounds()
});

forestOnSounds.addEventListener('click', function(){

forestSounds.classList.remove('hide')
forestOnSounds.classList.add('hide')

})
rainSounds.addEventListener('click', function(){

rainSounds.classList.add('hide')
rainOnSounds.classList.remove('hide')
    
forestOnSounds.classList.add('hide')
forestSounds.classList.remove('hide')

coffeeShopSounds.classList.remove('hide')
coffeeShopOnSounds.classList.add('hide')

fireplaceSounds.classList.remove('hide')
fireplaceOnSounds.classList.add('hide')

sound.playButtonPressRainSounds()

})
rainOnSounds.addEventListener('click', function(){

rainSounds.classList.remove('hide')
rainOnSounds.classList.add('hide')

})
coffeeShopSounds.addEventListener('click', function(){

coffeeShopSounds.classList.add('hide')
coffeeShopOnSounds.classList.remove('hide')

rainSounds.classList.remove('hide')
rainOnSounds.classList.add('hide')
    
forestOnSounds.classList.add('hide')
forestSounds.classList.remove('hide')


fireplaceSounds.classList.remove('hide')
fireplaceOnSounds.classList.add('hide')

sound.playButtonPressCoffeeShopSounds()

})
coffeeShopOnSounds.addEventListener('click', function(){

coffeeShopSounds.classList.remove('hide')
coffeeShopOnSounds.classList.add('hide')

})
fireplaceSounds.addEventListener('click', function(){

fireplaceSounds.classList.add('hide')
fireplaceOnSounds.classList.remove('hide')

rainSounds.classList.remove('hide')
rainOnSounds.classList.add('hide')
    
forestOnSounds.classList.add('hide')
forestSounds.classList.remove('hide')

coffeeShopSounds.classList.remove('hide')
coffeeShopOnSounds.classList.add('hide')

sound.playButtonPressFireplaceSounds()

})
fireplaceOnSounds.addEventListener('click', function(){

fireplaceSounds.classList.remove('hide')
fireplaceOnSounds.classList.add('hide')

})