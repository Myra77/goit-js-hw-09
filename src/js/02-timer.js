// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";

const timePicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const fieldValue = document.querySelectorAll('.value');

startBtn.disabled = true;
let selectDate = null;

// function onTime({ days, hours, minutes, seconds }) {
//   fieldValue[0].textContent = '${days}';
//   fieldValue[1].textContent = '${hours}';
//   fieldValue[2].textContent = '${minutes}';
//   fieldValue[3].textContent = '${seconds}';
// }

//   function onValue (value) {
// return String(value).padStart(2, "0");
//   }

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      selectDate = selectedDates[0];
      if (selectDate > options.defaultDate) {
        startBtn.disabled = false;
        const timeLeft = selectDate - options.defaultDate;
        return timeLeft;
      }
      else {
      window.alert("Please choose the data in the future");
      return;
      }
    },
  };

  // flatpickr(timePicker, options);

//   startBtn.addEventListener('click', () => {
//     setInterval(() => {
// console.log(timeLeft);
//     },1000)
//   });

  // const time = convertMs(timeLeft);

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

  

  // console.log(convertMs.padStart(2, "0"));
console.log(convertMs);