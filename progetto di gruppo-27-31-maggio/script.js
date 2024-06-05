import { games } from "./data/games.js";
import { merch } from "./data/merch.js";
import { gameCardGen } from "./modules/component.js";
import { wishlist } from "./data/wishlist.js";
import { newWishlistItems } from "./data/wishlist.js";
import { categories } from "./data/wishlist.js";

const gamesSection = document.querySelector(".games-list");
const merchSection = document.querySelector(".merch-list");
const wishlistList = document.querySelector(".wishlist-list");
const wishlistAddedIcon = "./img/heart-icon.png";
const wishlistEmptyIcon = "./img/heart-icon2.png";

const btnAdd = document.querySelector(".btn-add");
btnAdd.addEventListener("click", function () {
  //RANDOMIZZIAMO LA CARD
  const randomWishlistItem = newWishlistItems[Math.floor(Math.random() * newWishlistItems.length)];
  const isEqual = wishlist.some((i) => i.id === randomWishlistItem.id);
  if (isEqual) {
    modal.style.display = "block";
  } else {
    btnAdd.insertAdjacentElement("beforebegin", gameCardGen(randomWishlistItem, wishlistAddedIcon));
  }
});
const generateCards = () => {
  games.forEach((singleGameCard) => {
    const gameCard = gameCardGen(singleGameCard, wishlistEmptyIcon);
    gamesSection.append(gameCard);
  });

  merch.forEach((singleMerchCard) => {
    const merchCard = gameCardGen(singleMerchCard, wishlistEmptyIcon);
    merchSection.append(merchCard);
  });

  wishlist.forEach((singleWishlistCard) => {
    const wishlistCard = gameCardGen(singleWishlistCard, wishlistAddedIcon);
    wishlistList.insertAdjacentElement("afterbegin", wishlistCard);
  });
};

window.onload = generateCards;

//COSTRUIAMO LA MODALE CHE CI DA L'ERRORE SE UNA CARTA E' GIA' PRESENTE NELLA WISHLIST
const modal = document.getElementById("myModal");
const modalClose = document.querySelector(".modal-close");

modalClose.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//CREIAMO DEI BOTTONI PER FILTRARE LE CARDS IN BASE ALLE SEZIONE SCELTA
const btnFilterGames = document.querySelector(".btn-filtered-games");
const btnFilterMerch = document.querySelector(".btn-filtered-merch");

const filteredCategories = (category) => {
  wishlistList.innerHTML = "";

  const wishlistFiltered = wishlist.filter((singleWishlistCard) => singleWishlistCard.category === category);
  wishlistFiltered.forEach((singleFilteredCard) => {
    const filteredCardEl = gameCardGen(singleFilteredCard, wishlistAddedIcon);
    wishlistList.insertAdjacentElement("afterbegin", filteredCardEl);
  });
};

btnFilterGames.addEventListener("click", () => filteredCategories("games"));
btnFilterMerch.addEventListener("click", () => filteredCategories("merch"));

//CREIAMO LA CARD "TUTTI"
btnUnfiltered.addEventListener("click", () => {
  wishlistList.innerHTML = "";
  wishlist.forEach((singleWishlistCard) => {
    const wishlistCard = gameCardGen(singleWishlistCard, wishlistAddedIcon);
    wishlistList.insertAdjacentElement("afterbegin", wishlistCard);
  });
});
