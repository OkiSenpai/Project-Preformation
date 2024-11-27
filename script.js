const buttons = document.querySelectorAll(".button");
const cards = document.querySelectorAll(".card");
const bigCards = document.querySelectorAll(".bigCard");


// function RedisplayCards() {
//   button.addEventListener("click", () =>{
//     card[0].style.display = "inline";
//     card[1].style.display = "inline";
//     card[2].style.display = "inline";
//   })
// }

function RedisplayCards() {
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      cards.forEach(card => {
        card.style.display = "inline";
      })
      bigCards.forEach(bigCard => {
        bigCard.style.display = "none";
      })
    })
  })

}



function showCard(cardId) {

  const allCards = document.querySelectorAll('.bigCard, .card');
  allCards.forEach(card => {
    card.style.display = 'none';
  });


  const selectedCard = document.getElementById(cardId);
  if (selectedCard) {
    selectedCard.style.display = 'flex';
  }
}



RedisplayCards();
document.getElementById('card-1').addEventListener('click', () => showCard('card-4'));
document.getElementById('card-2').addEventListener('click', () => showCard('card-5'));
document.getElementById('card-3').addEventListener('click', () => showCard('card-6'));