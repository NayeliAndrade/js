/* con un objeto crea prototypos  */

const perro = {
    raza:"kilterrier",
    ladrar: function(){
        console.log(`guaw, soy un ${this.raza}`);
    }
}

const kiltro = Object.create(perro)

kiltro.ladrar()
kiltro.raza= "super perro"
kiltro.ladrar()