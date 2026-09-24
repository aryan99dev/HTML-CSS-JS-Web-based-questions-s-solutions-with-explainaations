//
// This script updates the character counter and progress bar.
// The browser calls this function whenever the user types in the textarea.
// The parameter ta is the textarea element itself.
//
function updateLimit(ta) {
  // ta.value is the text currently inside the textarea.
  // .length tells us how many characters are inside it.
  const len = ta.value.length;

  // Find the label that shows the counter like: 25 / 100
  // innerText changes what the user sees on the page.
  document.getElementById('lblCount').innerText = `${len} / 100`;

  // Find the bar that fills from left to right.
  const bar = document.getElementById('lblBar');

  // The width of the bar should match the percentage of characters typed.
  // Example: 50 characters out of 100 => width = 50%
  bar.style.width = `${len}%`;

  // Change the color of the bar depending on how close the user is to the limit.
  if (len >= 90) {
    bar.style.background = '#ef4444'; // Danger Red: very close to limit
  } else if (len >= 75) {
    bar.style.background = '#f59e0b'; // Warning Yellow: getting near the limit
  } else {
    bar.style.background = '#38bdf8'; // Normal Blue: safe area
  }
}