console.log("Connected")



let nom = document.getElementById("nom").value
let prenom = document.getElementById("prenom").value
let date = document.getElementById("date").value
let codeP = document.getElementById("codeP").value
let adrs = document.getElementById("adrs").value
let ville = document.getElementById("ville").value
let email = document.getElementById("email").value
let sujet = document.getElementById("sujet").value
let box = document.getElementById("box").value
let nomError = document.getElementById("nomError");
let prenomError = document.getElementById("prenomError");
let dateError = document.getElementById("dateError");
let codePError = document.getElementById("codePError");
let adrsError = document.getElementById("adrsError");
let villeError = document.getElementById("villeError");
let emailError = document.getElementById("emailError");
let sujetError = document.getElementById("sujetError");
let boxError = document.getElementById("boxError");
// var erreur;

// document.getElementById("formulaireContact").addEventListener("submit",function(event){

//     alert("Formulaire envoyé")
//     if(!form.value){
//         event.preventDefaults();
//     }
// }








//     erreur="veillez mettre prenom"
// }
// if(erreur){
//     e.preventDefault
//     document.getElementById("erreur").innerHTML = erreur;
// }
// }

// )

// function MessError() {
//     if (nom === "") {
//         nomError.innerHTML = "veuillez entrez votre nom";
//         nomError.style.color = "red";
  
//     }


//     if (prenom === "") {
//         prenomError.innerHTML = "veuillez entrez votre prénom";
//         prenomError.style.color = "red";

//     }

//     if (date === "") {
//         dateError.innerHTML = "veuillez entrez votre date de naissance";
//         dateError.style.color = "red";
//     }


//     if (codeP === ""){
//         codePError.innerHTML = "veuillez entrez votre code postal";
//         codePError.style.color="red";

//     }else if(!/^[0-9]{5}$/.test(codeP)){
//         codePError.innerHTML = "le code doit être de 5 chiffres";
//         codePError.style.color="red";



//     if (adrs === "") {
//         adrsError.innerHTML = "veuillez entrez votre adresse";
//         adrsError.style.color = "red";
//     }


//     if (ville === "") {
//         villeError.innerHTML = "veuillez entrez votre ville";
//         villeError.style.color = "red";
//     }


//     if (sujet === "") {
//         sujetError.innerHTML = "veuillez entrez votre ville";
//         sujetError.style.color = "red";
//     }


//     if(email === ""){
//         emailError.innerHTML = "veuillez entrez votre email";
//         emailError.style.color="red";
 
//     } else if (!/\S+@\S+\.\S+/.test(email)){
//         emailError.innerHTML = "veuillez entrez un mail valide";
//         emailError.style.color="red";

//     }


//     if (box === ""){
//         boxError.innerHTML = "veuillez poser votre question";
//         boxError.style.color="red";
//     }

//     }

// }
// MessError()

let valid = true;

let form = document.querySelector('#formulaireContact');
form.addEventListener('submit', (event) => {

if (!form.nom.value){
    let error = document.querySelector('#nomError')
    event.preventDefault();
    error.textContent = "Le champ nom est invalide"
    error.style.color = "red"
}

if (!form.prenom.value){
    let error = document.querySelector('#prenomError')
    event.preventDefault();
    error.textContent = "Le champ prenom est invalide"
    error.style.color = "red"
}

if (!form.date.value){
    let error = document.querySelector('#dateError')
    event.preventDefault();
    error.textContent = "le champ date est invalide"
    error.style.color = "red"
}

if (!form.codeP.value){
    let error = document.querySelector('#codePError')
    event.preventDefault();
    error.textContent = "le champ codeP est invalide"
    error.style.color = "red"
}

if (!form.adrs.value){
    let error = document.querySelector('#adrsError')
    event.preventDefault();
    error.textContent = "le champ adresse est invalide"
    error.style.color = "red"
}

if (!form.ville.value){
    let error = document.querySelector('#villeError')
    event.preventDefault();
    error.textContent = "le champ ville est invalide"
    error.style.color = "red"
}

if (!form.email.value){
    let error = document.querySelector('#emailError')
    event.preventDefault();    
    error.textContent = "le champ mail est invalide"
    error.style.color = "red"
}

if (!form.sujet.value){
    let error = document.querySelector('#sujetError')
    event.preventDefault();
    error.textContent = "le champ demande est invalide"
    error.style.color = "red"
}

if (!form.box.value){
    let error = document.querySelector('#boxError')
    event.preventDefault();
    error.textContent = "le champ question est invalide"
    error.style.color = "red"
}




 }
 )



 //Sa fonctionne de temps en temps en vrai le code me pisse dessus j'en ai marre bisous