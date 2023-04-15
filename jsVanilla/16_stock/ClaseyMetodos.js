/* (function () {
    stockProducts();
})(); */

let data = [];
class Purchases {
    constructor(stuff, cost) {
        this.stuff = stuff;
        this.cost = cost;
        this.stockProducts
    }
    stockProducts(){
        const form = document
        .querySelector("form")
        .addEventListener("submit", function (e) {
            e.preventDefault();
            let stuffInput = document.querySelector("#stuff").value;
            let costInput = document.querySelector("#cost").value;

            let purchases = new Purchases(stuffInput, costInput);
            console.log(purchases);
            data.push(purchases);
            console.log("data", data);
            Purchases.prototype.printStock(stuffInput,costInput)
        });
    }
    printStock(stuffInput,costInput) {
        let container = document.querySelector(".container")
        console.log(container);
        let template = document.querySelector(".templateStuffs").content;
        let fragment = document.createDocumentFragment();
    
        
            template.querySelector("h2").textContent = `${stuffInput}`;
            template.querySelector("p").textContent = `${costInput}`;
    
            const clone = template.cloneNode(true);
            fragment.appendChild(clone);
        
        container.appendChild(fragment)
    }
}
Purchases.prototype.stockProducts()
console.log(data);