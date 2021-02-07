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



// Length (8 char. min.), lowercase, uppercase, numveric, and/or special characters

function generatePassword() {

  // establish undefined variables for password conditions
// local to function writePassword
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
        // alert("Password must be between 8 & 128 characters only.");
        passLength = prompt("Password must be between 8-128 characters");
      }else if (passLength >= 8 && passLength <= 128) {
        // alert("Cool you got the right length.");
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


    var test = fullArray;


    // Conditional statements based on client input
    // Pushes the list of acceptable characters to a new array if true
    if (isLower) {
      test = fullArray.push(lowerChars)
    };

    if (isUppercase) {
      test = fullArray.push(uppers);
    };


    if (isContainNumber) {
      test = fullArray.push(numbers)
    };

    if (isSpecial) {
      test = fullArray.push(specialChars)
    };


    // Turn the list of acceptable characters into a string
    var joinedString = fullArray.join("");

    // establish variable for random characters
    var newPass = '';

    var randomCharacter
    // FOR loop to 
    // 1. get random index  
    // 2. use that index to pull a random character
    // 3. add the selected character to an empty array
    for (var i=0; i < passLength; i++) {
      var randomIndex = Math.floor(Math.random() * joinedString.length);
      randomCharacter = joinedString[randomIndex];
      characterContainer.push(randomCharacter);
    }

    var yourNewPass = characterContainer.join("");

    return yourNewPass;

    // var yourNewPass = newPassArray.join("");

    // console.log(yourNewPass);
}






