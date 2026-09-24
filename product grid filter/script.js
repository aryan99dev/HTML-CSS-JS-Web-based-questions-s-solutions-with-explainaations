//
// This function filters product cards using:
// - text search
// - selected category
//
function filterGrid() {
  // Read the search text typed by the user and convert it to lowercase.
  const query = document.getElementById('pSearch').value.toLowerCase();

  // Read which radio button is selected (all / tech / book).
  const cat = document.querySelector('input[name="pCat"]:checked').value;

  // Loop through every product card.
  document.querySelectorAll('.pCard').forEach(card => {
    // Does the card text include the typed query?
    const titleMatch = card.innerText.toLowerCase().includes(query);

    // Does the card belong to the selected category?
    const catMatch = (cat === 'all' || card.dataset.cat === cat);

    // If both conditions match, show the card.
    // Otherwise hide it.
    card.style.display = (titleMatch && catMatch) ? 'block' : 'none';
  });
}