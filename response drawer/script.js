//
// This script handles a collapsible sidebar menu.
// It toggles the drawer open/closed and collapses it on small screens.
//

function toggleDrawer() {
  // Find the sidebar element and toggle the 'collapsed' class.
  // If the class exists, it is removed. If it does not exist, it is added.
  document.getElementById('drawer').classList.toggle('collapsed');
}

// Add an event listener that runs every time the browser window size changes.
window.addEventListener('resize', () => {
  // If the screen is narrower than 600px, collapse the drawer.
  if (window.innerWidth < 600) {
    document.getElementById('drawer').classList.add('collapsed');
  }
});