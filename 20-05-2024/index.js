//STAMPARE UN CONSOLE.LOG PER OGNI SKILL PRESENTE IN CODER

const coder = {
    firstName: 'Luca', // coppia chiave - valore : "firstName" - "Luca"
    lastName: 'Pagliaro',
    age: 29,
    skills: ['JavaScript', 'HTML', 'CSS'],
    address: {
        city: 'Catania',
        zipCode: '95100'
    }
};

for(let value of coder.skills) {
    console.log(value)
}

// CREARE DUE NUOVE PROPRIETA' ALL'INTERNO DI "ADRESS"
coder.address.country = prompt("Enter your city");
coder.address.strett = prompt("Enter your street");
console.log(coder);

//StAMPIAMO IN CONSOLE TUTTE LE CHIAVI PRESENTI DENTRO L'OBJ 

for(let key in coder){
    console.log(key);}

// Per ogni proprietà presente dentro il nostro object, controlliamo la chiave. Se la prima lettera è una vocale stampiamo in console la chiave ed il suo valore.

const vowels = 'aeiou';

for(let key in coder){
    if(vowels.includes(key[0])){
        console.log(`${key} : ${coder[key]}`)
    }
    }


// Chiediamo all'utente, tramite prompt, cosa vuole salvare dentro il nostro object e (tramite un altro prompt) quale valore voglia inserire. Salviamo quindi una nuova proprietà con chiave/valore presi dai prompt
const key = prompt('Wich key do you want to add?');
const value = prompt('Wich value do you want to add?');
coder [key] = value;
console.log(coder);
