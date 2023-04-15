"use strict";

const teacher = {
    name: "Brown",
    address: {
        area: {
            street: "Oxford university road",
            street: "Florencia",
            street: "Faraon"
        },
        city: "London",
        country: "England"
    }
}

Object.freeze(teacher) //no deja modificarlo, no permite añadir ni eliminar

Object.seal(teacher) // Modificar propiedades existentes, no permite añadir ni eliminar

// Reescribir un valor
//teacher.name = "Monitor Curvo"

//Si no existe, o lo va a añadir

//teacher.imagen = "imagen.jpg"

delete teacher.country

console.log(teacher);

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: 'Juan',
    premium: true
}

const {nombre, precio, disponible } = producto
const {nombre: nombreCliente, premium} = cliente

console.log(nombre, precio, disponible)
console.log(nombreCliente, premium)

//unir 2 objetos o mas 

const nuevoObjeto2 = {
    producto: {...producto},
    cliente: {...cliente}
}

console.log(nuevoObjeto2);