import throttle from 'lodash.throttle';

let form = document.forms[0];
let formEmail = form.elements.email;
let formMassage = form.elements.message;


const STORAGE_KEY = 'feedback-form-state';

const savedState = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (savedState.getItem(STORAGE_KEY) !== null) {
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
