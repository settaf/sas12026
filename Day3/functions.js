const prompt=require("prompt-sync")();


//chalenge 1
function afficherBienvenue() {

    console.log("Bienvenue dans le cours de JavaScript ! Bonne chance.")
}

//chalenge2
function calculerAgeChie(ageHumain){
    return ageHumain*7;

}

//chalenge 3
function genererEmail(prenom, nom){
    return nom.toLowerCase()+"."+prenom.toLowerCase()+"@entreprise.com"
}

//chalenge 4
function saluerClient(nom,titre="Client"){
    console.log("Bonjour" ,titre ,nom) 


}


//challenge 5
function additionnerTout(...args){
    somme=0;
    for(i=0;i<arguments.length;i++){
        somme+=arguments[i]
        
    }

}

//chalenge 6
function verifierMotDePasse(motDePasse){
    if (motDePasse.length>=8 && motDePasse.includes("@")){
        return true
        
    }
    else return false
       
    
}

//chalenge 7
function obtenirHeureActuelle(){
    // console.log(new Date(8.64e15).toString());
    // const da=new Date ("14:30:16")
    console.log(Date.now())
}


//chalenge 8
function convertirMontant(montant,taux,formatter){
    

}