let prompt=require("prompt-sync")();





//challenge 1
function compterCaracteres(chaine){
    let compter=0;
    while(chaine[compter]!=undefined){
        compter++;
    }
}


//challenge 2

function compterLettre(chaine, lettre){
    let compterr=0;
    for(i=0;i<chaine.length;i++){
        if(chaine[i]==lettre)
            compterr++;

    }
    console.log(compterr)
}

// challenge 3
function inverserChaine(chaine){
    word="";
    for(i=chaine.length-1;i>=0;i--){
        word+=chaine[i];
    }
    console.log(word);
}

//challenge 4
function compterVoyelles(chaine){
    let compter=0;
    for(i=0;i<chaine.length;i++){
        if(chaine[i]=="a" || chaine[i]=="e" ||
 chaine[i]=="i" || chaine[i]=="o" ||
 chaine[i]=="u"){
            compter++;
        }
    }
    console.log(compter);
}

//challenge 5

function estPalindrome(chaine){
    let chaine2 = "";
    for(let i=chaine.length-1;i=0;i--){
        chaine2+=chaine[i];

    }
    if(chaine == chaine2){
        console.log('la ${chaine} est palindrome')
    }


}


//challenge 6
function repeterChaine(chaine, fois){
    for(let i=1;i<chaine.length;i++){
        chaine+=chaine;

    }
    console.log(chaine)
}


//challenge 7
function remplacerCaractere(chaine, ancien, nouveau){
    text =chaine.replaceAll(ancien,nouveau)
    console.log(text)
}
remplacerCaractere("banana","a","o")


//challenge 8
function extraireChaine(chaine, debut, fin){
    let chainne="";
    for(i=debut;i<fin;i++){
        chainne+=chaine[i]
        

    }
    console.log(chainne)
}


//challenge 9
function nettoyerEspaces(chaine){

}

//chalenge 10
function separerMots(chaine){

}

//challenge 11
function formaterTexte(chaine){
    let upper=chaine.toUpperCase();
    let lower=chaine.toLowerCase()
    console.log("{majuscule: \"${upper}\",minuscule\"${lower}\"")

}

//challenge 12
function verifierEmail(email){
    return email.endsWith("@gmail.com")
}

//chalenge 13
function obtenirInitiales(nomComplet){
    let aa=nomComplet.split(" ");
    let mm;
    let nn=[];
    let cb=aa.map(aa =>{

            mm=aa[0].toUpperCase();
            nn.push(mm);



    })

    let cc=nn.join(".")
    console.log(cc)

}
obtenirInitiales("rachid 3llali")



//challenge 14

function masquerCarte(numeroCarte){
    let numeroCarte1=numeroCarte.slice(-4,numeroCarte.length)
    
    numeroCarte1=numeroCarte1.padStart(numeroCarte.length,"*")
    console.log(numeroCarte1)

}
masquerCarte("123455661111")



//chalenge 15
function capitaliserPhrase(phrase){
     
}