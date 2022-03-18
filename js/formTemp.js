var StrPattern = /^[a-zA-Z]{4,}$/; // /^[a-zA-Z]{4,}$/g;
var numberPattern = /^[0-9]+$/;
var passWordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

var userName, password, email, contact, city, agree, signup, male, female;
userName = document.getElementById("username");
password = document.getElementById("password");
email = document.getElementById("email");
contact = document.getElementById("contact");
male = document.querySelector("#male");
female = document.querySelector("#female");
city = document.querySelector("#city");
agree = document.querySelector("#agree");

signup = document.getElementById("signup");
signup.addEventListener("click", function () {
  var genderValidation = false,
    genderValue = "";
  if (male.checked) {
    genderValidation = true;
    genderValue = "male";
  } else if (female.checked) {
    genderValidation = true;
    genderValue = "female";
  } else {
    genderValidation = false;
  }

  // alert(userName.value);
  // console.log(StrPattern.test(userName.value));
  if (!StrPattern.test(userName.value)) {
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
  } else if (!numberPattern.test(contact.value)) {
    document.querySelector(".fa-envelope").style.color = "#fff";
    document.querySelector(".fa-phone").style.color = "red";
  } else if (!genderValidation) {
    document.querySelector(".fa-phone").style.color = "#fff";
    document.querySelector(".error").style.display = "block";
  } else if (city.value === "none") {
    document.querySelector(".error").style.display = "none";
    alert("Please choose a city!");
  } else if (!agree.checked) {
    alert("Agree the conditions!");
  } else {
    const user = {
      name: userName.value,
      password: password.value,
      contact: contact.value,
      email: email.value,
      gender: genderValue,
      city: city.value,
      agree: agree.checked,
    };

    console.log(user);
  }
});
