/*
Ingresar aleatoriamente un vector de 20 posiciones en un rango del 1 al 50 e indicar qué 
números del grupo generado son números primos.
*/


const formulario = document.querySelector("#formulario");
let vista = document.getElementById("vista");
let primos = document.getElementById("primos");

let vector = Array();
let posiciones = 20;
let minimoRango = 1;
let maximoRango = 50;

for (let i = 0; i < 20; i++) {
    let random = Math.floor(Math.random() * maximoRango) + minimoRango;
    vector.push(random);
}

function determinarPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return numero !== 1;
}

let valoresPrimos = Array();
for (const iterator of vector) {
    if (determinarPrimo(iterator)) {
        valoresPrimos.push(iterator);
    }
}

vista.textContent = "Vector: "+vector;
primos.textContent="Primos: "+valoresPrimos;