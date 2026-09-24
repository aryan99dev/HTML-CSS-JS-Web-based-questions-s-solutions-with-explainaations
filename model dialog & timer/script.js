//
// This script controls a modal popup.
// A modal usually appears over the page and blocks the background until closed.
//

function toggleModal(show) {
  // Find the popup by its ID.
  const modal = document.getElementById('demoModal');

  // classList.toggle('hidden', !show)
  // means:
  // - if show is true, remove the 'hidden' class
  // - if show is false, add the 'hidden' class
  modal.classList.toggle('hidden', !show);
}

function closeOnBackdrop(e) {
  // e is the click event object.
  // If the element clicked was the overlay itself, close the modal.
  if (e.target.id === 'demoModal') toggleModal(false);
}

// This timer runs once after 4 seconds.
// After 4000 milliseconds, the popup opens automatically.
setTimeout(() => toggleModal(true), 4000);

