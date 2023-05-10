const Randomiser = Math.floor(Math.random() * 100); // Génère un nombre aléatoire entre 1 et 100
document.write(Randomiser);


function test() {
   proposition = parseInt(document.getElementById("textBox1").value); // Convertit la saisie en nombre entier
  if (isNaN(proposition)) {
    label1.textContent = "Veuillez saisir un nombre valide";
  } else if (proposition < Randomiser) {
    label1.textContent = "Trop petit";
  } else if (proposition > Randomiser) {
    label1.textContent = "Trop grand";
  } else {
    label1.textContent = "Bravo, vous avez trouvé le nombre!";
  }
}
document.getElementById("button1").addEventListener("click", Randomiser);