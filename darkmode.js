// Etape 1 : Récupérer l'élément à cliquer
const boutonChangeCouleur = document.querySelector('.button');
console.log('Mon bouton:');
console.log(boutonChangeCouleur);

// Etape 2 : Créer la fonction
const activerDesactiverDarkmode = () => {
    const body = document.body;
    body.classList.toggle('body-dark');

    const button = document.querySelector('.button');
    button.classList.toggle('button-dark');
}

// Etape 3 : Ajouter l'event listener
boutonChangeCouleur.addEventListener('click', activerDesactiverDarkmode);