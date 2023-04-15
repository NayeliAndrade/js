"use strict"
const sacha = {
    nombre: "sacha",
    twitter: "@sacha",
    saludar: function () {
        const seguimeEnTwitter = () => {
            console.log(`seguime en Twitter: ${this.twitter}`); /* se guarda el dato */
        }
        console.log(`hola me llamo ${this.nombre}`);
        seguimeEnTwitter(); 
    },
};
sacha.saludar();

/* errores */
const sacha2 = {
    nombre: "sacha",
    twitter: "@sacha",
    /* el dato se vuelve global */
    saludar: ()=> {
        const seguimeEnTwitter = () => {
            console.log(`seguime en Twitter: ${this.twitter}`); 
        }
        console.log(`hola me llamo ${this.nombre}`);
        seguimeEnTwitter(); 
    },
};
sacha2.saludar();