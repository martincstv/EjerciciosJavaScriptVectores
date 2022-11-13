/*
Generar de manera aleatoria un vector numérico de 50 números comprendidos entre 1 a 
100 (sin repetirse), ordenados de manera aleatoria, e indicar cuáles de ellos son números 
primos.
*/

const formulario = document.querySelector("#formulario");
let vista = document.getElementById("vista");
let primos = document.getElementById("primos");

let vector = Array();
let vectorAuxiliar = Array();
let posiciones = 50;
let minimoRango = 1;
let maximoRango = 100;

for (let i = 0; i < posiciones * 2; i++) {
    let random = Math.floor(Math.random() * maximoRango) + minimoRango;
    if (!vectorAuxiliar.includes(random)) {
        vectorAuxiliar.push(random);
    }
}
for (let j = 0; j < posiciones; j++) {
    vector.push(vectorAuxiliar[j]);
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

vista.textContent = "Vector: " + vector;
primos.textContent = "Primos: " + valoresPrimos;