// Esercizio 1: esercitiamoci con fetch , effettuiamo una chiamata a https://fakestoreapi.com/products, sfruttando i .then() stampiamo a console i dati ottenuti comprensibili per js

// fetch("https://fakestoreapi.com/products")
//   .then((res) => {
//     return res.json();
//   })
//   .then((resData) => {
//     console.log(resData);
//   });

// // Esercizio 2: proviamo a stampare i dati ottenuti sul DOM, va bene anche una card o un titolo, comunque che sia qualcosa ottenuta dalla risposta della nostra chiamata
// // Esercizio 3 (opzionale): stampiamo tutti i prodotti con delle card, sbizzarritevi con lo stile

// const container = document.querySelector(".container");

// fetch("https://fakestoreapi.com/products").then((res) => {
//   return res.json();
// });
//   .then((data) => {
//     //CREAZIONE DI UNA SOLA CARD
//     const cardDiv = document.createElement("div");
//     const cardImg = document.createElement("img");
//     const cardTitle = document.createElement("h3");
//     const cardDescription = document.createElement("p");

//  Aggiunta classi e contenuti
//     cardDiv.classList.add("product-card");
//     cardImg.src = data[0].image;
//     cardTitle.textContent = data[0].title;
//     cardDescription.textContent = data[0].description;
//     cardDiv.append(cardTitle, cardImg, cardDescription);
//     container.append(cardDiv);
//     console.log(data);
//   });
//   .then((data) => {
//     data.forEach((singleCard) => {
//       // CREAZIONE DELLE CARD DI TUTTA LA LISTA
//       const cardDiv = document.createElement("div");
//       const cardImg = document.createElement("img");
//       const cardTitle = document.createElement("h3");
//       const cardDescription = document.createElement("p");
//       const cardPrice = document.createElement("p");

//       cardDiv.classList.add("product-card");
//       cardImg.src = singleCard.image;
//       cardTitle.textContent = singleCard.title;
//       cardDescription.textContent = singleCard.description;
//       cardPrice.textContent = `${"Price :"} ${singleCard.price} ${"$"} `;

//       cardDiv.append(cardTitle, cardImg, cardDescription, cardPrice);

//       container.append(cardDiv);
//     });
//   });

// Esercizio 4 (opzionale - avanzato): che ne dite di fare un button al centro della pagina che al click vi carica i prodotti a DOM?

document.getElementById("load-products").addEventListener("click", function () {
  const container = document.querySelector("#product-container");

  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      container.innerHTML = ""; // Pulisci il contenitore

      data.forEach((singleCard) => {
        // CREAZIONE DELLE CARD DI TUTTA LA LISTA
        const cardDiv = document.createElement("div");
        const cardImg = document.createElement("img");
        const cardTitle = document.createElement("h3");
        const cardDescription = document.createElement("p");
        const cardPrice = document.createElement("p");

        cardDiv.classList.add("product-card");
        cardImg.src = singleCard.image;
        cardTitle.textContent = singleCard.title;
        cardDescription.textContent = singleCard.description;
        cardPrice.textContent = `Price: ${singleCard.price} $`;

        cardDiv.append(cardTitle, cardImg, cardDescription, cardPrice);
        container.append(cardDiv);
      });
    });
});
