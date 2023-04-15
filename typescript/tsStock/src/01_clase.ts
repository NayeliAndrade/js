class Product {
    id:Number = 0;
    name:string = "";
    displayName:string = "";
    sku:number = 0;
    price:number = 0;
    description:string = "";
    constructor(id:number, name:string, displayName:string, sku:number, price:number, description:string) {
        this.id = id;
        this.name = name;
        this.displayName = displayName;
        this.sku = sku;
        this.price = price;
        this.description = description;
    }
}

export {Product}
