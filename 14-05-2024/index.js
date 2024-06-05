// definire variabili che contengono una stringa con doppio apice
let string = "Ciao Mondo";
console.log(string);


//variabile con singolo apice
let backtick = 'Mio zio viene dalla città de l\'Aquila';
console.log(backtick);

//concatenamento con singolo apice
const prefix = "ciao";
const ciao = "mondo";

const backtickConcate = `
${prefix} ${ciao}
`;
console.log(backtickConcate)

//variabile trasformata in upper case
const text = "simone";
const textUppercase = text.toUpperCase ();
console.log (textUppercase);

//variabile con prompt
let num = prompt('Dammi un numero da 1 a 10!');
        num = parseInt(num);
        if(num > 7){
            console.log("Hai vinto!!");
        }

//prompt trasformato in lower case
        let textDue = prompt("INSERISCI TESTO MAIUSCOLO");
                console.log(textDue.toLowerCase());
        