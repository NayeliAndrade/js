const users = [
    { edad: 17, nombre: 'Nicolas', apellido: 'Soto' },
    { edad: 18, nombre: 'Chanchito', apellido: 'Feliz' },
    { edad: 12, nombre: 'Loreto', apellido: 'Fernandes' },
    { edad: 1, nombre: 'Sofia', apellido: 'Zapata' },
];

/* const traerPrimerInfante = data =>{
    const infantes = data.filter(x =>x.edad < 2)
    const primerInfante = infante[0]
    const infante = {
        nombreCompleto: `${primerInfante.nombre} ${primerInfante.apellido}`,
        edad: primerInfante.edad,
    }
    return `${infante.nombreCompleto} tiene ${infante.edad}`
} */

//#region archivo herramientas
const compose = (...fns) => x => fns.reduceRight((y,f) => f(y), x)
/* x primer valor */


const filter = f => xs => xs.filter(f)

const head = x = xs => xs[0]

const formateo = x => ({
    nombreCompleto: `${x.nombre} ${x.apellido}`,
    edad: x.edad,
})

const formato = x => `${x.nombreCompleto} tiene ${x.edad}`
//#endregion

const traerPrimerInfante = compose (
    formato,
    formateo,
    head,
    /* xs => xs.filter(x.edad < 2), */
    filter(x => x.edad < 2),
)
/* formato(formateo(head(data.filter(x => x.edad < 2)))) */
console.log(traerPrimerInfante(users));