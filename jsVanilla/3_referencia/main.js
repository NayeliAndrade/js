/* let a = 5;
let b = a;
a=2;

let c = "hola";
let d = c;
c = "hola2";

console.log(a);
console.log(b);

console.log(c);
console.log(d); */

/* usan el mismo espacio de memoria por lo tanto se cambian en la linea 23 */
/* const maestro = {
    calificacion1: [1,2,3],
    calificacion2: [4,5,6],
    calificacion3: [7,8,9],
    calificacion4: [10,11,12]
}


const dog = animal;

dog.name = "Tom"

console.log(animal);
console.log(dog); */


const celulares = [
    {aplicaciones: ['Facebook', 'Twitter', 'Instagram'], bateria: 90, os: 'Android'},
    {aplicaciones: ['Telegram', 'Pinterest', 'QR Scanner'], bateria: 80, os: 'iOS'},
    {aplicaciones: ['Whatsapp', 'Messenger', 'Steam App'], bateria: 60, os: 'Android'}
] 

for (i of celulares){
    console.log(i.aplicaciones);
    console.log(i.bateria);
    console.log(i.os);
}

/* console.log(celulares[1].aplicaciones);
celulares[1].aplicaciones = 50;
console.log(celulares, "nuevo"); */

/* copia del array original */
console.log("---");
const copia = celulares;
console.log(copia);

console.log("---");
copia[2].aplicaciones = ["tinder","snap chat"]
console.log(copia);
