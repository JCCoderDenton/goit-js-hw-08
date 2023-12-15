import throttle from 'lodash.throttle';

let form = document.forms[0];
let formEmail = form.elements.email;
let formMassage = form.elements.message;



const savedState = localStorage.getItem('feedback-form-state');
console.log('savedState: ', JSON.parse(savedState));



if (localStorage.getItem('feedback-form-state') !== null ) {
  console.log("1");
  formEmail.value = savedState.email;
  formMassage.value = savedState.message;
}


const saveFormState = throttle(() => {
  const state = {
    email: formEmail.value,
    message: formMassage.value,
  };
  console.log("3",localStorage.getItem('feedback-form-state'))
  localStorage.setItem('feedback-form-state', JSON.stringify(state));
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


/*
// Put the object into storage
localStorage.setItem('testObject', JSON.stringify(testObject));

// Retrieve the object from storage
let retrievedObject = localStorage.getItem('testObject');

console.log('retrievedObject: ', JSON.parse(retrievedObject));
*/