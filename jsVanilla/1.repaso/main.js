/* tipos de datos */
/* primitivos */
let text = "this is text"
let number = 123
let boolean1 = true

document.write("add text bowser") /* renderizar */
alert("true")

/* no primitivos */
let object = [1, 2, 3]
let dictionary = { PDX: 'portland' }

let telephone = 7771234567

/* operadores  */
let operation1 = 1 + 2
let operation2 = 1 - 2
let operation3 = 1 * 2
let operation4 = 2 / 2

/* comparativos */
4 == 4

/* compara los valores */
0 == "0"
/* compara los valores y los tipos */
0 === "0"

/* && = y  */

/* || = o */

/* condicionales */
let autorizado = true;
if (autorizado) {
    document.write("Bienvenido");

}
else {
    alert("No autirizado")
}

/* argumentos dentro del parentesis */
function sumar(a,b){
    return a + b
}

sumar(2,3)

let lista = [1,2,3]

for (Elemento of lista){
    let suma = sumar(Elemento,5);
    console.log(suma);
}

/* let i = 0;
while (true){
    console.log(i++);
} */

/* programacion orientado a objetos */

/* let animal = {
    nombre: "perro",
    sonido: function sonido(){
        console.log("woof");
    }
}

animal.nombre
animal.sonido() */

class Animal {
    constructor(nombre,sonido){
        this.nombre = nombre;
        this.sonido = sonido;
    }
    hazSonido() {
        console.log("soy un " + this.nombre + " y " + this.sonido);
    }
}

let perro = new Animal("perro","woof");
let gato = new Animal("gato","miaw");
let tigre = new Animal("tigre","grr");

perro.hazSonido()
gato.hazSonido()
tigre.hazSonido()