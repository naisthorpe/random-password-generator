// Assignment Code

var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Length (8 char. min.), lowercase, uppercase, numeric, and/or special characters

function generatePassword() {

// establish undefined variables for password conditions
// will use later as conditions for randomizing password

  var passLength;

  var isLower;

  var isUppercase;

  var isContainNumber;

  var isSpecial;

  var fullArray = [];

  var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var lowerChars = "abcdefghijklmnopqrstuvwxyz";

  var numbers = "0123456789";

  var specialChars = "!#%$%&'()*+,-./:;<=>?@[\]^+`[]|~";

  var characterContainer = [];

    // Ask questions to collect password information to use

    // Ask for user password length(must be between 8-128 characters)
    passLength = prompt("How many characters would you like your password to be?");

    // While loop to get allowable length between 8-128
    while (true) {

      if (passLength < 8 || passLength > 128) {
        passLength = prompt("Password must be between 8-128 characters");
      }else if (passLength >= 8 && passLength <= 128) {
        break;
      };

    }

    // Ask if user wants lowercase letters
    isLower = confirm("Would you like any lowercase characters?");

    // Ask if user wants UPPERCASE letters
    isUppercase = confirm("Would you like any uppercase characters?");

    // Ask if user wants numbers
    isContainNumber = confirm("Would you like any numbers?")

    // Ask if user wants special characters
    isSpecial = confirm("Would you like any special characters?")


    // Conditional statements based on client input
    // Pushes the list of acceptable characters to a new array if true
    if (isLower) {
      fullArray.push(lowerChars)
    };

    if (isUppercase) {
      fullArray.push(uppers);
    };


    if (isContainNumber) {
      fullArray.push(numbers)
    };

    if (isSpecial) {
      fullArray.push(specialChars)
    };


    // Join the array of strings into one string
    var joinedString = fullArray.join("");


    // FOR loop to 
    // 1. get random index  
    // 2. use that index to pull a random character from the joined string
    // 3. add the selected character to an empty array
    for (var i=0; i < passLength; i++) {
      var randomIndex = Math.floor(Math.random() * joinedString.length);
      var randomCharacter = joinedString[randomIndex];
      characterContainer.push(randomCharacter);
    }

    // new variable that joins the array of characters into one string
    var yourNewPass = characterContainer.join("");

    // return the string
    return yourNewPass;

}






