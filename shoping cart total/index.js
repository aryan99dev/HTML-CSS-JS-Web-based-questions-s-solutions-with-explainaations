//
// This cart script updates item quantities and recalculates the running total.
// The goal is to show how one interaction (clicking + or -) changes the whole page.
//

function adjustQty(button, delta) {
  // button is the clicked +/- button.
  // closest('tr') finds the row that contains the item.
  const row = button.closest('tr');

  // Find the quantity text and subtotal cell in the same row.
  const qtyElement = row.querySelector('.qty');
  const subtotalElement = row.querySelector('.subtotal');

  // Data attribute data-price stores the base price of the item.
  const price = Number(row.dataset.price || 0);

  // Read the current quantity and calculate the new one.
  const currentQty = Number(qtyElement.textContent.trim()) || 0;
  const newQty = Math.max(0, currentQty + delta);

  // Update the displayed quantity.
  qtyElement.textContent = String(newQty);

  // Update the subtotal for this item.
  subtotalElement.textContent = `$${(price * newQty).toFixed(2)}`;

  // Recalculate the overall cart total after any change.
  recalculateTotal();
}

function recalculateTotal() {
  // subtotal tracks the total before any discount.
  let subtotal = 0;

  // Look through all rows in the cart table.
  document.querySelectorAll('#cartBody tr').forEach((row) => {
    const price = Number(row.dataset.price || 0);
    const qty = Number(row.querySelector('.qty')?.textContent.trim() || 0);
    subtotal += price * qty;
  });

  const badge = document.getElementById('cartBadge');

  // If subtotal is greater than 100, a 10% discount is applied.
  const total = subtotal > 100 ? subtotal * 0.9 : subtotal;

  // Show or hide the discount badge based on the subtotal.
  badge.style.display = subtotal > 100 ? 'inline-block' : 'none';

  // Update the total shown to the user.
  document.getElementById('cartTotal').textContent = total.toFixed(2);
}

// Wait until the page is ready, then calculate the total once.
document.addEventListener('DOMContentLoaded', recalculateTotal);