// TIMER CON START E STOP BUTTONS
const timer = document.querySelector(".timer");
const stopButton = document.createElement("button");
const startButton = document.createElement("button");

let timerText = document.createElement("p");

startButton.className = "start";
stopButton.className = "stop";
startButton.textContent = "START";
stopButton.textContent = "STOP";
timerText.textContent = new Date();
timer.append(startButton, stopButton, timerText);

const startTimer = () => {
  const id = setInterval(() => {
    timerText.textContent = new Date();
    console.log(timerText);
  }, 1000);
  return id;
};
let intervalId = startTimer();

const stopTimer = () => {
  clearInterval(intervalId);
};

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);

//STAMPARE HH:MM:SS
const digitalTimer = document.querySelector(".digital-timer");
let digitalTimerHours = document.createElement("p");
let digitalTimerMinutes = document.createElement("p");
let digitalTimerSeconds = document.createElement("p");
digitalTimerHours.textContent = new Date().getHours();
digitalTimerMinutes.textContent = new Date().getMinutes();
digitalTimerSeconds.textContent = new Date().getSeconds();
digitalTimer.append(digitalTimerHours, digitalTimerMinutes, digitalTimerSeconds);

const startDigitalTimer = () => {
  const intervalDigitalId = setInterval(() => {
    digitalTimerHours.textContent = new Date().getHours();
    digitalTimerMinutes.textContent = new Date().getMinutes();
    digitalTimerSeconds.textContent = new Date().getSeconds();
  }, 1000);
  return intervalDigitalId;
};
let intervalDigitalId = startDigitalTimer();

const stopDigitalTimer = () => {
  clearInterval(intervalDigitalId);
  console.log(intervalDigitalId);
};
