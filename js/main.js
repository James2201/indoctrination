// USER LOGIN / SIGNUP
// BECOME A MEMBER SCREEN
// HTML VARIABLES
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn');

let members = loadmembers();

// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);

function signUpHandler() {
  result = false;
  for (let i = 0; i < members.length; i++){ 
    if (members[i].username.includes(usernameinput) && members[i].password.includes(passwordinput)){
        result = true;
    }          
  }
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener('click', signInHandler);

function signInHandler() {
  console.log('Sign In Btn Clicked');
}

//SUPPORT FUNCTIONS

function newmember(signinusername, signinpassword){
  return {
    username: signinusername,
    password: signinpassword,
  } 
}                                                                                                                                                                            

//STORAGE FUNCTIONS

function savemembers(){
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

function loadmembers(){
  let contactstr = localStorage.getItem("contacts");
  return JSON.parse(contactstr) ?? [];
}      