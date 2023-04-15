/* añadir elementos  array*/
const fruits = ["banana","watermelon","pear"];

const fruits2 = [...fruits,"papaya"];
console.log(...fruits,"papaya");
console.log(fruits2);

/* copia de array  */
const number = [1,2,3]
let numberCopy = [...number]

numberCopy[3] = 9

console.log(number);
console.log(numberCopy);

/* array anidado */
const stuff = ["table","tv",
    ["2","58"]
]
console.log(...stuff,["4","8"]);

/* concadenar matrices */
let peces = ['emperador', 'salmón'];
let insectos = ['hormiga', 'mosquito'];
console.log([...peces, ...insectos]);

/* objetos */
const people = {
    name: "alex",
    lastName: "garcia"
}
console.log({...people});

/* copia nueva */

let copyPeople = {...people}
copyPeople.name = "nino"

console.log({people});
console.log({copyPeople});

/* concadenacion objetos  */
/* console.log(...people, ...copyPeople); */


/* funciones */
let algunosNumeros = [12, 56, 88];

const addNumeros = (a, b, c) => {
    console.log(a + b + c);
}
addNumeros(...algunosNumeros);

/* funcions2  */

function multiple(...params){
    return params;
}
console.log(1,2,3);

/* function plus(a,b,...c){
    result +=n
    return result
} */



/* https://www.youtube.com/watch?v=gFvWNjVy-wc */
/* https://www.freecodecamp.org/espanol/news/operadores-rest-spread-de-javascript-cual-es-la-diferencia/ */

