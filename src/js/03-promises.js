import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const formRef = document.querySelector('form.form');
formRef.addEventListener('submit', onPromiseFormSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onPromiseFormSubmit(e) {
  e.preventDefault();
  const { amount, delay, step } = e.currentTarget;
  const numOfPromises = amount.value;
  const initialDelay = delay.value;
  const additionalDelay = step.value;
  // console.log(numOfPromises);

  for (let i = 0; i < numOfPromises; i += 1) {
    const promiseDelay = initialDelay * 1 + i * additionalDelay;
    // console.log(`Creating promise #${i + 1} with delay ${promiseDelay}`);
    createPromise(i + 1, promiseDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}
