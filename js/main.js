//SIGN UP PAGE 
// USER LOGIN / SIGNUP
// HTML VARIABLES
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn');

let outputEl = document.getElementById("answer");

let members = [];

// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);

function signUpHandler() {
  let username = document.getElementById("username");
  let password = document.getElementById("password");
  result = false;
  for (let i = 0; i < members.length; i++ && result === false){ 
    if (members[i].username.includes(usernameinput) && members[i].password.includes(passwordinput)){
        result = true;
        alert("Contact already exists")
    } else if (result === false) {
      members.push(newmember(username, password))
      alert("Contact added")
    }        
  }   
}

//SIGN IN PAGE 
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