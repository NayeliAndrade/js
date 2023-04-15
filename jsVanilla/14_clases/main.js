/* parametro function hola(parametro) */
/* argumento hola(argumento) */

// 1.- crear objetos, de manera más dinamica
/* create object more dinamically */

class Purchases {
    constructor(number, stuff, cost) {
        this.stuff = stuff;
        this.cost = cost;
        this.number = number;
    }
    buyFruits() {
        console.log(
            `I buy ${this.number} ${this.stuff}, the cost was ${this.cost} `
        );
    }
}

const apple = new Purchases(3, "apple", 10);
apple.buyFruits();

const banana = new Purchases(2, "bananas", 17);
banana.buyFruits();

const pear = new Purchases({
  stuff: "pear",
  cost: 5,
  number: 7
})

pear.buyFruits();




// 1.- crear objetos, de manera más dinamica
class Persona {
    constructor(user) {
        // método inicial, la acción inicial de la función.
        this.name = user.name;
        this.last_name = user.last_name;
        this.age = user.age;
        this.isAlive = true;
    }

    sayHello() {
        // método, forma parte de una clase.
        console.log("My name is " + this.name + " " + this.last_name);
    }

    youAreDead() {
        this.isAlive = false;
    }

    revive() {
        this.sayHello();
        this.isAlive = true;
    }
}

const Piero = new Persona({
    last_name: "Garcia",
    name: "Piero",
    age: 20,
});

const Nayeli = new Persona({
    last_name: "Adrade",
    name: "Nayeli",
    age: 13,
});

Nayeli.sayHello();

console.log(Piero);
console.log(Nayeli);

/* function Persona(user) {
  this.user = user.name;
  this.age = user.age;
  this.last_name = user.last_name;
  this.isAlive = true;
}

Persona.prototype.youAreDead = function() {
  this.isAlive = false;
}

const Piero = new Persona({
  name: 'Piero',
  last_name: 'Garcia',
  age: 12,
})

Piero.youAreDead();
console.log(Piero); */
