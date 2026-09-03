const prompt = require("prompt-sync")();

let nombre1=+prompt("entrer le grand nombre");
let nombre2=+prompt("entrer le petit nombre");
console.log("X =",nombre1)
console.log("N =",nombre2)
for(let i=0;i<nombre1;i++){
    if((i+1)*nombre2<=nombre1){
        
        console.log((i+1)*nombre2)
     

    }
}
