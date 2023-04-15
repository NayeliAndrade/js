const sacha = {
    nombre: "sacha",
    saludar: function (){
        console.log(`hola, me llamo ${this.nombre}`);
    }
}

const boton = document.querySelector("#miBoton");
boton.addEventListener("click",sacha.saludar.bind(sacha))