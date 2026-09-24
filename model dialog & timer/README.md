# Modal Dialog & Timer

## Overview
This project shows a popup modal window that appears after 4 seconds. It is a common UI pattern used for promotions, warnings, or important messages.

This project teaches:
- pop-up modals
- hidden/show classes
- event handling for clicks
- JavaScript timers with `setTimeout`

## Files in this folder
- `index.html` – modal markup and trigger button
- `index.css` – overlay and modal styling
- `script.js` – logic to open/close the modal

## index.html explanation
The page contains:
- a button called `Open Promo Modal`
- a hidden overlay `div id="demoModal"`
- a modal content box with text and a close button

The overlay uses `class="modal-overlay hidden"` to hide it initially.

When the button is clicked, JavaScript calls `toggleModal(true)`, which shows the modal.

## index.css explanation
This file styles the popup.

- `.modal-overlay` covers the entire screen with a dark transparent background
- `position: fixed; inset: 0;` makes it fill the full viewport
- `display: grid; place-items: center;` centers the modal box on the screen
- `.modal-content` styles the actual box content
- `.hidden { display: none !important; }` hides the element completely

## script.js explanation
### Function: `toggleModal(show)`
This function opens or closes the modal.

- `const modal = document.getElementById('demoModal');` gets the popup element
- `modal.classList.toggle('hidden', !show);`
  - if `show` is `true`, the hidden class is removed
  - if `show` is `false`, the hidden class is added

### Function: `closeOnBackdrop(e)`
This function closes the modal when the user clicks outside the content box.

- `e` is the click event object
- `if (e.target.id === 'demoModal')` checks whether the clicked item was the background overlay
- if yes, it calls `toggleModal(false)`

### Timer code
`setTimeout(() => toggleModal(true), 4000);`

This means:
- wait 4000 milliseconds (4 seconds)
- then call `toggleModal(true)`
- the modal appears automatically

## What this folder code is doing
This folder code is doing a timed promotional modal. It opens after a delay, can be closed by clicking the close button or the background, and uses a hidden class to show or hide the popup smoothly.
