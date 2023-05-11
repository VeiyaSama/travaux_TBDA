let proposition = parseInt(prompt("veuillez saisir l'age de la personne"))
let compteur1 =0;
let compteur2 =0;
let compteur3 =0;

            while (proposition < 100) {

                
                if (proposition < 20) {

                    compteur1++

                    proposition = parseInt(prompt("veuillez saisir l'age de la personne"));


                }

                else if (proposition > 40) {


                    compteur2++
                
                    proposition = parseInt(prompt("veuillez saisir l'age de la personne"));
    

                }



                else if (proposition > 20 && proposition < 40) {

                    compteur3++
                   
                    proposition = parseInt(prompt("veuillez saisir l'age de la personne"));


                }
                   
            }

            compteur2++
            document.write("Il y a : " + compteur1 + "Enfants <br>");
            document.write("Il y a : " + compteur3 + "Adultes <br>");
            document.write("Il y a : " + compteur2 + "Vieux <br>");

