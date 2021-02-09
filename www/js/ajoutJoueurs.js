$( document).ready(function(){
    let listeNomsJoueurs = [];

    $("#bouton").click(function(){
        listeNomsJoueurs.push($(".name").last().val());

        $(".name").last().prop('disabled', true);
        $("#listeNomsJoueursVariable").val(listeNomsJoueurs);
        $("#espace").append('<input type="text" class="name" name="name" minlength="1" maxlength="30" size="10" placeholder="Joueur"></form>');
    });

    $("#jouer").click(function(){
        $.post('pagejoueurs', listeNomsJoueurs);
    });
});