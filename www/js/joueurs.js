class Joueur {
    constructor(nom) {
      this.nom = nom;
      this.score = 0;
    }

    ajouterScore(points){
        this.score += points;
    }

    obtenirScore(){
        return this.score
    }

}