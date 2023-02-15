// tady je místo pro náš program
/*let Jmeno = prompt("Napis sve jmeno");
let vek = Number(prompt("Jaky je vas vek?"));

document.body.innerHTML += "<p>" + Jmeno + ", vek: " + vek + "</p>";
const hodinovaSazba = Number(prompt("Jaka je vasa hodinova sazba?"));
const pocetHodin = Number(prompt("Kolko hodin denne pracujete?"));
const pocetDni = Number(prompt("Kolko dni mesacne pracujete?"));

document.body.innerHTML += "<p>" + (hodinovaSazba*pocetHodin*pocetDni) + "</p>";
const hodinovaSazba = Number(prompt("Jaka je vasa hodinova sazba?"));
const pocetHodin = Number(prompt("Kolko hodin denne pracujete?"));
const pocetDni = Number(prompt("Kolko dni mesacne pracujete?"));
​
document.body.innerHTML += "<p>" + (hodinovaSazba*pocetHodin*pocetDni) + "</p>";

const hodinovaSazba = Number(prompt("Jaka je vasa hodinova sazba?"));
const pocetHodin = Number(prompt("Kolko hodin denne pracujete?"));
const pocetDni = Number(prompt("Kolko dni mesacne pracujete?"));
​
document.body.innerHTML += "<p>" + (hodinovaSazba*pocetHodin*pocetDni) + "</p>";

*/
let Jmeno = prompt("Napiš své jméno a příjmení.");
let vek = Number(prompt("Kolik je vám let?")); 
let barva = prompt("Jaká je veše nejoblíbenější barva anglicky");
document.body.innerHTML += "<p class='odstavec'>" + Jmeno + "; " + vek + "</p>";
document.querySelector('.odstavec')
odstavec.style.color = 'barva'