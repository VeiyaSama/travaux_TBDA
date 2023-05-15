
console.log("Connected")

let box;
let prenom = prompt("Veuillez saisir un prenom");

const l = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane" ,"<br>"];
 

box = l.indexOf(prenom);
 

document.write(prenom+"<br>");
while(box != -1){
    
    l.splice(box,1);
    prenom = prompt("Veuillez saisir un prenom");
    box = l.indexOf(prenom);
    l.splice(box,1);
    document.write("Hop un prénom de trouver<br>"+prenom+"<br>");
  


} 
    document.write("Ce prénom ne se trouve pas dans la liste <br>");
    document.write("Voici la liste finale des prénoms restants a trouver : " +l);


    



