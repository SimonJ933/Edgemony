const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function contaCaratteri(testo) {
  const testoTrimmed = testo.trim();
  console.log(`Numero di caratteri (esclusi gli spazi esterni): ${testoTrimmed.length}`);
}

rl.question("Inserisci il testo: ", (input) => {
  contaCaratteri(input);
  rl.close();
});
