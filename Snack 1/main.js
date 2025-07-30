/* 
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

const bici = [
    {
        id: 1,
        nome: 'bici_1',
        peso: 780,
    },
    {
        id: 2,
        nome: 'bici_2',
        peso: 1020,
    },
    {
        id: 3,
        nome: 'bici_3',
        peso: 860,
    },
    {
        id: 4,
        nome: 'bici_4',
        peso: 735,
    },
    {
        id: 5,
        nome: 'bici_5',
        peso: 915,
    },
]



let biciPiuLeggera = bici[0].id;
let peso = bici[0].peso;

for (let i = 0; i < bici.length; i++) {
    const bicicletta = bici[i];
    if (bicicletta.peso < peso) {
        peso = bicicletta.peso;
        biciPiuLeggera = bicicletta.id;
    }
}

const biciEl = document.getElementById('biciLeggera');

function stampaBiciLeggera(biciPiuLeggera, peso) {
    return `<h4>
        La bicicletta più leggera è la n°${biciPiuLeggera},
        che pesa ${peso} grammi! 
    </h4>`
}

biciEl.innerHTML = stampaBiciLeggera(biciPiuLeggera, peso);
