/*
Diseñar una función que enviando un vector de enteros calcule la desviación estándar.
*/

const formulario = document.querySelector("#formulario");
var lista = Array();

formulario.addEventListener("submit", ordenar);

function ordenar(params) {
    params.preventDefault();

    let numero = parseInt(document.querySelector("#numero").value);
    let vista = document.getElementById("vista");
    let desviacionEstandar = document.getElementById("desviacionEstandar");
    lista.push(numero);
    //
    let listaAux = Array();
    let sumatoria = 0;
    let longitud = lista.length;
    for (const iterator of lista) {
        sumatoria += iterator;
    }
    let mediaAritmetica = (sumatoria / longitud).toFixed(2);

    for (const iterator of lista) {
        listaAux.push(Math.pow((iterator - mediaAritmetica), 2).toFixed(2));
    }

    let numerador = 0;
    for (const iterator of listaAux) {
        numerador += parseFloat(iterator);
    }
    
    let resultado = (Math.sqrt(numerador / (longitud-1))).toFixed(2);

    //

    vista.textContent = "Valores ingresados: " + lista;
    desviacionEstandar.textContent = "Desviación Estándar: " + resultado;
}


/* let lista = [5, 15, 12, 18, 28];
let listaAux = Array();
let sumatoria = 0;
let longitud = lista.length;
for (const iterator of lista) {
    sumatoria += iterator;
}
let mediaAritmetica = (sumatoria / longitud).toFixed(2);
console.log(mediaAritmetica);
for (const iterator of lista) {
    listaAux.push(Math.pow((iterator - mediaAritmetica), 2).toFixed(2));
}
console.log(listaAux);
let numerador = 0;
for (const iterator of listaAux) {
    numerador += parseFloat(iterator);
}
console.log(numerador);

let resultado = (Math.sqrt(numerador / (longitud-1))).toFixed(2);

console.log(resultado); */


