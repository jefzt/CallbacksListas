console.log("Actividad 5");

const productos = [
    { id: 1, nombre: "mouse", precio: 50000 },
    { id: 2, nombre: "teclado", precio: 150000 },
    { id: 3, nombre: "monitor", precio: 900000 }
];

const teclado = productos.find(function(p){
    return p.nombre === "teclado";
});

const caro = productos.find(function(p){
    return p.precio > 100000;
});

console.log(teclado);
console.log(caro);

console.log("---------------");
