// let joueur1 = new Joueur("lulu");
// joueur1.ajouterScore(50);
// document.write(`${joueur1.nom} a ${joueur1.obtenirScore()} points !`);



/*
* Retourne l'objet calcul, contenant le calcul et la reponse
*/
function nouveauCalcul() {
	let a = Math.round(Math.random() * 12);
	let b = Math.round(Math.random() * 10);

	let o = Math.round(Math.random() * 2);
	let operand ='';
	let reponse = 0;


	switch (o) {
		case 0:
		  operand = '+';
		  reponse = parseInt(a) + parseInt(b);
		  break;
		case 1:
		  operand = '-';
		  reponse = a - b;
		  break;
		case 2:
		  operand = 'x';
		  reponse = a * b;
		  break;
	}

	
	let calcul = {
		'question':`${a} ${operand} ${b}`,
		'reponse': reponse
	};

	return calcul;
}




function timer() {
	if(tempsTimer >= 0){
		$("#timer").text(tempsTimer);
		tempsTimer --;
		timerSuivant = setTimeout(timer, 1000);
	} else {
		clearTimeout(timerSuivant);
		$("#resultat").text("Temps écoulé !");
	}	
}

/*
* Prend en paramètre l'objet joueur qui doit jouer
* Enclenche le timer()
* Ajoute les eventListeners sur le bouton valider
*/
function lancerCalcul(joueur){
	if (typeof timerSuivant !== 'undefined') {
		clearTimeout(timerSuivant);
	  }

	$("#tour").text(`Tour n° ${6 - nbTours} !`);
	$("#currentJoueur").text(`À vous de jouer ${joueur.nom} !`);
	let calcul = nouveauCalcul();

	$("#champCalcul").text(calcul.question);
	timer();

	$("#boutonValider").click(function(){
		clearTimeout(timerSuivant);
		validerResultat(joueur, calcul);
	});
	$("#champReponse").keypress(function(e){
		if (e.keyCode == 13){
			clearTimeout(timerSuivant);
			validerResultat(joueur, calcul);
		}
	});


}

/*
* Prend en parametre le joueur qui vient de jouer
* 		Si joueurActuel n'est pas défini, il renvoie le 1er joueur
*
* Retourne le prochain joueur qui doit jouer
*/
function joueurSuivant(joueurActuel){
	if (typeof joueurActuel !== 'undefined') {
		for (const key in listeJoueurs) {
			if (joueurActuel == listeJoueurs[key]) {
				if (key < (listeJoueurs.length-1)) {
					console.log(`Joueur actuel : ${listeJoueurs[key].nom}`);
					console.log(`Joueur suivant : ${listeJoueurs[parseInt(key) + 1].nom}`);
					return listeJoueurs[parseInt(key) + 1];
				} else { //fin du tour
					if (nbTours > 1){
						nbTours --;
					}
					else{
						finDeLaPartie();
					}
					console.log(`Tour suivant !`)
					console.log(`Joueur actuel : ${listeJoueurs[key].nom}`);
					console.log(`Joueur suivant : ${listeJoueurs[0].nom}`);
					return listeJoueurs[0];
				}
			}
		}
	} else {
		console.log(`Vous êtes le premier joueur ${listeJoueurs[0].nom} !`);
		return listeJoueurs[0];
	}
	
}

/*
* Prend en paramètre l'objet joueur qui doit jouer, l'objet calcul et le temps
* Vérifie la réponse, appel la méthode ajouterScore si c'est bon, puis lance un nouveau calcul
*/
function validerResultat(joueur, calcul){
	$("#boutonValider").unbind();

	if ($("#champReponse").val() == calcul.reponse && tempsTimer > 0){
		joueur.ajouterScore(Math.round(tempsTimer));
		$("#resultat").text("Bon !");
		actualiserPodium();
	} else {
		$("#resultat").text("Faux !");
	}

	setTimeout(function(){
					$("#champReponse").val('');
					tempsTimer = 15;
					lancerCalcul(joueurSuivant(joueur));
				}
				,2000);
}

function finDeLaPartie(){
	$("#champReponse").val('Vous avez terminé la partie. Bravo !');
}
let tempsTimer = 15;
let nbTours = 5;
// var test2 = '<%- JSON.stringify(listeNomsJoueurs) %>'; 
// console.log(test2);

// ajouterJoueur("Lulu");
// ajouterJoueur("Nathan");
// ajouterJoueur("Valentin");
// ajouterJoueur("Truc");
// joueurSuivant(listeJoueurs[2]);
lancerCalcul(joueurSuivant());