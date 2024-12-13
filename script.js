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
  const video1 = document.querySelector(".video");
  const video2 = document.querySelector("#videoMarko");
  const video3 = document.querySelector("#videoSeba");
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
      image: "assiets/film photo/TheShawshankRedemption.jpg",
      rating: "8.8/10",

    },
    {
      id: "movie-2",
      title: "3 idiots",
      year: 2009,
      description: "À l'université, Farhan et Raju se lient d'amitié avec Rancho en raison de sa vision rafraîchissante. Des années plus tard, un pari leur donne l'occasion de rechercher leur ami de longue date dont l'existence semble plutôt insaisissable.",
      url: "https://www.youtube.com/watch?v=8hP9D6kZ",
      image: "assiets/film photo/3Idiots.jpg",
      rating: "8,4/10",
    },

    {
      id: "movie-3",
      title: "Slumdog Millionaire",
      year: 2008,
      description: "Un adolescent des bidonvilles de Mumbai devient candidat à l'émission 'Kaun Banega Crorepati?' Lorsqu'il est interrogé sous suspicion de tricherie, il revisite son passé, révélant comment il connaissait toutes les réponses.",
      url: "https://www.youtube.com/watch?v=8hP9D6kZ",
      image: "assiets/film photo/Slumdog_Millionaire_Poster.webp",
      rating: "8.0/10",
    },
    {
      id: "movie-4",
      title: "Pianist",
      year: 2002,
      description: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues",
      url: "https://www.youtube.com/watch?v=8hP9D6kZ",
      image: "assiets/film photo/pianist.jpg",
      rating: "8.5/10",
    },
    {
      id: "movie-5",
      title: "The Sixth Sense",
      year: 1999,
      description: "Un garçon qui communique avec les esprits cherche l'aide d'un psychologue pour enfants découragé.",
      url: "https://www.youtube.com/watch?v=VG9AGf66tXM",
      image: "assiets/film photo/TheSixthSense.webp",
      rating: "8.1/10",
    },
    {
      id: "movie-6",
      title: "Shutter Island",
      year: 2010,
      description: "En 1954, un marshal américain enquête sur la disparition d'un meurtrier qui s'est échappé d'un hôpital psychiatrique pour criminels.",
      url: "https://www.youtube.com/watch?v=5iaYLCiq5RM",
      image: "assiets/film photo/ShutterIsland.jpg",
      rating: "8.2/10",
    },
    {
      id: "movie-14",
      title: "The Salesman",
      year: 2016,
      description: "Un couple iranien est contraint de quitter son appartement en raison de travaux dangereux sur leur bâtiment. Un incident lié à l'ancien locataire va bouleverser leur vie.",
      url: "https://www.youtube.com/watch?v=rpYgB1l5u8k",
      image: "assiets/film photo/TheSalesman.jpg",
      rating: "7.8/10",
    },
    {
      id: "movie-7",
      title: "The Pursuit of Happyness",
      year: 2006,
      description: "Un vendeur en difficulté prend la garde de son fils alors qu'il est sur le point de commencer une entreprise professionnelle qui change la vie.",
      url: "https://www.youtube.com/watch?v=89Kq8SDyvfg",
      image: "assiets/film photo/ThePursuitOfHappyness.jpg",
      rating: "8.0/10",
    },
    {
      id: "movie-8",
      title: "Seven Pounds",
      year: 2008,
      description: "Un homme avec un secret fatal entreprend un voyage extraordinaire de rédemption en changeant à jamais la vie de sept étrangers.",
      url: "https://www.youtube.com/watch?v=kgfl49Nw1j0",
      image: "assiets/film photo/SevenPounds.jpg",
      rating: "7.6/10",
    },
    {
      id: "movie-9",
      title: "Forrest Gump",
      year: 1994,
      description: "Les présidences de Kennedy et Johnson, la guerre du Vietnam, le scandale du Watergate et d'autres événements historiques se déroulent du point de vue d'un homme de l'Alabama avec un QI de 75.",
      url: "https://www.youtube.com/watch?v=bLvqoHBptjg",
      image: "assiets/film photo/ForrestGump.webp",
      rating: "8.8/10",
    },
    {
      id: "movie-10",
      title: "The Green Mile",
      year: 1999,
      description: "La vie des gardiens du couloir de la mort est affectée par l'un de leurs détenus : un homme noir accusé de meurtre et de viol d'enfants, mais qui possède un don mystérieux.",
      url: "https://www.youtube.com/watch?v=Ki4haFrqSrw",
      image: "assiets/film photo/TheGreenMile.jpg",
      rating: "8.6/10",
    },
    {
      id: "movie-16",
      title: "Capernaum",
      year: 2018,
      description: "Un garçon libanais poursuit ses parents pour le 'crime' de lui avoir donné la vie. Le film suit son parcours alors qu'il fuit ses parents négligents et survit dans les rues.",
      url: "https://www.youtube.com/watch?v=ULUo0048xZE",
      image: "assiets/film photo/Capernaum.jpg",
      rating: "8.4/10",
    },
    {
      id: "movie-11",
      title: "12 Years a Slave",
      year: 2013,
      description: "Basé sur une histoire vraie, ce film raconte la lutte de Solomon Northup, un homme noir libre du nord de l'État de New York, qui est kidnappé et vendu en esclavage.",
      url: "https://www.youtube.com/watch?v=z02Ie8wKKRg",
      image: "assiets/film photo/12YearsASlave.jpg",
      rating: "8.1/10",
    },
    {
      id: "movie-12",
      title: "City of God",
      year: 2002,
      description: "L'histoire de la croissance du crime organisé dans les favelas de Rio de Janeiro, vue à travers les yeux d'un jeune photographe.",
      url: "https://www.youtube.com/watch?v=dcUOO4Itgmw",
      image: "assiets/film photo/CityOfGod.jpg",
      rating: "8.6/10",
    },
    {
      id: "movie-13",
      title: "A Separation",
      year: 2011,
      description: "Un couple iranien se sépare, mais les complications surviennent lorsqu'ils se disputent la garde de leur fille et les soins du père malade.",
      url: "https://www.youtube.com/watch?v=58Onuy5USTc",
      image: "assiets/film photo/ASeparation.jpg",
      rating: "8.3/10",
    },
    {
      id: "movie-15",
      title: "Ghajini",
      year: 2008,
      description: "Un homme souffrant d'amnésie à court terme utilise des notes et des tatouages pour traquer l'homme qu'il pense être responsable de la mort de sa bien-aimée.",
      url: "https://www.youtube.com/watch?v=D7rjLQuW2nY",
      image: "assiets/film photo/Ghajini.jpg",
      rating: "7.3/10",
    },




  ];

  // creating cards from list movies!
  movies.forEach(movie => {
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

  card1.addEventListener("mouseover", () => {
    video1.play();
  })
  card1.addEventListener("mouseout", () => {
    video1.pause();
  });
  card2.addEventListener("mouseover", () => {
    video2.play();
  })
  card2.addEventListener("mouseout", () => {
    video2.pause();
  });
  card3.addEventListener("mouseover", () => {
    video3.play();
  })
  card3.addEventListener("mouseout", () => {
    video3.pause();
  });

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
