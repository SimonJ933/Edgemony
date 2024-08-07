import { errorHandler } from "./errorHandler.js";

// const POST = async (product) => {
//   const res = await fetch(`https://api.escuelajs.co/api/v1/products`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(product),
//   });
//   const data = await res.json();
//   console.log(data);
//   return data.id;
// };

let inputTitle = document.querySelector(".title");
let inputPrice = document.querySelector(".price");
let inputDescription = document.querySelector(".description");
let inputCategory = document.querySelector(".category-id");
let inputImages = document.querySelector(".images");
const btnSend = document.querySelector(".button-send");
const mainContainerEl = document.querySelector(".main-container");
const inputSearch = document.querySelector(".search-id");
const btnSearchId = document.querySelector(".btn-id");

btnSend.addEventListener("click", (e) => {
  e.preventDefault();
  const objSendForm = {
    title: inputTitle.value,
    price: inputPrice.value,
    description: inputDescription.value,
    categoryId: inputCategory.value,
    images: [inputImages.value],
  };

  POST(objSendForm);
  // console.log(POST(objSendForm));
});

const BASE_URL = "https://api.escuelajs.co/";
const productEndpoint = "api/v1/products";
const deleteById = async (id) => {
  const res = await fetch(`${BASE_URL}${productEndpoint}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  console.log("deleted", data);
  return data;
};

const deleteInput = document.querySelector(".delete");
const btnDelete = document.querySelector(".button-delete");

btnDelete.addEventListener("click", async (e) => {
  e.preventDefault();
  const productId = deleteInput.value;
  if (!productId) {
    // console.log("deleted", productId);
    alert(`QUESTO ID NON E' CORRETTO`);
    return;
  }
  await deleteById(productId);
});

//Esercizio 1: Abbiamo visto oggi la possibilità di utilizzare altri due metodi http ovvero PUT  e PATCH , sempre sulla base della fantastica api: https://api.escuelajs.co/ dopo aver creato un prodotto con il metodo POST modifichiamolo in parte o interamente, verificate che effettivamente il nostro prodotto è stato aggiornato sul database facendo un getById dello stesso

const PUT = async (id, product) => {
  const res = await fetch(`${BASE_URL}${productEndpoint}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  const data = await res.json();
  return data;
};

// const modifiedProduct = {
//   title: "CR7",
//   price: 250,
//   description: "SIUUUU",
//   categoryId: 1,
//   images: ["https://preview.redd.it/9qxdemi3df911.jpg?auto=webp&s=547f87b10bcdf540f68afba0e420302fce8dd26d"],
// };

// const editedProduct = async (id, product) => {
//   console.log(await PUT(id, product));
// };
// editedProduct(1, modifiedProduct);

// USIAMO IL METODO PATCH

// const PATCH = async (id, product) => {
//   const res = await fetch(`${BASE_URL}${productEndpoint}/${id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(product),
//   });
//   const data = await res.json();
//   return data;
// };

// const modifiedProduct = {
//     price: 250,
//      categoryId: 1,
//   images: ["https://preview.redd.it/9qxdemi3df911.jpg?auto=webp&s=547f87b10bcdf540f68afba0e420302fce8dd26d"],
// };

// const editedProduct = async (id, product) => {
//   console.log(await PUT(id, product));
// };
// editedProduct(1, modifiedProduct);

// Esercizio 3: Gestiamo gli eventuali errori per esempio dentro la POST  come abbiamo visto insieme sfruttando trycatch statement, va benissimo un errore in console log customizzato, l'importante è che passi dal catch!
// Esercizio 4(opzionale): Proprio come abbiamo fatto insieme, perchè non proviamo a mostrare a DOM gli errori specifici? tipo se manca il title etc?
const POST = async (product) => {
  try {
    const res = await fetch(`${BASE_URL}${productEndpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await res.json();

    // console.log(data);

    if (data.error) {
      if (product.categoryId === 0) {
        data.message.push("category must be a positive number");
      }
      console.log(data);
      throw data;
    }

    if (product.categoryId === 0) {
      throw {
        message: ["category must be a positive number"],
      };
    }

    mainContainerEl.innerHTML = "";
    return data.id;
  } catch (err) {
    document.getElementById("container").innerHTML = err.message;
  }
};

// Esercizio 5  creiamo un campo input per selezionare un prodotto con un ID esistente, al click del button search, compiliamo il form con i dati del prodotto trovato e modifichiamoli, al click di send verrà eseguito il metodo PUT che aggiornerà proprio quel prodotto

const GET = async (id) => {
  const res = await fetch(`${BASE_URL}${productEndpoint}/${id}`, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  });
  const data = await res.json();

  return data;
};

// console.log(await GET(138));
let id = "";
const updateProduct = {};

btnSearchId.addEventListener("click", async (e) => {
  e.preventDefault();
  id = inputSearch.value;
  // console.log(id);
  const result = await GET(id);
  // console.log(result);
  inputTitle.value = result.title;
  inputPrice.value = result.price;
  inputDescription.value = result.description;
  inputCategory.value = result.category.id;
  inputImages.value = result.images.join("").replace(/[\[\]"]/g, "");
});

btnSend.addEventListener("click", async (e) => {
  e.preventDefault();
  updateProduct.title = inputTitle.value;
  updateProduct.price = inputPrice.value;
  updateProduct.description = inputDescription.value;
  updateProduct.categoryId = inputCategory.value;
  updateProduct.images = [inputImages.value];

  const editedProd = await PUT(id, updateProduct);
  console.log("Product updated:", editedProd);
});
