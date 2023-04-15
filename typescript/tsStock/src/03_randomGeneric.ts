function randomGeneric(type:string, { minRange, maxRange }:{minRange:number, maxRange:number}) {
    let randomResult;
    switch (type) {
        case "number":
            randomResult = Math.round(Math.random() * 100000000);           
            break;
        case "string": 
        randomResult = [...new Array(maxRange)].reduce((acc:number, item:number, i) => {
            acc += i;
            return acc;
          }, "Producto");
        default:
            break;
    }
    return randomResult
}

export {randomGeneric}

/* interface randomGenericProps{
    minRange:number, 
    maxRange:number
} */
/* function randomGeneric(type:string, { minRange, maxRange }:)randomGenericProps { */


