# Password Validator

## Overview
This app checks a password while the user types. It gives visual feedback for weak, medium, and strong passwords, compares the confirmation password, and enables the submit button only when the password is strong and both values match.

This project teaches:
- password inputs in HTML
- input events
- regular expressions for validation
- CSS classes for visual feedback
- enabling and disabling a button with JavaScript

## Files in this folder
- `index.html` - creates the password fields and submit button
- `index.css` - colors the password field according to its strength
- `script.js` - validates the password and controls the button

## index.html explanation
- `input type="password" id="p1"` creates the main password field. Password inputs hide the characters while typing.
- `input type="password" id="p2"` creates the confirmation field.
- `oninput="valPass()"` runs `valPass()` every time either field changes.
- `button id="pSub" disabled` creates a button that starts disabled. JavaScript enables it only after validation succeeds.
- The linked CSS and JavaScript files provide the appearance and behavior.

## index.css explanation
- `input` sets the width, padding, spacing, and default border.
- `input.weak` gives a weak password a red border.
- `input.medium` gives a medium password an orange border.
- `input.strong` gives a strong password a green border.
- `button:disabled` makes a disabled button faded and shows that it cannot currently be clicked.

## script.js explanation
### Function: `valPass()`
This function validates both password fields.

Steps:
1. `getElementById()` gets the two inputs and the submit button from the page.
2. `const v = p1.value` stores the first password in a shorter variable.
3. `p1.className = ''` removes an old strength class before checking the new value.
4. `/[0-9]/.test(v)` checks whether the password contains at least one number.
5. `/[^a-zA-Z0-9]/.test(v)` checks whether it contains a character that is not a letter or number, such as `!` or `@`.
6. A password with at least 8 characters, a number, and a special character receives the `strong` class.
7. A password with at least 6 characters and a number receives the `medium` class.
8. Any other non-empty password receives the `weak` class.
9. `v === p2.value` checks whether the confirmation text is exactly the same.
10. `p1.classList.contains('strong')` checks that the password has strong status.
11. `btn.disabled = !match` enables the button only when both conditions are true.
12. The opacity is also changed so the button looks enabled or disabled.

## What this folder code is doing
This folder code is doing live password-strength validation and prevents registration until a strong password is confirmed correctly.
