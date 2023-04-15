const sacha = {
    nombre: "sacha",
    saludar: function (gritando, conDespedida){
        const saludandoNormal = `Hola me llamo ${this.nombre}`
        const despedidaNormal = "chau"

        const saludo = gritando ?
        saludandoNormal.toUpperCase(): saludandoNormal;
        const despedida = gritando ? 
        despedidaNormal.toUpperCase(): despedidaNormal;

        console.log(saludo);

        if(conDespedida){
            console.log(despedida);
        }
    }
}

const pepe = {nombre:"pepe"}
sacha.saludar.call(pepe,true,true)
sacha.saludar.apply(pepe,[true,true])