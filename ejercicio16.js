/*
Ingresar por teclado un número y mostrar la suma de los números que lo 
anteceden(Ejemplo 8 => 1+2+3+4+5+6+7+8 = 36).
*/

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", sumaNumerosAntecedentes)

function sumaNumerosAntecedentes(evento) {
    evento.preventDefault();
    let numero = parseInt(document.querySelector("#numero").value)
    let resultado = document.getElementById("resultado");
    let acumulador = 0;
    for (let index = numero; index > 0; index--) {
        acumulador += index;
    }
    resultado.textContent = acumulador;
}