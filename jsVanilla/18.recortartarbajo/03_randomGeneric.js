function randomGeneric(type, { minRange, maxRange }) {
    let randomResult;
    switch (type) {
        case "number":
            randomResult = Math.round(Math.random() * 100000000);           
            break;
        case "string": 
        randomResult = [...new Array(maxRange)].reduce((acc, item, i) => {
            acc += i;
            return acc;
          }, "Producto");
        default:
            break;
    }
    return randomResult
}

export {randomGeneric}