function timerCountdown(minutesDisplay, secondsDisplay) {
  let countdownTimeout;

  function countdown() {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);

    if (seconds <= 0 && minutes <= 0) {
      return;
    }

    if (seconds <= 0) {
      seconds = 60;
      minutesDisplay.textContent = String(minutes - 1).padStart(2, '0');
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, '0');
    countdownTimeout = setTimeout(countdown, 1000);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    minutesDisplay.textContent = '25';
    secondsDisplay.textContent = '00';
  }

  return {
    countdown,
    resetCountdown
  };
}

export { timerCountdown };