import {personList} from "./main"

function printStock() {
    /* const [{id,name,displayName,sku,price,description}] = personList
    console.log("p",personList); */
   personList.forEach(function(data){
    console.log(data);
    
    let container = document.querySelector(".container") as HTMLElement;
    let template = document.querySelector(".templateStuffs") as HTMLTemplateElement
    let templateContent = template.content;
    let fragment = document.createDocumentFragment();
    
    templateContent.querySelector(".name")!.textContent = `${data.name}`
    templateContent.querySelector(".id")!.textContent = `${data.id}`
    templateContent.querySelector(".sku")!.textContent = `${data.sku}`
    templateContent.querySelector(".price")!.textContent = `${data.price}`
    templateContent.querySelector(".description")!.textContent = `${data.description}`

    const clone = templateContent.cloneNode(true)
    fragment.appendChild(clone)
    container.appendChild(fragment)
   });
}
export {printStock}