import throttle from 'lodash.throttle';

/*
const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');*/

let form = document.forms[0];
let formEmail = form.elements.email;
let formMassage = form.elements.message;


const STORAGE_KEY = 'feedback-form-state';

const savedState = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (savedState) {
  formEmail.value = savedState.email;
  formMassage.value = savedState.message;
}

const saveFormState = throttle(() => {
  const state = {
    email: formEmail.value,
    message: formMassage.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}, 500);

form.addEventListener('input', saveFormState);

form.addEventListener('submit', event => {
  event.preventDefault();
  const state = {
    email: formEmail.value,
    message: formMassage.value,
  };
  console.log(state);
  localStorage.removeItem(STORAGE_KEY);
  formEmail.value = '';
  formMassage.value = '';
});
