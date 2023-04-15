import {personList} from "./import.js"

function printStock() {
    /* const [{id,name,displayName,sku,price,description}] = personList
    console.log("p",personList); */
   personList.forEach(function(data){
    let container = document.querySelector(".container");
    console.log(container);
    let template = document.querySelector(".templateStuffs").content;
    let fragment = document.createDocumentFragment();
    
    template.querySelector(".name").textContent = `${data.name}`
    template.querySelector(".id").textContent = `${data.id}`
    template.querySelector(".sku").textContent = `${data.sku}`
    template.querySelector(".price").textContent = `${data.price}`
    template.querySelector(".description").textContent = `${data.description}`

    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
    container.appendChild(fragment)
   });
}
export {printStock}