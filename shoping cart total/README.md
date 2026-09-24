# Shopping Cart Total

## Overview
This app displays a shopping cart with a product quantity selector. Clicking plus or minus changes the quantity, updates the item subtotal, recalculates the cart total, and applies a 10% discount when the subtotal is above 100.

This project teaches:
- HTML tables
- buttons with arguments
- `data-*` attributes
- numeric calculations
- updating page text and visibility
- waiting for the page to load

## Files in this folder
- `index.html` - creates the cart table and total area
- `index.css` - styles the table, buttons, quantity, and discount badge
- `index.js` - changes quantities and calculates totals

## index.html explanation
- The table has columns for item, price, quantity, and subtotal.
- `data-price="25"` stores the product price on the table row.
- The minus button calls `adjustQty(this, -1)`.
- The plus button calls `adjustQty(this, 1)`.
- `this` means the button that was clicked.
- `.qty` contains the current quantity.
- `.subtotal` contains the calculated price for that row.
- `cartTotal` is updated with the final total.
- `cartBadge` displays the discount message when the discount applies.

## index.css explanation
- `body` sets the page font, margin, background, and text color.
- `table` controls the table width, border behavior, background, and shadow.
- `th` and `td` add borders, padding, and alignment to cells.
- `.btn` styles the quantity buttons.
- `.qty` gives the quantity a stable width and centered text.
- `.badge` styles the discount label.
- `h4` adds spacing and makes the total easier to read.

## index.js explanation
### Function: `adjustQty(button, delta)`
This function changes the quantity of the row containing the clicked button.

Steps:
1. `button.closest('tr')` finds the table row containing the clicked button.
2. `row.querySelector('.qty')` finds that row's quantity.
3. `row.querySelector('.subtotal')` finds that row's subtotal.
4. `row.dataset.price` reads the price stored in `data-price`.
5. `Number(...)` converts text values into numbers.
6. `currentQty + delta` adds or subtracts one quantity.
7. `Math.max(0, ...)` prevents the quantity from going below zero.
8. `textContent` updates the quantity shown on the page.
9. `toFixed(2)` formats the subtotal with exactly two decimal places.
10. `recalculateTotal()` updates the complete cart after the row changes.

### Function: `recalculateTotal()`
This function calculates the total for all cart rows.

Steps:
1. `let subtotal = 0` creates an accumulator for the pre-discount amount.
2. `querySelectorAll('#cartBody tr')` finds every item row.
3. For each row, the function reads its price and quantity.
4. It adds `price * qty` to `subtotal`.
5. If the subtotal is greater than 100, it calculates `subtotal * 0.9`, which removes 10%.
6. It shows the badge only when the discount condition is true.
7. It writes the final amount into `cartTotal`.

### `DOMContentLoaded` event listener
`document.addEventListener('DOMContentLoaded', recalculateTotal)` waits until the HTML has loaded, then calculates the starting total once.

## What this folder code is doing
This folder code is doing a small shopping cart calculation system with quantity controls, item subtotals, a final total, and an automatic discount.
