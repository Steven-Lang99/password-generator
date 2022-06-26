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
  return list[randomNum(list.length - 1)]
}

function generatePassword() {
  var passLength = prompt('How many between 8 and 128');
  var words = parseInt (passLength)
  var upperCase = confirm('Do you want uppercase?');
  var lowerCase = confirm('Do you want lowercase?');
  var numbers = confirm('Do you want numbers?')
  var symbol = confirm('Do you want symbols?')
  var passwordResults = '';
  var orderUppercase = []
  var orderLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var orderNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var orderSymbol = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", 'U+005C', 'U+005D', "^", "_", "`", "{", "|", ".", "U+007D", "U+007E"]
  var output = []

  if (words < 8 || words > 128) {
    console.log('That is not a valid number of characters')
  }
  else if (words > 8 || words < 128) {
  }


  for (var i = 0; i < orderLowercase.length; i++) {
    orderUppercase[i] = orderLowercase[i].toUpperCase()
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
  
console.log (output)

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
