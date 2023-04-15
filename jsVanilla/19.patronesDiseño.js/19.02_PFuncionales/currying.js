const suma = (a, b) => a + b;

suma(1, 5);

/* tecnica para transformar funciones que recibe solo un argumento */

const suma2 = (a) => (b) => a + b;
const suma3 = suma2(1);

suma3(5)
