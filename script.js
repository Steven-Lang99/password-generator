// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomNum(min,max){
  if (!max){
    max = min
    min = 0
  }
  
  var random = Math.random()
  return Math.floor(min*(1 - random) + random*max)
  }
  function getRandomItem(list) {
    return list[randomNum(list.length)]
  }

function generatePassword() {
  var passLength = prompt('How many between 8 and 128');
  var upperCase = confirm('Do you want uppercase?');
  var lowerCase = confirm('Do you want lowercase?');
  var numbers = confirm('Do you want numbers?')
  var symbol = confirm('Do you want symbols?')
  var passwordResults = '';
  var orderUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var orderLowercase = 'abcdefghijklmnopqrstuvwxyz'
  var orderNumbers = '0123456789'
  var orderSymbol = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
  var output = []

  

  if (passLength < 8 || passLength > 128) {
    window.alert('That is not a valid number of characters')
  }
  else if (passLength > 8 || passLength < 128) {
  }


  if (upperCase === true) {
    output.push(orderUppercase)
  }

  if (lowerCase === true) {
    output.push(orderLowercase)
  }
  if (numbers === true) {
    output.push(orderNumbers)
  }
  if (symbol === true) {
    output.push(orderSymbol)
  }

  
  for (var i = 0; i < passLength; i++) {
    var randomOrder = getRandomItem(output)
    var randomCharacter = getRandomItem(randomOrder)
    passwordResults += randomCharacter
  }
  
    return passwordResults;


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
