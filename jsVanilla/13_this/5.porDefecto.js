/*  "use strict"; */
/* 5.enlazamiento por defecto */
/* referencia window quitar modo estricto */
function global() {
    this.a = 2;
}
global();
console.log(a);


const arregloPersonas = [];

const persona = function (nombre, apellido) {
    (this.nombre = nombre),
        (this.apellido = apellido),
        (this.persona = function () {
            let nombreCompleto = this.nombre + " " + this.apellido;
            console.log(nombreCompleto);
            arregloPersonas.push(nombreCompleto);
            console.log(arregloPersonas);
        });
    this.saludar = function () {
        console.log(`saludar ${nombre}`);
    };
};

const edgar = new persona("edgar", "sw");
edgar.persona();
const piero = new persona("piero", "js");
piero.persona();
const naye = new persona("naye", "sd");
naye.persona();
const marcelo = new persona("marcelo", "rs");
marcelo.persona();
