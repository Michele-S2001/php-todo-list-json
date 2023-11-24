# TODO LIST WITH JSON & PHP

- Prima assicuratevi che la vostra pagina index.php (il vostro front-end) riesca a comunicare correttamente con il vostro script PHP (le vostre “API”).

- Lo step successivo è quello di “testare” l’invio di un nuovo task, sapendo che manca comunque la persistenza lato server

### stampa delle tasks
- leggo le task dal file json
- le prendo e le stampo nella mia todo list

### aggiungere una nuova task
- genero una chiamata al click del tasto enter e con axios in post invio i dati per nuova task
- credo un file addTask per aggiungere la task al file json
- controllo se il dato in post è valido
- recupero il file json e lo converto in un array associativo per php
- aggiungo la task all'array
- aggiungo la chiave results alla risposta che per valore ha l'array di tasks aggiornato
- riconverto l'array aggiornato in json
- sovrascrivo quel json all'indirizzo tasks.json
- restituisco come risposta il nuovo array per poi ciclarlo con vue

### cancellare una task
- al click sulla x invoco una funzione
- porto con me l'indice dell'item su cui ho cliccato
- faccio una chiamata in post per modificare l'array json
- recupero l'indice "dall'altra parte"
- recupero il json e lo converto 
- con array_splice rimuovo l'elemento all'indice corrispondente
- creo una risposta con il nuovo array
- converto il nuovo array in una stringa json 
- sovrascrivo la nuova stringa json al file tasks.json
- ritorno come risposta il nuovo array

### toggle del task
- ascoltare l'evento click su ogni singola task
- come argomento recuperare l'indice
- inviare l'indice come data in una chiamata axios con post
- recupero l'indice nell'endpoint 
- recupero il json e lo converto 
- cambio la chiave "done" dello iesimo elemento tramite l'indice
- creo una risposta con il nuovo array
- converto il nuovo array in una stringa json 
- sovrascrivo la nuova stringa json al file tasks.json
- ritorno come risposta il nuovo array