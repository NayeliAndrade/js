let gente = [
    {nombre:"aaron", edad: 65},
    {nombre: "beth", edad: 2},
    {nombre: "cara", edad: 13},
    {nombre: "daniel", edad: 3},
    {nombre: "ella", edad: 25},
    {nombre: "fin", edad: 1},
    {nombre: "george", edad: 43}
]

let pequeños = gente.filter(persona => persona.edad <=3)
console.log(pequeños);

let mayoresEdad = gente.filter(persona => persona.edad >= 18)
console.log(mayoresEdad);


let ganadores = ["Anna", "Beth", "Cara"];

let oro = ganadores.filter((ganador, indice) => indice == 0);
let plata = ganadores.filter((ganador, indice) => indice == 1);
let bronce = ganadores.filter((ganador, indice) => indice == 2);

console.log(`Oro ganador: ${oro}, ganador de plata: ${plata}, ganador de bronze: ${bronce}`);

// "Oro ganador: Anna, Plata ganadora: Beth, Bronce ganador: Cara"