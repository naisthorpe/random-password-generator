
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // establish undefined variables for password conditions
  // local to function writePassword
  // will use later as conditions for randomizing password
  var isLower = undefined;

  var passLength = undefined;

  var isUppercase = undefined;

  var isContainNumber = undefined;

  var isSpecial = undefined;

  // Length (8 char. min.), lowercase, uppercase, numveric, and/or special characters

  function generatePassword() {
    // Ask questions to collect password information to use

    // Ask for user password length(must be between 8-128 characters)
    passLength = prompt("How many characters would you like your password to be?");

    // While loop to get allowable length between 8-128
    while (true) {

      if (passLength < 8 || passLength > 128) {
        alert("Password must be between 8 & 128 characters only.");
        passLength = prompt("Enter another number.");
      }else if (passLength >= 8 && passLength <= 128) {
        alert("Cool you got the right length.");
        break;
      };

    }

    // Ask if user wants lowercase letters
    isLower = confirm("Would you like any lowercase characters?");

    if (isLower) {
      alert("lowercase it is");
    }else {
      alert("no lowercase then..");
    };

    // Ask if user wants UPPERCASE letters
    isUppercase = confirm("Would you like any uppercase characters?");

    if (isLower) {
      alert("uppercase it is");
    }else {
      alert("no uppercase then..");
    };

    // Ask if user wants numbers
    isContainNumber = confirm("Would you like any numbers?")

    if (isContainNumber) {
      alert("you get numbers!");
    } else {
      alert("fine, no numbers...");
    };

    // Ask if user wants special characters
    isSpecial = confirm("Would you like any special characters?")

    if (isSpecial) {
      alert("you get special characters!");
    } else {
      alert("fine, no special characters...");
    };

    console.log("Length: " + passLength);
    console.log("Lowercase: " + isLower);
    console.log("Uppercase: " + isUppercase);
    console.log("Numbers: " + isContainNumber);
    console.log("Special Characters: " + isSpecial);

    return passLength;
    
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








