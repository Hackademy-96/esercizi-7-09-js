// ESERCIZIO 1
let giocaore1Tiri= 5;
let punteggioGioc1= 0;
for (let i=0; i<giocaore1Tiri; i++) {
    let random = Math.floor(Math.random()*(6 - 1 + 1) + 1);
    punteggioGioc1= random+punteggioGioc1;
    }
console.log(punteggioGioc1);

let giocatore2Tiri= 5;
let punteggioGioc2=0;
for (let i = 0; i < giocatore2Tiri; i++) {
    let random = Math.floor(Math.random()*(6 - 1 + 1) + 1);
    punteggioGioc2= random+punteggioGioc2
    
    
}
console.log(punteggioGioc2);

// ESERCIZIO 2  
let numero="2";


switch(numero) {
    case "1": 
    console.log(`Lunedi`);
        
        break;
    case "2":
    console.log(`Martedi`);
        break;
    case "3":
        console.log(`Mercoledi`);
        break;
    case 4:
        console.log(`Giovedi`);
        break;
    case 5:
        console.log(`Venerdi`);
        break;
    case 6:
        console.log(`Sabato`);
        break;
    case 7:
        console.log(`Domenica`);
        break;

    default:
        console.log(`Questo numero non corrisponde a nessun giorno della settimana`);
        break;
    
}

