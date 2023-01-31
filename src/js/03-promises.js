// ---------------------------IMPORTS---------------------------------
import { Notify } from 'notiflix/build/notiflix-notify-aio';


// --------------------------VARIABLES--------------------------------
const refs = {
  form: document.querySelector('.form'),
  firstDelayInput: document.querySelector('[name="delay"]'),
  stepInput: document.querySelector('[name="step"]'),
  amountInput: document.querySelector('[name="amount"]')
}


// -----------------------------CALLS---------------------------------
refs.form.addEventListener('submit', onFormSubmit);



// --------------------------FUNCTIONS-------------------------------
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay);
    });
}

function onFormSubmit(e) {
  e.preventDefault();

  let delay = Number(refs.firstDelayInput.value);
  let step = Number(refs.stepInput.value);
  let amount = Number(refs.amountInput.value);


  for (let i = 1; i <= amount; i += 1) {
    let currentDelay = delay + step * i;
  
    createPromise(i, currentDelay)
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });    
  }
}
