
var i = 0;
var scan="scan";





while (scan != "")
{   

scan = prompt("Saisissez un prénom");


document.write(i);
document.write(scan);

i++;


}


document.write("========================");

var a = prompt("Saisissez un nombre");
var b = 0;

while(b<=a)
{   
    document.write(b);
    b++

}

document.write("========================");
var c = 1;
var d = 0;
var e = 0;
var f = 0;
var g = 0;

while(c != 0 )
{
    c = prompt("Saisissez le premier nombre entier");
 
    d = prompt("Saisissez un autre nombre entier");
    c =Number(c)
    d =Number(d)
    e = c + d;

    f = e + f;

    g++;


}

document.write("La Moyenne est de : " , f/g);
document.write("La somme est de :" , f );



document.write("========================");

var x = prompt ("Saisissez la premiere table");
var n = prompt ("Saisissez la limite de la table");
var k = 1;
var l;


while(k<=n)
{
    x=Number(x)
    l= k*x
    document.write(l)
    k++

}

document.write("========================");


var myVar = ("ordinateur Portable");
var long = myVar.length
document.write(long);
var pointeur = myVar.substring(0,6);
document.write(pointeur);
var occurence = myVar.indexOf("portable");
document.write(occurence);