(function () {
    setListeners()
})();
let data = [];

//#region class
class Purchases {
    constructor(stuff, cost) {
        this.stuff = stuff
        this.cost = cost
    }
}
//#endregion
//#region functions 
function stockProducts() {
    let stuffInput = document.querySelector("#stuff").value
    let costInput = document.querySelector("#cost").value

    let purchases = new Purchases(stuffInput, costInput)
    console.log(purchases)
    data.push(purchases)
    console.log("data", data)
    printStock(stuffInput, costInput)
}

function printStock(stuffInput, costInput) {
    let container = document.querySelector(".container");
    console.log(container);
    let template = document.querySelector(".templateStuffs").content;
    let fragment = document.createDocumentFragment();

    template.querySelector("h2").textContent = `${stuffInput}`
    template.querySelector("p").textContent = `${costInput}`

    const clone = template.cloneNode(true)
    fragment.appendChild(clone)

    container.appendChild(fragment)
}
//#endregion
//#region listeners
function setListeners() {
    const form = document.querySelector("form")
    form.addEventListener("submit", function (e) {
        e.preventDefault()
        stockProducts()
    });
}
//#endregion
