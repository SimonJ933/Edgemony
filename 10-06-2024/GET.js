// Esercizio 1: Basandoci sulla lezione del giorno, convertiamo i nostri fetch/then con una funzione Async/Await riutilizzabile per più endpoint
// Esercizio 2 : Impaginamento
import { API_KEY } from "../07-06-2024/keys.js";
import { renderCard } from "./renderCard.js";
const containerEl = document.querySelector(".container");

const BASE_URL = "https://api.themoviedb.org/3/";
const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};
export let page = 1;

const GET = async (page) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, options);
  const data = await response.json();

  return data;
};

const fetchData = async (page) => {
  const moviesData = await GET(page);

  renderList(moviesData, containerEl);
};

const renderList = (moviesData) => {
  moviesData.results.forEach((singleCard) => {
    renderCard(singleCard);
  });
};
fetchData(page);

const btnSearch = document.querySelector(".btn-search");
const btnNext = document.querySelector(".btn-next");
const btnBack = document.querySelector(".btn-back");
const btnPages = document.querySelector(".btn-page");

btnPages.addEventListener("click", function (e) {
  if (e.target === btnNext) {
    page++;
  }
  if (e.target === btnBack) {
    page--;
  }
  containerEl.innerHTML = "";
  fetchData(page);
});

export { GET, fetchData, renderList };
