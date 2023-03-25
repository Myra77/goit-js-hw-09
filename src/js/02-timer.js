import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const timePicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

startBtn.disabled = true;
let selectDate = null;
let intervalId = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      selectDate = selectedDates[0];
      if (selectDate < Date.now()) {
        window.alert("Please choose the data in the future");
      } else {
        startBtn.disabled = false;
      }}
    };
          
  flatpickr(timePicker, options);

  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }

  function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
  };

  function updateFaceClock(timeLeft) {
    dataDays.textContent = convertMs(timeLeft).days;
    dataHours.textContent = convertMs(timeLeft).hours;
    dataMinutes.textContent = convertMs(timeLeft).minutes;
    dataSeconds.textContent = convertMs(timeLeft).seconds;
  
    if (timeLeft <= 1000) {
      clearInterval(intervalId);
      startBtn.disabled = false;
    }
  };
  
  function onStartBtnClick() {
    intervalId = setInterval(() => {
      const currentTime = Date.now();
      const timeLeft = selectDate - currentTime;
      updateFaceClock(timeLeft);
      startBtn.disabled = true;

    }, 1000);
  };

  startBtn.addEventListener('click', onStartBtnClick);


  


  
  
  
  
  