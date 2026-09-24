# Grade Calculator

## Overview
This app lets a user enter a student name and marks, then adds the student to a table. It also has a filter to show only pass or fail students.

This project teaches:
- form inputs and buttons
- reading values from HTML fields
- creating table rows dynamically with JavaScript
- showing/hiding rows using CSS classes

## Files in this folder
- `index.html` – page layout and student form
- `index.css` – colors and table styling
- `script.js` – logic for adding/filtering students

## index.html explanation
The page includes:
- `input type="text" id="sName"` for the student name
- `input type="number" id="sMarks"` for marks from 0 to 100
- `button onclick="addStudent()"` for adding a student
- `select onchange="filterStudents(this.value)"` for filtering records
- `tbody id="sBody"` where new rows are inserted dynamically

The table structure has columns for:
- Name
- Marks
- Status

## index.css explanation
This file makes the UI look clean and readable.

- `.form` uses flex layout so input fields appear next to each other.
- `input, select` gives the form controls a dark theme.
- `.pass` makes pass entries green and bold.
- `.fail` makes fail entries red and bold.

## script.js explanation
### Function: `addStudent()`
This function adds a student to the table.

Steps:
1. `const name = document.getElementById('sName').value.trim();`
   - reads the name input
   - `.trim()` removes extra spaces around the text
2. `const marks = parseInt(document.getElementById('sMarks').value);`
   - reads the marks input
   - `parseInt` converts text like `"88"` into the number `88`
3. It checks if the name is empty or marks are invalid.
4. If invalid, it shows an alert and stops using `return`.
5. `const status = marks >= 40 ? 'pass' : 'fail';`
   - if marks are 40 or more, student passes
   - otherwise they fail
6. `const tr = document.createElement('tr');`
   - creates a new row in the table
7. `tr.className = status;`
   - gives the row the class `pass` or `fail`
8. `tr.innerHTML = ...` fills the row with cells: name, marks, and status text
9. `document.getElementById('sBody').appendChild(tr);` adds this row to the table body
10. It clears the input fields after inserting the row

### Function: `filterStudents(val)`
This function filters rows by status.

- `document.querySelectorAll('#sBody tr')` gets all student rows.
- `.forEach(r => { ... })` loops through every row.
- `r.style.display = (val === 'all' || r.classList.contains(val)) ? '' : 'none';`
   - if the chosen value is `all`, show all rows
   - if the chosen value is `pass`, show only rows with the class `pass`
   - if the chosen value is `fail`, show only rows with the class `fail`

## What this folder code is doing
This folder code is doing a mini student record system. It collects student names and marks, decides pass/fail status, displays results in a table, and lets the user filter the list by pass or fail.
