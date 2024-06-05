//NOME E COGNOME
let inputName = prompt(`Inserisci Nome`);
let inputSurname = prompt(`Inserisci Cognome`);

if (inputName === '') {
    alert(`Non hai inserito nessun nome`);
    window.location.reload();
} else if (inputName.length < 3) {alert ("Il nome deve essere più di 3 lettere");
window.location.reload();}
else if (inputSurname === '') {alert ("Non hai inserito nessun cognome");
window.location.reload()}
else if (inputSurname.length < 3) {alert (`Il cognome deve essere più di 3 lettere`);
window.location.reload()};


let firstLetterCapitalize = inputName.charAt(0).toUpperCase();
console.log(firstLetterCapitalize);

let nameWithoutFirstLetter = inputName.slice(1);

let nameCapitalize = firstLetterCapitalize + nameWithoutFirstLetter;

let firstLetterCapSurname = inputSurname.charAt(0).toUpperCase();
console.log(firstLetterCapSurname);

let surnameWithoutFirstLetter = inputSurname.slice(1);

let surnameCapitalize = firstLetterCapSurname + surnameWithoutFirstLetter;

alert (`Ciao ${nameCapitalize} ${surnameCapitalize}`);


//QUIZZONE 

let score = 0;

let answer1 = prompt(`Qual'è la capitale della Spagna?`);
let answer2 = prompt(`Chi è il primo ministro della Germania?`);
let answer3 = prompt(`In che anno è finita la Seconda Guerra Mondiale?`);
let answer4 = prompt(`Quando è stata scoperta l'America?`);

//NORMALIZZAZIONI DELLE RISPOSTE
answer1 = answer1.toLowerCase().trim();
answer2 = answer2.toLowerCase().trim();
answer3 = answer3.toLowerCase().trim();
answer4 = answer4.toLowerCase().trim();

switch (answer1) {
    case 'madrid':
        score += 3;
        break;

        default:
            score -= 1;
            break;
    }

    
switch (answer2) {
    case 'scholz':
        score += 3;
        break;

        default:
            score -= 1;
            break;
    }

    
switch (answer3) {
    case '1945':
        score += 3;
        break;

        default:
            score -= 1;
            break;
    }

    
switch (answer4) {
    case '1492':
        score += 3;
        break;

        default:
            score -= 1;
            break;
    }


   alert (`il tuo punteggio complessivo è ${score}`);
if (score === 12){alert (`SEI TROPPO MA TROPPO FORTE! MIO PADRE!`)};
if (score < 9){alert ("HAI PERSO,RITENTA!")};