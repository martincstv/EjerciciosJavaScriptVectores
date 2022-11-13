/*
Generar una función que permita resolver una ecuación de segundo grado. Considerar los 
casos en que la curva no se intersecte con el eje x.
*/
const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", ecuacionSegundoGrado)

function ecuacionSegundoGrado(params) {
    params.preventDefault();
    let coeficiente_a = document.querySelector("#coeficiente_a").value;
    let coeficiente_b = document.querySelector("#coeficiente_b").value;
    let coeficiente_c = document.querySelector("#coeficiente_c").value;
    let valor_x1 = document.getElementById("valor_x1");
    let valor_x2 = document.getElementById("valor_x2");
    let x1 = 0, x2 = 0;
    /*
    discriminante > 0 reales y distintas
    discriminante = 0 reales e iguales
    discriminante < no posee soluciones reales
    */
    let discriminante = Math.pow(coeficiente_b, 2) - (4 * coeficiente_a * coeficiente_c);
    if (discriminante >= 0) {
        x1 = ((-coeficiente_b + Math.sqrt(discriminante)) / (2 * coeficiente_a)).toFixed(2);
        x2 = ((-coeficiente_b - Math.sqrt(discriminante)) / (2 * coeficiente_a)).toFixed(2);
        valor_x1.textContent = "x1: " + x1;
        valor_x2.textContent = "x2: " + x2;
    } else {
        auxiliar = ((-coeficiente_b) / (2 * coeficiente_a)).toFixed(2);//i +-
        x = ((Math.sqrt(discriminante * -1)) / (2 * coeficiente_a)).toFixed(2);//j
        valor_x1.textContent = "x1: " + (auxiliar + " + " + x + "i");
        valor_x2.textContent = "x2: " + (auxiliar + " - " + x + "i");
    }
}