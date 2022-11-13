/*
Ingresando los tres lados de un triángulo, imprimir los ángulos de cada vértice y especificar 
el tipo de triángulo.
*/
const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", angulosTipo_Triangulo)

function angulosTipo_Triangulo(evento) {
  evento.preventDefault();
  let lado_a = parseFloat(document.querySelector("#lado_a").value);
  let lado_b = parseFloat(document.querySelector("#lado_b").value);
  let lado_c = parseFloat(document.querySelector("#lado_c").value);
  let anguloA = document.getElementById("anguloA");
  let anguloB = document.getElementById("anguloB");
  let anguloC = document.getElementById("anguloC");
  let tipo = document.getElementById("tipo");
  let contadorAgudo = 0;
  let contadorRecto = 0;
  let contadorObtuso = 0;
  let clasificador;
  //
  let leyCosenos = Math.acos(-((Math.pow(lado_a, 2) - Math.pow(lado_b, 2) - Math.pow(lado_c, 2)) / (2 * lado_b * lado_c)));
  let respuestaA = (leyCosenos * (180 / Math.PI)).toFixed(2);
  let leySenos = Math.asin((lado_b * Math.sin(leyCosenos.toFixed(3))) / lado_a);
  let respuestB = (leySenos * (180 / Math.PI)).toFixed(2);
  let respuestaC = (180 - (parseFloat(respuestaA) + parseFloat(respuestB))).toFixed(2);
  let array = [Math.trunc(respuestaA), Math.trunc(respuestB), Math.trunc(respuestaC)];
  for (const iterator of array) {
    if (iterator < 90) {
      contadorAgudo++;
    }
    if (iterator == 90) {
      contadorRecto++;
    }
    if (iterator > 90) {
      contadorObtuso++;
    }
  }
  if (contadorAgudo == 3) {
    clasificador = "Acutángulo"
  }
  if (contadorRecto == 1) {
    clasificador = "Rectángulo";
  }
  if (contadorObtuso == 1) {
    clasificador = "Obtusángulo";
  }
  //
  anguloA.textContent = "Ángulo A: " + respuestaA + "°";
  anguloB.textContent = "Ángulo B: " + respuestB + "°";
  anguloC.textContent = "Ángulo C: " + respuestaC + "°";
  tipo.textContent = clasificador;
}

