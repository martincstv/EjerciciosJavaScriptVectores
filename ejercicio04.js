/*
Solicitar por teclado el ingreso de las siguientes opciones de colores (azul, verde, rojo, 
amarillo) luego mostrar la palabra traducida en inglés. Es decir, si se ingresa 'azul' debemos 
mostrar el texto 'blue'.
*/

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", traducir)

function traducir(evento) {
    evento.preventDefault();
    let color = document.querySelector("#color").value
    let respuesta = document.getElementById("respuesta");
    switch (color) {
        case "azul":
            respuesta.textContent = `blue`
            break;
        case "verde":
            respuesta.textContent = `green`
            break;
        case "rojo":
            respuesta.textContent = `red`
            break;
        case "amarillo":
            respuesta.textContent = `yellow`
            break;
        default:
            respuesta.textContent = `Opción no disponible...`
            break;
    }
}



