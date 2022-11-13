/*
Utilizando el coro del Himno Nacional, conviértalo a un array de caracteres y especifique 
cuántos de esos elementos son: vovales, consonantes y cuantas letras llevan tildes.

Salve oh patria mil veces oh patria!
¡Gloria a ti!
¡Gloria a ti!
Ya tu pecho, tu pecho rebosa,
gozo y paz ya tu pecho rebosa,
y tu frente, tu frente radiosa
más que el sol contemplamos lucir.

*/

const formulario = document.querySelector("#formulario");
let vocales = document.getElementById("vocales");
let consonantes = document.getElementById("consonantes");
let letrasConTilde = document.getElementById("letrasConTilde");

let coro = "Salve oh patria mil veces oh patria!\
¡Gloria a ti!\
¡Gloria a ti!\
Ya tu pecho, tu pecho rebosa,\
gozo y paz ya tu pecho rebosa,\
y tu frente, tu frente radiosa\
más que el sol contemplamos lucir.";

let charArray = Array.from(coro.toLowerCase());

let arrayVocales = ['a', 'e', 'i', 'o', 'u'];
let arrayConsonates = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'ñ', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
let arrayTildes = ['á', 'é', 'í', 'ó', 'ú'];
let res1 = 0, res2 = 0, res3 = 0;
for (const caracter of charArray) {
    for (const vocal of arrayVocales) {
        if (caracter == vocal) {
            res1++;
        }
    }
    for (const vocal of arrayConsonates) {
        if (caracter == vocal) {
            res2++;
        }
    }
    for (const tilde of arrayTildes) {
        if (caracter == tilde) {
            res3++;
            res1++;
        }
    }
}
//
vocales.textContent = res1;
consonantes.textContent = res2;
letrasConTilde.textContent = res3;











