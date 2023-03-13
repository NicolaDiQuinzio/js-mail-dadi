/*Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.


// 1.Creo un array di email autorizzate per l'acceso
let authorized = [
  "mario@gmail.com",
  "giuseppe@hotmail.com",
  "marco@gmail.com",
  "antonio@hotmail.com",
];

// 2.Chiedo all'utente la sua email
let email = prompt("Inserisci la tua email:");

// 3.Controllo se l'email è nella lista degli utenti autorizzati
// l'email è presente nella lista
if (authorized.includes(email)) {
  prompt("Benvenuto, La tua email " + email + " è valida.");
}
//l'email non è presente nella lista
else {
  prompt("Spiacenti, la tua email " + email + " non è autorizzata.");
}
*/

/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

// 1.Creo due variabili che generano un numero casuale da 1 a 6 tramite il metodo Math.random e utilizzo Math.floor per l'approssimazione in difetto
let player = Math.floor(Math.random() * 6) + 1;
let computer = Math.floor(Math.random() * 6) + 1;

// 2.Il player vince
if (player > computer) {
  prompt(
    "Hai vinto! Il tuo punteggio è " +
      player +
      " e il punteggio del computer è " +
      computer +
      "."
  );
}
//  3.il player perde
else if (computer > player) {
  prompt(
    "Hai perso. Il tuo punteggio è " +
      player +
      " e il punteggio del computer è " +
      computer +
      "."
  );
}
//4.il player pareggia
else {
  prompt(
    "Pareggio. Il tuo punteggio è " +
      player +
      " e il punteggio del computer è " +
      computer +
      "."
  );
}
