import throttle from 'lodash.throttle';

let form = document.forms[0];
let formEmail = form.elements.email;
let formMassage = form.elements.message;


const STORAGE_KEY = 'feedback-form-state';

const savedState = JSON.parse(localStorage.getItem(STORAGE_KEY));


if (savedState) {
  console.log("1",STORAGE_KEY)
  formEmail.value = savedState.email;
  formMassage.value = savedState.message;
}
console.log("2",STORAGE_KEY)
const saveFormState = throttle(() => {
  const state = {
    email: formEmail.value,
    message: formMassage.value,
  };
  console.log("3",STORAGE_KEY)
  localStorage.setItem(STORAGE_KEY, state);
}, 500);

form.addEventListener('input', saveFormState);

form.addEventListener('submit', event => {
  event.preventDefault();
  const state = {
    email: formEmail.value,
    message: formMassage.value,
  };
  console.log(state);
  console.log("5",STORAGE_KEY)
  localStorage.removeItem(STORAGE_KEY);
  formEmail.value = '';
  formMassage.value = '';
  console.log("4",STORAGE_KEY)
});
