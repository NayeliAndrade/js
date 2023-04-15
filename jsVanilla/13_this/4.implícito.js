/* 4.enlazamiento implicito */

const familia = {
    nombre: "nayeli",
    saludar: function (){
        console.log(`hola, me llamo ${this.nombre}`);
    },
    hermano: {
        nombre: "erick",
        saludar: function (){
            console.log(`hola, me llamo ${this.nombre} y soy el hermano`);
    }
}
}

familia.saludar()
familia.hermano.saludar()