//
// This script handles the tab switcher and notification badge.
// Tabs are used to show one panel at a time.
//

function switchTab(idx) {
  // Hide every pane except the one whose index matches idx.
  document.querySelectorAll('.tPane').forEach((p, i) =>
    p.classList.toggle('hidden', i !== (idx - 1))
  );

  // Add the 'active' class to the selected button only.
  document.querySelectorAll('.tab-btn').forEach((b, i) =>
    b.classList.toggle('active', i === (idx - 1))
  );
}

function incBadge() {
  // Find the badge element that displays the count.
  const badge = document.getElementById('nBadge');

  // parseInt converts the text like '3' into the number 3.
  // Then we add 1 and write it back to the page.
  badge.innerText = parseInt(badge.innerText) + 1;
}