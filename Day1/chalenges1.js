const prompt = require("prompt-sync")();

//chalenge 1
 let age = +prompt ("entrer ton age ");
 if (age >=18){
    console.log("Accès autorisé")
 }else {
    console.log("Accès refusé")
 }


 //chamenge 2 
 let num= +prompt ("entrer un nombre");
 if (num>0){
    console.log("Le nombre est positif.")
 }else if (num<0){
    console.log("Le nombre est négatif.")
 }else {
    console.log("Le nombre est égal à zéro.")
 }


// chalenge 3

let notes = +prompt("entrer ta note");
while (notes<0 || notes > 200){
    console.log("cette note est invalide")

}
if(notes>10){
    console.log("Admis")
}else{
    console.log("non Admis")
}

//chalenge 4

let montant =+prompt("saisit le montant de ton commande.");
if(montant>=500){
    console.log("Montant de la commande :" + montant)
    console.log("Livraison gratuite")
    console.log("Total à payer :" + montant)

}else{
    console.log("Montant de la commande :" + montant)
    console.log("Frais de livraison : 40 DH")
    console.log("Total à payer :" + (montant + 40))
}

//chalenge 5
let note= +prompt("entrer ta note");
while(note>20 || note <0) {
    console.log("la note est invalide")
}
if(note<10){
    console.log("Echec")
}else if(note>=10 && note<12){
    console.log("Passable")

}else if(note>=12 && note<14){
    console.log("Assez bien")

}else if(note>=14 && note<16){
    console.log("Bien")

}else if(note>=16 && note<18){
    console.log("Très bien")

}else {
    console.log("Excellent")
}


//chalenge 6
let choix =+prompt("saisir un choix entre 1 et 4");
switch(choix){
    case 1:
        console.log("Ouverture de profile")
        break;
    case 2:
        console.log("Ouverture des paramètres...")
        break;
    case 3:
        console.log("Afficher les notifications")
        break;
    case 4:
        console.log("Déconnexion")
        break;
    default:
        console.log("Choix invalide")
}


//chalenge 7
let jour = prompt("entrer un nombre entre 1 et 7");
switch (jour){
    case 1 :
        console.log("Lundi")
        break;

    case 2 :
        console.log("Mardi")
        break;
    case 3 :
        console.log("Mercredi")
        break;
    case 4 :
        console.log("Jeudi")
        break;
    case 5 :
        console.log("Vendredi")
        break;
    case 6 :
        console.log("Samedi")
        break;
    case 7 :
        console.log("Dimanche")
        break;
    default:
        console.log("valeur invalide")
}


//chalenge 8
let nombre1 =+prompt("entrer Un premier nombre");
let nombre2=+prompt("entrerUn deuxième nombre");
let operateur = prompt ( "saiser Un opérateur");

switch (operateur){
    case "+":

        console.log("Premier nombre : ",nombre1)
        console.log("Opérateur :",operateur)
        console.log("Deuxième nombre : ",nombre2)
        console.log("le resultat est :",nombre1 +nombre2)
        break;

    case "-":

        console.log("Premier nombre : ",nombre1)
        console.log("Opérateur :",operateur)
        console.log("Deuxième nombre : ",nombre2)
        console.log("le resultat est :",nombre1 -nombre2)
        break;

    case "*":
        console.log("Premier nombre : ",nombre1)
        console.log("Opérateur :",operateur)
        console.log("Deuxième nombre : ",nombre2)
        console.log("le resultat est :",nombre1 *nombre2)
        break;

    case "/":
        while(nombre2==0){
            console.log("le deuxieme nombre est 0 nest pas invalide pour la division")
            nombre2=+prompt("entrer Un deuxième nombre");
        }
        console.log("Premier nombre : ",nombre1)
        console.log("Opérateur :",operateur)
        console.log("Deuxième nombre : ",nombre2)
        console.log("le resultat est :",nombre1 /nombre2)
        break;

    default:
        console.log("opérateur invalide")
}

//chalenge 9
let transport =+prompt("entrer an nombre entre 1 et 5");
switch (transport){
    case 1:
        console.log("Transport :Bus")
        console.log("Prix : 5 DH")
        break;
    case 2:
        console.log("Transport :Train")
        console.log("Prix : 20 DH")
        break;
    case 3:
        console.log("Transport :Tramway ")
        console.log("Prix : 6 DH")
        break;
    case 4:
        console.log("Transport :Taxi")
        console.log("Prix : 15 DH")
        break;
    case 5:
        console.log("Transport :Vélo ")
        console.log("Prix : 10 DH")
        break;
    default:
        console.log("transport invalide")
}

//chalenge 10

let categorie =prompt("entrer an caracter entre A et E");
switch(categorie){
    case A:
        console.log("Code : A")
        console.log("Catégorie : Électronique")
        break;
    
    case B:
        console.log("Code : B")
        console.log("Catégorie : Vêtements ")
        break;
    
    case C:
        console.log("Code : C")
        console.log("Catégorie : Alimentation ")
        break;
    
    case D:
        console.log("Code : D")
        console.log("Catégorie : Maison ")
        break;

    case E:
        console.log("Code : E ")
        console.log("Catégorie : Sport")
        break;
    
    default:
        console.log ( "carater invalid")
}

