const prompt = require("prompt-sync")();


//chalenge 1
let participent =+prompt("entrer le Nombre de participants :");
console.log("Nombre de participants :",participent)
for(let i=1;i<=participent;i++){
    console.log("Nombre de participants :",participent)
    console.log("participent ",i)
}

//chalenge 2

let N=+prompt("entrer un nombre");
for(let i=1;i<=N;i++){
    if(i%2==0){
        console.log(i)

    }else{
        console.log("")
    }
}


//chalenge 3
let M=+prompt("entrer un nombre");
let somme=0;
for(let j=1;j<=M;j++){
    somme+=j;


}
console.log("la somme desvaleure entre 1 et ",M,"est",somme)


//chalenge 4
let Multiplication=+prompt("entrer un nombre quleq un");
for(let i =0;i<Multiplication;i++){

    console.log(Multiplication,"*",i,"=",Multiplication*i)

}

//chalenge 5
let nombre1=+prompt("entrer le grand nombre");
let nombre2=+prompt("entrer le petit nombre");
for(let i=0;i<nombre1;i++){
    console.log("X =",nombre1)
    console.log("N =",nombre2)
    while((i+1)*nombre2<=nombre1){
        
        console.log((i+1)*nombre2)

    }
}

//chalenge 6

let valeure=+prompt("entrer un valeur");
let i = valeure;
while(i>=0){
    console.log(i)
    i--;
}



//chalenge 7

let k =0;
while(k**2<=100){
    k++
}
console.log(k)

//chalenge 8
let missions=+("entrer combien de missions");
let y=1;
console.log("Nombre de missions : ",)
while(y<=missions){
    console.log("Mission",y," → Score :",y*100)
    y++

}



//chalenge 9
let base =+prompt("entrer la base");
let exposant =+prompt("entrer exposant");
let b=0;
while (b<exposant){
    b++;

}
console.log("le resultats est :",base**b)


//chalenge 10
















