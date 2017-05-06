$liste = document.getElementById("liste");
$nom = document.getElementById("nom");
$prenom = document.getElementById("prenom");
$email = document.getElementById("email");
$tel = document.getElementById("tel");
$ajouter = document.getElementById("ajouter");

contact = [{
  prenom: "Cousin",
  nom:  "Machin",
  email:  "lacrypte@enfer.gouv",
  tel: "0666999666"
}, {
  prenom: "Test",
  nom: "Essai",
  email: "essai-de-test@laposte.com",
  tel: "0561161151"
}, {
  prenom: "Jeane",
  nom: "Esserge",
  email: "volleypassion@lol.jp",
  tel: "0455869878"
} ];

function texteContact(contact) {
    return contact.prenom + " " + contact.nom + " (" + contact.tel + ")" + " " + contact.email ;
};

function afficherListe() {
    elements = "";
    for (i = 0; i < contact.length; i++) {
        elements += "<li>" + texteContact(contact[i]) + "</li>";
    }
    $liste.innerHTML = elements;
};

function ajouter() {
    contact.push({
        prenom: $prenom.value,
        nom: $nom.value,
        tel: $tel.value,
        email: $email.value,
    });
    afficherListe();
}

$ajouter.onclick = ajouter;
afficherListe();
