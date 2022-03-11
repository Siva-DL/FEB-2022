var StrPattern = /^[a-zA-Z]{4,}$/g; // /^[a-zA-Z]{4,}$/g;
var numberPattern = /^[0-9]+$/g;
var passWordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/g;
var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/g;

var userName, password, email, contact, gender, city, agree, signup;
userName = document.getElementById("username");
password = document.getElementById("password");
email = document.getElementById("email");
contact = document.getElementById("contact");

signup = document.getElementById("signup");
signup.addEventListener("click", function () {
  alert(userName.value);
  console.log(StrPattern.test(userName.value));
  if (StrPattern.match(userName.value)) {
    alert("Plesae enter a value");
    document.querySelector(".fa-user").style.color = "red";
    return false;
  } else if (!passWordPattern.test(password.value)) {
    document.querySelector(".fa-user").style.color = "#fff";
    document.querySelector(".fa-lock").style.color = "red";
    // userName.style.borderBottom = "2px solid red";
  } else if (!emailPattern.test(email.value)) {
    document.querySelector(".fa-lock").style.color = "#fff";
    document.querySelector(".fa-envelope").style.color = "red";
    // userName.style.borderBottom = "2px solid red";
  }
});
