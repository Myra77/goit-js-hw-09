
  const form = document.querySelector('.form');
  const firstDelay = document.querySelector('[name="delay"]');
  const delayStep = document.querySelector('[name="step"]');
  const amountInput = document.querySelector('[name="amount"]');
  const submitBtn = document.querySelector('button');

  submitBtn.addEventListener("click", onSubmit);
  
  function onSubmit(event) {
    event.preventDefault();
    const amountForm = Number(amountInput.value);
    const delayForm = Number(firstDelay.value);
    const firstDelayForm = Number(delayStep.value);
    let delay = 0;
    for (let position = 1; position <= amountForm; position += 1) {
      delay =  delayForm + firstDelayForm * (position-1);
      createPromise(position, delay).then(({ position, delay }) => {
        // Notify.success
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        // Notify.failure
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    })
  }};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay)
  });
}