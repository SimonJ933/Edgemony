/*

Rifacciamo l'esercizio del quiz di ieri in cui chiediamo all'utente di rispondere a domande a risposta multipla, in particolare però:
- Raccogliamo tutte le risposte date dall'utente anche dentro un array "risposte";
- Quando diamo il risultato finale, mostriamo anche tutte le risposte date dall'utente dentro un solo console.log e dentro mettiamo anche la lunghezza del nostro array

Raccogliamo tramite prompt (eseguito tre volte) 3 parole dall'utente, per ogni parola ricevuta mostriamo in console "vocale" o "consonante" 
in base alla prima lettera. Usiamo un solo console.log per ogni parola sfruttando la potenzialità dell'operatore ternario.

--- 

Data una parola stampiamo in console la parola al rovescio. 
Per farlo prima usiamo il metodo split delle stringhe che trasforma una stringa in array e poi controlliamo se esiste un metodo per invertire gli elementi... 

```js 

constr string = prompt('...');

// controlliamo se è una stringa valida prima!

const array = string.split()

```

*/


//QUIZZONE
const Useranswer = []
let score = 0;
const answer1 = prompt(`Chi ha vinto più Scudetti in Italia?\n Milan,Roma,Inter,Juventus`);
const answer2 = prompt('Chi ha inventanto il Moonwalk?\n Pippo Franco, Michael Jackson, Elvis, Ezio Greggio')
const answer3 = prompt('Chi è il giocatore più costoso del moondo?\n Ronaldo,Messi,Mbappe,Bellingham')
Useranswer.push(answer1, answer2, answer3);

switch(answer1) {
    case 'juventus':
        score += 3;
        break;
        case 'inter':
            case 'roma':
                case 'milan':
                   score = -1;
                   break;
                    default : alert('Devi rispondere con una delle quattro opzioni date');
                    
}

switch(answer2) {
    case 'michael jackson':
        score += 3;
        break;
        case 'pippo franco':
            case 'ezio greggio':
                case 'elvis':
                   score = -1;
                              
}

switch(answer3) {
    case 'mbappe':
        score += 3;
        break;
        case 'messi':
            case 'ronaldp':
                case 'bellingham':
                   score = -1;
            
}

alert (`il tuo punteggio complessivo è ${score}`);
if (score === 9){alert (`SEI TROPPO MA TROPPO FORTE! MIO PADRE!`)};
if (score < 6){alert ("PENZOLI ! RITENTA !")};

console.log(`il tuo punteggio è ${score}.
${Useranswer}
Hai riposto a ${Useranswer.length}`

)


//3 PAROLE

const word1 = prompt('Inserisci parola');
const word2 = prompt('Inserisci parola');
const word3 = prompt('Inserisci parola');
const vowels = "aeiou"

let validInput = vowels.includes(word1[0]);

let isVowel = (validInput) ? 'vocale' : 'consonante';
console.log(isVowel)

validInput = vowels.includes(word2[0]);
isVowel = (validInput) ? 'vocale' : 'consonante';
console.log(isVowel)

validInput = vowels.includes(word3[0]);
isVowel = (validInput) ? 'vocale' : 'consonante';
console.log(isVowel)


//PAROLA AL CONTRARIO
const str = "ti piace o biscott e mangiatill ja";
const words = str.split('');
const reversed = words.reverse();
const strReversed = reversed.join('');
console.log (strReversed);