const users = [
    { edad: 17, nombre: 'Nicolas', apellido: 'Soto' },
    { edad: 32, nombre: 'Chanchito', apellido: 'Feliz' },
    { edad: 8, nombre: 'Loreto', apellido: 'Fernandes' },
    { edad: 10, nombre: 'Sofia', apellido: 'Zapata' },
];

const head = xs => xs[0]
const formateo = x => ({nombreCompleto: `${x.nombre} ${x.apellido}`,edad: `${x.edad}`,})
const formato = x => `${x.nombreCompleto} tiene ${x.edad} años`
const filter = data => data.filter( x => x.edad <= 10)

const traerPrimerInfante = formato(formateo(head(filter(users))))
console.log(traerPrimerInfante);
/* function traerPrimerInfante(data){
    const infantes = data.filter( x => x.edad <= 10)
    const primerInfante = infantes[0]
    const infante = {
        nombreCompleto: `${primerInfante.nombre} ${primerInfante.apellido}`,
        edad: `${primerInfante.edad}`,
    }
    return `${infante.nombreCompleto} ${infante.edad}`
}

console.log(traerPrimerInfante(users)); */

















/* const head = xs => xs[0] 

const formateo = i => ({
    nombreCompleto: `${i.nombre} ${i.apellido}`,
    edad: `${i.edad}`,
})
const formato = x => `${x.nombreCompleto} tiene ${x.edad} años`

const traerPrimerInfante = data => formato(formateo(head(data.filter( x => x.edad <= 10))))

console.log(traerPrimerInfante(users)); */
