/*
Crear un código en Javascript que me permita:
- Ingresar valores numéricos a un vector
- Generar una función que me permita ordenar el vector en orden ascendente
- Generar una función que permita ordenar el vector de manera descendente
*/

const formulario = document.querySelector("#formulario");
var lista = Array();

formulario.addEventListener("submit", ordenar);

function ordenar(params) {
    params.preventDefault();

    let numero = document.querySelector("#numero").value;
    let ascendente = document.getElementById("ascendente");
    let descendente = document.getElementById("descendente");

    lista.push(numero);
    function ordenarAscendente(lista) {
        return lista.sort((a, b) => a - b);
    }
    function ordenarDescendente(lista) {
        return lista.sort((a, b) => b - a);
    }

    ascendente.textContent = "Ordenado ascendente: " + ordenarAscendente(lista);
    descendente.textContent = "Ordenado descendente: " + ordenarDescendente(lista);
}