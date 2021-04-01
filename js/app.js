const cardGrid = document.querySelector('div.card-grid');

let requestURL = 'json-data/cartes.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const cartesChinqJson = request.response;
    showCartes(cartesChinqJson);
}

function showCartes(obj) {
    const cartes = obj['cartes'];

    for (let i = 0; i < cartes.length; i++){
        const card = document.createElement('div');
        card.className = "card";
        card.style.backgroundColor = cartes[i].couleur;

        const contentCard = document.createElement('div');
        contentCard.className = "card-content";
        card.appendChild(contentCard);

        const nomCarte = document.createElement('h1');
        nomCarte.className = "card-nom";
        nomCarte.textContent = cartes[i].nom;
        contentCard.appendChild(nomCarte);

        const formeCarte = document.createElement('p');
        formeCarte.className = "card-forme";
        formeCarte.textContent = 'Forme de la carte: ' + cartes[i].forme;
        contentCard.appendChild(formeCarte);

        const imageCarte = document.createElement('p');
        imageCarte.className = "card-image";
        imageCarte.textContent = cartes[i].image;
        contentCard.appendChild(imageCarte);


        cardGrid.appendChild(card);
    }
}
function searchImageData() {

}
