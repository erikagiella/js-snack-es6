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


//Ciclo l'array per settare random le proprietà punti e falli per ciascun oggetto
//posso utilizzare il ciclo anche per popolare il nuovo array con oggetti composti solo da nome e falli
for (let i = 0; i < squadreDiCalcio.length; i++) {
    const squadra = squadreDiCalcio[i];
    squadra.punti = Math.random() * 101;
    squadra.punti = squadra.punti.toFixed(0);
    console.log(squadra.punti);
    squadra.falli = Math.random() * 51;
    squadra.falli = squadra.falli.toFixed(0);
    console.log(squadra.falli);
}

//