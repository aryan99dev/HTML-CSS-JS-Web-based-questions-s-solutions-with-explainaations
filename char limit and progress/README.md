# Char Limit and Progress

## Overview
This mini project is a simple text box with a live character counter and a progress bar. The user types into a textarea, and the page updates the count and the bar immediately.

This project teaches the following basic ideas:
- HTML form elements
- CSS styling for layout and colors
- JavaScript events like oninput
- DOM updates using getElementById and style

## Files in this folder
- `index.html` – page structure
- `index.css` – page design and colors
- `script.js` – logic for counting and progress bar updates

## index.html explanation
The HTML file creates the UI.

- `textarea` is the input area where the user types text.
- `maxlength="100"` prevents the user from typing more than 100 characters.
- `oninput="updateLimit(this)"` means: every time the user types, the browser calls the JavaScript function `updateLimit` and gives it the textarea element.
- `div id="lblCount"` shows the current count like `25 / 100`.
- `div class="progress-track"` is the full bar background.
- `div id="lblBar" class="progress-fill"` is the actual moving colored part that grows as the user types.

## index.css explanation
This file controls the look.

- `textarea` styles the text area with a dark background and white text.
- `.progress-track` creates the background line for the bar.
- `.progress-fill` sets the width and color of the filled part.
- `transition: width 0.1s` makes the width movement smooth.

## script.js explanation
### Function: `updateLimit(ta)`
This is the main function of the app.

- `ta` is the textarea object passed from the HTML.
- `const len = ta.value.length;` calculates how many characters are currently typed.
- `document.getElementById('lblCount').innerText = ...` updates the visible text count.
- `const bar = document.getElementById('lblBar');` gets the progress bar element.
- `bar.style.width = `${len}%`;` changes the width of the bar based on the number of characters typed.
- `if (len >= 90)` sets the bar to red when the user is close to the limit.
- `else if (len >= 75)` sets it to orange for warning.
- `else` keeps it blue for normal progress.

This is how the app works in simple terms:
1. User types.
2. JavaScript reads the text.
3. It counts the letters.
4. It updates the number and bar.
5. It changes the bar color depending on how full it is.

## What this folder code is doing
This folder code is doing a live character counter and progress indicator. It helps users know how much text they have typed and how close they are to the 100-character limit.
