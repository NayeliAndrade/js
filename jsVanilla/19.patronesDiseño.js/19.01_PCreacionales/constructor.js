/* crear objetos */
const miObjeto = {
    miPropiedad: "valor",
    miMetodo:()=>{
        console.log("hago cosas");
    }
}

/* patron constructor */

class MiClase{
    constructor(p1){
        this.propiedad = p1,
        this.propiedad2 = p2,
        this.metodo = ()=>{
            //metodo
        }
    }
}

const instancia = new MiClase(4,2)
console.log(instancia);