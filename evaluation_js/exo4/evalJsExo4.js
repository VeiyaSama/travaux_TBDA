let pu = prompt("entrez un prix");
let qtecom = prompt("entez le nombre de quantite");
let tot = pu*qtecom
document.write("le prix total est de : "+tot+"€<br>")



if(tot<=100){ 
    rem=0
  }
else if((tot>=100)&&(tot<=200)){
}      
else if(tot>200){
    rem=0.1
  }
totR = tot-(tot*rem)
document.write("le prix avec la remise est de : "+totR+"<br>")

let port = 0
if(totR>500){
    port=0
}else if(totR<=500){
    port=totR*0.2
}
if(port>6){
     port = totR*0.2
    }
else if(port<6)
port=6
document.write("le total de la commande : "+totR+"€<br>"+"plus les frais de port sont de : "+port+"€<br>"+"le total est de : "+(port+totR)+"€")