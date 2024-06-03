/* <div class="game-card">
  <div class="game-card-img">
    <img src="./img/2x1_NSwitch_SuperMarioBrosWonder_image1600w.jpg" alt="super mario wonder" />
  </div>
  <div class="game-card-content">
    <div class="info">
      <h3>SUPER MARIO BROS WONDER</h3>
      <p>Aspettati di tutto in questa nuova avventura a scorrimento orizzontale in 2D di Mario!</p>
    </div>
  
    <div class="price">
      <p>59,99</p>
      <span> <img src="./img/icons8-heart-80.png" alt="wishlist-logo" width="20px" height="20px" /></span>
    </div>
  </div>
  </div> */

const cE = (tag) => {
  return document.createElement(tag);
};

const gameCardGen = (obj, wishlistIcon) => {
  const cardDiv = cE("div");
  const cardImgDiv = cE("div");
  const cardImg = cE("img");
  const cardContentDiv = cE("div");
  const infoDiv = cE("div");
  const infoName = cE("h3");
  const infoDescription = cE("p");
  const priceDiv = cE("div");
  const price = cE("p");
  const wishlist = cE("button");

  cardDiv.className = "card";
  cardImgDiv.className = "card-img";
  cardImg.src = obj.img;
  cardContentDiv.className = "card-content";
  infoDiv.className = "info";
  infoName.textContent = obj.name;
  infoDescription.textContent = obj.description;
  priceDiv.className = "price";
  price.textContent = obj.price;
  wishlist.innerHTML = `<img src=${wishlistIcon} alt='Heart icon' width='20' height='20' />`;

  cardDiv.append(cardImgDiv, cardContentDiv);
  cardImgDiv.append(cardImg);
  cardContentDiv.append(infoDiv, priceDiv);
  cardImgDiv.append(cardImg);
  infoDiv.append(infoName, infoDescription);
  priceDiv.append(price, wishlist);
  return cardDiv;
};

export { gameCardGen };

// const cardSectionGen = () => {
//   const wishlistSection = document.createElement("section");

//   wishlistSection.className = "cards-list wishlist-list";

//   return wishlistSection;
// };
