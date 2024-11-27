
function showCard(cardId) {
    // Sakrij sve kartice
    const allCards = document.querySelectorAll('.bigCard, .card');
    allCards.forEach(card => {
      card.style.display = 'none';
    });
  
    // Prikaži samo karticu sa prosleđenim ID-jem
    const selectedCard = document.getElementById(cardId);
    if (selectedCard) {
      selectedCard.style.display = 'flex'; // Koristimo "flex" za `bigCard`
    }
  }
  
  // Dodavanje događaja za kartice
  document.getElementById('card-1').addEventListener('click', () => showCard('card-4'));
  document.getElementById('card-2').addEventListener('click', () => showCard('card-5'));
  document.getElementById('card-3').addEventListener('click', () => showCard('card-6'));