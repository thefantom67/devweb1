$(document).ready(function(){  
    $("#monFormulaire").submit(function(e) {
        var email = $('#email').val();
        var password = $('#password').val();
        var cp = $('#cp').val();
        var tel = $('#tel').val();
        
        if(!email.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)){
			alert("Entrez un e-mail valide !");
		}  
		
		  if(!password.match(/^.{6,32}$/)){
			alert("Le mot de passe doit être compris entre 6-32 charactères");
		} 
		
		if(!password.match(/(?=.*\d)(?=.*[A-Z])(?=.*\W)./)){
			alert("Le mot de passe doit contenir au moins 1 majuscule, 1 chiffe et 1 charactère spécial");
		}
		if(!cp.match(/(\d{2}[ ]?\d{3})/)){
		    alert("Mauvais code postal");
		}
		if(!tel.match(/[0-9]{10}/)){
		    alert("Numéro de téléphone invalide");
		}
		
    });
});