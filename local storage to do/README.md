# Local Storage To-Do List

## Overview
This project is a to-do list app where the user can add tasks, click them to mark them complete, and keep them saved in the browser even after refresh.

This project teaches:
- browser storage with `localStorage`
- arrays and objects in JavaScript
- rendering HTML dynamically
- DOM updates with event handling

## Files in this folder
- `index.html` – input field and task list structure
- `index.css` – task list styling
- `script.js` – task logic and local storage handling

## index.html explanation
The page has:
- an input box (`id="tInp"`) to type the task
- a button to add the task
- an empty `<ul id="tList">` list that will be filled by JavaScript

Every time a task is added, JavaScript creates list items and inserts them inside the `<ul>`.

## index.css explanation
This file styles the task list.

- `ul` removes the default bullet points from a list
- `li` gives each task padding and a bottom border
- `li.completed` adds a line-through effect and gray color to show the task is done

## script.js explanation
### Variable: `tasks`
`let tasks = JSON.parse(localStorage.getItem('lab_tasks') || '[]');`

This line does two important things:
1. reads saved tasks from browser storage using `localStorage.getItem('lab_tasks')`
2. converts the stored text into a JavaScript array using `JSON.parse`

If nothing is saved yet, it uses an empty array `[]`.

### Function: `renderTasks()`
This function draws the task list on the screen.

Steps:
1. gets the list container: `document.getElementById('tList')`
2. checks whether the list exists
3. uses `.map()` to convert each task object into HTML
4. each task becomes a list item like:
   - `<li class="completed">Task Name</li>` if the task is complete
   - otherwise normal item
5. `.join('')` combines them into one long HTML string
6. `ul.innerHTML = ...` fills the list with the generated HTML

### Function: `addTask()`
This function adds a new task.

- reads the input value from `tInp`
- `if (!input.value.trim()) return;` prevents empty tasks
- `tasks.push({ txt: input.value.trim(), c: false });`
   - adds a new task object to the array
   - `txt` is the task text
   - `c` means completed status (`false` means not done yet)
- `localStorage.setItem('lab_tasks', JSON.stringify(tasks));` saves the tasks in the browser
- `input.value = '';` clears the input box
- `renderTasks();` refreshes the visible list

### Function: `toggleTask(i)`
This function marks a task as done or undone.

- `i` is the index of the task in the array
- `tasks[i].c = !tasks[i].c;` flips the boolean value
- `localStorage.setItem(...)` saves the updated state
- `renderTasks();` updates the screen

## What this folder code is doing
This folder code is doing a browser-based to-do list. It stores tasks in local storage so the user can add tasks, complete them, and reload the page without losing their list.
