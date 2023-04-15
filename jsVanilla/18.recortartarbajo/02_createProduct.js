import { Product } from "./01_clase.js";
import { randomGeneric } from "./03_randomGeneric.js";
import {personList} from "./import.js"

function createProduct(productCount) {
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