var passConfirm = confirm("Would you like to generate a strong, random password?");
var howMany = "How many characters would you like your password to contain? (Must be between 8 and 25 characters)";
var specialPass = "Would you like special characters in your password??";
var numPass = "Would you like numbers in your password?";
var lowerLet = "Would you like lowercase characters in your password?";
var uppLet = "Would you like upercase charcters in your password?";
var noPass = "No password for you!";


if (passConfirm) {
    promptUser(howMany);
}
else {
    alert(noPass);
}

var charAmount;
var specChar;
var numCar;
var lowerChar;
var uppChar;


function determine(input) {
    var succeed = false
    console.log("my input is: " + input)
    if (input >= 8 && input <= 25) {
        succeed = true;
        charAmount = input;
        console.log("success");
    } else {
        console.log("fail");
    }
    return succeed;
}


function generate() {
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    var symbols = '!@#$%^&*()_+?+=~';
    var password = '';
    var all;

    if (specChar) {
        all = all + symbols;
    }

    if (upperChar) {
        all = all + uppercase;
    }
    if (lowerChar) {
        all = all + lowercase;
    }
    if (numChar) {
        all = all + numbers;
    }
    for (var index = 0; index < charAmount; index++) {
        var character = Math.floor(Math.random() * all.length);
        password += all.substring(character, character + 1);
    }
    console.log(password);
    document.getElementById("passwordTextArea").value = password;
}

function promptUser(msg){
    if (determine(prompt(msg))) {
        if (confirm(specialPass)) {
            console.log("user chose special characters");
            specChar = true;

        }
        else {
            console.log("user chose NO special characters");
            specChar = false;
        }


        if (confirm(numPass)) {
            console.log("user chose numeric characters");
            numChar = true;
        }
        else {
            console.log("user chose NO numeric characters");
            numChar = false;
        }


        if (confirm(lowerLet)) {
            console.log("user chose lowercase characters");
            lowerChar= true;

        }
        else {
            console.log("user chose NO lowercase characters");
            lowerChar = false;
        }


        if (confirm(uppLet)) {
            console.log("user chose uppercase characters");
            upperChar = true;

        }
        else {
            console.log("user chose NO uppercase characters");
            upperChar = false;
        }
    }
    else {
        promptUser(msg);

    }
}

function copyToClip(){
    document.getElementById("passwordTextArea").select();

    document.execCommand("Copy");

    alert("Password Copied to Clipboard!");
}