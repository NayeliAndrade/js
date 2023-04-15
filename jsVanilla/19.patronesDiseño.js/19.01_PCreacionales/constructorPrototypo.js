/* modifica el prototypo */

class MiClase{
    constructor(p1){
        this.propiedad = p1,
        this.propiedad2 = p2
    }
        metodo(){
            //metodo
        }
    }


const instancia = new MiClase(4,2)
console.log(instancia.__proto__);
