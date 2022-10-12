//Dati
const inputNome = document.getElementById('inputNome');
const inputKm = document.getElementById('inputKm');
const inputEta = document.getElementById('inputEta');
const bottoneGenera = document.getElementById('btn-input');






const nomeCognome = prompt("Inserisci nome e cognome");
const kmDaPercorrere = parseInt("Quanti km vuoi percorrere?");
const etaPasseggero = parseInt("Quanti anni hai?");
const prezzoKm = 0.21;
let sconto = 0;
const prezzoBiglietto = (kmDaPercorrere * prezzoKm)
let scontoApplicato;
let prezzoScontato;
let prezzoFinale;
let output;

prezzoFinale = prezzoBiglietto;

if(etaPasseggero < 18){
  literalAge = ('minorenne')
  sconto = 0.2;
  prezzoFinale = prezzoBiglietto - (prezzoBiglietto * sconto);
}

else if(etaPasseggero > 65) {
  sconto = 0.4;
  literalAge = ('over65')
    prezzoFinale = prezzoBiglietto - (prezzoBiglietto * sconto);
}

else {
  literalAge = ('maggiorenne')
}

console.log('Il prezzo del biglietto è ',prezzoFinale)

output = `
${prezzoFinale.toFixed(2)}
`;
document.getElementById(`prezzo-biglietto`).innerHTML += output;