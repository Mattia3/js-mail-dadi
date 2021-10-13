console.log("Esercizio email")

const promptEmail = prompt("Inserisci la tua email");
console.log("Email dell'utente", promptEmail);

const emailUtenti = ["mauri", "nimesh", "enri"];
console.log("Lista email", emailUtenti);

let nonEsiste = "true";

for (i = 0; i < emailUtenti.length; i++){
  const emailCorrente = emailUtenti[i];
  if(emailCorrente === promptEmail){
    let nonEsiste = "false"
    alert("benvenuto")
  }
}

if(nonEsiste){
  let nonEsiste = "true";
  alert("Email inesistente");
}
