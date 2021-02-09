$( document).ready(function(){
    let nbrNoms = 0;
    let listeJoueurs = [];

    $("#bouton").click(function(){
        listeJoueurs[nbrNoms] = $(".name").last().val();
        console.log(listeJoueurs);
        nbrNoms++;

        $(".name").last().prop('disabled', true);
        $("#espace").append('<input type="text" class="name" name="name" required minlength="1" maxlength="30" size="10" placeholder="Joueur"></form>');
    });

    $("#jouer").click(function(){
        window.location.href = "/jeu";
    });
});