// Array of colors
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// Button to generate random color
const btn = document.getElementById("btn");

// Element to display the current color
const color = document.querySelector(".color");

// Button to copy the current color to clipboard
const copyButton = document.getElementById("copy-button");

// Variable to store the last generated color
let lastColor = null;

// Event listener for the color generation button
btn.addEventListener("click", function () {
    // Generate a random number
    let randomNumber = getRandomNumber();
    
    // Check if the new color is the same as the last one
    while (colors[randomNumber] === lastColor) {
        randomNumber = getRandomNumber();
    }
    
    // Store the new color as the last color
    lastColor = colors[randomNumber];
    
    // Change the background color to a random color from the array
    document.body.style.backgroundColor = colors[randomNumber];
    
    // Display the current color
    color.textContent = colors[randomNumber];
    color.style.color = colors[randomNumber];
});

// Function to generate a random number within the range of the array length
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

// Event listener for the copy to clipboard button
copyButton.addEventListener("click", function () {
    // Copy the current color to clipboard
    navigator.clipboard.writeText(color.textContent);
});