//
// This function validates the password as the user types.
// It checks length, numbers, special characters, and matching confirmation.
//
function valPass() {
  // Get the two password input elements and the submit button.
  const p1 = document.getElementById('p1');
  const p2 = document.getElementById('p2');
  const btn = document.getElementById('pSub');
  const v = p1.value;

  // Reset any previous CSS class so the border color is fresh.
  p1.className = '';

  // Check password strength.
  // A strong password should be at least 8 characters long,
  // contain a number, and contain at least one special character like ! or @.
  if (v.length >= 8 && /[0-9]/.test(v) && /[^a-zA-Z0-9]/.test(v)) {
    p1.classList.add('strong');
  } else if (v.length >= 6 && /[0-9]/.test(v)) {
    // Medium password: at least 6 characters and includes a number.
    p1.classList.add('medium');
  } else if (v.length > 0) {
    // Weak password: anything typed but not strong enough.
    p1.classList.add('weak');
  }

  // The password is valid only when:
  // 1) it is strong enough
  // 2) the confirm field matches exactly
  const match = p1.classList.contains('strong') && v === p2.value;

  // If everything is valid, enable the button. Otherwise disable it.
  btn.disabled = !match;
  btn.style.opacity = match ? '1' : '0.5';
}