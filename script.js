// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passlength = window.prompt('How many between 8 and 128');
  var uppercase = confirm('Do you want uppercase?');
  var lowerCase = confirm('Do you want lowercase?');
  var numbers = confirm('Do you want numbers?')
  var symbol = confirm('Do you want symbols?')



  if (length < 8 || length > 128) {
    console.log('That is not a number')
  }
    else if(length > 8 || length < 128){
    }
   
    var orderUppercase
    var orderLowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var orderNumbers = ["0","1","2","3","4","5","6","7","8","9"]
    var orderSymbol = ["!",'"',"#","$","%","&","'","(", ")","*","+",",","-",".","/",":",";","<","=",">","?","@","[",'U+005C','U+005D',"^","_","`","{","|",".","U+007D","U+007E"]
     var output []


     for (var i = 0; i < orderLowercase.length; i++){
      orderUppercase[i] = orderLowercase[i].toUpperCase()
     }

  // return passwordResult;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
