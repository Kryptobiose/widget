// Fügt eine führende Null hinzu, wenn die Zahl kleiner als 10 ist
function fuehrendeNull(zahl) {
  return (zahl < 10 ? '0' : '') + zahl;
}

// Holt die aktuelle Uhrzeit und zeigt sie an
function uhrzeit() {
  var jetzt = new Date();           // Aktuelles Datum und Uhrzeit
  var h = jetzt.getHours();         // Stunden
  var m = jetzt.getMinutes();       // Minuten
  var s = jetzt.getSeconds();       // Sekunden

  m = fuehrendeNull(m);             // Minuten formatieren
  s = fuehrendeNull(s);             // Sekunden formatieren

  // Setzt die formatierte Uhrzeit in das HTML-Element mit der ID 'uhr'
  document.getElementById('uhr').innerHTML = h + ':' + m + ':' + s;

  // Aktualisiert die Uhr alle 500 Millisekunden
  setTimeout(uhrzeit, 500);
}

// Startet die Uhr, sobald die Seite geladen ist
document.addEventListener('DOMContentLoaded', uhrzeit);
