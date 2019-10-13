/*eslint-env browser*/

//STEP 1
function display() {
    "use strict";
    window.alert("I have been clicked");
}

function init() {
    "use strict";
    var button2, button3, button4;
//STEP 2
    button2 = document.getElementById("button2");
    button2.onclick = function () {
        window.alert("I have been clicked");
    };

//STEP 3
    function writeMessage() {
        window.alert("I have been clicked via user defined function");
    }
    button3 = document.getElementById("button3");
    button3.addEventListener("click", writeMessage);

//STEP 4
    button4 = document.getElementById("button4");
    button4.addEventListener("click", function () {
        window.alert("I have been clicked via callback function!!");
    }, false);
}

//STEP 5
window.addEventListener("load", init, false);