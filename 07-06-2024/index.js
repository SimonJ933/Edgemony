// Esercizio 1: Effettuiamo la chiamata all'API di MovieDB e stampiamo a DOM le card dei movies ottenuti all'endpoint
// Esercizio 2: Inseriamo un catch a fine catena then per gestire eventuali errori
import { API_KEY } from "./keys.js";

const container = document.querySelector(".container");

const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};

fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", options)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data.results);
    container.innerHTML = "";

    data.results.forEach((singleCard) => {
      // CREAZIONE DELLE CARD DI TUTTA LA LISTA
      const cardDiv = document.createElement("div");
      const cardImg = document.createElement("img");
      const cardTitle = document.createElement("h3");

      cardDiv.classList.add("product-card");
      cardImg.src = `https://image.tmdb.org/t/p/w500${singleCard.poster_path}`;
      cardTitle.textContent = singleCard.title;

      cardDiv.append(cardTitle, cardImg);
      container.append(cardDiv);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// Esercizio 3 (Opzionale): Proviamo a filtrare i risultati con una searchBar.
const search = document.querySelector(".input-text");
const btnSearch = document.querySelector(".btn-search");

btnSearch.addEventListener("click", function () {
  const container = document.querySelector(".container");
  const options = {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  };
  fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", options)
    .then((res) => res.json())
    .then((data) => {
      container.innerHTML = "";
      data.results.forEach((singleCard) => {
        if (singleCard.title.toLowerCase().includes(search.value.toLowerCase())) {
          const cardDiv = document.createElement("div");
          const cardImg = document.createElement("img");
          const cardTitle = document.createElement("h3");

          cardDiv.classList.add("product-card");
          cardImg.src = `https://image.tmdb.org/t/p/w500${singleCard.poster_path}`;
          cardTitle.textContent = singleCard.title;

          cardDiv.append(cardTitle, cardImg);
          container.append(cardDiv);
        }
      });
    });
});

// Esercizio 4 (Opzionale): L'oggetto response, ci da a disposizione il valore page, proviamo a paginare! la documentazione ci da qualche suggerimento.
const BASE_URL = "https://api.themoviedb.org/3/movie/popular?";
const categoryEndpoint = "page=";
const btnPage2 = document.querySelector(".btn-two");
fetch(BASE_URL + categoryEndpoint + 2, options)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.results);

    btnPage2.addEventListener("click", function () {
      container.innerHTML = "";

      data.results.forEach((singleCard) => {
        const cardDiv = document.createElement("div");
        const cardImg = document.createElement("img");
        const cardTitle = document.createElement("h3");

        cardDiv.classList.add("product-card");
        cardImg.src = `https://image.tmdb.org/t/p/w500${singleCard.poster_path}`;
        cardTitle.textContent = singleCard.title;

        cardDiv.append(cardTitle, cardImg);
        container.append(cardDiv);
      });
    });
  });
const btnPage3 = document.querySelector(".btn-three");

fetch(BASE_URL + categoryEndpoint + 3, options)
  .then((res) => res.json())
  .then((data) => {
    btnPage3.addEventListener("click", function () {
      container.innerHTML = "";

      data.results.forEach((singleCard) => {
        const cardDiv = document.createElement("div");
        const cardImg = document.createElement("img");
        const cardTitle = document.createElement("h3");

        cardDiv.classList.add("product-card");
        cardImg.src = `https://image.tmdb.org/t/p/w500${singleCard.poster_path}`;
        cardTitle.textContent = singleCard.title;

        cardDiv.append(cardTitle, cardImg);
        container.append(cardDiv);
      });
    });
  });

const btnPage4 = document.querySelector(".btn-four");
fetch(BASE_URL + categoryEndpoint + 4, options)
  .then((res) => res.json())
  .then((data) => {
    btnPage4.addEventListener("click", function () {
      container.innerHTML = "";

      data.results.forEach((singleCard) => {
        const cardDiv = document.createElement("div");
        const cardImg = document.createElement("img");
        const cardTitle = document.createElement("h3");

        cardDiv.classList.add("product-card");
        cardImg.src = `https://image.tmdb.org/t/p/w500${singleCard.poster_path}`;
        cardTitle.textContent = singleCard.title;

        cardDiv.append(cardTitle, cardImg);
        container.append(cardDiv);
      });
    });
  });
