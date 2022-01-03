var bouttonPierre = document.getElementById('pierre');
var bouttonFeuille = document.getElementById('feuille'); // definit les 3 boutons
var bouttonCiseaux = document.getElementById('ciseaux');

const choix_ordinateur = ['pierre', 'feuille', 'ciseaux'] // tableau qui va de 0 à 2 et qui va choisir quel coup jouer 

bouttonPierre.addEventListener('click', function(){ // créer une fonction "click"
    joueur = 'pierre' // le joueur choisi pierre
    nombre = Math.floor(Math.random() *3) // genere un chiffre aléatoire dans le tableau
    ordinateur = choix_ordinateur[nombre];
    duel(joueur, ordinateur); // le duel commence
})

bouttonFeuille.addEventListener('click', function(){ // créer une fonction "click"
    joueur = 'feuille' // le joueur choisi feuille 
    nombre = Math.floor(Math.random() *3) // genere un chiffre aléatoire dans le tableau 
    ordinateur = choix_ordinateur[nombre];
    duel(joueur, ordinateur); // le duel commence 
})

bouttonCiseaux.addEventListener('click', function(){ // créer une fonction "click"
    joueur = 'ciseaux' // le joueur choisi ciseaux
    nombre = Math.floor(Math.random() *3) // genere un chiffre aléatoire dans le tableau 
    ordinateur = choix_ordinateur[nombre];
    duel(joueur, ordinateur); // le duel commence
})

function duel(joueur, ordinateur){ // fonction duel entre le joueur et l'ordinateur 
    if (joueur === 'pierre' && ordinateur === 'ciseaux' || joueur === 'feuille' && ordinateur === 'pierre' || joueur === 'ciseaux' && ordinateur === 'feuille'){
        resultat = 'Gagné'; // alors c'est gagné
        console.log(ordinateur);
        affichage.innerHTML = `${joueur} vs ${ordinateur} : ${resultat}`; // affichage du resultat texte sur la page HTML
    }else if(joueur === 'pierre' && ordinateur === 'feuille' || joueur === 'feuille' && ordinateur === 'ciseaux' || joueur === 'ciseaux' && ordinateur === 'pierre'){
        resultat = 'Perdu'; // alors c'est perdu
        console.log(ordinateur);
        affichage.innerHTML = `${joueur} vs ${ordinateur} : ${resultat}`; // affichage du resultat texte sur la page HTML
    }else{
        resultat = 'Egalité'; // alors c'est une égalité
        console.log(ordinateur);
        affichage.innerHTML = `${joueur} vs ${ordinateur} : ${resultat}`; // affichage du resultat texte sur la page HTML
    }
}

var joueur = 0 ;
var ordinateur = 0 ;  // variable qui vont stocker le choix du joueur 
var resultat = 0 