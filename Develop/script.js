// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = '';
  var passwordText = document.querySelector("#password");

  function getPassLength() {
    passLength = prompt("How long should your password be? (8-128)");
    if (passLength < 8 || passLength >128) {
      confirm ("Please select a password length between 8 and 128 characters.")
      getPassLength ();
    }
   } 

  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specChar = "!@#$%^&*()"
  var nums = "0123456789";


  var passSet = lowerCase;
  var passLength = 0;

 

  if (confirm('Would you like to include uppercase letters?')) {
    passSet += upperCase;
  }

  if (confirm('Would you like to include special characters?')) {
    passSet += specChar;
  }

  if (confirm('Would you like to include numbers?')) {
    passSet += nums;
  }

getPassLength();



 

  //var password = generatePassword();

    for ( var i = 0; i < passLength; i++ ) {
     password += passSet.charAt(Math.floor(Math.random() * passSet.length));
      } console.log(password);
   
   passwordText.value = password;
    }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
