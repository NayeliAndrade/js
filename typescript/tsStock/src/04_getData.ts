import { Product } from "../src/01_clase";
import { randomGeneric } from "../src/03_randomGeneric";
import { printStock } from "../src/05_printStock";
import { personList } from "./main";

function getData(){
    let nameInput = document.querySelector("#name") as HTMLInputElement
    let descriptionInput = document.querySelector("#description") as HTMLInputElement
    
    let nameInputValue = nameInput.value
    let descriptionInputValue = descriptionInput.value

    const product = new Product(
        randomGeneric("number", { minRange:8, maxRange:8 }),
        nameInputValue,
        nameInputValue,
        randomGeneric("number", { minRange:8, maxRange:8 }),
        randomGeneric("number", { minRange:8, maxRange:8 }),
        descriptionInputValue
    );
    personList.push(product);
    console.log("array", personList);
    printStock()
}

export {getData}