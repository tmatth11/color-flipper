# Color Flipper

This is a fun and interactive project that allows users to generate random colors and change the background color of the page with just a click of a button!

## Features

- **Color Generation**: Click the "Click Me" button to generate a random color. The hex value of that color will be displayed on the page, and the background color of the page will be changed to the generated color.
- **Copy to Clipboard**: Copy the hex values of the generated colors to the clipboard.
- **Color History**: The generated colors are displayed in a list below the "Click Me" and "Copy to Clipboard" buttons. The contents of this list are saved in local storage so that the user can see the colors that they have generated previously. Each hex value stored in the list can be removed from the list or copied to the user's clipboard.

## Files

- `index.html`: The main HTML file, which contains a simple color picker of 4 possible colors.
- `hex.html`: A more improved version of `index.html`, which includes the "Color History" list.
- `style.css`: The CSS file that contains the styling for the page. This file included styles for the colors, headings, and components on the index.html and hex.html pages.
- `app.js`: This provides functionality for the "Click Me" button and "Copy to Clipboard" button on the simple color picker included in `index.html`.
- `hex.js`: This provides functionality for the "Color History" list on the more improved version of the simple color picker included in `hex.html`.
- `icon.png`: An icon for the browser.

## How to Run

1. Download the files in this repository.
2. Open `index.html` in a browser.
3. Click the "Click Me" button to generate a random color.
4. Click the "Copy to Clipboard" button to copy the hex values of the generated colors to the clipboard.
5. Remove or copy the colors from the "Color History" list on `hex.html` by clicking the appropriate buttons.

## Credits

This project was inspired by the <a href="https://www.youtube.com/watch?v=3PHXvlpOkf4&t=419s" target="_blank">Build 15 JavaScript Projects - Vanilla JavaScript Course</a> tutorial by FreeCodeCamp. The "Copy to Clipboard" and "Color History" features were added independently.
