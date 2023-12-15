import throttle from 'lodash.throttle';

let form = document.forms[0];
let formEmail = form.elements.email;
let formMassage = form.elements.message;

const savedState = JSON.parse(localStorage.getItem('feedback-form-state'));


if (localStorage.getItem('feedback-form-state' !== null )) {
  console.log("1",localStorage.getItem('feedback-form-state'))
  formEmail.value = savedState.email;
  formMassage.value = savedState.message;
}
console.log("2",localStorage.getItem('feedback-form-state'))
const saveFormState = throttle(() => {
  const state = {
    email: formEmail.value,
    message: formMassage.value,
  };
  console.log("3",localStorage.getItem('feedback-form-state'))
  localStorage.setItem('feedback-form-state', state);
}, 500);

form.addEventListener('input', saveFormState);

form.addEventListener('submit', event => {
  event.preventDefault();
  const state = {
    email: formEmail.value,
    message: formMassage.value,
  };
  console.log(state);
  console.log("5",localStorage.getItem('feedback-form-state'))
  localStorage.removeItem(localStorage.getItem('feedback-form-state'));
  formEmail.value = '';
  formMassage.value = '';
  console.log("4",localStorage.getItem('feedback-form-state'))
});
