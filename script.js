document.addEventListener("DOMContentLoaded", () => {
const buttons = document.querySelectorAll(".button");
const cards = document.querySelectorAll(".card");
const bigCards = document.querySelectorAll(".bigCard");
const bigCard4 = document.getElementById("card-4");
const bigCard5 = document.getElementById("card-5");
const bigCard6 = document.getElementById("card-6");
const card1 = document.getElementById("card-1");
const card2 = document.getElementById("card-2");
const card3 = document.getElementById("card-3");
const cardFilm1 = document.getElementById("filmCard-1");
const video = document.querySelector(".videoBackground");
const myTopMovies = document.querySelector(".myTopMovies");


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

const movies = [
  {
    id: "movie-1",
    title: "The Shawshank Redemption",
    year: 1994,
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption",
    url: "https://www.youtube.com/watch?v=6hKaAScLzW",
    image: "/assiets/film photo/TheShawshankRedemption.jpg",
    rating: "8.8/10",
    
  },
  {
    id: "movie-2",
    title: "3 idiots",
    year: 2009,
    description: "À l'université, Farhan et Raju se lient d'amitié avec Rancho en raison de sa vision rafraîchissante. Des années plus tard, un pari leur donne l'occasion de rechercher leur ami de longue date dont l'existence semble plutôt insaisissable.",
    url: "https://www.youtube.com/watch?v=8hP9D6kZ",
    image: "/assiets/film photo/3Idiots.jpg",
    rating: "8,4/10",
  },

  {
    id: "movie-3",
    title: "Slumdog Millionaire",
    year: 2008,
    description: "Un adolescent des bidonvilles de Mumbai devient candidat à l'émission 'Kaun Banega Crorepati?' Lorsqu'il est interrogé sous suspicion de tricherie, il revisite son passé, révélant comment il connaissait toutes les réponses.",
    url: "https://www.youtube.com/watch?v=8hP9D6kZ",
    image: "/assiets/film photo/Slumdog_Millionaire_Poster.webp",
    rating: "8.0/10",
  },
  {
    id: "movie-4",
    title: "Pianist",
    year: 2002,
    description: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues",
    url: "https://www.youtube.com/watch?v=8hP9D6kZ",
    image: "/assiets/film photo/pianist.jpg",
    rating: "8.5/10",
  },
]

// creating cards from list movies!
movies.forEach(movie =>{
  //creating cards container with class cardTopMovies
  const cardTopMovies = document.createElement("div");
  cardTopMovies.className = "cardTopMovies";
  cardTopMovies.id = movie.id;

//creating img and giving src from movie.img

const img = document.createElement("img");
img.classList = "topMoviesImg";
img.src = movie.image;
img.alt = movie.title;

// creating title
const movieTitle = document.createElement("h4");
movieTitle.className = "h4TopMovies";
movieTitle.textContent = movie.title;

//creating description

const movieDescription = document.createElement("p");
movieDescription.className = "topMovieDescrption";
movieDescription.textContent = movie.description;

// creating drating

const movieRating = document.createElement("p")
movieRating.className = "topMovieRating";
movieRating.textContent = movie.rating;

// adding elements to container

cardTopMovies.appendChild(img);
cardTopMovies.appendChild(movieTitle);
cardTopMovies.appendChild(movieDescription);
cardTopMovies.appendChild(movieRating);

// adding movie card to movie card container 

myTopMovies.appendChild(cardTopMovies)

})

//video start on hover  filmCard
cardFilm1.addEventListener("mouseover", () => {
    video.play();
  });

  cardFilm1.addEventListener("mouseout", () => {
    video.pause();
  });
  
  
  
  
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
  
});
