const prompt = require("prompt-sync")();

//chalenge 1

let pseudo = "shadowX";
let niveaux = 12;
let age = 21 ;
let score = 4580;
const pays = "maroc";

console.log("pseudo :",pseudo)
console.log("niveaux :",niveaux)
console.log("age :",age)
console.log("score :",score)
console.log("pays :",pays)


//chalenge 2


let budget= prompt("entrer ton budget");

console.log("budget en mad :",budget)
console.log("budget en euro :",budget/11)




//chalenge 3
let stockage = +prompt("entrer ton capacite en GB");
console.log("capacité exprimée en Gigaoctets (GB) :",stockage)
console.log("capacité exprimée en Mégaoctets (MB) :",stockage *1024)

//chalenge 4

let distance = +prompt("entrer la distance parcourer");
let litre = +prompt("entrer la La quantité de carburant consommée en litres");
console.log("la consomation est :",(litre/distance)*100)

//chalenge 5
let duree = +prompt("entrer la durée du film en min ");
if (duree<60){
    console.log("Court métrage")
    
}else if(duree>120){
    console.log("Film long")

}else{
    console.log("Film standard")
}




//chalenge 6
let score1 = +prompt("entrer le score de partie 1");
let score2 = +prompt("entrer le score de partie 2");
let score3 = +prompt("entrer le score de partie 3");
let score4 = +prompt("entrer le score de partie 4 ");


console.log("Partie 1 :",score1)
console.log("Partie 2 :",score2)
console.log("Partie 3 :",score3)
console.log("Partie 4 :",score4)
console.log("TOTAL :",score1+score2+score3+score4)
console.log("moyenne :",(score1+score2+score3+score4)/4)



//chalenge 7
let noteCC= +prompt("entrer la note de Contrôle continu");
let noteProjet = +prompt("entrer la note de projet");
let noteExamen = +prompt("entrer la note de l Examen final");

console.log("Contrôle continu :",noteCC)
console.log("Examen :",noteExamen)
console.log("Projet :",noteProjet)
console.log("Note finale :",(noteCC * 2 + noteProjet * 3 + noteExamen * 5) / 10)


//chalenge 8


let tension = +prompt ("entrer La tension U en volts");
let intensité = +prompt ("entrer L'intensité I en ampères");
let temps = +prompt ("entrer Le temps t en heures");

console.log("Tension :",tension,"V")
console.log("Intensité :",intensité,"A")
console.log("Temps :",temps,"heure")
console.log("Énergie :",tension*intensité*temps,"Wh")

//chalenge 9

let x1=+prompt("entrer x1 de La première position");
let x2=+prompt("entrer x2 La deuxième position");
let y1=+prompt("entrer y1 de La première position");
let y2=+prompt("entrer y2 de La deuxième position");
let z1=+prompt("entrer z1 de La première position");
let z2=+prompt("entrer z2 de La deuxième position");

console.log("Position A : (",x1,",",y1,",",z1,")")
console.log("Position A : (",x2,",",y2,",",z2,")")
console.log("Distance :",((x2-x1)**2+(y2-y1)**2+(z2-z1)**2)**0.5)


//chalenge 10
const PI=3.14159;
let rayon = +prompt("entrer le rayon du réservoir");
let hauteur = +prompt("entrer la hauteur du réservoir");
console.log("Rayon :",rayon,"m")
console.log("Hauteur :",hauteur,"m")
console.log("Volume :",PI*(rayon**0.5)*hauteur,"m3")


//chalenge 11

let Longueur = +("entrer la Longueur");
let Largeur = +prompt ("entrer la Largeur");
  
console.log("Longueur : ",Longueur,"m")
console.log("Longueur : ",Largeur,"m")
console.log("Surface : ",Longueur * Largeur,"m²")
console.log("Périmètre : ",2 * (Longueur + Largeur),"m")



//chalenge 12

/*let Code[]=prompt("entrer le code de catre chifre ")
while (Code.length>4){
    console.log("entrer le code de 4 chifres")
}
console.log("Premier chiffre :",code[0])
console.log("Deuxième chiffre :",code[1])
console.log("Troisième chiffre :",code[2])
console.log("Quatrième chiffre :",code[3])*/

let Code=+prompt("entrer le code de catre chifre ");
while (Code.length>4){
    console.log("entrer le code de 4 chifres")
}
let valure1 = Code%10 ;
let valeure2 =((Code%100)-valure1)/10;
let valeure3 =((Code%1000)-(valure1+valeure2*10))/100;
let valeure4 =(Code-(valure1+valeure2*10+valeure3*100))/1000;


console.log("Premier chiffre :",valure1 )
console.log("Deuxième chiffre :",valeure2 )
console.log("Troisième chiffre :",valeure3)
console.log("Quatrième chiffre :",valeure4)





 




//chalenge 13



