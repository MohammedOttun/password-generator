// Array of numeric characters
var numericChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of special characters
var specialChars = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '{', '}', ';', ':', '\'', '"', ',', '.', '<', '>', '/', '?'];

// Array of lower-cased letters
var lowerCaseLetters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];

// Array of upper-cased letters
var upperCaseLetters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

// User password prompts
function getPasswordSelection() {

  // Convert user input from string to number
  var length = parseInt(
    prompt('How many characters long would you like your password?')
  )

  // Evaluate that user input is number 
  if (isNaN(length) === true) {
    alert('Password length must be a number!');
    return 0;
  }

  // Evaluate password minimum length
  if (length < 8) {
    alert('Password must be at least 8 charcters long!');
    return 0;
  }

  // Evaluate password maximum length
  if (length > 128) {
    alert('Password must be less than 129 charcters long!');
    return 0;
  }

  // Value of response to include numerical characters
  var hasNumericChars = confirm('Click OK to include numerical characters in your password.');

  // Value of response to include lowercased letter characters
  var hasLowerCaseLetters = confirm('Click OK to include lowwer case characters in your password.');

  // Value of response to include uppercased letter characters
  var hasUpperCaseLetters = confirm('Click OK to include upper case characters in your password.');

  // Value of response to include numerical characters
  var hasSpecialChars = confirm('Click OK to include special characters in your password.');

  // Evaluate whether user has chosen to inlcude at least one of the 4 character types
  if (hasNumericChars === false &&
    hasLowerCaseLetters === false &&
    hasUpperCaseLetters === false &&
    hasSpecialChars === false) {
    alert('You must choose at least one character type!');
  }

  // Password character selection Object
  var passwordSelection = {
    length: length,
    hasNumericChars: hasNumericChars,
    hasLowerCaseLetters: hasLowerCaseLetters,
    hasUpperCaseLetters: hasUpperCaseLetters,
    hasSpecialChars: hasSpecialChars
  };

  return passwordSelection
};

// Universal Array Randomizer
function randomize(a) {
  var randArrayIndex = Math.floor(Math.random() * a.length);
  var randElement = a[randArrayIndex];

  return randElement;
}

// Password generator function
function generatePassword() {
  var selection = getPasswordSelection();

  // Array variable to store password string
  var result = [];

  // Array variable to store password character types possibilities 
  var possiblecCharSelection = [];

  // Array variable to store password charcter types user has chosen
  var actualCharSelection = [];

  // Conditional to add charcters to actualCharSelection 
  if (selection.hasNumericChars) {
    possiblecCharSelection = possiblecCharSelection.concat(numericChars);
    actualCharSelection.push(randomize(numericChars));
  }

  if (selection.hasLowerCaseLetters) {
    possiblecCharSelection = possiblecCharSelection.concat(lowerCaseLetters);
    actualCharSelection.push(randomize(lowerCaseLetters));
  }
  if (selection.hasUpperCaseLetters) {
    possiblecCharSelection = possiblecCharSelection.concat(upperCaseLetters);
    actualCharSelection.push(randomize(upperCaseLetters));
  }
  if (selection.hasSpecialChars) {
    possiblecCharSelection = possiblecCharSelection.concat(specialChars);
    actualCharSelection.push(randomize(specialChars));
  }

  // Loop possible character selection for random array indices and concatenate to result array
  for (let i = 0; i < selection.length; i++) {
    var possiblecChar = randomize(possiblecCharSelection);
    result.push(possiblecChar);
  }

  // Loop actual character selection and include in the result
  for (let i = 0; i < actualCharSelection.length; i++) {
    result[i] = actualCharSelection[i];
  }

  // convert result array to string
  return result.join('');
}

var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
