$liste = document.getElementById("liste");
$pkmn = document.getElementById("pkmn");
$btn = document.getElementById("btn");
$liberer = document.getElementById("liberer");

tableau = ["Pikachu","Ronflex","Mew"];

function afficher() {
	elements = "";
	for (i = 0; i < tableau.length; i++) {
		elements += "<li>" + tableau [i] + "</li>"
	}
	$liste.innerHTML = elements;
}

function ajouter() {
	tableau.push($pkmn.value);
	afficher();
}

function supprimer() {
	tableau.pop()
	afficher();
}

afficher();
$btn.onclick = ajouter;
$liberer.onclick = supprimer;