const maestro = [
    {materias: ["mate","ingles","fisica"]},
    {materias: ["mate2","ingles2","fisica2"]},
    {materias: ["mate3","ingles3","fisica3"]}
]

const duplicado = maestro;
console.log(duplicado);
console.log(...duplicado);


const maestro2 = [
    {materias: ["mate", "ingles", "fisica"]},
    {materias: ["mate2", "ingles2", "fisica2"]},
    {materias: ["mate3", "ingles3", "fisica3"]},
    {alumnos: {nombre:"Juan", nombre:"pedro"}},

]

/* asignar un valor nuevo*/
maestro2[3].alumnos.nombre = "juana"
console.log(maestro2);