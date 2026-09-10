let prompt=require("prompt-sync")();

//chalenge 1
const student={
    firstName : "Yassine" ,
    lastName : "Amrani" ,
    Age : 21 ,
    city : "youssoufia",
    school : "youcode"

};
console.log(student.firstName+" "+student.lastName+"ans et habite à "+student.city)


//chalenge 2

let user = {
    username: "Ahmed",
    age: 22,
    city: "Marrakech",
    status: "student"
};

console.log(user.username)
console.log(user.age)
user.age=23;
user.status="worker";
user["email"]=null;
console.log(user)

//chalenge 3

let product={
    namee:null,
    price:null,
    category :null,
    quantity :null,
    available:null,
}
product.namee =prompt("entrer le nom de produit")
product.price=+prompt("entrer le prix de produite")
product.quantity=+prompt("entrer la quantitie de produits")
product.category=prompt("entrer la categorie de product ")
product.available=prompt("entrer yes si le produits available and no sinon")

console.log(product.namee)
console.log(product.price)
console.log(product.category)

if((product.available).toLowerCase()=="yes")console.log("le produit est available")
else console.log("le produit n'est pas available")

console.log("le prix total de stock est",product.price*product.quantity)


//chalenge 4

let employee = {
    firstName: "Sara",
    lastName: "Amrani",
    salary: 7000,
    bonus: 1000,
    absenceDays: 2
};
console.log("Le salaire de base est",employee.salary)
console.log("Le bonus est ",employee.bonus)
console.log("Le salaire final est ",employee.salary+employee.bonus-(employee.absenceDays*200))


//chalenge 5

let account = {
    owner: "Tayeb",
    balance: 5000,
    type: "saving"
};

function Afficherlesolde(account){
    console.log("le solde est :",account.balance);
}

function deposer(account){
    let montant=+prompt("entrer le mantant tu veux deposer");
    if(montant<0)console.log("le montant doit etre un nombre positive");
    else return account.balance+=montant;

}
function retirer(account){
    let montant=+prompt("entrer le mantant tu veux deposer");
    if(montant<0)console.log("le montant doit etre un nombre positive");
    if (montant>account.balance) console.log("le montant doit etre inferiure ou egale au balance");
    else return account.balance-=montant;
}

function compteinfo(account){
    console.log("bonjoure monsieur "*+account.owner+" tu as an montant de "+account.balance+" DH","ton compt est de type ",account.type)
}


//chalenge 6
let studentee = [
    {
        firstName: "Ali",
        age: 20,
        city: "Youssoufia"
    },
    {
        firstName: "Sara",
        age: 22,
        city: "Marrakech"
    },
    {
        firstName: "Omar",
        age: 19,
        city: "Safi"
    }
];

console.log(studentee)
for(i=0;i<studentee.length;i++)console.log(students[i].firstName);
for(i=0;i<studentee.length;i++)console.log(students[i].age);
for(i=0;i<students.length;i++)console.log(students[i].firstName,"9ra mzyan adak lbrhoch ");


//chalenge 7
let studentss = [
    { name: "Ali", note: 15 },
    { name: "Sara", note: 8 },
    { name: "Omar", note: 17 },
    { name: "Imane", note: 11 },
    { name: "Yassine", note: 6 }
];

for(i=0;i<studentss.length;i++){
    console.log(studentss[i]);
    console.log(studentss[i].note);
    let admis=0;
    if(studentss.note>=10){
        console.log("admis")
        admis++;
    }
}
let nonadmis=studentss.length-admis;



//chalenge 8
let studentes = [
    { id: 1, name: "Ali", age: 20 },
    { id: 2, name: "Sara", age: 22 },
    { id: 3, name: "Omar", age: 19 },
    { id: 4, name: "Imane", age: 21 }
];

function rechercherEtudiant(id){

    let j=false;
    let a;
    for(i=0;i<studentes.length;i++){
        if(id==studentes[i].id){
            j=true;
            a=i;

        }
    }
    if(j){
        console.log("Étudiant trouvé !")
        console.log(studentes[a])
    }
    else console.log("Aucun étudiant trouvé avec cet ID.")
}
rechercherEtudiant(1)

//chalenge 9

let products = [
    {
        id: 1,
        name: "Laptop",
        category: "Informatique",
        price: 7500
    },
    {
        id: 2,
        name: "Phone",
        category: "Smartphone",
        price: 3500
    },
    {
        id: 3,
        name: "Keyboard",
        category: "Informatique",
        price: 500
    },
    {
        id: 4,
        name: "Monitor",
        category: "Informatique",
        price: 2200
    }
];
function rechercherParId(id){
    let j=false;
    let a;
    for(i=0;i<products.length;i++){
        if(id==products[i].id){
            j=true;
            a=i;

        }
    }
    if(j){
        console.log("product trouvé !")
        console.log(products[a])
    }
    else console.log("Aucun products trouvé avec cet ID.")

}
function rechercherParNom(Nom){
    let j=false;
    let a;
    for(i=0;i<products.length;i++){
        if(Nom==products[i].name){
            j=true;
            a=i;

        }
    }
    if(j){
        console.log("product trouvé !")
        console.log(products[a])
    }
    else console.log("Aucun products trouvé avec cet ID.")

}
function rechercherParCategorie(categorie){
    let j=false;
    let a;
    for(i=0;i<products.length;i++){
        if(categorie==products[i].category){
            j=true;
            a=i;

        }
    }
    if(j){
        console.log("product trouvé !")
        console.log(products[a])
    }
    else console.log("Aucun products trouvé avec cet ID.")

}
function rechercherParPrix(prix){
    let j=false;
    let a;
    for(i=0;i<products.length;i++){
        if(prix==products[i].price){
            j=true;
            a=i;

        }
    }
    if(j){
        console.log("product trouvé !")
        console.log(products[a])
    }
    else console.log("Aucun products trouvé avec cet ID.")

}

//chalenge 10 
let students = [
    {
        id: 1,
        name: "Ali",
        age: 21,
        city: "Youssoufia",
        note: 15
    },
    {
        id: 2,
        name: "Sara",
        age: 22,
        city: "Marrakech",
        note: 17
    },
    {
        id: 3,
        name: "Omar",
        age: 20,
        city: "Safi",
        note: 8
    },
    {
        id: 4,
        name: "Imane",
        age: 23,
        city: "Youssoufia",
        note: 12
    },
    {
        id: 5,
        name: "Yassine",
        age: 19,
        city: "Safi",
        note: 9
    }
];

