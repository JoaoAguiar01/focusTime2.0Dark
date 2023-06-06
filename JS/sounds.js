export default function Sound() {
    const buttonPressForestSounds = new Audio("./sounds/Floresta.wav");
    const buttonPressRainSounds = new Audio("./sounds/Chuva.wav");
    const buttonPressCoffeeShopSounds = new Audio("./sounds/Cafeteria.wav");
    const buttonPressFireplaceSounds = new Audio("./sounds/Lareira.wav");
  
    function playButtonPressForestSounds() {
        stopAllSounds();
        buttonPressForestSounds.play();
        isSoundPlaying = true;
      }
      
    function playButtonPressRainSounds() {
      stopAllSounds();
      buttonPressRainSounds.play();
      isSoundPlaying = true;
    }
  
    function playButtonPressCoffeeShopSounds() {
      stopAllSounds();
      buttonPressCoffeeShopSounds.play();
      isSoundPlaying = true;
    }
  
    function playButtonPressFireplaceSounds() {
      stopAllSounds();
      buttonPressFireplaceSounds.play();
      isSoundPlaying = true;
    }
  
    function stopAllSounds() {
      buttonPressForestSounds.pause();
      buttonPressForestSounds.currentTime = 0;
      buttonPressRainSounds.pause();
      buttonPressRainSounds.currentTime = 0;
      buttonPressCoffeeShopSounds.pause();
      buttonPressCoffeeShopSounds.currentTime = 0;
      buttonPressFireplaceSounds.pause();
      buttonPressFireplaceSounds.currentTime = 0;
    }
  
    return {
      playButtonPressForestSounds,
      playButtonPressRainSounds,
      playButtonPressCoffeeShopSounds,
      playButtonPressFireplaceSounds,
      stopAllSounds
    };
  }
  