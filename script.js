import { developers, movies, questions } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
const buttons = document.querySelectorAll(".button");

const bigCards = document.querySelectorAll(".bigCard");
const bigCard4 = document.getElementById("card-4");
const bigCard5 = document.getElementById("card-5");
const bigCard6 = document.getElementById("card-6");

const cardFilm1 = document.getElementById("filmCard-1");
const video = document.querySelector(".videoBackground");
const video1 = document.querySelector("#videoSveta");
const video2 = document.querySelector("#videoMarko");
const video3 = document.querySelector("#videoSeba");
const myTopMovies = document.querySelector(".myTopMovies");
const cardContainerDev = document.querySelector(".cardContainer");
const olSveta = document.querySelector("#questionsContainer-1");
const olMarko = document.querySelector("#questionsContainer-2");
const olSeba = document.querySelector("#questionsContainer-3");



console.log();


  questions.sveta.forEach(dev1 =>{
    const li = document.createElement("li");
    const details = document.createElement("details");
    details.setAttribute("name" , questions)

    const summary = document.createElement("summary");
    const p = document.createElement("p");
    p.classList = "anwser";
    summary.textContent = dev1.question;
    details.appendChild(summary);
    details.appendChild(p);
    p.textContent = dev1.answer;
    li.appendChild(details);
    olSveta.appendChild(li);

  } )

  questions.marko.forEach(dev2 =>{
    const li = document.createElement("li");
    const details = document.createElement("details");
    details.setAttribute("name" , questions)

    const summary = document.createElement("summary");
    const p = document.createElement("p");
    p.classList = "anwser";
    summary.textContent = dev2.question;
    details.appendChild(summary);
    details.appendChild(p);
    p.textContent = dev2.answer;
    li.appendChild(details);
    olMarko.appendChild(li);

  } )

  questions.marko.forEach(dev3 =>{
    const li = document.createElement("li");
    const details = document.createElement("details");
    details.setAttribute("name" , questions)

    const summary = document.createElement("summary");
    const p = document.createElement("p");
    p.classList = "anwser";
    summary.textContent = dev3.question;
    details.appendChild(summary);
    details.appendChild(p);
    p.textContent = dev3.answer;
    li.appendChild(details);
    olSeba.appendChild(li);

  } )




 

 
  
 
  developers.forEach(developer => {

    //creating card for develpoers
    //creating card for develpoers
    //creating card for develpoers
    const cardDev = document.createElement("div");
    cardDev.classList = "card";
    cardDev.id = developer.id;

    // Creating img
    // Creating img
    // Creating img
    const imgDev = document.createElement("img");
    imgDev.classList = "img";
    imgDev.src = developer.url;

    //creating h3 for names
    //creating h3 for names
    //creating h3 for names
    const h3Dev = document.createElement("h3");
    h3Dev.textContent = developer.name;
    // Creating h4 for job description
    // Creating h4 for job description
    // Creating h4 for job description
    const h4Dev = document.createElement("h4");
    h4Dev.textContent = developer.title;
    // Creationg p tag for description
    // Creationg p tag for description
    // Creationg p tag for description

    const pDev = document.createElement("p");
    pDev.textContent = developer.description;

    cardDev.appendChild(imgDev);
    cardDev.appendChild(h3Dev);
    cardDev.appendChild(h4Dev);
    cardDev.appendChild(pDev);

    cardContainerDev.appendChild(cardDev);
  })

  // adding a classes and id after creating elements
  // adding a classes and id after creating elements
  // adding a classes and id after creating elements

  const cards = document.querySelectorAll(".card");
  const card1 = document.getElementById("card-1");
  const card2 = document.getElementById("card-2");
  const card3 = document.getElementById("card-3");
  console.log(card1, card2, card3);

  // creating cards from list movies!
  // creating cards from list movies!
  // creating cards from list movies!
  movies.forEach(movie => {
    //creating cards container with class cardTopMovies
    //creating cards container with class cardTopMovies
    //creating cards container with class cardTopMovies
    const cardTopMovies = document.createElement("div");
    cardTopMovies.className = "cardTopMovies";
    cardTopMovies.id = movie.id;

    //creating img and giving src from movie.img
    //creating img and giving src from movie.img
    //creating img and giving src from movie.img

    const img = document.createElement("img");
    img.classList = "topMoviesImg";
    img.src = movie.image;
    img.alt = movie.title;

    // creating title
    // creating title
    // creating title
    const movieTitle = document.createElement("h4");
    movieTitle.className = "h4TopMovies";
    movieTitle.textContent = movie.title;

    //creating description
    //creating description
    //creating description

    const movieDescription = document.createElement("p");
    movieDescription.className = "topMovieDescrption";
    movieDescription.textContent = movie.description;

    // creating drating
    // creating drating
    // creating drating

    const movieRating = document.createElement("p")
    movieRating.className = "topMovieRating";
    movieRating.textContent = movie.rating;

    // adding elements to container
    // adding elements to container
    // adding elements to container

    cardTopMovies.appendChild(img);
    cardTopMovies.appendChild(movieTitle);
    cardTopMovies.appendChild(movieDescription);
    cardTopMovies.appendChild(movieRating);

    // adding movie card to movie card container 
    // adding movie card to movie card container 
    // adding movie card to movie card container 

    myTopMovies.appendChild(cardTopMovies)

  })

  //video start on hover  filmCard
  //video start on hover  filmCard
  //video start on hover  filmCard

  bigCard4.addEventListener("mouseover", () => {
    video1.play();
  })
  bigCard4.addEventListener("mouseout", () => {
    video1.pause();
  });
  bigCard5.addEventListener("mouseover", () => {
    video2.play();
  })
  bigCard5.addEventListener("mouseout", () => {
    video2.pause();
  });
  bigCard6.addEventListener("mouseover", () => {
    video3.play();
  })
  bigCard6.addEventListener("mouseout", () => {
    video3.pause();
  });

  cardFilm1.addEventListener("mouseover", () => {
    video.play();
  });

  cardFilm1.addEventListener("mouseout", () => {
    video.pause();
  });




  // when i click on the card add class to display big cards and display:none to small cards.
  // when i click on the card add class to display big cards and display:none to small cards.
  // when i click on the card add class to display big cards and display:none to small cards.

  //remove claass of bigCard
  //remove claass of bigCard
  //remove claass of bigCard
  function removeClass() {
    bigCards.forEach((bigCard) => {
      bigCard.classList.remove("hinge");
      bigCard.classList.add("bigCardA");
    });
  }

  // Small cards display:none
  // Small cards display:none
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
  // end of fonctions that display big cards and display:none small cards.
  // end of fonctions that display big cards and display:none small cards.

  // when i click on button add class to display cards.
  // when i click on button add class to display cards.
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

        });
      });
    });
  }

  //end of adding class function.
  //end of adding class function.
  //end of adding class function.

  //calling functions
  //calling functions
  //calling functions

  RedisplayCards();
  card1.addEventListener("click", () => showCard1());
  card2.addEventListener("click", () => showCard2());
  card3.addEventListener("click", () => showCard3());

});
