const questions = {
    sveta:[
      {
        
        question: "Pouvez-vous vous présenter, nous dire où vous travaillez et quelle est votre position?",
        answer: "Je suis Svetislav Marjanović, originaire de Serbie. Je travaille en tant que Technical Lead et responsable manageur de département chez Levi9.",
      },
      {
        
        question: "Quelles sont vos principales responsabilités dans votre poste actuel",
        answer: "Mes principales responsabilités actuelles incluent la livraison de projets, la conception de solutions techniques, la conception d’architectures ainsi que le support et le développement des membres de l’équipe.",
      },
      {
      
        question: "Quelles technologies et langages de programmation utilisez-vous le plus fréquemment dans votre travail?",
        answer: "Sur le projet actuel, j’utilise AWS, ReactJS, Storybook, NodeJS, Java, SpringBoot et PostgreSQL.",
      },
      {
        
        question: "À quoi ressemble une journée de travail typique pour vous?",
        answer: "Comme nous utilisons la méthodologie agile Scrum, ma journée de travail commence par une réunion « daily », où nous faisons des mises à jour et organisons le travail planifié. Si d’autres réunions Scrum(planification, rétrospective, raffinement, démonstration) sont prévues, nous les abordons en plus du travail de programmation habituel.",
      },
      {
        
        question: "Quels sont les plus grands défis auxquels vous êtes confronté dans votre travail?",
        answer: "Le plus grand défi est de moderniser constamment les projets conformément aux dernières mises à jour, ce qui implique un apprentissage continu, le suivi des tendances, et la formation des équipes pour s’adapter.",
      },
      {
        
        question: "Comment restez-vous à jour avec les dernières technologies et tendances en programmation?",
        answer: "Je suis des articles d’actualité, des magazines spécialisés, des documentations et des publications sur les réseaux sociaux.",
      },
      {
        
        question: "Quelles compétences considérez-vous comme les plus importantes pour réussir dans votre domaine?",
        answer: "Patience, persévérance, désir de perfectionnement, compétences en communication.",
      },
      {
        
        question: "Pouvez-vous décrire un projet sur lequel vous avez travaillé et qui était particulièrement intéressant ou difficile?",
        answer: "Je travaille actuellement sur un projet B2B pour une entreprise mondiale de mode. Basé sur un logiciel que nous développons depuis 4 ans, nous gérons efficacement les commandes, effectuons les paiements pour les vêtements, suivons les analyses et générons des rapports.",
      },
      {
        
        question: "Comment travaillez-vous en équipe et communiquez-vous avec les autres membres de l'équipe ou les clients?",
        answer: "L’équipe est généralement composée d’un mélange de différents niveaux de séniorité, toujours avec un Team Lead principal et un Delivery Manager. La communication se fait formellement via les réunions Scrum et informellement par des appels ad hoc si nécessaire.",
      },
      {
        
        question: "Quel conseil donneriez-vous à quelqu'un qui veut devenir programmeur?",
        answer: "Ne courez pas après l’argent dès le début, mais concentrez-vous sur l’acquisition de connaissances. Les  efforts et le travail porteront leurs  l’apprentissage et de rester toujours engagé dans l’amélioration personnelle.",
      },
    ],
  marko: [
      {
        
        question: "Pouvez-vous vous présenter, nous dire où vous travaillez et quelle est votre position?",
        answer: "Je suis Marko, je travaille chez Rockdata en tant que développeur full-stack.",
      },
      {
        
        question: "Quelles sont vos principales responsabilités dans votre poste actuel",
        answer: "Concevoir des solutions pour les demandes des clients et les réaliser.",
      },
      {
        
        question: "Quelles technologies et langages de programmation utilisez-vous le plus fréquemment dans votre travail?",
        answer: "Azure DevOps, Python (Django), Javascript/Typescript (Angular), HTML et CSS.",
      },
      {
        
        question: "À quoi ressemble une journée de travail typique pour vous?",
        answer: " Choisir le bon outil pour un problème spécifique. Il n'est pas toujours préférable d'utiliser les frameworks les plus modernes et les plus populaires.",
      },
      {
        
        question: "Quels sont les plus grands défis auxquels vous êtes confronté dans votre travail?",
        answer: "Le plus grand défi est de moderniser constamment les projets conformément aux dernières mises à jour, ce qui implique un apprentissage continu, le suivi des tendances, et la formation des équipes pour s’adapter.",
      },
      {
        
        question: "Comment restez-vous à jour avec les dernières technologies et tendances en programmation?",
        answer: " Principalement en lisant la documentation (notes de version), en regardant des vidéos sur YouTube, en lisant des articles et des blogs.",
      },
      {
        
        question: "Quelles compétences considérez-vous comme les plus importantes pour réussir dans votre domaine?",
        answer: "La capacité à définir clairement ce qui doit être fait pour créer une solution ou résoudre un problème. Il arrive souvent que nous commencions à implémenter quelque chose sans avoir complètement compris ce qui doit être fait.",
      },
      {
        
        question: "Pouvez-vous décrire un projet sur lequel vous avez travaillé et qui était particulièrement intéressant ou difficile?",
        answer: "Mon premier projet en solo était assez intéressant et stimulant. Il fallait afficher des stations de recharge pour voitures électriques sur une carte, colorer leurs marqueurs en fonction du niveau de consommation, et ouvrir une fenêtre avec des informations supplémentaires sur la station spécifique en cliquant dessus. Le client avait également besoin de voir les stations en construction. Comme il s'agissait du territoire des Pays-Bas, une grande quantité de données devait être traitée et convertie au format GeoJSON. Pour des raisons de performance, il était également nécessaire de mettre en place un système de mise en cache afin que l'utilisateur n'ait pas à attendre une minute pour une réponse du serveur. L'application était écrite en Django Web framework et son contenu était intégré dans une autre application. Et après quatre ans, tout fonctionne toujours sans problème.",
      },
      {
        
        question: "Comment travaillez-vous en équipe et communiquez-vous avec les autres membres de l'équipe ou les clients?",
        answer: "Le travail en équipe fonctionne de manière à ce qu'il y ait un canal de communication dans l'application Teams pour chaque projet, où se trouvent tous les participants au projet. Avec les clients, en plus des réunions vidéo, la communication se fait principalement par e-mail.",
      },
      {
        
        question: "Quel conseil donneriez-vous à quelqu'un qui veut devenir programmeur?",
        answer: "Beaucoup de persévérance et de dévouement. Se consacrer à la compréhension fondamentale de ce qui doit être fait et de ce que fait le code écrit. Au début, ne pas trop se fier aux solutions toutes faites, mais les implémenter soi-même (par exemple, les validations, les transformations de données, les normalisations) pour une meilleure compréhension. Choisir un langage strictement orienté objet et strict (par exemple, Java).",
      },
    ],
    seba:[
      {
        
        question: "Pouvez-vous vous présenter, nous dire où vous travaillez et quelle est votre position?",
        answer: "Je m'appelle Sebastian Herrera. Je travaille chez Glimpact en tant que développeur Full Stack.",
      },
      {
        
        question: "Je développe des solutions pour répondre aux besoins spécifiques de l'entreprise sur notre plateforme.  En tant que Full Stack, mes tâches couvrent des projets exclusivement front-end, exclusivement back-end ou combinant les deux, du début à la fin.",
      },
      {
        
        question: "Quelles technologies et langages de programmation utilisez-vous le plus fréquemment dans votre travail?",
        answer: "J'utilise TypeScript pour le front-end et le back-end avec Node.js, ainsi que Java pour les back-ends nécessitant une logique plus complexe.",
      },
      {
        
        question: "À quoi ressemble une journée de travail typique pour vous?",
        answer: "Ma journée commence par une réunion de stand-up, où je discute avec mes collègues de ce que j'ai fait la veille et de ce que je prévois de faire dans la journée. Ensuite, je vérifie si des pull requests nécessitent une revue ou si des tests doivent être effectués. Enfin, je consulte ma liste de tâches (TODO) pour décider si je poursuis un projet en cours ou si j'en commence un nouveau. <br> Quels sont les plus grands défis auxquels vous êtes confronté dans votre travail ? Certains jours, je peux être bloqué par un manque d'informations ou par une logique complexe. Cela nécessite de lire beaucoup de documentation et d'essayer différentes approches jusqu'à trouver la solution. Souvent, mes collègues plus expérimentés m'aident sur des sujets complexes, mais lorsqu'ils sont occupés, je dois me débrouiller seul.",
      },
      {
        
        question: "Quels sont les plus grands défis auxquels vous êtes confronté dans votre travail?",
        answer: "  Certains jours, je peux être bloqué par un manque d'informations ou par une logique complexe. Cela   nécessite de lire beaucoup de documentation et d'essayer différentes approches jusqu'à trouver la  solution. Souvent, mes collègues plus expérimentés m'aident sur des sujets complexes, mais lorsqu'ils sont occupés, je dois me débrouiller seul.",
      },
      {
        
        question: "Comment restez-vous à jour avec les dernières technologies et tendances en programmation?",
        answer: "J'utilise daily.dev et je suis abonné à des chaînes YouTube spécialisées dans le développement et la  programmation. En général, avant d’arriver au bureau, je prends le temps de lire des articles ou de  regarder des vidéos sur de nouvelles technologies. Quand une technologie m'intéresse, je fais un projet  personnel pendant mon temps libre. Si elle semble utile pour mon équipe, je la propose, et nous  l'analysons ensemble.",
      },
      {
        
        question: "Quelles compétences considérez-vous comme les plus importantes pour réussir dans votre domaine?",
        answer: " Savoir se débrouiller. Il n'est pas nécessaire d'être le plus technique ou de connaître toutes les   syntaxes par cœur. Ce qui compte, c'est de livrer un projet fonctionnel. L'optimisation et les améliorations viennent après. <br> J'apprends très vite, et si quelque chose me pose problème, je finis toujours par le maîtriser. Les défis complexes me permettent de grandir professionnellement.",
      },
      {
        
        question: "Pouvez-vous décrire un projet sur lequel vous avez travaillé et qui était particulièrement intéressant ou difficile?",
        answer: "Lorsque je travaille avec Java sur des algorithmes complexes, cela peut me prendre beaucoup de temps à réfléchir. Récemment, j'ai dû développer un algorithme pour créer des dossiers à partir d'un texte au format TSV. Ces dossiers, bien qu'écrits parallèlement, peuvent avoir des relations parent-enfant. J'ai dû analyser chaque ligne, valider chaque valeur et m'assurer qu'il n'y avait pas de relations cycliques ou récursives.",
      },
      {
        
        question: "Comment travaillez-vous en équipe et communiquez-vous avec les autres membres de l'équipe ou les clients?",
        answer: "Cela dépend du projet. Si je collabore avec quelqu'un, je suis souvent responsable du back-end ou du front-end, et nous faisons régulièrement des réunions pour rester alignés, notamment sur les endpoints et les réponses API. <br> Si je travaille seul, je communique via Teams en cas de questions. En général, j'ai des référents pour différents types de problèmes : un senior Java pour le back-end, un senior front-end pour le front-end, et le CTO ou les ingénieurs pour les problématiques liées à la logique métier.",
      },
      {
        
        question: "Quel conseil donneriez-vous à quelqu'un qui veut devenir programmeur?",
        answer: " Faites-le par passion, pas juste pour l'argent. C'est un métier très stimulant et flexible si vous aimez ce que vous faites. Personnellement, je n'ai jamais eu un jour où je me suis dit : 'Je n'ai pas envie detravailler.' Gardez aussi une curiosité et une humilité constantes. Il est facile de croire que l'on sait tout, mais la vérité, c'est qu'on ne finit jamais d'apprendre, et un collègue peut toujours avoir  un point de vue ou une solution que vous n'avez pas envisagée.",
      },
    ],
  };

  const developers = [
    {
      id: "card-1",
      name: "Svetislav Marijanovic",
      url: "assiets/photo/IMG-47c5b8c16977ef95253a523bcd010dea-V.jpg",
      title: "Java/Javascript Tech Lead & Department manager at Levi9 Technology Services",
      description: " Un bon ami à moi qui est ingénieur IT Fullstack diplômé de l'université 'Faculty Of Technical Sciences' en Serbie.",
    },
    {
      id: "card-2",
      name: "Marko Vucic",
      url: "assiets/photo/MarkoNekad-removebg-preview.png",
      title: "full-stack chez Synechron",
      description: "Également un bon ami à moi qui a fait sport et éducation physique dans une fac en Serbie, il ne s'est pas retrouvé dedans donc il s'est redirigé vers la programmation. Actuellement employé Fullstack orionnté Back-end.",
    },
    {
      id: "card-3",
      name: "Sebastian Herrera",
      url: "assiets/photo/seba1.webp",
      title: "Full-stack chez Glimpact",
      description: "Mon meilleur ami à Bruxelles, il a fait une formation à BeCode et actuellement il travaille comme fullstack dévelopeur.",
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

  export { developers, movies, questions };