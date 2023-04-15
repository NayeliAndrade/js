var mascotas = ['perro', 'pollo', 'gato', 'perro', 'pollo', 'pollo', 'conejo'];

var recuentosDeMascota = mascotas.reduce(function(obj, mascota){
    if (!obj[mascota]) {
        obj[mascota] = 1;
    } else {
        obj[mascota]++;
    }
    return obj;
}, {});

console.log(recuentosDeMascota); 