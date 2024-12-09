const buttons = document.querySelectorAll(".button");
const cards = document.querySelectorAll(".card");
const bigCards = document.querySelectorAll(".bigCard");
const bigCard4 = document.getElementById("card-4");
const bigCard5 = document.getElementById("card-5");
const bigCard6 = document.getElementById("card-6");
const card1 = document.getElementById("card-1");
const card2 = document.getElementById("card-2");
const card3 = document.getElementById("card-3");


const developers = [
  {
    id: 1,
    name: "Svetislav Marijanovic",
    url: "assiets/photo/IMG-47c5b8c16977ef95253a523bcd010dea-V.jpg",
    title: "Java/Javascript Tech Lead & Department manager at Levi9 Technology Services",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio rerum facere porro tempora deleniti perferendis eius cum, officia distinctio vero corrupti dolor asperiores hic accusantium repellat explicabo alias fuga beatae.",
  },
  {
    id: 2,
    name: "Marko Vucic",
    url: "assiets/photo/marko.jpg",
    title: "Full Stack Developer at Some Tech Company",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio rerum facere porro tempora deleniti perferendis eius cum, officia distinctio vero corrupti dolor asperiores hic accusantium repellat explicabo alias fuga beatae.",
  },
  {
    id: 3,
    name: "Sebastian Herrera",
    url: "assiets/photo/sebastian.jpg",
    title: "Frontend Engineer at Some Other Company",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio rerum facere porro tempora deleniti perferendis eius cum, officia distinctio vero corrupti dolor asperiores hic accusantium repellat explicabo alias fuga beatae.",
  },
];




// when i click on the card add class to display big cards and display:none to small cards.
//remove claass of bigCard
function removeClass() {
  bigCards.forEach((bigCard) => {
    bigCard.classList.remove("hinge");
    bigCard.classList.add("bigCardA");
  });
}

// Small cards display:none
function cardsNone() {
  cards.forEach((card) => {
    card.style.display = "none";
  });
}

function showCard1() {
  bigCard4.style.display = "flex";
  removeClass();
  cardsNone();
}
function showCard2() {
  bigCard5.style.display = "flex";
  removeClass();
  cardsNone();
}

function showCard3() {
  bigCard6.style.display = "flex";
  removeClass();
  cardsNone();
}

// end of fonctions that display big cards and display:none small cards.

// when i click on button add class to display cards.
function RedisplayCards() {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cards.forEach((card) => {
        card.style.display = "inline";
      });
      bigCards.forEach((bigCard) => {
        bigCard.style.display = "none";
      });
      bigCards.forEach((bigCard) => {
        bigCard.classList.remove("bigCardA");
        void bigCard.offsetWidth;
      });
    });
  });
}

//end of adding class function.

//calling functions

RedisplayCards();
card1.addEventListener("click", () => showCard1());
card2.addEventListener("click", () => showCard2());
card3.addEventListener("click", () => showCard3());

