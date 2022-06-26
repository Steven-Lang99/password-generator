// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
    var wantsUppercase = confirm('Do you want uppercase?');//true or false
    var lowerCase = confirm('lowercase?');
    var length = prompt('How many between 8 and 128');
    var passwordResult = '';

    length = Number(length); //turning a sting into a number

    if( uppercase) {
      //add some uppercase letters to our result
    } else if(lowerCase === true) {
      //add some lowercase to our result
    } //if my length is "130" how do I check it's value instead of it's type?
    else if (length ==)

return passwordResult;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
