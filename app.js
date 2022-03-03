const form = document.querySelector('#create-account-from');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');

form.addEventListener('submit',(event)=>{
    // event.preventDefault();
    validateForm();
})
function validateForm(){
    // username
    if(usernameInput.value.trim()==''){
        setError(usernameInput,'User name can not empty');
    }
    else if(usernameInput.value.trim().length <5 || usernameInput.value.trim().length >15){
        setError(usernameInput,'Name must be minimum 5 and maximum 15 character');
    }
    else{
        setSuccess(usernameInput);
    }
    // email 
    if(emailInput.value.trim()==''){
        setError(emailInput,'Email can not be empty');
    }
    else if(isEmailValid(emailInput.value)){
        setSuccess(emailInput);
    }
    else{
        setError(emailInput,'Enter a valid email id');
    }
    // password 
    if(passwordInput.value.trim()==''){
        setError(passwordInput,'Password can not be empty');
    }
    else if(passwordInput.value.trim().length <6 || passwordInput.value.trim().length >20){
        setError(passwordInput,'Password should min 6 and max 20 character');
    }
    else{
        setSuccess(passwordInput);
    }
    // confirm password 
    // if(confirmPasswordInput.value.trim()==''){
    //     setError(confirmPasswordInput,'Confirm password can not be empty');
    //     console.log('feild is empty');
    // }
    // else if(confirmPasswordInput !== passwordInput){
    //     setError(confirmPasswordInput,'Current password did not match with previous password');
    //     console.log(`passord: ${passwordInput.value} and confirmpassword: ${confirmPasswordInput.value}`);
    // }
    // else{
    //     setSuccess(confirmPasswordInput);
    // }
}
function setError(element,errorMessage){
    const parent = element.parentNode;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}
function setSuccess(element){
    const parent = element.parentNode;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}
function isEmailValid(email){
    const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return reg.test(email);
}