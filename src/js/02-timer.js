import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const timePicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const dataDays = document.querySelectorAll('[data-days]');
const dataHours = document.querySelectorAll('[data-hours]');
const dataMinutes = document.querySelectorAll('[data-minutes]');
const dataSeconds = document.querySelectorAll('[data-seconds]');

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
  
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

  startBtn.addEventListener('click', onStartBtnClick);

  function onStartBtnClick () {
    intervalId = setInterval(() => {
      let currentTime = Date.now();
      const timeLeft = selectDate - currentTime;
    dataDays.textContent = convertMs(timeLeft).days;
    dataHours.textContent = convertMs(timeLeft).hours;
    dataMinutes.textContent = convertMs(timeLeft).minutes;
    dataSeconds.textContent = convertMs(timeLeft).seconds;
    
if (timeLeft < 1000) {
  clearInterval(intervalId);
  startBtn.disabled = false;
  return
}
},1000);
};

// const timeComponents = convertMs(timeLeft);
    // onTime(timeComponents);
// const { days, hours, minutes, seconds } = convertMs(timeLeft);


  // function addLeadingZero (value) {
  //   return String(value).padStart(2, "0");
  //     };


// //   // console.log(convertMs.padStart(2, "0"));

  // function onTime ({ days, hours, minutes, seconds }) {
  //   dataDays.textContent = '${days}';
  //   dataHours.textContent = '${hours}';
  //   dataMinutes.textContent = '${minutes}';
  //   dataSeconds.textContent = '${seconds}';
  // }

