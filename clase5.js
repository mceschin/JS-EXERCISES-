
// .forEach:

// let array = [ 3 ,4, 5, 6, 7, 8, 9 ]

// function mostrarEnConsola (n) {
//     console.log(n);
// };
// array.forEach( mostrarEnConsola)


// array.forEach(function(n) {
//     console.log(n*n)
// }
// )

let peliculas = [
    { titulo: "batman", puntuacion: "8"},
    { titulo: "ironman", puntuacion: "9"},
    { titulo: "hulk" , puntuacion: "10"} ] ;


let pei2 = peliculas.map( (comPeli )=> console.log(comPeli.titulo + "-" + comPeli.puntuacion + "/101"));





// peliculas.forEach( function(comPeli)
// { console.log( comPeli.titulo + "-" + comPeli.puntuacion + "/100");
// });

// Funciones Flechas:
// const sumar = (x,y) => {
//     console.log (x+y)
// }

// const multi = (x) => {
//     console.log (x*4)
// }
