/*
Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
*/

// Creo una variabile con una array della lista delle mail che possono accedere
const accessMail = ['xyz@gmail.com', 'xyz@hotmail.com', 'xyz@yahoo.com', 'xyz@microsoft.com', 'xyz@boolean.com'];
console.log('Indirizzi mail autorizzati:');
console.log(accessMail.toString().replaceAll(",", "\n"));

// Creo una variabile cui assegno un prompt per effettuare poi il controllo della mail inputata dall'utente
const userMail = prompt('Inserisci il tuo indirizzo mail per accedere al gioco dei dadi');

// Effettuo controllo se la mail indicata dall'utente è autenticata all'accesso
if (accessMail.includes(userMail)) {

    console.log('Autenticato');
    // Se autenticato creo una variabile per l'utente e per il computer per assegnare il numero casuale da 1 a 6 di ciascuno
    const userNumber = Math.floor(Math.random() * 6) + 1
    console.log(userNumber);

    const comNumber = Math.floor(Math.random() * 6) + 1
    console.log(comNumber);

    // Se il numero utente è maggiore del numero computer allora
    if (userNumber > comNumber) {

        // Alert con messaggio vittoria utente, ricarica pagina per riprovare
        alert(`HAI VINTO!\nIl tuo numero estratto è ${userNumber}, mentre quello del computer è ${comNumber}.`);

    }
    // Se invece il numero utente è minore del numero computer allora
    else if (userNumber < comNumber) {

        // Alert con messaggio sconfitta utente, ricarica pagina per riprovare
        alert(`HAI PERSO!\nIl tuo numero estratto è ${userNumber}, mentre quello del computer è ${comNumber}.`);

    }
    // Altrimenti (se i numeri sono pari)
    else {

        // Alert con messaggio pareggio, ricarica pagina per riprovare
        alert(`HAI PAREGGIATO!\nIl tuo numero estratto è ${userNumber}, mentre quello del computer è ${comNumber}.`);

    }

}   // Altrimenti (se utente non autenticato)
else {
    console.log('NON autenticato');
    // Alert non hai accesso al gioco, ricarica pagina per riprovare
    alert('La tua mail non è autenticata. Premi "F5" e riprova con un altro indirizzo mail.');
}

