// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numeric = "0123456789";
var special = "`~@#$%^&*()_-+=";

var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var finalpassword = ""
  var passwordSize = prompt("how many characters do you want between 8-128 in your new password?");
if (passwordSize >= 8 && passwordSize <=128) {
 var confirmuppercase = confirm("do you want uppercase characters in your new password?");
 var  confirmlowercase = confirm("do you want lowercase characters in your new password?");
 var confirmnumeric = confirm("Do you want numeric characters in your new password?");
 var confirmspecial = confirm("Do you want special characters in your new password?");


 for (i=0; i < passwordSize; i++) {

  if (confirmuppercase && finalpassword.length < passwordSize) {
    var index = Math.floor(Math.random() * 26)
    finalpassword = finalpassword + uppercase[index]
  }
  if (confirmlowercase && finalpassword.length < passwordSize) {
    var index = Math.floor(Math.random() * 26)
    finalpassword = finalpassword + lowercase[index]
  }
  if (confirmnumeric && finalpassword.length < passwordSize) {
    var index = Math.floor(Math.random() * 10)
    finalpassword = finalpassword + numeric[index]
  }
  if (confirmspecial && finalpassword.length < passwordSize) {
    var index = Math.floor(Math.random() * 15)
    finalpassword = finalpassword + special [index]
  }
 }
}

else {
  alert("Choose password size between 8-128 characters")
}
 return finalpassword
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
