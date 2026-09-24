# Product Grid Filter

## Overview
This app displays product cards and lets the user filter them by product name and category. The grid updates immediately while the user types or changes the category.

This project teaches:
- text search
- radio buttons
- HTML `data-*` attributes
- looping through DOM elements
- combining multiple filter conditions

## Files in this folder
- `index.html` - creates the search field, category choices, and product cards
- `index.css` - creates the two-column product grid and card appearance
- `script.js` - decides which cards should be visible

## index.html explanation
- `input id="pSearch"` is the search box.
- `oninput="filterGrid()"` runs the filter whenever the search text changes.
- The radio buttons all use `name="pCat"`, so only one category can be selected.
- `value="all"`, `value="tech"`, and `value="book"` identify the category selected by the user.
- `onchange="filterGrid()"` runs the filter after the selected category changes.
- Each `.pCard` is one product card.
- `data-cat="tech"` and `data-cat="book"` store category information directly on the HTML element. JavaScript reads this through `card.dataset.cat`.

## index.css explanation
- `.grid` turns the product area into a CSS Grid layout.
- `grid-template-columns: 1fr 1fr` creates two equal columns.
- `gap` adds space between cards.
- `.pCard` gives every product a background color, padding, and rounded corners.

## script.js explanation
### Function: `filterGrid()`
This function applies both the text and category filters.

Steps:
1. `getElementById('pSearch')` finds the search input.
2. `.value` reads what the user typed.
3. `.toLowerCase()` makes the search case-insensitive, so `laptop` can match `Laptop`.
4. `querySelector('input[name="pCat"]:checked')` finds the selected radio button.
5. `.value` reads the selected category.
6. `querySelectorAll('.pCard')` gets every product card.
7. `.forEach(card => { ... })` processes each card one at a time.
8. `card.innerText.toLowerCase().includes(query)` checks whether the product name contains the search text.
9. `card.dataset.cat === cat` checks whether the product category matches the selected category.
10. `cat === 'all'` makes every category acceptable when All is selected.
11. `titleMatch && catMatch` requires both conditions to be true.
12. `card.style.display` shows matching cards as `block` and hides non-matching cards as `none`.

## What this folder code is doing
This folder code is doing a live product search and category filter, showing only cards that match both user selections.
