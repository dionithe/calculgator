$( document).ready(function(){
    $("#bouton").click(function(){
        $("#espace").append('<input type="text" class="name" name="name" required minlength="1" maxlength="30" size="10" placeholder="Joueur"></form>');
    });
});