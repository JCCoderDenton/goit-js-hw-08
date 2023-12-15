import throttle from 'lodash.throttle';

let form = document.forms[0];
let formEmail = form.elements.email;
let formMassage = form.elements.message;

let savedState;
const STORAGE_KEY = 'feedback-form-state';



if (savedState !== null ) {
  console.log("1");
  formEmail.value = savedState.email;
  formMassage.value = savedState.message;
}


const saveFormState = throttle(() => {
  const state = {
    email: formEmail.value,
    message: formMassage.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  savedState = localStorage.getItem(STORAGE_KEY);
  console.log('savedState: ', JSON.parse(savedState));  
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


/*
// Put the object into storage
localStorage.setItem('testObject', JSON.stringify(testObject));

// Retrieve the object from storage
let retrievedObject = localStorage.getItem('testObject');

console.log('retrievedObject: ', JSON.parse(retrievedObject));
*/