const personList = [];
class Product {
    id = 0;
    name = "";
    displayName = "";
    sku = 0;
    price = 0;
    description = "";
    constructor(id, name, displayName, sku, price, description) {
        this.id = id;
        this.name = name;
        this.displayName = displayName;
        this.sku = sku;
        this.price = price;
        this.description = description;
    }
}

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
function setListeners() {
    const form = document.querySelector(".form")
    form.addEventListener("submit", function (e) {
        e.preventDefault()
        getData()
    });
}

(({ productCount }) => {
    //listes
    createProduct(productCount);
    setListeners()
})({ productCount: 5, random: { max: 500, min: 100 } });
