// let joueur1 = new Joueur("lulu");
// joueur1.ajouterScore(50);
// document.write(`${joueur1.nom} a ${joueur1.obtenirScore()} points !`);


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

let calcul = nouveauCalcul();
document.write(`Calcul : ${calcul.question}
				Réponse : ${calcul.reponse}`);