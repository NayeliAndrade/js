import { Product } from "./01_clase.js";
import { randomGeneric } from "./03_randomGeneric.js";
import {printStock} from "./05_printStock.js"
import {personList} from "./import.js"

function getData(){
    let nameInput = document.querySelector("#name").value
    let descriptionInput = document.querySelector("#description").value
    const product = new Product(
        randomGeneric("number", { minRange:8, maxRange:8 }),
        nameInput,
        nameInput,
        randomGeneric("number", { minRange:8, maxRange:8 }),
        randomGeneric("number", { minRange:8, maxRange:8 }),
        descriptionInput
    );
    personList.push(product);
    console.log("array", personList);
    printStock()
}

export {getData}