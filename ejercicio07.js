/*
Diseñar una función que enviando un vector de enteros calcule el promedio
*/
const formulario = document.querySelector("#formulario");
var lista = Array();

formulario.addEventListener("submit", ordenar);

function ordenar(params) {
    params.preventDefault();

    let numero = parseInt(document.querySelector("#numero").value);
    let vista = document.getElementById("vista");
    let promedio = document.getElementById("promedio");

    lista.push(numero);
    let longitud = lista.length;
    let sumatoria = 0;
    for (const iterator of lista) {
        sumatoria += iterator;
    }

    let resultado = (sumatoria / longitud).toFixed(2);

    vista.textContent = "Valores ingresados: " + lista;
    promedio.textContent = "Promedio: " + resultado;
}
