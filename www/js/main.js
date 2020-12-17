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
		$("#resultat").text("Temps écoulé !");
	}	
}

function lancerCalcul(joueur){

	let calcul = nouveauCalcul();

	$("#champCalcul").text(calcul.question);
	time = timer();

	$("#boutonValider").click(function(){
		clearTimeout(time);
		clearTimeout(timerSuivant);
		$("#boutonValider").unbind();

		console.log(tempsTimer);
		if ($("#champReponse").val() == calcul.reponse && tempsTimer > 0){
			joueur.ajouterScore(10);
			$("#resultat").text("Bon !");
		} else {
			$("#resultat").text("Faux !");
		}

		setTimeout(function(){
						$("#champReponse").val('');
						tempsTimer = 15;
						lancerCalcul(joueur1);
					}
					,2000);
	});


}

let tempsTimer = 15;
let joueur1 = new Joueur("lulu");
lancerCalcul(joueur1);