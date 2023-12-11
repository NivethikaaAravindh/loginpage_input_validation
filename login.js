const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
})
function validateInputs(){
    const usernameval =username.value.trim();
    const emailval = email.value.trim();
    const passwordval = password.value.trim();

    if(usernameval ===''){
        setError(username,'username is required')
    }
    else{
        setSuccess(username)
    }
    if(emailval==='')
    {
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailval))
    {
        setError(email,'please enter a valid email')
    }
    else
    {
        setSuccess(email)
    }
    if(passwordval ==='')
    {
        setError(password,'password required')
    }
    else if(passwordval.length < 8)
    {
        setError(password,'password must be 8 characterlong')
    }
    else{
        setSuccess(password)
    }

}
function setError(element,message)
{
    const inputField = element.parentElement;
    const error_element = inputField.querySelector('.error');

    error_element.innerText = message;
    inputField.classList.add('error')
    inputField.classList.remove('success')
    
}
function setSuccess(element)
{
    const inputField = element.parentElement;
    const error_element = inputField.querySelector('.error');

    error_element.innerText = '';
    inputField.classList.add('success')
    inputField.classList.remove('error')
    
}

const validateEmail = (email) => 
{
    return String(email)
    .toLowerCase()
    .match(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );
};