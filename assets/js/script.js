 //Déclarer mes variables.

 const nomobjet = ['un ballon','un casque','un livre','une manette','un sac'];
 const objet = ['ballon.jpg', 'casque.jpg', 'livre.jpg', 'manette.jpg', 'sac.jpg'];
 let prixdonne;
 let prixatrouve;
 let nombrealea;
 let nombretentative;
 let image = document.getElementById('objet');
 let nomimage = document.getElementById('nom-objet');
 let message = document.getElementById('message');
 let bouton = document.getElementById('button');
 let affichagetentative = document.getElementById('nombre-tentative');
 
 function genererunchiffre(valeurmax){

    return Math.floor(Math.random() * Math.floor(valeurmax));
 }

   prixatrouve = genererunchiffre(100) + 1;
   nombrealea = genererunchiffre(5);

 function afficherimage(valeur) {
     
    return '<img src="assets/image/' + valeur + '"class="img-fluid" width="30%" alt="Responsive image">';
 }

    image.innerHTML = afficherimage(objet[nombrealea]);
    nomimage.innerHTML = nomobjet[nombrealea];
    nombretentative = 10;
    affichagetentative.innerHTML = "Vous avez encore " + nombretentative + " tentatives.";

    //// Condition pour vérifier si la proposition est juste.

 function verificationproposition(){

    prixdonne = document.getElementById('prix-propose').value;
 if(nombretentative == 0){
    affichertentative.innerHTML = "Vous avez encore " + nombretentative + "tentatives.";
    message.innerHTML = "Désolé vous avez perdu !<br> Le juste prix était de " + prixatrouve + " euros.";
    bouton.disabled= true;
   }else{
   }if(prixdonne > prixatrouve){
       message.innerHTML = "Non c'est moins .";
       nombretentative--;
       affichagetentative.innerHTML = "Vous avez encore " + nombretentative + "tentatives.";
   }if(prixdonne < prixatrouve){
       message.innerHTML = "Non c'est plus .";
       nombretentative--;
       affichagetentative.innerHTML = "Vous avez encore " + nombretentative + "tentatives.";
   }if(prixdonne == prixatrouve){
    message.innerHTML = "Bonne réponse. Bravo!";
    affichagetentative.innerHTML = "Vous avez trouvez le juste prix en " + nombretentative + "tentatives.";
    bouton.disabled = true;
   }
  }
   
     // Ajout d'un écouteur d'événement pour vérifier la propositon.();
     
     bouton.addEventListener('click',verificationproposition, false);