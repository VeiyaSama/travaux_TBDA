var nombre1= window.prompt("Saisissez un nombre");

nombre1 = nombre1%2;
//document.write(nombre1)//
if (nombre1 == 0)


{
    
    document.write("\n Votre nombre est pair\n ");


}

else {

    document.write("\n Votre nombre est impair\n ");

}



var age= window.prompt("Saisissez année de naissance");

age = age - 2023;
age = Math.abs(age)
document.write(age);

if (age >= 18)

{

    document.write("\n Vous etes majeur\n ");

}
else
{

    document.write("\n Vous etes mineur\n ");

}



var nombre2= window.prompt("Saisissez un nombre");
var nombre3= window.prompt("Saisissez un nombre");
var ope= window.prompt("Saisissez un operateur");
var résult;


if (ope === "/")

{
  résult=nombre2 / nombre3;
  document.write(résult);


}
else if (ope === "+")

{
  résult=nombre2 + nombre3;
  document.write(résult);


}
else if (ope === "-")

{
  résult=nombre2 - nombre3;
  document.write(résult);


}
else if (ope === "*")

{
  résult=nombre2 * nombre3;
  document.write(résult);


}

// else{
//     document.write("\n Vous n'avez pas entré d'opérateur correct\n ");
// }


//if (opé != "/,+,-,*")
//{
 //   if(opé == '/')
 //   {
  //      if(opé == '+')
   //     {
    //        if(opé == '-')
    //        {
     //           if(opé == '*')
      //          {

        //        }
          //  }
 //       }
  //  }
//}