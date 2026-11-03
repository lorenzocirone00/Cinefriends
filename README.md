CINEFREINDS — SITO WEB STATICO

CONTENUTO
- index.html: homepage, film della settimana, programmazione e modulo prenotazioni.
- styles.css: grafica responsive per computer e smartphone.
- films.js: elenco dei film e dati da aggiornare ogni settimana.
- script.js: visualizzazione automatica di film e programmazione.
- grazie.html: pagina mostrata dopo l'invio del modulo.

1. PERSONALIZZARE I FILM
Apri films.js con un editor di testo. Modifica i film, le date, l'orario, la sala e l'indirizzo.
Il primo film nell'elenco è quello mostrato in homepage. Aggiungi o rimuovi oggetti seguendo la stessa struttura.
I poster sono grafiche tipografiche originali, non locandine ufficiali. Puoi sostituirli con immagini autorizzate.

2. ATTIVARE LE PRENOTAZIONI (GRATUITO)
Il modulo usa FormSubmit, un servizio esterno con piano gratuito:
- In index.html cerca: https://formsubmit.co/INSERISCI-LA-TUA-EMAIL
- Sostituisci INSERISCI-LA-TUA-EMAIL con l'indirizzo email che riceverà le richieste.
- Pubblica il sito e invia una prenotazione di prova.
- FormSubmit invierà un'email di verifica: aprila e conferma l'attivazione.
Dopo l'attivazione, le richieste arriveranno alla tua casella. Controlla i limiti e le condizioni aggiornate del servizio prima di pubblicare.
Nota privacy: il modulo raccoglie nome, email e numero di posti. Inserisci sul sito un'informativa privacy adeguata al tuo caso e raccogli solo i dati necessari. Il testo di consenso incluso è un promemoria essenziale, non sostituisce un'informativa GDPR completa.

3. PUBBLICARE GRATIS CON GITHUB PAGES
- Crea un account gratuito su GitHub.
- Crea un nuovo repository pubblico, ad esempio "cineforum".
- Carica tutti i file mantenendo la struttura.
- Vai in Settings > Pages.
- In "Build and deployment" scegli "Deploy from a branch", branch "main" e cartella "/ (root)", poi salva.
- Dopo qualche minuto GitHub mostrerà l'indirizzo pubblico del sito nella sezione Pages.

ALTERNATIVA
Puoi caricare la cartella su Netlify Drop per una pubblicazione rapida; verifica le condizioni del piano gratuito e configura il dominio se necessario.

NOTE
Il sito è statico: non serve acquistare un dominio o un hosting per iniziare. Per le prenotazioni serve configurare l'indirizzo email nel modulo come descritto sopra.
