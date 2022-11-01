// Control GUI changes

// HTML Variables
let signInDiv = document.getElementById('sign-in-div');
let signUpDiv = document.getElementById('sign-up-div');
let signInLink = document.getElementById('sign-in-link');
let signUpLink = document.getElementById('sign-up-link');

let outputEl = document.getElementById("answer");

// Sign In Link Clicked
signInLink.addEventListener('click', displaySignIn);
//do stuff

function displaySignIn() {
  signUpDiv.style.display = 'none';
  signInDiv.style.display = 'block';
}

// Sign Up Link Clicked
signUpLink.addEventListener('click', displaySignUp);

function displaySignUp() {
  signInDiv.style.display = 'none';
  signUpDiv.style.display = 'block'; 
}
