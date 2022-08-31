const startBtnRef = document.querySelector('button[data-start]');
const stopBtnRef = document.querySelector('button[data-stop]');

startBtnRef.addEventListener('click', onStartClick);
stopBtnRef.addEventListener('click', onStopClick);

let timerColorSwitcher = null;
let originalBgColor = null;

function onStartClick() {
  originalBgColor = document.body.style.backgroundColor;
  timerColorSwitcher = setInterval(doChangeBgColor, 1000);
  setButtonState(startBtnRef, true);
}

function onStopClick() {
  clearInterval(timerColorSwitcher);
  document.body.style.backgroundColor = originalBgColor;
  setButtonState(startBtnRef, false);
}

function doChangeBgColor(newBgColor = getRandomHexColor()) {
  document.body.style.backgroundColor = newBgColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function setButtonState(btn, state = true) {
  if (state) btn?.setAttribute('disabled', true);
  else btn?.removeAttribute('disabled');
}
