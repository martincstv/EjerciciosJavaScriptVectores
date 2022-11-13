/*
Diseñar un programa que permita generar las tablas de multiplicar del 1 al 12 para cada 
uno de los números comprendidos entre 1 y 12. La función que genere las tablas deberán 
ser programadas con una función.
*/

/* const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", generarTabla);

function generarTabla(params) {
    params.preventDefault();
    let numero = document.querySelector("#numero").value;
    let titulo = document.getElementById("titulo");
    titulo.textContent = "Tabla del " + numero;
    let ingresado = document.getElementById("ingresado");
    ingresado.textContent = numero;
    ingresado.textContent = numero;
    ingresado.textContent = numero;
} */

let numero = 2;
let listaNumero = Array();
let listaResultados = Array();

for (let i = 1; i <= 12; i++) {
    listaNumero.push(numero);
    listaResultados.push(i * numero);
}

for (const iterator of object) {
    let fila = "<tr> <td>"
    fila += 
}

console.log(listaNumero);
console.log(listaResultados);