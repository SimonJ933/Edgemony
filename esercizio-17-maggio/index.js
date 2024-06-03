// TROVA IL POSTIIVO

const numbers = [-1, -2, -10, 2, 5];
const quantiNumeri = numbers.length;

for(let i = 0 ; i < quantiNumeri; i++)
    {if (numbers[i] > 0){
        console.log('numeri positivi :', numbers[i]);
    }
    }

    for(let i = 0 ; i < quantiNumeri; i++)
        {if (numbers[i] > 0){
            console.log('numeri positivi :', numbers[i]);
            break;
        }
        console.log('numero <= 0', numbers);
    }


//PALINDROMI

let string = prompt('Inserisci parola');
let arrayChar = string.split('');
let arrayCharlength = arrayChar.length;
let isPalindromo= true;

for(let i =  0; i < arrayCharlength / 2 ; i++){
    if(arrayChar[i] !== arrayChar[arrayCharlength -1 -i]){
        console.log("Non è palindromo");
    isPalindromo= false;
    break;
    }
}
    
if(isPalindromo){console.log("La parola è palindroma")};

