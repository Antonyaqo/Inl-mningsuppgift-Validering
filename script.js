const form = document.querySelector('#regForm');
const btn = document.querySelector('#btn');

const validateText = (firstName) => {
  const input = document.querySelector(id)    

  if(input.value.trim() === '') {
    return setError(input)                  
  } 
  else if (input.value.length < 2) {
    return setError(input)
  }
  else {
    return setSuccess(input)
  }

}

const validateEmail = (id) => {
  const email = document.querySelector(id)

  const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/

  if(email.value.trim() === '') {
    return setError(email)
  }
  else if(!regEx.test(email.value)) {
    return setError(email)
  }
  else {
    return setSuccess(email)
  }

}

const validateCheck = (id) => {
  const checkbox = document.querySelector(id)

  if(!checkbox.checked) {
    return setError(checkbox)
  }
  else {
    return setSuccess(checkbox)
  }


}

const setSuccess = (input) => {
  input.classList.remove('is-invalid');
  input.classList.add('is-valid');
  return true;
}

const setError = (input) => {       
  input.classList.add('is-invalid');
  input.classList.remove('is-valid');
  input.focus();
  return false;
}



form.addEventListener('submit', e => { 
  e.preventDefault()                   

  validateText('#firstName')
  validateText('#lastName')
  validateEmail('#email')
  validateCheck('#terms')

  if(validateText('#firstName') &&
  validateText('#lastName') &&
  validateEmail('#email') &&
  validateCheck('#terms')) {

  console.log('skickar iväg till databasen')
   }

  const errors = [];

  for(let i = 0; i < form.length; i++) {
    console.log(form[i])
    console.log(form[i].type)
    console.log(form[i].id)
    const inputId = '#' + form[i].id
    console.log(inputId)

    if(form[i].type === 'text') {    
      errors[i] = validateText(inputId)
    } 
    else if(form[i].type === 'email') {    
      errors[i] = validateEmail(inputId)
    }
    else if(form[i].type === 'checkbox') {    
      errors[i] = validateCheck(inputId)
    }
  }

  console.log(errors)

  if(errors.includes(false)) {      
    console.log('vi har fel i formuläret!')
  }
  else {
    console.log('allt är jättebra och vi skickar till databasen')
  }

})