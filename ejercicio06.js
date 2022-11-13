/*
Diseñar una función que enviando un número entero devuelva su factorial.
*/

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", factorial);

function factorial(evento) {
    evento.preventDefault();

    let numero = parseInt(document.querySelector("#numero").value)
    let resultado = document.getElementById("resultado");
    let factorial = 1;
    for (let index = numero; index > 0; index--) {
        factorial *= index;
    }
    resultado.textContent = factorial;
}