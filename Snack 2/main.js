/*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

//creo un array di oggetti squadre di calcio

const squadreDiCalcio = [
    {
        nome: 'Inter',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Napoli',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Milan',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Bologna',
        punti: 0,
        falli: 0,
    }, {
        nome: 'Roma',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Juventus',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Fiorentina',
        punti: 0,
        falli: 0,
    },
]


let squadreFalli = [];

//Ciclo l'array per settare random le proprietà punti e falli per ciascun oggetto
//posso utilizzare il ciclo anche per popolare il nuovo array con oggetti composti solo da nome e falli
for (let i = 0; i < squadreDiCalcio.length; i++) {
    const squadra = squadreDiCalcio[i];
    //assegno quantità random di punti
    squadra.punti = Math.random() * 101;
    squadra.punti = Number(squadra.punti.toFixed(0));
    //assegno quantità random di falli
    squadra.falli = Math.random() * 51;
    squadra.falli = Number(squadra.falli.toFixed(0));
    //popolo il nuovo array con oggetti composti da nome e falli
    squadreFalli.push({ nome: squadra.nome, falli: squadra.falli, });
}

//stampo in console l'array di oggetti con nome e falli
console.log('--SQUADRE E FALLI--');
console.log(squadreFalli);

//BONUS

console.log('--CLASSIFICA--');

//ordino l'array in base ai punti in modo decrescente
//utilizzo Number per convertire i punti da stringa a numero
squadreDiCalcio.sort((a, b) => (b.punti) - (a.punti));

console.log(squadreDiCalcio);