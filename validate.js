//Adding the JS Styles

const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const password2=document.getElementById("password2");

form.addEventListener('submit',(change) => {
    change.preventDefault();
    checkInput();
})

function checkInput() {
    //Get the values from the input
const
 usernameValue=username.value.trim();
const 
emailValue=email.value.trim();
const 
passwordValue=password.value.trim();
const password2Value=password2.value.trim();
    
    //Username validation 
    
    if (usernameValue==="") {
        setErrorFor(username,"Username can not be empty.")
    }
   else if (usernameValue.length<6) {
      setErrorFor(username,"Username must be 6 characters long.")
   }
    else {
        setSuccessFor(username)
    }
    
        //email validation 
    
    if (emailValue==="") {
        setErrorFor(email,"E-mail can not be empty.")
    }
    else {
        setSuccessFor(email)
    }
    //Password validation
    if (passwordValue==="") {
        setErrorFor(password,"This field can not be empty.")
    }
    
    else if (passwordValue.length<8) {
      setErrorFor(password,"password must be at least 8 characters long.")
   }
   
    else {
        setSuccessFor(password)
    }
    
    // Password confirm validation
    if (password2Value==="") {
        setErrorFor(password2,"This field can not be empty.")
    }
    else if (passwordValue!==password2Value) {
        setErrorFor(password2, "Password mismatch.")
    }
    else {
        setSuccessFor(password2)
    }
    
    
}


function  setErrorFor(input,message){
    const formControl=input.parentElement;//.form-control
    const small=formControl.querySelector('small');
    //add error message inside small
    small.innerText=message;
    
    //add error class    
formControl.className='form-control error';
}

function  setSuccessFor(input){
    const formControl=input.parentElement;//.form-control
    
    
    //add success class    
 formControl.className='form-control success';
}

