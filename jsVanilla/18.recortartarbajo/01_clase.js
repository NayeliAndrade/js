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

export {Product}