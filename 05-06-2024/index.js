// Esercizio 1: manipoliamo il dom e sfruttiamo l'event bubbling la propagazione degli eventi:

const divParent = document.querySelector(".container");
const buttonOne = document.querySelector(".button-one");
const buttonTwo = document.querySelector(".button-two");

buttonOne.addEventListener("click", () => {
  console.log("sono il button one");
});

buttonTwo.addEventListener("click", () => {
  console.log("sono il button two");
});

divParent.addEventListener("click", () => {
  console.log("EVENT TARGET", event.target);
});

// Esercizio 2: provate a creare una funzione globale che logga il this, chiamare questa funzione al click e provate a leggere il contesto di event.target

const IdCardSimone = {
  name: "Simone",
  age: "30",
  birthday: "17-07-1993",
  place: "Mussomeli",
  getIdInfo: infoName,
};

const IdCardLeonardo = {
  name: "Leonardo",
  age: "30",
  birthday: "08-10-1962",
  place: "Cosenza",
  getIdInfo: infoName,
};

function infoName() {
  console.log("INFO", this);
}

IdCardSimone.getIdInfo();

// Utilizzo del metodo .call() che chiama la funzione con il contesto dichiarato a parametro
// quindi il this si riferirà a IdCardLeonardo in questo caso
infoName.call(IdCardLeonardo);

// proviamo a creare una modale che verrà creata al click di un button messo a DOM, dentro questa modale monteremo 3 elementi cliccabili, 2 button "YES" / "NO" che al click faranno un semplice console log, e un bottone close per chiudere la modale
// inseriamo pure un bel setTimeout e fate chiudere la modale ad ogni modo dopo 5000ms
// vogliamo mostrare il timer dei 5 secondi prima della chiusura della modale?
const modal = document.getElementById("myModal");
const btnAdd = document.querySelector(".button-add");
const btnClose = document.querySelector(".close");
const btnYes = document.querySelector(".button-yes");
const btnDecline = document.querySelector(".button-decline");
const timerElement = document.querySelector(".timer");
let countdown;

btnAdd.onclick = function () {
  modal.style.display = "block";
  let timeLeft = 5;
  timerElement.textContent = timeLeft;
  countdown = setInterval(function () {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(countdown);
    }
    if (timeLeft <= 0) {
      clearInterval(countdown);
      modal.style.display = "none";
    }
  }, 1000);
};

btnClose.onclick = function () {
  modal.style.display = "none";
  clearInterval(countdown);
};

btnYes.onclick = function () {
  console.log("sono il bottone YES dentro la modale");
  modal.style.display = "none";
};

btnDecline.onclick = function () {
  console.log("sono il bottone DECLINE dentro la modale");
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
