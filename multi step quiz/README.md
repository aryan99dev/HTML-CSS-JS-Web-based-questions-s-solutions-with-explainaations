# Multi-Step Quiz

## Overview
This project is a small quiz with two steps. Only one question is shown at a time. The user moves forward or backward and finally sees the score.

This project teaches:
- radio input groups
- showing and hiding elements with CSS classes
- moving through steps in JavaScript
- calculating a score from checked answers

## Files in this folder
- `index.html` – two-question quiz layout
- `index.css` – style for the steps and hidden elements
- `script.js` – question navigation and scoring logic

## index.html explanation
The page has:
- `div id="q1" class="q-step"` for question 1
- `div id="q2" class="q-step hidden"` for question 2
- `button id="qPrev"` for the Previous button
- `button id="qNext"` for the Next button or Submit button
- `h4 id="qScore" class="hidden"` where the final score is shown

The hidden class is used to hide question 2 at first.

## index.css explanation
This file gives the quiz a card-like appearance.

- `.q-step` adds padding and a dark background
- `.hidden` hides the element from the screen
- `.nav-btns` arranges the previous and next buttons in a row

## script.js explanation
### Variable: `qStep`
`let qStep = 1;`

This variable tracks which question is currently active.

### Function: `submitQuiz()`
This function calculates the quiz score.

- `document.querySelectorAll('input:checked')` selects every radio button that the user checked
- `[... ]` converts the list to an array
- `.reduce((total, answer) => total + Number(answer.value), 0)` adds the values of checked answers
- the correct answer is `1` and the wrong answer is `0`
- `document.getElementById('qScore').innerText = ...` displays the final score
- `.classList.remove('hidden')` makes the score visible

### Function: `navStep(dir)`
This function changes the current question.

- `document.getElementById(`q${qStep}`).classList.add('hidden');` hides the current question
- `qStep += dir;` moves to the next or previous question
- `document.getElementById(`q${qStep}`).classList.remove('hidden');` shows the new question
- `document.getElementById('qPrev').disabled = (qStep === 1);` disables the previous button on the first question
- The next button text changes from `Next` to `Submit` on the last step
- `nextButton.onclick = qStep === 2 ? submitQuiz : () => navStep(1);` sets the right behavior for the button

## What this folder code is doing
This folder code is doing a simple multi-step quiz flow. It moves between question panels, keeps track of the current step, and calculates a total score at the end.
