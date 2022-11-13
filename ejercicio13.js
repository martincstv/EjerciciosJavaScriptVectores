/*
Ingrese 10 números enteros por teclado. Indicar:
a. Cuantos son pares
b. Cuantos son impares
c. Cuántos son primos
d. Cuántos son múltiplos de 3
*/

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", clasificar);

function clasificar(params) {
    params.preventDefault();
    let numero1 = parseInt(document.querySelector("#numero1").value);
    let numero2 = parseInt(document.querySelector("#numero2").value);
    let numero3 = parseInt(document.querySelector("#numero3").value);
    let numero4 = parseInt(document.querySelector("#numero4").value);
    let numero5 = parseInt(document.querySelector("#numero5").value);
    let numero6 = parseInt(document.querySelector("#numero6").value);
    let numero7 = parseInt(document.querySelector("#numero7").value);
    let numero8 = parseInt(document.querySelector("#numero8").value);
    let numero9 = parseInt(document.querySelector("#numero9").value);
    let numero10 = parseInt(document.querySelector("#numero10").value);
    let pares = document.getElementById("pares");
    let impares = document.getElementById("impares");
    let primos = document.getElementById("primos");
    let multiplos3 = document.getElementById("multiplos3");
    let lista = Array();
    //
    let resultado1 = 0;
    let resultado2 = 0;
    let resultado3 = 0;
    let resultado4 = 0;

    lista.push(numero1);
    lista.push(numero2);
    lista.push(numero3);
    lista.push(numero4);
    lista.push(numero5);
    lista.push(numero6);
    lista.push(numero7);
    lista.push(numero8);
    lista.push(numero9);
    lista.push(numero10);

    //

    function determinarPrimo(numero) {
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                return false;
            }
        }
        return numero !== 1;
    }

    //

    for (const iterator of lista) {
        if (iterator % 2 == 0) {
            resultado1++;
        }
        else {
            resultado2++;
        }
        if (determinarPrimo(iterator)) {
            resultado3++;
        }
        if (iterator % 3 == 0) {
            resultado4++;
        }
    }
//

    pares.textContent = "Pares: " + resultado1;
    impares.textContent = "Impares: " + resultado2;
    primos.textContent = "Primos: " + resultado3;
    multiplos3.textContent = "Multiplos de (3) : " + resultado4;

}