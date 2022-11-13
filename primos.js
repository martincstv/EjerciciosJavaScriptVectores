let numero = 5;

console.log(determinarPrimo(numero));



let vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

console.log(vector);



function determinarPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return numero !== 1;
}

let cantPrimos = 0;
for (const iterator of vector) {
    if (determinarPrimo(iterator)) {
        cantPrimos++;
    }
}

console.log(cantPrimos);

