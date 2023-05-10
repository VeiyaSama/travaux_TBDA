
// var long = prompt("Saisissez la taille du tableau voulue");
// var nom = prompt("Saisissez votre nom");
// var prenom = prompt("Saisissez votre prenom");
// var age = prompt("Saisissez votre age");
// var signeastro = prompt("Saisissez votre Signe Astrologique");

// var tableau =[nom,prenom,age,signeastro];
// var long = tableau.length

// document.write(tableau);













// var myTableau = new Array(); // Tableau vide
// var myTableau = Array(); // Tableau vide
// var myTableau = new Array(5); // Tableau vide qui contiendra 5 éléments
// var myTableau = Array(5); // Tableau vide qui contiendra 5 éléments
// var myTableau = new Array("pomme", "poire", "banane"); // Tableau avec données
// var myTableau = Array("pomme", "poire", "banane"); // Tableau avec données
// document.write(myTableau)





function AddElement(event){

    event.preventDefault();

    let IdElement = document.getElementById("plat");

    console.log(IdElement.value);

    let ligne = document.createElement('tr');
    let cellule = document.createElement('td');

    cellule.innerHTML = IdElement.value;
    ligne.appendChild(cellule);

    let IdTableau = document.getElementById("body");

    IdTableau.appendChild(ligne);


}