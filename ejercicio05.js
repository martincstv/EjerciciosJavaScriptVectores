/*
Crear una función anónima a la cual le envíe cinco enteros y los muestre ordenados de 
mayor a menor.
*/

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", ordenar);

function ordenar(evento) {
    evento.preventDefault();
    let numero1 = document.querySelector("#numero1").value;
    let numero2 = document.querySelector("#numero2").value;
    let numero3 = document.querySelector("#numero3").value;
    let numero4 = document.querySelector("#numero4").value;
    let numero5 = document.querySelector("#numero5").value;
    let resultado = document.getElementById("resultado");

    let numeros = [numero1, numero2, numero3, numero4, numero5];
    let ordenarDescendente = function (array) {
        return (array.sort((a, b) => b - a));
    }

    resultado.textContent = "Ordenado en forma descendente: " + ordenarDescendente(numeros);
}