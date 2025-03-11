const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signin')
const signupForm=document.getElementById('signup')

signInButton.addEventListener('click', function(addEventListener)){
         signInForm.style.display="none";
         signupForm.style.display="block";

})