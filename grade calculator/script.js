//
// This script handles adding students and filtering them by pass/fail status.
// The DOM is the browser's page structure. JavaScript reads and updates it.
//

function addStudent() {
  // Read the typed values from the input boxes.
  const name = document.getElementById('sName').value.trim();
  const marks = parseInt(document.getElementById('sMarks').value);

  // Validate the input before saving anything.
  // We want a valid name and a mark between 0 and 100.
  if (!name || isNaN(marks) || marks < 0 || marks > 100) {
    alert('Enter valid name and marks (0-100)');
    return; // Stop the function immediately.
  }

  // A student passes if the marks are 40 or above.
  const status = marks >= 40 ? 'pass' : 'fail';

  // Create a new table row (<tr>) for the student.
  const tr = document.createElement('tr');

  // Add the CSS class so the row can be filtered later.
  tr.className = status;

  // Build the inner HTML for the row.
  // This is a convenient way to create a row with cells for name, marks, and result.
  tr.innerHTML = `<td>${name}</td><td>${marks}</td><td class="${status}">${status.toUpperCase()}</td>`;

  // Append the new row to the table body.
  document.getElementById('sBody').appendChild(tr);

  // Clear the input boxes after adding the student.
  document.getElementById('sName').value = '';
  document.getElementById('sMarks').value = '';
}

function filterStudents(val) {
  // Select all rows inside the table body.
  // For each row, decide whether it should stay visible or be hidden.
  document.querySelectorAll('#sBody tr').forEach(r => {
    // If val is 'all', show every row.
    // If val is 'pass', only show rows whose class includes 'pass'.
    // If val is 'fail', only show rows whose class includes 'fail'.
    r.style.display = (val === 'all' || r.classList.contains(val)) ? '' : 'none';
  });
}