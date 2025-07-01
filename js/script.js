//biglietto del treno

//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

let age = prompt("inserite la vostra età ");
console.log(age);

let km = prompt("inserite il numero di km che volete percorrere ");
console.log(km);

/*Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)

va applicato uno sconto del 20% per i minorenni

va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.*/

let priceTicket =(0.21 * km);
console.log(priceTicket);


