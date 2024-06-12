// Esercizio 1: Creiamo il nostro metodo POST e aggiungiamo dei dati alla API, rispettando ciò che la documentazione ci dice, salviamoci l'ID* che l'api ci fornirà ai dati che avremo mandato

const POST = async (product) => {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  const data = await res.json();
  console.log(data);
  return data.id;
};

// Esercizio 2: Vogliamo provare ad interagire con il DOM? Creiamo un form come abbiamo fatto durante la lezione con i vari campi input necessari per compilare il nostro oggetto da mandare con la POST alla API
const inputTitle = document.querySelector(".title");
const inputPrice = document.querySelector(".price");
const inputDescription = document.querySelector(".description");
const inputCategory = document.querySelector(".category-id");
const inputImages = document.querySelector(".images");
const btnSend = document.querySelector(".button-send");

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
  console.log(POST(objSendForm));
});

// Esercizio 3: Creiamo una funzione DELETE che passato un ID cancella un oggetto esistente nella API
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

// Esercizio 4(Opzionale): Creiamo un campo input + button specifico per la DELETE, inseriamo l'id all'interno del campo input e al click del button cancellerà l'id che abbiamo specificato e ci darà un feedback visivo sul dom del tipo "oggetto rimosso" e con un setTimeout dopo qualche secondo togliamo la scritta "oggetto rimosso"

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
