/* 
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/
// Inizializzo l'array di oggetti bici
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


// Inizializzo le variabili biciPiuLeggera pesoMinore con il primo id e peso
let biciPiuLeggera = bici[0].id;
let pesoMinore = bici[0].peso;

// Ciclo l'array per trovare la bici con il peso minore
for (let i = 0; i < bici.length; i++) {
    const bicicletta = bici[i];
    if (bicicletta.peso < pesoMinore) {
        pesoMinore = bicicletta.peso;
        biciPiuLeggera = bicicletta.id;
    }
}

// Stampo a schermo l'elenco delle bici 
const elencoBiciEl = document.getElementById('elencoBici');



// Chiamo la funzione per stampare l'elenco delle bici nell'elemento HTML
elencoBiciEl.innerHTML = stampaElencoBici(bici);


// Stampo a schermo la bici più leggera chiamando la funzione stampaBiciLeggera
const biciEl = document.getElementById('biciLeggera');
biciEl.innerHTML = stampaBiciLeggera(biciPiuLeggera, pesoMinore);




// Creo una funzione per stampare l'elenco delle bici
function stampaElencoBici(bici) {
    let html = '<ul>';
    for (let i = 0; i < bici.length; i++) {
        const bicicletta = bici[i];
        html += `<li>La ${bicicletta.nome} pesa ${bicicletta.peso} grammi</li>`;
    }
    html += '</ul>';
    return html;
}

// Creo una funzione per stampare la bici più leggera
function stampaBiciLeggera(biciPiuLeggera, peso) {
    return `<h4>
        La bicicletta più leggera è la n°${biciPiuLeggera},
        che pesa ${peso} grammi! 
    </h4>`
}