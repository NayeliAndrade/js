import { Product } from "../src/01_clase";
import { randomGeneric } from "../src/03_randomGeneric";
import { personList } from "./main";


function createProduct(productCount:number) {
    for (let i = 0; i < productCount; i++) {
        const product = new Product(
            randomGeneric("number", { minRange:8, maxRange:8 }),
            "product"+i,
            "DisplayName"+i,
            randomGeneric("number", { minRange:8, maxRange:8 }),
            randomGeneric("number", { minRange:8, maxRange:8 }),
            randomGeneric("string", { minRange:8, maxRange:8 })
        );
        personList.push(product);
        console.log("array", personList);
    }
}

export {createProduct}
