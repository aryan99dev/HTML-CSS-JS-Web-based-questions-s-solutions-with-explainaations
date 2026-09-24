//
// This is a simple to-do app.
// The idea is to store tasks in an array, show them in the browser,
// and save them in browser storage so they stay even after refresh.
//

// localStorage is a browser feature that keeps data in the user's browser.
// Here we read tasks from storage. If nothing exists yet, we use an empty array.
let tasks = JSON.parse(localStorage.getItem('lab_tasks') || '[]');

function renderTasks() {
  // Find the <ul> element where all task items are displayed.
  const ul = document.getElementById('tList');

  // If the list is missing, stop here.
  if (!ul) return;

  // Build HTML for every task.
  // Each task becomes a <li> element.
  // If a task is completed, add the class 'completed' so CSS can line-through it.
  ul.innerHTML = tasks.map((t, i) =>
    `<li class="${t.c ? 'completed' : ''}" onclick="toggleTask(${i})">${t.txt}</li>`
  ).join('');
}

function addTask() {
  // Read the text box where the task is typed.
  const input = document.getElementById('tInp');

  // Ignore empty entries. trim() removes spaces.
  if (!input.value.trim()) return;

  // Push a new task object into the array.
  // Each task has two fields:
  // - txt: task text
  // - c: completion status (false means not done yet)
  tasks.push({ txt: input.value.trim(), c: false });

  // Save the array as a JSON string in localStorage.
  localStorage.setItem('lab_tasks', JSON.stringify(tasks));

  // Clear the input field after saving.
  input.value = '';

  // Rebuild the visible task list.
  renderTasks();
}

function toggleTask(i) {
  // i is the index of the task we clicked.
  // Flip its completion status from true to false or false to true.
  tasks[i].c = !tasks[i].c;

  // Save the updated tasks back into localStorage.
  localStorage.setItem('lab_tasks', JSON.stringify(tasks));

  // Update the HTML so the checkmark/line-through state appears immediately.
  renderTasks();
}