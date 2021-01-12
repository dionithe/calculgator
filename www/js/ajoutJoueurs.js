$( document).ready(function(){
    let nbrNoms = 0;
    let tableauNoms = [];

    $("#bouton").click(function(){
        tableauNoms[nbrNoms] = $(".name").last().val();
        console.log(tableauNoms);
        nbrNoms++;

        $(".name").last().prop('disabled', true);
        $("#espace").append('<input type="text" class="name" name="name" required minlength="1" maxlength="30" size="10" placeholder="Joueur"></form>');
    });
});