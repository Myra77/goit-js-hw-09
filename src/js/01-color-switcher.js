
const changeColorBtn = document.querySelector('[data-start]');
const stopChangeColorBtn = document.querySelector('[data-stop]');

let timerId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

changeColorBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    let i = getRandomHexColor();
    document.body.style.backgroundColor = i;
  }, 1000);
  changeColorBtn.disabled = true;
  stopChangeColorBtn.disabled =false;
});

stopChangeColorBtn.addEventListener("click", () => {
  clearInterval(timerId);
  changeColorBtn.disabled = false;
  stopChangeColorBtn.disabled = true;
});








