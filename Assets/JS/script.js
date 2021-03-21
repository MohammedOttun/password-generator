// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of numeric characters
var numericChars = ['0','1','2','3','4','5','6','7','8','9'];

// Array of special characters
var specialChars = ['~','!','@','#','$','%','^','&','*','(', ')','_','+','-','=','[',']','{','}',';',':','\'','"',',','.','<','>','/','?'];

// Array of lower-cased letters
var lowerCaseLetters = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];

// Array of upper-cased letters
var upperCaseLetters = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M']



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
