class Joueur {
    constructor(nom) {
      this.nom = nom;
      this.score = 0;
    }

    ajouterScore(tempsTimer){
        let points = 0;
        if (tempsTimer >= 10) {
            points = 10;
        } else if(tempsTimer >= 5) {
            points = 5;
        } else {
            points = 3;
        }
        this.score += points;
        console.log(`${this.nom} vient d'obtenir ${points} points, ce qui lui fait un total de ${this.score} points !`);
    }

    obtenirScore(){
        return this.score
    }

}


let listeJoueurs = [];
function ajouterJoueur(nom){
    listeJoueurs[listeJoueurs.length] = new Joueur(nom);
}