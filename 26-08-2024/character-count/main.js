// function contaCaratteri() {
//   var testo = document.getElementById("testo").value.trim();
//   document.getElementById("contatore").innerText = testo.length;
// }
// document.getElementById("testo").addEventListener("input", contaCaratteri);

//STILIZZATO
function contaCaratteri() {
  let testo = document.getElementById("testo").value.trim();
  let contatore = document.getElementById("contatore");
  let precedente = contatore.innerText;
  contatore.innerText = testo.length;

  if (testo.length > precedente) {
    contatore.classList.add("grow");
    contatore.classList.remove("shrink");
  } else if (testo.length < precedente) {
    contatore.classList.add("shrink");
    contatore.classList.remove("grow");
  }

  setTimeout(function () {
    contatore.classList.remove("grow");
    contatore.classList.remove("shrink");
  }, 200);
}

document.getElementById("testo").addEventListener("input", contaCaratteri);
