# Tab Switcher and Badge

## Overview
This app demonstrates two tabs: Profile and Alerts. Clicking a tab shows its matching content panel and highlights the selected tab. A separate button increases the notification number shown inside the Alerts tab.

This project teaches:
- switching visible panels
- CSS classes for active and hidden states
- looping over related elements
- converting displayed text into numbers
- simple notification counters

## Files in this folder
- `index.html` - creates the tab buttons, content panels, and notification button
- `index.css` - styles active tabs, panels, and hidden content
- `script.js` - switches tabs and increments the badge

## index.html explanation
- `.tabs` groups the tab buttons.
- Each `.tab-btn` is clickable and calls `switchTab()` with a tab number.
- `nBadge` is the span that displays the notification count.
- `tab1` and `tab2` are the content panels.
- `tab2` starts with the `hidden` class, so only the first panel appears initially.
- The notification button calls `incBadge()` when clicked.

## index.css explanation
- `.tab-btn` gives each tab padding, a background, and white text.
- `.tab-btn.active` changes the selected tab to blue and bold text.
- `.tPane` styles the content panel.
- `.hidden` removes an element from the visible page using `display: none`.

## script.js explanation
### Function: `switchTab(idx)`
This function selects one tab and hides the others.

Steps:
1. `querySelectorAll('.tPane')` gets every content panel.
2. `.forEach((p, i) => ...)` loops through the panels. `p` is the current panel and `i` is its zero-based index.
3. `idx - 1` converts the user-facing tab number into the matching zero-based index.
4. `classList.toggle('hidden', i !== (idx - 1))` hides panels whose index does not match and shows the selected panel.
5. `querySelectorAll('.tab-btn')` gets all tab buttons.
6. The second loop adds the `active` class only to the selected button.

### Function: `incBadge()`
This function increases the alert count.

Steps:
1. `getElementById('nBadge')` finds the number element.
2. `innerText` reads the displayed count as text.
3. `parseInt()` converts text such as `3` into the number `3`.
4. The function adds 1 and assigns the result back to `innerText`.
5. The browser immediately displays the new notification count.

## What this folder code is doing
This folder code is doing a tabbed interface with one visible panel at a time and a notification badge that increases when a new notification is triggered.
