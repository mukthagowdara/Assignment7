var computerChoice;
var userChoice;

var compare = function (uc, cc) {
    "use strict";
    if (uc === cc) {
        return "Both user and computer tie!";
    } else if (uc === "Rock") {
        if (cc === "Scissor") {
            return "User wins";
        } else {
            return "Computer wins";
        }
    } else if (uc === "Paper") {
        if (cc === "Rock") {
            return "User wins";
        } else {
            return "Computer wins";
        }
    } else if (uc === "Scissor") {
        if (cc === "Rock") {
            return "Computer wins";
        } else {
            return "User wins";
        }
    } else if (uc !== "Rock" || uc !== "Paper" || uc !== "Scissor") {
        return "Enter valid input. You can only choose Rock, Paper or Scissor";
    }
};

var num = parseInt(Math.floor(Math.random() * 30), 10);
window.console.log(num);
if (num < 10) {
    computerChoice = "Rock";
} else if (num < 20) {
    computerChoice = "Paper";
} else {
    computerChoice = "Scissor";
}

window.console.log(computerChoice);

userChoice = window.prompt("Select either Rock or Paper or Scissor");



var result = compare(userChoice, computerChoice);
window.alert(result);
 