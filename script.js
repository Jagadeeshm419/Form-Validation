const form      = document.querySelector("#form")
const username  = document.querySelector("#username")
const email     = document.querySelector("#email")
const password1 = document.querySelector("#password1")
const password2 = document.querySelector("#password2")

form.addEventListener("submit", (e)=>{
    
    if(!validateInputs())
        e.preventDefault();
})


function validateInputs(){
    const usernameValue  = username.value.trim()
    const emailValue     = email.value.trim()
    const password1Value = password1.value.trim()
    const password2Value = password2.value.trim()
    let success = true

//Username:
    if(usernameValue===''){
        success=false;
        setError(username, 'Username is Required')
    }    
    else
        setSuccess(username)    

//Email : 
    if(emailValue===''){
        success=false;
        setError(email, 'Email is Required')
    }
    else if(!validateEmail(emailValue)){
        success=false;
        setError(email, 'Please Enter a Valid Email ID')
    }
    else
        setSuccess(email)
        
//Password 1 : 
    if(password1Value===''){
        success=false;
        setError(password1, 'Password is Required')
    }    
    else if(password1Value.length<8){
        success=false;
        setError(password1, 'Password Must be Atleast 8 Characters')
    }
    else
        setSuccess(password1)

//Password  2 : 
    if(password2Value===''){
        success=false;
        setError(password2, 'Please Confirm Your Password')
    }
    else if(password2Value!==password1Value){
        success=false;
        setError(password2, "Password Does not Match")    
    }
    else if(password2Value.length<8){
        success=false;
        setError(password2, 'Password Must be Atleast 8 Characters')
    }
    else
        setSuccess(password2)
     
    return success;   
}


// Ex : element - password, message - psswrd required
function setError(element, message){
    const main  = element.parentElement;
    const errorElement = main.querySelector(".error")
    errorElement.innerText = message;

    main.className = 'main error';
    
}

function setSuccess(element){
    const main  = element.parentElement;
    const errorElement = main.querySelector(".error")
    errorElement.innerText = '';
    
    main.className = 'main success';
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);   
}