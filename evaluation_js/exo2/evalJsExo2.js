
console.log("Connected");

let i= 1; //compteur
let n = parseInt(prompt("Veuillez saisir la table souhaitée")); // nbr saisi
let h = parseInt(prompt("Veuillez saisir le nombre de résultats souhaité")); // condition saisie
let r; //résultat




function tablemult(){

 while(i<=h){

    r = n*i;
    document.write(i+"*"+n+"="+r+"<br>");
    i++



 }

document.write("Fin de la table")



}



