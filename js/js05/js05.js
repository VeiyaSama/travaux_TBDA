

var reponse1 = window.prompt("Saisissez votre nom");
var reponse2 = window.prompt("Saisissez votre prénom");
document.write("\n nom\n :" + reponse1);
document.write("\n prénom\n :" + reponse2);




 document.write(" \n------------------------------------------------------ \n ") ;

var nombre1 = window.prompt(" Saisissez votre premier nombre ");
var nombre2 = window.prompt(" Saisissez votre deuxieme nombre ");
var nombre3 = nombre1 * nombre2;
document.write("\n Voici la réponse \n :" + nombre3) ;

document.write(" \n------------------------------------------------------ \n ") ;

var degre = window.prompt(" Saisissez votre température a convertir");
document.write("\n Voici la température choisie \n :" + degre) ;
var far = degre *9
var far = far/5
var far = far + 32
document.write("\n Voici la convertion \n :" + far) ;