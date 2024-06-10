const container = document.querySelector(".container");
const renderCard = (singleCard) => {
  const cardDiv = document.createElement("div");
  const cardTitle = document.createElement("h3");
  const cardImg = document.createElement("img");
  const cardInfo = document.createElement("p");

  cardDiv.classList.add("product-card");
  cardImg.src = `https://image.tmdb.org/t/p/w500${singleCard.poster_path}`;
  cardTitle.textContent = singleCard.title;
  cardInfo.textContent = singleCard.overview;

  cardDiv.append(cardTitle, cardImg, cardInfo);
  container.append(cardDiv);
};

export { renderCard };
