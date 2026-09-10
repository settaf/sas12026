let prompt=require("prompt-async")();


//chalenge 1
function afficherElements(tab){
    for(i=0;i<tab.length;i++){
        console.log(tab[i])
    }
}

//chalenge 2
function calculerSomme(tab){
    let somme=0;
    for(i=0;i<tab.length;i++){
        somme=+tab[i];
    }
    console.log(somme)
}

//chalenge 3
function trouverMax(tab){
    let plusgrande=tab[0];
    for(i=1;i<tab.length;i++){
        if(tab[i]>plusgrande) plusgrande=tab[i];
    }
    console.log(plusgrande)
}

//chalenge 4

function ajouterALaFin(tab, element){
    let tab2=[];
    for(i=0;i<tab.length;i++){
        tab2[i]=tab[i];
    }
    tab2[tab.length]=element;
    

}

//chalenge 5
function contientElement(tab, valeur){
let s=0;
    for(i=0;i<tab.length;i++){
        if(tab[i]==valeur)s++;
        
    }
    if(s=0)return false;
    else return true;
}

//chalenge 6 
function inverserTableau(tab){
    let tab2=[];
    for(i=0;i<tab.length;i++){
        tab2[i]=tab[tab.length-(i+1)]
        
    }
    console.log(tab2)
}
inverserTableau([12,2,45])

//chalenge 7
function filtrerPairs(tab){
    let tab2=[];
    let j=0;
    for(i=0;i<tab.length;i++){
        if(tab[i]%2==0){
            tab2[j]=tab[i];
            j++;
        }

    }
    console.log(tab2)
}
filtrerPairs([2,12,1,3,6,1])

// chalenge 8
function supprimerDoublons(tab){
    let tab2=[];
    j=1;
    tab2[0]=tab[0];
    n=false;

    for(i=1;i<tab.length;i++){
        for(k=0;k<i;k++){
            if (tab[i]==tab2[k]){
                
            n=true;
            }
            
        }
        if(n==false){
            tab2[j]=tab[i];
            j++;
        }
        n=false;
    }
    
    console.log(tab2)
}
supprimerDoublons([1,1,1,3,4,3,3,4,1,2])

//chalenge 9
function fusionnerTableaux(tab1, tab2){
    let a=tab1.length+tab2.length;
    let tab3=[];
    let l=0;
    for(let i=0;i<tab1.length;i++){
        
        tab3[i]=tab1[i];

        
    }
        

    
    for(let j=tab1.length;j<a;j++){
        
        tab3[j]=tab2[l];
            
        
        l++;
    }
    console.log(tab3)

}
fusionnerTableaux([1,3,2], [1,6,4,9])

// chalenge 10
// let tab=[12,13,5,1,19,0,44]
// let temp;
//  let compt = 0;
// for(let i=0;i<tab.length;i++){
//     for(let j=0;j<tab.length-1;j++){
//         if(tab[j]>tab[j+1]){
//             temp=tab[j+1];
//             tab[j]=tab[j+1];
//             tab[j+1]=temp;
//         }
//     }
// }
// console.log(compt)
// let tab=[12,13,5,1,19,0,44]

let tab=[12,13,5,1,19,0,44]
let temp;
 
for(let i=0;i<tab.length;i++){
    for(let j=i+1;j<tab.length;j++){
        if(tab[i]>tab[j]){
            temp=tab[i];
            tab[i]=tab[j];
            tab[j]=temp;
            

        }
    }
}
console.log(tab)

//chalenge 11

function formaterChaine(tab){
    tab=tab.slice(1,3);
    let chaine=tab.join("-")
    console.log(chaine)


}

//chalenge 12

function eleverAuCarre(nombres){
    return nombres.map(a=>{
        a=a**2; 
    })
}

//challenge 13

function trouverPremierMajeur(utilisateurs){
    return utilisateurs.find(function(element){ 
        element.age >=18
    });
}

//chalenge 14

function obtenirProduitsEnPromo(produits){
    produits= produits.filter(element=>
        element.enPromo==true
    )
    produits=produits.map(e=>{
        console.log(e.nom)
    })

}
obtenirProduitsEnPromo([{nom: "PC", enPromo: true}, {nom: "Souris", enPromo: false}])




//chalenge 15

function calculerTotalPanier(panier){
   reducer = calculerTotalPanier.reduce((a,b)=>{
        return a+(b.prix*b.quantite)


},0);
   
}

//chalenge 16


function validerNotes(notes){
    let toute=(e)=>e>=10;
    let oneNote=(e)=>e==20;
    if(notes.every(toute)==true && notes.some(oneNote)==true)console.log({ toutesValides: true, aUneNoteParfaite: true }) ;

}

validerNotes([12,10,12,20,17])

//challenge 17 

function remplacerElement(tab, ancien, nouveau){
    let a=tab.indexOf(ancien);
    console.log(a)
    tab.splice(a,1,nouveau);
    console.log(tab)
}
remplacerElement(["A", "B", "C"], "B", "X")

//challenge 18

function trierParNoteEtNom(etudiants){
    
}
