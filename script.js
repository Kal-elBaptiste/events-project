// Variables
let displayHidden = false;


// COLOR DISPLAY
let colorDisplay = document.getElementById("color-display");

// AQUA BUTTON
let aquaButton = document.getElementById("aqua");
aquaButton.onclick = function() {
    colorDisplay.style.backgroundColor = "aqua";
}

// teal BUTTON
let tealButton = document.getElementById("teal");
tealButton.onclick = function() {
    colorDisplay.style.backgroundColor = "teal";
}

// pink BUTTON
let pinkButton = document.getElementById("pink");
pinkButton.onclick = function() {
    colorDisplay.style.backgroundColor = "pink";
}

// purple BUTTON
let purpleButton = document.getElementById("purple");
purpleButton.onclick = function() {
    colorDisplay.style.backgroundColor = "purple";
}

// colorless BUTTON
let colorlessButton = document.getElementById("colorless");
colorlessButton.onclick = function() {
    colorDisplay.style.backgroundColor = "transparent";
}

// hide BUTTON
let hideButton = document.getElementById("hide");
hideButton.onclick = function() {
    if (displayHidden){

        colorDisplay.style.display = "flex";
        displayHidden = !displayHidden;
    }
    else {
        colorDisplay.style.display = "none";
        displayHidden = !displayHidden;
    }
}

