console.log("Actividad 1");

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function operar(a, b, cb) {
    return cb(a, b);
}

console.log(operar(5, 3, sumar));
console.log(operar(5, 3, restar));
console.log(operar(5, 3, multiplicar));

console.log("---------------");
