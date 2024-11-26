function expandCard(card) {
    card.classList.add('expanded');
    document.getElementById('modal-overlay').style.display = 'block';
}

function shrinkCard() {
    const expandedCard = document.querySelector('.card.expanded');
    if (expandedCard) {
        expandedCard.classList.remove('expanded');
    }
    document.getElementById('modal-overlay').style.display = 'none';
}

const letters = document.querySelectorAll('.animated-text span');
letters.forEach((letter, index) => {
  letter.style.animationDelay = `${index * 0.1}s`;
});