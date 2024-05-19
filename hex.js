// Array to hold hex values
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn"); // Button to generate new hex color
const color = document.querySelector(".color"); // Span to display hex value
const copyButton = document.getElementById("copy-button"); // Button to copy hex value to clipboard
let colorHistoryList = document.getElementById("color-history-list"); // List to hold color history

// Function to generate a random hex value within the range of the hex array length
btn.addEventListener("click", function () {
    // Generate new hex color
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    color.textContent = hexColor; // Display hex value in span
    document.body.style.backgroundColor = hexColor; // Set background color to hex value
    color.style.color = hexColor; // Set text color to hex value

    // Create a list item to hold the hex values and colors them with appropriate hex color
    let listItem = document.createElement("li");
    listItem.textContent = hexColor;
    listItem.style.color = hexColor;

    // Create a div to hold the buttons
    let buttonDiv = document.createElement("div");

    // Create a new copy button for the list item
    let copyButtonListItem = document.createElement("button");
    copyButtonListItem.textContent = "Copy";
    copyButtonListItem.className = "copy-button";
    copyButtonListItem.addEventListener("click", function () {
        navigator.clipboard.writeText(hexColor);
    });

    // Create a new remove button for the list item
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-button";

    removeButton.addEventListener("click", function () {
        // Remove the color from the color history
        colorHistoryList.removeChild(listItem);

        // Remove the color from local storage
        let colorHistory = JSON.parse(localStorage.getItem('colorHistory')) || [];
        const index = colorHistory.indexOf(hexColor);
        if (index > -1) {
            colorHistory.splice(index, 1);
        }
        localStorage.setItem('colorHistory', JSON.stringify(colorHistory));
    });

    // Append the buttons to the div
    buttonDiv.appendChild(copyButtonListItem);
    buttonDiv.appendChild(removeButton);

    // Append the div to the list item
    listItem.appendChild(buttonDiv);

    colorHistoryList.appendChild(listItem);

    // Save the color to local storage
    let colorHistory = JSON.parse(localStorage.getItem('colorHistory')) || [];
    colorHistory.push(hexColor);
    localStorage.setItem('colorHistory', JSON.stringify(colorHistory));
});

// Generate a random # from 0 to F
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

// Event listener for the copy to clipboard button
copyButton.addEventListener("click", function () {
    navigator.clipboard.writeText(color.textContent);
});

// Display current color history from local storage
document.addEventListener('DOMContentLoaded', (event) => {
    let colorHistory = JSON.parse(localStorage.getItem('colorHistory')) || [];
    colorHistory.forEach(hexColor => {
        let listItem = document.createElement("li");
        listItem.textContent = hexColor;
        listItem.style.color = hexColor;

        // Create a div to hold the buttons
        let buttonDiv = document.createElement("div");

        // Create a new copy button for the list item
        let copyButtonListItem = document.createElement("button");
        copyButtonListItem.textContent = "Copy";
        copyButtonListItem.className = "copy-button";
        copyButtonListItem.addEventListener("click", function () {
            navigator.clipboard.writeText(hexColor);
        });

        // Create a new remove button for the list item
        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-button";
        removeButton.addEventListener("click", function () {
            colorHistoryList.removeChild(listItem);
            // Remove the color from local storage
            let colorHistory = JSON.parse(localStorage.getItem('colorHistory')) || [];
            const index = colorHistory.indexOf(hexColor);
            if (index > -1) {
                colorHistory.splice(index, 1);
            }
            localStorage.setItem('colorHistory', JSON.stringify(colorHistory));
        });

        // Append the buttons to the div
        buttonDiv.appendChild(copyButtonListItem);
        buttonDiv.appendChild(removeButton);

        // Append the div to the list item
        listItem.appendChild(buttonDiv);

        colorHistoryList.appendChild(listItem);
    });
});