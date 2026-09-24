# Responsive Drawer

## Overview
This app demonstrates a sidebar drawer that can be opened or collapsed. It also automatically collapses the drawer when the browser becomes narrower than 600 pixels, which is useful on small screens.

This project teaches:
- flexbox layout
- CSS transitions
- adding and removing CSS classes
- browser resize events
- responsive behavior with JavaScript

## Files in this folder
- `index.html` - creates the sidebar, content area, and toggle button
- `index.css` - controls the drawer width and collapse animation
- `script.js` - opens, closes, and responds to window resizing

## index.html explanation
- `.wrapper` contains the sidebar and the content area.
- `id="drawer"` gives JavaScript a way to find the sidebar.
- `.sidebar` supplies the normal drawer styling.
- `.content` represents the main page area beside the drawer.
- `onclick="toggleDrawer()"` calls the toggle function when the button is clicked.

## index.css explanation
- `.wrapper` uses `display: flex`, placing the sidebar and content next to each other.
- `.sidebar` starts with a width of 120 pixels.
- `transition: width 0.3s` animates changes to the width instead of changing it instantly.
- `overflow: hidden` prevents sidebar text from showing outside the drawer.
- `white-space: nowrap` keeps the sidebar text on one line.
- `.sidebar.collapsed { width: 0; }` makes the drawer disappear when the `collapsed` class exists.

## script.js explanation
### Function: `toggleDrawer()`
This function opens or closes the drawer.

- `getElementById('drawer')` finds the sidebar.
- `classList.toggle('collapsed')` adds the class if it is missing and removes it if it already exists.
- Adding the class changes the CSS width to 0; removing it returns the drawer to 120 pixels.

### Resize event listener
`window.addEventListener('resize', () => { ... })` listens for changes to the browser window size.

Steps:
1. The browser fires a `resize` event whenever the window changes size.
2. `window.innerWidth` gives the current width in pixels.
3. If the width is below 600, JavaScript adds the `collapsed` class.
4. The drawer therefore closes automatically on narrow screens.

## What this folder code is doing
This folder code is doing a collapsible sidebar demonstration that adapts its visibility when the browser becomes small.
