function afficherPodium(){
	for (const key in listeJoueurs){
		let ligneJoueur = `
			<div class="row col-12 mt-1 ligneJoueur">
				<div class="col-3" id="positionJoueur">${listeJoueurs[key].obtenirPosition()}</div>
				<div class="col-6" id="nomJoueur">${listeJoueurs[key].nom}</div>
				<div class="col-3" id="scoreJoueur">${listeJoueurs[key].obtenirScore()}</div>
			</div>
		`
		$(ligneJoueur).appendTo($("#listeJoueurs"));
	}
}
afficherPodium();



function actualiserPodium(){

	let arr = [];
	for (const key in listeJoueurs){
		arr[key] = listeJoueurs[key].score;
	}
	let sorted = arr.slice().sort(function(a,b){return b-a})
	var ranks = arr.map(function(v){ return sorted.indexOf(v)+1 });
	console.log(ranks);
	for (const key in ranks){
		listeJoueurs[key].definirPosition(ranks[key]);
	}

	$("#listeJoueurs").html("");
	afficherPodium();
}