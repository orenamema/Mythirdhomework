// Based on code found on 
// https://www.youtube.com/watch?v=9sT03jEwcaw
// https://github.com/JamieMcGibbon/TechnicalCafe/tree/master/Misc%20Tutorials/Random%20Password%20Generator

function passwordGenerator(){
    // The prompts
    var pwLen = prompt("How many characters would you like your password to be? ");
    console.log(pwLen);


    if ((pwLen < 8) || (pwLen > 128)) {

        alert("Your password length must be between 8 and 128 characters");
        // This will end the function and no prompt will be asked
        return;
    }

    var specialC = confirm("Click ok to confirm Special characters");
    console.log(specialC);
    var numericC = confirm("Click ok to confirm Numeric characters");
    console.log(numericC); 
    var lowerC = confirm("Click ok to confirm lowercase characters");
    console.log(lowerC);  
    var upperC = confirm("Click ok to confirm upper characters");
    console.log(upperC);

    // The characters available
    var capS = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
    var lowS = "abcdefghijklmnopqrstuvwxyz";
    var numS = "1234567890";
    var specS = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"; 

    // string that will be edited
    var userSelection = "";

    // creation of the string based on user selection
    if (specialC) {
        userSelection = userSelection + specS;
        console.log(userSelection);
    }
    if (numericC) {
        userSelection = userSelection + numS;
        console.log(userSelection);
    }
    if (lowerC) {
        userSelection = userSelection + lowS;
        console.log(userSelection);
    }   
    if (upperC) {
        userSelection = userSelection + capS;
        console.log(userSelection);
    }   
    
    var password = "";

    for(var i = 0; i < pwLen; i++){
        password = password + userSelection.charAt(Math.floor(Math.random() * Math.floor(userSelection.length - 1)));
    }    
    
    console.log(password);
    
    document.getElementById("display").value = password;

}  


// function for copy to clipboard
// https://www.w3schools.com/howto/howto_js_copy_clipboard.asp

function copyClipboard() {
    var copyText = document.getElementById("display");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Your password " + copyText.value + " was copied to your clipboard ");
  }


//  "How many characters would you like your password to be? "
// Alert: "Password must be at least 8 characters"
// Click ok to confirm Special characters, Numeric characters,
// Lowercase characters, Uppercase characters 
