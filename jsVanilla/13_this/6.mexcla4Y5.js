/* mezcla de 4 y 5  */
const sacha = {
    nombre: "sacha",
    twitter: "@sacha",
    saludar: function () {
        function seguimeEnTwitter() {
            console.log(`seguime en Twitter: ${this.twitter}`);
        }
        console.log(`hola me llamo ${this.nombre}`);
        seguimeEnTwitter(); /* enlazamiento por defecto twitter undefined*/
    },
};
sacha.saludar(); /* enlazamiento implicito */

/* para que twitter obtenga el valor es:  */
const juan = {
    nombre: "sacha",
    twitter: "@sacha",
    saludar: function () {
        console.log(`hola me llamo ${this.nombre}`);
        this.seguimeEnTwitter();
    },
    seguimeEnTwitter: function () {
        console.log(`seguime en Twitter: ${this.twitter}`);
    },
};
juan.saludar();